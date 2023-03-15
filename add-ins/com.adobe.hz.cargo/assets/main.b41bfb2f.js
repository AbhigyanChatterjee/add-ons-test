import{r as ht}from"./text-aspect-ratio.758caee0.js";import{g as u,b as l,d as ut,s as b,$ as a,A as f,z as gt,G as je,B as re,t as F}from"./vendor.20676418.js";import"./spectrum-theme.c743f101.js";import"./spectrum.9b2a0672.js";import{e as w,D as _,F as ye,A as me,C as bt}from"./index.3920ab12.js";import{d as h,a as mt,g as ft,b as yt,r as vt,D as xt,E as $t,c as wt}from"./editor-model.e5a9ab22.js";import{u as K,g as Ge,C as St}from"./cargo-kit-index.fa0641a8.js";import{R as kt,t as It,M as ae}from"./renderer-artboard.4485a40b.js";import{S as _t}from"./substance-effect-index.bfcc0bf6.js";import"./index.c812b605.js";import"./pixi.6a033cab.js";const Pt=2,Et=300,Dt="gesture-start",Ct="gesture-drag-move",Ot="gesture-drag-start",Tt="gesture-drag-end",Nt="gesture-click",Ht="gesture-doubleclick",jt="gesture-singleclick";class M{constructor(e,t){this.startPoint={x:0,y:0},this.currentPoint={x:0,y:0},this.priorPoint={x:0,y:0},this.totalDistance=0,this.isDragGesture=!1,this.waitingForDoubleClick=!1,this.active=!1,this.promiseResolve=()=>{},this.id=ht(),this.boundUpHandler=this.handlePointerUp.bind(this),this.boundMoveHandler=this.handlePointerMove.bind(this),this.boundDownHandler=this.handlePointerDown.bind(this),this.element=t,this.active=!0,this.startPoint={x:e.clientX,y:e.clientY},this.currentPoint=this.startPoint,this.priorPoint=this.startPoint,document.body.addEventListener("pointermove",this.boundMoveHandler),document.body.addEventListener("pointerup",this.boundUpHandler),document.body.addEventListener("pointerdown",this.boundDownHandler),this.emitEvent(Dt,e),this.promise=new Promise(i=>{this.promiseResolve=i})}static distance(e,t){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}emitEvent(e,t){const{altKey:i,ctrlKey:s,shiftKey:o,metaKey:r}=t;this.element.dispatchEvent(new CustomEvent(e,{bubbles:!0,cancelable:!0,composed:!0,detail:{altKey:i,ctrlKey:s,shiftKey:o,metaKey:r,gestureId:this.id,deltaX:this.currentPoint.x-this.priorPoint.x,deltaY:this.currentPoint.y-this.priorPoint.y,totalDistance:this.totalDistance,totalDeltaX:this.currentPoint.x-this.startPoint.x,totalDeltaY:this.currentPoint.y-this.startPoint.y,startX:this.startPoint.x,startY:this.startPoint.y,currentX:this.currentPoint.x,currentY:this.currentPoint.y}}))}unbind(){document.body.removeEventListener("pointermove",this.boundMoveHandler),document.body.removeEventListener("pointerup",this.boundUpHandler),document.body.removeEventListener("pointerdown",this.boundDownHandler),this.active=!1,this.promiseResolve("gesturecomplete")}handlePointerMove(e){if(e.buttons===0){this.handlePointerUp(e);return}this.priorPoint=this.currentPoint,this.currentPoint={x:e.clientX,y:e.clientY},this.totalDistance=M.distance(this.startPoint,this.currentPoint),this.isDragGesture?this.emitEvent(Ct,e):this.totalDistance>Pt&&(this.isDragGesture=!0,this.emitEvent(Ot,e))}handlePointerDown(e){this.waitingForDoubleClick&&(this.emitEvent(Ht,e),this.waitingForDoubleClick=!1,this.waitingForDoubleClickTimeout&&clearTimeout(this.waitingForDoubleClickTimeout),this.unbind())}handlePointerUp(e){this.isDragGesture?(this.emitEvent(Tt,e),this.unbind()):this.waitingForDoubleClick||(this.emitEvent(Nt,e),this.waitingForDoubleClick=!0,this.waitingForDoubleClickTimeout=setTimeout(()=>{this.emitEvent(jt,e),this.waitingForDoubleClick=!1,this.unbind()},Et))}}var Gt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,y=(n,e,t,i)=>{for(var s=i>1?void 0:i?Mt(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Gt(e,t,s),s};const Ae=class extends b{constructor(){super(...arguments),this.label="",this.min=0,this.max=100,this.value=50,this.step=1,this.origin=0,this.width=200,this.handleWidth=16,this.handleHeight=16,this.trackHeight=2,this.snapSensitivity=5,this.displayValueRound=0,this.displayValueSuffix="",this.displayValueTooltip=!1,this.displayNumericInput=!1,this.displayIcon=!1,this.tooltipText="",this.iconWidth=28,this.disabled=!1,this.theme="light",this.name="",this.keysPressed=new Map,this.keepFocusWhenChange=!0}connectedCallback(){super.connectedCallback(),this.origin=Math.min(Math.max(this.origin,this.min),this.max),this.value=Math.min(Math.max(this.value,this.min),this.max)}static getSnappedValue(n,e,t){let i=n;for(const s of t)if(Math.abs(s-n)<e){i=s;break}return i}get isRangeInputFocused(){return!!(this.shadowRoot&&this.shadowRoot.activeElement&&this.shadowRoot.activeElement.getAttribute("type")==="range")}get roundedDisplayValue(){if(this.displayValueRound===0)return this.value;const n=1/this.displayValueRound;return Math.round(this.value*n)/n}exitInteractiveState(n=!1){n?this.applyValueFromInput(Number(this.inputEl.value)):this.applyValueFromInput(this.value),this.inputEl.blur()}handleKeyDown(n){if(n.stopPropagation(),this.keysPressed.set(n.key,!0),n.key==="Escape"?this.exitInteractiveState(!1):this.keepFocusWhenChange=this.keysPressed.get("ArrowDown")||this.keysPressed.get("ArrowUp")||this.keysPressed.get("Shift")&&this.keysPressed.get("Enter")||!1,this.keysPressed.get("Shift")){const e=n.target,t=Number(e.value);if(this.keysPressed.get("ArrowDown")){let i=t-9;i<this.min&&(i=this.min+1),e.value=String(i)}else if(this.keysPressed.get("ArrowUp")){let i=t+9;i>this.max&&(i=this.max-1),e.value=String(i)}}}handleKeyUp(n){this.keysPressed.delete(n.key)}applyValueFromInput(n){let e=n;this.isRangeInputFocused&&this.snapList&&(e=Ae.getSnappedValue(e,this.snapSensitivity,this.snapList)),e!==this.value&&(this.value=e),this.inputEl.value=this.value.toString(),this.requestUpdate()}handleInputValueChange(n){let{value:e}=n.target;if(e==="")return;this.keepFocusWhenChange?this.inputEl.select():this.inputEl.blur();const t=Number(n.target.value);t>this.max?e=this.max:t<this.min&&(e=this.min),this.applyValueFromInput(e)}selectTargetOnFocus(n){n.target.select()}handleBeginGesture(){this.dispatchEvent(new CustomEvent("PX_RANGE_INPUT_BEGIN_GESTURE",{bubbles:!0,cancelable:!0,composed:!0}))}handleEndGesture(){this.dispatchEvent(new CustomEvent("PX_RANGE_INPUT_END_GESTURE",{bubbles:!0,cancelable:!0,composed:!0}))}render(){const n=this.displayNumericInput?40:0,e=this.displayIcon?this.iconWidth:0,t=this.width-n-e,i=Math.min(this.max,Math.max(this.min,this.value)),s=this.max-this.min,o=i>=this.origin,r=(i-this.min)/s,d=t-this.handleWidth,p=this.handleWidth/2,c=p+d*r,g=o?this.origin:i,O=o?i-this.origin:this.origin-i,U=(g-this.min)/s,W=O/s*d+p,Q=o?0:p,B=U*d+Q,ee=100*B/t,te=100*W/t,k={width:`${t}px`,height:`${this.handleHeight}px`,paddingRight:`${n}px`,paddingLeft:`${e}px`},D={width:`${t}px`,height:`${this.trackHeight}px`},S={left:`${Math.ceil(ee*1e3)/1e3}%`,width:`${Math.ceil(te*1e3)/1e3}%`},G={width:`${this.handleWidth}px`,height:`${this.handleHeight}px`,marginLeft:`-${this.handleWidth/2}px`,left:`${e+Math.ceil(c*1e3)/1e3}px`};return a`
      <div
        class="range-input_wrapper range-input_theme-${this.theme}"
        ?disabled="${this.disabled}"
      >
        ${this.label?a` <label class="range-input_label">${this.label}</label> `:""}
        <div class="range-input_input-wrapper" style=${f(k)}>
          ${this.displayIcon?a`
                ${this.tooltipText.length>0?a`
                      <theo-info-tooltip
                        class="cancel-tooltip"
                        placement="top-left"
                      >
                        <span slot="message">${this.tooltipText}</span>
                        <theo-icon-base slot="trigger"></theo-icon-base>
                      </theo-info-tooltip>
                    `:a` <theo-icon-base></theo-icon-base> `}
              `:""}
          ${this.displayNumericInput?a`
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
          <div class="track" style=${f(D)}>
            <div class="progress" style=${f(S)}></div>
          </div>
          <div class="handle" style=${f(G)}>
            ${this.displayValueTooltip?a`
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
    `}};let m=Ae;m.styles=u`
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
  `;y([l({type:String})],m.prototype,"label",2);y([l({type:Number})],m.prototype,"min",2);y([l({type:Number})],m.prototype,"max",2);y([l({type:Number,reflect:!0})],m.prototype,"value",2);y([l({type:Number})],m.prototype,"step",2);y([l({type:Number})],m.prototype,"origin",2);y([l({type:Number})],m.prototype,"width",2);y([l({type:Number})],m.prototype,"handleWidth",2);y([l({type:Number})],m.prototype,"handleHeight",2);y([l({type:Number})],m.prototype,"trackHeight",2);y([l({type:Number})],m.prototype,"snapSensitivity",2);y([l({type:Array})],m.prototype,"snapList",2);y([l({type:Number})],m.prototype,"displayValueRound",2);y([l({type:String})],m.prototype,"displayValueSuffix",2);y([l({type:Boolean})],m.prototype,"displayValueTooltip",2);y([l({type:Boolean})],m.prototype,"displayNumericInput",2);y([l({type:Boolean})],m.prototype,"displayIcon",2);y([l({type:String})],m.prototype,"tooltipText",2);y([l({type:Number})],m.prototype,"iconWidth",2);y([l({type:Boolean})],m.prototype,"disabled",2);y([l({type:String})],m.prototype,"theme",2);y([l({type:String})],m.prototype,"name",2);y([ut("input")],m.prototype,"inputEl",2);customElements.define("px-range-input",m);var zt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,Rt=(n,e,t,i)=>{for(var s=i>1?void 0:i?At(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&zt(e,t,s),s};class xe extends b{constructor(){super(...arguments),this.currentTime=0}handlePlayPauseClick(){w(this,{action:"timeline-playpause-toggle"})}handleSliderInput(e){w(this,{action:"timeline-pause",originalEvent:e}),w(this,{action:"timeline-set-value",value:e.target.value,originalEvent:e}),this.currentTime=e.target.value}render(){return a`
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
    `}}xe.styles=u`
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
      background-color: #fafafa;
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
  `;Rt([l({type:Number})],xe.prototype,"currentTime",2);customElements.define("editor-timeline",xe);var Bt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,le=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ft(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Bt(e,t,s),s};class Y extends b{constructor(){super(...arguments),this.icon="",this.label="default",this.selected=!1,this.inactive=!1,this.iconStyles=f({})}willUpdate(e){e.has("icon")&&(this.iconStyles=f({mask:`url('${this.icon}')`,"-webkit-mask":`url('${this.icon}')`}))}render(){return a`
      <li ?selected=${this.selected} ?inactive=${this.inactive}>
        <i style="${this.iconStyles}"></i><label>${this.label}</label>
      </li>
    `}}Y.styles=u`
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
  `;le([l({type:String})],Y.prototype,"icon",2);le([l({type:String})],Y.prototype,"label",2);le([l({type:Boolean})],Y.prototype,"selected",2);le([l({type:Boolean})],Y.prototype,"inactive",2);customElements.define("editor-toolbar-icon",Y);var Lt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Ut=(n,e,t,i)=>{for(var s=i>1?void 0:i?Vt(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Lt(e,t,s),s};class $e extends b{constructor(){super(...arguments),this.editorState={}}handlePick(e,t){h(this,{action:`add-${e}`,data:t})}panelStyles(){return{width:`${_.TOOLBAR_STANDARD_WIDTH}px`}}loadFile(e){K(e).then(t=>{this.handlePick("image",{src:t.url,width:t.width,height:t.height})})}handleFileInputChange(e){const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let s=0;s<i.length;s+=1)this.loadFile(i[s])}handleLayersClick(){w(this,{action:"layers-toggle"})}handleIconClick(e){w(this,{action:"activate-toolbar-section",data:e})}render(){const{selections:e,isLayersPaletteOpen:t,activeToolbarSection:i}=this.editorState,s=e.length>0;return a`
      <section style="${f(this.panelStyles())}">
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
    `}}$e.styles=u`
    section {
      position: absolute;
      display: block;
      /* overflow: hidden; */
      background-color: #fafafa;
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

  `;Ut([l({type:Object})],$e.prototype,"editorState",2);customElements.define("editor-toolbar",$e);var Wt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,de=(n,e,t,i)=>{for(var s=i>1?void 0:i?Kt(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Wt(e,t,s),s};const Re=class extends b{constructor(){super(...arguments),this.width=200,this.shareJsonStr="{}",this.editorState={},this.documentState={}}panelStyles(){const n=_.HEADER_STANDARD_HEIGHT,{width:e}=this;return{width:`${e}px`,height:`${n}px`}}static handleLogoClick(){window.location.href="https://git.corp.adobe.com/pages/CARGO/Prototype/reuse"}handleUndoClick(){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"undo"}}))}handleRedoClick(){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"redo"}}))}handleDownloadClick(){const n="projectxprototype",e=JSON.stringify(this.documentState,null,2),t=`data:text/json;charset=utf-8,${encodeURIComponent(e)}`,i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("download",`${n}.json`),document.body.appendChild(i),i.click(),i.remove()}handleSaveClick(){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"save"}}))}handleDuplicateClick(){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"duplicate"}}))}handleAuthorInputChange(n){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-author",data:n.target.value}}))}handleToolInputChange(n){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-tool",data:n.target.value}}))}handleKitNameInputChange(n){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-name",data:n.target.value}}))}handleTagsInputChange(n){this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-tags",data:n.target.value.split(",")}}))}handlePickedPrimaryThumbnail(n){K(n).then(e=>{this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-thumbnail",data:e.url}}))})}handlePickedExtraThumbnail(n){const{extraThumbnails:e}=this.documentState,t=[...e];K(n).then(i=>{t.push(i.url),this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-extra-thumbnails",data:t}}))})}thumbnailStyles(n){return{position:"relative",display:"inline-block",margin:"0 5px 5px 0",width:"80px",height:"80px",borderRadius:"6px",overflow:"hidden",backgroundPosition:"center center",backgroundSize:"cover",backgroundImage:`url('${n}')`}}handleDeleteExtraThumbnail(n){const{extraThumbnails:e}=this.documentState,t=e.filter(i=>i!==n);this.dispatchEvent(new CustomEvent("documentEvent",{bubbles:!0,cancelable:!0,composed:!0,detail:{action:"set-extra-thumbnails",data:t}}))}render(){const n=this.editorState.isSaved&&this.editorState.isDirty?"NOTE: current document state is unsaved":"",e=this.documentState.author,t=this.documentState.tool,i=this.documentState.name,s=this.documentState.tags.join(","),o=this.documentState.thumbnail,r=this.documentState.extraThumbnails;return a`
      <section
        class="small"
        style="${f(this.panelStyles())}"
      >
        <i class="cclogo" @click=${Re.handleLogoClick}></i>
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
              <div>

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
                <sp-field-label for="kitnameinput">Kit Name</sp-field-label>
                <sp-textfield
                  id="kitnameinput"
                  @change=${this.handleKitNameInputChange}
                  value="${i}"
                  placeholder="Enter a kit name"
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
                    <div style="${f(this.thumbnailStyles(o))}"></div>
                </div>


                <sp-dropzone @drop=${d=>{if(d.dataTransfer.items){for(let p=0;p<d.dataTransfer.items.length;p+=1)if(d.dataTransfer.items[p].kind==="file"){const c=d.dataTransfer.items[p].getAsFile();this.handlePickedPrimaryThumbnail(c)}}}} id="dropzone-1" style="padding: 20px; width: 300px; height: 28px">
                  <div>
                      <label for="file-input">
                          <sp-link
                              href="javascript:;"
                              onclick="this.parentElement.nextElementSibling.click()"
                          >
                              Drop Primary Thumbnail
                          </sp-link>
                      </label>
                      <input @change=${d=>{const p=d.target,{files:c}=p;if(FileReader&&c&&c.length)for(let g=0;g<c.length;g+=1)this.handlePickedPrimaryThumbnail(c[g])}} type="file" id="file-input-1" style="display: none" />
                  </div>
                </sp-dropzone>
                <br/>

                <div>
                  ${r.map(d=>a`<div style="${f(this.thumbnailStyles(d))}">
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
                <sp-dropzone @drop=${d=>{if(d.dataTransfer.items){for(let p=0;p<d.dataTransfer.items.length;p+=1)if(d.dataTransfer.items[p].kind==="file"){const c=d.dataTransfer.items[p].getAsFile();this.handlePickedExtraThumbnail(c)}}}} id="dropzone-2" style="padding: 20px; width: 300px; height: 28px">
                  <div>
                      <label for="file-input">
                          <sp-link
                              href="javascript:;"
                              onclick="this.parentElement.nextElementSibling.click()"
                          >
                              Drop Extra Thumbnail
                          </sp-link>
                      </label>
                      <input @change=${d=>{const p=d.target,{files:c}=p;if(FileReader&&c&&c.length)for(let g=0;g<c.length;g+=1)this.handlePickedExtraThumbnail(c[g])}} type="file" id="file-input-2" style="display: none" />
                  </div>
                </sp-dropzone>
              </div>
              <div>
                <span style="color: red">${n}</span>
              </div>
            </sp-popover>
          </overlay-trigger>
        </div>
      </section>
    `}};let X=Re;X.styles=u`
    :host * {
      user-select: none;
      -webkit-user-select: none;
    }

    section {
      position: absolute;
      display: block;
      background-color: #fafafa;
      border-radius: 0px;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    i.cclogo {
      background-image: url('./files/cce_appicon_256.svg');
      background-repeat: no-repeat;
      background-position: center center;
      /* background-color: yellowgreen; */
      width: 80px;
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

  `;de([l({type:Number})],X.prototype,"width",2);de([l({type:String})],X.prototype,"shareJsonStr",2);de([l({type:Object})],X.prototype,"editorState",2);de([l({type:Object})],X.prototype,"documentState",2);customElements.define("editor-header",X);var Yt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,we=(n,e,t,i)=>{for(var s=i>1?void 0:i?Xt(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Yt(e,t,s),s};const Jt=500;class ie extends b{constructor(){super(),this.editorState={},this.displayGraph={},this.rootId="",this._displayGraphVersion="",this._viewportWidth=1,this._viewportHeight=1,this._renderScale=1,this._originOffsetX=0,this._originOffsetY=0,this.renderer=new kt({backgroundColor:58596,antialias:!0,resolution:2}),this.throttledUpdateCanvasSize=It(this.updateCanvasSize.bind(this),Jt)}updateCanvasSize(){this.renderer.canvasSize={width:this._viewportWidth,height:this._viewportHeight}}shouldUpdate(e){let t=!1;if(e.has("displayGraph")){const{versionTag:i}=this.displayGraph;this._displayGraphVersion!==i&&(this._displayGraphVersion=i,t=!0)}if(e.has("editorState")){let i=!1;const{viewportWidth:s,viewportHeight:o,renderScale:r,originOffsetX:d,originOffsetY:p}=this.editorState;s!==this._viewportWidth&&(this._viewportWidth=s,i=!0,t=!0),o!==this._viewportHeight&&(this._viewportHeight=o,i=!0,t=!0),r!==this._renderScale&&(this._renderScale=r,t=!0),d!==this._originOffsetX&&(this._originOffsetX=d,t=!0),p!==this._originOffsetY&&(this._originOffsetY=p,t=!0),i&&this.throttledUpdateCanvasSize()}return t}render(){return this.renderer.displayGraph=this.displayGraph,this.renderer.rootId=this.rootId,this.renderer.origin={x:this._originOffsetX,y:this._originOffsetY},this.renderer.scale=this._renderScale,this.renderer.render(),a`${this.renderer.canvas}`}}ie.styles=u`
    :host {
      transform: scale(0.5);
      transform-origin: top left;
      display: block;
    }
  `;we([l({type:Object})],ie.prototype,"editorState",2);we([l({type:Object})],ie.prototype,"displayGraph",2);we([l({type:String})],ie.prototype,"rootId",2);customElements.define("renderer-canvas",ie);var qt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Se=(n,e,t,i)=>{for(var s=i>1?void 0:i?Zt(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&qt(e,t,s),s};class I extends b{constructor(){super(...arguments),this.nodeId="",this.renderScale=1,this.displayGraph={}}static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`<interaction-base
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-base
    >`}handlePointerOver(e){w(this,{action:"interaction-item-pointerover",id:this.nodeId,originalEvent:e})}handlePointerOut(e){w(this,{action:"interaction-item-pointerout",id:this.nodeId,originalEvent:e})}handlePointerDown(e){var i;if(w(this,{action:"interaction-item-pointerdown",id:this.nodeId,originalEvent:e}),this.gesture&&this.gesture.active)return;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("primary-interaction-surface");t&&(this.gesture=new M(e,t))}handleGestureStart(e){w(this,{action:"interaction-item-gesturestart",id:this.nodeId,data:e.detail})}handleSingleClick(e){w(this,{action:"interaction-item-singleclick",id:this.nodeId,data:e.detail})}handleDoubleClick(e){w(this,{action:"interaction-item-doubleclick",id:this.nodeId,data:e.detail})}handleDragMove(e){!this.gesture||h(this,{action:"bounds-adjust",subject:"translate",id:this.nodeId,data:e.detail})}handleDragStart(e){!this.gesture||h(this,{action:"bounds-adjust-start",subject:"translate",id:this.nodeId,data:e.detail,originalEvent:e})}handleDragEnd(e){!this.gesture||h(this,{action:"bounds-adjust-end",subject:"translate",id:this.nodeId,data:e.detail})}handleBlurFocus(){this||console.info("foo")}get styles(){const{x:e,y:t,width:i,height:s,rotate:o}=this.displayGraph.nodes[this.nodeId],{renderScale:r}=this;return{transform:`matrix(${ae.compose(Math.round(e*r*10)/10,Math.round(t*r*10)/10,o).join(",")})`,width:`${Math.round(i*r*10)/10}px`,height:`${Math.round(s*r*10)/10}px`}}render(){return a`<div
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
      style="${f(this.styles)}"
    >
      <slot></slot>
    </div>`}}I.styles=u`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* begin DEBUG */
      /* background-color: rgba(255,0,0,0.4); */
      /* end DEBUG */
    }
  `;Se([l({type:String})],I.prototype,"nodeId",2);Se([l({type:Number})],I.prototype,"renderScale",2);Se([l({type:Object})],I.prototype,"displayGraph",2);customElements.define("interaction-base",I);const fe=new Map;class P{static register(e,t,i){const s={tag:t,component:i};fe.set(e,s),customElements.define(t,i)}static render({nodeId:e,interactable:t,displayGraph:i,renderScale:s}){const o=i.nodes[e];if(!o)return a``;const{type:r,children:d}=o;if(!fe.has(r))return console.info("missing interaction component type",r),a``;const{component:p}=fe.get(r),c=a`${d.map(g=>P.render({nodeId:g,interactable:t,displayGraph:i,renderScale:s}))}`;return p.place(c,{nodeId:e,displayGraph:i,renderScale:s})}}class Be extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`<interaction-canvas
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-canvas
    >`}render(){return a`<div
        id="primary-interaction-surface"
        @pointerout="${this.handlePointerOut}"
        @pointerover="${this.handlePointerOver}"
        @pointerdown="${this.handlePointerDown}"
        @gesture-start=${this.handleGestureStart}
        @gesture-drag-end=${this.handleDragEnd}
        @gesture-drag-start=${this.handleDragStart}
        @gesture-drag-move=${this.handleDragMove}
      ></div>
      <slot></slot>`}}Be.styles=u`
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
  `;P.register("canvas","interaction-canvas",Be);var Qt=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,L=(n,e,t,i)=>{for(var s=i>1?void 0:i?ei(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Qt(e,t,s),s};class H extends b{constructor(){super(...arguments),this.nodeId="",this.renderScale=1,this.displayGraph={},this.action="default",this.subject="default",this.placement="top-left",this.active=!1}handlePipDown(e){var i;if(e.stopPropagation(),this.gesture&&this.gesture.active)return;this.active=!0;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("pip");t&&(this.gesture=new M(e,t),this.gesture.promise.then(()=>{this.active=!1}))}handleBackgroundTouch(e){var i;if(this.gesture&&this.gesture.active)return;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("pip");t&&(this.gesture=new M(e,t))}handleDragMove(e){!this.gesture||h(this,{action:this.action,subject:this.subject,id:this.nodeId,data:e.detail})}handleDragStart(e){!this.gesture||h(this,{action:`${this.action}-start`,subject:this.subject,id:this.nodeId,data:e.detail})}handleDragEnd(e){!this.gesture||h(this,{action:`${this.action}-end`,subject:this.subject,id:this.nodeId,data:e.detail})}render(){return a`<div
      id="pip"
      class="${this.placement}"
      ?active=${this.active}
      @pointerdown="${this.handlePipDown}"
      @gesture-drag-end=${this.handleDragEnd}
      @gesture-drag-start=${this.handleDragStart}
      @gesture-drag-move=${this.handleDragMove}
    ></div>`}}H.styles=u`
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
  `;L([l({type:String})],H.prototype,"nodeId",2);L([l({type:Number})],H.prototype,"renderScale",2);L([l({type:Object})],H.prototype,"displayGraph",2);L([l({type:String})],H.prototype,"action",2);L([l({type:String})],H.prototype,"subject",2);L([l({type:String})],H.prototype,"placement",2);L([l({type:Boolean})],H.prototype,"active",2);customElements.define("decoration-base-handle-pip",H);var ti=Object.defineProperty,ii=Object.getOwnPropertyDescriptor,C=(n,e,t,i)=>{for(var s=i>1?void 0:i?ii(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&ti(e,t,s),s};const si=a`
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
`;class x extends b{constructor(){super(...arguments),this.disableInteraction=!1,this.isSelected=!1,this.isMultiSelect=!1,this.isHovered=!1,this.isBoundsHighlight=!1,this.isLoading=!1,this.isDragging=!1,this.isResizing=!1,this.nodeId="",this.renderScale=1,this.displayGraph={}}static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isLoading:o,isMultiSelect:r,isHovered:d,isBoundsHighlight:p,isDragging:c,isResizing:g}){return a`<decoration-base
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isLoading=${o}
      .isMultiSelect=${r}
      .isHovered=${d}
      .isBoundsHighlight=${p}
      .isDragging=${c}
      .isResizing=${g}
    ></decoration-base>`}get styles(){const{renderScale:e,nodeId:t,displayGraph:i}=this,{globalTransform:s=ae.defaultMatrix,width:o,height:r}=i.nodes[t],{position:d,rotation:p}=ae.decompose(s);return{transform:`matrix(${ae.compose(Math.round(d.x*e*10)/10,Math.round(d.y*e*10)/10,p).join(",")})`,width:`${Math.round(o*e*10)/10}px`,height:`${Math.round(r*e*10)/10}px`}}get hoveredHtml(){return a` <div .nodeId=${this.nodeId} class="bounds"></div> `}get highlightHtml(){return a` <div .nodeId=${this.nodeId} class="highlight"></div> `}get baseHtml(){return a``}get selectedHtml(){return a`
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
    `}decorationHtml(){return this.isBoundsHighlight?this.highlightHtml:this.isMultiSelect?this.hoveredHtml:this.isSelected?this.selectedHtml:this.isHovered?this.hoveredHtml:""}render(){return a`<div style="${f(this.styles)}">
      <div class="loading ${this.isLoading?"visible":"hidden"}">
        ${si}
      </div>
      ${this.baseHtml}
      <div class="fill-frame ${this.isDragging||this.isLoading?"hidden":"visible"}">
        ${this.decorationHtml()}
      </div>
    </div>`}}x.styles=[u`
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
  `];C([l({type:Boolean})],x.prototype,"disableInteraction",2);C([l({type:Boolean})],x.prototype,"isSelected",2);C([l({type:Boolean})],x.prototype,"isMultiSelect",2);C([l({type:Boolean})],x.prototype,"isHovered",2);C([l({type:Boolean})],x.prototype,"isBoundsHighlight",2);C([l({type:Boolean})],x.prototype,"isLoading",2);C([l({type:Boolean})],x.prototype,"isDragging",2);C([l({type:Boolean})],x.prototype,"isResizing",2);C([l({type:String})],x.prototype,"nodeId",2);C([l({type:Number})],x.prototype,"renderScale",2);C([l({type:Object})],x.prototype,"displayGraph",2);customElements.define("decoration-base",x);const Me=new Map;class T{static register(e,t,i){const s={tag:t,component:i};Me.set(e,s),customElements.define(t,i)}static render({isPanningMode:e,isNodeUnderMutation:t,displayGraph:i,documentState:s,renderScale:o,selections:r,loading:d,hovers:p,dragging:c,resizing:g}){const O=c.length>0,U=O?[]:p,oe=O?[]:r,W=[];for(const[k,D]of Object.entries(s.nodes))D.type.includes("artboard")&&W.push(k);const Q=e,B=[];r.forEach(k=>{const D=s.nodes[k];if(D.type!=="artboard"){const{parentId:S}=D,G=s.nodes[S];G&&G.type!=="artboard"&&G.type!=="canvas"&&B.push(G.id)}});const ee=[...W,...oe,...U,...d,...c,...g,...B],te=[...new Set(ee)];return a`${te.map(k=>{const D=i.nodes[k];if(!D)return"";const{type:S}=D,{component:G}=Me.get(S),He=r.indexOf(k)>=0,rt=d.indexOf(k)>=0,at=He&&r.length>1,lt=U.indexOf(k)>=0,dt=B.indexOf(k)>=0,ct=c.indexOf(k)>=0||t,pt=g.indexOf(k)>=0;return G.place({nodeId:k,displayGraph:i,renderScale:o,isSelected:He,isLoading:rt,isMultiSelect:at,isHovered:lt,isBoundsHighlight:dt,isDragging:ct,isResizing:pt,disableInteraction:Q})})}`}}class ni extends x{static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isMultiSelect:o,isHovered:r,isBoundsHighlight:d,isDragging:p,isResizing:c}){return a``}}T.register("canvas","decoration-canvas",ni);class Fe extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`<interaction-artboard
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-artboard
    >`}handleBackgroundTouch(e){var i;if(this.gesture&&this.gesture.active)return;const t=(i=this.shadowRoot)==null?void 0:i.getElementById("background-area");t&&(this.gesture=new M(e,t))}handleBackgroundDragStart(e){!this.gesture||h(this,{action:"bounds-adjust-start",subject:"translate",id:this.nodeId,data:e.detail,originalEvent:e})}handleBackgroundDragEnd(e){!this.gesture||h(this,{action:"bounds-adjust-end",subject:"translate",id:this.nodeId,data:e.detail})}handleBackgroundDragMove(e){!this.gesture||h(this,{action:"bounds-adjust",subject:"translate",id:this.nodeId,data:e.detail})}handleDoubleclick(){w(this,{action:"artboard-doubleclick",id:this.nodeId})}handleTouch(){w(this,{action:"artboard-touch",id:this.nodeId})}render(){return a`<div style="${f(this.styles)}">
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
    </div>`}}Fe.styles=u`
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
  `;P.register("artboard","interaction-artboard",Fe);class Le extends x{static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isMultiSelect:o,isHovered:r,isBoundsHighlight:d,isDragging:p,isResizing:c}){return a`<decoration-artboard
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isMultiSelect=${o}
      .isHovered=${r}
      .isBoundsHighlight=${d}
      .isDragging=${p}
      .isResizing=${c}
    ></decoration-artboard>`}get baseHtml(){const{width:e,height:t,data:{name:i}}=this.displayGraph.nodes[this.nodeId];return a`
    <h1>
      ${i}<span>${Math.round(e)}px / ${Math.round(t)}px</span>
    </h1>
    `}get selectedHtml(){return a`
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
    `}}Le.styles=[x.styles,u`
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
    `];T.register("artboard","decoration-artboard",Le);class Ve extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`
      <interaction-artboard-group
        .nodeId=${t}
        .displayGraph=${i}
        .renderScale=${s}
      >
        ${e}
      </interaction-artboard-group>
    `}render(){return a`<div style=${f(this.styles)}>
      <div
        id="primary-interaction-surface"
        @pointerdown=${this.handlePointerDown}
        @gesture-drag-end=${this.handleDragEnd}
        @gesture-drag-start=${this.handleDragStart}
        @gesture-drag-move=${this.handleDragMove}
        @gesture-start=${this.handleGestureStart}
      ></div>
      <slot></slot>
    </div>`}}Ve.styles=u`
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
  `;P.register("artboard-group","interaction-artboard-group",Ve);class Ue extends x{static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isLoading:o,isMultiSelect:r,isHovered:d,isBoundsHighlight:p,isDragging:c,isResizing:g}){return a`<decoration-artboard-group
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isLoading=${o}
      .isMultiSelect=${r}
      .isHovered=${d}
      .isBoundsHighlight=${p}
      .isDragging=${c}
      .isResizing=${g}
    ></decoration-artboard-group>`}get artboardGroupBoundsStyles(){return{top:"-50px",left:"-30px",padding:"38px 28px",borderRadius:"12px",border:"2px solid #864ccc",boxShadow:"none"}}get baseHtml(){const{children:e,data:{name:t}}=this.displayGraph.nodes[this.nodeId];return a`
    <div class="group-frame">
      <h1>${t}<span>${e.length} artboards</span></h1>
    </div>
    `}get selectedHtml(){return a`
      <div
        class="bounds"
        style="${f(this.artboardGroupBoundsStyles)}"
      ></div>
    `}}Ue.styles=[x.styles,u`
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
    `];T.register("artboard-group","decoration-artboard-group",Ue);class oi extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`<interaction-rectangle
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-rectangle
    >`}}P.register("rectangle","interaction-rectangle",oi);class ri extends x{}T.register("rectangle","decoration-rectangle",ri);class We extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`<interaction-text
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-text
    >`}}We.styles=u`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* begin DEBUG */
      /* background-color: rgba(0,0,255,0.2); */
      /* end DEBUG */
    }
  `;P.register("text","interaction-text",We);class Ke extends x{static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isLoading:o,isMultiSelect:r,isHovered:d,isBoundsHighlight:p,isDragging:c,isResizing:g}){return a`<decoration-base-only-rotate
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isLoading=${o}
      .isMultiSelect=${r}
      .isHovered=${d}
      .isBoundsHighlight=${p}
      .isDragging=${c}
      .isResizing=${g}
    ></decoration-base-only-rotate>`}get selectedHtml(){return a`
      <div .nodeId=${this.nodeId} class="bounds"></div>
      <decoration-base-handle-pip
        .nodeId=${this.nodeId}
        action="bounds-adjust"
        subject="rotate"
        placement="top-center-offset"
      ></decoration-base-handle-pip>
    `}}customElements.define("decoration-base-only-rotate",Ke);class ai extends Ke{}T.register("text","decoration-text",ai);class Ye extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`<interaction-image
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-image
    >`}}Ye.styles=u`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* begin DEBUG */
      /* background-color: rgba(0,0,255,0.2); */
      /* end DEBUG */
    }
  `;P.register("image","interaction-image",Ye);class ce extends x{static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isLoading:o,isMultiSelect:r,isHovered:d,isBoundsHighlight:p,isDragging:c,isResizing:g}){return a`<decoration-base-only-corners
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isLoading=${o}
      .isMultiSelect=${r}
      .isHovered=${d}
      .isBoundsHighlight=${p}
      .isDragging=${c}
      .isResizing=${g}
    ></decoration-base-only-corners>`}get selectedHtml(){return a`
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
    `}}customElements.define("decoration-base-only-corners",ce);class li extends ce{}T.register("image","decoration-image",li);class Xe extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`<interaction-ellipse
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-ellipse
    >`}render(){const e=this.displayGraph.nodes[this.nodeId],t=Math.round(e.width*this.renderScale*10)/10,i=Math.round(e.height*this.renderScale*10)/10;return a`<div style="${f(this.styles)}">
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
    </div>`}}Xe.styles=u`
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
  `;P.register("ellipse","interaction-ellipse",Xe);class di extends x{static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isMultiSelect:o,isHovered:r,isBoundsHighlight:d,isDragging:p,isResizing:c}){return a`<decoration-ellipse
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isMultiSelect=${o}
      .isHovered=${r}
      .isBoundsHighlight=${d}
      .isDragging=${p}
      .isResizing=${c}
    ></decoration-ellipse>`}get hoveredHtml(){const e=this.displayGraph.nodes[this.nodeId],t=Math.round(e.width*this.renderScale*10)/10,i=Math.round(e.height*this.renderScale*10)/10,s=2;return a`
      <svg height="${i}" width="${t}">
        <ellipse
          cx="50%"
          cy="50%"
          rx="${t/2-s/2}"
          ry="${i/2-s/2}"
          style="fill:transparent;stroke:#864CCC;stroke-width:${s}"
        />
      </svg>
    `}}T.register("ellipse","decoration-ellipse",di);class Je extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`<interaction-circle
      .nodeId=${t}
      .displayGraph=${i}
      .renderScale=${s}
      >${e}</interaction-circle
    >`}render(){const e=this.displayGraph.nodes[this.nodeId],t=Math.round(e.width*this.renderScale*10)/10;return a`<div style="${f(this.styles)}">
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
    </div>`}}Je.styles=u`
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
  `;P.register("circle","interaction-circle",Je);class ci extends ce{static place({nodeId:e,displayGraph:t,renderScale:i,isSelected:s,isMultiSelect:o,isHovered:r,isBoundsHighlight:d,isDragging:p,isResizing:c}){return a`<decoration-circle
      .nodeId=${e}
      .displayGraph=${t}
      .renderScale=${i}
      .isSelected=${s}
      .isMultiSelect=${o}
      .isHovered=${r}
      .isBoundsHighlight=${d}
      .isDragging=${p}
      .isResizing=${c}
    ></decoration-circle>`}get hoveredHtml(){const e=this.displayGraph.nodes[this.nodeId],t=Math.round(e.width*this.renderScale*10)/10,i=2;return a`
      <svg height="${t}" width="${t}">
        <circle
          cx="50%"
          cy="50%"
          r="${t/2-i/2}"
          style="fill:transparent;stroke:#864CCC;stroke-width:${i}"
        />
      </svg>
    `}}T.register("circle","decoration-circle",ci);class qe extends I{static place(e="",{nodeId:t,displayGraph:i,renderScale:s}){return a`
      <interaction-container
        .nodeId=${t}
        .displayGraph=${i}
        .renderScale=${s}
      >
        ${e}
      </interaction-container>
    `}render(){return a`<div style=${f(this.styles)}><slot></slot></div>`}}qe.styles=u`
    div {
      position: absolute;
      display: block;
      transform-origin: 0 0;
      /* background-color: rgba(0,255,255,0.2); */
    }
  `;P.register("container","interaction-container",qe);class pi extends ce{}T.register("container","decoration-container",pi);var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,$=(n,e,t,i)=>{for(var s=i>1?void 0:i?ui(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&hi(e,t,s),s};class v extends b{constructor(){super(...arguments),this.nodeId="",this.renderScale=1,this.timelinePosition=0,this.timelinePositionRelative=0,this.displayGraph={},this.documentState={},this.editorState={},this.originX=0,this.originY=0,this.isPanningMode=!1,this.isNodeUnderMutation=!1,this.isPanning=!1,this.debug=!1,this.selections=[],this.loading=[],this.selectableHovers=[],this.dragging=[],this.resizing=[],this.interactable=[],this.snaplines=[],this.snappoints=[]}get canvasClasses(){return{"is-panning-mode":this.isPanningMode,"is-panning":this.isPanning}}canvasContentsStyles(){return{top:`${this.originY}px`,left:`${this.originX}px`}}render(){return a`
      <div class="render-frame ${gt(this.canvasClasses)}">
        <renderer-canvas
          .displayGraph=${this.displayGraph}
          .editorState=${this.editorState}
        ></renderer-canvas>
        <div
          class="origin-relative-container"
          style="${f(this.canvasContentsStyles())}"
        >
          <div class="interaction-items">
            ${P.render({nodeId:this.displayGraph.rootNodeId,interactable:this.interactable,displayGraph:this.displayGraph,renderScale:this.renderScale,debug:this.debug})}
          </div>
          <div class="decoration-items">
            ${T.render({displayGraph:this.displayGraph,documentState:this.documentState,isPanningMode:this.isPanningMode,isNodeUnderMutation:this.isNodeUnderMutation,renderScale:this.renderScale,selections:this.selections,loading:this.loading,hovers:this.selectableHovers,dragging:this.dragging,resizing:this.resizing})}
          </div>
        </div>
        <svg>
          <g transform="translate(${this.originX} ${this.originY})">
            ${this.snaplines.map(e=>je`
              <line
                x1=${e[0].x*this.renderScale}
                y1=${e[0].y*this.renderScale}
                x2=${e[1].x*this.renderScale}
                y2=${e[1].y*this.renderScale}
                style="stroke:#E4007C;stroke-width:1"
              />`)}
            ${this.snappoints.map(e=>je`
              <circle
                cx=${e.x*this.renderScale}
                cy=${e.y*this.renderScale}
                r="5"
                fill="#E4007C"
              />`)}
          </g>
        </svg>
      </div>
    `}}v.styles=u`
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
  `;$([l({type:String})],v.prototype,"nodeId",2);$([l({type:Number})],v.prototype,"renderScale",2);$([l({type:Number})],v.prototype,"timelinePosition",2);$([l({type:Number})],v.prototype,"timelinePositionRelative",2);$([l({type:Object})],v.prototype,"displayGraph",2);$([l({type:Object})],v.prototype,"documentState",2);$([l({type:Object})],v.prototype,"editorState",2);$([l({type:Number})],v.prototype,"originX",2);$([l({type:Number})],v.prototype,"originY",2);$([l({type:Boolean})],v.prototype,"isPanningMode",2);$([l({type:Boolean})],v.prototype,"isNodeUnderMutation",2);$([l({type:Boolean})],v.prototype,"isPanning",2);$([l({type:Boolean})],v.prototype,"debug",2);$([l({type:Array})],v.prototype,"selections",2);$([l({type:Array})],v.prototype,"loading",2);$([l({type:Array})],v.prototype,"selectableHovers",2);$([l({type:Array})],v.prototype,"dragging",2);$([l({type:Array})],v.prototype,"resizing",2);$([l({type:Array})],v.prototype,"interactable",2);$([l({type:Array})],v.prototype,"snaplines",2);$([l({type:Array})],v.prototype,"snappoints",2);customElements.define("editor-canvas",v);var gi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,J=(n,e,t,i)=>{for(var s=i>1?void 0:i?bi(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&gi(e,t,s),s};class z extends b{constructor(){super(...arguments),this.editorState={},this.displayGraph={},this.documentState={},this.stringifiedEffectGraph="",this.stringifiedGraphModel="",this.stringifiedGraphView=""}get selectedNodeId(){let e;return this.editorState.selections.length===1&&(e=this.editorState.selections[0]),e}render(){const e=this.selectedNodeId;if(!e)return a``;const{effects:t}=this.documentState.nodes[e],i=t.map((s,o)=>{const r=this.documentState.nodes[s],{data:{graph:d}}=r,{displayName:p}=d;return a`<option value="${s}">${o} ${p}</option>`});return a`
      <div @wheel=${s=>s.stopPropagation()}>
        <select>
          ${i}
        </select>
        <select>
          <option>Delete</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
        </select>
        <select>
          <option>Add</option>
          <option>type 1</option>
          <option>type 2</option>
          <option>type 3</option>
          <option>type 4</option>
          <option>type 5</option>
        </select>
      </div>
    `}}z.styles=u`
    :host {
      position: fixed;
      width: 100%;
      background: yellow;
      bottom: 0;
      background-image: url('./files/grid.svg');
      color: #ee1e5c;
      font-family: monospace;
      font-weight: bold;
      font-size: 14px;
      pointer-events: none;
    }

    div {
      overflow: auto;
      pointer-events: initial;
      /* padding: 20px; */
      height: 400px;
    }

    section {
      user-select: text;
    }

    ::selection {
      color: #ea2db1;
      background: #f0d79c;
    }
  `;J([l({type:Object})],z.prototype,"editorState",2);J([l({type:Object})],z.prototype,"displayGraph",2);J([l({type:Object})],z.prototype,"documentState",2);J([l({type:String})],z.prototype,"stringifiedEffectGraph",2);J([l({type:String})],z.prototype,"stringifiedGraphModel",2);J([l({type:String})],z.prototype,"stringifiedGraphView",2);customElements.define("editor-debug-tray",z);var mi=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,yi=(n,e,t,i)=>{for(var s=i>1?void 0:i?fi(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&mi(e,t,s),s};class ke extends b{constructor(){super(...arguments),this.messages=[]}render(){return a`
      <section>
        ${this.messages.map(e=>a`
              <div class="toast-wrapper">
                <sp-toast open variant="${e.type}"> ${e.copy} </sp-toast>
              </div>
            `)}
      </section>
    `}}ke.styles=u`
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
  `;yi([l({type:Array})],ke.prototype,"messages",2);customElements.define("message-queue",ke);var vi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Ie=(n,e,t,i)=>{for(var s=i>1?void 0:i?xi(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&vi(e,t,s),s};class se extends b{constructor(){super(...arguments),this.subject="default",this.placement="top-left",this.active=!1}handlePointerDown(e){e.stopPropagation(),!(this.gesture&&this.gesture.active)&&(this.active=!0,this.gesture=new M(e,this),this.gesture.promise.then(()=>{this.active=!1}))}render(){return a`
      <div
        ?active=${this.active}
        @pointerdown="${this.handlePointerDown}"
      ></div>
    `}}se.styles=u`
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
  `;Ie([l({type:String})],se.prototype,"subject",2);Ie([l({type:String})],se.prototype,"placement",2);Ie([l({type:Boolean})],se.prototype,"active",2);customElements.define("grippy-handle",se);var $i=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,Ze=(n,e,t,i)=>{for(var s=i>1?void 0:i?wi(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&$i(e,t,s),s};function Si(n){const e=n.indexOf("#")===0,t=n.indexOf("rgb")===0;let i=0,s=0,o=0;if(e){const r=n.length===7,d=n.substr(1).match(r?/(\S{2})/g:/(\S{1})/g);d&&(i=parseInt(d[0]+(r?"":d[0]),16),s=parseInt(d[1]+(r?"":d[1]),16),o=parseInt(d[2]+(r?"":d[2]),16))}if(t){const r=n.match(/(\d+){3}/g);r&&(i=parseFloat(r[0]),s=parseFloat(r[1]),o=parseFloat(r[2]))}return typeof i!="undefined"?(i*299+s*587+o*114)/1e3:0}const Qe=class extends b{constructor(){super(...arguments),this.nodeId="",this.documentState={},this._currentType=""}handleVariantNameChange(n){if(n.currentTarget){const e=this.documentState.nodes[this.nodeId];e.variantSetId&&h(this,{action:"set-property",id:e.variantSetId,key:"name",value:n.currentTarget.value})}}get variantLabelCaptureHtml(){let n="";const e=this.documentState.nodes[this.nodeId];return e.variantSetId&&(n=this.documentState.nodes[e.variantSetId].data.name),a`
      <sp-field-label for="name-0">Semantic Name For Set</sp-field-label>
      <sp-textfield
        @change=${this.handleVariantNameChange}
        id="name-0"
        value="${n}"
        placeholder="Enter a semantic name"
      ></sp-textfield>
    `}handleAddVariant(){h(this,{action:"add-variant",id:this.nodeId})}handleVariantSelect(n){h(this,{action:"select-variant",id:this.nodeId,value:n})}handleVariantDelete(n){h(this,{action:"delete-variant",id:this.nodeId,data:n})}static previewHtmlForVariantItem(n){let e=a``,t="#ffffff";switch(n.type){case"image":e=a` <img src="${n.data.src}" alt="${n.id}" /> `;break;default:Si(n.data.color)>150&&(t="#000000"),e=a`
          <div
            style="background-color:${n.data.color}; color:${t}"
          >
            ${n.data.text||n.data.color}
          </div>
        `;break}return e}listOfSelectableVariants(n){return n?this.documentState.nodes[n].items.map(t=>{const i=this.documentState.nodes[t];return{previewHtml:Qe.previewHtmlForVariantItem(i),id:t}}):[]}get listOfVariantsHtml(){const n=this.documentState.nodes[this.nodeId];if(!n)return a``;this._currentType=n.type;const e=this.listOfSelectableVariants(n.variantSetId);return e.length<2?a``:a`
      <div class="list-of-variants">
        ${this.variantLabelCaptureHtml}
        <ul>
          ${e.map(i=>a`<li class="${i.id===this.nodeId?"selected":""}">
                <span @click="${()=>this.handleVariantSelect(i.id)}">
                  ${i.previewHtml}
                </span>
                <button @click="${()=>this.handleVariantDelete(i)}">
                  X
                </button>
              </li>`)}
        </ul>
      </div>
    `}render(){return a`
      ${this.listOfVariantsHtml}
      <sp-button size="s" variant="secondary" @click=${this.handleAddVariant}
        >Add Variant</sp-button
      >
    `}};let pe=Qe;pe.styles=u`
    .list-of-variants {
      padding: 4px 10px 4px 10px;
      box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.1);
      background: rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .list-of-variants sp-textfield {
      width: 100%;
    }

    ul {
      list-style: none;
      margin: 14px 0 0 0;
      padding: 0;
      line-height: 0;
    }

    li {
      list-style: none;
      margin: 0;
      padding: 0;
      position: relative;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      width: 90px;
      height: 30px;
      line-height: 0;
      border-radius: 30px;
      background: #666;
    }

    li.selected {
      box-shadow: 0 0 0 3px #0099ff;
    }

    /* li:hover {
      opacity: 1;
      box-shadow: 0 0 1px #888888;
    }

    li:active {
      opacity: 1;
      box-shadow: 0 0 1px #000;
    } */

    li span {
      width: 60px;
      height: 30px;
      border-radius: 30px 0 0 30px;
      overflow: hidden;
      position: relative;
      display: inline-block;
    }

    li span div {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: #789;
      color: #9ab;
      font-size: 10px;
      line-height: 30px;
      text-align: center;
      font-family: monospace;
    }

    li button {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 30px;
      background: #444;
      color: #999;
      font-size: 12px;
      font-weight: 400;
      border-radius: 0 15px 15px 0;
      border: none;
      line-height: 28px;
      box-shadow: inset 2px 0 0 0 #222;
    }

    img {
      min-height: 40px;
      min-width: 40px;
      max-height: 65px;
      max-width: 65px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.9;
    }

    img:hover {
      opacity: 1;
    }

    li button:hover {
      background: #222;
      color: #888;
    }
  `;Ze([l({type:String})],pe.prototype,"nodeId",2);Ze([l({type:Object})],pe.prototype,"documentState",2);customElements.define("editor-inspector-variants",pe);var ki=Object.defineProperty,Ii=Object.getOwnPropertyDescriptor,_e=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ii(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&ki(e,t,s),s};function _i(n){return n.widget==="slider"&&(n.type==="float1"||n.type==="int1")||n.widget==="color"}class ne extends b{constructor(){super(),this.node={},this.tweaks=[],this.preset={},this.handleSliderInput=mt(this._handleSliderInput.bind(this),300)}_handleSliderInput(e,t){const{data:{substanceConfig:i}}=this.node,s=JSON.parse(JSON.stringify(i));s[t]=e,h(this,{action:"set-property",id:this.node.id,key:"substanceConfig",value:s})}render(){const e=this.tweaks.filter(_i),{data:{substanceConfig:t}}=this.node;return e.length>0?a`
        <section>
          ${re(e,i=>i.name,i=>{let s=i.default;return this.preset&&this.preset.tweaks&&typeof this.preset.tweaks[i.id]!="undefined"&&(s=this.preset.tweaks[i.id]),t&&typeof t[i.id]!="undefined"&&(s=t[i.id]),i.widget==="slider"?a`
                  <sp-slider
                    min=${i.min}
                    max=${i.max}
                    step=${i.type==="int1"?1:.01}
                    value=${s}
                    label=${i.name}
                    @input=${o=>{this.handleSliderInput(o.target.value,i.id)}}
                  ></sp-slider>
                `:i.widget==="color"?a` <div>${i.name} ${s}</div> `:a``})}
        </section>
      `:a``}}ne.styles=u`
    section {
      margin: 10px;
      padding: 14px;
      border-radius: 12px;
      background-color: #f1f1f1;
      border: 1px #f1f1f1 solid;
    }
  `;_e([l({type:Object})],ne.prototype,"node",2);_e([l({type:Array})],ne.prototype,"tweaks",2);_e([l({type:Array})],ne.prototype,"preset",2);customElements.define("editor-inspector-substance-tweaks",ne);var Pi=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,et=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ei(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Pi(e,t,s),s};class he extends b{constructor(){super(...arguments),this.nodeId="",this.documentState={}}render(){return a` <h2>Semantic Interface</h2> `}}he.styles=u`
    h2 {
      color: pink;
    }
  `;et([l({type:String})],he.prototype,"nodeId",2);et([l({type:Object})],he.prototype,"documentState",2);customElements.define("editor-inspector-semantic-interface",he);var Di=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,tt=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ci(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Di(e,t,s),s};class ue extends b{constructor(){super(...arguments),this.color="#000000",this.label="Select Color"}render(){return a`
      <div>
        <span style="background:${this.color}"></span>
        <label>${this.label}</label>
      </div>
    `}}ue.styles=u`
    div {
      display: inline-block;
      position: relative;
      border-radius: 12px;
      padding: 4px;
      cursor: pointer;
      left: -4px;
    }

    span {
      float: left;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 12px;
      box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.1);
    }

    div:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    label {
      line-height: 40px;
      margin-left: 16px;
      padding-right: 16px;
      cursor: pointer;
    }
  `;tt([l({type:String})],ue.prototype,"color",2);tt([l({type:String})],ue.prototype,"label",2);customElements.define("color-picker-button-markup",ue);var Oi=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Ni=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ti(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Oi(e,t,s),s};class Pe extends b{constructor(){super(...arguments),this.color="#000000"}handleInput(e){this.color=e.target.color,this.dispatchEvent(new CustomEvent("color-picked",{bubbles:!0,cancelable:!0,composed:!0,detail:{color:this.color,originalEvent:e}}))}render(){return a`
      <div>
        <sp-color-wheel
          @input=${this.handleInput}
          color=${this.color}
          style="width: 220px; height: 220px;"
        ></sp-color-wheel>
        <sp-color-area
          @input=${this.handleInput}
          color=${this.color}
          style="width: 110px;height: 110px;"
        ></sp-color-area>
      </div>
    `}}Pe.styles=u`
    :host {
      display: flex;
      gap: 10px;
      margin-bottom: 10px;
    }
    div {
      flex-shrink: 0;
      display: grid;
      place-content: center center;
      grid-template-areas: main;
    }
    sp-color-wheel {
      width: 300px;
      height: 300px;
      grid-area: main;
    }
    sp-color-area {
      grid-area: main;
      z-index: 1;
      margin: auto;
      width: 160px;
      height: 160px;
    }
  `;Ni([l({type:String})],Pe.prototype,"color",2);customElements.define("color-picker",Pe);var Hi=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,it=(n,e,t,i)=>{for(var s=i>1?void 0:i?ji(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Hi(e,t,s),s};class ge extends b{constructor(){super(...arguments),this.color="#000000",this.label="Select Color"}handleColorPicked(e){this.dispatchEvent(new CustomEvent("color-picked",{bubbles:!0,cancelable:!0,composed:!0,detail:{color:e.detail.color,originalEvent:e}}))}render(){return a`
      <overlay-trigger>
        <color-picker-button-markup
          slot="trigger"
          color=${this.color}
          label=${this.label}
        ></color-picker-button-markup>
        <sp-popover dialog slot="click-content" direction="bottom" tip open>
          <color-picker
            @color-picked=${this.handleColorPicked}
            color=${this.color}
          ></color-picker>
          &nbsp;
          <sp-button
            onclick="javascript: this.dispatchEvent(new Event('close', {bubbles: true, composed: true}));"
            >Done</sp-button
          >
        </sp-popover>
      </overlay-trigger>
    `}}ge.styles=u`
    sp-color-wheel {
      width: 300px;
      height: 300px;
      grid-area: main;
    }
    sp-color-area {
      grid-area: main;
      z-index: 1;
      margin: auto;
      width: 160px;
      height: 160px;
    }
  `;it([l({type:String})],ge.prototype,"color",2);it([l({type:String})],ge.prototype,"label",2);customElements.define("color-picker-button",ge);const st=class extends b{handleEffectPicked(n){this.dispatchEvent(new CustomEvent("effect-picked",{bubbles:!0,cancelable:!0,composed:!0,detail:{effectId:n}}))}render(){return a`
      <ul>
        ${st.listItems.map(n=>a`
            <li>
              <sp-button
                ?disabled=${n.disabled}
                quiet
                variant="secondary"
                @click=${()=>{this.handleEffectPicked(n.id)}}
                >${n.name}</sp-button
              >
            </li>
          `)}
      </ul>
    `}};let Ee=st;Ee.styles=u`
    :host {
      max-height: 200px;
      overflow: auto;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0;
      padding: 0;
    }
  `;Ee.listItems=[{id:"rainbow-border",name:"Rainbow Border",disabled:!1},{id:"stroke",name:"Stroke",disabled:!0},{id:"shake",name:"Shake",disabled:!1},{id:"wiggle",name:"Wiggle",disabled:!0}];customElements.define("list-of-effects",Ee);class nt extends b{proxyHandleEffectPicked(e){this.dispatchEvent(new CustomEvent("effect-picked",{bubbles:!0,cancelable:!0,composed:!0,detail:{effectId:e.detail.effectId}}))}render(){return a`
      <overlay-trigger>
        <sp-button slot="trigger"> Add Effect </sp-button>
        <sp-popover dialog slot="click-content" direction="bottom" tip open>
          <list-of-effects
            @effect-picked=${this.proxyHandleEffectPicked}
          ></list-of-effects>
          &nbsp;
          <sp-button
            onclick="javascript: this.dispatchEvent(new Event('close', {bubbles: true, composed: true}));"
            >Done</sp-button
          >
        </sp-popover>
      </overlay-trigger>
    `}}nt.styles=u``;customElements.define("effect-picker-button",nt);var Gi=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,N=(n,e,t,i)=>{for(var s=i>1?void 0:i?Mi(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Gi(e,t,s),s};class E extends b{constructor(){super(),this.editorState={},this.documentState={},this.open=!0,this.selectedNode={},this.substancePresets=[],this.substanceTweaks=[],this.isReplaceImageDragOverState=!1,this.isInvalidText=!1,this.debounceTimer=setTimeout(()=>"",0),this.substanceEffectIds=[],this._color="#000000",this._name="default",this._blendMode="normal",this._text="Lorem Ipsum",this._fontLabel="",this._size=40,this._alignment="left",this._substance="",this._exportSize=1,this.substanceEffectIndexModel=new _t(this.handleNewSubstanceEffectIndexState.bind(this)),this.substanceEffectIndex=this.substanceEffectIndexModel.state}handleNewSubstanceEffectIndexState(e){this.substanceEffectIndex=e}get selectedNodeId(){let e;return this.editorState.selections.length===1&&(e=this.editorState.selections[0]),e}handleSaveAsThumbnail(){w(this,{action:"save-rendition-as-thumbnail",id:this.selectedNodeId})}handleSaveAsExtraThumbnail(){w(this,{action:"save-rendition-as-extra-thumbnail",id:this.selectedNodeId})}handleExportSizeChange(e){this._exportSize=e.target.value}handleExportClick(){!this.selectedNodeId||w(this,{action:"download-rendition",id:this.selectedNodeId,scale:this._exportSize})}handleColorPicked(e){h(this,{action:"set-color",id:this.selectedNodeId,color:e.detail.color,originalEvent:e})}handleTextChanged(e){var o;const t=(o=this.shadowRoot)==null?void 0:o.getElementById("text-edit-box");if(!t)return;const i=t.value;if(!i.trim()){this.isInvalidText=!0;return}this.isInvalidText=!1,h(this,{action:"set-text",id:this.selectedNodeId,value:i,originalEvent:e})}handleSizeChanged(e){var s;const t=(s=this.shadowRoot)==null?void 0:s.getElementById("size-option-select");if(!t)return;const i=parseFloat(t.value);h(this,{action:"set-size",id:this.selectedNodeId,value:i,originalEvent:e})}handleAlignmentChanged(e){var s;const t=(s=this.shadowRoot)==null?void 0:s.getElementById("alignment-option-select");if(!t)return;const i=t.selected[0];h(this,{action:"set-property",id:this.selectedNodeId,key:"alignment",value:i,originalEvent:e})}handleDiameterChanged({target:{value:e}}){typeof e=="number"&&h(this,{action:"update-node",id:this.selectedNodeId,nodeData:{width:e,height:e}})}handleWidthChanged({target:{value:e}}){typeof e=="number"&&h(this,{action:"update-node",id:this.selectedNodeId,nodeData:{width:e}})}handleHeightChanged({target:{value:e}}){typeof e=="number"&&h(this,{action:"update-node",id:this.selectedNodeId,nodeData:{height:e}})}handleBorderRadiusChanged({target:{value:e}}){typeof e=="number"&&h(this,{action:"update-node",id:this.selectedNodeId,nodeData:{data:{borderRadius:e}}})}handleBorderSizeChanged({target:{value:e}}){typeof e=="number"&&h(this,{action:"update-node",id:this.selectedNodeId,nodeData:{data:{borderSize:e}}})}handleBorderColorPicked({detail:{color:e}}){h(this,{action:"update-node",id:this.selectedNodeId,nodeData:{data:{borderColor:e}}})}handleFontChanged(e){var p;const t=(p=this.shadowRoot)==null?void 0:p.getElementById("font-option-select");if(!t||!this.selectedNodeId)return;const{data:{fontLabel:i}}=this.documentState.nodes[this.selectedNodeId],{label:s,family:o,weight:r,style:d}=ye.find(c=>c.label===t.value)||{};i!==s&&h(this,{action:"set-properties",id:this.selectedNodeId,originalEvent:e,data:{fontLabel:s,font:o,weight:r,style:d}})}get colorPickerHtml(){if(this.selectedNodeId){const{data:{color:e}}=this.documentState.nodes[this.selectedNodeId];if(e)this._color=e;else return a``}return a`
      <color-picker-button
        label="Color"
        @color-picked=${this.handleColorPicked}
        color=${this._color}
      ></color-picker-button>
    `}get colorPickerSectionHtml(){return a`<section>${this.colorPickerHtml}</section>`}get diameterInputHtml(){if(!this.selectedNodeId)return a``;const{width:e}=this.documentState.nodes[this.selectedNodeId];return a`

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

    `}get sizeInputsHtml(){if(!this.selectedNodeId)return a``;const{width:e,height:t}=this.documentState.nodes[this.selectedNodeId];return a`

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

    `}get borderControlsHtml(){if(!this.selectedNodeId)return a``;const{data:{borderSize:e,borderColor:t}}=this.documentState.nodes[this.selectedNodeId];return a`
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
    `}get rectangleEditHtml(){if(!this.selectedNodeId)return a``;const{data:{borderRadius:e}}=this.documentState.nodes[this.selectedNodeId];return a`
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
    `}get ellipseEditHtml(){return a`
      <section>
        ${this.colorPickerHtml}
        ${this.sizeInputsHtml}
        ${this.borderControlsHtml}
      </section>
    `}get circleEditHtml(){return a`
      <section>
        ${this.colorPickerHtml}
        ${this.diameterInputHtml}
        ${this.borderControlsHtml}
      </section>
    `}get textEditHtml(){if(!this.selectedNodeId)return a``;const{data:{fontLabel:e,size:t,text:i,alignment:s}}=this.documentState.nodes[this.selectedNodeId];if(i&&t)this._text=i,this._size=t,this._alignment=s,this._fontLabel=e;else return a``;return a`
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
          ${re(ye,o=>o.label,o=>a`<sp-menu-item value=${o.label}
                ><span
                  style="font-family:${o.family};font-weight:${o.weight};font-style:${o.style}"
                  >${o.label}</span
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
    `}get blendModePickerHtml(){if(this.selectedNodeId){const{blendMode:e}=this.documentState.nodes[this.selectedNodeId];return a`
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
      `}return a``}willUpdate(e){this.selectedNode=this.selectedNodeId?this.documentState.nodes[this.selectedNodeId]:{};const{data:t}=this.selectedNode;t&&t.substance!==this._substance&&(this._substance=t.substance||"",this._substance?Ge(this._substance).then(i=>ft(i)).then(({tweaks:i=[],presets:s=[]})=>{const o=JSON.stringify(s),r=JSON.stringify(this.substancePresets),d=JSON.stringify(i),p=JSON.stringify(this.substanceTweaks);o!==r&&(this.substancePresets=s),d!==p&&(this.substanceTweaks=i)}):(this.substancePresets=[],this.substanceTweaks=[])),e.has("substanceEffectIndex")&&(this.substanceEffectIds=Object.keys(this.substanceEffectIndex.items),this.substanceEffectIds.sort((i,s)=>{const{items:o}=this.substanceEffectIndex,r=o[i],d=o[s],p=r.name,c=d.name;return p<c?1:-1}))}get substancePickerHtml(){if(!this.selectedNodeId||this.selectedNode.type!=="image")return a``;const{data:{substance:e,substanceConfig:t}}=this.selectedNode,i=t.preset,s=e||"",o=i||"",r=this.substancePresets.find(c=>c.name===o),d=this.substanceEffectIds.find(c=>c===e),p=!e||d?a``:a` <option value="${e}" selected>${e}</option> `;return a`
      <section>
        <label for="SubstancePicker">Substance</label>
        <select
          id="SubstancePicker"
          @blur=${this.handleSubstanceChange}
          @change=${this.handleSubstanceChange}
          .value=${s}
        >
          <option value="" ?selected=${!e}>None</option>
          ${p}
          ${re(this.substanceEffectIds,c=>c,c=>a`
              <option value="${c}" ?selected=${c===e}>
                ${this.substanceEffectIndex.items[c].name}
              </option>
            `)}
        </select>
        ${this.substancePresets.length>0?a`
              <select
                id="SubstancePresetPicker"
                @blur=${this.handleSubstancePresetChange}
                @change=${this.handleSubstancePresetChange}
                .value=${o}
              >
                ${re(this.substancePresets,c=>c.name,c=>a`
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
        .preset=${r}
      ></editor-inspector-substance-tweaks>
    `}handleSwapToggleClick(){if(this.selectedNodeId){const{data:{swappable:e}}=this.selectedNode;h(this,{action:"set-property",id:this.selectedNodeId,key:"swappable",value:!e})}}handleFileInputChange(e){const t=e.target,{files:i}=t;FileReader&&i&&i.length&&this.loadFile(i[0])}handleDrop(e){if(e.preventDefault(),e.dataTransfer.items&&e.dataTransfer.items.length&&e.dataTransfer.items[0].kind==="file"){const t=e.dataTransfer.items[0].getAsFile();this.loadFile(t)}}debouncedClearDragoverClass(){clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.isReplaceImageDragOverState=!1},150)}handleDragOver(e){this.isReplaceImageDragOverState=!0,this.debouncedClearDragoverClass(),e.preventDefault()}get swappableToggleHtml(){const{data:{swappable:e}}=this.selectedNode;return a`
      <section>
        <sp-switch
          ?checked=${e}
          label="Switch"
          @click="${this.handleSwapToggleClick}"
          >Swappable</sp-switch
        >
      </section>
    `}get replaceImageHtml(){const e=this.selectedNodeId;if(!e)return a``;const{type:t}=this.documentState.nodes[e];return t!=="image"?a``:a`
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
    `}handleItemNameChange(e){e.currentTarget&&this.selectedNodeId&&h(this,{action:"set-property",id:this.selectedNodeId,key:"name",value:e.currentTarget.value})}loadFile(e){const t=this.selectedNodeId;!t||K(e).then(i=>{h(this,{action:"replace-image",id:t,data:{src:i.url,width:i.width,height:i.height}})})}ungroupContainer(){h(this,{action:"ungroup-selections"})}get renameInputHtml(){let e="";const t=this.selectedNodeId;if(t){const{data:{name:i}}=this.documentState.nodes[t];e=i}return a`
      <section>
        <sp-field-label for="name-1">Item Name</sp-field-label>
        <sp-textfield
          @change=${this.handleItemNameChange}
          id="name-0"
          value="${e}"
          placeholder="Enter a semantic item name"
        ></sp-textfield>
      </section>
    `}get containerUngroupHtml(){return a`
      <section>
        <sp-button size="s" variant="secondary" @click=${this.ungroupContainer}
          >Ungroup</sp-button
        >
      </section>
    `}get variantsHtml(){return a`
      <section>
        <editor-inspector-variants
          nodeId=${this.selectedNodeId||""}
          .documentState=${this.documentState}
        ></editor-inspector-variants>
      </section>
    `}get exportArtboardHtml(){return a`
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

      </section>
    `}get semanticInterfaceHtml(){return a`
      <section>
        <editor-inspector-semantic-interface
          nodeId=${this.selectedNodeId||""}
          .documentState=${this.documentState}
        ></editor-inspector-semantic-interface>
      </section>
    `}handleBlendModeChange(e){h(this,{action:"update-node",id:this.selectedNodeId,nodeData:{blendMode:e.target.value}})}handleSubstanceChange(e){const{data:{substance:t}}=this.selectedNode,{selectedNodeId:i}=this;if(e.target.value!==t){const s=e.target.value;if(console.info("newSubstanceId",s),s)w(this,{action:"add-loading",id:i});else{h(this,{action:"set-properties",id:i,data:{substance:"",substanceConfig:{}},originalEvent:e});return}Ge(s).then(o=>yt(o)).then(o=>{let r="";o.length>0&&(r=o[0].name),h(this,{action:"set-properties",id:i,data:{substance:s,substanceConfig:{preset:r}},originalEvent:e})})}}handleSubstancePresetChange(e){const{data:{substanceConfig:t}}=this.selectedNode;e.target.value!==t.preset&&h(this,{action:"set-property",id:this.selectedNodeId,key:"substanceConfig",value:{preset:e.target.value},originalEvent:e})}makeVariantSet(){h(this,{action:"make-variant-set-from-selections"})}makeGroup(){h(this,{action:"group-selections"})}get singleItemPropertiesHtml(){let e="";const t=this.selectedNodeId;if(t){const{type:s}=this.documentState.nodes[t];e=s}const i=[];switch(e){case"text":i.push(this.textEditHtml,this.blendModePickerHtml,this.variantsHtml,this.renameInputHtml,this.swappableToggleHtml);break;case"image":i.push(this.replaceImageHtml,this.blendModePickerHtml,this.substancePickerHtml,this.variantsHtml,this.renameInputHtml,this.swappableToggleHtml);break;case"rectangle":i.push(this.rectangleEditHtml,this.blendModePickerHtml,this.variantsHtml,this.renameInputHtml);break;case"circle":i.push(this.circleEditHtml,this.blendModePickerHtml,this.variantsHtml,this.renameInputHtml);break;case"ellipse":i.push(this.ellipseEditHtml,this.blendModePickerHtml,this.variantsHtml,this.renameInputHtml);break;case"artboard":i.push(this.renameInputHtml,this.colorPickerSectionHtml,this.exportArtboardHtml);break;case"artboard-group":i.push(this.renameInputHtml,this.semanticInterfaceHtml);break;case"container":i.push(this.containerUngroupHtml,this.renameInputHtml);break}return a`
      <header>
        <h1>Edit ${this._name}</h1>
      </header>
      <div class="inspector-content">${i}</div>
    `}get batchSelectedPropertiesHtml(){const e=this.editorState.selections.length;let t=!0,i="";return this.editorState.selections.forEach(s=>{const o=this.documentState.nodes[s].type;i&&t&&i!==o?t=!1:i=o}),a`
      <header>
        <h1>${e} Items</h1>
      </header>
      <div class="inspector-content">
        <section>
          <sp-button ?disabled=${!t} @click=${this.makeVariantSet}
            >Make Variant Set</sp-button
          >
        </section>
        <section>
          <sp-button @click=${this.makeGroup}>Group Items</sp-button>
        </section>
      </div>
      <footer></footer>
    `}get panelContentsHtml(){const e=this.editorState.selections.length===0,t=this.editorState.selections.length>1;return e?a``:t?this.batchSelectedPropertiesHtml:this.singleItemPropertiesHtml}render(){if(this.selectedNodeId){const{type:e}=this.selectedNode;this._name=e}return a` <div class="panel">${this.panelContentsHtml}</div> `}}E.styles=u`
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
      background-color: #fafafa;
      overflow: scroll;
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

    .inspector-content section {
      margin: 0 20px 10px 20px;
      padding: 0 0 10px 0;
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

    effect-picker-button {
      margin: 10px;
      display: inline-block;
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
  `;N([l({type:Object})],E.prototype,"editorState",2);N([l({type:Object})],E.prototype,"documentState",2);N([l({type:Boolean})],E.prototype,"open",2);N([F()],E.prototype,"substanceEffectIndexModel",2);N([F()],E.prototype,"substanceEffectIndex",2);N([F()],E.prototype,"selectedNode",2);N([F()],E.prototype,"substancePresets",2);N([F()],E.prototype,"substanceTweaks",2);N([F()],E.prototype,"isReplaceImageDragOverState",2);N([F()],E.prototype,"isInvalidText",2);customElements.define("editor-inspector",E);var zi=Object.defineProperty,Ai=Object.getOwnPropertyDescriptor,V=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ai(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&zi(e,t,s),s};function Ri(n,e){return n.filter(t=>!e.includes(t))}class j extends b{constructor(){super(...arguments),this.documentState={},this.editorState={},this.closedContainers=[],this.draggedItemId="",this.dragOverTargetId="",this.dragOverInsertion="",this.isDragging=!1}preorderTraversal(e){const t=[this.documentState.rootNodeId],i=[0];for(;t.length;){const s=t.pop(),o=i.pop(),r=this.documentState.nodes[s];this.closedContainers.indexOf(s)===-1&&(t.push(...r.children),i.push(...Array(r.children.length).fill(o+1))),e(r,o)}}descendents(e){const t=[],{children:i}=this.documentState.nodes[e],s=[...i];for(;s.length;){const o=s.pop(),{children:r}=this.documentState.nodes[o];t.push(o),s.push(...r)}return t}ancestors(e){const t=[];let{parentId:i}=this.documentState.nodes[e];for(;i;)t.push(i),i=this.documentState.nodes[i].parentId;return t}handleIconClick(e,t,i){if(t==="container"||t==="artboard"){i.stopPropagation();const s=this.closedContainers.indexOf(e);s===-1?this.closedContainers.push(e):this.closedContainers.splice(s,1),this.requestUpdate()}}handlePointerDown(e,t){var g;if(this.gesture&&this.gesture.active)return;const i=(g=this.shadowRoot)==null?void 0:g.getElementById(t);if(!i)return;const{ctrlKey:s,shiftKey:o,metaKey:r}=e,{selections:d}=this.editorState,p=d.indexOf(t),c=[];if(this.gesture=new M(e,i),this.draggedItemId=t,s||o||r)if(p===-1){const O=[...this.descendents(t),...this.ancestors(t)];c.push(t,...Ri(d,O))}else c.push(...d),c.splice(p,1);else c.push(t);w(this,{action:"set-selections",ids:c})}handleDragEnd(){if(this.dragOverTargetId){const{parentId:e,type:t}=this.documentState.nodes[this.dragOverTargetId],{children:i}=this.documentState.nodes[e],s=i.indexOf(this.dragOverTargetId);let o="",r=0;this.dragOverInsertion==="above"?(o=e,r=s+1):t==="container"||t==="artboard"?(o=this.dragOverTargetId,r=i.length):(this.dragOverInsertion==="below"||this.dragOverInsertion==="into")&&(o=e,r=s),this.documentState.nodes[this.draggedItemId].parentId===o&&i.indexOf(this.draggedItemId)<=s&&(r-=1),o&&this.draggedItemId&&(h(this,{action:"update-node",id:this.draggedItemId,nodeData:{parentId:o,index:r}}),h(this,{action:"conform-artboard-intersections"}))}this.isDragging=!1,this.draggedItemId="",this.dragOverTargetId=""}handleDragStart(){this.isDragging=!0}listItemIdAtCoordinate(e,t){var o;let i=(o=this.shadowRoot)==null?void 0:o.elementFromPoint(e,t),s="";for(;i&&!i.id;)i=i==null?void 0:i.parentNode;return i&&(s=i.id),s}dropPlacement(e,t){const i=this.listItemIdAtCoordinate(e,t-10),s=this.listItemIdAtCoordinate(e,t),o=this.listItemIdAtCoordinate(e,t+10);return s?s===i&&s===o?"into":s===i?"below":"above":""}handleDragMove(e){var i;this.dragOverInsertion=this.dropPlacement(e.detail.currentX,e.detail.currentY);let t=(i=this.shadowRoot)==null?void 0:i.elementFromPoint(e.detail.currentX,e.detail.currentY);if(!t){this.dragOverTargetId="";return}for(;t&&!t.id;)t=t==null?void 0:t.parentNode;t?this.dragOverTargetId=t.id:this.dragOverTargetId=""}render(){const e=[];return this.preorderTraversal((t,i)=>{if(i===0)return;let s="";switch(t.type){case"text":t.data.name?s=t.data.name:s=t.data.text||t.type;break;default:s=t.data.name||t.type;break}const o=this.editorState.selections.indexOf(t.id)>=0;let r="background",d=t.data.color||"#242424";t.type==="image"&&(r="background-image",d=`url("${t.data.src}")`),t.type==="artboard"&&(d="#242424");const p=this.closedContainers.indexOf(t.id)===-1?"":"closed";let c=this.dragOverInsertion;t.type!=="container"&&t.type!=="artboard"&&c==="into"&&(c="below"),e.push(a`
          <div
            id="${t.id}"
            @pointerdown=${g=>this.handlePointerDown(g,t.id)}
            class="layer ${this.isDragging&&t.id===this.draggedItemId?"dragged":""} ${t.id===this.dragOverTargetId?`insert-${c}`:""}"
            ?selected="${o}"
          >
            <t style="padding-left:${i*16}px;">
              <i
                style="${r}:${d};"
                class="${t.type} ${p}"
                @pointerdown=${g=>this.handleIconClick(t.id,t.type,g)}
              ></i>
              ${s}
            </t>
          </div>
        `)}),a`<section
      @wheel=${t=>t.stopPropagation()}
      @gesture-drag-end=${this.handleDragEnd}
      @gesture-drag-start=${this.handleDragStart}
      @gesture-drag-move=${this.handleDragMove}
    >
      <h3>Layers</h3>
      ${e}
    </section> `}}j.styles=u`
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
      background-color: #fafafa;
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
  `;V([l({type:Object})],j.prototype,"documentState",2);V([l({type:Object})],j.prototype,"editorState",2);V([l({type:Array})],j.prototype,"closedContainers",2);V([l({type:String})],j.prototype,"draggedItemId",2);V([l({type:String})],j.prototype,"dragOverTargetId",2);V([l({type:String})],j.prototype,"dragOverInsertion",2);V([l({type:Boolean})],j.prototype,"isDragging",2);customElements.define("editor-layers-panel",j);var Bi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,Li=(n,e,t,i)=>{for(var s=i>1?void 0:i?Fi(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Bi(e,t,s),s};class De extends b{constructor(){super(...arguments),this.editorState={}}render(){return a`
      <header>
        <h1>Discover</h1>
      </header>
      <div class="contents">
        <div class="search"></div>
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
    `}}De.styles=u`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #fafafa;
      overflow: scroll;
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
      box-shadow: inset 0 0 0 1px #ddd;
      position: relative;
      display: inline-block;
      margin: 10px 10px 0 0;
    }
  `;Li([l({type:Object})],De.prototype,"editorState",2);customElements.define("editor-panel-discover",De);var Vi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,Wi=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ui(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Vi(e,t,s),s};class Ce extends b{constructor(){super(...arguments),this.editorState={}}handlePick(e,t){h(this,{action:`add-${e}`,data:t})}loadFile(e){K(e).then(t=>{this.handlePick("image",{src:t.url,width:t.width,height:t.height})})}handleFileInputChange(e){const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let s=0;s<i.length;s+=1)this.loadFile(i[s])}render(){return a`
            <header>
                <h1>Photos</h1>
            </header>
            <div class="contents">
                <div class="search"></div>
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
        `}}Ce.styles=u`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #fafafa;
      overflow: scroll;
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
  `;Wi([l({type:Object})],Ce.prototype,"editorState",2);customElements.define("editor-panel-photos",Ce);var Ki=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Xi=(n,e,t,i)=>{for(var s=i>1?void 0:i?Yi(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Ki(e,t,s),s};class Oe extends b{constructor(){super(...arguments),this.editorState={}}handlePick(e,t){h(this,{action:`add-${e}`,data:t})}render(){return a`
      <header>
        <h1>Text</h1>
      </header>
      <div class="contents">
        <div class="search"></div>
        <ul>
          ${ye.map(e=>a`<li
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
    `}}Oe.styles=u`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #fafafa;
      overflow: scroll;
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
  `;Xi([l({type:Object})],Oe.prototype,"editorState",2);customElements.define("editor-panel-text",Oe);var Ji=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Zi=(n,e,t,i)=>{for(var s=i>1?void 0:i?qi(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Ji(e,t,s),s};class Te extends b{constructor(){super(...arguments),this.editorState={}}handlePick(e){h(this,{action:"add-shape",value:e})}render(){return a`
      <header>
        <h1>Design assets</h1>
      </header>
      <div class="contents">
        <div class="search"></div>

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
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    `}}Te.styles=u`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #fafafa;
      overflow: scroll;
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
  `;Zi([l({type:Object})],Te.prototype,"editorState",2);customElements.define("editor-panel-design-assets",Te);var Qi=Object.defineProperty,es=Object.getOwnPropertyDescriptor,ts=(n,e,t,i)=>{for(var s=i>1?void 0:i?es(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&Qi(e,t,s),s};class Ne extends b{constructor(){super(...arguments),this.editorState={}}handleAddArtboardClick(){h(this,{action:"add-artboard"})}render(){return a`
      <header>
        <h1>Artboards</h1>
      </header>
      <div class="contents">
        <sp-button
          size="s"
          variant="secondary"
          @click=${this.handleAddArtboardClick}
          >Add Artboard</sp-button
        >
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
    `}}Ne.styles=u`
    :host {
      position: absolute;
      width: 100%;
      max-height: 100%;
      display: block;
      background-color: #fafafa;
      overflow: scroll;
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
  `;ts([l({type:Object})],Ne.prototype,"editorState",2);customElements.define("editor-panel-artboards",Ne);var is=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,ot=(n,e,t,i)=>{for(var s=i>1?void 0:i?ss(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&is(e,t,s),s};const ze=200;class be extends b{constructor(){super(...arguments),this.editorState={},this.documentState={},this.topPanelContentKey="default",this.isBottomPanelOpen=!1,this.bottomPanelMaxSize=1,this.bottomPanelSize=1,this.topPanelRenderSize=1,this.bottomPanelRenderSize=1,this.grippyStartReferencePanelSize=1}willUpdate(e){if(e.has("editorState")){const{targetLayersPanelHeight:t,activeToolbarSection:i,isLayersPaletteOpen:s,viewportHeight:o,selections:r}=this.editorState,d=o-_.HEADER_STANDARD_HEIGHT,p=r.length>0;this.bottomPanelMaxSize=d-ze,this.isBottomPanelOpen=s,this.topPanelContentKey=p?"inspector":i,this.bottomPanelRenderSize=this.isBottomPanelOpen?Math.min(t,this.bottomPanelMaxSize):0,this.topPanelRenderSize=d-this.bottomPanelRenderSize}}handleGrippyMove(e){const t=this.grippyStartReferencePanelSize-e.detail.totalDeltaY,i=Math.max(ze,Math.min(t,this.bottomPanelMaxSize));w(this,{action:"set-target-layers-panel-height",value:i})}handleGrippyStart(){this.grippyStartReferencePanelSize=this.bottomPanelRenderSize}get topPanelHtml(){let e;switch(this.topPanelContentKey){case"inspector":e=a` <editor-inspector
          .editorState=${this.editorState}
          .documentState=${this.documentState}
        ></editor-inspector>`;break;case"discover":e=a` <editor-panel-discover
          .editorState=${this.editorState}
        ></editor-panel-discover>`;break;case"photos":e=a` <editor-panel-photos
          .editorState=${this.editorState}
        ></editor-panel-photos>`;break;case"text":e=a` <editor-panel-text
          .editorState=${this.editorState}
        ></editor-panel-text>`;break;case"design-assets":e=a` <editor-panel-design-assets
          .editorState=${this.editorState}
        ></editor-panel-design-assets>`;break;case"artboards":e=a` <editor-panel-artboards
          .editorState=${this.editorState}
        ></editor-panel-artboards>`;break;default:e=a`- missing section component -`;break}return e}get bottomPanelHtml(){return a`
      <grippy-handle
        @gesture-drag-move=${this.handleGrippyMove}
        @gesture-drag-start=${this.handleGrippyStart}
      ></grippy-handle>
      <editor-layers-panel
        .documentState=${this.documentState}
        .editorState=${this.editorState}
      ></editor-layers-panel>
    `}get topPanelStyles(){return f({height:`${this.topPanelRenderSize}px`})}get bottomPanelStyles(){return f({height:`${this.bottomPanelRenderSize}px`})}render(){const e=this.isBottomPanelOpen?a`
          <div class="bottom" style=${this.bottomPanelStyles}>
            ${this.bottomPanelHtml}
          </div>
        `:a``;return a`
      <div class="top" style=${this.topPanelStyles}>${this.topPanelHtml}</div>
      ${e}
    `}}be.styles=u`
    :host {
      position: absolute;
      display: block;
      background-color: #fafafa;
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
  `;ot([l({type:Object})],be.prototype,"editorState",2);ot([l({type:Object})],be.prototype,"documentState",2);customElements.define("editor-panel",be);var ns=Object.defineProperty,os=Object.getOwnPropertyDescriptor,q=(n,e,t,i)=>{for(var s=i>1?void 0:i?os(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&ns(e,t,s),s};class A extends b{constructor(){super(),this.editorState={},this.displayGraph={},this.documentState={},this.canUndo=!1,this.canRedo=!1,this.isDragOverState=!1,this.debounceTimer=setTimeout(()=>"",0),this._margin=0,this._headerHeight=0,document.addEventListener("paste",e=>{const t=e.clipboardData.items;[].slice.call(t).filter(s=>s.type.indexOf("image")!==-1).forEach(s=>{const o=s.getAsFile();this.loadFile(o)})})}static layoutForSize(e,t){return e<=_.HORIZONTAL_BREAKPOINT?me.SmallPortrait:t<=_.VERTICAL_BREAKPOINT?me.SmallLandscape:me.Standard}toolbarStyles(){const e=this._margin,t=this._margin+this._headerHeight,i=this.editorState.viewportHeight-this._headerHeight-this._margin*2;return{top:`${t}px`,left:`${e}px`,width:`${_.TOOLBAR_STANDARD_WIDTH}px`,height:`${i}px`}}assetsPanelStyles(){const e=this._margin+this._headerHeight,t=_.ASSETS_PANEL_STANDARD_WIDTH,i=_.TOOLBAR_STANDARD_WIDTH,s=this._margin+i+this._margin,o=this.editorState.viewportHeight-e-this._margin;return{top:`${e}px`,left:`${s}px`,width:`${t}px`,height:`${o}px`}}timelineStyles(){const e=this.editorState.viewportHeight-50-2*this._margin;return{display:"none",top:`${e}px`}}get debugHtml(){return this.editorState.debug===!1?a``:a`<editor-debug-tray
      .editorState=${this.editorState}
      .documentState=${this.documentState}
      .displayGraph=${this.displayGraph}
    ></editor-debug-tray>`}loadFile(e){K(e).then(t=>{h(this,{action:"add-image",data:{src:t.url,width:t.width,height:t.height}})})}handleFileInputChange(e){const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let s=0;s<i.length;s+=1)this.loadFile(i[s])}handleFileDrop(e){if(e.preventDefault(),e.dataTransfer.items){w(this,{action:"message",data:{copy:`Uploading ${e.dataTransfer.items.length} image${e.dataTransfer.items.length===1?"":"s"}`,type:"info"}});for(let t=0;t<e.dataTransfer.items.length;t+=1)if(e.dataTransfer.items[t].kind==="file"){const i=e.dataTransfer.items[t].getAsFile();this.loadFile(i)}}}debouncedClearDragoverClass(){clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.isDragOverState=!1},150)}handleFileDragOver(e){this.isDragOverState=!0,this.debouncedClearDragoverClass(),e.preventDefault()}panelStyles(){const e=this._margin+this._headerHeight,t=_.ASSETS_PANEL_STANDARD_WIDTH,i=_.TOOLBAR_STANDARD_WIDTH,s=this._margin+i+this._margin,o=this.editorState.viewportHeight-e-this._margin;return{top:`${e}px`,left:`${s}px`,width:`${t}px`,height:`${o}px`}}render(){const{timelineDuration:e}=this.documentState,{timelinePosition:t,viewportWidth:i,renderScale:s,selections:o,selectableHovers:r,loading:d,dragging:p,resizing:c,snaplines:g,snappoints:O,interactable:U,originOffsetX:oe,originOffsetY:W,isPanningMode:Q,isNodeUnderMutation:B,isPanning:ee,messages:te,debug:k}=this.editorState;this._margin=_.MARGIN_STANDARD,this._headerHeight=_.HEADER_STANDARD_HEIGHT;const D=t/e;return a`
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
          .selections=${o}
          .selectableHovers=${r}
          .loading=${d}
          .dragging=${p}
          .resizing=${c}
          .snaplines=${g}
          .snappoints=${O}
          .interactable=${U}
          .originX=${Math.round(oe)}
          .originY=${Math.round(W)}
          .isPanningMode=${Q}
          .isNodeUnderMutation=${B}
          .isPanning=${ee}
          .debug=${k}
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
          style="${f(this.toolbarStyles())}"
        ></editor-toolbar>
        <editor-panel
          @wheel=${S=>S.stopPropagation()}
          @keydown=${S=>S.stopPropagation()}
          .editorState=${this.editorState}
          .documentState=${this.documentState}
          style="${f(this.panelStyles())}"
        ></editor-panel>
        <editor-timeline
          style="${f(this.timelineStyles())}"
          .currentTime=${D}
        ></editor-timeline>
        ${this.debugHtml}
        <message-queue .messages=${te}></message-queue>
      </sp-theme>
    `}}A.styles=u`
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
  `;q([l({type:Object})],A.prototype,"editorState",2);q([l({type:Object})],A.prototype,"displayGraph",2);q([l({type:Object})],A.prototype,"documentState",2);q([l({type:Boolean})],A.prototype,"canUndo",2);q([l({type:Boolean})],A.prototype,"canRedo",2);q([l({type:Boolean})],A.prototype,"isDragOverState",2);customElements.define("editor-armature",A);var rs=Object.defineProperty,as=Object.getOwnPropertyDescriptor,Z=(n,e,t,i)=>{for(var s=i>1?void 0:i?as(e,t):e,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(e,t,s):r(s))||s);return i&&s&&rs(e,t,s),s};const ve=class extends b{constructor(){super(),this.documentState={},this.displayGraph={},this.editorState={},this.semanticInferenceData={},this.stringifiedGraphModel="{}",this.stringifiedGraphView="{}",this._effectGraph={},this._displayedGraphId="",this._dummyGraph='{ "nodes": [] }',this.renderCallback=vt(this.handleModelsDirty.bind(this)),this.selectionCallback=(...s)=>{this.editorController&&this.editorController.setSelection(...s)},this.cargoKitIndexModel=new St,this.documentModel=new xt(this.cargoKitIndexModel),this.editorModel=new $t;const n=new URLSearchParams(window.location.search),e=n.get("debug")==="true",t=n.get("id")||"",i=n.get("action")||"";this.editorModel.setDebug(e),this.documentController=new wt(this.documentModel,this.editorModel,this.renderCallback,this.selectionCallback),this.editorController=new bt(this.documentController,this.documentModel,this.editorModel,this.renderCallback),this.handleModelsDirty(),t&&this.documentModel.hydrateFromStorageService(t).then(()=>{t!==this.documentModel._state.id&&window.history.replaceState(null,"","?")}).then(()=>{i==="remix"&&this.documentController.duplicate(),this.editorModel.setIsSaved(!0),this.editorModel.setIsDirty(!1),this.handleModelsDirty()}),this.graphVisEl=document.createElement("ng-node-graph"),e&&(document.body.appendChild(this.graphVisEl),this.graphVisEl.addEventListener("ng-changed",this.handleEffectGraphEdgeChange.bind(this)),this.graphVisEl.addEventListener("ng-nodedrag",this.handleEffectGraphArrangement.bind(this)))}updated(n){let e=!1;n.forEach((t,i)=>{if(i==="stringifiedGraphModel"&&(e=!0),i==="stringifiedGraphView"&&(e=!0),i==="editorState"){let o="",r,d="",p=this.stringifiedGraphModel,c=this.stringifiedGraphView,g;if(this._effectGraph={},this.editorState.selections.length===1&&(o=this.editorState.selections[0]),o)if(r=this.documentState.nodes[o],r&&r.effects.length>0){if(d=r.effects[0],this._displayedGraphId!==d){const{data:{graph:O}}=this.documentState.nodes[d];g=O,p=ve.getStringifiedGraphModelFromEffectGraph(g),c=ve.getStringifiedGraphViewFromEffectGraph(g)}}else p=this._dummyGraph,c="{}";else p=this._dummyGraph,c="{}";this._displayedGraphId=d,this.stringifiedGraphModel=p,this.stringifiedGraphView=c}}),e&&(this.graphVisEl.model=JSON.parse(this.stringifiedGraphModel),this.graphVisEl.view=JSON.parse(this.stringifiedGraphView))}static getStringifiedGraphModelFromEffectGraph(n){const e={nodes:[],edges:[]};Object.values(n.nodes).forEach(t=>{const i=[],s=[];if(t.id!=="in")for(const[o,r]of Object.entries(t.input)){let d=o;typeof r.value!="undefined"&&(d=`${r.value} (${d})`),i.push({label:d,portId:o})}if(t.id!=="out")for(const[o]of Object.entries(t.output))s.push({label:o,portId:o});e.nodes.push({nodeId:t.id,label:t.type,inPorts:i,outPorts:s})});for(const[t,i]of Object.entries(n.adjacencyList)){const s=t.split(":");i.forEach(o=>{const r=o.split(":");e.edges.push({inNodeId:r[0],inPortId:r[2],outNodeId:s[0],outPortId:s[2]})})}return JSON.stringify(e)}static getStringifiedGraphViewFromEffectGraph(n){const e={};return Object.values(n.nodes).forEach(t=>{e[t.id]={x:t.x,y:t.y}}),JSON.stringify(e)}handleEffectGraphEdgeChange(){!this._displayedGraphId||this.documentController.applyEffectGraphEdges(this._displayedGraphId,this.graphVisEl.model)}handleEffectGraphArrangement(){!this._displayedGraphId||this.documentController.applyEffectGraphArrangement(this._displayedGraphId,this.graphVisEl.view)}connectedCallback(){super.connectedCallback(),this.editorController.connectToDom()}disconnectedCallback(){super.disconnectedCallback(),this.editorController.disconnectFromDom()}handleModelsDirty(){this.documentState=this.documentModel.state,this.displayGraph=this.documentController.generateDisplayGraph(),this.semanticInferenceData=this.editorController.semanticInferenceData(),this.editorModel._state.isPanningMode?this.editorModel.setInteractable(this.documentState.rootNodeId):this.editorModel.setInteractable(...this.documentController.displayGraphController.displayedContentNodes),this.editorState=this.editorModel.state}handleEditorEvent(n){this.editorController.delegateEvent(n.detail)}handleDocumentEvent(n){this.documentController.delegateEvent(n.detail)}render(){return a`
      <editor-armature
        ?debug=${this.editorModel._state.debug}
        @editorEvent="${this.handleEditorEvent}"
        @documentEvent="${this.handleDocumentEvent}"
        .canUndo=${this.documentController.undoHistory.canUndo}
        .canRedo=${this.documentController.undoHistory.canRedo}
        .documentState="${this.documentState}"
        .displayGraph="${this.displayGraph}"
        .editorState="${this.editorState}"
      ></editor-armature>
    `}};let R=ve;R.styles=u`
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
  `;Z([l({type:Object})],R.prototype,"documentState",2);Z([l({type:Object})],R.prototype,"displayGraph",2);Z([l({type:Object})],R.prototype,"editorState",2);Z([l({type:Object})],R.prototype,"semanticInferenceData",2);Z([l({type:String})],R.prototype,"stringifiedGraphModel",2);Z([l({type:String})],R.prototype,"stringifiedGraphView",2);customElements.define("prototype-app",R);
