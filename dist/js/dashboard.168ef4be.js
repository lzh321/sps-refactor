(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"035e":function(t,e,a){},"096e":function(t,e,a){"use strict";var s=a("9515"),i=a.n(s);i.a},"311a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slider"},[a("div",{staticClass:"products"},[a("h4",[t._v("各产品访客")]),a("div",{staticClass:"slider"},[a("swiper",{attrs:{options:t.productSwiperOption}},t._l(t.sliderProducts,(function(e,s){return a("swiper-slide",{key:s,class:{active:t.productIsActive===s},nativeOn:{click:function(e){return t.selectProducts(s)}}},[a("div",{staticClass:"text"},[a("h5",[t._v(t._s(e.code))]),a("p",[t._v("访客占比")]),a("span",[t._v(t._s(e.radio)+"%")])]),a("div",{staticClass:"circle"},[a("el-progress",{attrs:{type:"circle","stroke-width":8,width:70,percentage:e.radio}})],1)])})),1)],1),a("div",{staticClass:"charts"},[a("h5",[t._v(t._s(t.productInvokeCode)+"各公司访客")]),a("ve-line",{ref:"products",attrs:{data:t.productChartData,settings:t.productChartSettings}})],1)]),a("TableAndRing",{attrs:{tableTitle:t.hotProducts.tableTitle,ringTitle:t.hotProducts.ringTitle,tableData:t.hotProducts.tableData,chartData:t.hotProducts.chartData,chartSettings:t.hotProducts.chartSettings}}),a("TableAndRing",{attrs:{tableTitle:t.bigCustomer.tableTitle,ringTitle:t.bigCustomer.ringTitle,tableData:t.bigCustomer.tableData,chartData:t.bigCustomer.chartData,chartSettings:t.bigCustomer.chartSettings}})],1)},i=[],r=(a("cc57"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-and-ring"},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{xs:24,md:12}},[a("div",{staticClass:"grid-content bg-white"},[a("h4",[t._v(t._s(t.tableTitle))]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"排名",width:"100"}}),a("el-table-column",{attrs:{align:"center",prop:"name",label:"产品名",width:""}}),a("el-table-column",{attrs:{align:"center",prop:"amount",label:"调用量",width:""}}),a("el-table-column",{attrs:{align:"center",prop:"increase",label:"周涨幅"}})],1),a("el-pagination",{attrs:{layout:"prev, pager, next",total:50}})],1)]),a("el-col",{attrs:{xs:24,md:12}},[a("div",{staticClass:"grid-content bg-white"},[a("h4",[t._v(t._s(t.ringTitle))]),a("ve-ring",{attrs:{data:t.chartData,height:"320px",settings:t.chartSettings}})],1)])],1)],1)}),n=[],o={name:"",props:{tableTitle:{type:String,default:function(){return""}},ringTitle:{type:String,default:function(){return""}},tableData:{type:Array,default:function(){return[]}},chartData:{type:Object,default:function(){}},chartSettings:{type:Object,default:function(){}}},data:function(){return{}},methods:{}},c=o,l=(a("b219"),a("5511")),d=Object(l["a"])(c,r,n,!1,null,null,null),h=d.exports,u={name:"Slider",components:{TableAndRing:h},data:function(){return this.productChartSettings={dimension:["时间"],scale:[!0,!0],area:!0},this.formChartSettings={dimension:["时间"],scale:[!0,!0],area:!0},{activeName:"invoke",dateValue:"",datePickerOptions:{disabledDate:function(t){return t.getTime()>Date.now()}},productChartData:{columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":75700,"上海":4311,"青岛":1e3},{"时间":"2019-03-02","北京":72936,"上海":6650,"青岛":1307},{"时间":"2019-03-03","北京":76636,"上海":7085,"青岛":1707},{"时间":"2019-03-04","北京":66536,"上海":6085,"青岛":2105},{"时间":"2019-03-05","北京":77516,"上海":5105,"青岛":1505},{"时间":"2019-03-06","北京":80536,"上海":8015,"青岛":1750}]},formChartData:{columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":56e3,"床单":22e3,"枕头":8888,Y0906:666},{"时间":"2019-03-02","毛衣":44e3,"床单":24e3,"枕头":5888,Y0906:766},{"时间":"2019-03-03","毛衣":51e3,"床单":21e3,"枕头":6888,Y0906:1166},{"时间":"2019-03-04","毛衣":59e3,"床单":27e3,"枕头":8888,Y0906:966},{"时间":"2019-03-05","毛衣":66e3,"床单":12e3,"枕头":6888,Y0906:1266},{"时间":"2019-03-06","毛衣":52e3,"床单":29e3,"枕头":7888,Y0906:1066}]},productSwiperOption:{slidesPerView:4,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},formSwiperOption:{slidesPerView:4,spaceBetween:30,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}},productIsActive:0,productInvokeCode:"毛衣",formIsActive:0,formInvokeName:"北京",sliderProducts:[{code:"毛衣",radio:63},{code:"床单",radio:15},{code:"枕头",radio:2},{code:"窗帘",radio:1}],sliderForms:[{code:"北京",radio:72},{code:"上海",radio:12},{code:"上海淇毓",radio:9},{code:"北京济南",radio:6}],hotProducts:{tableTitle:"热门产品",ringTitle:"各产品关注占比",tableData:[{id:1,name:"毛衣",amount:"82093",increase:"128%"},{id:2,name:"羽绒服",amount:"77093",increase:"33%"},{id:3,name:"枕头",amount:"66752",increase:"25%"},{id:4,name:"短袖",amount:"57890",increase:"55%"},{id:5,name:"手套",amount:"5567",increase:"67%"}],chartData:{columns:["产品","关注"],rows:[{"产品":"毛衣","关注":1393},{"产品":"羽绒服","关注":3530},{"产品":"枕头","关注":2923},{"产品":"短袖","关注":1723},{"产品":"手套","关注":3792}]},chartSettings:{dimension:"产品",metrics:"关注",offsetY:180}},bigCustomer:{tableTitle:"大客户",ringTitle:"各客户关注占比",tableData:[{id:1,name:"北京",amount:"82093",increase:"183%"},{id:2,name:"济南",amount:"77093",increase:"33%"},{id:3,name:"苏州",amount:"66752",increase:"25%"},{id:4,name:"大连",amount:"57890",increase:"55%"},{id:5,name:"西安",amount:"5567",increase:"67%"}],chartData:{columns:["公司","关注"],rows:[{"产品":"北京","关注":10093},{"产品":"济南","关注":5530},{"产品":"苏州","关注":2923},{"产品":"大连","关注":1723},{"产品":"西安","关注":992}]},chartSettings:{dimension:"产品",metrics:"关注",offsetY:180}}}},watch:{activeName:function(t){var e=this;this.$nextTick((function(){e.$refs["".concat(t)].echarts.resize()}))}},methods:{handleTab:function(t){console.log(t.name)},selectProducts:function(t){console.log(t),this.productIsActive=t,0===t?(this.productInvokeCode="毛衣",this.productChartData={columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":75700,"上海":4311,"青岛":1e3},{"时间":"2019-03-02","北京":72936,"上海":6650,"青岛":1307},{"时间":"2019-03-03","北京":76636,"上海":7085,"青岛":1707},{"时间":"2019-03-04","北京":66536,"上海":6085,"青岛":2105},{"时间":"2019-03-05","北京":77516,"上海":5105,"青岛":1505},{"时间":"2019-03-06","北京":80536,"上海":8015,"青岛":1750}]}):1===t?(this.productInvokeCode="床单",this.productChartData={columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":15700,"上海":800,"青岛":200},{"时间":"2019-03-02","北京":11936,"上海":650,"青岛":307},{"时间":"2019-03-03","北京":12636,"上海":785,"青岛":197},{"时间":"2019-03-04","北京":14536,"上海":885,"青岛":215},{"时间":"2019-03-05","北京":15516,"上海":705,"青岛":155},{"时间":"2019-03-06","北京":16536,"上海":805,"青岛":250}]}):2===t?(this.productInvokeCode="枕头",this.productChartData={columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":650,"上海":300,"青岛":300},{"时间":"2019-03-02","北京":736,"上海":250,"青岛":307},{"时间":"2019-03-03","北京":636,"上海":285,"青岛":297},{"时间":"2019-03-04","北京":536,"上海":285,"青岛":215},{"时间":"2019-03-05","北京":516,"上海":205,"青岛":255},{"时间":"2019-03-06","北京":636,"上海":305,"青岛":350}]}):3===t&&(this.productInvokeCode="窗帘",this.productChartData={columns:["时间","北京","上海","青岛"],rows:[{"时间":"2019-03-01","北京":157,"上海":100,"青岛":300},{"时间":"2019-03-02","北京":136,"上海":150,"青岛":307},{"时间":"2019-03-03","北京":166,"上海":115,"青岛":297},{"时间":"2019-03-04","北京":156,"上海":125,"青岛":215},{"时间":"2019-03-05","北京":156,"上海":105,"青岛":555},{"时间":"2019-03-06","北京":136,"上海":135,"青岛":250}]})},selectForms:function(t){console.log(t),this.formIsActive=t,0===t?(this.formInvokeName="北京",this.formChartData={columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":56e3,"床单":22e3,"枕头":8888,Y0906:666},{"时间":"2019-03-02","毛衣":44e3,"床单":24e3,"枕头":5888,Y0906:766},{"时间":"2019-03-03","毛衣":51e3,"床单":21e3,"枕头":6888,Y0906:1166},{"时间":"2019-03-04","毛衣":59e3,"床单":27e3,"枕头":8888,Y0906:966},{"时间":"2019-03-05","毛衣":66e3,"床单":12e3,"枕头":6888,Y0906:1266},{"时间":"2019-03-06","毛衣":52e3,"床单":29e3,"枕头":7888,Y0906:1066}]}):1===t?(this.formInvokeName="上海",this.formChartData={columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":12e3,"床单":7e3,"枕头":300,Y0906:500},{"时间":"2019-03-02","毛衣":14e3,"床单":6e3,"枕头":388,Y0906:666},{"时间":"2019-03-03","毛衣":11e3,"床单":6600,"枕头":338,Y0906:466},{"时间":"2019-03-04","毛衣":19e3,"床单":5500,"枕头":298,Y0906:566},{"时间":"2019-03-05","毛衣":16e3,"床单":6900,"枕头":388,Y0906:466},{"时间":"2019-03-06","毛衣":12e3,"床单":7900,"枕头":488,Y0906:666}]}):2===t?(this.formInvokeName="上海淇毓",this.formChartData={columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":1e4,"床单":3e3,"枕头":2008,Y0906:500},{"时间":"2019-03-02","毛衣":14e3,"床单":4e3,"枕头":1588,Y0906:466},{"时间":"2019-03-03","毛衣":11e3,"床单":2700,"枕头":1888,Y0906:566},{"时间":"2019-03-04","毛衣":12e3,"床单":2800,"枕头":2288,Y0906:565},{"时间":"2019-03-05","毛衣":13e3,"床单":3300,"枕头":2388,Y0906:555},{"时间":"2019-03-06","毛衣":14e3,"床单":3400,"枕头":2288,Y0906:666}]}):3===t&&(this.formInvokeName="北京济南",this.formChartData={columns:["时间","毛衣","床单","枕头","Y0906"],rows:[{"时间":"2019-03-01","毛衣":9e3,"床单":2e3,"枕头":1e3,Y0906:333},{"时间":"2019-03-02","毛衣":8e3,"床单":1800,"枕头":1188,Y0906:466},{"时间":"2019-03-03","毛衣":9e3,"床单":2100,"枕头":1118,Y0906:466},{"时间":"2019-03-04","毛衣":9900,"床单":1800,"枕头":888,Y0906:555},{"时间":"2019-03-05","毛衣":8800,"床单":1900,"枕头":999,Y0906:444},{"时间":"2019-03-06","毛衣":9900,"床单":2e3,"枕头":990,Y0906:666}]})},bindSelectDate:function(t){console.log(t),"今日"===t?this.invokeChartData={columns:["时间","毛衣访客","床单访客","枕头访客"],rows:[{"时间":"10:00","毛衣访客":2800,"床单访客":1e3,"枕头访客":900},{"时间":"11:00","毛衣访客":2600,"床单访客":1200,"枕头访客":1400},{"时间":"12:00","毛衣访客":2700,"床单访客":1600,"枕头访客":1200},{"时间":"13:00","毛衣访客":3e3,"床单访客":1100,"枕头访客":1600},{"时间":"14:00","毛衣访客":3100,"床单访客":1700,"枕头访客":1900},{"时间":"15:00","毛衣访客":2900,"床单访客":2e3,"枕头访客":1800},{"时间":"16:00","毛衣访客":3300,"床单访客":1500,"枕头访客":2200}]}:"今日"===t&&(this.invokeChartData={columns:["时间","毛衣访客","床单访客","枕头访客"],rows:[{"时间":"10:00","毛衣访客":2800,"床单访客":1e3,"枕头访客":900},{"时间":"11:00","毛衣访客":2600,"床单访客":1200,"枕头访客":1400},{"时间":"12:00","毛衣访客":2700,"床单访客":1600,"枕头访客":1200},{"时间":"13:00","毛衣访客":3e3,"床单访客":1100,"枕头访客":1600},{"时间":"14:00","毛衣访客":3100,"床单访客":1700,"枕头访客":1900},{"时间":"15:00","毛衣访客":2900,"床单访客":2e3,"枕头访客":1800},{"时间":"16:00","毛衣访客":3300,"床单访客":1500,"枕头访客":2200}]})}}},p=u,v=(a("096e"),Object(l["a"])(p,s,i,!1,null,null,null));e["default"]=v.exports},"4ad0":function(t,e,a){"use strict";var s=a("c68a"),i=a.n(s);i.a},"5c3a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("el-row",{staticClass:"top-block",attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:12,lg:6}},[a("div",{staticClass:"grid-content bg-white"},[a("div",{staticClass:"title"},[a("p",[t._v("折线图")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"折线图",placement:"top-end"}},[a("i",{staticClass:"el-icon-warning"})])],1),a("div",{staticClass:"content"},[a("h2",[t._v("示例")]),a("ve-line",{attrs:{height:"100px",yAxis:{show:!1},legend:{show:!1},grid:{left:"0",right:"0",bottom:"0",top:"0",containLabel:!1},data:t.callChartData,settings:t.callChartSettings}}),a("div",{staticClass:"radio topborder"},[a("div",[a("p",[t._v("周同比")]),a("i",{staticClass:"el-icon-caret-top"}),a("span",[t._v("15%")])]),a("div",[a("p",[t._v("日环比")]),a("i",{staticClass:"el-icon-caret-bottom"}),a("span",[t._v("9%")])])])],1)])]),a("el-col",{attrs:{xs:24,sm:12,lg:6}},[a("div",{staticClass:"grid-content bg-white"},[a("div",{staticClass:"title"},[a("p",[t._v("柱状图")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"柱状图",placement:"top-end"}},[a("i",{staticClass:"el-icon-warning"})])],1),a("div",{staticClass:"content"},[a("h2",[t._v("示例")]),a("ve-histogram",{attrs:{height:"100px",yAxis:{show:!1},legend:{show:!1},grid:{left:"0",right:"0",bottom:"0",top:"0",containLabel:!1},settings:t.clientChartSettings,data:t.clientChartData}}),a("div",{staticClass:"radio topborder"},[a("div",[a("p",[t._v("周同比")]),a("i",{staticClass:"el-icon-caret-top"}),a("span",[t._v("13%")])]),a("div",[a("p",[t._v("日环比")]),a("i",{staticClass:"el-icon-caret-bottom"}),a("span",[t._v("8%")])])])],1)])]),a("el-col",{attrs:{xs:24,sm:12,lg:6}},[a("div",{staticClass:"grid-content bg-white"},[a("div",{staticClass:"title"},[a("p",[t._v("进度条")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"进度条",placement:"top-end"}},[a("i",{staticClass:"el-icon-warning"})])],1),a("div",{staticClass:"content"},[a("h2",[t._v("86%")]),a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:86}}),a("div",{staticClass:"radio topborder"},[a("div",[a("p",[t._v("周同比")]),a("i",{staticClass:"el-icon-caret-top"}),a("span",[t._v("8%")])]),a("div",[a("p",[t._v("日环比")]),a("i",{staticClass:"el-icon-caret-bottom"}),a("span",[t._v("5%")])])])],1)])]),a("el-col",{attrs:{xs:24,sm:12,lg:6}},[a("div",{staticClass:"grid-content bg-white"},[a("div",{staticClass:"title"},[a("p",[t._v("仪表盘")]),a("br"),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"仪表盘",placement:"top-end"}},[a("i",{staticClass:"el-icon-warning"})])],1),a("div",{staticClass:"content"},[a("ve-gauge",{attrs:{height:"220px",data:t.passChartData,settings:t.passChartSettings}})],1)])])],1),a("div",{staticClass:"realtime"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{sm:24,md:24,lg:24}},[a("div",{staticClass:"invoke bg-white"},[a("h2",[t._v("折线图")]),a("div",{staticClass:"total"},[a("div",{staticClass:"left"},[a("p",[t._v("今日访客")]),a("span",[t._v("102631")])]),a("div",{staticClass:"right"},[a("p",[t._v("平均纪录")]),a("span",[t._v("666")])])]),a("div",{staticClass:"chart"},[a("ve-line",{attrs:{data:t.invokeChartData,height:"300px",settings:t.invokeChartSettings}})],1)]),a("div",{staticClass:"invoke bg-white"},[a("h2",[t._v("堆叠面积图")]),a("div",{staticClass:"total"},[a("div",{staticClass:"left"},[a("p",[t._v("今日访客")]),a("span",[t._v("2209")])]),a("div",{staticClass:"right"},[a("p",[t._v("平均纪录")]),a("span",[t._v("666")])])]),a("div",{staticClass:"chart"},[a("ve-line",{attrs:{data:t.timeoutChartData,height:"300px",settings:t.timeoutChartSettings}})],1)])])],1)],1)],1)},i=[],r={name:"Dashboard",data:function(){return this.callChartSettings={scale:[!0,!0],area:!0},this.clientChartSettings={scale:[!0,!0]},this.invokeChartSettings={dimension:["时间"],scale:[!0,!0]},this.timeoutChartSettings={dimension:["时间"],scale:[!0,!0],area:!0},this.passChartSettings={dataType:{"占比":"percent"},seriesMap:{"占比":{min:0,max:1,splitNumber:5,radius:"96%",pointer:{length:"45%"},axisLabel:{color:"red",distance:0},axisLine:{lineStyle:{color:[[1,"#36a9e1"]],width:20}},detail:{backgroundColor:"rgba(30,144,255,0.8)",borderWidth:1,borderColor:"#fff",shadowColor:"#fff",shadowBlur:5,offsetCenter:[0,"70%"],textStyle:{fontWeight:"bolder",color:"#fff",fontSize:20}}}}},{callChartData:{columns:["日期","访客"],rows:[{"日期":"2019-02-21","访客":116921},{"日期":"2019-02-22","访客":122921},{"日期":"2019-02-23","访客":133921},{"日期":"2019-02-24","访客":122921},{"日期":"2019-02-25","访客":116921},{"日期":"2019-02-26","访客":144921},{"日期":"2019-02-27","访客":133921},{"日期":"2019-02-28","访客":144921},{"日期":"2019-03-01","访客":129921},{"日期":"2019-03-02","访客":121921},{"日期":"2019-03-03","访客":134921},{"日期":"2019-03-04","访客":124921},{"日期":"2019-03-05","访客":129921},{"日期":"2019-03-06","访客":135019}]},clientChartData:{columns:["日期","客户数"],rows:[{"日期":"2019-02-21","客户数":33},{"日期":"2019-02-22","客户数":45},{"日期":"2019-02-23","客户数":45},{"日期":"2019-02-24","客户数":60},{"日期":"2019-02-25","客户数":59},{"日期":"2019-02-26","客户数":55},{"日期":"2019-02-27","客户数":46},{"日期":"2019-02-28","客户数":66},{"日期":"2019-03-01","客户数":52},{"日期":"2019-03-02","客户数":65},{"日期":"2019-03-03","客户数":59},{"日期":"2019-03-04","客户数":77},{"日期":"2019-03-05","客户数":66},{"日期":"2019-03-06","客户数":68}]},invokeChartData:{columns:["时间","商品零访客","商品一访客","商品二访客"],rows:[{"时间":"10:00","商品零访客":2800,"商品一访客":1e3,"商品二访客":900},{"时间":"11:00","商品零访客":2600,"商品一访客":1200,"商品二访客":1400},{"时间":"12:00","商品零访客":2700,"商品一访客":1600,"商品二访客":1200},{"时间":"13:00","商品零访客":3e3,"商品一访客":1100,"商品二访客":1600},{"时间":"14:00","商品零访客":3100,"商品一访客":1700,"商品二访客":1900},{"时间":"15:00","商品零访客":2900,"商品一访客":2e3,"商品二访客":1800},{"时间":"16:00","商品零访客":3300,"商品一访客":1500,"商品二访客":2200}]},timeoutChartData:{columns:["时间","商品零访客","商品一访客","商品二访客"],rows:[{"时间":"10:00","商品零访客":19,"商品一访客":17,"商品二访客":15},{"时间":"11:00","商品零访客":21,"商品一访客":19,"商品二访客":18},{"时间":"12:00","商品零访客":19,"商品一访客":18,"商品二访客":14},{"时间":"13:00","商品零访客":20,"商品一访客":14,"商品二访客":16},{"时间":"14:00","商品零访客":18,"商品一访客":17,"商品二访客":12},{"时间":"15:00","商品零访客":19,"商品一访客":15,"商品二访客":15},{"时间":"16:00","商品零访客":16,"商品一访客":14,"商品二访客":11}]},passChartData:{columns:["type","value"],rows:[{type:"占比",value:.98}]}}}},n=r,o=(a("4ad0"),a("5511")),c=Object(o["a"])(n,s,i,!1,null,null,null);e["default"]=c.exports},9515:function(t,e,a){},b219:function(t,e,a){"use strict";var s=a("035e"),i=a.n(s);i.a},c68a:function(t,e,a){}}]);
//# sourceMappingURL=dashboard.168ef4be.js.map