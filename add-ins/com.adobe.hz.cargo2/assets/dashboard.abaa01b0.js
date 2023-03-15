import{A as k,C as I,p as D}from"./cargo-document-index.5bedc9f1.js";import{g,b as o,s as b,$ as d,B as x}from"./vendor.6b255b86.js";import"./spectrum.080399e2.js";import"./spectrum-theme.f457e828.js";import{C,S as w}from"./cargo-pack-index.887d40d2.js";var $=Object.defineProperty,P=Object.getOwnPropertyDescriptor,m=(r,e,t,i)=>{for(var s=i>1?void 0:i?P(e,t):e,a=r.length-1,n;a>=0;a--)(n=r[a])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&$(e,t,s),s};window.location.href.includes("localhost");const O=window.location.href.includes("localhost")?"http://localhost:3000/pack.html":"https://git.corp.adobe.com/pages/CARGO/Prototype/authoring-packs/pack.html";function y(r){return r.includes(".png")?r.replace(".png","_sm.png?redir=1"):`${r}_sm.png?redir=1`}class p extends b{constructor(){super(...arguments),this.id="",this.CargoPackMetadata={},this.CargoPackIndexModel={},this.isPendingDelete=!1}async delete(){this.isPendingDelete=!0,await this.CargoPackIndexModel.delete(this.id)}get tagsHTML(){return this.CargoPackMetadata.tags.length===0?d`- no tags -`:this.CargoPackMetadata.tags.map(e=>d` <span>${e}</span> `)}render(){console.info(window.location.href);const{created:e,modified:t,extraThumbnails:i=[]}=this.CargoPackMetadata,s=new Date(e),a=new Date(t);return d`
      <div class="card ${this.isPendingDelete?"disabled":""}">
        <div
          class="thumbnail"
          style="background-image: url('${k}/image/${y(this.CargoPackMetadata.thumbnail)}');"
        >
        ${i.map(n=>d`<div class="extra-thumbnail" style="background-image:url('${y(n)}')"></div>`)}
        </div>
        <div>name: ${this.CargoPackMetadata.name}</div>
        <div>author: ${this.CargoPackMetadata.author}</div>
        <div>tool: ${this.CargoPackMetadata.tool}</div>
        <div>
          created:
          ${s.toLocaleString("en-US",{weekday:"short",day:"numeric",year:"2-digit",month:"short",hour:"numeric",minute:"numeric"})}
        </div>
        <div>
          modified:
          ${a.toLocaleString("en-US",{weekday:"short",day:"numeric",year:"2-digit",month:"short",hour:"numeric",minute:"numeric"})}
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
            @click=${()=>{window.open(`${O}?id=${this.id}`,"reuse","height=800,width=1200,menubar=no,titlebar=no")}}
            >Use</sp-button
          >
        </sp-button-group>
      </div>
    `}}p.styles=g`
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
  `;m([o({type:String})],p.prototype,"id",2);m([o({type:Object})],p.prototype,"CargoPackMetadata",2);m([o({type:Object})],p.prototype,"CargoPackIndexModel",2);m([o({type:Boolean})],p.prototype,"isPendingDelete",2);customElements.define("pack-index-item",p);var S=Object.defineProperty,M=Object.getOwnPropertyDescriptor,f=(r,e,t,i)=>{for(var s=i>1?void 0:i?M(e,t):e,a=r.length-1,n;a>=0;a--)(n=r[a])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&S(e,t,s),s};const L=window.location.href.includes("localhost")?"http://localhost:3000":"https://git.corp.adobe.com/pages/CARGO/Prototype/authoring-packs";function v(r){return r.includes(".png")?r.replace(".png","_sm.png?redir=1"):`${r}_sm.png?redir=1`}class h extends b{constructor(){super(...arguments),this.id="",this.CargoDocumentMetadata={},this.CargoDocumentIndexModel={},this.isPendingDelete=!1}async delete(){this.isPendingDelete=!0,await this.CargoDocumentIndexModel.delete(this.id)}get tagsHTML(){return this.CargoDocumentMetadata.tags.length===0?d`- no tags -`:this.CargoDocumentMetadata.tags.map(e=>d` <span>${e}</span> `)}render(){const{created:e,modified:t,extraThumbnails:i=[]}=this.CargoDocumentMetadata,s=new Date(e),a=new Date(t);return d`
      <div class="card ${this.isPendingDelete?"disabled":""}">
        <div
          class="thumbnail"
          style="background-image: url('${k}/image/${v(this.CargoDocumentMetadata.thumbnail)}');"
        >
        ${i.map(n=>d`<div class="extra-thumbnail" style="background-image:url('${v(n)}')"></div>`)}
        </div>
        <div>name: ${this.CargoDocumentMetadata.name}</div>
        <div>author: ${this.CargoDocumentMetadata.author}</div>
        <div>tool: ${this.CargoDocumentMetadata.tool}</div>
        <div>
          created:
          ${s.toLocaleString("en-US",{weekday:"short",day:"numeric",year:"2-digit",month:"short",hour:"numeric",minute:"numeric"})}
        </div>
        <div>
          modified:
          ${a.toLocaleString("en-US",{weekday:"short",day:"numeric",year:"2-digit",month:"short",hour:"numeric",minute:"numeric"})}
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
            @click=${()=>window.open(`${L}/?id=${this.id}`)}
            >Edit</sp-button
          >
        </sp-button-group>
      </div>
    `}}h.styles=g`
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
  `;f([o({type:String})],h.prototype,"id",2);f([o({type:Object})],h.prototype,"CargoDocumentMetadata",2);f([o({type:Object})],h.prototype,"CargoDocumentIndexModel",2);f([o({type:Boolean})],h.prototype,"isPendingDelete",2);customElements.define("document-index-item",h);var F=Object.defineProperty,E=Object.getOwnPropertyDescriptor,l=(r,e,t,i)=>{for(var s=i>1?void 0:i?E(e,t):e,a=r.length-1,n;a>=0;a--)(n=r[a])&&(s=(i?n(e,t,s):n(s))||s);return i&&s&&F(e,t,s),s};class c extends b{constructor(){super(),this.CargoDocumentIndexModel={},this.CargoDocumentIndex={},this.CargoPackIndexModel={},this.CargoPackIndex={},this.substanceEffectIndexModel={},this.substanceEffectIndex={},this.packSortByKey="modified",this.packFilterByKey="none",this.documentSortByKey="modified",this.documentFilterByKey="none",this.effectSortByKey="modified",this.effectFilterByKey="none",this.activeTab="documents",this.orderedListOfPackIds=[],this.orderedListOfDocumentIds=[],this.orderedListOfEffectIds=[],this.filteredListOfPackIds=[],this.filteredListOfDocumentIds=[],this.filteredListOfEffectIds=[],this.existingDocumentTags=[],this.existingPackTags=[],this.existingDocumentAuthors=[],this.existingPackAuthors=[],this.existingEffectTags=[],this.existingEffectAuthors=[],this.CargoDocumentIndexModel=new I(this.handleNewDocumentIndexState.bind(this)),this.CargoPackIndexModel=new C(this.handleNewPackIndexState.bind(this)),this.substanceEffectIndexModel=new w(this.handleNewEffectIndexState.bind(this)),this.urlParams=new URLSearchParams(window.location.search);const e=this.urlParams.get("tab");this.activeTab=typeof e=="string"?e:"documents"}packSortListFn(e,t){const{items:i}=this.CargoPackIndex,s=i[e],a=i[t],n=s[this.packSortByKey],u=a[this.packSortByKey];return n<u?1:-1}documentSortListFn(e,t){const{items:i}=this.CargoDocumentIndex,s=i[e],a=i[t],n=s[this.documentSortByKey],u=a[this.documentSortByKey];return n<u?1:-1}effectSortListFn(e,t){const{items:i}=this.substanceEffectIndex,s=i[e],a=i[t],n=s[this.effectSortByKey],u=a[this.effectSortByKey];return n<u?1:-1}getFilteredListOfPackIds(e=[],t=""){if(t==="none")return[...e];const[i,s]=t.split(":_:");return e.filter(a=>{const n=this.CargoPackIndex.items[a];return i==="tag"?n.tags.indexOf(s)>=0:i==="author"?n.author===s:!1})}getFilteredListOfDocumentIds(e=[],t=""){if(t==="none")return[...e];const[i,s]=t.split(":_:");return e.filter(a=>{const n=this.CargoDocumentIndex.items[a];return i==="tag"?n.tags.indexOf(s)>=0:i==="author"?n.author===s:!1})}getFilteredListOfEffectIds(e=[],t=""){if(t==="none")return[...e];const[i,s]=t.split(":_:");return e.filter(a=>{const n=this.substanceEffectIndex.items[a];return i==="tag"?n.tags.indexOf(s)>=0:i==="author"?n.author===s:!1})}willUpdate(e){if(e.has("CargoDocumentIndex")&&this.CargoDocumentIndex.items&&(this.existingDocumentTags=[...new Set(Object.values(this.CargoDocumentIndex.items).reduce((t,i)=>t.concat(i.tags),[]))],this.existingDocumentAuthors=[...new Set(Object.values(this.CargoDocumentIndex.items).map(t=>t.author))]),e.has("CargoPackIndex")&&this.CargoPackIndex.items&&(this.existingPackTags=[...new Set(Object.values(this.CargoPackIndex.items).reduce((t,i)=>t.concat(i.tags),[]))],this.existingPackAuthors=[...new Set(Object.values(this.CargoPackIndex.items).map(t=>t.author))]),e.has("CargoPackIndex")||e.has("packSortByKey")){let t=[],i={};this.CargoPackIndex&&this.CargoPackIndex.items&&(i=this.CargoPackIndex.items,t=Object.keys(i),t.sort(this.packSortListFn.bind(this)),this.orderedListOfPackIds=t,this.filteredListOfPackIds=this.getFilteredListOfPackIds(this.orderedListOfPackIds,this.packFilterByKey))}if(e.has("CargoDocumentIndex")||e.has("documentSortByKey")){let t=[],i={};this.CargoDocumentIndex&&this.CargoDocumentIndex.items&&(i=this.CargoDocumentIndex.items,t=Object.keys(i),t.sort(this.documentSortListFn.bind(this)),this.orderedListOfDocumentIds=t,this.filteredListOfDocumentIds=this.getFilteredListOfDocumentIds(this.orderedListOfDocumentIds,this.documentFilterByKey))}if(e.has("packFilterByKey")&&(this.filteredListOfPackIds=this.getFilteredListOfPackIds(this.orderedListOfPackIds,this.packFilterByKey)),e.has("documentFilterByKey")&&(this.filteredListOfDocumentIds=this.getFilteredListOfDocumentIds(this.orderedListOfDocumentIds,this.documentFilterByKey)),e.has("substanceEffectIndex")&&this.substanceEffectIndex.items&&(this.existingEffectTags=[...new Set(Object.values(this.substanceEffectIndex.items).reduce((t,i)=>t.concat(i.tags),[]))],this.existingEffectAuthors=[...new Set(Object.values(this.substanceEffectIndex.items).map(t=>t.author))]),e.has("substanceEffectIndex")||e.has("effectSortByKey")){let t=[],i={};this.substanceEffectIndex&&this.substanceEffectIndex.items&&(i=this.substanceEffectIndex.items,t=Object.keys(i),t.sort(this.effectSortListFn.bind(this)),this.orderedListOfEffectIds=t,this.filteredListOfEffectIds=this.getFilteredListOfEffectIds(this.orderedListOfEffectIds,this.effectFilterByKey))}e.has("effectFilterByKey")&&(this.filteredListOfEffectIds=this.getFilteredListOfEffectIds(this.orderedListOfEffectIds,this.effectFilterByKey))}handleNewPackIndexState(e){this.CargoPackIndex=e}handleNewDocumentIndexState(e){this.CargoDocumentIndex=e}handleNewEffectIndexState(e){this.substanceEffectIndex=e}handlePackSortChange(e){this.packSortByKey=e.srcElement.value}handlePackFilterChange(e){this.packFilterByKey=e.srcElement.value}handleDocumentSortChange(e){this.documentSortByKey=e.srcElement.value}handleDocumentFilterChange(e){this.documentFilterByKey=e.srcElement.value}get packTagsFilterMenuItemsHTML(){return this.existingPackTags.map(e=>d`
        <sp-menu-item value="tag:_:${e}">${e}</sp-menu-item>
      `)}get tagsFilterMenuItemsHTML(){return this.existingDocumentTags.map(e=>d`
        <sp-menu-item value="tag:_:${e}">${e}</sp-menu-item>
      `)}get packAuthorsFilterMenuItemsHTML(){return this.existingPackAuthors.map(e=>e?d`
            <sp-menu-item value="author:_:${e}">${e}</sp-menu-item>
          `:d``)}get authorsFilterMenuItemsHTML(){return this.existingDocumentAuthors.map(e=>e?d`
            <sp-menu-item value="author:_:${e}">${e}</sp-menu-item>
          `:d``)}handlePick(e,t){}async toBase64(e){return new Promise((t,i)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=()=>t(s.result),s.onerror=a=>i(a)})}async loadSubstanceFile(e){const t=await this.toBase64(e),i=prompt("Please enter a name for this substance","My Cool Substance"),s=e.name,a=`substance_${s}`,n={name:"",file:t},u={filename:s,name:i,thumbnail:"",presets:[],archive:a,authorName:"app"};await D(n,a),await this.substanceEffectIndexModel.create(u)}handleFileInputChange(e){const t=e.target,{files:i}=t;if(FileReader&&i&&i.length)for(let s=0;s<i.length;s+=1)this.loadSubstanceFile(i[s])}handleSubstanceDelete(e){this.substanceEffectIndexModel.delete(e)}handleTabsChange(){var t;const e=(t=this.shadowRoot)==null?void 0:t.getElementById("tabs");!e||(this.activeTab=e.selected,this.urlParams.set("tab",this.activeTab),window.history.replaceState({},"",`${location.pathname}?${this.urlParams}`))}handleCreateNewDocClick(){var e=window.location.protocol+"//"+window.location.host+"/"+window.location.pathname.replace("/dashboard.html","");window.location.href=e}render(){return d`
      <sp-theme scale="large" color="light">
        <h1>Cargo Dashboard</h1>
        <sp-tabs id="tabs" selected="${this.activeTab}" @change=${this.handleTabsChange}>
          <sp-tab label="Documents" value="documents"></sp-tab>
          <sp-tab label="Packs" value="packs"></sp-tab>
          <sp-tab label="Effects" value="effects"></sp-tab>
          <sp-tab-panel value="documents">
            <section>
              <sp-button @click=${this.handleCreateNewDocClick}>Create New Document</sp-button>
              <sp-picker
                value=${this.documentFilterByKey}
                @change=${this.handleDocumentFilterChange}
                id="picker-m"
                size="m"
                label="Tag Filter"
              >
                <sp-menu-item value="none">All ( no filter )</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item disabled>TAGS</sp-menu-item>
                ${this.tagsFilterMenuItemsHTML}
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item disabled>AUTHORS</sp-menu-item>
                ${this.authorsFilterMenuItemsHTML}
              </sp-picker>
              <sp-picker
                value=${this.documentSortByKey}
                @change=${this.handleDocumentSortChange}
                id="picker-m"
                size="m"
                label="Sort by..."
              >
                <sp-menu-item value="created">Date Created</sp-menu-item>
                <sp-menu-item value="modified">Date Modified</sp-menu-item>
              </sp-picker>
              <div class="document-items">
              ${x(this.filteredListOfDocumentIds,e=>e,e=>d`
                <document-index-item
                  id=${e}
                  .CargoDocumentMetadata=${this.CargoDocumentIndex.items[e]}
                  .CargoDocumentIndexModel=${this.CargoDocumentIndexModel}
                ></document-index-item>
              `)}
              </div>
            </section>
          </sp-tab-panel>
          <sp-tab-panel value="packs">
          <section>

              <sp-picker
                value=${this.documentFilterByKey}
                @change=${this.handlePackFilterChange}
                id="picker-m"
                size="m"
                label="Tag Filter"
              >
                <sp-menu-item value="none">All ( no filter )</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item disabled>TAGS</sp-menu-item>
                ${this.packTagsFilterMenuItemsHTML}
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item disabled>AUTHORS</sp-menu-item>
                ${this.packAuthorsFilterMenuItemsHTML}
              </sp-picker>
              <sp-picker
                value=${this.packSortByKey}
                @change=${this.handlePackSortChange}
                id="picker-m"
                size="m"
                label="Sort by..."
              >
                <sp-menu-item value="created">Date Created</sp-menu-item>
                <sp-menu-item value="modified">Date Modified</sp-menu-item>
              </sp-picker>
              <div class="document-items">
              ${x(this.filteredListOfPackIds,e=>e,e=>d`
                <pack-index-item
                  id=${e}
                  .CargoPackMetadata=${this.CargoPackIndex.items[e]}
                  .CargoPackIndexModel=${this.CargoPackIndexModel}
                ></pack-index-item>
              `)}
              </div>
            </section>

          </sp-tab-panel>
          <sp-tab-panel value="effects">
            <div>
            <input @change=${this.handleFileInputChange} type="file" id="myFile">Add Substance File</input>
            </div>
            <section>
              ${this.filteredListOfEffectIds.map(e=>d`
                  <div><button @click=${()=>this.handleSubstanceDelete(e)}>delete</button> ${e} : ${this.substanceEffectIndex.items[e].name}</div>
                `)}
            </section>
          </sp-tab-panel>
        </sp-tabs>
      </sp-theme>
    `}}c.styles=g`
    :host {
      position: relative;
      display: block;
      margin: 0 20px;
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

    document-index-item {
    }

    .document-items {
      clear: left;
    }
  `;l([o({type:Object})],c.prototype,"CargoDocumentIndexModel",2);l([o({type:Object})],c.prototype,"CargoDocumentIndex",2);l([o({type:Object})],c.prototype,"CargoPackIndexModel",2);l([o({type:Object})],c.prototype,"CargoPackIndex",2);l([o({type:Object})],c.prototype,"substanceEffectIndexModel",2);l([o({type:Object})],c.prototype,"substanceEffectIndex",2);l([o({type:String})],c.prototype,"packSortByKey",2);l([o({type:String})],c.prototype,"packFilterByKey",2);l([o({type:String})],c.prototype,"documentSortByKey",2);l([o({type:String})],c.prototype,"documentFilterByKey",2);l([o({type:String})],c.prototype,"effectSortByKey",2);l([o({type:String})],c.prototype,"effectFilterByKey",2);l([o({type:String})],c.prototype,"activeTab",2);customElements.define("dashboard-index",c);
