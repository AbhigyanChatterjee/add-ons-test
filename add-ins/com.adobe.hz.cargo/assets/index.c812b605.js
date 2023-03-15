import{s as g,$ as o,g as x,b as r,B as u}from"./vendor.20676418.js";import"./spectrum.9b2a0672.js";import"./spectrum-theme.c743f101.js";import{A as m,C as b}from"./cargo-kit-index.fa0641a8.js";import{S as y}from"./substance-effect-index.bfcc0bf6.js";import"./index.3920ab12.js";class v extends g{static get properties(){return{id:{type:String}}}constructor(){super(),this.id=""}delete(){}stopProp(e){}render(){return o`
      <div class="stop">

      <sp-icons-medium></sp-icons-medium>

      <!-- <sp-action-menu label="More Actions">
        <sp-menu-item
          href="https://git.corp.adobe.com/pages/CARGO/Prototype/authoring/?id=${this.id}&action=remix"
        >
          <sp-icon-edit></sp-icon-edit>
          Copy and edit
        </sp-menu-item>
        <sp-menu-item
          href="https://git.corp.adobe.com/pages/CARGO/Prototype/authoring/?id=${this.id}"
        >
          <sp-icon-edit></sp-icon-edit>
          Edit original
        </sp-menu-item>
        <sp-menu-item @click=${this.delete}>
          <sp-icon-delete></sp-icon-delete>
          Delete
        </sp-menu-item>
      </sp-action-menu> -->
  </div>
    `}static get styles(){return x`
      
      :host {
        pointer-events: none;
      }
      .stop {
      pointer-events: inherit;
      }
    `}}customElements.define("kit-menu",v);var w=Object.defineProperty,K=Object.getOwnPropertyDescriptor,h=(c,e,t,i)=>{for(var s=i>1?void 0:i?K(e,t):e,a=c.length-1,d;a>=0;a--)(d=c[a])&&(s=(i?d(e,t,s):d(s))||s);return i&&s&&w(e,t,s),s};const I=window.location.href.includes("localhost")?"http://localhost:3000":"https://git.corp.adobe.com/pages/CARGO/Prototype/authoring",k="https://git.corp.adobe.com/pages/CARGO/Prototype/reuse";class p extends g{constructor(){super(...arguments),this.id="",this.cargoKitMetadata={},this.cargoKitIndexModel={},this.isPendingDelete=!1}async delete(){this.isPendingDelete=!0,await this.cargoKitIndexModel.delete(this.id)}get tagsHTML(){return this.cargoKitMetadata.tags.length===0?o`- no tags -`:this.cargoKitMetadata.tags.map(e=>o` <span>${e}</span> `)}selectKit(e){let t=new CustomEvent("open-pack",{detail:{message:{id:this.id}},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){const{created:e,modified:t,extraThumbnails:i=[]}=this.cargoKitMetadata;return o`
      <!-- <a href="reuse.html?id=${this.id}"> -->
      
      <div  @click=${this.selectKit} class="card ${this.isPendingDelete?"disabled":""}">
        
      <div
          class="thumbnail"
          style="background-image: url('${m}/image/${this.cargoKitMetadata.thumbnail.replace(".png","_sm.png")}');"
        >
       <div class="thumbs">
        ${i[0]?o`<div class="extra-thumbnail" style="background-image:url('${i[0].replace(".png","_sm.png")}?redir=1')"></div>`:void 0}
        
        ${i[1]?o`<div class="extra-thumbnail" style="background-image:url('${i[1].replace(".png","_sm.png")}?redir=1')"></div>`:void 0}
        
          <!-- ${i[2]?o`<div class="extra-thumbnail" style="background-image:url('${i[2].replace(".png","_sm.png")}?redir=1')"></div>`:void 0}
          -->
        </div>
        
        
        </div>
        
        <div class="kit-info">
          <div class="title">${this.cargoKitMetadata.name}</div>
        
        
        <div class="author">${this.cargoKitMetadata.author}</div>
        </div>
        

        <!-- <sp-button-group>
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
            @click=${()=>window.open(`${I}/?id=${this.id}`)}
            >Edit</sp-button
          >
          <sp-button
            size="s"
            variant="secondary"
            @click=${()=>window.open(`${k}/?kit=${this.id}`)}
            >Use</sp-button
          >
        </sp-button-group> -->
        <!-- <div class="controls">
          <div class="stop">
              <kit-menu .id=${this.id}></kit-menu>
          </div>
        </div> -->
        ${this.cargoKitMetadata.tool&&this.cargoKitMetadata.tool.toLowerCase()==="web"||this.cargoKitMetadata.tool.toLowerCase()==="ccx"||!this.cargoKitMetadata.tool?o`<div class="toolIcon">
                          <img src="files/logo@2x.png" />
                        </div>`:void 0}
                    ${this.cargoKitMetadata.tool&&this.cargoKitMetadata.tool.toLowerCase()==="ps"?o`<div class="toolIcon">
                          <img src="files/icon_ps@2x.png" />
                        </div>`:void 0}
                    ${this.cargoKitMetadata.tool&&this.cargoKitMetadata.tool.toLowerCase()==="sd"?o`<div class="toolIcon">
                          <img src="files/icon_sd@2x.png" />
                        </div>`:void 0}
                    ${this.cargoKitMetadata.tool&&this.cargoKitMetadata.tool.toLowerCase()==="fresco"||this.cargoKitMetadata.tool.toLowerCase()==="fr"?o`<div class="toolIcon">
                          <img src="files/icon_fr@2x.png" />
                        </div>`:void 0}
      </div>
      <!-- </a> -->
    `}}p.styles=x`
    :host {
   
        height: 185px;
        background-size: cover;
        border-radius: 16px;
        width:256px;
       
        box-sizing:border-box;
        //margin-right: 20px;
        margin-bottom: 24px;
        overflow: hidden;
        position: relative;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
        background-color:#FFFFFF;
  
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
        border-radius: 4px;
        opacity: 0;
        border: 2px solid rgba(0, 0, 0, 0);
        transition: all 125ms ease-in-out;
        transition-delay: 100ms;
      
        z-index:1000;
      }
      .card:hover .controls {
        opacity: 1;
        transition: all 125ms ease-in-out;
        transition-delay: 100ms;
        border: 2px solid white;
        transition-delay: 100ms;
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
        position:absolute;
        width:22px;
        height:22px;
        left:16px;
        top:76px;
    }
    .toolIcon img {
        width:100%;
    }
    .author {
      font-size: 12px;
      font-weight: 300;
      margin-top: 5px;
      color: black;
      font-family:adobe-clean;
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
        border-radius: 4px;
      
        border: 2px solid rgba(0, 0, 0, 0);
        transition: all 125ms ease-in-out;
        transition-delay: 100ms;
      }
  `;h([r({type:String})],p.prototype,"id",2);h([r({type:Object})],p.prototype,"cargoKitMetadata",2);h([r({type:Object})],p.prototype,"cargoKitIndexModel",2);h([r({type:Boolean})],p.prototype,"isPendingDelete",2);customElements.define("kit-index-item",p);var $=Object.defineProperty,O=Object.getOwnPropertyDescriptor,l=(c,e,t,i)=>{for(var s=i>1?void 0:i?O(e,t):e,a=c.length-1,d;a>=0;a--)(d=c[a])&&(s=(i?d(e,t,s):d(s))||s);return i&&s&&$(e,t,s),s};class n extends g{constructor(){super(),this.cargoKitIndexModel={},this.cargoKitIndex={},this.substanceEffectIndexModel={},this.substanceEffectIndex={},this.kitSortByKey="modified",this.kitFilterByKey="none",this.effectSortByKey="modified",this.effectFilterByKey="none",this.selectedId="",this.search="",this.filterOpen=!1,this.filterList="",this.figmaSelected="",this.filterArray=[],this.orderedListOfKitIds=[],this.orderedListOfEffectIds=[],this.filteredListOfKitIds=[],this.filteredListOfEffectIds=[],this.existingKitTags=[],this.existingKitAuthors=[],this.existingEffectTags=[],this.existingEffectAuthors=[],this.addEventListener("close-modal",this._close),this.addEventListener("open-pack",this._open),this.cargoKitIndexModel=new b(this.handleNewKitIndexState.bind(this)),this.substanceEffectIndexModel=new y(this.handleNewEffectIndexState.bind(this))}_close(){this.selectedId=""}_open(e){e.sto,this.selectedId=e.detail.message.id}kitSortListFn(e,t){const{items:i}=this.cargoKitIndex,s=i[e],a=i[t],d=s[this.kitSortByKey],f=a[this.kitSortByKey];return d<f?1:-1}effectSortListFn(e,t){const{items:i}=this.substanceEffectIndex,s=i[e],a=i[t],d=s[this.effectSortByKey],f=a[this.effectSortByKey];return d<f?1:-1}getFilteredListOfKitIds(e=[],t=""){return this.filterArray.length===0&&this.search==""?[...e]:(t.split(":_:"),e.filter(i=>{const s=this.cargoKitIndex.items[i];return this.search!==""&&this.filterArray.length?!!(s.name.toLowerCase().includes(this.search.toLocaleLowerCase())&&s.tags.some(a=>this.filterArray.indexOf(a)>=0)):this.search&&!this.filterArray.length?!!s.name.toLowerCase().includes(this.search.toLocaleLowerCase()):!this.search&&this.filterArray.length?!!s.tags.some(a=>this.filterArray.indexOf(a)>=0):!0}))}getFilteredListOfEffectIds(e=[],t=""){if(t==="none")return[...e];const[i,s]=t.split(":_:");return e.filter(a=>{const d=this.substanceEffectIndex.items[a];return i==="tag"?d.tags.indexOf(s)>=0:i==="author"?d.author===s:!1})}willUpdate(e){if(e.has("cargoKitIndex")&&this.cargoKitIndex.items&&(this.existingKitTags=[...new Set(Object.values(this.cargoKitIndex.items).reduce((t,i)=>t.concat(i.tags),[]))],this.existingKitAuthors=[...new Set(Object.values(this.cargoKitIndex.items).map(t=>t.author))]),e.has("cargoKitIndex")||e.has("kitSortByKey")||e.has("search")){let t=[],i={};this.cargoKitIndex&&this.cargoKitIndex.items&&(i=this.cargoKitIndex.items,t=Object.keys(i),t.sort(this.kitSortListFn.bind(this)),this.orderedListOfKitIds=t,this.filteredListOfKitIds=this.getFilteredListOfKitIds(this.orderedListOfKitIds,this.kitFilterByKey))}if(e.has("filterArray")&&(this.filteredListOfKitIds=this.getFilteredListOfKitIds(this.orderedListOfKitIds,this.kitFilterByKey)),e.has("substanceEffectIndex")&&this.substanceEffectIndex.items&&(this.existingEffectTags=[...new Set(Object.values(this.substanceEffectIndex.items).reduce((t,i)=>t.concat(i.tags),[]))],this.existingEffectAuthors=[...new Set(Object.values(this.substanceEffectIndex.items).map(t=>t.author))]),e.has("substanceEffectIndex")||e.has("effectSortByKey")){let t=[],i={};this.substanceEffectIndex&&this.substanceEffectIndex.items&&(i=this.substanceEffectIndex.items,t=Object.keys(i),t.sort(this.effectSortListFn.bind(this)),this.orderedListOfEffectIds=t,this.filteredListOfEffectIds=this.getFilteredListOfEffectIds(this.orderedListOfEffectIds,this.effectFilterByKey))}e.has("effectFilterByKey")&&(this.filteredListOfEffectIds=this.getFilteredListOfEffectIds(this.orderedListOfEffectIds,this.effectFilterByKey))}connectedCallback(){super.connectedCallback(),window.onmessage=e=>{let t=e.data.pluginMessage;this.figmaSelected}}handleNewKitIndexState(e){this.cargoKitIndex=e}handleNewEffectIndexState(e){this.substanceEffectIndex=e}handleKitSortChange(e){this.kitSortByKey=e.srcElement.value}handleKitFilterChange(e){this.kitFilterByKey=e.srcElement.value}get tagsFilterMenuItemsHTML(){return this.existingKitTags.map(e=>o`
        <sp-menu-item value="tag:_:${e}">${e}</sp-menu-item>
      `)}selectTag(e){}get authorsFilterMenuItemsHTML(){return this.existingKitAuthors.map(e=>e?o`
            <sp-menu-item value="author:_:${e}">${e}</sp-menu-item>
          `:o``)}setSearch(e){this.search=e.target.value}setFilter(e){const t=e.target;let i=[...this.filterArray];this.filterOpen=!1,i.push(t.value.slice(6)),this.filterArray=[...i]}deleteTag(e){let t=[...this.filterArray];var i=t.indexOf(e);i>-1&&t.splice(i,1),this.filterArray=[...t]}selectKit(e){let t=new CustomEvent("open-pack",{detail:{message:{id:this.id}},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return o`
     

        <div class="container ${this.selectedId?"fixed":void 0}">
          ${this.selectedId?o`
          <div class="screen"></div>
          <reuse-index .id=${this.selectedId}></reuse-index>
          `:void 0}
         
        <!-- header -->
        <div class="fixed_header">
        <!-- <header>
       
          <div class="header-icon">
            <img src="files/icon_app.png"/>
          </div>
          <div class="header-title">Packs</div>
   
        </header> -->
        <div class="search_header">
          <!-- <img class="filter" src="files/icon_filter.png"/> -->
          <div class="search_container">
            <img class="search_icon" src="files/icon_search.png"/>
            <input type="text"
                class="search"
                id="name-1"
                placeholder="Search"
                value=${this.search}
                @keyup = ${this.setSearch}
            />
            <div class="picker" @click=${()=>this.filterOpen=!this.filterOpen}><img src="files/icon_picker.png"/></div>
            
          </div>
          
        </div>
        <div class="popover ${this.filterOpen?"open":"closed"}">
 
        <sp-theme scale="medium" color="light">
          <sp-menu style="width:100%"  @change=${e=>{this.setFilter(e)}}>
          ${this.tagsFilterMenuItemsHTML}
          </sp-menu>
        </sp-theme>
      
        </div>
          <div>
            <div class="filter-list">
            ${this.filterArray.map((e,t)=>o`
                  <div class="filter-tag" @click=${()=>this.deleteTag(e)}>${e} <img src="files/icon-tag-close.png"/></div>
                `)}
            </div>
          </div>
        <div class="controls">
            
        <!-- <sp-picker
                value=${this.kitFilterByKey}
                @change=${this.handleKitFilterChange}
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
              </sp-picker> -->
              <!-- <sp-picker
                value=${this.kitSortByKey}
                @change=${this.handleKitSortChange}
                id="picker-m"
                size="m"
                label="Sort by..."
              >
                <sp-menu-item value="created">Date Created</sp-menu-item>
                <sp-menu-item value="modified">Date Modified</sp-menu-item>
              </sp-picker> -->
              
            </div>
            </div>
              <div class="kit-items ${this.filterArray.length?"filtered":""} " >
              ${u(this.filteredListOfKitIds,e=>e,e=>o`
             
              <kit-index-item
                  
                  id=${e}
                  .cargoKitMetadata=${this.cargoKitIndex.items[e]}
                  .cargoKitIndexModel=${this.cargoKitIndexModel}
                ></kit-index-item>
             
              `)}
          
        </div>
      
    `}}n.styles=x`
    :host {
      position: relative;
      display: block;
      margin: 0 0px;
    }
    .popover {
      height:168px;
      position:absolute;
      background:white;
      border-radius: 8px;
      box-shadow: 1px 0px 4px 0px rgba(0, 0, 0, 0.1);
      width:256px;
      left:16px;
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
      pointer-events:all;
    }
    .filter-list {
      display:flex;
      flex-direction:row;
      margin-left:24px;
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
    }
    .filter-tag:hover {
      background-color: #D5D5D5;
      border-color: #B1B1B1;
    }
    .fixed_header {
      position:fixed;
      top:0;
      left:0;
      right:0;
      z-index:10;
      background:white;
      max-width:304px;
    }
    .container {
      background-color: white;
      max-width:304px;
     // border:10px solid green;
     display:flex;
     flex-direction:column;
     overflow-y:scroll;
     height:100vh;
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
      margin-left:24px;
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
      
      
      padding-left:24px;
      padding-right:24px;
      box-sizing: border-box;
      margin-top:100px;
      align-items:center;
    }
    .kit-items.filtered {
      margin-top:140px;
    }

    @media only screen and (min-width: 768px) {
     
     
      header {
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


    /* .kit-items {
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
  }
  `;l([r({type:Object})],n.prototype,"cargoKitIndexModel",2);l([r({type:Object})],n.prototype,"cargoKitIndex",2);l([r({type:Object})],n.prototype,"substanceEffectIndexModel",2);l([r({type:Object})],n.prototype,"substanceEffectIndex",2);l([r({type:String})],n.prototype,"kitSortByKey",2);l([r({type:String})],n.prototype,"kitFilterByKey",2);l([r({type:String})],n.prototype,"effectSortByKey",2);l([r({type:String})],n.prototype,"effectFilterByKey",2);l([r({type:String})],n.prototype,"selectedId",2);l([r({type:String})],n.prototype,"search",2);l([r({type:Boolean})],n.prototype,"filterOpen",2);l([r({type:String})],n.prototype,"filterList",2);l([r({type:String})],n.prototype,"figmaSelected",2);l([r({type:Array})],n.prototype,"filterArray",2);customElements.define("dashboard-index",n);
