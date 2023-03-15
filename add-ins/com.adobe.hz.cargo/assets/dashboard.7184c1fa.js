import"./text-aspect-ratio.758caee0.js";import{g as u,b as n,s as m,$ as o,B as g}from"./vendor.20676418.js";import"./spectrum.9b2a0672.js";import"./spectrum-theme.c743f101.js";import{A as b,C as x}from"./cargo-kit-index.fa0641a8.js";import{S as y}from"./substance-effect-index.bfcc0bf6.js";var K=Object.defineProperty,I=Object.getOwnPropertyDescriptor,p=(l,t,e,i)=>{for(var s=i>1?void 0:i?I(t,e):t,a=l.length-1,r;a>=0;a--)(r=l[a])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&K(t,e,s),s};const v=window.location.href.includes("localhost")?"http://localhost:3000":"https://git.corp.adobe.com/pages/CARGO/Prototype/authoring",O="https://git.corp.adobe.com/pages/CARGO/Prototype/reuse";class f extends m{constructor(){super(...arguments),this.id="",this.cargoKitMetadata={},this.cargoKitIndexModel={},this.isPendingDelete=!1}async delete(){this.isPendingDelete=!0,await this.cargoKitIndexModel.delete(this.id)}get tagsHTML(){return this.cargoKitMetadata.tags.length===0?o`- no tags -`:this.cargoKitMetadata.tags.map(t=>o` <span>${t}</span> `)}render(){const{created:t,modified:e,extraThumbnails:i=[]}=this.cargoKitMetadata,s=new Date(t),a=new Date(e);return o`
      <div class="card ${this.isPendingDelete?"disabled":""}">
        <div
          class="thumbnail"
          style="background-image: url('${b}/image/${this.cargoKitMetadata.thumbnail}');"
        >
        ${i.map(r=>o`<div class="extra-thumbnail" style="background-image:url('${r}')"></div>`)}
        </div>
        <div>name: ${this.cargoKitMetadata.name}</div>
        <div>author: ${this.cargoKitMetadata.author}</div>
        <div>tool: ${this.cargoKitMetadata.tool}</div>
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
            @click=${()=>window.open(`${v}/?id=${this.id}`)}
            >Edit</sp-button
          >
          <sp-button
            size="s"
            variant="secondary"
            @click=${()=>window.open(`${O}/?kit=${this.id}`)}
            >Use</sp-button
          >
        </sp-button-group>
      </div>
    `}}f.styles=u`
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
  `;p([n({type:String})],f.prototype,"id",2);p([n({type:Object})],f.prototype,"cargoKitMetadata",2);p([n({type:Object})],f.prototype,"cargoKitIndexModel",2);p([n({type:Boolean})],f.prototype,"isPendingDelete",2);customElements.define("kit-index-item",f);var k=Object.defineProperty,E=Object.getOwnPropertyDescriptor,c=(l,t,e,i)=>{for(var s=i>1?void 0:i?E(t,e):t,a=l.length-1,r;a>=0;a--)(r=l[a])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&k(t,e,s),s};class d extends m{constructor(){super(),this.cargoKitIndexModel={},this.cargoKitIndex={},this.substanceEffectIndexModel={},this.substanceEffectIndex={},this.kitSortByKey="modified",this.kitFilterByKey="none",this.effectSortByKey="modified",this.effectFilterByKey="none",this.orderedListOfKitIds=[],this.orderedListOfEffectIds=[],this.filteredListOfKitIds=[],this.filteredListOfEffectIds=[],this.existingKitTags=[],this.existingKitAuthors=[],this.existingEffectTags=[],this.existingEffectAuthors=[],this.cargoKitIndexModel=new x(this.handleNewKitIndexState.bind(this)),this.substanceEffectIndexModel=new y(this.handleNewEffectIndexState.bind(this))}kitSortListFn(t,e){const{items:i}=this.cargoKitIndex,s=i[t],a=i[e],r=s[this.kitSortByKey],h=a[this.kitSortByKey];return r<h?1:-1}effectSortListFn(t,e){const{items:i}=this.substanceEffectIndex,s=i[t],a=i[e],r=s[this.effectSortByKey],h=a[this.effectSortByKey];return r<h?1:-1}getFilteredListOfKitIds(t=[],e=""){if(e==="none")return[...t];const[i,s]=e.split(":_:");return t.filter(a=>{const r=this.cargoKitIndex.items[a];return i==="tag"?r.tags.indexOf(s)>=0:i==="author"?r.author===s:!1})}getFilteredListOfEffectIds(t=[],e=""){if(e==="none")return[...t];const[i,s]=e.split(":_:");return t.filter(a=>{const r=this.substanceEffectIndex.items[a];return i==="tag"?r.tags.indexOf(s)>=0:i==="author"?r.author===s:!1})}willUpdate(t){if(t.has("cargoKitIndex")&&this.cargoKitIndex.items&&(this.existingKitTags=[...new Set(Object.values(this.cargoKitIndex.items).reduce((e,i)=>e.concat(i.tags),[]))],this.existingKitAuthors=[...new Set(Object.values(this.cargoKitIndex.items).map(e=>e.author))]),t.has("cargoKitIndex")||t.has("kitSortByKey")){let e=[],i={};this.cargoKitIndex&&this.cargoKitIndex.items&&(i=this.cargoKitIndex.items,e=Object.keys(i),e.sort(this.kitSortListFn.bind(this)),this.orderedListOfKitIds=e,this.filteredListOfKitIds=this.getFilteredListOfKitIds(this.orderedListOfKitIds,this.kitFilterByKey))}if(t.has("kitFilterByKey")&&(this.filteredListOfKitIds=this.getFilteredListOfKitIds(this.orderedListOfKitIds,this.kitFilterByKey)),t.has("substanceEffectIndex")&&this.substanceEffectIndex.items&&(this.existingEffectTags=[...new Set(Object.values(this.substanceEffectIndex.items).reduce((e,i)=>e.concat(i.tags),[]))],this.existingEffectAuthors=[...new Set(Object.values(this.substanceEffectIndex.items).map(e=>e.author))]),t.has("substanceEffectIndex")||t.has("effectSortByKey")){let e=[],i={};this.substanceEffectIndex&&this.substanceEffectIndex.items&&(i=this.substanceEffectIndex.items,e=Object.keys(i),e.sort(this.effectSortListFn.bind(this)),this.orderedListOfEffectIds=e,this.filteredListOfEffectIds=this.getFilteredListOfEffectIds(this.orderedListOfEffectIds,this.effectFilterByKey))}t.has("effectFilterByKey")&&(this.filteredListOfEffectIds=this.getFilteredListOfEffectIds(this.orderedListOfEffectIds,this.effectFilterByKey))}handleNewKitIndexState(t){this.cargoKitIndex=t}handleNewEffectIndexState(t){this.substanceEffectIndex=t}handleKitSortChange(t){this.kitSortByKey=t.srcElement.value}handleKitFilterChange(t){this.kitFilterByKey=t.srcElement.value}get tagsFilterMenuItemsHTML(){return this.existingKitTags.map(t=>o`
        <sp-menu-item value="tag:_:${t}">${t}</sp-menu-item>
      `)}get authorsFilterMenuItemsHTML(){return this.existingKitAuthors.map(t=>t?o`
            <sp-menu-item value="author:_:${t}">${t}</sp-menu-item>
          `:o``)}render(){return o`
      <sp-theme scale="large" color="light">
        <h1>Cargo Dashboard</h1>
        <sp-tabs selected="1">
          <sp-tab label="Kits" value="1"></sp-tab>
          <sp-tab label="Effects" value="2"></sp-tab>
          <sp-tab-panel value="1">
            <section>
              <sp-picker
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
              </sp-picker>
              <sp-picker
                value=${this.kitSortByKey}
                @change=${this.handleKitSortChange}
                id="picker-m"
                size="m"
                label="Sort by..."
              >
                <sp-menu-item value="created">Date Created</sp-menu-item>
                <sp-menu-item value="modified">Date Modified</sp-menu-item>
              </sp-picker>
              <div class="kit-items">
              ${g(this.filteredListOfKitIds,t=>t,t=>o`
                <kit-index-item
                  id=${t}
                  .cargoKitMetadata=${this.cargoKitIndex.items[t]}
                  .cargoKitIndexModel=${this.cargoKitIndexModel}
                ></kit-index-item>
              `)}
              </div>
            </section>
          </sp-tab-panel>
          <sp-tab-panel value="2">
            <section>
              ${this.filteredListOfEffectIds.map(t=>o`
                  <div>${t} : ${this.substanceEffectIndex.items[t].name}</div>
                `)}
            </section>
          </sp-tab-panel>
        </sp-tabs>
      </sp-theme>
    `}}d.styles=u`
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

    kit-index-item {
    }

    .kit-items {
      clear: left;
    }
  `;c([n({type:Object})],d.prototype,"cargoKitIndexModel",2);c([n({type:Object})],d.prototype,"cargoKitIndex",2);c([n({type:Object})],d.prototype,"substanceEffectIndexModel",2);c([n({type:Object})],d.prototype,"substanceEffectIndex",2);c([n({type:String})],d.prototype,"kitSortByKey",2);c([n({type:String})],d.prototype,"kitFilterByKey",2);c([n({type:String})],d.prototype,"effectSortByKey",2);c([n({type:String})],d.prototype,"effectFilterByKey",2);customElements.define("dashboard-index",d);
