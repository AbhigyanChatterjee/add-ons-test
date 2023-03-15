export function duotone(scene, img,effect,kit) {

  BABYLON.Effect.ShadersStore[`custom${effect.id}VertexShader`]= `
		precision highp float;

    	// Attributes
    	attribute vec3 position;
    	attribute vec2 uv;

    	// Uniforms
    	uniform mat4 worldViewProjection;
      uniform vec4 priColor;
      uniform float intense;
    	// Varying
    	varying vec2 vUV;
      varying vec4 priColor2;
      varying float intense2;
    	void main(void) {
    	    gl_Position = worldViewProjection * vec4(position.x,position.y,position.z, 1.0);
          vUV = uv;
          priColor2 = priColor;
          intense2= intense;
    	}`

    BABYLON.Effect.ShadersStore[`custom${effect.id}FragmentShader`]=`
	   precision highp float;

    	varying vec2 vUV;
      varying vec4 priColor2;
      varying float intense2;
    	uniform sampler2D textureSampler;
      
    	void main(void) {
          float luminance = dot(texture2D(textureSampler, vUV).rgb, vec3(0.3, 0.59, 0.11));
          vec4 lum = vec4(luminance,luminance,luminance,1.);
          vec3 image = texture2D(textureSampler, vUV).rgb;

          vec4 black = vec4(0.,0.,0.,1.);
          vec4 color1 = priColor2;
          vec4 colorOverlay = mix(black,color1, luminance*2.);
          vec4 img =texture2D(textureSampler, vUV).rgba;
          vec4 mixer = mix(img,colorOverlay,intense2);
          gl_FragColor = mixer;
    	}`
     

    var shaderMaterial = new BABYLON.ShaderMaterial(effect.id, scene, {
        vertex: `custom${effect.id}`,
        fragment: `custom${effect.id}`,
        
	    },
        {
			attributes: ["position", "normal", "uv"],
			uniforms: ["world", "worldView", "worldViewProjection", "view", "projection","priColor","intensity"],
      needAlphaBlending: true
        });


    var mainTexture = new BABYLON.Texture(img, scene);

    shaderMaterial.setTexture("textureSampler", mainTexture);
    let newColor = new BABYLON.Color3.FromHexString('#000000');
    
    //console.log(kit.nodes[effect.id].data.h);
    new BABYLON.Color3.HSVtoRGBToRef(kit.nodes[effect.id].data.h,kit.nodes[effect.id].data.s,kit.nodes[effect.id].data.v,newColor);
    //console.log(newColor);

    shaderMaterial.setVector4("priColor", new BABYLON.Vector4(newColor.r,newColor.g,newColor.b,1.0));
    //console.log(kit.nodes[effect.id].data.i);
    shaderMaterial.setFloat("intense", kit.nodes[effect.id].data.i);
    shaderMaterial.backFaceCulling = false;
    return shaderMaterial;
}
export {}