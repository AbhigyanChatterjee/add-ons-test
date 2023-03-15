import{r as d}from"./text-aspect-ratio.758caee0.js";const r="https://cargodataserver-dev-va6.stage.cloud.adobe.io";function f(){return crypto.getRandomValues(new Uint32Array(3)).join("")}async function w(i){const t=`image_${f()}`,e=new FormData;e.append("file",i,t),console.info(`Uploading ${t} to cargo data server...`);const s=await fetch(`${r}/image/upload`,{method:"POST",body:e});let a={};try{a=await s.json()}catch(n){console.info("failed to get valid json from upload request",n)}if(a&&a.status==="ok"){const n=a.result[0].image;return console.info(`Uploading ${t} success`),{id:n.id,url:`${r}/image/${n.id}`,width:parseInt(n.width,10),height:parseInt(n.height,10),format:n.format}}return a}async function h(i){const t={cache:"no-store"};let e={};const s=await fetch(`${r}/data/${i}`,t);try{e=await s.json()}catch(a){console.info("Did not fetch a valid object for id",i,a),e={}}return e}async function g(i){return await h(i)}async function l(i,t){console.log(`posting ${t}`);const e=new Headers;e.append("Content-Type","application/json");const s=JSON.stringify(i),a={method:"POST",headers:e,body:s,redirect:"follow",cache:"no-store"};return await(await fetch(`${r}/data/${t}`,a)).text()}async function u(i){const t={method:"DELETE",redirect:"follow"};return await fetch(`${r}/data/${i}`,t)}async function m(i){const t=await g(i),e=[];if(!t||!t.nodes)return;for(const[a,n]of Object.entries(t.nodes)){const c=n;c.type==="image"&&(e.push(c.data.src),c.data.originalSrc&&e.push(c.data.originalSrc))}const s=e.map(a=>a.split("/image/").pop());for(const a of s)await u(a);await u(i)}async function S(i){const t=await h(i);return`${r}/data/${t.archive}`}const p="CARGO_KIT_INDEX";class o{constructor(t=()=>{}){this._state={versionUID:"",items:{}},this.stringifiedState="",this.ready=!1,this.onReadyPendingCallbacks=[],this.onReadyCallback=t,this.hydrateFromStorageService().then(()=>{this.handleNewValidState()})}static getTagsFromKitJson(t){return t.tags||[]}static getExtraThumbnailsFromKitJson(t){return t.extraThumbnails||[]}static getAuthorFromKitJson(t){return t.author||""}static getToolFromKitJson(t){return t.tool||""}static getNameFromKitJson(t){return t.name||""}static getThumbnailFromKitJson(t){return t.thumbnail?t.thumbnail.split("/image/").pop():""}static generateKitMetadataFromKitJson(t){return{thumbnail:o.getThumbnailFromKitJson(t),author:o.getAuthorFromKitJson(t),tool:o.getToolFromKitJson(t),name:o.getNameFromKitJson(t),created:Date.now(),modified:Date.now(),tags:o.getTagsFromKitJson(t),extraThumbnails:o.getExtraThumbnailsFromKitJson(t)}}handleNewValidState(){for(this.ready=!0,this.onReadyCallback(this.state);this.onReadyPendingCallbacks.length>0;)this.onReadyPendingCallbacks.pop()(this.state)}async isReady(){if(!this.ready)return new Promise(t=>{this.onReadyPendingCallbacks.push(t)})}async hydrateFromStorageService(){const t=await h("CARGO_KIT_INDEX");this._state=t,this.dirtyState()}async saveStateToStorageService(){return await l(this.state,p)}async conflictRobustStateMutationExecution(t){let e=0,s=!1;for(this.ready=!1,await this.hydrateFromStorageService();!s&&e<10;){const a=d();this._state.versionUID=a,t(),this.dirtyState(),await this.saveStateToStorageService(),await this.hydrateFromStorageService(),this._state.versionUID!==a?s=!1:s=!0,e+=1}return this.handleNewValidState(),!!s}async create(t,e){const s=e||d(),a=o.generateKitMetadataFromKitJson(t);await l(t,s),await this.conflictRobustStateMutationExecution(()=>{this._state.items[s]=a}),console.info("CREATE",s)}async read(t){await this.isReady();const e=await h(t);return this._state.items.hasOwnProperty(t)===!1&&(e&&e.id===t?await this.create(e,t):console.info("FAILED TO READ KIT")),e}async update(t,e){if(this._state.items.hasOwnProperty(t)===!1){await this.create(e,t);return}const s=this._state.items[t],a=o.generateKitMetadataFromKitJson(e);a.created=s.created,await l(e,t),await this.conflictRobustStateMutationExecution(()=>{this._state.items[t]=a}),console.info("UPDATE",t)}async delete(t){await this.conflictRobustStateMutationExecution(()=>{delete this._state.items[t]}),await m(t)}dirtyState(){this.stringifiedState=""}stringify(){return this.stringifiedState||(this.stringifiedState=JSON.stringify(this._state)),this.stringifiedState}get state(){return JSON.parse(this.stringify())}}export{r as A,o as C,h as a,S as g,l as p,w as u};