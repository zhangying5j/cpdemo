webpackJsonp([2],{Z2Fm:function(e,t){},czlG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Dd8w"),r=a.n(o),l=a("NYxO"),i={name:"Price",components:{BasePagination:function(){return a.e(169).then(a.bind(null,"aTIo"))}},props:{typeProp:{type:String,default:""}},data:function(){return{dataHidden:!0,dialogShow:!1,adjustType:"",adjustRemark:"",queryData:{type:"",org:"27000",channel:"指标偏差",version:"50000201801010900",sectorcd:"all",startDate:"2018-01-01",endDate:"2018-03-01"},rules:{type:[{required:!0,trigger:"change",message:"检视类型不能为空"}],org:[{required:!0,trigger:"change",message:"所属机构不能为空"}],channel:[{required:!0,trigger:"change",message:"所属渠道不能为空"}],startDate:[{required:!0,trigger:"blur",message:"起始日期不能为空"}],endDate:[{required:!0,trigger:"blur",message:"截止日期不能为空"}]},showLabel:"定价方案版本号",typeList:[{code:"person",name:"定价方案预测对比-个车"},{code:"fleet",name:"定价方案预测对比-车队"},{code:"protocol",name:"定价方案预测对比-协议"}],orgList:[{code:"01000",name:"北京分公司",children:[{code:"02001",name:"朝阳支公司"},{code:"02002",name:"丰台支公司"},{code:"02003",name:"大兴支公司"},{code:"02004",name:"东城支公司"},{code:"02005",name:"通州支公司"},{code:"02006",name:"房山支公司"},{code:"02007",name:"平谷支公司"},{code:"02008",name:"顺义支公司"},{code:"02009",name:"延庆支公司"},{code:"02010",name:"昌平支公司"},{code:"02011",name:"怀柔支公司"},{code:"02012",name:"海淀支公司"}]},{code:"02000",name:"山东省分公司"},{code:"03000",name:"江苏省分公司"},{code:"04000",name:"黑龙江省分公司"},{code:"05000",name:"重庆市分公司"},{code:"06000",name:"河南省分公司"},{code:"07000",name:"上海市分公司"},{code:"08000",name:"广东省分公司"},{code:"09000",name:"深圳市分公司"},{code:"10000",name:"天津市分公司"},{code:"11000",name:"青岛分公司"},{code:"12000",name:"辽宁省分公司"},{code:"13000",name:"河北省分公司"},{code:"14000",name:"海南省分公司"},{code:"15000",name:"广西分公司"},{code:"16000",name:"湖南省分公司"},{code:"17000",name:"浙江省分公司"},{code:"18000",name:"贵州省分公司"},{code:"19000",name:"四川省分公司"},{code:"20000",name:"青海省分公司"},{code:"21000",name:"云南省分公司"},{code:"22000",name:"陕西省分公司"},{code:"23000",name:"湖北省分公司"},{code:"24000",name:"吉林省分公司"},{code:"25000",name:"新疆分公司"},{code:"26000",name:"宁波市分公司"},{code:"27000",name:"山西省分公司"},{code:"28000",name:"大连市分公司"},{code:"29000",name:"甘肃省分公司"},{code:"30000",name:"安徽省分公司"},{code:"31000",name:"江西省分公司"},{code:"32000",name:"福建省分公司"},{code:"33000",name:"内蒙古分公司"},{code:"34000",name:"厦门市分公司"},{code:"35000",name:"宁夏自治区分公司"},{code:"36000",name:"西藏自治区分公司"}],channelList:[{code:"ct",name:"传统渠道",flag:0},{code:"org",name:"机构直管渠道",flag:1},{code:"vip",name:"重客渠道",flag:1},{code:"bank",name:"银保渠道",flag:1},{code:"agent",name:"经代渠道",flag:1},{code:"carIns",name:"车商渠道",flag:1},{code:"cross",name:"交叉销售渠道",flag:1},{code:"cn",name:"网电渠道",flag:0},{code:"tel",name:"电销渠道",flag:1},{code:"net",name:"网销渠道",flag:1},{code:"oat",name:"OAT",flag:1},{code:"mix",name:"融合渠道",flag:1}],sectorList:[{code:"all",name:"全部"},{code:"1",name:"家庭自用"},{code:"2",name:"非营业客车"},{code:"3",name:"出租租赁"},{code:"4",name:"城市公交"},{code:"5",name:"公路客车"},{code:"6",name:"普通营业货运"},{code:"7",name:"自卸车"},{code:"8",name:"半挂牵引"},{code:"9",name:"挂车"},{code:"10",name:"特种车"},{code:"11",name:"其他"}],columns:[{prop:"priceVersion",label:"定价方案版本号",width:120,isShow:!1},{prop:"bizSector",label:"车种",width:120,isShow:!1},{prop:"bizType",label:"业务单元",width:120,isShow:!1},{prop:"protocolNo",label:"协议号",width:120,isShow:!1},{prop:"protocolName",label:"协议名称",width:120,isShow:!1},{prop:"inspectIndex",label:"检视指标",width:120,isShow:!0},{prop:"expectVal",label:"预算值",width:120,isShow:!0},{prop:"realVal",label:"实际值",width:120,isShow:!0},{prop:"disVal",label:"二者差",width:120,isShow:!0},{prop:"inspectResult",label:"检视结果",width:120,isShow:!0},{prop:"inspectDate",label:"检视日期",width:120,isShow:!0}],columns2:[{prop:"priceVersion",label:"定价方案版本号",width:120,isShow:!1},{prop:"bizSector",label:"车种",width:120,isShow:!1},{prop:"bizType",label:"业务单元",width:120,isShow:!1},{prop:"protocolNo",label:"协议号",width:120,isShow:!1},{prop:"protocolName",label:"协议名称",width:120,isShow:!1},{prop:"inspectIndex",label:"检视指标",width:120,isShow:!0},{prop:"expectVal",label:"预算值",width:120,isShow:!0},{prop:"realVal",label:"实际值",width:120,isShow:!0},{prop:"disVal",label:"二者差",width:120,isShow:!0},{prop:"inspectResult",label:"检视结果",width:120,isShow:!0},{prop:"inspectDate",label:"检视日期",width:120,isShow:!0}],currentPage:1,pageSize:5,data:[],personData:[{priceVersion:"50000201801010900",bizSector:"家用车",bizType:"单交,单商_单三_无附加",protocolNo:"",protocolName:"",inspectIndex:"保费收入",expectVal:"20.09",realVal:"16.49",disVal:"-3.6",inspectResult:"低于预算3.6%",inspectDate:"2018-01-21"},{priceVersion:"50000201801010900",bizSector:"非营业客车",bizType:"单交,单商_单三_有附加",protocolNo:"",protocolName:"",inspectIndex:"保费收入",expectVal:"21.22",realVal:"17.02",disVal:"-4.2",inspectResult:"低于预算4.2%",inspectDate:"2018-01-21"},{priceVersion:"50000201801010900",bizSector:"营业客车",bizType:"单交,单商_损三_无附加",protocolNo:"",protocolName:"",inspectIndex:"经营成本率",expectVal:"97.6",realVal:"98.2",disVal:"0.6",inspectResult:"超过预算0.6%",inspectDate:"2018-01-21"},{priceVersion:"50000201801010900",bizSector:"营业货运",bizType:"单交,单商_损三_有附加",protocolNo:"",protocolName:"",inspectIndex:"手续费率",expectVal:"20.1",realVal:"21.3",disVal:"1.2",inspectResult:"超过预算1.2%",inspectDate:"2018-01-21"},{priceVersion:"50000201801010900",bizSector:"非营业货运",bizType:"单交,交商_交三_无附加",protocolNo:"",protocolName:"",inspectIndex:"手续费率",expectVal:"17.2",realVal:"18.5",disVal:"1.3",inspectResult:"超过预算1.3%",inspectDate:"2018-01-21"},{priceVersion:"50000201801010900",bizSector:"特种车",bizType:"单交,交商_交三_有附加",protocolNo:"",protocolName:"",inspectIndex:"手续费率",expectVal:"18.03",realVal:"19.09",disVal:"1.06",inspectResult:"超过预算1.06%",inspectDate:"2018-01-21"}],protocolData:[{priceVersion:"",bizSector:"",bizType:"",protocolNo:"20180101010001",protocolName:"2018机动车辆投保协议",inspectIndex:"保费收入",expectVal:"20.09",realVal:"16.49",disVal:"-3.6",inspectResult:"低于预算3.6%",inspectDate:"2018-01-21"},{priceVersion:"",bizSector:"",bizType:"",protocolNo:"20180101020001",protocolName:"2018非机动车辆投保协议",inspectIndex:"保费收入",expectVal:"21.22",realVal:"17.02",disVal:"-4.2",inspectResult:"低于预算4.2%",inspectDate:"2018-01-21"},{priceVersion:"",bizSector:"",bizType:"",protocolNo:"20180101030001",protocolName:"2018营业出租客车投保协议",inspectIndex:"经营成本率",expectVal:"97.6",realVal:"98.2",disVal:"0.6",inspectResult:"超过预算0.6%",inspectDate:"2018-01-21"},{priceVersion:"",bizSector:"",bizType:"",protocolNo:"20180101040001",protocolName:"2018营业租赁客车投保协议",inspectIndex:"手续费率",expectVal:"20.1",realVal:"21.3",disVal:"1.2",inspectResult:"超过预算1.2%",inspectDate:"2018-01-21"},{priceVersion:"",bizSector:"",bizType:"",protocolNo:"20180101050001",protocolName:"2018非营业企业客车投保协议",inspectIndex:"手续费率",expectVal:"17.2",realVal:"18.5",disVal:"1.3",inspectResult:"超过预算1.3%",inspectDate:"2018-01-21"},{priceVersion:"",bizSector:"",bizType:"",protocolNo:"20180101060001",protocolName:"2018非营业企业货车投保协议\n",inspectIndex:"手续费率",expectVal:"18.03",realVal:"19.09",disVal:"1.06",inspectResult:"超过预算1.06%",inspectDate:"2018-01-21"}]}},mounted:function(){""!==this.typeProp&&(this.queryData.type=this.typeProp,this.searchData())},methods:{typeChange:function(e){this.currentPage=1,"person"===e?(this.showLabel="定价方案版本号",this.columns.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!0:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!1)}),this.columns2.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!0:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!1)}),this.data=this.personData,this.dataHidden=!1):"fleet"===e||"protocol"===e?(this.showLabel="协议号",this.columns.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!1:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!0)}),this.columns2.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!1:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!0)}),this.data=this.protocolData,this.dataHidden=!1):(this.showLabel="定价方案版本号",this.columns.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!0:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!1)}),this.columns2.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!0:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!1)}),this.data=[],this.dataHidden=!0)},resetForm:function(){},searchData:function(){var e=this;this.$refs.queryForm.validate(function(t){t&&(e.currentPage=1,"person"===e.queryData.type?(e.columns.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!0:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!1)}),e.columns2.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!0:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!1)}),e.data=e.personData,e.dataHidden=!1):"fleet"===e.queryData.type||"protocol"===e.queryData.type?(e.columns.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!1:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!0)}),e.columns2.forEach(function(e){"priceVersion"===e.prop||"bizSector"===e.prop||"bizType"===e.prop?e.isShow=!1:"protocolNo"!==e.prop&&"protocolName"!==e.prop||(e.isShow=!0)}),e.data=e.protocolData,e.dataHidden=!1):(e.data=[],e.dataHidden=!0))})},exportData:function(){},dataChange:function(e,t){this.pageSize=e,this.currentPage=t},msg:function(e){var t=e+"成功!";this.$message({type:"success",message:t})}},computed:r()({curData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a>this.data.length?this.data.length:a;for(var o=t;o<a;++o)e.push(this.data[o]);return e}},Object(l.d)({tableHeader:function(e){return e.app.tableHeader}}))},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"queryForm",attrs:{"label-width":"160px",model:e.queryData,rules:e.rules,inline:!0}},[a("el-form-item",{attrs:{label:"检视类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择检视类型"},on:{change:e.typeChange},model:{value:e.queryData.type,callback:function(t){e.$set(e.queryData,"type",t)},expression:"queryData.type"}},e._l(e.typeList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"偏差规则",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择偏差规则"},model:{value:e.queryData.channel,callback:function(t){e.$set(e.queryData,"channel",t)},expression:"queryData.channel"}},[a("el-option",{attrs:{value:"指标",label:"指标"}}),e._v(" "),a("el-option",{attrs:{value:"指标偏差",label:"指标偏差"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"所属渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择所属渠道"},model:{value:e.queryData.channel,callback:function(t){e.$set(e.queryData,"channel",t)},expression:"queryData.channel"}},e._l(e.channelList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.showLabel,prop:"version"}},[a("el-input",{model:{value:e.queryData.version,callback:function(t){e.$set(e.queryData,"version",t)},expression:"queryData.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"车种",prop:"org"}},[a("el-select",{attrs:{placeholder:"请选择车种"},model:{value:e.queryData.sectorcd,callback:function(t){e.$set(e.queryData,"sectorcd",t)},expression:"queryData.sectorcd"}},e._l(e.sectorList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"起始日期",prop:"startDate"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择起始日期"},model:{value:e.queryData.startDate,callback:function(t){e.$set(e.queryData,"startDate",t)},expression:"queryData.startDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"截止日期",prop:"endDate"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择截止日期"},model:{value:e.queryData.endDate,callback:function(t){e.$set(e.queryData,"endDate",t)},expression:"queryData.endDate"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.searchData}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.exportData}},[e._v("导出")])],1),e._v(" "),a("div",{staticClass:"data",attrs:{hidden:e.dataHidden},on:{"update:hidden":function(t){e.dataHidden=t}}},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.curData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(t){return t.isShow?a("el-table-column",{key:t.prop,attrs:{"header-align":"center",align:"center",prop:t.prop,label:t.label,"min-width":t.width}}):e._e()}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogShow=!0}}},[e._v("检视预警调整")])]}}])})],2),e._v(" "),a("base-pagination",{attrs:{total:e.data.length},on:{dataChange:e.dataChange}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"检视预警调整",visible:e.dialogShow,width:"60%"},on:{"update:visible":function(t){e.dialogShow=t}}},[a("div",{staticClass:"form"},[a("el-form",{ref:"queryForm",attrs:{"label-width":"160px",model:e.queryData,rules:e.rules,inline:!0}},[a("el-form-item",{attrs:{label:"检视类型",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择检视类型"},on:{change:e.typeChange},model:{value:e.queryData.type,callback:function(t){e.$set(e.queryData,"type",t)},expression:"queryData.type"}},e._l(e.typeList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属机构",prop:"org"}},[a("el-select",{attrs:{placeholder:"请选择所属机构"},model:{value:e.queryData.org,callback:function(t){e.$set(e.queryData,"org",t)},expression:"queryData.org"}},e._l(e.orgList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"所属渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择所属渠道"},model:{value:e.queryData.channel,callback:function(t){e.$set(e.queryData,"channel",t)},expression:"queryData.channel"}},e._l(e.channelList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.showLabel,prop:"version"}},[a("el-input",{model:{value:e.queryData.version,callback:function(t){e.$set(e.queryData,"version",t)},expression:"queryData.version"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.curData,stripe:"","header-cell-style":e.tableHeader}},e._l(e.columns2,function(t){return t.isShow?a("el-table-column",{key:t.prop,attrs:{"header-align":"center",align:"center",prop:t.prop,label:t.label,"min-width":t.width}}):e._e()})),e._v(" "),a("base-pagination",{attrs:{total:e.data.length},on:{dataChange:e.dataChange}})],1)]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"approval"},[a("div",{staticClass:"result"},[a("el-form",[a("el-form-item",{attrs:{label:"调整方式:",prop:"adjustType"}},[a("el-select",{model:{value:e.adjustType,callback:function(t){e.adjustType=t},expression:"adjustType"}})],1)],1)],1)])])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"approval"},[a("div",{staticClass:"result"},[a("div",{staticClass:"title"},[e._v("调整说明说明")]),e._v(" "),a("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.adjustRemark,callback:function(t){e.adjustRemark=t},expression:"adjustRemark"}})],1)])])],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(t){e.msg("定价方案调整")}}},[e._v("定价方案调整")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(t){e.msg("保存")}}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(i,n,!1,function(e){a("Z2Fm")},"data-v-46a4782a",null);t.default=c.exports}});