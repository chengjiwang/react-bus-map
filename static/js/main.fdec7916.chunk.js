(this["webpackJsonpreact-bus-map"]=this["webpackJsonpreact-bus-map"]||[]).push([[0],{158:function(e,t,a){},159:function(e,t,a){},183:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),s=(a(158),a(159),a(30)),u=a(272),l=a(271),o=a(86),b=a(109),d=a.n(b),j=a(134),p=a(75),f=a(135),h=a.n(f).a.create({baseURL:"https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/Streaming/City/Chiayi"}),m=Object(p.b)("bus/fetchBuses",Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),O=Object(p.c)({name:"bus",initialState:{originalData:[],filterData:[],busDetail:{},status:"idle",updateTime:""},reducers:{filterBus:function(e,t){var a=e.originalData.filter((function(e){return e.RouteName.Zh_tw===t.payload}));a&&(e.filterData=a)},busDetail:function(e,t){var a=e.originalData.find((function(e){return e.PlateNumb===t.payload}));e.busDetail=a}},extraReducers:Object(o.a)({},m.fulfilled,(function(e,t){e.status="succeeded",e.originalData=t.payload,e.filterData=t.payload,e.updateTime=(new Date).toISOString()}))}),x=O.actions,D=x.filterBus,v=x.busDetail,N=O.reducer,g=a(73),I=a(268),w=(a(183),a(12)),P=[{title:"\u8eca\u724c\u865f\u78bc",dataIndex:"PlateNumb",sorter:function(e,t){return e.PlateNumb.localeCompare(t.PlateNumb,"co",{ignorePunctuation:!0})}},{title:"\u99d5\u99dbID",dataIndex:"OperatorID",sorter:function(e,t){return e.OperatorID-t.OperatorID}},{title:"\u884c\u8eca\u8def\u7dda",dataIndex:["RouteName","Zh_tw"],sorter:function(e,t){return e.RouteName.Zh_tw.length-t.RouteName.Zh_tw.length}},{title:"\u884c\u8eca\u901f\u5ea6 km/h",dataIndex:"Speed",sorter:function(e,t){return e.Speed-t.Speed}}],y=function(e){var t=e.originalData,a=e.filterData,n=g.a.Option,r=Object(s.b)(),c=[];!function(){var e=new Set;t.forEach((function(t){e.add(t.RouteName.Zh_tw)})),c=Array.from(e)}();var i=c.map((function(e,t){return Object(w.jsx)(n,{value:e,children:e},t)}));return Object(w.jsx)("div",{className:"list",children:Object(w.jsxs)(u.a,{gutter:32,children:[Object(w.jsx)(l.a,{span:18,children:Object(w.jsx)(I.a,{columns:P,dataSource:a,rowKey:"PlateNumb"})}),Object(w.jsxs)(l.a,{span:6,className:"filter",children:[Object(w.jsx)("h2",{className:"filter-title",children:"Filter"}),Object(w.jsx)(g.a,{defaultValue:"\u884c\u8eca\u8def\u7dda",style:{width:170},onChange:function(e){r(D(e))},children:i})]})]})})},S=a(28),B=a.n(S),F=(a(255),a(265)),R=a(266),C=a(267),T=a(146),L=a.n(T),M=(a(257),a.p+"static/media/bus.bef1af57.svg"),Z=(a(258),function(e){var t=e.filterData,a=Object(s.b)(),n=new B.a.Icon({iconUrl:M,iconSize:new B.a.Point(40,40)}),r=t.map((function(e){var t=[e.BusPosition.PositionLat,e.BusPosition.PositionLon];return Object(w.jsx)(F.a,{position:t,data:e.PlateNumb,icon:n,eventHandlers:{click:function(e){var t=e.target.options.data;a(v(t))}}},e.PlateNumb)}));return Object(w.jsxs)(R.a,{center:[23.4792933333333,120.437648333333],zoom:11,className:"map",children:[Object(w.jsx)(C.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(w.jsx)(L.a,{children:r})]})}),_=a(270),k=a(269),z=(a(259),function(e){var t=e.busDetail,a=Object(s.c)((function(e){return e.bus.updateTime})),n=void 0===t.RouteName?"":t.RouteName.Zh_tw,r=a?Object(k.a)(new Date(a),"MM/dd H:mm"):"";return Object(w.jsxs)("div",{className:"detail",children:[Object(w.jsx)("label",{htmlFor:"plateNumb",children:"\u8eca\u724c\u865f\u78bc"}),Object(w.jsx)(_.a,{id:"plateNumb",value:t.PlateNumb,className:"detail-input",placeholder:"\u8eca\u724c\u865f\u78bc"}),Object(w.jsx)("label",{htmlFor:"operatorID",children:"\u99d5\u99dbID"}),Object(w.jsx)(_.a,{id:"operatorID",value:t.OperatorID,className:"detail-input",placeholder:"\u99d5\u99dbID"}),Object(w.jsx)("label",{htmlFor:"routeName",children:"\u884c\u8eca\u8def\u7dda"}),Object(w.jsx)(_.a,{id:"routeName",value:n,className:"detail-input",placeholder:"\u884c\u8eca\u8def\u7dda"}),Object(w.jsx)("label",{htmlFor:"speed",children:"\u884c\u8eca\u901f\u5ea6"}),Object(w.jsx)(_.a,{id:"speed",value:t.Speed,className:"detail-input",placeholder:"\u884c\u8eca\u901f\u5ea6"}),Object(w.jsx)("div",{className:"update-time",children:Object(w.jsxs)("span",{children:["\u6700\u5f8c\u66f4\u65b0 ",r]})})]})});a(260);var E=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.bus.originalData})),a=Object(s.c)((function(e){return e.bus.filterData})),r=Object(s.c)((function(e){return e.bus.busDetail})),c=Object(s.c)((function(e){return e.bus.status}));return Object(n.useEffect)((function(){"idle"===c&&e(m());var t=setInterval((function(){return e(m())}),6e5);return function(){clearInterval(t)}}),[c,e]),Object(w.jsxs)("div",{className:"app",children:[Object(w.jsx)("h1",{children:"\u5609\u7fa9\u5e02 Live Bus Map"}),Object(w.jsxs)(u.a,{gutter:32,children:[Object(w.jsx)(l.a,{span:6,children:Object(w.jsx)(z,{busDetail:r})}),Object(w.jsx)(l.a,{span:18,children:Object(w.jsx)(Z,{filterData:a})})]}),Object(w.jsx)(u.a,{children:Object(w.jsx)(l.a,{span:24,children:Object(w.jsx)(y,{originalData:t,filterData:a})})})]})},H=Object(p.a)({reducer:{bus:N}}),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,273)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(s.a,{store:H,children:Object(w.jsx)(E,{})})}),document.getElementById("root")),J()}},[[261,1,2]]]);
//# sourceMappingURL=main.fdec7916.chunk.js.map