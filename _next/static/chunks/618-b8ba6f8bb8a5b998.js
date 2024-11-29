"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[618],{99376:function(e,t,n){var r=n(35475);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},7066:function(e,t,n){let r,o;n.d(t,{v:function(){return _}});var i=n(3078),l=n(53576),s=n(2265),f=n(13223);let a=new WeakMap;function u({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=a.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function c(e){e.forEach(u)}let d=new Set;var g=n(76376),h=n(14438);let p=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),m=()=>({time:0,x:p(),y:p()}),v={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function y(e,t,n,r){let o=n[t],{length:i,position:l}=v[t],s=o.current,f=n.time;o.current=e[`scroll${l}`],o.scrollLength=e[`scroll${i}`]-e[`client${i}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,g.Y)(0,o.scrollLength,o.current);let a=r-f;o.velocity=a>50?0:(0,h.R)(o.current-s,a)}let w=[[0,0],[1,1]],E={start:0,center:.5,end:1};function W(e,t,n=0){let r=0;if(e in E&&(e=E[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let x=[0,0];var L=n(88843),B=n(8913);let b={x:0,y:0};var z=n(45414);let H=new WeakMap,P=new WeakMap,S=new WeakMap,O=e=>e===document.documentElement?window:e;function k(e,{container:t=document.documentElement,...n}={}){let i=S.get(t);i||(i=new Set,S.set(t,i));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{y(e,"x",n,t),y(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=w}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):b,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},a={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let u=!t[i].interpolate,c=r.length;for(let e=0;e<c;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:x,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,E[e]?e:"0"]),W(o[0],n,r)-W(o[1],t)}(r[e],a[l],f[l],s[i]);u||n===t[i].interpolatorOffsets[e]||(u=!0),t[i].offset[e]=n}u&&(t[i].interpolate=(0,L.s)(t[i].offset,(0,B.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,m(),n);if(i.add(l),!H.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(z.frameData.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{z.Wi.read(e,!1,!0),z.Wi.read(n,!1,!0),z.Wi.update(l,!1,!0)};H.set(t,s);let f=O(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&P.set(t,"function"==typeof t?(d.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};d.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{d.delete(t),!d.size&&o&&(o=void 0)}):function(e,t){var n;r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(c));let o=("string"==typeof(n=e)?n=document.querySelectorAll(n):n instanceof Element&&(n=[n]),Array.from(n||[]));return o.forEach(e=>{let n=a.get(e);n||(n=new Set,a.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{o.forEach(e=>{let n=a.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),f.addEventListener("scroll",s,{passive:!0})}let s=H.get(t);return z.Wi.read(s,!1,!0),()=>{var e;(0,z.Pn)(s);let n=S.get(t);if(!n||(n.delete(l),n.size))return;let r=H.get(t);H.delete(t),r&&(O(t).removeEventListener("scroll",r),null===(e=P.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function N(e,t){let n;let r=()=>{let{currentTime:r}=t,o=(null===r?0:r.value)/100;n!==o&&e(o),n=o};return z.Wi.update(r,!0),()=>(0,z.Pn)(r)}var R=n(19163),T=n(44439);let X=new Map;function Y({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),X.has(t)||X.set(t,{});let r=X.get(t);return r[n]||(r[n]=(0,R.t)()?new ScrollTimeline({source:t,axis:n}):function({source:e,container:t,axis:n="y"}){e&&(t=e);let r={value:0},o=k(e=>{r.value=100*e[n].progress},{container:t,axis:n});return{currentTime:r,cancel:o}}({source:t,axis:n})),r[n]}function M(e){return e&&(e.target||e.offset)}var A=n(11534);function C(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let $=()=>({scrollX:(0,i.BX)(0),scrollY:(0,i.BX)(0),scrollXProgress:(0,i.BX)(0),scrollYProgress:(0,i.BX)(0)});function _({container:e,target:t,layoutEffect:n=!0,...r}={}){let o=(0,l.h)($);return(n?A.L:s.useEffect)(()=>(C("target",t),C("container",e),function(e,{axis:t="y",...n}={}){let r={axis:t,...n};return"function"==typeof e?2===e.length||M(r)?k(t=>{e(t[r.axis].progress,t)},r):N(e,Y(r)):function(e,t){if(e.flatten(),M(t))return e.pause(),k(n=>{e.time=e.duration*n[t.axis].progress},t);{let n=Y(t);return e.attachTimeline?e.attachTimeline(n,e=>(e.pause(),N(t=>{e.time=e.duration*t},n))):T.Z}}(e,r)}((e,{x:t,y:n})=>{o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),o}}}]);