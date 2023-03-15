import { LitElement, html, css } from 'lit';
import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import RObject from "./render/RObject.js";
// import { circleOfConfusionPixelShader } from '@babylonjs/core/Shaders/circleOfConfusion.fragment';
//import { Application } from '@pixi/app';
console.info('LOADED');
export class BabylonCanvas extends LitElement {

  // static get observedAttribute() {
  //   return ['document'];
  // }
  static get properties() {
    return {
      title: { type: String },
      images: {type: Array},
      picker_open: {type: Boolean},
      kit: {type: Object},
      engine: {type:Object},
      record: {type:Boolean},
    };
  }
  static get styles() {
    return css`
      babylon-scene {
            width: 100%;
            height: 100%;
        }
      .canvas {

        outline: none;
        position: absolute;
        width:328px;
        /* margin-left:30px; */

        height:328px;
        /* margin-top:123px; */
        /* border-radius: 12px; */
        overflow:hidden;

      }
      .select {
        position: absolute;
        left:130px;
        top:200px;
        height:220px;
        width:140px;
        z-index:10;
        border:2px solid #864CCC;
      }
      .debug {
        position: fixed;
        top:1px;
        width:1000px;
      }
      #pixic {
        position: fixed;
        top:100px;
        left:-4000px;
        border:10px solid red;
      }


    `;
  }

  constructor() {
    super();
    this.engine={};
    this.scene=null;
    this.canvas = null;
    this.pixic = null;
    this.pixictx = null;
    this.kit = {};
    this.images = new Array;
    this.activeObject = null;


    // Our built-in 'sphere' shape. Params: name, subdivs, size, scene

    // Render every frame

  }


  pickItem(e) {
   // console.log(e);
    let event = new CustomEvent('pick-item', {
      detail: {
        message: e
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);

  }
  getMeshScreenPosition( scene, canvas, mesh) {
            let pos = BABYLON.Vector3.Project(mesh.position,
                BABYLON.Matrix.Identity(),
                scene.getTransformMatrix(),
                { 'x': 0, 'y': 0, 'width': canvas.width, 'height': canvas.height }
            );
             return {
                x: (Math.trunc(Math.round(pos.x) * 1) / 1),
                y: (Math.trunc(Math.round(pos.y) * 1) / 1)
       }
    }
  updated(changedProperties) {
    //prepare for processing
    //console.log(this.kit);
    let kitData = this.kit.kit;
    let nodes = kitData.nodes;
    let root = nodes[kitData.rootNodeId];
    let renderNodes = root.children;
    let scene = this.scene;
    //console.log(renderNodes);
    renderNodes.forEach((itemId,index)=>{
      let node = nodes[itemId];
     // console.log(itemId);
      switch (node.type) {
        case 'rectangle':
          //console.log('process rectangle');
          RObject.createObject(scene,this.engine,node,this.images,this.pixic,this.app,index,this.kit);
          break;
        case 'ellipse':
          RObject.createObject(scene,this.engine,node,this.images,this.pixic,this.app,index,this.kit);
          //console.log('process ellipse');
          break;
        case 'image':
          //console.log('process image');
          RObject.createObject(scene,this.engine,node,this.images,this.pixic,this.app,index,this.kit);
          break;
        case 'text':
          RObject.createObject(scene,this.engine,node,this.images,this.pixic,this.app,index,this.kit);
          //console.log('process text');
          break;
        default:
          //console.log(`no renderer for type ${node.type}`);
          break;
      }


    })




    //console.log("updated");
    //console.log(changedProperties);

    //console.log(this.kitId);
    //console.log(this.kit.id);
    if(!this.kitId && this.kit.id) {
      this.kitId = this.kit.id;
      //console.log("setting new kit");
    }
    changedProperties.forEach((oldValue, propName) => {
      if(propName=='kitId') {
        for (var i = 0; i < scene.meshes.length; i++) {
          scene.meshes[i].dispose();
          i--;
        };
        for (var i = 0; i < scene.particleSystems.length; i++) {
          scene.particleSystems[i].dispose();
          console.log('p removed');
          i--;
        };
      }
    });
    //console.log(this.engine);

    scene.onPointerDown = (function (evt, pickResult) {
      // We try to pick an object
      //console.log('pick>>>');
      if (pickResult.hit) {
        //console.log(pickResult.pickedMesh)
        this.pickItem(pickResult.pickedMesh);
          this.activeObject = pickResult.pickedMesh;
          //console.log(this.activeMesh);
          let meshPositionOnWindow = this.getMeshScreenPosition(this.scene,this.canvas, pickResult.pickedMesh);
          //console.log(meshPositionOnWindow);
      }
    }).bind(this);
    //console.log(this.record == true ? "Record???":"Nope");
    if(this.record) {
      console.log("recording!");
      var recorder = new BABYLON.VideoRecorder(this.engine);
      recorder.startRecording("test.webm");
      const event = new CustomEvent('record-video', {
        detail: {
          message: 'record',
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    }
  };
  getEngine() {
    return this.engine;
  }
  setupScene() {
    this.scene = new BABYLON.Scene(this.engine);
    let scene = this.scene;
    var hl = new BABYLON.HighlightLayer("hl1", scene);
    this.hl = hl;
    scene.onPointerObservable.add((function () {
      //console.log(scene.pointerX, scene.pointerY);
      //console.log(this.activeMesh);
    }).bind(this), BABYLON.PointerEventTypes.POINTERMOVE);
    scene.clearColor = new BABYLON.Color3(0.9, 0.9, 0.9);
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -5000), scene);
    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.fov = 0.1;
    var hemi1 = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, -1, 0), scene);
    var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, -10, 1), scene);
    light.intensity=10;
    hemi1.intensity = 1;
    hemi1.groundColor = new BABYLON.Color3(1,1,1);
    light.specular = new BABYLON.Color3(1,0,1);
    hemi1.specular = BABYLON.Color3.Black();
    return scene;
  }
  firstUpdated(changedProperties) {
    //console.log('changed props')
    //console.log(changedProperties);
    //console.log('firstUpdated')
    const canvas = this.shadowRoot.querySelector('#babylon-canvas');
    const pcanvas = this.shadowRoot.querySelector('#pixic');
    this.canvas = canvas;
    this.pixic = pcanvas;
    let app = new PIXI.Application({
      width: 785,
      height: 500,
      antialias: true,
      transparent: true,
      resolution: 2,
      autoResize:true,
      view: this.pixic,
      backgroundAlpha:0,
    }
    );
    this.app = app;
    this.engine = new BABYLON.Engine(canvas);
    this.engine.setHardwareScalingLevel(0.5);
    let engine = this.engine;
    let scene = this.setupScene();
    let alpha = 0;
    //console.log(this.children);
    this.engine.runRenderLoop(() => {

      if(this.kit.children) {
        for (let i = 0; i < this.kit.children.length; i++) {
          const element = this.kit.children[i];
          if(element.animations) {
            //console.log(element);
            let mesh = scene.getMeshByName(element.id);
           // console.log(mesh);
            for (let y = 0; y < element.animations.length; y++) {
              const anim = element.animations[y];
              let rad = (Math.sin(anim.wl* alpha)*anim.a) * (Math.PI/180);
              mesh.rotation[anim.attr] = rad;
            }

            //mesh.rotation.z = alpha
          }

        }
      }

      alpha+= 0.01;
      scene.render();
    }).bind(this);
  }
  scaleImage(cH,cW,iH,iW) {
    let ratio = iH/iW;
    let h = cH * .95;
    let w = h * ratio;
    return {
      h:h/50,
      w:w/50
    }
  }
  render() {
    return html`
     <canvas class="canvas" id="babylon-canvas"></canvas>
     <canvas id="pixic" width="1000" height="1000"></canvas>
    `;
  }
}

customElements.define('babylon-canvas', BabylonCanvas);
