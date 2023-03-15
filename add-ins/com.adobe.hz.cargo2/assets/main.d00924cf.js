import{r as et,u as X,g as Ee,A as tt,C as it}from"./cargo-document-index.5bedc9f1.js";import{g,b as l,d as st,s as f,$ as r,A as m,z as nt,G as Oe,B as ee,t as L}from"./vendor.6b255b86.js";import"./spectrum-theme.f457e828.js";import"./spectrum.080399e2.js";import{e as y,D as E,F as be,A as ue,C as at}from"./editor-controller.31cf0562.js";import{d as p,R as ot,t as rt,M as de,a as lt,g as dt,b as ct,r as ht,D as pt,E as ut,c as gt}from"./editor-model.31d571d3.js";import{S as bt,C as mt}from"./cargo-pack-index.887d40d2.js";import{a as ft}from"./editor-inspector-pack.11edfca6.js";import"./pixi.a553ad36.js";const yt=2,vt=300,xt="gesture-start",$t="gesture-drag-move",kt="gesture-drag-start",wt="gesture-drag-end",St="gesture-click",It="gesture-doubleclick",Pt="gesture-singleclick";class B{constructor(e,t){this.startPoint={x:0,y:0},this.currentPoint={x:0,y:0},this.priorPoint={x:0,y:0},this.totalDistance=0,this.isDragGesture=!1,this.waitingForDoubleClick=!1,this.active=!1,this.promiseResolve=()=>{},this.id=et(),this.boundUpHandler=this.handlePointerUp.bind(this),this.boundMoveHandler=this.handlePointerMove.bind(this),this.boundDownHandler=this.handlePointerDown.bind(this),this.element=t,this.active=!0,this.startPoint={x:e.clientX,y:e.clientY},this.currentPoint=this.startPoint,this.priorPoint=this.startPoint,document.body.addEventListener("pointermove",this.boundMoveHandler),document.body.addEventListener("pointerup",this.boundUpHandler),document.body.addEventListener("pointerdown",this.boundDownHandler),this.emitEvent(xt,e),this.promise=new Promise(i=>{this.promiseResolve=i})}static distance(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}emitEvent(e,t){const{altKey:i,ctrlKey:s,shiftKey:n,metaKey:a}=t;this.element.dispatchEvent(new CustomEvent(e,{bubbles:!0,cancelable:!0,composed:!0,detail:{altKey:i,ctrlKey:s,shiftKey:n,metaKey:a,gestureId:this.id,deltaX:this.currentPoint.x-this.priorPoint.x,deltaY:this.currentPoint.y-this.priorPoint.y,totalDistance:this.totalDistance,totalDeltaX:this.currentPoint.x-this.startPoint.x,totalDeltaY:this.currentPoint.y-this.startPoint.y,startX:this.startPoint.x,startY:this.startPoint.y,currentX:this.currentPoint.x,currentY:this.currentPoint.y}}))}unbind(){document.body.removeEventListener("pointermove",this.boundMoveHandler),document.body.removeEventListener("pointerup",this.boundUpHandler),document.body.removeEventListener("pointerdown",this.boundDownHandler),this.active=!1,this.promiseResolve("gesturecomplete")}handlePointerMove(e){if(e.buttons===0){this.handlePointerUp(e);return}this.priorPoint=this.currentPoint,this.currentPoint={x:e.clientX,y:e.clientY},this.totalDistance=B.distance(this.startPoint,this.currentPoint),this.isDragGesture?this.emitEvent($t,e):this.totalDistance>yt&&(this.isDragGesture=!0,this.emitEvent(kt,e))}handlePointerDown(e){this.waitingForDoubleClick&&(this.emitEvent(It,e),this.waitingForDoubleClick=!1,this.waitingForDoubleClickTimeout&&clearTimeout(this.waitingForDoubleClickTimeout),this.unbind())}handlePointerUp(e){this.isDragGesture?(this.emitEvent(wt,e),this.unbind()):this.waitingForDoubleClick||(this.emitEvent(St,e),this.waitingForDoubleClick=!0,this.waitingForDoubleClickTimeout=setTimeout(()=>{this.emitEvent(Pt,e),this.waitingForDoubleClick=!1,this.unbind()},vt))}}var _t=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,v=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ct(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_t(e,t,s),s};const He=class extends f{constructor(){super(...arguments),this.label="",this.min=0,this.max=100,this.value=50,this.step=1,this.origin=0,this.width=200,this.handleWidth=16,this.handleHeight=16,this.trackHeight=2,this.snapSensitivity=5,this.displayValueRound=0,this.displayValueSuffix="",this.displayValueTooltip=!1,this.displayNumericInput=!1,this.displayIcon=!1,this.tooltipText="",this.iconWidth=28,this.disabled=!1,this.theme="light",this.name="",this.keysPressed=new Map,this.keepFocusWhenChange=!0}connectedCallback(){super.connectedCallback(),this.origin=Math.min(Math.max(this.origin,this.min),this.max),this.value=Math.min(Math.max(this.value,this.min),this.max)}static getSnappedValue(o,e,t){let i=o;for(const s of t)if(Math.abs(s-o)<e){i=s;break}return i}get isRangeInputFocused(){return!!(this.shadowRoot&&this.shadowRoot.activeElement&&this.shadowRoot.activeElement.getAttribute("type")==="range")}get roundedDisplayValue(){if(this.displayValueRound===0)return this.value;const o=1/this.displayValueRound;return Math.round(this.value*o)/o}exitInteractiveState(o=!1){o?this.applyValueFromInput(Number(this.inputEl.value)):this.applyValueFromInput(this.value),this.inputEl.blur()}handleKeyDown(o){if(o.stopPropagation(),this.keysPressed.set(o.key,!0),o.key==="Escape"?this.exitInteractiveState(!1):this.keepFocusWhenChange=this.keysPressed.get("ArrowDown")||this.keysPressed.get("ArrowUp")||this.keysPressed.get("Shift")&&this.keysPressed.get("Enter")||!1,this.keysPressed.get("Shift")){const e=o.target,t=Number(e.value);if(this.keysPressed.get("ArrowDown")){let i=t-9;i<this.min&&(i=this.min+1),e.value=String(i)}else if(this.keysPressed.get("ArrowUp")){let i=t+9;i>this.max&&(i=this.max-1),e.value=String(i)}}}handleKeyUp(o){this.keysPressed.delete(o.key)}applyValueFromInput(o){let e=o;this.isRangeInputFocused&&this.snapList&&(e=He.getSnappedValue(e,this.snapSensitivity,this.snapList)),e!==this.value&&(this.value=e),this.inputEl.value=this.value.toString(),this.requestUpdate()}handleInputValueChange(o){let{value:e}=o.target;if(e==="")return;this.keepFocusWhenChange?this.inputEl.select():this.inputEl.blur();const t=Number(o.target.value);t>this.max?e=this.max:t<this.min&&(e=this.min),this.applyValueFromInput(e)}selectTargetOnFocus(o){o.target.select()}handleBeginGesture(){this.dispatchEvent(new CustomEvent("PX_RANGE_INPUT_BEGIN_GESTURE",{bubbles:!0,cancelable:!0,composed:!0}))}handleEndGesture(){this.dispatchEvent(new CustomEvent("PX_RANGE_INPUT_END_GESTURE",{bubbles:!0,cancelable:!0,composed:!0}))}render(){const o=this.displayNumericInput?40:0,e=this.displayIcon?this.iconWidth:0,t=this.width-o-e,i=Math.min(this.max,Math.max(this.min,this.value)),s=this.max-this.min,n=i>=this.origin,a=(i-this.min)/s,d=t-this.handleWidth,h=this.handleWidth/2,c=h+d*a,u=n?this.origin:i,w=n?i-this.origin:this.origin-i,C=(u-this.min)/s,I=w/s*d+h,q=n?0:h,G=C*d+q,Z=100*G/t,Q=100*I/t,P={width:`${t}px`,height:`${this.handleHeight}px`,paddingRight:`${o}px`,paddingLeft:`${e}px`},T={width:`${t}px`,height:`${this.trackHeight}px`},S={left:`${Math.ceil(Z*1e3)/1e3}%`,width:`${Math.ceil(Q*1e3)/1e3}%`},R={width:`${this.handleWidth}px`,height:`${this.handleHeight}px`,marginLeft:`-${this.handleWidth/2}px`,left:`${e+Math.ceil(c*1e3)/1e3}px`};return r`
      <div
        class="range-input_wrapper range-input_theme-${this.theme}"
        ?disabled="${this.disabled}"
      >
        ${this.label?r` <label class="range-input_label">${this.label}</label> `:""}
        <div class="range-input_input-wrapper" style=${m(P)}>
          ${this.displayIcon?r`
                ${this.tooltipText.length>0?r`
                      <theo-info-tooltip
                        class="cancel-tooltip"
                        placement="top-left"
                      >
                        <span slot="message">${this.tooltipText}</span>
                        <theo-icon-base slot="trigger"></theo-icon-base>
                      </theo-info-tooltip>
                    `:r` <theo-icon-base></theo-icon-base> `}
              `:""}
          ${this.displayNumericInput?r`
                <input
                  aria-label="Numeric Input for ${this.label||"Slider"}"
                  @focus=${this.selectTargetOnFocus}
                  @change=${this.handleInputValueChange}
                  @keydown=${this.handleKeyDown}
                  @keyup=${this.handleKeyUp}
                  type="number"
                  step=${this.step}
                  min="${this.min}"
                  max="${this.max}"
                  .value="${i}"
                  ?disabled="${this.disabled}"
                />
                <div class="numeric-input-suffix">
                  ${this.displayValueSuffix}
                </div>
              `:""}
          <input
            aria-label="Range Input for ${this.label||"Slider"}"
            @input=${this.handleInputValueChange}
            @pointerdown=${this.handleBeginGesture}
            @pointerup=${this.handleEndGesture}
            type="range"
            step=${this.step}
            min=${this.min}
            max=${this.max}
            .value=${i}
            ?disabled="${this.disabled}"
          />
          <div class="track" style=${m(T)}>
            <div class="progress" style=${m(S)}></div>
          </div>
          <div class="handle" style=${m(R)}>
            ${this.displayValueTooltip?r`
                  <label
                    >${this.roundedDisplayValue}${this.displayValueSuffix}<i></i
                  ></label>
                `:""}
          </div>
          <style>
            input[type='range']::-webkit-slider-thumb {
              width: ${this.handleWidth}px;
              height: ${this.handleHeight}px;
            }
            input[type='range']::-moz-range-thumb {
              width: ${this.handleWidth}px;
              height: ${this.handleHeight}px;
            }
          </style>
        </div>
      </div>
    `}};let b=He;b.styles=g`
    :host {
      position: relative;
      display: inline-block;
    }

    .range-input_wrapper[disabled] {
      opacity: 0.3;
      pointer-events: none;
    }

    .range-input_input-wrapper {
      position: relative;
      display: block;
    }

    .range-input_label {
      padding-bottom: 5px;
      display: block;
    }

    .range-input_number-input_label {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    input[type='range'] {
      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
      width: 100%; /* Specific width is required for Firefox. */
      background: transparent; /* Otherwise white in Chrome */
      position: relative;
      display: block;
      top: 0;
      margin: 0;
      padding: 0;
      height: 100%;
      outline: none;
      border: 0;
      cursor: pointer;
      opacity: 1;
    }

    /* fix firefox border bug */
    input[type='range']::-moz-focus-outer {
      border: 0;
    }

    input[type='range']:focus {
      outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
    }

    input[type='range']::-ms-track {
      width: 100%;
      cursor: pointer;

      /* Hides the slider so custom styles can be added  */
      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      border: none;
      cursor: pointer;
      opacity: 1;
      background-color: transparent;
      width: 10px;
      height: 10px;
    }

    input[type='range']::-moz-range-thumb {
      border: none;
      cursor: pointer;
      opacity: 1;
      background: transparent;
      width: 10px;
      height: 10px;
    }

    input[type='number'] {
      -webkit-appearance: none;
      -moz-appearance: textfield;
      background: transparent;
      font-size: 14px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      width: 25px;
      height: 20px;
      line-height: 1.5rem;
      text-align: right;
      outline: none;
      color: #242b33;
      margin: 0;
      padding: 0;
      border: 0;
      border-bottom: 2px #e4007c solid;
    }

    /* Remove controls from Safari and Chrome */
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0; /* Removes leftover margin */
    }

    input[type='number']:focus {
      background: #ffcfe9;
    }

    .numeric-input-suffix {
      font-size: 14px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-top: -1px;
      left: 100%;
      padding-left: 2px;
      width: 25px;
      line-height: 1.5rem;
    }

    .track {
      pointer-events: none;
      background: #b6b6b6;
      position: absolute;
      display: block;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      z-index: 0;
    }

    .progress {
      height: 100%;
      left: 0;
      background: #e4007c;
      position: absolute;
      display: block;
      cursor: pointer;
    }

    .handle {
      pointer-events: none;
      position: absolute;
      display: block;
      cursor: pointer;
      background: #e4007c;
      top: 50%;
      transform: translateY(-50%);
    }

    .handle label {
      display: none;
      position: absolute;
      top: -34px;
      left: 50%;
      width: auto;
      height: 24px;
      background: #e4007c;
      color: #fff;
      transform: translate(-50%, 0);
      padding: 0 6px;
      line-height: 1.5rem;
      white-space: nowrap;
    }

    .handle label i {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #e4007c;
      bottom: -4px;
      left: 50%;
      margin-left: -4px;
    }

    input[type='range']:active ~ .handle {
      background: #f4209c;
    }

    input[type='range']:active ~ .handle label {
      display: block;
    }

    /*
    //
    // JELLY THEME STYLES
    // NOTE: if/when we want style variations
    //       of the range input, we should style
    //       them here
    */
    .range-input_theme-jelly .track {
      background: #e4007c;
      border-radius: 4px;
    }

    .range-input_theme-jelly .progress {
      background: #ff40bc;
      border-radius: 4px;
    }

    .range-input_theme-jelly input[type='range'] ~ .handle {
      background: #fff;
      border-radius: 4px;
      /* box-shadow: inset 0 0 0 2px #000, 0 0 0 4px #fff; */
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
    }

    .range-input_theme-jelly input[type='range'] ~ .handle label {
      background: #000;
      color: #fff;
      border-radius: 4px;
    }

    .range-input_theme-jelly input[type='range'] ~ .handle label i {
      border-top-color: #000;
    }

    .range-input_theme-jelly input[type='range']:active ~ .handle {
      box-shadow: inset 0 0 0 6px #0099ff 0 0 0 4px #fff;
    }

    .range-input_theme-jelly input[type='range']:active ~ .handle label {
      display: block;
    }

    .range-input_theme-jelly input[type='number'] {
      color: #242b33;
      border-bottom: 2px #0099ff solid;
    }

    .range-input_theme-jelly input[type='number']::selection {
      background: #0099ff;
    }

    .range-input_theme-jelly input[type='number']:focus {
      background: transparent;
      border-bottom-color: #0099ff;
    }

    /*
    //
    // TIMELINE THEME STYLES
    */
    .range-input_theme-timeline .track {
      background: #000;
      border-radius: 4px;
    }

    .range-input_theme-timeline .progress {
      background: #222;
      border-radius: 4px;
    }

    .range-input_theme-timeline input[type='range'] ~ .handle {
      background: #ffff00;
      border-radius: 1px;
      /* box-shadow: inset 0 0 0 2px #000, 0 0 0 4px #fff; */
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.25);
    }

    .range-input_theme-timeline input[type='range'] ~ .handle label {
      background: #000;
      color: #fff;
      border-radius: 4px;
    }

    .range-input_theme-timeline input[type='range'] ~ .handle label i {
      border-top-color: #000;
    }

    .range-input_theme-timeline input[type='range']:active ~ .handle {
      box-shadow: inset 0 0 0 6px #0099ff 0 0 0 4px #fff;
    }

    .range-input_theme-timeline input[type='range']:active ~ .handle label {
      display: block;
    }

    .range-input_theme-timeline input[type='number'] {
      color: #242b33;
      border-bottom: 2px #0099ff solid;
    }

    .range-input_theme-timeline input[type='number']::selection {
      background: #0099ff;
    }

    .range-input_theme-timeline input[type='number']:focus {
      background: transparent;
      border-bottom-color: #0099ff;
    }
  `;v([l({type:String})],b.prototype,"label",2);v([l({type:Number})],b.prototype,"min",2);v([l({type:Number})],b.prototype,"max",2);v([l({type:Number,reflect:!0})],b.prototype,"value",2);v([l({type:Number})],b.prototype,"step",2);v([l({type:Number})],b.prototype,"origin",2);v([l({type:Number})],b.prototype,"width",2);v([l({type:Number})],b.prototype,"handleWidth",2);v([l({type:Number})],b.prototype,"handleHeight",2);v([l({type:Number})],b.prototype,"trackHeight",2);v([l({type:Number})],b.prototype,"snapSensitivity",2);v([l({type:Array})],b.prototype,"snapList",2);v([l({type:Number})],b.prototype,"displayValueRound",2);v([l({type:String})],b.prototype,"displayValueSuffix",2);v([l({type:Boolean})],b.prototype,"displayValueTooltip",2);v([l({type:Boolean})],b.prototype,"displayNumericInput",2);v([l({type:Boolean})],b.prototype,"displayIcon",2);v([l({type:String})],b.prototype,"tooltipText",2);v([l({type:Number})],b.prototype,"iconWidth",2);v([l({type:Boolean})],b.prototype,"disabled",2);v([l({type:String})],b.prototype,"theme",2);v([l({type:String})],b.prototype,"name",2);v([st("input")],b.prototype,"inputEl",2);customElements.define("px-range-input",b);var Dt=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,Ot=(o,e,t,i)=>{for(var s=i>1?void 0:i?Et(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Dt(e,t,s),s};class me extends f{constructor(){super(...arguments),this.currentTime=0}handlePlayPauseClick(){y(this,{action:"timeline-playpause-toggle"})}handleSliderInput(e){y(this,{action:"timeline-pause",originalEvent:e}),y(this,{action:"timeline-set-value",value:e.target.value,originalEvent:e}),this.currentTime=e.target.value}render(){return r`
      <section>
        <button @click=${this.handlePlayPauseClick}>Play/Pause</button>
        <px-range-input
          @input=${this.handleSliderInput}
          min="0"
          max="1"
          width="370"
          step="0.01"
          theme="timeline"
          value=${this.currentTime}
          handleWidth="2"
          handleHeight="40"
          trackHeight="40"
        ></px-range-input>
      </section>
    `}}me.styles=g`
    :host {
      position: absolute;
      /* bottom: 50px; */
      left: 50%;
      margin-left: -250px;
      height: 60px;
      width: 500px;
    }

    :host * {
      user-select: none;
      -webkit-user-select: none;
    }

    section {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      /* background-color: rgba(249, 249, 249, 0.5); */
      /* background-color: rgba(20,20,20, 0.5); */
      /* border-radius: 10px; */
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 0 1px #e4e4e4;
      /* backdrop-filter: blur(10px); */
      /* -webkit-backdrop-filter: blur(10px); */
    }

    section button {
      position: absolute;
      top: 10px;
      left: 10px;
      height: 40px;
      width: 100px;
    }

    section px-range-input {
      position: absolute;
      top: 10px;
      left: 120px;
    }
  `;Ot([l({type:Number})],me.prototype,"currentTime",2);customElements.define("editor-timeline",me);var Tt=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,ce=(o,e,t,i)=>{for(var s=i>1?void 0:i?Nt(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Tt(e,t,s),s};class J extends f{constructor(){super(...arguments),this.icon="",this.label="default",this.selected=!1,this.inactive=!1,this.iconStyles=m({})}willUpdate(e){e.has("icon")&&(this.iconStyles=m({mask:`url('${this.icon}')`,"-webkit-mask":`url('${this.icon}')`}))}render(){return r`
      <li ?selected=${this.selected} ?inactive=${this.inactive}>
        <i style="${this.iconStyles}"></i><label>${this.label}</label>
      </li>
    `}}J.styles=g`
    li {
      position: relative;
      display: block;
      pointer-events: initial;
      text-align: center;
      margin: 8px 5px;
      border-radius: 12px;
      line-height: 0;
      width: 45px;
      height: 45px;
    }

    li * {
      pointer-events: none;
    }

    li i {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-top: 14px;
      margin-bottom: 0px;
      background-color: #444444;
    }

    label {
      display: none;
      font-size: 12px;
      font-family: adobe-clean;
      font-weight: 700;
      font-style: normal;
      padding-bottom: 8px;
      line-height: 20px;
      user-select: none;
      color: #444444;
    }

    li:hover {
      background-color: #f4f4f4;
    }

    li[selected] {
      background-color: #e8e8e8;
    }

    li[selected] i {
      background-color: #000;
    }

    li[selected] label {
      color: #000;
    }

    li[selected][inactive] {
      background-color: transparent;
    }

    li[selected][inactive] i {
      background-color: #999999;
    }

    li[selected][inactive] label {
      color: #999999;
    }

    li[selected][inactive]:hover {
      background-color: #f4f4f4;
    }
  `;ce([l({type:String})],J.prototype,"icon",2);ce([l({type:String})],J.prototype,"label",2);ce([l({type:Boolean})],J.prototype,"selected",2);ce([l({type:Boolean})],J.prototype,"inactive",2);customElements.define("editor-toolbar-icon",J);var Ht=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,At=(o,e,t,i)=>{for(var s=i>1?void 0:i?jt(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ht(e,t,s),s};class fe extends f{constructor(){super(...arguments),this.editorState={}}handlePick(e,t){p(this,{action:`add-${e}`,data:t})}panelStyles(){return{width:`${E.TOOLBAR_STANDARD_WIDTH}px`}}loadFile(e){X(e).then(t=>{this.handlePick("image",{src:t.url,width:t.width,height:t.height})})}handleFileInputChange(e){const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let s=0;s<i.length;s+=1)this.loadFile(i[s])}handleLayersClick(){y(this,{action:"layers-toggle"})}handleIconClick(e){y(this,{action:"activate-toolbar-section",data:e})}render(){const{selections:e,isLayersPaletteOpen:t,activeToolbarSection:i}=this.editorState,s=e.length>0;return r`
      <section style="${m(this.panelStyles())}">
        <ul>
          <editor-toolbar-icon
            @click=${()=>this.handleIconClick("discover")}
            ?selected=${i==="discover"}
            ?inactive=${s}
            icon="./files/icon_ccx_search.svg"
            label="Discover"
          ></editor-toolbar-icon>
          <editor-toolbar-icon
            @click=${()=>this.handleIconClick("photos")}
            ?selected=${i==="photos"}
            ?inactive=${s}
            icon="./files/icon_ccx_image.svg"
            label="Photos"
          ></editor-toolbar-icon>
          <editor-toolbar-icon
            @click=${()=>this.handleIconClick("text")}
            ?selected=${i==="text"}
            ?inactive=${s}
            icon="./files/icon_ccx_text.svg"
            label="Text"
          ></editor-toolbar-icon>
          <editor-toolbar-icon
            @click=${()=>this.handleIconClick("design-assets")}
            ?selected=${i==="design-assets"}
            ?inactive=${s}
            icon="./files/icon_ccx_shapes.svg"
            label="Design assets"
          ></editor-toolbar-icon>
          <editor-toolbar-icon
            @click=${()=>this.handleIconClick("artboards")}
            ?selected=${i==="artboards"}
            ?inactive=${s}
            icon="./files/icon_ccx_artboard.svg"
            label="Artboards"
          ></editor-toolbar-icon>
        </ul>
        <ul class="bottom">
          <editor-toolbar-icon
            @click=${this.handleLayersClick}
            ?selected=${t}
            icon="./files/Smock_Layers_18_N.svg"
            label="Layers"
          ></editor-toolbar-icon>
        </ul>
      </section>
    `}}fe.styles=g`
    section {
      position: absolute;
      display: block;
      /* overflow: hidden; */
      background-color: #ffffff;
      /* box-shadow: 0 0 0 1px #e4e4e4; */
      /* box-shadow: 0px 2px 10px rgba(0,0,0,0.15); */
      top: 0;
      bottom: 0;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    ul.bottom {
      position: absolute;
      bottom: 0;
      /* background-color: rgba(249,249,249,0.9); */
    }

  `;At([l({type:Object})],fe.prototype,"editorState",2);customElements.define("editor-toolbar",fe);var zt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,he=(o,e,t,i)=>{for(var s=i>1?void 0:i?Mt(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&zt(e,t,s),s};const je=class extends f{constructor(){super(...arguments),this.width=200,this.shareJsonStr="{}",this.editorState={},this.documentState={}}panelStyles(){const o=E.HEADER_STANDARD_HEIGHT,{width:e}=this;return{width:`${e}px`,height:`${o}px`}}static handleLogoClick(){window.location.href="https://git.corp.adobe.com/pages/CARGO/Prototype/authoring-packs/dashboard.html"}handleUndoClick(){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"undo"}}))}handleRedoClick(){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"redo"}}))}handleDownloadClick(){const o="projectxprototype",e=JSON.stringify(this.documentState,null,2),t=`data:text/json;charset=utf-8,${encodeURIComponent(e)}`,i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("download",`${o}.json`),document.body.appendChild(i),i.click(),i.remove()}handleSaveClick(){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"save"}}))}handleDuplicateClick(){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"duplicate"}}))}handleAuthorInputChange(o){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-author",data:o.target.value}}))}handleToolInputChange(o){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-tool",data:o.target.value}}))}handleDocumentNameInputChange(o){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-name",data:o.target.value}}))}handleTagsInputChange(o){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-tags",data:o.target.value.split(",")}}))}handlePickedPrimaryThumbnail(o){X(o).then(e=>{this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-thumbnail",data:e.url}}))})}handlePickedExtraThumbnail(o){const{extraThumbnails:e}=this.documentState,t=[...e];X(o).then(i=>{t.push(i.url),this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-extra-thumbnails",data:t}}))})}thumbnailStyles(o){return{position:"relative",display:"inline-block",margin:"0 5px 5px 0",width:"80px",height:"80px",borderRadius:"6px",overflow:"hidden",backgroundPosition:"center center",backgroundSize:"cover",backgroundImage:`url('${o}')`}}handleDeleteExtraThumbnail(o){const{extraThumbnails:e}=this.documentState,t=e.filter(i=>i!==o);this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-extra-thumbnails",data:t}}))}render(){const o=this.editorState.isSaved&&this.editorState.isDirty?"NOTE: current document state is unsaved":"",e=this.documentState.author,t=this.documentState.tool,i=this.documentState.name,s=this.documentState.tags.join(","),n=this.documentState.thumbnail,a=this.documentState.extraThumbnails;return r`
      <section
        class="small"
        style="${m(this.panelStyles())}"
      >
        <i class="cclogo" @click=${je.handleLogoClick}></i>
        <label></label>
        <div class="supplemental-actions">
          <button
            @click=${this.handleUndoClick}
            class="undo"
            ?disabled=${!this.editorState.canUndo}
          ></button>
          <button
            @click=${this.handleRedoClick}
            class="redo"
            ?disabled=${!this.editorState.canRedo}
          ></button>
        </div>
        <div class="primary-actions">
          <overlay-trigger
            placement="top-end"
          >
            <button class="share" slot="trigger">Done</button>
            <sp-popover dialog slot="click-content" direction="bottom" tip open>
              <div @keydown=${d=>d.stopPropagation()}>

                <sp-button
                variant="primary"
                size="s"
                ?disabled=${this.editorState.isSaved&&!this.editorState.isDirty}
                @click=${this.handleSaveClick}
                >Save</sp-button>

                <sp-button
                variant="primary"
                size="s"
                ?disabled=${!this.editorState.isSaved}
                @click=${this.handleDuplicateClick}
                >Duplicate</sp-button>

                <sp-button
                variant="primary"
                size="s"
                @click=${this.handleDownloadClick}
                >Download</sp-button>

                <div>
                <sp-field-label for="authorinput">Author</sp-field-label>
                <sp-textfield
                  id="authorinput"
                  @change=${this.handleAuthorInputChange}
                  value="${e}"
                  placeholder="Enter an author name"
                ></sp-textfield>
                </div>

                <div>
                <sp-field-label for="toolinput">Tool Name</sp-field-label>
                <sp-textfield
                  id="toolinput"
                  @change=${this.handleToolInputChange}
                  value="${t}"
                  placeholder="Enter a tool name"
                ></sp-textfield>
                </div>

                <div>
                <sp-field-label for="documentnameinput">Document Name</sp-field-label>
                <sp-textfield
                  id="documentnameinput"
                  @change=${this.handleDocumentNameInputChange}
                  value="${i}"
                  placeholder="Enter a document name"
                ></sp-textfield>
                </div>

                <div>
                <sp-field-label for="tagsinput">Tags (comma seperated)</sp-field-label>
                <sp-textfield
                  id="tagsinput"
                  @change=${this.handleTagsInputChange}
                  value="${s}"
                  placeholder="Enter,comma,seperated,tags"
                ></sp-textfield>
                </div>
                <br/>
                <div>
                    <div style="${m(this.thumbnailStyles(n))}"></div>
                </div>


                <sp-dropzone @drop=${d=>{if(d.dataTransfer.items){for(let h=0;h<d.dataTransfer.items.length;h+=1)if(d.dataTransfer.items[h].kind==="file"){const c=d.dataTransfer.items[h].getAsFile();this.handlePickedPrimaryThumbnail(c)}}}} id="dropzone-1" style="padding: 20px; width: 300px; height: 28px">
                  <div>
                      <label for="file-input">
                          <sp-link
                              href="javascript:;"
                              onclick="this.parentElement.nextElementSibling.click()"
                          >
                              Drop Primary Thumbnail
                          </sp-link>
                      </label>
                      <input @change=${d=>{const h=d.target,{files:c}=h;if(FileReader&&c&&c.length)for(let u=0;u<c.length;u+=1)this.handlePickedPrimaryThumbnail(c[u])}} type="file" id="file-input-1" style="display: none" />
                  </div>
                </sp-dropzone>
                <br/>

                <div>
                  ${a.map(d=>r`<div style="${m(this.thumbnailStyles(d))}">
                      <sp-button
                      style="position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);"
                      variant="negative"
                      size="s"
                      @click=${()=>this.handleDeleteExtraThumbnail(d)}
                      >Delete</sp-button>
                    </div>`)}
                </div>
                <sp-dropzone @drop=${d=>{if(d.dataTransfer.items){for(let h=0;h<d.dataTransfer.items.length;h+=1)if(d.dataTransfer.items[h].kind==="file"){const c=d.dataTransfer.items[h].getAsFile();this.handlePickedExtraThumbnail(c)}}}} id="dropzone-2" style="padding: 20px; width: 300px; height: 28px">
                  <div>
                      <label for="file-input">
                          <sp-link
                              href="javascript:;"
                              onclick="this.parentElement.nextElementSibling.click()"
                          >
                              Drop Extra Thumbnail
                          </sp-link>
                      </label>
                      <input @change=${d=>{const h=d.target,{files:c}=h;if(FileReader&&c&&c.length)for(let u=0;u<c.length;u+=1)this.handlePickedExtraThumbnail(c[u])}} type="file" id="file-input-2" style="display: none" />
                  </div>
                </sp-dropzone>
              </div>
              <div>
                <span style="color: red">${o}</span>
              </div>
            </sp-popover>
          </overlay-trigger>
        </div>
      </section>
    `}};let K=je;K.styles=g`
    :host * {
      user-select: none;
      -webkit-user-select: none;
    }

    section {
      position: absolute;
      display: block;
      background-color: #ffffff;
      border-radius: 0px;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    i.cclogo {
      background-image: url('./files/adobeexpress_appicon_64.svg');
      background-repeat: no-repeat;
      background-position: center center;
      /* background-color: yellowgreen; */
      width: 40px;
      margin-left: 7px;
      cursor: pointer;
    }

    label {
      flex: 1;
      /* background-color: yellowgreen; */
      line-height: 100%;
      text-overflow: hidden;
      white-space: nowrap;
      text-align: center;
      font-family: adobe-clean;
      font-weight: 700;
      font-style: normal;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    label span {
      margin-left: 5px;
      color: #686868;
      font-weight: 400;
    }

    .primary-actions,
    .supplemental-actions {
      /* background-color: coral; */
      line-height: 80px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 0 28px;
    }

    .supplemental-actions {
      /* background-color: yellowgreen; */
      border-right: 1px rgba(0, 0, 0, 0.1) solid;
      height: 50px;
      /* margin-top: 15px; */
      padding: 0 10px;
      align-self: center;
    }

    .save,
    .duplicate {
      margin: 0 5px;
    }

    .undo,
    .redo {
      border: 0;
      height: 42px;
      width: 42px;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 20px;
    }

    .undo {
      background-image: url('./files/SL_Undo_22_N.svg');
    }

    .redo {
      background-image: url('./files/SL_Redo_22_N.svg');
      margin-right: 5px;
    }

    button.undo:hover,
    button.redo:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    button.undo:active,
    button.redo:active {
      background-color: rgba(255, 255, 255, 0.2);
    }

    button.undo:disabled,
    button.undo[disabled],
    button.redo:disabled,
    button.redo[disabled] {
      opacity: 0.2;
      pointer-events: none;
    }

    .collaborate {
      border: 0;
      background-color: transparent;
      color: white;
      background-image: url('./files/collaborate.svg');
      background-repeat: no-repeat;
      height: 40px;
      width: 40px;
      font-family: adobe-clean;
      font-weight: 900;
      font-style: normal;
      font-size: 15px;
      border-radius: 50px;
      margin-right: 20px;
    }

    .share {
      border: 0;
      background: #5c5ce0;
      color: white;
      padding: 3px 24px 3px 50px;
      background-image: url('./files/share.svg');
      background-repeat: no-repeat;
      background-position: 23px 13px;
      height: 44px;
      font-family: adobe-clean;
      font-weight: 900;
      font-style: normal;
      font-size: 15px;
      border-radius: 50px;
    }

    section.small .share {
      width: 44px;
      padding: 3px;
      white-space: nowrap;
      overflow: hidden;
      text-indent: -9999px;
      background-position: 13px 13px;
    }

    section.small .primary-actions {
      padding: 0 15px;
    }

    section.small .collaborate {
      margin-right: 14px;
    }

    section.small .supplemental-actions {
      border-right: none;
    }

  `;he([l({type:Number})],K.prototype,"width",2);he([l({type:String})],K.prototype,"shareJsonStr",2);he([l({type:Object})],K.prototype,"editorState",2);he([l({type:Object})],K.prototype,"documentState",2);customElements.define("editor-header",K);var Rt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,ye=(o,e,t,i)=>{for(var s=i>1?void 0:i?Bt(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Rt(e,t,s),s};const Gt=500;class te extends f{constructor(){super(),this.editorState={},this.displayGraph={},this.rootId="",this._displayGraphVersion="",this._viewportWidth=1,this._viewportHeight=1,this._renderScale=1,this._originOffsetX=0,this._originOffsetY=0,this.renderer=new ot({backgroundColor:15000804,antialias:!0,resolution:2}),this.throttledUpdateCanvasSize=rt(this.updateCanvasSize.bind(this),Gt)}updateCanvasSize(){this.renderer.canvasSize={width:this._viewportWidth,height:this._viewportHeight}}shouldUpdate(e){let t=!1;if(e.has("displayGraph")){const{versionTag:i}=this.displayGraph;this._displayGraphVersion!==i&&(this._displayGraphVersion=i,t=!0)}if(e.has("editorState")){let i=!1;const{viewportWidth:s,viewportHeight:n,renderScale:a,originOffsetX:d,originOffsetY:h}=this.editorState;s!==this._viewportWidth&&(this._viewportWidth=s,i=!0,t=!0),n!==this._viewportHeight&&(this._viewportHeight=n,i=!0,t=!0),a!==this._renderScale&&(this._renderScale=a,t=!0),d!==this._originOffsetX&&(this._originOffsetX=d,t=!0),h!==this._originOffsetY&&(this._originOffsetY=h,t=!0),i&&this.throttledUpdateCanvasSize()}return t}render(){return this.renderer.displayGraph=this.displayGraph,this.renderer.rootId=this.rootId,this.renderer.origin={x:this._originOffsetX,y:this._originOffsetY},this.renderer.scale=this._renderScale,this.renderer.render(),r`${this.renderer.canvas}`}}te.styles=g`
    :host {
      transform: scale(0.5);
      transform-origin: top left;
      display: block;
    }
  `;ye([l({type:Object})],te.prototype,"editorState",2);ye([l({type:Object})],te.prototype,"displayGraph",2);ye([l({type:String})],te.prototype,"rootId",2);customElements.define("renderer-canvas",te);var Lt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,ve=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ft(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Lt(e,t,s),s};class _ extends f{constructor(){super(...arguments),this.nodeId="",this.renderScale=1,this.displayGraph={}}static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-base
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-base
    >`}handlePointerOver(e){y(this,{action:"interaction-item-pointerover",id:this.nodeId,originalEvent:e})}handlePointerOut(e){y(this,{action:"interaction-item-pointerout",id:this.nodeId,originalEvent:e})}handlePointerDown(e){var i;if(y(this,{action:"interaction-item-pointerdown",id:this.nodeId,originalEvent:e}),this.gesture&&this.gesture.active)return;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("primary-interaction-surface");t&&(this.gesture=new B(e,t))}handleGestureStart(e){y(this,{action:"interaction-item-gesturestart",id:this.nodeId,data:e.detail})}handleSingleClick(e){y(this,{action:"interaction-item-singleclick",id:this.nodeId,data:e.detail})}handleDoubleClick(e){y(this,{action:"interaction-item-doubleclick",id:this.nodeId,data:e.detail})}handleDragMove(e){!this.gesture||p(this,{action:"bounds-adjust",subject:"translate",id:this.nodeId,data:e.detail})}handleDragStart(e){!this.gesture||p(this,{action:"bounds-adjust-start",subject:"translate",id:this.nodeId,data:e.detail,originalEvent:e})}handleDragEnd(e){!this.gesture||p(this,{action:"bounds-adjust-end",subject:"translate",id:this.nodeId,data:e.detail})}handleBlurFocus(){this||console.info("foo")}get styles(){const{x:e,y:t,width:i,height:s,rotate:n}=this.displayGraph.nodes[this.nodeId],{renderScale:a}=this;return{transform:`matrix(${de.compose(Math.round(e*a*10)/10,Math.round(t*a*10)/10,n).join(",")})`,width:`${Math.round(i*a*10)/10}px`,height:`${Math.round(s*a*10)/10}px`}}render(){return r`<div
      id="primary-interaction-surface"
      @mouseout=${this.handlePointerOut}
      @mouseover=${this.handlePointerOver}
      @blur=${this.handleBlurFocus}
      @focus=${this.handleBlurFocus}
      @pointerdown=${this.handlePointerDown}
      @gesture-start=${this.handleGestureStart}
      @gesture-singleclick=${this.handleSingleClick}
      @gesture-doubleclick=${this.handleDoubleClick}
      @gesture-drag-end=${this.handleDragEnd}
      @gesture-drag-start=${this.handleDragStart}
      @gesture-drag-move=${this.handleDragMove}
      style="${m(this.styles)}"
    >
      <slot></slot>
    </div>`}}_.styles=g`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* begin DEBUG */
      /* background-color: rgba(255,0,0,0.4); */
      /* end DEBUG */
    }
  `;ve([l({type:String})],_.prototype,"nodeId",2);ve([l({type:Number})],_.prototype,"renderScale",2);ve([l({type:Object})],_.prototype,"displayGraph",2);customElements.define("interaction-base",_);const ge=new Map;class D{static register(e,t,i){const s={tag:t,component:i};ge.set(e,s),customElements.define(t,i)}static render({nodeId:e,interactable:t,displayGraph:i,renderScale:s}){const n=i.nodes[e];if(!n)return r``;const{type:a,children:d}=n;if(!ge.has(a))return console.info("missing interaction component type",a),r``;const{component:h}=ge.get(a),c=a==="pack"?r``:r`${d.map(u=>D.render({nodeId:u,interactable:t,displayGraph:i,renderScale:s}))}`;return h.place(c,{nodeId:e,displayGraph:i,renderScale:s})}}class Ae extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-canvas
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-canvas
    >`}render(){return r`<div
        id="primary-interaction-surface"
        @pointerout="${this.handlePointerOut}"
        @pointerover="${this.handlePointerOver}"
        @pointerdown="${this.handlePointerDown}"
        @gesture-start=${this.handleGestureStart}
        @gesture-drag-end=${this.handleDragEnd}
        @gesture-drag-start=${this.handleDragStart}
        @gesture-drag-move=${this.handleDragMove}
      ></div>
      <slot></slot>`}}Ae.styles=g`
    #primary-interaction-surface {
      position: fixed;
      display: block;
      width: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      /* begin DEBUG */
      /* background-color: rgba(255,255,0,0.9); */
      /* end DEBUG */
    }

    div[debug] {
      bottom: 360px;
    }
  `;D.register("canvas","interaction-canvas",Ae);var Ut=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,F=(o,e,t,i)=>{for(var s=i>1?void 0:i?Vt(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ut(e,t,s),s};class A extends f{constructor(){super(...arguments),this.nodeId="",this.renderScale=1,this.displayGraph={},this.action="default",this.subject="default",this.placement="top-left",this.active=!1}handlePipDown(e){var i;if(e.stopPropagation(),this.gesture&&this.gesture.active)return;this.active=!0;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("pip");t&&(this.gesture=new B(e,t),this.gesture.promise.then(()=>{this.active=!1}))}handleBackgroundTouch(e){var i;if(this.gesture&&this.gesture.active)return;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("pip");t&&(this.gesture=new B(e,t))}handleDragMove(e){!this.gesture||p(this,{action:this.action,subject:this.subject,id:this.nodeId,data:e.detail})}handleDragStart(e){!this.gesture||p(this,{action:`${this.action}-start`,subject:this.subject,id:this.nodeId,data:e.detail})}handleDragEnd(e){!this.gesture||p(this,{action:`${this.action}-end`,subject:this.subject,id:this.nodeId,data:e.detail})}render(){return r`<div
      id="pip"
      class="${this.placement}"
      ?active=${this.active}
      @pointerdown="${this.handlePipDown}"
      @gesture-drag-end=${this.handleDragEnd}
      @gesture-drag-start=${this.handleDragStart}
      @gesture-drag-move=${this.handleDragMove}
    ></div>`}}A.styles=g`
    :host * {
      user-select: none;
      -webkit-user-select: none;
    }

    div {
      position: absolute;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: inset 0px 0px 0px 2px #864ccc;
      pointer-events: var(--pointerEventsOnDecorationHandles);
    }

    div:hover,
    div[active] {
      background-color: #864ccc;
    }

    .top-left {
      top: -7px;
      left: -7px;
      cursor: nw-resize;
    }

    .top-center {
      top: -7px;
      left: 50%;
      margin-left: -8px;
      cursor: ns-resize;
    }

    .top-center-offset {
      top: -47px;
      left: 50%;
      margin-left: -8px;
      cursor: ew-resize;
    }

    .top-center-offset::before {
      content: ' ';
      width: 1px;
      height: 26px;
      border-left: 1px #864ccc dashed;
      display: block;
      left: 7px;
      top: 16px;
      position: absolute;
    }

    .top-right {
      top: -7px;
      right: -7px;
      cursor: ne-resize;
    }

    .center-left {
      top: 50%;
      margin-top: -8px;
      left: -7px;
      cursor: ew-resize;
    }

    .center-center {
      top: 50%;
      margin-top: -8px;
      left: 50%;
      margin-left: -7px;
      cursor: move;
    }

    .center-right {
      top: 50%;
      margin-top: -8px;
      right: -7px;
      cursor: ew-resize;
    }

    .bottom-left {
      bottom: -7px;
      left: -7px;
      cursor: sw-resize;
    }

    .bottom-center {
      bottom: -7px;
      left: 50%;
      margin-left: -8px;
      cursor: ns-resize;
    }

    .bottom-right {
      bottom: -7px;
      right: -7px;
      cursor: se-resize;
    }
  `;F([l({type:String})],A.prototype,"nodeId",2);F([l({type:Number})],A.prototype,"renderScale",2);F([l({type:Object})],A.prototype,"displayGraph",2);F([l({type:String})],A.prototype,"action",2);F([l({type:String})],A.prototype,"subject",2);F([l({type:String})],A.prototype,"placement",2);F([l({type:Boolean})],A.prototype,"active",2);customElements.define("decoration-base-handle-pip",A);var Wt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,N=(o,e,t,i)=>{for(var s=i>1?void 0:i?Yt(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Wt(e,t,s),s};const Xt=r`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="margin: auto; background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%; display: block; shape-rendering: auto;"
    width="200px"
    height="200px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="rotate(0 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-2.571428571428571s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(36 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-2.2857142857142856s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(72 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-1.9999999999999998s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(108 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-1.714285714285714s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(144 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-1.4285714285714284s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(180 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-1.1428571428571428s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(216 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-0.857142857142857s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(252 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-0.5714285714285714s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(288 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="-0.2857142857142857s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(324 50 50)">
      <rect x="48.5" y="40.5" rx="0" ry="0" width="3" height="3" fill="#000000">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="2.8571428571428568s"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
  </svg>
`;class $ extends f{constructor(){super(...arguments),this.disableInteraction=!1,this.isSelected=!1,this.isMultiSelect=!1,this.isHovered=!1,this.isBoundsHighlight=!1,this.isLoading=!1,this.isDragging=!1,this.isResizing=!1,this.nodeId="",this.renderScale=1,this.displayGraph={}}static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isLoading:n,isMultiSelect:a,isHovered:d,isBoundsHighlight:h,isDragging:c,isResizing:u}){return r`<decoration-base
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isLoading=${n}
      .isMultiSelect=${a}
      .isHovered=${d}
      .isBoundsHighlight=${h}
      .isDragging=${c}
      .isResizing=${u}
    ></decoration-base>`}get styles(){const{renderScale:e,nodeId:t,displayGraph:i}=this,{globalTransform:s=de.defaultMatrix,width:n,height:a}=i.nodes[t],{position:d,rotation:h}=de.decompose(s);return{transform:`matrix(${de.compose(Math.round(d.x*e*10)/10,Math.round(d.y*e*10)/10,h).join(",")})`,width:`${Math.round(n*e*10)/10}px`,height:`${Math.round(a*e*10)/10}px`}}get hoveredHtml(){return r` <div .nodeId=${this.nodeId} class="bounds"></div> `}get highlightHtml(){return r` <div .nodeId=${this.nodeId} class="highlight"></div> `}get baseHtml(){return r``}get selectedHtml(){return r`
      <div .nodeId=${this.nodeId} class="bounds"></div>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="nw"
        placement="top-left"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="n"
        placement="top-center"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="ne"
        placement="top-right"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="w"
        placement="center-left"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="e"
        placement="center-right"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="sw"
        placement="bottom-left"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="s"
        placement="bottom-center"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="se"
        placement="bottom-right"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="rotate"
        placement="top-center-offset"
      ></decoration-base-handle-pip>
    `}decorationHtml(){return this.isBoundsHighlight?this.highlightHtml:this.isMultiSelect?this.hoveredHtml:this.isSelected?this.selectedHtml:this.isHovered?this.hoveredHtml:""}render(){return r`<div style="${m(this.styles)}">
      <div class="loading ${this.isLoading?"visible":"hidden"}">
        ${Xt}
      </div>
      ${this.baseHtml}
      <div class="fill-frame ${this.isDragging||this.isLoading?"hidden":"visible"}">
        ${this.decorationHtml()}
      </div>
    </div>`}}$.styles=[g`
    :host > div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      pointer-events: none;
    }

    .fill-frame {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }

    .hidden {
      opacity: 0;
    }

    .bounds {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: inset 0px 0px 0px 2px #864ccc;
    }

    .highlight {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0px 0px 0px 6px #864ccc;
      opacity: 0.2;
    }

    .loading {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(200, 200, 200, 0.7);
      transition-property: opacity;
      transition-duration: 0.5s;
      /* background-color: rgba(249,249,249,0.5); */
      /* border-radius: 8px; */
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }

    .loading svg {
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `];N([l({type:Boolean})],$.prototype,"disableInteraction",2);N([l({type:Boolean})],$.prototype,"isSelected",2);N([l({type:Boolean})],$.prototype,"isMultiSelect",2);N([l({type:Boolean})],$.prototype,"isHovered",2);N([l({type:Boolean})],$.prototype,"isBoundsHighlight",2);N([l({type:Boolean})],$.prototype,"isLoading",2);N([l({type:Boolean})],$.prototype,"isDragging",2);N([l({type:Boolean})],$.prototype,"isResizing",2);N([l({type:String})],$.prototype,"nodeId",2);N([l({type:Number})],$.prototype,"renderScale",2);N([l({type:Object})],$.prototype,"displayGraph",2);customElements.define("decoration-base",$);const Te=new Map;class H{static register(e,t,i){const s={tag:t,component:i};Te.set(e,s),customElements.define(t,i)}static render({isPanningMode:e,isNodeUnderMutation:t,displayGraph:i,documentState:s,renderScale:n,selections:a,loading:d,hovers:h,dragging:c,resizing:u}){const w=c.length>0,C=w?[]:h,Y=w?[]:a,I=[];for(const[P,T]of Object.entries(s.nodes))T.type.includes("artboard")&&I.push(P);const q=e,G=[];a.forEach(P=>{const T=s.nodes[P];if(T.type!=="artboard"){const{parentId:S}=T,R=s.nodes[S];R&&R.type!=="artboard"&&R.type!=="canvas"&&G.push(R.id)}});const Z=[...I,...Y,...C,...d,...c,...u,...G],Q=[...new Set(Z)];return r`${Q.map(P=>{const T=i.nodes[P];if(!T)return"";const{type:S}=T,{component:R}=Te.get(S),De=a.indexOf(P)>=0,Xe=d.indexOf(P)>=0,Je=De&&a.length>1,Ke=C.indexOf(P)>=0,qe=G.indexOf(P)>=0,Ze=c.indexOf(P)>=0||t,Qe=u.indexOf(P)>=0;return R.place({nodeId:P,displayGraph:i,renderScale:n,isSelected:De,isLoading:Xe,isMultiSelect:Je,isHovered:Ke,isBoundsHighlight:qe,isDragging:Ze,isResizing:Qe,disableInteraction:q})})}`}}class Jt extends ${static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isMultiSelect:n,isHovered:a,isBoundsHighlight:d,isDragging:h,isResizing:c}){return r``}}H.register("canvas","decoration-canvas",Jt);class ze extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-artboard
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-artboard
    >`}handleBackgroundTouch(e){var i;if(this.gesture&&this.gesture.active)return;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("background-area");t&&(this.gesture=new B(e,t))}handleBackgroundDragStart(e){!this.gesture||p(this,{action:"bounds-adjust-start",subject:"translate",id:this.nodeId,data:e.detail,originalEvent:e})}handleBackgroundDragEnd(e){!this.gesture||p(this,{action:"bounds-adjust-end",subject:"translate",id:this.nodeId,data:e.detail})}handleBackgroundDragMove(e){!this.gesture||p(this,{action:"bounds-adjust",subject:"translate",id:this.nodeId,data:e.detail})}handleDoubleclick(){y(this,{action:"artboard-doubleclick",id:this.nodeId})}handleTouch(){y(this,{action:"artboard-touch",id:this.nodeId})}render(){return r`<div style="${m(this.styles)}">
      <div
        id="primary-interaction-surface"
        @pointerdown=${this.handlePointerDown}
        @gesture-drag-end=${this.handleDragEnd}
        @gesture-drag-start=${this.handleDragStart}
        @gesture-drag-move=${this.handleDragMove}
        @gesture-start=${this.handleGestureStart}
      ></div>
      <div
        id="background-area"
        @pointerdown=${this.handleBackgroundTouch}
        @gesture-drag-end=${this.handleBackgroundDragEnd}
        @gesture-drag-move=${this.handleBackgroundDragMove}
        @gesture-drag-start=${this.handleBackgroundDragStart}
        @gesture-singleclick=${this.handleSingleClick}
        @gesture-doubleclick=${this.handleDoubleclick}
        @gesture-start=${this.handleTouch}
      ></div>
      <div id="children-area">
        <slot></slot>
      </div>
    </div>`}}ze.styles=g`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* begin DEBUG */
      /* background-color: rgba(0,0,255,0.2); */
      /* end DEBUG */
    }

    #primary-interaction-surface {
      position: absolute;
      width: 100%;
      max-width: 100%;
      top: -40px;
      height: 40px;
      /* background-color: rgba(0,255,255,0.2); */
    }

    #background-area {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #children-area {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: none;
    }

    #children-area * {
      pointer-events: auto;
    }
  `;D.register("artboard","interaction-artboard",ze);class Me extends ${static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isMultiSelect:n,isHovered:a,isBoundsHighlight:d,isDragging:h,isResizing:c}){return r`<decoration-artboard
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isMultiSelect=${n}
      .isHovered=${a}
      .isBoundsHighlight=${d}
      .isDragging=${h}
      .isResizing=${c}
    ></decoration-artboard>`}get baseHtml(){const{width:e,height:t,data:{name:i}}=this.displayGraph.nodes[this.nodeId];return r`
    <h1>
      ${i}<span>${Math.round(e)}px / ${Math.round(t)}px</span>
    </h1>
    `}get selectedHtml(){return r`
      <div .nodeId=${this.nodeId} class="bounds"></div>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="nw"
        placement="top-left"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="n"
        placement="top-center"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="ne"
        placement="top-right"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="w"
        placement="center-left"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="e"
        placement="center-right"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="sw"
        placement="bottom-left"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="s"
        placement="bottom-center"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="se"
        placement="bottom-right"
      ></decoration-base-handle-pip>
    `}}Me.styles=[$.styles,g`
      h1 {
        position: absolute;
        color: #0b0b0b;
        width: auto;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        font-family: adobe-clean, sans-serif;
        font-weight: 400;
        top: -40px;
        cursor: default;
      }
      h1 span {
        font-size: 12px;
        margin-left: 12px;
        color: #999999;
      }
    `];H.register("artboard","decoration-artboard",Me);class Re extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`
      <interaction-artboard-group
        .nodeId=${t}
        .displayGraph=${i}
        .renderScale=${s}
      >
        ${e}
      </interaction-artboard-group>
    `}render(){return r`<div style=${m(this.styles)}>
      <div
        id="primary-interaction-surface"
        @pointerdown=${this.handlePointerDown}
        @gesture-drag-end=${this.handleDragEnd}
        @gesture-drag-start=${this.handleDragStart}
        @gesture-drag-move=${this.handleDragMove}
        @gesture-start=${this.handleGestureStart}
      ></div>
      <slot></slot>
    </div>`}}Re.styles=g`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      pointer-events: none;
      /* background-color: rgba(0,255,255,0.2); */
    }

    div * {
      pointer-events: initial;
    }

    #primary-interaction-surface {
      position: absolute;
      width: 100%;
      max-width: 100%;
      top: -90px;
      left: -30px;
      height: 40px;
      /* background-color: rgba(0,255,255,0.2); */
    }
  `;D.register("artboard-group","interaction-artboard-group",Re);class Be extends ${static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isLoading:n,isMultiSelect:a,isHovered:d,isBoundsHighlight:h,isDragging:c,isResizing:u}){return r`<decoration-artboard-group
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isLoading=${n}
      .isMultiSelect=${a}
      .isHovered=${d}
      .isBoundsHighlight=${h}
      .isDragging=${c}
      .isResizing=${u}
    ></decoration-artboard-group>`}get artboardGroupBoundsStyles(){return{top:"-50px",left:"-30px",padding:"38px 28px",borderRadius:"12px",border:"2px solid #864ccc",boxShadow:"none"}}get baseHtml(){const{children:e,data:{name:t}}=this.displayGraph.nodes[this.nodeId];return r`
    <div class="group-frame">
      <h1>${t}<span>${e.length} artboards</span></h1>
    </div>
    `}get selectedHtml(){return r`
      <div
        class="bounds"
        style="${m(this.artboardGroupBoundsStyles)}"
      ></div>
    `}}Be.styles=[$.styles,g`
      div {
        position: absolute;
        display: block;
        transform-origin: 0 0;
      }
      .group-frame {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        padding: 38px 28px;
        border: 2px dashed rgba(0, 0, 0, 0.2);
        top: -50px;
        left: -30px;
        border-radius: 12px;
      }
      h1 {
        position: absolute;
        color: #0b0b0b;
        width: auto;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        font-family: adobe-clean, sans-serif;
        font-weight: 400;
        top: -40px;
        left: 0;
        cursor: default;
      }
      h1 span {
        font-size: 12px;
        margin-left: 12px;
        color: #999999;
      }
    `];H.register("artboard-group","decoration-artboard-group",Be);class Kt extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-rectangle
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-rectangle
    >`}}D.register("rectangle","interaction-rectangle",Kt);class qt extends ${}H.register("rectangle","decoration-rectangle",qt);class Ge extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-text
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-text
    >`}}Ge.styles=g`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* begin DEBUG */
      /* background-color: rgba(0,0,255,0.2); */
      /* end DEBUG */
    }
  `;D.register("text","interaction-text",Ge);class Le extends ${static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isLoading:n,isMultiSelect:a,isHovered:d,isBoundsHighlight:h,isDragging:c,isResizing:u}){return r`<decoration-base-only-rotate
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isLoading=${n}
      .isMultiSelect=${a}
      .isHovered=${d}
      .isBoundsHighlight=${h}
      .isDragging=${c}
      .isResizing=${u}
    ></decoration-base-only-rotate>`}get selectedHtml(){return r`
      <div .nodeId=${this.nodeId} class="bounds"></div>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="rotate"
        placement="top-center-offset"
      ></decoration-base-handle-pip>
    `}}customElements.define("decoration-base-only-rotate",Le);class Zt extends Le{}H.register("text","decoration-text",Zt);class Fe extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-image
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-image
    >`}}Fe.styles=g`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* begin DEBUG */
      /* background-color: rgba(0,0,255,0.2); */
      /* end DEBUG */
    }
  `;D.register("image","interaction-image",Fe);class ie extends ${static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isLoading:n,isMultiSelect:a,isHovered:d,isBoundsHighlight:h,isDragging:c,isResizing:u}){return r`<decoration-base-only-corners
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isLoading=${n}
      .isMultiSelect=${a}
      .isHovered=${d}
      .isBoundsHighlight=${h}
      .isDragging=${c}
      .isResizing=${u}
    ></decoration-base-only-corners>`}get selectedHtml(){return r`
      <div .nodeId=${this.nodeId} class="bounds"></div>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="nw"
        placement="top-left"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="ne"
        placement="top-right"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="sw"
        placement="bottom-left"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="se"
        placement="bottom-right"
      ></decoration-base-handle-pip>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="rotate"
        placement="top-center-offset"
      ></decoration-base-handle-pip>
    `}}customElements.define("decoration-base-only-corners",ie);class Qt extends ie{}H.register("image","decoration-image",Qt);class Ue extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-ellipse
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-ellipse
    >`}render(){const e=this.displayGraph.nodes[this.nodeId],t=Math.round(e.width*this.renderScale*10)/10,i=Math.round(e.height*this.renderScale*10)/10;return r`<div style="${m(this.styles)}">
      <svg height="100%" width="100%">
        <ellipse
          id="primary-interaction-surface"
          @mouseout="${this.handlePointerOut}"
          @mouseover="${this.handlePointerOver}"
          @blur=${this.handleBlurFocus}
          @focus=${this.handleBlurFocus}
          @pointerdown=${this.handlePointerDown}
          @gesture-start=${this.handleGestureStart}
          @gesture-singleclick=${this.handleSingleClick}
          @gesture-doubleclick=${this.handleDoubleClick}
          @gesture-drag-end=${this.handleDragEnd}
          @gesture-drag-start=${this.handleDragStart}
          @gesture-drag-move=${this.handleDragMove}
          cx="50%"
          cy="50%"
          rx="${t/2}"
          ry="${i/2}"
          style="fill:transparent;"
        />
      </svg>
    </div>`}}Ue.styles=g`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      pointer-events: none;
      /* begin DEBUG */
      /* background-color: rgba(0,0,255,0.2); */
      /* end DEBUG */
    }

    svg ellipse {
      pointer-events: initial;
    }
  `;D.register("ellipse","interaction-ellipse",Ue);class ei extends ${static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isMultiSelect:n,isHovered:a,isBoundsHighlight:d,isDragging:h,isResizing:c}){return r`<decoration-ellipse
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isMultiSelect=${n}
      .isHovered=${a}
      .isBoundsHighlight=${d}
      .isDragging=${h}
      .isResizing=${c}
    ></decoration-ellipse>`}get hoveredHtml(){const e=this.displayGraph.nodes[this.nodeId],t=Math.round(e.width*this.renderScale*10)/10,i=Math.round(e.height*this.renderScale*10)/10,s=2;return r`
      <svg height="${i}" width="${t}">
        <ellipse
          cx="50%"
          cy="50%"
          rx="${t/2-s/2}"
          ry="${i/2-s/2}"
          style="fill:transparent;stroke:#864CCC;stroke-width:${s}"
        />
      </svg>
    `}}H.register("ellipse","decoration-ellipse",ei);class Ve extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-circle
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-circle
    >`}render(){const e=this.displayGraph.nodes[this.nodeId],t=Math.round(e.width*this.renderScale*10)/10;return r`<div style="${m(this.styles)}">
      <svg height="100%" width="100%">
        <circle
          id="primary-interaction-surface"
          @mouseout="${this.handlePointerOut}"
          @mouseover="${this.handlePointerOver}"
          @blur=${this.handleBlurFocus}
          @focus=${this.handleBlurFocus}
          @pointerdown=${this.handlePointerDown}
          @gesture-start=${this.handleGestureStart}
          @gesture-singleclick=${this.handleSingleClick}
          @gesture-doubleclick=${this.handleDoubleClick}
          @gesture-drag-end=${this.handleDragEnd}
          @gesture-drag-start=${this.handleDragStart}
          @gesture-drag-move=${this.handleDragMove}
          cx="50%"
          cy="50%"
          r="${t/2}"
          style="fill:transparent;"
        />
      </svg>
    </div>`}}Ve.styles=g`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      pointer-events: none;
      /* begin DEBUG */
      /* background-color: rgba(0,0,255,0.2); */
      /* end DEBUG */
    }

    svg circle {
      pointer-events: initial;
    }
  `;D.register("circle","interaction-circle",Ve);class ti extends ie{static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isMultiSelect:n,isHovered:a,isBoundsHighlight:d,isDragging:h,isResizing:c}){return r`<decoration-circle
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isMultiSelect=${n}
      .isHovered=${a}
      .isBoundsHighlight=${d}
      .isDragging=${h}
      .isResizing=${c}
    ></decoration-circle>`}get hoveredHtml(){const e=this.displayGraph.nodes[this.nodeId],t=Math.round(e.width*this.renderScale*10)/10,i=2;return r`
      <svg height="${t}" width="${t}">
        <circle
          cx="50%"
          cy="50%"
          r="${t/2-i/2}"
          style="fill:transparent;stroke:#864CCC;stroke-width:${i}"
        />
      </svg>
    `}}H.register("circle","decoration-circle",ti);class ii extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`<interaction-pack
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-pack>
    `}}D.register("pack","interaction-pack",ii);class si extends ie{}H.register("pack","decoration-pack",si);class We extends _{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return r`
      <interaction-container
        .nodeId=${t}
        .displayGraph=${i}
        .renderScale=${s}
      >
        ${e}
      </interaction-container>
    `}render(){return r`<div style=${m(this.styles)}><slot></slot></div>`}}We.styles=g`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* background-color: rgba(0,255,255,0.2); */
    }
  `;D.register("container","interaction-container",We);class ni extends ie{}H.register("container","decoration-container",ni);var ai=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,k=(o,e,t,i)=>{for(var s=i>1?void 0:i?oi(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ai(e,t,s),s};class x extends f{constructor(){super(...arguments),this.nodeId="",this.renderScale=1,this.timelinePosition=0,this.timelinePositionRelative=0,this.displayGraph={},this.documentState={},this.editorState={},this.originX=0,this.originY=0,this.isPanningMode=!1,this.isNodeUnderMutation=!1,this.isPanning=!1,this.debug=!1,this.selections=[],this.loading=[],this.selectableHovers=[],this.dragging=[],this.resizing=[],this.interactable=[],this.snaplines=[],this.snappoints=[]}get canvasClasses(){return{"is-panning-mode":this.isPanningMode,"is-panning":this.isPanning}}canvasContentsStyles(){return{top:`${this.originY}px`,left:`${this.originX}px`}}render(){return r`
      <div class="render-frame ${nt(this.canvasClasses)}">
        <renderer-canvas
          .displayGraph=${this.displayGraph}
          .editorState=${this.editorState}
        ></renderer-canvas>
        <div
          class="origin-relative-container"
          style="${m(this.canvasContentsStyles())}"
        >
          <div class="interaction-items">
            ${D.render({nodeId:this.displayGraph.rootNodeId,interactable:this.interactable,displayGraph:this.displayGraph,renderScale:this.renderScale,debug:this.debug})}
          </div>
          <div class="decoration-items">
            ${H.render({displayGraph:this.displayGraph,documentState:this.documentState,isPanningMode:this.isPanningMode,isNodeUnderMutation:this.isNodeUnderMutation,renderScale:this.renderScale,selections:this.selections,loading:this.loading,hovers:this.selectableHovers,dragging:this.dragging,resizing:this.resizing})}
          </div>
        </div>
        <svg>
          <g transform="translate(${this.originX} ${this.originY})">
            ${this.snaplines.map(e=>Oe`
              <line
                x1=${e[0].x*this.renderScale}
                y1=${e[0].y*this.renderScale}
                x2=${e[1].x*this.renderScale}
                y2=${e[1].y*this.renderScale}
                style="stroke:#E4007C;stroke-width:1"
              />`)}
            ${this.snappoints.map(e=>Oe`
              <circle
                cx=${e.x*this.renderScale}
                cy=${e.y*this.renderScale}
                r="5"
                fill="#E4007C"
              />`)}
          </g>
        </svg>
      </div>
    `}}x.styles=g`
    .render-frame {
      position: absolute;
      display: block;
      background: #e4e4e4;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      --pointerEventsOnDecorationHandles: auto;
    }

    .render-frame.is-panning-mode {
      cursor: grab !important;
      --pointerEventsOnDecorationHandles: none;
    }

    .render-frame.is-panning {
      cursor: grabbing !important;
    }

    .origin-relative-container {
      position: absolute;
      display: block;
    }

    .is-panning-mode .decoration-items {
      pointer-events: none;
    }
    svg {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  `;k([l({type:String})],x.prototype,"nodeId",2);k([l({type:Number})],x.prototype,"renderScale",2);k([l({type:Number})],x.prototype,"timelinePosition",2);k([l({type:Number})],x.prototype,"timelinePositionRelative",2);k([l({type:Object})],x.prototype,"displayGraph",2);k([l({type:Object})],x.prototype,"documentState",2);k([l({type:Object})],x.prototype,"editorState",2);k([l({type:Number})],x.prototype,"originX",2);k([l({type:Number})],x.prototype,"originY",2);k([l({type:Boolean})],x.prototype,"isPanningMode",2);k([l({type:Boolean})],x.prototype,"isNodeUnderMutation",2);k([l({type:Boolean})],x.prototype,"isPanning",2);k([l({type:Boolean})],x.prototype,"debug",2);k([l({type:Array})],x.prototype,"selections",2);k([l({type:Array})],x.prototype,"loading",2);k([l({type:Array})],x.prototype,"selectableHovers",2);k([l({type:Array})],x.prototype,"dragging",2);k([l({type:Array})],x.prototype,"resizing",2);k([l({type:Array})],x.prototype,"interactable",2);k([l({type:Array})],x.prototype,"snaplines",2);k([l({type:Array})],x.prototype,"snappoints",2);customElements.define("editor-canvas",x);var ri=Object.defineProperty,li=Object.getOwnPropertyDescriptor,di=(o,e,t,i)=>{for(var s=i>1?void 0:i?li(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ri(e,t,s),s};class xe extends f{constructor(){super(...arguments),this.messages=[]}render(){return r`
      <section>
        ${this.messages.map(e=>r`
              <div class="toast-wrapper">
                <sp-toast open variant="${e.type}"> ${e.copy} </sp-toast>
              </div>
            `)}
      </section>
    `}}xe.styles=g`
    @keyframes expand {
      from {
        opacity: 0;
        height: 0;
      }
    }
    section {
      position: fixed;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }

    .toast-wrapper {
      height: 70px;
      position: relative;
      display: block;
      animation: expand 0.5s ease-in-out;
    }
  `;di([l({type:Array})],xe.prototype,"messages",2);customElements.define("message-queue",xe);var ci=Object.defineProperty,hi=Object.getOwnPropertyDescriptor,$e=(o,e,t,i)=>{for(var s=i>1?void 0:i?hi(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&ci(e,t,s),s};class se extends f{constructor(){super(...arguments),this.subject="default",this.placement="top-left",this.active=!1}handlePointerDown(e){e.stopPropagation(),!(this.gesture&&this.gesture.active)&&(this.active=!0,this.gesture=new B(e,this),this.gesture.promise.then(()=>{this.active=!1}))}render(){return r`
      <div
        ?active=${this.active}
        @pointerdown="${this.handlePointerDown}"
      ></div>
    `}}se.styles=g`
    :host {
      position: absolute;
      display: block;
    }

    :host * {
      user-select: none;
      -webkit-user-select: none;
    }

    div {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: pink;
      cursor: ns-resize;
    }

    div:hover,
    div[active] {
      background-color: red;
    }
  `;$e([l({type:String})],se.prototype,"subject",2);$e([l({type:String})],se.prototype,"placement",2);$e([l({type:Boolean})],se.prototype,"active",2);customElements.define("grippy-handle",se);var pi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,ke=(o,e,t,i)=>{for(var s=i>1?void 0:i?ui(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&pi(e,t,s),s};function gi(o){return o.widget==="slider"&&(o.type==="float1"||o.type==="int1")||o.widget==="color"}class ne extends f{constructor(){super(),this.node={},this.tweaks=[],this.preset={},this.handleSliderInput=lt(this._handleSliderInput.bind(this),300)}_handleSliderInput(e,t){const{data:{substanceConfig:i}}=this.node,s=JSON.parse(JSON.stringify(i));s[t]=e,p(this,{action:"set-property",id:this.node.id,key:"substanceConfig",value:s})}render(){const e=this.tweaks.filter(gi),{data:{substanceConfig:t}}=this.node;return e.length>0?r`
        <section>
          ${ee(e,i=>i.name,i=>{let s=i.default;return this.preset&&this.preset.tweaks&&typeof this.preset.tweaks[i.id]!="undefined"&&(s=this.preset.tweaks[i.id]),t&&typeof t[i.id]!="undefined"&&(s=t[i.id]),i.widget==="slider"?r`
                  <sp-slider
                    min=${i.min}
                    max=${i.max}
                    step=${i.type==="int1"?1:.01}
                    value=${s}
                    label=${i.name}
                    @input=${n=>{this.handleSliderInput(n.target.value,i.id)}}
                  ></sp-slider>
                `:i.widget==="color"?r` <div>${i.name} ${s}</div> `:r``})}
        </section>
      `:r``}}ne.styles=g`
    section {
      margin: 10px;
      padding: 14px;
      border-radius: 12px;
      background-color: #f1f1f1;
      border: 1px #f1f1f1 solid;
    }
  `;ke([l({type:Object})],ne.prototype,"node",2);ke([l({type:Array})],ne.prototype,"tweaks",2);ke([l({type:Array})],ne.prototype,"preset",2);customElements.define("editor-inspector-substance-tweaks",ne);var bi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,we=(o,e,t,i)=>{for(var s=i>1?void 0:i?mi(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&bi(e,t,s),s};function fi(o,e){return e.values.length>1}function yi(o,e){switch(o){case"Template":return!1;default:return!0}}function le(o){let e="";if(o.composedPath){const t=o.composedPath();t&&t.length>0&&(e=t[0].value||"")}return e}class ae extends f{constructor(){super(...arguments),this.nodeId="",this.documentState={},this.editorState={},this.packBuildOptions={},this.semanticParameterConfiguration={},this.semanticInferenceData={}}willUpdate(e){if(e.has("documentState")){const{data:{semanticParameterConfiguration:t,packBuildOptions:i}}=this.documentState.nodes[this.nodeId];this.semanticParameterConfiguration=t||{},this.packBuildOptions=i||{}}e.has("editorState")&&(this.semanticInferenceData=this.editorState.semanticInferenceData)}handleAddPackInput(){var n;const e=(n=this.shadowRoot)==null?void 0:n.getElementById("add-pack-input");if(!e)return;const t=e.value,i=this.semanticInferenceData[t];let s="choose-any";i.values&&i.values.length>1&&(s="select-state"),this.handleAttributeChange(e.value,s)}handleAttributeChange(e,t){const i=JSON.parse(JSON.stringify(this.semanticParameterConfiguration));i[e].value=t,p(this,{action:"set-property",id:this.nodeId,key:"semanticParameterConfiguration",value:i})}handleAttributeLabelChanged(e,t){const i=JSON.parse(JSON.stringify(this.semanticParameterConfiguration));i[e].label=t,p(this,{action:"set-property",id:this.nodeId,key:"semanticParameterConfiguration",value:i})}handleAttributeValueLabelChanged(e,t,i){const s=JSON.parse(JSON.stringify(this.semanticParameterConfiguration)),n=s[e]||{},a=n.valueLabels||{};a[t]=i,n.valueLabels=a,s[e]=n,p(this,{action:"set-property",id:this.nodeId,key:"semanticParameterConfiguration",value:s})}handleTransparentBackgroundToggle(e){const t=JSON.parse(JSON.stringify(this.packBuildOptions));t.transparentBackground=!e.target.checked,p(this,{action:"set-property",id:this.nodeId,key:"packBuildOptions",value:t})}get transparentBackgroundToggleHtml(){const e=typeof this.packBuildOptions.transparentBackground=="boolean"?this.packBuildOptions.transparentBackground:!0;return r`
    <div>
        <sp-switch
        ?checked=${e}
        label="Transparent Background"
        @click="${this.handleTransparentBackgroundToggle}"
        >Transparent Background</sp-switch>
    </div>
    `}isDisabled([e,t]){return(this.semanticParameterConfiguration[e].value||"disabled")==="disabled"}isEnabled(e){return!this.isDisabled(e)}semanticItemHtml([e,t]){var u;const i=yi(e),s=fi(e,t),n=this.semanticParameterConfiguration[e].value||"disabled",a=this.semanticParameterConfiguration[e].label||"",d=this.semanticParameterConfiguration[e].valueLabels||{},h=t.values.length;return((u=t.values[0])==null?void 0:u.type)==="template"&&h<2?r``:r`
      <div>
        <sp-textfield
          quiet
          @keyup=${w=>{this.handleAttributeLabelChanged(e,le(w))}}
          @change=${w=>{this.handleAttributeLabelChanged(e,le(w))}}
          placeholder=${e}
          .value=${a}
          ?disabled=${n==="disabled"}
        ></sp-textfield>
        <overlay-trigger placement="right" style="bottom:-10px;">
          <sp-action-button slot="trigger" size="s" quiet>
            <sp-icon size="s">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
              <defs>
                <style>
                  .fill {
                    fill: #464646;
                  }
                </style>
              </defs>
              <title>S MoreSmallList 18 N</title>
              <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><circle class="fill" cx="4.5" cy="9" r="1.425" />
              <circle class="fill" cx="9" cy="9" r="1.425" />
              <circle class="fill" cx="13.5" cy="9" r="1.425" />
            </svg>
          </sp-icon>
          </sp-action-button>
          <sp-popover id="pack-input-config-popover" style="padding:10px;" dialog slot="click-content" direction="bottom" tip>
              <sp-menu style="width: 100%" role="menu">
                ${s?r`<sp-menu-item value="select-state" @click=${()=>this.handleAttributeChange(e,"select-state")} ?selected=${n==="select-state"}>Choose From ${t.values.length} States</sp-menu-item>`:""}
                ${i?r`<sp-menu-item value="choose-any" @click=${()=>this.handleAttributeChange(e,"choose-any")} ?selected=${n==="choose-any"}>Enter Custom Value</sp-menu-item>`:""}
                <sp-menu-item value="disabled" @click=${()=>this.handleAttributeChange(e,"disabled")} ?selected=${n==="disabled"}>Disabled</sp-menu-item>
              </sp-menu>
              ${n==="select-state"?t.values.map(w=>{const C=w.uniquenessKey,Y=d[C]||"";return r`
                  <div
                    @wheel=${I=>I.stopPropagation()}
                    @keydown=${I=>I.stopPropagation()}
                  >
                    ${w.thumbnail?r`<img style="max-width:80px;max-height:80px;" src="${w.thumbnail}"/>`:""}
                    <sp-textfield
                      quiet
                      @keyup=${I=>{I.preventDefault(),I.stopPropagation(),this.handleAttributeValueLabelChanged(e,C,le(I))}}
                      @change=${I=>{this.handleAttributeValueLabelChanged(e,C,le(I))}}
                      placeholder=${w.label}
                      .value=${Y}
                    ></sp-textfield>
                  </div>
              `}):""}
          </sp-popover>
        </overlay-trigger>
      </div>
    `}disabledSemanticInputMenuItem([e,t]){const i=this.semanticParameterConfiguration[e].label||"";return r`
      <sp-menu-item value="${e}">
         ${i?r`${i}<br/><span style="font-size:0.8rem;opacity:0.5;">${e}</span>`:r`${e}`}
      </sp-menu-item>
    `}render(){const e=Object.entries(this.semanticInferenceData),t=e.filter(this.isEnabled.bind(this)),i=e.filter(this.isDisabled.bind(this)),s=t.map(n=>this.semanticItemHtml(n));return r`
      ${this.transparentBackgroundToggleHtml}
      <br/>
      ${s}
      <sp-action-menu id="add-pack-input" size="m" @change=${this.handleAddPackInput}>
        ${ft}
        <span slot="label">Add Pack Input</span>
        ${i.map(n=>this.disabledSemanticInputMenuItem(n))}
      </sp-action-menu>
    `}}ae.styles=g`
    sp-switch {
      margin: 20px 0 5px 0;
    }

    sp-switch + div {
      display: none;
    }

    sp-switch[checked] + div {
      display: block;
    }
    sp-textfield {
      margin-bottom: 15px;
      width: 175px;
    }
    sp-picker {
      margin-bottom: 20px;
    }
    overlay-trigger {
      position: relative;
      bottom: -5px;
    }
  `;we([l({type:String})],ae.prototype,"nodeId",2);we([l({type:Object})],ae.prototype,"documentState",2);we([l({type:Object})],ae.prototype,"editorState",2);customElements.define("editor-inspector-semantic-interface",ae);var vi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,j=(o,e,t,i)=>{for(var s=i>1?void 0:i?xi(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&vi(e,t,s),s};class O extends f{constructor(){super(),this.editorState={},this.documentState={},this.open=!0,this.selectedNode={},this.substancePresets=[],this.substanceTweaks=[],this.isReplaceImageDragOverState=!1,this.isInvalidText=!1,this.debounceTimer=setTimeout(()=>"",0),this.substanceEffectIds=[],this._color="#000000",this._name="default",this._blendMode="normal",this._text="Lorem Ipsum",this._fontLabel="",this._size=40,this._letterSpacing=0,this._alignment="left",this._substance="",this._exportSize=1,this.substanceEffectIndexModel=new bt(this.handleNewSubstanceEffectIndexState.bind(this)),this.substanceEffectIndex=this.substanceEffectIndexModel.state}handleNewSubstanceEffectIndexState(e){this.substanceEffectIndex=e}get selectedNodeId(){let e;return this.editorState.selections.length===1&&(e=this.editorState.selections[0]),e}handlePublishAsPack(){y(this,{action:"publish-artboard-group-as-pack",id:this.selectedNodeId})}handleUpdatePack(){y(this,{action:"update-existing-published-pack",id:this.selectedNodeId})}handleAuthorInputChange(e){p(this,{action:"set-property",id:this.selectedNodeId,key:"author",value:e.target.value,originalEvent:e})}handleToolInputChange(e){p(this,{action:"set-property",id:this.selectedNodeId,key:"tool",value:e.target.value,originalEvent:e})}handleTagsInputChange(e){p(this,{action:"set-property",id:this.selectedNodeId,key:"tags",value:e.target.value.split(","),originalEvent:e})}handleSaveAsThumbnail(){y(this,{action:"save-rendition-as-thumbnail",id:this.selectedNodeId})}handleSaveAsExtraThumbnail(){y(this,{action:"save-rendition-as-extra-thumbnail",id:this.selectedNodeId})}handleExportSizeChange(e){this._exportSize=e.target.value}handleExportClick(){!this.selectedNodeId||y(this,{action:"download-rendition",id:this.selectedNodeId,scale:this._exportSize})}handleColorPicked(e){p(this,{action:"set-color",id:this.selectedNodeId,color:e.detail.color,originalEvent:e})}handleTextChanged(e){var n;const t=(n=this.shadowRoot)==null?void 0:n.getElementById("text-edit-box");if(!t)return;const i=t.value;if(!i.trim()){this.isInvalidText=!0;return}this.isInvalidText=!1,p(this,{action:"set-text",id:this.selectedNodeId,value:i,originalEvent:e})}handleSizeChanged(e){var s;const t=(s=this.shadowRoot)==null?void 0:s.getElementById("size-option-select");if(!t)return;const i=parseFloat(t.value);p(this,{action:"set-size",id:this.selectedNodeId,value:i,originalEvent:e})}handleLetterSpacingChanged(e){var s;const t=(s=this.shadowRoot)==null?void 0:s.getElementById("letterspacing-option-select");if(!t)return;const i=parseFloat(t.value);p(this,{action:"set-letterspacing",id:this.selectedNodeId,value:i,originalEvent:e})}handleAlignmentChanged(e){var s;const t=(s=this.shadowRoot)==null?void 0:s.getElementById("alignment-option-select");if(!t)return;const i=t.selected[0];p(this,{action:"set-property",id:this.selectedNodeId,key:"alignment",value:i,originalEvent:e})}handleDiameterChanged({target:{value:e}}){typeof e=="number"&&p(this,{action:"update-node",id:this.selectedNodeId,nodeData:{width:e,height:e}})}handleWidthChanged({target:{value:e}}){typeof e=="number"&&p(this,{action:"update-node",id:this.selectedNodeId,nodeData:{width:e}})}handleHeightChanged({target:{value:e}}){typeof e=="number"&&p(this,{action:"update-node",id:this.selectedNodeId,nodeData:{height:e}})}handleBorderRadiusChanged({target:{value:e}}){typeof e=="number"&&p(this,{action:"update-node",id:this.selectedNodeId,nodeData:{data:{borderRadius:e}}})}handleBorderSizeChanged({target:{value:e}}){typeof e=="number"&&p(this,{action:"update-node",id:this.selectedNodeId,nodeData:{data:{borderSize:e}}})}handleBorderColorPicked({detail:{color:e}}){p(this,{action:"update-node",id:this.selectedNodeId,nodeData:{data:{borderColor:e}}})}handleFontChanged(e){var h;const t=(h=this.shadowRoot)==null?void 0:h.getElementById("font-option-select");if(!t||!this.selectedNodeId)return;const{data:{fontLabel:i}}=this.documentState.nodes[this.selectedNodeId],{label:s,family:n,weight:a,style:d}=be.find(c=>c.label===t.value)||{};i!==s&&p(this,{action:"set-properties",id:this.selectedNodeId,originalEvent:e,data:{fontLabel:s,font:n,weight:a,style:d}})}get colorPickerHtml(){if(this.selectedNodeId){const{data:{color:e}}=this.documentState.nodes[this.selectedNodeId];if(e)this._color=e;else return r``}return r`
      <color-picker-button
        label="Color"
        @color-picked=${this.handleColorPicked}
        color=${this._color}
      ></color-picker-button>
    `}get colorPickerSectionHtml(){return r`<section>${this.colorPickerHtml}</section>`}get diameterInputHtml(){if(!this.selectedNodeId)return r``;const{width:e}=this.documentState.nodes[this.selectedNodeId];return r`

      <sp-field-label for="diameter-option-select">Diameter</sp-field-label>
      <sp-number-field
        @change=${this.handleDiameterChanged}
        @blur=${this.handleDiameterChanged}
        id="width-option-select"
        value=${e}
        min="1"
        style="width: 120px"
        format-options='{
                "minimumFractionDigits": 0,
                "maximumFractionDigits": 2
            }'
      ></sp-number-field>

    `}get sizeInputsHtml(){if(!this.selectedNodeId)return r``;const{width:e,height:t}=this.documentState.nodes[this.selectedNodeId];return r`

      <sp-field-label for="width-option-select">Width</sp-field-label>
      <sp-number-field
        @change=${this.handleWidthChanged}
        @blur=${this.handleWidthChanged}
        id="width-option-select"
        value=${e}
        min="1"
        style="width: 120px"
        format-options='{
                "minimumFractionDigits": 0,
                "maximumFractionDigits": 2
            }'
      ></sp-number-field>

      <sp-field-label for="height-option-select">Height</sp-field-label>
      <sp-number-field
        @change=${this.handleHeightChanged}
        @blur=${this.handleHeightChanged}
        id="height-option-select"
        value=${t}
        min="1"
        style="width: 120px"
        format-options='{
                "minimumFractionDigits": 0,
                "maximumFractionDigits": 2
            }'
      ></sp-number-field>

    `}get borderControlsHtml(){if(!this.selectedNodeId)return r``;const{data:{borderSize:e,borderColor:t}}=this.documentState.nodes[this.selectedNodeId];return r`
      <sp-field-label for="width-option-select">Border Size</sp-field-label>
      <sp-number-field
        @change=${this.handleBorderSizeChanged}
        @blur=${this.handleBorderSizeChanged}
        id="width-option-select"
        value=${e}
        min="0"
        style="width: 120px"
        format-options='{
                "minimumFractionDigits": 0,
                "maximumFractionDigits": 2
            }'
      ></sp-number-field>

      <color-picker-button
        label="Border Color"
        @color-picked=${this.handleBorderColorPicked}
        color=${t}
      ></color-picker-button>
    `}get rectangleEditHtml(){if(!this.selectedNodeId)return r``;const{data:{borderRadius:e}}=this.documentState.nodes[this.selectedNodeId];return r`
      <section>
        ${this.colorPickerHtml}
        ${this.sizeInputsHtml}
        <sp-field-label for="width-option-select">Border Radius</sp-field-label>
        <sp-number-field
          @change=${this.handleBorderRadiusChanged}
          @blur=${this.handleBorderRadiusChanged}
          id="width-option-select"
          value=${e}
          min="0"
          style="width: 120px"
          format-options='{
                  "minimumFractionDigits": 0,
                  "maximumFractionDigits": 2
              }'
        ></sp-number-field>
        ${this.borderControlsHtml}
      </section>
    `}get ellipseEditHtml(){return r`
      <section>
        ${this.colorPickerHtml}
        ${this.sizeInputsHtml}
        ${this.borderControlsHtml}
      </section>
    `}get circleEditHtml(){return r`
      <section>
        ${this.colorPickerHtml}
        ${this.diameterInputHtml}
        ${this.borderControlsHtml}
      </section>
    `}get textEditHtml(){if(!this.selectedNodeId)return r``;const{data:{fontLabel:e,size:t,text:i,alignment:s,letterSpacing:n}}=this.documentState.nodes[this.selectedNodeId];if(i&&t)this._text=i,this._size=t,this._letterSpacing=n,this._alignment=s,this._fontLabel=e;else return r``;return r`
      <section class="text-edit">
        <sp-textfield
          id="text-edit-box"
          multiline
          grows
          ?invalid=${this.isInvalidText}
          @keyup=${this.handleTextChanged}
          @change=${this.handleTextChanged}
          placeholder="Invalid Text..."
          .value=${this._text||"sldkfjsldkj"}
        ></sp-textfield>

        <sp-field-label for="font-option-select" size="m">Font</sp-field-label>
        <sp-picker
          id="font-option-select"
          size="m"
          label="Font"
          placement="right"
          @change=${this.handleFontChanged}
          @blur=${this.handleFontChanged}
          value=${this._fontLabel}
        >
          ${ee(be,a=>a.label,a=>r`<sp-menu-item value=${a.label}
                ><span
                  style="font-family:${a.family};font-weight:${a.weight};font-style:${a.style}"
                  >${a.label}</span
                ></sp-menu-item
              >`)}
        </sp-picker>

        ${this.colorPickerHtml}

        <sp-field-label for="size-option-select">Font Size</sp-field-label>
        <sp-number-field
          @change=${this.handleSizeChanged}
          @blur=${this.handleSizeChanged}
          id="size-option-select"
          value=${this._size}
          min="1"
          style="width: 120px"
          format-options='{
                  "minimumFractionDigits": 1,
                  "maximumFractionDigits": 2
              }'
        ></sp-number-field>

        <sp-field-label for="size-option-select">Letter Spacing</sp-field-label>
        <sp-number-field
          @change=${this.handleLetterSpacingChanged}
          @blur=${this.handleLetterSpacingChanged}
          id="letterspacing-option-select"
          value=${this._letterSpacing}
          min="0"
          step="1"
          max="100"
          style="width: 120px"
        ></sp-number-field>

        <sp-field-label for="alignment-option-select" size="m"
          >Alignment</sp-field-label
        >
        <sp-action-group
          id="alignment-option-select"
          @change=${this.handleAlignmentChanged}
          selects="single"
          compact
          emphasized
        >
          <sp-action-button
            ?selected=${this._alignment==="left"}
            label="Left"
            value="left"
          >
            <i slot="icon" class="align-left"></i>
          </sp-action-button>
          <sp-action-button
            ?selected=${this._alignment==="center"}
            label="Center"
            value="center"
          >
            <i slot="icon" class="align-center"></i>
          </sp-action-button>
          <sp-action-button
            ?selected=${this._alignment==="right"}
            label="Right"
            value="right"
          >
            <i slot="icon" class="align-right"></i>
          </sp-action-button>
        </sp-action-group>
      </section>
    `}get blendModePickerHtml(){if(this.selectedNodeId){const{blendMode:e}=this.documentState.nodes[this.selectedNodeId];return r`
        <section>
          <sp-field-label for="blendmode-option-select" size="m"
            >Blend Mode</sp-field-label
          >
          <sp-picker
            id="blendmode-option-select"
            size="m"
            label="Blend Mode"
            @change=${this.handleBlendModeChange}
            @blur=${this.handleBlendModeChange}
            value=${e}
          >
            <sp-menu-item value="normal">Normal</sp-menu-item>
            <sp-menu-item value="screen">Screen</sp-menu-item>
            <sp-menu-item value="multiply">Multiply</sp-menu-item>
          </sp-picker>
        </section>
      `}return r``}willUpdate(e){this.selectedNode=this.selectedNodeId?this.documentState.nodes[this.selectedNodeId]:{};const{data:t}=this.selectedNode;t&&t.substance!==this._substance&&(this._substance=t.substance||"",this._substance?Ee(this._substance).then(i=>dt(i)).then(({tweaks:i=[],presets:s=[]})=>{const n=JSON.stringify(s),a=JSON.stringify(this.substancePresets),d=JSON.stringify(i),h=JSON.stringify(this.substanceTweaks);n!==a&&(this.substancePresets=s),d!==h&&(this.substanceTweaks=i)}):(this.substancePresets=[],this.substanceTweaks=[])),e.has("substanceEffectIndex")&&(this.substanceEffectIds=Object.keys(this.substanceEffectIndex.items),this.substanceEffectIds.sort((i,s)=>{const{items:n}=this.substanceEffectIndex,a=n[i],d=n[s],h=a.name,c=d.name;return h<c?1:-1}))}get substancePickerHtml(){if(!this.selectedNodeId||this.selectedNode.type!=="image")return r``;const{data:{substance:e,substanceConfig:t}}=this.selectedNode,i=t.preset,s=e||"",n=i||"",a=this.substancePresets.find(c=>c.name===n),d=this.substanceEffectIds.find(c=>c===e),h=!e||d?r``:r` <option value="${e}" selected>${e}</option> `;return r`
      <section>
        <label for="SubstancePicker">Substance</label>
        <select
          id="SubstancePicker"
          @blur=${this.handleSubstanceChange}
          @change=${this.handleSubstanceChange}
          .value=${s}
        >
          <option value="" ?selected=${!e}>None</option>
          ${h}
          ${ee(this.substanceEffectIds,c=>c,c=>r`
              <option value="${c}" ?selected=${c===e}>
                ${this.substanceEffectIndex.items[c].name}
              </option>
            `)}
        </select>
        ${this.substancePresets.length>0?r`
              <select
                id="SubstancePresetPicker"
                @blur=${this.handleSubstancePresetChange}
                @change=${this.handleSubstancePresetChange}
                .value=${n}
              >
                ${ee(this.substancePresets,c=>c.name,c=>r`
                    <option
                      value="${c.name}"
                      ?selected=${c.name===i}
                    >
                      ${c.name}
                    </option>
                  `)}
              </select>
            `:""}
      </section>
      <editor-inspector-substance-tweaks
        .node=${this.selectedNode}
        .tweaks=${this.substanceTweaks}
        .preset=${a}
      ></editor-inspector-substance-tweaks>
    `}handleFileInputChange(e){const t=e.target,{files:i}=t;FileReader&&i&&i.length&&this.loadFile(i[0])}handleDrop(e){if(e.preventDefault(),e.dataTransfer.items&&e.dataTransfer.items.length&&e.dataTransfer.items[0].kind==="file"){const t=e.dataTransfer.items[0].getAsFile();this.loadFile(t)}}debouncedClearDragoverClass(){clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.isReplaceImageDragOverState=!1},150)}handleDragOver(e){this.isReplaceImageDragOverState=!0,this.debouncedClearDragoverClass(),e.preventDefault()}get replaceImageHtml(){const e=this.selectedNodeId;if(!e)return r``;const{type:t}=this.documentState.nodes[e];return t!=="image"?r``:r`
    <section
      class="${this.isReplaceImageDragOverState?"isReplaceImageDragOverState":""}"
      @drop="${this.handleDrop}"
      @dragover="${this.handleDragOver}"
    >
    <overlay-trigger>
      <sp-button slot="trigger">Replace Image</sp-button>
      <sp-popover dialog slot="click-content" direction="bottom" tip open>
        <input @change=${this.handleFileInputChange} type="file" id="myFile"></input>
      </sp-popover>
    </overlay-trigger>
    </section>
    `}get packInputsHtml(){const e=this.selectedNodeId;if(!e)return r``;const{data:t}=this.documentState.nodes[e];return r`
      <section>
        <editor-inspector-pack
          nodeId=${e}
          .packData=${t}
        ></editor-inspector-pack>
      </section>
    `}handleItemNameChange(e){e.currentTarget&&this.selectedNodeId&&p(this,{action:"set-property",id:this.selectedNodeId,key:"name",value:e.currentTarget.value})}loadFile(e){const t=this.selectedNodeId;!t||X(e).then(i=>{p(this,{action:"replace-image",id:t,data:{src:i.url,width:i.width,height:i.height}})})}ungroupContainer(){p(this,{action:"ungroup-selections"})}get renameInputHtml(){let e="";const t=this.selectedNodeId;if(t){const{data:{name:i}}=this.documentState.nodes[t];e=i}return r`
      <section class="name-input-section">
        <sp-field-label for="name-1">Layer Name</sp-field-label>
        <sp-textfield
          quiet
          @change=${this.handleItemNameChange}
          id="name-0"
          value="${e}"
          placeholder="Enter a layer name"
        ></sp-textfield>
      </section>
    `}get containerUngroupHtml(){return r`
      <section>
        <sp-button size="s" variant="secondary" @click=${this.ungroupContainer}
          >Ungroup</sp-button
        >
      </section>
    `}get exportArtboardHtml(){return r`
      <section>

        <sp-field-label for="export-size-select" size="m">Export Size</sp-field-label>
        <sp-picker
          id="export-size-select"
          size="m"
          label="Export Size"
          @change=${this.handleExportSizeChange}
          @blur=${this.handleExportSizeChange}
          value=${this._exportSize}
        >
          <sp-menu-item value="0.5">0.5x</sp-menu-item>
          <sp-menu-item value="1">1x</sp-menu-item>
          <sp-menu-item value="2">2x</sp-menu-item>
          <sp-menu-item value="3">3x</sp-menu-item>
          <sp-menu-item value="4">4x</sp-menu-item>
        </sp-picker>
        <br/>
        <br/>
        <sp-button
          size="m"
          @click=${this.handleExportClick}
        >Export As Image</sp-button>
        <br/>
        <br/>
        <sp-button
          variant="secondary"
          size="s"
          @click=${this.handleSaveAsThumbnail}
        >Save as Primary Thumbnail</sp-button>
        <br/>
        <br/>
        <sp-button
          variant="secondary"
          size="s"
          @click=${this.handleSaveAsExtraThumbnail}
        >Save as Extra Thumbnail</sp-button>
        <br/>
      </section>
    `}get artboardGroupPackConfigurationHtml(){const{data:{publishedPackId:e,tags:t,author:i,tool:s}}=this.selectedNode,a=(t||[]).join(","),d=!!e;return r`
    <sp-theme
      id="pack-config-panel"
      theme="spectrum"
      color="lightest"
      scale="small"
      style="background-color: #efefef"
    >

        <sp-button
          size="m"
          @click=${this.handlePublishAsPack}
        >Create New Pack</sp-button>
        <br/><br/>
        <sp-button
          variant="primary"
          size="s"
          ?disabled=${!d}
          @click=${this.handleUpdatePack}
        >Update Existing Pack {${e}}</sp-button>

        <br/><br/>

        <div>
          <sp-field-label for="authorinput">Author</sp-field-label>
          <sp-textfield
            id="authorinput"
            @change=${this.handleAuthorInputChange}
            value="${i}"
            placeholder="Enter an author name"
          ></sp-textfield>
        </div>

        <div>
          <sp-field-label for="toolinput">Tool Name</sp-field-label>
          <sp-textfield
            id="toolinput"
            @change=${this.handleToolInputChange}
            value="${s}"
            placeholder="Enter a tool name"
          ></sp-textfield>
        </div>

        <div>
          <sp-field-label for="tagsinput">Tags (comma seperated)</sp-field-label>
          <sp-textfield
            id="tagsinput"
            @change=${this.handleTagsInputChange}
            value="${a}"
            placeholder="Enter,comma,seperated,tags"
          ></sp-textfield>
        </div>


        <editor-inspector-semantic-interface
          nodeId=${this.selectedNodeId||""}
          .documentState=${this.documentState}
          .editorState=${this.editorState}
        ></editor-inspector-semantic-interface>


    </sp-theme>
    `}handleBlendModeChange(e){p(this,{action:"update-node",id:this.selectedNodeId,nodeData:{blendMode:e.target.value}})}handleSubstanceChange(e){const{data:{substance:t}}=this.selectedNode,{selectedNodeId:i}=this;if(e.target.value!==t){const s=e.target.value;if(s)y(this,{action:"add-loading",id:i});else{p(this,{action:"set-properties",id:i,data:{substance:"",substanceConfig:{}},originalEvent:e});return}Ee(s).then(n=>ct(n)).then(n=>{let a="";n.length>0&&(a=n[0].name),p(this,{action:"set-properties",id:i,data:{substance:s,substanceConfig:{preset:a}},originalEvent:e})})}}handleSubstancePresetChange(e){const{data:{substanceConfig:t}}=this.selectedNode;e.target.value!==t.preset&&p(this,{action:"set-property",id:this.selectedNodeId,key:"substanceConfig",value:{preset:e.target.value},originalEvent:e})}makeGroup(){p(this,{action:"group-selections"})}maskWithShape(e){p(this,{action:"mask-selections",id:e})}get singleItemPropertiesHtml(){let e="";const t=this.selectedNodeId;if(t){const{type:s}=this.documentState.nodes[t];e=s}const i=[];switch(e){case"text":i.push(this.textEditHtml,this.blendModePickerHtml);break;case"image":i.push(this.replaceImageHtml,this.blendModePickerHtml,this.substancePickerHtml);break;case"rectangle":i.push(this.rectangleEditHtml,this.blendModePickerHtml);break;case"circle":i.push(this.circleEditHtml,this.blendModePickerHtml);break;case"ellipse":i.push(this.ellipseEditHtml,this.blendModePickerHtml);break;case"artboard":i.push(r`<section>${this.sizeInputsHtml}</section>`,this.colorPickerSectionHtml,this.exportArtboardHtml);break;case"artboard-group":i.push(this.artboardGroupPackConfigurationHtml);break;case"container":i.push(this.containerUngroupHtml);break;case"pack":i.push(this.packInputsHtml);break}return r`
      <header>
        ${this.renameInputHtml}
      </header>
      <div class="inspector-content">${i}</div>
    `}get batchSelectedPropertiesHtml(){const e=this.editorState.selections.length;let t=!0,i=!1,s="",n=0,a="",d="";return this.editorState.selections.forEach(h=>{const{type:c,parentId:u}=this.documentState.nodes[h],{children:w}=this.documentState.nodes[u],C=w.indexOf(h);C>=n&&(n=C,a=c,d=h),s&&t&&s!==u?t=!1:s=u}),t&&(a==="rectangle"||a==="ellipse"||a==="circle")&&(i=!0),r`
      <header>
        <h1>${e} Items</h1>
      </header>
      <div class="inspector-content">
        <section>
          <sp-button @click=${this.makeGroup}>Group Items</sp-button>
        </section>
        <!--section>
          <sp-button ?disabled=${!i} @click=${()=>this.maskWithShape(d)}>Mask With Shape</sp-button>
        </section-->
      </div>
      <footer></footer>
    `}get panelContentsHtml(){const e=this.editorState.selections.length===0,t=this.editorState.selections.length>1;return e?r``:t?this.batchSelectedPropertiesHtml:this.singleItemPropertiesHtml}render(){if(this.selectedNodeId){const{type:e}=this.selectedNode;this._name=e}return r` <div class="panel">${this.panelContentsHtml}</div> `}}O.styles=g`
    :host {
      position: absolute;
      display: block;
      height: 100%;
      width: 100%;
      pointer-events: none;
    }

    .panel {
      pointer-events: initial;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: block;
      background-color: #ffffff;
      overflow: auto;
    }

    header h1 {
      line-height: 50px;
      text-align: left;
      color: #111111;
      font-family: adobe-clean;
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 0 20px;
    }

    .inspector-content {
      flex: 1;
      width: 100%;
      position: relative;
      overflow: auto;
      /* text-align: center; */
    }

    editor-inspector-pack {
      position: relative;
      display: block;
    }

    .inspector-content section {
      margin: 0 20px 10px 20px;
      padding: 0 0 10px 0;
      border-bottom: 1px #f1f1f1 solid;
    }

    section.name-input-section {
      padding: 6px 20px 17px;
      margin-bottom: 16px;
      border-bottom: 1px #f1f1f1 solid;
    }

    section.isReplaceImageDragOverState {
      background-color: #fffcdb;
      border: 1px red dashed;
    }

    .text-edit color-picker-button {
      margin-top: 10px;
    }

    .pickers {
      margin: 30px;
    }

    color-picker-button {
      display: block;
    }

    footer {
      height: 60px;
      border-top: 1px #eeeeee solid;
      text-align: center;
    }

    sp-textfield {
      min-height: 44px;
    }

    sp-action-button i {
      position: relative;
      display: inline-block;
      width: 22px;
      height: 22px;
      background: #242424;
      mask-size: cover;
      pointer-events: none;
    }

    sp-action-button i.align-left {
      mask: url('./files/Smock_TextAlignLeft_22_N.svg');
      -webkit-mask: url('./files/Smock_TextAlignLeft_22_N.svg');
    }

    sp-action-button i.align-center {
      mask: url('./files/Smock_TextAlignCenter_22_N.svg');
      -webkit-mask: url('./files/Smock_TextAlignCenter_22_N.svg');
    }

    sp-action-button i.align-right {
      mask: url('./files/Smock_TextAlignRight_22_N.svg');
      -webkit-mask: url('./files/Smock_TextAlignRight_22_N.svg');
    }

    sp-action-button[selected] i {
      background: #ffffff;
    }

    #pack-config-panel {
      margin: 0 20px;
      border-radius: 10px;
      padding: 20px 20px;
    }
  `;j([l({type:Object})],O.prototype,"editorState",2);j([l({type:Object})],O.prototype,"documentState",2);j([l({type:Boolean})],O.prototype,"open",2);j([L()],O.prototype,"substanceEffectIndexModel",2);j([L()],O.prototype,"substanceEffectIndex",2);j([L()],O.prototype,"selectedNode",2);j([L()],O.prototype,"substancePresets",2);j([L()],O.prototype,"substanceTweaks",2);j([L()],O.prototype,"isReplaceImageDragOverState",2);j([L()],O.prototype,"isInvalidText",2);customElements.define("editor-inspector",O);var $i=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,U=(o,e,t,i)=>{for(var s=i>1?void 0:i?ki(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&$i(e,t,s),s};function wi(o,e){return o.filter(t=>!e.includes(t))}class z extends f{constructor(){super(...arguments),this.documentState={},this.editorState={},this.closedContainers=[],this.draggedItemId="",this.dragOverTargetId="",this.dragOverInsertion="",this.isDragging=!1}preorderTraversal(e){const t=[this.documentState.rootNodeId],i=[0];for(;t.length;){const s=t.pop(),n=i.pop(),a=this.documentState.nodes[s];a.type!=="pack"&&this.closedContainers.indexOf(s)===-1&&(t.push(...a.children),i.push(...Array(a.children.length).fill(n+1))),e(a,n)}}descendents(e){const t=[],{children:i}=this.documentState.nodes[e],s=[...i];for(;s.length;){const n=s.pop(),{children:a}=this.documentState.nodes[n];t.push(n),s.push(...a)}return t}ancestors(e){const t=[];let{parentId:i}=this.documentState.nodes[e];for(;i;)t.push(i),i=this.documentState.nodes[i].parentId;return t}handleIconClick(e,t,i){if(t==="container"||t==="artboard"){i.stopPropagation();const s=this.closedContainers.indexOf(e);s===-1?this.closedContainers.push(e):this.closedContainers.splice(s,1),this.requestUpdate()}}handlePointerDown(e,t){var u;if(this.gesture&&this.gesture.active)return;const i=(u=this.shadowRoot)==null?void 0:u.getElementById(t);if(!i)return;const{ctrlKey:s,shiftKey:n,metaKey:a}=e,{selections:d}=this.editorState,h=d.indexOf(t),c=[];if(this.gesture=new B(e,i),this.draggedItemId=t,s||n||a)if(h===-1){const w=[...this.descendents(t),...this.ancestors(t)];c.push(t,...wi(d,w))}else c.push(...d),c.splice(h,1);else c.push(t);y(this,{action:"set-selections",ids:c})}handleDragEnd(){if(this.dragOverTargetId){const{parentId:e,type:t}=this.documentState.nodes[this.dragOverTargetId],{children:i}=this.documentState.nodes[e],s=i.indexOf(this.dragOverTargetId);let n="",a=0;this.dragOverInsertion==="above"?(n=e,a=s+1):t==="container"||t==="artboard"?(n=this.dragOverTargetId,a=i.length):(this.dragOverInsertion==="below"||this.dragOverInsertion==="into")&&(n=e,a=s),this.documentState.nodes[this.draggedItemId].parentId===n&&i.indexOf(this.draggedItemId)<=s&&(a-=1),n&&this.draggedItemId&&(p(this,{action:"update-node",id:this.draggedItemId,nodeData:{parentId:n,index:a}}),p(this,{action:"conform-artboard-intersections"}))}this.isDragging=!1,this.draggedItemId="",this.dragOverTargetId=""}handleDragStart(){this.isDragging=!0}listItemIdAtCoordinate(e,t){var n;let i=(n=this.shadowRoot)==null?void 0:n.elementFromPoint(e,t),s="";for(;i&&!i.id;)i=i==null?void 0:i.parentNode;return i&&(s=i.id),s}dropPlacement(e,t){const i=this.listItemIdAtCoordinate(e,t-10),s=this.listItemIdAtCoordinate(e,t),n=this.listItemIdAtCoordinate(e,t+10);return s?s===i&&s===n?"into":s===i?"below":"above":""}handleDragMove(e){var i;this.dragOverInsertion=this.dropPlacement(e.detail.currentX,e.detail.currentY);let t=(i=this.shadowRoot)==null?void 0:i.elementFromPoint(e.detail.currentX,e.detail.currentY);if(!t){this.dragOverTargetId="";return}for(;t&&!t.id;)t=t==null?void 0:t.parentNode;t?this.dragOverTargetId=t.id:this.dragOverTargetId=""}render(){const e=[];return this.preorderTraversal((t,i)=>{if(i===0)return;let s="";switch(t.type){case"text":t.data.name?s=t.data.name:s=t.data.text||t.type;break;default:s=t.data.name||t.type;break}const n=this.editorState.selections.indexOf(t.id)>=0;let a="background",d=t.data.color||"#242424";t.type==="image"&&(a="background-image",d=`url("${t.data.src}")`),t.type==="artboard"&&(d="#242424");const h=this.closedContainers.indexOf(t.id)===-1?"":"closed";let c=this.dragOverInsertion;t.type!=="container"&&t.type!=="artboard"&&c==="into"&&(c="below"),e.push(r`
          <div
            id="${t.id}"
            @pointerdown=${u=>this.handlePointerDown(u,t.id)}
            class="layer ${this.isDragging&&t.id===this.draggedItemId?"dragged":""} ${t.id===this.dragOverTargetId?`insert-${c}`:""}"
            ?selected="${n}"
          >
            <t style="padding-left:${i*16}px;">
              <i
                style="${a}:${d};"
                class="${t.type} ${h}"
                @pointerdown=${u=>this.handleIconClick(t.id,t.type,u)}
              ></i>
              ${s}
            </t>
          </div>
        `)}),r`<section
      @wheel=${t=>t.stopPropagation()}
      @gesture-drag-end=${this.handleDragEnd}
      @gesture-drag-start=${this.handleDragStart}
      @gesture-drag-move=${this.handleDragMove}
    >
      <h3>Layers</h3>
      ${e}
    </section> `}}z.styles=g`
    h3 {
      line-height: 50px;
      text-align: left;
      color: #111111;
      font-family: adobe-clean;
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 0 20px;
    }

    section {
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: #ffffff;
      font-size: 12px;
      overflow-y: scroll;
    }

    .layer {
      position: relative;
      display: block;
      padding: 0 27px;
      height: 32px;
      line-height: 32px;
      max-width: 100%;
      box-shadow: inset 0 -1px 0 transparent;
      background: none;
      color: #242424;
      z-index: 1;
    }

    .layer.dragged {
      opacity: 0.5;
    }

    .layer.insert-above {
      box-shadow: inset 0 1px 0 #0174e8, 0 -1px 0 #0174e8;
      z-index: 2;
    }

    .layer.insert-above + .layer {
      box-shadow: inset 0 -1px 0 transparent, 0 -1px 0 transparent;
      z-index: 3;
    }

    .layer.insert-into {
      background: rgba(1, 116, 232, 0.2);
      z-index: 2;
    }

    .layer.insert-below {
      box-shadow: inset 0 -1px 0 #0174e8, 0 1px 0 #0174e8;
      z-index: 2;
    }

    .layer label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .layer t {
      position: relative;
      display: block;
    }

    .layer i {
      position: relative;
      display: block;
      float: left;
      width: 18px;
      height: 18px;
      top: 6px;
      margin-left: -25px;
      background: #242424;
      mask-size: cover;
    }

    .layer i.image {
      background: #242424;
      width: 22px;
      height: 22px;
      border-radius: 3px;
      top: 5px;
      margin-left: -27px;
      background-size: contain;
      background-repeat: no-repeat;
      background-color: transparent;
      background-position: center;
    }

    .layer i.artboard {
      mask: url('./files/Smock_Artboard_18_N.svg');
      -webkit-mask: url('./files/Smock_Artboard_18_N.svg');
    }

    .layer i.artboard-group {
      mask: url('./files/Smock_DocumentFragmentGroup_18_N.svg');
      -webkit-mask: url('./files/Smock_DocumentFragmentGroup_18_N.svg');
    }

    .layer i.artboard.closed {
      mask: url('./files/Smock_Artboard_Filled_18_N.svg');
      -webkit-mask: url('./files/Smock_Artboard_Filled_18_N.svg');
    }

    .layer i.container {
      mask: url('./files/Smock_FolderOpen_18_N.svg');
      -webkit-mask: url('./files/Smock_FolderOpen_18_N.svg');
    }

    .layer i.container.closed {
      mask: url('./files/Smock_Folder_18_N.svg');
      -webkit-mask: url('./files/Smock_Folder_18_N.svg');
    }

    .layer i.rectangle {
      mask: url('./files/Smock_Rectangle_18_N.svg');
      -webkit-mask: url('./files/Smock_Rectangle_18_N.svg');
    }
    .layer i.circle {
      mask: url('./files/Smock_Circle_18_N.svg');
      -webkit-mask: url('./files/Smock_Circle_18_N.svg');
    }
    .layer i.ellipse {
      mask: url('./files/Smock_Ellipse_18_N.svg');
      -webkit-mask: url('./files/Smock_Ellipse_18_N.svg');
    }
    .layer i.text {
      mask: url('./files/Smock_Text_18_N.svg');
      -webkit-mask: url('./files/Smock_Text_18_N.svg');
    }
    .layer:last-child {
      border-bottom: none;
    }

    .layer span {
      font-size: 0.85em;
      color: #eff0f0;
      position: relative;
      display: inline-block;
      padding: 1px 7px;
      border-radius: 100px;
      background: rgba(0, 153, 255, 0.5);
      height: 1.2em;
      line-height: 1.2em;
      margin-right: 5px;
    }

    .layer[selected] {
      background: #eeeeee;
    }
  `;U([l({type:Object})],z.prototype,"documentState",2);U([l({type:Object})],z.prototype,"editorState",2);U([l({type:Array})],z.prototype,"closedContainers",2);U([l({type:String})],z.prototype,"draggedItemId",2);U([l({type:String})],z.prototype,"dragOverTargetId",2);U([l({type:String})],z.prototype,"dragOverInsertion",2);U([l({type:Boolean})],z.prototype,"isDragging",2);customElements.define("editor-layers-panel",z);var Si=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,Ye=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ii(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Si(e,t,s),s};function Pi(o){return o.includes(".png")?o.replace(".png","_sm.png"):`${o}_sm.png`}class pe extends f{constructor(){super(...arguments),this.editorState={},this.cargoPackIndex={},this._listOfPackIds=[]}willUpdate(e){e.has("cargoPackIndex")&&(this.cargoPackIndex&&this.cargoPackIndex.items?this._listOfPackIds=Object.keys(this.cargoPackIndex.items):this._listOfPackIds=[])}handleListItemDelete(e){y(this,{action:"delete-cargo-pack-from-index",id:e})}handleListItemClick(e){p(this,{action:"add-cargo-pack",id:e})}render(){return r`
      <header>
        <h1>Cargo Packs</h1>
      </header>
      <div class="contents">
        <ul>
          ${ee(this._listOfPackIds,e=>e,e=>r`
            <li>
              <div
                @click=${()=>this.handleListItemClick(e)}
                class="thumbnail"
                style="background-image: url('${tt}/image/${Pi(this.cargoPackIndex.items[e].thumbnail)}');"
              >
              <button
                @click=${t=>{t.preventDefault(),t.stopPropagation(),this.handleListItemDelete(e)}}
              >x</button>
            </li>
          `)}
        </ul>
      </div>
    `}}pe.styles=g`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #ffffff;
      overflow: auto;
    }

    header h1 {
      line-height: 50px;
      text-align: left;
      color: #111111;
      font-family: adobe-clean;
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 0 20px;
    }

    .contents {
      padding: 0 20px;
    }

    .search {
      background: #eee;
      box-shadow: inset 0 0 0 1px #ddd;
      width: 100%;
      height: 40px;
      border-radius: 40px;
    }

    ul {
      list-style-type: none;
      margin: 15px 0 20px 0;
      padding: 0;
    }

    li {
      width: 74px;
      height: 74px;
      background: #eee;
      box-shadow: 0 0 0 1px #ddd;
      position: relative;
      display: inline-block;
      margin: 10px 10px 0 0;
      cursor: pointer;
    }

    .thumbnail {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position: center center;
      background-color: #ddd;
    }

    li button {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 16px;
      height: 16px;
      background: red;
      border: none;
      color: white;
      font-size: 10px;
      display: none;
      cursor: pointer;
    }

    li:hover button {
      display: block;
    }

  `;Ye([l({type:Object})],pe.prototype,"editorState",2);Ye([l({type:Object})],pe.prototype,"cargoPackIndex",2);customElements.define("editor-panel-discover",pe);var _i=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,Di=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ci(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&_i(e,t,s),s};class Se extends f{constructor(){super(...arguments),this.editorState={}}handlePick(e,t){p(this,{action:`add-${e}`,data:t})}loadFile(e){X(e).then(t=>{this.handlePick("image",{src:t.url,width:t.width,height:t.height})})}handleFileInputChange(e){const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let s=0;s<i.length;s+=1)this.loadFile(i[s])}render(){return r`
            <header>
                <h1>Photos</h1>
            </header>
            <div class="contents">
                <input @change=${this.handleFileInputChange} type="file" id="myFile" multiple>Load images</input>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        `}}Se.styles=g`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #ffffff;
      overflow: auto;
    }

    header h1 {
      line-height: 50px;
      text-align: left;
      color: #111111;
      font-family: adobe-clean;
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 0 20px;
    }

    .contents {
      padding: 0 20px;
    }

    .search {
      background: #eee;
      box-shadow: inset 0 0 0 1px #ddd;
      width: 100%;
      height: 40px;
      border-radius: 40px;
    }

    input {
      margin-top: 15px;
    }

    ul {
      list-style-type: none;
      margin: 15px 0 20px 0;
      padding: 0;
    }

    li {
      width: 74px;
      height: 74px;
      background: #eee;
      box-shadow: inset 0 0 0 1px #ddd;
      position: relative;
      display: inline-block;
      margin: 10px 10px 0 0;
    }
  `;Di([l({type:Object})],Se.prototype,"editorState",2);customElements.define("editor-panel-photos",Se);var Ei=Object.defineProperty,Oi=Object.getOwnPropertyDescriptor,Ti=(o,e,t,i)=>{for(var s=i>1?void 0:i?Oi(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ei(e,t,s),s};class Ie extends f{constructor(){super(...arguments),this.editorState={}}handlePick(e,t){p(this,{action:`add-${e}`,data:t})}render(){return r`
      <div class="contents">
        <ul>
          ${be.map(e=>r`<li
                class="text-item"
                style="cursor: pointer; list-style: none; margin: 5px 0; line-height: 40px; font-size: 24px;"
                @click="${()=>this.handlePick("text",{weight:e.weight,style:e.style,font:e.family,fontLabel:e.label,size:90,text:"The Quick Brown Fox"})}"
              >
                <span
                  style="font-family:${e.family};font-weight:${e.weight};font-style:${e.style};"
                  >${e.label}</span
                >
              </li>`)}
        </ul>
      </div>
    `}}Ie.styles=g`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #ffffff;
      overflow: auto;
    }

    header h1 {
      line-height: 50px;
      text-align: left;
      color: #111111;
      font-family: adobe-clean;
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 0 20px;
    }

    .contents {
      padding: 0 20px;
    }

    .search {
      background: #eee;
      box-shadow: inset 0 0 0 1px #ddd;
      width: 100%;
      height: 40px;
      border-radius: 40px;
    }

    ul {
      list-style-type: none;
      margin: 15px 0 20px 0;
      padding: 0;
    }
  `;Ti([l({type:Object})],Ie.prototype,"editorState",2);customElements.define("editor-panel-text",Ie);var Ni=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,ji=(o,e,t,i)=>{for(var s=i>1?void 0:i?Hi(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ni(e,t,s),s};class Pe extends f{constructor(){super(...arguments),this.editorState={}}handlePick(e){p(this,{action:"add-shape",value:e})}render(){return r`
      <header>
        <h1>Shapes</h1>
      </header>
      <div class="contents">
        <ul>
          <li
            @click=${()=>this.handlePick("rectangle")}
            style="background-image:url('./files/rectangle.png');"
          ></li>
          <li
            @click=${()=>this.handlePick("ellipse")}
            style="background-image:url('./files/ellipse.png');"
          ></li>
          <li
            @click=${()=>this.handlePick("circle")}
            style="background-image:url('./files/circle.png');"
          ></li>
        </ul>
      </div>
    `}}Pe.styles=g`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #ffffff;
      overflow: auto;
    }

    header h1 {
      line-height: 50px;
      text-align: left;
      color: #111111;
      font-family: adobe-clean;
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 0 20px;
    }

    .contents {
      padding: 0 20px;
    }

    .search {
      background: #eee;
      box-shadow: inset 0 0 0 1px #ddd;
      width: 100%;
      height: 40px;
      border-radius: 40px;
    }

    ul {
      list-style-type: none;
      margin: 15px 0 20px 0;
      padding: 0;
    }

    li {
      width: 74px;
      height: 74px;
      background-color: #eee;
      box-shadow: inset 0 0 0 1px #ddd;
      position: relative;
      display: inline-block;
      margin: 10px 10px 0 0;
      background-size: contain;
      background-repeat: no-repeat;
    }

    li:hover {
      background-color: #eaeaea;
    }

    li:active {
      background-color: #e5e5e5;
    }
  `;ji([l({type:Object})],Pe.prototype,"editorState",2);customElements.define("editor-panel-design-assets",Pe);var Ai=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Mi=(o,e,t,i)=>{for(var s=i>1?void 0:i?zi(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ai(e,t,s),s};class _e extends f{constructor(){super(...arguments),this.editorState={}}handleAddArtboardClick(e,t,i){p(this,{action:"add-artboard",width:e,height:t,data:{name:i}})}render(){return r`
      <section>
        <h2>WEB/DESKTOP</h2>
        <ul>
          <li @click=${()=>this.handleAddArtboardClick(1920,1080,"Web 1920")}>
            <i style="width:19px;height:10px;"></i>
            <label>Web 1920</label>
            <dfn>1920 x 1080</dfn>
          </li>
          <li @click=${()=>this.handleAddArtboardClick(1366,768,"Web 1366")}>
            <i style="width:14px;height:8px;"></i>
            <label>Web 1366</label>
            <dfn>1366 x 768</dfn>
          </li>
          <li @click=${()=>this.handleAddArtboardClick(1280,800,"Web 1280")}>
            <i style="width:13px;height:8px;"></i>
            <label>Web 1280</label>
            <dfn>1280 x 800</dfn>
          </li>
        </ul>
      </section>
      <section>
        <h2>SOCIAL MEDIA</h2>
        <ul>
          <li @click=${()=>this.handleAddArtboardClick(1080,1920,"Instagram Story")}>
            <i style="width:11px;height:19px;"></i>
            <label>Instagram Story</label>
            <dfn>1080 x 1920</dfn>
          </li>
          <li @click=${()=>this.handleAddArtboardClick(1080,1080,"Instagram Post")}>
            <i style="width:11px;height:11px;"></i>
            <label>Instagram Post</label>
            <dfn>1080 x 1080</dfn>
          </li>
          <li @click=${()=>this.handleAddArtboardClick(1024,512,"Twitter Post")}>
            <i style="width:10px;height:5px;"></i>
            <label>Twitter Post</label>
            <dfn>1024 x 512</dfn>
          </li>
          <li @click=${()=>this.handleAddArtboardClick(1500,500,"Twitter Header")}>
            <i style="width:15px;height:5px;"></i>
            <label>Twitter Header</label>
            <dfn>1500 x 500</dfn>
          </li>
          <li @click=${()=>this.handleAddArtboardClick(1200,630,"Facebook Post")}>
            <i style="width:12px;height:6px;"></i>
            <label>Facebook Post</label>
            <dfn>1200 x 630</dfn>
          </li>
          <li @click=${()=>this.handleAddArtboardClick(820,312,"Facebook Cover")}>
            <i style="width:8px;height:3px;"></i>
            <label>Facebook Cover</label>
            <dfn>820 x 312</dfn>
          </li>
          <li @click=${()=>this.handleAddArtboardClick(1280,720,"YouTube Video")}>
            <i style="width:13px;height:7px;"></i>
            <label>YouTube Video</label>
            <dfn>1280 x 720</dfn>
          </li>
        </ul>
      </section>
    `}}_e.styles=g`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #ffffff;
      overflow: auto;
    }

    header h1 {
      line-height: 50px;
      text-align: left;
      color: #111111;
      font-family: adobe-clean;
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 0 20px;
    }

    section {
      border-bottom: 2px #eee solid;
      padding: 20px 20px;
    }

    section h2 {
      line-height: 40px;
      text-align: left;
      color: #bbb;
      font-family: adobe-clean;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 1px;
      padding: 0;
      margin: 0 0 10px 0;
    }

    ul {
      position: relative;
      display: block;
      margin: 0;
      padding: 0;
    }

    ul li {
      position: relative;
      display: block;
      padding: 10px 0;
      border-radius: 6px;
    }

    ul li:hover {
      background: #fcfcfc;
    }

    ul li label {
      margin-left: 40px;
    }

    ul li dfn {
      float: right;
      margin-right: 10px;
      color: #ccc;
    }

    ul li i {
      background: #eee;
      position: absolute;
      display: block;
      top: 50%;
      left: 20px;
      transform: translate(-50%, -50%);
    }

  `;Mi([l({type:Object})],_e.prototype,"editorState",2);customElements.define("editor-panel-artboards",_e);var Ri=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Ce=(o,e,t,i)=>{for(var s=i>1?void 0:i?Bi(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ri(e,t,s),s};const Ne=200;class oe extends f{constructor(){super(...arguments),this.editorState={},this.documentState={},this.cargoPackIndex={},this.topPanelContentKey="default",this.isBottomPanelOpen=!1,this.bottomPanelMaxSize=1,this.bottomPanelSize=1,this.topPanelRenderSize=1,this.bottomPanelRenderSize=1,this.grippyStartReferencePanelSize=1}willUpdate(e){if(e.has("editorState")){const{targetLayersPanelHeight:t,activeToolbarSection:i,isLayersPaletteOpen:s,viewportHeight:n,selections:a}=this.editorState,d=n-E.HEADER_STANDARD_HEIGHT,h=a.length>0;this.bottomPanelMaxSize=d-Ne,this.isBottomPanelOpen=s,this.topPanelContentKey=h?"inspector":i,this.bottomPanelRenderSize=this.isBottomPanelOpen?Math.min(t,this.bottomPanelMaxSize):0,this.topPanelRenderSize=d-this.bottomPanelRenderSize}}handleGrippyMove(e){const t=this.grippyStartReferencePanelSize-e.detail.totalDeltaY,i=Math.max(Ne,Math.min(t,this.bottomPanelMaxSize));y(this,{action:"set-target-layers-panel-height",value:i})}handleGrippyStart(){this.grippyStartReferencePanelSize=this.bottomPanelRenderSize}get topPanelHtml(){let e;switch(this.topPanelContentKey){case"inspector":e=r` <editor-inspector
          .editorState=${this.editorState}
          .documentState=${this.documentState}
        ></editor-inspector>`;break;case"discover":e=r` <editor-panel-discover
          .editorState=${this.editorState}
          .cargoPackIndex=${this.cargoPackIndex}
        ></editor-panel-discover>`;break;case"photos":e=r` <editor-panel-photos
          .editorState=${this.editorState}
        ></editor-panel-photos>`;break;case"text":e=r` <editor-panel-text
          .editorState=${this.editorState}
        ></editor-panel-text>`;break;case"design-assets":e=r` <editor-panel-design-assets
          .editorState=${this.editorState}
        ></editor-panel-design-assets>`;break;case"artboards":e=r` <editor-panel-artboards
          .editorState=${this.editorState}
        ></editor-panel-artboards>`;break;default:e=r`- missing section component -`;break}return e}get bottomPanelHtml(){return r`
      <grippy-handle
        @gesture-drag-move=${this.handleGrippyMove}
        @gesture-drag-start=${this.handleGrippyStart}
      ></grippy-handle>
      <editor-layers-panel
        .documentState=${this.documentState}
        .editorState=${this.editorState}
      ></editor-layers-panel>
    `}get topPanelStyles(){return m({height:`${this.topPanelRenderSize}px`})}get bottomPanelStyles(){return m({height:`${this.bottomPanelRenderSize}px`})}render(){const e=this.isBottomPanelOpen?r`
          <div class="bottom" style=${this.bottomPanelStyles}>
            ${this.bottomPanelHtml}
          </div>
        `:r``;return r`
      <div class="top" style=${this.topPanelStyles}>${this.topPanelHtml}</div>
      ${e}
    `}}oe.styles=g`
    :host {
      position: absolute;
      display: block;
      background-color: #ffffff;
      border-right: 1px solid rgb(232, 232, 232);
    }

    .top {
      position: absolute;
      display: block;
      width: 100%;
      top: 0;
      left: 0;
    }

    .bottom {
      box-shadow: 0 -2px 0 #ddd, 0 -3px 0 #e8e8e8, 0 -5px 0 #ddd;
      z-index: 1;
      position: absolute;
      display: block;
      width: 100%;
      bottom: 0;
      left: 0;
    }

    .bottom grippy-handle {
      left: 0;
      top: -10px;
      height: 20px;
      width: 100%;
      z-index: 2;
      opacity: 0;
    }
  `;Ce([l({type:Object})],oe.prototype,"editorState",2);Ce([l({type:Object})],oe.prototype,"documentState",2);Ce([l({type:Object})],oe.prototype,"cargoPackIndex",2);customElements.define("editor-panel",oe);var Gi=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,V=(o,e,t,i)=>{for(var s=i>1?void 0:i?Li(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Gi(e,t,s),s};class M extends f{constructor(){super(),this.editorState={},this.displayGraph={},this.documentState={},this.cargoPackIndex={},this.canUndo=!1,this.canRedo=!1,this.isDragOverState=!1,this.debounceTimer=setTimeout(()=>"",0),this._margin=0,this._headerHeight=0,document.addEventListener("paste",e=>{const t=e.clipboardData.items;[].slice.call(t).filter(s=>s.type.indexOf("image")!==-1).forEach(s=>{const n=s.getAsFile();this.loadFile(n)})})}static layoutForSize(e,t){return e<=E.HORIZONTAL_BREAKPOINT?ue.SmallPortrait:t<=E.VERTICAL_BREAKPOINT?ue.SmallLandscape:ue.Standard}toolbarStyles(){const e=this._margin,t=this._margin+this._headerHeight,i=this.editorState.viewportHeight-this._headerHeight-this._margin*2;return{top:`${t}px`,left:`${e}px`,width:`${E.TOOLBAR_STANDARD_WIDTH}px`,height:`${i}px`}}assetsPanelStyles(){const e=this._margin+this._headerHeight,t=E.ASSETS_PANEL_STANDARD_WIDTH,i=E.TOOLBAR_STANDARD_WIDTH,s=this._margin+i+this._margin,n=this.editorState.viewportHeight-e-this._margin;return{top:`${e}px`,left:`${s}px`,width:`${t}px`,height:`${n}px`}}timelineStyles(){const e=this.editorState.viewportHeight-50-2*this._margin;return{display:"none",top:`${e}px`}}loadFile(e){X(e).then(t=>{p(this,{action:"add-image",data:{src:t.url,width:t.width,height:t.height}})})}handleFileInputChange(e){const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let s=0;s<i.length;s+=1)this.loadFile(i[s])}handleFileDrop(e){if(e.preventDefault(),e.dataTransfer.items){y(this,{action:"message",data:{copy:`Uploading ${e.dataTransfer.items.length} image${e.dataTransfer.items.length===1?"":"s"}`,type:"info"}});for(let t=0;t<e.dataTransfer.items.length;t+=1)if(e.dataTransfer.items[t].kind==="file"){const i=e.dataTransfer.items[t].getAsFile();this.loadFile(i)}}}debouncedClearDragoverClass(){clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.isDragOverState=!1},150)}handleFileDragOver(e){this.isDragOverState=!0,this.debouncedClearDragoverClass(),e.preventDefault()}panelStyles(){const e=this._margin+this._headerHeight,t=E.ASSETS_PANEL_STANDARD_WIDTH,i=E.TOOLBAR_STANDARD_WIDTH,s=this._margin+i+this._margin,n=this.editorState.viewportHeight-e-this._margin;return{top:`${e}px`,left:`${s}px`,width:`${t}px`,height:`${n}px`}}render(){const{timelineDuration:e}=this.documentState,{timelinePosition:t,viewportWidth:i,renderScale:s,selections:n,selectableHovers:a,loading:d,dragging:h,resizing:c,snaplines:u,snappoints:w,interactable:C,originOffsetX:Y,originOffsetY:I,isPanningMode:q,isNodeUnderMutation:G,isPanning:Z,messages:Q,debug:P}=this.editorState;this._margin=E.MARGIN_STANDARD,this._headerHeight=E.HEADER_STANDARD_HEIGHT;const T=t/e;return r`
      <sp-theme scale="large" color="light">
        <editor-canvas
          class="${this.isDragOverState?"isDragOver":""}"
          @drop="${this.handleFileDrop}"
          @dragover="${this.handleFileDragOver}"
          .displayGraph=${this.displayGraph}
          .documentState=${this.documentState}
          .editorState=${this.editorState}
          .nodeId=${this.displayGraph.rootNodeId}
          .renderScale=${s}
          .selections=${n}
          .selectableHovers=${a}
          .loading=${d}
          .dragging=${h}
          .resizing=${c}
          .snaplines=${u}
          .snappoints=${w}
          .interactable=${C}
          .originX=${Math.round(Y)}
          .originY=${Math.round(I)}
          .isPanningMode=${q}
          .isNodeUnderMutation=${G}
          .isPanning=${Z}
          .debug=${P}
        ></editor-canvas>
        <editor-header
          @wheel=${S=>S.stopPropagation()}
          @keydown=${S=>S.stopPropagation()}
          .editorState=${this.editorState}
          .documentState=${this.documentState}
          .width=${i}
          .canUndo=${this.canUndo}
          .canRedo=${this.canRedo}
        ></editor-header>
        <editor-toolbar
          @wheel=${S=>S.stopPropagation()}
          @keydown=${S=>S.stopPropagation()}
          .editorState=${this.editorState}
          style="${m(this.toolbarStyles())}"
        ></editor-toolbar>
        <editor-panel
          @wheel=${S=>S.stopPropagation()}
          @keydown=${S=>S.stopPropagation()}
          .editorState=${this.editorState}
          .documentState=${this.documentState}
          .cargoPackIndex=${this.cargoPackIndex}
          style="${m(this.panelStyles())}"
        ></editor-panel>
        <editor-timeline
          style="${m(this.timelineStyles())}"
          .currentTime=${T}
        ></editor-timeline>
        <message-queue .messages=${Q}></message-queue>
      </sp-theme>
    `}}M.styles=g`
    :host * {
      user-select: none;
      -webkit-user-select: none;
    }
    editor-toolbar,
    editor-header {
      position: absolute;
      display: block;
    }
    editor-header {
      top: 0;
      left: 0;
      z-index: 3;
    }
    editor-toolbar {
      z-index: 2;

      box-shadow: 1px 0 0 #e8e8e8;
    }

    .isDragOver {
      opacity: 0.5;
    }

    .isDragOver::after {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #0099ff;
      opacity: 0.2;
    }
  `;V([l({type:Object})],M.prototype,"editorState",2);V([l({type:Object})],M.prototype,"displayGraph",2);V([l({type:Object})],M.prototype,"documentState",2);V([l({type:Object})],M.prototype,"cargoPackIndex",2);V([l({type:Boolean})],M.prototype,"canUndo",2);V([l({type:Boolean})],M.prototype,"canRedo",2);V([l({type:Boolean})],M.prototype,"isDragOverState",2);customElements.define("editor-armature",M);var Fi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,re=(o,e,t,i)=>{for(var s=i>1?void 0:i?Ui(e,t):e,n=o.length-1,a;n>=0;n--)(a=o[n])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Fi(e,t,s),s};class W extends f{constructor(){super(),this.documentState={},this.displayGraph={},this.editorState={},this.cargoPackIndex={},this.semanticInferenceData={},this.renderCallback=ht(this.handleModelsDirty.bind(this)),this.selectionCallback=(...n)=>{this.editorController&&this.editorController.setSelection(...n)},this.cargoPackIndexModel=new mt(this.handleNewCargoPackIndexState.bind(this)),this.CargoDocumentIndexModel=new it,this.documentModel=new pt(this.CargoDocumentIndexModel),this.editorModel=new ut;const e=new URLSearchParams(window.location.search),t=e.get("debug")==="true",i=e.get("id")||"",s=e.get("action")||"";this.editorModel.setDebug(t),this.documentController=new gt(this.documentModel,this.editorModel,this.renderCallback,this.selectionCallback),this.editorController=new at(this.documentController,this.documentModel,this.editorModel,this.cargoPackIndexModel,this.renderCallback),this.handleModelsDirty(),i&&this.documentModel.hydrateFromStorageService(i).then(()=>{i!==this.documentModel._state.id&&window.history.replaceState(null,"","?")}).then(()=>{s==="remix"&&this.documentController.duplicate(),this.documentController.handleNewDocumentState(),this.editorModel.setIsSaved(!0),this.editorModel.setIsDirty(!1),this.handleModelsDirty()})}handleNewCargoPackIndexState(e){this.cargoPackIndex=e}connectedCallback(){super.connectedCallback(),this.editorController.connectToDom()}disconnectedCallback(){super.disconnectedCallback(),this.editorController.disconnectFromDom()}handleModelsDirty(){this.documentState=this.documentModel.state,this.displayGraph=this.documentController.generateDisplayGraph(),this.editorModel._state.isPanningMode?this.editorModel.setInteractable(this.documentState.rootNodeId):this.editorModel.setInteractable(...this.documentController.displayGraphController.displayedContentNodes),this.editorState=this.editorModel.state}handleEditorEvent(e){this.editorController.delegateEvent(e.detail)}handleDocumentEvent(e){this.documentController.delegateEvent(e.detail)}render(){return r`
      <editor-armature
        ?debug=${this.editorModel._state.debug}
        @editorEvent=${this.handleEditorEvent}
        @documentEvent=${this.handleDocumentEvent}
        .canUndo=${this.documentController.undoHistory.canUndo}
        .canRedo=${this.documentController.undoHistory.canRedo}
        .documentState=${this.documentState}
        .displayGraph=${this.displayGraph}
        .editorState=${this.editorState}
        .cargoPackIndex=${this.cargoPackIndex}
      ></editor-armature>
    `}}W.styles=g`
    editor-armature {
      position: absolute;
      display: block;
      width: 100%;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }

    editor-armature[debug] {
      bottom: 400px;
    }
  `;re([l({type:Object})],W.prototype,"documentState",2);re([l({type:Object})],W.prototype,"displayGraph",2);re([l({type:Object})],W.prototype,"editorState",2);re([l({type:Object})],W.prototype,"cargoPackIndex",2);re([l({type:Object})],W.prototype,"semanticInferenceData",2);customElements.define("prototype-app",W);
