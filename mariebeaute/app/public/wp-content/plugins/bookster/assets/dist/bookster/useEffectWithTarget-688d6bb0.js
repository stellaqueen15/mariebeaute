import{r}from"./prefetch.helper-4a4e89e7.js";import{i as n,c as e}from"./index-f9ec547e.js";function t(r,n){if(r===n)return!0;for(var e=0;e<r.length;e++)if(!Object.is(r[e],n[e]))return!1;return!0}const u=!("undefined"==typeof window||!window.document||!window.document.createElement);function c(r,e){if(u)return r?n(r)?r():"current"in r?r.current:r:e}const i=function(n){return function(u,i,o){var f=r.useRef(!1),s=r.useRef([]),a=r.useRef([]),l=r.useRef();n((function(){var r,n=(Array.isArray(o)?o:[o]).map((function(r){return c(r)}));if(!f.current)return f.current=!0,s.current=n,a.current=i,void(l.current=u());n.length===s.current.length&&t(n,s.current)&&t(i,a.current)||(null===(r=l.current)||void 0===r||r.call(l),s.current=n,a.current=i,l.current=u())})),e((function(){var r;null===(r=l.current)||void 0===r||r.call(l),f.current=!1}))}},o=i(r.useEffect);export{i as c,c as g,u as i,o as u};