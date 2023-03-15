import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import {greyscale} from './greyscale.js';
import {gradient} from './gradient.js';

export default class RShape {
  static createShape(element,scene,i,img,engine,index) {
        let iW = element.w;
        let iH = element.h;
        let scale = this.scaleImage(element.w,element.h,iW,iH);
        //console.log(element);
        let obj;
        if(element.shape=="disc") {
          obj = BABYLON.MeshBuilder.CreateDisc(element.id, {renderingGroupId:4});
          //console.log(i);
          obj.position.z = i;
        } else if(element.shape=="rect"){
          const f = new BABYLON.Vector4(0,0, 1, 1); // front image = half the whole image along the width 
          obj = BABYLON.MeshBuilder.CreatePlane(element.id,{});
          obj.scaling = new BABYLON.Vector3(element.w, element.h, 5); 
        }
        obj.renderingGroupId = index;
        var objMat = new BABYLON.StandardMaterial(scene);
        if(element.hasImage) {
          if(img.type=="video/mp4") {
            var vidtex2 = new BABYLON.VideoTexture("vidtex2",img.image, scene);
            vidtex2.video.muted = true;
            objMat.diffuseTexture = vidtex2;
            objMat.roughness = 1;
            objMat.emissiveColor = new BABYLON.Color3.White();
          }else {
              objMat.diffuseTexture = new BABYLON.Texture(img.image);
              objMat.diffuseTexture.hasAlpha = true;
              objMat.useAlphaFromDiffuseTexture = true;
              objMat.backFaceCulling = false;
          }
        } else {
          //console.log('its a disc and has a color?');
          //console.log('its a disc and has a color?');
          objMat.diffuseColor = new BABYLON.Color3.FromHexString(element.color);
          obj.scaling = new BABYLON.Vector3(element.w, element.h, 5);
          obj.position.x = element.x;
          obj.position.y = element.y;
          obj.visibility = element.vis;
        }
        if(element.effects) {
          for (let e = 0; e < element.effects.length; e++) {
            const effect = element.effects[e];
            //console.log(element);
            if (effect.type == 'duotone') {
              let smat = greyscale(scene,img,effect);
              obj.material = smat;
              //console.log(obj.material);
            } else if(effect.type == 'grad') {
              //console.log('grad new');
              let smat = gradient(scene,img,effect);
              smat.color1 =  effect.c1;
              smat.color2 = effect.c2;
              //console.log(smat.color1);
              obj.material = smat;
            } else if(effect.type="repeater") {
              //console.log('repeater?');
              let colorData = new Float32Array(4 * 10);
                var buffer = new BABYLON.VertexBuffer(engine, colorData, BABYLON.VertexBuffer.ColorKind, false, false, 4, true);
                obj.setVerticesBuffer(buffer);
              for (let i = 0; i < effect.number; i++) {
                var newInstance = obj.createInstance("i" + i);
                newInstance.position.y = newInstance.position.y + i;        
              }
            }
          }
        } else {
          //console.log('nope');
          obj.material = objMat;
        }
        //obj.material = objMat;
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
        
        obj.addBehavior(pointerDragBehavior);
        return obj;
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
  static updateShape(img,element,scene,i,type) {
    let obj = scene.getMeshByName(`${element.id}`);
    obj.dispose();
    this.createShape(element,scene,i,img,engine)
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
