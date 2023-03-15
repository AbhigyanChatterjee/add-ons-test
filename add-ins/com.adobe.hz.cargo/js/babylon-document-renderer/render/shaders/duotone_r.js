function duotone_r(scene, img,effect) {
  //console.log(effect.colors);

  BABYLON.Effect.ShadersStore[`custom${effect.id}VertexShader`]= `
		precision highp float;

    	// Attributes
    	attribute vec3 position;
    	attribute vec2 uv;
      attribute vec4 world0;
    attribute vec4 world1;
    attribute vec4 world2;
    attribute vec4 world3;
    uniform mat4 viewProjection;
    attribute float customattr;
    	// Uniforms
    	uniform mat4 worldViewProjection;
      
    	// Varying
      varying float ca;
    	varying vec2 vUV;
    	void main(void) {
        #include<instancesVertex>
        vec4 worldPos = finalWorld * vec4(position, 1.0);
        gl_Position = viewProjection * worldPos;
    	  

    	  vUV = uv;
        ca = customattr;
    	}`

    BABYLON.Effect.ShadersStore[`custom${effect.id}FragmentShader`]=`
	   precision highp float;

    	varying vec2 vUV;
      varying float ca;
    	uniform sampler2D textureSampler;

    	void main(void) {
          
          float luminance = dot(texture2D(textureSampler, vUV).rgb, vec3(0.6, 0.59, 0.11));
    	    float r = texture2D(textureSampler, vUV).r;
          float b = texture2D(textureSampler, vUV).b;
          float g = texture2D(textureSampler, vUV).g;
          float a = texture2D(textureSampler, vUV).a;
          
          
            r = luminance*${effect.colors[0].r};
            b = luminance*${effect.colors[0].g};
            g = luminance*${effect.colors[0].b};
          
          
          gl_FragColor = vec4(r, g, b, a);
    	}`



    var shaderMaterial = new BABYLON.ShaderMaterial(effect.id, scene, {
        vertex: `custom${effect.id}`,
        fragment: `custom${effect.id}`,
        
	    },
        {
			attributes: ["world0",
      "world1",
      "world2",
      "world3","position", "normal", "uv"],
			uniforms: ["world", "customattr","worldView", "worldViewProjection", "view", "projection","viewProjection"],
      defines: ["#define INSTANCES"],
      needAlphaBlending: true
        });


    var mainTexture = new BABYLON.Texture(img, scene);

    shaderMaterial.setTexture("textureSampler", mainTexture);
    shaderMaterial.backFaceCulling = false;
    return shaderMaterial;
}
export {duotone_r};