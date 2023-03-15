function greyscale(scene, img,effect) {
  //console.log(effect.colors);

  BABYLON.Effect.ShadersStore["customVertexShader"]= `
		precision highp float;

    	// Attributes
    	attribute vec3 position;
    	attribute vec2 uv;

    	// Uniforms
    	uniform mat4 worldViewProjection;
      
    	// Varying
    	varying vec2 vUV;

    	void main(void) {
    	    gl_Position = worldViewProjection * vec4(position.x,position.y,position.z, 1.0);

    	    vUV = uv;
    	}`

    BABYLON.Effect.ShadersStore[`custom${effect.id}FragmentShader`]=`
	   precision highp float;

    	varying vec2 vUV;

    	uniform sampler2D textureSampler;

    	void main(void) {
          float luminance = dot(texture2D(textureSampler, vUV).rgb, vec3(0.3, 0.59, 0.11));
          vec4 lum = vec4(luminance,luminance,luminance,1.);
          vec4 color1 = vec4(1.0,0.01,0.01,1.);
          vec4 colorOverlay = mix(color1,color2, luminance*vUV.x*0.5);
          gl_FragColor = colorOverlay;
    	}`



    var shaderMaterial = new BABYLON.ShaderMaterial(effect.id, scene, {
        vertex: "custom",
        fragment: `custom${effect.id}`,
        
	    },
        {
			attributes: ["position", "normal", "uv"],
			uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"],
      needAlphaBlending: true
        });

				//console.log(scene);
    var mainTexture = new BABYLON.Texture(img, scene);

    shaderMaterial.setTexture("textureSampler", mainTexture);
    shaderMaterial.backFaceCulling = false;
    return shaderMaterial;
}
export {greyscale};