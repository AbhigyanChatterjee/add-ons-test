import * as BABYLON from "@babylonjs/core/Legacy/legacy";


export default class RText {
  static createText(element,scene,i,update,engine) {
    let plane;
    let iW = element.w;
        let iH = element.h;
        let scale = this.scaleImage(500,500,iW,iH);
        
        var font_type = element.font;
	
	//Set width an height for plane
    var planeWidth = element.w;
    var planeHeight = element.h;
    if(update) {
      plane = scene.getMeshByName(`${element.id}`);
    } else {
      plane = BABYLON.MeshBuilder.CreatePlane(element.id, {width:planeWidth, height:planeHeight}, scene);
    }
    //Create plane
    //var plane = BABYLON.MeshBuilder.CreatePlane(element.id, {width:planeWidth, height:planeHeight}, scene);
    plane.renderingGroupId = element.rg;
    plane.position.z = -0.1*i;
    plane.position.x = element.x;
    plane.position.y = element.y;
   
    //Set width and height for dynamic texture using same multiplier
    var DTWidth = planeWidth * 60;
    var DTHeight = planeHeight * 60;

    //Set text
    var text = element.text;
    
    //Create dynamic texture
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", {width:DTWidth, height:DTHeight}, scene);
    
    //Check width of text for given font type at any size of font
    var ctx = dynamicTexture.getContext();
	  var size = 12; //any value will work
    ctx.font = size + "px " + font_type;
    var textWidth = ctx.measureText(text).width;
    
    //Calculate ratio of text width to size of font used
    var ratio = textWidth/size;
	
	//set font to be actually used to write text on dynamic texture
    var font_size = Math.floor(DTWidth / (ratio * 1)); //size of multiplier (1) can be adjusted, increase for smaller text
    var font = font_size + "px " + font_type;
    dynamicTexture.hasAlpha = true;
	//Draw text
    dynamicTexture.drawText(text, null, null, font, element.color, 'transparent', true);
    plane.rotation.z = BABYLON.Tools.ToRadians(element.r);
    //create material
    var mat = new BABYLON.StandardMaterial("mat", scene);
    mat.diffuseTexture = dynamicTexture;
    
    //apply material
    plane.material = mat;
    plane.material.alpha = 1;
    plane.material.backFaceCulling = false;
    if(element.animation) {
      //console.log('has animation');
    }
    if(element.objEffects) {

      for (let e = 0; e < element.objEffects.length; e++) {
        const effect = element.objEffects[e];
        if (effect.type = 'repeater'){
          let scale = chroma.scale(['yellow', '008ae5']);
          plane.isVisible = false;
          plane.registerInstancedBuffer("color", 3);
          for (let i = 0; i < Math.round(effect.number); i++) {
            //console.log('repeater' + i);
            //console.log()
            var newInstance = plane.createInstance(`${element.id}_${i}`);
            newInstance.instancedBuffers.color = new BABYLON.Color3.FromHexString(scale(i/effect.number).hex())
            newInstance.scaling = new BABYLON.Vector3(effect.scale,effect.scale,effect.scale);
            newInstance.position.y = newInstance.position.y + i/3;
            newInstance.position.x = newInstance.position.x+1/3;
            newInstance.position.z = newInstance.position.z+1/3;
            
          }
        }
      }
    }
   // var alpha = 0;
   // var circleFinished = false;
//     if(alpha == 0) {
//     scene.registerBeforeRender(function () {
//       plane.rotation.z = Math.sin(2* alpha)/4 
//       //plane.rotation.z = alpha;
      
//            alpha += 0.01;
//       // one further rotation to complete circle
//   })
// }


        
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
  static updateText(element,scene,i) {
    let obj = scene.getMeshByName(`${element.id}`);
    //console.log(obj);
    
    obj.dispose();
    //this.createText(element,scene,i,update,engine);
   
  }
  
  static scaleImage(cH,cW,iH,iW) {
    let ratio = iH/iW;
    let h = cH * .95;
    let w = h * ratio;
    return {
      h:h/50,
      w:w/50
    }
  }
}
