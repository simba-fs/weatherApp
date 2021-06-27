(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{7916:function(l,e,a){"use strict";a.d(e,{Z:function(){return F}});var u=a(5893),b=a(7169),v=a(9267),D=a.n(v);function F(l){var e=l.options,a=l.state,v=l.setState,F=l.instanceId;return(0,u.jsx)(b.ZP,{instanceId:F,options:e,value:a,onChange:function(l){return l?v(l):null},formatGroupLabel:function(l){return(0,u.jsxs)("div",{className:D().groupStyles,children:[(0,u.jsx)("span",{children:l.label}),(0,u.jsx)("span",{className:D().groupBadgeStyles,children:l.options.length})]})},isSearchable:!0})}},5612:function(l,e,a){"use strict";a.d(e,{Z:function(){return b}});var u=a(4699);function b(l){for(var e="",a=0,b=Object.entries(l);a<b.length;a++){var v=(0,u.Z)(b[a],2),D=v[0],F=v[1];e+="".concat(D,"=").concat(F.toString(),"&")}return e=e.slice(0,-1)}},8108:function(l,e,a){"use strict";a.r(e),a.d(e,{default:function(){return E}});var u=a(5893),b=a(7294),v=a(7916),D=a(7757),F=a.n(D),t=a(2137),n=a(5723),r=a(9009),o=a(557),s=a(4195),i=a(3023),c=a(5358),p=a(6830),h=a(9307),d=a(1004),f=a(5612),m=a(2520),x=a.n(m),j="CWB-25BB0BA2-9449-4DD2-82D6-D835F21722EE";function w(l){function e(l,e){return l.find((function(l){return l.elementName===e}))||l[0]}return{raw:l,WS:e(l,"WS").time.map((function(l){return{time:l.dataTime,"\u98a8\u901f(m/s)":l.elementValue[0].value}})),PoP12h:e(l,"PoP12h").time.map((function(l){return{time:l.startTime,"\u964d\u96e8\u6a5f\u7387(%)":l.elementValue[0].value}})),AT:e(l,"AT").time.map((function(l){return{time:l.dataTime,"\u9ad4\u611f\u6eab\u5ea6(\xb0C)":l.elementValue[0].value}}))}}function y(){return(y=(0,t.Z)(F().mark((function l(e){var a;return F().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return"https://opendata.cwb.gov.tw/api/v1/rest/datastore",a=(0,f.Z)({Authorization:j,locationName:encodeURI(e.label)}),l.abrupt("return",fetch("".concat("https://opendata.cwb.gov.tw/api/v1/rest/datastore","/").concat(e.value.split("--")[1],"?").concat(a)).then((function(l){return l.json()})).then((function(l){return l.records.locations[0].location[0].weatherElement})).then((function(l){return w(l)})).catch(console.error));case 3:case"end":return l.stop()}}),l)})))).apply(this,arguments)}function _(l){var e=l.weatherEle,a=l.value;return(0,u.jsx)(r.h,{width:"90%",height:300,children:(0,u.jsxs)(o.w,{data:e,children:[(0,u.jsx)(s.q,{stroke:"#ccc",strokeDasharray:"3 3",y:10}),(0,u.jsx)(i.K,{dataKey:"time"}),(0,u.jsx)(c.B,{padding:{top:30}}),(0,u.jsx)(p.D,{}),(0,u.jsx)(h.u,{}),(0,u.jsx)(d.x,{type:"natural",dataKey:a,stroke:"#8884d8"})]})})}function g(l){var e=l.city,a=(0,n.ZP)((function(){return"fetch ".concat(e.label)}),(function(){return function(l){return y.apply(this,arguments)}(e)})),b=a.data,v=a.error;return v?(0,u.jsx)("pre",{children:v}):b?v?(0,u.jsxs)("h3",{children:["Error: ",v]}):(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:x().weatherDisplay,children:[(0,u.jsx)(_,{weatherEle:b.WS,value:"\u98a8\u901f(m/s)"}),(0,u.jsx)(_,{weatherEle:b.PoP12h,value:"\u964d\u96e8\u6a5f\u7387(%)"}),(0,u.jsx)(_,{weatherEle:b.AT,value:"\u9ad4\u611f\u6eab\u5ea6(\xb0C)"})]})}):(0,u.jsx)("h3",{children:"Loading ..."})}var S=JSON.parse('[{"label":"\u81fa\u5317\u5e02","options":[{"label":"\u4e2d\u6b63\u5340","value":"\u4e2d\u6b63\u5340--F-D0047-061"},{"label":"\u5927\u540c\u5340","value":"\u5927\u540c\u5340--F-D0047-061"},{"label":"\u4e2d\u5c71\u5340","value":"\u4e2d\u5c71\u5340--F-D0047-061"},{"label":"\u677e\u5c71\u5340","value":"\u677e\u5c71\u5340--F-D0047-061"},{"label":"\u5927\u5b89\u5340","value":"\u5927\u5b89\u5340--F-D0047-061"},{"label":"\u842c\u83ef\u5340","value":"\u842c\u83ef\u5340--F-D0047-061"},{"label":"\u4fe1\u7fa9\u5340","value":"\u4fe1\u7fa9\u5340--F-D0047-061"},{"label":"\u58eb\u6797\u5340","value":"\u58eb\u6797\u5340--F-D0047-061"},{"label":"\u5317\u6295\u5340","value":"\u5317\u6295\u5340--F-D0047-061"},{"label":"\u5167\u6e56\u5340","value":"\u5167\u6e56\u5340--F-D0047-061"},{"label":"\u5357\u6e2f\u5340","value":"\u5357\u6e2f\u5340--F-D0047-061"},{"label":"\u6587\u5c71\u5340","value":"\u6587\u5c71\u5340--F-D0047-061"}]},{"label":"\u57fa\u9686\u5e02","options":[{"label":"\u4ec1\u611b\u5340","value":"\u4ec1\u611b\u5340--F-D0047-049"},{"label":"\u4fe1\u7fa9\u5340","value":"\u4fe1\u7fa9\u5340--F-D0047-049"},{"label":"\u4e2d\u6b63\u5340","value":"\u4e2d\u6b63\u5340--F-D0047-049"},{"label":"\u4e2d\u5c71\u5340","value":"\u4e2d\u5c71\u5340--F-D0047-049"},{"label":"\u5b89\u6a02\u5340","value":"\u5b89\u6a02\u5340--F-D0047-049"},{"label":"\u6696\u6696\u5340","value":"\u6696\u6696\u5340--F-D0047-049"},{"label":"\u4e03\u5835\u5340","value":"\u4e03\u5835\u5340--F-D0047-049"}]},{"label":"\u65b0\u5317\u5e02","options":[{"label":"\u842c\u91cc\u5340","value":"\u842c\u91cc\u5340--F-D0047-069"},{"label":"\u91d1\u5c71\u5340","value":"\u91d1\u5c71\u5340--F-D0047-069"},{"label":"\u677f\u6a4b\u5340","value":"\u677f\u6a4b\u5340--F-D0047-069"},{"label":"\u6c50\u6b62\u5340","value":"\u6c50\u6b62\u5340--F-D0047-069"},{"label":"\u6df1\u5751\u5340","value":"\u6df1\u5751\u5340--F-D0047-069"},{"label":"\u77f3\u7887\u5340","value":"\u77f3\u7887\u5340--F-D0047-069"},{"label":"\u745e\u82b3\u5340","value":"\u745e\u82b3\u5340--F-D0047-069"},{"label":"\u5e73\u6eaa\u5340","value":"\u5e73\u6eaa\u5340--F-D0047-069"},{"label":"\u96d9\u6eaa\u5340","value":"\u96d9\u6eaa\u5340--F-D0047-069"},{"label":"\u8ca2\u5bee\u5340","value":"\u8ca2\u5bee\u5340--F-D0047-069"},{"label":"\u65b0\u5e97\u5340","value":"\u65b0\u5e97\u5340--F-D0047-069"},{"label":"\u576a\u6797\u5340","value":"\u576a\u6797\u5340--F-D0047-069"},{"label":"\u70cf\u4f86\u5340","value":"\u70cf\u4f86\u5340--F-D0047-069"},{"label":"\u6c38\u548c\u5340","value":"\u6c38\u548c\u5340--F-D0047-069"},{"label":"\u4e2d\u548c\u5340","value":"\u4e2d\u548c\u5340--F-D0047-069"},{"label":"\u571f\u57ce\u5340","value":"\u571f\u57ce\u5340--F-D0047-069"},{"label":"\u4e09\u5cfd\u5340","value":"\u4e09\u5cfd\u5340--F-D0047-069"},{"label":"\u6a39\u6797\u5340","value":"\u6a39\u6797\u5340--F-D0047-069"},{"label":"\u9daf\u6b4c\u5340","value":"\u9daf\u6b4c\u5340--F-D0047-069"},{"label":"\u4e09\u91cd\u5340","value":"\u4e09\u91cd\u5340--F-D0047-069"},{"label":"\u65b0\u838a\u5340","value":"\u65b0\u838a\u5340--F-D0047-069"},{"label":"\u6cf0\u5c71\u5340","value":"\u6cf0\u5c71\u5340--F-D0047-069"},{"label":"\u6797\u53e3\u5340","value":"\u6797\u53e3\u5340--F-D0047-069"},{"label":"\u8606\u6d32\u5340","value":"\u8606\u6d32\u5340--F-D0047-069"},{"label":"\u4e94\u80a1\u5340","value":"\u4e94\u80a1\u5340--F-D0047-069"},{"label":"\u516b\u91cc\u5340","value":"\u516b\u91cc\u5340--F-D0047-069"},{"label":"\u6de1\u6c34\u5340","value":"\u6de1\u6c34\u5340--F-D0047-069"},{"label":"\u4e09\u829d\u5340","value":"\u4e09\u829d\u5340--F-D0047-069"},{"label":"\u77f3\u9580\u5340","value":"\u77f3\u9580\u5340--F-D0047-069"}]},{"label":"\u9023\u6c5f\u7e23","options":[{"label":"\u5357\u7aff\u9109","value":"\u5357\u7aff\u9109--F-D0047-081"},{"label":"\u5317\u7aff\u9109","value":"\u5317\u7aff\u9109--F-D0047-081"},{"label":"\u8392\u5149\u9109","value":"\u8392\u5149\u9109--F-D0047-081"},{"label":"\u6771\u5f15\u9109","value":"\u6771\u5f15\u9109--F-D0047-081"}]},{"label":"\u5b9c\u862d\u7e23","options":[{"label":"\u5b9c\u862d\u5e02","value":"\u5b9c\u862d\u5e02--F-D0047-001"},{"label":"\u58ef\u570d\u9109","value":"\u58ef\u570d\u9109--F-D0047-001"},{"label":"\u982d\u57ce\u93ae","value":"\u982d\u57ce\u93ae--F-D0047-001"},{"label":" \u7901\u6eaa\u9109","value":" \u7901\u6eaa\u9109--F-D0047-001"},{"label":"\u54e1\u5c71\u9109","value":"\u54e1\u5c71\u9109--F-D0047-001"},{"label":"\u7f85\u6771\u93ae","value":"\u7f85\u6771\u93ae--F-D0047-001"},{"label":"\u4e09\u661f\u9109","value":"\u4e09\u661f\u9109--F-D0047-001"},{"label":"\u5927\u540c\u9109","value":"\u5927\u540c\u9109--F-D0047-001"},{"label":"\u4e94\u7d50\u9109","value":"\u4e94\u7d50\u9109--F-D0047-001"},{"label":"\u51ac\u5c71\u9109","value":"\u51ac\u5c71\u9109--F-D0047-001"},{"label":"\u8607\u6fb3\u93ae","value":"\u8607\u6fb3\u93ae--F-D0047-001"},{"label":"\u5357\u6fb3\u9109","value":"\u5357\u6fb3\u9109--F-D0047-001"}]},{"label":"\u65b0\u7af9\u5e02","options":[{"label":"\u6771\u5340","value":"\u6771\u5340--F-D0047-053"},{"label":"\u5317\u5340","value":"\u5317\u5340--F-D0047-053"},{"label":"\u9999\u5c71\u5340","value":"\u9999\u5c71\u5340--F-D0047-053"}]},{"label":"\u65b0\u7af9\u7e23","options":[{"label":"\u5bf6\u5c71\u9109","value":"\u5bf6\u5c71\u9109--F-D0047-009"},{"label":"\u7af9\u5317\u5e02","value":"\u7af9\u5317\u5e02--F-D0047-009"},{"label":"\u6e56\u53e3\u9109","value":"\u6e56\u53e3\u9109--F-D0047-009"},{"label":"\u65b0\u8c50\u9109","value":"\u65b0\u8c50\u9109--F-D0047-009"},{"label":"\u65b0\u57d4\u93ae","value":"\u65b0\u57d4\u93ae--F-D0047-009"},{"label":"\u95dc\u897f \u93ae","value":"\u95dc\u897f \u93ae--F-D0047-009"},{"label":"\u828e\u6797\u9109","value":"\u828e\u6797\u9109--F-D0047-009"},{"label":"\u7af9\u6771\u93ae","value":"\u7af9\u6771\u93ae--F-D0047-009"},{"label":"\u4e94\u5cf0\u9109","value":"\u4e94\u5cf0\u9109--F-D0047-009"},{"label":"\u6a6b\u5c71\u9109","value":"\u6a6b\u5c71\u9109--F-D0047-009"},{"label":"\u5c16\u77f3\u9109","value":"\u5c16\u77f3\u9109--F-D0047-009"},{"label":"\u5317\u57d4\u9109","value":"\u5317\u57d4\u9109--F-D0047-009"},{"label":"\u5ce8\u7709\u9109","value":"\u5ce8\u7709\u9109--F-D0047-009"}]},{"label":"\u6843\u5712\u5e02","options":[{"label":"\u4e2d\u58e2\u5340","value":"\u4e2d\u58e2\u5340--F-D0047-005"},{"label":"\u5e73\u93ae\u5340","value":"\u5e73\u93ae\u5340--F-D0047-005"},{"label":"\u9f8d\u6f6d\u5340","value":"\u9f8d\u6f6d\u5340--F-D0047-005"},{"label":"\u694a\u6885\u5340","value":"\u694a\u6885\u5340--F-D0047-005"},{"label":"\u65b0\u5c4b\u5340","value":"\u65b0\u5c4b\u5340--F-D0047-005"},{"label":"\u89c0\u97f3\u5340","value":"\u89c0\u97f3\u5340--F-D0047-005"},{"label":"\u6843\u5712\u5340","value":"\u6843\u5712\u5340--F-D0047-005"},{"label":"\u9f9c\u5c71\u5340","value":"\u9f9c\u5c71\u5340--F-D0047-005"},{"label":"\u516b\u5fb7\u5340","value":"\u516b\u5fb7\u5340--F-D0047-005"},{"label":"\u5927\u6eaa\u5340","value":"\u5927\u6eaa\u5340--F-D0047-005"},{"label":"\u5fa9\u8208\u5340","value":"\u5fa9\u8208\u5340--F-D0047-005"},{"label":"\u5927\u5712\u5340","value":"\u5927\u5712\u5340--F-D0047-005"},{"label":"\u8606\u7af9\u5340","value":"\u8606\u7af9\u5340--F-D0047-005"}]},{"label":"\u82d7\u6817\u7e23","options":[{"label":"\u7af9\u5357\u93ae","value":"\u7af9\u5357\u93ae--F-D0047-013"},{"label":"\u982d\u4efd\u5e02","value":"\u982d\u4efd\u5e02--F-D0047-013"},{"label":"\u4e09\u7063\u9109","value":"\u4e09\u7063\u9109--F-D0047-013"},{"label":"\u5357\u5e84\u9109","value":"\u5357\u5e84\u9109--F-D0047-013"},{"label":"\u7345\u6f6d\u9109","value":"\u7345\u6f6d\u9109--F-D0047-013"},{"label":"\u5f8c\u9f8d\u93ae","value":"\u5f8c\u9f8d\u93ae--F-D0047-013"},{"label":"\u901a\u9704\u93ae","value":"\u901a\u9704\u93ae--F-D0047-013"},{"label":"\u82d1\u88e1 \u93ae","value":"\u82d1\u88e1\u93ae--F-D0047-013"},{"label":"\u82d7\u6817\u5e02","value":"\u82d7\u6817\u5e02--F-D0047-013"},{"label":"\u9020\u6a4b\u9109","value":"\u9020\u6a4b\u9109--F-D0047-013"},{"label":"\u982d\u5c4b\u9109","value":"\u982d\u5c4b\u9109--F-D0047-013"},{"label":"\u516c\u9928\u9109","value":"\u516c\u9928\u9109--F-D0047-013"},{"label":"\u5927\u6e56\u9109","value":"\u5927\u6e56\u9109--F-D0047-013"},{"label":"\u6cf0\u5b89\u9109","value":"\u6cf0\u5b89\u9109--F-D0047-013"},{"label":"\u9285\u947c\u9109","value":"\u9285\u947c\u9109--F-D0047-013"},{"label":"\u4e09\u7fa9\u9109","value":"\u4e09\u7fa9\u9109--F-D0047-013"},{"label":"\u897f\u6e56\u9109","value":"\u897f\u6e56\u9109--F-D0047-013"},{"label":"\u5353\u862d\u93ae","value":"\u5353\u862d\u93ae--F-D0047-013"}]},{"label":"\u81fa\u4e2d\u5e02","options":[{"label":"\u4e2d\u5340","value":"\u4e2d\u5340--F-D0047-073"},{"label":"\u6771\u5340","value":"\u6771\u5340--F-D0047-073"},{"label":"\u5357\u5340","value":"\u5357\u5340--F-D0047-073"},{"label":"\u897f\u5340","value":"\u897f\u5340--F-D0047-073"},{"label":"\u5317\u5340","value":"\u5317\u5340--F-D0047-073"},{"label":"\u5317\u5c6f\u5340","value":"\u5317\u5c6f\u5340--F-D0047-073"},{"label":"\u897f\u5c6f\u5340","value":"\u897f\u5c6f\u5340--F-D0047-073"},{"label":"\u5357\u5c6f\u5340","value":"\u5357\u5c6f\u5340--F-D0047-073"},{"label":" \u592a\u5e73\u5340","value":" \u592a\u5e73\u5340--F-D0047-073"},{"label":"\u5927\u91cc\u5340","value":"\u5927\u91cc\u5340--F-D0047-073"},{"label":"\u9727\u5cf0\u5340","value":"\u9727\u5cf0\u5340--F-D0047-073"},{"label":"\u70cf\u65e5\u5340","value":"\u70cf\u65e5\u5340--F-D0047-073"},{"label":"\u8c50\u539f\u5340","value":"\u8c50\u539f\u5340--F-D0047-073"},{"label":"\u540e\u91cc\u5340","value":"\u540e\u91cc\u5340--F-D0047-073"},{"label":"\u77f3\u5ca1\u5340","value":"\u77f3\u5ca1\u5340--F-D0047-073"},{"label":"\u6771\u52e2\u5340","value":"\u6771\u52e2\u5340--F-D0047-073"},{"label":"\u548c\u5e73\u5340","value":"\u548c\u5e73\u5340--F-D0047-073"},{"label":"\u65b0\u793e\u5340","value":"\u65b0\u793e\u5340--F-D0047-073"},{"label":"\u6f6d\u5b50\u5340","value":"\u6f6d\u5b50\u5340--F-D0047-073"},{"label":"\u5927\u96c5\u5340","value":"\u5927\u96c5\u5340--F-D0047-073"},{"label":"\u795e\u5ca1\u5340","value":"\u795e\u5ca1\u5340--F-D0047-073"},{"label":"\u5927\u809a\u5340","value":"\u5927\u809a\u5340--F-D0047-073"},{"label":"\u6c99\u9e7f\u5340","value":"\u6c99\u9e7f\u5340--F-D0047-073"},{"label":"\u9f8d\u4e95\u5340","value":"\u9f8d\u4e95\u5340--F-D0047-073"},{"label":"\u68a7\u68f2 \u5340","value":"\u68a7\u68f2\u5340--F-D0047-073"},{"label":"\u6e05\u6c34\u5340","value":"\u6e05\u6c34\u5340--F-D0047-073"},{"label":"\u5927\u7532\u5340","value":"\u5927\u7532\u5340--F-D0047-073"},{"label":"\u5916\u57d4\u5340","value":"\u5916\u57d4\u5340--F-D0047-073"},{"label":"\u5927\u5b89\u5340","value":"\u5927\u5b89\u5340--F-D0047-073"}]},{"label":"\u5f70\u5316\u7e23","options":[{"label":"\u5f70\u5316\u5e02","value":"\u5f70\u5316\u5e02--F-D0047-017"},{"label":"\u82ac\u5712\u9109","value":"\u82ac\u5712\u9109--F-D0047-017"},{"label":"\u82b1\u58c7\u9109","value":"\u82b1\u58c7\u9109--F-D0047-017"},{"label":"\u79c0\u6c34\u9109","value":"\u79c0\u6c34\u9109--F-D0047-017"},{"label":"\u9e7f\u6e2f\u93ae","value":"\u9e7f\u6e2f\u93ae--F-D0047-017"},{"label":"\u798f\u8208\u9109","value":"\u798f\u8208\u9109--F-D0047-017"},{"label":"\u7dda\u897f\u9109","value":"\u7dda\u897f\u9109--F-D0047-017"},{"label":"\u548c\u7f8e\u93ae","value":"\u548c\u7f8e\u93ae--F-D0047-017"},{"label":"\u4f38\u6e2f\u9109","value":"\u4f38\u6e2f\u9109--F-D0047-017"},{"label":"\u54e1\u6797\u5e02","value":"\u54e1\u6797\u5e02--F-D0047-017"},{"label":"\u793e\u982d\u9109","value":"\u793e\u982d\u9109--F-D0047-017"},{"label":"\u6c38\u9756\u9109","value":"\u6c38\u9756\u9109--F-D0047-017"},{"label":"\u57d4\u5fc3 \u9109","value":"\u57d4\u5fc3\u9109--F-D0047-017"},{"label":"\u6eaa\u6e56\u93ae","value":"\u6eaa\u6e56\u93ae--F-D0047-017"},{"label":"\u5927\u6751\u9109","value":"\u5927\u6751\u9109--F-D0047-017"},{"label":"\u57d4\u9e7d\u9109","value":"\u57d4\u9e7d\u9109--F-D0047-017"},{"label":"\u7530\u4e2d\u93ae","value":"\u7530\u4e2d\u93ae--F-D0047-017"},{"label":"\u5317\u6597\u93ae","value":"\u5317\u6597\u93ae--F-D0047-017"},{"label":"\u7530\u5c3e\u9109","value":"\u7530\u5c3e\u9109--F-D0047-017"},{"label":"\u57e4\u982d\u9109","value":"\u57e4\u982d\u9109--F-D0047-017"},{"label":"\u6eaa\u5dde\u9109","value":"\u6eaa\u5dde\u9109--F-D0047-017"},{"label":"\u7af9\u5858\u9109","value":"\u7af9\u5858\u9109--F-D0047-017"},{"label":"\u4e8c\u6797\u93ae","value":"\u4e8c\u6797\u93ae--F-D0047-017"},{"label":"\u5927\u57ce\u9109","value":"\u5927\u57ce\u9109--F-D0047-017"},{"label":"\u82b3\u82d1\u9109","value":"\u82b3\u82d1\u9109--F-D0047-017"},{"label":"\u4e8c\u6c34\u9109","value":"\u4e8c\u6c34\u9109--F-D0047-017"}]},{"label":"\u5357\u6295\u7e23","options":[{"label":"\u5357\u6295\u5e02","value":"\u5357\u6295\u5e02--F-D0047-021"},{"label":"\u4e2d\u5bee\u9109","value":"\u4e2d\u5bee\u9109--F-D0047-021"},{"label":"\u8349\u5c6f \u93ae","value":"\u8349\u5c6f \u93ae--F-D0047-021"},{"label":"\u570b \u59d3\u9109","value":"\u570b\u59d3\u9109--F-D0047-021"},{"label":"\u57d4\u91cc\u93ae","value":"\u57d4\u91cc\u93ae--F-D0047-021"},{"label":"\u4ec1\u611b\u9109","value":"\u4ec1\u611b\u9109--F-D0047-021"},{"label":"\u540d\u9593\u9109","value":"\u540d\u9593\u9109--F-D0047-021"},{"label":"\u96c6\u96c6\u93ae","value":"\u96c6\u96c6\u93ae--F-D0047-021"},{"label":"\u6c34\u91cc\u9109","value":"\u6c34\u91cc\u9109--F-D0047-021"},{"label":"\u9b5a\u6c60\u9109","value":"\u9b5a\u6c60\u9109--F-D0047-021"},{"label":"\u4fe1\u7fa9 \u9109","value":"\u4fe1\u7fa9\u9109--F-D0047-021"},{"label":"\u7af9\u5c71\u93ae","value":"\u7af9\u5c71\u93ae--F-D0047-021"},{"label":"\u9e7f\u8c37\u9109","value":"\u9e7f\u8c37\u9109--F-D0047-021"}]},{"label":"\u5609\u7fa9\u5e02","options":[{"label":"\u897f\u5340","value":"\u897f\u5340--F-D0047-057"},{"label":"\u6771\u5340","value":"\u6771\u5340--F-D0047-057"}]},{"label":"\u5609\u7fa9\u7e23","options":[{"label":"\u756a\u8def\u9109","value":"\u756a\u8def\u9109--F-D0047-029"},{"label":"\u6885\u5c71\u9109","value":"\u6885\u5c71\u9109--F-D0047-029"},{"label":"\u7af9\u5d0e\u9109","value":"\u7af9\u5d0e\u9109--F-D0047-029"},{"label":"\u963f\u91cc\u5c71\u9109","value":"\u963f\u91cc\u5c71\u9109--F-D0047-029"},{"label":"\u4e2d\u57d4\u9109","value":"\u4e2d\u57d4\u9109--F-D0047-029"},{"label":"\u5927\u57d4\u9109","value":"\u5927\u57d4\u9109--F-D0047-029"},{"label":"\u6c34\u4e0a\u9109","value":"\u6c34\u4e0a\u9109--F-D0047-029"},{"label":"\u9e7f\u8349\u9109","value":"\u9e7f\u8349\u9109--F-D0047-029"},{"label":" \u592a\u4fdd\u5e02","value":"\u592a\u4fdd\u5e02--F-D0047-029"},{"label":"\u6734\u5b50\u5e02","value":"\u6734\u5b50\u5e02--F-D0047-029"},{"label":"\u6771\u77f3\u9109","value":"\u6771\u77f3\u9109--F-D0047-029"},{"label":"\u516d\u8173\u9109","value":"\u516d\u8173\u9109--F-D0047-029"},{"label":"\u65b0\u6e2f\u9109","value":"\u65b0\u6e2f\u9109--F-D0047-029"},{"label":"\u6c11\u96c4\u9109","value":"\u6c11\u96c4\u9109--F-D0047-029"},{"label":"\u5927\u6797\u93ae","value":"\u5927\u6797\u93ae--F-D0047-029"},{"label":"\u6eaa \u53e3\u9109","value":"\u6eaa\u53e3\u9109--F-D0047-029"},{"label":"\u7fa9\u7af9\u9109","value":"\u7fa9\u7af9\u9109--F-D0047-029"},{"label":"\u5e03\u888b\u93ae","value":"\u5e03\u888b\u93ae--F-D0047-029"}]},{"label":"\u96f2\u6797\u7e23","options":[{"label":"\u6597\u5357\u93ae","value":"\u6597\u5357\u93ae--F-D0047-025"},{"label":"\u5927\u57e4\u9109","value":"\u5927\u57e4\u9109--F-D0047-025"},{"label":"\u864e\u5c3e\u93ae","value":"\u864e\u5c3e\u93ae--F-D0047-025"},{"label":"\u571f\u5eab\u93ae","value":"\u571f\u5eab\u93ae--F-D0047-025"},{"label":"\u8912\u5fe0\u9109","value":"\u8912\u5fe0\u9109--F-D0047-025"},{"label":"\u6771\u52e2\u9109","value":"\u6771\u52e2\u9109--F-D0047-025"},{"label":"\u81fa\u897f\u9109","value":"\u81fa\u897f\u9109--F-D0047-025"},{"label":"\u5d19\u80cc\u9109","value":"\u5d19\u80cc\u9109--F-D0047-025"},{"label":"\u9ea5\u5bee\u9109","value":"\u9ea5\u5bee\u9109--F-D0047-025"},{"label":"\u6597 \u516d\u5e02","value":"\u6597 \u516d\u5e02--F-D0047-025"},{"label":"\u6797\u5167\u9109","value":"\u6797\u5167\u9109--F-D0047-025"},{"label":"\u53e4\u5751\u9109","value":"\u53e4\u5751\u9109--F-D0047-025"},{"label":"\u83bf\u6850\u9109","value":"\u83bf\u6850\u9109--F-D0047-025"},{"label":"\u897f\u87ba\u93ae","value":"\u897f\u87ba\u93ae--F-D0047-025"},{"label":" \u4e8c\u5d19\u9109","value":"\u4e8c\u5d19\u9109--F-D0047-025"},{"label":"\u5317\u6e2f\u93ae","value":"\u5317\u6e2f\u93ae--F-D0047-025"},{"label":"\u6c34\u6797\u9109","value":"\u6c34\u6797\u9109--F-D0047-025"},{"label":"\u53e3\u6e56\u9109","value":"\u53e3\u6e56\u9109--F-D0047-025"},{"label":"\u56db\u6e56\u9109","value":"\u56db\u6e56\u9109--F-D0047-025"},{"label":"\u5143\u9577\u9109","value":"\u5143\u9577\u9109--F-D0047-025"}]},{"label":"\u81fa\u5357\u5e02","options":[{"label":"\u4e2d\u897f\u5340","value":"\u4e2d\u897f\u5340--F-D0047-077"},{"label":"\u6771\u5340","value":"\u6771\u5340--F-D0047-077"},{"label":"\u5357\u5340","value":"\u5357\u5340--F-D0047-077"},{"label":"\u5317\u5340","value":"\u5317\u5340--F-D0047-077"},{"label":"\u5b89\u5e73\u5340","value":"\u5b89\u5e73\u5340--F-D0047-077"},{"label":"\u5b89\u5357\u5340","value":"\u5b89\u5357\u5340--F-D0047-077"},{"label":"\u6c38\u5eb7\u5340","value":"\u6c38\u5eb7\u5340--F-D0047-077"},{"label":"\u6b78\u4ec1\u5340","value":"\u6b78\u4ec1\u5340--F-D0047-077"},{"label":"\u65b0\u5316\u5340","value":"\u65b0\u5316\u5340--F-D0047-077"},{"label":"\u5de6\u93ae\u5340","value":"\u5de6\u93ae\u5340--F-D0047-077"},{"label":"\u7389\u4e95\u5340","value":"\u7389\u4e95\u5340--F-D0047-077"},{"label":"\u6960\u897f\u5340","value":"\u6960\u897f\u5340--F-D0047-077"},{"label":"\u5357\u5316\u5340","value":"\u5357\u5316\u5340--F-D0047-077"},{"label":"\u4ec1\u5fb7\u5340","value":"\u4ec1\u5fb7\u5340--F-D0047-077"},{"label":"\u95dc\u5edf\u5340","value":"\u95dc\u5edf\u5340--F-D0047-077"},{"label":"\u9f8d\u5d0e\u5340","value":"\u9f8d\u5d0e\u5340--F-D0047-077"},{"label":"\u5b98\u7530\u5340","value":"\u5b98\u7530\u5340--F-D0047-077"},{"label":"\u9ebb\u8c46\u5340","value":"\u9ebb\u8c46\u5340--F-D0047-077"},{"label":"\u4f73\u91cc\u5340","value":"\u4f73\u91cc\u5340--F-D0047-077"},{"label":"\u897f\u6e2f\u5340","value":"\u897f\u6e2f\u5340--F-D0047-077"},{"label":"\u4e03\u80a1\u5340","value":"\u4e03\u80a1\u5340--F-D0047-077"},{"label":"\u5c07\u8ecd\u5340","value":"\u5c07\u8ecd\u5340--F-D0047-077"},{"label":"\u5b78\u7532\u5340","value":"\u5b78\u7532\u5340--F-D0047-077"},{"label":"\u5317\u9580\u5340","value":"\u5317\u9580\u5340--F-D0047-077"},{"label":"\u65b0\u71df\u5340","value":"\u65b0\u71df\u5340--F-D0047-077"},{"label":"\u5f8c\u58c1\u5340","value":"\u5f8c\u58c1\u5340--F-D0047-077"},{"label":"\u767d\u6cb3\u5340","value":"\u767d\u6cb3\u5340--F-D0047-077"},{"label":"\u6771\u5c71\u5340","value":"\u6771\u5c71\u5340--F-D0047-077"},{"label":"\u516d\u7532\u5340","value":"\u516d\u7532\u5340--F-D0047-077"},{"label":"\u4e0b\u71df\u5340","value":"\u4e0b\u71df\u5340--F-D0047-077"},{"label":"\u67f3\u71df\u5340","value":"\u67f3\u71df\u5340--F-D0047-077"},{"label":"\u9e7d\u6c34\u5340","value":"\u9e7d\u6c34\u5340--F-D0047-077"},{"label":"\u5584\u5316\u5340","value":"\u5584\u5316 \u5340--F-D0047-077"},{"label":"\u65b0\u5e02\u5340","value":"\u65b0\u5e02\u5340--F-D0047-077"},{"label":"\u5927\u5167\u5340","value":"\u5927\u5167\u5340--F-D0047-077"},{"label":"\u5c71\u4e0a\u5340","value":"\u5c71\u4e0a\u5340--F-D0047-077"},{"label":"\u5b89\u5b9a\u5340","value":"\u5b89\u5b9a\u5340--F-D0047-077"}]},{"label":"\u9ad8\u96c4\u5e02","options":[{"label":"\u65b0\u8208\u5340","value":"\u65b0\u8208\u5340--F-D0047-065"},{"label":"\u524d\u91d1\u5340","value":"\u524d\u91d1\u5340--F-D0047-065"},{"label":"\u82d3\u96c5\u5340","value":"\u82d3\u96c5\u5340--F-D0047-065"},{"label":"\u9e7d\u57d5\u5340","value":"\u9e7d\u57d5\u5340--F-D0047-065"},{"label":"\u9f13\u5c71\u5340","value":"\u9f13\u5c71\u5340--F-D0047-065"},{"label":"\u65d7\u6d25\u5340","value":"\u65d7\u6d25\u5340--F-D0047-065"},{"label":"\u524d\u93ae\u5340","value":"\u524d\u93ae\u5340--F-D0047-065"},{"label":"\u4e09\u6c11\u5340","value":"\u4e09\u6c11\u5340--F-D0047-065"},{"label":"\u6960\u6893\u5340","value":"\u6960\u6893\u5340--F-D0047-065"},{"label":"\u5c0f\u6e2f\u5340","value":"\u5c0f\u6e2f\u5340--F-D0047-065"},{"label":"\u5de6\u71df\u5340","value":"\u5de6\u71df\u5340--F-D0047-065"},{"label":"\u4ec1\u6b66\u5340","value":"\u4ec1\u6b66\u5340--F-D0047-065"},{"label":"\u5927\u793e\u5340","value":"\u5927\u793e \u5340--F-D0047-065"},{"label":"\u5ca1\u5c71\u5340","value":"\u5ca1\u5c71\u5340--F-D0047-065"},{"label":"\u8def\u7af9\u5340","value":"\u8def\u7af9\u5340--F-D0047-065"},{"label":"\u963f\u84ee\u5340","value":"\u963f\u84ee\u5340--F-D0047-065"},{"label":"\u7530\u5bee\u5340","value":"\u7530\u5bee\u5340--F-D0047-065"},{"label":"\u71d5\u5de2\u5340","value":"\u71d5\u5de2\u5340--F-D0047-065"},{"label":"\u6a4b\u982d\u5340","value":"\u6a4b\u982d\u5340--F-D0047-065"},{"label":"\u6893\u5b98\u5340","value":"\u6893\u5b98\u5340--F-D0047-065"},{"label":"\u5f4c\u9640\u5340","value":"\u5f4c\u9640\u5340--F-D0047-065"},{"label":"\u6c38\u5b89\u5340","value":"\u6c38\u5b89\u5340--F-D0047-065"},{"label":"\u6e56\u5167\u5340","value":"\u6e56\u5167\u5340--F-D0047-065"},{"label":" \u9cf3\u5c71\u5340","value":"\u9cf3\u5c71\u5340--F-D0047-065"},{"label":"\u5927\u5bee\u5340","value":"\u5927\u5bee\u5340--F-D0047-065"},{"label":"\u6797\u5712\u5340","value":"\u6797\u5712\u5340--F-D0047-065"},{"label":"\u9ce5\u677e\u5340","value":"\u9ce5\u677e\u5340--F-D0047-065"},{"label":"\u5927\u6a39\u5340","value":"\u5927\u6a39\u5340--F-D0047-065"},{"label":"\u65d7\u5c71\u5340","value":"\u65d7\u5c71\u5340--F-D0047-065"},{"label":"\u7f8e\u6fc3\u5340","value":"\u7f8e\u6fc3\u5340--F-D0047-065"},{"label":"\u516d \u9f9c\u5340","value":"\u516d\u9f9c\u5340--F-D0047-065"},{"label":"\u5167\u9580\u5340","value":"\u5167\u9580\u5340--F-D0047-065"},{"label":"\u6749\u6797\u5340","value":"\u6749\u6797\u5340--F-D0047-065"},{"label":"\u7532\u4ed9\u5340","value":"\u7532\u4ed9\u5340--F-D0047-065"},{"label":"\u6843\u6e90\u5340","value":"\u6843\u6e90\u5340--F-D0047-065"},{"label":"\u90a3 \u746a\u590f\u5340","value":"\u90a3 \u746a\u590f\u5340--F-D0047-065"},{"label":"\u8302\u6797\u5340","value":"\u8302\u6797\u5340--F-D0047-065"},{"label":"\u8304\u8423\u5340","value":"\u8304\u8423\u5340--F-D0047-065"}]},{"label":"\u6f8e\u6e56\u7e23","options":[{"label":"\u99ac\u516c\u5e02","value":"\u99ac\u516c\u5e02--F-D0047-045"},{"label":"\u897f\u5dbc\u9109","value":"\u897f\u5dbc\u9109--F-D0047-045"},{"label":"\u671b\u5b89\u9109","value":"\u671b\u5b89\u9109--F-D0047-045"},{"label":"\u4e03\u7f8e\u9109","value":"\u4e03\u7f8e\u9109--F-D0047-045"},{"label":"\u767d\u6c99\u9109","value":"\u767d\u6c99\u9109--F-D0047-045"},{"label":"\u6e56\u897f\u9109","value":"\u6e56 \u897f\u9109--F-D0047-045"}]},{"label":"\u91d1\u9580\u7e23","options":[{"label":"\u91d1\u6c99\u93ae","value":"\u91d1\u6c99\u93ae--F-D0047-085"},{"label":"\u91d1\u6e56\u93ae","value":"\u91d1\u6e56\u93ae--F-D0047-085"},{"label":"\u91d1\u5be7\u9109","value":"\u91d1\u5be7\u9109--F-D0047-085"},{"label":"\u91d1\u57ce\u93ae","value":"\u91d1\u57ce\u93ae--F-D0047-085"},{"label":"\u70c8\u5dbc\u9109","value":"\u70c8\u5dbc\u9109--F-D0047-085"},{"label":"\u70cf\u5775\u9109","value":"\u70cf\u5775\u9109--F-D0047-085"}]},{"label":"\u5c4f\u6771\u7e23","options":[{"label":"\u5c4f\u6771\u5e02","value":"\u5c4f\u6771\u5e02--F-D0047-033"},{"label":"\u4e09\u5730\u9580\u9109","value":"\u4e09\u5730\u9580\u9109--F-D0047-033"},{"label":"\u9727\u81fa\u9109","value":"\u9727\u81fa\u9109--F-D0047-033"},{"label":"\u746a\u5bb6\u9109","value":"\u746a\u5bb6\u9109--F-D0047-033"},{"label":"\u4e5d\u5982\u9109","value":"\u4e5d\u5982\u9109--F-D0047-033"},{"label":"\u91cc\u6e2f\u9109","value":"\u91cc\u6e2f\u9109--F-D0047-033"},{"label":"\u9ad8\u6a39\u9109","value":"\u9ad8\u6a39\u9109--F-D0047-033"},{"label":"\u9e7d\u57d4\u9109","value":"\u9e7d\u57d4\u9109--F-D0047-033"},{"label":"\u9577\u6cbb\u9109","value":"\u9577\u6cbb\u9109--F-D0047-033"},{"label":"\u9e9f\u6d1b\u9109","value":"\u9e9f\u6d1b\u9109--F-D0047-033"},{"label":"\u7af9\u7530\u9109","value":"\u7af9\u7530\u9109--F-D0047-033"},{"label":"\u5167\u57d4\u9109","value":"\u5167\u57d4\u9109--F-D0047-033"},{"label":"\u842c\u4e39\u9109","value":"\u842c\u4e39\u9109--F-D0047-033"},{"label":"\u6f6e\u5dde\u93ae","value":"\u6f6e\u5dde\u93ae--F-D0047-033"},{"label":"\u6cf0\u6b66\u9109","value":"\u6cf0\u6b66\u9109--F-D0047-033"},{"label":"\u4f86\u7fa9\u9109","value":"\u4f86\u7fa9\u9109--F-D0047-033"},{"label":"\u842c\u5dd2\u9109","value":"\u842c\u5dd2\u9109--F-D0047-033"},{"label":"\u5d01\u9802\u9109","value":"\u5d01\u9802\u9109--F-D0047-033"},{"label":"\u65b0\u57e4\u9109","value":"\u65b0\u57e4\u9109--F-D0047-033"},{"label":"\u5357\u5dde\u9109","value":"\u5357\u5dde\u9109--F-D0047-033"},{"label":"\u6797\u908a\u9109","value":"\u6797\u908a\u9109--F-D0047-033"},{"label":"\u6771\u6e2f\u93ae","value":"\u6771\u6e2f\u93ae--F-D0047-033"},{"label":"\u7409\u7403\u9109","value":"\u7409\u7403\u9109--F-D0047-033"},{"label":"\u4f73\u51ac\u9109","value":"\u4f73\u51ac\u9109--F-D0047-033"},{"label":"\u65b0\u5712\u9109","value":"\u65b0\u5712\u9109--F-D0047-033"},{"label":"\u678b\u5bee\u9109","value":"\u678b\u5bee\u9109--F-D0047-033"},{"label":"\u678b\u5c71\u9109","value":"\u678b\u5c71\u9109--F-D0047-033"},{"label":"\u6625\u65e5\u9109","value":"\u6625\u65e5\u9109--F-D0047-033"},{"label":"\u7345\u5b50\u9109","value":"\u7345\u5b50\u9109--F-D0047-033"},{"label":"\u8eca\u57ce\u9109","value":"\u8eca\u57ce\u9109--F-D0047-033"},{"label":"\u7261\u4e39\u9109","value":"\u7261\u4e39\u9109--F-D0047-033"},{"label":"\u6046\u6625\u93ae","value":"\u6046\u6625\u93ae--F-D0047-033"},{"label":"\u6eff\u5dde\u9109","value":"\u6eff\u5dde\u9109--F-D0047-033"}]},{"label":"\u81fa\u6771\u7e23","options":[{"label":"\u81fa\u6771\u5e02","value":"\u81fa\u6771\u5e02--F-D0047-037"},{"label":"\u7da0\u5cf6\u9109","value":"\u7da0\u5cf6\u9109--F-D0047-037"},{"label":"\u862d\u5dbc\u9109","value":"\u862d\u5dbc\u9109--F-D0047-037"},{"label":"\u5ef6\u5e73\u9109","value":"\u5ef6\u5e73\u9109--F-D0047-037"},{"label":"\u5351\u5357\u9109","value":"\u5351\u5357\u9109--F-D0047-037"},{"label":"\u9e7f\u91ce\u9109","value":"\u9e7f\u91ce\u9109--F-D0047-037"},{"label":"\u95dc\u5c71\u93ae","value":"\u95dc\u5c71\u93ae--F-D0047-037"},{"label":"\u6d77\u7aef\u9109","value":"\u6d77\u7aef\u9109--F-D0047-037"},{"label":"\u6c60\u4e0a\u9109","value":"\u6c60\u4e0a\u9109--F-D0047-037"},{"label":"\u6771\u6cb3\u9109","value":"\u6771\u6cb3\u9109--F-D0047-037"},{"label":" \u6210\u529f\u93ae","value":" \u6210\u529f\u93ae--F-D0047-037"},{"label":"\u9577\u6ff1\u9109","value":"\u9577\u6ff1\u9109--F-D0047-037"},{"label":"\u592a\u9ebb\u91cc\u9109","value":"\u592a\u9ebb\u91cc\u9109--F-D0047-037"},{"label":"\u91d1\u5cf0\u9109","value":"\u91d1\u5cf0\u9109--F-D0047-037"},{"label":"\u5927\u6b66\u9109","value":"\u5927\u6b66\u9109--F-D0047-037"},{"label":"\u9054\u4ec1\u9109","value":"\u9054\u4ec1\u9109--F-D0047-037"}]},{"label":"\u82b1\u84ee\u7e23","options":[{"label":"\u82b1\u84ee\u5e02","value":"\u82b1\u84ee\u5e02--F-D0047-041"},{"label":"\u65b0\u57ce\u9109","value":"\u65b0\u57ce\u9109--F-D0047-041"},{"label":"\u79c0\u6797\u9109","value":"\u79c0\u6797\u9109--F-D0047-041"},{"label":"\u5409\u5b89\u9109","value":"\u5409\u5b89\u9109--F-D0047-041"},{"label":"\u58fd\u8c50\u9109","value":"\u58fd\u8c50\u9109--F-D0047-041"},{"label":"\u9cf3\u6797\u93ae","value":"\u9cf3\u6797\u93ae--F-D0047-041"},{"label":"\u5149\u5fa9\u9109","value":"\u5149\u5fa9\u9109--F-D0047-041"},{"label":"\u8c50\u6ff1\u9109","value":"\u8c50\u6ff1\u9109--F-D0047-041"},{"label":"\u745e\u7a57\u9109","value":"\u745e\u7a57\u9109--F-D0047-041"},{"label":"\u842c\u69ae\u9109","value":"\u842c\u69ae\u9109--F-D0047-041"},{"label":"\u7389\u91cc\u93ae","value":"\u7389\u91cc\u93ae--F-D0047-041"},{"label":"\u5353\u6eaa\u9109","value":"\u5353\u6eaa\u9109--F-D0047-041"},{"label":"\u5bcc\u91cc\u9109","value":"\u5bcc\u91cc\u9109--F-D0047-041"}]}]');function E(){var l=(0,b.useState)({label:"\u677f\u6a4b\u5340",value:"F-D0047-069"}),e=l[0],a=l[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v.Z,{state:e,setState:a,options:S,instanceId:"SelectCities"}),(0,u.jsx)("h1",{children:e.label}),(0,u.jsx)(g,{city:e})]})}},7585:function(l,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/predict",function(){return a(8108)}])},2520:function(l){l.exports={weatherDisplay:"styles_weatherDisplay__b1y0M"}},9267:function(l){l.exports={groupStyles:"style_groupStyles__3RwdD",groupBadgeStyles:"style_groupBadgeStyles__bvEvc"}}},function(l){l.O(0,[774,723,957,711,9,888,179],(function(){return e=7585,l(l.s=e);var e}));var e=l.O();_N_E=e}]);