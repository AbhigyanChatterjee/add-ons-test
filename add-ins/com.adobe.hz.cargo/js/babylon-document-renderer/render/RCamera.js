import * as BABYLON from 'babylonjs';
import {greyscale} from './greyscale.js';
import {gradient} from './gradient.js';
import {stroke} from './stroke.js';

export default class RCamera {
  static createCamera (element,scene,i,type) {
    const f = new BABYLON.Vector4(0,0, 0.5, 10); // front image = half the whole image along the width 
        const plane = BABYLON.MeshBuilder.CreatePlane(`${element.id}`, {renderGroupId:element.rg, frontUVs: f,height:4,width:4});
        plane.rotation.z = Math.PI;
  
     
    
    
    var mat = new BABYLON.StandardMaterial("mat", scene);
      mat.diffuseColor = BABYLON.Color3.Black();
  
      BABYLON.VideoTexture.CreateFromWebCam(scene, function(videoTexture) {
        videoTexture.uScale=0.75;  
        videoTexture.uOffset=0.15;  
        mat.emissiveTexture = videoTexture;
          mat.emissiveTexture = videoTexture;
          //console.log(mat);
          plane.material = mat;
          plane.renderingGroupId = element.rg;
          //console.log(plane);
      }, { maxWidth: 256, maxHeight: 256 });
      return plane;
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
