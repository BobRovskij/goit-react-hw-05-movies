"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{1891:function(t,e,r){var n=r(5861),a=r(7757),c=r.n(a),u=r(3263),s="https://api.themoviedb.org/3",i="260fc58ea6000c815fd7f586919a4c2b",o="/trending/movie/day",p="/movie",f="/credits",h="/reviews",l="/search/movie";function m(){return(m=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e="".concat(s).concat(o,"?api_key=").concat(i),t.next=4,u.Z.get(e);case 4:if(!(r=t.sent)){t.next=7;break}return t.abrupt("return",r.data.results);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(s).concat(p,"/").concat(e,"?api_key=").concat(i),t.next=4,u.Z.get(r);case 4:if(!(n=t.sent)){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(s).concat(p,"/").concat(e).concat(f,"?api_key=").concat(i),t.next=4,u.Z.get(r);case 4:if(!(n=t.sent)){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function _(){return(_=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(s).concat(p,"/").concat(e).concat(h,"?api_key=").concat(i),t.next=4,u.Z.get(r);case 4:if(!(n=t.sent)){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(s).concat(l,"?api_key=").concat(i,"&query=").concat(e),t.next=4,u.Z.get(r);case 4:if(!(n=t.sent)){t.next=7;break}return t.abrupt("return",n.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops! Something went wrong...")));case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}var g={fetchTrending:function(){return m.apply(this,arguments)},fetchMovieDetails:function(t){return v.apply(this,arguments)},fetchCast:function(t){return d.apply(this,arguments)},fetchReviews:function(t){return _.apply(this,arguments)},searchMovies:function(t){return w.apply(this,arguments)}};e.Z=g},5282:function(t,e,r){r.d(e,{Z:function(){return p}});var n=r(1087),a=r(7689),c=r(7692),u="ListItem_item__3+qKK",s="ListItem_icon__dP-8S",i="ListItem_link__twHxh",o=r(184),p=function(t){var e=t.name,r=t.id,p=(0,a.TH)();return(0,o.jsxs)("li",{className:u,children:[(0,o.jsx)(c.slP,{className:s}),(0,o.jsx)(n.rU,{to:"/movies/".concat(r),state:{from:p},className:i,children:e})]})}},4936:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(9439),a=r(2791),c=r(7596),u=r(6673),s=r(1891),i=r(5282),o="Home_trending__Oyzul",p="Home_trending__header__rw9hG",f="Home_trending__list__PrLYE",h=r(184),l=function(){var t=(0,a.useState)(null),e=(0,n.Z)(t,2),r=e[0],l=e[1],m=(0,a.useState)(!1),v=(0,n.Z)(m,2),d=v[0],_=v[1];return(0,a.useEffect)((function(){_(!0),s.Z.fetchTrending().then((function(t){return l(t)})).catch((function(t){return c.Am.error("".concat(t.message))})).finally((function(){_(!1)}))}),[]),(0,h.jsxs)("section",{className:o,children:[(0,h.jsx)("h2",{className:p,children:"Trending today"}),(0,h.jsxs)("ul",{className:f,children:[r&&r.map((function(t){return(0,h.jsx)(i.Z,{name:t.title,id:t.id},t.id)})),d&&(0,h.jsx)(u.a,{})]})]})}}}]);
//# sourceMappingURL=936.b7affd5e.chunk.js.map