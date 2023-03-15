import{A as F,C as z,p as _}from"./cargo-document-index.5bedc9f1.js";import{g as y,b as a,s as v,$ as r,B as E}from"./vendor.6b255b86.js";import"./spectrum.080399e2.js";import"./spectrum-theme.f457e828.js";import{C as D,S as O}from"./cargo-pack-index.887d40d2.js";import{e as M,C as S}from"./editor-controller.31cf0562.js";import{d as C,r as B,D as L,E as T,h as j,c as A}from"./editor-model.31d571d3.js";import"./render-pack-graph.8fe5de2b.js";import"./pixi.a553ad36.js";var R=Object.defineProperty,U=Object.getOwnPropertyDescriptor,k=(d,e,t,i)=>{for(var o=i>1?void 0:i?U(e,t):e,s=d.length-1,n;s>=0;s--)(n=d[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&R(e,t,o),o};window.location.href.includes("localhost");window.location.href.includes("localhost");class m extends v{constructor(){super(...arguments),this.id="",this.CargoPackMetadata={},this.CargoPackIndexModel={},this.isPendingDelete=!1,this.activePack="",this.filterOpen=!1}async delete(){this.isPendingDelete=!0,await this.CargoPackIndexModel.delete(this.id)}selectKit(e){if(console.log("select kit "+this.id),!this.filterOpen){let t=new CustomEvent("open-pack",{detail:{message:{id:this.id}},bubbles:!0,composed:!0});this.dispatchEvent(t)}}get tagsHTML(){return this.CargoPackMetadata.tags.length===0?r`- no tags -`:this.CargoPackMetadata.tags.map(e=>r` <span>${e}</span> `)}render(){console.info(window.location.href);const{created:e,modified:t,extraThumbnails:i=[]}=this.CargoPackMetadata;return r`

      <div>
      <div  @click=${this.selectKit} class="card ${this.isPendingDelete?"disabled":""}">
      ${this.activePack?void 0:r`
      <div class="controls ${this.filterOpen?"open":"closed"}">
        <div class="qas">
          <sp-theme scale="medium" color="light">
            <div
            style="padding: 2em; "
            >
              <sp-quick-actions opened>
                <sp-action-button quiet label="Heart">
                    <sp-icon-heart slot="icon"></sp-icon-heart>
                </sp-action-button>
                <sp-action-button quiet label="Share">
                  <sp-icon-share slot="icon"></sp-icon-share>
                </sp-action-button>
                <sp-action-button quiet label="Visibility">
                  <sp-icon-visibility slot="icon"></sp-icon-visibility>
                </sp-action-button>
              </sp-quick-actions>
            </div>
          </sp-theme>
        </div>
        <div class="hover_author">${this.CargoPackMetadata.author}</div>
      </div>`}
        <div
          class="thumbnail"
          style="background-image: url('${F}/image/${this.CargoPackMetadata.thumbnail.replace(".png","_sm.png")}?redir=1');"
        >
       <div class="thumbs">
        ${i[0]?r`<div class="extra-thumbnail" style="background-image:url('${i[0].replace(".png","_sm.png")}?redir=1')"></div>`:void 0}
        
        ${i[1]?r`<div class="extra-thumbnail withBorder" style="background-image:url('${i[1].replace(".png","_sm.png")}?redir=1')"></div>`:void 0}
        
          <!-- ${i[2]?r`<div class="extra-thumbnail" style="background-image:url('${i[2].replace(".png","_sm.png")}?redir=1')"></div>`:void 0}
          -->
        </div>
        
        
        </div>
        
        <div class="kit-info">
          <div class="title">${this.CargoPackMetadata.name}</div>
        ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="web"||this.CargoPackMetadata.tool.toLowerCase()==="ccx"||!this.CargoPackMetadata.tool?r`<div class="toolIcon">
                          <img src="files/logo@2x.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="ps"?r`<div class="toolIcon">
                          <img src="files/icon_ps@2x.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="sd"?r`<div class="toolIcon">
                          <img src="files/icon_sd@2x.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="fresco"||this.CargoPackMetadata.tool.toLowerCase()==="fr"?r`<div class="toolIcon">
                          <img src="files/icon_fr@2x.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="fresco"||this.CargoPackMetadata.tool.toLowerCase()==="fr"?r`<div class="toolIcon">
                          <img src="files/icon_fr@2x.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="ai"||this.CargoPackMetadata.tool.toLowerCase()==="illustrator"?r`<div class="toolIcon">
                          <img src="files/icon_ai@2x.png" />
                        </div>`:void 0}
        
        <div class="author">${this.CargoPackMetadata.author}</div>
        </div>
        
                    </div>
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="web"||this.CargoPackMetadata.tool.toLowerCase()==="ccx"||!this.CargoPackMetadata.tool?r`<div class="newTool">
                          <img src="files/cc_ps_icon.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="ps"?r`<div class="newTool">
                          <img src="files/cc_ps_icon.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="sd"?r`<div class="newTool">
                          <img src="files/icon_sd@2x.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="fresco"||this.CargoPackMetadata.tool.toLowerCase()==="fr"?r`<div class="newTool">
                          <img src="files/icon_fr@2x.png" />
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="fr"||this.CargoPackMetadata.tool.toLowerCase()==="fr"?r`<div class="newTool">
                          <img src="files/icon_fr@2x.png" />
                        </div>`:void 0}
                   
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="ai"||this.CargoPackMetadata.tool.toLowerCase()==="illustrator"?r`<div class="newTool">
                          <img src="files/icon_ai@2x.png" />
                        </div>`:void 0}
                      <div class="desktop_title">${this.CargoPackMetadata.name}</div>
                    </div>

        
    `}}m.styles=y`

    :host {
        
    }
    .stop {
        pointer-events:none;
      }
    .controls {
        position: absolute;
        top: 20px;
        right: 40px;
        color: white;
        display: flex;
        flex-direction: row;
        background-color: #f5f5f5;
 
        opacity: 0;
     
        transition: all 125ms ease-in-out;
   
      
        z-index:1;
      }
      .card:hover .controls.closed {
        opacity: 1;
        transition: all 125ms ease-in-out;
   
      }
      .card {
        display:block;

        width: 256px;
        min-height: 185px;
        background-size: cover;
        border-radius: 4px;
        //margin-right: 20px;
        margin-bottom: 12px;
        overflow: hidden;
        position: relative;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
        background-color:#FFFFFF;
        border-radius:8px;
  
      }
    .id {
      opacity: 0;
      position: absolute;
      top: 10px;
      left: 10px;
      background: black;
      color: white;
      font-size: 12px;
      padding: 3px 10px;
      border-radius: 16px;
    }

    .card:hover .id {
      opacity: 0.5;
    }

    .thumbnail {
      position: absolute;
      width: 100%;
      height: 108px;
      left: 0;
      top: 0;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position: center center;
      background-color: #ddd;
    }
    .thumbs {
      position:absolute;
      right:0;
      top:0;
      width:54px;
      bottom:0;
      //border-left:2px solid whitesmoke;
      display:flex;
      flex-direction: column;
      background-image: url('./files/trans-grid.png');
    }
    .extra-thumbnail {
      position: relative;
      display: inline-block;
      width: 54px;
      height: 54px;
      background-size: cover;
      //border-bottom:2px solid white;
     
      box-sizing: border-box;

    }
    .extra-thumbnail:last-child {
      border-bottom: initial;
    }
    .kit-info {
      position:absolute;
      bottom:0;
      right:0;
      left:0;
      height: 77px;
      color:white;
      padding-top:16px;
      padding-left:16px;
      color: white;
      font-size: 16px;
      font-weight: bold;
      text-decoration: none;
      width: 209px;
      box-sizing: border-box;

    }
    .title {
      font-size: 14px;
      color: #000000;
      font-family:adobe-clean;
    }
    .disabled {
      opacity: 0.5;
    }

    .tags {
      margin: 10px 0;
      font-size: 10px;
    }

    .tags span {
      position: relative;
      display: inline-block;
      background: #e4007c;
      color: rgba(255, 255, 255, 0.8);
      padding: 2px 12px;
      border-radius: 4px;
      margin: 2px 2px;
    }
    .toolIcon {
        width:22px;
        height:22px;
        margin-bottom:5px;
        position:absolute;
        left:16px;
        top:-32px;
    }
    .toolIcon img {
        width:100%;
    }
    .author {
      font-size: 12px;
      font-weight: 500;
      margin-top: 5px;
      font-family:adobe-clean;
      color:black;
    }
    sp-button-group {
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
    .controls {
        position: absolute;
        top: 20px;
        right: 40px;
        color: white;
        display: flex;
        flex-direction: row;
        background-color: #f5f5f5;
        display:none;
      
    
        transition: all 125ms ease-in-out;
        transition-delay: 100ms;
      }
      .desktop_title, .newTool {
        display:none;
      }
      @media only screen and (min-width: 768px) {
        .desktop_title {
          display:block;
          font-family: adobe-clean;
          font-size:16px;
          font-weight: bold;
          margin-bottom: 41px;
        }
        .newTool {
          
          display:block;
          float: left;
          align:center;
          margin-top:3px;
          margin-right:6px;
        }
        .newTool img {
          width:18px;
        }
        :host {
          
        }
        .card {
          width: 343px;
          min-height: 250px;
          background-size: cover;
          border-radius: 2px;
          //margin-right: 20px;
          margin-bottom: 6px;
          overflow: hidden;
          position: relative;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          filter: none;
          background-color:#EDEDED;
          border:1px solid #F8F8F8;
        }
       .card:hover {
        border:1px solid #F8F8F8;
        }
        .author, .kit-info {
          display:none;
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
        .extra-thumbnail {
          position: relative;
          display: inline-block;
          width: 130px;
          height: 50%;
          background-size: cover;
          //border-bottom:2px solid white;
        
          box-sizing: border-box;

        }
        .withBorder {
          border-top:2px solid white;
        }
        .thumbs {
      position:absolute;
      right:0;
      top:0;
      width:130px;
      bottom:0;
      //border-left:2px solid whitesmoke;
      display:flex;
      flex-direction: column;
      background-image: url('./files/trans-grid.png');
      border-left:2px solid white;
      background-color:white;
    }
    .controls {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom:0px;
        left:0px;

        display: flex;
        flex-direction: row;
        background-color: initial;
        border-radius: 4px;
        z-index:1;
        border: none;
        transition: all 125ms ease-in-out;
    
      }
      .controls:hover {
        border:none;
        transition: all 125ms ease-in-out;
        background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%,  rgba(0,0,0,0) 25%);
      }
      .hover_author {
        color:white;
        position:absolute;
        bottom: 19px;
        left:16px;
        font-family:adobe-clean;
        font-size:14px;
      }
      .qas {
        position:absolute;
        right:0px;
        

      }
        .title {

        }
      }
  `;k([a({type:String})],m.prototype,"id",2);k([a({type:Object})],m.prototype,"CargoPackMetadata",2);k([a({type:Object})],m.prototype,"CargoPackIndexModel",2);k([a({type:Boolean})],m.prototype,"isPendingDelete",2);k([a({type:String})],m.prototype,"activePack",2);k([a({type:Boolean})],m.prototype,"filterOpen",2);customElements.define("pack-index-item",m);var H=Object.defineProperty,N=Object.getOwnPropertyDescriptor,I=(d,e,t,i)=>{for(var o=i>1?void 0:i?N(e,t):e,s=d.length-1,n;s>=0;s--)(n=d[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&H(e,t,o),o};const K=window.location.href.includes("localhost")?"http://localhost:3000":"https://git.corp.adobe.com/pages/CARGO/Prototype/authoring",G="https://git.corp.adobe.com/pages/CARGO/Prototype/reuse";function $(d){return d.includes(".png")?d.replace(".png","_sm.png?redir=1"):`${d}_sm.png?redir=1`}class w extends v{constructor(){super(...arguments),this.id="",this.CargoDocumentMetadata={},this.CargoDocumentIndexModel={},this.isPendingDelete=!1}async delete(){this.isPendingDelete=!0,await this.CargoDocumentIndexModel.delete(this.id)}get tagsHTML(){return this.CargoDocumentMetadata.tags.length===0?r`- no tags -`:this.CargoDocumentMetadata.tags.map(e=>r` <span>${e}</span> `)}render(){const{created:e,modified:t,extraThumbnails:i=[]}=this.CargoDocumentMetadata,o=new Date(e),s=new Date(t);return r`
      <div class="card ${this.isPendingDelete?"disabled":""}">
        <div
          class="thumbnail"
          style="background-image: url('${F}/image/${$(this.CargoDocumentMetadata.thumbnail)}');"
        >
        ${i.map(n=>r`<div class="extra-thumbnail" style="background-image:url('${$(n)}')"></div>`)}
        </div>
        <div>name: ${this.CargoDocumentMetadata.name}</div>
        <div>author: ${this.CargoDocumentMetadata.author}</div>
        <div>tool: ${this.CargoDocumentMetadata.tool}</div>
        <div>
          created:
          ${o.toLocaleString("en-US",{weekday:"short",day:"numeric",year:"2-digit",month:"short",hour:"numeric",minute:"numeric"})}
        </div>
        <div>
          modified:
          ${s.toLocaleString("en-US",{weekday:"short",day:"numeric",year:"2-digit",month:"short",hour:"numeric",minute:"numeric"})}
        </div>
        <div class="tags">${this.tagsHTML}</div>
        <div class="id">${this.id}</div>

        <sp-button-group>
          <sp-button
            size="s"
            ?disabled=${this.isPendingDelete}
            variant="negative"
            @click=${this.delete}
            >Delete</sp-button
          >
          <sp-button
            size="s"
            variant="secondary"
            @click=${()=>window.open(`${K}/?id=${this.id}`)}
            >Edit</sp-button
          >
          <sp-button
            size="s"
            variant="secondary"
            @click=${()=>window.open(`${G}/?kit=${this.id}`)}
            >Use</sp-button
          >
        </sp-button-group>
      </div>
    `}}w.styles=y`
    :host {
      clear: left;
      position: relative;
      display: inline-block;
      background: white;
      margin: 0 16px 16px 0;
      padding: 200px 10px 10px 10px;
      width: 280px;
      height: 200px;
      border-radius: 12px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .id {
      opacity: 0;
      position: absolute;
      top: 10px;
      left: 10px;
      background: black;
      color: white;
      font-size: 12px;
      padding: 3px 10px;
      border-radius: 16px;
    }

    .card:hover .id {
      opacity: 0.5;
    }

    .thumbnail {
      position: absolute;
      width: 100%;
      height: 200px;
      left: 0;
      top: 0;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position: center center;
      background-color: #ddd;
    }

    .extra-thumbnail {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 60px;
      background-size: cover;
      background-position: center center;
      overflow:hidden;
      margin: 5px 3px 3px 5px;
      border-radius: 7px;
      box-shadow: 0 0 0 2px white;
    }

    .disabled {
      opacity: 0.5;
    }

    .tags {
      margin: 10px 0;
      font-size: 10px;
    }

    .tags span {
      position: relative;
      display: inline-block;
      background: #e4007c;
      color: rgba(255, 255, 255, 0.8);
      padding: 2px 12px;
      border-radius: 4px;
      margin: 2px 2px;
    }

    sp-button-group {
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
  `;I([a({type:String})],w.prototype,"id",2);I([a({type:Object})],w.prototype,"CargoDocumentMetadata",2);I([a({type:Object})],w.prototype,"CargoDocumentIndexModel",2);I([a({type:Boolean})],w.prototype,"isPendingDelete",2);customElements.define("document-index-item",w);var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,b=(d,e,t,i)=>{for(var o=i>1?void 0:i?W(e,t):e,s=d.length-1,n;s>=0;s--)(n=d[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&V(e,t,o),o};class f extends v{constructor(){super(...arguments),this.item={},this.packInputs={},this.packConfig={id:"",author:"",tool:"",name:"",thumbnail:"",extraThumbnails:[],tags:[],inputs:[],defaultGraphId:"",graphs:{},data:{}},this.nodeId="",this.documentState={},this.packData={},this.dragging=!1,this.thumbURL="",this.hzOriginalImg="",this.hzOriginalFile={}}willUpdate(e){if(e.has("packData")){const{packInputs:t,packConfig:i}=this.packData;this.packInputs=t,this.packConfig=i}}handleBatchImageInput(e,t){M(this,{action:"batch-pack-file-input",id:this.nodeId,key:t.id,value:e})}handleImageInput(e,t){var i=new FileReader;i.readAsDataURL(e),i.onload=function(o){this.thumbURL=i.result}.bind(this),i.onerror=function(o){console.log("Error: ",o)},C(this,{action:"set-pack-file-input",id:this.nodeId,key:t.id,value:e})}upload(e){var t;this.shadowRoot&&(t=this.shadowRoot.getElementById("fileUpload"),t&&t.click())}handleUpload(e){const t=e.target;console.log(window.fileSelected),console.log("********************************");const{files:i}=t;console.log(i),FileReader&&i&&i.length&&this.handleImageInput(i[0],this.item)}useSelection(){this.handleImageInput(this.hzOriginalFile,this.item)}dragover(){this.dragging=!0}dragleave(){this.dragging=!1}render(){return r`
     <div class="label">${this.item.label}</div>
    <div class="image-replace">

      <sp-dropzone @drop=${e=>{if(e.dataTransfer.items){const t=[];for(const i of e.dataTransfer.items)t.push(i.getAsFile());if(t.length===1){const i=t[0];this.handleImageInput(i,this.item)}else this.handleBatchImageInput(t,this.item)}}} id="dropzone-1" style="width: 100%; height: 100%;padding:0px; border-color:rgba(0,0,0,0)">
        <div class="uploadButtons">
            <!-- <label for="file-input">
                <sp-link
                    href="javascript:;"
                    onclick="this.parentElement.nextElementSibling.click()"
                >
                    Drop Image
                </sp-link>
            </label> -->

            <div @drop=${this.dragleave} @dragend=${this.dragleave} @dragenter=${this.dragover} @dragleave=${this.dragleave} class="imageThumb ${this.dragging?"dragging":"notdragging"}" style="background-image:url(${this.thumbURL||this.packData.packConfig.data[this.item.value].value.src+"?redir=1"})"></div>
            <input @change=${e=>{const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let o=0;o<i.length;o+=1)this.handleImageInput(i[o],this.item)}} type="file" id="file-input-1" style="display: none" />
            <div class="desk_drop"> <sp-icon-image-add style="opacity:0.7;" size="xxl"></sp-icon-image-add><div class="message">Drop a file to replace with your photo</div></div>
             <div><button class="button canvas" @click=${this.useSelection}>From canvas</button></div>
             <div><button class="upload_button" @click=${this.upload}>Browse <input @change=${this.handleUpload} hidden  id="fileUpload" type="file"/></button></div>
        </div>
      </sp-dropzone>
      </div>
    `}}f.styles=y`


  .presetThumb {
    width: 64px;
    height:64px;
    background-size: cover;
    margin-right:16px;
    margin-bottom:16px;
    border-radius:8px;
    border: 2px solid #F8F8F8
  }
  .presetThumb.selected {
    border:2px solid black;
  }
  .imageThumb {
    width: 42px;
    height:42px;
    background-size: cover;
    margin-left:12px;
    border-radius:8px;
    border:2px solid #F8F8F8;
    margin-right:6px;
    background-color: #E5EBF7;
  }
  .imageThumb.dragging {
    border:2px solid #268e6c;
  }
  .label {
    font-size:12px;
    font-family:adobe-clean;
    margin-bottom:10px;
  }
  textarea {
    border: 2px solid #B1B1B1;
    width:100%;
    border-radius: 8px;
    font-family:adobe-clean;
    font-size:14px;
    font-weight: 600;
    height:67px;
    padding:12px;
    box-sizing:border-box;
  }
  sp-field-label {
    position: relative;
    display: block;
  }
  .presets, .packData {
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
  }
  .uploadButtons {
    display:flex;
    flex-direction:row;
    width:100%;
    height:100%;
    align-items:center;
    height:100%;
    margin:0;
    width:252px;
    box-sizing: border-box;
    justify-content: flex-start;
    margin-right:12px;
  }
  .image-replace {
    height:67px;
    border:2px dashed #B1B1B1;
    border-radius:8px;
    margin-bottom:12px;
    display:flex;
    flex-direction: row;
    align-items:center;
  }
  .label {
    font-size:14px;
    font-family:adobe-clean;
    margin-bottom:12px !important;
    font-weight:900;
  }
  button {
        padding-left:12px;
        padding-right: 12px;
        font-size:12px;
        font-weight:bold;
        border: 2px solid #D5D5D5;
        border-radius:14px;
        height:24px;
        background-color:white;
        font-family:adobe-clean;
        padding-bottom:2px;
        box-sizing: border-box;
        cursor:pointer;
        margin-left:10px;
        margin-right:4px;

      }
      .button.upload {

      }
      .button.canvas {
        width: 88px;
        margin-left:8px;
        margin-right:0px;
        padding-left:4px;
        padding-right:4px;
      }
      .inactive {
        opacity:0.5;
        color: grey;
      }
      .desk_drop {
        display: none
      }
      @media only screen and (min-width: 768px) {
        .image-replace {
          height:83px;
          border:2px solid #B1B1B1;
          border-radius:8px;
          margin-bottom:12px;
          display:flex;
          flex-direction: row;
          align-items:center;
        }
        .imageThumb {
    width: 56px;
    height:56px;
    background-size: cover;
    margin-left:12px;
    border-radius:8px;
    border:2px solid #F8F8F8;
    margin-right:6px;
    background-color: #E5EBF7;
  }
  .canvas {
    display:none;
  }
  .desk_drop {
    display:block;
    height:56px;
    width:209px;
    border: 2px dashed #B1B1B1;
    border-radius:4px;
    display:flex;
    flex-direction:row;
    align-items:center;
    padding:12px;
    box-sizing: border-box;

  }
  .uploadButtons {
    width:100%;
    margin:0px;

    justify-content:space-between;
  }
  .message {
    text-align:left;
    margin-left:16px;
    font-size:14px;
    font-family: adobe-clean;
    line-height:15px;
    color: #747474;
  }
  .upload_button {
    margin-right:16px;
    height:32px;
    border-radius:16px;
    font-size:14px;
    color: #747474;
    border-color: #747474;

  }
      }
  `;b([a({type:Object})],f.prototype,"item",2);b([a({type:String})],f.prototype,"nodeId",2);b([a({type:Object})],f.prototype,"documentState",2);b([a({type:Object})],f.prototype,"packData",2);b([a({type:Boolean})],f.prototype,"dragging",2);b([a({type:String})],f.prototype,"thumbURL",2);b([a({type:String})],f.prototype,"hzOriginalImg",2);b([a({type:Object})],f.prototype,"hzOriginalFile",2);customElements.define("file-upload",f);var q=Object.defineProperty,J=Object.getOwnPropertyDescriptor,u=(d,e,t,i)=>{for(var o=i>1?void 0:i?J(e,t):e,s=d.length-1,n;s>=0;s--)(n=d[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&q(e,t,o),o};function P(d){console.log("Hello");let e="";if(d.composedPath){const t=d.composedPath();t&&t.length>0&&(e=t[0].value||"")}return e}class g extends v{constructor(){super(),this.nodeId="",this.documentState={},this.packData={},this.dragging=!1,this.thumbURL="",this.mode="",this.locks=[],this.hzOriginalImg="",this.hzOriginalFile={},this.textTimer=-1,this._textTimeout={},this.packInputs={},this.packConfig={id:"",author:"",tool:"",name:"",thumbnail:"",extraThumbnails:[],tags:[],inputs:[],defaultGraphId:"",graphs:{},data:{}},this.textTimer=-1}willUpdate(e){if(e.has("packData")){const{packInputs:t,packConfig:i}=this.packData;this.packInputs=t,this.packConfig=i}}handleImageInput(e,t){}handleInputChange(e,t,i){console.log(e),console.log(` **** SETTING NEW VALUE FOR:${e.label} TYPE: ${t}`);const{id:o}=e,s=JSON.parse(JSON.stringify(this.packInputs));i?s[o]={type:t,value:i}:(console.log("not a new value"),delete s[o]),console.log(`${this.nodeId} shuffling`),console.log(s),C(this,{action:"set-property",id:this.nodeId,key:"packInputs",value:s})}packInputSelectOptions(e){if(!e.options)return r``;const t=this.packInputs[e.id];let i="";t&&(i=t.type==="packDataKey"?t.value:"");const o=i||e.value;return r`
      <div class="presets">
        
      ${e.options.map(s=>r`
        <div>
        <div @click=${()=>this.handleInputChange(e,"packDataKey",s.value)} class="presetThumb ${o===s.value?"selected":""}" style="background-image:url(${s.thumbnail}?redir=1)">
        
        </div>
        </div>
      `)}
      </div>
    `}textTimout(e,t){console.log("hello timer stoped"),this.handleInputChange(e,"text",t)}processText(e,t){this.textTimer!=-1&&clearTimeout(this.textTimer);let i=t.target.value;this.textTimer=setTimeout(()=>this.textTimout(e,i),200)}packInputTextEntry(e){const t=this.packInputs[e.id],i=this.packConfig.data[e.value],o=i?i.value:e.value;let s="";return t&&(s=t.type==="packDataKey"?this.packConfig.data[t.value].value:t.value),r`
    <div class="section">
      <div class="label" for="text-entry-${e.id}" size="m">${e.label}</div>
      <textarea  id="text-entry-${e.id}"
        @keyup=${n=>{this.processText(e,n)}}
        
       

        >${s||o}</textarea>
      <!-- <sp-textfield
        id="text-entry-${e.id}"
        @keyup=${n=>{this.handleInputChange(e,"text",P(n))}}
        @change=${n=>{this.handleInputChange(e,"text",P(n))}}
        placeholder=${o}
        .value=${s}
      ></sp-textfield> -->
      </div>
    `}upload(){}handleUpload(){}useSelection(){}dragover(){this.dragging=!0}dragleave(){this.dragging=!1}packInputDataEntry(e){if(!e.options)return r``;const t=this.packInputs[e.id];let i="";t&&(i=t.type==="packDataKey"?t.value:"");const o=i||e.value;return r`
    ${e.options.map(s=>r`
        <div>
        <div @click=${()=>this.handleInputChange(e,"packDataKey",s.value)} class="presetThumb ${o===s.value?"selected":""}" style="background-image:url(${s.thumbnail})">

        </div>
        </div>
      `)}
    `}packInputImageEntry(e){return r`
      
      <file-upload
          .item=${e}
           .nodeId=${this.nodeId}
          .packData=${this.packData}
          .hzOriginalImg=${this.hzOriginalImg}
            .hzOriginalFile=${this.hzOriginalFile}
        ></file-upload>
      <!-- <sp-dropzone @drop=${t=>{if(t.dataTransfer.items){for(let i=0;i<t.dataTransfer.items.length;i+=1)if(t.dataTransfer.items[i].kind==="file"){const o=t.dataTransfer.items[i].getAsFile();this.handleImageInput(o,e)}}}} id="dropzone-1" style="border-color:rgba(0,0,0,0); width: 200px;">
        <div class="uploadButtons">
        
      
            <div @drop=${this.dragleave} @dragend=${this.dragleave} @dragenter=${this.dragover} @dragleave=${this.dragleave} class="imageThumb ${this.dragging?"dragging":"notdragging"}" style="background-image:url(${this.thumbURL||this.packData.packConfig.data[e.value].value.src})"></div>
            <input @change=${t=>{const i=t.target,{files:o}=i;if(FileReader&&o&&o.length)for(let s=0;s<o.length;s+=1)this.handleImageInput(o[s],e)}} type="file" id="file-input-1" style="display: none" />
             <div><button class="button canvas" @click=${this.useSelection}>Canvas</button></div>
             <div><button @click=${this.upload}>Upload <input @change=${this.handleUpload} hidden  id="fileUpload" type="file"/></button></div>
        </div>
      </sp-dropzone> -->
      
    `}template(e){var t;return r`
 
      <div>${(t=e.options)==null?void 0:t.map(i=>r`<div>OPTION</div>`)}</div>
    `}lock(e){let t=this.locks;this.locks.includes(e)?t=this.locks.filter(function(i){return i!==e}):t.push(e),this.locks=[...t]}shuffleAll(){const e=JSON.parse(JSON.stringify(this.packInputs));this.packConfig.inputs.map(t=>{if(t.options&&t.type!=="preset"&&t.type!=="template"&&!this.locks.includes(t.id)){let i=t.options[Math.floor(Math.random()*t.options.length)];e[t.id]={type:"packDataKey",value:i.value}}}),C(this,{action:"set-property",id:this.nodeId,key:"packInputs",value:e})}shuffleOne(e){this.packConfig.inputs.map(t=>{if(e.id===t.id&&t.options){t.options&&t.options.length;let i=t.options[Math.floor(Math.random()*t.options.length)];console.log(t),console.log(i.value),this.handleInputChange(t,"packDataKey",i.value)}}),console.log("**** END shuffle one *****")}packInputHtml(e,t){if(t=="preset"&&e.type=="preset")return r`<div>
        <div class="label">Presets </div>
    
      ${this.packInputSelectOptions(e)}
    </div>`;if(e.type=="text style"&&t=="adjust")return r`<div class="sectionHeader">
        <div class="label">${e.label}</div>
        <div class="icons">
        <img src="files/small_shuffle.png" @click=${()=>this.shuffleOne(e)}/>
        ${this.locks.includes(e.id)?r`<img src="files/locked_icon.png" @click=${()=>this.lock(e.id)}/>`:r`<img src="files/lock_open.png" @click=${()=>this.lock(e.id)}/>`}
        
        
      </div>
      ${this.packInputSelectOptions(e)}
    </div>`;if(e.hidden===!0)return r``;switch(e.type){case"preset":return;case"text":return t==="fill"?this.packInputTextEntry(e):void 0;case"image":return e.options&&t==="adjust"?r`<div class="sectionHeader"><div class="label">${e.label}</div><div class="icons">
          <img src="files/small_shuffle.png" @click=${()=>this.shuffleOne(e)}/>
          ${this.locks.includes(e.id)?r`<img src="files/locked_icon.png" @click=${()=>this.lock(e.id)}/>`:r`<img src="files/lock_open.png" @click=${()=>this.lock(e.id)}/>`}
          
          
          </div><div class="packData">${this.packInputDataEntry(e)}</div></div>`:t==="fill"&&!e.options?this.packInputImageEntry(e):void 0;case"text style":return;case"packDataKey":return t==="adjust"?r`<div class="sectionHeader"><div class="label">${e.label}</div><div class="icons">
        <img src="files/small_shuffle.png" @click=${()=>this.shuffleOne(e)}/>
        ${this.locks.includes(e.id)?r`<img src="files/locked_icon.png" @click=${()=>this.lock(e.id)}/>`:r`<img src="files/lock_open.png" @click=${()=>this.lock(e.id)}/>`}
        
        
        </div><div class="packData">${this.packInputDataEntry(e)}</div></div>`:void 0;case"substance filter":return t==="adjust"&&e.options?r`<div class="sectionHeader"><div class="label">${e.label}</div><div class="icons">
        <img src="files/small_shuffle.png" @click=${()=>this.shuffleOne(e)}/>
        ${this.locks.includes(e.id)?r`<img src="files/locked_icon.png" @click=${()=>this.lock(e.id)}/>`:r`<img src="files/lock_open.png" @click=${()=>this.lock(e.id)}/>`}
        
        
      </div><div class="packData">${this.packInputDataEntry(e)}</div></div>`:void 0;case"color":return r`<div class="label">${e.label}</div><div class="packData"></div>`;default:return}}render(){return this.packConfig?r`

      <div class="control-area">
        
        ${this.packConfig.inputs.map(e=>this.packInputHtml(e,"preset"))}
        ${this.packConfig.inputs.map(e=>this.packInputHtml(e,"fill"))}
        ${this.packConfig.inputs.map(e=>this.packInputHtml(e,"adjust"))}
      </div>
      <div class="shuffle-all">
    <button @click=${this.shuffleAll}>Shuffle</button>
      </div>
    `:r``}}g.styles=y`

  .icons {
    position: absolute;
    right:12px;
    top:0px;
  }
  .icons img {
    width:16px;
    height:16px;
    margin-left:8px;
  }
  .presetThumb {
    width: 71px;
    height: 71px;
    background-size: cover;
    
    
    border-radius:8px;
    border: 2px solid #F8F8F8
  }
  .controls {
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
  }
  .presetThumb.selected {
    border:2px solid black;
  }
  .sectionHeader {
    position: relative;
  }
  .imageThumb {
    width: 42px;
    height:42px;
    background-size: cover;
    margin-left:12px;
    border-radius:8px;
    border:2px solid #F8F8F8;
    margin-right:6px;
    background-color: #E5EBF7;
  }
  .imageThumb.dragging {
    border:2px solid #268e6c;
  }
  .label {
    font-size:14px;
    font-family:adobe-clean;
    margin-bottom:12px !important;
    font-weight:900;
  }
  textarea {
    border: 2px solid #B1B1B1;
    width:100%;
    border-radius: 8px;
    font-family:adobe-clean;
    font-size:14px;
    font-weight: 600;
    height:67px;
    padding:12px;
    box-sizing:border-box;
  }
  sp-field-label {
    position: relative;
    display: block;
  }
  .presets, .packData {
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-bottom:16px;
    gap:12px;
    position:relative;
  }
  .section {
    margin-bottom:16px;

  }
  .uploadButtons {
    display:flex;
    flex-direction:row;
    width:100%;
    height:100%;
    align-items:center;
    height:100%;
    margin:0;
    width:252px;
    box-sizing: border-box;
    justify-content: flex-start;
  }
  .image-replace {

    height:67px;
    border:2px dashed #B1B1B1;
    border-radius:8px;
    margin-right:24px;
    display:flex;
    flex-direction: row;
    align-items:center;
    
  }
  .control-area::-webkit-scrollbar {
  display: none;
  }
  .control-area {
    background-color: #FFFFFF;
    position: absolute;
    right:0px;
    left:0px;
    top:290px;
    width: 100%;
    padding-right:24px;
    padding-left:24px;
    bottom:0px;
    box-sizing:border-box;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    padding:24px;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    padding-bottom:38px;
    overflow-y:scroll;
    border-radius:8px;
    z-index:10;
    transition: all 200ms ease-in-out;
  }
  .shuffle-all {
    position: fixed;
    bottom:0px;
    left:0px;
    right:306px;
    height:50px;
    width:306px;
    z-index:100;
    display:flex;
    flex-direction:row;
    justify-content:right;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);

  }
  
  button {
        padding-left:12px;
        padding-right: 12px;
        font-size:14px;
        font-weight:bold;
        border: 2px solid #D5D5D5;
        border-radius:16px;
        height:32px;
        box-sizing: border-box;
        background-color:white;
        font-family:adobe-clean;
        padding-bottom:2px;
        box-sizing: border-box;
        cursor:pointer;
        margin-left:20px;

      }
      .button.canvas {

      }
      .inactive {
        opacity:0.5;
        color: grey;
      }
      .shuffle-all button {
      height:32px;
      box-sizing: border-box;
    background-color: #222222;
    border-color: #222222;
    color: #FFFFFF;
    margin-right:24px;
    margin-bottom:-10px;
  }
  @media only screen and (min-width: 768px) {
    .control-area {
    background-color: #FFFFFF;
    position: absolute;
    left: initial;
    right:56px;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    top:220px;
    width: 424px;
    padding-right:24px;
    padding-left:initial;
    bottom:0px;
    box-sizing:border-box;
    
    padding:0px;
    bottom:100px;
    padding-bottom:38px;
    overflow-y:scroll;
    border-radius:0px;
    z-index:10;
    transition: all 200ms ease-in-out;
    border-bottom:1px solid #E1E1E1;
  }
    .shuffle-all {
      z-index:100;
    position: absolute;
    bottom:90px;
    left:inherit;
    right:56px;
    height:50px;
    width:424px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items: flex-end;
    background: linear-gradient(0deg, rgba(255,255,255,1) %80, rgba(255,255,255,0) 100%);
    
  }
  }
  `;u([a({type:String})],g.prototype,"nodeId",2);u([a({type:Object})],g.prototype,"documentState",2);u([a({type:Object})],g.prototype,"packData",2);u([a({type:Boolean})],g.prototype,"dragging",2);u([a({type:String})],g.prototype,"thumbURL",2);u([a({type:String})],g.prototype,"mode",2);u([a({type:Array})],g.prototype,"locks",2);u([a({type:String})],g.prototype,"hzOriginalImg",2);u([a({type:Object})],g.prototype,"hzOriginalFile",2);u([a({type:Number})],g.prototype,"textTimer",2);u([a({type:Object})],g.prototype,"_textTimeout",2);customElements.define("pack-controls",g);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,h=(d,e,t,i)=>{for(var o=i>1?void 0:i?Y(e,t):e,s=d.length-1,n;s>=0;s--)(n=d[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&X(e,t,o),o};class p extends v{constructor(){super(),this.documentState={},this.displayGraph={},this.editorState={},this.CargoPackMetadata={},this.rootId="",this.packId="",this.scale=1,this.layout="mobile",this.mode="fill",this.hasSwaps=!0,this.id="",this.hzCurrentResourceId="",this.hzInitResourceId="",this.hzInit=!1,this.copyDelay=!1,this.copyImgDelay=!1,this.shareMenu=!1,this.hzOriginalImg="",this.hzOriginalFile={},this.currentCapture={},this.currentHzImage="",this.renderScale=.5,this.renderBoxW=0,this.renderBoxH=0,this.showBatchDownloadPopup=!1,this.showBatchProgressOverlay=!1,this.packInputs={},this.packConfig={id:"",author:"",tool:"",name:"",thumbnail:"",extraThumbnails:[],tags:[],inputs:[],defaultGraphId:"",graphs:{},data:{}},this.batchDownloadFiles=[],this.batchDownloadNodeId="",this.batchDownloadInputId="",this.batchProgressPercentage=0,this.setHzImageIn=t=>{var i=new FileReader;t.imageData&&(i.readAsDataURL(t.imageData),i.onloadend=()=>{var o=i.result;fetch(o).then(s=>{this.currentHzImage=s.url})})},this.renderCallback=B(this.handleModelsDirty.bind(this)),this.addEventListener("refresh-pack",this._refreshPack),this.CargoDocumentIndexModel=new z,this.cargoPackIndexModel=new D,this.documentModel=new L(this.CargoDocumentIndexModel),this.editorModel=new T,this.headlessRenderer=new j,this.urlParams=new URLSearchParams(window.location.search),this.urlParamsWithoutInputs=new URLSearchParams(window.location.search),this.urlParamsWithoutInputs.delete("inputs"),this.packId;const e=this.urlParams.get("inputs");this.documentController=new A(this.documentModel,this.editorModel,this.renderCallback),this.editorController=new S(this.documentController,this.documentModel,this.editorModel,this.cargoPackIndexModel,this.renderCallback),this.handleModelsDirty(),this.packId&&this.documentController.addCargoPack(this.packId).then(t=>{this.rootId=t}).then(()=>{e&&this.documentController.delegateEvent({action:"set-property",id:this.rootId,key:"packInputs",value:JSON.parse(e)})}).then(()=>{const{width:t,height:i}=this.documentModel.getNode(this.rootId);this.renderScale=Math.min(148/i,240/t),i>t?this.renderScale=148/i:this.renderScale=240/t,this.renderCallback()}),setInterval(function(){window.parent.postMessage({type:"GetImage"},"*")},500)}_refreshPack(){this.handleModelsDirty()}connectedCallback(){super.connectedCallback(),window.addEventListener("message",e=>{e.data.resourceEntity?(e.data.resourceEntity!==this.hzCurrentResourceId&&(this.hzOriginalFile=e.data.imageData),this.setHzImageIn(e.data)):this.currentHzImage="",this.hzCurrentResourceId=e.data.resourceEntity})}disconnectedCallback(){window.removeEventListener("message",()=>{}),super.disconnectedCallback()}loadTag(e){let t=new CustomEvent("set-tag",{detail:{message:{tag:e}},bubbles:!0,composed:!0});this.dispatchEvent(t)}loadPack(){window.innerWidth<769?(this.renderBoxH=148,this.renderBoxW=240):(this.renderBoxH=580,this.renderBoxW=434);const e=this.urlParams.get("inputs");this.packId&&this.documentController.addCargoPack(this.packId).then(t=>{this.rootId=t}).then(()=>{e&&this.documentController.delegateEvent({action:"set-property",id:this.rootId,key:"packInputs",value:JSON.parse(e)})}).then(()=>{const{width:t,height:i}=this.documentModel.getNode(this.rootId);this.renderScale=Math.max(this.renderBoxW/t,this.renderBoxH/i),i>t?this.renderScale=this.renderBoxH/i:i<t?this.renderScale=this.renderBoxW/t:this.renderScale=this.renderBoxH/i,this.renderCallback()})}updated(e){e.has("packId")&&this.loadPack()}handleModelsDirty(){this.documentState=this.documentModel.state,this.displayGraph=this.documentController.generateDisplayGraph(),this.editorState=this.editorModel.state;const e=this.documentState.nodes[this.rootId],t=e?e.data:{},{packInputs:i}=t;i&&(Object.keys(i).length===0?this.urlParams.delete("inputs"):this.urlParams.set("inputs",JSON.stringify(i)),window.history.replaceState({},"",`${location.pathname}?${this.urlParams}`))}async getRenditionDataUrl(e,t=1){const i=this.documentController.generateDisplayGraph();return await this.headlessRenderer.getRendition({displayGraph:i,rootId:e,scale:t})}async downloadRendition(e,t,i){this.documentModel.getNode(e);const o=await this.getRenditionDataUrl(e,t);if(i)fetch(o).then(s=>s.blob()).then(s=>{this.copyImgDelay=!0,navigator.clipboard.write([new ClipboardItem({"image/png":s})]),setTimeout(function(){this.copyImgDelay=!1}.bind(this),2e3)});else{const s=document.createElement("a");document.body.append(s),s.download=`${this.CargoPackMetadata.name||"rendition"}`,s.href=o,s.click(),s.remove()}}tabChange(e){this.mode=e.currentTarget.selected}handleDownload(){this.shareMenu=!1,this.downloadRendition(this.rootId,Number(2),!1)}handleDownloadCopy(){this.shareMenu=!1,this.downloadRendition(this.rootId,Number(2),!0)}async handleBatchDownload(){this.showBatchDownloadPopup=!1,this.showBatchProgressOverlay=!0;const t=this.batchDownloadFiles.length;for(let i=0;i<this.batchDownloadFiles.length;i++)this.batchProgressPercentage=(i+1)/t,await this.documentController.setPackFileInput(this.batchDownloadFiles[i],this.batchDownloadNodeId,this.batchDownloadInputId),await this.downloadRendition(this.batchDownloadNodeId,2,!1);this.showBatchProgressOverlay=!1}handleShare(){this.copyDelay=!0,navigator.clipboard.writeText(window.location.href),setTimeout(function(){this.copyDelay=!1}.bind(this),1e3)}handleDocumentEvent(e){this.documentController.delegateEvent(e.detail)}handleAppEvent(e){const t=e.detail;switch(t.action||"none"){case"batch-pack-file-input":if(!t.value||!t.key||!t.id)return;this.handleBatchPackFileInput(t.value,t.id,t.key);break}}handleBatchPackFileInput(e,t,i){this.batchDownloadFiles=e,this.batchDownloadNodeId=t,this.batchDownloadInputId=i,this.showBatchDownloadPopup=!0}handleCancelBatchDownload(){this.batchDownloadFiles=[],this.batchDownloadInputId="",this.batchDownloadNodeId="",this.showBatchDownloadPopup=!1}close(){let e=new CustomEvent("close-pack",{detail:{message:{id:this.id}},bubbles:!0,composed:!0});this.dispatchEvent(e)}setAuthor(e){let t=new CustomEvent("set-author",{detail:{message:{author:e}},bubbles:!0,composed:!0});this.dispatchEvent(t)}place(){this.rootId&&this.editorController.getRenditionDataUrl(this.rootId,2).then(e=>{for(var t=e.split(","),i=t[0].match(/:(.*?);/)[1],o=atob(t[1]),s=o.length,n=new Uint8Array(s);s--;)n[s]=o.charCodeAt(s);this.currentCapture=new File([n],"cargo.png",{type:i}),window.parent.postMessage({type:"SaveImage",file:this.currentCapture,resourceEntity:this.hzInitResourceId},"*")})}isLoading(){let e=!1;return this.documentModel.getNode(this.rootId)&&this.documentModel.getNode(this.rootId).children.forEach(t=>{this.editorModel.isLoading(t)&&(e=!0)}),e}render(){const e=this.documentState.nodes[this.rootId],t=e?e.data:{};return r`
    <div class="container">
      <div class="powered_by">

      ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="web"||this.CargoPackMetadata.tool.toLowerCase()==="ccx"||!this.CargoPackMetadata.tool?r`<div class="toolIcon">
                          <img src="files/logo@2x.png" />
                          Powered by Express Packs
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="ps"?r`<div class="toolIcon">
                          <img src="files/icon_ps@2x.png" />
                          Powered by Photoshop
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="sd"?r`<div class="toolIcon">
                          <img src="files/icon_sd@2x.png" />
                          Powered by Substance Designer
                        </div>`:void 0}
                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="fresco"||this.CargoPackMetadata.tool.toLowerCase()==="fr"?r`<div class="toolIcon">
                          <img src="files/icon_fr@2x.png" />
                          Powered by Fresco
                        </div>`:void 0}

                    ${this.CargoPackMetadata.tool&&this.CargoPackMetadata.tool.toLowerCase()==="ai"||this.CargoPackMetadata.tool.toLowerCase()==="illustrator"?r`<div class="toolIcon">
                          <img src="files/icon_ai@2x.png" />
                        </div>`:void 0}



      </div>
      <div class="metadata">
        <div class="meta_title">Tags</div>
        <div class="tag_list">
          ${this.CargoPackMetadata.tags.map((i,o)=>r`<span style="cursor:pointer;" @click=${()=>this.loadTag(i)}>${i}</span>${o+1<this.CargoPackMetadata.tags.length?",":void 0} `)}
        </div>
      </div>
      <sp-theme
      id="pack-config-panel"
      theme="spectrum"
      color="lightest"
      scale="small"
      style="background-color: #FFFFFF"
    >
    <div @click=${this.close}  class="close"><sp-icon-close height="22"></sp-icon-close></div>
      <div class="header">


        <div @click=${this.close} class="logo">
          <img src="files/icon_back.png" />
        </div>

        <div class="pack_title">${this.CargoPackMetadata.name}</div>
        <div class="pack_author" @click=${()=>this.setAuthor(this.CargoPackMetadata.author)}><span class="by">By</span> ${this.CargoPackMetadata.author}</div>
        <div class="actions">


        <sp-action-group>
          <sp-action-button size="s"><sp-icon-heart slot="icon"></sp-icon-heart>Save</sp-action-button>
          <sp-action-button size="s">
          <sp-icon-share slot="icon"></sp-icon-share>
              Open in App
          </sp-action-button>
          <sp-action-button @click=${this.handleShare} size="s">
          <sp-icon-link slot="icon" ></sp-icon-link>
              ${this.copyDelay?"Link Copied":"Copy link"}
          </sp-action-button>
          <sp-action-button size="s" @click=${()=>{this.shareMenu=!this.shareMenu}}>
              <sp-icon-page-share slot="icon"></sp-icon-page-share>
              ${this.copyImgDelay?"Image copied":"Share"}
          </sp-action-button>

      </sp-action-group>
      ${this.shareMenu?r`<div class="actionMenu">
      <sp-menu style="width:100%;z-index:250;">
      <sp-menu-item value="x" @click=${this.handleDownload}>Download image</sp-menu-item>
      <sp-menu-item value="x" @click=${this.handleDownloadCopy}>Copy to clipboard</sp-menu-item>
      <sp-menu-item value="x">Edit pack</sp-menu-item>
      </sp-menu>
      </div>`:void 0}




        </div>


        ${this.showBatchDownloadPopup?r`
            <sp-popover class="batch-download-popover" dialog open>
              <section>
                <sp-button
                  size="m"
                  @click=${this.handleBatchDownload}
                >Batch Download</sp-button>
                <sp-button
                  size="m"
                  @click=${this.handleCancelBatchDownload}
                >Cancel</sp-button>
              </section>
            </sp-popover>
          `:r``}

        <!-- ${this.showBatchProgressOverlay?r`
            <div class="batch-progress-overlay">
              Download Progress ${this.batchProgressPercentage*100}%
            </div>
          `:r``} -->


        </sp-theme>
        <div class="buttons">
          ${this.hzCurrentResourceId?r`<button class="button update" @click=${this.place}>Update</button></div>`:r`<button class="button" @click=${this.place}>Place</button></div>`}
        </div>

      </div>
      
      <div class="render-area">
      ${this.showBatchProgressOverlay?r`
      <div class="ringLoaderUpdate">
                <div class="lds-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>`:void 0}

            <renderer-pack
            .displayGraph=${this.displayGraph}
            .id=${this.rootId}
            .width=${this.renderBoxW}
            .height=${this.renderBoxH}

          ></renderer-pack>
      </div>


        <pack-controls
          .nodeId=${this.rootId}
          .packData=${t}
          @documentEvent="${this.handleDocumentEvent}"
          @editorEvent="${this.handleAppEvent}"
          .mode=${this.mode}
          .hzOriginalImg=${this.currentHzImage}
          .hzOriginalFile=${this.hzOriginalFile}
        ></pack-controls>
      
      


    </div>
    `}}p.styles=y`
    :host {
    position:fixed;
    top:0px;
    margin:auto;
    width:100%;
    z-index:100;
    bottom:0;

  }
  .loader {
    position:absolute;
    height:310px;
    width:310px;
    backdrop-filter: blur(10px);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:2;
    background-color: rgba(0,0,0,0.2);
    
  }
  .ringLoader {
        width:100%;
        height:580px;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      .ringLoaderUpdate {
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        position:absolute;
        left:0px;
        right:0px;
        top:0px;
     
        z-index:1000;
        background-color:#F4F4F4;
        opacity:0.8;
      }
      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
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
        border-color: #444444 transparent transparent transparent;
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
    max-width:306px;
    height:100vh;
    padding-left:24px;
    padding-right:24px;
    box-sizing: border-box;
    overflow:hidden;
    position:relative;
    border-radius:8px;
    box-shadow: 4px 0px 20px 0px rgba(0, 0, 0, 0.1);
    font-family: adobe-clean;
    transition: all 200ms ease-in-out;
    background-color: #FFFFFF;
  }
  .pack_title {

    max-width:200px;
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  }
  .render-area {
    display:flex;
    justify-content:center;
    align-items: center;
    width:256px;
    border:8px solid #F4F4F4;
    background-color:#F4F4F4;
    height:164px;
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
  }
  .control-area {
    background-color: #FFFFFF;
    position: absolute;
    right:0px;
    left:0px;
    top:0px;
    width: 100%;
    padding-right:24px;
    padding-left:24px;
    bottom:0px;
    box-sizing:border-box;

    padding:24px;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    padding-bottom:38px;
    overflow-y:scroll;
    border-radius:8px;
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

    height:30px;
    display: flex;
    align-items: center;
    justify-content:center;
    box-sizing:border-box;
    transition: all 200ms ease-in-out;
    flex-direction:row;
    font-size:12px;
    cursor:pointer;
    border-radius: 5px;
    font-weight: 600;
    width:125px !important;
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
  .tool.selected {
    //background-color: #E9E9E9;
  }
  .tool:hover {
    //background-color: #E9E9E9;
    //

  }
  .tool img {
    width:12px;
    height:12px;
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
    height:24px;
    padding-top:16px;
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
    width:250px;

    height:30px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    z-index:10;

  }
  .switcher {
    position: absolute;
    right:0;
    top:250px;
    width:100%;
    padding-left:24px;
  
    background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
    z-index:30;
    box-sizing: border-box;
    height:68px;
    
  }
  .switcher sp-tabs {
    width:110px;
  }
  .switcher-container {
    width:256px;
    padding:3px;
    height:36px;
    border-radius: 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items:center;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.2);
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
    background-color:#222222;
    color:#FFFFFF;
    border: none;
    height: 24px;
    box-sizing: border-box;
    font-size:12px;
    font-weight: 600;
    border-radius: 20px;
    margin-right:24px;
    cursor:pointer;
    font-family:adobe-clean;
    padding-left:14px;
    padding-right:14px;

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
  .toolIcon, .meta_title,metadata, .powered_by, .close, .pack_author, .actions, .actionMenu {
    display:none;
  }

  @media only screen and (min-width: 768px) {
    .toolIcon, .meta_title,metadata, .powered_by, .close, .pack_author, .actions,.actionMenu {
    display:block;
    }
    .container {
    top:80px;
    width: 1000px;
    max-width: initial;
    height:700px;

    padding-left:24px;
    padding-right:24px;
    box-sizing: border-box;
    overflow:hidden;
    position:relative;
    border-radius:8px;
    box-shadow: 4px 0px 20px 0px rgba(0, 0, 0, 0.1);
    font-family: adobe-clean;
    transition: all 200ms ease-in-out;
    background-color: #FFFFFF;
    margin: auto;
  }
  :host::before {
    content: "<div> </div>";
    position:fixed;
    height:100vh !important;
    width:100vw;
    left:0;
    right:0;
    bottom:0px;
    top:0px;
    pointer-events:none;
    background-color: rgba(0,0,0,0.8);
  }
  .header {
    position:absolute;
    top:48px;
    left: initial;
    width:424px;
    right:56px;
    height: initial;
    padding-top:0px;
    background-color: #FFFFFF;
    display: block;
    padding-bottom:8px;
    flex-shrink: 0;
    font-size: 16px;
    font-weight:600;
    z-index: 20;
    transition: all 200ms ease-in-out;
    border-bottom:1px solid #E1E1E1;

  }
  .pack_title {
    font-size:32px;
    max-width:100%;

  }
  .pack_author {
    font-weight:bold;
    margin-top:27px;
    margin-bottom:27px;
    cursor:pointer;

  }
  .by {
    font-weight:100;
  }
  .buttons {
    display: none;
  }
  .actions {
    margin-top:20px;
    z-index:31;
  }
  .logo {
    display:none;
  }
  .render-area {
    display:flex;
    justify-content:center;
    align-items: center;
    width:45%;
    border:8px solid #F4F4F4;
    background-color:#F4F4F4;
    height:initial;
    position: absolute;
    top:48px;
    bottom:56px;
    left:24px;
    box-sizing: border-box;
    transition: all 200ms ease-in-out;


    border-radius:8px;
    overflow:hidden;
  }
  .close {
    position:absolute;
    right:22px;
    top:22px;
    cursor: pointer;
  }

  .switcher {
    position: absolute;
    right: 0px;

    top:212px;
    width:50%;

    padding-left:20px;
    background: linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
    z-index:3;
    box-sizing: border-box;
    height:68px;

    
  }
  .switcher sp-tabs {
    width:110px; 
  }
  .powered_by {
    position:absolute;
    bottom:22px;
  }
  .metadata {
    position:absolute;
    bottom:46px;
    right:79px;
    width:400px;

  }
  .meta_title {
    font-size: 10px;
    text-transform: uppercase;
  }
  .toolIcon {
    display: flex;
    flex-direction:row;
    align-items: center;
    font-size:12px;

  }
  .toolIcon img {
    width:22px;
    height:22px;
    margin-right:8px;
  }
  .actionMenu {
    position: absolute;
    width: 184px;
    
    border: 1px solid #CACACA;
    background: white;
    right: -35px;
    bottom: -108px;
    z-index: 2000;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  }
  }

  .batch-download-popover {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 200px;
    margin-left: -200px;
    margin-top: -100px;
  }

  .batch-progress-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  `;h([a({type:Object})],p.prototype,"documentState",2);h([a({type:Object})],p.prototype,"displayGraph",2);h([a({type:Object})],p.prototype,"editorState",2);h([a({type:Object})],p.prototype,"CargoPackMetadata",2);h([a({type:String})],p.prototype,"rootId",2);h([a({type:String})],p.prototype,"packId",2);h([a({type:Number})],p.prototype,"scale",2);h([a({type:String})],p.prototype,"layout",2);h([a({type:String})],p.prototype,"mode",2);h([a({type:Boolean})],p.prototype,"hasSwaps",2);h([a({type:String})],p.prototype,"id",2);h([a({type:String})],p.prototype,"hzCurrentResourceId",2);h([a({type:String})],p.prototype,"hzInitResourceId",2);h([a({type:Boolean})],p.prototype,"hzInit",2);h([a({type:Boolean})],p.prototype,"copyDelay",2);h([a({type:Boolean})],p.prototype,"copyImgDelay",2);h([a({type:Boolean})],p.prototype,"shareMenu",2);h([a({type:String})],p.prototype,"hzOriginalImg",2);h([a({type:Object})],p.prototype,"hzOriginalFile",2);h([a({type:Object})],p.prototype,"currentCapture",2);h([a({type:String})],p.prototype,"currentHzImage",2);h([a({type:Number})],p.prototype,"renderScale",2);h([a({type:Number})],p.prototype,"renderBoxW",2);h([a({type:Number})],p.prototype,"renderBoxH",2);h([a({type:Boolean})],p.prototype,"showBatchDownloadPopup",2);h([a({type:Boolean})],p.prototype,"showBatchProgressOverlay",2);customElements.define("pack-modal",p);var Q=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,c=(d,e,t,i)=>{for(var o=i>1?void 0:i?Z(e,t):e,s=d.length-1,n;s>=0;s--)(n=d[s])&&(o=(i?n(e,t,o):n(o))||o);return i&&o&&Q(e,t,o),o};class l extends v{constructor(){super(),this.CargoDocumentIndexModel={},this.CargoDocumentIndex={},this.CargoPackIndexModel={},this.CargoPackIndex={},this.substanceEffectIndexModel={},this.substanceEffectIndex={},this.packSortByKey="created",this.packFilterByKey="none",this.documentSortByKey="modified",this.documentFilterByKey="none",this.effectSortByKey="modified",this.effectFilterByKey="none",this.activeTab="documents",this.activePack="",this.env="plugin",this.selectedId="",this.filterOpen=!1,this.filterList="",this.filterArray=[],this.search="",this.hzCurrentResourceId="",this.hzOriginalFile="",this.currentHzImage="",this.hzInitResourceId="",this.layout="",this.author="",this.renderBoxW=240,this.renderBoxH=148,this.scrolled=!1,this.pluginFilter="all",this.orderedListOfPackIds=[],this.orderedListOfDocumentIds=[],this.orderedListOfEffectIds=[],this.filteredListOfPackIds=[],this.filteredListOfDocumentIds=[],this.filteredListOfEffectIds=[],this.existingDocumentTags=[],this.existingPackTags=[],this.existingDocumentAuthors=[],this.existingPackAuthors=[],this.existingEffectTags=[],this.existingEffectAuthors=[],this.setHzImageIn=t=>{var i=new FileReader;t.imageData&&(i.readAsDataURL(t.imageData),i.onloadend=()=>{var o=i.result;fetch(o).then(s=>{this.currentHzImage=s.url})})},this.CargoDocumentIndexModel=new z(this.handleNewDocumentIndexState.bind(this)),this.CargoPackIndexModel=new D(this.handleNewPackIndexState.bind(this)),this.substanceEffectIndexModel=new O(this.handleNewEffectIndexState.bind(this)),this.urlParams=new URLSearchParams(window.location.search);const e=this.urlParams.get("tab");this.activeTab=typeof e=="string"?e:"documents",this.addEventListener("open-pack",this._open),this.addEventListener("close-pack",this._close),this.addEventListener("set-tag",this.setTag),this.addEventListener("set-author",this.setAuthor),setInterval(function(){window.parent.postMessage({type:"GetImage"},"*")},500)}resize(){console.log("resize"),window.innerWidth<769?(this.layout="mobile",this.renderBoxW=240,this.renderBoxH=148):(this.layout="desktop",this.renderBoxH=624,this.renderBoxW=434)}scroll(e){const t=e.target;this.scrolled=t.scrollTop>410}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.resize),window.innerWidth<769?this.layout="mobile":this.layout="desktop",window.addEventListener("message",e=>{e.data.resourceEntity?(e.data.resourceEntity!==this.hzCurrentResourceId&&(this.hzOriginalFile=e.data.imageData),this.setHzImageIn(e.data)):this.currentHzImage="",this.hzCurrentResourceId=e.data.resourceEntity})}disconnectedCallback(){window.removeEventListener("message",()=>{}),window.removeEventListener("resize",()=>{}),super.disconnectedCallback()}_open(e){console.log(e.detail.message.id),window.history.replaceState({},"",`${location.pathname}?id=${e.detail.message.id}`),this.activePack=e.detail.message.id}setTag(e){this.activePack="",window.history.replaceState({},"",`${location.pathname}`),this.filterArray=[];let t=[...this.filterArray];this.filterOpen=!1,t.push(e.detail.message.tag),this.filterArray=[...t]}setAuthor(e){window.history.replaceState({},"",`${location.pathname}`),this.activePack="",this.author=e.detail.message.author;let t=[...this.filterArray];this.filterOpen=!1,this.filterArray=[...t]}_openFromURL(e){this.activePack=e}_close(e){console.log(e.detail.message.id),this.activePack=""}packSortListFn(e,t){const{items:i}=this.CargoPackIndex,o=i[e],s=i[t],n=o[this.packSortByKey],x=s[this.packSortByKey];return this.packSortByKey=="name"?n>x?1:-1:n<x?1:-1}documentSortListFn(e,t){const{items:i}=this.CargoDocumentIndex,o=i[e],s=i[t],n=o[this.documentSortByKey],x=s[this.documentSortByKey];return n<x?1:-1}effectSortListFn(e,t){const{items:i}=this.substanceEffectIndex,o=i[e],s=i[t],n=o[this.effectSortByKey],x=s[this.effectSortByKey];return n<x?1:-1}getFilteredListOfPackIds(e=[],t=""){return this.filterArray.length===0&&this.search==""&&this.author===""?[...e]:(t.split(":_:"),e.filter(i=>{const o=this.CargoPackIndex.items[i];return console.log(this.CargoPackIndex),this.author?o.author===this.author:this.search!==""&&this.filterArray.length?!!(o.name.toLowerCase().includes(this.search.toLocaleLowerCase())&&o.tags.some(s=>this.filterArray.indexOf(s)>=0)):this.search&&!this.filterArray.length?!!o.name.toLowerCase().includes(this.search.toLocaleLowerCase()):!this.search&&this.filterArray.length?!!o.tags.some(s=>this.filterArray.indexOf(s)>=0):!0}))}getFilteredListOfDocumentIds(e=[],t=""){if(t==="none")return[...e];const[i,o]=t.split(":_:");return e.filter(s=>{const n=this.CargoDocumentIndex.items[s];return i==="tag"?n.tags.indexOf(o)>=0:i==="author"?n.author===o:!1})}getFilteredListOfEffectIds(e=[],t=""){if(t==="none")return[...e];const[i,o]=t.split(":_:");return e.filter(s=>{const n=this.substanceEffectIndex.items[s];return i==="tag"?n.tags.indexOf(o)>=0:i==="author"?n.author===o:!1})}firstUpdated(e){let t=this.urlParams.get("id");t&&this._openFromURL(t)}willUpdate(e){if(e.has("CargoDocumentIndex")&&this.CargoDocumentIndex.items&&(this.existingDocumentTags=[...new Set(Object.values(this.CargoDocumentIndex.items).reduce((t,i)=>t.concat(i.tags),[]))],this.existingDocumentAuthors=[...new Set(Object.values(this.CargoDocumentIndex.items).map(t=>t.author))]),e.has("CargoPackIndex")&&this.CargoPackIndex.items&&(this.existingPackTags=[...new Set(Object.values(this.CargoPackIndex.items).reduce((t,i)=>t.concat(i.tags),[]))],this.existingPackAuthors=[...new Set(Object.values(this.CargoPackIndex.items).map(t=>t.author))]),e.has("CargoPackIndex")||e.has("packSortByKey")){let t=[],i={};this.CargoPackIndex&&this.CargoPackIndex.items&&(i=this.CargoPackIndex.items,t=Object.keys(i),t.sort(this.packSortListFn.bind(this)),this.orderedListOfPackIds=t,this.filteredListOfPackIds=this.getFilteredListOfPackIds(this.orderedListOfPackIds,this.packFilterByKey))}if((e.has("search")||e.has("filterArray")||e.has("author"))&&(this.filteredListOfPackIds=this.getFilteredListOfPackIds(this.orderedListOfPackIds,"search:_:"+this.search)),e.has("CargoDocumentIndex")||e.has("documentSortByKey")){let t=[],i={};this.CargoDocumentIndex&&this.CargoDocumentIndex.items&&(i=this.CargoDocumentIndex.items,t=Object.keys(i),t.sort(this.documentSortListFn.bind(this)),this.orderedListOfDocumentIds=t,this.filteredListOfDocumentIds=this.getFilteredListOfDocumentIds(this.orderedListOfDocumentIds,this.documentFilterByKey))}if(e.has("packFilterByKey")&&(this.filteredListOfPackIds=this.getFilteredListOfPackIds(this.orderedListOfPackIds,this.packFilterByKey)),e.has("documentFilterByKey")&&(this.filteredListOfDocumentIds=this.getFilteredListOfDocumentIds(this.orderedListOfDocumentIds,this.documentFilterByKey)),e.has("substanceEffectIndex")&&this.substanceEffectIndex.items&&(this.existingEffectTags=[...new Set(Object.values(this.substanceEffectIndex.items).reduce((t,i)=>t.concat(i.tags),[]))],this.existingEffectAuthors=[...new Set(Object.values(this.substanceEffectIndex.items).map(t=>t.author))]),e.has("substanceEffectIndex")||e.has("effectSortByKey")){let t=[],i={};this.substanceEffectIndex&&this.substanceEffectIndex.items&&(i=this.substanceEffectIndex.items,t=Object.keys(i),t.sort(this.effectSortListFn.bind(this)),this.orderedListOfEffectIds=t,this.filteredListOfEffectIds=this.getFilteredListOfEffectIds(this.orderedListOfEffectIds,this.effectFilterByKey))}e.has("effectFilterByKey")&&(this.filteredListOfEffectIds=this.getFilteredListOfEffectIds(this.orderedListOfEffectIds,this.effectFilterByKey))}handleNewPackIndexState(e){this.CargoPackIndex=e}handleNewDocumentIndexState(e){this.CargoDocumentIndex=e}handleNewEffectIndexState(e){this.substanceEffectIndex=e}handlePackSortChange(e){this.packSortByKey=e.srcElement.value}handlePackFilterChange(e){this.packFilterByKey=e.srcElement.value}handleDocumentSortChange(e){this.documentSortByKey=e.srcElement.value}handleDocumentFilterChange(e){this.documentFilterByKey=e.srcElement.value}get packTagsFilterMenuItemsHTML(){return this.existingPackTags.map(e=>r`

        ${e?r`<sp-menu-item value="tag:_:${e}">!${e}!</sp-menu-item>`:void 0}
      `)}get tagsFilterMenuItemsHTML(){return this.existingPackTags.map(e=>r`
        ${e&&e!=="Effects"&&e!=="Illustrations"&&e!=="Type"&&e!=="Background & Fills"?r`<sp-menu-item value="tag:_:${e}">${e}</sp-menu-item>`:void 0}
      `)}get packAuthorsFilterMenuItemsHTML(){return this.existingPackAuthors.map(e=>e?r`
            <sp-menu-item value="author:_:${e}">${e}</sp-menu-item>
          `:r``)}get authorsFilterMenuItemsHTML(){return this.existingDocumentAuthors.map(e=>e?r`
            
            <sp-menu-item value="author:_:${e}">${e}</sp-menu-item>
          `:r``)}handlePick(e,t){}async toBase64(e){return new Promise((t,i)=>{const o=new FileReader;o.readAsDataURL(e),o.onload=()=>t(o.result),o.onerror=s=>i(s)})}async loadSubstanceFile(e){const t=await this.toBase64(e),i=prompt("Please enter a name for this substance","My Cool Substance"),o=e.name,s=`substance_${o}`,n={name:"",file:t},x={filename:o,name:i,thumbnail:"",presets:[],archive:s,authorName:"app"};await _(n,s),await this.substanceEffectIndexModel.create(x)}handleFileInputChange(e){const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let o=0;o<i.length;o+=1)this.loadSubstanceFile(i[o])}handleSubstanceDelete(e){this.substanceEffectIndexModel.delete(e)}handleTabsChange(){var t;const e=(t=this.shadowRoot)==null?void 0:t.getElementById("tabs");!e||(this.activeTab=e.selected,this.urlParams.set("tab",this.activeTab),window.history.replaceState({},"",`${location.pathname}?${this.urlParams}`))}handleCreateNewDocClick(){var e=window.location.protocol+"//"+window.location.host+"/"+window.location.pathname.replace("/dashboard.html","");window.location.href=e}setSearch(e){this.search=e.target.value}setFilter(e){const t=e.target;let i=[...this.filterArray];this.filterOpen=!1,i.push(t.value.slice(6)),this.filterArray=[...i]}deleteTag(e){let t=[...this.filterArray];var i=t.indexOf(e);i>-1&&t.splice(i,1),this.filterArray=[...t]}removeTabs(){this.deleteTag("Backgrounds&Fills"),this.deleteTag("Creations"),this.deleteTag("Effects"),this.deleteTag("Type"),this.deleteTag("Illustrations")}tabChange(e){let t=e.currentTarget.selected;if(this.removeTabs(),t!=="all"){let i=[...this.filterArray];i.push(t),this.filterArray=[...i]}}menuChange(e){console.log(e.target.value);let t=e.target.value;if(this.removeTabs(),t!=="all"){let i=[...this.filterArray];i.push(t),this.filterArray=[...i]}}render(){return r`
      <div @scroll=${this.scroll} class="container ${this.selectedId.length?"fixed":void 0}">
        ${this.selectedId.length?r`
            <div class="screen"></div>
            <reuse-index .id=${this.selectedId}></reuse-index>
        `:void 0}

        <!-- header -->
        <div class="fixed_header">
          <div class="desktop">
          <div class="header_menu"><div class="menu_left"> c</div><div class="menu_right"> s</div></div>
          <div class="header_text">Find packs for your next creative project.</div>
        </div>
        <!-- END HEADER -->
        <!-- SEARCH HEADER -->
        <div class="search_header">
          <div class="search_container ${this.scrolled?"scrolled":"notscrolled"}">
            <img class="search_icon" src="files/icon_search.png"/>
            <input type="text"
                class="search search_mobile"
                id="name-1"
                placeholder="Search"
                value=${this.search}
                @keyup = ${this.setSearch}
            />
            <sp-theme scale="medium" color="light">
              <div class="plugin-menu">
                  <sp-picker
                    quiet
                    value=${this.pluginFilter}
                    @change=${this.menuChange}
                    id="picker-m"
                    size="m"
                    label="Sort by..."
                  >
                
                    <sp-menu-item value="all">All</sp-menu-item>
                    <sp-menu-item value="Creations">Creations</sp-menu-item>
                    <sp-menu-item value="Backgrounds&Fills">Backgrounds & Fills</sp-menu-item>
                    <sp-menu-item value="Effects">Effects</sp-menu-item>
                    <sp-menu-item value="Type">Type</sp-menu-item>
                    <sp-menu-item value="Illustrations">Illustrations</sp-menu-item>
                  </sp-picker>
                  <div @click=${()=>this.filterOpen=!this.filterOpen}>
                    <sp-icon-properties></sp-icon-properties>
                  </div>
                  <div class="popover ${this.filterOpen?"open":"closed"}">
                  <div>
                    <sp-menu style="width:100%;z-index:250;"  @change=${e=>{this.setFilter(e)}}>
                      ${this.tagsFilterMenuItemsHTML}
                    </sp-menu>
                  </div>
                </div>
              </div>
            </sp-theme>
           
            <div class="desktop_tags">
            ${this.filterArray.map(e=>{if(e!=="Effects"&&e!=="Backgrounds&Fills"&&e!=="Creations"&&e!=="Type"&&e!=="Illustrations")return r`
            <div class="filter-tag" @click=${()=>this.deleteTag(e)}>${e} <span style="margin-left:10px;padding-top:6px;width:12px;"><sp-icon-close-circle size="s"></sp-icon-close-circle></span></div>
          `})}
            </div>
            <input type="text"
                class="search search_desktop"
                id="name-1"
                placeholder="Search Express packs..."
                value=${this.search}
                @keyup = ${this.setSearch}
            />
          </div>
        </div>
        <!-- END SEARCH HEADER -->
      </div>
      <!-- CONTAINER KITS -->
      <div class="kit_container">
        <sp-theme scale="medium" color="light">
          <div class="scrolled_menu ${this.scrolled?"on":"off"}">
            <div class="stock_icon"><img src="files/icon_stock.png"/></div>
            <div><img class="scrolled_icons" src="files/fake_icons_scrolled.png"/></div>
          </div>
          <div class="sub_menu ${this.scrolled?"scrolled":"not_scrolled"}">
            <div class="tabs"> 
              <sp-tabs selected="all" size="m" @change=${this.tabChange}>
                  <sp-tab label="All" value="all"></sp-tab>
                  <sp-tab label="Creations" value="Creations"></sp-tab>
                  <sp-tab label="Background & Fills" value="Backgrounds&Fills"></sp-tab>
                  <sp-tab label="Effects" value="Effects"></sp-tab>
                  <sp-tab label="Type" value="Type"></sp-tab>
                  <sp-tab label="Illustations" value="Illustrations"></sp-tab>
                  <!-- <sp-tab-panel value="1">Content for Tab 1</sp-tab-panel>
                  <sp-tab-panel value="2">Content for Tab 2</sp-tab-panel>
                  <sp-tab-panel value="3">Content for Tab 3</sp-tab-panel>
                  <sp-tab-panel value="4">Content for Tab 4</sp-tab-panel> -->
              </sp-tabs>
            </div>
            <div class="filter_button">
              <div class="popover ${this.filterOpen?"open":"closed"}">
                <div>
                  <sp-menu style="width:100%;z-index:250;"  @change=${e=>{this.setFilter(e)}}>
                    ${this.tagsFilterMenuItemsHTML}
                  </sp-menu>
                </div>
              </div>
                  <sp-action-group>
                    
                    <sp-action-button size="m" @click=${()=>this.filterOpen=!this.filterOpen}>
                        <sp-icon-properties slot="icon"></sp-icon-properties>
                        Filter by tag
                    </sp-action-button>
                  </sp-action-group>
                  
                </div>
                <div class="sortby">
                <sp-picker
                value=${this.packSortByKey}
                @change=${this.handlePackSortChange}
                id="picker-m"
                size="m"
                label="Sort by..."
              >
                <sp-menu-item value="created">Most Recent</sp-menu-item>
                <sp-menu-item value="name">Name</sp-menu-item>
              </sp-picker>
              </div>
              </div>
              <div>
            <div class="filter-list">
            ${this.author?r`<div @click=${()=>this.author=""} class="filter-tag">${this.author} <span style="margin-left:10px;padding-top:3px;"><sp-icon-close-circle size="s"></sp-icon-close-circle></span></div>`:void 0}
            ${this.filterArray.map(e=>{if(e!=="Effects"&&e!=="Backgrounds&Fills"&&e!=="Creations"&&e!=="Type"&&e!=="Illustrations")return r`
                  <div class="filter-tag" @click=${()=>this.deleteTag(e)}>${e} <span style="margin-left:10px;padding-top:3px;"><sp-icon-close-circle size="s"></sp-icon-close-circle></span></div>
                `})}
            </div>
          </div>
              </sp-theme>
              <div class="kit-items">
              
                ${this.filteredListOfPackIds.length<1?r`<div class="VPN"><h2>Please log into the VPN to access packs</h2></div>`:void 0}
                ${E(this.filteredListOfPackIds,e=>e,e=>r`
                <pack-index-item
                  id=${e}
                  .CargoPackMetadata=${this.CargoPackIndex.items[e]}
                  .CargoPackIndexModel=${this.CargoPackIndexModel}
                  .activePack=${this.activePack}
                  .filterOpen=${this.filterOpen}
                ></pack-index-item>
              `)}
              
          
        </div>
          </div>
          </div>
      ${this.activePack?r`
        <div class="modal">
        <pack-modal  .packId=${this.activePack} .CargoPackMetadata=${this.CargoPackIndex.items[this.activePack]}></pack-modal>
        </div>
        `:void 0} 
    `}}l.styles=y`
    :host {
      position: relative;
      display: block;
      margin: 0 0px;
    }
    .desktop {
      display: none;
    }
    .plugin-menu {
      display: flex;
      flex-direction:row;
      margin-top:8px;
      align-items:center;
      justify-content:space-between;
      position: relative;
    }
    .popover {
      height:168px;
      position:absolute;
      background:white;
      border-radius: 8px;
      box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.1);
      width:223px;
      left:36px;
      top:50px;
      opacity:0;
      z-index:100;
      pointer-events:none;
      transition: all 125ms ease-in-out;
      overflow-y:scroll;
      margin-top:-10px;
    }
    .popover.open {
      opacity: 1;
      transition: all 125ms ease-in-out;
      pointer-events: all !important;
    }
    .filter-list, .desktop_tags {
      display:flex;
      flex-direction:row;
      padding-left:-4px;
      padding-right:24px;
      flex-grow:0;
    }
    .filter-list img {
      width:8px;
      height: 8px;
      margin-left:8px;
    }
     .filter-tag {
      border: 2px solid #D5D5D5;
      box-sizing: border-box;
      padding-left:10px;
      padding-right:10px;
      margin-right:4px;
      margin-bottom:12px;
      border-radius: 12px;
      height:24px;
      font-size:12px;
      font-family:adobe-clean;
      font-weight:bold;
      display:flex;
      justify-content:center;
      align-items:center;
      cursor:pointer;
    }
    .filter-tag:hover {
      background-color: #FAFAFA;
      border-color: #B1B1B1;
    }
    .fixed_header {
      position:fixed;
      top:0;
      left:0;
      width:306px;
      z-index:10;
      background:white;
      box-sizing: border-box;
    }
    .container {
      background-color: white;
     // border:10px solid green;
     display:flex;
     flex-direction:column;
     overflow-y:scroll;
     height:100vh;
     width:306px;
     -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
     

    }

    .container::-webkit-scrollbar {
    display: none;
    }
    .search_icon {
      position:absolute;
      width:22px;
      height:22px;
      top:8px;
      left:8px;
    }
    
    .search {
      background-color:#F9F9F9;
      width:256px;
      height:38px;
      border:none;
      border-radius: 30px;
      font-size:17px;
      color: #444444;
      font-family: adobe-clean;
      padding-left:40px;
      padding-bottom:4px;
      box-sizing: border-box;
    }
    .search_header {
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      margin-bottom:16px;
      margin-top:24px;
      
    }
    .picker {
      position:absolute;
      right:4px;
      width:30px;
      height:30px;
      top:4px;
      background-color:#EAEAEA;
      border-radius:15px;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      
    
    }
    .picker img {
      width:12px;
    }
    .search::placeholder {
      color: #959595;
      font-size:17px;
      font-style: italic;
    }
    .search_container {
      position:relative;
      width:256px;
    
      box-sizing: border-box;
      
    }
    .filter {
      width:22px;
      height:22px;
      margin-right:10px;
    }
    header {
      min-height:56px;

      margin-bottom:8px;
      display:flex;
      flex-direction:row;
      align-items:center;
   
      
    }
    .header-title {
      margin-left:16px;
      font-weight:bold;
      font-family: adobe-clean;
      font-size:16px;
    }
    .header-icon {
      width:40px;
      height:40px;
  
      border-radius: 4px;
      margin-left:8px;
    }
    .header-icon img {
      width:40px;
      height:40px;
    }
    .fixed {
      overflow-y:hidden;
    }
    .screen {
      position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
      background-color:rgba(0,0,0,0.8);
      z-index:8;
      pointer-events:none;
    }
    h1 {
      color:white;
      padding:0;
      margin:0;
      font-weight: 300;
      color: white;
      font-size: 30px;
      text-align: center;
      opacity: 1;
      transition: all 125ms ease-in-out;
      margin-bottom: 25px;
    }
    .controls {
      display: flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
    }
    /* header */
    .kit-items {
      display:flex;
      flex-direction:column;
      flex-wrap: wrap;
      margin: auto;
      width:100%;

      padding:0px 24px 0px 24px;
      margin:auto;
      margin-top:120px;
      align-items:center;
      box-sizing: border-box;
    }
    .sub_menu {
      display: none;
    }
    .search_desktop {
      display:none;
    }
    .search_mobile {
      display:block;
    }
    .scrolled_menu {
      display:none;
    }
    
    @media only screen and (min-width: 768px) {
      .search_desktop, .scrolled_menu {
      display:block;
      }
      .plugin-menu {
        display: none;
      }
      .scrolled_menu.off {
        display:none;
      }
      .search_mobile {
        display:none;
      }
      .desktop,.sub_menu{
        display:block;
      }
      .VPN {
    opacity:0;
    animation: fade 4s linear;
    animation-fill-mode: forwards;  



}


    @keyframes fade {
      50% { opacity: 0 }
      100% { opacity: 1 }
    }
      .container {
        
      // border:10px solid green;
      display:flex;
      flex-direction:column;
      overflow-y:scroll;
      height:100vh;
      width:100%;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
      .fixed_header {
        width:100%;
        box-sizing:border-box;
    
        min-height: 30vw;
        max-height: 30vw;
        height:30vw;
        background-image:url("files/header_bg.png");
        background-size: cover;
        background-position: right;
        position:relative;
        border: none;
        background-color: black;
        overflow:hidden;
       
      }
      .header_text {
        font-size: 35px;
        font-family: adobe-clean;
        color: white;
        position: absolute;
        left:87px;
        top:150px;
        max-width:65vw;
      }
      .header_menu {
      width:100%;
      overflow:hidden;
      display:flex;
        flex-direction:row;
        justify-content:space-between;
      
    }
    .scrolled_menu {
      position:fixed;
      top:0;
      left:0;
      right:0;
      background-color:#FFFFFF;
      z-index:5;
      height:86px;
      display:flex;
      flex-direction: row;
      align-items:center;
      padding:22px;
      box-sizing:border-box;
      justify-content:space-between;
      
    }
    .scrolled_menu .stock_icon img {
      width:40px;

    }
    .scrolled_icons {
      width:287px;
    }
    .menu_left {
      background-image: url('files/fake_header.png');
  
      min-width:1000px;
      max-width:1000px;
      height:86px;
      background-size: 200%;
    }
    .menu_right {
      background-image: url('files/fake_header.png');

      min-width:500px;
      height:86px;
      background-position:right;
      background-size: 400%;
    }
    .sub_menu {
      margin:auto;
      padding-left:72px;
      padding-right:72px;
      display:flex;
      padding-top:24px;
      flex-direction:row;
      align-items:center;

    }
    .sub_menu.scrolled {
      position: fixed;
      top:86px;
      left:0;
      right:0;
      z-index:5;
      background-color: #FAFAFA;
      min-height:86px;
      padding-left:24px;  
    }
    .popover {
      height:168px;
      position:absolute;
      background:white;
      border-radius: 8px;
      box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.1);
      width:223px;
      left:0px;
      top:60px;
      opacity:0;
      z-index:200;
   
      transition: all 125ms ease-in-out;
      overflow-y:scroll;
      margin-top:-10px;
    }
    .filter-list {
      display:flex;
      flex-direction:row;
      padding-left:50px;
      padding-right:24px;
      margin-top:12px;
    }
    .filter_button {
      margin-left:20px;
      position:relative;
    }
    .tabs {
      width:420px;
    }
    .filter-tag {
      border: 2px solid #D5D5D5;
      box-sizing: border-box;
      padding-left:20px;
      padding-right:15px;
      margin-right:4px;
      margin-bottom:12px;
      border-radius: 20px;
      height:40px;
      font-size:15px;
      font-family:adobe-clean;
      font-weight: initial;
      display:flex;
      justify-content:center;
      align-items:center;
      color: #6E6E6E;
    }
    .header_menu img {
      height:86px;
    }
    .search_container {
      position: absolute;
      top:220px;
      left: 87px;
      z-index:10;
    }
    .search_container.scrolled {
      position: fixed;
      z-index: 1;
      top: 24px;
      left: 100px;
      right:0px;
      width:500px;

    }
    .search_container.scrolled .search {
      border: 1px solid #E1E1E1;

    }
    .search {
      background-color:rgba(255,255,255,0.7);
      width:45vw;
      height:38px;
      border:none;
      border-radius: 30px;
      font-size:17px;
      color: #444444;
      font-family: adobe-clean;
      padding-left:40px;
      padding-bottom:4px;
      box-sizing: border-box;
    }
    .kit-items {
      display:flex;
      flex-direction:row;
      flex-wrap: wrap;
      width: inherit;
      margin:auto;
      width: inherit;
      margin-top:34px;
      align-items:center;
      box-sizing: border-box;
      gap:17px;

      align-content:flex-start;
      padding:0px;
      justify-content:center;
    }
      /* header {
      background-size:cover;
        height:56px;
    }
    h1 {
      font-size: 55px;
    }
    sp-picker {
      float: left;
      margin: 0 10px 10px 0;
    }

    section {
      padding-top: 20px;
      display: block;
      flex-grow: 1;
    }


    .kit-items {
      display:flex;
      flex-direction:row;
      flex-wrap: wrap;
      margin: auto;
      width:100%;
      max-width:1200px;
      padding:0px;
      margin:auto;
      margin-top:16px;
      justify-content:center;
      
    } */
    .kit_container {
      padding:24px;
      padding-top:0px;
      position:relative;
    }
    .sortby {
      flex-grow:1;
      width:100%;
      display:flex;
      flex-direction:row;
      justify-content:flex-end;
    }
  }
    
  `;c([a({type:Object})],l.prototype,"CargoDocumentIndexModel",2);c([a({type:Object})],l.prototype,"CargoDocumentIndex",2);c([a({type:Object})],l.prototype,"CargoPackIndexModel",2);c([a({type:Object})],l.prototype,"CargoPackIndex",2);c([a({type:Object})],l.prototype,"substanceEffectIndexModel",2);c([a({type:Object})],l.prototype,"substanceEffectIndex",2);c([a({type:String})],l.prototype,"packSortByKey",2);c([a({type:String})],l.prototype,"packFilterByKey",2);c([a({type:String})],l.prototype,"documentSortByKey",2);c([a({type:String})],l.prototype,"documentFilterByKey",2);c([a({type:String})],l.prototype,"effectSortByKey",2);c([a({type:String})],l.prototype,"effectFilterByKey",2);c([a({type:String})],l.prototype,"activeTab",2);c([a({type:String})],l.prototype,"activePack",2);c([a({type:String})],l.prototype,"env",2);c([a({type:String})],l.prototype,"selectedId",2);c([a({type:Boolean})],l.prototype,"filterOpen",2);c([a({type:String})],l.prototype,"filterList",2);c([a({type:Array})],l.prototype,"filterArray",2);c([a({type:String})],l.prototype,"search",2);c([a({type:String})],l.prototype,"hzCurrentResourceId",2);c([a({type:String})],l.prototype,"hzOriginalFile",2);c([a({type:String})],l.prototype,"currentHzImage",2);c([a({type:String})],l.prototype,"hzInitResourceId",2);c([a({type:String})],l.prototype,"layout",2);c([a({type:String})],l.prototype,"author",2);c([a({type:Number})],l.prototype,"renderBoxW",2);c([a({type:Number})],l.prototype,"renderBoxH",2);c([a({type:Boolean})],l.prototype,"scrolled",2);c([a({type:String})],l.prototype,"pluginFilter",2);customElements.define("dashboard-index",l);
