import * as BABYLON from "@babylonjs/core/Legacy/legacy";

export function getMaterial(image)
{
  var nodeMaterial = new BABYLON.NodeMaterial("node");

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
var backgroundtex = new BABYLON.TextureBlock("backgroundtex");
backgroundtex.visibleInInspector = false;
backgroundtex.visibleOnFrame = false;
backgroundtex.target = 3;
backgroundtex.convertToGammaSpace = false;
backgroundtex.convertToLinearSpace = false;
backgroundtex.disableLevelMultiplication = false;
backgroundtex.texture.wrapU = 1;
backgroundtex.texture.wrapV = 1;
backgroundtex.texture.uAng = 0;
backgroundtex.texture.vAng = 0;
backgroundtex.texture.wAng = 0;
backgroundtex.texture.uOffset = 0;
backgroundtex.texture.vOffset = 0;
backgroundtex.texture.uScale = 1;
backgroundtex.texture.vScale = 1;
backgroundtex.texture.coordinatesMode = 7;

// InputBlock
var uv = new BABYLON.InputBlock("uv");
uv.visibleInInspector = false;
uv.visibleOnFrame = false;
uv.target = 1;
uv.setAsAttribute("uv");

// TextureBlock
var Texture = new BABYLON.TextureBlock("Texture2222");
Texture.visibleInInspector = false;
Texture.visibleOnFrame = false;
Texture.target = 3;
Texture.convertToGammaSpace = false;
Texture.convertToLinearSpace = false;
Texture.disableLevelMultiplication = false;

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
uv.output.connectTo(backgroundtex.uv);
backgroundtex.g.connectTo(ColorMerger.g);
backgroundtex.b.connectTo(ColorMerger.b);
ColorSplitter.a.connectTo(ColorMerger.a);
ColorMerger.rgba.connectTo(FragmentOutput.rgba);

// Output nodes
nodeMaterial.addOutputNode(VertexOutput);
nodeMaterial.addOutputNode(FragmentOutput);
nodeMaterial.build();
return nodeMaterial;

}

// Export list