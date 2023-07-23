import{a0 as r}from"./index.e01e33ca.js";import{w as n}from"./index.77016c14.js";function _(s){const t=s-1;return t*t*t+1}function U(s,{delay:t=0,duration:e=400,easing:i=_,x:f=0,y:p=0,opacity:u=0}={}){const o=getComputedStyle(s),a=+o.opacity,l=o.transform==="none"?"":o.transform,m=a*(1-u),[y,$]=r(f),[b,g]=r(p);return{delay:t,duration:e,easing:i,css:(c,x)=>`
			transform: ${l} translate(${(1-c)*y}${$}, ${(1-c)*b}${g});
			opacity: ${a-m*x}`}}const V={},C=n([]),O=n([]),S=n({});export{C as a,O as b,U as f,V as p,S as t};
