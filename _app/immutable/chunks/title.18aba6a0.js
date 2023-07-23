import{a2 as r}from"./index.90e9d7be.js";import{w as n}from"./index.00188b86.js";function _(s){const t=s-1;return t*t*t+1}function U(s,{delay:t=0,duration:e=400,easing:i=_,x:f=0,y:p=0,opacity:u=0}={}){const o=getComputedStyle(s),a=+o.opacity,l=o.transform==="none"?"":o.transform,m=a*(1-u),[y,$]=r(f),[b,g]=r(p);return{delay:t,duration:e,easing:i,css:(c,x)=>`
			transform: ${l} translate(${(1-c)*y}${$}, ${(1-c)*b}${g});
			opacity: ${a-m*x}`}}const V={},C=n([]),O=n([]),S=n({});export{C as a,O as b,U as f,V as p,S as t};
