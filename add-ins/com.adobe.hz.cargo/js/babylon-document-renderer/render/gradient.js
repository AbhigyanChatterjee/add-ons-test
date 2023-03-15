function gradient(scene, img,effect) {

  BABYLON.Effect.ShadersStore[`custom${effect.id}VertexShader`]= `
		precision highp float;

    	// Attributes
    	attribute vec3 position;
    	attribute vec2 uv;

    	// Uniforms
    	uniform mat4 worldViewProjection;
    
    	// Varying
    	varying vec2 vUV;
	
    	void main(void) {
    	    gl_Position = worldViewProjection * vec4(position, 1.0);

    	    vUV = uv;
					
    	}`

    BABYLON.Effect.ShadersStore[`custom${effect.id}FragmentShader`]=`
	   precision highp float;

    	varying vec2 vUV;

    	uniform sampler2D textureSampler;
    


    	void main(void) {
					vec2 u_c = vec2(0.5,0.5);
					float distanceFromLight = length(vUV - u_c);

					vec2 vUV2 = mat2(0.707, 0.707	, 0.707, -0.707) * vUV;
					float r = vUV.x/vUV2.x;
					float g = vUV.x/vUV2.x;
          float b = vUV.x/vUV2.x;
					vec4 overlay1 = vec4(${effect.colors[0].r},${effect.colors[0].g},${effect.colors[0].b},1.0);
					if(vUV2.x < vUV2.x/vUV2.y ) {
						r = 1.0-vUV.x/vUV2.x;
						g = 1.0-vUV.x/vUV2.x;
						b = 1.0-vUV.x/vUV2.x;
					
						overlay1 = vec4(${effect.colors[1].r},${effect.colors[1].g},${effect.colors[1].b},1.0);
					}
					vec4 colora = vec4(r,g,b,1.0);
					vec4 color1 = mix(colora,overlay1,0.9);

					
          gl_FragColor = (mix(vec4(${effect.c1},${effect.c2},0.01,1.0), vec4(0.1,0.1,0.4,1.0), distanceFromLight*3.)) + color1;
    	}`



    var shaderMaterial = new BABYLON.ShaderMaterial(effect.id, scene, {
        vertex: `custom${effect.id}`,
        fragment: `custom${effect.id}`,
        
	    },
        {
			attributes: ["position", "normal", "uv"],
			uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"],
      needAlphaBlending: true
        });


    //var mainTexture = new BABYLON.Texture(img, scene);

    //shaderMaterial.setTexture("textureSampler", mainTexture);
    shaderMaterial.backFaceCulling = false;
    return shaderMaterial;
}
export {gradient};