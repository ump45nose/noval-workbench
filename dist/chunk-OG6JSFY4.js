var l={enabled:!1,limit:10,quiet:!1};function r(e,t,i){if(!t?.enabled||i==="quiet"&&!t.quiet)return;let n=Math.max(1,Math.floor(t.limit));e.length>n&&e.splice(0,e.length-n)}function m(e,t){if(!t?.enabled)return-1;let i=e.filter(o=>!o.hidden),n=Math.max(1,Math.floor(t.limit));return i.length>n?i[i.length-n].id:-1}export{l as a,r as b,m as c};
//# sourceMappingURL=chunk-OG6JSFY4.js.map
