import{_ as s,b as n,s as Yt,$ as l,l as v,c as Xt,d as y,g as h,t as qt,w as Z,h as he,j as be,k as ve,m as gt,N as st,n as Ut,T as ge,q as fe,D as xe,u as ye,v as ke,x as we,y as ze,z as at,A as Gt,B as Ce,C as I}from"./vendor.6b255b86.js";const ft=new Set,qe=()=>{const a=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";ft.forEach(t=>{t.setAttribute("dir",a)})},Ie=new MutationObserver(qe);Ie.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const Ee=a=>typeof a.startManagingContentDirection!="undefined"||a.tagName==="SP-THEME";function Se(a){class t extends a{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch{return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!Ee(r);)r=r.assignedSlot||r.parentNode||r.host;const o=this.dir;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",o===this.dir&&this.setAttribute("dir",this.dir),r===document.documentElement)ft.add(this);else{const{localName:i}=r;i.search("-")>-1&&!customElements.get(i)?customElements.whenDefined(i).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?ft.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return s([n({reflect:!0})],t.prototype,"dir",void 0),t}class k extends Se(Yt){}function V(a,{validSizes:t=["s","m","l","xl"],noDefaultSize:e,defaultSize:r="m"}={}){class o extends a{constructor(){super(...arguments),this._size=r}get size(){return this._size||r}set size(c){const d=e?null:r,u=c&&c.toLocaleLowerCase(),m=t.includes(u)?u:d;if(m&&this.setAttribute("size",m),this._size===m)return;const p=this._size;this._size=m,this.requestUpdate("size",p)}update(c){!this.hasAttribute("size")&&!e&&this.setAttribute("size",this.size),super.update(c)}}return s([n({type:String,reflect:!0})],o.prototype,"size",null),o}function Qt(a){class t extends a{renderAnchor({id:r,className:o,ariaHidden:i,labelledby:c,tabindex:d,anchorContent:u=l`<slot></slot>`}){return l`<a
                    id=${r}
                    class=${v(o)}
                    href=${v(this.href)}
                    download=${v(this.download)}
                    target=${v(this.target)}
                    aria-label=${v(this.label)}
                    aria-labelledby=${v(c)}
                    aria-hidden=${v(i?"true":void 0)}
                    tabindex=${v(d)}
                    rel=${v(this.rel)}
                >${u}</a>`}}return s([n({reflect:!0})],t.prototype,"download",void 0),s([n()],t.prototype,"label",void 0),s([n({reflect:!0})],t.prototype,"href",void 0),s([n({reflect:!0})],t.prototype,"target",void 0),s([n({reflect:!0})],t.prototype,"rel",void 0),t}let xt=!0;try{document.body.querySelector(":focus-visible")}catch{xt=!1,import("./vendor.6b255b86.js").then(function(t){return t.f})}const Zt=a=>{var t;const e=i=>{if(i.shadowRoot==null||i.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(i.shadowRoot),i.manageAutoFocus&&i.manageAutoFocus();else{const c=()=>{self.applyFocusVisiblePolyfill&&i.shadowRoot&&self.applyFocusVisiblePolyfill(i.shadowRoot),i.manageAutoFocus&&i.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",c,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",c)}}return()=>{}},r=Symbol("endPolyfillCoordination");class o extends a{constructor(){super(...arguments),this[t]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),xt||requestAnimationFrame(()=>{this[r]==null&&(this[r]=e(this))})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),xt||requestAnimationFrame(()=>{this[r]!=null&&(this[r](),this[r]=null)})}}return t=r,o};class _ extends Zt(k){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1}get tabIndex(){if(this.focusElement===this){const e=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(e)?-1:e}const t=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||t<0?-1:this.focusElement?this.focusElement.tabIndex:t}set tabIndex(t){if(this.manipulatingTabindex){this.manipulatingTabindex=!1;return}if(this.focusElement===this){if(t!==this.tabIndex){this._tabIndex=t;const e=this.disabled?"-1":""+t;this.setAttribute("tabindex",e)}return}if(t===-1?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),t===-1||this.disabled){this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),t!==-1&&this.manageFocusElementTabindex(t);return}this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(t)}onPointerdownManagementOfTabIndex(){this.tabIndex===-1&&(this.tabIndex=0,this.focus({preventScroll:!0}))}async manageFocusElementTabindex(t){this.focusElement||await this.updateComplete,t===null?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=t}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(t){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(t):HTMLElement.prototype.focus.apply(this,[t]))}blur(){const t=this.focusElement||this;t!==this?t.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;const t=this.focusElement||this;t!==this?t.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(t){super.firstUpdated(t),(!this.hasAttribute("tabindex")||this.getAttribute("tabindex")!=="-1")&&this.setAttribute("focusable","")}update(t){t.has("disabled")&&this.handleDisabledChanged(this.disabled,t.get("disabled")),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(t,e){const r=()=>this.focusElement!==this&&typeof this.focusElement.disabled!="undefined";t?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,r()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):e&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,r()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{requestAnimationFrame(()=>{this.manageAutoFocus()})})}}s([n({type:Boolean,reflect:!0})],_.prototype,"disabled",void 0);s([n({type:Boolean})],_.prototype,"autofocus",void 0);s([n({type:Number})],_.prototype,"tabIndex",null);const Ae='button:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [focusable]:not([tabindex="-1"])',It=a=>a.querySelector(Ae),rt=Symbol("slotElementObserver"),Pt=Symbol("startObserving"),G=Symbol("slotContentIsPresent");function Jt(a,t){var e;const r=Array.isArray(t)?t:[t];class o extends a{constructor(){super(...arguments),this[e]=new Map,this.managePresenceObservedSlot=()=>{r.forEach(c=>{this[G].set(c,!!this.querySelector(c))}),this.requestUpdate()}}get slotContentIsPresent(){if(r.length===1)return this[G].get(r[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(c){if(this[G].has(c))return this[G].get(c)||!1;throw new Error("The provided selector `` is not being observed.")}[(e=G,Pt)](){const c={childList:!0,subtree:!0};this[rt]||(this[rt]=new MutationObserver(this.managePresenceObservedSlot)),this[rt].observe(this,c),this.managePresenceObservedSlot()}connectedCallback(){super.connectedCallback(),this[Pt]()}disconnectedCallback(){this[rt].disconnect(),super.disconnectedCallback()}}return o}const Q=Symbol("slotElementObserver"),ht=Symbol("assignedNodes"),Bt=Symbol("startObserving");function nt(a,t){var e;class r extends a{constructor(){super(...arguments),this.slotHasContent=!1}manageTextObservedSlot(){if(!this[ht])return;const i=[...this[ht]].filter(c=>c.tagName?!0:c.textContent?c.textContent.trim():!1);this.slotHasContent=i.length>0}firstUpdated(i){super.firstUpdated(i),this.manageTextObservedSlot()}[(e=ht,Bt)](){const i={characterData:!0,subtree:!0};if(!this[Q]){const c=d=>{for(const u of d)u.type==="characterData"&&this.manageTextObservedSlot()};this[Q]=new MutationObserver(c)}this[Q].observe(this,i)}connectedCallback(){super.connectedCallback(),this[Bt]()}disconnectedCallback(){this[Q]&&this[Q].disconnect(),super.disconnectedCallback()}}return s([n({type:Boolean,attribute:!1})],r.prototype,"slotHasContent",void 0),s([Xt(t,!0)],r.prototype,e,void 0),r}function Te(a){return typeof window!="undefined"&&window.navigator!=null?a.test(window.navigator.userAgent):!1}function Et(a){return typeof window!="undefined"&&window.navigator!=null?a.test(window.navigator.platform):!1}function $e(){return Et(/^Mac/)}function te(){return Et(/^iPhone/)}function _e(){return Et(/^iPad/)||$e()&&navigator.maxTouchPoints>1}function Le(){return te()||_e()}function ee(){return Te(/Android/)}function Fe(a,t,e=[]){for(let r=0;r<t.length;++r){const o=t[r],i=a[r],c=i.parentElement||i.getRootNode();e[r]&&e[r](o),c&&c!==i&&c.replaceChild(o,i),delete a[r]}return t}const St=(a,t,{position:e,prepareCallback:r}={position:"beforeend"})=>{let{length:o}=a;if(o===0)return()=>a;let i=1,c=0;(e==="afterbegin"||e==="afterend")&&(i=-1,c=o-1);const d=new Array(o),u=new Array(o),m=document.createComment("placeholder for reparented element");do{const p=a[c];r&&(u[c]=r(p)),d[c]=m.cloneNode();const b=p.parentElement||p.getRootNode();b&&b!==p&&b.replaceChild(d[c],p),t.insertAdjacentElement(e,p),c+=i}while(--o>0);return function(){return Fe(d,a,u)}};class J extends Qt(nt(Jt(_,'[slot="icon"]'))){constructor(){super(),this.active=!1,this.type="button",this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return this.slotHasContent}get focusElement(){return this}get buttonContent(){const t=[l`
                <div id="label" ?hidden=${!this.hasLabel}>
                    <slot
                        id="slot"
                        @slotchange=${this.manageTextObservedSlot}
                    ></slot>
                </div>
            `];return this.hasIcon&&t.unshift(l`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `),t}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;if(this.anchorElement)this.anchorElement.click(),t=!0;else if(this.type!=="button"){const e=document.createElement("button");e.type=this.type,this.insertAdjacentElement("afterend",e),e.click(),e.remove(),t=!0}return t}renderAnchor(){return l`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return l`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(t){const{code:e}=t;switch(e){case"Space":t.preventDefault(),typeof this.href=="undefined"&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0);break}}handleKeypress(t){const{code:e}=t;switch(e){case"Enter":case"NumpadEnter":this.click();break}}handleKeyup(t){const{code:e}=t;switch(e){case"Space":this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click();break}}handleRemoveActive(){this.active=!1}handlePointerdown(){this.active=!0}manageAnchor(){this.href&&this.href.length>0?(this.getAttribute("role")==="button"&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):((!this.hasAttribute("role")||this.getAttribute("role")==="link")&&this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick))}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("tabindex")||(this.tabIndex=0),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress),this.addEventListener("pointerdown",this.handlePointerdown)}updated(t){super.updated(t),t.has("href")&&this.manageAnchor(),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("focusout",this.handleRemoveActive),this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("focusout",this.handleRemoveActive),this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1)}}s([n({type:Boolean,reflect:!0})],J.prototype,"active",void 0);s([n({type:String})],J.prototype,"type",void 0);s([y(".anchor")],J.prototype,"anchorElement",void 0);const Ue=h`
:host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentColor;stroke:currentColor;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}
`;var Pe=Ue;class re extends J{static get styles(){return[Pe]}}const Be=h`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host(:disabled){cursor:default}:host{--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-white-rgb:255,255,255;border-color:transparent;border-width:0;color:inherit;position:relative}:host{--spectrum-closebutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-closebutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-closebutton-focus-ring-color:var(
--spectrum-alias-focus-ring-color,var(--spectrum-alias-focus-color)
);transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host:after{border-radius:calc(var(--spectrum-CloseButton-size) + var(--spectrum-closebutton-focus-ring-gap));bottom:0;content:"";left:0;margin:calc(var(--spectrum-closebutton-focus-ring-gap)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(.focus-visible){box-shadow:none!important}:host(:focus-visible){box-shadow:none!important}:host(.focus-visible):after{box-shadow:0 0 0 var(--spectrum-closebutton-focus-ring-size) var(--spectrum-closebutton-focus-ring-color)}:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-closebutton-focus-ring-size) var(--spectrum-closebutton-focus-ring-color)}:host([variant=white]){--spectrum-closebutton-focus-ring-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=black]){--spectrum-closebutton-focus-ring-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host{align-items:center;border-radius:var(--spectrum-CloseButton-size);display:inline-flex;flex-direction:row;justify-content:center;padding:0}:host([size=s]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-300);border-radius:var(
--spectrum-global-dimension-size-300
);height:var(--spectrum-global-dimension-size-300);width:var(--spectrum-global-dimension-size-300)}:host([size=m]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-400);border-radius:var(
--spectrum-global-dimension-size-400
);height:var(--spectrum-global-dimension-size-400);width:var(--spectrum-global-dimension-size-400)}:host([size=l]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-500);border-radius:var(
--spectrum-global-dimension-size-500
);height:var(--spectrum-global-dimension-size-500);width:var(--spectrum-global-dimension-size-500)}:host([size=xl]){--spectrum-CloseButton-size:var(--spectrum-global-dimension-size-600);border-radius:var(
--spectrum-global-dimension-size-600
);height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600)}:host(:disabled){background-color:transparent}:host(:disabled) .icon{color:var(
--spectrum-alias-component-icon-color-disabled,var(--spectrum-alias-icon-color-disabled)
)}:host(:not(:disabled)){background-color:transparent}:host(:not(:disabled):hover){background-color:var(
--spectrum-global-color-gray-200
)}:host(:not(:disabled):hover) .icon{color:var(
--spectrum-alias-component-icon-color-hover,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)[active]){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled)[active]) .icon{color:var(
--spectrum-alias-component-icon-color-down,var(--spectrum-alias-icon-color-down)
)}:host(:not(:disabled).focus-visible){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled):focus-visible){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled).focus-visible) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled):focus-visible) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)[focused]){background-color:var(
--spectrum-global-color-gray-300
)}:host(:not(:disabled)[focused]) .icon{color:var(
--spectrum-alias-component-icon-color-key-focus,var(--spectrum-alias-icon-color-hover)
)}:host(:not(:disabled)) .icon{color:var(
--spectrum-alias-component-icon-color-default,var(--spectrum-alias-icon-color)
)}:host(:not(:disabled):focus) .icon{color:var(
--spectrum-alias-component-icon-color-mouse-focus,var(--spectrum-alias-icon-color-down)
)}:host(:not(:disabled).is-focused) .icon{color:var(
--spectrum-alias-component-icon-color-mouse-focus,var(--spectrum-alias-icon-color-down)
)}:host([variant=black]:not(:disabled)){background-color:transparent}:host([variant=black]:not(:disabled):hover){background-color:var(
--spectrum-closebutton-m-black-background-color-hover,rgba(0,0,0,.25)
)}:host([variant=black]:not(:disabled):hover) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-hover,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)[active]){background-color:var(
--spectrum-closebutton-m-black-background-color-down,rgba(0,0,0,.4)
)}:host([variant=black]:not(:disabled)[active]) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-down,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled).focus-visible){background-color:var(
--spectrum-closebutton-m-black-background-color-mouse-focus,transparent
)}:host([variant=black]:not(:disabled):focus-visible){background-color:var(
--spectrum-closebutton-m-black-background-color-mouse-focus,transparent
)}:host([variant=black]:not(:disabled).focus-visible) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-mouse-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled):focus-visible) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-mouse-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)[focused]){background-color:var(
--spectrum-closebutton-m-black-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black]:not(:disabled)[focused]) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-key-focus,var(--spectrum-global-color-static-black)
)}:host([variant=black]:not(:disabled)) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black]:disabled) .icon{color:var(
--spectrum-closebutton-m-black-uiicon-color-disabled,rgba(0,0,0,.4)
)}:host([variant=white]:not(:disabled)){background-color:transparent}:host([variant=white]:not(:disabled):hover){background-color:var(
--spectrum-closebutton-m-white-background-color-hover,hsla(0,0%,100%,.25)
)}:host([variant=white]:not(:disabled):hover) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-hover,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)[active]){background-color:var(
--spectrum-closebutton-m-white-background-color-down,hsla(0,0%,100%,.4)
)}:host([variant=white]:not(:disabled)[active]) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-down,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled).focus-visible){background-color:var(
--spectrum-closebutton-m-white-background-color-mouse-focus,transparent
)}:host([variant=white]:not(:disabled):focus-visible){background-color:var(
--spectrum-closebutton-m-white-background-color-mouse-focus,transparent
)}:host([variant=white]:not(:disabled).focus-visible) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-mouse-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled):focus-visible) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-mouse-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)[focused]){background-color:var(
--spectrum-closebutton-m-white-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white]:not(:disabled)[focused]) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=white]:not(:disabled)) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white]:disabled) .icon{color:var(
--spectrum-closebutton-m-white-uiicon-color-disabled,hsla(0,0%,100%,.4)
)}.icon{margin:0}
`;var Oe=Be;const De=h`
:host{fill:currentColor;color:inherit;display:inline-block;pointer-events:none}:host(:not(:root)){overflow:hidden}@media (forced-colors:active){.spectrum-UIIcon,:host{forced-color-adjust:auto}}:host{--spectrum-icon-size-s:var(
--spectrum-alias-workflow-icon-size-s,var(--spectrum-global-dimension-size-200)
);--spectrum-icon-size-m:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);--spectrum-icon-size-l:var(--spectrum-alias-workflow-icon-size-l);--spectrum-icon-size-xl:var(
--spectrum-alias-workflow-icon-size-xl,var(--spectrum-global-dimension-size-275)
);--spectrum-icon-size-xxl:var(--spectrum-global-dimension-size-400)}:host([size=s]){height:var(
--spectrum-icon-size-s
);width:var(--spectrum-icon-size-s)}:host([size=m]){height:var(
--spectrum-icon-size-m
);width:var(--spectrum-icon-size-m)}:host([size=l]){height:var(
--spectrum-icon-size-l
);width:var(--spectrum-icon-size-l)}:host([size=xl]){height:var(
--spectrum-icon-size-xl
);width:var(--spectrum-icon-size-xl)}:host([size=xxl]){height:var(
--spectrum-icon-size-xxl
);width:var(--spectrum-icon-size-xxl)}:host{height:var(
--spectrum-icon-tshirt-size-height,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
);width:var(
--spectrum-icon-tshirt-size-width,var(
--spectrum-alias-workflow-icon-size,var(--spectrum-global-dimension-size-225)
)
)}#container{height:100%}::slotted(*),img,svg{height:100%;vertical-align:top;width:100%}
`;var Re=De;class g extends k{static get styles(){return[Re]}render(){return l`
            <slot></slot>
        `}}s([n()],g.prototype,"label",void 0);s([n({reflect:!0})],g.prototype,"size",void 0);class Y{constructor(){this.iconsetMap=new Map}static getInstance(){return Y.instance||(Y.instance=new Y),Y.instance}addIconset(t,e){this.iconsetMap.set(t,e);const r=new CustomEvent("sp-iconset-added",{bubbles:!0,composed:!0,detail:{name:t,iconset:e}});setTimeout(()=>window.dispatchEvent(r),0)}removeIconset(t){this.iconsetMap.delete(t);const e=new CustomEvent("sp-iconset-removed",{bubbles:!0,composed:!0,detail:{name:t}});setTimeout(()=>window.dispatchEvent(e),0)}getIconset(t){return this.iconsetMap.get(t)}}class ct extends g{constructor(){super(...arguments),this.iconsetListener=t=>{if(!this.name)return;const e=this.parseIcon(this.name);t.detail.name===e.iconset&&(this.updateIconPromise=this.updateIcon())}}connectedCallback(){super.connectedCallback(),window.addEventListener("sp-iconset-added",this.iconsetListener)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("sp-iconset-added",this.iconsetListener)}firstUpdated(){this.updateIconPromise=this.updateIcon()}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.updateIconPromise=this.updateIcon()}render(){return this.name?l`
                <div id="container"></div>
            `:this.src?l`
                <img src="${this.src}" alt=${v(this.label)} />
            `:super.render()}async updateIcon(){if(this.updateIconPromise&&await this.updateIconPromise,!this.name)return Promise.resolve();const t=this.parseIcon(this.name),e=Y.getInstance().getIconset(t.iconset);return!e||!this.iconContainer?Promise.resolve():(this.iconContainer.innerHTML="",e.applyIconToElement(this.iconContainer,t.icon,this.size||"",this.label?this.label:""))}parseIcon(t){const e=t.split(":");let r="default",o=t;return e.length>1&&(r=e[0],o=e[1]),{iconset:r,icon:o}}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.updateIconPromise,t}}s([n()],ct.prototype,"src",void 0);s([n()],ct.prototype,"name",void 0);s([y("#container")],ct.prototype,"iconContainer",void 0);let yt;const U=function(a,...t){return yt?yt(a,...t):t.reduce((e,r,o)=>e+r+a[o+1],a[0])},P=a=>{yt=a},Me=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.188 4l2.14-2.14A.84.84 0 106.141.672L4 2.812 1.86.672A.84.84 0 00.672 1.86L2.812 4 .672 6.14A.84.84 0 101.86 7.328L4 5.188l2.14 2.14A.84.84 0 107.328 6.14z"
    />
  </svg>`;class He extends g{render(){return P(l),Me()}}customElements.define("sp-icon-cross75",He);const Ne=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M5.238 4l2.456-2.457A.875.875 0 106.456.306L4 2.763 1.543.306A.875.875 0 00.306 1.544L2.763 4 .306 6.457a.875.875 0 101.238 1.237L4 5.237l2.456 2.457a.875.875 0 101.238-1.237z"
    />
  </svg>`;class je extends g{render(){return P(l),Ne()}}customElements.define("sp-icon-cross100",je);const Ve=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.29 5l2.922-2.922a.911.911 0 00-1.29-1.29L5 3.712 2.078.789a.911.911 0 00-1.29 1.289L3.712 5 .79 7.922a.911.911 0 101.289 1.29L5 6.288 7.923 9.21a.911.911 0 001.289-1.289z"
    />
  </svg>`;class Ke extends g{render(){return P(l),Ve()}}customElements.define("sp-icon-cross200",Ke);const We=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.344 6l3.395-3.396a.95.95 0 00-1.344-1.342L6 4.657 2.604 1.262a.95.95 0 00-1.342 1.342L4.657 6 1.262 9.396a.95.95 0 001.343 1.343L6 7.344l3.395 3.395a.95.95 0 001.344-1.344z"
    />
  </svg>`;class Ye extends g{render(){return P(l),We()}}customElements.define("sp-icon-cross300",Ye);const Xe=h`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Cross75{height:var(--spectrum-alias-ui-icon-cross-size-75);width:var(
--spectrum-alias-ui-icon-cross-size-75
)}.spectrum-UIIcon-Cross100{height:var(--spectrum-alias-ui-icon-cross-size-100);width:var(
--spectrum-alias-ui-icon-cross-size-100
)}.spectrum-UIIcon-Cross200{height:var(--spectrum-alias-ui-icon-cross-size-200);width:var(
--spectrum-alias-ui-icon-cross-size-200
)}.spectrum-UIIcon-Cross300{height:var(--spectrum-alias-ui-icon-cross-size-300);width:var(
--spectrum-alias-ui-icon-cross-size-300
)}.spectrum-UIIcon-Cross400{height:var(--spectrum-alias-ui-icon-cross-size-400);width:var(
--spectrum-alias-ui-icon-cross-size-400
)}.spectrum-UIIcon-Cross500{height:var(--spectrum-alias-ui-icon-cross-size-500);width:var(
--spectrum-alias-ui-icon-cross-size-500
)}.spectrum-UIIcon-Cross600{height:var(--spectrum-alias-ui-icon-cross-size-600);width:var(
--spectrum-alias-ui-icon-cross-size-600
)}
`;var Ge=Xe;const Qe={s:()=>l`
        <sp-icon-cross75
            slot="icon"
            class="icon spectrum-UIIcon-Cross75"
        ></sp-icon-cross75>
    `,m:()=>l`
        <sp-icon-cross100
            slot="icon"
            class="icon spectrum-UIIcon-Cross100"
        ></sp-icon-cross100>
    `,l:()=>l`
        <sp-icon-cross200
            slot="icon"
            class="icon spectrum-UIIcon-Cross200"
        ></sp-icon-cross200>
    `,xl:()=>l`
        <sp-icon-cross300
            slot="icon"
            class="icon spectrum-UIIcon-Cross300"
        ></sp-icon-cross300>
    `};class oe extends V(re){constructor(){super(...arguments),this.variant=""}static get styles(){return[...super.styles,Oe,Ge]}get buttonContent(){return[Qe[this.size]()]}}s([n({reflect:!0})],oe.prototype,"variant",void 0);customElements.define("sp-close-button",oe);let kt;const S=function(a,...t){return kt?kt(a,...t):t.reduce((e,r,o)=>e+r+a[o+1],a[0])},A=a=>{kt=a},Ze=({width:a=24,height:t=24,hidden:e=!1,title:r="Alert"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M17.127 2.579L.4 32.512A1 1 0 001.272 34h33.456a1 1 0 00.872-1.488L18.873 2.579a1 1 0 00-1.746 0zM20 29.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5zm0-6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5h3a.5.5 0 01.5.5z"
    />
  </svg>`;class Je extends g{render(){return A(l),Ze({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-alert",Je);const tr=({width:a=24,height:t=24,hidden:e=!1,title:r="Info"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm-.3 4.3a2.718 2.718 0 012.864 2.824 2.664 2.664 0 01-2.864 2.863 2.705 2.705 0 01-2.864-2.864A2.717 2.717 0 0117.7 6.3zM22 27a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2a1 1 0 011-1h1v-6h-1a1 1 0 01-1-1v-2a1 1 0 011-1h4a1 1 0 011 1v9h1a1 1 0 011 1z"
    />
  </svg>`;class er extends g{render(){return A(l),tr({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-info",er);const rr=({width:a=24,height:t=24,hidden:e=!1,title:r="Checkmark Circle"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm10.666 9.08L16.018 27.341a1.206 1.206 0 01-.875.461h-.073a1.2 1.2 0 01-.849-.351l-7.785-7.793a1.2 1.2 0 010-1.7l1.326-1.325a1.2 1.2 0 011.7 0l5.338 5.349L25.314 8.473A1.2 1.2 0 0127 8.263L28.455 9.4a1.2 1.2 0 01.211 1.68z"
    />
  </svg>`;class or extends g{render(){return A(l),rr({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-checkmark-circle",or);const ir=h`
:host{--spectrum-toast-icon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-toast-neutral-content-padding-top:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-content-padding-bottom:var(
--spectrum-global-dimension-size-65
);--spectrum-toast-button-margin-right:var(
--spectrum-global-dimension-size-130
)}:host([dir=ltr]){padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]){padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]){padding-left:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]){padding-right:var(
--spectrum-toast-neutral-padding-left,var(--spectrum-global-dimension-size-200)
)}:host{-webkit-font-smoothing:antialiased;align-items:stretch;border-radius:var(
--spectrum-toast-neutral-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;display:inline-flex;flex-direction:row;font-size:var(
--spectrum-toast-neutral-text-size,var(--spectrum-global-dimension-font-size-100)
);font-weight:var(
--spectrum-toast-neutral-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);padding-bottom:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
);padding-top:var(
--spectrum-toast-neutral-padding-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .type{margin-right:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl]) .type{margin-left:var(
--spectrum-toast-neutral-icon-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=ltr]) .type{margin-left:0}:host([dir=rtl]) .type{margin-right:0}.type{flex-grow:0;flex-shrink:0;margin-bottom:var(--spectrum-toast-icon-padding-y);margin-top:var(--spectrum-toast-icon-padding-y)}:host([dir=ltr]) .content{padding-right:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=rtl]) .content{padding-left:var(
--spectrum-toast-neutral-content-padding-right,var(--spectrum-global-dimension-size-200)
)}:host([dir=ltr]) .content{padding-left:0}:host([dir=rtl]) .content{padding-right:0}:host([dir=ltr]) .content{text-align:left}:host([dir=rtl]) .content{text-align:right}.content{box-sizing:border-box;display:inline-block;flex:1 1 auto;font-size:var(
--spectrum-toast-info-text-size,var(--spectrum-global-dimension-font-size-100)
);font-weight:var(
--spectrum-toast-info-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:var(
--spectrum-toast-info-text-line-height,var(--spectrum-alias-component-text-line-height)
);padding-bottom:var(--spectrum-toast-content-padding-bottom);padding-top:var(
--spectrum-toast-neutral-content-padding-top,var(--spectrum-global-dimension-size-65)
)}.buttons{align-items:flex-start;display:flex;flex:0 0 auto}:host([dir=ltr]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=ltr]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=ltr]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=ltr]) .buttons slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .buttons .spectrum-ClearButton+.spectrum-ClearButton,:host([dir=rtl]) .buttons .spectrum-ClearButton+::slotted([slot=action]),:host([dir=rtl]) .buttons slot[name=action]+.spectrum-ClearButton,:host([dir=rtl]) .buttons slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-toast-neutral-button-gap-x,var(--spectrum-global-dimension-size-100)
)}.body{align-self:center;flex:1 1 auto}:host([dir=ltr]) .body ::slotted([slot=action]){float:right}:host([dir=rtl]) .body ::slotted([slot=action]){float:left}:host([dir=ltr]) .body ::slotted([slot=action]){margin-right:var(
--spectrum-toast-button-margin-right
)}:host([dir=rtl]) .body ::slotted([slot=action]){margin-left:var(
--spectrum-toast-button-margin-right
)}:host([dir=ltr]) .body+.buttons{padding-left:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) .body+.buttons{padding-right:var(
--spectrum-toast-neutral-padding-right,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr]) .body+.buttons{border-left-width:1px}:host([dir=rtl]) .body+.buttons{border-right-width:1px}:host([dir=ltr]) .body+.buttons{border-left-style:solid}:host([dir=rtl]) .body+.buttons{border-right-style:solid}:host{background-color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
);color:var(
--spectrum-toast-neutral-background-color,var(--spectrum-semantic-neutral-background-color-default)
)}.content{color:var(
--spectrum-toast-neutral-text-color,var(--spectrum-global-color-static-white)
)}.type{color:#fff}:host([dir=ltr]) .buttons{border-left-color:hsla(0,0%,100%,.2)}:host([dir=rtl]) .buttons{border-right-color:hsla(0,0%,100%,.2)}:host([variant=error]),:host([variant=negative]){background-color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
);color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=error]) .closeButton.focus-visible:not(:active),:host([variant=negative]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=error]) .closeButton:focus-visible:not(:active),:host([variant=negative]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-negative-background-color,var(--spectrum-semantic-negative-background-color)
)}:host([variant=info]){background-color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
);color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=info]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=info]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-info-background-color,var(--spectrum-semantic-informative-background-color)
)}:host([variant=positive]),:host([variant=success]){background-color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
);color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}:host([variant=positive]) .closeButton.focus-visible:not(:active),:host([variant=success]) .closeButton.focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}:host([variant=positive]) .closeButton:focus-visible:not(:active),:host([variant=success]) .closeButton:focus-visible:not(:active){color:var(
--spectrum-toast-positive-background-color,var(--spectrum-semantic-positive-background-color)
)}.content{line-height:1.5}:host(:not([open])){display:none}
`;var sr=ir;const ar=["negative","positive","info","error","warning"];class lt extends k{constructor(){super(...arguments),this.open=!1,this._timeout=null,this._variant="",this.countdownStart=0,this.nextCount=-1,this.doCountdown=t=>{this.countdownStart||(this.countdownStart=performance.now()),t-this.countdownStart>this._timeout?(this.shouldClose(),this.countdownStart=0):this.countdown()},this.countdown=()=>{cancelAnimationFrame(this.nextCount),this.nextCount=requestAnimationFrame(this.doCountdown)},this.holdCountdown=()=>{this.stopCountdown(),this.addEventListener("focusout",this.resumeCountdown)},this.resumeCountdown=()=>{this.removeEventListener("focusout",this.holdCountdown),this.countdown()}}static get styles(){return[sr]}set timeout(t){const r=typeof t!==null&&t>0?Math.max(6e3,t):null,o=this.timeout;r&&this.countdownStart&&(this.countdownStart=performance.now()),this._timeout=r,this.requestUpdate("timeout",o)}get timeout(){return this._timeout}set variant(t){if(t===this.variant)return;const e=this.variant;ar.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e)}get variant(){return this._variant}renderIcon(t){switch(t){case"info":return l`
                    <sp-icon-info
                        label="Information"
                        class="type"
                    ></sp-icon-info>
                `;case"negative":case"error":case"warning":return l`
                    <sp-icon-alert label="Error" class="type"></sp-icon-alert>
                `;case"positive":case"success":return l`
                    <sp-icon-checkmark-circle
                        label="Success"
                        class="type"
                    ></sp-icon-checkmark-circle>
                `;default:return l``}}startCountdown(){this.countdown(),this.addEventListener("focusin",this.holdCountdown)}stopCountdown(){cancelAnimationFrame(this.nextCount),this.countdownStart=0}shouldClose(){this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0,cancelable:!0}))&&this.close()}close(){this.open=!1}render(){return l`
            ${this.renderIcon(this.variant)}
            <div class="body" role="alert">
                <div class="content">
                    <slot></slot>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="buttons">
                <sp-close-button
                    @click=${this.shouldClose}
                    label="Close"
                    variant="white"
                ></sp-close-button>
            </div>
        `}updated(t){super.updated(t),t.has("open")&&(this.open?this.timeout&&this.startCountdown():this.timeout&&this.stopCountdown()),t.has("timeout")&&(this.timeout!==null&&this.open?this.startCountdown():this.stopCountdown())}}s([n({type:Boolean,reflect:!0})],lt.prototype,"open",void 0);s([n({type:Number})],lt.prototype,"timeout",null);s([n({type:String})],lt.prototype,"variant",null);customElements.define("sp-toast",lt);const nr=h`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){flex-shrink:0;max-height:100%}:host:after{border-radius:calc(var(
--spectrum-button-m-primary-fill-texticon-border-radius,
var(--spectrum-global-dimension-size-200)
) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;left:0;margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(.focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}:host(:focus-visible):after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-2)}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-button-primary-fill-textonly-text-padding-bottom:var(
--spectrum-button-s-primary-fill-textonly-text-padding-bottom
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-s-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-s-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-s-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-s-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-s-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-s-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-s-primary-fill-texticon-padding-left,var(--spectrum-global-dimension-size-125)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-s-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-s-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-s-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-675)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-s-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-s-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-s-primary-fill-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-text-padding-top:calc(var(
--spectrum-button-s-primary-fill-textonly-text-padding-top,
var(--spectrum-global-dimension-static-size-50)
) - 1px)}:host([size=m]){--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-m-primary-fill-texticon-padding-left
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-m-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-m-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-m-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-m-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-m-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-m-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-m-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-m-primary-fill-textonly-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-m-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-m-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-m-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-m-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-200)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-m-primary-fill-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:calc(var(
--spectrum-button-m-primary-fill-textonly-text-padding-bottom,
var(--spectrum-global-dimension-size-115)
) - 1px)}:host([size=l]){--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-l-primary-fill-textonly-text-padding-top
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-l-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-l-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-l-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-l-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-l-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-l-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-l-primary-fill-texticon-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-l-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:var(
--spectrum-button-l-primary-fill-textonly-text-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-l-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-l-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-1125)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-l-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-l-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-250)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-l-primary-fill-textonly-height,var(--spectrum-global-dimension-size-500)
)}:host([size=xl]){--spectrum-button-primary-fill-texticon-padding-left:var(
--spectrum-button-xl-primary-fill-texticon-padding-left
);--spectrum-button-primary-fill-texticon-text-size:var(
--spectrum-button-xl-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-button-primary-fill-texticon-text-font-weight:var(
--spectrum-button-xl-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
);--spectrum-button-primary-fill-texticon-text-line-height:var(
--spectrum-button-xl-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-button-primary-fill-texticon-icon-gap:var(
--spectrum-button-xl-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-button-primary-fill-texticon-focus-ring-size:var(
--spectrum-button-xl-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-button-primary-fill-texticon-border-size:var(
--spectrum-button-xl-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-texticon-border-radius:var(
--spectrum-button-xl-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-text-padding-top:var(
--spectrum-button-xl-primary-fill-textonly-text-padding-top,var(--spectrum-global-dimension-size-150)
);--spectrum-button-primary-fill-textonly-border-size:var(
--spectrum-button-xl-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-button-primary-fill-textonly-min-width:var(
--spectrum-button-xl-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-1250)
);--spectrum-button-primary-fill-textonly-padding-left:var(
--spectrum-button-xl-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-padding-right:var(
--spectrum-button-xl-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-300)
);--spectrum-button-primary-fill-textonly-height:var(
--spectrum-button-xl-primary-fill-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-button-primary-fill-textonly-text-padding-bottom:calc(var(
--spectrum-button-xl-primary-fill-textonly-text-padding-bottom,
var(--spectrum-global-dimension-size-175)
) - 1px)}:host{--spectrum-button-primary-fill-padding-left-adjusted:calc(var(--spectrum-button-primary-fill-texticon-padding-left) - var(--spectrum-button-primary-fill-texticon-border-size));--spectrum-button-primary-fill-textonly-padding-left-adjusted:calc(var(--spectrum-button-primary-fill-textonly-padding-left) - var(--spectrum-button-primary-fill-texticon-border-size));--spectrum-button-primary-fill-textonly-padding-right-adjusted:calc(var(--spectrum-button-primary-fill-textonly-padding-right) - var(--spectrum-button-primary-fill-texticon-border-size))}:host([dir=ltr]){padding-left:var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
);padding-right:var(
--spectrum-button-primary-fill-textonly-padding-right-adjusted
)}:host([dir=rtl]){padding-left:var(
--spectrum-button-primary-fill-textonly-padding-right-adjusted
);padding-right:var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
)}:host{--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-texticon-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
);border-radius:var(--spectrum-button-primary-fill-texticon-border-radius);border-style:solid;border-width:var(
--spectrum-button-primary-fill-texticon-border-size
);color:inherit;font-size:var(--spectrum-button-primary-fill-texticon-text-size);font-weight:var(--spectrum-button-primary-fill-texticon-text-font-weight);height:auto;min-height:var(--spectrum-button-primary-fill-textonly-height);min-width:var(--spectrum-button-primary-fill-textonly-min-width);padding-bottom:0;padding-top:0}:host(:hover),:host([active]){box-shadow:none}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
) - var(--spectrum-button-primary-fill-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(
--spectrum-button-primary-fill-textonly-padding-left-adjusted
) - var(--spectrum-button-primary-fill-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-button-primary-fill-texticon-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-button-primary-fill-texticon-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}:host:after{border-radius:calc(var(--spectrum-button-primary-fill-texticon-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
))}#label{line-height:var(
--spectrum-button-primary-fill-texticon-text-line-height
);padding-bottom:calc(var(--spectrum-button-primary-fill-textonly-text-padding-bottom) - var(--spectrum-button-primary-fill-textonly-border-size));padding-top:calc(var(--spectrum-button-primary-fill-textonly-text-padding-top) - var(--spectrum-button-primary-fill-textonly-border-size))}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) var(--spectrum-button-focus-ring-color)}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) var(--spectrum-button-focus-ring-color)}:host([variant=white]){--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-white-texticon-focus-ring-color-key-focus,var(--spectrum-global-color-static-white)
)}:host([variant=black]){--spectrum-button-focus-ring-color:var(
--spectrum-button-m-primary-fill-black-texticon-focus-ring-color-key-focus,var(--spectrum-global-color-static-black)
)}@media (forced-colors:active){:host{--spectrum-button-m-accent-fill-texticon-background-color:ButtonText;--spectrum-button-m-accent-fill-texticon-background-color-down:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-hover:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-key-focus:Highlight;--spectrum-button-m-accent-fill-texticon-text-color:ButtonFace;--spectrum-button-m-negative-outline-texticon-background-color:ButtonFace;--spectrum-button-m-negative-outline-texticon-background-color-down:ButtonFace;--spectrum-button-m-negative-outline-texticon-background-color-hover:ButtonFace;--spectrum-button-m-negative-outline-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-negative-outline-texticon-border-color:ButtonText;--spectrum-button-m-negative-outline-texticon-border-color-down:Highlight;--spectrum-button-m-negative-outline-texticon-border-color-hover:Highlight;--spectrum-button-m-negative-outline-texticon-border-color-key-focus:Highlight;--spectrum-button-m-negative-outline-texticon-text-color:ButtonText;--spectrum-button-m-negative-outline-texticon-text-color-down:ButtonText;--spectrum-button-m-negative-outline-texticon-text-color-hover:ButtonText;--spectrum-button-m-negative-outline-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-primary-outline-texticon-background-color:ButtonFace;--spectrum-button-m-primary-outline-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-outline-texticon-background-color-down:ButtonFace;--spectrum-button-m-primary-outline-texticon-background-color-hover:ButtonFace;--spectrum-button-m-primary-outline-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-primary-outline-texticon-border-color:ButtonText;--spectrum-button-m-primary-outline-texticon-border-color-disabled:GrayText;--spectrum-button-m-primary-outline-texticon-border-color-down:Highlight;--spectrum-button-m-primary-outline-texticon-border-color-hover:Highlight;--spectrum-button-m-primary-outline-texticon-border-color-key-focus:Highlight;--spectrum-button-m-primary-outline-texticon-text-color:ButtonText;--spectrum-button-m-primary-outline-texticon-text-color-down:ButtonText;--spectrum-button-m-primary-outline-texticon-text-color-hover:ButtonText;--spectrum-button-m-primary-outline-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-secondary-outline-texticon-background-color:ButtonFace;--spectrum-button-m-secondary-outline-texticon-background-color-down:ButtonFace;--spectrum-button-m-secondary-outline-texticon-background-color-hover:ButtonFace;--spectrum-button-m-secondary-outline-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-secondary-outline-texticon-border-color:ButtonText;--spectrum-button-m-secondary-outline-texticon-border-color-down:Highlight;--spectrum-button-m-secondary-outline-texticon-border-color-hover:Highlight;--spectrum-button-m-secondary-outline-texticon-border-color-key-focus:Highlight;--spectrum-button-m-secondary-outline-texticon-text-color:ButtonText;--spectrum-button-m-secondary-outline-texticon-text-color-down:ButtonText;--spectrum-button-m-secondary-outline-texticon-text-color-hover:ButtonText;--spectrum-button-m-secondary-outline-texticon-text-color-key-focus:ButtonText}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) Highlight}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) Highlight}:host{forced-color-adjust:none}:host([active]) .spectrum-Button--overBackground{color:ButtonText}}.spectrum-Button--overBackground:hover{color:ButtonText}.spectrum-Button--overBackground.focus-visible{color:ButtonText}.spectrum-Button--overBackground:focus-visible{color:ButtonText}:host(:not([variant=white]):not([variant=black])[disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-texticon-icon-color-disabled,var(--spectrum-global-color-gray-500)
)}:host(:not([variant=white]):not([variant=black])[disabled]) #label{color:var(
--spectrum-button-m-primary-fill-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
)}:host([variant=white][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-white-texticon-icon-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
)}:host([variant=white][disabled]) #label{color:var(
--spectrum-button-m-primary-fill-white-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
)}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-white-texticon-background-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])) #label{color:inherit}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-white-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-white-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=fill][disabled]){background-color:var(
--spectrum-button-m-secondary-fill-white-texticon-background-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-white-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-white-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline][disabled]){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-white-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-white-texticon-border-color,var(--spectrum-global-color-static-white)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-white-texticon-border-color,var(--spectrum-global-color-static-transparent-white-200)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
)}:host([variant=black][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-black-texticon-icon-color-disabled,var(--spectrum-global-color-static-transparent-black-500)
)}:host([variant=black][disabled]) #label{color:var(
--spectrum-button-m-primary-fill-black-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-black-500)
)}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-black-texticon-background-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])) #label{color:inherit}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-black-texticon-icon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-black-texticon-text-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=fill][disabled]){background-color:var(
--spectrum-button-m-secondary-fill-black-texticon-background-color-disabled,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline]:not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-black-texticon-icon-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline]:not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-black-texticon-text-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline][disabled]){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-black-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-black-texticon-border-color,var(--spectrum-global-color-static-black)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-black-texticon-border-color,var(--spectrum-global-color-static-transparent-black-200)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color,var(--spectrum-semantic-cta-background-color-default)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-fill-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-accent-fill-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-hover,var(--spectrum-semantic-cta-background-color-hover)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-down,var(--spectrum-semantic-cta-background-color-down)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color,var(--spectrum-global-color-static-red-600)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-fill-texticon-icon-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-negative-fill-texticon-text-color,var(--spectrum-global-color-static-white)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-hover,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-down,var(--spectrum-global-color-static-red-800)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-fill-texticon-icon-color,var(--spectrum-global-color-gray-50)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-primary-fill-texticon-text-color,var(--spectrum-global-color-gray-50)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color,var(--spectrum-global-color-gray-200)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-down,var(--spectrum-global-color-gray-400)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-secondary-fill-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=fill]:not([variant=white]):not([variant=black])[disabled]){background-color:var(
--spectrum-button-m-primary-fill-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
)}:host([treatment=fill][disabled]){border-color:var(
--spectrum-button-m-primary-fill-texticon-border-color-disabled,transparent
)}:host([treatment=fill]:not([disabled])){border-color:var(
--spectrum-button-m-primary-fill-texticon-border-color,transparent
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-hover,var(--spectrum-alias-transparent-blue-background-color-hover)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-down,var(--spectrum-alias-transparent-blue-background-color-down)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-down,var(--spectrum-semantic-emphasized-border-color-down)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
);border-color:var(
--spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
)}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-accent-outline-texticon-text-color,var(--spectrum-semantic-emphasized-border-color-default)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-hover,var(--spectrum-alias-transparent-red-background-color-hover)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-hover,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-down,var(--spectrum-alias-transparent-red-background-color-down)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-down,var(--spectrum-global-color-red-700)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
);border-color:var(
--spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
)}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-negative-outline-texticon-text-color,var(--spectrum-global-color-red-500)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-down,var(--spectrum-global-color-gray-400)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-primary-outline-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color,var(--spectrum-global-color-gray-300)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-hover,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-down,var(--spectrum-global-color-gray-400)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-down,var(--spectrum-global-color-gray-500)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-down,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
);border-color:var(
--spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
)}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
--spectrum-button-m-secondary-outline-texticon-text-color,var(--spectrum-global-color-gray-800)
)}:host([treatment=outline]:not([variant=white]):not([variant=black])[disabled]){background-color:var(
--spectrum-button-m-primary-outline-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-button-m-primary-outline-texticon-border-color-disabled,var(--spectrum-global-color-gray-200)
)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;var cr=nr;const lr=["accent","primary","secondary","negative","white","black"];class dt extends V(re){constructor(){super(...arguments),this._variant="accent",this.treatment="fill"}static get styles(){return[...super.styles,cr]}get variant(){return this._variant}set variant(t){if(t!==this.variant){switch(this.requestUpdate("variant",this.variant),t){case"cta":this._variant="accent";break;case"overBackground":this._variant="white",this.treatment="outline";break;default:lr.includes(t)?this._variant=t:this._variant="accent";break}this.setAttribute("variant",this.variant)}}set quiet(t){this.treatment=t?"outline":"fill"}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("variant")||this.setAttribute("variant",this.variant)}}s([n()],dt.prototype,"variant",null);s([n({reflect:!0})],dt.prototype,"treatment",void 0);s([n({type:Boolean})],dt.prototype,"quiet",null);customElements.define("sp-button",dt);const At=async(a,t,e,r)=>{const{Overlay:o}=await Promise.resolve().then(function(){return xo});return o.open(a,t,e,r)},dr=h`
:host([disabled]) ::slotted([slot=trigger]){pointer-events:none}#overlay-content slot{display:none}
`;var ur=dr;const mr={touch:"Double tap and long press for additional options",keyboard:"Press Space or Alt+Down Arrow for additional options",mouse:"Click and hold for additional options"};class L extends k{constructor(){super(...arguments),this.placement="bottom",this.offset=6,this.disabled=!1,this.hasLongpressContent=!1,this._longpressId="longpress-describedby-descriptor",this.abortOverlay=()=>{},this.openStatePromise=Promise.resolve()}static get styles(){return[ur]}handleClose(t){t&&t.detail.interaction!==this.open&&t.detail.interaction!==this.type||this.removeAttribute("open")}render(){return l`
            <slot
                id="trigger"
                @click=${this.onTrigger}
                @longpress=${this.onTrigger}
                @mouseenter=${this.onTrigger}
                @mouseleave=${this.onTrigger}
                @focusin=${this.onTrigger}
                @focusout=${this.onTrigger}
                @sp-closed=${this.handleClose}
                @slotchange=${this.onTargetSlotChange}
                name="trigger"
            ></slot>
            <div id="overlay-content">
                <slot
                    @slotchange=${this.onClickSlotChange}
                    name="click-content"
                ></slot>
                <slot
                    @slotchange=${this.onLongpressSlotChange}
                    name="longpress-content"
                ></slot>
                <slot
                    @slotchange=${this.onHoverSlotChange}
                    name="hover-content"
                ></slot>
                <slot name=${this._longpressId}></slot>
            </div>
        `}updated(t){if(super.updated(t),this.disabled&&t.has("disabled")){this.closeAllOverlays();return}t.has("open")&&this.manageOpen(),t.has("hasLongpressContent")&&this.manageLongpressDescriptor()}manageLongpressDescriptor(){const t=this.querySelector('[slot="trigger"]'),e=t.getAttribute("aria-describedby");let r=e?e.split(/\s+/):[];if(this.hasLongpressContent){this.longpressDescriptor||(this.longpressDescriptor=document.createElement("div"),this.longpressDescriptor.id=this._longpressId,this.longpressDescriptor.slot=this._longpressId);const o=Le()||ee()?"touch":"keyboard";this.longpressDescriptor.textContent=mr[o],this.appendChild(this.longpressDescriptor),r.push(this._longpressId)}else this.longpressDescriptor&&this.longpressDescriptor.remove(),r=r.filter(o=>o!==this._longpressId);r.length?t.setAttribute("aria-describedby",r.join(" ")):t.removeAttribute("aria-describedby")}closeAllOverlays(){this.abortOverlay&&this.abortOverlay(!0),["closeClickOverlay","closeHoverOverlay","closeLongpressOverlay"].forEach(async t=>{const e=this[t];e!=null&&(delete this[t],(await e)())})}manageOpen(){var t;({click:()=>this.onTriggerClick(),hover:()=>this.onTriggerMouseEnter(),longpress:()=>this.onTriggerLongpress(),none:()=>this.closeAllOverlays()})[(t=this.open)!==null&&t!==void 0?t:"none"]()}async openOverlay(t,e,r,o){return this.openStatePromise=new Promise(i=>this.openStateResolver=i),this.addEventListener("sp-opened",()=>{this.openStateResolver()},{once:!0}),L.openOverlay(t,e,r,o)}get overlayOptions(){return{offset:this.offset,placement:this.placement,receivesFocus:this.type&&this.type!=="inline"?"auto":void 0}}onTrigger(t){if(!this.disabled)switch(t.type){case"mouseenter":case"focusin":!this.open&&this.hoverContent&&(this.open="hover");return;case"mouseleave":case"focusout":this.open==="hover"&&this.handleClose();return;case"click":this.clickContent?this.open=t.type:this.closeHoverOverlay&&t.preventDefault();return;case"longpress":this.longpressContent&&(this._longpressEvent=t,this.open=t.type);return}}prepareToFocusOverlayContent(t){if(this.type!=="modal")return;It(t)||(t.tabIndex=0)}async onTriggerClick(){if(!this.targetContent||!this.clickContent||this.closeClickOverlay)return;const{targetContent:t,clickContent:e}=this;this.closeAllOverlays(),this.prepareToFocusOverlayContent(e),this.closeClickOverlay=this.openOverlay(t,this.type?this.type:"click",e,this.overlayOptions)}async onTriggerLongpress(){var t,e;if(!this.targetContent||!this.longpressContent||this.closeLongpressOverlay)return;const{targetContent:r,longpressContent:o}=this;this.closeAllOverlays(),this.prepareToFocusOverlayContent(o);const i=((e=(t=this._longpressEvent)===null||t===void 0?void 0:t.detail)===null||e===void 0?void 0:e.source)!=="keyboard";this.closeLongpressOverlay=this.openOverlay(r,this.type?this.type:"longpress",o,Object.assign(Object.assign({},this.overlayOptions),{receivesFocus:"auto",notImmediatelyClosable:i})),this._longpressEvent=void 0}async onTriggerMouseEnter(){if(!this.targetContent||!this.hoverContent||this.closeHoverOverlay)return;const t=new Promise(o=>{this.abortOverlay=o}),{targetContent:e,hoverContent:r}=this;this.closeHoverOverlay=this.openOverlay(e,"hover",r,Object.assign({abortPromise:t},this.overlayOptions))}onClickSlotChange(t){this.clickContent=this.extractSlotContentFromEvent(t),this.manageOpen()}onLongpressSlotChange(t){this.longpressContent=this.extractSlotContentFromEvent(t),this.hasLongpressContent=!!this.longpressContent||!!this.closeLongpressOverlay,this.manageOpen()}onHoverSlotChange(t){this.hoverContent=this.extractSlotContentFromEvent(t),this.manageOpen()}onTargetSlotChange(t){this.targetContent=this.extractSlotContentFromEvent(t)}extractSlotContentFromEvent(t){return t.target.assignedNodes({flatten:!0}).find(o=>o instanceof HTMLElement)}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.openStatePromise,t}disconnectedCallback(){this.closeAllOverlays(),super.disconnectedCallback()}}L.openOverlay=async(a,t,e,r)=>At(a,t,e,r);s([n({reflect:!0})],L.prototype,"placement",void 0);s([n()],L.prototype,"type",void 0);s([n({type:Number,reflect:!0})],L.prototype,"offset",void 0);s([n({reflect:!0})],L.prototype,"open",void 0);s([n({type:Boolean,reflect:!0})],L.prototype,"disabled",void 0);s([qt()],L.prototype,"hasLongpressContent",void 0);customElements.define("overlay-trigger",L);const pr=h`
:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-texticon-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host([placement*=bottom][open]){transform:translateY(var(--spectrum-overlay-animation-distance))}:host([placement*=top][open]){transform:translateY(calc(var(--spectrum-overlay-animation-distance)*-1))}:host([placement*=right][open]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([placement*=left][open]){transform:translateX(calc(var(--spectrum-overlay-animation-distance)*-1))}:host{--spectrum-popover-target-offset:13px;--spectrum-popover-dialog-padding:30px 29px;--spectrum-popover-dialog-min-width:270px;--spectrum-popover-min-width:var(--spectrum-global-dimension-size-400);--spectrum-popover-min-height:var(--spectrum-global-dimension-size-400)}:host{border-radius:var(
--spectrum-popover-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:solid;border-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;display:inline-flex;flex-direction:column;min-height:var(
--spectrum-popover-min-height,var(--spectrum-global-dimension-size-400)
);min-width:var(
--spectrum-popover-min-width,var(--spectrum-global-dimension-size-400)
);outline:none;position:absolute}#tip{position:absolute;-webkit-transform:translate(0)}#tip .triangle{stroke-linecap:square;stroke-linejoin:miter;stroke-width:var(
--spectrum-popover-border-size,var(--spectrum-alias-border-size-thin)
)}:host([dialog]){min-width:var(
--spectrum-popover-dialog-min-width
);padding:var(--spectrum-popover-dialog-padding)}:host([placement*=left][tip]){margin-right:var(
--spectrum-popover-target-offset
)}:host([placement*=left]) #tip{left:100%}:host([placement*=right][tip]){margin-left:var(
--spectrum-popover-target-offset
)}:host([placement*=right]) #tip{right:100%;transform:scaleX(-1)}:host([placement*=left]) #tip,:host([placement*=right]) #tip{margin-top:calc(var(--spectrum-global-dimension-size-150)*-1);top:50%}:host([placement*=bottom][tip]){margin-top:var(
--spectrum-popover-target-offset
)}:host([placement*=bottom]) #tip{bottom:100%;transform:scaleY(-1)}:host([placement*=top][tip]){margin-bottom:var(
--spectrum-popover-target-offset
)}:host([placement*=top]) #tip{top:100%}:host([placement*=bottom]) #tip,:host([placement*=top]) #tip{left:50%;margin-left:calc(var(--spectrum-global-dimension-size-150)*-1)}:host{background-color:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
);clip-path:inset(-30px -30px);filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));-webkit-filter:drop-shadow(0 1px 4px var(
--spectrum-popover-shadow-color,var(--spectrum-alias-dropshadow-color)
));will-change:filter}#tip .triangle{fill:var(
--spectrum-popover-background-color,var(--spectrum-global-color-gray-50)
);stroke:var(
--spectrum-popover-border-color,var(--spectrum-alias-border-color-dark)
)}:host{--sp-popover-tip-size:24px;min-width:min-content}:host([placement*=bottom]),:host([placement*=top]){max-height:100%}:host([placement*=left]),:host([placement*=right]){max-width:100%}::slotted(*){overscroll-behavior:contain}.tip{height:calc(var(--sp-popover-tip-size)/2);left:0;position:absolute;width:var(--sp-popover-tip-size)}:host([placement*=right]) #tip{transform:none}:host([placement*=bottom]) #tip{transform:none}:host([placement*=top]) .tip{top:100%}:host([placement*=bottom]) .tip{bottom:100%;transform:scaleY(-1)}:host([placement*=left]) .tip{transform:rotate(-90deg) translateY(-200%);transform-origin:100% 0}:host([placement*=right]) .tip{transform:rotate(90deg);transform-origin:0 0}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var hr=pr;class tt extends k{constructor(){super(...arguments),this.dialog=!1,this.open=!1,this.placement="none",this.tip=!1}static get styles(){return[hr]}renderTip(){return l`
            <div id="tip">
                <svg
                    xmlns="http://www.w3.org/svg/2000"
                    class="tip"
                    viewBox="0 0 24 12"
                >
                    <path
                        class="triangle"
                        d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"
                    ></path>
                </svg>
            </div>
        `}connectedCallback(){super.connectedCallback(),this.addEventListener("sp-overlay-query",this.onOverlayQuery)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("sp-overlay-query",this.onOverlayQuery)}onOverlayQuery(t){if(!t.target||t.target!==this)return;const r=this.shadowRoot.querySelector("#tip");r&&(t.detail.overlayContentTipElement=r)}render(){return l`
            <slot></slot>
            ${this.tip?this.renderTip():Z}
        `}}s([n({type:Boolean,reflect:!0})],tt.prototype,"dialog",void 0);s([n({type:Boolean,reflect:!0})],tt.prototype,"open",void 0);s([n({reflect:!0})],tt.prototype,"placement",void 0);s([n({type:Boolean,reflect:!0})],tt.prototype,"tip",void 0);customElements.define("sp-popover",tt);function br(a,t,e){const r=a.getAttribute(t);let o=r?r.split(/\s+/):[];o=o.filter(i=>!e.find(c=>i===c)),o.length?a.setAttribute(t,o.join(" ")):a.removeAttribute(t)}function vr(a,t,e){const r=Array.isArray(e)?e:[e],o=a.getAttribute(t),i=o?o.split(/\s+/):[];return r.every(d=>i.indexOf(d)>-1)?()=>{}:(i.push(...r),a.setAttribute(t,i.join(" ")),()=>br(a,t,r))}class ut{constructor(t,{mode:e}={mode:"internal"}){this.mode="internal",this.handleSlotchange=({target:r})=>{this.handleHelpText(r),this.handleNegativeHelpText(r)},this.host=t,this.instanceCount=ut.instanceCount++,this.id=`sp-help-text-${this.instanceCount}`,this.mode=e}get isInternal(){return this.mode==="internal"}render(t){return l`
            <div id=${v(this.isInternal?this.id:void 0)}>
                <slot
                    name=${t?"negative-help-text":`pass-through-help-text-${this.instanceCount}`}
                    @slotchange=${this.handleSlotchange}
                >
                    <slot name="help-text"></slot>
                </slot>
            </div>
        `}addId(){const t=this.helpTextElement?this.helpTextElement.id:this.id;this.conditionId=vr(this.host,"aria-describedby",t),this.host.hasAttribute("tabindex")&&(this.previousTabindex=parseFloat(this.host.getAttribute("tabindex"))),this.host.tabIndex=0}removeId(){this.conditionId&&(this.conditionId(),delete this.conditionId),!this.helpTextElement&&(this.previousTabindex?this.host.tabIndex=this.previousTabindex:this.host.removeAttribute("tabindex"))}handleHelpText(t){if(this.isInternal)return;this.helpTextElement&&this.helpTextElement.id===this.id&&this.helpTextElement.removeAttribute("id"),this.removeId();const r=t.assignedElements()[0];this.helpTextElement=r,r&&(r.id||(r.id=this.id),this.addId())}handleNegativeHelpText(t){if(t.name!=="negative-help-text")return;t.assignedElements().forEach(r=>r.variant="negative")}}ut.instanceCount=0;function gr(a,{mode:t}={mode:"internal"}){class e extends a{constructor(){super(...arguments),this.helpTextManager=new ut(this,{mode:t})}get helpTextId(){return this.helpTextManager.id}renderHelpText(o){return this.helpTextManager.render(o)}}return e}const fr=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3.5 9.5a.999.999 0 01-.774-.368l-2.45-3a1 1 0 111.548-1.264l1.657 2.028 4.68-6.01A1 1 0 019.74 2.114l-5.45 7a1 1 0 01-.777.386z"
    />
  </svg>`;class xr extends g{render(){return P(l),fr()}}customElements.define("sp-icon-checkmark100",xr);const yr=h`
:host{--spectrum-textfield-texticon-padding-left:var(
--spectrum-textfield-m-texticon-padding-left
);--spectrum-textfield-quiet-texticon-border-bottom-size:var(
--spectrum-textfield-m-quiet-texticon-border-bottom-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-quiet-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-quiet-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-quiet-texticon-border-radius:var(
--spectrum-textfield-m-quiet-texticon-border-radius,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-left:var(
--spectrum-textfield-m-quiet-texticon-padding-left,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-quiet-texticon-padding-right:var(
--spectrum-textfield-m-quiet-texticon-padding-right,var(--spectrum-global-dimension-size-0)
);--spectrum-textfield-texticon-border-size:var(
--spectrum-textfield-m-texticon-border-size,var(--spectrum-alias-input-border-size)
);--spectrum-textfield-texticon-text-line-height:var(
--spectrum-textfield-m-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-textfield-texticon-text-size:var(
--spectrum-textfield-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-textfield-texticon-placeholder-text-font-style:var(
--spectrum-textfield-m-texticon-placeholder-text-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-textfield-texticon-placeholder-text-font-weight:var(
--spectrum-textfield-m-texticon-placeholder-text-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-textfield-texticon-success-icon-height:var(
--spectrum-textfield-m-texticon-success-icon-height,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-width:var(
--spectrum-textfield-m-texticon-success-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-textfield-texticon-success-icon-margin-left:var(
--spectrum-textfield-m-texticon-success-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-invalid-icon-height:var(
--spectrum-textfield-m-texticon-invalid-icon-height,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-width:var(
--spectrum-textfield-m-texticon-invalid-icon-width,var(--spectrum-alias-ui-icon-alert-size-100)
);--spectrum-textfield-texticon-invalid-icon-margin-left:var(
--spectrum-textfield-m-texticon-invalid-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-min-width:var(
--spectrum-textfield-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-textfield-texticon-border-radius:var(
--spectrum-textfield-m-texticon-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-textfield-texticon-padding-right:var(
--spectrum-textfield-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textfield-texticon-height:var(
--spectrum-textfield-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textarea-text-padding-top:var(
--spectrum-textarea-m-text-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-textarea-text-padding-bottom:var(
--spectrum-textarea-m-text-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-textarea-padding-left:var(
--spectrum-textarea-m-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-padding-right:var(
--spectrum-textarea-m-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-textarea-height:var(
--spectrum-textarea-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-textfield-texticon-padding-top:3px;--spectrum-textfield-texticon-padding-bottom:5px;--spectrum-textfield-texticon-text-font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);--spectrum-textfield-texticon-icon-gap:var(
--spectrum-global-dimension-size-65
);--spectrum-textfield-quiet-texticon-icon-gap:var(
--spectrum-global-dimension-size-75
);--spectrum-textarea-min-height:var(--spectrum-textarea-height);--spectrum-textarea-height-adjusted:auto;--spectrum-textarea-padding-top:var(--spectrum-textarea-text-padding-top);--spectrum-textarea-padding-bottom:var(
--spectrum-textarea-text-padding-bottom
)}#textfield{display:inline-flex;min-width:var(--spectrum-textfield-texticon-min-width);position:relative;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([quiet][multiline]) #textfield .input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:after{border-color:transparent;border-radius:calc(var(--spectrum-textfield-texticon-border-radius) + var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
));bottom:0;content:"";left:0;margin:calc(var(
--spectrum-textfield-m-texticon-focus-ring-gap,
var(--spectrum-alias-input-focusring-gap)
)*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([quiet]) #textfield:after{border-radius:0}.input{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);height:var(--spectrum-textfield-texticon-height);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;padding:var(--spectrum-textfield-texticon-padding-top) var(--spectrum-textfield-texticon-padding-right) var(--spectrum-textfield-texticon-padding-bottom) calc(var(--spectrum-textfield-texticon-padding-left) + 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;width:100%}.input::placeholder{font-style:var(--spectrum-textfield-texticon-placeholder-text-font-style);font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
);opacity:1;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.input:lang(ja)::placeholder,.input:lang(ko)::placeholder,.input:lang(zh)::placeholder{font-style:normal}.input:hover::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input:disabled{opacity:1;resize:none}.input:disabled::placeholder{font-weight:var(
--spectrum-textfield-texticon-placeholder-text-font-weight
)}.input::-ms-clear{height:0;width:0}.input::-webkit-inner-spin-button,.input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.input:-moz-ui-invalid{box-shadow:none}:host([dir=ltr][valid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=rtl][valid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-success-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-success-icon-margin-left)
))}:host([dir=ltr][invalid]) #textfield .input{padding-right:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([dir=rtl][invalid]) #textfield .input{padding-left:calc(var(--spectrum-textfield-texticon-padding-right) + var(--spectrum-textfield-texticon-invalid-icon-width) + var(
--spectrum-textfield-icon-inline-end-override,
var(--spectrum-textfield-texticon-invalid-icon-margin-left)
))}:host([multiline]) .input{height:var(
--spectrum-textarea-height-adjusted
);min-height:var(--spectrum-textarea-min-height);overflow:auto;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px)}:host([dir=ltr][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=rtl][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-left
)}:host([dir=ltr][quiet]) .input{padding-right:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([dir=rtl][quiet]) .input{padding-left:var(
--spectrum-textfield-quiet-texticon-padding-right
)}:host([quiet]) .input{border-bottom-width:var(
--spectrum-textfield-quiet-texticon-border-bottom-size
);border-left-width:0;border-radius:var(
--spectrum-textfield-quiet-texticon-border-radius
);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}:host([dir=ltr][invalid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=rtl][invalid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-invalid-icon-width) + var(--spectrum-textfield-quiet-texticon-invalid-icon-margin-left))}:host([dir=ltr][valid][quiet]) .input{padding-right:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}:host([dir=rtl][valid][quiet]) .input{padding-left:calc(var(--spectrum-textfield-texticon-success-icon-width) + var(--spectrum-textfield-quiet-texticon-success-icon-margin-left))}.icon{pointer-events:all;position:absolute}:host([dir=ltr][quiet]) .icon{padding-right:0}:host([dir=rtl][quiet]) .icon{padding-left:0}:host([dir=ltr][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([dir=rtl][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-invalid-icon-margin-left)
)}:host([invalid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-invalid-icon-height)/2);height:var(--spectrum-textfield-texticon-invalid-icon-height);width:var(
--spectrum-textfield-texticon-invalid-icon-width
)}:host([dir=ltr][quiet][invalid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][invalid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([dir=rtl][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,var(--spectrum-textfield-texticon-success-icon-margin-left)
)}:host([valid]) #textfield .icon{bottom:calc(var(--spectrum-textfield-texticon-height)/2 - var(--spectrum-textfield-texticon-success-icon-height)/2);height:var(--spectrum-textfield-texticon-success-icon-height);width:var(
--spectrum-textfield-texticon-success-icon-width
)}:host([dir=ltr][quiet][valid]) #textfield .icon{right:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=rtl][quiet][valid]) #textfield .icon{left:var(
--spectrum-textfield-icon-inline-end-override,0
)}:host([dir=ltr]) .icon-workflow{left:var(
--spectrum-textfield-texticon-padding-left
)}:host([dir=rtl]) .icon-workflow{right:var(
--spectrum-textfield-texticon-padding-left
)}.icon-workflow{display:block;height:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
);position:absolute;top:calc(var(--spectrum-textfield-texticon-height)/2 - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
)/2);width:var(
--spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
)}:host([dir=ltr][quiet]) .icon-workflow{left:0}:host([dir=rtl][quiet]) .icon-workflow{right:0}:host([dir=ltr][quiet]) .icon-workflow~.input{padding-left:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=rtl][quiet]) .icon-workflow~.input{padding-right:calc(var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-quiet-texticon-icon-gap))}:host([dir=ltr]) .icon-workflow+.input{padding-left:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([dir=rtl]) .icon-workflow+.input{padding-right:calc(var(--spectrum-textfield-texticon-padding-left) + var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
) + var(--spectrum-textfield-texticon-icon-gap))}:host([multiline]) .icon-workflow~.input{height:var(
--spectrum-textfield-texticon-height
);min-height:var(--spectrum-textfield-texticon-height)}#textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
);box-shadow:none}#textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#textfield:hover .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#textfield:active .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}#textfield:active .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host([valid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-valid,var(--spectrum-semantic-positive-icon-color)
)}:host([invalid]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #textfield:hover .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-hover,var(--spectrum-alias-input-border-color-invalid-hover)
)}:host([disabled]) #textfield .icon{color:var(
--spectrum-textfield-m-texticon-validation-icon-color-invalid-disabled,var(--spectrum-alias-background-color-transparent)
)}:host([disabled]) #textfield .icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}.icon-workflow{color:var(
--spectrum-textfield-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host([focused]) #textfield:after{box-shadow:0 0 0 var(
--spectrum-textfield-m-texticon-focus-ring-border-width,var(--spectrum-alias-component-focusring-size)
) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}:host([focused][quiet]) #textfield .input{box-shadow:none}:host([focused][quiet]) #textfield:after{border-bottom:2px solid var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);bottom:calc(var(
--spectrum-alias-input-quiet-focusline-gap,
var(--spectrum-global-dimension-static-size-10)
)*-1);box-shadow:none;margin:0}.input{background-color:var(
--spectrum-textfield-m-texticon-background-color,var(--spectrum-global-color-gray-50)
);border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
);color:var(
--spectrum-textfield-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}.input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color,var(--spectrum-global-color-gray-600)
)}.input:focus,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-down,var(--spectrum-alias-input-border-color-down)
)}.input.focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}.input:focus-visible,:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid]) #textfield .input,:host([invalid]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}.input :disabled,:host([disabled]) #textfield .input,:host([disabled]) #textfield:hover .input{-webkit-text-fill-color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);background-color:var(
--spectrum-textfield-m-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
);border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
);color:var(
--spectrum-textfield-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}.input :disabled::placeholder,:host([disabled]) #textfield .input::placeholder,:host([disabled]) #textfield:hover .input::placeholder{color:var(
--spectrum-textfield-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.input:read-only,:host([readonly]) #textfield .input,:host([readonly]) #textfield:hover .input{-webkit-text-fill-color:var(--spectrum-global-color-gray-800);background-color:var(
--spectrum-alias-background-color-transparent,transparent
);border-color:var(
--spectrum-alias-background-color-transparent,transparent
);color:var(--spectrum-global-color-gray-800)}:host([quiet]) .input{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input.focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([focused][quiet]) #textfield .input,:host([quiet]) .input:focus-visible{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([invalid][quiet]) #textfield .input{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input.focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([focused][invalid][quiet]) #textfield .input,:host([invalid][quiet]) #textfield .input:focus-visible{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 1px 0 var(
--spectrum-textfield-m-quiet-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled][quiet]) #textfield .input,:host([disabled][quiet]) #textfield:hover .input,:host([quiet]) .input :disabled{background-color:var(
--spectrum-textfield-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host{display:inline-flex;flex-direction:column;width:var(
--spectrum-alias-single-line-width,var(--spectrum-global-dimension-size-2400)
)}:host([multiline]){resize:both}:host([multiline][readonly]){resize:none}#textfield{width:100%}#textfield,textarea{resize:inherit}.input{caret-color:var(--swc-test-caret-color);min-width:var(--spectrum-textfield-texticon-min-width)}:host([grows]) .input{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0}:host([grows]) #sizer{-webkit-appearance:none;-moz-appearance:textfield;border:var(--spectrum-textfield-texticon-border-size) solid;border-radius:var(--spectrum-textfield-texticon-border-radius);box-sizing:border-box;font-family:var(--spectrum-textfield-texticon-text-font-family);font-size:var(--spectrum-textfield-texticon-text-size);line-height:var(--spectrum-textfield-texticon-text-line-height);margin:0;outline:none;overflow:visible;overflow-wrap:break-word;padding:var(--spectrum-textarea-padding-top) var(--spectrum-textarea-padding-right) var(--spectrum-textarea-padding-bottom) calc(var(--spectrum-textarea-padding-left) - 1px);text-indent:0;text-overflow:ellipsis;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:top;white-space:pre-wrap;width:100%;word-break:break-word}:host([grows][quiet]) #sizer{border-bottom-width:var(--spectrum-textfield-quiet-texticon-border-size);border-left-width:0;border-radius:var(--spectrum-textfield-quiet-texticon-border-radius);border-right-width:0;border-top-width:0;overflow-y:hidden;resize:none}.icon,.icon-workflow{pointer-events:none}:host([multiline]) #textfield{display:inline-grid}:host([multiline]) textarea{transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([multiline][focused]:not([quiet])) textarea,:host([multiline][focused]:not([quiet]):hover) textarea{box-shadow:0 0 0 calc(var(
--spectrum-textfield-m-texticon-focus-ring-border-width,
var(--spectrum-alias-component-focusring-size)
)) var(
--spectrum-textfield-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)!important}:host([multiline]:not([quiet])) #textfield:after{box-shadow:none}
`;var kr=yr;const wr=h`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Checkmark50{height:var(--spectrum-alias-ui-icon-checkmark-size-50);width:var(
--spectrum-alias-ui-icon-checkmark-size-50
)}.spectrum-UIIcon-Checkmark75{height:var(--spectrum-alias-ui-icon-checkmark-size-75);width:var(
--spectrum-alias-ui-icon-checkmark-size-75
)}.spectrum-UIIcon-Checkmark100{height:var(--spectrum-alias-ui-icon-checkmark-size-100);width:var(
--spectrum-alias-ui-icon-checkmark-size-100
)}.spectrum-UIIcon-Checkmark200{height:var(--spectrum-alias-ui-icon-checkmark-size-200);width:var(
--spectrum-alias-ui-icon-checkmark-size-200
)}.spectrum-UIIcon-Checkmark300{height:var(--spectrum-alias-ui-icon-checkmark-size-300);width:var(
--spectrum-alias-ui-icon-checkmark-size-300
)}.spectrum-UIIcon-Checkmark400{height:var(--spectrum-alias-ui-icon-checkmark-size-400);width:var(
--spectrum-alias-ui-icon-checkmark-size-400
)}.spectrum-UIIcon-Checkmark500{height:var(--spectrum-alias-ui-icon-checkmark-size-500);width:var(
--spectrum-alias-ui-icon-checkmark-size-500
)}.spectrum-UIIcon-Checkmark600{height:var(--spectrum-alias-ui-icon-checkmark-size-600);width:var(
--spectrum-alias-ui-icon-checkmark-size-600
)}
`;var ie=wr;const zr=["text","url","tel","email","password"];class f extends gr(_){constructor(){super(...arguments),this.allowedKeys="",this.focused=!1,this.invalid=!1,this.label="",this.placeholder="",this._type="text",this.grows=!1,this.maxlength=-1,this.minlength=-1,this.multiline=!1,this.readonly=!1,this.valid=!1,this._value="",this.quiet=!1,this.required=!1}static get styles(){return[kr,ie]}get type(){var t;return(t=zr.find(e=>e===this._type))!==null&&t!==void 0?t:"text"}set type(t){const e=this._type;this._type=t,this.requestUpdate("type",e)}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}get focusElement(){return this.inputElement}setSelectionRange(t,e,r="none"){this.inputElement.setSelectionRange(t,e,r)}select(){this.inputElement.select()}handleInput(){if(this.allowedKeys&&this.inputElement.value&&!new RegExp(`^[${this.allowedKeys}]*$`,"u").test(this.inputElement.value)){const r=this.inputElement.selectionStart-1;this.inputElement.value=this.value.toString(),this.inputElement.setSelectionRange(r,r);return}this.value=this.inputElement.value}handleChange(){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}onFocus(){this.focused=!this.readonly&&!0}onBlur(){this.focused=!this.readonly&&!1}renderStateIcons(){return this.invalid?l`
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            `:this.valid?l`
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            `:Z}get displayValue(){return this.value.toString()}get renderMultiline(){return l`
            ${this.grows&&!this.quiet?l`
                      <div id="sizer">${this.value}&#8203;</div>
                  `:Z}
            <!-- @ts-ignore -->
            <textarea
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${v(this.invalid||void 0)}
                class="input"
                maxlength=${v(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${v(this.minlength>-1?this.minlength:void 0)}
                pattern=${v(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${v(this.autocomplete)}
            ></textarea>
        `}get renderInput(){return l`
            <!-- @ts-ignore -->
            <input
                type=${this.type}
                aria-describedby=${this.helpTextId}
                aria-label=${this.label||this.placeholder}
                aria-invalid=${v(this.invalid||void 0)}
                class="input"
                maxlength=${v(this.maxlength>-1?this.maxlength:void 0)}
                minlength=${v(this.minlength>-1?this.minlength:void 0)}
                pattern=${v(this.pattern)}
                placeholder=${this.placeholder}
                .value=${he(this.displayValue)}
                @change=${this.handleChange}
                @input=${this.handleInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${v(this.autocomplete)}
            />
        `}renderField(){return l`
            ${this.renderStateIcons()}
            ${this.multiline?this.renderMultiline:this.renderInput}
        `}render(){return l`
            <div id="textfield">${this.renderField()}</div>
            ${this.renderHelpText(this.invalid)}
        `}updated(t){(t.has("value")||t.has("required")&&this.required)&&this.checkValidity()}checkValidity(){let t=this.inputElement.checkValidity();return(this.required||this.value&&this.pattern)&&((this.disabled||this.multiline)&&this.pattern&&(t=new RegExp(`^${this.pattern}$`,"u").test(this.value.toString())),typeof this.minlength!="undefined"&&(t=t&&this.value.toString().length>this.minlength),this.valid=t,this.invalid=!t),t}}s([n({attribute:"allowed-keys"})],f.prototype,"allowedKeys",void 0);s([n({type:Boolean,reflect:!0})],f.prototype,"focused",void 0);s([y(".input")],f.prototype,"inputElement",void 0);s([n({type:Boolean,reflect:!0})],f.prototype,"invalid",void 0);s([n()],f.prototype,"label",void 0);s([n()],f.prototype,"placeholder",void 0);s([n({attribute:"type",reflect:!0})],f.prototype,"_type",void 0);s([qt()],f.prototype,"type",null);s([n()],f.prototype,"pattern",void 0);s([n({type:Boolean,reflect:!0})],f.prototype,"grows",void 0);s([n({type:Number})],f.prototype,"maxlength",void 0);s([n({type:Number})],f.prototype,"minlength",void 0);s([n({type:Boolean,reflect:!0})],f.prototype,"multiline",void 0);s([n({type:Boolean,reflect:!0})],f.prototype,"readonly",void 0);s([n({type:Boolean,reflect:!0})],f.prototype,"valid",void 0);s([n({type:String})],f.prototype,"value",null);s([n({type:Boolean,reflect:!0})],f.prototype,"quiet",void 0);s([n({type:Boolean,reflect:!0})],f.prototype,"required",void 0);s([n({type:String,reflect:!0})],f.prototype,"autocomplete",void 0);class se extends f{constructor(){super(...arguments),this._value=""}set value(t){if(t===this.value)return;const e=this._value;this._value=t,this.requestUpdate("value",e)}get value(){return this._value}}s([n({type:String})],se.prototype,"value",null);customElements.define("sp-textfield",se);const Cr=h`
:host{border-radius:var(
--spectrum-dropzone-border-radius,var(--spectrum-alias-border-radius-regular)
);border-style:dashed;border-width:var(
--spectrum-dropzone-border-width,var(--spectrum-alias-border-size-thick)
);padding:var(
--spectrum-dropzone-padding,var(--spectrum-global-dimension-size-900)
);text-align:center}:host([dragged]){border-style:solid}:host(:focus){border-style:dashed;outline:0}:host(:focus.focus-visible){border-style:solid}:host(:focus:focus-visible){border-style:solid}:host{border-color:var(
--spectrum-dropzone-border-color,var(--spectrum-global-color-gray-300)
)}:host([dragged]){background-color:var(
--spectrum-dropzone-background-color-selected-hover,var(--spectrum-alias-highlight-selected)
);border-color:var(
--spectrum-dropzone-border-color-selected-hover,var(--spectrum-global-color-blue-400)
)}:host([dragged]) ::slotted(*){color:var(
--spectrum-global-color-blue-400
)}:host(:focus){border-color:var(
--spectrum-dropzone-border-color,var(--spectrum-global-color-gray-300)
)}:host(:focus) ::slotted(*){color:var(
--spectrum-global-color-static-gray-500,rgb(var(--spectrum-global-color-static-gray-500-rgb))
)}:host(:focus.focus-visible){border-color:var(
--spectrum-dropzone-border-color-selected-hover,var(--spectrum-global-color-blue-400)
)}:host(:focus:focus-visible){border-color:var(
--spectrum-dropzone-border-color-selected-hover,var(--spectrum-global-color-blue-400)
)}:host(:focus[dragged].focus-visible) ::slotted(*){color:var(
--spectrum-global-color-blue-400
)}:host(:focus[dragged]:focus-visible) ::slotted(*){color:var(
--spectrum-global-color-blue-400
)}:host{--spectrum-dropzone-illustration-color:var(
--spectrum-global-color-static-blue-400
);display:block}::slotted(*){font-family:var(
--spectrum-body-m-text-font-family,var(--spectrum-alias-body-text-font-family)
);font-size:var(
--spectrum-body-s-text-size,var(--spectrum-alias-font-size-default)
);font-style:var(
--spectrum-body-s-text-font-style,var(--spectrum-global-font-style-regular)
);font-weight:var(
--spectrum-body-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);letter-spacing:var(
--spectrum-body-s-text-letter-spacing,var(--spectrum-global-font-letter-spacing-none)
);line-height:var(
--spectrum-body-s-text-line-height,var(--spectrum-alias-body-text-line-height)
);margin-bottom:0;margin-top:0;text-transform:var(--spectrum-body-s-text-transform,none)}:host([dragged]) ::slotted(*){--spectrum-global-color-gray-500:var(
--spectrum-dropzone-illustration-color
)}
`;var qr=Cr;class ae extends k{constructor(){super(...arguments),this._dropEffect="copy",this.isDragged=!1,this.debouncedDragLeave=null}static get styles(){return[qr]}get dropEffect(){return this._dropEffect}set dropEffect(t){["copy","move","link","none"].includes(t)&&(this._dropEffect=t)}connectedCallback(){super.connectedCallback(),this.addEventListener("drop",this.onDrop),this.addEventListener("dragover",this.onDragOver),this.addEventListener("dragleave",this.onDragLeave)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("drop",this.onDrop),this.removeEventListener("dragover",this.onDragOver),this.removeEventListener("dragleave",this.onDragLeave)}onDragOver(t){const e=new CustomEvent("sp-dropzone-should-accept",{bubbles:!0,cancelable:!0,composed:!0,detail:t}),r=this.dispatchEvent(e);if(!t.dataTransfer)return;if(!r){t.dataTransfer.dropEffect="none";return}t.preventDefault(),this.clearDebouncedDragLeave(),this.isDragged=!0,t.dataTransfer.dropEffect=this.dropEffect;const o=new CustomEvent("sp-dropzone-dragover",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(o)}onDragLeave(t){this.clearDebouncedDragLeave(),this.debouncedDragLeave=window.setTimeout(()=>{this.isDragged=!1;const e=new CustomEvent("sp-dropzone-dragleave",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(e)},100)}onDrop(t){t.preventDefault(),this.clearDebouncedDragLeave(),this.isDragged=!1;const e=new CustomEvent("sp-dropzone-drop",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(e)}render(){return l`
            <slot></slot>
        `}clearDebouncedDragLeave(){this.debouncedDragLeave&&(clearTimeout(this.debouncedDragLeave),this.debouncedDragLeave=null)}}s([n({type:Boolean,reflect:!0,attribute:"dragged"})],ae.prototype,"isDragged",void 0);customElements.define("sp-dropzone",ae);class mt extends _{constructor(){super(...arguments),this.checked=!1,this.readonly=!1}get focusElement(){return this.inputElement}handleChange(t){if(this.readonly){this.inputElement.checked=this.checked;return}this.checked=this.inputElement.checked;const e=new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable});this.dispatchEvent(e)}render(){return l`
            <input
                id="input"
                aria-labelledby="label"
                type="checkbox"
                .checked=${this.checked}
                @change=${this.handleChange}
            />
        `}}s([n({type:Boolean,reflect:!0})],mt.prototype,"checked",void 0);s([n({type:Boolean,reflect:!0})],mt.prototype,"readonly",void 0);s([y("#input")],mt.prototype,"inputElement",void 0);const Ir=h`
:host{--spectrum-switch-handle-size:var(
--spectrum-switch-m-handle-size,var(--spectrum-alias-control-two-size-m)
);--spectrum-switch-handle-border-size:var(
--spectrum-switch-m-handle-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-switch-handle-border-radius:var(
--spectrum-switch-m-handle-border-radius,var(--spectrum-alias-control-two-border-radius-m)
);--spectrum-switch-text-gap:var(
--spectrum-switch-m-text-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-switch-text-size:var(
--spectrum-switch-m-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-switch-track-height:var(
--spectrum-switch-m-track-height,var(--spectrum-alias-control-three-height-m)
);--spectrum-switch-track-width:var(
--spectrum-switch-m-track-width,var(--spectrum-alias-control-three-width-m)
);--spectrum-switch-cursor-hit-x:var(
--spectrum-switch-m-cursor-hit-x,var(--spectrum-global-dimension-size-100)
);--spectrum-switch-height:var(
--spectrum-switch-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-switch-label-margin-top:var(
--spectrum-global-dimension-size-65
);--spectrum-switch-label-line-height:1.49}:host([dir=ltr]){margin-right:calc(var(--spectrum-switch-cursor-hit-x)*2)}:host([dir=rtl]){margin-left:calc(var(--spectrum-switch-cursor-hit-x)*2)}:host{align-items:flex-start;display:inline-flex;max-width:100%;min-height:var(--spectrum-switch-height);position:relative;vertical-align:top}:host([dir=ltr]) #input{left:0}:host([dir=rtl]) #input{right:0}#input{box-sizing:border-box;cursor:pointer;height:100%;margin:0;opacity:0;padding:0;position:absolute;top:0;width:100%;z-index:1}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - 100%))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc((var(--spectrum-switch-track-width) - 100%)*-1))}#input[disabled],:host([disabled]) #input{cursor:default}#input.focus-visible+#switch:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#input:focus-visible+#switch:after{margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1)}#label{font-size:var(--spectrum-switch-text-size);line-height:var(--spectrum-switch-label-line-height);margin-bottom:0;margin-left:var(--spectrum-switch-text-gap);margin-right:var(--spectrum-switch-text-gap);margin-top:var(--spectrum-switch-label-margin-top);transition:color var(--spectrum-global-animation-duration-200,.16s) ease-in-out}:host([dir=ltr]) #switch{left:0}:host([dir=rtl]) #switch{right:0}:host([dir=ltr]) #switch{right:0}:host([dir=rtl]) #switch{left:0}#switch{border-radius:calc(var(--spectrum-switch-track-height)/2);box-sizing:border-box;display:inline-block;flex-grow:0;flex-shrink:0;height:var(--spectrum-switch-track-height);margin-bottom:calc((var(--spectrum-switch-height) - var(--spectrum-switch-track-height))/2);margin-left:0;margin-right:0;margin-top:calc((var(--spectrum-switch-height) - var(--spectrum-switch-track-height))/2);position:relative;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out;vertical-align:middle;width:var(--spectrum-switch-track-width)}#switch:before{box-sizing:border-box;content:"";display:block;position:absolute}:host([dir=ltr]) #switch:before{left:0}:host([dir=rtl]) #switch:before{right:0}#switch:before{border-radius:var(--spectrum-switch-handle-border-radius);border-style:solid;border-width:var(--spectrum-switch-handle-border-size);height:var(--spectrum-switch-handle-size);top:0;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-switch-handle-size)}:host([dir=ltr]) #switch:after{left:0}:host([dir=rtl]) #switch:after{right:0}:host([dir=ltr]) #switch:after{right:0}:host([dir=rtl]) #switch:after{left:0}#switch:after{border-radius:calc(var(--spectrum-switch-track-height) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;content:"";display:block;margin:0;position:absolute;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}#switch{background-color:var(
--spectrum-switch-m-track-color,var(--spectrum-global-color-gray-300)
)}#switch:before{background-color:var(
--spectrum-switch-m-handle-background-color,var(--spectrum-global-color-gray-75)
);border-color:var(
--spectrum-switch-m-handle-border-color,var(--spectrum-alias-toggle-border-color-default)
)}#input~#label{color:var(
--spectrum-switch-m-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([checked]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host([checked]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected,var(--spectrum-alias-toggle-background-color-default)
)}:host(:hover) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-hover,var(--spectrum-alias-toggle-border-color-hover)
);box-shadow:none}:host(:hover) #input~#label{color:var(
--spectrum-switch-m-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:hover[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:hover[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-hover)
)}:host(:active) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-down,var(--spectrum-alias-toggle-border-color-down)
)}:host(:active) #input~#label{color:var(
--spectrum-switch-m-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host(:active[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host(:active[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-down,var(--spectrum-alias-toggle-background-color-down)
)}:host([disabled]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled]) #input~#label{color:var(
--spectrum-switch-m-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([disabled][checked][dir]) #input+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled][checked][dir]) #input+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled][checked][dir]) #input~#label{color:var(
--spectrum-switch-m-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([emphasized][checked]) #input+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized][checked]) #input+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected,var(
--spectrum-alias-toggle-background-color-emphasized-selected-default
)
)}:host([emphasized][checked]:hover) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized][checked]:hover) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-hover,var(--spectrum-alias-toggle-background-color-emphasized-selected-hover)
)}:host([emphasized]:active[checked]) #input:enabled+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}:host([emphasized]:active[checked]) #input:enabled+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-down,var(--spectrum-alias-toggle-background-color-emphasized-selected-down)
)}#input.focus-visible+#switch:after,:host(:hover) #input.focus-visible+#switch:after{box-shadow:0 0 0 var(
--spectrum-switch-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-switch-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#input:focus-visible+#switch:after,:host(:hover) #input:focus-visible+#switch:after{box-shadow:0 0 0 var(
--spectrum-switch-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(
--spectrum-switch-m-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#input.focus-visible+#switch:before,:host(:hover) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}#input:focus-visible+#switch:before,:host(:hover) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-key-focus,var(--spectrum-alias-toggle-border-color-key-focus)
)}:host(:hover[checked]) #input.focus-visible+#switch,:host([checked]) #input.focus-visible+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input:focus-visible+#switch,:host([checked]) #input:focus-visible+#switch{background-color:var(
--spectrum-switch-m-track-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input.focus-visible+#switch:before,:host([checked]) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host(:hover[checked]) #input:focus-visible+#switch:before,:host([checked]) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-handle-border-color-selected-key-focus,var(--spectrum-alias-toggle-background-color-key-focus)
)}:host([emphasized][checked]) #input.focus-visible+#switch,:host([emphasized][checked]:hover) #input.focus-visible+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input:focus-visible+#switch,:host([emphasized][checked]:hover) #input:focus-visible+#switch{background-color:var(
--spectrum-switch-m-emphasized-track-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input.focus-visible+#switch:before,:host([emphasized][checked]:hover) #input.focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host([emphasized][checked]) #input:focus-visible+#switch:before,:host([emphasized][checked]:hover) #input:focus-visible+#switch:before{border-color:var(
--spectrum-switch-m-emphasized-handle-border-color-selected-key-focus,var(
--spectrum-alias-toggle-background-color-emphasized-selected-key-focus
)
)}:host{--spectrum-switch-label-margin-top:var(
--spectrum-global-dimension-size-65,5px
);--spectrum-switch-track-width:var(--spectrum-global-dimension-size-325);--spectrum-switch-handle-border-radius:50%}:host([disabled]){pointer-events:none}:host([dir=ltr][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-track-width) - var(--spectrum-switch-handle-size)))}:host([dir=rtl][checked]) #input+#switch:before{transform:translateX(calc(var(--spectrum-switch-handle-size) - var(--spectrum-switch-track-width)))}
`;var Ot=Ir;const Er=h`
#switch:before{transition:background var(--spectrum-global-animation-duration-100,.13s) ease-in-out,border var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}
`;var Sr=Er;class ne extends mt{constructor(){super(...arguments),this.emphasized=!1}static get styles(){return window.hasOwnProperty("ShadyDOM")?[Ot,Sr]:[Ot]}render(){return l`
            ${super.render()}
            <span id="switch"></span>
            <label id="label" for="input"><slot></slot></label>
        `}firstUpdated(t){super.firstUpdated(t),this.inputElement.setAttribute("role","switch")}updated(t){t.has("checked")&&this.inputElement.setAttribute("aria-checked",this.checked?"true":"false")}}s([n({type:Boolean,reflect:!0})],ne.prototype,"emphasized",void 0);customElements.define("sp-switch",ne);const W=["",()=>{}];class Ar extends ve{constructor(){super(...arguments),this.start=W,this.streamInside=W,this.end=W,this.streamOutside=W,this.state="off",this.handleStart=t=>{this.callHandler(this.start[1],t),!t.defaultPrevented&&(this.removeListeners(),this.addListeners("on"))},this.handleStream=t=>{this.callHandler(this.streamInside[1],t)},this.handleEnd=t=>{this.callHandler(this.end[1],t),this.removeListeners(),this.addListeners("off")},this.handleBetween=t=>{this.callHandler(this.streamOutside[1],t)}}render(t){return Z}update(t,[{start:e,end:r,streamInside:o=W,streamOutside:i=W}]){var c;this.element!==t.element&&(this.element=t.element,this.removeListeners()),this.host=((c=t.options)===null||c===void 0?void 0:c.host)||this.element,this.start=e,this.end=r,this.streamInside=o,this.streamOutside=i,this.addListeners()}addListeners(t){this.state=t||this.state,this.state==="off"?(this.addListener(this.streamOutside[0],this.handleBetween),this.addListener(this.start[0],this.handleStart)):this.state==="on"&&(this.addListener(this.streamInside[0],this.handleStream),this.addListener(this.end[0],this.handleEnd))}callHandler(t,e){typeof t=="function"?t.call(this.host,e):t.handleEvent(e)}addListener(t,e){Array.isArray(t)?t.map(r=>{this.element.addEventListener(r,e)}):this.element.addEventListener(t,e)}removeListener(t,e){Array.isArray(t)?t.map(r=>{this.element.removeEventListener(r,e)}):this.element.removeEventListener(t,e)}removeListeners(){this.removeListener(this.start[0],this.handleStart),this.removeListener(this.streamInside[0],this.handleStream),this.removeListener(this.end[0],this.handleEnd),this.removeListener(this.streamOutside[0],this.handleBetween)}disconnected(){this.removeListeners()}reconnected(){this.addListeners()}}const pt=be(Ar),Tr=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M7.482 4.406l-.001-.001L3.86.783a.84.84 0 00-1.188 1.188L5.702 5l-3.03 3.03A.84.84 0 003.86 9.216l3.621-3.622h.001a.84.84 0 000-1.19z"
    />
  </svg>`;class $r extends g{render(){return P(l),Tr()}}customElements.define("sp-icon-chevron75",$r);const _r=h`
:host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;border-style:solid;box-sizing:border-box;cursor:pointer;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);justify-content:center;line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);margin:0;overflow:visible;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){max-height:100%}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([variant=black]:not([quiet])[disabled]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-disabled,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet])[disabled][selected]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-disabled-selected,transparent
)}:host([variant=black]:not([quiet])[disabled]:not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-disabled,transparent
)}:host([variant=black]:not([quiet]):not([disabled])){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-default,rgba(0,0,0,.4)
)}:host([variant=black]:not([quiet]):not([disabled]):hover){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-hover,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled])[active]){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-down,rgba(0,0,0,.7)
)}:host([variant=black]:not([quiet]):not([disabled]).focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]):focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]).is-keyboardFocused){border-color:var(
--spectrum-alias-actionbutton-staticBlack-border-color-key-focus,rgba(0,0,0,.55)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-default,transparent
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]):hover){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-hover,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected])[active]){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-down,rgba(0,0,0,.4)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]).focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]):focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black]:not([quiet]):not([disabled]):not([selected]).is-keyboardFocused){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-key-focus,rgba(0,0,0,.25)
)}:host([variant=black][quiet][disabled]){border-color:transparent}:host([variant=black][quiet][disabled]:not([selected])){background-color:transparent}:host([variant=black][quiet]:not([disabled])){border-color:transparent}:host([variant=black][quiet]:not([disabled]):not([selected])){background-color:var(
--spectrum-alias-component-background-color-quiet-default,var(--spectrum-alias-background-color-transparent)
)}:host([variant=black][quiet]:not([disabled]):not([selected]):hover){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected])[active]){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][quiet]:not([disabled]):not([selected]).focus-visible){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected]):focus-visible){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-25))}:host([variant=black][quiet]:not([disabled]):not([selected]).is-keyboardFocused){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-25))}:host([size][variant=black][disabled][selected]){background-color:var(
--spectrum-alias-actionbutton-staticBlack-background-color-disabled-selected,rgba(0,0,0,.1)
)}:host([size][variant=black][disabled][selected]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([size][variant=black][disabled][selected]) #label{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([size][variant=black][disabled][selected]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) #label{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][disabled]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-40))}:host([variant=black][selected]:not([disabled])){background-color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-90))}:host([variant=black][selected]:not([disabled]):hover){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled])[active]){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled]).focus-visible){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled]):focus-visible){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black][selected]:not([disabled])) .hold-affordance{color:inherit}:host([variant=black][selected]:not([disabled])) #label{color:inherit}:host([variant=black][selected]:not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=black]) .hold-affordance{color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=black]:not([disabled]):not([selected])) .hold-affordance{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-90))}:host([variant=black]:not([disabled]):not([selected]):hover) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):hover) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):hover) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected])[active]) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected])[active]) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected])[active]) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) .hold-affordance{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) #label{color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([variant=black]:not([disabled]):not([selected])) #label{color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-90))}:host([variant=black]:not([disabled]):not([selected])) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-black-rgb,0,0,0),var(--spectrum-global-color-opacity-90))}:host([variant=black]) #label{color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=black]) ::slotted([slot=icon]){color:var(
--spectrum-ActionButton-static-black-color
)}:host([variant=white]:not([quiet])[disabled]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-disabled,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet])[disabled][selected]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-disabled-selected,transparent
)}:host([variant=white]:not([quiet])[disabled]:not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-disabled,transparent
)}:host([variant=white]:not([quiet]):not([disabled])){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-default,hsla(0,0%,100%,.4)
)}:host([variant=white]:not([quiet]):not([disabled]):hover){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-hover,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled])[active]){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-down,hsla(0,0%,100%,.7)
)}:host([variant=white]:not([quiet]):not([disabled]).focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]):focus-visible){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]).is-keyboardFocused){border-color:var(
--spectrum-alias-actionbutton-staticWhite-border-color-key-focus,hsla(0,0%,100%,.55)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected])){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-default,transparent
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]):hover){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-hover,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected])[active]){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-down,hsla(0,0%,100%,.4)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]).focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]):focus-visible){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white]:not([quiet]):not([disabled]):not([selected]).is-keyboardFocused){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-key-focus,hsla(0,0%,100%,.25)
)}:host([variant=white][quiet][disabled]){border-color:transparent}:host([variant=white][quiet][disabled]:not([selected])){background-color:transparent}:host([variant=white][quiet]:not([disabled])){border-color:transparent}:host([variant=white][quiet]:not([disabled]):not([selected])){background-color:var(
--spectrum-alias-component-background-color-quiet-default,var(--spectrum-alias-background-color-transparent)
)}:host([variant=white][quiet]:not([disabled]):not([selected]):hover){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected])[active]){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][quiet]:not([disabled]):not([selected]).focus-visible){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected]):focus-visible){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-25))}:host([variant=white][quiet]:not([disabled]):not([selected]).is-keyboardFocused){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-25))}:host([variant=white][disabled][selected]){background-color:var(
--spectrum-alias-actionbutton-staticWhite-background-color-disabled-selected,hsla(0,0%,100%,.1)
)}:host([variant=white][disabled][selected]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled][selected]) #label{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled][selected]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) #label{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][disabled]) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-40))}:host([variant=white][selected]:not([disabled])){background-color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-90))}:host([variant=white][selected]:not([disabled]):hover){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled])[active]){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled]).focus-visible){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled]):focus-visible){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled]).is-keyboardFocused){background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white][selected]:not([disabled])) .hold-affordance{color:inherit}:host([variant=white][selected]:not([disabled])) #label{color:inherit}:host([variant=white][selected]:not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=white]) .hold-affordance{color:var(
--spectrum-ActionButton-static-white-color
)}:host([variant=white]:not([disabled]):not([selected])) .hold-affordance{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-90))}:host([variant=white]:not([disabled]):not([selected]):hover) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):hover) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):hover) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected])[active]) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected])[active]) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected])[active]) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]):focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) .hold-affordance{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) #label{color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=white]:not([disabled]):not([selected])) #label{color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-90))}:host([variant=white]:not([disabled]):not([selected])) ::slotted([slot=icon]){color:rgba(var(--spectrum-global-color-static-white-rgb,255,255,255),var(--spectrum-global-color-opacity-90))}:host([variant=white]) #label{color:var(
--spectrum-ActionButton-static-white-color
)}:host([variant=white]) ::slotted([slot=icon]){color:var(
--spectrum-ActionButton-static-white-color
)}:host([size=s]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-s-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-s-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-s-texticon-padding-left,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-s-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-s-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-s-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-s-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-s-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-s-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-40)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-s-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-40)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-s-textonly-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-s-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-s-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-s-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-s-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-s-textonly-padding-right,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-s-textonly-padding-left,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-s-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-s-icononly-padding-right,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-s-icononly-padding-left,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-global-dimension-size-300
)}:host([size=m]){--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-m-texticon-padding-left
);--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-m-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-m-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-m-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-m-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-m-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-m-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-m-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-m-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-50)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-m-textonly-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-m-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-m-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-m-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-m-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-m-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-m-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-m-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-m-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-m-icononly-padding-right,var(--spectrum-global-dimension-size-85)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-m-icononly-padding-left,var(--spectrum-global-dimension-size-85)
)}:host([size=l]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-l-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-l-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-l-texticon-padding-left,var(--spectrum-global-dimension-size-160)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-l-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-l-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-l-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-l-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-l-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-l-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-65)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-l-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-l-textonly-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-l-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-l-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-l-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-l-textonly-height,var(--spectrum-global-dimension-size-500)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-l-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-l-textonly-padding-right,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-l-textonly-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-l-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-l-icononly-padding-right,var(--spectrum-global-dimension-size-125)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-l-icononly-padding-left,var(--spectrum-global-dimension-size-125)
)}:host([size=xl]){--spectrum-actionbutton-texticon-border-size:var(
--spectrum-actionbutton-xl-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-texticon-icon-gap:var(
--spectrum-actionbutton-xl-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-actionbutton-texticon-padding-left:var(
--spectrum-actionbutton-xl-texticon-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-actionbutton-quiet-textonly-border-size:var(
--spectrum-actionbutton-xl-quiet-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-quiet-textonly-text-size:var(
--spectrum-actionbutton-xl-quiet-textonly-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-actionbutton-quiet-textonly-text-font-weight:var(
--spectrum-actionbutton-xl-quiet-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-quiet-textonly-border-radius:var(
--spectrum-actionbutton-xl-quiet-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-border-size:var(
--spectrum-actionbutton-xl-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-textonly-hold-icon-padding-right:var(
--spectrum-actionbutton-xl-textonly-hold-icon-padding-right,var(--spectrum-global-dimension-size-75)
);--spectrum-actionbutton-textonly-hold-icon-padding-bottom:var(
--spectrum-actionbutton-xl-textonly-hold-icon-padding-bottom,var(--spectrum-global-dimension-size-75)
);--spectrum-actionbutton-textonly-text-size:var(
--spectrum-actionbutton-xl-textonly-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-actionbutton-textonly-text-font-weight:var(
--spectrum-actionbutton-xl-textonly-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-actionbutton-textonly-text-line-height:var(
--spectrum-actionbutton-xl-textonly-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-actionbutton-textonly-min-width:var(
--spectrum-actionbutton-xl-textonly-min-width,var(--spectrum-global-dimension-size-400)
);--spectrum-actionbutton-textonly-height:var(
--spectrum-actionbutton-xl-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-actionbutton-textonly-border-radius:var(
--spectrum-actionbutton-xl-textonly-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-actionbutton-textonly-padding-right:var(
--spectrum-actionbutton-xl-textonly-padding-right,var(--spectrum-global-dimension-size-225)
);--spectrum-actionbutton-textonly-padding-left:var(
--spectrum-actionbutton-xl-textonly-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-actionbutton-icononly-border-size:var(
--spectrum-actionbutton-xl-icononly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-actionbutton-icononly-padding-right:var(
--spectrum-actionbutton-xl-icononly-padding-right,var(--spectrum-global-dimension-size-160)
);--spectrum-actionbutton-icononly-padding-left:var(
--spectrum-actionbutton-xl-icononly-padding-left,var(--spectrum-global-dimension-size-160)
)}:host{--spectrum-actionbutton-padding-left-adjusted:calc(var(--spectrum-actionbutton-texticon-padding-left) - var(--spectrum-actionbutton-texticon-border-size));--spectrum-actionbutton-textonly-padding-left-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-left) - var(--spectrum-actionbutton-textonly-border-size));--spectrum-actionbutton-textonly-padding-right-adjusted:calc(var(--spectrum-actionbutton-textonly-padding-right) - var(--spectrum-actionbutton-textonly-border-size));--spectrum-actionbutton-icononly-padding-left-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-left) - var(--spectrum-actionbutton-icononly-border-size));--spectrum-actionbutton-icononly-padding-right-adjusted:calc(var(--spectrum-actionbutton-icononly-padding-right) - var(--spectrum-actionbutton-icononly-border-size));--spectrum-actionbutton-focus-ring-border-radius-adjusted:calc(var(--spectrum-actionbutton-quiet-textonly-border-radius) + var(--spectrum-actionbutton-focus-ring-gap))}:host([dir=ltr]){padding-left:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
);padding-right:var(--spectrum-actionbutton-textonly-padding-right-adjusted)}:host([dir=rtl]){padding-left:var(--spectrum-actionbutton-textonly-padding-right-adjusted);padding-right:var(
--spectrum-actionbutton-textonly-padding-left-adjusted
)}:host{border-radius:var(--spectrum-actionbutton-textonly-border-radius);border-width:var(--spectrum-actionbutton-textonly-border-size);color:inherit;font-size:var(--spectrum-actionbutton-textonly-text-size);font-weight:var(--spectrum-actionbutton-textonly-text-font-weight);height:var(--spectrum-actionbutton-textonly-height);line-height:var(--spectrum-actionbutton-textonly-text-line-height);min-width:var(--spectrum-actionbutton-textonly-min-width);position:relative}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
--spectrum-actionbutton-texticon-icon-gap
)}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
--spectrum-actionbutton-texticon-icon-gap
)}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}.hold-affordance+::slotted([slot=icon]),:host([dir]) slot[icon-only] sp-icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted))*-1);margin-right:calc((var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted))*-1)}#label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .hold-affordance{right:var(
--spectrum-actionbutton-textonly-hold-icon-padding-right
)}:host([dir=rtl]) .hold-affordance{left:var(
--spectrum-actionbutton-textonly-hold-icon-padding-right
)}:host([dir=rtl]) .hold-affordance{transform:matrix(-1,0,0,1,0,0)}.hold-affordance{bottom:var(--spectrum-actionbutton-textonly-hold-icon-padding-bottom);position:absolute}:host([quiet]){border-radius:var(--spectrum-actionbutton-quiet-textonly-border-radius);border-width:var(
--spectrum-actionbutton-quiet-textonly-border-size
);font-size:var(--spectrum-actionbutton-quiet-textonly-text-size);font-weight:var(--spectrum-actionbutton-quiet-textonly-text-font-weight)}:host{--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap,var(--spectrum-global-dimension-static-size-0)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size,var(--spectrum-global-dimension-static-size-10)
);--spectrum-actionbutton-focus-ring-color:var(
--spectrum-actionbutton-m-textonly-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host:after{border-radius:var(
--spectrum-actionbutton-focus-ring-border-radius-adjusted
);bottom:0;content:"";left:0;margin:calc((var(--spectrum-actionbutton-focus-ring-gap) + var(--spectrum-actionbutton-textonly-border-size))*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host(.focus-visible){box-shadow:none!important}:host(:focus-visible){box-shadow:none!important}:host(.focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-ring-size) var(--spectrum-actionbutton-focus-ring-color)}:host(:focus-visible):after{box-shadow:0 0 0 var(--spectrum-actionbutton-focus-ring-size) var(--spectrum-actionbutton-focus-ring-color)}:host([variant=white]){--spectrum-actionbutton-focus-ring-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=black]){--spectrum-actionbutton-focus-ring-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
)}:host([emphasized][selected]),:host([variant=black]),:host([variant=white]){--spectrum-actionbutton-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap-emphasized,var(--spectrum-global-dimension-static-size-25)
);--spectrum-actionbutton-focus-ring-size:var(
--spectrum-alias-component-focusring-size-emphasized,var(--spectrum-global-dimension-static-size-25)
)}:host{background-color:var(
--spectrum-actionbutton-m-textonly-background-color,var(--spectrum-alias-component-background-color-default)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color,var(--spectrum-alias-component-border-color-default)
);color:var(
--spectrum-actionbutton-m-textonly-text-color,var(--spectrum-alias-component-text-color-default)
)}::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}.hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color,var(--spectrum-alias-component-icon-color-default)
)}:host(:hover){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-hover,var(--spectrum-alias-component-background-color-hover)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-hover,var(--spectrum-alias-component-border-color-hover)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}:host(:hover) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}:host(.focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host(:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(.focus-visible) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host(:focus-visible) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([active]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-down,var(--spectrum-alias-component-background-color-down)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-down,var(--spectrum-alias-component-border-color-down)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([active]) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-down,var(--spectrum-alias-component-icon-color-down)
)}:host([disabled]),:host([disabled]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([disabled]) ::slotted([slot=icon]),:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([disabled]) .hold-affordance,:host([disabled]) .hold-affordance{color:var(
--spectrum-actionbutton-m-textonly-hold-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([selected]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected,var(--spectrum-alias-component-border-color-selected-default)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-key-focus,var(--spectrum-alias-component-background-color-selected-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-key-focus,var(--spectrum-alias-component-background-color-selected-key-focus)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([selected].focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([selected]:focus-visible[active]){border-color:var(
--spectrum-actionbutton-m-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected]:hover){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-hover,var(--spectrum-alias-component-background-color-selected-hover)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-selected-hover)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-selected-hover)
)}:host([selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-hover,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected][active]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-down,var(--spectrum-alias-component-background-color-selected-down)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-selected-down)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-selected-down)
)}:host([selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-down,var(--spectrum-alias-component-icon-color-selected)
)}:host([selected][disabled]),:host([selected][disabled]){background-color:var(
--spectrum-actionbutton-m-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([selected][disabled]) ::slotted([slot=icon]),:host([selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-texticon-icon-color-selected-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([emphasized][quiet][selected]),:host([emphasized][selected]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected,var(
--spectrum-alias-component-background-color-emphasized-selected-default
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected,var(--spectrum-alias-component-border-color-emphasized-selected-default)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected,var(--spectrum-alias-component-text-color-emphasized-selected-default)
)}:host([emphasized][quiet][selected]) ::slotted([slot=icon]),:host([emphasized][selected]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-emphasized-selected-default)
)}:host([emphasized][quiet][selected].focus-visible),:host([emphasized][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-emphasized-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus,var(
--spectrum-alias-component-border-color-emphasized-selected-key-focus
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:focus-visible),:host([emphasized][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-emphasized-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus,var(
--spectrum-alias-component-border-color-emphasized-selected-key-focus
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]),:host([emphasized][selected].focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:focus-visible) ::slotted([slot=icon]),:host([emphasized][selected]:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus,var(--spectrum-alias-component-icon-color-emphasized-selected-key-focus)
)}:host([emphasized][quiet][selected]:hover),:host([emphasized][selected]:hover){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover,var(
--spectrum-alias-component-background-color-emphasized-selected-hover
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-emphasized-selected-hover)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-emphasized-selected-hover)
)}:host([emphasized][quiet][selected]:hover) ::slotted([slot=icon]),:host([emphasized][selected]:hover) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-hover,var(--spectrum-alias-component-icon-color-emphasized-selected-hover)
)}:host([emphasized][quiet][selected][active]),:host([emphasized][selected][active]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down,var(
--spectrum-alias-component-background-color-emphasized-selected-down
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-emphasized-selected-down)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-emphasized-selected-down)
)}:host([emphasized][quiet][selected][active]) ::slotted([slot=icon]),:host([emphasized][selected][active]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-down,var(--spectrum-alias-component-icon-color-emphasized-selected-down)
)}:host([emphasized][quiet][selected][disabled]),:host([emphasized][quiet][selected][disabled]),:host([emphasized][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-disabled)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-disabled)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]),:host([emphasized][selected][disabled]) ::slotted([slot=icon]){color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}:host([quiet]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color,var(--spectrum-alias-component-background-color-quiet-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color,var(--spectrum-alias-component-border-color-quiet-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([quiet]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-hover,var(--spectrum-alias-component-background-color-quiet-hover)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-hover,var(--spectrum-alias-component-border-color-quiet-hover)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([quiet].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-quiet-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([quiet]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus,var(--spectrum-alias-component-border-color-quiet-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host([quiet][active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-down,var(--spectrum-alias-component-background-color-quiet-down)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-down,var(--spectrum-alias-component-border-color-quiet-down)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-down,var(--spectrum-alias-component-text-color-down)
)}:host([quiet][disabled]),:host([quiet][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-disabled,var(--spectrum-alias-component-background-color-quiet-disabled)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([quiet][selected]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected,var(--spectrum-alias-component-background-color-selected-default)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected,var(--spectrum-alias-component-border-color-quiet-selected-default)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected,var(--spectrum-alias-component-text-color-selected-default)
)}:host([quiet][selected].focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-quiet-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-quiet-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([quiet][selected]:focus-visible){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus,var(
--spectrum-alias-component-background-color-quiet-selected-key-focus
)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus,var(--spectrum-alias-component-border-color-quiet-selected-key-focus)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus,var(--spectrum-alias-component-text-color-selected-key-focus)
)}:host([quiet][selected]:hover){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-hover,var(--spectrum-alias-component-background-color-quiet-selected-hover)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-hover,var(--spectrum-alias-component-border-color-quiet-selected-hover)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-selected-hover)
)}:host([quiet][selected][active]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-down,var(--spectrum-alias-component-background-color-quiet-selected-down)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-down,var(--spectrum-alias-component-border-color-quiet-selected-down)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-selected-down)
)}:host([quiet][selected][disabled]),:host([quiet][selected][disabled]){background-color:var(
--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled,var(--spectrum-alias-component-background-color-quiet-selected-disabled)
);border-color:var(
--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled,var(--spectrum-alias-component-border-color-quiet-disabled)
);color:var(
--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host([variant=black]),:host([variant=white]){--spectrum-global-color-static-black-rgb:0,0,0;--spectrum-global-color-static-white-rgb:255,255,255;--spectrum-ActionButton-static-black-color:var(
--spectrum-global-color-static-black,rgb(var(--spectrum-global-color-static-black-rgb))
);--spectrum-ActionButton-static-white-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
)}:host([variant=black][selected]),:host([variant=white][selected]){color:inherit!important}@media (forced-colors:active){:host{--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-textonly-background-color:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-down:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-hover:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-quiet-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-disabled:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-down:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-hover:ButtonFace;--spectrum-actionbutton-m-quiet-textonly-border-color-key-focus:Highlight;--spectrum-actionbutton-m-quiet-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-text-color-down:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-hover:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-quiet-textonly-text-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-texticon-icon-color:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-disabled:GrayText;--spectrum-actionbutton-m-texticon-icon-color-hover:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-key-focus:ButtonText;--spectrum-actionbutton-m-texticon-icon-color-selected:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-disabled:GrayText;--spectrum-actionbutton-m-texticon-icon-color-selected-down:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-hover:HighlightText;--spectrum-actionbutton-m-texticon-icon-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-textonly-background-color:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-disabled:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-down:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-hover:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-key-focus:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-selected:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-disabled:ButtonFace;--spectrum-actionbutton-m-textonly-background-color-selected-down:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-hover:Highlight;--spectrum-actionbutton-m-textonly-background-color-selected-key-focus:Highlight;--spectrum-actionbutton-m-textonly-border-color:ButtonText;--spectrum-actionbutton-m-textonly-border-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-border-color-down:ButtonText;--spectrum-actionbutton-m-textonly-border-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-border-color-key-focus:Highlight;--spectrum-actionbutton-m-textonly-border-color-selected:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-disabled:GrayText;--spectrum-actionbutton-m-textonly-border-color-selected-down:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-hover:HighlightText;--spectrum-actionbutton-m-textonly-border-color-selected-key-focus:HighlightText;--spectrum-actionbutton-m-textonly-hold-icon-color:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-hold-icon-color-down:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-hold-icon-color-key-focus:ButtonText;--spectrum-actionbutton-m-textonly-text-color:ButtonText;--spectrum-actionbutton-m-textonly-text-color-disabled:GrayText;--spectrum-actionbutton-m-textonly-text-color-down:ButtonText;--spectrum-actionbutton-m-textonly-text-color-hover:ButtonText;--spectrum-actionbutton-m-textonly-text-color-key-focus:ButtonText;--spectrum-actionbutton-m-textonly-text-color-selected:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-disabled:GrayText;--spectrum-actionbutton-m-textonly-text-color-selected-down:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-hover:HighlightText;--spectrum-actionbutton-m-textonly-text-color-selected-key-focus:HighlightText;forced-color-adjust:none}:host([quiet][emphasized]:not([disabled]):hover){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-hover,var(
--spectrum-alias-component-background-color-emphasized-selected-hover
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-hover,var(
--spectrum-alias-component-border-color-emphasized-selected-hover
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-hover,var(--spectrum-alias-component-text-color-emphasized-selected-hover)
)}:host([quiet][emphasized]:not([disabled])[active]){background-color:var(
--spectrum-actionbutton-m-emphasized-textonly-background-color-selected-down,var(
--spectrum-alias-component-background-color-emphasized-selected-down
)
);border-color:var(
--spectrum-actionbutton-m-emphasized-textonly-border-color-selected-down,var(
--spectrum-alias-component-border-color-emphasized-selected-down
)
);color:var(
--spectrum-actionbutton-m-emphasized-textonly-text-color-selected-down,var(--spectrum-alias-component-text-color-emphasized-selected-down)
)}}:host{display:inline-flex;flex-direction:row}:host:after{border-radius:var(
--spectrum-actionbutton-after-border-radius,calc(var(--spectrum-actionbutton-quiet-textonly-border-radius) + var(--spectrum-actionbutton-focus-ring-gap))
)}:host([disabled]){cursor:auto;pointer-events:none}:host([dir]){-webkit-appearance:none}::slotted([slot=icon]){flex-shrink:0}#button{inset:0;position:absolute}#label{flex-grow:var(--spectrum-actionbutton-label-flex-grow);text-align:var(--spectrum-actionbutton-label-text-align)}:host([emphasized][quiet][selected]:not([disabled])) .hold-affordance,:host([emphasized][selected]:not([disabled])) .hold-affordance{color:var(
--spectrum-actionbutton-m-emphasized-texticon-icon-color-selected,var(--spectrum-alias-component-icon-color-emphasized-selected-default)
)}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-s
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75
)}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-m
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-l
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200
)}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-icon-tshirt-size-width:var(
--spectrum-alias-workflow-icon-size-xl
);--spectrum-ui-icon-tshirt-size-height:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
);--spectrum-ui-icon-tshirt-size-width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;var Lr=_r;const Fr=h`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-CornerTriangle75{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-75,var(--spectrum-global-dimension-size-65)
)}.spectrum-UIIcon-CornerTriangle100{height:var(--spectrum-alias-ui-icon-cornertriangle-size-100);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-100
)}.spectrum-UIIcon-CornerTriangle200{height:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-200,var(--spectrum-global-dimension-size-75)
)}.spectrum-UIIcon-CornerTriangle300{height:var(--spectrum-alias-ui-icon-cornertriangle-size-300);width:var(
--spectrum-alias-ui-icon-cornertriangle-size-300
)}
`;var Ur=Fr;const Pr=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 7 7"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.683.67a.315.315 0 00-.223.093l-5.7 5.7a.316.316 0 00.224.54h5.7A.316.316 0 007 6.687V.986A.316.316 0 006.684.67z"
    />
  </svg>`;class Br extends g{render(){return P(l),Pr()}}customElements.define("sp-icon-corner-triangle300",Br);const Or={s:"spectrum-UIIcon-CornerTriangle75",m:"spectrum-UIIcon-CornerTriangle100",l:"spectrum-UIIcon-CornerTriangle200",xl:"spectrum-UIIcon-CornerTriangle300"},Dr=300;let Dt;class B extends V(J){constructor(){super(),this.emphasized=!1,this.holdAffordance=!1,this.quiet=!1,this.role="button",this.selected=!1,this.toggles=!1,this._value="",this.onClick=()=>{if(!this.toggles)return;this.selected=!this.selected,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=!this.selected)},this.addEventListener("click",this.onClick),this.addEventListener("pointerdown",this.onPointerdown)}static get styles(){return[Lr,Ur]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return(this.textContent||"").trim()}onPointerdown(){this.addEventListener("pointerup",this.onPointerup),this.addEventListener("pointercancel",this.onPointerup),Dt=setTimeout(()=>{this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"pointer"}}))},Dr)}onPointerup(){clearTimeout(Dt),this.removeEventListener("pointerup",this.onPointerup),this.removeEventListener("pointercancel",this.onPointerup)}handleKeydown(t){if(!this.holdAffordance)return super.handleKeydown(t);const{code:e,altKey:r}=t;(e==="Space"||r&&e==="ArrowDown")&&(t.preventDefault(),e==="ArrowDown"&&(t.stopPropagation(),t.stopImmediatePropagation()),this.addEventListener("keyup",this.handleKeyup),this.active=!0)}handleKeyup(t){if(!this.holdAffordance)return super.handleKeyup(t);const{code:e,altKey:r}=t;(e==="Space"||r&&e==="ArrowDown")&&(t.stopPropagation(),this.dispatchEvent(new CustomEvent("longpress",{bubbles:!0,composed:!0,detail:{source:"keyboard"}})),this.active=!1)}get buttonContent(){const t=super.buttonContent;return this.holdAffordance&&t.unshift(l`
                <sp-icon-corner-triangle300
                    class="hold-affordance ${Or[this.size]}"
                ></sp-icon-corner-triangle300>
            `),t}updated(t){super.updated(t);const r=this.role==="button"&&(this.selected||this.toggles);(t.has("selected")||t.has("role"))&&(r?this.setAttribute("aria-pressed",this.selected?"true":"false"):this.removeAttribute("aria-pressed"))}}s([n({type:Boolean,reflect:!0})],B.prototype,"emphasized",void 0);s([n({type:Boolean,reflect:!0,attribute:"hold-affordance"})],B.prototype,"holdAffordance",void 0);s([n({type:Boolean,reflect:!0})],B.prototype,"quiet",void 0);s([n({reflect:!0})],B.prototype,"role",void 0);s([n({type:Boolean,reflect:!0})],B.prototype,"selected",void 0);s([n({type:Boolean,reflect:!0})],B.prototype,"toggles",void 0);s([n({reflect:!0})],B.prototype,"variant",void 0);s([n({type:String})],B.prototype,"value",null);customElements.define("sp-action-button",B);const Rr=h`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronDown75{transform:rotate(90deg)}.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronLeft75{transform:rotate(180deg)}.spectrum-UIIcon-ChevronUp100,.spectrum-UIIcon-ChevronUp200,.spectrum-UIIcon-ChevronUp300,.spectrum-UIIcon-ChevronUp400,.spectrum-UIIcon-ChevronUp500,.spectrum-UIIcon-ChevronUp75{transform:rotate(270deg)}.spectrum-UIIcon-ChevronDown75,.spectrum-UIIcon-ChevronLeft75,.spectrum-UIIcon-ChevronRight75,.spectrum-UIIcon-ChevronUp75{height:var(--spectrum-alias-ui-icon-chevron-size-75);width:var(
--spectrum-alias-ui-icon-chevron-size-75
)}.spectrum-UIIcon-ChevronDown100,.spectrum-UIIcon-ChevronLeft100,.spectrum-UIIcon-ChevronRight100,.spectrum-UIIcon-ChevronUp100{height:var(--spectrum-alias-ui-icon-chevron-size-100);width:var(
--spectrum-alias-ui-icon-chevron-size-100
)}.spectrum-UIIcon-ChevronDown200,.spectrum-UIIcon-ChevronLeft200,.spectrum-UIIcon-ChevronRight200,.spectrum-UIIcon-ChevronUp200{height:var(--spectrum-alias-ui-icon-chevron-size-200);width:var(
--spectrum-alias-ui-icon-chevron-size-200
)}.spectrum-UIIcon-ChevronDown300,.spectrum-UIIcon-ChevronLeft300,.spectrum-UIIcon-ChevronRight300,.spectrum-UIIcon-ChevronUp300{height:var(--spectrum-alias-ui-icon-chevron-size-300);width:var(
--spectrum-alias-ui-icon-chevron-size-300
)}.spectrum-UIIcon-ChevronDown400,.spectrum-UIIcon-ChevronLeft400,.spectrum-UIIcon-ChevronRight400,.spectrum-UIIcon-ChevronUp400{height:var(--spectrum-alias-ui-icon-chevron-size-400);width:var(
--spectrum-alias-ui-icon-chevron-size-400
)}.spectrum-UIIcon-ChevronDown500,.spectrum-UIIcon-ChevronLeft500,.spectrum-UIIcon-ChevronRight500,.spectrum-UIIcon-ChevronUp500{height:var(--spectrum-alias-ui-icon-chevron-size-500);width:var(
--spectrum-alias-ui-icon-chevron-size-500
)}
`;var Tt=Rr;const Mr=h`
:host{--spectrum-stepper-width:var(
--spectrum-global-dimension-size-900
);--spectrum-stepper-border-size:var(
--spectrum-alias-border-size-thin,var(--spectrum-global-dimension-static-size-10)
);--spectrum-stepper-button-height:calc(var(
--spectrum-alias-single-line-height,
var(--spectrum-global-dimension-size-400)
)/2);--spectrum-stepper-button-width:calc(var(--spectrum-global-dimension-size-300) - var(--spectrum-stepper-border-size));--spectrum-stepper-button-padding:calc(var(--spectrum-global-dimension-size-150)/2);--spectrum-stepper-border-radius-reset:0;--spectrum-stepper-border-size-reset:0;--spectrum-stepper-icon-nudge-top:var(--spectrum-global-dimension-size-10);--spectrum-stepper-icon-nudge:var(--spectrum-global-dimension-size-25);--spectrum-stepper-quiet-width:var(--spectrum-global-dimension-size-600);--spectrum-stepper-button-offset:calc(var(--spectrum-stepper-button-width)/2 - var(--spectrum-alias-ui-icon-chevron-size-75)/2);--spectrum-stepper-quiet-button-width:calc(var(--spectrum-stepper-button-width) - var(--spectrum-stepper-button-offset))}#textfield{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
);display:inline-flex;flex-direction:row;flex-wrap:nowrap;line-height:0;transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out;width:var(--spectrum-stepper-width)}#textfield:before{content:""}:host([dir=ltr]) .buttons{border-top-left-radius:0}:host([dir=rtl]) .buttons{border-top-right-radius:0}:host([dir=ltr]) .buttons{border-top-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-top-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-right-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl]) .buttons{border-bottom-left-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) .buttons{border-bottom-left-radius:0}:host([dir=rtl]) .buttons{border-bottom-right-radius:0}.buttons{display:block;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{padding-right:var(
--spectrum-stepper-button-padding
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{padding-left:var(
--spectrum-stepper-button-padding
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .stepDown,:host([dir=ltr]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown,:host([dir=rtl]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown,.stepUp{border-width:var(--spectrum-stepper-border-size);box-sizing:border-box;display:flex;height:var(--spectrum-stepper-button-height);margin:0!important;min-width:0;position:relative;width:var(--spectrum-stepper-button-width)}.stepDown .stepper-icon,.stepUp .stepper-icon{margin:0!important;opacity:1}:host([dir=ltr]) .stepUp{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepUp{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepUp{border-bottom:none;padding-top:var(--spectrum-stepper-icon-nudge-top)}:host([dir=ltr]) .stepDown{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .stepDown{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.stepDown{padding-bottom:var(
--spectrum-stepper-icon-nudge
)}.textfield{flex:1;width:auto}:host([dir=ltr]) .input{border-top-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-top-left-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr]) .input{border-bottom-right-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=rtl]) .input{border-bottom-left-radius:var(
--spectrum-stepper-border-radius-reset
)}.input,.textfield{min-width:0}:host([quiet]) #textfield{border-radius:var(
--spectrum-stepper-border-radius-reset
);width:var(--spectrum-stepper-quiet-width)}:host([quiet]) .buttons{border-radius:var(
--spectrum-stepper-border-radius-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-right-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-left-width:var(
--spectrum-stepper-border-size-reset
)}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{border-left:none}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{border-right:none}:host([dir=ltr][quiet]) .stepDown,:host([dir=ltr][quiet]) .stepUp{padding-right:0}:host([dir=rtl][quiet]) .stepDown,:host([dir=rtl][quiet]) .stepUp{padding-left:0}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-radius:var(--spectrum-stepper-border-radius-reset);border-top:none;justify-content:flex-end;min-width:0;width:var(
--spectrum-stepper-quiet-button-width
)}:host([dir=ltr][quiet]) .stepDown:after,:host([dir=ltr][quiet]) .stepUp:after{right:calc(var(--spectrum-stepper-button-offset)*-1)}:host([dir=rtl][quiet]) .stepDown:after,:host([dir=rtl][quiet]) .stepUp:after{left:calc(var(--spectrum-stepper-button-offset)*-1)}:host([quiet]) .stepDown:after,:host([quiet]) .stepUp:after{content:"";height:100%;position:absolute;width:var(--spectrum-stepper-button-offset)}:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .input,:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .stepDown,:host(:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-hover,var(--spectrum-alias-input-border-color-hover)
)}:host([focused]) #textfield{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused]) #textfield .stepDown,:host([focused]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
)}:host([focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-mouse-focus,var(--spectrum-alias-input-border-color-mouse-focus)
);box-shadow:none}:host([focused][invalid]) #textfield{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .stepDown,:host([focused][invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([focused][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-mouse-focus,var(--spectrum-alias-input-border-color-invalid-mouse-focus)
)}:host([keyboard-focused]) #textfield{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .buttons,:host([keyboard-focused]) #textfield .input{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused]) #textfield .input,:host([keyboard-focused]) #textfield .stepDown,:host([keyboard-focused]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([keyboard-focused][invalid]) #textfield{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([keyboard-focused][invalid]) #textfield .stepDown,:host([keyboard-focused][invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([keyboard-focused][invalid]) #textfield .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([invalid]) #textfield .stepDown,:host([invalid]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([invalid][keyboard-focused]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
);box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([invalid][keyboard-focused]) #textfield .buttons{box-shadow:0 0 0 1px var(
--spectrum-textfield-m-texticon-border-color-invalid-key-focus,var(--spectrum-alias-input-border-color-invalid-key-focus)
)}:host([disabled]) #textfield .stepDown,:host([disabled]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
)}.stepDown,.stepUp{border-color:var(
--spectrum-textfield-m-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}.stepDown:disabled,.stepUp:disabled{border-color:var(
--spectrum-textfield-m-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-disabled)
)}:host([quiet][disabled]) #textfield .stepDown,:host([quiet][disabled]) #textfield .stepUp{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([quiet]) .stepDown,:host([quiet]) .stepUp{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color,var(--spectrum-alias-input-border-color-default)
)}:host([quiet]) .stepDown:disabled,:host([quiet]) .stepUp:disabled{border-color:var(
--spectrum-textfield-m-quiet-texticon-border-color-disabled,var(--spectrum-alias-input-border-color-quiet-disabled)
)}:host([quiet]) .input{box-shadow:none}:host([quiet][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][invalid]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused]) #textfield,:host([quiet][keyboard-focused]) #textfield{box-shadow:none}:host([quiet][focused]) #textfield .buttons,:host([quiet][focused]) #textfield .input,:host([quiet][keyboard-focused]) #textfield .buttons,:host([quiet][keyboard-focused]) #textfield .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([quiet][focused]) #textfield .stepDown,:host([quiet][keyboard-focused]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-key-focus,var(--spectrum-alias-input-border-color-key-focus)
)}:host([quiet][focused][invalid]) #textfield,:host([quiet][keyboard-focused][invalid]) #textfield{box-shadow:none}:host([quiet][focused][invalid]) #textfield .buttons,:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .buttons,:host([quiet][keyboard-focused][invalid]) #textfield .input{box-shadow:0 1px 0 0 var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused][invalid]) #textfield .input,:host([quiet][keyboard-focused][invalid]) #textfield .input{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host([quiet][focused][invalid]) #textfield .stepDown,:host([quiet][keyboard-focused][invalid]) #textfield .stepDown{border-color:var(
--spectrum-textfield-m-texticon-border-color-invalid,var(--spectrum-alias-input-border-color-invalid-default)
)}:host{width:var(--spectrum-stepper-width)}#textfield{width:100%}sp-field-button{--spectrum-dropdown-height:100%;--spectrum-dropdown-padding-x:0}.input{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}:host([readonly]) .buttons{pointer-events:none;visibility:hidden}:host([hide-stepper]:not([quiet])) .input{border-radius:var(
--spectrum-alias-border-radius-regular,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr][invalid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][invalid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][valid]:not([hide-stepper])) .icon{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl][valid]:not([hide-stepper])) .icon{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet][invalid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][invalid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr][quiet][valid]:not([hide-stepper])) .icon{right:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet][valid]:not([hide-stepper])) .icon{left:var(--spectrum-stepper-button-width)}:host([dir=ltr]:not([hide-stepper])) .icon-workflow{left:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=rtl]:not([hide-stepper])) .icon-workflow{right:calc(var(--spectrum-stepper-button-width) + var(--spectrum-textfield-error-icon-margin-left))}:host([dir=ltr][quiet]:not([hide-stepper])) .icon-workflow{left:var(--spectrum-stepper-button-width)}:host([dir=rtl][quiet]:not([hide-stepper])) .icon-workflow{right:var(--spectrum-stepper-button-width)}:host([readonly]:not([disabled]):not([invalid]):not([focused]):not([keyboard-focused])) #textfield:hover .input{border-color:transparent}
`;var Hr=Mr;const Nr=5,bt="-",jr={"\uFF11":"1","\uFF12":"2","\uFF13":"3","\uFF14":"4","\uFF15":"5","\uFF16":"6","\uFF17":"7","\uFF18":"8","\uFF19":"9","\uFF10":"0","\u3001":",","\uFF0C":",","\u3002":".","\uFF0E":".","\uFF05":"%","\uFF0B":"+",\u30FC:"-"};class T extends f{constructor(){super(...arguments),this.focused=!1,this._forcedUnit="",this.formatOptions={},this.hideStepper=!1,this.indeterminate=!1,this.keyboardFocused=!1,this.resolvedLanguage=document.documentElement.lang||navigator.language,this.stepperActive=!1,this.stepModifier=10,this._value=NaN,this._trackingValue="",this.changeCount=0,this.wasIndeterminate=!1}static get styles(){return[...super.styles,Hr,Tt]}set value(t){const e=this.validateInput(t);if(e===this.value)return;const r=this._value;this._value=e,this.requestUpdate("value",r)}get value(){return this._value}get inputValue(){return this.indeterminate?this.formattedValue:this.inputElement.value}get valueAsString(){return this._value.toString()}set valueAsString(t){this.value=this.numberParser.parse(t)}get formattedValue(){return isNaN(this.value)?"":this.numberFormatter.format(this.value)+(this.focused?"":this._forcedUnit)}convertValueToNumber(t){return this.numberParser.parse(t)}get _step(){var t;return typeof this.step!="undefined"?this.step:((t=this.formatOptions)===null||t===void 0?void 0:t.style)==="percent"?.01:1}handlePointerdown(t){if(t.button!==0){t.preventDefault();return}this.stepperActive=!0,this.buttons.setPointerCapture(t.pointerId);const e=this.buttons.children[0].getBoundingClientRect(),r=this.buttons.children[1].getBoundingClientRect();this.findChange=o=>{o.clientX>=e.x&&o.clientY>=e.y&&o.clientX<=e.x+e.width&&o.clientY<=e.y+e.height?this.change=i=>this.increment(i.shiftKey?this.stepModifier:1):o.clientX>=r.x&&o.clientY>=r.y&&o.clientX<=r.x+r.width&&o.clientY<=r.y+r.height&&(this.change=i=>this.decrement(i.shiftKey?this.stepModifier:1))},this.findChange(t),this.startChange(t)}startChange(t){this.changeCount=0,this.doChange(t),this.safty=setTimeout(()=>{this.doNextChange(t)},400)}doChange(t){this.change(t)}handlePointermove(t){this.findChange(t)}handlePointerup(t){this.buttons.releasePointerCapture(t.pointerId),cancelAnimationFrame(this.nextChange),clearTimeout(this.safty),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.stepperActive=!1}doNextChange(t){return this.changeCount+=1,this.changeCount%Nr===0&&this.doChange(t),requestAnimationFrame(()=>{this.nextChange=this.doNextChange(t)})}stepBy(t){if(this.disabled||this.readonly)return;const e=typeof this.min!="undefined"?this.min:0;let r=this.value;r+=t*this._step,isNaN(this.value)?this.value=e:this.value=r,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.indeterminate=!1,this.focus()}increment(t=1){this.stepBy(1*t)}decrement(t=1){this.stepBy(-1*t)}handleKeydown(t){switch(t.code){case"ArrowUp":t.preventDefault(),this.increment(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));break;case"ArrowDown":t.preventDefault(),this.decrement(t.shiftKey?this.stepModifier:1),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}));break}}onScroll(t){t.preventDefault();const e=t.shiftKey?t.deltaX/Math.abs(t.deltaX):t.deltaY/Math.abs(t.deltaY);e!==0&&!isNaN(e)&&this.stepBy(e*(t.shiftKey?this.stepModifier:1))}onFocus(){super.onFocus(),this._trackingValue=this.inputValue,this.keyboardFocused=!this.readonly&&!0,this.addEventListener("wheel",this.onScroll)}onBlur(){super.onBlur(),this.keyboardFocused=!this.readonly&&!1,this.removeEventListener("wheel",this.onScroll)}handleFocusin(){this.focused=!this.readonly&&!0,this.keyboardFocused=!this.readonly&&!0}handleFocusout(){this.focused=!this.readonly&&!1,this.keyboardFocused=!this.readonly&&!1}handleChange(){const t=this.convertValueToNumber(this.inputValue);if(this.wasIndeterminate&&(this.wasIndeterminate=!1,this.indeterminateValue=void 0,isNaN(t))){this.indeterminate=!0;return}this.value=t,super.handleChange()}handleInput(){this.indeterminate&&(this.wasIndeterminate=!0,this.indeterminateValue=this.value,this.inputElement.value=this.inputElement.value.replace(bt,""));const{value:t,selectionStart:e}=this.inputElement,r=t.split("").map(d=>jr[d]||d).join("");if(this.numberParser.isValidPartialNumber(r)){const d=this.convertValueToNumber(r);!r&&this.indeterminateValue?(this.indeterminate=!0,this._value=this.indeterminateValue):(this.indeterminate=!1,this._value=this.validateInput(d)),this._trackingValue=r,this.inputElement.value=r;return}const o=r.length,i=this._trackingValue.length,c=(e||o)-(o-i);this.inputElement.value=this.indeterminate?bt:this._trackingValue,this.inputElement.setSelectionRange(c,c)}validateInput(t){if(typeof this.min!="undefined"&&(t=Math.max(this.min,t)),typeof this.max!="undefined"&&(t=Math.min(this.max,t)),this.step){const e=typeof this.min!="undefined"?this.min:0,r=(t-e)%this.step;if(r===0||(Math.round(r/this.step)===1?t+=this.step-r:t-=r),typeof this.max!="undefined")for(;t>this.max;)t-=this.step}return t}get displayValue(){const t=this.focused?"":bt;return this.indeterminate?t:this.formattedValue}clearNumberFormatterCache(){this._numberFormatter=void 0,this._numberParser=void 0}get numberFormatter(){if(!this._numberFormatter||!this._numberFormatterFocused){const t=this.formatOptions,{style:e,unit:r,unitDisplay:o}=t,i=gt(t,["style","unit","unitDisplay"]);e!=="unit"&&(i.style=e),this._numberFormatterFocused=new st(this.resolvedLanguage,i);try{this._numberFormatter=new st(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberFormatter.format(1)}catch{e==="unit"&&(this._forcedUnit=r),this._numberFormatter=this._numberFormatterFocused}}return this.focused?this._numberFormatterFocused:this._numberFormatter}get numberParser(){if(!this._numberParser||!this._numberParserFocused){const t=this.formatOptions,{style:e,unit:r,unitDisplay:o}=t,i=gt(t,["style","unit","unitDisplay"]);e!=="unit"&&(i.style=e),this._numberParserFocused=new Ut(this.resolvedLanguage,i);try{this._numberParser=new Ut(this.resolvedLanguage,this.formatOptions),this._forcedUnit="",this._numberParser.parse("0")}catch{e==="unit"&&(this._forcedUnit=r),this._numberParser=this._numberParserFocused}}return this.focused?this._numberParserFocused:this._numberParser}renderField(){return this.autocomplete="off",l`
            ${super.renderField()}
            ${this.hideStepper?l``:l`
                      <span
                          class="buttons"
                          @focusin=${this.handleFocusin}
                          @focusout=${this.handleFocusout}
                          ${pt({start:["pointerdown",this.handlePointerdown],streamInside:[["pointermove","pointerenter","pointerleave","pointerover","pointerout"],this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
                      >
                          <sp-action-button
                              class="stepUp"
                              label="Increment"
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||typeof this.max!="undefined"&&this.value===this.max}
                              ?quiet=${this.quiet}
                          >
                              <sp-icon-chevron75
                                  slot="icon"
                                  class="stepper-icon spectrum-UIIcon-ChevronUp75"
                              ></sp-icon-chevron75>
                          </sp-action-button>
                          <sp-action-button
                              class="stepDown"
                              label="Decrement"
                              tabindex="-1"
                              ?focused=${this.focused}
                              ?disabled=${this.disabled||this.readonly||typeof this.min!="undefined"&&this.value===this.min}
                              ?quiet=${this.quiet}
                          >
                              <sp-icon-chevron75
                                  slot="icon"
                                  class="stepper-icon spectrum-UIIcon-ChevronDown75"
                              ></sp-icon-chevron75>
                          </sp-action-button>
                      </span>
                  `}
        `}update(t){(t.has("formatOptions")||t.has("resolvedLanguage"))&&this.clearNumberFormatterCache(),super.update(t)}firstUpdated(t){super.firstUpdated(t),this.multiline=!1,this.addEventListener("keydown",this.handleKeydown)}updated(t){if(t.has("value")||t.has("max")||t.has("min")||t.has("min")){const e=this.numberParser.parse(this.inputValue.replace(this._forcedUnit,""));this.value=e}if(t.has("min")||t.has("formatOptions")){let e="numeric";const r=typeof this.min!="undefined"&&this.min<0,{maximumFractionDigits:o}=this.formatOptions,i=o&&o>0;te()?r?e="text":i&&(e="decimal"):ee()&&(r?e="numeric":i&&(e="decimal")),this.inputElement.inputMode=e}}connectedCallback(){super.connectedCallback(),this.resolveLanguage()}disconnectedCallback(){this.resolveLanguage(),super.disconnectedCallback()}resolveLanguage(){const t=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:e=>{this.resolvedLanguage=e}},cancelable:!0});this.dispatchEvent(t)}}s([y(".buttons")],T.prototype,"buttons",void 0);s([n({type:Boolean,reflect:!0})],T.prototype,"focused",void 0);s([n({type:Object,attribute:"format-options"})],T.prototype,"formatOptions",void 0);s([n({type:Boolean,reflect:!0,attribute:"hide-stepper"})],T.prototype,"hideStepper",void 0);s([n({type:Boolean,reflect:!0})],T.prototype,"indeterminate",void 0);s([n({type:Boolean,reflect:!0,attribute:"keyboard-focused"})],T.prototype,"keyboardFocused",void 0);s([n({type:Number})],T.prototype,"max",void 0);s([n({type:Number})],T.prototype,"min",void 0);s([n({attribute:!1})],T.prototype,"resolvedLanguage",void 0);s([n({type:Number})],T.prototype,"step",void 0);s([n({type:Number,reflect:!0,attribute:"step-modifier"})],T.prototype,"stepModifier",void 0);s([n({type:Number})],T.prototype,"value",null);customElements.define("sp-number-field",T);var Vr=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));const Kr=h`
#button{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
--spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
);line-height:var(
--spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
);overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}#button:focus{outline:none}#button::-moz-focus-inner{border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}#button:disabled{cursor:default}:host([dir=ltr]) #button{padding-left:var(
--spectrum-picker-textonly-padding-left-adjusted
);padding-right:var(--spectrum-picker-textonly-padding-right-adjusted)}:host([dir=rtl]) #button{padding-left:var(--spectrum-picker-textonly-padding-right-adjusted);padding-right:var(
--spectrum-picker-textonly-padding-left-adjusted
)}#button{align-items:center;border-radius:var(--spectrum-picker-texticon-border-radius);border-style:solid;border-width:var(--spectrum-picker-texticon-border-size);display:flex;height:var(--spectrum-picker-texticon-height);justify-content:center;margin:0;min-width:var(--spectrum-picker-texticon-min-width);padding-bottom:0;padding-top:0;transition:background-color var(--spectrum-global-animation-duration-100,.13s),box-shadow var(--spectrum-global-animation-duration-100,.13s),border-color var(--spectrum-global-animation-duration-100,.13s);width:var(--spectrum-picker-texticon-width)}#button:disabled,:host([disabled]) #button{border-width:var(
--spectrum-picker-texticon-disabled-border-size
);cursor:default}:host([dir=ltr]) #button .icon{margin-right:var(
--spectrum-picker-texticon-icon-gap
)}:host([dir=rtl]) #button .icon{margin-left:var(
--spectrum-picker-texticon-icon-gap
)}.icon{flex-shrink:0}:host([dir=ltr]) #button #label+.icon{margin-left:calc((var(--spectrum-picker-textonly-padding-left-adjusted) - var(--spectrum-picker-padding-left-adjusted))*-1)}:host([dir=rtl]) #button #label+.icon{margin-right:calc((var(--spectrum-picker-textonly-padding-left-adjusted) - var(--spectrum-picker-padding-left-adjusted))*-1)}:host([size=s]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-s-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-s-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-s-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-s-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-s-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-s-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-s-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-s-texticon-popover-max-width,var(--spectrum-global-dimension-size-1800)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-s-texticon-padding-left,var(--spectrum-global-dimension-size-85)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-s-texticon-height,var(--spectrum-global-dimension-size-300)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-s-texticon-min-width,var(--spectrum-global-dimension-size-450)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-s-texticon-width,var(--spectrum-global-dimension-size-2000)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-s-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-s-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-s-textonly-padding-left,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-s-textonly-padding-right,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-s-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=m]){--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-m-texticon-padding-left
);--spectrum-picker-texticon-border-size:var(
--spectrum-picker-m-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-m-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-m-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-m-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-m-texticon-popover-max-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-m-texticon-height,var(--spectrum-global-dimension-size-400)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-m-texticon-min-width,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-m-texticon-width,var(--spectrum-global-dimension-size-2400)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-m-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-m-textonly-padding-left,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-m-textonly-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-m-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=l]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-l-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-l-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-l-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-l-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-l-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-l-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-l-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-l-texticon-popover-max-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-l-texticon-padding-left,var(--spectrum-global-dimension-size-160)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-l-texticon-height,var(--spectrum-global-dimension-size-500)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-l-texticon-min-width,var(--spectrum-global-dimension-size-750)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-l-texticon-width,var(--spectrum-global-dimension-size-2500)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-l-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-l-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-l-textonly-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-l-textonly-padding-right,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-l-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([size=xl]){--spectrum-picker-texticon-border-size:var(
--spectrum-picker-xl-texticon-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-texticon-text-size:var(
--spectrum-picker-xl-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-picker-texticon-icon-gap:var(
--spectrum-picker-xl-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-picker-texticon-placeholder-font-style:var(
--spectrum-picker-xl-texticon-placeholder-font-style,var(--spectrum-global-font-style-italic)
);--spectrum-picker-texticon-placeholder-font-weight:var(
--spectrum-picker-xl-texticon-placeholder-font-weight,var(--spectrum-global-font-weight-regular)
);--spectrum-picker-texticon-error-icon-margin-left:var(
--spectrum-picker-xl-texticon-error-icon-margin-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-texticon-ui-icon-gap:var(
--spectrum-picker-xl-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-picker-texticon-popover-max-width:var(
--spectrum-picker-xl-texticon-popover-max-width,var(--spectrum-global-dimension-size-3600)
);--spectrum-picker-texticon-padding-left:var(
--spectrum-picker-xl-texticon-padding-left,var(--spectrum-global-dimension-size-185)
);--spectrum-picker-texticon-height:var(
--spectrum-picker-xl-texticon-height,var(--spectrum-global-dimension-size-600)
);--spectrum-picker-texticon-min-width:var(
--spectrum-picker-xl-texticon-min-width,var(--spectrum-global-dimension-size-900)
);--spectrum-picker-texticon-width:var(
--spectrum-picker-xl-texticon-width,var(--spectrum-global-dimension-size-3000)
);--spectrum-picker-texticon-border-radius:var(
--spectrum-picker-xl-texticon-border-radius,var(--spectrum-alias-component-border-radius)
);--spectrum-picker-textonly-border-size:var(
--spectrum-picker-xl-textonly-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-picker-textonly-padding-left:var(
--spectrum-picker-xl-textonly-padding-left,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-padding-right:var(
--spectrum-picker-xl-textonly-padding-right,var(--spectrum-global-dimension-size-225)
);--spectrum-picker-textonly-border-radius:var(
--spectrum-picker-xl-textonly-border-radius,var(--spectrum-alias-component-border-radius)
)}:host{--spectrum-picker-texticon-min-width:var(
--spectrum-global-dimension-size-400
);--spectrum-picker-texticon-disabled-border-size:0;--spectrum-picker-texticon-popover-max-width:var(
--spectrum-global-dimension-size-3000
);--spectrum-picker-texticon-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-picker-texticon-border-size-increase-focus:1px;--spectrum-picker-padding-left-adjusted:calc(var(--spectrum-picker-texticon-padding-left) - var(--spectrum-picker-texticon-border-size));--spectrum-picker-textonly-padding-left-adjusted:calc(var(--spectrum-picker-textonly-padding-left) - var(--spectrum-picker-textonly-border-size));--spectrum-picker-textonly-padding-right-adjusted:calc(var(--spectrum-picker-textonly-padding-right) - var(--spectrum-picker-textonly-border-size));--spectrum-picker-focus-ring-border-radius-adjusted:calc(var(--spectrum-picker-textonly-border-radius) + var(--spectrum-picker-focus-ring-gap))}:host{--spectrum-picker-focus-ring-gap:var(
--spectrum-alias-component-focusring-gap,var(--spectrum-global-dimension-static-size-0)
);--spectrum-picker-focus-ring-size:var(
--spectrum-alias-component-focusring-size,var(--spectrum-global-dimension-static-size-10)
);--spectrum-picker-focus-ring-color:var(
--spectrum-picker-m-textonly-focusring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
)}#button{transition:border-color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#button:after{border-radius:var(--spectrum-picker-focus-ring-border-radius-adjusted);bottom:0;content:"";left:0;margin:calc((var(--spectrum-picker-focus-ring-gap) + var(--spectrum-picker-textonly-border-size))*-1);pointer-events:none;position:absolute;right:0;top:0;transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-in-out}#button.focus-visible{box-shadow:none!important}#button:focus-visible{box-shadow:none!important}#button.focus-visible:after{box-shadow:0 0 0 var(--spectrum-picker-focus-ring-size) var(--spectrum-picker-focus-ring-color)}#button:focus-visible:after{box-shadow:0 0 0 var(--spectrum-picker-focus-ring-size) var(--spectrum-picker-focus-ring-color)}:host([quiet]){--spectrum-picker-texticon-border-size:0;--spectrum-picker-texticon-border-radius:0;--spectrum-picker-textonly-padding-left:0;--spectrum-picker-textonly-padding-right:0}:host([quiet]) #button{min-width:0;width:auto}:host([quiet]) #button:disabled.focus-visible,:host([quiet][disabled]) #button.focus-visible{box-shadow:none}:host([quiet]) #button:disabled:focus-visible,:host([quiet][disabled]) #button:focus-visible{box-shadow:none}:host([dir=ltr]) #label{text-align:left}:host([dir=rtl]) #label{text-align:right}#label{flex:1 1 auto;font-size:var(--spectrum-picker-texticon-text-size);height:calc(var(--spectrum-picker-texticon-height) - var(--spectrum-picker-texticon-border-size)*2);line-height:calc(var(--spectrum-picker-texticon-height) - var(--spectrum-picker-texticon-border-size)*2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#label.placeholder{font-style:var(--spectrum-picker-texticon-placeholder-font-style);font-weight:var(
--spectrum-picker-texticon-placeholder-font-weight
);transition:color var(--spectrum-global-animation-duration-100,.13s) ease-in-out}.picker{display:inline-block;flex-shrink:0;position:relative;transition:color var(--spectrum-global-animation-duration-100,.13s) ease-out;vertical-align:top}:host([dir=ltr]) .validation-icon{margin-left:var(
--spectrum-picker-texticon-error-icon-margin-left
)}:host([dir=rtl]) .validation-icon{margin-right:var(
--spectrum-picker-texticon-error-icon-margin-left
)}:host([dir=ltr]) #label~.picker{margin-left:var(
--spectrum-picker-texticon-ui-icon-gap
)}:host([dir=rtl]) #label~.picker{margin-right:var(
--spectrum-picker-texticon-ui-icon-gap
)}#popover{max-width:var(
--spectrum-picker-texticon-popover-max-width
)}:host([dir=ltr]) .spectrum-Picker-popover--quiet{margin-left:calc((var(
--spectrum-picker-m-quiet-texticon-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))*-1)}:host([dir=rtl]) .spectrum-Picker-popover--quiet{margin-right:calc((var(
--spectrum-picker-m-quiet-texticon-popover-offset-x,
var(--spectrum-global-dimension-size-150)
) + var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))*-1)}#button{background-color:var(
--spectrum-picker-m-texticon-background-color,var(--spectrum-alias-component-background-color-default)
);border-color:var(
--spectrum-picker-m-texticon-border-color,var(--spectrum-alias-component-border-color-default)
);color:var(
--spectrum-picker-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}#button:hover{background-color:var(
--spectrum-picker-m-texticon-background-color-hover,var(--spectrum-alias-component-background-color-hover)
);border-color:var(
--spectrum-picker-m-texticon-border-color-hover,var(--spectrum-alias-component-border-color-hover)
);color:var(
--spectrum-picker-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}#button:hover .picker{color:var(
--spectrum-picker-m-texticon-icon-color-hover,var(--spectrum-alias-component-icon-color-hover)
)}#button:active,:host([open]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-down,var(--spectrum-alias-component-background-color-down)
);border-color:var(
--spectrum-picker-m-texticon-border-color-down,var(--spectrum-alias-component-border-color-down)
)}#button:active.placeholder #label,:host([open]) #button.placeholder #label{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-down,var(--spectrum-alias-placeholder-text-color-down)
)}#button.focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-picker-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#button:focus-visible,:host([focused]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-key-focus)
);border-color:var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
);color:var(
--spectrum-picker-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}#button.focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}#button:focus-visible.placeholder,:host([focused]) #button.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([invalid]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error,var(--spectrum-semantic-negative-color-default)
)}:host([invalid]) #button .validation-icon{color:var(
--spectrum-picker-m-texticon-validation-icon-color-error,var(--spectrum-semantic-negative-icon-color)
)}:host([invalid]) #button:hover{border-color:var(
--spectrum-picker-m-texticon-border-color-error-hover,var(--spectrum-semantic-negative-color-hover)
)}:host([invalid]) #button:active,:host([invalid][open]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-down,var(--spectrum-semantic-negative-color-down)
)}:host([invalid]) #button.focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([invalid]) #button:focus-visible,:host([invalid][focused]) #button{border-color:var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
);box-shadow:0 0 0 var(--spectrum-picker-texticon-border-size-increase-focus) var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}#button:disabled,:host([disabled]) #button{background-color:var(
--spectrum-picker-m-texticon-background-color-disabled,var(--spectrum-alias-component-background-color-disabled)
);color:var(
--spectrum-picker-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}#button:disabled .icon,#button:disabled .picker,#button:disabled .validation-icon,:host([disabled]) #button .icon,:host([disabled]) #button .picker,:host([disabled]) #button .validation-icon{color:var(
--spectrum-picker-m-texticon-icon-color-disabled,var(--spectrum-alias-component-icon-color-disabled)
)}#button:disabled #label.placeholder,:host([disabled]) #button #label.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.picker{color:var(
--spectrum-picker-m-texticon-icon-color,var(--spectrum-alias-component-icon-color-default)
)}#label.placeholder{color:var(
--spectrum-picker-m-texticon-placeholder-text-color,var(--spectrum-alias-placeholder-text-color)
)}#label.placeholder:hover{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-hover,var(--spectrum-alias-placeholder-text-color-hover)
)}#label.placeholder:active{color:var(
--spectrum-picker-m-texticon-placeholder-text-color-mouse-focus,var(--spectrum-alias-placeholder-text-color-down)
)}:host([quiet]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color,var(--spectrum-alias-component-background-color-quiet-default)
);border-color:var(
--spectrum-picker-m-quiet-texticon-border-color,var(--spectrum-alias-component-border-color-quiet-default)
);color:var(
--spectrum-picker-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([quiet]) #button:hover{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-hover,var(--spectrum-alias-component-background-color-quiet-hover)
);color:var(
--spectrum-picker-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([quiet]) #button.focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button:focus-visible,:host([quiet][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button.focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button:focus-visible.placeholder,:host([quiet][focused]) #button.placeholder{color:var(
--spectrum-picker-m-quiet-texticon-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([quiet]) #button.focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([quiet]) #button:focus-visible .picker,:host([quiet][focused]) #button .picker{color:var(
--spectrum-picker-m-texticon-icon-color-key-focus,var(--spectrum-alias-component-icon-color-key-focus)
)}:host([quiet]) #button:active,:host([quiet][open]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-down,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-picker-m-quiet-texticon-border-color-down,var(--spectrum-alias-component-border-color-quiet-down)
)}:host([quiet]) #button:active.focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button.focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet]) #button:active:focus-visible,:host([quiet][focused]) #button:active,:host([quiet][open]) #button:focus-visible,:host([quiet][open][focused]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-key-focus,var(--spectrum-alias-component-background-color-quiet-key-focus)
);box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-key-focus,var(--spectrum-alias-component-border-color-key-focus)
)}:host([quiet][invalid]) #button.focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([quiet][invalid]) #button:focus-visible,:host([quiet][invalid][focused]) #button{box-shadow:0 2px 0 0 var(
--spectrum-picker-m-texticon-border-color-error-key-focus,var(--spectrum-alias-border-color-key-focus)
)}:host([quiet]) #button:disabled,:host([quiet][disabled]) #button{background-color:var(
--spectrum-picker-m-quiet-texticon-background-color-disabled,var(--spectrum-alias-component-background-color-quiet-disabled)
);color:var(
--spectrum-picker-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
)}:host{display:inline-flex;max-width:100%;min-width:var(--spectrum-picker-min-width);vertical-align:top;width:var(--spectrum-picker-width)}:host([quiet]){min-width:0;width:auto}:host([size]){--spectrum-picker-width:var(--spectrum-global-dimension-size-2400)}#button{max-width:100%;min-width:100%;width:100%}:host([readonly]) #button{-webkit-user-select:inherit;user-select:inherit}sp-popover{display:none}.picker,.validation-icon{flex-shrink:0}:host([focused]:not([quiet])) #button #label.placeholder{color:var(
--spectrum-picker-placeholder-text-color-key-focus,var(--spectrum-alias-placeholder-text-color-hover)
)}:host([focused]:not([quiet])) #button .picker{color:var(
--spectrum-picker-icon-color-key-focus,var(--spectrum-alias-icon-color-focus)
)}.visually-hidden{clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}:host([dir=ltr]) #label.visually-hidden+.picker{margin-left:auto}:host([dir=rtl]) #label.visually-hidden+.picker{margin-right:auto}
`;var Wr=Kr;const Yr=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M3 9.95a.875.875 0 01-.615-1.498L5.88 5 2.385 1.547A.875.875 0 013.615.302L7.74 4.377a.876.876 0 010 1.246L3.615 9.698A.872.872 0 013 9.95z"
    />
  </svg>`;class Xr extends g{render(){return P(l),Yr()}}customElements.define("sp-icon-chevron100",Xr);const Gr=h`
.checkmark{align-self:flex-start;display:none;opacity:1;transform:scale(1)}:host([dir=ltr]) .checkmark{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .checkmark{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}.checkmark{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]) .chevron{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .chevron{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}.chevron{flex-grow:0;margin-top:calc(var(--spectrum-listitem-texticon-ui-icon-margin-top) - var(--spectrum-listitem-texticon-padding-y) + 1px)}:host([dir=ltr]){border-left:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host([dir=rtl]){border-right:var(--spectrum-listitem-texticon-focus-indicator-size) solid transparent}:host{align-items:center;box-sizing:border-box;cursor:pointer;display:flex;font-size:var(--spectrum-listitem-texticon-text-size);font-style:normal;font-weight:var(--spectrum-listitem-texticon-text-font-weight);margin:0;min-height:var(--spectrum-listitem-texticon-height);padding:var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-right) var(--spectrum-listitem-texticon-padding-y) var(--spectrum-listitem-texticon-padding-left);position:relative;text-decoration:none}:host(:focus){outline:none}:host([dir=ltr][selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([selected]) .checkmark{display:block}.icon,::slotted([slot=icon]){align-self:flex-start;flex-shrink:0}:host([dir=ltr]) .icon+#label,:host([dir=ltr]) slot[name=icon]+#label{margin-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .icon+#label,:host([dir=rtl]) slot[name=icon]+#label{margin-right:var(
--spectrum-listitem-texticon-icon-gap
)}.icon+#label,slot[name=icon]+#label{width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap) - var(--spectrum-listitem-textthumbnail-padding-left) - var(
--spectrum-alias-workflow-icon-size-m,
var(--spectrum-global-dimension-size-225)
))}:host([no-wrap]) #label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([dir=ltr]) .checkmark,:host([dir=ltr]) .chevron{padding-left:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .checkmark,:host([dir=rtl]) .chevron{padding-right:var(
--spectrum-listitem-texticon-icon-gap
)}:host([dir=rtl]) .chevron{transform:matrix(-1,0,0,1,0,0)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
);color:var(
--spectrum-listitem-m-texticon-text-color,var(--spectrum-alias-component-text-color-default)
)}:host([dir=ltr].focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=ltr]:focus-visible),:host([dir=ltr][focused]){border-left-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl].focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host([dir=rtl]:focus-visible),:host([dir=rtl][focused]){border-right-color:var(
--spectrum-listitem-m-texticon-focus-indicator-color,var(--spectrum-alias-border-color-key-focus)
)}:host(.focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(:focus-visible),:host([focused]){background-color:var(
--spectrum-listitem-m-texticon-background-color-key-focus,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-key-focus,var(--spectrum-alias-component-text-color-key-focus)
)}:host(.is-highlighted),:host(.is-open),:host(:focus),:host(:hover){background-color:var(
--spectrum-listitem-m-texticon-background-color-hover,var(--spectrum-alias-background-color-hover-overlay)
);color:var(
--spectrum-listitem-m-texticon-text-color-hover,var(--spectrum-alias-component-text-color-hover)
)}:host([selected]){color:var(
--spectrum-listitem-m-texticon-text-color-selected,var(--spectrum-alias-component-text-color-default)
)}:host([selected]) .checkmark{color:var(
--spectrum-listitem-m-texticon-ui-icon-color-selected,var(--spectrum-alias-icon-color-selected)
)}:host(:active),:host([active]){background-color:var(
--spectrum-listitem-m-texticon-background-color-down,var(--spectrum-alias-background-color-hover-overlay)
)}:host([disabled]){background-color:var(
--spectrum-listitem-m-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
);background-image:none;color:var(
--spectrum-listitem-m-texticon-text-color-disabled,var(--spectrum-alias-component-text-color-disabled)
);cursor:default}#label{flex:1 1 auto;-webkit-hyphens:auto;hyphens:auto;line-height:var(--spectrum-listitem-texticon-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap))}.spectrum-Menu-itemLabel--wrapping{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host([hidden]){display:none}#button{inset:0;position:absolute}::slotted([slot=value]){align-self:start}:host([dir=ltr]) ::slotted([slot=value]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=value]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}:host([dir=ltr]) ::slotted([slot=icon]){margin-right:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) ::slotted([slot=icon]){margin-left:var(--spectrum-listitem-texticon-icon-gap)}:host([dir=rtl]) slot[name=icon]+#label{margin-right:0}:host([dir=ltr]) slot[name=icon]+#label{margin-left:0}:host([dir=rtl]) .chevron{padding-left:var(--spectrum-listitem-texticon-icon-gap);padding-right:0}
`;var Qr=Gr;const Zr=100;class Jr extends Event{constructor(){super("sp-menu-item-removed",{bubbles:!0,composed:!0}),this.focused=!1}get item(){return this._item}reset(t){this._item=t}}class to extends Event{constructor(){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0})}set focusRoot(t){this.item.menuData.focusRoot=this.item.menuData.focusRoot||t}set selectionRoot(t){this.item.menuData.selectionRoot=this.item.menuData.selectionRoot||t}get item(){return this._item}set currentAncestorWithSelects(t){this._currentAncestorWithSelects=t}get currentAncestorWithSelects(){return this._currentAncestorWithSelects}reset(t){this._item=t,this._currentAncestorWithSelects=void 0,t.menuData={focusRoot:void 0,selectionRoot:void 0}}}const ot=new to,Rt=new Jr;class $ extends Qt(_){constructor(){super(),this.isInSubmenu=!1,this.active=!1,this.focused=!1,this.selected=!1,this._value="",this.hasSubmenu=!1,this.noWrap=!1,this.open=!1,this.handleSubmenuChange=()=>{var t;(t=this.menuData.selectionRoot)===null||t===void 0||t.selectOrToggleItem(this)},this.handleSubmenuPointerenter=()=>{this.leaveTimeout&&(clearTimeout(this.leaveTimeout),delete this.leaveTimeout)},this.menuData={focusRoot:void 0,selectionRoot:void 0},this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0})}static get styles(){return[Qr,ie,Tt]}get value(){return this._value||this.itemText}set value(t){t!==this._value&&(this._value=t||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"))}get itemText(){return this.itemChildren.content.reduce((t,e)=>t+(e.textContent||"").trim(),"")}get focusElement(){return this}get itemChildren(){if(this._itemChildren)return this._itemChildren;const t=this.shadowRoot.querySelector('slot[name="icon"]'),e=t?t.assignedElements().map(i=>{const c=i.cloneNode(!0);return c.removeAttribute("slot"),c.classList.toggle("icon"),c}):[],r=this.shadowRoot.querySelector("slot:not([name])"),o=r?r.assignedNodes().map(i=>i.cloneNode(!0)):[];return this._itemChildren={icon:e,content:o},this._itemChildren}click(){this.disabled||this.shouldProxyClick()||super.click()}handleClickCapture(t){if(this.disabled)return t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),!1}proxyFocus(){this.focus()}shouldProxyClick(){let t=!1;return this.anchorElement&&(this.anchorElement.click(),t=!0),t}breakItemChildrenCache(){this._itemChildren=void 0,this.triggerUpdate()}render(){return l`
            <slot name="icon" @slotchange=${this.breakItemChildrenCache}></slot>
            <div id="label">
                <slot
                    id="slot"
                    @slotchange=${this.breakItemChildrenCache}
                ></slot>
            </div>
            <slot name="value"></slot>
            ${this.selected?l`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 icon checkmark"
                      ></sp-icon-checkmark100>
                  `:l``}
            ${this.href&&this.href.length>0?super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"}):l``}
            <slot
                hidden
                name="submenu"
                @slotchange=${this.manageSubmenu}
            ></slot>
            ${this.hasSubmenu?l`
                      <sp-icon-chevron100
                          class="spectrum-UIIcon-ChevronRight100 chevron icon"
                      ></sp-icon-chevron100>
                  `:l``}
        `}manageSubmenu(t){const e=t.target.assignedElements({flatten:!0});this.hasSubmenu=this.open||!!e.length}handleRemoveActive(t){t.type==="pointerleave"&&this.hasSubmenu||this.hasSubmenu||this.open||(this.active=!1)}handlePointerdown(){this.active=!0}firstUpdated(t){super.firstUpdated(t),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.hasAttribute("id")||(this.id=`sp-menu-item-${$.instanceCount++}`)}handleSubmenuClick(){this.openOverlay({immediate:!0})}handlePointerenter(){if(this.leaveTimeout){clearTimeout(this.leaveTimeout),delete this.leaveTimeout;return}this.openOverlay()}handlePointerleave(){this.hasSubmenu&&this.open&&(this.leaveTimeout=setTimeout(()=>{delete this.leaveTimeout,this.closeOverlay&&this.closeOverlay(!0)},Zr))}async openOverlay({immediate:t}={}){var e;if(!this.hasSubmenu||this.open)return;this.open=!0,this.active=!0;const r=this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements()[0];r.addEventListener("pointerenter",this.handleSubmenuPointerenter),r.addEventListener("change",this.handleSubmenuChange);const o=document.createElement("sp-popover"),i=St([r],o,{position:"beforeend",prepareCallback:b=>{const x=b.slot;return b.tabIndex=0,b.removeAttribute("slot"),E=>{E.tabIndex=-1,E.slot=x}}}),c=At(this,"click",o,{placement:this.isLTR?"right-start":"left-start",receivesFocus:"auto",delayed:!t&&!1});let d=!1;const u=async(b=!1)=>{var x;delete this.closeOverlay,r.hasOpenSubmenu&&await r.closeOpenSubmenu(b),b||(d=!0),(x=this.menuData.focusRoot)===null||x===void 0||x.submenuWillCloseOn(this),(await c)()};this.closeOverlay=u,!((e=this.menuData.focusRoot)===null||e===void 0)&&e.hasOpenSubmenu&&this.menuData.focusRoot.closeOpenSubmenu(!0);const m=()=>{var b;r.setCloseSelfAsSubmenu(u),(b=this.menuData.focusRoot)===null||b===void 0||b.setCloseOpenSubmenu(u)},p=b=>{var x,E;b.stopPropagation(),i(),r.setCloseSelfAsSubmenu(u),(x=this.menuData.focusRoot)===null||x===void 0||x.setCloseOpenSubmenu(u),this.open=!1,this.active=!1,(d||b.detail.reason==="external-click")&&((E=this.menuData.focusRoot)===null||E===void 0||E.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0,detail:{reason:"external-click"}})))};this.addEventListener("sp-opened",m,{once:!0}),this.addEventListener("sp-closed",p,{once:!0})}updateAriaSelected(){const t=this.getAttribute("role");t==="option"?this.setAttribute("aria-selected",this.selected?"true":"false"):(t==="menuitemcheckbox"||t==="menuitemradio")&&this.setAttribute("aria-checked",this.selected?"true":"false")}setRole(t){this.setAttribute("role",t),this.updateAriaSelected()}updated(t){super.updated(t),t.has("label")&&this.setAttribute("aria-label",this.label||""),t.has("active")&&(this.active?(this.addEventListener("pointerup",this.handleRemoveActive),this.addEventListener("pointerleave",this.handleRemoveActive)):(this.removeEventListener("pointerup",this.handleRemoveActive),this.removeEventListener("pointerleave",this.handleRemoveActive))),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),t.has("selected")&&this.updateAriaSelected(),t.has("hasSubmenu")&&(this.hasSubmenu?(this.addEventListener("click",this.handleSubmenuClick),this.addEventListener("pointerenter",this.handlePointerenter),this.addEventListener("pointerleave",this.handlePointerleave)):this.closeOverlay||(this.removeEventListener("click",this.handleSubmenuClick),this.removeEventListener("pointerenter",this.handlePointerenter),this.removeEventListener("pointerleave",this.handlePointerleave)))}connectedCallback(){super.connectedCallback(),this.isInSubmenu=!!this.closest('[slot="submenu"]'),!this.isInSubmenu&&(ot.reset(this),this.dispatchEvent(ot),this._parentElement=this.parentElement)}disconnectedCallback(){var t;Rt.reset(this),this.isInSubmenu||(t=this._parentElement)===null||t===void 0||t.dispatchEvent(Rt),this.isInSubmenu=!1,super.disconnectedCallback()}async triggerUpdate(){this.isInSubmenu||(await new Promise(t=>requestAnimationFrame(t)),ot.reset(this),this.dispatchEvent(ot))}}$.instanceCount=0;s([n({type:Boolean,reflect:!0})],$.prototype,"active",void 0);s([n({type:Boolean,reflect:!0})],$.prototype,"focused",void 0);s([n({type:Boolean,reflect:!0})],$.prototype,"selected",void 0);s([n({type:String})],$.prototype,"value",null);s([n({type:Boolean})],$.prototype,"hasSubmenu",void 0);s([n({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged(){return!1}})],$.prototype,"noWrap",void 0);s([y(".anchor")],$.prototype,"anchorElement",void 0);s([n({type:Boolean})],$.prototype,"open",void 0);const eo=h`
:host{--spectrum-menu-margin-x:var(
--spectrum-global-dimension-size-40
);--spectrum-listitem-texticon-heading-text-size:var(
--spectrum-global-dimension-font-size-50
);--spectrum-listitem-texticon-heading-text-font-weight:400;--spectrum-listitem-texticon-heading-text-transform:uppercase;--spectrum-listitem-texticon-heading-letter-spacing:0.06em;--spectrum-listitem-texticon-heading-margin:var(
--spectrum-global-dimension-size-75
) 0 0 0;--spectrum-listitem-texticon-heading-padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150);--spectrum-listitem-texticon-padding-y:var(
--spectrum-global-dimension-size-85
);--spectrum-listitem-texticon-selectable-padding-right:calc(var(--spectrum-listitem-texticon-ui-icon-width) + var(--spectrum-listitem-texticon-ui-icon-gap) + var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
));--spectrum-listitem-texticon-label-line-height:1.3;--spectrum-listitem-texticon-heading-line-height:var(
--spectrum-alias-body-text-line-height,var(--spectrum-global-font-line-height-medium)
)}:host{--spectrum-listitem-texticon-padding-left:var(
--spectrum-listitem-m-texticon-padding-left
);--spectrum-listitem-textthumbnail-padding-left:var(
--spectrum-listitem-m-textthumbnail-padding-left
);--spectrum-listitem-texticon-text-size:var(
--spectrum-listitem-m-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-listitem-texticon-text-font-weight:var(
--spectrum-listitem-m-texticon-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-listitem-texticon-icon-gap:var(
--spectrum-listitem-m-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-divider-size:var(
--spectrum-listitem-m-texticon-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-texticon-divider-padding:var(
--spectrum-listitem-m-texticon-divider-padding,var(--spectrum-global-dimension-static-size-40)
);--spectrum-listitem-texticon-ui-icon-margin-top:var(
--spectrum-listitem-m-texticon-ui-icon-margin-top,var(--spectrum-global-dimension-size-125)
);--spectrum-listitem-texticon-ui-icon-width:var(
--spectrum-listitem-m-texticon-ui-icon-width,var(--spectrum-alias-ui-icon-checkmark-size-100)
);--spectrum-listitem-texticon-ui-icon-gap:var(
--spectrum-listitem-m-texticon-ui-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-listitem-texticon-padding-right:var(
--spectrum-listitem-m-texticon-padding-right,var(--spectrum-global-dimension-size-150)
);--spectrum-listitem-texticon-focus-indicator-size:var(
--spectrum-listitem-m-texticon-focus-indicator-size,var(--spectrum-alias-border-size-thick)
);--spectrum-listitem-texticon-height:var(
--spectrum-listitem-m-texticon-height,var(--spectrum-global-dimension-size-400)
)}:host{box-sizing:border-box;display:inline-block;list-style-type:none;margin-bottom:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);margin-left:0;margin-right:0;margin-top:var(
--spectrum-popover-padding-y,var(--spectrum-global-dimension-size-50)
);overflow:auto;padding:0}:host([dir=ltr][selects]) ::slotted(sp-menu-item){padding-right:var(
--spectrum-listitem-texticon-selectable-padding-right
)}:host([dir=rtl][selects]) ::slotted(sp-menu-item){padding-left:var(
--spectrum-listitem-texticon-selectable-padding-right
)}:host([dir=ltr][selects]) ::slotted(sp-menu-item[selected]){padding-right:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}:host([dir=rtl][selects]) ::slotted(sp-menu-item[selected]){padding-left:calc(var(--spectrum-listitem-texticon-padding-right) - var(
--spectrum-popover-border-size,
var(--spectrum-alias-border-size-thin)
))}::slotted(sp-menu){display:block}:host{--spectrum-listheading-text-color:var(
--spectrum-global-color-gray-700
)}:host{background-color:var(
--spectrum-listitem-m-texticon-background-color,var(--spectrum-alias-background-color-transparent)
)}:host{--spectrum-listitem-selectable-padding-right:calc(var(--spectrum-global-dimension-size-100) + var(--spectrum-icon-checkmark-medium-width) + var(--spectrum-listitem-icon-gap));width:var(--swc-menu-width)}:host(:focus){outline:none}::slotted(*){--swc-menu-width:100%}
`;var ro=eo;function Mt(a,t){return!!t&&(a===t||a.contains(t))}const it=()=>{};class O extends k{constructor(){super(),this._closeSelfAsSubmenu=it,this.isSubmenu=!1,this._closeOpenSubmenu=it,this.hasOpenSubmenu=!1,this.label="",this.value="",this.valueSeparator=",",this.selected=[],this.selectedItems=[],this.childItemSet=new Set,this.focusedItemIndex=0,this.focusInItemIndex=0,this.selectedItemsMap=new Map,this._willUpdateItems=!1,this._notFirstUpdated=!1,this.cacheUpdated=Promise.resolve(),this.addEventListener("sp-menu-item-added-or-updated",this.onSelectableItemAddedOrUpdated),this.addEventListener("sp-menu-item-added-or-updated",this.onFocusableItemAddedOrUpdated,{capture:!0}),this.addEventListener("sp-menu-item-removed",this.removeChildItem),this.addEventListener("click",this.onClick),this.addEventListener("focusin",this.handleFocusin)}static get styles(){return[ro]}get closeSelfAsSubmenu(){return this.isSubmenu=!1,this._closeSelfAsSubmenu}setCloseSelfAsSubmenu(t){if(t===this._closeSelfAsSubmenu){this.isSubmenu=!1,this._closeSelfAsSubmenu=it;return}this.isSubmenu=!0,this._closeSelfAsSubmenu=t}get closeOpenSubmenu(){return this.hasOpenSubmenu=!1,this._closeOpenSubmenu}setCloseOpenSubmenu(t){if(t===this._closeOpenSubmenu){this.hasOpenSubmenu=!1,this._closeOpenSubmenu=it;return}this.hasOpenSubmenu=!0,this._closeOpenSubmenu=t}get childItems(){return this.cachedChildItems||(this.cachedChildItems=this.updateCachedMenuItems()),this.cachedChildItems}updateCachedMenuItems(){this.cachedChildItems=[];const t=this.menuSlot?this.menuSlot.assignedElements({flatten:!0}):[];for(const e of t){const r=e instanceof $?[e]:[...e.querySelectorAll("*")];for(const o of r)this.childItemSet.has(o)&&this.cachedChildItems.push(o)}return this.cachedChildItems}get childRole(){if(this.resolvedRole==="listbox")return"option";switch(this.resolvedSelects){case"single":return"menuitemradio";case"multiple":return"menuitemcheckbox";default:return"menuitem"}}get ownRole(){return"menu"}onFocusableItemAddedOrUpdated(t){var e;t.item.menuData.focusRoot&&(this.tabIndex=-1),t.focusRoot=this,this.addChildItem(t.item),this.selects==="inherit"?(this.resolvedSelects="inherit",this.resolvedRole=((e=t.currentAncestorWithSelects)===null||e===void 0?void 0:e.getAttribute("role"))||this.getAttribute("role")||void 0):this.selects?(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects=this.selects,t.currentAncestorWithSelects=this):(this.resolvedRole=this.getAttribute("role")||void 0,this.resolvedSelects=this.resolvedRole==="none"?"ignore":"none")}onSelectableItemAddedOrUpdated(t){(this.resolvedSelects==="single"||this.resolvedSelects==="multiple"||!this.selects&&this.resolvedSelects!=="ignore")&&!t.item.menuData.selectionRoot&&(t.item.setRole(this.childRole),t.selectionRoot=this)}addChildItem(t){this.childItemSet.add(t),this.handleItemsChanged()}async removeChildItem(t){this.childItemSet.delete(t.item),this.cachedChildItems=void 0,t.item.focused&&(this.handleItemsChanged(),await this.updateComplete,this.focus())}focus({preventScroll:t}={}){if(!this.childItems.length||this.childItems.every(r=>r.disabled))return;if(this.childItems.some(r=>r.menuData.focusRoot!==this)){super.focus({preventScroll:t});return}this.focusMenuItemByOffset(0),super.focus({preventScroll:t});const e=this.querySelector("[selected]");e&&!t&&e.scrollIntoView({block:"nearest"})}submenuWillCloseOn(t){this.focusedItemIndex=this.childItems.indexOf(t),this.focusInItemIndex=this.focusedItemIndex}onClick(t){if(t.defaultPrevented)return;const r=t.composedPath().find(o=>o instanceof Element?o.getAttribute("role")===this.childRole:!1);if(!((r==null?void 0:r.href)&&r.href.length)){if((r==null?void 0:r.menuData.selectionRoot)===this&&this.childItems.length){if(t.preventDefault(),r.hasSubmenu||r.open)return;this.hasOpenSubmenu&&this.closeOpenSubmenu(),this.isSubmenu&&this.closeSelfAsSubmenu(),this.selectOrToggleItem(r)}else return;this.prepareToCleanUp()}}handleFocusin(t){var e;const r=Mt(this,t.relatedTarget);if(r||this.childItems.some(c=>c.menuData.focusRoot!==this))return;const o=this.getRootNode().activeElement,i=((e=this.childItems[this.focusedItemIndex])===null||e===void 0?void 0:e.menuData.selectionRoot)||this;if((o!==i||!r)&&(i.focus({preventScroll:!0}),o&&this.focusedItemIndex===0)){const c=this.childItems.findIndex(d=>d===o);c>0&&this.focusMenuItemByOffset(c)}this.startListeningToKeyboard()}startListeningToKeyboard(){this.addEventListener("keydown",this.handleKeydown),this.addEventListener("focusout",this.handleFocusout)}handleFocusout(t){if(Mt(this,t.relatedTarget)){t.composedPath()[0].focused=!1;return}if(this.stopListeningToKeyboard(),t.target===this&&this.childItems.some(e=>e.menuData.focusRoot===this)){const e=this.childItems[this.focusedItemIndex];e&&(e.focused=!1)}this.removeAttribute("aria-activedescendant")}stopListeningToKeyboard(){this.removeEventListener("keydown",this.handleKeydown),this.removeEventListener("focusout",this.handleFocusout)}async selectOrToggleItem(t){const e=this.resolvedSelects,r=new Map(this.selectedItemsMap),o=this.selected.slice(),i=this.selectedItems.slice(),c=this.value;if(this.childItems[this.focusedItemIndex].focused=!1,this.focusedItemIndex=this.childItems.indexOf(t),this.forwardFocusVisibleToItem(t),e==="multiple"){this.selectedItemsMap.has(t)?this.selectedItemsMap.delete(t):this.selectedItemsMap.set(t,!0);const u=[],m=[];this.childItemSet.forEach(p=>{p.menuData.selectionRoot===this&&this.selectedItemsMap.has(p)&&(u.push(p.value),m.push(p))}),this.selected=u,this.selectedItems=m,this.value=this.selected.join(this.valueSeparator)}else this.selectedItemsMap.clear(),this.selectedItemsMap.set(t,!0),this.value=t.value,this.selected=[t.value],this.selectedItems=[t];if(await this.updateComplete,!this.dispatchEvent(new Event("change",{cancelable:!0,bubbles:!0,composed:!0}))){this.selected=o,this.selectedItems=i,this.selectedItemsMap=r,this.value=c;return}if(e==="single"){for(const u of r.keys())u!==t&&(u.selected=!1);t.selected=!0}else e==="multiple"&&(t.selected=!t.selected)}navigateWithinMenu(t){const{code:e}=t,r=this.childItems[this.focusedItemIndex],o=e==="ArrowDown"?1:-1,i=this.focusMenuItemByOffset(o);i!==r&&(t.preventDefault(),i.scrollIntoView({block:"nearest"}))}navigateBetweenRelatedMenus(t){const e=this.isLTR&&t==="ArrowRight"||!this.isLTR&&t==="ArrowLeft",r=this.isLTR&&t==="ArrowLeft"||!this.isLTR&&t==="ArrowRight";if(e){const o=this.childItems[this.focusedItemIndex];o.hasSubmenu&&(this.blur(),o.openOverlay({immediate:!0}))}else this.isSubmenu&&r&&this.closeSelfAsSubmenu(!0)}handleKeydown(t){var e;const{code:r}=t;if(r==="Tab"){this.prepareToCleanUp();return}if(r==="Space"){const o=this.childItems[this.focusedItemIndex];if(o.hasSubmenu){this.blur(),o.openOverlay({immediate:!0});return}}if(r==="Space"||r==="Enter"){(e=this.childItems[this.focusedItemIndex])===null||e===void 0||e.click();return}if(r==="ArrowDown"||r==="ArrowUp"){this.navigateWithinMenu(t);return}this.navigateBetweenRelatedMenus(r)}focusMenuItemByOffset(t){const e=t||1,r=this.childItems[this.focusedItemIndex];r.focused=!1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+t)%this.childItems.length;let o=this.childItems[this.focusedItemIndex],i=this.childItems.length;for(;o.disabled&&i;)i-=1,this.focusedItemIndex=(this.childItems.length+this.focusedItemIndex+e)%this.childItems.length,o=this.childItems[this.focusedItemIndex];return o!=null&&o.disabled||this.forwardFocusVisibleToItem(o),o}prepareToCleanUp(){document.addEventListener("focusout",()=>{requestAnimationFrame(()=>{const t=this.childItems[this.focusedItemIndex];t&&(t.focused=!1,this.updateSelectedItemIndex())})},{once:!0})}updateSelectedItemIndex(){let t=0;const e=new Map,r=[],o=[];let i=this.childItems.length;for(;i;){i-=1;const c=this.childItems[i];c.menuData.selectionRoot===this&&(c.selected&&(t=i,e.set(c,!0),r.unshift(c.value),o.unshift(c)),i!==t&&(c.focused=!1))}o.map((c,d)=>{d>0&&(c.focused=!1)}),this.selectedItemsMap=e,this.selected=r,this.selectedItems=o,this.value=this.selected.join(this.valueSeparator),this.focusedItemIndex=t,this.focusInItemIndex=t}handleItemsChanged(){if(this.cachedChildItems=void 0,!this._willUpdateItems){let t=()=>{};this.cacheUpdated=new Promise(e=>t=e),this._willUpdateItems=!0,window.requestAnimationFrame(()=>{this.cachedChildItems===void 0&&(this.updateSelectedItemIndex(),this.updateItemFocus()),this._willUpdateItems=!1,t()})}}updateItemFocus(){if(this.childItems.length==0)return;const t=this.childItems[this.focusInItemIndex];this.getRootNode().activeElement===t.menuData.focusRoot&&this.forwardFocusVisibleToItem(t)}forwardFocusVisibleToItem(t){t.menuData.focusRoot===this&&(t.focused=this.hasVisibleFocusInTree(),this.setAttribute("aria-activedescendant",t.id),t.menuData.selectionRoot&&t.menuData.selectionRoot!==this&&t.menuData.selectionRoot.focus())}render(){return l`
            <slot></slot>
        `}firstUpdated(t){if(super.firstUpdated(t),!this.hasAttribute("tabindex")){const r=this.getAttribute("role");r==="group"?this.tabIndex=-1:r!=="none"&&(this.tabIndex=0)}const e=[new Promise(r=>requestAnimationFrame(()=>r(!0)))];[...this.children].forEach(r=>{r.localName==="sp-menu-item"&&e.push(r.updateComplete)}),this.childItemsUpdated=Promise.all(e)}updated(t){super.updated(t),t.has("selects")&&this._notFirstUpdated&&this.selectsChanged(),t.has("label")&&(this.label?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label")),this._notFirstUpdated=!0}selectsChanged(){const t=[new Promise(e=>requestAnimationFrame(()=>e(!0)))];this.childItemSet.forEach(e=>{t.push(e.triggerUpdate())}),this.childItemsUpdated=Promise.all(t)}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role",this.ownRole),this.updateComplete.then(()=>this.updateItemFocus())}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.childItemsUpdated,await this.cacheUpdated,t}}s([n({type:String,reflect:!0})],O.prototype,"label",void 0);s([n({type:String,reflect:!0})],O.prototype,"selects",void 0);s([n({type:String})],O.prototype,"value",void 0);s([n({type:String,attribute:"value-separator"})],O.prototype,"valueSeparator",void 0);s([n({attribute:!1})],O.prototype,"selected",void 0);s([n({attribute:!1})],O.prototype,"selectedItems",void 0);s([y("slot:not([name])")],O.prototype,"menuSlot",void 0);customElements.define("sp-menu",O);const oo=h`
:host{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-background-entry-animation-delay:0ms;--spectrum-dialog-confirm-background-exit-animation-ease:cubic-bezier(0.5,0,1,1);--spectrum-dialog-confirm-background-entry-animation-ease:cubic-bezier(0,0,0.4,1)}:host{bottom:0;left:0;overflow:hidden;position:fixed;right:0;top:0;transition:opacity var(
--spectrum-dialog-confirm-background-exit-animation-duration,var(--spectrum-global-animation-duration-300)
) var(
--spectrum-dialog-confirm-background-exit-animation-ease,var(--spectrum-global-animation-linear)
) var(
--spectrum-dialog-confirm-background-exit-animation-delay,var(--spectrum-global-animation-duration-200)
),visibility 0ms linear calc(var(
--spectrum-dialog-confirm-background-exit-animation-delay,
var(--spectrum-global-animation-duration-200)
) + var(
--spectrum-dialog-confirm-background-exit-animation-duration,
var(--spectrum-global-animation-duration-300)
));z-index:1}:host([open]){transition:opacity var(
--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-global-animation-duration-600)
) var(
--spectrum-dialog-confirm-background-entry-animation-ease,var(--spectrum-global-animation-linear)
) var(--spectrum-dialog-confirm-background-entry-animation-delay,0ms)}:host{background:var(
--spectrum-dialog-confirm-overlay-background-color,var(--spectrum-alias-background-color-modal-overlay)
)}
`;var io=oo;class ce extends k{constructor(){super(...arguments),this.open=!1}static get styles(){return[io]}render(){return l``}}s([n({type:Boolean,reflect:!0})],ce.prototype,"open",void 0);customElements.define("sp-underlay",ce);const so="(max-width: 700px) and (hover: none) and (pointer: coarse), (max-height: 700px) and (hover: none) and (pointer: coarse)";class le{constructor(t,e){this.key=Symbol("match-media-key"),this.matches=!1,this.host=t,this.media=window.matchMedia(e),this.matches=this.media.matches,this.onChange=this.onChange.bind(this),t.addController(this)}hostConnected(){this.media.addEventListener("change",this.onChange)}hostDisconnected(){this.media.removeEventListener("change",this.onChange)}onChange(t){this.matches!==t.matches&&(this.matches=t.matches,this.host.requestUpdate(this.key,!this.matches))}}const ao=h`
.modal{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .modal{opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-dialog-fullscreen-margin:32px;--spectrum-dialog-max-height:90vh}.modal{border-radius:var(
--spectrum-dialog-confirm-border-radius,var(--spectrum-alias-component-border-radius)
);max-height:var(--spectrum-dialog-max-height);outline:none;overflow:hidden;pointer-events:auto;transform:translateY(var(
--spectrum-dialog-confirm-entry-animation-distance,var(--spectrum-global-dimension-size-250)
));transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
));z-index:2}:host([open]) .modal{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media only screen and (max-device-height:350px),only screen and (max-device-width:400px){:host([responsive]) .modal{border-radius:0;height:100%;max-height:100%;max-width:100%;width:100%}}.fullscreen{bottom:var(--spectrum-dialog-fullscreen-margin);left:var(
--spectrum-dialog-fullscreen-margin
);right:var(--spectrum-dialog-fullscreen-margin);top:var(--spectrum-dialog-fullscreen-margin)}.fullscreen,.fullscreenTakeover{max-height:none;max-width:none;position:fixed}.fullscreenTakeover{border:none;border-radius:0;bottom:0;box-sizing:border-box;left:0;right:0;top:0}.fullscreenTakeover,:host([open]) .fullscreenTakeover{transform:none}.modal{background:var(
--spectrum-dialog-confirm-background-color,var(--spectrum-alias-background-color-default)
)}:host{--spectrum-dialog-confirm-exit-animation-duration:var(--swc-test-duration);--spectrum-dialog-confirm-entry-animation-duration:var(
--swc-test-duration
)}
`;var no=ao;const co=h`
:host([dir=ltr]){left:0}:host([dir=rtl]){right:0}:host{bottom:0;display:flex;justify-content:center;position:fixed;width:100%;z-index:2}@media (max-width:375px){.spectrum-Tray{border-radius:var(--spectrum-tray-border-radius,0)}}.tray{opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([open]) .tray{opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host{--spectrum-dialog-confirm-exit-animation-delay:0ms;--spectrum-tray-margin-top:64px}:host([dir=ltr]) .spectrum-Tray-wrapper{left:0}:host([dir=rtl]) .spectrum-Tray-wrapper{right:0}.spectrum-Tray-wrapper{bottom:0;display:flex;justify-content:center;position:fixed;width:100%;z-index:2}.tray{border-radius:var(
--spectrum-tray-full-width-border-radius,var(--spectrum-alias-border-radius-regular)
) var(
--spectrum-tray-full-width-border-radius,var(--spectrum-alias-border-radius-regular)
) var(--spectrum-tray-border-radius,0) var(--spectrum-tray-border-radius,0);max-height:calc(100vh - var(--spectrum-tray-margin-top));max-width:var(--spectrum-tray-max-width,375px);min-height:var(
--spectrum-tray-min-height,var(--spectrum-global-dimension-static-size-800)
);outline:none;overflow:auto;padding:var(--spectrum-tray-padding-y,0) var(
--spectrum-tray-padding-x,var(--spectrum-global-dimension-static-size-100)
);transform:translateY(100%);transition:opacity var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms),visibility 0ms linear calc(var(--spectrum-dialog-confirm-exit-animation-delay, 0ms) + var(
--spectrum-dialog-confirm-exit-animation-duration,
var(--spectrum-global-animation-duration-100)
)),transform var(
--spectrum-dialog-confirm-exit-animation-duration,var(--spectrum-global-animation-duration-100)
) cubic-bezier(.5,0,1,1) var(--spectrum-dialog-confirm-exit-animation-delay,0ms);width:var(--spectrum-tray-width,100%)}:host([open]) .tray{transform:translateY(0);transition:transform var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
),opacity var(
--spectrum-dialog-confirm-entry-animation-duration,var(--spectrum-global-animation-duration-500)
) cubic-bezier(0,0,.4,1) var(
--spectrum-dialog-confirm-entry-animation-delay,var(--spectrum-global-animation-duration-200)
)}@media (max-width:375px){.tray{border-radius:var(--spectrum-tray-border-radius,0)}}:host{align-items:flex-end;max-height:var(--swc-visual-viewport-height);position:fixed!important}sp-underlay{touch-action:none}.tray{display:inline-flex;overscroll-behavior:contain;padding:var(--spectrum-tray-padding-y,0) var(--spectrum-tray-padding-x,0)}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var lo=co;class $t extends k{constructor(){super(...arguments),this.open=!1,this.prefersMotion=new le(this,"(prefers-reduced-motion: no-preference)"),this.transitionPromise=Promise.resolve()}static get styles(){return[no,lo]}focus(){const t=It(this);t?t.focus():this.children.length===1?this.tray.focus():super.focus()}overlayWillCloseCallback(){return this.open?(this.close(),!0):!1}close(){this.open=!1,this.prefersMotion.matches||this.dispatchClosed()}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}))}handleUnderlayTransitionend(){this.open||(this.dispatchClosed(),this.resolveTransitionPromise())}handleTrayTransitionend(){this.open&&this.resolveTransitionPromise()}update(t){t.has("open")&&t.get("open")!==void 0&&this.prefersMotion.matches&&(this.transitionPromise=new Promise(e=>this.resolveTransitionPromise=e)),super.update(t)}render(){return l`
            <sp-underlay
                ?open=${this.open}
                @click=${this.close}
                @transitionend=${this.handleUnderlayTransitionend}
            ></sp-underlay>
            <div
                class="tray modal"
                tabindex="-1"
                @transitionend=${this.handleTrayTransitionend}
            >
                <slot></slot>
            </div>
        `}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.transitionPromise,t}}s([n({type:Boolean,reflect:!0})],$t.prototype,"open",void 0);s([y(".tray")],$t.prototype,"tray",void 0);customElements.define("sp-tray",$t);const uo=h`
@keyframes sp-overlay-fade-in{0%{opacity:0;transform:var(--sp-overlay-from)}to{opacity:1;transform:translate(0)}}@keyframes sp-overlay-fade-out{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:var(--sp-overlay-from)}}:host{display:inline-block;left:-9999em;pointer-events:none;position:absolute;top:-9999em;z-index:1000}:host(:focus){outline:none}:host([placement=none]){height:100vh;height:-webkit-fill-available;height:fill-available;left:0;max-height:var(--swc-visual-viewport-height);position:fixed;top:0}#contents,sp-theme{height:100%}#contents{--swc-overlay-animation-distance:var(
--spectrum-picker-m-texticon-popover-offset-y,var(--spectrum-global-dimension-size-75)
);animation-duration:var(
--swc-test-duration,var(--spectrum-global-animation-duration-200,.16s)
);animation-timing-function:var(
--spectrum-global-animation-ease-out,ease-out
);box-sizing:border-box;display:inline-block;opacity:1;pointer-events:none;visibility:visible}:host([actual-placement*=top]) #contents{--sp-overlay-from:translateY(var(--spectrum-global-dimension-size-75));align-items:flex-end;display:inline-flex;padding-top:var(--swc-overlay-animation-distance)}:host([actual-placement*=right]) #contents{--sp-overlay-from:translateX(calc(var(--spectrum-global-dimension-size-75)*-1));padding-right:var(--swc-overlay-animation-distance)}:host([actual-placement*=bottom]) #contents{--sp-overlay-from:translateY(calc(var(--spectrum-global-dimension-size-75)*-1));padding-bottom:var(--swc-overlay-animation-distance)}:host([actual-placement*=left]) #contents{--sp-overlay-from:translateX(var(--spectrum-global-dimension-size-75));padding-left:var(--swc-overlay-animation-distance)}:host([animating]) ::slotted(*){pointer-events:none}:host(:not([animating])) ::slotted(*){pointer-events:auto}#contents ::slotted(*){position:relative}
`;var mo=uo;const Ht={initial:"idle",states:{idle:{on:{active:"active"}},active:{on:{hiding:"hiding",idle:"idle"}},hiding:{on:{dispose:"dispose"}},dispose:{on:{disposed:"disposed"}},disposed:{on:{}}}},Nt=(a,t)=>a?t&&Ht.states[a].on[t]||a:Ht.initial,wt=a=>{const t=a.closest("active-overlay");if(t)return t;const e=a.getRootNode();return e.host?wt(e.host):null};class D extends k{constructor(){super(),this._state=Nt(),this.animating=!1,this.theme={},this.tabbingAway=!1,this.offset=6,this.skidding=0,this.interaction="hover",this.positionAnimationFrame=0,this.willNotifyClosed=!1,this.isConstrained=!1,this.updateOverlayPosition=async()=>{if(!this.placement||this.placement==="none")return;await(document.fonts?document.fonts.ready:Promise.resolve());function t(m){const p=window.devicePixelRatio||1;return Math.round(m*p)/p||-1e4}const e=8,r=100,o=[ge({mainAxis:this.offset,crossAxis:this.skidding}),fe({fallbackStrategy:"initialPlacement"}),xe({padding:e}),ye({padding:e,apply:({width:m,height:p,floating:b})=>{const x=Math.max(r,Math.floor(p)),E=b.height;this.initialHeight=this.isConstrained&&this.initialHeight||E,this.isConstrained=E<this.initialHeight||x<=E;const Ft=this.isConstrained?`${x}px`:"";Object.assign(this.style,{maxWidth:`${Math.floor(m)}px`,maxHeight:Ft,height:Ft})}})];this.overlayContentTip&&o.push(ke({element:this.overlayContentTip}));const{x:i,y:c,placement:d,middlewareData:u}=await we(this.virtualTrigger||this.trigger,this,{placement:this.placement,middleware:o});if(Object.assign(this.style,{top:"0px",left:"0px",transform:`translate(${t(i)}px, ${t(c)}px)`}),d!==this.getAttribute("actual-placement")&&(this.setAttribute("actual-placement",d),this.overlayContent.setAttribute("placement",d)),this.overlayContentTip&&u.arrow){const{x:m,y:p}=u.arrow;Object.assign(this.overlayContentTip.style,{left:m!=null?`${t(m)}px`:"",top:p!=null?`${t(p)}px`:"",right:"",bottom:""})}},this.handleInlineTriggerKeydown=t=>{const{code:e,shiftKey:r}=t;if(e==="Tab"){if(r){this.tabbingAway=!0,this.dispatchEvent(new Event("close"));return}t.stopPropagation(),t.preventDefault(),this.focus()}},this.stealOverlayContentPromise=Promise.resolve(),this.stealOverlayContentPromise=new Promise(t=>this.stealOverlayContentResolver=t)}get state(){return this._state}set state(t){const e=Nt(this.state,t);e!==this.state&&(this._state=e,this.state==="active"||this.state==="hiding"?this.setAttribute("state",this.state):this.removeAttribute("state"))}async focus(){const t=It(this);if(t){t.updateComplete&&await t.updateComplete;const e=this.getRootNode().activeElement;(e===this||!this.contains(e))&&t.focus()}else super.focus();this.removeAttribute("tabindex")}get hasTheme(){return!!this.theme.color||!!this.theme.scale||!!this.theme.lang}static get styles(){return[mo]}get hasModalRoot(){return!!this._modalRoot}feature(){this.tabIndex=-1;const t=wt(this.trigger);t&&t.slot==="open"&&(this._modalRoot=t._modalRoot||t),(this.interaction==="modal"||this._modalRoot)&&(this.slot="open",this.interaction==="modal"&&this.setAttribute("aria-modal","true"),this._modalRoot&&(t==null||t.feature()))}obscure(t){if(this.slot&&t==="modal"){if(this.removeAttribute("slot"),this.removeAttribute("aria-modal"),this.interaction!=="modal"){const e=wt(this.trigger);return this._modalRoot=e==null?void 0:e.obscure(t),this._modalRoot}return this}}async firstUpdated(t){if(super.firstUpdated(t),!this.overlayContent||!this.trigger)return;this.stealOverlayContent(this.overlayContent),this.state="active",this.feature(),this.placement==="none"?this.style.setProperty("--swc-visual-viewport-height",`${window.innerHeight}px`):this.placement&&(await this.updateOverlayPosition(),document.addEventListener("sp-update-overlays",this.updateOverlayPosition),window.addEventListener("scroll",this.updateOverlayPosition));const e=[];this.placement&&this.placement!=="none"&&e.push(this.applyContentAnimation("sp-overlay-fade-in")),typeof this.overlayContent.updateComplete!="undefined"&&e.push(this.overlayContent.updateComplete),this.childrenReady=Promise.all(e)}async openCallback(t){await this.updateComplete,this.receivesFocus&&await this.focus(),await t(),this.trigger.dispatchEvent(new CustomEvent("sp-opened",{bubbles:!0,composed:!0,cancelable:!0,detail:{interaction:this.interaction}}))}open(t){this.extractDetail(t)}extractDetail(t){this.overlayContent=t.content,this.overlayContentTip=t.contentTip,this.trigger=t.trigger,this.virtualTrigger=t.virtualTrigger,this.placement=t.placement,this.offset=t.offset,this.skidding=t.skidding||0,this.interaction=t.interaction,this.theme=t.theme,this.receivesFocus=t.receivesFocus}dispose(){this.state==="dispose"&&(this.timeout&&(clearTimeout(this.timeout),delete this.timeout),this.trigger.removeEventListener("keydown",this.handleInlineTriggerKeydown),this.returnOverlayContent(),this.state="disposed",this.willNotifyClosed&&(this.overlayContent.dispatchEvent(new Event("sp-overlay-closed")),this.willNotifyClosed=!1))}stealOverlayContent(t){this.originalPlacement=t.getAttribute("placement"),this.restoreContent=St([t],this,{position:"beforeend",prepareCallback:e=>{const r=e.slot,o=e.placement;return e.removeAttribute("slot"),i=>{i.slot=r,i.placement=o}}}),this.stealOverlayContentResolver()}returnOverlayContent(){if(!this.restoreContent)return;const[t]=this.restoreContent();this.restoreContent=void 0,this.willNotifyClosed=!0,this.originalPlacement&&(t.setAttribute("placement",this.originalPlacement),delete this.originalPlacement)}async hide(t=!0){this.state="hiding",t&&await this.applyContentAnimation("sp-overlay-fade-out"),this.state="dispose"}schedulePositionUpdate(){cancelAnimationFrame(this.positionAnimationFrame),this.positionAnimationFrame=requestAnimationFrame(()=>this.updateOverlayPosition())}onSlotChange(){this.schedulePositionUpdate()}applyContentAnimation(t){return this.placement==="none"?Promise.resolve(!0):new Promise(e=>{const r=this.shadowRoot.querySelector("#contents"),o=i=>{t===i.animationName&&(r.removeEventListener("animationend",o),r.removeEventListener("animationcancel",o),this.animating=!1,e(i.type==="animationcancel"))};r.addEventListener("animationend",o),r.addEventListener("animationcancel",o),r.style.animationName=t,this.animating=!0})}renderTheme(t){const{color:e,scale:r,lang:o,theme:i}=this.theme;return l`
            <sp-theme
                theme=${v(i)}
                color=${v(e)}
                scale=${v(r)}
                lang=${v(o)}
                part="theme"
            >
                ${t}
            </sp-theme>
        `}render(){const t=l`
            <div id="contents">
                <slot @slotchange=${this.onSlotChange}></slot>
            </div>
        `;return this.hasTheme?this.renderTheme(t):t}static create(t){const e=new D;return t.content&&e.open(t),e}async getUpdateComplete(){const t=[super.getUpdateComplete(),this.stealOverlayContentPromise];this.childrenReady&&t.push(this.childrenReady);const[e]=await Promise.all(t);return e}disconnectedCallback(){document.removeEventListener("sp-update-overlays",this.updateOverlayPosition),window.removeEventListener("scroll",this.updateOverlayPosition),super.disconnectedCallback()}}s([n()],D.prototype,"_state",void 0);s([n({reflect:!0,type:Boolean})],D.prototype,"animating",void 0);s([n({reflect:!0})],D.prototype,"placement",void 0);s([n({attribute:!1})],D.prototype,"theme",void 0);s([n({attribute:!1})],D.prototype,"receivesFocus",void 0);const po=1e3,ho=1e3;class bo{constructor(t={}){this.warmUpDelay=po,this.coolDownDelay=ho,this.isWarm=!1,this.timeout=0,Object.assign(this,t)}async openTimer(t){if(this.cancelCooldownTimer(),!this.component||t!==this.component)return this.component&&(this.close(this.component),this.cancelCooldownTimer()),this.component=t,this.isWarm?!1:(this.promise=new Promise(e=>{this.resolve=e,this.timeout=window.setTimeout(()=>{this.resolve&&(this.resolve(!1),this.isWarm=!0)},this.warmUpDelay)}),this.promise);if(this.promise)return this.promise;throw new Error("Inconsistent state")}close(t){this.component&&this.component===t&&(this.resetCooldownTimer(),this.timeout>0&&(clearTimeout(this.timeout),this.timeout=0),this.resolve&&(this.resolve(!0),delete this.resolve),delete this.promise,delete this.component)}resetCooldownTimer(){this.isWarm&&(this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),this.cooldownTimeout=window.setTimeout(()=>{this.isWarm=!1,delete this.cooldownTimeout},this.coolDownDelay))}cancelCooldownTimer(){this.cooldownTimeout&&window.clearTimeout(this.cooldownTimeout),delete this.cooldownTimeout}}customElements.define("active-overlay",D);function vo(a){return a.button===0}function go(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}class fo{constructor(){this.overlays=[],this.preventMouseRootClose=!1,this.root=document.body,this.handlingResize=!1,this.overlayTimer=new bo,this.canTabTrap=!0,this.trappingInited=!1,this._eventsAreBound=!1,this._bodyMarginsApplied=!1,this.forwardContextmenuEvent=async t=>{const e=this.overlays[this.overlays.length-1];if(!this.trappingInited||e.interaction!=="modal"||t.target!==this.overlayHolder)return;t.stopPropagation(),t.preventDefault(),await this.closeTopOverlay();let r=document.elementFromPoint(t.clientX,t.clientY);for(;r!=null&&r.shadowRoot;){const o=r.shadowRoot.elementFromPoint(t.clientX,t.clientY);if(!o||o===r)break;r=o}r==null||r.dispatchEvent(new MouseEvent("contextmenu",t))},this.handleMouseCapture=t=>{const e=this.topOverlay;if(!t.target||!e||!e.overlayContent||go(t)||!vo(t)){this.preventMouseRootClose=!0;return}if(t.target instanceof Node){if(t.composedPath().indexOf(e.overlayContent)>=0){this.preventMouseRootClose=!0;return}this.preventMouseRootClose=!1}},this._doesNotCloseOnFirstClick=!1,this.handleMouse=t=>{if(this._doesNotCloseOnFirstClick){this._doesNotCloseOnFirstClick=!1;return}this.preventMouseRootClose||t.defaultPrevented||this.closeTopOverlay(!0)},this.handleKeyUp=t=>{t.code==="Escape"&&this.closeTopOverlay()},this.handleResize=()=>{this.handlingResize||(this.handlingResize=!0,requestAnimationFrame(async()=>{const t=this.overlays.map(e=>e.updateOverlayPosition());await Promise.all(t),this.handlingResize=!1}))}}initTabTrapping(){if(this.trappingInited)return;if(this.trappingInited=!0,this.document.body.shadowRoot){this.canTabTrap=!1;return}if(this.document.body.attachShadow({mode:"open"}),!this.document.body.shadowRoot)return;const t=this.document.body.shadowRoot;t.innerHTML=`
            <style>
            :host {
                position: relative;
            }
            #actual {
                position: relative;
                height: calc(100% - var(--swc-body-margins-block, 0px));
                z-index: 0;
                min-height: calc(100vh - var(--swc-body-margins-block, 0px));
            }
            #holder {
                display: none;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
            [name="open"]::slotted(*) {
                pointer-events: all;
            }
            #actual[aria-hidden] + #holder {
                display: flex;
            }
            </style>
            <div id="actual"><slot></slot></div>
            <div id="holder"><slot name="open"></slot></div>
        `,this.tabTrapper=t.querySelector("#actual"),this.overlayHolder=t.querySelector("#holder"),this.tabTrapper.attachShadow({mode:"open"}),this.tabTrapper.shadowRoot&&(this.tabTrapper.shadowRoot.innerHTML="<slot></slot>"),this.overlayHolder.addEventListener("contextmenu",this.forwardContextmenuEvent,!0),requestAnimationFrame(()=>{this.applyBodyMargins(),new ResizeObserver(()=>{this.applyBodyMargins()}).observe(document.body)})}applyBodyMargins(){const{marginLeft:t,marginRight:e,marginTop:r,marginBottom:o}=getComputedStyle(document.body),i=parseFloat(t)===0&&parseFloat(e)===0&&parseFloat(r)===0&&parseFloat(o)===0;i&&!this._bodyMarginsApplied||(this.tabTrapper.style.setProperty("--swc-body-margins-inline",`calc(${t} + ${e})`),this.tabTrapper.style.setProperty("--swc-body-margins-block",`calc(${r} + ${o})`),this._bodyMarginsApplied=!i)}startTabTrapping(){this.initTabTrapping(),this.canTabTrap&&(this.tabTrapper.tabIndex=-1,this.tabTrapper.setAttribute("aria-hidden","true"))}stopTabTrapping(){!this.canTabTrap||!this.trappingInited||(this.tabTrapper.removeAttribute("tabindex"),this.tabTrapper.removeAttribute("aria-hidden"))}get document(){return this.root.ownerDocument||document}get topOverlay(){return this.overlays.slice(-1)[0]}findOverlayForContent(t){for(const e of this.overlays)if(t===e.overlayContent)return e}addEventListeners(){this._eventsAreBound||(this._eventsAreBound=!0,this.document.addEventListener("click",this.handleMouseCapture,!0),this.document.addEventListener("click",this.handleMouse),this.document.addEventListener("keyup",this.handleKeyUp),window.addEventListener("resize",this.handleResize))}isClickOverlayActiveForTrigger(t){return this.overlays.some(e=>t===e.trigger&&e.interaction==="click")}async openOverlay(t){if(this.addEventListeners(),this.findOverlayForContent(t.content))return!1;t.notImmediatelyClosable&&(this._doesNotCloseOnFirstClick=!0),t.interaction==="modal"&&this.startTabTrapping();const e=t.content;if(e.overlayWillOpenCallback){const{trigger:o}=t;e.overlayWillOpenCallback({trigger:o})}if(t.delayed){const i=[this.overlayTimer.openTimer(t.content)];t.abortPromise&&i.push(t.abortPromise);const c=await Promise.race(i);if(c){if(e.overlayOpenCancelledCallback){const{trigger:d}=t;e.overlayOpenCancelledCallback({trigger:d})}return c}}if(t.interaction==="click")this.closeAllHoverOverlays();else if(t.interaction==="hover"&&this.isClickOverlayActiveForTrigger(t.trigger))return!0;const r=D.create(t);return this.overlays.length&&this.overlays[this.overlays.length-1].obscure(r.interaction),document.body.appendChild(r),new Promise(o=>requestAnimationFrame(o)).then(async()=>{this.overlays.push(r),await r.updateComplete,this.addOverlayEventListeners(r),typeof e.open!="undefined"&&(e.open=!0);let o=()=>{};if(e.overlayOpenCallback){const{trigger:i}=r,{overlayOpenCallback:c}=e;o=async()=>await c({trigger:i})}return await r.openCallback(o),!1})}addOverlayEventListeners(t){switch(t.addEventListener("close",e=>{var r;this.hideAndCloseOverlay(t,!0,!!(!((r=e.detail)===null||r===void 0)&&r.reason))}),t.interaction){case"replace":this.addReplaceOverlayEventListeners(t);break;case"inline":this.addInlineOverlayEventListeners(t);break}}addReplaceOverlayEventListeners(t){t.addEventListener("keydown",e=>{const{code:r}=e;r==="Tab"&&(e.stopPropagation(),this.closeOverlay(t.overlayContent),t.tabbingAway=!0,t.trigger.focus(),t.trigger.dispatchEvent(new KeyboardEvent("keydown",e)))})}addInlineOverlayEventListeners(t){t.trigger.addEventListener("keydown",t.handleInlineTriggerKeydown),t.addEventListener("keydown",e=>{const{code:r,shiftKey:o}=e;if(r!=="Tab")return;if(t.tabbingAway=!0,o){const c=document.createElement("span");c.tabIndex=-1,t.trigger.hasAttribute("slot")&&(c.slot=t.trigger.slot),t.trigger.insertAdjacentElement("afterend",c),c.focus(),c.remove();return}e.stopPropagation();const i=t.trigger;typeof i.open!="undefined"&&(i.open=!1),this.closeOverlay(t.overlayContent),t.trigger.focus()})}closeOverlay(t){this.overlayTimer.close(t),requestAnimationFrame(()=>{const e=this.findOverlayForContent(t);this.hideAndCloseOverlay(e)})}closeAllHoverOverlays(){for(const t of this.overlays)t.interaction==="hover"&&this.hideAndCloseOverlay(t,!1)}async manageFocusAfterCloseWhenOverlaysRemain(){const t=this.overlays[this.overlays.length-1];t.feature(),t.interaction==="modal"||t.hasModalRoot?await t.focus():this.stopTabTrapping()}manageFocusAfterCloseWhenLastOverlay(t){this.stopTabTrapping();const e=t.interaction==="modal",r=t.receivesFocus==="auto",o=t.interaction==="replace",i=t.interaction==="inline",c=(o||i)&&!t.tabbingAway;if(t.tabbingAway=!1,!e&&!r&&!c)return;const u=t.overlayContent.getRootNode().activeElement;let m,p;const b=()=>t.overlayContent.contains(u),x=()=>(m=t.trigger.getRootNode(),p=m.activeElement,m.contains(p)),E=()=>m.host&&m.host===p;(e||b()||x()||E())&&t.trigger.focus()}async hideAndCloseOverlay(t,e,r){if(!t)return;const o=t.overlayContent;if(typeof o.overlayWillCloseCallback!="undefined"){const{trigger:c}=t;if(o.overlayWillCloseCallback({trigger:c}))return}if(await t.hide(e),typeof o.open!="undefined"&&(o.open=!1),o.overlayCloseCallback){const{trigger:c}=t;await o.overlayCloseCallback({trigger:c})}if(t.state!="dispose")return;const i=this.overlays.indexOf(t);i>=0&&this.overlays.splice(i,1),this.overlays.length?await this.manageFocusAfterCloseWhenOverlaysRemain():this.manageFocusAfterCloseWhenLastOverlay(t),t.remove(),t.dispose(),t.trigger.dispatchEvent(new CustomEvent("sp-closed",{bubbles:!0,composed:!0,cancelable:!0,detail:{interaction:t.interaction,reason:r?"external-click":void 0}}))}closeTopOverlay(t){return this.hideAndCloseOverlay(this.topOverlay,!0,t)}}class X{constructor(t,e,r){this.isOpen=!1,this.owner=t,this.overlayElement=r,this.interaction=e}static async open(t,e,r,o){const i=new X(t,e,r);return await i.open(o),()=>{i.close()}}static update(){const t=new CustomEvent("sp-update-overlays",{bubbles:!0,composed:!0,cancelable:!0});document.dispatchEvent(t)}async open({abortPromise:t,delayed:e,offset:r=0,placement:o="top",receivesFocus:i,notImmediatelyClosable:c,virtualTrigger:d}){if(this.isOpen)return!0;e===void 0&&(e=this.overlayElement.hasAttribute("delayed"));const u={color:void 0,scale:void 0,lang:void 0,theme:void 0},m=new CustomEvent("sp-query-theme",{bubbles:!0,composed:!0,detail:u,cancelable:!0});this.owner.dispatchEvent(m);const p={},b=new CustomEvent("sp-overlay-query",{bubbles:!0,composed:!0,detail:p,cancelable:!0});return this.overlayElement.dispatchEvent(b),await X.overlayStack.openOverlay(Object.assign({abortPromise:t,content:this.overlayElement,contentTip:p.overlayContentTipElement,delayed:e,offset:r,placement:o,trigger:this.owner,interaction:this.interaction,theme:u,receivesFocus:i,notImmediatelyClosable:c,virtualTrigger:d},p)),this.isOpen=!0,!0}close(){X.overlayStack.closeOverlay(this.overlayElement)}}X.overlayStack=new fo;var xo=Object.freeze(Object.defineProperty({__proto__:null,Overlay:X},Symbol.toStringTag,{value:"Module"}));const yo={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class C extends V(_){constructor(){super(),this.isMobile=new le(this,so),this.disabled=!1,this.focused=!1,this.invalid=!1,this.open=!1,this.readonly=!1,this.selects="single",this.menuItems=[],this.placement="bottom-start",this.quiet=!1,this.value="",this.listRole="listbox",this.itemRole="option",this.onKeydown=t=>{this.focused=!0,!(t.code!=="ArrowDown"&&t.code!=="ArrowUp")&&(t.preventDefault(),this.toggle(!0))},this.overlayOpenCallback=async()=>{this.updateMenuItems(),await this.itemsUpdated,await this.optionsMenu.updateComplete,requestAnimationFrame(()=>this.menuStateResolver())},this.overlayCloseCallback=async()=>{this.restoreChildren&&(this.restoreChildren(),this.restoreChildren=void 0),this.close(),requestAnimationFrame(()=>this.menuStateResolver())},this._willUpdateItems=!1,this.itemsUpdated=Promise.resolve(),this.menuStatePromise=Promise.resolve(),this.selectionPromise=Promise.resolve(),this.onKeydown=this.onKeydown.bind(this)}get target(){return this.button}get focusElement(){return this.open?this.optionsMenu:this.button}forceFocusVisible(){this.focused=!0}onButtonBlur(){this.focused=!1,this.target.removeEventListener("keydown",this.onKeydown)}onButtonClick(){this.toggle()}focus(t){super.focus(t),!this.disabled&&this.focusElement&&(this.focused=this.hasVisibleFocusInTree())}onHelperFocus(){this.focused=!0,this.button.focus()}onButtonFocus(){this.target.addEventListener("keydown",this.onKeydown)}handleChange(t){t.stopPropagation();const e=t.target,[r]=e.selectedItems;this.setValueFromItem(r,t)}async setValueFromItem(t,e){const r=this.selectedItem,o=this.value;if(this.selectedItem=t,this.value=t.value,this.open=!1,await this.updateComplete,!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0,composed:!0}))){e&&e.preventDefault(),this.selectedItem.selected=!1,r&&(r.selected=!0),this.selectedItem=r,this.value=o,this.open=!0;return}r&&(r.selected=!1),t.selected=!!this.selects}toggle(t){this.readonly||(this.open=typeof t!="undefined"?t:!this.open)}close(){this.readonly||(this.open=!1)}async generatePopover(t){this.popoverFragment||(this.popoverFragment=document.createDocumentFragment()),ze(this.renderPopover,this.popoverFragment,{host:this}),this.popover=this.popoverFragment.children[0],this.optionsMenu=this.popover.children[1],t&&console.warn(`Deprecation Notice: You no longer need to provide an sp-menu child to ${this.tagName.toLowerCase()}. Any styling or attributes on the sp-menu will be ignored.`)}async openMenu(){let t=[];const e=this.querySelector(":scope > sp-menu");if(await this.generatePopover(e),e?t=Array.from(e.children):t=Array.from(this.children).filter(r=>!r.hasAttribute("slot")),t.length===0){this.menuStateResolver();return}this.restoreChildren=St(t,this.optionsMenu,{position:"beforeend",prepareCallback:r=>(this.value===r.value&&(r.selected=!0),o=>{typeof o.focused!="undefined"&&(o.focused=!1)})}),this.sizePopover(this.popover),this.closeOverlay=de.openOverlay(this,"modal",this.popover,{placement:this.isMobile.matches?"none":this.placement,receivesFocus:"auto"})}sizePopover(t){if(this.isMobile.matches){t.style.setProperty("--swc-menu-width","100%");return}this.quiet||t.style.setProperty("min-width",`${this.offsetWidth}px`)}async closeMenu(){if(this.closeOverlay){const t=this.closeOverlay;delete this.closeOverlay,(await t)()}}get selectedItemContent(){return this.selectedItem?this.selectedItem.itemChildren:{icon:[],content:[]}}renderLabelContent(t){return this.value&&this.selectedItem?t:l`
            <slot name="label">${this.label}</slot>
        `}get buttonContent(){const t={"visually-hidden":this.icons==="only"&&!!this.value,placeholder:!this.value};return[l`
                <span id="icon" ?hidden=${this.icons==="none"}>
                    ${this.selectedItemContent.icon}
                </span>
                <span id="label" class=${at(t)}>
                    ${this.renderLabelContent(this.selectedItemContent.content)}
                </span>
                ${this.invalid?l`
                          <sp-icon-alert
                              class="validation-icon"
                          ></sp-icon-alert>
                      `:Z}
                <sp-icon-chevron100
                    class="picker ${yo[this.size]}"
                ></sp-icon-chevron100>
            `]}render(){return l`
            <span
                id="focus-helper"
                tabindex="${this.focused?"-1":"0"}"
                @focus=${this.onHelperFocus}
            ></span>
            <button
                aria-haspopup="true"
                aria-expanded=${this.open?"true":"false"}
                aria-labelledby="button icon label"
                id="button"
                class="button"
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
                tabindex="-1"
            >
                ${this.buttonContent}
            </button>
        `}update(t){this.selects&&(this.selects="single"),super.update(t)}get dismissHelper(){return l`
            <div class="visually-hidden">
                <button
                    tabindex="-1"
                    arial-label="Dismiss"
                    @click=${this.close}
                ></button>
            </div>
        `}get renderPopover(){const t=l`
            ${this.dismissHelper}
            <sp-menu
                id="menu"
                role="${this.listRole}"
                @change=${this.handleChange}
                .selects=${this.selects}
            ></sp-menu>
            ${this.dismissHelper}
        `;return this.isMobile.matches?l`
                <sp-tray
                    id="popover"
                    role="dialog"
                    @sp-menu-item-added-or-updated=${this.updateMenuItems}
                    .overlayOpenCallback=${this.overlayOpenCallback}
                    .overlayCloseCallback=${this.overlayCloseCallback}
                >
                    ${t}
                </sp-tray>
            `:l`
            <sp-popover
                id="popover"
                role="dialog"
                @sp-menu-item-added-or-updated=${this.updateMenuItems}
                .overlayOpenCallback=${this.overlayOpenCallback}
                .overlayCloseCallback=${this.overlayCloseCallback}
            >
                ${t}
            </sp-popover>
        `}updateMenuItems(t){if(this.open&&(t==null?void 0:t.type)==="sp-menu-item-removed"||this._willUpdateItems)return;this._willUpdateItems=!0,(t==null?void 0:t.item)===this.selectedItem&&this.requestUpdate();let e=()=>{};this.itemsUpdated=new Promise(r=>e=r),window.requestAnimationFrame(async()=>{this.open?(await this.optionsMenu.updateComplete,this.menuItems=this.optionsMenu.childItems):this.menuItems=[...this.querySelectorAll("sp-menu-item")],this.manageSelection(),e(),this._willUpdateItems=!1})}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&(this.open=!1),t.has("open")&&(this.open||typeof t.get("open")!="undefined")&&(this.menuStatePromise=new Promise(e=>this.menuStateResolver=e),this.open?this.openMenu():this.closeMenu()),t.has("value")&&!t.has("selectedItem")&&this.updateMenuItems()}async manageSelection(){await this.menuStatePromise,this.selectionPromise=new Promise(e=>this.selectionResolver=e);let t;this.menuItems.forEach(e=>{this.value===e.value&&!e.disabled?t=e:e.selected=!1}),t?(t.selected=!!this.selects,this.selectedItem=t):(this.value="",this.selectedItem=void 0),this.open&&(await this.optionsMenu.updateComplete,this.optionsMenu.updateSelectedItemIndex()),this.selectionResolver()}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.menuStatePromise,await this.itemsUpdated,await this.selectionPromise,t}connectedCallback(){this.updateMenuItems(),this.addEventListener("sp-menu-item-added-or-updated",this.updateMenuItems),this.addEventListener("sp-menu-item-removed",this.updateMenuItems),super.connectedCallback()}disconnectedCallback(){this.close(),super.disconnectedCallback()}}C.openOverlay=async(a,t,e,r)=>await At(a,t,e,r);s([y("#button")],C.prototype,"button",void 0);s([n({type:Boolean,reflect:!0})],C.prototype,"disabled",void 0);s([n({type:Boolean,reflect:!0})],C.prototype,"focused",void 0);s([n({type:String,reflect:!0})],C.prototype,"icons",void 0);s([n({type:Boolean,reflect:!0})],C.prototype,"invalid",void 0);s([n()],C.prototype,"label",void 0);s([n({type:Boolean,reflect:!0})],C.prototype,"open",void 0);s([n({type:Boolean,reflect:!0})],C.prototype,"readonly",void 0);s([n()],C.prototype,"placement",void 0);s([n({type:Boolean,reflect:!0})],C.prototype,"quiet",void 0);s([n({type:String})],C.prototype,"value",void 0);s([n({attribute:!1})],C.prototype,"selectedItem",void 0);class de extends C{constructor(){super(...arguments),this.onKeydown=t=>{const{code:e}=t;if(this.focused=!0,!e.startsWith("Arrow")||this.readonly)return;if(t.preventDefault(),e==="ArrowUp"||e==="ArrowDown"){this.toggle(!0);return}const r=this.selectedItem?this.menuItems.indexOf(this.selectedItem):-1,o=!this.value||e==="ArrowRight"?1:-1;let i=r+o;for(;this.menuItems[i]&&this.menuItems[i].disabled;)i+=o;!this.menuItems[i]||this.menuItems[i].disabled||(!this.value||i!==r)&&this.setValueFromItem(this.menuItems[i])}}static get styles(){return[Wr,Tt]}}customElements.define("sp-picker",de);customElements.define("sp-menu-item",$);class ue{constructor(t,{direction:e,elementEnterAction:r,elements:o,focusInIndex:i,isFocusableElement:c,listenerScope:d}={elements:()=>[]}){this._currentIndex=-1,this._direction=()=>"both",this.directionLength=5,this.elementEnterAction=u=>{},this.firstUpdated=!0,this._focused=!1,this._focusInIndex=u=>0,this.isFocusableElement=u=>!0,this._listenerScope=()=>this.host,this.offset=0,this.managed=!0,this.manageIndexesAnimationFrame=0,this.handleFocusin=u=>{if(!this.isEventWithinListenerScope(u))return;this.isRelatedTargetAnElement(u)&&this.hostContainsFocus();const m=u.composedPath();let p=-1;m.find(b=>(p=this.elements.indexOf(b),p!==-1)),this.currentIndex=p>-1?p:this.currentIndex},this.handleFocusout=u=>{this.isRelatedTargetAnElement(u)&&this.hostNoLongerContainsFocus()},this.handleKeydown=u=>{if(!this.acceptsEventCode(u.code)||u.defaultPrevented)return;let m=0;switch(u.code){case"ArrowRight":m+=1;break;case"ArrowDown":m+=this.direction==="grid"?this.directionLength:1;break;case"ArrowLeft":m-=1;break;case"ArrowUp":m-=this.direction==="grid"?this.directionLength:1;break;case"End":this.currentIndex=0,m-=1;break;case"Home":this.currentIndex=this.elements.length-1,m+=1;break}u.preventDefault(),this.direction==="grid"&&this.currentIndex+m<0?this.currentIndex=0:this.direction==="grid"&&this.currentIndex+m>this.elements.length-1?this.currentIndex=this.elements.length-1:this.setCurrentIndexCircularly(m),this.elementEnterAction(this.elements[this.currentIndex]),this.focus()},this.host=t,this.host.addController(this),this._elements=o,this.isFocusableElement=c||this.isFocusableElement,typeof e=="string"?this._direction=()=>e:typeof e=="function"&&(this._direction=e),this.elementEnterAction=r||this.elementEnterAction,typeof i=="number"?this._focusInIndex=()=>i:typeof i=="function"&&(this._focusInIndex=i),typeof d=="object"?this._listenerScope=()=>d:typeof d=="function"&&(this._listenerScope=d)}get currentIndex(){return this._currentIndex===-1&&(this._currentIndex=this.focusInIndex),this._currentIndex-this.offset}set currentIndex(t){this._currentIndex=t+this.offset}get direction(){return this._direction()}get elements(){return this.cachedElements||(this.cachedElements=this._elements()),this.cachedElements}set focused(t){t!==this.focused&&(this._focused=t,this.manageTabindexes())}get focused(){return this._focused}get focusInElement(){return this.elements[this.focusInIndex]}get focusInIndex(){return this._focusInIndex(this.elements)}isEventWithinListenerScope(t){return this._listenerScope()===this.host?!0:t.composedPath().includes(this._listenerScope())}update({elements:t}={elements:()=>[]}){this.unmanage(),this._elements=t,this.clearElementCache(),this.manage()}focus(t){var e;(e=this.elements[this.currentIndex])===null||e===void 0||e.focus(t)}clearElementCache(t=0){delete this.cachedElements,cancelAnimationFrame(this.manageIndexesAnimationFrame),this.offset=t,this.managed&&(this.manageIndexesAnimationFrame=requestAnimationFrame(()=>this.manageTabindexes()))}setCurrentIndexCircularly(t){const{length:e}=this.elements;let r=e,o=(e+this.currentIndex+t)%e;for(;r&&this.elements[o]&&!this.isFocusableElement(this.elements[o]);)o=(e+o+t)%e,r-=1;this.currentIndex=o}hostContainsFocus(){this.host.addEventListener("focusout",this.handleFocusout),this.host.addEventListener("keydown",this.handleKeydown),this.focused=!0}hostNoLongerContainsFocus(){this.host.addEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown),this.currentIndex=this.focusInIndex,this.focused=!1}isRelatedTargetAnElement(t){const e=t.relatedTarget;return!this.elements.includes(e)}acceptsEventCode(t){if(t==="End"||t==="Home")return!0;switch(this.direction){case"horizontal":return t==="ArrowLeft"||t==="ArrowRight";case"vertical":return t==="ArrowUp"||t==="ArrowDown";case"both":case"grid":return t.startsWith("Arrow")}}manageTabindexes(){this.focused?this.updateTabindexes(()=>({tabIndex:-1})):this.updateTabindexes(t=>({removeTabIndex:t.contains(this.focusInElement)&&t!==this.focusInElement,tabIndex:t===this.focusInElement?0:-1}))}updateTabindexes(t){this.elements.forEach(e=>{const{tabIndex:r,removeTabIndex:o}=t(e);if(!o){e.tabIndex=r;return}e.removeAttribute("tabindex");const i=e;i.requestUpdate&&i.requestUpdate()})}manage(){this.managed=!0,this.manageTabindexes(),this.addEventListeners()}unmanage(){this.managed=!1,this.updateTabindexes(()=>({tabIndex:0})),this.removeEventListeners()}addEventListeners(){this.host.addEventListener("focusin",this.handleFocusin)}removeEventListeners(){this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout),this.host.removeEventListener("keydown",this.handleKeydown)}hostUpdated(){this.firstUpdated&&(this.manageTabindexes(),this.firstUpdated=!1)}hostConnected(){this.addEventListeners()}hostDisconnected(){this.removeEventListeners()}}const ko=h`
:host{--spectrum-actiongroup-button-gap-reset:0}:host{display:flex;flex-wrap:wrap}::slotted(*){flex-shrink:0}:host(:not([vertical]):not([compact])){margin-top:calc(var(
--spectrum-actiongroup-button-gap-y,
var(--spectrum-alias-actiongroup-button-gap)
)*-1)}:host(:not([vertical]):not([compact])) ::slotted(*){flex-shrink:0;margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-alias-actiongroup-button-gap)
)}:host([dir=ltr]:not([vertical]):not([compact])) ::slotted(:not(:last-child)){margin-right:var(
--spectrum-actiongroup-button-gap-x,var(--spectrum-alias-actiongroup-button-gap)
)}:host([dir=rtl]:not([vertical]):not([compact])) ::slotted(:not(:last-child)){margin-left:var(
--spectrum-actiongroup-button-gap-x,var(--spectrum-alias-actiongroup-button-gap)
)}:host([vertical]){display:inline-flex;flex-direction:column}:host([dir=ltr][vertical]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][vertical]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([vertical]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-alias-actiongroup-button-gap)
)}:host([dir=ltr][vertical][vertical]){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][vertical][vertical]){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([vertical][vertical]){margin-top:var(
--spectrum-actiongroup-button-gap-y,var(--spectrum-alias-actiongroup-button-gap)
)}:host([compact]){gap:var(
--spectrum-actiongroup-compact-button-gap,var(--spectrum-alias-actiongroup-button-gap-compact)
)}:host([dir=ltr][compact][quiet]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-quiet-compact-button-gap,var(--spectrum-alias-actiongroup-button-gap-quiet-compact)
)}:host([dir=rtl][compact][quiet]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-quiet-compact-button-gap,var(--spectrum-alias-actiongroup-button-gap-quiet-compact)
)}:host([compact][quiet]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=ltr][compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-left:var(
--spectrum-actiongroup-button-gap-reset
)}:host([dir=rtl][compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-right:var(
--spectrum-actiongroup-button-gap-reset
)}:host([compact][quiet][vertical]) ::slotted(:not(:first-child)){margin-top:var(
--spectrum-actiongroup-quiet-compact-button-gap,var(--spectrum-alias-actiongroup-button-gap-quiet-compact)
)}:host([compact]:not([quiet])){flex-wrap:nowrap}:host([compact]:not([quiet])) ::slotted(*){--spectrum-actionbutton-focus-ring-border-radius-adjusted:var(
--spectrum-alias-border-radius-xsmall,var(--spectrum-global-dimension-size-10)
);border-radius:0;position:relative;z-index:0}:host([dir=ltr][compact]:not([quiet])) ::slotted(:first-child){border-top-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:first-child){border-top-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:first-child){border-bottom-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:first-child){border-bottom-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:first-child){margin-right:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:first-child){margin-left:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([compact]:not([quiet])) ::slotted(:first-child){--spectrum-actionbutton-focus-ring-border-radius-adjusted:calc(var(
--spectrum-actionbutton-m-quiet-textonly-border-radius,
var(--spectrum-alias-component-border-radius)
) + var(
--spectrum-actionbutton-m-textonly-focus-ring-gap,
var(--spectrum-alias-component-focusring-gap)
)) var(
--spectrum-alias-border-radius-xsmall,var(--spectrum-global-dimension-size-10)
) var(
--spectrum-alias-border-radius-xsmall,var(--spectrum-global-dimension-size-10)
) calc(var(
--spectrum-actionbutton-m-quiet-textonly-border-radius,
var(--spectrum-alias-component-border-radius)
) + var(
--spectrum-actionbutton-m-textonly-focus-ring-gap,
var(--spectrum-alias-component-focusring-gap)
))}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){border-top-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){border-top-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){border-bottom-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){border-bottom-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){margin-left:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){margin-right:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:last-child){margin-right:0}:host([dir=rtl][compact]:not([quiet])) ::slotted(:last-child){margin-left:0}:host([compact]:not([quiet])) ::slotted(:last-child){--spectrum-actionbutton-focus-ring-border-radius-adjusted:var(
--spectrum-alias-border-radius-xsmall,var(--spectrum-global-dimension-size-10)
) calc(var(
--spectrum-actionbutton-m-quiet-textonly-border-radius,
var(--spectrum-alias-component-border-radius)
) + var(
--spectrum-actionbutton-m-textonly-focus-ring-gap,
var(--spectrum-alias-component-focusring-gap)
)) calc(var(
--spectrum-actionbutton-m-quiet-textonly-border-radius,
var(--spectrum-alias-component-border-radius)
) + var(
--spectrum-actionbutton-m-textonly-focus-ring-gap,
var(--spectrum-alias-component-focusring-gap)
)) var(
--spectrum-alias-border-radius-xsmall,var(--spectrum-global-dimension-size-10)
)}:host([compact]:not([quiet])) ::slotted([selected]){z-index:1}:host([compact]:not([quiet])) ::slotted(:hover){z-index:2}:host([compact]:not([quiet])) ::slotted(.focus-visible){z-index:3}:host([compact]:not([quiet])) ::slotted(:focus-visible){z-index:3}:host([dir=ltr][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-left:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-right:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([dir=ltr][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-right:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([dir=rtl][compact]:not([quiet])) ::slotted(:not(:first-child)){margin-left:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([compact][vertical]:not([quiet])){gap:0}:host([compact][vertical]:not([quiet])) ::slotted(*){border-radius:0}:host([compact][vertical]:not([quiet])) ::slotted(:not(:first-child)){margin-bottom:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2);margin-top:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([dir=ltr][compact][vertical]:not([quiet])) ::slotted(:first-child){border-top-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact][vertical]:not([quiet])) ::slotted(:first-child){border-top-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact][vertical]:not([quiet])) ::slotted(:first-child){border-top-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact][vertical]:not([quiet])) ::slotted(:first-child){border-top-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([compact][vertical]:not([quiet])) ::slotted(:first-child){border-radius:0;margin-bottom:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([dir=ltr][compact][vertical]:not([quiet])) ::slotted(:last-child){border-bottom-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact][vertical]:not([quiet])) ::slotted(:last-child){border-bottom-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=ltr][compact][vertical]:not([quiet])) ::slotted(:last-child){border-bottom-right-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([dir=rtl][compact][vertical]:not([quiet])) ::slotted(:last-child){border-bottom-left-radius:var(
--spectrum-actionbutton-m-texticon-border-radius,var(--spectrum-alias-component-border-radius)
)}:host([compact][vertical]:not([quiet])) ::slotted(:last-child){border-radius:0;margin-bottom:0;margin-top:calc(var(
--spectrum-actionbutton-m-texticon-border-size,
var(--spectrum-alias-border-size-thin)
)*-1/2)}:host([justified]) ::slotted(*){flex:1}:host([dir][compact][vertical]) ::slotted(:nth-child(n)){margin-left:0;margin-right:0}:host([justified]) ::slotted(:not([role])),:host([vertical]) ::slotted(:not([role])){align-items:stretch;display:flex;flex-direction:column}:host([compact]:not([quiet])) ::slotted(:not([role])){--overriden-border-radius:0;--spectrum-actionbutton-s-quiet-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-s-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-m-quiet-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-m-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-l-quiet-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-l-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-xl-quiet-textonly-border-radius:var(
--overriden-border-radius
);--spectrum-actionbutton-xl-textonly-border-radius:var(
--overriden-border-radius
)}:host([compact][vertical]:not([quiet])) ::slotted(:not([role]):first-child){--overriden-border-radius:var(--spectrum-alias-component-border-radius) var(--spectrum-alias-component-border-radius) 0 0}:host([compact][vertical]:not([quiet])) ::slotted(:not([role]):last-child){--overriden-border-radius:0 0 var(--spectrum-alias-component-border-radius) var(--spectrum-alias-component-border-radius)}:host([dir=ltr][compact]:not([quiet]):not([vertical])) ::slotted(:not([role]):first-child){--overriden-border-radius:var(--spectrum-alias-component-border-radius) 0 0 var(--spectrum-alias-component-border-radius)}:host([dir=rtl][compact]:not([quiet]):not([vertical])) ::slotted(:not([role]):first-child){--overriden-border-radius:0 var(--spectrum-alias-component-border-radius) var(--spectrum-alias-component-border-radius) 0}:host([dir=ltr][compact]:not([quiet]):not([vertical])) ::slotted(:not([role]):last-child){--overriden-border-radius:0 var(--spectrum-alias-component-border-radius) var(--spectrum-alias-component-border-radius) 0}:host([dir=rtl][compact]:not([quiet]):not([vertical])) ::slotted(:not([role]):last-child){--overriden-border-radius:var(--spectrum-alias-component-border-radius) 0 0 var(--spectrum-alias-component-border-radius)}:host([compact]:not([quiet])) ::slotted(*){--spectrum-actionbutton-after-border-radius:0}:host([compact][vertical]:not([quiet])) ::slotted(:first-child){--spectrum-actionbutton-after-border-radius:var(
--spectrum-alias-component-border-radius
) var(--spectrum-alias-component-border-radius) 0 0}:host([compact][vertical]:not([quiet])) ::slotted(:last-child){--spectrum-actionbutton-after-border-radius:0 0 var(--spectrum-alias-component-border-radius) var(--spectrum-alias-component-border-radius)}:host([dir=ltr][compact]:not([quiet]):not([vertical])) ::slotted(:first-child){--spectrum-actionbutton-after-border-radius:var(
--spectrum-alias-component-border-radius
) 0 0 var(--spectrum-alias-component-border-radius)}:host([dir=rtl][compact]:not([quiet]):not([vertical])) ::slotted(:first-child){--spectrum-actionbutton-after-border-radius:0 var(--spectrum-alias-component-border-radius) var(--spectrum-alias-component-border-radius) 0}:host([dir=ltr][compact]:not([quiet]):not([vertical])) ::slotted(:last-child){--spectrum-actionbutton-after-border-radius:0 var(--spectrum-alias-component-border-radius) var(--spectrum-alias-component-border-radius) 0}:host([dir=rtl][compact]:not([quiet]):not([vertical])) ::slotted(:last-child){--spectrum-actionbutton-after-border-radius:var(
--spectrum-alias-component-border-radius
) 0 0 var(--spectrum-alias-component-border-radius)}
`;var wo=ko;const vt=[];class R extends k{constructor(){super(...arguments),this._buttons=[],this._buttonSelector="sp-action-button",this.rovingTabindexController=new ue(this,{focusInIndex:t=>{let e=-1;const r=t.findIndex((o,i)=>(!t[e]&&!o.disabled&&(e=i),o.selected&&!o.disabled));return t[r]?r:e},elements:()=>this.buttons,isFocusableElement:t=>!t.disabled}),this.compact=!1,this.emphasized=!1,this.justified=!1,this.label="",this.quiet=!1,this.vertical=!1,this.selected=vt,this.manageButtons=()=>{const t=this.shadowRoot.querySelector("slot");if(!t)return;const r=t.assignedElements({flatten:!0}).reduce((i,c)=>{if(c.matches(this._buttonSelector))i.push(c);else{const d=Array.from(c.querySelectorAll(`:scope > ${this._buttonSelector}`));i.push(...d)}return i},[]);this.buttons=r;const o=[];this.buttons.forEach(i=>{i.selected&&o.push(i.value)}),this.selected=this.selected.concat(o),this.manageChildren(),this.manageSelects()}}static get styles(){return[wo]}set buttons(t){t!==this.buttons&&(this._buttons=t,this.rovingTabindexController.clearElementCache())}get buttons(){return this._buttons}dispatchChange(t){this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this.selected=t,this.buttons.map(r=>{r.selected=this.selected.includes(r.value)}))}setSelected(t){if(t===this.selected)return;const e=this.selected;this.selected=t,this.dispatchChange(e)}focus(t){this.rovingTabindexController.focus(t)}deselectSelectedButtons(){[...this.querySelectorAll("[selected]")].forEach(e=>{e.selected=!1,e.tabIndex=-1,e.setAttribute("aria-checked","false")})}handleClick(t){const e=t.target;if(typeof e.value!="undefined")switch(this.selects){case"single":{this.deselectSelectedButtons(),e.selected=!0,e.tabIndex=0,e.setAttribute("aria-checked","true"),this.setSelected([e.value]),e.focus();break}case"multiple":{const r=[...this.selected];e.selected=!e.selected,e.setAttribute("aria-checked",e.selected?"true":"false"),e.selected?r.push(e.value):r.splice(this.selected.indexOf(e.value),1),this.setSelected(r),this.buttons.forEach(o=>{o.tabIndex=-1}),e.tabIndex=0;break}}}async manageSelects(){if(!this.buttons.length)return;const t=this.buttons;switch(this.selects){case"single":{this.setAttribute("role","radiogroup");const e=[],r=t.map(async i=>{await i.updateComplete,i.setAttribute("role","radio"),i.setAttribute("aria-checked",i.selected?"true":"false"),i.selected&&e.push(i)});await Promise.all(r);const o=e.map(i=>i.value);this.selected=o||vt;break}case"multiple":{this.setAttribute("role","group");const e=[],r=t.map(async i=>{await i.updateComplete,i.setAttribute("role","checkbox"),i.setAttribute("aria-checked",i.selected?"true":"false"),i.selected&&e.push(i.value)});await Promise.all(r);const o=e.length?e:vt;this.selected=o;break}default:if(this.selected.length){const e=[],r=t.map(async o=>{await o.updateComplete,o.setAttribute("aria-checked",o.selected?"true":"false"),o.setAttribute("role","button"),o.selected&&e.push(o)});await Promise.all(r),this.selected=e.map(o=>o.value)}else{this.buttons.forEach(e=>{e.setAttribute("role","button")}),this.removeAttribute("role");break}}}render(){return l`
            <slot role="presentation" @slotchange=${this.manageButtons}></slot>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("click",this.handleClick)}updated(t){super.updated(t),t.has("selects")&&(this.manageSelects(),this.manageChildren()),(t.has("quiet")&&this.quiet||t.has("emphasized")&&this.emphasized)&&this.manageChildren(),t.has("label")&&(this.label||typeof t.get("label")!="undefined")&&(this.label.length?this.setAttribute("aria-label",this.label):this.removeAttribute("aria-label"))}manageChildren(){this.buttons.forEach(t=>{t.quiet=this.quiet,t.emphasized=this.emphasized,t.selected=this.selected.includes(t.value)})}connectedCallback(){super.connectedCallback(),this.observer||(this.observer=new MutationObserver(this.manageButtons),this.manageButtons()),this.observer.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){this.observer.disconnect(),super.disconnectedCallback()}}s([n({type:Boolean,reflect:!0})],R.prototype,"compact",void 0);s([n({type:Boolean,reflect:!0})],R.prototype,"emphasized",void 0);s([n({type:Boolean,reflect:!0})],R.prototype,"justified",void 0);s([n({type:String})],R.prototype,"label",void 0);s([n({type:Boolean,reflect:!0})],R.prototype,"quiet",void 0);s([n({type:String})],R.prototype,"selects",void 0);s([n({type:Boolean,reflect:!0})],R.prototype,"vertical",void 0);s([n({type:Array})],R.prototype,"selected",void 0);customElements.define("sp-action-group",R);customElements.define("sp-icon",ct);const zo={toNormalized(a,t,e){return(a-t)/(e-t)},fromNormalized(a,t,e){return a*(e-t)+t}},Co={fromAttribute:a=>a==="previous"?a:parseFloat(a),toAttribute:a=>a.toString()},qo={fromAttribute:a=>a==="next"?a:parseFloat(a),toAttribute:a=>a.toString()};class q extends _{constructor(){super(...arguments),this._forcedUnit="",this.value=10,this.dragging=!1,this.highlight=!1,this.name="",this.resolvedLanguage=document.documentElement.lang||navigator.language,this.label="",this.getAriaHandleText=(t,e)=>e.format(t),this.normalization=zo}get handleName(){return this.name}get focusElement(){var t,e;return(e=(t=this.handleController)===null||t===void 0?void 0:t.inputForHandle(this))!==null&&e!==void 0?e:this}update(t){(t.has("formatOptions")||t.has("resolvedLanguage"))&&delete this._numberFormatCache,super.update(t)}updated(t){var e,r;t.has("value")&&t.get("value")!=null&&((e=this.handleController)===null||e===void 0||e.setValueFromHandle(this)),(r=this.handleController)===null||r===void 0||r.handleHasChanged(this),super.updated(t)}firstUpdated(t){super.firstUpdated(t),this.dispatchEvent(new CustomEvent("sp-slider-handle-ready"))}dispatchInputEvent(){const t=new Event("input",{bubbles:!0,composed:!0});this.dispatchEvent(t)}getNumberFormat(){var t;if(!this._numberFormatCache||this.resolvedLanguage!==this._numberFormatCache.language){let e;try{e=new st(this.resolvedLanguage,this.formatOptions),this._forcedUnit=""}catch{const o=this.formatOptions||{},{style:i,unit:c,unitDisplay:d}=o,u=gt(o,["style","unit","unitDisplay"]);i==="unit"&&(this._forcedUnit=c),e=new st(this.resolvedLanguage,u)}this._numberFormatCache={language:this.resolvedLanguage,numberFormat:e}}return(t=this._numberFormatCache)===null||t===void 0?void 0:t.numberFormat}get numberFormat(){if(!!this.formatOptions)return this.getNumberFormat()}connectedCallback(){super.connectedCallback(),this.resolveLanguage()}disconnectedCallback(){this.resolveLanguage(),super.disconnectedCallback()}resolveLanguage(){const t=new CustomEvent("sp-language-context",{bubbles:!0,composed:!0,detail:{callback:e=>{this.resolvedLanguage=e}},cancelable:!0});this.dispatchEvent(t)}}s([n({type:Number})],q.prototype,"value",void 0);s([n({type:Boolean,reflect:!0})],q.prototype,"dragging",void 0);s([n({type:Boolean})],q.prototype,"highlight",void 0);s([n({type:String})],q.prototype,"name",void 0);s([n({reflect:!0,converter:Co})],q.prototype,"min",void 0);s([n({reflect:!0,converter:qo})],q.prototype,"max",void 0);s([n({attribute:!1})],q.prototype,"resolvedLanguage",void 0);s([n({type:Number,reflect:!0})],q.prototype,"step",void 0);s([n({type:Object,attribute:"format-options"})],q.prototype,"formatOptions",void 0);s([n({type:String})],q.prototype,"label",void 0);s([n({attribute:!1})],q.prototype,"getAriaHandleText",void 0);s([n({attribute:!1})],q.prototype,"normalization",void 0);customElements.define("sp-slider-handle",q);const Io=h`
:host{--spectrum-slider-tick-mark-width:var(
--spectrum-slider-m-tick-mark-width,var(--spectrum-alias-border-size-thick)
);--spectrum-slider-tick-mark-height:var(
--spectrum-slider-m-tick-mark-height,var(--spectrum-global-dimension-size-125)
);--spectrum-slider-tick-mark-border-radius:var(
--spectrum-slider-m-tick-mark-border-radius,var(--spectrum-alias-border-radius-xsmall)
);--spectrum-slider-track-border-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-slider-track-height:var(
--spectrum-slider-m-track-height,var(--spectrum-alias-border-size-thick)
);--spectrum-slider-handle-width:var(
--spectrum-slider-m-handle-width,var(--spectrum-alias-control-two-size-l)
);--spectrum-slider-handle-height:var(
--spectrum-slider-m-handle-height,var(--spectrum-alias-control-two-size-l)
);--spectrum-slider-handle-gap:var(
--spectrum-slider-m-handle-gap,var(--spectrum-alias-border-size-thicker)
);--spectrum-slider-handle-border-size:var(
--spectrum-slider-m-handle-border-size,var(--spectrum-alias-border-size-thick)
);--spectrum-slider-handle-border-radius:var(
--spectrum-slider-m-handle-border-radius,var(--spectrum-global-dimension-size-100)
);--spectrum-slider-height:var(
--spectrum-slider-m-height,var(--spectrum-global-dimension-size-400)
);--spectrum-slider-min-width:var(
--spectrum-slider-m-min-width,var(--spectrum-global-dimension-size-1250)
);--spectrum-slider-animation-duration:var(
--spectrum-slider-m-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-slider-ramp-track-color-disabled:var(
--spectrum-slider-m-ramp-track-color-disabled,var(--spectrum-global-color-gray-300)
);--spectrum-slider-ramp-track-height:var(
--spectrum-slider-m-ramp-track-height,var(--spectrum-global-dimension-size-200)
);--spectrum-slider-label-gap-y:var(--spectrum-global-dimension-size-85);--spectrum-slider-controls-margin:calc(var(--spectrum-slider-handle-width)/2);--spectrum-slider-track-margin-offset:calc(var(--spectrum-slider-controls-margin)*-1);--spectrum-slider-handle-margin-top:calc(var(--spectrum-slider-handle-width)/-2);--spectrum-slider-handle-margin-left:calc(var(--spectrum-slider-handle-width)/-2);--spectrum-slider-track-handleoffset:var(--spectrum-slider-handle-gap);--spectrum-slider-track-middle-handleoffset:calc(var(--spectrum-slider-handle-gap) + var(--spectrum-slider-handle-width)/2);--spectrum-slider-input-top:calc(var(--spectrum-slider-handle-margin-top)/4);--spectrum-slider-input-left:calc(var(--spectrum-slider-handle-margin-left)/4);--spectrum-slider-ramp-margin-top:0;--spectrum-slider-range-track-reset:0;--spectrum-slider-label-margin-bottom:-3px;--spectrum-slider-label-gap-x:var(
--spectrum-alias-item-control-gap-m,var(--spectrum-global-dimension-size-125)
);--spectrum-slider-label-text-line-height:var(
--spectrum-global-font-line-height-small,1.3
)}:host{display:block;min-height:var(--spectrum-slider-height);min-width:var(--spectrum-slider-min-width);position:relative;-webkit-user-select:none;user-select:none;z-index:1}:host([dir=ltr]) #controls{margin-left:var(
--spectrum-slider-controls-margin
)}:host([dir=rtl]) #controls{margin-right:var(
--spectrum-slider-controls-margin
)}#controls{box-sizing:border-box;display:inline-block;min-height:var(--spectrum-slider-height);position:relative;vertical-align:top;width:calc(100% - var(--spectrum-slider-controls-margin)*2);z-index:auto}:host([dir=ltr]) #fill,:host([dir=ltr]) .track{left:0}:host([dir=rtl]) #fill,:host([dir=rtl]) .track{right:0}:host([dir=ltr]) #fill,:host([dir=ltr]) .track{right:auto}:host([dir=rtl]) #fill,:host([dir=rtl]) .track{left:auto}#fill,.track{box-sizing:border-box;height:var(
--spectrum-slider-track-height
);margin-top:calc(var(--spectrum-slider-track-height)/-2);pointer-events:none;position:absolute;top:calc(var(--spectrum-slider-height)/2);z-index:1}:host([dir=ltr]) #fill,:host([dir=ltr]) .track{padding-left:0;padding-right:var(--spectrum-slider-track-handleoffset)}:host([dir=rtl]) #fill,:host([dir=rtl]) .track{padding-left:var(--spectrum-slider-track-handleoffset);padding-right:0}:host([dir=ltr]) #fill,:host([dir=ltr]) .track{margin-left:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl]) #fill,:host([dir=rtl]) .track{margin-right:var(
--spectrum-slider-track-margin-offset
)}#fill,.track{padding-bottom:0;padding-top:0}:host([dir=ltr]) #fill:before,:host([dir=ltr]) .track:before{border-top-left-radius:0}:host([dir=rtl]) #fill:before,:host([dir=rtl]) .track:before{border-top-right-radius:0}:host([dir=ltr]) #fill:before,:host([dir=ltr]) .track:before{border-bottom-left-radius:0}:host([dir=rtl]) #fill:before,:host([dir=rtl]) .track:before{border-bottom-right-radius:0}:host([dir=ltr]) #fill:before,:host([dir=ltr]) .track:before{border-top-right-radius:0}:host([dir=rtl]) #fill:before,:host([dir=rtl]) .track:before{border-top-left-radius:0}:host([dir=ltr]) #fill:before,:host([dir=ltr]) .track:before{border-bottom-right-radius:0}:host([dir=rtl]) #fill:before,:host([dir=rtl]) .track:before{border-bottom-left-radius:0}#fill:before,.track:before{content:"";display:block;height:100%}:host([dir=ltr]) .track:first-of-type:before{border-top-left-radius:var(
--spectrum-slider-track-border-radius
)}:host([dir=rtl]) .track:first-of-type:before{border-top-right-radius:var(
--spectrum-slider-track-border-radius
)}:host([dir=ltr]) .track:first-of-type:before{border-bottom-left-radius:var(
--spectrum-slider-track-border-radius
)}:host([dir=rtl]) .track:first-of-type:before{border-bottom-right-radius:var(
--spectrum-slider-track-border-radius
)}:host([dir=ltr]) .track:first-of-type:before{border-top-right-radius:0}:host([dir=rtl]) .track:first-of-type:before{border-top-left-radius:0}:host([dir=ltr]) .track:first-of-type:before{border-bottom-right-radius:0}:host([dir=rtl]) .track:first-of-type:before{border-bottom-left-radius:0}:host([dir=ltr]) .track:last-of-type:before{border-top-left-radius:0}:host([dir=rtl]) .track:last-of-type:before{border-top-right-radius:0}:host([dir=ltr]) .track:last-of-type:before{border-bottom-left-radius:0}:host([dir=rtl]) .track:last-of-type:before{border-bottom-right-radius:0}:host([dir=ltr]) .track:last-of-type:before{border-top-right-radius:var(
--spectrum-slider-track-border-radius
)}:host([dir=rtl]) .track:last-of-type:before{border-top-left-radius:var(
--spectrum-slider-track-border-radius
)}:host([dir=ltr]) .track:last-of-type:before{border-bottom-right-radius:var(
--spectrum-slider-track-border-radius
)}:host([dir=rtl]) .track:last-of-type:before{border-bottom-left-radius:var(
--spectrum-slider-track-border-radius
)}:host([dir=ltr]) .track~.track{left:auto}:host([dir=rtl]) .track~.track{right:auto}:host([dir=ltr]) .track~.track{right:var(
--spectrum-slider-range-track-reset
)}:host([dir=rtl]) .track~.track{left:var(
--spectrum-slider-range-track-reset
)}:host([dir=ltr]) .track~.track{padding-left:var(
--spectrum-slider-track-handleoffset
);padding-right:0}:host([dir=rtl]) .track~.track{padding-left:0;padding-right:var(
--spectrum-slider-track-handleoffset
)}:host([dir=ltr]) .track~.track{margin-left:var(
--spectrum-slider-range-track-reset
)}:host([dir=rtl]) .track~.track{margin-right:var(
--spectrum-slider-range-track-reset
)}:host([dir=ltr]) .track~.track{margin-right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl]) .track~.track{margin-left:var(
--spectrum-slider-track-margin-offset
)}.track~.track{padding-bottom:0;padding-top:0}:host([dir=ltr]) #fill{margin-left:0}:host([dir=rtl]) #fill{margin-right:0}:host([dir=ltr]) #fill{padding-left:calc(var(--spectrum-slider-controls-margin) + var(--spectrum-slider-track-handleoffset));padding-right:0}:host([dir=rtl]) #fill{padding-left:0;padding-right:calc(var(--spectrum-slider-controls-margin) + var(--spectrum-slider-track-handleoffset))}#fill{padding-bottom:0;padding-top:0}:host([dir=ltr]) .spectrum-Slider-fill--right{padding-left:0;padding-right:calc(var(--spectrum-slider-controls-margin) + var(--spectrum-slider-track-handleoffset))}:host([dir=rtl]) .spectrum-Slider-fill--right{padding-left:calc(var(--spectrum-slider-controls-margin) + var(--spectrum-slider-track-handleoffset));padding-right:0}.spectrum-Slider-fill--right{padding-bottom:0;padding-top:0}:host([variant=range]) #value{-webkit-user-select:text;user-select:text}:host([dir=ltr][variant=range]) .track:before{border-top-left-radius:0}:host([dir=rtl][variant=range]) .track:before{border-top-right-radius:0}:host([dir=ltr][variant=range]) .track:before{border-bottom-left-radius:0}:host([dir=rtl][variant=range]) .track:before{border-bottom-right-radius:0}:host([dir=ltr][variant=range]) .track:before{border-top-right-radius:0}:host([dir=rtl][variant=range]) .track:before{border-top-left-radius:0}:host([dir=ltr][variant=range]) .track:before{border-bottom-right-radius:0}:host([dir=rtl][variant=range]) .track:before{border-bottom-left-radius:0}:host([dir=ltr][variant=range]) .track:first-of-type{padding-left:0;padding-right:var(--spectrum-slider-track-handleoffset)}:host([dir=rtl][variant=range]) .track:first-of-type{padding-left:var(--spectrum-slider-track-handleoffset);padding-right:0}:host([dir=ltr][variant=range]) .track:first-of-type{left:var(
--spectrum-slider-range-track-reset
)}:host([dir=rtl][variant=range]) .track:first-of-type{right:var(
--spectrum-slider-range-track-reset
)}:host([dir=ltr][variant=range]) .track:first-of-type{right:auto}:host([dir=rtl][variant=range]) .track:first-of-type{left:auto}:host([dir=ltr][variant=range]) .track:first-of-type{margin-left:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl][variant=range]) .track:first-of-type{margin-right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=ltr][variant=range]) .track:first-of-type:before{border-top-left-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
)}:host([dir=rtl][variant=range]) .track:first-of-type:before{border-top-right-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
)}:host([dir=ltr][variant=range]) .track:first-of-type:before{border-bottom-left-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
)}:host([dir=rtl][variant=range]) .track:first-of-type:before{border-bottom-right-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
)}:host([dir=ltr][variant=range]) .track:first-of-type:before{border-top-right-radius:0}:host([dir=rtl][variant=range]) .track:first-of-type:before{border-top-left-radius:0}:host([dir=ltr][variant=range]) .track:first-of-type:before{border-bottom-right-radius:0}:host([dir=rtl][variant=range]) .track:first-of-type:before{border-bottom-left-radius:0}:host([dir=ltr][variant=range]) [dir=ltr] .track,:host([dir=ltr][variant=range]) [dir=rtl] .track{left:auto}:host([dir=ltr][variant=range]) [dir=rtl] .track,:host([dir=rtl][variant=range]) [dir=rtl] .track{right:auto}:host([dir=ltr][variant=range]) [dir=ltr] .track,:host([dir=ltr][variant=range]) [dir=rtl] .track{right:auto}:host([dir=ltr][variant=range]) [dir=rtl] .track,:host([dir=rtl][variant=range]) [dir=rtl] .track{left:auto}:host([dir=ltr][variant=range]) .track,:host([dir=rtl][variant=range]) .track{margin-left:var(--spectrum-slider-range-track-reset);margin-right:var(--spectrum-slider-range-track-reset);padding-left:var(
--spectrum-slider-track-middle-handleoffset
);padding-right:var(--spectrum-slider-track-middle-handleoffset)}:host([dir=ltr][variant=range]) .track:last-of-type{padding-left:var(
--spectrum-slider-track-handleoffset
);padding-right:0}:host([dir=rtl][variant=range]) .track:last-of-type{padding-left:0;padding-right:var(
--spectrum-slider-track-handleoffset
)}:host([dir=ltr][variant=range]) .track:last-of-type{left:auto}:host([dir=rtl][variant=range]) .track:last-of-type{right:auto}:host([dir=ltr][variant=range]) .track:last-of-type{right:var(
--spectrum-slider-range-track-reset
)}:host([dir=rtl][variant=range]) .track:last-of-type{left:var(
--spectrum-slider-range-track-reset
)}:host([dir=ltr][variant=range]) .track:last-of-type{margin-right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl][variant=range]) .track:last-of-type{margin-left:var(
--spectrum-slider-track-margin-offset
)}:host([dir=ltr][variant=range]) .track:last-of-type:before{border-top-right-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
)}:host([dir=rtl][variant=range]) .track:last-of-type:before{border-top-left-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
)}:host([dir=ltr][variant=range]) .track:last-of-type:before{border-bottom-right-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
)}:host([dir=rtl][variant=range]) .track:last-of-type:before{border-bottom-left-radius:var(
--spectrum-slider-m-track-border-radius,var(--spectrum-global-dimension-static-size-10)
)}:host([dir=ltr][variant=range]) .track:last-of-type:before{border-top-left-radius:0}:host([dir=rtl][variant=range]) .track:last-of-type:before{border-top-right-radius:0}:host([dir=ltr][variant=range]) .track:last-of-type:before{border-bottom-left-radius:0}:host([dir=rtl][variant=range]) .track:last-of-type:before{border-bottom-right-radius:0}:host([dir=ltr]) #ramp{left:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl]) #ramp{right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=ltr]) #ramp{right:var(
--spectrum-slider-track-margin-offset
)}:host([dir=rtl]) #ramp{left:var(
--spectrum-slider-track-margin-offset
)}#ramp{height:var(--spectrum-slider-ramp-track-height);margin-top:var(
--spectrum-slider-ramp-margin-top
);position:absolute;top:calc(var(--spectrum-slider-ramp-track-height)/2)}:host([dir=rtl]) #ramp svg{transform:matrix(-1,0,0,1,0,0)}#ramp svg{height:100%;width:100%}:host([dir=ltr]) .handle{left:0}:host([dir=rtl]) .handle{right:0}:host([dir=ltr]) .handle{margin-left:calc(var(--spectrum-slider-handle-width)/-2);margin-right:0}:host([dir=rtl]) .handle{margin-left:0;margin-right:calc(var(--spectrum-slider-handle-width)/-2)}.handle{border-radius:var(--spectrum-slider-handle-border-radius);border-style:solid;border-width:var(--spectrum-slider-handle-border-size);box-sizing:border-box;display:inline-block;height:var(--spectrum-slider-handle-height);margin-bottom:0;margin-top:var(--spectrum-slider-handle-margin-top);outline:none;position:absolute;top:calc(var(--spectrum-slider-height)/2);transition:border-width var(--spectrum-slider-animation-duration) ease-in-out;width:var(--spectrum-slider-handle-width);z-index:2}.handle.dragging,.handle.handle-highlight,.handle:active{border-width:var(
--spectrum-slider-handle-border-size
)}.handle.dragging,.handle.handle-highlight,.handle.is-tophandle,.handle:active{z-index:3}.handle:before{border-radius:100%;content:" ";display:block;height:var(--spectrum-slider-handle-height);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out,width var(--spectrum-global-animation-duration-100,.13s) ease-out,height var(--spectrum-global-animation-duration-100,.13s) ease-out;width:var(--spectrum-slider-handle-width)}.handle.handle-highlight:before{height:calc(var(--spectrum-slider-handle-height) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*2);width:calc(var(--spectrum-slider-handle-width) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*2)}:host([dir=ltr]) .input{left:var(
--spectrum-slider-input-left
)}:host([dir=rtl]) .input{right:var(
--spectrum-slider-input-left
)}.input{-webkit-appearance:none;border:0;cursor:default;height:var(--spectrum-slider-handle-height);margin:0;opacity:.000001;overflow:hidden;padding:0;pointer-events:none;position:absolute;top:var(--spectrum-slider-input-top);width:var(--spectrum-slider-handle-width)}.input:focus{outline:none}#label-container{display:flex;font-size:var(
--spectrum-slider-label-text-size,var(--spectrum-global-dimension-font-size-75)
);line-height:var(--spectrum-slider-label-text-line-height);margin-bottom:var(--spectrum-slider-label-margin-bottom);padding-top:var(
--spectrum-fieldlabel-m-padding-top,var(--spectrum-global-dimension-size-50)
);position:relative;width:auto}:host([dir=ltr]) #label{padding-left:0}:host([dir=rtl]) #label{padding-right:0}#label{flex-grow:1}:host([dir=ltr]) #value{padding-right:0}:host([dir=rtl]) #value{padding-left:0}:host([dir=ltr]) #value{text-align:right}:host([dir=rtl]) #value{text-align:left}#value{font-feature-settings:"tnum";cursor:default;flex-grow:0}:host([dir=ltr]) #value{margin-left:var(
--spectrum-slider-label-gap-x
)}:host([dir=rtl]) #value{margin-right:var(
--spectrum-slider-label-gap-x
)}.ticks{display:flex;justify-content:space-between;margin:0 var(--spectrum-slider-track-margin-offset);margin-top:calc(var(--spectrum-slider-tick-mark-height) + 1px);z-index:0}.tick{position:relative;width:var(--spectrum-slider-tick-mark-width)}:host([dir=ltr]) .tick:after{left:calc(50% - var(--spectrum-slider-tick-mark-width)/2)}:host([dir=rtl]) .tick:after{right:calc(50% - var(--spectrum-slider-tick-mark-width)/2)}.tick:after{border-radius:var(--spectrum-slider-tick-mark-border-radius);content:"";display:block;height:var(--spectrum-slider-tick-mark-height);position:absolute;top:0;width:var(--spectrum-slider-tick-mark-width)}.tick .tickLabel{align-items:center;display:flex;font-size:var(
--spectrum-slider-label-text-size,var(--spectrum-global-dimension-font-size-75)
);justify-content:center;line-height:var(--spectrum-slider-label-text-line-height);margin-bottom:0;margin-left:calc(var(--spectrum-slider-label-gap-x)*-1);margin-right:calc(var(--spectrum-slider-label-gap-x)*-1);margin-top:calc(var(--spectrum-slider-label-gap-y) + var(--spectrum-slider-tick-mark-height))}.tick:first-of-type .tickLabel,.tick:last-of-type .tickLabel{display:block;margin-left:0;margin-right:0;position:absolute}:host([dir=ltr]) .tick:first-of-type{left:calc(var(--spectrum-slider-tick-mark-width)/-2)}:host([dir=rtl]) .tick:first-of-type{right:calc(var(--spectrum-slider-tick-mark-width)/-2)}:host([dir=ltr]) .tick:first-of-type .tickLabel{left:0}:host([dir=rtl]) .tick:first-of-type .tickLabel{right:0}:host([dir=ltr]) .tick:last-of-type{right:calc(var(--spectrum-slider-tick-mark-width)/-2)}:host([dir=rtl]) .tick:last-of-type{left:calc(var(--spectrum-slider-tick-mark-width)/-2)}:host([dir=ltr]) .tick:last-of-type .tickLabel{right:0}:host([dir=rtl]) .tick:last-of-type .tickLabel{left:0}:host([disabled]){cursor:default}:host([disabled]) .handle{cursor:default;pointer-events:none}.spectrum-Slider-handleContainer,.spectrum-Slider-trackContainer{margin-left:calc(var(--spectrum-slider-handle-width)/2*-1);position:absolute;top:calc(var(--spectrum-slider-track-height)/2 - 1px);width:calc(100% + var(--spectrum-slider-handle-width))}.spectrum-Slider-trackContainer{height:var(--spectrum-slider-height);overflow:hidden}:host{--spectrum-slider-m-focus-ring-size:var(
--spectrum-alias-focus-ring-size,var(--spectrum-global-dimension-static-size-25)
);--spectrum-slider-m-handle-border-color-key-focus:var(
--spectrum-global-color-gray-800
);--spectrum-slider-m-handle-focus-ring-color-key-focus:var(
--spectrum-alias-focus-color,var(--spectrum-global-color-blue-400)
);--spectrum-slider-m-label-text-color:var(
--spectrum-alias-label-text-color,var(--spectrum-global-color-gray-700)
);--spectrum-slider-m-label-text-color-disabled:var(
--spectrum-alias-text-color-disabled,var(--spectrum-global-color-gray-500)
)}.track:before{background:var(
--spectrum-slider-m-track-color,var(--spectrum-global-color-gray-400)
)}#label-container{color:var(
--spectrum-slider-m-label-text-color
)}:host([variant=filled]) .track:first-child:before{background:var(
--spectrum-slider-m-track-fill-color,var(--spectrum-global-color-gray-700)
)}#fill:before{background:var(
--spectrum-slider-m-track-fill-color,var(--spectrum-global-color-gray-700)
)}#ramp path{fill:var(
--spectrum-slider-m-track-color,var(--spectrum-global-color-gray-400)
)}.handle{background:var(
--spectrum-slider-m-handle-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-slider-m-handle-border-color,var(--spectrum-global-color-gray-700)
)}.handle:hover{border-color:var(
--spectrum-slider-m-handle-border-color-hover,var(--spectrum-global-color-gray-800)
)}.handle.handle-highlight{border-color:var(
--spectrum-slider-m-handle-border-color-key-focus,var(--spectrum-global-color-gray-800)
)}.handle.handle-highlight:before{box-shadow:0 0 0 var(
--spectrum-slider-m-focus-ring-size,var(--spectrum-alias-focus-ring-size)
) var(--spectrum-slider-m-handle-focus-ring-color-key-focus)}.handle.dragging,.handle:active{border-color:var(
--spectrum-slider-m-handle-border-color-down,var(--spectrum-global-color-gray-800)
)}:host([variant=ramp]) .handle{box-shadow:0 0 0 var(
--spectrum-slider-m-handle-gap,var(--spectrum-alias-border-size-thicker)
) var(
--spectrum-alias-background-color-default,var(--spectrum-global-color-gray-100)
)}.input{background:transparent}.tick:after{background-color:var(
--spectrum-slider-m-tick-mark-color,var(--spectrum-global-color-gray-400)
)}.handle.dragging{background:var(
--spectrum-slider-m-handle-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-slider-m-handle-border-color-down,var(--spectrum-global-color-gray-800)
)}:host([variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(
--spectrum-slider-m-track-fill-color,var(--spectrum-global-color-gray-700)
)}:host([disabled]) #label-container{color:var(
--spectrum-slider-m-label-text-color-disabled
)}:host([disabled]) .handle{background:var(
--spectrum-alias-background-color-default,var(--spectrum-global-color-gray-100)
);border-color:var(
--spectrum-slider-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled]) .handle:active,:host([disabled]) .handle:hover{background:var(
--spectrum-slider-m-handle-background-color,var(--spectrum-alias-background-color-transparent)
);border-color:var(
--spectrum-slider-m-handle-border-color-disabled,var(--spectrum-global-color-gray-400)
)}:host([disabled]) .track:before{background:var(
--spectrum-slider-m-track-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled][variant=filled]) .track:first-child:before{background:var(
--spectrum-slider-m-track-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) #fill:before{background:var(
--spectrum-slider-m-track-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) #ramp path{fill:var(
--spectrum-slider-ramp-track-color-disabled
)}:host([disabled][variant=range]) .track:not(:first-of-type):not(:last-of-type):before{background:var(
--spectrum-slider-m-track-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}:host{--spectrum-slider-handle-default-background-color:var(
--spectrum-slider-m-handle-background-color,var(--spectrum-alias-background-color-transparent)
);--spectrum-slider-handle-default-border-color:var(
--spectrum-slider-m-handle-border-color,var(--spectrum-global-color-gray-700)
)}sp-field-label{padding-bottom:0;padding-top:0}:host(:focus){outline:0}:host([editable]){display:grid;grid-template-areas:"label ." "slider number";grid-template-columns:1fr auto}:host([editable]) #label-container{grid-area:label}:host([editable]) #label-container+div{grid-area:slider}:host([editable]) sp-number-field{--spectrum-stepper-width:var(
--spectrum-slider-editable-number-field-width,var(--spectrum-global-dimension-size-1000)
);grid-area:number}:host([hide-stepper]) sp-number-field{--spectrum-stepper-width:var(
--spectrum-slider-editable-number-field-width,var(--spectrum-global-dimension-size-900)
)}:host([editable][dir=ltr]) sp-number-field{margin-left:var(--spectrum-global-dimension-size-200)}:host([editable][dir=rtl]) sp-number-field{margin-right:var(--spectrum-global-dimension-size-200)}:host([editable]) output{opacity:0}:host([disabled]){pointer-events:none}#track,:host([dragging]){touch-action:none;-webkit-user-select:none;user-select:none}.not-exact.ticks{justify-content:start}:host([dir=ltr]) .not-exact .tick{padding-right:var(--sp-slider-tick-offset)}:host([dir=rtl]) .not-exact .tick{padding-left:var(--sp-slider-tick-offset)}:host([dir=ltr]) .not-exact .tick:after{left:auto;transform:translate(-50%)}:host([dir=rtl]) .not-exact .tick:after{right:auto;transform:translate(50%)}.track:before{background-size:var(--spectrum-slider-track-background-size)!important}:host([dir=ltr]) .track:before{background:var(
--spectrum-slider-track-color,var(--spectrum-global-color-gray-300)
)}:host([dir=rtl]) .track:before{background:var(
--spectrum-slider-track-color-rtl,var(
--spectrum-slider-track-color,var(--spectrum-global-color-gray-300)
)
)}:host([dir=ltr]) .track:last-of-type:before{background-position:100%}:host([dir=rtl]) .track:first-of-type:before{background-position:100%}.track:not(:first-of-type):not(:last-of-type){padding-left:calc(var(--spectrum-slider-handle-width)/2 + var(--spectrum-slider-track-handleoffset))!important;padding-right:calc(var(--spectrum-slider-handle-width)/2 + var(--spectrum-slider-track-handleoffset))!important}:host([dir=ltr][variant=range]) .track,:host([dir=rtl][variant=range]) .track{margin:var(--spectrum-slider-range-track-reset);margin-top:calc(var(--spectrum-slider-track-height)/-2)}:host([dir=ltr]) .track:not(:first-of-type):not(:last-of-type){left:var(--spectrum-slider-track-segment-position)}:host([dir=rtl]) .track:not(:first-of-type):not(:last-of-type){right:var(--spectrum-slider-track-segment-position)}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}:host([label-visibility=value][dir=ltr]) #value{margin-left:auto}:host([label-visibility=value][dir=rtl]) #value{margin-right:auto}:host([label-visibility=none]) #label-container{margin:0;padding:0}
`;var Eo=Io;const So=()=>U`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 8"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M6.575 6.555c.055.056.092.13 0 .2l-1.149.741c-.092.056-.129.019-.166-.074L3.834 4.94 1.963 7c-.019.036-.074.073-.129 0l-.889-.927c-.093-.055-.074-.111 0-.166l2.111-1.76L.648 3.24c-.037 0-.092-.074-.056-.167l.63-1.259a.097.097 0 01.167-.036L3.5 3.148l.13-2.7a.1.1 0 01.081-.111.15.15 0 01.03 0l1.537.2c.093 0 .111.037.093.13l-.723 2.647 2.445-.741c.055-.037.111-.037.148.074l.241 1.37c.018.093 0 .13-.074.13l-2.556.2z"
    />
  </svg>`;class Ao extends g{render(){return P(l),So()}}customElements.define("sp-icon-asterisk100",Ao);const To=h`
@media (forced-colors:active){.spectrum-Icon,.spectrum-UIIcon{forced-color-adjust:auto}}.spectrum-UIIcon-Asterisk75{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-75,var(--spectrum-global-dimension-static-size-100)
)}.spectrum-UIIcon-Asterisk100{height:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
);width:var(
--spectrum-alias-ui-icon-asterisk-size-100,var(--spectrum-global-dimension-size-100)
)}.spectrum-UIIcon-Asterisk200{height:var(--spectrum-alias-ui-icon-asterisk-size-200);width:var(
--spectrum-alias-ui-icon-asterisk-size-200
)}.spectrum-UIIcon-Asterisk300{height:var(--spectrum-alias-ui-icon-asterisk-size-300);width:var(
--spectrum-alias-ui-icon-asterisk-size-300
)}
`;var $o=To;const _o=h`
:host([size=s]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-s-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-s-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-s-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-s-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-s-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-s-asterisk-gap,var(--spectrum-global-dimension-size-50)
)}:host([size=m]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-m-padding-top,var(--spectrum-global-dimension-size-50)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-m-padding-bottom,var(--spectrum-global-dimension-size-65)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-m-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-m-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-m-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-m-asterisk-gap,var(--spectrum-global-dimension-size-50)
)}:host([size=l]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-l-padding-top,var(--spectrum-global-dimension-size-75)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-l-padding-bottom,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-l-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-l-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-l-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-l-asterisk-gap,var(--spectrum-global-dimension-size-65)
)}:host([size=xl]){--spectrum-fieldlabel-padding-top:var(
--spectrum-fieldlabel-xl-padding-top,var(--spectrum-global-dimension-size-115)
);--spectrum-fieldlabel-padding-bottom:var(
--spectrum-fieldlabel-xl-padding-bottom,var(--spectrum-global-dimension-size-130)
);--spectrum-fieldlabel-text-size:var(
--spectrum-fieldlabel-xl-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-fieldlabel-text-font-weight:var(
--spectrum-fieldlabel-xl-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-fieldlabel-text-line-height:var(
--spectrum-fieldlabel-xl-text-line-height,var(--spectrum-alias-component-text-line-height)
);--spectrum-fieldlabel-asterisk-gap:var(
--spectrum-fieldlabel-xl-asterisk-gap,var(--spectrum-global-dimension-size-65)
)}:host{-webkit-font-smoothing:subpixel-antialiased;-moz-osx-font-smoothing:auto;font-smoothing:subpixel-antialiased;box-sizing:border-box;display:block;font-size:var(--spectrum-fieldlabel-text-size);font-weight:var(--spectrum-fieldlabel-text-font-weight);line-height:var(--spectrum-fieldlabel-text-line-height);padding-bottom:var(--spectrum-fieldlabel-padding-bottom);padding-left:0;padding-right:0;padding-top:var(--spectrum-fieldlabel-padding-top);vertical-align:top}:host([dir=ltr]) .required-icon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl]) .required-icon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}.required-icon{margin-bottom:0;margin-top:0}:host([dir=ltr][side-aligned=start]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=start]){padding-left:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=start]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-m-side-padding-top,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=start]) .required-icon{margin-left:var(
--spectrum-fieldlabel-asterisk-gap
);margin-right:0}:host([dir=rtl][side-aligned=start]) .required-icon{margin-left:0;margin-right:var(
--spectrum-fieldlabel-asterisk-gap
)}:host([side-aligned=start]) .required-icon{margin-bottom:0;margin-top:var(
--spectrum-fieldlabel-m-side-asterisk-margin-y,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][side-aligned=end]){text-align:right}:host([dir=rtl][side-aligned=end]){text-align:left}:host([dir=ltr][side-aligned=end]){padding-left:0;padding-right:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
)}:host([dir=rtl][side-aligned=end]){padding-left:var(
--spectrum-fieldlabel-m-side-padding-right,var(--spectrum-global-dimension-size-150)
);padding-right:0}:host([side-aligned=end]){display:inline-block;padding-bottom:0;padding-top:var(
--spectrum-fieldlabel-m-side-padding-top,var(--spectrum-global-dimension-size-100)
)}:host{color:var(
--spectrum-fieldlabel-m-text-color,var(--spectrum-alias-label-text-color)
)}:host([disabled]){color:var(
--spectrum-fieldlabel-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) .required-icon{color:var(
--spectrum-fieldlabel-m-asterisk-color-disabled,var(--spectrum-alias-text-color-disabled)
)}.required-icon{color:var(
--spectrum-fieldlabel-m-asterisk-color,var(--spectrum-global-color-gray-600)
)}:host([side-aligned=start]) .required-icon{margin-top:0}
`;var Lo=_o;class F extends V(k){constructor(){super(...arguments),this.disabled=!1,this.id="",this.for="",this.required=!1}static get styles(){return[Lo,$o]}handleClick(t){if(!this.target||this.disabled||t.defaultPrevented)return;this.target.focus();const e=this.getRootNode(),r=this.target,o=r.getRootNode(),i=o.host;o===e&&r.forceFocusVisible?r.forceFocusVisible():i&&i.forceFocusVisible&&i.forceFocusVisible()}async manageFor(){if(!this.for)return;const t=this.getRootNode(),e=t.querySelector(`#${this.for}`);if(!!e)return e.localName.search("-")>0&&await customElements.whenDefined(e.localName),typeof e.updateComplete!="undefined"&&await e.updateComplete,this.target=e.focusElement||e,this.target&&(this.target.getRootNode()===t?this.target.setAttribute("aria-labelledby",this.id):this.target.setAttribute("aria-label",this.labelText)),Promise.resolve()}get labelText(){const t=this.slotEl.assignedNodes({flatten:!0});return t.length?t.map(r=>(r.textContent||"").trim()).join(" "):""}render(){return l`
            <label>
                <slot @slotchange=${this.manageFor}></slot>
                ${this.required?l`
                          <sp-icon-asterisk100
                              class="required-icon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `:l``}
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.hasAttribute("id")||this.setAttribute("id",`${this.tagName.toLowerCase()}-${F.instanceCount++}`),this.addEventListener("click",this.handleClick)}updated(t){super.updated(t),(t.has("for")||t.has("id"))&&this.manageFor()}}F.instanceCount=0;s([n({type:Boolean,reflect:!0})],F.prototype,"disabled",void 0);s([n({type:String})],F.prototype,"id",void 0);s([n({type:String})],F.prototype,"for",void 0);s([n({type:Boolean,reflect:!0})],F.prototype,"required",void 0);s([y("slot")],F.prototype,"slotEl",void 0);s([n({type:String,reflect:!0,attribute:"side-aligned"})],F.prototype,"sideAligned",void 0);customElements.define("sp-field-label",F);class Fo{constructor(t){this.handles=new Map,this.model=[],this.handleOrder=[],this.handleOrientation=()=>{this.updateBoundingRect()},this.extractModelFromLightDom=()=>{let e=[...this.host.querySelectorAll('[slot="handle"]')];e.length===0&&(e=[this.host]),!e.some(r=>this.waitForUpgrade(r))&&(this.handles=new Map,this.handleOrder=[],e.forEach((r,o)=>{var i;!((i=r.handleName)===null||i===void 0)&&i.length||(r.name=`handle${o+1}`),this.handles.set(r.handleName,r),this.handleOrder.push(r.handleName),r.handleController=this}),this.requestUpdate())},this.onInputChange=e=>{const r=e.target;r.model.handle.value=r.valueAsNumber,this.requestUpdate(),this.dispatchChangeEvent(r,r.model.handle)},this.onInputFocus=e=>{const r=e.target;let o;try{o=r.matches(":focus-visible")||this.host.matches(".focus-visible")}catch{o=this.host.matches(".focus-visible")}r.model.handle.highlight=o,this.requestUpdate()},this.onInputBlur=e=>{const r=e.target;r.model.handle.highlight=!1,this.requestUpdate()},this.onInputKeydown=e=>{const r=e.target;r.model.handle.highlight=!0,this.requestUpdate()},this.host=t}get values(){const t={};for(const e of this.handles.values())t[e.handleName]=e.value;return t}get size(){return this.handles.size}inputForHandle(t){if(this.handles.has(t.handleName)){const{input:e}=this.getHandleElements(t);return e}throw new Error(`No input for handle "${t.name}"`)}requestUpdate(){this.host.requestUpdate()}setValueFromHandle(t){const e=this.getHandleElements(t);if(!e)return;const{input:r}=e;r.valueAsNumber===t.value?t.dragging&&t.dispatchInputEvent():(r.valueAsNumber=t.value,t.value=r.valueAsNumber,this.requestUpdate()),t.value=r.valueAsNumber}handleHasChanged(t){t!==this.host&&this.requestUpdate()}formattedValueForHandle(t){var e;const{handle:r}=t,o=(e=r.numberFormat)!==null&&e!==void 0?e:this.host.numberFormat;return r.getAriaHandleText(t.value,o)}get formattedValues(){const t=new Map;for(const e of this.model)t.set(e.name,this.formattedValueForHandle(e));return t}get focusElement(){const{input:t}=this.getActiveHandleElements();return this.host.editable&&!t.model.handle.dragging?this.host.numberField:t}hostConnected(){this.observer||(this.observer=new MutationObserver(this.extractModelFromLightDom)),this.observer.observe(this.host,{subtree:!0,childList:!0}),this.extractModelFromLightDom(),"orientation"in screen?screen.orientation.addEventListener("change",this.handleOrientation):window.addEventListener("orientationchange",this.handleOrientation)}hostDisconnected(){this.observer.disconnect(),"orientation"in screen?screen.orientation.removeEventListener("change",this.handleOrientation):window.removeEventListener("orientationchange",this.handleOrientation)}hostUpdate(){this.updateModel()}waitForUpgrade(t){return t instanceof q?!1:(t.addEventListener("sp-slider-handle-ready",()=>this.extractModelFromLightDom(),{once:!0,passive:!0}),!0)}get activeHandle(){return this.handleOrder[this.handleOrder.length-1]}get activeHandleInputId(){const t=this.activeHandle;return`input-${this.model.findIndex(r=>r.name===t)}`}activateHandle(t){const e=this.handleOrder.findIndex(r=>r===t);e>=0&&this.handleOrder.splice(e,1),this.handleOrder.push(t)}getActiveHandleElements(){const t=this.activeHandle,e=this.handles.get(t),r=this.getHandleElements(e);return Object.assign({model:e},r)}getHandleElements(t){if(!this.handleRefMap){this.handleRefMap=new WeakMap;const r=this.host.shadowRoot.querySelectorAll(".handle > input");for(const o of r){const i=o,c=i.parentElement,d=this.handles.get(c.getAttribute("name"));d&&this.handleRefMap.set(d,{input:i,handle:c})}}return this.handleRefMap.get(t)}clearHandleComponentCache(){delete this.handleRefMap}get boundingClientRect(){return this._boundingClientRect||(this._boundingClientRect=this.host.track.getBoundingClientRect()),this._boundingClientRect}updateBoundingRect(){delete this._boundingClientRect}extractDataFromEvent(t){if(!this._activePointerEventData){let e=t.target.querySelector(":scope > .input");const r=!e,o=e?e.model:this.model.find(i=>i.name===this.activeHandle);!e&&!!o&&(e=o.handle.focusElement),this._activePointerEventData={input:e,model:o,resolvedInput:r}}return this._activePointerEventData}handlePointerdown(t){const{resolvedInput:e,model:r}=this.extractDataFromEvent(t);if(!r||this.host.disabled||t.button!==0){t.preventDefault();return}this.host.track.setPointerCapture(t.pointerId),this.updateBoundingRect(),this.host.labelEl.click(),this.draggingHandle=r.handle,r.handle.dragging=!0,this.activateHandle(r.name),e&&this.handlePointermove(t),this.requestUpdate()}handlePointerup(t){const{input:e,model:r}=this.extractDataFromEvent(t);delete this._activePointerEventData,r&&(this.host.labelEl.click(),r.handle.highlight=!1,delete this.draggingHandle,r.handle.dragging=!1,this.requestUpdate(),this.host.track.releasePointerCapture(t.pointerId),this.dispatchChangeEvent(e,r.handle))}handlePointermove(t){const{input:e,model:r}=this.extractDataFromEvent(t);!r||!this.draggingHandle||(t.stopPropagation(),e.value=this.calculateHandlePosition(t,r).toString(),r.handle.value=parseFloat(e.value),this.requestUpdate())}dispatchChangeEvent(t,e){t.valueAsNumber=e.value;const r=new Event("change",{bubbles:!0,composed:!0});e.dispatchEvent(r)}calculateHandlePosition(t,e){const r=this.boundingClientRect,o=r.left,i=t.clientX,c=r.width,d=(i-o)/c,u=e.normalization.fromNormalized(d,e.range.min,e.range.max);return this.host.isLTR?u:e.range.max-u}renderHandle(t,e,r,o){var i;const c={handle:!0,dragging:((i=this.draggingHandle)===null||i===void 0?void 0:i.handleName)===t.name,"handle-highlight":t.highlight},d={[this.host.isLTR?"left":"right"]:`${t.normalizedValue*100}%`,"z-index":r.toString(),"background-color":`var(--spectrum-slider-handle-background-color-${e}, var(--spectrum-slider-handle-default-background-color))`,"border-color":`var(--spectrum-slider-handle-border-color-${e}, var(-spectrum-slider-handle-default-border-color))`},u=o?`label input-${e}`:"label";return l`
            <div
                class=${at(c)}
                name=${t.name}
                style=${Gt(d)}
                role="presentation"
            >
                <input
                    type="range"
                    class="input"
                    id="input-${e}"
                    min=${t.clamp.min}
                    max=${t.clamp.max}
                    step=${t.step}
                    value=${t.value}
                    aria-disabled=${v(this.host.disabled?"true":void 0)}
                    tabindex=${v(this.host.editable?-1:void 0)}
                    aria-label=${v(t.ariaLabel)}
                    aria-labelledby=${u}
                    aria-valuetext=${this.formattedValueForHandle(t)}
                    @change=${this.onInputChange}
                    @focus=${this.onInputFocus}
                    @blur=${this.onInputBlur}
                    @keydown=${this.onInputKeydown}
                    .model=${t}
                />
            </div>
        `}render(){return this.clearHandleComponentCache(),this.model.map((t,e)=>{const r=this.handleOrder.indexOf(t.name)+1;return this.renderHandle(t,e,r,this.model.length>1)})}trackSegments(){const t=this.model.map(e=>e.normalizedValue);return t.sort((e,r)=>e-r),t.unshift(0),t.map((e,r,o)=>{var i;return[e,(i=o[r+1])!==null&&i!==void 0?i:1]})}updateModel(){const t=[...this.handles.values()],e=o=>{const i=t[o],c=t[o-1],d=t[o+1],u=typeof i.min=="number"?i.min:this.host.min,m=typeof i.max=="number"?i.max:this.host.max,p={range:{min:u,max:m},clamp:{min:u,max:m}};if(i.min==="previous")if(c){for(let b=o-1;b>=0;b--){const x=t[b];if(typeof x.min=="number"){p.range.min=x.min;break}}p.clamp.min=Math.max(c.value,p.range.min)}else console.warn('First slider handle cannot have attribute min="previous"');if(i.max==="next")if(d){for(let b=o+1;b<t.length;b++){const x=t[b];if(typeof x.max=="number"){p.range.max=x.max;break}}p.clamp.max=Math.min(d.value,p.range.max)}else console.warn('Last slider handle cannot have attribute max="next"');return p},r=t.map((o,i)=>{var c;const d=e(i),{toNormalized:u}=o.normalization,m=Math.max(Math.min(o.value,d.clamp.max),d.clamp.min),p=u(m,d.range.min,d.range.max);return Object.assign({name:o.handleName,value:m,normalizedValue:p,highlight:o.highlight,step:(c=o.step)!==null&&c!==void 0?c:this.host.step,normalization:o.normalization,handle:o,ariaLabel:o!==this.host&&(o==null?void 0:o.label.length)>0?o.label:void 0},d)});this.model=r}async handleUpdatesComplete(){const t=[...this.handles.values()].filter(e=>e!==this.host).map(e=>e.updateComplete);await Promise.all(t)}}const Uo=["filled","ramp","range","tick"];class w extends nt(q,""){constructor(){super(...arguments),this.handleController=new Fo(this),this._editable=!1,this.hideStepper=!1,this.type="",this._variant="",this.getAriaValueText=t=>{const e=[...t.values()];return e.length===2?`${e[0]}${this._forcedUnit} - ${e[1]}${this._forcedUnit}`:e.join(`${this._forcedUnit}, `)+this._forcedUnit},this.min=0,this.max=100,this.step=1,this.tickStep=0,this.tickLabels=!1,this.disabled=!1,this._numberFieldInput=Promise.resolve()}static get styles(){return[Eo]}get editable(){return this._editable}set editable(t){if(t===this.editable)return;const e=this.editable;this._editable=this.handleController.size<2?t:!1,this.editable&&(this._numberFieldInput=Promise.resolve().then(function(){return Vr})),e!==this.editable&&this.requestUpdate("editable",e)}set variant(t){const e=this.variant;t!==this.variant&&(Uo.includes(t)?(this.setAttribute("variant",t),this._variant=t):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",e))}get variant(){return this._variant}get values(){return this.handleController.values}get handleName(){return"value"}get ariaValueText(){return this.getAriaValueText?this.getAriaValueText(this.handleController.formattedValues):`${this.value}${this._forcedUnit}`}get numberFormat(){return this.getNumberFormat()}get focusElement(){return this.handleController.focusElement}handleLabelClick(t){this.editable&&(t.preventDefault(),this.focus())}render(){return l`
            ${this.renderLabel()} ${this.renderTrack()}
            ${this.editable?l`
                      <sp-number-field
                          .formatOptions=${this.formatOptions||{}}
                          id="number-field"
                          min=${this.min}
                          max=${this.max}
                          step=${this.step}
                          value=${this.value}
                          ?hide-stepper=${this.hideStepper}
                          ?disabled=${this.disabled}
                          @input=${this.handleNumberInput}
                          @change=${this.handleNumberChange}
                      ></sp-number-field>
                  `:l``}
        `}connectedCallback(){super.connectedCallback(),this.handleController.hostConnected()}disconnectedCallback(){super.disconnectedCallback(),this.handleController.hostDisconnected()}update(t){this.handleController.hostUpdate(),super.update(t)}renderLabel(){const t=this.labelVisibility==="none"||this.labelVisibility==="value",e=this.labelVisibility==="none"||this.labelVisibility==="text";return l`
            <div id="label-container">
                <sp-field-label
                    class=${at({"visually-hidden":t})}
                    ?disabled=${this.disabled}
                    id="label"
                    for=${this.editable?"number-field":this.handleController.activeHandleInputId}
                    @click=${this.handleLabelClick}
                >
                    ${this.slotHasContent?l``:this.label}
                    <slot>${this.label}</slot>
                </sp-field-label>
                <output
                    class=${at({"visually-hidden":e})}
                    id="value"
                    aria-live="off"
                    for="input"
                >
                    ${this.ariaValueText}
                </output>
            </div>
        `}renderRamp(){return this.variant!=="ramp"?l``:l`
            <div id="ramp">
                <svg
                    viewBox="0 0 240 16"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    focusable="false"
                >
                    <path
                        d="M240,4v8c0,2.3-1.9,4.1-4.2,4L1,9C0.4,9,0,8.5,0,8c0-0.5,0.4-1,1-1l234.8-7C238.1-0.1,240,1.7,240,4z"
                    ></path>
                </svg>
            </div>
        `}renderTicks(){if(this.variant!=="tick")return l``;const t=this.tickStep||this.step,e=(this.max-this.min)/t,r=e%1!==0,o=new Array(Math.floor(e+1));return o.fill(0,0,e+1),l`
            <div
                class="${r?"not-exact ":""}ticks"
                style=${v(r?`--sp-slider-tick-offset: calc(100% / ${this.max} * ${this.tickStep}`:void 0)}
            >
                ${o.map((i,c)=>l`
                        <div class="tick">
                            ${this.tickLabels?l`
                                      <div class="tickLabel">
                                          ${c*t}
                                      </div>
                                  `:l``}
                        </div>
                    `)}
            </div>
        `}renderTrackSegment(t,e){return this.variant==="ramp"?l``:l`
            <div
                class="track"
                style=${Gt(this.trackSegmentStyles(t,e))}
                role="presentation"
            ></div>
        `}renderTrack(){const t=this.handleController.trackSegments(),e=[{id:"track0",html:this.renderTrackSegment(...t[0])},{id:"ramp",html:this.renderRamp()},{id:"ticks",html:this.renderTicks()},{id:"handles",html:this.handleController.render()},...t.slice(1).map(([r,o],i)=>({id:`track${i+1}`,html:this.renderTrackSegment(r,o)}))];return l`
            <div
                id="track"
                ${pt({start:["pointerdown",this.handlePointerdown],streamInside:["pointermove",this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
            >
                <div id="controls">
                    ${Ce(e,r=>r.id,r=>r.html)}
                </div>
            </div>
        `}handlePointerdown(t){this.handleController.handlePointerdown(t)}handlePointermove(t){this.handleController.handlePointermove(t)}handlePointerup(t){this.handleController.handlePointerup(t)}handleNumberInput(t){var e;const{value:r}=t.target;if(((e=t.target)===null||e===void 0?void 0:e.stepperActive)&&!isNaN(r)){this.value=r;return}t.stopPropagation()}handleNumberChange(t){var e;const{value:r}=t.target;isNaN(r)?(t.target.value=this.value,t.stopPropagation()):(this.value=r,!((e=t.target)===null||e===void 0)&&e.stepperActive||this.dispatchInputEvent())}trackSegmentStyles(t,e){const r=e-t;return{width:`${r*100}%`,"--spectrum-slider-track-background-size":`${1/r*100}%`,"--spectrum-slider-track-segment-position":`${t*100}%`}}async getUpdateComplete(){const t=await super.getUpdateComplete();return this.editable&&(await this._numberFieldInput,await this.numberField.updateComplete),await this.handleController.handleUpdatesComplete(),t}}s([n({type:Boolean,reflect:!0})],w.prototype,"editable",null);s([n({type:Boolean,reflect:!0,attribute:"hide-stepper"})],w.prototype,"hideStepper",void 0);s([n()],w.prototype,"type",void 0);s([n({type:String})],w.prototype,"variant",null);s([n({attribute:!1})],w.prototype,"getAriaValueText",void 0);s([n({type:String,reflect:!0,attribute:"label-visibility"})],w.prototype,"labelVisibility",void 0);s([n({type:Number,reflect:!0})],w.prototype,"min",void 0);s([n({type:Number,reflect:!0})],w.prototype,"max",void 0);s([n({type:Number})],w.prototype,"step",void 0);s([n({type:Number,attribute:"tick-step"})],w.prototype,"tickStep",void 0);s([n({type:Boolean,attribute:"tick-labels"})],w.prototype,"tickLabels",void 0);s([n({type:Boolean,reflect:!0})],w.prototype,"disabled",void 0);s([y("#label")],w.prototype,"labelEl",void 0);s([y("#number-field")],w.prototype,"numberField",void 0);s([y("#track")],w.prototype,"track",void 0);customElements.define("sp-slider",w);const Po=h`
.header{color:var(--spectrum-listheading-text-color);display:block;font-size:var(--spectrum-listitem-texticon-heading-text-size);font-weight:var(--spectrum-listitem-texticon-heading-text-font-weight);letter-spacing:var(
--spectrum-listitem-texticon-heading-letter-spacing
);line-height:var(--spectrum-listitem-texticon-heading-line-height);margin:var(--spectrum-listitem-texticon-heading-margin);padding:var(--spectrum-listitem-texticon-heading-padding);text-transform:var(--spectrum-listitem-texticon-heading-text-transform)}:host{display:inline-flex;flex-direction:column;margin:0;overflow:visible}:host([dir=ltr]) .header{padding:0 var(--spectrum-global-dimension-size-450) 0 var(--spectrum-global-dimension-size-150)}:host([dir=rtl]) .header{padding:0 var(--spectrum-global-dimension-size-150) 0 var(--spectrum-global-dimension-size-450)}sp-menu{--swc-menu-width:100%}:host(:last-child) sp-menu{margin-bottom:0}:host(:first-child) .header[hidden]+sp-menu{margin-top:0}[hidden]{display:none!important}
`;var Bo=Po;class j extends O{constructor(){super(),j.instances+=1,this.headerId=`sp-menu-group-label-${j.instances}`}static get styles(){return[...super.styles,Bo]}get ownRole(){switch(this.selects){case"multiple":case"single":case"inherit":return"group";default:return"menu"}}updateLabel(){const t=this.headerElements.length?this.headerElements[0]:void 0;if(t!==this.headerElement)if(this.headerElement&&this.headerElement.id===this.headerId&&this.headerElement.removeAttribute("id"),t){const e=t.id||this.headerId;t.id||(t.id=e),this.setAttribute("aria-labelledby",e)}else this.removeAttribute("aria-labelledby");this.headerElement=t}render(){return l`
            <span
                class="header"
                aria-hidden="true"
                ?hidden=${!this.headerElement}
            >
                <slot name="header" @slotchange=${this.updateLabel}></slot>
            </span>
            <sp-menu role="none">
                <slot></slot>
            </sp-menu>
        `}}j.instances=0;s([Xt("header",!0)],j.prototype,"headerElements",void 0);s([qt()],j.prototype,"headerElement",void 0);customElements.define("sp-menu-group",j);const Oo=h`
:host{border:none;box-sizing:content-box;height:var(--spectrum-listitem-texticon-divider-size);margin:calc(var(--spectrum-listitem-texticon-divider-padding)/2) var(--spectrum-listitem-texticon-padding-y);overflow:visible;padding:0}:host{background-color:var(
--spectrum-listitem-m-texticon-divider-color,var(--spectrum-alias-border-color-extralight)
)}:host{display:block}
`;var Do=Oo;class Ro extends k{static get styles(){return[Do]}firstUpdated(){this.setAttribute("role","separator")}}customElements.define("sp-menu-divider",Ro);const Mo=({width:a=24,height:t=24,hidden:e=!1,title:r="More"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${a}"
    height="${t}"
    viewBox="0 0 36 36"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <circle cx="17.8" cy="18.2" r="3.8" />
    <circle cx="29.5" cy="18.2" r="3.8" />
    <circle cx="6.1" cy="18.2" r="3.68" />
  </svg>`;class Ho extends g{render(){return A(l),Mo({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-more",Ho);const No=h`
:host{display:inline-flex}:host([quiet]){min-width:0}::slotted([slot=icon]){flex-shrink:0}.icon{flex-shrink:0}#popover{display:none;max-width:none;width:auto}:host([dir=ltr]) .icon,:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir=rtl]) .icon,:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-padding-left-adjusted))*-1)}:host([dir]) slot[icon-only] .icon,:host([dir]) slot[icon-only]::slotted([slot=icon]){margin-left:calc((var(--spectrum-actionbutton-textonly-padding-left-adjusted) - var(--spectrum-actionbutton-icononly-padding-left-adjusted))*-1);margin-right:calc((var(--spectrum-actionbutton-textonly-padding-right-adjusted) - var(--spectrum-actionbutton-icononly-padding-right-adjusted))*-1)}
`;var jo=No;class me extends nt(C,"label"){constructor(){super(...arguments),this.selects=void 0,this.listRole="menu",this.itemRole="menuitem"}static get styles(){return[jo]}get hasLabel(){return this.slotHasContent}get buttonContent(){return[l`
                <slot name="icon" slot="icon" ?icon-only=${!this.hasLabel}>
                    <sp-icon-more class="icon"></sp-icon-more>
                </slot>
                <slot name="label" ?hidden=${!this.hasLabel}></slot>
            `]}render(){return l`
            <sp-action-button
                quiet
                ?selected=${this.open}
                aria-haspopup="true"
                aria-controls="popover"
                aria-expanded=${this.open?"true":"false"}
                aria-label=${v(this.label||void 0)}
                id="button"
                class="button"
                size=${this.size}
                @blur=${this.onButtonBlur}
                @click=${this.onButtonClick}
                @focus=${this.onButtonFocus}
                ?disabled=${this.disabled}
            >
                ${this.buttonContent}
            </sp-action-button>
        `}updated(t){super.updated(t),t.has("invalid")&&(this.invalid=!1),this.quiet=!0}}s([n({type:String})],me.prototype,"selects",void 0);customElements.define("sp-action-menu",me);const Vo=h`
:host{align-items:center;background-position:0 0,0 var(--spectrum-global-dimension-static-size-100,8px),var(--spectrum-global-dimension-static-size-100,8px) calc(var(--spectrum-global-dimension-static-size-100, 8px)*-1),calc(var(--spectrum-global-dimension-static-size-100, 8px)*-1) 0;background-size:var(--spectrum-global-dimension-static-size-200,16px) var(--spectrum-global-dimension-static-size-200,16px);border-radius:var(--spectrum-thumbnail-border-radius);display:flex;height:var(--spectrum-thumbnail-height);justify-content:center;margin:0;overflow:hidden;padding:0;position:relative;vertical-align:top;width:var(--spectrum-thumbnail-width);z-index:0}:host:before{border-radius:var(--spectrum-thumbnail-border-radius);content:"";height:100%;position:absolute;width:100%;z-index:2}:host([size=xxs]){--spectrum-thumbnail-border-color-selected:var(
--spectrum-thumbnail-xxs-border-color-selected,var(--spectrum-alias-border-color-selected)
);--spectrum-thumbnail-border-size-selected-key-focus:var(
--spectrum-thumbnail-xxs-border-size-selected-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-thumbnail-border-size:var(
--spectrum-thumbnail-xxs-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-thumbnail-border-color:var(
--spectrum-thumbnail-xxs-border-color,var(--spectrum-alias-border-color-translucent)
);--spectrum-thumbnail-border-color-key-focus:var(
--spectrum-thumbnail-xxs-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
);--spectrum-thumbnail-darksquare-background-color:var(
--spectrum-thumbnail-xxs-darksquare-background-color,var(--spectrum-alias-thumbnail-darksquare-background-color)
);--spectrum-thumbnail-border-radius:var(
--spectrum-thumbnail-xxs-border-radius,var(--spectrum-alias-thumbnail-border-radius-small)
);--spectrum-thumbnail-width:var(
--spectrum-thumbnail-xxs-width,var(--spectrum-global-dimension-size-225)
);--spectrum-thumbnail-height:var(
--spectrum-thumbnail-xxs-height,var(--spectrum-global-dimension-size-225)
)}:host([size=xs]){--spectrum-thumbnail-border-color-selected:var(
--spectrum-thumbnail-xs-border-color-selected,var(--spectrum-alias-border-color-selected)
);--spectrum-thumbnail-border-size-selected-key-focus:var(
--spectrum-thumbnail-xs-border-size-selected-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-thumbnail-border-size:var(
--spectrum-thumbnail-xs-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-thumbnail-border-color:var(
--spectrum-thumbnail-xs-border-color,var(--spectrum-alias-border-color-translucent)
);--spectrum-thumbnail-border-color-key-focus:var(
--spectrum-thumbnail-xs-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
);--spectrum-thumbnail-darksquare-background-color:var(
--spectrum-thumbnail-xs-darksquare-background-color,var(--spectrum-alias-thumbnail-darksquare-background-color)
);--spectrum-thumbnail-border-radius:var(
--spectrum-thumbnail-xs-border-radius,var(--spectrum-alias-thumbnail-border-radius-small)
);--spectrum-thumbnail-width:var(
--spectrum-thumbnail-xs-width,var(--spectrum-global-dimension-size-300)
);--spectrum-thumbnail-height:var(
--spectrum-thumbnail-xs-height,var(--spectrum-global-dimension-size-300)
)}:host([size=s]){--spectrum-thumbnail-border-color-selected:var(
--spectrum-thumbnail-s-border-color-selected,var(--spectrum-alias-border-color-selected)
);--spectrum-thumbnail-border-size-selected-key-focus:var(
--spectrum-thumbnail-s-border-size-selected-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-thumbnail-border-size:var(
--spectrum-thumbnail-s-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-thumbnail-border-color:var(
--spectrum-thumbnail-s-border-color,var(--spectrum-alias-border-color-translucent)
);--spectrum-thumbnail-border-color-key-focus:var(
--spectrum-thumbnail-s-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
);--spectrum-thumbnail-darksquare-background-color:var(
--spectrum-thumbnail-s-darksquare-background-color,var(--spectrum-alias-thumbnail-darksquare-background-color)
);--spectrum-thumbnail-border-radius:var(
--spectrum-thumbnail-s-border-radius,var(--spectrum-alias-thumbnail-border-radius-small)
);--spectrum-thumbnail-width:var(
--spectrum-thumbnail-s-width,var(--spectrum-global-dimension-size-400)
);--spectrum-thumbnail-height:var(
--spectrum-thumbnail-s-height,var(--spectrum-global-dimension-size-400)
)}:host([size=m]){--spectrum-thumbnail-border-color-selected:var(
--spectrum-thumbnail-m-border-color-selected,var(--spectrum-alias-border-color-selected)
);--spectrum-thumbnail-border-size-selected-key-focus:var(
--spectrum-thumbnail-m-border-size-selected-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-thumbnail-border-size:var(
--spectrum-thumbnail-m-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-thumbnail-border-color:var(
--spectrum-thumbnail-m-border-color,var(--spectrum-alias-border-color-translucent)
);--spectrum-thumbnail-border-color-key-focus:var(
--spectrum-thumbnail-m-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
);--spectrum-thumbnail-darksquare-background-color:var(
--spectrum-thumbnail-m-darksquare-background-color,var(--spectrum-alias-thumbnail-darksquare-background-color)
);--spectrum-thumbnail-border-radius:var(
--spectrum-thumbnail-m-border-radius,var(--spectrum-alias-thumbnail-border-radius-small)
);--spectrum-thumbnail-width:var(
--spectrum-thumbnail-m-width,var(--spectrum-global-dimension-size-500)
);--spectrum-thumbnail-height:var(
--spectrum-thumbnail-m-height,var(--spectrum-global-dimension-size-500)
)}:host([size=l]){--spectrum-thumbnail-border-color-selected:var(
--spectrum-thumbnail-l-border-color-selected,var(--spectrum-alias-border-color-selected)
);--spectrum-thumbnail-border-size-selected-key-focus:var(
--spectrum-thumbnail-l-border-size-selected-key-focus,var(--spectrum-alias-border-size-thick)
);--spectrum-thumbnail-border-size:var(
--spectrum-thumbnail-l-border-size,var(--spectrum-alias-border-size-thin)
);--spectrum-thumbnail-border-color:var(
--spectrum-thumbnail-l-border-color,var(--spectrum-alias-border-color-translucent)
);--spectrum-thumbnail-border-color-key-focus:var(
--spectrum-thumbnail-l-border-color-key-focus,var(--spectrum-alias-border-color-key-focus)
);--spectrum-thumbnail-darksquare-background-color:var(
--spectrum-thumbnail-l-darksquare-background-color,var(--spectrum-alias-thumbnail-darksquare-background-color)
);--spectrum-thumbnail-border-radius:var(
--spectrum-thumbnail-l-border-radius,var(--spectrum-alias-thumbnail-border-radius-small)
);--spectrum-thumbnail-width:var(
--spectrum-thumbnail-l-width,var(--spectrum-global-dimension-size-700)
);--spectrum-thumbnail-height:var(
--spectrum-thumbnail-l-height,var(--spectrum-global-dimension-size-700)
)}::slotted(*){max-height:100%;max-width:100%;z-index:1}:host([cover]) ::slotted(*){height:100%;object-fit:cover;object-position:center;width:100%}.background{background-position:50%;background-size:cover;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;width:100%;z-index:0}:host{background-color:var(
--spectrum-global-color-static-white,rgb(var(--spectrum-global-color-static-white-rgb))
);background-image:linear-gradient(-45deg,transparent 75.5%,var(--spectrum-thumbnail-darksquare-background-color) 75.5%),linear-gradient(45deg,transparent 75.5%,var(--spectrum-thumbnail-darksquare-background-color) 75.5%),linear-gradient(-45deg,var(--spectrum-thumbnail-darksquare-background-color) 25.5%,transparent 25.5%),linear-gradient(45deg,var(--spectrum-thumbnail-darksquare-background-color) 25.5%,transparent 25.5%)}:host:before{box-shadow:inset 0 0 0 var(--spectrum-thumbnail-border-size) var(--spectrum-thumbnail-border-color)}:host([selected]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-selected-key-focus)/2) var(--spectrum-thumbnail-border-color-selected)}:host([selected]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected-key-focus)/2) var(--spectrum-thumbnail-border-color-selected)}:host(.focus-visible),:host([focused]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-selected-key-focus)/2) var(--spectrum-thumbnail-border-color-selected);outline:none;overflow:visible}:host(:focus-visible),:host([focused]){box-shadow:0 0 0 calc(var(--spectrum-thumbnail-border-size-selected-key-focus)/2) var(--spectrum-thumbnail-border-color-selected);outline:none;overflow:visible}:host(.focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected-key-focus)/2) var(--spectrum-thumbnail-border-color-selected)}:host(:focus-visible):before,:host([focused]):before{box-shadow:inset 0 0 0 calc(var(--spectrum-thumbnail-border-size-selected-key-focus)/2) var(--spectrum-thumbnail-border-color-selected)}:host(.focus-visible):after,:host([focused]):after{border-radius:calc(var(--spectrum-thumbnail-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;box-shadow:0 0 0 var(--spectrum-thumbnail-border-size-selected-key-focus) var(--spectrum-thumbnail-border-color-key-focus);content:"";display:block;left:0;margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1);position:absolute;right:0;top:0}:host(:focus-visible):after,:host([focused]):after{border-radius:calc(var(--spectrum-thumbnail-border-radius) + var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
));bottom:0;box-shadow:0 0 0 var(--spectrum-thumbnail-border-size-selected-key-focus) var(--spectrum-thumbnail-border-color-key-focus);content:"";display:block;left:0;margin:calc(var(
--spectrum-alias-focus-ring-gap,
var(--spectrum-global-dimension-static-size-25)
)*-1);position:absolute;right:0;top:0}::slotted(:not(img)){display:none}
`;var Ko=Vo;class _t extends V(k,{validSizes:["xxs","xs","s","m","l"],defaultSize:"s"}){constructor(){super(...arguments),this.cover=!1}static get styles(){return[Ko]}render(){return l`
            ${this.background?l`
                      <div
                          class="background"
                          style="background: ${this.background}"
                      ></div>
                  `:l``}
            <slot></slot>
        `}}s([n({type:String,reflect:!0})],_t.prototype,"background",void 0);s([n({type:Boolean,reflect:!0})],_t.prototype,"cover",void 0);customElements.define("sp-thumbnail",_t);const Wo=h`
:host{--spectrum-colorloupe-width-adjusted:calc(var(--spectrum-colorloupe-width, var(--spectrum-alias-colorloupe-width)) + var(--spectrum-global-dimension-static-size-100, 8px));--spectrum-colorloupe-height-adjusted:calc(var(
--spectrum-colorloupe-height,
var(--spectrum-alias-colorloupe-height)
) + var(--spectrum-global-dimension-static-size-100, 8px));--spectrum-colorloupe-offset:var(
--spectrum-global-dimension-static-size-200,16px
);--spectrum-colorloupe-animation-distance:var(
--spectrum-global-dimension-static-size-100,8px
)}:host{bottom:calc(50% + var(--spectrum-colorloupe-offset));height:var(--spectrum-colorloupe-height-adjusted);left:calc(50% - var(--spectrum-colorloupe-width-adjusted)/2);opacity:0;pointer-events:none;position:absolute;transform:translateY(var(--spectrum-colorloupe-animation-distance));transform-origin:bottom center;transition:transform .1s ease-in-out,opacity 125ms ease-in-out;width:var(--spectrum-colorloupe-width-adjusted)}:host([open]){opacity:1;transform:translate(0)}.outer{stroke-width:var(
--spectrum-colorloupe-outer-border-size,0
)}.spectrum-ColorLoupe-express{display:var(
--spectrum-colorloupe-express-visibility,none
)}.spectrum-ColorLoupe-spectrum{display:var(
--spectrum-colorloupe-spectrum-visibility,block
)}.outer{fill:var(
--spectrum-colorloupe-inner-border-color,var(--spectrum-global-color-static-white)
);stroke:var(--spectrum-colorloupe-outer-border-color,transparent)}.inner{fill:var(--spectrum-picked-color);stroke:var(
--spectrum-colorloupe-outer-stroke-color,var(--spectrum-global-color-static-transparent-black-200)
);stroke-width:var(
--spectrum-colorloupe-outer-stroke-width,var(--spectrum-alias-border-size-thick)
)}@media (forced-colors:active){:host{--spectrum-colorloupe-outer-border-color:CanvasText}}svg{height:inherit;width:inherit}
`;var Yo=Wo;class Lt extends k{constructor(){super(...arguments),this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[Yo]}render(){return l`
            <svg style="--spectrum-picked-color: ${this.color};">
                <defs>
                    <path
                        id="spectrum-inner-loupe"
                        class="inner"
                        d="M24,0A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
                    />
                    <path
                        id="express-inner-loupe"
                        class="inner"
                        d="M-14330.692,18055.742A15.922,15.922,0,0,1-14334,18046a16,16,0,0,1,16-16,16,16,0,0,1,16,16,15.925,15.925,0,0,1-3.166,9.555c-.009.016-.018.029-.028.045-2.577,4.033-12.77,14.4-12.77,14.4S-14328.027,18059.484-14330.692,18055.742Z"
                    />

                    <g id="loupe-checkerboard">
                        <g transform="translate(338 285)">
                            <g transform="translate(-338 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -285)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -269)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -253)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -237)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-338 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-322 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-306 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                            <g transform="translate(-290 -221)">
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(338 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 285)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-light-color)"
                                />
                                <rect
                                    width="8"
                                    height="8"
                                    transform="translate(346 293)"
                                    fill="var(--spectrum-colorcontrol-checkerboard-dark-color)"
                                />
                            </g>
                        </g>
                    </g>

                    <clipPath id="spectrum-loupe-clip">
                        <use xlink:href="#spectrum-inner-loupe" />
                    </clipPath>
                    <clipPath id="express-loupe-clip">
                        <use xlink:href="#express-inner-loupe" />
                    </clipPath>
                    <clipPath id="express-checkerboard-loupe-clip">
                        <use
                            xlink:href="#express-inner-loupe"
                            transform="translate(14688 -17741)"
                        />
                    </clipPath>

                    <filter
                        id="loupe-shadow"
                        x="-16px"
                        y="-16px"
                        width="96"
                        height="128"
                        filterUnits="userSpaceOnUse"
                    >
                        <feOffset input="SourceAlpha" />
                        <feGaussianBlur stdDeviation="2" result="d" />
                        <feFlood flood-opacity="0.302" />
                        <feComposite operator="in" in2="d" />
                        <feComposite in="SourceGraphic" />
                    </filter>
                </defs>

                <g
                    transform="translate(4 4)"
                    class="spectrum-ColorLoupe-spectrum"
                >
                    <g clip-path="url(#spectrum-loupe-clip)">
                        <g transform="translate(-353.999 -289)">
                            <use xlink:href="#loupe-checkerboard" />
                        </g>
                    </g>
                    <g filter="url(#loupe-shadow)">
                        <use xlink:href="#spectrum-inner-loupe" />
                    </g>
                    <path
                        class="outer"
                        d="M24,2A21.98,21.98,0,0,0,2,24c0,6.2,4,14.794,11.568,24.853A144.233,144.233,0,0,0,24,61.132,144.085,144.085,0,0,0,34.4,48.893C41.99,38.816,46,30.209,46,24A21.98,21.98,0,0,0,24,2m0-2A24,24,0,0,1,48,24c0,16.255-24,40-24,40S0,40.255,0,24A24,24,0,0,1,24,0Z"
                    />
                </g>

                <g
                    transform="translate(-290 -235)"
                    class="spectrum-ColorLoupe-express"
                >
                    <g
                        transform="translate(-58 -45)"
                        clip-path="url(#express-checkerboard-loupe-clip)"
                    >
                        <use xlink:href="#loupe-checkerboard" />
                    </g>
                    <g
                        transform="matrix(1, 0, 0, 1, 290, 238)"
                        filter="url(#loupe-shadow)"
                    >
                        <g transform="translate(14340 -18024)">
                            <use
                                xlink:href="#express-inner-loupe"
                                stroke-width="6"
                                stroke="rgba(0, 0, 0, 0.15)"
                                clip-path="url(#express-loupe-clip)"
                            />
                        </g>
                    </g>
                    <g transform="translate(14630 -17786)" fill="none">
                        <path
                            class="outer"
                            d="M -14317.9482421875 18067.111328125 C -14315.0771484375 18064.130859375 -14308.7626953125 18057.462890625 -14306.884765625 18054.529296875 L -14306.8466796875 18054.4609375 L -14306.76953125 18054.359375 C -14304.9580078125 18051.931640625 -14304.0009765625 18049.041015625 -14304.0009765625 18046 C -14304.0009765625 18042.26171875 -14305.45703125 18038.74609375 -14308.1025390625 18036.1015625 C -14310.7470703125 18033.45703125 -14314.2626953125 18032 -14318.0009765625 18032 C -14321.7392578125 18032 -14325.2548828125 18033.45703125 -14327.8994140625 18036.1015625 C -14330.544921875 18038.74609375 -14332.0009765625 18042.26171875 -14332.0009765625 18046 C -14332.0009765625 18049.115234375 -14331 18052.0625 -14329.107421875 18054.5234375 L -14329.0634765625 18054.58203125 C -14327.1025390625 18057.3359375 -14320.802734375 18064.087890625 -14317.9482421875 18067.111328125 M -14317.96484375 18070 C -14317.96484375 18070 -14328.02734375 18059.484375 -14330.6923828125 18055.7421875 C -14332.767578125 18053.044921875 -14334.0009765625 18049.666015625 -14334.0009765625 18046 C -14334.0009765625 18037.166015625 -14326.8359375 18030 -14318.0009765625 18030 C -14309.166015625 18030 -14302.0009765625 18037.166015625 -14302.0009765625 18046 C -14302.0009765625 18049.580078125 -14303.177734375 18052.888671875 -14305.1669921875 18055.5546875 C -14305.17578125 18055.5703125 -14305.1845703125 18055.583984375 -14305.1953125 18055.599609375 C -14307.7724609375 18059.6328125 -14317.96484375 18070 -14317.96484375 18070 Z"
                            stroke="none"
                            fill="#fff"
                        />
                    </g>
                </g>
            </svg>
        `}}s([n({type:Boolean,reflect:!0})],Lt.prototype,"open",void 0);s([n({type:String})],Lt.prototype,"color",void 0);customElements.define("sp-color-loupe",Lt);const Xo=h`
:host{--spectrum-colorhandle-checkerboard-size:var(
--spectrum-global-dimension-static-size-100,8px
);--spectrum-colorhandle-animation-duration:var(
--spectrum-global-animation-duration-100,130ms
);--spectrum-colorhandle-animation-easing:ease-in-out;--spectrum-colorhandle-hitarea-size:var(
--spectrum-global-dimension-size-300
)}:host(.focus-visible),:host([focused]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host(:focus-visible),:host([focused]){height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host{background-position:var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
) var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
),var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
) calc(var(--spectrum-colorhandle-checkerboard-size) + var(
--spectrum-colorhandle-background-offset,
calc(-1 * var(--spectrum-global-dimension-static-size-25))
)),calc(var(--spectrum-colorhandle-checkerboard-size) + var(
--spectrum-colorhandle-background-offset,
calc(-1 * var(--spectrum-global-dimension-static-size-25))
)) calc(-1 * var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset, calc(-1 * var(
--spectrum-global-dimension-static-size-25
)))),calc(-1 * var(--spectrum-colorhandle-checkerboard-size) + var(--spectrum-colorhandle-background-offset, calc(-1 * var(
--spectrum-global-dimension-static-size-25
)))) var(
--spectrum-colorhandle-background-offset,calc(-1 * var(--spectrum-global-dimension-static-size-25))
);background-size:var(--spectrum-global-dimension-static-size-200,16px) var(--spectrum-global-dimension-static-size-200,16px);border-style:solid;border-width:var(
--spectrum-colorhandle-inner-border-size,var(--spectrum-global-dimension-static-size-25)
);box-sizing:border-box;display:block;height:var(
--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)
);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1/2);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1/2);position:absolute;transition:width var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),height var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),border-width var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),margin-left var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing),margin-top var(--spectrum-colorhandle-animation-duration) var(--spectrum-colorhandle-animation-easing);width:var(
--spectrum-colorhandle-size,var(--spectrum-global-dimension-size-200)
);z-index:1}:host,:host:after{border-radius:100%}:host:after{content:"";display:block;height:var(--spectrum-colorhandle-hitarea-size);left:calc(50% - var(--spectrum-colorhandle-hitarea-size)/2);position:absolute;top:calc(50% - var(--spectrum-colorhandle-hitarea-size)/2);width:var(--spectrum-colorhandle-hitarea-size)}:host([disabled]){pointer-events:none}.color{border-radius:100%;height:100%;width:100%}:host{background-color:var(
--spectrum-colorcontrol-checkerboard-light-color,var(--spectrum-global-color-static-white)
);background-image:linear-gradient(-45deg,transparent 75.5%,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 75.5%),linear-gradient(45deg,transparent 75.5%,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 75.5%),linear-gradient(-45deg,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 25.5%,transparent 25.5%),linear-gradient(45deg,var(
--spectrum-colorcontrol-checkerboard-dark-color,var(--spectrum-global-color-static-gray-300)
) 25.5%,transparent 25.5%);border-color:var(
--spectrum-colorhandle-inner-border-color,var(--spectrum-global-color-static-white)
);box-shadow:0 0 var(--spectrum-colorhandle-outer-shadow-blur,0) var(
--spectrum-colorhandle-outer-shadow-spread,var(--spectrum-alias-border-size-thin)
) var(--spectrum-colorhandle-outer-shadow-color,rgba(0,0,0,.42))}:host([disabled]){background:var(
--spectrum-colorhandle-fill-color-disabled,var(--spectrum-alias-track-color-disabled)
);border-color:var(
--spectrum-colorhandle-inner-border-color-disabled,var(--spectrum-global-color-gray-400)
);box-shadow:none}:host([disabled]) .color{display:none}.color{background-color:var(--spectrum-picked-color);box-shadow:inset 0 0 0 var(
--spectrum-colorhandle-outer-border-size,var(--spectrum-alias-border-size-thin)
) var(
--spectrum-colorhandle-inner-shadow-color,var(--spectrum-colorhandle-outer-shadow-color)
)}@media (forced-colors:active){:host{--spectrum-colorhandle-inner-border-color-disabled:GrayText;--spectrum-colorhandle-fill-color-disabled:Canvas;--spectrum-colorhandle-inner-border-color:CanvasText}:host([disabled]){forced-color-adjust:none}}:host{touch-action:none}:host(:focus){outline:none}
`;var Go=Xo;const pe=/^hs[v|l]a?\s?\((\d{1,3}\.?\d*?),?\s?(\d{1,3})/,jt=/(^hs[v|l]a?\s?\()\d{1,3}\.?\d*?(,?\s?)\d{1,3}/,Vt=/(^hs[v|l]a?\()\d{1,3}/;class et extends k{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.open=!1,this.color="rgba(255, 0, 0, 0.5)"}static get styles(){return[Go]}handlePointerdown(t){t.pointerType==="touch"&&(this.open=!0),this.setPointerCapture(t.pointerId)}handlePointerup(t){this.open=!1,this.releasePointerCapture(t.pointerId)}render(){return l`
            <div class="color" style="background-color: ${this.color}"></div>
            <sp-color-loupe
                color=${this.color}
                ?open=${this.open&&!this.disabled}
            ></sp-color-loupe>
        `}firstUpdated(t){super.firstUpdated(t),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup),this.addEventListener("pointercancel",this.handlePointerup)}}s([n({type:Boolean,reflect:!0})],et.prototype,"disabled",void 0);s([n({type:Boolean,reflect:!0})],et.prototype,"focused",void 0);s([n({type:Boolean,reflect:!0})],et.prototype,"open",void 0);s([n({type:String})],et.prototype,"color",void 0);customElements.define("sp-color-handle",et);const Qo=h`
:host{--spectrum-colorwheel-border-radius:100%;--spectrum-colorwheel-width:calc(var(--spectrum-global-dimension-size-125)*16);--spectrum-colorwheel-height:var(
--spectrum-colorwheel-width,var(--spectrum-global-dimension-size-2400)
)}:host([focused]) .handle{height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}.slider{height:100%;left:0;margin:0;opacity:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:0}:host{border-radius:var(--spectrum-colorwheel-border-radius);cursor:default;display:block;height:var(
--spectrum-colorwheel-height,var(--spectrum-global-dimension-size-2400)
);position:relative;-webkit-user-select:none;user-select:none;width:var(
--spectrum-colorwheel-width,var(--spectrum-global-dimension-size-2400)
)}:host([focused]){z-index:2}:host([disabled]){pointer-events:none}:host([dragged]){z-index:2}::slotted([slot=gradient]){border-radius:100%;border-style:solid;border-width:var(
--spectrum-colorwheel-border-size,var(--spectrum-alias-border-size-thin)
);box-sizing:border-box;height:var(
--spectrum-colorwheel-height,var(--spectrum-global-dimension-size-2400)
);position:relative;width:var(
--spectrum-colorwheel-width,var(--spectrum-global-dimension-size-2400)
);z-index:0}.wheel{position:relative;z-index:1}.innerCircle,.outerCircle{fill:transparent;stroke-width:var(
--spectrum-colorwheel-border-size,var(--spectrum-alias-border-size-thin)
)}.handle{left:50%;top:50%}:host{--spectrum-colorwheel-border-color:var(
--spectrum-colorarea-border-color,var(--spectrum-alias-border-color-translucent)
)}:host([disabled]) .innerCircle,:host([disabled]) .outerCircle{stroke:var(
--spectrum-colorwheel-border-color-disabled,var(--spectrum-alias-track-color-disabled)
)}:host([disabled]) .outerCircle{fill:var(
--spectrum-colorwheel-fill-color-disabled,var(--spectrum-alias-track-color-disabled)
)}:host([disabled]) .segment{display:none}::slotted([slot=gradient]){border-color:var(
--spectrum-colorwheel-border-color,var(--spectrum-alias-border-color-translucent)
)}.innerCircle,.outerCircle{stroke:var(
--spectrum-colorwheel-border-color,var(--spectrum-alias-border-color-translucent)
)}@media (forced-colors:active){:host{--spectrum-colorwheel-border-color-disabled:GrayText;--spectrum-colorwheel-fill-color-disabled:Canvas}:host{forced-color-adjust:none}}:host{touch-action:none}:host(:focus){outline:none}.wheel{background:conic-gradient(from 90deg,red,#ff8000,#ff0,#80ff00,#0f0,#00ff80,#0ff,#0080ff,#00f,#8000ff,#f0f,#ff0080,red);height:100%;width:100%}.wheel:after,.wheel:before{border:var(
--spectrum-colorwheel-border-size,var(--spectrum-alias-border-size-thin)
) solid var(--spectrum-colorwheel-border-color);border-radius:50%;content:"";position:absolute}.wheel:after{inset:0}.wheel:before{inset:24px}:host([disabled]) .wheel:after,:host([disabled]) .wheel:before{border-color:var(
--spectrum-colorwheel-border-color-disabled,var(--spectrum-global-color-gray-300)
)}:host([disabled]) .wheel{background:var(
--spectrum-colorwheel-fill-color-disabled,var(--spectrum-global-color-gray-300)
)}
`;var Zo=Qo;class M extends _{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.label="hue",this.step=1,this._value=0,this._color=new I({h:0,s:1,v:1}),this._previousColor=new I({h:0,s:1,v:1}),this._format={format:"",isString:!1},this._altered=0,this._pointerDown=!1}static get styles(){return[Zo]}get value(){return this._value}set value(t){const e=Math.min(360,Math.max(0,t));if(e===this.value)return;const r=this.value,{s:o,v:i}=this._color.toHsv();this._color=new I({h:e,s:o,v:i}),this._value=e,this.requestUpdate("value",r)}get color(){switch(this._format.format){case"rgb":return this._format.isString?this._color.toRgbString():this._color.toRgb();case"prgb":return this._format.isString?this._color.toPercentageRgbString():this._color.toPercentageRgb();case"hex":case"hex3":case"hex4":case"hex6":return this._format.isString?this._color.toHexString():this._color.toHex();case"hex8":return this._format.isString?this._color.toHex8String():this._color.toHex8();case"name":return this._color.toName()||this._color.toRgbString();case"hsl":if(this._format.isString)return this._color.toHslString().replace(jt,`$1${this.value}$2${this._saturation}`);{const{s:t,l:e,a:r}=this._color.toHsl();return{h:this.value,s:t,l:e,a:r}}case"hsv":if(this._format.isString)return this._color.toHsvString().replace(jt,`$1${this.value}$2${this._saturation}`);{const{s:t,v:e,a:r}=this._color.toHsv();return{h:this.value,s:t,v:e,a:r}}default:return"No color format applied."}}set color(t){if(t===this.color)return;const e=this._color;this._color=new I(t);const r=this._color.format;let o=typeof t=="string"||t instanceof String;if(r.startsWith("hex")&&(o=t.startsWith("#")),this._format={format:r,isString:o},o&&r.startsWith("hs")){const i=pe.exec(t);if(i!==null){const[,c,d]=i;this.value=Number(c),this._saturation=Number(d)}}else if(!o&&r.startsWith("hs")){const i=this._color.originalInput,c=Object.values(i);this.value=c[0],this._saturation=c[1]}else{const{h:i}=this._color.toHsv();this.value=i}this.requestUpdate("color",e)}get altered(){return this._altered}set altered(t){this._altered=t,this.step=Math.max(1,this.altered*10)}get focusElement(){return this.input}handleKeydown(t){const{key:e}=t;this.focused=!0,this.altered=[t.shiftKey,t.ctrlKey,t.altKey].filter(i=>!!i).length;let r=0;switch(e){case"ArrowUp":r=this.step;break;case"ArrowDown":r=-this.step;break;case"ArrowLeft":r=this.step*(this.isLTR?-1:1);break;case"ArrowRight":r=this.step*(this.isLTR?1:-1);break;default:return}t.preventDefault(),this.value=(360+this.value+r)%360,this._previousColor=this._color.clone(),this._color=new I(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._color=this._previousColor)}handleInput(t){const{valueAsNumber:e}=t.target;this.value=e,this._color=new I(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value}))}handleChange(t){this.handleInput(t),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}focus(t={}){super.focus(t),this.forwardFocus()}forwardFocus(){this.focused=this.hasVisibleFocusInTree(),this.input.focus()}handleFocusin(){this.focused=!0}handleFocusout(){this._pointerDown||(this.altered=0,this.focused=!1)}handlePointerdown(t){if(t.button!==0){t.preventDefault();return}this._pointerDown=!0,this._previousColor=this._color.clone(),this.boundingClientRect=this.getBoundingClientRect(),t.target.setPointerCapture(t.pointerId),t.pointerType==="mouse"&&(this.focused=!0)}handlePointermove(t){this.value=this.calculateHandlePosition(t),this._color=new I(Object.assign(Object.assign({},this._color.toHsl()),{h:this.value})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))}handlePointerup(t){this._pointerDown=!1,t.target.releasePointerCapture(t.pointerId),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._color=this._previousColor),this.focus(),t.pointerType==="mouse"&&(this.focused=!1)}calculateHandlePosition(t){if(!this.boundingClientRect)return this.value;const e=this.boundingClientRect,{width:r,height:o,left:i,top:c}=e,d=i+r/2,u=c+o/2,m=t.clientX-d,p=t.clientY-u,b=Math.atan2(p,m)*180/Math.PI;return(360+(360+b))%360}handleGradientPointerdown(t){t.button!==0||t.target.classList.contains("innerCircle")||(t.stopPropagation(),t.preventDefault(),this.handle.dispatchEvent(new PointerEvent("pointerdown",t)),this.handlePointermove(t))}render(){const{width:t=160}=this.boundingClientRect||{},e=t/2,o=e-24,i=o*2,c=`path(evenodd, "M ${e} ${e} m -${e} 0 a ${e} ${e} 0 1 0 ${t} 0 a ${e} ${e} 0 1 0 -${t} 0 M ${e} ${e} m -${o} 0 a ${o} ${o} 0 1 0 ${i} 0 a ${o} ${o} 0 1 0 -${i} 0")`,d=`transform: translate(${(e-12.5)*Math.cos(this.value*Math.PI/180)}px, ${(e-12.5)*Math.sin(this.value*Math.PI/180)}px);`;return l`
            <slot
                name="gradient"
                @pointerdown=${this.handleGradientPointerdown}
            >
                <div class="wheel" style="clip-path: ${c}"></div>
            </slot>

            <sp-color-handle
                tabindex=${v(this.focused?void 0:"0")}
                @focus=${this.forwardFocus}
                ?focused=${this.focused}
                class="handle"
                color="hsl(${this.value}, 100%, 50%)"
                ?disabled=${this.disabled}
                style=${d}
                ${pt({start:["pointerdown",this.handlePointerdown],streamInside:["pointermove",this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
            ></sp-color-handle>

            <input
                type="range"
                class="slider"
                aria-label=${this.label}
                min="0"
                max="360"
                step=${this.step}
                .value=${String(this.value)}
                @input=${this.handleInput}
                @change=${this.handleChange}
                @keydown=${this.handleKeydown}
            />
        `}firstUpdated(t){super.firstUpdated(t),this.boundingClientRect=this.getBoundingClientRect(),this.addEventListener("focusin",this.handleFocusin),this.addEventListener("focusout",this.handleFocusout)}connectedCallback(){var t;super.connectedCallback(),!this.observer&&window.ResizeObserver&&(this.observer=new window.ResizeObserver(e=>{for(const r of e)this.boundingClientRect=r.contentRect;this.requestUpdate()})),(t=this.observer)===null||t===void 0||t.observe(this)}disconnectedCallback(){var t;(t=this.observer)===null||t===void 0||t.unobserve(this),super.disconnectedCallback()}}s([n({type:Boolean,reflect:!0})],M.prototype,"disabled",void 0);s([n({type:Boolean,reflect:!0})],M.prototype,"focused",void 0);s([y(".handle")],M.prototype,"handle",void 0);s([n({type:String})],M.prototype,"label",void 0);s([n({type:Number})],M.prototype,"step",void 0);s([n({type:Number})],M.prototype,"value",null);s([n({type:String})],M.prototype,"color",null);s([y("input")],M.prototype,"input",void 0);customElements.define("sp-color-wheel",M);const Jo=h`
.slider{height:100%;left:0;margin:0;opacity:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:0}:host([focused]) .handle{height:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2);margin-left:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);margin-top:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*-1);width:calc(var(
--spectrum-colorhandle-size,
var(--spectrum-global-dimension-size-200)
)*2)}:host{border-radius:var(
--spectrum-colorarea-border-radius,var(--spectrum-alias-border-radius-regular)
);cursor:default;display:inline-block;height:var(
--spectrum-colorarea-default-height,var(--spectrum-global-dimension-size-2400)
);position:relative;-webkit-user-select:none;user-select:none;width:var(
--spectrum-colorarea-default-width,var(--spectrum-global-dimension-size-2400)
)}:host([focused]){z-index:2}:host([disabled]){pointer-events:none}:host:before{border-radius:var(
--spectrum-colorarea-border-radius,var(--spectrum-alias-border-radius-regular)
);bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.handle{left:0;top:0}.gradient{border-radius:var(
--spectrum-colorarea-border-radius,var(--spectrum-alias-border-radius-regular)
);height:100%;width:100%}:host:before{box-shadow:inset 0 0 0 var(
--spectrum-colorarea-border-size,var(--spectrum-alias-border-size-thin)
) var(
--spectrum-colorarea-border-color,var(--spectrum-alias-border-color-translucent)
)}.gradient{forced-color-adjust:none}:host([disabled]){background:var(
--spectrum-colorarea-fill-color-disabled,var(--spectrum-alias-track-color-disabled)
)}:host([disabled]):before{box-shadow:inset 0 0 0 var(
--spectrum-colorarea-border-size,var(--spectrum-alias-border-size-thin)
) var(
--spectrum-colorarea-border-color-disabled,var(--spectrum-alias-track-color-disabled)
)}:host([disabled]) .gradient{display:none}@media (forced-colors:active){:host{--spectrum-colorarea-fill-color-disabled:GrayText}:host([disabled]){forced-color-adjust:none}}:host{touch-action:none}:host:before{pointer-events:none}.gradient{overflow:hidden}.handle{transform:translate(var(--spectrum-colorarea-default-width))}::slotted(*){height:100%;width:100%}
`;var ti=Jo;class z extends k{constructor(){super(...arguments),this.disabled=!1,this.focused=!1,this.labelX="saturation",this.labelY="luminosity",this._hue=0,this._color=new I({h:0,s:1,v:1}),this._previousColor=new I({h:0,s:1,v:1}),this._format={format:"",isString:!1},this.activeAxis="x",this._x=1,this._y=0,this.step=.01,this.altered=0,this.activeKeys=new Set,this._pointerDown=!1}static get styles(){return[ti]}get hue(){return this._hue}set hue(t){const e=Math.min(360,Math.max(0,t));if(e===this.hue)return;const r=this.hue,{s:o,v:i}=this._color.toHsv();this._color=new I({h:e,s:o,v:i}),this._hue=e,this.requestUpdate("hue",r)}get value(){return this.color}get color(){switch(this._format.format){case"rgb":return this._format.isString?this._color.toRgbString():this._color.toRgb();case"prgb":return this._format.isString?this._color.toPercentageRgbString():this._color.toPercentageRgb();case"hex8":return this._format.isString?this._color.toHex8String():this._color.toHex8();case"name":return this._color.toName()||this._color.toRgbString();case"hsl":if(this._format.isString)return this._color.toHslString().replace(Vt,`$1${this.hue}`);{const{s:t,l:e,a:r}=this._color.toHsl();return{h:this.hue,s:t,l:e,a:r}}case"hsv":if(this._format.isString)return this._color.toHsvString().replace(Vt,`$1${this.hue}`);{const{s:t,v:e,a:r}=this._color.toHsv();return{h:this.hue,s:t,v:e,a:r}}case"hex":case"hex3":case"hex4":case"hex6":default:return this._format.isString?this._color.toHexString():this._color.toHex()}}set color(t){if(t===this.color)return;const e=this._color;this._color=new I(t);const r=this._color.format;let o=typeof t=="string"||t instanceof String;r.startsWith("hex")&&(o=t.startsWith("#")),this._format={format:r,isString:o};const{h:i,s:c,v:d}=this._color.toHsv();let u;if(o&&r.startsWith("hs")){const m=pe.exec(t);if(m!==null){const[,p]=m;u=Number(p)}}else if(!o&&r.startsWith("hs")){const m=this._color.originalInput;u=Object.values(m)[0]}this.hue=u||i,this.x=c,this.y=1-d,this.requestUpdate("color",e)}get x(){return this._x}set x(t){if(t===this.x)return;const e=this.x;this.inputX?(this.inputX.value=t.toString(),this._x=this.inputX.valueAsNumber):this._x=t,this.requestUpdate("x",e)}get y(){return this._y}set y(t){if(t===this.y)return;const e=this.y;this.inputY?(this.inputY.value=t.toString(),this._y=this.inputY.valueAsNumber):this._y=t,this.requestUpdate("y",e)}focus(t={}){super.focus(t),this.forwardFocus()}forwardFocus(){this.focused=this.hasVisibleFocusInTree(),this.activeAxis==="x"?this.inputX.focus():this.inputY.focus()}handleFocusin(){this.focused=!0}handleFocusout(){this._pointerDown||(this.focused=!1)}handleKeydown(t){const{code:e}=t;this.focused=!0,this.altered=[t.shiftKey,t.ctrlKey,t.altKey].filter(o=>!!o).length,e.search("Arrow")===0&&(t.preventDefault(),this.activeKeys.add(e),this.handleKeypress())}handleKeypress(){let t=0,e=0;const r=Math.max(this.step,this.altered*5*this.step);this.activeKeys.forEach(o=>{switch(o){case"ArrowUp":e=r*-1;break;case"ArrowDown":e=r*1;break;case"ArrowLeft":t=r*-1;break;case"ArrowRight":t=r*1;break}}),t!=0?(this.activeAxis="x",this.inputX.focus()):e!=0&&(this.activeAxis="y",this.inputY.focus()),this.x=Math.min(1,Math.max(this.x+t,0)),this.y=Math.min(1,Math.max(this.y+e,0)),this._previousColor=this._color.clone(),this._color=new I({h:this.hue,s:this.x,v:1-this.y}),(t!=0||e!=0)&&(this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))||(this._color=this._previousColor))}handleKeyup(t){t.preventDefault();const{code:e}=t;this.activeKeys.delete(e)}handleInput(t){const{valueAsNumber:e,name:r}=t.target;this[r]=e,this._color=new I({h:this.hue,s:this.x,v:1-this.y})}handleChange(t){this.handleInput(t),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))}handlePointerdown(t){if(t.button!==0){t.preventDefault();return}this._pointerDown=!0,this._previousColor=this._color.clone(),this.boundingClientRect=this.getBoundingClientRect(),t.target.setPointerCapture(t.pointerId),t.pointerType==="mouse"&&(this.focused=!0)}handlePointermove(t){const[e,r]=this.calculateHandlePosition(t);this._color=new I({h:this.hue,s:e,v:1-r}),this.x=e,this.y=r,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0,cancelable:!0}))}handlePointerup(t){t.preventDefault(),this._pointerDown=!1,t.target.releasePointerCapture(t.pointerId);const e=this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}));this.inputX.focus(),t.pointerType==="mouse"&&(this.focused=!1),e||(this._color=this._previousColor)}calculateHandlePosition(t){if(!this.boundingClientRect)return[this.x,this.y];const e=this.boundingClientRect,r=e.left,o=e.top,i=t.clientX,c=t.clientY,d=e.width,u=e.height,m=Math.max(0,Math.min(1,(i-r)/d)),p=Math.max(0,Math.min(1,(c-o)/u));return[m,p]}handleAreaPointerdown(t){t.button===0&&(t.stopPropagation(),t.preventDefault(),this.handle.dispatchEvent(new PointerEvent("pointerdown",t)),this.handlePointermove(t))}render(){var t,e;const{width:r=0,height:o=0}=this.boundingClientRect||{};return l`
            <div
                @pointerdown=${this.handleAreaPointerdown}
                class="gradient"
                style="background:
                    linear-gradient(to top, black 0%, hsla(${this.hue}, 100%, 0.01%, 0) 100%),
                    linear-gradient(to right, white 0%, hsla(${this.hue}, 100%, 0.01%, 0) 100%), hsl(${this.hue}, 100%, 50%);"
            >
                <slot name="gradient"></slot>
            </div>

            <sp-color-handle
                tabindex=${v(this.focused?void 0:"0")}
                @focus=${this.forwardFocus}
                ?focused=${this.focused}
                class="handle"
                color=${this._color.toHslString()}
                ?disabled=${this.disabled}
                style="transform: translate(${this.x*r}px, ${this.y*o}px);"
                ${pt({start:["pointerdown",this.handlePointerdown],streamInside:["pointermove",this.handlePointermove],end:[["pointerup","pointercancel"],this.handlePointerup]})}
            ></sp-color-handle>

            <div>
                <input
                    type="range"
                    class="slider"
                    name="x"
                    aria-label=${(t=this.label)!==null&&t!==void 0?t:this.labelX}
                    min="0"
                    max="1"
                    step=${this.step}
                    tabindex="-1"
                    .value=${String(this.x)}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                />
            </div>
            <div>
                <input
                    type="range"
                    class="slider"
                    name="y"
                    aria-label=${(e=this.label)!==null&&e!==void 0?e:this.labelY}
                    min="0"
                    max="1"
                    step=${this.step}
                    tabindex="-1"
                    .value=${String(this.y)}
                    @input=${this.handleInput}
                    @change=${this.handleChange}
                />
            </div>
        `}firstUpdated(t){super.firstUpdated(t),this.boundingClientRect=this.getBoundingClientRect(),this.addEventListener("focusin",this.handleFocusin),this.addEventListener("focusout",this.handleFocusout),this.addEventListener("keyup",this.handleKeyup),this.addEventListener("keydown",this.handleKeydown)}updated(t){if(super.updated(t),this.x!==this.inputX.valueAsNumber&&(this.x=this.inputX.valueAsNumber),this.y!==this.inputY.valueAsNumber&&(this.y=this.inputY.valueAsNumber),t.has("focused")&&this.focused){const e=this.inputX.parentElement,r=this.inputY.parentElement;if(!e.shadowRoot&&!r.shadowRoot){e.attachShadow({mode:"open"}),r.attachShadow({mode:"open"});const o='<div tabindex="-1"><slot></slot></div>';e.shadowRoot.innerHTML=o,r.shadowRoot.innerHTML=o}}}connectedCallback(){var t;super.connectedCallback(),!this.observer&&window.ResizeObserver&&(this.observer=new window.ResizeObserver(e=>{for(const r of e)this.boundingClientRect=r.contentRect;this.requestUpdate()})),(t=this.observer)===null||t===void 0||t.observe(this)}disconnectedCallback(){var t;(t=this.observer)===null||t===void 0||t.unobserve(this),super.disconnectedCallback()}}s([n({type:Boolean,reflect:!0})],z.prototype,"disabled",void 0);s([n({type:Boolean,reflect:!0})],z.prototype,"focused",void 0);s([n({type:String})],z.prototype,"label",void 0);s([n({type:String,attribute:"label-x"})],z.prototype,"labelX",void 0);s([n({type:String,attribute:"label-y"})],z.prototype,"labelY",void 0);s([y(".handle")],z.prototype,"handle",void 0);s([n({type:Number})],z.prototype,"hue",null);s([n({type:String})],z.prototype,"value",null);s([n({type:String})],z.prototype,"color",null);s([n({attribute:!1})],z.prototype,"activeAxis",void 0);s([n({type:Number})],z.prototype,"x",null);s([n({type:Number})],z.prototype,"y",null);s([n({type:Number})],z.prototype,"step",void 0);s([y('[name="x"]')],z.prototype,"inputX",void 0);s([y('[name="y"]')],z.prototype,"inputY",void 0);customElements.define("sp-color-area",z);const ei=h`
:host([size=s]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-s-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-s-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-s-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-s-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-s-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-s-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-s-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-75)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-s-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-s-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-s-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-s-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-s-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-s-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-s-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-s-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-s-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-s-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-s-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-s-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-s-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-s-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-s-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-s-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-450)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-s-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-85)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-s-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-s-compact-textonly-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-s-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-s-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-85)
)}:host([size=m]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-m-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-m-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-m-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-m-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-m-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-m-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-m-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-m-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-m-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-m-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-m-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-m-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-m-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-m-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-m-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-m-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-m-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-m-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-m-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-m-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-m-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-m-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-m-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-550)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-m-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-100)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-m-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-m-compact-textonly-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-m-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-400)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-m-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-100)
)}:host([size=l]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-l-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-l-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-l-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-l-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-700)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-l-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-l-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-l-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-200)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-l-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-l-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-l-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-l-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-l-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-l-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-l-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-l-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-l-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-l-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-l-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-l-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-l-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-l-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-l-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-l-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-650)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-l-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-115)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-l-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-l-compact-textonly-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-l-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-500)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-l-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-115)
)}:host([size=xl]){--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-quiet-textonly-divider-background-color:var(
--spectrum-tabs-xl-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-quiet-textonly-tabitem-icon-gap:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-icon-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-quiet-textonly-tabitem-height:var(
--spectrum-tabs-xl-quiet-textonly-tabitem-height,var(--spectrum-global-dimension-size-800)
);--spectrum-tabs-quiet-textonly-divider-size:var(
--spectrum-tabs-xl-quiet-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-emphasized-selected-default)
);--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-emphasized-texticon-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-selection-indicator-color-emphasized)
);--spectrum-tabs-emphasized-textonly-divider-background-color:var(
--spectrum-tabs-xl-emphasized-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-texticon-tabitem-text-size:var(
--spectrum-tabs-xl-texticon-tabitem-text-size,var(--spectrum-global-dimension-font-size-300)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration:var(
--spectrum-tabs-xl-texticon-tabitem-selection-indicator-animation-duration,var(--spectrum-global-animation-duration-100)
);--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease:var(
--spectrum-tabs-xl-texticon-tabitem-selection-indicator-animation-ease,var(--spectrum-global-animation-ease-in-out)
);--spectrum-tabs-textonly-tabitem-icon-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-selected,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-selected-key-focus,var(--spectrum-alias-tabitem-icon-color-selected)
);--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-selected-key-focus,var(--spectrum-alias-tabitem-text-color-selected-key-focus)
);--spectrum-tabs-textonly-tabitem-icon-color-disabled:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-disabled,var(--spectrum-alias-tabitem-icon-color-disabled)
);--spectrum-tabs-textonly-tabitem-text-color-disabled:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-disabled,var(--spectrum-alias-text-color-disabled)
);--spectrum-tabs-textonly-tabitem-icon-color:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color,var(--spectrum-alias-tabitem-icon-color-default)
);--spectrum-tabs-textonly-tabitem-text-color:var(
--spectrum-tabs-xl-textonly-tabitem-text-color,var(--spectrum-alias-tabitem-text-color-default)
);--spectrum-tabs-textonly-tabitem-icon-color-hover:var(
--spectrum-tabs-xl-textonly-tabitem-icon-color-hover,var(--spectrum-alias-tabitem-icon-color-hover)
);--spectrum-tabs-textonly-tabitem-text-color-hover:var(
--spectrum-tabs-xl-textonly-tabitem-text-color-hover,var(--spectrum-alias-tabitem-text-color-hover)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-border-color-key-focus,var(--spectrum-alias-focus-ring-color)
);--spectrum-tabs-textonly-divider-background-color:var(
--spectrum-tabs-xl-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-textonly-tabitem-text-font-weight:var(
--spectrum-tabs-xl-textonly-tabitem-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);--spectrum-tabs-textonly-tabitem-focus-ring-size:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-size,var(--spectrum-alias-focus-ring-size)
);--spectrum-tabs-textonly-tabitem-focus-ring-height:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-textonly-tabitem-focus-ring-padding-x:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-padding-x,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-textonly-tabitem-focus-ring-border-radius:var(
--spectrum-tabs-xl-textonly-tabitem-focus-ring-border-radius,var(--spectrum-alias-border-radius-regular)
);--spectrum-tabs-textonly-tabitem-margin-right:var(
--spectrum-tabs-xl-textonly-tabitem-margin-right,var(--spectrum-global-dimension-size-300)
);--spectrum-tabs-textonly-divider-border-radius:var(
--spectrum-tabs-xl-textonly-divider-border-radius,var(--spectrum-global-dimension-static-size-10)
);--spectrum-tabs-vertical-quiet-textonly-divider-background-color:var(
--spectrum-tabs-xl-vertical-quiet-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-quiet)
);--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-selection-indicator-background-color-selected,var(--spectrum-alias-tabitem-text-color-selected-default)
);--spectrum-tabs-vertical-textonly-divider-background-color:var(
--spectrum-tabs-xl-vertical-textonly-divider-background-color,var(--spectrum-alias-tabs-divider-background-color-default)
);--spectrum-tabs-vertical-textonly-tabitem-height:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-750)
);--spectrum-tabs-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-xl-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-125)
);--spectrum-tabs-compact-textonly-divider-size:var(
--spectrum-tabs-xl-compact-textonly-divider-size,var(--spectrum-alias-border-size-thick)
);--spectrum-tabs-compact-textonly-height:var(
--spectrum-tabs-xl-compact-textonly-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-compact-vertical-textonly-tabitem-height:var(
--spectrum-tabs-xl-compact-vertical-textonly-tabitem-height,var(--spectrum-global-dimension-size-600)
);--spectrum-tabs-compact-vertical-textonly-tabitem-gap:var(
--spectrum-tabs-xl-compact-vertical-textonly-tabitem-gap,var(--spectrum-global-dimension-size-125)
)}:host{--spectrum-tabs-compact-item-height:calc(var(--spectrum-tabs-compact-textonly-height) - var(--spectrum-tabs-compact-textonly-divider-size))}#list{display:flex;margin:0;padding-bottom:0;padding-top:0;position:relative;vertical-align:top;z-index:0}:host([dir=ltr]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]) #selection-indicator{left:0}:host([dir=rtl]) #selection-indicator{right:0}#selection-indicator{border-radius:var(--spectrum-tabs-textonly-divider-border-radius);position:absolute;transform-origin:top left;transition:transform var(
--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration
) var(--spectrum-tabs-texticon-tabitem-selection-indicator-animation-ease);z-index:0}:host([compact]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-item-height
);line-height:var(--spectrum-tabs-compact-item-height)}:host([direction^=horizontal]) #list{align-items:center;border-bottom:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([direction^=horizontal]) ::slotted(:not([slot])){vertical-align:top}:host([dir=ltr][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-left:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([dir=rtl][direction^=horizontal]) ::slotted(:not([slot]):not(:first-child)){margin-right:var(
--spectrum-tabs-textonly-tabitem-margin-right
)}:host([direction^=horizontal]) #selection-indicator{bottom:0;bottom:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1);height:var(--spectrum-tabs-quiet-textonly-divider-size);position:absolute}:host([direction^=horizontal][compact]) #list{align-items:end;box-sizing:content-box;height:var(--spectrum-tabs-compact-item-height)}:host([quiet]) #list{display:inline-flex}:host([dir=ltr][direction^=vertical]) #list{border-left:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([dir=rtl][direction^=vertical]) #list{border-right:var(--spectrum-tabs-quiet-textonly-divider-size) solid}:host([direction^=vertical]) #list{display:inline-flex;flex-direction:column;padding:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])){margin-left:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])){margin-right:calc(var(--spectrum-tabs-vertical-textonly-tabitem-gap)/2)}:host([direction^=vertical]) ::slotted(:not([slot])){height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-vertical-textonly-tabitem-gap);padding-bottom:0;padding-left:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-right:var(
--spectrum-tabs-quiet-textonly-tabitem-focus-ring-padding-x
);padding-top:0}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=ltr][direction^=vertical]) ::slotted(:not([slot])):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([dir=rtl][direction^=vertical]) ::slotted(:not([slot])):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-size)*-1)}:host([direction^=vertical]) .spectrum-Icon{height:var(
--spectrum-tabs-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-vertical-textonly-tabitem-height)}:host([direction^=vertical][compact]) #list ::slotted(:not([slot])){height:var(
--spectrum-tabs-compact-vertical-textonly-tabitem-height
);line-height:var(--spectrum-tabs-compact-vertical-textonly-tabitem-height);margin-bottom:var(--spectrum-tabs-compact-vertical-textonly-tabitem-gap)}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:0}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:0}:host([dir=ltr][direction^=vertical]) #selection-indicator{left:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1)}:host([dir=rtl][direction^=vertical]) #selection-indicator{right:calc(var(--spectrum-tabs-quiet-textonly-divider-size)*-1)}:host([direction^=vertical]) #selection-indicator{position:absolute;width:var(--spectrum-tabs-quiet-textonly-divider-size)}#list{border-bottom-color:var(
--spectrum-tabs-textonly-divider-background-color
)}:host([dir=ltr][direction^=vertical]) #list{border-left-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical]) #list{border-right-color:var(
--spectrum-tabs-vertical-textonly-divider-background-color
)}#selection-indicator{background-color:var(
--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected
)}.spectrum-Tabs--emphasized #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}:host([quiet]) #list{border-bottom-color:var(
--spectrum-tabs-quiet-textonly-divider-background-color
)}:host([quiet]) #selection-indicator{background-color:var(
--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected
)}:host([quiet]) #list.spectrum-Tabs--emphasized #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}:host([dir=ltr][direction^=vertical][compact]) #list,:host([dir=ltr][direction^=vertical][quiet]) #list{border-left-color:var(
--spectrum-tabs-vertical-quiet-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical][compact]) #list,:host([dir=rtl][direction^=vertical][quiet]) #list{border-right-color:var(
--spectrum-tabs-vertical-quiet-textonly-divider-background-color
)}:host([direction^=vertical][compact]) #list #selection-indicator,:host([direction^=vertical][quiet]) #list #selection-indicator{background-color:var(
--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected
)}:host([dir=ltr][direction^=vertical]) .spectrum-Tabs--emphasized{border-left-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host([dir=rtl][direction^=vertical]) .spectrum-Tabs--emphasized{border-right-color:var(
--spectrum-tabs-emphasized-textonly-divider-background-color
)}:host([direction^=vertical]) #list.spectrum-Tabs--emphasized #selection-indicator{background-color:var(
--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected
)}@media (forced-colors:active){#list{--spectrum-tabs-emphasized-texticon-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-emphasized-texticon-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-emphasized-texticon-tabitem-text-color-selected:HighlightText;--spectrum-tabs-emphasized-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-divider-background-color:transparent;--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-icon-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-icon-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-selection-indicator-background-color-selected:Highlight;--spectrum-tabs-textonly-tabitem-text-color-disabled:GrayText;--spectrum-tabs-textonly-tabitem-text-color-hover:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus:ButtonText;--spectrum-tabs-textonly-tabitem-text-color-selected:HighlightText;--spectrum-tabs-textonly-tabitem-text-color:ButtonText;--spectrum-tabs-vertical-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-tabitem-selection-indicator-background-color-selected:Highlight;forced-color-adjust:none}::slotted(:not([slot])):before{background-color:ButtonFace}#list.spectrum-Tabs--emphasized ::slotted(:not([slot])):before{background-color:ButtonFace}#list.spectrum-Tabs--emphasized .is-selected,#list.spectrum-Tabs--emphasized .is-selected .spectrum-Icon{color:HighlightText}#list.spectrum-Tabs--emphasized .is-selected:before{background-color:Highlight;color:HighlightText}#list.spectrum-Tabs--emphasized .is-selected .spectrum-Tabs-itemLabel{color:HighlightText}}.is-selected,.is-selected .spectrum-Icon{color:HighlightText}.is-selected:before{background-color:Highlight;color:HighlightText}.is-selected .spectrum-Tabs-itemLabel{color:HighlightText}:host{--spectrum-tabs-emphasized-textonly-divider-background-color:transparent;--spectrum-tabs-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-quiet-textonly-divider-background-color:transparent;--spectrum-tabs-vertical-textonly-divider-background-color:transparent;display:grid}:host([direction^=vertical]){grid-template-columns:auto 1fr}:host([disabled]) #selection-indicator{background-color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}:host([disabled]) ::slotted(sp-tab){color:var(
--spectrum-tabs-m-text-color-disabled,var(--spectrum-alias-text-color-disabled)
)}#list{justify-content:var(--swc-tabs-list-justify-content)}:host([disabled]) #list{pointer-events:none}:host([direction=vertical-right]) #selection-indicator,:host([direction=vertical]) #selection-indicator{height:1px;top:0}:host([compact]){--spectrum-tabs-height:var(--spectrum-tabs-quiet-compact-height)}:host([direction=horizontal]:not([quiet])) #list{border-bottom-color:var(
--spectrum-tabs-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir][direction=horizontal]) #selection-indicator{width:1px}:host([dir=ltr][direction=vertical-right]) #list{border-left:0;border-right:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-right-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
)}:host([dir=rtl][direction=vertical-right]) #list{border-left:var(
--spectrum-tabs-vertical-rule-width,var(--spectrum-alias-border-size-thick)
) solid;border-left-color:var(
--spectrum-tabs-vertical-rule-color,var(--spectrum-global-color-gray-200)
);border-right:0}:host([dir=ltr][direction=vertical-right]) #selection-indicator{left:auto;right:calc(var(--spectrum-tabs-vertical-rule-width, var(--spectrum-alias-border-size-thick))*-1)}:host([dir=rtl][direction=vertical-right]) #selection-indicator{left:calc(var(--spectrum-tabs-vertical-rule-width, var(--spectrum-alias-border-size-thick))*-1);right:auto}#selection-indicator.first-position{transition:none}
`;var ri=ei;const Kt="transform: translateX(0px) scaleX(0) scaleY(0)";class N extends V(_){constructor(){super(...arguments),this.auto=!1,this.direction="horizontal",this.label="",this.selectionIndicatorStyle=Kt,this.shouldAnimate=!1,this._selected="",this._tabs=[],this.rovingTabindexController=new ue(this,{focusInIndex:t=>{let e=0;return t.find((o,i)=>{const c=this.selected?!o.disabled&&o.value===this.selected:!o.disabled;return e=i,c})?e:-1},direction:()=>this.direction==="horizontal"?"horizontal":"vertical",elementEnterAction:t=>{!this.auto||(this.shouldAnimate=!0,this.selectTarget(t))},elements:()=>this.tabs,isFocusableElement:t=>!t.disabled,listenerScope:()=>this.tabList}),this.onClick=t=>{if(this.disabled)return;const e=t.composedPath().find(r=>r.parentElement===this);!e||e.disabled||(this.shouldAnimate=!0,this.selectTarget(e))},this.onKeyDown=t=>{if(t.code==="Enter"||t.code==="Space"){t.preventDefault();const e=t.target;e&&this.selectTarget(e)}},this.updateCheckedState=()=>{if(this.tabs.length||(this.tabs=[...this.querySelectorAll('[role="tab"]')]),this.tabs.forEach(t=>{t.removeAttribute("selected")}),this.selected){const t=this.tabs.find(e=>e.value===this.selected);t?t.selected=!0:this.selected=""}else{const t=this.tabs[0];t&&t.setAttribute("tabindex","0")}this.updateSelectionIndicator(),this.tabChangeResolver()},this.updateSelectionIndicator=async()=>{const t=this.tabs.find(o=>o.selected);if(!t){this.selectionIndicatorStyle=Kt;return}await Promise.all([t.updateComplete,document.fonts?document.fonts.ready:Promise.resolve()]);const e=t.getBoundingClientRect(),r=this.getBoundingClientRect();if(this.direction==="horizontal"){const o=e.width,i=this.dir==="ltr"?e.left-r.left:e.right-r.right;this.selectionIndicatorStyle=`transform: translateX(${i}px) scaleX(${this.dir==="ltr"?o:-1*o});`}else{const o=e.height,i=e.top-r.top;this.selectionIndicatorStyle=`transform: translateY(${i}px) scaleY(${o});`}},this.tabChangePromise=Promise.resolve(),this.tabChangeResolver=function(){}}static get styles(){return[ri]}get selected(){return this._selected}set selected(t){const e=this.selected;t!==e&&(this._selected=t,this.shouldUpdateCheckedState(),this.requestUpdate("selected",e))}set tabs(t){t!==this.tabs&&(this._tabs=t,this.rovingTabindexController.clearElementCache())}get tabs(){return this._tabs}get focusElement(){return this.rovingTabindexController.focusInElement||this}manageAutoFocus(){const e=[...this.children].map(r=>typeof r.updateComplete!="undefined"?r.updateComplete:Promise.resolve(!0));Promise.all(e).then(()=>super.manageAutoFocus())}managePanels({target:t}){t.assignedElements().map(r=>{const{value:o,id:i}=r,c=this.querySelector(`[role="tab"][value="${o}"]`);c&&(c.setAttribute("aria-controls",i),r.setAttribute("aria-labelledby",c.id)),r.selected=o===this.selected})}render(){return l`
            <div
                aria-label=${v(this.label?this.label:void 0)}
                @click=${this.onClick}
                @keydown=${this.onKeyDown}
                @sp-tab-contentchange=${this.updateSelectionIndicator}
                id="list"
                role="tablist"
            >
                <slot @slotchange=${this.onSlotChange}></slot>
                <div
                    id="selection-indicator"
                    class=${v(this.shouldAnimate?void 0:"first-position")}
                    style=${this.selectionIndicatorStyle}
                    role="presentation"
                ></div>
            </div>
            <slot name="tab-panel" @slotchange=${this.managePanels}></slot>
        `}firstUpdated(t){super.firstUpdated(t);const e=this.querySelector(":scope > [selected]");e&&this.selectTarget(e)}updated(t){if(super.updated(t),t.has("selected")){if(t.get("selected")){const r=this.querySelector(`[role="tabpanel"][value="${t.get("selected")}"]`);r&&(r.selected=!1)}const e=this.querySelector(`[role="tabpanel"][value="${this.selected}"]`);e&&(e.selected=!0)}t.has("direction")&&(this.direction==="horizontal"?this.removeAttribute("aria-orientation"):this.setAttribute("aria-orientation","vertical")),t.has("dir")&&this.updateSelectionIndicator(),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),!this.shouldAnimate&&typeof t.get("shouldAnimate")!="undefined"&&(this.shouldAnimate=!0)}selectTarget(t){const e=t.getAttribute("value");if(e){const r=this.selected;this.selected=e,this.dispatchEvent(new Event("change",{cancelable:!0}))||(this.selected=r)}}onSlotChange(){this.tabs=[...this.querySelectorAll('[role="tab"]')],this.shouldUpdateCheckedState()}shouldUpdateCheckedState(){this.tabChangeResolver(),this.tabChangePromise=new Promise(t=>this.tabChangeResolver=t),setTimeout(this.updateCheckedState)}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.tabChangePromise,t}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.addEventListener("loadingdone",this.updateSelectionIndicator)}disconnectedCallback(){window.removeEventListener("resize",this.updateSelectionIndicator),"fonts"in document&&document.fonts.removeEventListener("loadingdone",this.updateSelectionIndicator),super.disconnectedCallback()}}s([n({type:Boolean})],N.prototype,"auto",void 0);s([n({reflect:!0})],N.prototype,"direction",void 0);s([n()],N.prototype,"label",void 0);s([n({attribute:!1})],N.prototype,"selectionIndicatorStyle",void 0);s([n({attribute:!1})],N.prototype,"shouldAnimate",void 0);s([y("#list")],N.prototype,"tabList",void 0);s([n({reflect:!0})],N.prototype,"selected",null);customElements.define("sp-tabs",N);const oi=h`
:host{box-sizing:border-box;cursor:pointer;height:var(--spectrum-tabs-quiet-textonly-tabitem-height);line-height:var(--spectrum-tabs-quiet-textonly-tabitem-height);outline:none;position:relative;text-decoration:none;transition:color var(
--spectrum-tabs-texticon-tabitem-selection-indicator-animation-duration
) ease-out;white-space:nowrap;z-index:1}:host([disabled]){cursor:default}:host([disabled]) #item-label{cursor:default}:host(:not([vertical])) ::slotted([slot=icon]){height:var(
--spectrum-tabs-quiet-textonly-tabitem-height
)}:host([dir=ltr]) slot[name=icon]+#item-label{margin-left:calc(var(--spectrum-tabs-quiet-textonly-tabitem-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=rtl]) slot[name=icon]+#item-label{margin-right:calc(var(--spectrum-tabs-quiet-textonly-tabitem-icon-gap) - var(--spectrum-global-dimension-size-40))}:host([dir=ltr]):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=ltr]):before{right:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host([dir=rtl]):before{left:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-padding-x)*-1)}:host:before{border:var(--spectrum-tabs-textonly-tabitem-focus-ring-size) solid transparent;border-radius:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-radius
);box-sizing:border-box;content:"";height:var(--spectrum-tabs-textonly-tabitem-focus-ring-height);margin-top:calc(var(--spectrum-tabs-textonly-tabitem-focus-ring-height)/-2);pointer-events:none;position:absolute;top:50%}#item-label{cursor:pointer;display:inline-block;font-size:var(--spectrum-tabs-texticon-tabitem-text-size);font-weight:var(--spectrum-tabs-textonly-tabitem-text-font-weight);text-decoration:none;vertical-align:top}#item-label:empty{display:none}:host{color:var(
--spectrum-tabs-textonly-tabitem-text-color
)}:host(:not([vertical])) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color
)}:host(:hover){color:var(
--spectrum-tabs-textonly-tabitem-text-color-hover
)}:host(:hover) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-hover
)}:host([selected]){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected
)}:host([selected]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected
)}:host(.focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(:focus-visible){color:var(
--spectrum-tabs-textonly-tabitem-text-color-selected-key-focus
)}:host(.focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(:focus-visible):before{border-color:var(
--spectrum-tabs-textonly-tabitem-focus-ring-border-color-key-focus
)}:host(.focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host(:focus-visible) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-selected-key-focus
)}:host([disabled]){color:var(
--spectrum-tabs-textonly-tabitem-text-color-disabled
)}:host([disabled]) ::slotted([slot=icon]){color:var(
--spectrum-tabs-textonly-tabitem-icon-color-disabled
)}:host([disabled]){pointer-events:none}:host([vertical]){--sp-tab-vertial-margin-y:calc((var(
--spectrum-tabs-vertical-item-height,
var(--spectrum-global-dimension-size-550)
) - var(
--spectrum-tabs-focus-ring-height,
var(--spectrum-alias-single-line-height)
))/2);align-items:center;display:flex;flex-direction:column;height:auto!important;justify-content:center}:host([vertical]):before{bottom:0;height:auto;left:calc(var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick))*-1);margin-top:0!important;right:calc(var(--spectrum-tabs-focus-ring-size, var(--spectrum-alias-border-size-thick))*-1);top:0}:host([vertical]) ::slotted([slot=icon]){flex-shrink:0;margin-top:var(--sp-tab-vertial-margin-y)}:host(:not([vertical])) ::slotted([slot=icon]){height:100%}:host([dir][vertical]) slot[name=icon]+#item-label{font-size:var(
--spectrum-tabs-text-size,var(--spectrum-alias-font-size-default)
);font-weight:var(
--spectrum-tabs-text-font-weight,var(--spectrum-alias-body-text-font-weight)
);line-height:1;margin:var(--sp-tab-vertial-margin-y) 0}#item-label[hidden]{display:none}@media (forced-colors:active){:host:before{background-color:ButtonFace}:host ::slotted([slot=icon]){position:relative;z-index:1}#item-label{position:relative;z-index:1}:host([selected]){color:HighlightText}:host([selected]) ::slotted([slot=icon]){color:HighlightText}:host([selected]):before{background-color:Highlight;color:HighlightText}:host([selected]) #item-label{color:HighlightText}}
`;var ii=oi;class H extends Zt(nt(Jt(k,'[slot="icon"]'),"")){constructor(){super(...arguments),this.disabled=!1,this.label="",this.selected=!1,this.vertical=!1,this.value=""}static get styles(){return[ii]}get hasIcon(){return this.slotContentIsPresent}get hasLabel(){return!!this.label||this.slotHasContent}handleContentChange(){this.dispatchEvent(new Event("sp-tab-contentchange",{bubbles:!0,composed:!0}))}render(){return l`
            ${this.hasIcon?l`
                      <slot name="icon"></slot>
                  `:l``}
            <label id="item-label" ?hidden=${!this.hasLabel}>
                ${this.slotHasContent?l``:this.label}
                <slot>${this.label}</slot>
            </label>
        `}firstUpdated(t){super.firstUpdated(t),this.setAttribute("role","tab"),this.hasAttribute("id")||(this.id=`sp-tab-${H.instanceCount++}`),this.shadowRoot.addEventListener("slotchange",this.handleContentChange)}updated(t){super.updated(t),t.has("label")&&typeof t.get("label")!="undefined"&&this.handleContentChange(),t.has("selected")&&(this.setAttribute("aria-selected",this.selected?"true":"false"),this.setAttribute("tabindex",this.selected?"0":"-1")),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}}H.instanceCount=0;s([n({type:Boolean,reflect:!0})],H.prototype,"disabled",void 0);s([n({reflect:!0})],H.prototype,"label",void 0);s([n({type:Boolean,reflect:!0})],H.prototype,"selected",void 0);s([n({type:Boolean,reflect:!0})],H.prototype,"vertical",void 0);s([n({type:String,reflect:!0})],H.prototype,"value",void 0);customElements.define("sp-tab",H);const si=h`
:host{display:inline-flex}:host(:not([selected])){display:none}
`;var ai=si;class K extends k{constructor(){super(...arguments),this.selected=!1,this.value=""}render(){return l`
            <slot></slot>
        `}firstUpdated(){this.slot="tab-panel",this.setAttribute("role","tabpanel"),this.tabIndex=0,this.hasAttribute("id")||(this.id=`sp-tab-panel-${K.instanceCount++}`)}updated(t){t.has("selected")&&(this.selected?(this.removeAttribute("aria-hidden"),this.tabIndex=0):(this.setAttribute("aria-hidden","true"),this.tabIndex=-1))}}K.styles=[ai];K.instanceCount=0;s([n({type:Boolean,reflect:!0})],K.prototype,"selected",void 0);s([n({type:String,reflect:!0})],K.prototype,"value",void 0);customElements.define("sp-tab-panel",K);const ni=({width:a=24,height:t=24,hidden:e=!1,title:r="Properties"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M33.5 6H15.9a5 5 0 00-9.8 0H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h3.6a5 5 0 009.8 0h17.6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM11 10a3 3 0 113-3 3 3 0 01-3 3zm22.5 16H19.9a5 5 0 00-9.8 0H2.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h7.6a5 5 0 009.8 0h13.6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5zM15 30a3 3 0 113-3 3 3 0 01-3 3zM2 16.5v1a.5.5 0 00.5.5h17.6a5 5 0 009.8 0h3.6a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3.6a5 5 0 00-9.8 0H2.5a.5.5 0 00-.5.5zm20 .5a3 3 0 113 3 3 3 0 01-3-3z"
    />
  </svg>`;class ci extends g{render(){return A(l),ni({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-properties",ci);const li=({width:a=24,height:t=24,hidden:e=!1,title:r="Close Circle"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M29.314 6.686a16 16 0 100 22.627 16 16 0 000-22.627zm-2.687 18.527l-1.414 1.414a1.2 1.2 0 01-1.7 0L18 21.111l-5.516 5.516a1.2 1.2 0 01-1.7 0l-1.409-1.415a1.2 1.2 0 010-1.7L14.889 18l-5.514-5.516a1.2 1.2 0 010-1.7l1.414-1.414a1.2 1.2 0 011.7 0L18 14.888l5.516-5.515a1.2 1.2 0 011.7 0l1.414 1.414a1.2 1.2 0 010 1.7L21.111 18l5.516 5.516a1.2 1.2 0 010 1.7z"
    />
  </svg>`;class di extends g{render(){return A(l),li({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-close-circle",di);var ui=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,pi=(a,t,e,r)=>{for(var o=r>1?void 0:r?mi(t,e):t,i=a.length-1,c;i>=0;i--)(c=a[i])&&(o=(r?c(t,e,o):c(o))||o);return r&&o&&ui(t,e,o),o};const zt=new Set,hi=()=>{const a=document.documentElement.dir==="rtl"?document.documentElement.dir:"ltr";zt.forEach(t=>{t.setAttribute("dir",a)})},bi=new MutationObserver(hi);bi.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const vi=a=>typeof a.startManagingContentDirection!="undefined"||a.tagName==="SP-THEME";function gi(a){class t extends a{constructor(){super(...arguments),this.dir="ltr"}get isLTR(){return this.dir==="ltr"}hasVisibleFocusInTree(){const r=this.getRootNode().activeElement;if(!r)return!1;try{return r.matches(":focus-visible")||r.matches(".focus-visible")}catch{return r.matches(".focus-visible")}}connectedCallback(){if(!this.hasAttribute("dir")){let r=this.assignedSlot||this.parentNode;for(;r!==document.documentElement&&!vi(r);)r=r.assignedSlot||r.parentNode||r.host;const o=this.dir;if(this.dir=r.dir==="rtl"?r.dir:this.dir||"ltr",o===this.dir&&this.setAttribute("dir",this.dir),r===document.documentElement)zt.add(this);else{const{localName:i}=r;i.search("-")>-1&&!customElements.get(i)?customElements.whenDefined(i).then(()=>{r.startManagingContentDirection(this)}):r.startManagingContentDirection(this)}this._dirParent=r}super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._dirParent&&(this._dirParent===document.documentElement?zt.delete(this):this._dirParent.stopManagingContentDirection(this),this.removeAttribute("dir"))}}return pi([n({reflect:!0})],t.prototype,"dir",2),t}class fi extends gi(Yt){}const xi=h`
:host{--spectrum-overlay-animation-distance:var(
--spectrum-picker-m-texticon-popover-offset-y,var(--spectrum-global-dimension-size-75)
);opacity:0;pointer-events:none;transition:transform var(--spectrum-global-animation-duration-100,.13s) ease-in-out,opacity var(--spectrum-global-animation-duration-100,.13s) ease-in-out,visibility 0ms linear var(--spectrum-global-animation-duration-100,.13s);visibility:hidden}:host([opened]){opacity:1;pointer-events:auto;transition-delay:0ms;visibility:visible}:host([enter-from=left][opened]){transform:translateX(var(--spectrum-overlay-animation-distance))}:host([enter-from=right][opened]){transform:translateX(calc(var(--spectrum-overlay-animation-distance)*-1))}:host{align-items:center;border-radius:var(
--spectrum-quickactions-border-radius,var(--spectrum-alias-border-radius-regular)
);box-sizing:border-box;display:inline-flex;height:var(
--spectrum-quickactions-height,var(--spectrum-global-dimension-size-500)
);justify-content:center;padding:var(
--spectrum-quickactions-padding-y,var(--spectrum-global-dimension-size-50)
) var(
--spectrum-quickactions-padding-x,var(--spectrum-global-dimension-size-50)
)}:host([dir=ltr]) slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-quickactions-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=rtl]) slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-quickactions-button-gap-x,var(--spectrum-global-dimension-size-100)
)}:host([dir=ltr][text-only]) slot[name=action]+::slotted([slot=action]){margin-left:var(
--spectrum-quickactions-text-button-gap-x,var(--spectrum-global-dimension-size-50)
)}:host([dir=rtl][text-only]) slot[name=action]+::slotted([slot=action]){margin-right:var(
--spectrum-quickactions-text-button-gap-x,var(--spectrum-global-dimension-size-50)
)}#overlay{background-color:var(
--spectrum-quickactions-overlay-color,var(--spectrum-alias-background-color-quickactions-overlay)
)}:host{background-color:var(
--spectrum-quickactions-background-color,var(--spectrum-alias-background-color-quickactions)
)}
`;var yi=xi,ki=Object.defineProperty,wi=Object.getOwnPropertyDescriptor,Wt=(a,t,e,r)=>{for(var o=r>1?void 0:r?wi(t,e):t,i=a.length-1,c;i>=0;i--)(c=a[i])&&(o=(r?c(t,e,o):c(o))||o);return r&&o&&ki(t,e,o),o};class Ct extends fi{constructor(){super(...arguments),this.opened=!1,this.textOnly=!1}static get styles(){return[yi]}render(){return l`
            <slot></slot>
        `}}Wt([n({type:Boolean,reflect:!0})],Ct.prototype,"opened",2),Wt([n({type:Boolean,attribute:"text-only",hasChanged(){return!1}})],Ct.prototype,"textOnly",2);customElements.define("sp-quick-actions",Ct);const zi=({width:a=24,height:t=24,hidden:e=!1,title:r="Visibility"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M24.613 8.58A14.972 14.972 0 0018 6.937c-8.664 0-15.75 8.625-15.75 11.423 0 3 7.458 10.7 15.686 10.7 8.3 0 15.814-7.706 15.814-10.7 0-2.36-4.214-7.341-9.137-9.78zM18 27.225A9.225 9.225 0 1127.225 18 9.225 9.225 0 0118 27.225z"
    />
    <path
      d="M20.667 18.083A2.667 2.667 0 0118 15.417a2.632 2.632 0 011.35-2.27 4.939 4.939 0 00-1.35-.209A5.063 5.063 0 1023.063 18a4.713 4.713 0 00-.175-1.2 2.625 2.625 0 01-2.221 1.283z"
    />
  </svg>`;class Ci extends g{render(){return A(l),zi({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-visibility",Ci);const qi=({width:a=24,height:t=24,hidden:e=!1,title:r="Heart"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M24.364 6.509A8.013 8.013 0 0018 10.327a8.013 8.013 0 00-6.364-3.818A7.636 7.636 0 004 14.145c0 7.292 14 16.546 14 16.546s14-9.156 14-16.546a7.636 7.636 0 00-7.636-7.636z"
    />
  </svg>`;class Ii extends g{render(){return A(l),qi({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-heart",Ii);const Ei=({width:a=24,height:t=24,hidden:e=!1,title:r="Share"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M33 10h-6a1 1 0 00-1 1v2a1 1 0 001 1h3v16H6V14h3a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v22a1 1 0 001 1h30a1 1 0 001-1V11a1 1 0 00-1-1z"
    />
    <path
      d="M10.8 8H16v11a1 1 0 001 1h2a1 1 0 001-1V8h5.2a.8.8 0 00.8-.8.787.787 0 00-.2-.527L18.351.144a.5.5 0 00-.7 0L10.2 6.668a.787.787 0 00-.2.532.8.8 0 00.8.8z"
    />
  </svg>`;class Si extends g{render(){return A(l),Ei({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-share",Si);const Ai=({width:a=24,height:t=24,hidden:e=!1,title:r="Image Add"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <circle cx="23.8" cy="12.6" r="2.5" />
    <path
      d="M14.7 27a12.227 12.227 0 011.262-5.4c-2.108-2.358-4.305-5.6-6.177-5.6C7.113 16 2 24 2 24V6h32v10.893a12.366 12.366 0 012 1.743V5a1.068 1.068 0 00-1.125-1H1.125A1.068 1.068 0 000 5v26a1.068 1.068 0 001.125 1h14.644a12.24 12.24 0 01-1.069-5z"
    />
    <path
      d="M27 18.1a8.9 8.9 0 108.9 8.9 8.9 8.9 0 00-8.9-8.9zm5 9.4a.5.5 0 01-.5.5H28v3.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V28h-3.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H26v-3.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V26h3.5a.5.5 0 01.5.5z"
    />
  </svg>`;class Ti extends g{render(){return A(l),Ai({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-image-add",Ti);const $i=({width:a=24,height:t=24,hidden:e=!1,title:r="Link"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M31.7 4.3a7.176 7.176 0 00-10.148 0c-.385.386-4.264 4.222-5.351 5.309a8.307 8.307 0 013.743.607c.519-.52 3.568-3.526 3.783-3.741a4.1 4.1 0 015.8 5.8l-7.119 7.115a4.617 4.617 0 01-3.372 1.3 3.953 3.953 0 01-2.7-1.109 4.154 4.154 0 01-1.241-1.626 2.067 2.067 0 00-.428.318l-1.635 1.712a7.144 7.144 0 001.226 1.673c2.8 2.8 7.875 2.364 10.677-.438l6.765-6.768a7.174 7.174 0 000-10.152z"
    />
    <path
      d="M15.926 25.824c-.52.52-3.5 3.547-3.713 3.762a4.1 4.1 0 11-5.8-5.8L13.6 16.6a4.58 4.58 0 013.366-1.292 4.2 4.2 0 013.784 2.782 2.067 2.067 0 00.428-.318l1.734-1.721a7.165 7.165 0 00-1.226-1.673 7.311 7.311 0 00-10.26.048l-7.187 7.186a7.176 7.176 0 0010.148 10.149c.386-.386 4.194-4.243 5.281-5.33a8.3 8.3 0 01-3.742-.607z"
    />
  </svg>`;class _i extends g{render(){return A(l),$i({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-link",_i);const Li=({width:a=24,height:t=24,hidden:e=!1,title:r="Page Share"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M29.722 18.331L24 12l-5.708 6.331A1 1 0 0019.035 20H22v7.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5V20h2.979a1 1 0 00.743-1.669z"
    />
    <path d="M30 22v10H18V22h-3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V23a1 1 0 00-1-1z" />
    <path d="M12 30H4V10h28v10h2V5a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h9z" />
  </svg>`;class Fi extends g{render(){return A(l),Li({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-page-share",Fi);const Ui=({width:a=24,height:t=24,hidden:e=!1,title:r="Close"}={})=>S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${a}"
    aria-hidden="${e?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${r}"
  >
    <path
      d="M26.485 6.686L18 15.172 9.515 6.686a1 1 0 00-1.414 0L6.686 8.1a1 1 0 000 1.414L15.172 18l-8.486 8.485a1 1 0 000 1.414L8.1 29.314a1 1 0 001.414 0L18 20.828l8.485 8.486a1 1 0 001.414 0l1.415-1.414a1 1 0 000-1.414L20.828 18l8.486-8.485a1 1 0 000-1.414L27.9 6.686a1 1 0 00-1.415 0z"
    />
  </svg>`;class Pi extends g{render(){return A(l),Ui({hidden:!this.label,title:this.label})}}customElements.define("sp-icon-close",Pi);
