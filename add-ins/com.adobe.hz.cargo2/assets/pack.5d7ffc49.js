import{C as m}from"./cargo-document-index.5bedc9f1.js";import{g,b as r,s as x,$ as h}from"./vendor.6b255b86.js";import"./spectrum.080399e2.js";import"./spectrum-theme.f457e828.js";import{r as w,D as y,E as f,h as b,c as k}from"./editor-model.31d571d3.js";import"./render-pack-graph.8fe5de2b.js";import{s as I,c,d as v}from"./editor-inspector-pack.11edfca6.js";import"./pixi.a553ad36.js";var $=Object.defineProperty,C=Object.getOwnPropertyDescriptor,d=(l,e,t,n)=>{for(var o=n>1?void 0:n?C(e,t):e,i=l.length-1,s;i>=0;i--)(s=l[i])&&(o=(n?s(e,t,o):s(o))||o);return n&&o&&$(e,t,o),o};class a extends x{constructor(){super(),this.documentState={},this.displayGraph={},this.editorState={},this.rootId="",this.renderScale=.5,this.showGraphInspect=!1,this.renderBoxWidth=700,this.renderBoxHeight=620,this.renderCallback=w(this.handleModelsDirty.bind(this)),this.CargoDocumentIndexModel=new m,this.documentModel=new y(this.CargoDocumentIndexModel),this.editorModel=new f,this.headlessRenderer=new b,this.urlParams=new URLSearchParams(window.location.search),this.urlParamsWithoutInputs=new URLSearchParams(window.location.search),this.urlParamsWithoutInputs.delete("inputs");const e=this.urlParams.get("id")||"",t=this.urlParams.get("inputs");this.documentController=new k(this.documentModel,this.editorModel,this.renderCallback),this.handleModelsDirty(),e&&this.documentController.addCargoPack(e).then(n=>{this.rootId=n}).then(()=>{t&&this.documentController.delegateEvent({action:"set-property",id:this.rootId,key:"packInputs",value:JSON.parse(t)})}).then(()=>{const{width:n,height:o,data:{packConfig:i}}=this.documentModel.getNode(this.rootId);if(!t){const p=i.inputs.find(u=>u.id==="Preset");p&&this.documentController.delegateEvent({action:"set-property",id:this.rootId,key:"packInputs",value:{Preset:{type:"packDataKey",value:p.value}}})}this.packConfig=i,this.renderScale=Math.min(.5,this.renderBoxWidth/n,this.renderBoxHeight/o),this.renderCallback()})}handleModelsDirty(){this.documentState=this.documentModel.state,this.displayGraph=this.documentController.generateDisplayGraph(),this.editorState=this.editorModel.state;const e=this.documentModel.getNode(this.rootId);if(e){const{width:i,height:s}=e;this.renderScale=Math.min(.5,this.renderBoxWidth/i,this.renderBoxHeight/s)}const t=this.documentState.nodes[this.rootId],n=t?t.data:{},{packInputs:o}=n;o&&(Object.keys(o).length===0?this.urlParams.delete("inputs"):this.urlParams.set("inputs",JSON.stringify(o)),window.history.replaceState({},"",`${location.pathname}?${this.urlParams}`))}async getRenditionDataUrl(e,t=1){const n=this.documentController.generateDisplayGraph();return await this.headlessRenderer.getRendition({displayGraph:n,rootId:e,scale:t})}async downloadRendition(e,t){const n=this.documentModel.getNode(e),o=await this.getRenditionDataUrl(e,t),i=document.createElement("a");document.body.append(i),i.download=`${n.data.name||"rendition"} @${t.toString().replace(".",",")}x`,i.href=o,i.click(),i.remove()}handleDownload(){var t;const e=(t=this.shadowRoot)==null?void 0:t.getElementById("download-button");!e||this.downloadRendition(this.rootId,Number(e.value))}handleShare(){var t;const e=(t=this.shadowRoot)==null?void 0:t.getElementById("share-button");if(!!e)switch(e.value){case"copyUrl":navigator.clipboard.writeText(window.location.href);break;case"copyUrlWithoutInputs":navigator.clipboard.writeText(`${window.location.origin+window.location.pathname}?${this.urlParamsWithoutInputs}`);break}}handleInspect(){this.showGraphInspect=!this.showGraphInspect}handleDocumentEvent(e){this.documentController.delegateEvent(e.detail)}handleLogoClick(){window.location.href="https://git.corp.adobe.com/pages/CARGO/Prototype/authoring-packs/"}render(){const e=this.documentState.nodes[this.rootId],t=e?e.data:{};return this.packConfig?h`
    <sp-theme scale="large" color="light">
      <section class="actions-bar" style="width:${this.renderBoxWidth+300}px;">
        <div class="left-content">
          <i class="cclogo" @click=${this.handleLogoClick}></i>
          <label>${this.packConfig.name}</label>
        </div>
        <div class="right-content">
          <sp-switch value="${this.showGraphInspect?"on":"off"}" @change=${this.handleInspect} .checked=${this.showGraphInspect}>Inspect Graph</sp-switch>
          <sp-action-menu id="share-button" size="m" @change=${this.handleShare}>
            ${I}
            <span slot="label">Share</span>
            <sp-menu-item value="copyUrl">${c}Copy Your Customized Url</sp-menu-item>
            <sp-menu-item value="copyUrlWithoutInputs">${c}Copy Default Url</sp-menu-item>
          </sp-action-menu>
          <sp-action-menu id="download-button" size="m" @change=${this.handleDownload}>
            ${v}
            <span slot="label">Download</span>
            <sp-menu-item value="0.5">0.5x</sp-menu-item>
            <sp-menu-item value="1">1x</sp-menu-item>
            <sp-menu-item value="2">2x</sp-menu-item>
            <sp-menu-item value="3">3x</sp-menu-item>
          </sp-action-menu>
        </div>
      </section>
      <section class="render-card" style="width:${this.renderBoxWidth+300}px;height:${this.renderBoxHeight+32}px;">
        <div class="render-box" style="width:${this.renderBoxWidth}px;height:${this.renderBoxHeight}px;">
          ${this.showGraphInspect?h`
                <render-pack-graph
                  .width=${this.renderBoxWidth}
                  .height=${this.renderBoxHeight}
                  .packConfig=${this.packConfig}
                ></render-pack-graph>
              `:h`
              <renderer-pack
                .displayGraph=${this.displayGraph}
                .id=${this.rootId}
                .scale=${this.renderScale}
              ></renderer-pack>
              `}
        </div>
        <editor-inspector-pack
          nodeId=${this.rootId}
          .packData=${t}
          @documentEvent="${this.handleDocumentEvent}"
        ></editor-inspector-pack>
      </section>
    </sp-theme>
    `:h``}}a.styles=g`

    .actions-bar {
      position: relative;
      height: 40px;
      margin: 30px auto 10px;
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }

    i.cclogo {
      display: inline-block;
      background-image: url('./files/adobeexpress_appicon_64.svg');
      background-repeat: no-repeat;
      background-position: center center;
      width: 40px;
      height: 40px;
      margin-left: 7px;
      cursor: pointer;
    }

    .actions-bar .left-content {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: left;
      justify-content: left;
      column-gap: 20px;
    }

    .actions-bar .left-content label {
      align-self: center;
      font-weight: 700;
      font-size: 20px;

    }

    .actions-bar .right-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .render-card {
      position: relative;
      display: block;
      margin: 15px auto;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .render-box {
      position: absolute;
      display: block;
      background: #ddd;
      padding: 10px;
      border-radius: 6px;
      top: 6px;
      left: 6px;
      box-shadow: inset 0 0 0 1px #eee;
      background: #F4F4F4;
    }

    .render-box renderer-pack {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    editor-inspector-pack {
      position: absolute;
      top: 16px;
      right: 10px;
      width: 252px;
      bottom: 16px;
    }

  `;d([r({type:Object})],a.prototype,"documentState",2);d([r({type:Object})],a.prototype,"displayGraph",2);d([r({type:Object})],a.prototype,"editorState",2);d([r({type:String})],a.prototype,"rootId",2);d([r({type:Number})],a.prototype,"renderScale",2);d([r({type:Boolean})],a.prototype,"showGraphInspect",2);customElements.define("pack-index",a);
