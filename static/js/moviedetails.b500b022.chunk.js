(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{52:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return b}));var a=n(55),c=n.n(a),r=n(56),i=n(57),s=n.n(i),u="22c199c70cf21c77ac06b5d74d444545",o="en-US";function p(){return p=Object(r.a)(c.a.mark((function e(){var t,n,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,s.a.get("trending/movie/day?api_key=".concat(u,"&language=").concat(o,"&page=").concat(t));case 3:return n=e.sent,e.next=6,n.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}s.a.defaults.baseURL="https://api.themoviedb.org/3/";var d=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("movie/".concat(t,"?api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("search/movie?api_key=".concat(u,"&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(){return p.apply(this,arguments)}},92:function(e,t,n){"use strict";n.r(t);var a=n(11),c=n(0),r=n(4),i=n(12),s=n(68),u=n(52),o=n(15),p=n.n(o),d=n(2),v=Object(c.lazy)((function(){return n.e(2).then(n.bind(null,88))})),l=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,90))}));t.default=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],b=Object(r.i)(),j=Object(r.g)(),f=Object(r.h)();return Object(c.useEffect)((function(){Object(u.d)(b.movieId).then((function(e){return o(e)}))}),[b.movieId]),null===n?Object(d.jsx)("h1",{children:"\u0414\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0444\u0438\u043b\u044c\u043c\u0443 \u043d\u0435\u0442"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("button",{type:"button",onClick:function(){var e;j.push(null===f||void 0===f||null===(e=f.state)||void 0===e?void 0:e.from)},children:[Object(d.jsx)("span",{children:Object(d.jsx)(s.a,{size:20})}),"Go back"]}),Object(d.jsx)("h1",{children:n.title}),Object(d.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n.backdrop_path),alt:""}),Object(d.jsx)("p",{children:n.overview}),Object(d.jsx)(i.c,{to:{pathname:"/movies/".concat(b.movieId,"/cast"),state:{from:f.state}},className:p.a.link,activeClassName:p.a.activeLink,children:"Cast"}),Object(d.jsx)(i.c,{to:{pathname:"/movies/".concat(b.movieId,"/reviews"),state:{from:f.state}},className:p.a.link,activeClassName:p.a.activeLink,children:"Reviews"}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("h1",{children:"Loading... Please wait"}),children:Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/movies/".concat(b.movieId,"/cast"),children:Object(d.jsx)(v,{movieId:b.movieId})}),Object(d.jsx)(r.b,{path:"/movies/".concat(b.movieId,"/reviews"),children:Object(d.jsx)(l,{movieId:b.movieId})})]})})]})}}}]);
//# sourceMappingURL=moviedetails.b500b022.chunk.js.map