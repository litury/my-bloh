import{a as h,aQ as v,bt as y,o as u,b as f,e as c,f as m,u as _,F as w,aT as T,A as C,a3 as I,b6 as S,h as g,y as k,aM as N,aJ as A}from"./entry.0671c314.js";import{u as B,q as V}from"./query.ae0640f1.js";import{T as q}from"./index.807a28fb.js";/* empty css                 */const D=a=>(N("data-v-51780f7e"),a=a(),A(),a),E=D(()=>c("span",null,"Теги",-1)),F={__name:"Tags",async setup(a){let e,i;const s=v(!1),p=(l,r)=>{console.log(l);let o=l.map(t=>{let n=t;return t[r]&&(n=p(t[r])),n}).flat(1);return console.log({_tags:o}),o},x=()=>{s.value=!s.value},{data:b}=([e,i]=y(()=>B("tags",()=>V("blog").only(["tags"]).find())),e=await e,i(),e),d=[...new Set(p(b.value,"tags"))];return console.log({articleTags:d}),(l,r)=>{const o=k;return u(),f("div",{class:g(["tag-list",{active:_(s)}])},[c("button",{onClick:x,class:"cta w-icon"},[m(_(q),{class:"icon solid"}),E]),c("ul",{class:g(["article-tags",{expanded:_(s)}])},[(u(),f(w,null,T(d,(t,n)=>c("li",{key:n,class:"tag"},[m(o,{to:`/blog/tags/${t}`,class:"font-semibold"},{default:C(()=>[I(S(t),1)]),_:2},1032,["to"])])),64))],2)],2)}}},Q=h(F,[["__scopeId","data-v-51780f7e"]]);export{Q as _};
