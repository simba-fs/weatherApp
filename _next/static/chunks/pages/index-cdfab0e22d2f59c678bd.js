(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7916:function(t,n,e){"use strict";e.d(n,{Z:function(){return r}});var i=e(5893),o=e(2909),a=e(9267),c=e.n(a);function r(t){var n=t.options,e=t.state,a=t.setState,r=t.instanceId;return(0,i.jsx)(o.ZP,{instanceId:r,options:n,onChange:function(t){return t?a(t):null},defaultValue:e,formatGroupLabel:function(t){return(0,i.jsxs)("div",{className:c().groupStyles,children:[(0,i.jsx)("span",{children:t.label}),(0,i.jsx)("span",{className:c().groupBadgeStyles,children:t.options.length})]})},isSearchable:!0})}},5612:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var i=e(4699);function o(t){for(var n="",e=0,o=Object.entries(t);e<o.length;e++){var a=(0,i.Z)(o[e],2),c=a[0],r=a[1];n+="".concat(c,"=").concat(r.toString(),"&")}return n=n.slice(0,-1)}},9142:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return W}});var i=e(5893),o=e(7294),a=e(7916),c=e(7757),r=e.n(c),s=e(2137),m=e(5723),y=e(5612),w=e(5045),u=e.n(w),l=e(4642),d=e.n(l);function h(t){var n=t.temp;return(0,i.jsx)("h1",{className:d().temperature,children:"".concat(Math.round(10*parseFloat(n))/10,"\xb0C")})}var f=e(9802),p=e.n(f);function v(t){var n=t.speed,e=t.direction;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("svg",{className:p().windDir,width:"210",height:"210",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsxs)("g",{children:[(0,i.jsx)("title",{children:"Wind Direction"}),(0,i.jsxs)("g",{transform:"rotate(".concat(e,", 105, 105)"),"stroke-width":"3",id:"svg_5",children:[(0,i.jsx)("ellipse",{"stroke-width":"3",ry:"100",rx:"100",id:"svg_1",cy:"105",cx:"105",fill:"#fff"}),(0,i.jsx)("line",{"stroke-width":"3",id:"svg_2",y2:"169",x2:"105",y1:"41",x1:"105",fill:"none"}),(0,i.jsx)("line",{"stroke-width":"3",id:"svg_3",y2:"71",x2:"135",y1:"41",x1:"105",fill:"none"}),(0,i.jsx)("line",{id:"svg_4",y2:"71",x2:"75",y1:"41",x1:"105","stroke-width":"3",fill:"none"})]})]})}),(0,i.jsx)("h2",{className:p().windSpeed,children:"".concat(n,"m/s")})]})}var x=e(8656),K=e.n(x),S=function(t){return"-99"===t?"\u7121\u8cc7\u6599":t.slice(0,2)+":"+t.slice(2,4)},_=function(t){return"-99"===t?"\u7121\u8cc7\u6599":t+"\xb0C"},j=function(t){return"-99"===t?"\u7121\u8cc7\u6599":100*parseFloat(t)+"%"},N=function(t){return"-99"===t?"\u7121\u8cc7\u6599":t+"hPa"};function b(t){var n=t.humidity,e=t.maxTemp,o=t.maxTempTime,a=t.minTemp,c=t.minTempTime,r=t.pressure;return(0,i.jsxs)("div",{className:K().Info,children:[(0,i.jsx)("h3",{children:"\u6fd5\u5ea6"}),(0,i.jsx)("h3",{children:j(n)}),(0,i.jsx)("h3",{children:"\u672c\u65e5\u6700\u9ad8\u6eab\u5ea6"}),(0,i.jsx)("h3",{children:_(e)}),(0,i.jsx)("h5",{children:S(o)}),(0,i.jsx)("h3",{children:"\u672c\u65e5\u6700\u4f4e\u6eab\u5ea6"}),(0,i.jsx)("h3",{children:_(a)}),(0,i.jsx)("h5",{children:S(c)}),(0,i.jsx)("h3",{children:"\u6c23\u58d3"}),(0,i.jsx)("h3",{children:N(r)})]})}var g=e(9470),T=e.n(g);function D(t){var n=t.weather;return(0,i.jsx)("h1",{className:T().Weather,children:n})}var E="CWB-25BB0BA2-9449-4DD2-82D6-D835F21722EE";function k(t,n){var e=t.weatherElement.find((function(t){return t.elementName==n}));return e?e.elementValue:"-99"}function B(){return(B=(0,s.Z)(r().mark((function t(n){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001",e=(0,y.Z)({Authorization:E,locationName:encodeURI(n)}),t.abrupt("return",fetch("".concat("https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001","?").concat(e)).then((function(t){return t.json()})).then((function(t){return t.records.location[0]})).then((function(t){return{raw:t,formatted:{"\u98a8\u901f":k(t,"WDSD"),"\u98a8\u5411":k(t,"WDIR"),"\u6eab\u5ea6":k(t,"TEMP"),"\u76f8\u5c0d\u6fd5\u5ea6":k(t,"HUMD"),"\u6e2c\u7ad9\u6c23\u58d3":k(t,"PRES"),"\u65e5\u7d2f\u7a4d\u96e8\u91cf":k(t,"24R"),"\u672c\u65e5\u6700\u9ad8\u6eab":k(t,"D_TX"),"\u672c\u65e5\u6700\u9ad8\u6eab\u767c\u751f\u6642\u9593":k(t,"D_TXT"),"\u672c\u65e5\u6700\u4f4e\u6eab":k(t,"D_TN"),"\u672c\u65e5\u6700\u4f4e\u6eab\u767c\u751f\u6642\u9593":k(t,"D_TNT"),"\u5929\u6c23\u72c0\u6cc1":k(t,"Weather")}}})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){var n=t.location,e=(0,m.ZP)("fetch ".concat(n.value),(function(){return function(t){return B.apply(this,arguments)}(n.value)})),o=e.data,a=e.error;return o?a?(0,i.jsxs)("h1",{children:["Error: ",JSON.stringify(a,null,2)]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:u().windAndTemp,children:[(0,i.jsx)(h,{temp:o.formatted.\u6eab\u5ea6}),(0,i.jsx)(v,{speed:o.formatted.\u98a8\u901f,direction:o.formatted.\u98a8\u5411})]}),(0,i.jsx)(b,{humidity:o.formatted.\u76f8\u5c0d\u6fd5\u5ea6,maxTemp:o.formatted.\u672c\u65e5\u6700\u9ad8\u6eab,maxTempTime:o.formatted.\u672c\u65e5\u6700\u9ad8\u6eab\u767c\u751f\u6642\u9593,minTemp:o.formatted.\u672c\u65e5\u6700\u4f4e\u6eab,minTempTime:o.formatted.\u672c\u65e5\u6700\u4f4e\u6eab\u767c\u751f\u6642\u9593,pressure:o.formatted.\u6e2c\u7ad9\u6c23\u58d3}),(0,i.jsx)(D,{weather:o.formatted.\u5929\u6c23\u72c0\u6cc1})]}):(0,i.jsx)("h1",{children:"Loading ..."})}var I=JSON.parse('[{"city":"\u81fa\u5317\u5e02","obversation":[{"name":"\u5927\u5b89\u68ee\u6797","city":"\u81fa\u5317\u5e02","town":"\u5927\u5b89\u5340"},{"name":"\u81fa\u5317","city":"\u81fa\u5317\u5e02","town":"\u4e2d\u6b63\u5340"},{"name":"\u570b\u4e09\u7532005K","city":"\u81fa\u5317\u5e02","town":"\u6587\u5c71\u5340"},{"name":"\u978d\u90e8","city":"\u81fa\u5317\u5e02","town":"\u5317\u6295\u5340"},{"name":"\u7af9\u5b50\u6e56","city":"\u81fa\u5317\u5e02","town":"\u5317\u6295\u5340"},{"name":"\u570b\u4e09S016K","city":"\u81fa\u5317\u5e02","town":"\u5357\u6e2f\u5340"}]},{"city":"\u65b0\u5317\u5e02","obversation":[{"name":"\u570b\u4e09N046K","city":"\u65b0\u5317\u5e02","town":"\u6a39\u6797\u5340"},{"name":"\u570b\u4e00S026K","city":"\u65b0\u5317\u5e02","town":"\u4e09\u91cd\u5340"},{"name":"\u6de1\u6c34","city":"\u65b0\u5317\u5e02","town":"\u6de1\u6c34\u5340"},{"name":"\u677f\u6a4b","city":"\u65b0\u5317\u5e02","town":"\u677f\u6a4b\u5340"},{"name":"\u570b\u4e09S037K","city":"\u65b0\u5317\u5e02","town":"\u571f\u57ce\u5340"},{"name":"\u570b\u4e00N013K","city":"\u65b0\u5317\u5e02","town":"\u6c50\u6b62\u5340"},{"name":"\u570b\u4e09S054K","city":"\u65b0\u5317\u5e02","town":"\u9daf\u6b4c\u5340"},{"name":"\u570b\u4e09S010K","city":"\u65b0\u5317\u5e02","town":"\u6c50\u6b62\u5340"},{"name":"\u570b\u4e09S042K","city":"\u65b0\u5317\u5e02","town":"\u571f\u57ce\u5340"},{"name":"\u65b0\u5e97","city":"\u65b0\u5317\u5e02","town":"\u65b0\u5e97\u5340"}]},{"city":"\u5b9c\u862d\u7e23","obversation":[{"name":"\u8607\u6fb3","city":"\u5b9c\u862d\u7e23","town":"\u8607\u6fb3\u93ae"},{"name":"\u5b9c\u862d","city":"\u5b9c\u862d\u7e23","town":"\u5b9c\u862d\u5e02"}]},{"city":"\u6843\u5712\u5e02","obversation":[{"name":"\u65b0\u5c4b","city":"\u6843\u5712\u5e02","town":"\u65b0\u5c4b\u5340"},{"name":"\u570b\u4e09N063K","city":"\u6843\u5712\u5e02","town":"\u5927\u6eaa\u5340"},{"name":"\u62c9\u62c9\u5c71","city":"\u6843\u5712\u5e02","town":"\u5fa9\u8208\u5340"},{"name":"\u570b\u4e00S072K","city":"\u6843\u5712\u5e02","town":"\u694a\u6885\u5340"},{"name":"\u570b\u4e8cE009K","city":"\u6843\u5712\u5e02","town":"\u6843\u5712\u5340"}]},{"city":"\u65b0\u7af9\u5e02","obversation":[{"name":"\u570b\u4e00N094K","city":"\u65b0\u7af9\u5e02","town":"\u6771\u5340"},{"name":"\u570b\u4e09S103K","city":"\u65b0\u7af9\u5e02","town":"\u6771\u5340"}]},{"city":"\u65b0\u7af9\u7e23","obversation":[{"name":"\u570b\u4e00S105K","city":"\u65b0\u7af9\u7e23","town":"\u5bf6\u5c71\u9109"},{"name":"\u570b\u4e09N085K","city":"\u65b0\u7af9\u7e23","town":"\u95dc\u897f\u93ae"},{"name":"\u570b\u4e00S088K","city":"\u65b0\u7af9\u7e23","town":"\u7af9\u5317\u5e02"},{"name":"\u65b0\u7af9","city":"\u65b0\u7af9\u7e23","town":"\u7af9\u5317\u5e02"},{"name":"\u570b\u4e00S098K","city":"\u65b0\u7af9\u7e23","town":"\u5bf6\u5c71\u9109"},{"name":"\u570b\u4e00S082K","city":"\u65b0\u7af9\u7e23","town":"\u6e56\u53e3\u9109"},{"name":"\u570b\u4e09N076K","city":"\u65b0\u7af9\u7e23","town":"\u95dc\u897f\u93ae"},{"name":"\u570b\u4e00N077K","city":"\u65b0\u7af9\u7e23","town":"\u6e56\u53e3\u9109"}]},{"city":"\u82d7\u6817\u7e23","obversation":[{"name":"\u570b\u4e00N142K","city":"\u82d7\u6817\u7e23","town":"\u9285\u947c\u9109"},{"name":"\u570b\u4e09N119K","city":"\u82d7\u6817\u7e23","town":"\u7af9\u5357\u93ae"},{"name":"\u570b\u4e09S140K","city":"\u82d7\u6817\u7e23","town":"\u901a\u9704\u93ae"},{"name":"\u570b\u4e09S156K","city":"\u82d7\u6817\u7e23","town":"\u82d1\u88e1\u93ae"},{"name":"\u570b\u4e00S123K","city":"\u82d7\u6817\u7e23","town":"\u982d\u5c4b\u9109"},{"name":"\u570b\u4e09N151K","city":"\u82d7\u6817\u7e23","town":"\u82d1\u88e1\u93ae"},{"name":"\u570b\u4e00S132K","city":"\u82d7\u6817\u7e23","town":"\u516c\u9928\u9109"},{"name":"\u570b\u4e00S152K","city":"\u82d7\u6817\u7e23","town":"\u4e09\u7fa9\u9109"},{"name":"\u570b\u4e00S114K","city":"\u82d7\u6817\u7e23","town":"\u982d\u4efd\u5e02"}]},{"city":"\u81fa\u4e2d\u5e02","obversation":[{"name":"\u570b\u4e00N174K","city":"\u81fa\u4e2d\u5e02","town":"\u897f\u5c6f\u5340"},{"name":"\u570b\u4e09S168K","city":"\u81fa\u4e2d\u5e02","town":"\u6e05\u6c34\u5340"},{"name":"\u68a7\u68f2","city":"\u81fa\u4e2d\u5e02","town":"\u68a7\u68f2\u5340"},{"name":"\u81fa\u4e2d","city":"\u81fa\u4e2d\u5e02","town":"\u5317\u5340"},{"name":"\u570b\u4e00S162K","city":"\u81fa\u4e2d\u5e02","town":"\u540e\u91cc\u5340"},{"name":"\u570b\u4e09N208K","city":"\u81fa\u4e2d\u5e02","town":"\u9727\u5cf0\u5340"},{"name":"\u570b\u4e09S178K","city":"\u81fa\u4e2d\u5e02","town":"\u6c99\u9e7f\u5340"},{"name":"\u570b\u4e09S173K","city":"\u81fa\u4e2d\u5e02","town":"\u6e05\u6c34\u5340"},{"name":"\u570b\u56dbE5K","city":"\u81fa\u4e2d\u5e02","town":"\u795e\u5ca1\u5340"},{"name":"\u6b66\u9675","city":"\u81fa\u4e2d\u5e02","town":"\u548c\u5e73\u5340"},{"name":"\u570b\u4e00S188K","city":"\u81fa\u4e2d\u5e02","town":"\u5927\u809a\u5340"},{"name":"\u570b\u4e00S169K","city":"\u81fa\u4e2d\u5e02","town":"\u795e\u5ca1\u5340"}]},{"city":"\u5357\u6295\u7e23","obversation":[{"name":"\u570b\u4e09S217K","city":"\u5357\u6295\u7e23","town":"\u8349\u5c6f\u93ae"},{"name":"\u570b\u4e09N223K","city":"\u5357\u6295\u7e23","town":"\u8349\u5c6f\u93ae"},{"name":"\u7389\u5c71","city":"\u5357\u6295\u7e23","town":"\u4fe1\u7fa9\u9109"},{"name":"\u65e5\u6708\u6f6d","city":"\u5357\u6295\u7e23","town":"\u9b5a\u6c60\u9109"}]},{"city":"\u5f70\u5316\u7e23","obversation":[{"name":"\u570b\u4e09S202K","city":"\u5f70\u5316\u7e23","town":"\u5f70\u5316\u5e02"},{"name":"\u570b\u4e09N196K","city":"\u5f70\u5316\u7e23","town":"\u5f70\u5316\u5e02"},{"name":"\u5f70\u5e2b\u5927","city":"\u5f70\u5316\u7e23","town":"\u5f70\u5316\u5e02"},{"name":"\u570b\u4e09N191K","city":"\u5f70\u5316\u7e23","town":"\u548c\u7f8e\u93ae"},{"name":"\u7530\u4e2d","city":"\u5f70\u5316\u7e23","town":"\u7530\u4e2d\u93ae"},{"name":"\u570b\u4e00S207K","city":"\u5f70\u5316\u7e23","town":"\u5927\u6751\u9109"},{"name":"\u570b\u4e00N198K","city":"\u5f70\u5316\u7e23","town":"\u5f70\u5316\u5e02"}]},{"city":"\u96f2\u6797\u7e23","obversation":[{"name":"\u570b\u4e00N234K","city":"\u96f2\u6797\u7e23","town":"\u897f\u87ba\u93ae"},{"name":"\u53e4\u5751","city":"\u96f2\u6797\u7e23","town":"\u53e4\u5751\u9109"},{"name":"\u9ea5\u5bee","city":"\u96f2\u6797\u7e23","town":"\u9ea5\u5bee\u9109"},{"name":"\u570b\u4e09N252K","city":"\u96f2\u6797\u7e23","town":"\u6797\u5167\u9109"}]},{"city":"\u5609\u7fa9\u5e02","obversation":[{"name":"\u5609\u7fa9","city":"\u5609\u7fa9\u5e02","town":"\u897f\u5340"}]},{"city":"\u5609\u7fa9\u7e23","obversation":[{"name":"\u570b\u4e00N250K","city":"\u5609\u7fa9\u7e23","town":"\u5927\u6797\u93ae"},{"name":"\u963f\u91cc\u5c71","city":"\u5609\u7fa9\u7e23","town":"\u963f\u91cc\u5c71\u9109"}]},{"city":"\u6f8e\u6e56\u7e23","obversation":[{"name":"\u6f8e\u6e56","city":"\u6f8e\u6e56\u7e23","town":"\u99ac\u516c\u5e02"},{"name":"\u5409\u8c9d","city":"\u6f8e\u6e56\u7e23","town":"\u767d\u6c99\u9109"},{"name":"\u6771\u5409\u5cf6","city":"\u6f8e\u6e56\u7e23","town":"\u671b\u5b89\u9109"}]},{"city":"\u81fa\u5357\u5e02","obversation":[{"name":"\u5357\u5340\u4e2d\u5fc3","city":"\u81fa\u5357\u5e02","town":"\u4e2d\u897f\u5340"},{"name":"\u6c38\u5eb7","city":"\u81fa\u5357\u5e02","town":"\u6c38\u5eb7\u5340"}]},{"city":"\u9ad8\u96c4\u5e02","obversation":[{"name":"\u5357\u6c99\u5cf6","city":"\u9ad8\u96c4\u5e02","town":"\u65d7\u6d25\u5340"},{"name":"\u9ad8\u96c4","city":"\u9ad8\u96c4\u5e02","town":"\u524d\u93ae\u5340"},{"name":"\u6771\u6c99\u5cf6","city":"\u9ad8\u96c4\u5e02","town":"\u65d7\u6d25\u5340"}]},{"city":"\u5c4f\u6771\u7e23","obversation":[{"name":"\u6046\u6625","city":"\u5c4f\u6771\u7e23","town":"\u6046\u6625\u93ae"}]},{"city":"\u82b1\u84ee\u7e23","obversation":[{"name":"\u5408\u6b61\u5c71","city":"\u82b1\u84ee\u7e23","town":"\u79c0\u6797\u9109"},{"name":"\u592a\u9b6f\u95a3","city":"\u82b1\u84ee\u7e23","town":"\u79c0\u6797\u9109"},{"name":"\u82b1\u84ee","city":"\u82b1\u84ee\u7e23","town":"\u82b1\u84ee\u5e02"}]},{"city":"\u81fa\u6771\u7e23","obversation":[{"name":"\u81fa\u6771","city":"\u81fa\u6771\u7e23","town":"\u81fa\u6771\u5e02"},{"name":"\u6210\u529f","city":"\u81fa\u6771\u7e23","town":"\u6210\u529f\u93ae"},{"name":"\u862d\u5dbc","city":"\u81fa\u6771\u7e23","town":"\u862d\u5dbc\u9109"},{"name":"\u5927\u6b66","city":"\u81fa\u6771\u7e23","town":"\u5927\u6b66\u9109"}]},{"city":"\u91d1\u9580\u7e23","obversation":[{"name":"\u4e5d\u5bae\u78bc\u982d","city":"\u91d1\u9580\u7e23","town":"\u70c8\u5dbc\u9109"},{"name":"\u91d1\u9580","city":"\u91d1\u9580\u7e23","town":"\u91d1\u57ce\u93ae"},{"name":"\u91d1\u9580(\u6771)","city":"\u91d1\u9580\u7e23","town":"\u91d1\u6e56\u93ae"}]},{"city":"\u9023\u6c5f\u7e23","obversation":[{"name":"\u99ac\u7956","city":"\u9023\u6c5f\u7e23","town":"\u5357\u7aff\u9109"}]}]');function W(){var t=(0,o.useState)({label:"\u677f\u6a4b\u5340 - \u677f\u6a4b",value:"\u677f\u6a4b"}),n=t[0],e=t[1],c=I.map((function(t){return{label:t.city,options:t.obversation.map((function(t){return{label:"".concat(t.town," - ").concat(t.name),value:"".concat(t.name)}}))}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{state:n,setState:e,options:c,instanceId:"obersvationSelect"}),(0,i.jsx)("h1",{children:n.label}),(0,i.jsx)(Z,{location:n})]})}},5301:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(9142)}])},9267:function(t){t.exports={groupStyles:"style_groupStyles__3RwdD",groupBadgeStyles:"style_groupBadgeStyles__bvEvc"}},5045:function(t){t.exports={windAndTemp:"style_windAndTemp__J1xLq"}},8656:function(t){t.exports={Info:"style_Info__gmpKY"}},4642:function(t){t.exports={temperature:"style_temperature__2Bw08"}},9470:function(t){t.exports={Weather:"style_Weather__1oS1C"}},9802:function(t){t.exports={windSpeed:"style_windSpeed__1-HMx",windDir:"style_windDir__2BjpZ"}}},function(t){t.O(0,[774,755,888,179],(function(){return n=5301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);