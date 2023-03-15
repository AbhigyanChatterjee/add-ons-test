import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import {greyscale} from './greyscale.js';
import {gradient} from './gradient.js';
import {stroke} from './stroke.js';

export default class RFacet {
  static createImage(img,maskimg,element,scene,i,type) {
        let iW = element.w;
        let iH = element.h;
        let scale = this.scaleImage(element.w,element.h,iW,iH);
        const mat = new BABYLON.StandardMaterial("");
          mat.diffuseTexture = new BABYLON.Texture( img);
          //mat.diffuseTexture.hasAlpha = true;
          //mat.useAlphaFromDiffuseTexture = true;
          mat.backFaceCulling = false;
          //console.log(maskimg);
          mat.opacityTexture = new BABYLON.Texture(maskimg, scene, false, true, BABYLON.Texture.NEAREST_SAMPLINGMODE);
          mat.opacityTexture.hasAlpha = true;
          mat.opacityTexture.getAlphaFromRGB  = true;
          mat.opacityTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
          mat.opacityTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
          mat.opacityTexture.uScale = 1.02;
          mat.opacityTexture.vScale = 1.01;
          mat.opacityTexture.uOffset = -0.006;

          //mat.hasAlpha = true;
          

        const f = new BABYLON.Vector4(0,0, 1, 1); // front image = half the whole image along the width 
        const plane = BABYLON.MeshBuilder.CreatePlane(`${element.id}`, {renderGroupId:element.rg, frontUVs: f,height:scale.h,width:scale.w});
        plane.renderingGroupId = element.rg;
        plane.position.z = -0.1*i;
        plane.position.x = element.x;
        plane.position.y = element.y;
        plane.rotation.z = element.r;
        plane.renderingGroupId = element.rg;
        //console.log(plane);
        let useShader
        if(element.effects) {
          for (let e = 0; e < element.effects.length; e++) {
            const effect = element.effects[e];
            //console.log(element);
            if (effect.type == 'duotone') {
              
              let smat = greyscale(scene,img,effect);
              plane.material = smat;
            } else if(effect.type == 'stroke') {
              //console.log('stroke new');
              let smat = stroke(scene,img,effect);
              plane.material = smat;
            }
            else if(effect.type == 'grad') {
              //console.log('grad new');
              let smat = gradient(scene,img,effect);
              plane.material = smat;
              
            } 
          }
        } else {
          
          plane.material = mat;
          //console.log(plane.material);
        }
        if(element.objEffects) {

          for (let e = 0; e < element.objEffects.length; e++) {
            const effect = element.objEffects[e];
          if (effect.type = 'repeater'){
            plane.isVisible = false;
            for (let i = 0; i < effect.number; i++) {
              //console.log('repeater' + i);
              var newInstance = plane.createInstance(`${element.id}_${i}`);
              newInstance.scaling = new BABYLON.Vector3(0.45,0.45,0.45);
              newInstance.position.y =2 * (newInstance.position.y + Math.sin(360/effect.number * i * Math.PI / 180));
              newInstance.position.x = 2*  (newInstance.position.x + Math.cos(360/effect.number * i *  Math.PI / 180));
            }
          }
        }
        }
        //let smat = greyscale(scene,img);

        plane.actionManager = new BABYLON.ActionManager(scene);
        var pointerDragBehavior = new BABYLON.PointerDragBehavior({dragPlaneNormal: new BABYLON.Vector3(0,0,1)});
        pointerDragBehavior.useObjectOrientationForDragging = false;
        pointerDragBehavior.onDragStartObservable.add((event)=>{
          //console.log("dragStart");
          ///console.log(event);
        })
        pointerDragBehavior.onDragObservable.add((event)=>{
          //console.log("drag");
          //console.log(event);
        })
        pointerDragBehavior.onDragEndObservable.add((event)=>{
          //console.log("dragEnd");
          //console.log(event);
        })
        //plane2.addBehavior(pointerDragBehavior);

        plane.addBehavior(pointerDragBehavior);
        return plane;
       // image.left = `${(-200+i*50)}px`;
       // advancedTexture.addControl(image);
        //const mat = new BABYLON.StandardMaterial("");
	      //mat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/tile1.jpg");

       // const f = new BABYLON.Vector4(0,0, 0.1, 1); // front image = half the whole image along the width 
	     // const b = new BABYLON.Vector4(1,0, 1, 1); // back image = second half along the width
        //const plane = BABYLON.MeshBuilder.CreatePlane("plane", {frontUVs: f});
        //plane.material = mat;
        //const plane = CreatePlane("plane", options, scene);
  }
  static updateImage(img,element,scene,i,type) {
    
	      
    
   
  }
  
  static scaleImage(cH,cW,iH,iW) {
    // let ratio = iH/iW;
    let h = cH;
    let w = cW;
    //console.log(h,w);
    return {
      h:h/50,
      w:w/50
    }
  }
}
