import"./text-aspect-ratio.758caee0.js";import{g as S,b as d,s as u,$ as c}from"./vendor.20676418.js";import{d as _,r as $,D as I,E as O,c as x}from"./editor-model.e5a9ab22.js";import{C as w}from"./cargo-kit-index.fa0641a8.js";import"./renderer-artboard.4485a40b.js";import"./pixi.6a033cab.js";var P=Object.defineProperty,D=Object.getOwnPropertyDescriptor,g=(n,e,r,o)=>{for(var t=o>1?void 0:o?D(e,r):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(t=(o?s(e,r,t):s(t))||t);return o&&t&&P(e,r,t),t};function M(n){const e=n.indexOf("#")===0,r=n.indexOf("rgb")===0;let o=0,t=0,i=0;if(e){const s=n.length===7,a=n.substr(1).match(s?/(\S{2})/g:/(\S{1})/g);a&&(o=parseInt(a[0]+(s?"":a[0]),16),t=parseInt(a[1]+(s?"":a[1]),16),i=parseInt(a[2]+(s?"":a[2]),16))}if(r){const s=n.match(/(\d+){3}/g);s&&(o=parseFloat(s[0]),t=parseFloat(s[1]),i=parseFloat(s[2]))}return typeof o!="undefined"?(o*299+t*587+i*114)/1e3:0}class m extends u{constructor(){super(...arguments),this.selected=!1,this.node={}}render(){let e=c``,r="#ffffff";const{type:o,data:{name:t,text:i,src:s,color:a}}=this.node;let l=t;switch(i&&!l&&(l=i),a&&!l&&(l=a),o){case"image":e=c`<div class="image" style="background-image:url('${s}');"></div>`;break;default:M(a)>150&&(r="#000000"),e=c`<div class="text"
            style="background-color:${a}; color:${r}"
          >
            ${l}
          </div>`;break}return e}}m.styles=S`

    .text {
      line-height: normal;
      padding: 5px 8px;
    }
    .image {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 50px;
      background-size: cover;
    }

  `;g([d({type:Boolean})],m.prototype,"selected",2);g([d({type:Object})],m.prototype,"node",2);customElements.define("variant-picker-item",m);var C=Object.defineProperty,j=Object.getOwnPropertyDescriptor,v=(n,e,r,o)=>{for(var t=o>1?void 0:o?j(e,r):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(t=(o?s(e,r,t):s(t))||t);return o&&t&&C(e,r,t),t};class p extends u{constructor(){super(...arguments),this.documentState={},this.selectedNodeId="",this.variantSetId=""}handleVariantSelect(e){_(this,{action:"select-variant",id:this.selectedNodeId,value:e})}render(){const e=this.documentState.nodes[this.variantSetId],{items:r,data:{name:o}}=e;return r.length<2?c``:c`
      <section>
        <h3>${o}</h3>
        ${r.map(t=>c`<variant-picker-item
            .node=${this.documentState.nodes[t]}
            ?selected=${t===this.selectedNodeId}
            @click=${()=>this.handleVariantSelect(t)}
          ></variant-picker-item>`)}
      </section>
    `}}p.styles=S`

    variant-picker-item {
      margin: 10px;
      position: relative;
      display: inline-block;
      line-height: 0;
      cursor: pointer;
    }

    variant-picker-item[selected] {
      box-shadow: 0 0 0 5px #0099ff;
    }
  `;v([d({type:Object})],p.prototype,"documentState",2);v([d({type:String})],p.prototype,"selectedNodeId",2);v([d({type:String})],p.prototype,"variantSetId",2);customElements.define("variant-picker-list",p);var E=Object.defineProperty,k=Object.getOwnPropertyDescriptor,b=(n,e,r,o)=>{for(var t=o>1?void 0:o?k(e,r):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(t=(o?s(e,r,t):s(t))||t);return o&&t&&E(e,r,t),t};class y extends u{constructor(){super(...arguments),this.documentState={},this.id="",this._node={}}willUpdate(e){if(e.has("id")||e.has("documentState")){const{nodes:r}=this.documentState;if(r){const o=r[this.id];o&&(this._node=o)}}}preorderTraversal(e){const r=[this.documentState.rootNodeId],o=[0];for(;r.length;){const t=r.pop(),i=o.pop(),s=this.documentState.nodes[t];r.push(...s.children),o.push(...Array(s.children.length).fill(i+1)),e(s,i)}}render(){const e=[];return this.preorderTraversal((r,o)=>{r.variantSetId&&e.push(c`
          <variant-picker-list
            .selectedNodeId=${r.id}
            .variantSetId=${r.variantSetId}
            .documentState=${this.documentState}
          ></variant-picker-list>
        `)}),c`
      ${e}
    `}}b([d({type:Object})],y.prototype,"documentState",2);b([d({type:String})],y.prototype,"id",2);customElements.define("pack-controls",y);var N=Object.defineProperty,G=Object.getOwnPropertyDescriptor,f=(n,e,r,o)=>{for(var t=o>1?void 0:o?G(e,r):e,i=n.length-1,s;i>=0;i--)(s=n[i])&&(t=(o?s(e,r,t):s(t))||t);return o&&t&&N(e,r,t),t};class h extends u{constructor(){super(),this.documentState={},this.displayGraph={},this.editorState={},this.rootId="",this.renderCallback=$(this.handleModelsDirty.bind(this)),this.cargoKitIndexModel=new w,this.documentModel=new I(this.cargoKitIndexModel),this.editorModel=new O;const e=new URLSearchParams(window.location.search),r=e.get("id")||"";this.rootId=e.get("node")||"",this.documentController=new x(this.documentModel,this.editorModel,this.renderCallback),this.handleModelsDirty(),r&&this.rootId&&this.documentModel.hydrateFromStorageService(r).then(()=>{r!==this.documentModel._state.id&&window.history.replaceState(null,"","?"),this.documentModel._state.nodes[this.rootId]||alert("invalid node id for this document"),this.renderCallback()})}handleModelsDirty(){this.documentState=this.documentModel.state,this.displayGraph=this.documentController.generateDisplayGraph(),this.editorState=this.editorModel.state}handleDocumentEvent(e){this.documentController.delegateEvent(e.detail)}render(){return c`
      <renderer-artboard
        .displayGraph=${this.displayGraph}
        .id=${this.rootId}
        .scale=${1}
      ></renderer-artboard>
      <pack-controls
        .id=${this.rootId}
        .documentState=${this.documentState}
        @documentEvent="${this.handleDocumentEvent}"
      ></pack-controls>
    `}}f([d({type:Object})],h.prototype,"documentState",2);f([d({type:Object})],h.prototype,"displayGraph",2);f([d({type:Object})],h.prototype,"editorState",2);f([d({type:String})],h.prototype,"rootId",2);customElements.define("pack-index",h);
