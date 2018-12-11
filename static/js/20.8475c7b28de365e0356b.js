webpackJsonp([20],{"9Upy":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),o=n.n(i),a=n("NYxO"),r=n("Z4dx"),s={name:"CustomOne",components:{BackButton:function(){return n.e(124).then(n.bind(null,"uOVF"))},BizSectorList:function(){return n.e(125).then(n.bind(null,"jpoa"))},TagDimension:function(){return n.e(130).then(n.bind(null,"RXyt"))},RangeDimension:function(){return n.e(128).then(n.bind(null,"t+1g"))}},data:function(){return{fleetTypeCode:["1","2","3","4","5","6","7"],fleetTypeList:[{code:"1",name:"家用车"},{code:"2",name:"非营业客车"},{code:"3",name:"营业客车"},{code:"4",name:"营业货运"},{code:"5",name:"非营业货运"},{code:"6",name:"特种车"},{code:"7",name:"其他"}],baseRecommend:[],currentSector:0,dimensionList:[],currentCustomDimension:[],currentDimensionDetail:[],currentDimension:"",dimensionColumns:[{prop:"no",title:"序号",width:50,align:"center"},{prop:"tag",title:"标签",width:200,align:"center"},{prop:"range",title:"标签范围",width:128,align:"center"},{prop:"a",title:"满期赔付率（%）",width:140,align:"center"},{prop:"b",title:"预期赔付率（%）",width:160,align:"center"},{prop:"c",title:"保费占比（%）",width:120,align:"center"}],currentDimensionData:[{id:"comLastCount",type:"tag",title:"商业险上年出险次数",tags:[{code:"noCom",name:"未投保商业险"},{code:"newCar",name:"新车"},{code:"newIns",name:"新保"},{code:"no3",name:"连续3年+未出险"},{code:"no2",name:"连续2年未出险"},{code:"no1",name:"上年未出险"},{code:"1",name:"1次"},{code:"2",name:"2次"},{code:"3",name:"3次"},{code:"4",name:"4次"},{code:"5",name:"5次+"}],split:[{id:"1",title:"未投保商业险",tags:["noCom"]},{id:"2",title:"0次",tags:["newCar","newIns","no3","no2","no1"]},{id:"3",title:"1次",tags:["1"]},{id:"4",title:"2次",tags:["2"]},{id:"5",title:"3次及以上",tags:["3","4","5"]}]},{id:"age",type:"range",title:"年龄",list:[{id:"1",isEdit:!1,title:"少年",start:"0",end:"20"},{id:"2",isEdit:!1,title:"青年",start:"20",end:"30"},{id:"3",isEdit:!1,title:"中年",start:"31",end:"45"},{id:"4",isEdit:!1,title:"中老年",start:"46",end:"60"},{id:"5",isEdit:!1,title:"老年",start:"60",end:"N"}]},{id:"rci",type:"range",title:"商业险上年出险金额",list:[{id:"1",isEdit:!1,title:"1000以下",start:"0",end:"1000"},{id:"2",isEdit:!1,title:"2000以下",start:"1000",end:"2000"},{id:"3",isEdit:!1,title:"5000以下",start:"2000",end:"5000"},{id:"4",isEdit:!1,title:"10000以下",start:"5000",end:"10000"},{id:"5",isEdit:!1,title:"10000以上",start:"10000",end:"N"}]}],rangeShow:"",dialogTableVisible:!1,dimensionDialogVisible:!1}},created:function(){var e=this;Object(r.a)(this.param).then(function(t){e.baseRecommend=t.data;var n=t.data.map(function(e){return{id:e.id,name:e.name}});e.$store.commit("SET_SECTORS",n),e.loadDimension(),e.currentDimension=t.data[0].dimensionList[0].code,e.currentDimensionDetail=t.data[0].dimensionList[0].detail})},computed:o()({sectors:function(){var e=this;return this.allsectors.filter(function(t){return e.fleetTypeCode.includes(t.id)})}},Object(a.d)({allsectors:function(e){return e.individual.sectors},param:function(e){return e.individual.param},tableHeader:function(e){return e.app.tableHeader}}),{customerDimensionList:function(){var e=this;return this.currentCustomDimension.map(function(t){return e.dimensionList.find(function(e){return e.code===t})})},leftDimensionList:function(){var e=this;return this.dimensionList.filter(function(t){return!e.currentCustomDimension.includes(t.code)})}}),methods:{loadDimension:function(){this.dimensionList=this.baseRecommend[this.currentSector].dimensionList.map(function(e){return{code:e.code,name:e.name}}),this.currentCustomDimension=this.baseRecommend[this.currentSector].recommendDimension},getClassBySector:function(e){this.currentSector=this.sectors.findIndex(function(t){return t.id===e}),this.loadDimension()},addDimension:function(e){this.currentCustomDimension.includes(e)||(this.currentCustomDimension.push(e),"forceLastPay"===e&&this.currentDimensionData.push({id:"forceLastPay",type:"range",title:"交强险上年出险金额",list:[]}))},removeDimension:function(e){var t=this.currentDimensionData.findIndex(function(t){return t.id===e});this.currentDimensionData.splice(t,1),this.currentCustomDimension.splice(this.currentCustomDimension.indexOf(e),1)},dimensionDetail:function(e){this.currentDimension=e;var t=this.baseRecommend[this.currentSector].dimensionList.find(function(t){return t.code===e});this.rangeShow=t.rangeShow,this.currentDimensionDetail=t.detail},confirm:function(){this.$router.push({path:"/admin/fleet/declare/configfee/fleetbiz"})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"biz-content"},[n("el-form",{attrs:{"label-width":"120px",inline:!0}},[n("el-form-item",[n("el-checkbox-group",{model:{value:e.fleetTypeCode,callback:function(t){e.fleetTypeCode=t},expression:"fleetTypeCode"}},e._l(e.fleetTypeList,function(t){return n("el-checkbox",{key:t.code,attrs:{label:t.code,name:"fleetType"}},[e._v("\n              "+e._s(t.name)+"\n            ")])}))],1)],1),e._v(" "),n("biz-sector-list",{attrs:{title:"选择业务板块",sectors:e.sectors},on:{sectorClick:e.getClassBySector}}),e._v(" "),n("div",{attrs:{id:"custom_latitude"}},[n("div",{staticClass:"tableSector"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("div",{staticClass:"tag"},[e._l(e.customerDimensionList,function(t){return n("el-tag",{key:t.code,attrs:{closable:"newFlag"!==t.code,type:e.currentDimension===t.code?"primary":"info"},on:{close:function(n){e.removeDimension(t.code)}},nativeOn:{click:function(n){e.dimensionDetail(t.code)}}},[e._v("\n              "+e._s(t.name)+"\n            ")])}),e._v(" "),n("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(t){e.dimensionDialogVisible=!0}}},[e._v("新增因子")]),e._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"text",icon:"iconfont icon-bianji",size:"small"},on:{click:function(t){e.dialogTableVisible=!0}}},[e._v("编辑")])],2),e._v(" "),n("el-table",{attrs:{data:e.currentDimensionDetail,stripe:"","header-cell-style":e.tableHeader,height:"400px"}},[n("el-table-column",{attrs:{"header-align":"center",prop:"no",label:"序号","min-width":"50",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"tag",label:"标签","min-width":"200",align:"center"}}),e._v(" "),e.rangeShow?n("el-table-column",{attrs:{"header-align":"center",prop:"range",label:"标签范围","min-width":"250",align:"center"}}):e._e(),e._v(" "),e.rangeShow?e._e():n("el-table-column",{attrs:{"header-align":"center",prop:"down",label:"从()","min-width":"125",align:"center"}}),e._v(" "),e.rangeShow?e._e():n("el-table-column",{attrs:{"header-align":"center",prop:"up",label:"至(不含)","min-width":"125",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"a",label:"满期赔付率（%）","min-width":"140",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"b",label:"预期赔付率（%）","min-width":"160",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"c",label:"保费占比（%）","min-width":"120",align:"center"}})],1)],1)])]),e._v(" "),n("el-dialog",{attrs:{title:"编辑维度",fullscreen:"",visible:e.dialogTableVisible},on:{"update:visible":function(t){e.dialogTableVisible=t}}},[e._l(e.currentDimensionData,function(t){return["tag"===t.type?n("tag-dimension",{key:t.id,attrs:{data:t}}):e._e(),e._v(" "),"range"===t.type?n("range-dimension",{key:t.id,attrs:{data:t}}):e._e()]}),e._v(" "),n("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("保存维度")]),e._v(" "),n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.dialogTableVisible=!1}}},[e._v("关闭")])],1)],2),e._v(" "),n("el-dialog",{attrs:{title:"添加维度",visible:e.dimensionDialogVisible,width:"30%"},on:{"update:visible":function(t){e.dimensionDialogVisible=t}}},e._l(e.dimensionList,function(t){return n("el-tag",{key:t.code,attrs:{type:e.currentCustomDimension.includes(t.code)?"primary":"info"},nativeOn:{click:function(n){e.addDimension(t.code)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])}))],1),e._v(" "),n("div",{staticClass:"option"},[n("back-button",{attrs:{type:"next"},on:{next:e.confirm}},[e._v("下一步")])],1)])},staticRenderFns:[]};var c=n("VU/8")(s,l,!1,function(e){n("vB9q")},"data-v-e1122150",null);t.default=c.exports},vB9q:function(e,t){}});