import * as BABYLON from "@babylonjs/core/Legacy/legacy";
import {greyscale} from './greyscale.js';
import {duotone_r} from './shaders/duotone_r.js';
import {gradient} from './gradient.js';
import {stroke} from './stroke.js';

export default class RImage {
  static createImage(img,element,scene,i,type,facet,engine) {
        let iW = element.w;
        let iH = element.h;
        let scale = this.scaleImage(element.w,element.h,iW,iH);
        const mat = new BABYLON.StandardMaterial("");
        if(type=="video/mp4") {
          var vidtex = new BABYLON.VideoTexture("vidtex",img, scene);
          vidtex.video.muted = true;
          mat.diffuseTexture = vidtex;
          mat.roughness = 1;
	        mat.emissiveColor = new BABYLON.Color3.White();
        } else if(type=="camera") {
          //new BABYLON.VideoTexture("vidtex",img, scene);
          var vidtex = new  BABYLON.VideoTexture.CreateFromWebCam(scene, function (videoTexture) {
            videoTexture.video.muted = true;
            mat.diffuseTexture = vidtex;
          }, { maxWidth: 256, maxHeight: 256 });
         
          mat.roughness = 1;
	        mat.emissiveColor = new BABYLON.Color3.White();
        }
        else {
          //console.log(type);
          
          mat.diffuseTexture = new BABYLON.Texture( img);
          mat.diffuseTexture.hasAlpha = true;
          mat.useAlphaFromDiffuseTexture = true;
          mat.backFaceCulling = false;
        }
        
        const f = new BABYLON.Vector4(0,0, 1, 1); // front image = half the whole image along the width 
        const plane = BABYLON.MeshBuilder.CreatePlane(`${element.id}`, {renderGroupId:element.rg, frontUVs: f,height:scale.h,width:scale.w});
       
        
        plane.position.z = -0.1*i;
        plane.position.x = element.x;
        plane.position.y = element.y;
        plane.renderingGroupId = element.rg;
        let useShader
        let effects;
        //console.log(facet);
        //console.log(element.bgEffects);
        if(element.bgEffects && facet == 'bg')  {
          //console.log('bg effects');
          
          //console.log(element.bgEffects)
          effects = element.bgEffects;
        } else if(element.effects) {
          //console.log('no bg effects');
          //console.log(element);
          effects = element.effects;
        } else {
          //console.log('no effects');
          plane.material = mat;
        }
          
          for (let e = 0; e < effects.length; e++) {
            const effect = effects[e];
           // console.log(element);
            if (effect.type == 'duotone') {
             // console.log('duo');
              let smat = greyscale(scene,img,effect);
              plane.material = smat;
            } else if(effect.type == 'duotone_r') {
              
                //console.log('duo');
                let smat = duotone_r(scene,img,effect);
                plane.material = smat;
              
            } else if (effect.type == 'red-noise') {
              var nodeMaterial2 = new BABYLON.NodeMaterial("node");

// InputBlock
var position = new BABYLON.InputBlock("position");
position.visibleInInspector = false;
position.visibleOnFrame = false;
position.target = 1;
position.setAsAttribute("position");

// TransformBlock
var WorldPos = new BABYLON.TransformBlock("WorldPos");
WorldPos.visibleInInspector = false;
WorldPos.visibleOnFrame = false;
WorldPos.target = 1;
WorldPos.complementZ = 0;
WorldPos.complementW = 1;

// InputBlock
var World = new BABYLON.InputBlock("World");
World.visibleInInspector = false;
World.visibleOnFrame = false;
World.target = 1;
World.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);

// TransformBlock
var WorldPosViewProjectionTransform = new BABYLON.TransformBlock("WorldPos * ViewProjectionTransform");
WorldPosViewProjectionTransform.visibleInInspector = false;
WorldPosViewProjectionTransform.visibleOnFrame = false;
WorldPosViewProjectionTransform.target = 1;
WorldPosViewProjectionTransform.complementZ = 0;
WorldPosViewProjectionTransform.complementW = 1;

// InputBlock
var ViewProjection = new BABYLON.InputBlock("ViewProjection");
ViewProjection.visibleInInspector = false;
ViewProjection.visibleOnFrame = false;
ViewProjection.target = 1;
ViewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);

// VertexOutputBlock
var VertexOutput = new BABYLON.VertexOutputBlock("VertexOutput");
VertexOutput.visibleInInspector = false;
VertexOutput.visibleOnFrame = false;
VertexOutput.target = 1;

// SimplexPerlin3DBlock
var SimplexPerlinD = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
SimplexPerlinD.visibleInInspector = false;
SimplexPerlinD.visibleOnFrame = false;
SimplexPerlinD.target = 4;

// MultiplyBlock
var Multiply = new BABYLON.MultiplyBlock("Multiply");
Multiply.visibleInInspector = false;
Multiply.visibleOnFrame = false;
Multiply.target = 4;

// ColorSplitterBlock
var ColorSplitter = new BABYLON.ColorSplitterBlock("ColorSplitter");
ColorSplitter.visibleInInspector = false;
ColorSplitter.visibleOnFrame = false;
ColorSplitter.target = 4;

// InputBlock
var color = new BABYLON.InputBlock("color");
color.visibleInInspector = false;
color.visibleOnFrame = false;
color.target = 1;
color.value = new BABYLON.Color4(0.7764705882352941, 0.09411764705882353, 0.09411764705882353, 1);
color.isConstant = false;

// ColorMergerBlock
var ColorMerger = new BABYLON.ColorMergerBlock("ColorMerger");
ColorMerger.visibleInInspector = false;
ColorMerger.visibleOnFrame = false;
ColorMerger.target = 4;

// TextureBlock
var Texture = new BABYLON.TextureBlock("Texture22");
Texture.visibleInInspector = false;
Texture.visibleOnFrame = false;
Texture.target = 3;
Texture.convertToGammaSpace = false;
Texture.convertToLinearSpace = false;
Texture.disableLevelMultiplication = false;
Texture.texture = new BABYLON.Texture(img, null, false, false, 3);
Texture.texture.wrapU = 1;
Texture.texture.wrapV = 1;
Texture.texture.uAng = 0;
Texture.texture.vAng = 0;
Texture.texture.wAng = 0;
Texture.texture.uOffset = 0;
Texture.texture.vOffset = 0;
Texture.texture.uScale = 1;
Texture.texture.vScale = 1;
Texture.texture.coordinatesMode = 7;

// InputBlock
var uv = new BABYLON.InputBlock("uv");
uv.visibleInInspector = false;
uv.visibleOnFrame = false;
uv.target = 1;
uv.setAsAttribute("uv");

// FragmentOutputBlock
var FragmentOutput = new BABYLON.FragmentOutputBlock("FragmentOutput");
FragmentOutput.visibleInInspector = false;
FragmentOutput.visibleOnFrame = false;
FragmentOutput.target = 2;
FragmentOutput.convertToGammaSpace = false;
FragmentOutput.convertToLinearSpace = false;

// Connections
position.output.connectTo(WorldPos.vector);
World.output.connectTo(WorldPos.transform);
WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
color.output.connectTo(ColorSplitter.rgba);
ColorSplitter.r.connectTo(Multiply.left);
position.output.connectTo(SimplexPerlinD.seed);
SimplexPerlinD.output.connectTo(Multiply.right);
Multiply.output.connectTo(ColorMerger.r);
uv.output.connectTo(Texture.uv);
Texture.g.connectTo(ColorMerger.g);
Texture.b.connectTo(ColorMerger.b);
ColorSplitter.a.connectTo(ColorMerger.a);
ColorMerger.rgba.connectTo(FragmentOutput.rgba);

// Output nodes
nodeMaterial.addOutputNode(VertexOutput);
nodeMaterial.addOutputNode(FragmentOutput);
nodeMaterial.build();

plane.material = nodeMaterial;
            }
            else if(effect.type == 'stroke') {
             // console.log('stroke new');
              let smat = stroke(scene,img,effect);
              plane.material = smat;
            }
            else if(effect.type == 'grad') {
              //console.log('grad new');
              let smat = gradient(scene,img,effect);
              plane.material = smat;
              
            } 
          }
        
        if(element.objEffects) {
          //console.log(element.objEffects);
          for (let o = 0; o < element.objEffects.length; o++) {
            
            const effect = element.objEffects[o];
            if (effect.type = 'repeater') {
              
              plane.isVisible = false;
              //plane.registerInstancedBuffer("color", 4);
              //plane.instancedBuffers.color = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
              //plane.setVerticesBuffer();
              let scale;
              //console.log(effect.color);
              
              
              
                //console.log('repeater' + i);
                
                //newInstance.instancedBuffers.color = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 1);
                
                if(effect.rtype=="linear") {
                  for (let i = 0; i < Math.round(effect.number); i++) {
                  var newInstance = plane.createInstance(`${element.id}_${i}`);
                  newInstance.scaling = new BABYLON.Vector3(effect.scale,effect.scale,effect.scale);
                  newInstance.position.y = (newInstance.position.y + effect.yoffset*i);
                  newInstance.position.x =  (newInstance.position.x + effect.xoffset*i);
                  }
                } else if (effect.rtype=="radial") {
                  for (let i = 0; i < Math.round(effect.number); i++) {
                  var newInstance = plane.createInstance(`${element.id}_${i}`);
                  
                  newInstance.scaling = new BABYLON.Vector3(effect.scale,effect.scale,effect.scale);
                  newInstance.position.y =effect.xoffset * (newInstance.position.y + Math.sin(360/Math.round(effect.number) * i * Math.PI / 180));
                  newInstance.position.x = effect.yoffset *  (newInstance.position.x + Math.cos(360/Math.round(effect.number) * i *  Math.PI / 180));
                  
                }
                  
                } else if (effect.rtype=="grid") {
                  //console.log('start');
                 // console.log(element.id);
                  let row = 0;
                  let rotation = 0;
                  for (let row= 0; row < effect.number; row++) {
                    
                    for (let col = 0; col < effect.number; col++) {
                      var newInstance = plane.createInstance(`${element.id}_${row}_${col}`);
                      newInstance.scaling = new BABYLON.Vector3(effect.scale,effect.scale,effect.scale);
                      newInstance.position.y = (newInstance.position.y)-(row*effect.yoffset);
                      newInstance.position.x = (newInstance.position.x)+(col*effect.xoffset);
                      if(effect.randScale) {
                        let rscale = effect.scale + (Math.random()*effect.randScale);
                        newInstance.scaling = new BABYLON.Vector3(rscale,rscale,rscale);
                      }
                      if(effect.randRotation) {
                        let rad = Math.random()*effect.randRotation * (Math.PI/180);
                        rotation = rotation + rad;
                        //console.log(rotation, effect.randScale);
                        newInstance.rotation.z = rotation;
                      }
                      
                     
                    }
                    
                  }
                  
                
               
                // newInstance.visibility = 0.3;
              }
              
              
              

              
            }
          }
        }
        //let smat = greyscale(scene,img);
        
        
        
        plane.actionManager = new BABYLON.ActionManager(scene);
        plane.outlineColor = new BABYLON.Color3.FromHexString("#5C5CE0");
        plane.actionManager.registerAction(
          new BABYLON.InterpolateValueAction(
              BABYLON.ActionManager.OnPointerOverTrigger,
              plane,
              'outlineWidth',
              3,
              25
          )
        );
        // if(element.animation) {
        //   var alpha = 0;
        //   var circleFinished = false;
        //   if(alpha == 0) {
        //     scene.registerBeforeRender(function () {
        //       plane.rotation.z = Math.sin(4* alpha)/10 
        //       //plane.rotation.z = alpha;
              
        //            alpha += 0.01;
        //       // one further rotation to complete circle
                    
                    
                  
               
        //   })
        //   }
        //   }
          
        
        plane.actionManager.registerAction(
          new BABYLON.InterpolateValueAction(
              BABYLON.ActionManager.OnPointerOutTrigger,
              plane,
              'outlineWidth',
              0,
              25
          )
        );
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
  static updateImage(img,element,scene,i,type,facet,engine) {
    let obj = scene.getMeshByName(`${element.id}`);

    
    obj.dispose();
    
    this.createImage(img,element,scene,i,type,facet,engine)

    
	      
    
   
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
