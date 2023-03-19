import"./index-6a732392.js";import{w as n}from"./index-a61c3598.js";function y(o){const t=o-1;return t*t*t+1}function g(o,{delay:t=0,duration:c=400,easing:e=y,x:p=0,y:f=0,opacity:i=0}={}){const s=getComputedStyle(o),a=+s.opacity,m=s.transform==="none"?"":s.transform,u=a*(1-i);return{delay:t,duration:c,easing:e,css:(r,l)=>`
			transform: ${m} translate(${(1-r)*p}px, ${(1-r)*f}px);
			opacity: ${a-u*l}`}}const x={},d=n([]),w=n([]),C=n({});export{d as a,w as b,g as f,x as p,C as t};
