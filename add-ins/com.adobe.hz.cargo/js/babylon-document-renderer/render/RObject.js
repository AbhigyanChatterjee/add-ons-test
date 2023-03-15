import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import {getMaterial} from "./mat.js";
import {duotone} from './duotone.js';
export default class RObject {
  
  static createObject(scene,engine,element,images,pixic,app,index,kit) {

          let obj = scene.getMeshByName(`${element.id}`);
          
          if(obj) {
            obj.dispose();
            //console.log(obj);
         
          }
          
        const f = new BABYLON.Vector4(0,0, 1, 1);
        let height = element.height;
        let width = element.width;
        let geo;
        //console.log(kit);
        let objMat = new BABYLON.StandardMaterial(scene);
        switch (element.type) {
          case 'ellipse':
            geo = BABYLON.MeshBuilder.CreateDisc(`${element.id}`,{frontUVs: f,radius:width/2});
            geo.position.x = element.x+width/2;
            geo.position.y = -element.y-height/2;
            geo.setPivotPoint(new BABYLON.Vector3(-width/2, height/2 , 0));
            geo.rotation.z = -element.rotate;
            break;
          case 'rectangle':
            //console.log('rectangle');
            geo = BABYLON.MeshBuilder.CreatePlane(`${element.id}`, {height:height,width:width});
            geo.position.x = element.x+width/2;
            geo.position.y = -element.y-height/2;
            geo.setPivotPoint(new BABYLON.Vector3(-width/2, height/2 , 0));
            geo.rotation.z = -element.rotate;
            break;
          case 'text':
            //console.log('text');
            geo = BABYLON.MeshBuilder.CreatePlane(`${element.id}`, {height:500,width:785});
            geo.position.x = 0;
            geo.position.y = 0;
            break;
          case 'image':
            geo = BABYLON.MeshBuilder.CreatePlane(`${element.id}`, {height:height,width:width});
            geo.position.x = element.x+width/2;
            geo.position.y = -element.y-height/2;
            geo.setPivotPoint(new BABYLON.Vector3(-width/2, height/2 , 0));
            geo.rotation.z = -element.rotate;
            break;
          default:
            break;
        }
        
        
        
        //console.log(index);
        geo.position.z = -0.1*index;
        geo.renderingGroupId=element.rg || 0;
        
        //Add the canvas that Pixi automatically created for you to the HTML document
        //document.body.appendChild(app.view);
        
        //load an image and run the `setup` function when it's done
        //console.log('text rendering')
        let style = new PIXI.TextStyle({
          fontSize: element.fontSize,
          fill: element.color,
          stroke: 0,
          strokeThickness: 0,
          dropShadow: false,
          align:"left",
          fontFamily: element.font,
          wordWrap:true,
          padding:20,
          lineHeight:element.fontSize,
          wordWrapWidth:element.width,
        });
        if(element.type == 'text') {
          let tmessage = new PIXI.Text(element.text,style);
          let renderTexture = PIXI.RenderTexture.create(785, 500);
          tmessage.x = element.x + 785/2;
          tmessage.y= element.y + 500/2;
          tmessage.angle = element.rotate*180/Math.PI;
          //app.stage.addChild(tmessage);
          app.renderer.render(tmessage, renderTexture);
          let image = app.renderer.plugins.extract.base64(renderTexture);
          objMat.diffuseTexture = new BABYLON.Texture(image, scene);
          objMat.diffuseTexture.hasAlpha = true
          objMat.useAlphaFromDiffuseTexture = true;
          geo.material = objMat;
        } else if (element.type=='image') {
          if(element.data.shader) {
            let effect = element.data.shader;
            //console.log(effect);
            let oldMaterial = scene.getMaterialByName(effect.id);
            if(oldMaterial) {
                let newColor = new BABYLON.Color3.FromHexString('#000000');

                var mainTexture = new BABYLON.Texture(element.data.image, scene);

                oldMaterial.setTexture("textureSampler", mainTexture);
                new BABYLON.Color3.HSVtoRGBToRef(kit.kit.nodes[effect.id].data.h,kit.kit.nodes[effect.id].data.s,kit.kit.nodes[effect.id].data.v,newColor);
                //console.log(newColor);
                //console.log(kit.kit.nodes[effect.id].data.i);
                oldMaterial.setVector4("priColor", new BABYLON.Vector4(newColor.r,newColor.g,newColor.b,1.0));
                oldMaterial.setFloat("intense", kit.kit.nodes[effect.id].data.i);
                geo.material = oldMaterial;
            } else {
              //console.log(element.id);
              let smat = duotone(scene,element.data.image,element.data.shader,kit.kit);
              geo.material = smat;
              //console.log('adding shader');
            }
              
            
            
            //console.log(geo.material);
          } else {
            objMat.diffuseTexture = new BABYLON.Texture(element.data.image, scene);
            objMat.diffuseTexture.hasAlpha = true;
            geo.material = objMat;
          }
          
          
        } else {
          objMat.diffuseColor=new BABYLON.Color3.FromHexString(element.data.color);
          geo.material = objMat;
        }
        
  }
  static updateObject(scene,engine,element,images,pixic,app,index,kit) {
    //console.log('update');  
   
    this.createObject(scene,engine,element,images,pixic,app,index)
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
