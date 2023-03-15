export default {
  "tags": null,
  "ignoreAlpha": false,
  "maxSimultaneousLights": 4,
  "mode": 0,
  "id": "node",
  "name": "node",
  "checkReadyOnEveryCall": false,
  "checkReadyOnlyOnce": false,
  "state": "",
  "alpha": 1,
  "backFaceCulling": true,
  "cullBackFaces": true,
  "sideOrientation": 1,
  "alphaMode": 2,
  "_needDepthPrePass": false,
  "disableDepthWrite": false,
  "disableColorWrite": false,
  "forceDepthWrite": false,
  "depthFunction": 0,
  "separateCullingPass": false,
  "fogEnabled": true,
  "pointSize": 1,
  "zOffset": 0,
  "pointsCloud": false,
  "fillMode": 0,
  "editorData": {
    "locations": [
      {
        "blockId": 9,
        "x": 740,
        "y": 120
      },
      {
        "blockId": 8,
        "x": 500,
        "y": 100
      },
      {
        "blockId": 6,
        "x": 240,
        "y": 40
      },
      {
        "blockId": 4,
        "x": 0,
        "y": 0
      },
      {
        "blockId": 5,
        "x": 0,
        "y": 120
      },
      {
        "blockId": 7,
        "x": 240,
        "y": 180
      },
      {
        "blockId": 11,
        "x": 440,
        "y": 360
      },
      {
        "blockId": 10,
        "x": -380,
        "y": 700
      },
      {
        "blockId": 30,
        "x": -620,
        "y": 320
      },
      {
        "blockId": 31,
        "x": -900,
        "y": 320
      },
      {
        "blockId": 114,
        "x": -240,
        "y": 440
      },
      {
        "blockId": 128,
        "x": 140,
        "y": 480
      }
    ],
    "frames": [],
    "x": 673.2356361672316,
    "y": -107.24792634905737,
    "zoom": 1.0852404708476562
  },
  "customType": "BABYLON.NodeMaterial",
  "outputNodes": [
    9,
    11
  ],
  "blocks": [
    {
      "customType": "BABYLON.VertexOutputBlock",
      "id": 9,
      "name": "VertexOutput",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 1,
      "inputs": [
        {
          "name": "vector",
          "inputName": "vector",
          "targetBlockId": 8,
          "targetConnectionName": "output",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        }
      ],
      "outputs": []
    },
    {
      "customType": "BABYLON.TransformBlock",
      "id": 8,
      "name": "WorldPos * ViewProjectionTransform",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 1,
      "inputs": [
        {
          "name": "vector",
          "inputName": "vector",
          "targetBlockId": 6,
          "targetConnectionName": "output",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        },
        {
          "name": "transform",
          "inputName": "transform",
          "targetBlockId": 7,
          "targetConnectionName": "output",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        }
      ],
      "outputs": [
        {
          "name": "output"
        },
        {
          "name": "xyz"
        }
      ],
      "complementZ": 0,
      "complementW": 1
    },
    {
      "customType": "BABYLON.TransformBlock",
      "id": 6,
      "name": "WorldPos",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 1,
      "inputs": [
        {
          "name": "vector",
          "inputName": "vector",
          "targetBlockId": 4,
          "targetConnectionName": "output",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        },
        {
          "name": "transform",
          "inputName": "transform",
          "targetBlockId": 5,
          "targetConnectionName": "output",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        }
      ],
      "outputs": [
        {
          "name": "output"
        },
        {
          "name": "xyz"
        }
      ],
      "complementZ": 0,
      "complementW": 1
    },
    {
      "customType": "BABYLON.InputBlock",
      "id": 4,
      "name": "position",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 1,
      "inputs": [],
      "outputs": [
        {
          "name": "output"
        }
      ],
      "type": 8,
      "mode": 1,
      "systemValue": null,
      "animationType": 0,
      "min": 0,
      "max": 0,
      "isBoolean": false,
      "matrixMode": 0,
      "isConstant": false,
      "groupInInspector": "",
      "convertToGammaSpace": false,
      "convertToLinearSpace": false
    },
    {
      "customType": "BABYLON.InputBlock",
      "id": 5,
      "name": "World",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 1,
      "inputs": [],
      "outputs": [
        {
          "name": "output"
        }
      ],
      "type": 128,
      "mode": 0,
      "systemValue": 1,
      "animationType": 0,
      "min": 0,
      "max": 0,
      "isBoolean": false,
      "matrixMode": 0,
      "isConstant": false,
      "groupInInspector": "",
      "convertToGammaSpace": false,
      "convertToLinearSpace": false
    },
    {
      "customType": "BABYLON.InputBlock",
      "id": 7,
      "name": "ViewProjection",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 1,
      "inputs": [],
      "outputs": [
        {
          "name": "output"
        }
      ],
      "type": 128,
      "mode": 0,
      "systemValue": 4,
      "animationType": 0,
      "min": 0,
      "max": 0,
      "isBoolean": false,
      "matrixMode": 0,
      "isConstant": false,
      "groupInInspector": "",
      "convertToGammaSpace": false,
      "convertToLinearSpace": false
    },
    {
      "customType": "BABYLON.FragmentOutputBlock",
      "id": 11,
      "name": "FragmentOutput",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 2,
      "inputs": [
        {
          "name": "rgba",
          "inputName": "rgba",
          "targetBlockId": 128,
          "targetConnectionName": "rgba",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        },
        {
          "name": "rgb"
        },
        {
          "name": "a"
        }
      ],
      "outputs": [],
      "convertToGammaSpace": false,
      "convertToLinearSpace": false
    },
    {
      "customType": "BABYLON.ColorMergerBlock",
      "id": 128,
      "name": "ColorMerger",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 4,
      "inputs": [
        {
          "name": "rgb "
        },
        {
          "name": "r",
          "inputName": "r",
          "targetBlockId": 114,
          "targetConnectionName": "b",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        },
        {
          "name": "g",
          "inputName": "g",
          "targetBlockId": 114,
          "targetConnectionName": "b",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        },
        {
          "name": "b",
          "inputName": "b",
          "targetBlockId": 114,
          "targetConnectionName": "b",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        },
        {
          "name": "a",
          "inputName": "a",
          "targetBlockId": 114,
          "targetConnectionName": "a",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        }
      ],
      "outputs": [
        {
          "name": "rgba"
        },
        {
          "name": "rgb"
        }
      ]
    },
    {
      "customType": "BABYLON.ColorSplitterBlock",
      "id": 114,
      "name": "ColorSplitter",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 4,
      "inputs": [
        {
          "name": "rgba",
          "inputName": "rgba",
          "targetBlockId": 30,
          "targetConnectionName": "rgba",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        },
        {
          "name": "rgb "
        }
      ],
      "outputs": [
        {
          "name": "rgb"
        },
        {
          "name": "r"
        },
        {
          "name": "g"
        },
        {
          "name": "b"
        },
        {
          "name": "a"
        }
      ]
    },
    {
      "customType": "BABYLON.TextureBlock",
      "id": 30,
      "name": "Texture",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 3,
      "inputs": [
        {
          "name": "uv",
          "inputName": "uv",
          "targetBlockId": 31,
          "targetConnectionName": "output",
          "isExposedOnFrame": true,
          "exposedPortPosition": -1
        }
      ],
      "outputs": [
        {
          "name": "rgba"
        },
        {
          "name": "rgb"
        },
        {
          "name": "r"
        },
        {
          "name": "g"
        },
        {
          "name": "b"
        },
        {
          "name": "a"
        },
        {
          "name": "level"
        }
      ],
      "convertToGammaSpace": false,
      "convertToLinearSpace": false,
      "fragmentOnly": false,
      "disableLevelMultiplication": false,
      "texture": {
        "tags": null,
        "url": "",
        "uOffset": 0,
        "vOffset": 0,
        "uScale": 1,
        "vScale": 1,
        "uAng": 0,
        "vAng": 0,
        "wAng": 0,
        "uRotationCenter": 0.5,
        "vRotationCenter": 0.5,
        "wRotationCenter": 0.5,
        "homogeneousRotationInUVTransform": false,
        "isBlocking": true,
        "name": "./img/dirtworld.png",
        "hasAlpha": false,
        "getAlphaFromRGB": false,
        "level": 1,
        "coordinatesIndex": 0,
        "coordinatesMode": 7,
        "wrapU": 1,
        "wrapV": 1,
        "wrapR": 1,
        "anisotropicFilteringLevel": 4,
        "isCube": false,
        "is3D": false,
        "is2DArray": false,
        "gammaSpace": true,
        "invertZ": false,
        "lodLevelInAlpha": false,
        "lodGenerationOffset": 0,
        "lodGenerationScale": 0,
        "linearSpecularLOD": false,
        "isRenderTarget": false,
        "animations": [],
        "invertY": false,
        "samplingMode": 3
      }
    },
    {
      "customType": "BABYLON.InputBlock",
      "id": 31,
      "name": "uv",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 1,
      "inputs": [],
      "outputs": [
        {
          "name": "output"
        }
      ],
      "type": 4,
      "mode": 1,
      "systemValue": null,
      "animationType": 0,
      "min": 0,
      "max": 0,
      "isBoolean": false,
      "matrixMode": 0,
      "isConstant": false,
      "groupInInspector": "",
      "convertToGammaSpace": false,
      "convertToLinearSpace": false
    },
    {
      "customType": "BABYLON.InputBlock",
      "id": 10,
      "name": "color",
      "comments": "",
      "visibleInInspector": false,
      "visibleOnFrame": false,
      "target": 1,
      "inputs": [],
      "outputs": [
        {
          "name": "output"
        }
      ],
      "type": 64,
      "mode": 0,
      "systemValue": null,
      "animationType": 0,
      "min": 0,
      "max": 0,
      "isBoolean": false,
      "matrixMode": 0,
      "isConstant": false,
      "groupInInspector": "",
      "convertToGammaSpace": false,
      "convertToLinearSpace": false,
      "valueType": "BABYLON.Color4",
      "value": [
        0.8,
        0.8,
        0.8,
        1
      ]
    }
  ]
}
