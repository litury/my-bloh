/* empty css                */import{a as m,o as n,b as i,e,c as v,A as p,f as _,u as a,b6 as l,X as h,y as B,F as k,aT as y,h as L,aM as $,aJ as w,i as R,bt as T,k as V}from"./entry.0671c314.js";import q from"./ContentRenderer.9e918135.js";import{A as D,b as F}from"./index.807a28fb.js";import{u as P,q as g}from"./query.ae0640f1.js";import"./ContentRendererMarkdown.c0b6439b.js";import"./index.a6ef77ff.js";import"./_commonjsHelpers.edff4021.js";import"./utils.3482e47d.js";const z={class:"prev-next-cont"},E={class:"link-item prev"},H={class:"link-item next"},J={__name:"PrevNext",props:["prev","next"],setup(s){return(o,r)=>{const c=B;return n(),i("ul",z,[e("li",E,[s.prev?(n(),v(c,{key:0,to:s.prev._path},{default:p(()=>[_(a(D),{class:"icon stroke"}),e("span",null,l(s.prev.title),1)]),_:1},8,["to"])):h("",!0)]),e("li",H,[s.next?(n(),v(c,{key:0,to:s.next._path},{default:p(()=>[e("span",null,l(s.next.title),1),_(a(F),{class:"icon stroke"})]),_:1},8,["to"])):h("",!0)])])}}},M=m(J,[["__scopeId","data-v-d0a3ca63"]]),O=s=>($("data-v-b6a04191"),s=s(),w(),s),X={class:"toc"},j=O(()=>e("header",{class:"toc-header"},[e("h3",{class:"text-xl font-bold"},"Оглавление")],-1)),G={class:"toc-links"},K=["href"],Q={__name:"Toc",props:["links"],setup(s){const o=r=>r.map(t=>{let d=[t];if(t.children){let u=o(t.children);d=[t,...u]}return d}).flat(1);return(r,c)=>(n(),i("nav",X,[j,e("ul",G,[(n(!0),i(k,null,y(o(s.links),t=>(n(),i("li",{key:t.id,class:L(`toc-link _${t.depth}`)},[e("a",{href:`#${t.id}`},l(t.text),9,K)],2))),128))])]))}},U=m(Q,[["__scopeId","data-v-b6a04191"]]);const b=s=>($("data-v-ee86ec6f"),s=s(),w(),s),W={id:"main",class:"article-main"},Y={key:0,class:"article-header"},Z={class:"img-cont h-72 mb-12"},tt=["src","alt"],et={class:"heading"},st={class:"supporting"},at={class:"article-tags"},nt=b(()=>e("hr",null,null,-1)),ot={class:"article-section"},ct={class:"aside"},it={class:"article"},rt=b(()=>e("p",null,"No content found.",-1)),lt={__name:"[...slug]",async setup(s){let o,r;const{path:c}=R(),{data:t}=([o,r]=T(async()=>P(`content-${c}`,async()=>{let f=g().where({_path:c}).findOne(),x=g().only(["_path","title","description"]).sort({date:1}).findSurround(c);return{article:await f,surround:await x}})),o=await o,r(),o),[d,u]=t.value.surround;return V({title:t.value.article.title,meta:[{name:"description",content:t.value.article.description},{hid:"og:image",property:"og:image",content:`https://site.com/${t.value.article.img}`}]}),(f,x)=>{const I=U,N=q,A=M;return n(),i("main",W,[a(t).article?(n(),i("header",Y,[e("div",Z,[e("img",{src:`/${a(t).article.img}`,alt:a(t).article.title,class:"rounded-2xl"},null,8,tt)]),e("h1",et,l(a(t).article.title),1),e("p",st,l(a(t).article.description),1),e("ul",at,[(n(!0),i(k,null,y(a(t).article.tags,(C,S)=>(n(),i("li",{class:"tag",key:S},l(C),1))),128))])])):h("",!0),nt,e("section",ot,[e("aside",ct,[_(I,{links:a(t).article.body.toc.links},null,8,["links"])]),e("article",it,[_(N,{value:a(t).article},{empty:p(()=>[rt]),_:1},8,["value"])])]),_(A,{prev:a(d),next:a(u)},null,8,["prev","next"])])}}},gt=m(lt,[["__scopeId","data-v-ee86ec6f"]]);export{gt as default};
