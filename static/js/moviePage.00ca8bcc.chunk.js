(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{52:function(t,e,n){"use strict";n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return b})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return j}));var r=n(55),a=n.n(r),c=n(56),u=n(57),s=n.n(u),i="22c199c70cf21c77ac06b5d74d444545",o="en-US";function p(){return p=Object(c.a)(a.a.mark((function t(){var e,n,r=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,s.a.get("trending/movie/day?api_key=".concat(i,"&language=").concat(o,"&page=").concat(e));case 3:return n=t.sent,t.next=6,n.data;case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}s.a.defaults.baseURL="https://api.themoviedb.org/3/";var f=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("search/movie?api_key=".concat(i,"&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.a=function(){return p.apply(this,arguments)}},58:function(t,e,n){"use strict";var r=n(12),a=n(59),c=n.n(a),u=n(4),s=n(2);e.a=function(t){var e=t.movies,n=Object(u.h)();return Object(s.jsx)("ul",{className:c.a.list,children:e.map((function(t){return Object(s.jsx)("li",{className:c.a.item,children:Object(s.jsx)(r.b,{to:{pathname:"/movies/".concat(t.id),state:{from:"/"!==n.pathname?n.pathname+n.search:n.pathname}},children:Object(s.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.poster_path),alt:"".concat(t.title),width:"200"})})},t.id)}))})}},59:function(t,e,n){t.exports={list:"MoviesList_list__1MFTm",item:"MoviesList_item__3K03u"}},93:function(t,e,n){"use strict";n.r(e);var r=n(5);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n(11),s=n(0),i=n(4),o=n(52),p=n(58),f=n(68),b=n(2);e.default=function(){var t=Object(s.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(s.useState)([]),h=Object(u.a)(a,2),j=h[0],l=h[1],O=Object(i.g)(),v=Object(i.h)();return Object(s.useEffect)((function(){console.log(),""!==v.search&&(Object(o.c)(v.search.split("=")[1]).then((function(t){return l(t)})),r(v.search.split("=")[1]))}),[v]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),Object(o.c)(n).then((function(t){return l(t)})),O.push(c(c({},v),{},{search:"query=".concat(n)}))},children:[Object(b.jsx)("input",{name:"query",value:n,onChange:function(t){r(t.currentTarget.value)}}),Object(b.jsxs)("button",{type:"submit",children:[Object(b.jsx)("span",{children:Object(b.jsx)(f.b,{size:17})}),"Search"]})]}),Object(b.jsx)(p.a,{movies:j})]})}}}]);
//# sourceMappingURL=moviePage.00ca8bcc.chunk.js.map