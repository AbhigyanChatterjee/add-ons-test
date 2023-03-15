import{s as b,$ as h,g as x,b as n}from"./vendor.20676418.js";import{e as H,d as f,r as L,D as j,E as W,c as G}from"./editor-model.e5a9ab22.js";import"./text-aspect-ratio.758caee0.js";import{R as B}from"./renderer-artboard.4485a40b.js";import{u as C,C as K}from"./cargo-kit-index.fa0641a8.js";var N=(a=>(a[a.VERTICAL_BREAKPOINT=900]="VERTICAL_BREAKPOINT",a[a.HORIZONTAL_BREAKPOINT=800]="HORIZONTAL_BREAKPOINT",a[a.ASSETS_PANEL_STANDARD_WIDTH=300]="ASSETS_PANEL_STANDARD_WIDTH",a[a.INSPECTOR_PANEL_STANDARD_WIDTH=300]="INSPECTOR_PANEL_STANDARD_WIDTH",a[a.INSPECTOR_PANEL_SMALL_PORTRAIT_HEIGHT=300]="INSPECTOR_PANEL_SMALL_PORTRAIT_HEIGHT",a[a.TOOLBAR_STANDARD_WIDTH=55]="TOOLBAR_STANDARD_WIDTH",a[a.HEADER_STANDARD_HEIGHT=60]="HEADER_STANDARD_HEIGHT",a[a.HEADER_SMALL_PORTRAIT_WIDTH=60]="HEADER_SMALL_PORTRAIT_WIDTH",a[a.HEADER_SMALL_PORTRAIT_HEIGHT=60]="HEADER_SMALL_PORTRAIT_HEIGHT",a[a.HEADER_SMALL_LANDSCAPE_WIDTH=60]="HEADER_SMALL_LANDSCAPE_WIDTH",a[a.HEADER_SMALL_LANDSCAPE_HEIGHT=60]="HEADER_SMALL_LANDSCAPE_HEIGHT",a[a.MIN_WINDOW_WIDTH=390]="MIN_WINDOW_WIDTH",a[a.MIN_WINDOW_HEIGHT=390]="MIN_WINDOW_HEIGHT",a[a.MARGIN_STANDARD=0]="MARGIN_STANDARD",a))(N||{});const R=.05;var U=(a=>(a.SmallPortrait="SmallPortrait",a.SmallLandscape="SmallLandscape",a.Standard="Standard",a))(U||{});JSON.stringify({id:"lan2v",versionTag:"ols4g6",rootNodeId:"eimnr8",timelineDuration:5,nodes:{eimnr8:{id:"eimnr8",data:{},type:"canvas",isEffect:!1,isEffectNode:!1,parentId:"",width:0,height:0,x:0,y:0,rotate:0,children:["0owouq"],effects:[]},"0owouq":{id:"0owouq",data:{name:"Artboard 1",color:"#FFFFFF"},type:"artboard",isEffect:!1,isEffectNode:!1,parentId:"eimnr8",width:600,height:600,x:-300,y:-300,rotate:0,children:[],effects:[]}}});const xe=[{family:"amboy-black",label:"Amboy Black",weight:"400",style:"normal"},{family:"amboy-inline",label:"Amboy Inline",weight:"400",style:"normal"},{family:"adobe-clean",label:"Adobe Clean 300",weight:"300",style:"normal"},{family:"adobe-clean",label:"Adobe Clean 400",weight:"400",style:"normal"},{family:"adobe-clean",label:"Adobe Clean 700",weight:"700",style:"normal"},{family:"adobe-clean",label:"Adobe Clean 900",weight:"900",style:"normal"},{family:"Futura",label:"Futura",weight:"normal",style:"normal"},{family:"Courier New",label:"Courier New",weight:"normal",style:"normal"},{family:"timberline",label:"Timberline",weight:"normal",style:"normal"},{family:"museo-slab",label:"Museo Slab",weight:"normal",style:"normal"},{family:"quimby-gubernatorial",label:"Quimby Gubernatorial",weight:"normal",style:"normal"},{family:"jaf-zalamander",label:"Jaf Zalamander",weight:"normal",style:"normal"},{family:"flood-std",label:"Flood Std",weight:"normal",style:"normal"},{family:"lust-script-display",label:"Lust Script",weight:"normal",style:"normal"},{family:"chuck",label:"Chuck",weight:"normal",style:"normal"},{family:"funkydori",label:"Funkydori",weight:"normal",style:"normal"},{family:"viktor-script",label:"Viktor Script",weight:"normal",style:"normal"},{family:"dunbar-low",label:"Dunbar Low",weight:"normal",style:"normal"},{family:"dunbar-tall",label:"Dunbar Tall",weight:"normal",style:"normal"},{family:"dunbar-tall-italic",label:"Dunbar Tall Italic",weight:"normal",style:"normal"},{family:"fairwater-deco-serif",label:"Fairwater Deco",weight:"normal",style:"normal"},{family:"fairwater-sailor-serif",label:"Fairwater Sailor",weight:"normal",style:"normal"},{family:"p22-flw-exhibition",label:"P22 FLW Exhibition",weight:"normal",style:"normal"}];function X(a,e={}){a.dispatchEvent(new CustomEvent("editorEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:e}))}class T{constructor({maxFPS:e=NaN,paused:t=!1,onResume:i=()=>{},onPause:o=()=>{},onTick:s=()=>{},onFrame:r=()=>{}}){this._maxFPS=e,this._timeScale=1,this._currentTick=0,this._currentTime=0,this._tickDeltaTime=0,this._isRunning=!1,this._lastTimeUpdated=0,this._now=0,this._frameDeltaTime=0,this._frame=0,this._minInterval=Number.isNaN(this._maxFPS)?NaN:1e3/this._maxFPS,this._onResume=i,this._onPause=o,this._onTick=s,this._onFrame=r,t||this.resume()}resume(){this._isRunning||(this._isRunning=!0,this._lastTimeUpdated=T.getTime(),this._onResume(),this.requestFrame())}pause(){this._isRunning&&(this._isRunning=!1,this._onPause(),window.cancelAnimationFrame(this._frame))}get currentTick(){return this._currentTick}get currentTimeSeconds(){return this._currentTime/1e3}get tickDeltaTimeSeconds(){return this._tickDeltaTime/1e3}get timeScale(){return this._timeScale}set timeScale(e){this._timeScale!==e&&(this._timeScale=e)}get isRunning(){return this._isRunning}requestFrame(){this._frame=window.requestAnimationFrame(()=>this.doFrame())}doFrame(){this._now=T.getTime(),this._frameDeltaTime=this._now-this._lastTimeUpdated,this._lastTimeUpdated=this._now,this._tickDeltaTime=this._frameDeltaTime*this._timeScale,this._currentTick+=1,this._currentTime+=this._tickDeltaTime,this._onTick(this.currentTimeSeconds,this.tickDeltaTimeSeconds,this.currentTick),(Number.isNaN(this._minInterval)||this._frameDeltaTime>=this._minInterval)&&this._onFrame(this.currentTimeSeconds,this.tickDeltaTimeSeconds,this.currentTick),this._isRunning&&this.requestFrame()}static getTime(){return Date.now()}}const S=document.createElement("canvas"),w=S.getContext("2d"),A=8e3;class Y{constructor(){this.renderer=new B({antialias:!0,resolution:1,preserveDrawingBuffer:!0,clearBeforeRender:!0,backgroundAlpha:0})}get canvas(){return this.renderer.canvas}async getRendition({displayGraph:e,rootId:t,scale:i=1}){const{x:o,y:s,width:r,height:l}=e.nodes[t];let d=i*2;this.renderer.displayGraph=e,this.renderer.rootId=t;const g=d*r,D=d*l,$=Math.min(A/g,A/D);return $<1&&(console.info("scaling down rendition texture"),d*=$),this.renderer.origin={x:-o*d,y:-s*d},this.renderer.canvasSize={width:Math.round(r*d),height:Math.round(l*d)},this.renderer.scale=d,this.renderer.render(),w==null||w.clearRect(0,0,S.width,S.height),S.width=Math.round(r*i),S.height=Math.round(l*i),new Promise((P,pe)=>{setTimeout(()=>{w==null||w.drawImage(this.renderer.canvas,0,0,Math.round(r*i),Math.round(l*i)),P(S.toDataURL())},1e3)})}}class V{constructor(e,t,i,o=()=>{}){this.gestureStartScale=0,this.pressedKeys={},this.clipboardSelections=[],this._itemAddedWithGestureId="",this.documentController=e,this.documentModel=t,this.editorModel=i,this.renderCallback=o,this.clipboardDocumentState=t.state,this.headlessRenderer=new Y,this.ticker=new T({onFrame:this.handleTickerTick.bind(this),paused:!0}),this.editorModel.setViewportWidth(window.innerWidth),this.editorModel.setViewportHeight(window.innerHeight),this.editorModel.setOriginOffsetX(window.innerWidth/2),this.editorModel.setOriginOffsetY(window.innerHeight/2),this.editorModel.setTimelinePosition(0),this._boundKeyupHandler=this.handleKeyup.bind(this),this._boundKeydownHandler=this.handleKeydown.bind(this),this._boundResizeHandler=this.handleWindowResize.bind(this),this._boundWindowWheelEvents=this.handleWindowWheelEvents.bind(this),this._boundWebkitMultiTouchTrackpadStart=this.handleWebkitMultiTouchTrackpadStart.bind(this),this._boundWebkitMultiTouchTrackpadChange=this.handleWebkitMultiTouchTrackpadChange.bind(this),this._boundWebkitMultiTouchTrackpadEnd=this.handleWebkitMultiTouchTrackpadEnd.bind(this)}connectToDom(){window.addEventListener("keyup",this._boundKeyupHandler),window.addEventListener("keydown",this._boundKeydownHandler),window.addEventListener("resize",this._boundResizeHandler),window.addEventListener("wheel",this._boundWindowWheelEvents,{passive:!1}),window.addEventListener("gesturestart",this._boundWebkitMultiTouchTrackpadStart),window.addEventListener("gesturechange",this._boundWebkitMultiTouchTrackpadChange),window.addEventListener("gestureend",this._boundWebkitMultiTouchTrackpadEnd),this.handleWindowResize()}disconnectFromDom(){this.ticker.pause(),window.removeEventListener("keyup",this._boundKeyupHandler),window.removeEventListener("keydown",this._boundKeydownHandler),window.removeEventListener("resize",this._boundResizeHandler),window.removeEventListener("wheel",this._boundWindowWheelEvents),window.removeEventListener("gesturestart",this._boundWebkitMultiTouchTrackpadStart),window.removeEventListener("gesturechange",this._boundWebkitMultiTouchTrackpadChange),window.removeEventListener("gestureend",this._boundWebkitMultiTouchTrackpadEnd)}async getRenditionDataUrl(e,t=1){const i=this.documentController.generateDisplayGraph();return await this.headlessRenderer.getRendition({displayGraph:i,rootId:e,scale:t})}async getRenditionFileBlob(e,t){const i=await this.getRenditionDataUrl(e,t);return H(i)}async downloadRendition(e,t){console.log("download rendition");const i=this.documentModel.getNode(e),o=await this.getRenditionDataUrl(e,t),s=document.createElement("a");document.body.append(s),s.download=`${i.data.name||"rendition"} @${t.toString().replace(".",",")}x`,s.href=o,console.log(s),s.click(),s.remove()}async saveRenditionAsThumbnail(e){const t=await this.getRenditionFileBlob(e,.5),i=await C(t);this.documentModel.setThumbnail(i.url),this.documentController.handleNewDocumentState(),this.createMessage({type:"positive",copy:"Primary Thumbnail Saved"},3e3)}async saveRenditionAsExtraThumbnail(e){const t=await this.getRenditionFileBlob(e,.5),i=await C(t),{extraThumbnails:o}=this.documentModel._state,s=[...o,i.url];this.documentModel.setExtraThumbnails(...s),this.documentController.handleNewDocumentState(),this.createMessage({type:"positive",copy:"Added Extra Thumbnail"},3e3)}semanticInferenceData(){const{selections:e}=this.editorModel._state,t={};if(e.length===1){const i=e[0];this.documentModel.getNodeType(i)==="artboard-group"&&(t.items=this.documentController.semanticInferenceForScope(i))}return t}handleTickerTick(e,t,i){const{timelineDuration:o}=this.documentModel._state,{timelinePosition:s}=this.editorModel._state,r=Math.min(o,s+t);r>=o?(this.ticker.pause(),this.editorModel.setTimelinePosition(o)):this.editorModel.setTimelinePosition(r),this.renderCallback()}createMessage(e,t=2e3){const i=this.editorModel.addMessage(e);this.renderCallback(),setTimeout(()=>{this.editorModel.removeMessage(i),this.renderCallback()},t)}setSelection(...e){this.editorModel.setSelection(...e),this.updateStrokeDecorations()}handleKeydown(e){const{keyCode:t,metaKey:i,ctrlKey:o}=e;this.pressedKeys[t]=!0;let s=0,r=0;switch(t){case 86:if(i===!0||o===!0){const d=this.documentController.duplicateIdsFromDocumentState(this.clipboardSelections,this.clipboardDocumentState);this.setSelection(...d),this.renderCallback();const g=d.length;this.createMessage({type:"positive",copy:`Paste ${g} item${g===1?"":"s from clipboard"}`},3e3)}break;case 71:if(i===!0||o===!0){const d=this.editorModel._state.selections.length;this.documentController.groupSelections(),this.createMessage({type:"positive",copy:`Group ${d} item${d===1?"":"s"}`},3e3),e.preventDefault()}break;case 67:if(i===!0||o===!0){this.clipboardSelections=[...this.editorModel._state.selections],this.clipboardDocumentState=this.documentModel.state;const d=this.editorModel._state.selections.length;this.createMessage({type:"positive",copy:`Copy ${d} item${d===1?"":"s to clipboard"}`},3e3),e.preventDefault()}break;case 32:this.editorModel._state.isPanningMode===!1&&(this.editorModel.setIsPanningMode(!0),this.renderCallback());break;case 8:[...this.editorModel._state.selections].forEach(d=>{this.editorModel.removeAllStateForId(d),this.documentController.delete(d,!0)}),this.updateStrokeDecorations(),this.documentController.handleNewDocumentState(),this.renderCallback();break;case 27:const l=[];this.editorModel._state.selections.forEach(d=>{const g=this.documentModel.getNodeParentId(d);g&&l.indexOf(g)===-1&&l.push(g)}),l.length===1&&this.documentModel.getNodeType(l[0])==="container"?this.setSelection(...l):this.setSelection(),this.renderCallback();break;case 68:if(e.altKey===!0||e.ctrlKey===!0){const d=this.editorModel._state.selections.length,g=this.documentController.duplicateIdsFromDocumentState(this.editorModel._state.selections,this.documentModel.state);this.setSelection(...g),this.createMessage({type:"positive",copy:`Duplicate ${d} item${d===1?"":"s"}`},3e3),this.renderCallback()}break;case 37:case 38:case 39:case 40:t===37?r=-1:t===38?s=-1:t===39?r=1:t===40&&(s=1),e.shiftKey===!0&&(r*=10,s*=10),this.editorModel._state.selections.forEach(d=>{const{x:g,y:D}=this.documentModel._state.nodes[d];this.documentController.update(d,{x:g+r,y:D+s})}),this.renderCallback();break}}handleKeyup(e){this.pressedKeys[e.keyCode]=!1,e.keyCode===32&&this.editorModel._state.isPanningMode===!0&&(this.editorModel.setIsPanningMode(!1),this.renderCallback())}handleWindowResize(){const e=this.editorModel._state.debug?window.innerHeight-400:window.innerHeight,t=Math.max(N.MIN_WINDOW_HEIGHT,e),i=Math.max(N.MIN_WINDOW_WIDTH,window.innerWidth),o=this.editorModel._state.viewportWidth-i,s=this.editorModel._state.viewportHeight-t,r=this.editorModel._state.originOffsetX-o/2,l=this.editorModel._state.originOffsetY-s/2;this.editorModel.setViewportWidth(i),this.editorModel.setViewportHeight(t),this.editorModel.setOriginOffsetX(r),this.editorModel.setOriginOffsetY(l),this.renderCallback()}handleWindowWheelEvents(e){if(e.target.tagName==="PROTOTYPE-APP"){if(e.preventDefault(),e.ctrlKey||e.altKey||e.metaKey||e.shiftKey){const t=this.editorModel._state.renderScale,i=-e.deltaY*.01,o=Math.max(R,t+i),s=o/t,r=this.editorModel._state.originOffsetX-e.pageX,l=this.editorModel._state.originOffsetY-e.pageY,d=r*s-r,g=l*s-l;this.editorModel.setRenderScale(o),this.editorModel.setOriginOffsetX(this.editorModel._state.originOffsetX+d),this.editorModel.setOriginOffsetY(this.editorModel._state.originOffsetY+g)}else this.editorModel.setOriginOffsetX(this.editorModel._state.originOffsetX-e.deltaX*2),this.editorModel.setOriginOffsetY(this.editorModel._state.originOffsetY-e.deltaY*2);this.renderCallback()}}handleWebkitMultiTouchTrackpadStart(e){e.preventDefault(),e.stopPropagation(),this.gestureStartScale=this.editorModel._state.renderScale}handleWebkitMultiTouchTrackpadChange(e){e.preventDefault(),e.stopPropagation();const t=this.editorModel._state.renderScale,i=Math.max(R,this.gestureStartScale*e.scale),o=i/t,s=this.editorModel._state.originOffsetX-e.pageX,r=this.editorModel._state.originOffsetY-e.pageY,l=s*o-s,d=r*o-r;this.editorModel.setRenderScale(i),this.editorModel.setOriginOffsetX(this.editorModel._state.originOffsetX+l),this.editorModel.setOriginOffsetY(this.editorModel._state.originOffsetY+d),this.renderCallback()}handleWebkitMultiTouchTrackpadEnd(e){e.preventDefault(),e.stopPropagation(),this.gestureStartScale=1}targetForHoveringOverId(e){const{selections:t}=this.editorModel._state;let i=this.documentModel._state.nodes[e],o=e;for(;i;){const s=this.documentModel._state.nodes[i.parentId];if(!s)return o;if(s.children.find(d=>t.indexOf(d)!==-1)||t.indexOf(s.id)!==-1||s.type==="artboard"||s.type==="canvas"){o=i.id;break}i=s}return o}targetForTouchingId(e){const{selections:t}=this.editorModel._state;let i=this.documentModel._state.nodes[e],o=e;for(;i;){const s=this.documentModel._state.nodes[i.parentId];if(!s)return o;if(s.children.find(d=>t.indexOf(d)!==-1)||t.indexOf(i.id)!==-1||s.type==="artboard"||s.type==="artboard-group"||s.type==="canvas"){o=i.id;break}i=s}return o}updateStrokeDecorations(){const{hovers:e,selections:t}=this.editorModel._state,i=[];e.forEach(o=>i.push(this.targetForHoveringOverId(o))),this.editorModel.setSelectableHovers(...i)}handleGestureStartOnId(e,t,i){if(this.editorModel._state.isPanningMode)return;const o=this.targetForTouchingId(e);this.editorModel._state.selections.indexOf(o)>=0||(this.documentModel.getNodeType(o)!=="canvas"?(t?this.editorModel.addSelection(o):this.setSelection(o),this._itemAddedWithGestureId=i):t||this.setSelection(),this.updateStrokeDecorations(),this.renderCallback())}handleDoubleClickOnId(e,t,i){if(this.editorModel._state.isPanningMode)return;const o=this.targetForHoveringOverId(e);this.editorModel._state.selections.indexOf(o)>=0||(this.documentModel.getNodeType(o)!=="canvas"?(t?this.editorModel.addSelection(o):this.setSelection(o),this._itemAddedWithGestureId=i):t||this.setSelection(),this.updateStrokeDecorations(),this.renderCallback())}handleSingleClickOnId(e,t,i){const o=this.targetForTouchingId(e);t&&this.editorModel._state.selections.length>1&&this.editorModel._state.selections.indexOf(o)>=0&&i!==this._itemAddedWithGestureId&&(this.editorModel.removeSelection(o),this.editorModel.removeHover(o)),this.updateStrokeDecorations(),this.renderCallback()}activateToolbarSection(e){this.editorModel.setSelection(),this.editorModel.setActiveToolbarSection(e),this.renderCallback()}delegateEvent(e){switch(console.log("hello"),e.action||"none"){case"activate-toolbar-section":this.activateToolbarSection(e.data);break;case"layers-toggle":this.editorModel.setIsLayersPaletteOpen(!this.editorModel._state.isLayersPaletteOpen),this.renderCallback();break;case"set-render-scale":if(e.num===void 0)return;this.editorModel.setRenderScale(e.num),this.renderCallback();break;case"message":this.createMessage(e.data,e.num);break;case"add-loading":this.editorModel.addLoading(e.id),this.renderCallback();break;case"artboard-doubleclick":this.setSelection(e.id),this.renderCallback();break;case"artboard-touch":this.setSelection(),this.renderCallback();break;case"interaction-item-pointerout":this.editorModel.removeHover(e.id),this.updateStrokeDecorations(),this.renderCallback();break;case"interaction-item-pointerover":this.editorModel.addHover(e.id),this.updateStrokeDecorations(),this.renderCallback();break;case"interaction-item-doubleclick":if(!e.id)return;this.handleDoubleClickOnId(e.id,e.data.shiftKey,e.data.gestureId);break;case"interaction-item-singleclick":if(!e.id)return;this.handleSingleClickOnId(e.id,e.data.shiftKey,e.data.gestureId);break;case"interaction-item-gesturestart":if(!e.id)return;this.handleGestureStartOnId(e.id,e.data.shiftKey,e.data.gestureId);break;case"set-selections":if(!e.ids)return;this.setSelection(...e.ids),this.renderCallback();break;case"set-target-layers-panel-height":this.editorModel.setTargetLayersPanelHeight(e.value),this.renderCallback();break;case"timeline-set-value":this.editorModel.setTimelinePosition(e.value*5),this.renderCallback();break;case"timeline-pause":this.ticker.pause();break;case"timeline-playpause-toggle":this.ticker.isRunning?this.ticker.pause():(this.editorModel._state.timelinePosition===this.documentModel._state.timelineDuration&&this.editorModel.setTimelinePosition(0),this.ticker.resume());break;case"download-rendition":if(console.log("rendition"),!e.id)return;this.downloadRendition(e.id,e.scale);break;case"save-rendition-as-thumbnail":if(!e.id)return;this.saveRenditionAsThumbnail(e.id);break;case"save-rendition-as-extra-thumbnail":if(!e.id)return;this.saveRenditionAsExtraThumbnail(e.id);break}}}class q extends b{static get properties(){return{id:{type:String}}}constructor(){super(),this.id=""}render(){return h` <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>`}static get styles(){return x`
      .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
        margin-top: -30px;
        opacity: 0.4;
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}}customElements.define("loader-ring",q);var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,z=(a,e,t,i)=>{for(var o=i>1?void 0:i?Q(e,t):e,s=a.length-1,r;s>=0;s--)(r=a[s])&&(o=(i?r(e,t,o):r(o))||o);return i&&o&&J(e,t,o),o};function Z(a){const e=a.indexOf("#")===0,t=a.indexOf("rgb")===0;let i=0,o=0,s=0;if(e){const r=a.length===7,l=a.substr(1).match(r?/(\S{2})/g:/(\S{1})/g);l&&(i=parseInt(l[0]+(r?"":l[0]),16),o=parseInt(l[1]+(r?"":l[1]),16),s=parseInt(l[2]+(r?"":l[2]),16))}if(t){const r=a.match(/(\d+){3}/g);r&&(i=parseFloat(r[0]),o=parseFloat(r[1]),s=parseFloat(r[2]))}return typeof i!="undefined"?(i*299+o*587+s*114)/1e3:0}class O extends b{constructor(){super(...arguments),this.selected=!1,this.node={}}render(){let e=h``,t="#ffffff";const{type:i,data:{name:o,text:s,src:r,color:l,font:d}}=this.node;switch(i){case"image":e=h`<div class="image" style="background-image:url('${r.replace(".png","_sm.png")}?redir=1');"></div>`;break;default:Z(l)>150&&(t="#000000"),e=h`<div class="text"
            style="background-color:${t}; color:${l};font-family: ${d}"
          >
            Ag
          </div>`;break}return e}}O.styles=x`

    .text {
      line-height: normal;
      width: 40px;
      height: 40px;
      box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.1);
      border-radius:8px;
      font-size:22px;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .image {
      position: relative;
      
      width: 74px;
      height: 74px;
      background-size: contain;
      background-repeat: no-repeat;
      box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.1);
      border-radius:8px;
      
    }

  `;z([n({type:Boolean})],O.prototype,"selected",2);z([n({type:Object})],O.prototype,"node",2);customElements.define("variant-picker-item",O);var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,E=(a,e,t,i)=>{for(var o=i>1?void 0:i?te(e,t):e,s=a.length-1,r;s>=0;s--)(r=a[s])&&(o=(i?r(e,t,o):r(o))||o);return i&&o&&ee(e,t,o),o};class _ extends b{constructor(){super(...arguments),this.documentState={},this.selectedNodeId="",this.variantSetId="",this.locked=!1,this.shuffle=()=>{let e=this.documentState.nodes[this.variantSetId].items,t=e[Math.floor(Math.random()*e.length)];this.handleVariantSelect(t)},this.lock=()=>{this.locked=!this.locked}}handleVariantSelect(e){f(this,{action:"select-variant",id:this.selectedNodeId,value:e})}render(){const e=this.documentState.nodes[this.variantSetId],{items:t,data:{name:i}}=e;return t.length<2?h``:h`
      <section>
        <div class="header">
          <h3>${i}</h3> 
          <div class="buttons">
            <div class="button" @click=${this.shuffle}>
                  <img class="shuffle" src="files/small_shuffle.png" />
            </div>
            <div class="button" @click=${this.lock}>
              ${this.locked?h`<img class="lock" src="files/locked_icon.png" />`:h`<img class="lock" src="files/lock_open.png" />`}
            </div> 
          </div>
        </div>
        <div class="items">
        ${t.map(o=>h`<variant-picker-item
            .node=${this.documentState.nodes[o]}
            ?selected=${o===this.selectedNodeId}
            @click=${()=>this.handleVariantSelect(o)}
          ></variant-picker-item>`)}
        </div>
      </section>
    `}}_.styles=x`

    variant-picker-item {
      margin-right: 17px;
      margin-bottom:17px;
      position: relative;
      display: inline-block;
      line-height: 0;
      cursor: pointer;
      box-shadow: 0 0 0 2px #FFFFFF;
      border-radius:8px;
      background: rgb(244, 244, 244);
    }
    h3 {
      font-size:14px;
      font-weight: 800;
      padding:0px;
      margin:4px 0px 8px 0px;
    }
    variant-picker-item[selected] {
      box-shadow: 0 0 0 2px #242424;
      border-radius:8px;
    }
    .header {
      display: flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      margin-bottom:12px;
     
      box-sizing: border-box;
      width:256px;

    }
    .buttons {
      display: flex;
      flex-direction:row;
      align-items:center;
      box-sizing:border-box;
      padding-right:0px;
   
    }
    .button {
      width:18px;
      height: 18px;
      margin-left:14px;
      cursor:pointer;
    }
    .button img {
      width: 18px;
      height: 18px;
    }
    .items {
      width:280px;

      display:flex;
      flex-direction:row;
      flex-wrap: wrap;

   
    }
  `;E([n({type:Object})],_.prototype,"documentState",2);E([n({type:String})],_.prototype,"selectedNodeId",2);E([n({type:String})],_.prototype,"variantSetId",2);E([n({type:Boolean})],_.prototype,"locked",2);customElements.define("variant-picker-list",_);var ie=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,F=(a,e,t,i)=>{for(var o=i>1?void 0:i?oe(e,t):e,s=a.length-1,r;s>=0;s--)(r=a[s])&&(o=(i?r(e,t,o):r(o))||o);return i&&o&&ie(e,t,o),o};class I extends b{constructor(){super(...arguments),this.documentState={},this.selectedNodeId="",this.variantSetId="",this.nodeId=""}handleVariantSelect(e){f(this,{action:"select-variant",id:this.selectedNodeId,value:e})}handleTextChange(e){f(this,{action:"set-text",id:this.nodeId,value:e.target.value})}render(){const e=this.documentState.nodes[this.nodeId],t=e.data.text;return h`
      <section>
        <h3>${e.data.name}</h3>
       <textarea
        @keyup=${this.handleTextChange}
        >${t}</textarea>
      </section>
    `}}I.styles=x`

    variant-picker-item {
      margin-right: 8px;
      position: relative;
      display: inline-block;
      line-height: 0;
      cursor: pointer;
      box-shadow: 0 0 0 2px #FFFFFF;
      border-radius:8px;
      background: rgb(244, 244, 244);
    }
    h3 {
      font-size:12px;
      font-weight: 400;
      padding:0px;
      margin:24px 0 5px 0;
    }
    variant-picker-item[selected] {
      box-shadow: 0 0 0 2px #242424;
      border-radius:8px;
    }
    textarea {
        resize:none;
        margin-top:0px;
        margin-left: -1px;
        margin-bottom:8px;
        min-height: 67px;
        color: #444444;
        width: 100%;
        padding-left: 12px;
        padding-bottom: 8px;
        padding-top: 6px;
        font-size: 14px;
        box-sizing: border-box;
        border: 2px solid #d4d4d4;
        border-radius: 8px;
        font-family: adobe-clean;
        
        transition: all 200ms ease-in-out;
    }
  `;F([n({type:Object})],I.prototype,"documentState",2);F([n({type:String})],I.prototype,"selectedNodeId",2);F([n({type:String})],I.prototype,"variantSetId",2);F([n({type:String})],I.prototype,"nodeId",2);customElements.define("swap-text",I);var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,m=(a,e,t,i)=>{for(var o=i>1?void 0:i?re(e,t):e,s=a.length-1,r;s>=0;s--)(r=a[s])&&(o=(i?r(e,t,o):r(o))||o);return i&&o&&se(e,t,o),o};class u extends b{constructor(){super(),this.documentState={},this.selectedNodeId="",this.variantSetId="",this.nodeId="",this.dragging=!1,this.hzOriginalImg="",this.hzOriginalFile={},this.height=0,this.width=0,this.x=0,this.y=0,this.hover=!1,this.variantBounds=[],this.addEventListener("dragenter",this.handleDragEnter),this.addEventListener("dragleave",this.handleDragLeave,!1),this.addEventListener("dragover",this.handleDragOver,!1),this.addEventListener("drop",this.handleDrop,!1)}firstUpdated(){const e=this.documentState.nodes[this.nodeId];this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height;const t=[];e.variantSetId?this.documentState.nodes[e.variantSetId].items.forEach(o=>{const s=this.documentState.nodes[o],r={x:s.x,y:s.y,width:s.width,height:s.height};t[s.id]=r}):t[e.id]={x:e.x,y:e.y,width:e.width,height:e.height},this.variantBounds=t}updated(e){}handleDragOver(e){this.dragging=!0,e.preventDefault()}handleDragLeave(e){this.dragging=!1,e.preventDefault()}handleDragEnter(e){e.preventDefault()}handleDrop(e){new FileReader;let i=e.dataTransfer.files[0];this.handleFiles(i),this.hover=!1,e.preventDefault()}handleFiles(e){console.log("handle");var t=new FileReader;let i=e.type;t.onload=o=>{var s=new Image;s.src=o.target.result,s.onload=()=>{console.log("loaded");let r={height:this.height,width:this.width,x:this.x,y:this.y};this.documentState.nodes[this.nodeId];let l={src:o.target.result,width:s.width,height:s.height,type:i,bounds:this.variantBounds},d=this.cover(r,l);console.log(d),console.log(l),console.log(this.nodeId),f(this,{action:"swap-image",id:this.nodeId,data:l})}},t.readAsDataURL(e)}cover(e,t){e.width/e.height,t.width/t.height;let i=Math.max(e.width/t.width,e.height/t.height),o=t.width*i,s=t.height*i;return{w:o,h:s}}handleVariantSelect(e){f(this,{action:"select-variant",id:this.selectedNodeId,value:e})}handleTextChange(e){f(this,{action:"set-text",id:this.nodeId,value:e.target.value})}useSelection(){this.handleFiles(this.hzOriginalFile)}upload(e){var t;this.shadowRoot&&(t=this.shadowRoot.getElementById("fileUpload"),t&&t.click())}handleUpload(e){const t=e.target,{files:i}=t;FileReader&&i&&i.length&&this.handleFiles(i[0])}enter(){this.hover=!0,console.log("enter")}exit(){console.log("exit"),this.hover=!1}render(){const e=this.documentState.nodes[this.nodeId];return e.data.text,h`
      <section>
        <h3>${e.data.name}</h3>
        <div class="container ${this.hover?"hover":""}">
      
          
          
          <div class="droparea">
            <div  @dragenter=${this.enter} @dragleave=${this.exit} @dragend=${this.exit}  class="thumb" style="background-image:url('${e.data.src}');"></div>
           
          </div>
          <div><button  class="button" @click=${this.useSelection}>From canvas</button></div>
           <div><button  class="browse" @click=${this.upload}>Browse <input @change=${this.handleUpload} hidden  id="fileUpload" type="file"/></button></div>
          <!-- <div class="instructions">
              <div class="instructIcon">
                <img src="public/files/upload_image_icon.png" />
              </div>
            <div class="instructText">
              Drop file to replace with your photo.
            <div> -->
           
   
     
    <!-- ${this.hzOriginalFile!=""?h`<div class="currentImage" @click=${this.useSelection}>
            <img  src=${this.hzOriginalImg}/>
          </div>`:void 0}
    
     
      </div> -->
      </section>
    `}}u.styles=x`

    variant-picker-item {
      margin-right: 8px;
      position: relative;
      display: inline-block;
      line-height: 0;
      cursor: pointer;
      box-shadow: 0 0 0 2px #FFFFFF;
      border-radius:8px;
      background: rgb(244, 244, 244);
    }
    h3 {
      font-size:14px;
      font-weight: 800;
      padding:0px;
      margin:24px 0 8px 0;
    }
    variant-picker-item[selected] {
      box-shadow: 0 0 0 2px #242424;
      border-radius:8px;
    }
    .hoverContainer {
      position:absolute;
      left:0;
      right:0;
      bottom: 0;
      top:0;
      background-color:rgba(0,0,0,0.3);
      pointer-events: none; 
    }
    .container {
      position:relative;
      display: flex;
        flex-direction: row;

        border-radius: 8px;
        align-items: center;
        justify-content: space-between;
        background-position: cover;
        margin-bottom: 12px;
        height:60px;
        padding-right:16px;
        border:3px dashed #D4D4D4;

       
    }
    .container.hover {
      background-color:#E5EBF7;
    }
    .droparea {
      overflow: hidden;

     border:2px solid #F8F8F8;
     box-sizing:border-box;
      margin-left:13px;
      width:42px;
      height:42px;
      border-radius: 8px;
      box-sizing: border-box;

      /* width: 195px;
        min-height: 74px;
        border: 2px dashed #d4d4d4;
        background-color: #f8f8f8;
        border-radius: 8px;
        margin-bottom: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 2px;
        margin-bottom: 2px;
        margin-right: 2px; */
    }
    .thumb {
     
      width:54px;
      height:54px;
      flex-shrink: 0;
      background-size: cover;
      border-radius: 8px;
      
      
    }
    .thumb img {
      width:100%;
    }
    .instructions {
        display: flex;
        font-size: 14px;
        color: #909090;
        align-items: center;
        margin-left: 12px;
        position:relative;
      }
      .instructText {
        width: 113px;
        margin-left: 7px;
        position:relative;
      }
      .instructIcon img {
        width: 21px;
      }
      .text {
        margin-bottom: 12px;
      }
      .currentImage {
        width:54px;
        height:54px;
        margin-left:12px;
      }
      .currentImage img {
        width:100%;
      }
      button {
        padding-left:12px;
        padding-right: 12px;
        font-size:12px;
        font-weight:bold;
        border: 2px solid #D5D5D5;
        border-radius:12px;
        height:24px;
        background-color:white;
        font-family:adobe-clean;
        padding-bottom:2px;
        box-sizing: border-box;
        cursor:pointer;

      }
      .browse {
        background-color: #E6E6E6;
        border: 2px solid #E6E6E6;
      }
      .inactive {
        opacity:0.5;
        color: grey;
      }
  `;m([n({type:Object})],u.prototype,"documentState",2);m([n({type:String})],u.prototype,"selectedNodeId",2);m([n({type:String})],u.prototype,"variantSetId",2);m([n({type:String})],u.prototype,"nodeId",2);m([n({type:Boolean})],u.prototype,"dragging",2);m([n({type:String})],u.prototype,"hzOriginalImg",2);m([n({type:Object})],u.prototype,"hzOriginalFile",2);m([n({type:Number})],u.prototype,"height",2);m([n({type:Number})],u.prototype,"width",2);m([n({type:Number})],u.prototype,"x",2);m([n({type:Number})],u.prototype,"y",2);m([n({type:Boolean})],u.prototype,"hover",2);m([n({type:Array})],u.prototype,"variantBounds",2);customElements.define("swap-image",u);var ae=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,k=(a,e,t,i)=>{for(var o=i>1?void 0:i?ne(e,t):e,s=a.length-1,r;s>=0;s--)(r=a[s])&&(o=(i?r(e,t,o):r(o))||o);return i&&o&&ae(e,t,o),o};class v extends b{constructor(){super(...arguments),this.documentState={},this.id="",this.mode="fill",this.rootNode={},this.hzOriginalImg="",this.hzOriginalFile={},this._node={}}updated(e){}willUpdate(e){if(e.has("id")||e.has("documentState")){const{nodes:t}=this.documentState;if(t){const i=t[this.id];i&&(this._node=i)}}}preorderTraversal(e){const t=[this.documentState.rootNodeId],i=[0];for(;t.length;){const o=t.pop(),s=i.pop(),r=this.documentState.nodes[o];t.push(...r.children),i.push(...Array(r.children.length).fill(s+1)),e(r,s)}}shuffleAll(){console.log("Shuffle All"),this.preorderTraversal((e,t)=>{if(e.variantSetId&&this.mode=="adjust"){let i=this.documentState.nodes[e.variantSetId].items[Math.floor(Math.random()*this.documentState.nodes[e.variantSetId].items.length)];e.variantSetId&&f(this,{action:"select-variant",id:e.id,value:i})}})}render(){const e=[];return this.mode=="adjust"&&e.push(h`
        <!-- / -->
      `),this.preorderTraversal((t,i)=>{t.variantSetId&&this.mode=="adjust"?e.push(h`
        
          <variant-picker-list
            .selectedNodeId=${t.id}
            .mode=${this.mode}
            .variantSetId=${t.variantSetId}
            .documentState=${this.documentState}
          ></variant-picker-list>
        `):t.data.swappable&&this.mode=="fill"&&t.type=="text"?e.push(h`
          <swap-text
            .mode=${this.mode}
            .selectedNodeId=${t.id}
            .nodeId = ${t.id}
            .variantSetId=${t.variantSetId}
            .documentState=${this.documentState}
          ></swap-text>
        `):t.data.swappable&&this.mode=="fill"&&t.type=="image"&&e.push(h`
          <swap-image
            .mode=${this.mode}
            .selectedNodeId=${t.id}
            .nodeId = ${t.id}
            .variantSetId=${t.variantSetId}
            .documentState=${this.documentState}
            .hzOriginalImg=${this.hzOriginalImg}
            .hzOriginalFile=${this.hzOriginalFile}
          ></swap-image>
          
        `)}),h`
      ${e}
    `}}v.styles=x`
    .shuffle {
    background-color: #242424;
    color:white;
    border-radius: 20px;

    height:40px;
    padding: 0px 16px 0px 16px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:17px;
    position: absolute;
    right:12px;
    top:12px;
    bottom:0px;
  }
    
  `;k([n({type:Object})],v.prototype,"documentState",2);k([n({type:String})],v.prototype,"id",2);k([n({type:String})],v.prototype,"mode",2);k([n({type:Object})],v.prototype,"rootNode",2);k([n({type:String})],v.prototype,"hzOriginalImg",2);k([n({type:Object})],v.prototype,"hzOriginalFile",2);customElements.define("pack-controls",v);var de=Object.defineProperty,le=Object.getOwnPropertyDescriptor,M=(a,e,t,i)=>{for(var o=i>1?void 0:i?le(e,t):e,s=a.length-1,r;s>=0;s--)(r=a[s])&&(o=(i?r(e,t,o):r(o))||o);return i&&o&&de(e,t,o),o};class y extends b{constructor(){super(...arguments),this.documentState={},this.id="",this.mode="fill",this.rootNode={},this.hzOriginalImg="",this.hzOriginalFile={},this._node={}}updated(e){}willUpdate(e){if(e.has("id")||e.has("documentState")){const{nodes:t}=this.documentState;if(t){const i=t[this.id];i&&(this._node=i)}}}preorderTraversal(e){const t=[this.documentState.rootNodeId],i=[0];for(;t.length;){const o=t.pop(),s=i.pop(),r=this.documentState.nodes[o];t.push(...r.children),i.push(...Array(r.children.length).fill(s+1)),e(r,s)}}shuffleAll(){this.preorderTraversal((e,t)=>{if(e.variantSetId&&console.log(`SHUF: ${e.data.name} : ${e.id} vs: '${e.variantSetId}'`),e.variantSetId&&this.mode=="adjust"){let i=this.documentState.nodes[e.variantSetId].items[Math.floor(Math.random()*this.documentState.nodes[e.variantSetId].items.length)];e.variantSetId&&(console.log("has variant"),setTimeout(()=>f(this,{action:"select-variant",id:e.id,value:i}),1e3))}})}render(){const e=[];return this.mode=="adjust"&&e.push(h`
        <div class="shuffle_bar">
           <div @click=${this.shuffleAll} class="shuffle">Shuffle</div>
        </div>
      `),h`
      ${e}
    `}}y.styles=x`
    .shuffle {
    background-color: #242424;
    color:white;
    border-radius: 20px;

    height:24px;
    width:60px;
  
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
    position: absolute;
    right:24px;
    padding-bottom:2px;
    box-sizing: border-box;
    bottom: 16px;
    cursor:pointer;
    box-sizing: border-box;
  
    
  }
    .shuffle_bar {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,e5e5e5+100,ffffff+100&0+0,1+100 */
      background: -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */
      bottom:0px;
      position:fixed;
      left:0px;
      min-width:304px;
      height:50px;
      z-index:10;
    }
  `;M([n({type:Object})],y.prototype,"documentState",2);M([n({type:String})],y.prototype,"id",2);M([n({type:String})],y.prototype,"mode",2);M([n({type:Object})],y.prototype,"rootNode",2);M([n({type:String})],y.prototype,"hzOriginalImg",2);M([n({type:Object})],y.prototype,"hzOriginalFile",2);customElements.define("shuffle-all",y);var he=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,p=(a,e,t,i)=>{for(var o=i>1?void 0:i?ce(e,t):e,s=a.length-1,r;s>=0;s--)(r=a[s])&&(o=(i?r(e,t,o):r(o))||o);return i&&o&&he(e,t,o),o};class c extends b{constructor(){super(),this.documentState={},this.displayGraph={},this.editorState={},this.rootId="",this.scale=1,this.layout="mobile",this.mode="fill",this.hasSwaps=!0,this.id="",this.hzCurrentResourceId="",this.hzInitResourceId="",this.hzInit=!1,this.hzOriginalImg="",this.hzOriginalFile={},this.currentCapture={},this.currentHzImage="",this.setHzImageIn=t=>{var i=new FileReader;t.imageData&&(i.readAsDataURL(t.imageData),i.onloadend=()=>{var o=i.result;fetch(o).then(s=>{this.currentHzImage=s.url})})},this.setSelected=(t,i)=>{},this.renderCallback=L(this.handleModelsDirty.bind(this)),this.cargoKitIndexModel=new K,this.documentModel=new j(this.cargoKitIndexModel),this.editorModel=new W,new URLSearchParams(window.location.search).get("id")||this.id,this.documentController=new G(this.documentModel,this.editorModel,this.renderCallback),this.editorController=new V(this.documentController,this.documentModel,this.editorModel,this.renderCallback),this.handleModelsDirty(),setInterval(function(){window.parent.postMessage({type:"GetImage"},"*")},500)}firstUpdated(e){this.loadDocument(this.id)}loadDocument(e){this.documentModel.hydrateFromStorageService(e).then(()=>{this.rootId=this.documentModel.findAll(s=>s.type==="artboard")[0];const{width:t,height:i}=this.documentModel.getNode(this.rootId);this.scale=Math.min(192/i,248/t),e!==this.documentModel._state.id&&window.history.replaceState(null,"","?"),this.documentModel._state.nodes[this.rootId]||console.log("invalid node id for this document");let o=!1;this.documentModel.getNode(this.rootId).children.forEach(s=>{this.documentModel.getNode(s).data.swappable&&(o=!0)}),o||(this.mode="adjust"),o?this.hasSwaps=!0:this.hasSwaps=!1,this.renderCallback()})}close(){let e=new CustomEvent("close-modal",{detail:{message:{close:!0}},bubbles:!0,composed:!0});this.dispatchEvent(e)}connectedCallback(){super.connectedCallback(),window.innerWidth<769?this.layout="mobile":this.layout="desktop",window.addEventListener("message",e=>{e.data.resourceEntity?(e.data.resourceEntity!==this.hzCurrentResourceId&&(this.hzOriginalFile=e.data.imageData),this.setHzImageIn(e.data)):this.currentHzImage="",this.hzCurrentResourceId=e.data.resourceEntity}),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){window.removeEventListener("message",()=>{}),super.disconnectedCallback()}handleResize(){}handleModelsDirty(){this.documentState=this.documentModel.state,this.displayGraph=this.documentController.generateDisplayGraph(),this.editorState=this.editorModel.state}place(){this.rootId&&this.editorController.getRenditionDataUrl(this.rootId,2).then(e=>{for(var t=e.split(","),i=t[0].match(/:(.*?);/)[1],o=atob(t[1]),s=o.length,r=new Uint8Array(s);s--;)r[s]=o.charCodeAt(s);this.currentCapture=new File([r],"cargo.png",{type:i}),window.parent.postMessage({type:"SaveImage",file:this.currentCapture,resourceEntity:this.hzInitResourceId},"*"),window.parent.postMessage({pluginMessage:{type:"create-image",id:this.id,image:r},pluginId:"1152340926492617112"},"https://www.figma.com")})}closePlugin(){window.parent.postMessage({type:"OpenPlugin"},"*")}handleDocumentEvent(e){this.documentController.delegateEvent(e.detail)}capture(){this.editorController.delegateEvent({action:"download-rendition",id:this.rootId,scale:1}),X(this,{action:"download-rendition",id:this.rootId,scale:1})}isLoading(){let e=!1;return this.documentModel.getNode(this.rootId)&&this.documentModel.getNode(this.rootId).children.forEach(t=>{this.editorModel.isLoading(t)&&(e=!0)}),e}render(){return h`
    <div class="container">
      <div class="header">
        
        <div @click=${this.close} class="logo">
          <img src="files/icon_back.png" />
        </div>
        <div class="pack_title">${this.documentState.name}</div>
        
        <div class="buttons">
          ${this.hzCurrentResourceId?h`<button class="button update" @click=${this.place}>Update</button></div>`:h`<button class="button place" @click=${this.place}>Place</button></div>`}
        </div>
        <!-- <button @click=${this.capture} class="button">Done</button> -->
        <!-- <button @click=${this.closePlugin} class="button">close</button> -->
      </div>
      
      <div class="render-area">
         <div  class="loader ${this.isLoading()?"showLoader":"hideLoader"}"><loader-ring></loader-ring></div>
        <!-- <div>
         <div>init:!${this.hzInitResourceId}!</div>
        <div>current:!${this.hzCurrentResourceId}!</div>
        <div>isSet:!${this.hzInit} ${this.rootId}!</div>
        <div></div>
      </div> -->

         <renderer-artboard
          .displayGraph=${this.displayGraph}
          .id=${this.rootId}
          .scale=${this.scale}
        ></renderer-artboard>
      </div>
      
      <div class="control-area">
        <!-- <div class="control-header">
        ${this.mode=="adjust"?h`
          <h2>Adjust</h2>
        `:h`
          <h2>Fill</h2>
        `}
        </div> -->
        
        <pack-controls
          .mode=${this.mode}
          .id=${this.rootId}
          .rootNode=${this.documentModel.getNode(this.rootId)}
          .documentState=${this.documentState}
          @documentEvent="${this.handleDocumentEvent}"
          .hzOriginalImg=${this.currentHzImage}
          .hzOriginalFile=${this.hzOriginalFile}
        ></pack-controls>
        
      </div>
      
      ${this.hasSwaps?h`
      <div class="switcher">
        <div class="switcher-container">
        <div class="tool-bar">
          <div class="toolbuttons">
            <div @click=${()=>this.mode="fill"} class="${this.mode=="fill"?"selected ":void 0} tool">
            <img src="files/icon_bucket@2x.png"/>
            <div>Replace</div>
          </div>
          <div @click=${()=>this.mode="adjust"} class="${this.mode=="adjust"?"selected ":void 0} tool">
            <img src="files/icon_var@2x.png"/>
            <div>Adjust</div>
          </div>
        </div>
        <div class="selector  ${this.mode=="fill"?"fill ":"adjust"}"></div>

        </div>
        </div>
      </div>
      <!-- <div class="switcher">
        <div class="switcher-container">
        <div class="tool-bar">
          <div class="toolbuttons">
            <div @click=${()=>this.mode="fill"} class="${this.mode=="fill"?"selected ":void 0} tool">
            <img src="files/icon_bucket@2x.png"/>
            <div>Replace</div>
          </div>
          <div @click=${()=>this.mode="adjust"} class="${this.mode=="adjust"?"selected ":void 0} tool">
            <img src="files/icon_var@2x.png"/>
            <div>Adjust</div>
          </div>
        </div>
        <div class="selector  ${this.mode=="fill"?"fill ":"adjust"}"></div>

        </div>
        </div>
      </div> -->
      
      <!-- <div class="switcher">
        <div class="tool-bar">
          <div class="toolbuttons">
            <div @click=${()=>this.mode="fill"} class="${this.mode=="fill"?"selected ":void 0} tool">
            <img src="files/icon_bucket@2x.png"/>
            <div>Replace</div>
          </div>
          <div @click=${()=>this.mode="adjust"} class="${this.mode=="adjust"?"selected ":void 0} tool">
            <img src="files/icon_var@2x.png"/>
            <div>Adjust</div>
          </div>
        </div>
        <div class="selector  ${this.mode=="fill"?"fill ":"adjust"}"></div>

        </div>
      </div> -->
      `:void 0}
      
      <shuffle-all .mode=${this.mode} .id=${this.rootId}
          .rootNode=${this.documentModel.getNode(this.rootId)}
          .documentState=${this.documentState}
          @documentEvent="${this.handleDocumentEvent}"
          .hzOriginalImg=${this.currentHzImage}
          .hzOriginalFile=${this.hzOriginalFile}></shuffle-all>
    </div>
    `}}c.styles=x`
  :host {
    position:fixed;
    top:0px;
    left:0px;
    width:304px;
    z-index:100;
  }
  .loader {
    position:absolute;
    height:310px;
    width:310px;
    backdrop-filter: blur(10px);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:10;
    background-color: rgba(0,0,0,0.2);
    
  }
  .hideLoader {
    opacity: 0;
    transition:all 500ms ease-in-out;
    transition-delay: 500ms;
  }
  .showLoader {
    opacity: 1;
    transition:all 500ms ease-in-out;
    
  }
  .container {
    max-width:304px;
    height:100vh;
    margin:auto;
    overflow:hidden;
    position:relative;
    border-radius:8px;
    box-shadow: 4px 0px 20px 0px rgba(0, 0, 0, 0.1);
    font-family: adobe-clean;
    transition: all 200ms ease-in-out;
    background-color: #FFFFFF;
  }
  .pack_title {

    max-width:93px;
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
  .render-area {
    display:flex;
    justify-content:center;
    align-items: center;
   // width:239px;
   border:8px solid #F4F4F4;
   width:256px;
   background-color:#F4F4F4;

    height:200px;
    position: absolute;
    top:70px;
    bottom:0;
    left:24px;
    box-sizing: border-box;
    transition: all 200ms ease-in-out;
    

    border-radius:8px;
    overflow:hidden;
  }
  .buttons {
    display:flex;
    flex-direction:row;
    justify-content:flex-end; 
    flex-grow: 1;
    padding-right:12px;
  }
  .control-area {
    background-color: #FFFFFF;
    position: absolute;
    right:0px;
    left:0px;
    top:325px;
    width: 304px;
    bottom:0px;
    box-sizing:border-box;
    padding-left:24px;
    padding-right:24px;
    padding-bottom:38px;
    overflow-y:scroll;
    //border-radius:8px;
    z-index:10;
    transition: all 200ms ease-in-out;
  }
  .control-header {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: baseline;
  }
  h2 {
    font-size:24px;
    font-weight: 800;
    color: #242424;
    margin:0;
  }
  
  .tool {
    width:100px;
    height:30px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-bottom:5px;
    transition: all 200ms ease-in-out;
    flex-direction:row;
    font-size:12px;
    cursor:pointer;
    border-radius: 5px;
  }
  .selector {
    position: absolute;
    width:100px;
    height:30px;
    border-radius:15px;
    background-color:#E6E6E6;

  }
  .selector.fill {
    
    transition: all 125ms ease-in-out;
  }
  .selector.adjust {
    transform: translateX(100px);
    transition: all 125ms ease-in-out;
  }
  .tool.selected {
    //background-color: #E9E9E9;
  }
  .tool:hover {
    //background-color: #E9E9E9;
    //
    
  }
  .tool img {
    width:22px;
    height:22px;
    margin-right:8px;
  }
  .shuffle {
    background-color: #242424;
    color:white;
    border-radius: 20px;

    height:40px;
    padding: 0px 16px 0px 16px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:17px;
  }
  .header {
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:50px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items:center;
    font-size: 16px;
    font-weight:800;
    z-index: 20;
    transition: all 200ms ease-in-out;
  }
  .toolbuttons {
    position:absolute;
    width:256px;

    height:30px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    z-index:10;

  }
  .switcher {
    position: absolute;
    right:24px;
    top:280px;
    width:256px;
    display:flex;
    justify-content:center;
    background-color:#FFFFFF;
    z-index:30;
    box-sizing: border-box;
    height:24px;
    
  }
  .switcher-container {
    width:256px;

    height:36px;
    border-radius: 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
  }
  .tool {
    
    height:30px;
    display: flex;
    align-items: center;
    justify-content:center;

    transition: all 200ms ease-in-out;
    flex-direction:row;
    font-size:12px;
    cursor:pointer;
    border-radius: 5px;
    width:125px;
  }
  .selector {
    position: absolute;
    width:125px;
    height:30px;
    border-radius:15px;
    background-color:#E6E6E6;

  }
  .selector.fill {
    
    transition: all 125ms ease-in-out;
  }
  .selector.adjust {
    transform: translateX(125px);
    transition: all 125ms ease-in-out;
  }
  .tool-bar {
    
    width:250px;
    left:0;
    
   
    
    //border:1px solid red;
 

    z-index: 20;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;

    border-radius:12px;
    transition: all 200ms ease-in-out;
    height:29px;
  }
  .button {
    background-color:#5C5CE0;
    color:#FFFFFF;
    border: none;
    height: 24px;
    box-sizing:border-box;
    font-size:12px;
    font-weight: bold;
    border-radius: 20px;
    margin-right:12px;
    cursor:pointer;
    font-family:adobe-clean;
    width:54px;

  }
  .button.update {
    background-color:#222222;
    color:white;
  }
  .logo {
    height: 40px;

    margin-right:8px;
    margin-left:19px;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items: center;
    
  }
  .logo img {
    width:22px;
    height:22px;
  }
  @media only screen and (min-width: 768px) {
    /* :host {
      top:100px;
    }
    .container {
      max-width:735px;
      position:relative;
      height:429px;
      margin:auto;
      background-color: #F4F4F4;
      transition: all 200ms ease-in-out;
    }
    .control-area {
      background-color: #FFFFFF;
      position: absolute;
      right:60px;
      left:inherit;
      top:95px;
      border-radius:4px;
      width: 283px;
      box-sizing:border-box;
      height:360px;
      padding:16px;
      overflow-y:scroll;
      z-index:30;
      transition: all 200ms ease-in-out;
    } */
    /* .tool-bar {
      position: absolute;
      right:0;
      top:105px;
      bottom:0;
      left:inherit;
      
      background-color: #F4F4F4;
      z-index:9;
      display:flex;
      flex-direction:column;
      align-items: center;
      transition: all 200ms ease-in-out;

  } */
    
    
  /* .render-area {
    display:flex;
    justify-content:center;
    align-items: center;
    width:50%;
    position: absolute;
    top:0px;
    bottom:0;
    left:0;
    padding:100px 12px 12px 12px;
    height: 100%;
    box-sizing: border-box;
    background-color: #F4F4F4;
    border-radius:8px;
    overflow:hidden;

  } */
} 
  `;p([n({type:Object})],c.prototype,"documentState",2);p([n({type:Object})],c.prototype,"displayGraph",2);p([n({type:Object})],c.prototype,"editorState",2);p([n({type:String})],c.prototype,"rootId",2);p([n({type:Number})],c.prototype,"scale",2);p([n({type:String})],c.prototype,"layout",2);p([n({type:String})],c.prototype,"mode",2);p([n({type:Boolean})],c.prototype,"hasSwaps",2);p([n({type:String})],c.prototype,"id",2);p([n({type:String})],c.prototype,"hzCurrentResourceId",2);p([n({type:String})],c.prototype,"hzInitResourceId",2);p([n({type:Boolean})],c.prototype,"hzInit",2);p([n({type:String})],c.prototype,"hzOriginalImg",2);p([n({type:Object})],c.prototype,"hzOriginalFile",2);p([n({type:Object})],c.prototype,"currentCapture",2);p([n({type:String})],c.prototype,"currentHzImage",2);customElements.define("reuse-index",c);export{U as A,V as C,N as D,xe as F,X as e};
