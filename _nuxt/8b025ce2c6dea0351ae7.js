(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{230:function(t,e,n){var content=n(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},231:function(t,e,n){"use strict";var o=n(230);n.n(o).a},232:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},233:function(t,e,n){"use strict";var o=n(1).default.extend({props:{icon:{type:String}}}),r=(n(231),n(4)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},237:function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("56eebe64",content,!1,{sourceMap:!1})},238:function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("6c430a53",content,!1,{sourceMap:!1})},267:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/26","url":"https://www.seisakukikaku.metro.tokyo.lg.jp/information/message.html","text":"１都４県知事共同メッセージ"},{"date":"2020/03/26","url":"https://www.seisakukikaku.metro.tokyo.lg.jp/information/20200326youbou.html","text":"新型コロナウイルス感染症への対応に関する緊急要望（令和2年３月２６日）"}]}')},273:function(t,e,n){"use strict";var o=n(237);n.n(o).a},274:function(t,e,n){(e=n(10)(!1)).push([t.i,"\n.LegendBlock[data-v-395f10db] {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  opacity: 0.5;\n}\nli[data-v-395f10db] {\n  list-style: none;\n  float: left;\n  font-size: 14px;\n  padding-right: 4px;\n}\nli[data-v-395f10db]:last-child {\n  padding-right: 0;\n}\nul[data-v-395f10db] {\n  margin: 0;\n  padding: 0;\n}\n.clearfix[data-v-395f10db]::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n",""]),t.exports=e},275:function(t,e,n){"use strict";var o=n(238);n.n(o).a},276:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-slider__tick-label[data-v-0f09f84c]{transform:rorate(90deg)}.MapCard-BodyContainer[data-v-0f09f84c]{position:relative}.MapCard-BodyContainer-LoadingScreen[data-v-0f09f84c]{position:absolute;height:100%;width:100%;background-color:rgba(255,255,255,.75);top:0;left:0}",""]),t.exports=e},277:function(t,e,n){var content=n(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("198875be",content,!1,{sourceMap:!1})},294:function(t,e,n){"use strict";n(241);var o=n(236),r=(n(38),n(24),n(18),n(14),n(29),n(20));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={components:{Mapbox:n(297).a},props:{mapId:{type:String,default:""},initialBounds:{type:Array,default:function(){return[]}},mapOptions:{type:Object,required:!1,default:function(){return{}}},legend:{type:Array,default:function(){return[]}}},data:function(){return{dateSequence:[],mapObject:null,colors:["rgba(80, 91, 0, 0.25)","rgba(27, 117, 188, 0.5)","rgba(0, 100, 0, 0.6)","rgba(0, 68, 27, 0.7)"],borderColors:["#505B00","#1B75BC","#006400","#00441B"],dataDrivenLegend:null}},computed:{actualLegend:function(){return 0===this.legend.length?this.dataDrivenLegend:this.legend},actualMapOptions:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({style:"https://tokyo-metropolitan-gov.github.io/tokyo-vector-tile/style.json",zoom:14,center:[139.69167,35.689444],antialias:!1,interactive:!1},this.mapOptions,{container:this.mapId})}},methods:{dataDrivenInitialization:function(map){if(0===this.dateSequence.length){var t=map.queryRenderedFeatures({layers:["heatmap"]});if(0!==t.length){this.dateSequence=Object.keys(t[0].properties).sort(),this.$emit("dateTicksUpdated",this.dateSequence);var e=this.dateSequence[this.dateSequence.length-1],n=0;t.forEach((function(t){n<t.properties[e]&&(n=t.properties[e])}));var o=.25*(1e4+1e4*Math.floor(1e-4*n));this.dataDrivenLegend=[o,2*o,3*o],map.setPaintProperty("heatmap","fill-color",["step",["get",e],this.colors[0],this.actualLegend[0],this.colors[1],this.actualLegend[1],this.colors[2],this.actualLegend[2],this.colors[3]]),this.$emit("legendUpdated",[{borderColor:this.borderColors[0],color:this.colors[0],valueFrom:0,valueTo:this.actualLegend[0]},{borderColor:this.borderColors[1],color:this.colors[1],valueFrom:this.actualLegend[0],valueTo:this.actualLegend[1]},{borderColor:this.borderColors[2],color:this.colors[2],valueFrom:this.actualLegend[1],valueTo:this.actualLegend[2]},{borderColor:this.borderColors[3],color:this.colors[3],valueFrom:this.actualLegend[2],valueTo:null}]),this.$emit("loadCompleted")}else setTimeout(this.dataDrivenInitialization,1e3,map)}},loaded:function(map){this.initialBounds.length>1&&this.initialBounds[0].length>1&&this.initialBounds[1].length>1&&map.fitBounds(this.initialBounds,{linear:!0}),map.addLayer({id:"heatmap",type:"fill",source:{type:"vector",tiles:["https://tokyo-metropolitan-gov.github.io/data/tiles/{z}/{x}/{y}.pbf"],minzoom:11,maxzoom:11},"source-layer":"dfi-place-heatmap-population",paint:{"fill-color":"#fff","fill-opacity":.5,"fill-outline-color":"rgba(0, 0, 0, 0)"}}),this.dataDrivenInitialization(map)},mapInitialized:function(map){this.mapObject=map},updatePaintProperty:function(t){if(null!==this.mapObject&&null!==this.legend){var p=["step",["get",t],this.colors[0],this.actualLegend[0],this.colors[1],this.actualLegend[1],this.colors[2],this.actualLegend[2],this.colors[3]];this.mapObject.setPaintProperty("heatmap","fill-color",p)}}}},c=n(4),h=Object(c.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("mapbox",{attrs:{"access-token":"","map-options":this.actualMapOptions,"nav-control":{show:!1},"attribution-control":{show:!0,position:"top-right"}},on:{"map-load":this.loaded,"map-init":this.mapInitialized}})}),[],!1,null,null,null).exports,f=n(295),m={props:{legendData:{type:Array,default:function(){return[]}}}},v=(n(273),Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"clearfix"},t._l(t.legendData,(function(e){return n("li",{key:e.valueFrom},[n("span",{staticClass:"LegendBlock",style:"background-color: "+e.color+"; border: 1px solid "+e.borderColor}),t._v("\n      "+t._s(e.valueFrom+"〜"+(null!==e.valueTo?e.valueTo:""))+"\n    ")])})),0)])}),[],!1,null,"395f10db",null).exports),y={components:{DataView:o.a,SourceLink:f.a,Heatmap:h,HeatmapLegend:v},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},detailPageUrl:{type:String,default:""},detailPageString:{type:String,default:""},url:{type:String,default:""},mapHeight:{type:Number,default:240},linkString:{type:String,default:""},sourceLinkHeader:{type:String,default:""},heatmapLegend:{type:Array,default:function(){return[]}},mapOptions:{type:Object,default:function(){return{}},required:!1},initialBounds:{type:Array,default:function(){return[]}},unit:{type:String,default:""},mapId:{type:String,default:"map"}},data:function(){return{dateTicks:["20200201"],legendData:[],loading:!0,dateSliderValue:0}},computed:{dataDate:function(){return this.dateTicks[this.dateSliderValue]},dateTickValue:function(){var t=this;return this.dateTicks.map((function(e,i){return(t.dateTicks.length-i)%6==1?"".concat(e.substring(4,6),"/").concat(e.substring(6)):""}))}},methods:{updateLegend:function(t){this.legendData=t},loadCompleted:function(){this.loading=!1},handleFocusChanged:function(t){this.$refs.heatmapComponentRef.updatePaintProperty(this.dataDate)},dateTicksUpdated:function(t){this.dateTicks=t,this.dateSliderValue=this.dateTicks.length-1}}},k=(n(275),Object(c.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{staticClass:"MapCard",attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url,loading:t.loading},scopedSlots:t._u([{key:"description",fn:function(){return[n("ol",[n("li",[t._v("\n        "+t._s(t.$t("※ ヤフーに蓄積された位置情報データなどを元に算出した参考値"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("※ 土・日・祝日を除く7:30~8:30の平均値")))])])]},proxy:!0},{key:"footer",fn:function(){return[n("source-link",{attrs:{url:t.url,"link-string":t.linkString,header:t.sourceLinkHeader}})]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"MapCard-BodyContainer"},[n("heatmap-legend",{attrs:{"legend-data":t.legendData}}),t._v(" "),n("heatmap",{ref:"heatmapComponentRef",staticClass:"MapCard-Heatmap",style:{height:t.mapHeight+"px"},attrs:{"map-id":t.mapId,"initial-bounds":t.initialBounds,"map-options":t.mapOptions,legend:t.heatmapLegend},on:{legendUpdated:t.updateLegend,loadCompleted:t.loadCompleted,dateTicksUpdated:t.dateTicksUpdated}}),t._v(" "),n("v-slider",{attrs:{"tick-labels":t.dateTickValue,max:t.dateTicks.length-1,step:"1","tick-size":"4"},on:{input:t.handleFocusChanged},model:{value:t.dateSliderValue,callback:function(e){t.dateSliderValue=e},expression:"dateSliderValue"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.detailPageUrl,expression:"detailPageUrl !== ''"}],staticClass:"DetailPageLink"},[n("nuxt-link",{attrs:{to:t.detailPageUrl}},[t._v("\n        "+t._s(t.detailPageString)+"\n      ")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"MapCard-BodyContainer-LoadingScreen"})],1)])}),[],!1,null,"0f09f84c",null));e.a=k.exports},364:function(t,e,n){"use strict";var o=n(277);n.n(o).a},365:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .DataBlock[data-v-4ccdd043]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-4ccdd043]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-4ccdd043]{padding:4px 8px}}",""]),t.exports=e},405:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(233),l=n(234),d=n(267),c=n(294),h=o.default.extend({components:{PageHeader:r.a,MapCard:c.a},data:function(){var data={Data:l,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("東京都23区の人口推移（参考値）"),date:l.lastUpdate},newsItems:d.newsItems};return data},head:function(){return{title:this.$t("東京都23区の人口推移（参考値）")}}}),f=(n(364),n(4)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n    "+t._s(t.headerItem.title)+"\n  ")]),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"12"}},[n("map-card",{attrs:{title:"",caption:t.$t("※7:30〜8:30の平均値"),"title-id":"tokyo-city-title","chart-id":"tokyo-city-chart","map-id":"tokyo-city-map","initial-bounds":[[139.695239,35.676437],[139.773774,35.694493]],"map-height":640,"map-options":{interactive:!0},unit:"人",url:"https://ds.yahoo.co.jp/datapolicy/","source-link-header":t.$t("※本データは2020年3月31日までの掲載となります"),"heatmap-legend":[2e4,4e4,6e4],"link-string":t.$t("ヤフー・データソリューション"),date:""}})],1)],1)],1)}),[],!1,null,"4ccdd043",null);e.default=component.exports}}]);