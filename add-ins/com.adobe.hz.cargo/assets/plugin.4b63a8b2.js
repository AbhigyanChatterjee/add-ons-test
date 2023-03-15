import"./text-aspect-ratio.758caee0.js";import{s as l,$ as d,b as p}from"./vendor.20676418.js";import{D as c}from"./renderer-artboard.4485a40b.js";import"./pixi.6a033cab.js";var m=Object.defineProperty,u=Object.getOwnPropertyDescriptor,n=(a,e,i,r)=>{for(var t=r>1?void 0:r?u(e,i):e,o=a.length-1,h;o>=0;o--)(h=a[o])&&(t=(r?h(e,i,t):h(t))||t);return r&&t&&m(e,i,t),t};class s extends l{constructor(){super(),this.stringifiedDocumentState="",this.rootId="",this.width=600,this.height=600,this.displayGraphController=new c}render(){if(!this.stringifiedDocumentState)return d``;const e=this.displayGraphController.generateDisplayGraphFromStringifiedState(this.stringifiedDocumentState),i=e.nodes[this.rootId],{width:r,height:t}=i,o=Math.min(this.height/t,this.width/r);return d`
      <renderer-artboard
        .displayGraph=${e}
        .id=${this.rootId}
        .scale=${o}
      ></renderer-artboard>
    `}}n([p({type:String})],s.prototype,"stringifiedDocumentState",2);n([p({type:String})],s.prototype,"rootId",2);n([p({type:Number})],s.prototype,"width",2);n([p({type:Number})],s.prototype,"height",2);customElements.define("pack-plugin",s);
