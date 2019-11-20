(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("5f5b"),o=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"bg-primary text-white p-5 mb-4"},[n("b-container",{staticClass:"text-center"},[n("p",[e._v('\n        The bar charts represent the distance between word types in news articles\n        and persons. For  example, given the sentence: "I\'m Donald Trump, the American president.", the\n        distance between the adjective "American" and "Donald Trump" would equal three. Because "the" and ","\n        are in between. The cumulated word occurrences are visualized through a color scale. Bars are\n        ordered by occurrences as well.\n      ')]),n("b-form-select",{attrs:{size:"lg",options:e.persons},model:{value:e.person,callback:function(t){e.person=t},expression:"person"}})],1)],1),n("b-container",{staticClass:"mb-4"},[e.person?n("div",[n("h2",[e._v(e._s(e.person))]),n("entity-get",{attrs:{entity:e.person}})],1):e._e()]),n("footer",[n("b-container",[n("a",{attrs:{href:"https://github.com/ndabAP/entityscrape"}},[e._v("Source code")])])],1)],1)}),i=[],s=(n("96cf"),n("3b8d")),c=n("bc3a"),u=n.n(c),p=n("a59b"),l=n.n(p),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.news>0?n("p",[e._v("Based on "+e._s(e._f("format")(e.news))+" news and "+e._s(e._f("format")(e.associations))+" associations.")]):e._e(),n("b-form-select",{staticClass:"mb-4",attrs:{options:e.partOfSpeeches},model:{value:e.partOfSpeech,callback:function(t){e.partOfSpeech=t},expression:"partOfSpeech"}}),n("div",{attrs:{id:e.dash+"-chart"}})],1)},f=[],d=n("c17d"),m=n.n(d),v=n("375a"),g=n.n(v);m.a.register([n("f725")]);var w={type:"bar",x:[],y:[],text:[],textposition:"auto",orientation:"h",marker:{color:[]}},b={props:{entity:{type:String,required:!0}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getEntity();case 2:return m.a.newPlot("".concat(this.dash,"-chart"),[this.chart],this.layout,this.options),e.next=5,this.getNews();case 5:return e.next=7,this.getAssociations();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{partOfSpeech:"adj",partOfSpeeches:[{value:"adj",text:"Adjective"},{value:"adp",text:"Adposition"},{value:"adv",text:"Adverb"},{value:"conj",text:"Conjunction"},{value:"det",text:"Determiner"},{value:"noun",text:"Noun"},{value:"num",text:"Cardinal number"},{value:"pron",text:"Pronoun"},{value:"prt",text:"Particle"},{value:"punct",text:"Punctuation"},{value:"verb",text:"Verb"},{value:"x",text:"Other"}],news:0,associations:0,chart:w,layout:{autosize:!0,font:{family:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',size:14,color:"#000000"},margin:{b:0,t:0,r:0,pad:4},xaxis:{fixedrange:!0,zeroline:!1,ticks:"",showgrid:!1},yaxis:{fixedrange:!0,zeroline:!1,ticks:"",showgrid:!1},showlegend:!1,hovermode:!1},options:{displayModeBar:!1,responsive:!0}}},filters:{format:function(e){var t=Intl.NumberFormat();return t.format(e)}},methods:{getEntity:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/entities?entity=".concat(t.uri,"&part-of-speech=").concat(t.partOfSpeech));case 2:r=e.sent,a=r.data,t.chart.x=[],t.chart.y=[],t.chart.text=[],t.chart.marker.color=[],a.map((function(e){var n=e.count,r=e.distance,a=e.word;t.chart.x.push(Math.round(r)),t.chart.y.push(a),t.chart.text.push(Math.round(r)),t.chart.marker.color.push(n)})),n();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getAssociations:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/associations?entity=".concat(t.uri));case 2:r=e.sent,a=r.data,t.associations=a,n();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getNews:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/news?entity=".concat(t.uri));case 2:r=e.sent,a=r.data,t.news=a,n();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},computed:{dash:{get:function(){return g()(this.entity)}},uri:{get:function(){return encodeURIComponent(this.entity)}}},watch:{partOfSpeech:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getEntity();case 2:m.a.update("".concat(this.dash,"-chart"),{},this.layout,this.options);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),entity:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getEntity();case 2:return m.a.newPlot("".concat(this.dash,"-chart"),[this.chart],this.layout,this.options),e.next=5,this.getNews();case 5:return e.next=7,this.getAssociations();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},y=b,x=n("0c7c"),O=Object(x["a"])(y,h,f,!1,null,null,null),j=O.exports,k={components:{EntityGet:j},data:function(){return{persons:[],person:""}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/list");case 2:t=e.sent,n=t.data,this.persons=n,this.person=l()(n);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},R=k,S=Object(x["a"])(R,o,i,!1,null,null,null),_=S.exports,P=n("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].use(a["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(_)}}).$mount("#app")}});
//# sourceMappingURL=app.96bf0918.js.map