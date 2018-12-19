webpackJsonp([80],{H52h:function(e,t){},a6My:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),o=a.n(n),l={name:"RuleResult",components:{BaseTable:function(){return a.e(153).then(a.bind(null,"ss0d"))}},data:function(){return{ownorgnm:"预算所属机构",rules:{ruleClass:[{required:!0,trigger:"change",message:"规则分类不能为空"}],ruleType:[{required:!0,trigger:"change",message:"规则类型不能为空"}],org:[{required:!0,trigger:"change",message:"制定机构不能为空"}],startdate:[{required:!0,trigger:"change",message:"起始日期不能为空"}],enddate:[{required:!0,trigger:"change",message:"截止日期不能为空"}]},inspect:{ruleClass:"budget",ruleType:"budgetcompre",org:"00000",ownorg:"01000",channel:"each",type:"year",timeSlot:"2018",planversion:"",fleetno:"",fleetnm:"",agentno:"",agentnm:"",startdate:"2018-07-01",enddate:"2018-07-31"},ruleClassList:[{code:"budget",name:"预算对比",ruleType:[{code:"budgetcomprule",name:"与预算对比"}]},{code:"surpvise",name:"监管对比",ruleType:[{code:"surpvisecomprule",name:"与监管合规对比"}]},{code:"future",name:"预测对比",ruleType:[{code:"singlecomprule",name:"与预测对比_单车"},{code:"fleetcomprule",name:"与预测对比_车队"},{code:"agentcomprule",name:"与预测对比_代理"}]}],orgList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",children:[{code:"02001",name:"朝阳支公司"},{code:"02002",name:"丰台支公司"},{code:"02003",name:"大兴支公司"},{code:"02004",name:"东城支公司"},{code:"02005",name:"通州支公司"},{code:"02006",name:"房山支公司"},{code:"02007",name:"平谷支公司"},{code:"02008",name:"顺义支公司"},{code:"02009",name:"延庆支公司"},{code:"02010",name:"昌平支公司"},{code:"02011",name:"怀柔支公司"},{code:"02012",name:"海淀支公司"}]},{code:"02000",name:"山东省分公司"},{code:"03000",name:"江苏省分公司"},{code:"04000",name:"黑龙江省分公司"},{code:"05000",name:"重庆市分公司"},{code:"06000",name:"河南省分公司"},{code:"07000",name:"上海市分公司"},{code:"08000",name:"广东省分公司"},{code:"09000",name:"深圳市分公司"},{code:"10000",name:"天津市分公司"},{code:"11000",name:"青岛分公司"},{code:"12000",name:"辽宁省分公司"},{code:"13000",name:"河北省分公司"},{code:"14000",name:"海南省分公司"},{code:"15000",name:"广西分公司"},{code:"16000",name:"湖南省分公司"},{code:"17000",name:"浙江省分公司"},{code:"18000",name:"贵州省分公司"},{code:"19000",name:"四川省分公司"},{code:"20000",name:"青海省分公司"},{code:"21000",name:"云南省分公司"},{code:"22000",name:"陕西省分公司"},{code:"23000",name:"湖北省分公司"},{code:"24000",name:"吉林省分公司"},{code:"25000",name:"新疆分公司"},{code:"26000",name:"宁波市分公司"},{code:"27000",name:"山西省分公司"},{code:"28000",name:"大连市分公司"},{code:"29000",name:"甘肃省分公司"},{code:"30000",name:"安徽省分公司"},{code:"31000",name:"江西省分公司"},{code:"32000",name:"福建省分公司"},{code:"33000",name:"内蒙古分公司"},{code:"34000",name:"厦门市分公司"},{code:"35000",name:"宁夏自治区分公司"},{code:"36000",name:"西藏自治区分公司"}],ruleTypeList:[{code:"budgetcompre",name:"预算对比",flag:0},{code:"supervisecompre",name:"监管对比",flag:0},{code:"measurecompre",name:"预测对比",flag:0},{code:"measureCompreSingle",name:"与预测对比_单车",flag:1},{code:"measureCompreFleet",name:"与预测对比_车队",flag:1},{code:"measureCompreAgent",name:"与预测对比_代理",flag:1}],channelList:[{code:"each",name:"互动",flag:0},{code:"innovate",name:"创新电子",flag:0},{code:"hguest",name:"重客",flag:0},{code:"cart",name:"车行",flag:0},{code:"bankinsur",name:"银保",flag:0},{code:"perloan",name:"个代",flag:0},{code:"normalmid",name:"普通中介",flag:0}],typeList:[{code:"month",name:"季度",timeSlots:[{code:"2018-1",name:"2018年第一季度"},{code:"2018-2",name:"2018年第二季度"},{code:"2018-3",name:"2018年第三季度"},{code:"2018-4",name:"2018年第四季度"}]},{code:"year",name:"年度",timeSlots:[{code:"2018",name:"2018年"},{code:"2019",name:"2019年"}]}],timeSlotList:[{code:"2018",name:"2018年"},{code:"2019",name:"2019年"}],columns:[],data:[],columns1:[{prop:"ownorg",width:120,label:"预算所属机构",align:"center"},{prop:"channel",width:120,label:"预算渠道",align:"center"},{prop:"type",width:120,label:"预算周期",align:"center"},{prop:"timesolt",width:120,label:"预算时间段",align:"center"},{prop:"warndate",width:120,label:"预警时间",align:"center"},{prop:"operation",label:"操作",width:480,operation:!0,operations:[{text:"查看预警结果",event:"detail"}]}],columns2:[{prop:"ownorg",width:120,label:"监管合规机构",align:"center"},{prop:"warndate",width:120,label:"预警时间",align:"center"},{prop:"operation",label:"操作",width:480,operation:!0,operations:[{text:"查看预警结果",event:"detail"}]}],columns3:[{prop:"ownorg",width:120,label:"定价方案所属机构",align:"center"},{prop:"planversion",width:120,label:"定价方案版本号",align:"center"},{prop:"warndate",width:120,label:"预警时间",align:"center"},{prop:"operation",label:"操作",width:480,operation:!0,operations:[{text:"查看预警结果",event:"detail"}]}],columns4:[{prop:"ownorg",width:120,label:"定价方案所属机构",align:"center"},{prop:"fleetno",width:120,label:"车队协议号",align:"center"},{prop:"fleetnm",width:120,label:"投保人姓名",align:"center"},{prop:"warndate",width:120,label:"预警时间",align:"center"},{prop:"operation",label:"操作",width:480,operation:!0,operations:[{text:"查看预警结果",event:"detail"}]}],columns5:[{prop:"ownorg",width:120,label:"定价方案所属机构",align:"center"},{prop:"agentno",width:120,label:"代理协议号",align:"center"},{prop:"agentnm",width:120,label:"代理人姓名",align:"center"},{prop:"warndate",width:120,label:"预警时间",align:"center"},{prop:"operation",label:"操作",width:480,operation:!0,operations:[{text:"查看预警结果",event:"detail"}]}],currentPage:1,pageSize:10}},computed:{curData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a>this.data.length?this.data.length:a;for(var n=t;n<a;++n)e.push(this.data[n]);return e},ruleClass:function(){return this.inspect.ruleClass},ruleType:function(){return this.inspect.ruleType},type:function(){return this.inspect.type}},watch:{type:function(e){if(""!==e){var t=this.typeList.find(function(t){return t.code===e});this.timeSlotList=t.timeSlots,t.timeSlots.length>0&&(this.inspect.timeSlot=t.timeSlots[0].code)}}},methods:{query:function(){var e=this;this.$refs.inspectForm.validate(function(t){if(t){e.data=[];var a=["北京分公司","山东省分公司","江苏省分公司","黑龙江省分公司","重庆市分公司","河南省分公司","上海市分公司","广东省分公司","深圳市分公司","天津市分公司","青岛分公司","辽宁省分公司","河北省分公司","海南省分公司","广西分公司","湖南省分公司","浙江省分公司","贵州省分公司","四川省分公司","青海省分公司","云南省分公司","陕西省分公司","湖北省分公司","吉林省分公司","新疆分公司","宁波市分公司","山西省分公司","大连市分公司","甘肃省分公司","安徽省分公司","江西省分公司","福建省分公司","内蒙古分公司","厦门市分公司","宁夏自治区分公司","西藏自治区分公司"];if("budgetcompre"===e.ruleType){e.columns=e.columns1;var n={ownorg:"",channel:"整体渠道",type:"年度",timesolt:"2018年",warndate:"2018-01-01"};a.forEach(function(t,a){var l=o()({},n);l.ownorg=t,e.data.push(l)})}else if("supervisecompre"===e.ruleType){e.columns=e.columns2;var l={ownorg:"",warndate:"2018-01-01"};a.forEach(function(t,a){var n=o()({},l);n.ownorg=t,e.data.push(n)})}else if("measureCompreSingle"===e.ruleType){e.columns=e.columns3;var r={ownorg:"",planversion:"2018010145789001",warndate:"2018-01-01"};a.forEach(function(t,a){var n=o()({},r);n.ownorg=t,e.data.push(n)})}else if("measureCompreFleet"===e.ruleType){e.columns=e.columns4;var s={ownorg:"",fleetno:"2018010145789001",fleetnm:"同顺运输有限公司",warndate:"2018-01-01"};a.forEach(function(t,a){var n=o()({},s);n.ownorg=t,e.data.push(n)})}else if("measureCompreAgent"===e.ruleType){e.columns=e.columns5;var i={ownorg:"",agentno:"2018010145789001",agentnm:"晋投保险经纪有限公司",warndate:"2018-01-01"};a.forEach(function(t,a){var n=o()({},i);n.ownorg=t,e.data.push(n)})}}})},dataChange:function(e,t){this.pageSize=e,this.currentPage=t},downloadRule:function(){},importRule:function(){},exportRule:function(){},detail:function(){var e=o()({},this.inspect);delete e.startdate,delete e.enddate,e.planversion="2018010145789001",e.fleetno="2018010145789001",e.fleetnm="同顺运输有限公司",e.agentno="2018010145789001",e.agentnm="晋投保险经纪有限公司",e.warndate="2018-01-01";var t={ownorgnm:this.ownorgnm,inspect:e,ruleTypeList:this.ruleTypeList,timeSlotList:this.timeSlotList};console.log(t),this.$store.commit("SET_RULE_INFO_DATA",t),this.$router.push({path:"/admin/inspect/ruleinfo"})},handleChange:function(){this.query()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"inspectForm",attrs:{"label-width":"150px",model:e.inspect,rules:e.rules,inline:!0}},[a("el-form-item",{attrs:{label:"规则制定机构",prop:"org"}},[a("el-select",{attrs:{placeholder:"请选择规则制定机构",clearable:""},model:{value:e.inspect.org,callback:function(t){e.$set(e.inspect,"org",t)},expression:"inspect.org"}},e._l(e.orgList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"规则类型",prop:"ruleType"}},[a("el-select",{attrs:{placeholder:"请选择规则类型",clearable:""},on:{change:e.handleChange},model:{value:e.inspect.ruleType,callback:function(t){e.$set(e.inspect,"ruleType",t)},expression:"inspect.ruleType"}},e._l(e.ruleTypeList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.ownorgnm,prop:"ownorg"}},[a("el-select",{attrs:{placeholder:"请选择规则制定机构",clearable:""},model:{value:e.inspect.ownorg,callback:function(t){e.$set(e.inspect,"ownorg",t)},expression:"inspect.ownorg"}},e._l(e.orgList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreSingle"===e.ruleType,expression:"ruleType === 'measureCompreSingle'"}],attrs:{label:"定价方案版本号",prop:"planversion"}},[a("el-input",{attrs:{placeholder:"请输入定价方案版本号"},model:{value:e.inspect.planversion,callback:function(t){e.$set(e.inspect,"planversion",t)},expression:"inspect.planversion"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreFleet"===e.ruleType,expression:"ruleType === 'measureCompreFleet'"}],attrs:{label:"车队协议号",prop:"fleetno"}},[a("el-input",{attrs:{placeholder:"请输入车队协议号"},model:{value:e.inspect.fleetno,callback:function(t){e.$set(e.inspect,"fleetno",t)},expression:"inspect.fleetno"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreFleet"===e.ruleType,expression:"ruleType === 'measureCompreFleet'"}],attrs:{label:"投保人姓名",prop:"fleetnm"}},[a("el-input",{attrs:{placeholder:"请输入投保人姓名"},model:{value:e.inspect.fleetnm,callback:function(t){e.$set(e.inspect,"fleetnm",t)},expression:"inspect.fleetnm"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreAgent"===e.ruleType,expression:"ruleType === 'measureCompreAgent'"}],attrs:{label:"代理协议号",prop:"agentno"}},[a("el-input",{attrs:{placeholder:"请输入代理协议号"},model:{value:e.inspect.agentno,callback:function(t){e.$set(e.inspect,"agentno",t)},expression:"inspect.agentno"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreAgent"===e.ruleType,expression:"ruleType === 'measureCompreAgent'"}],attrs:{label:"代理人姓名",prop:"agentnm"}},[a("el-input",{attrs:{placeholder:"请输入代理人姓名"},model:{value:e.inspect.agentnm,callback:function(t){e.$set(e.inspect,"agentnm",t)},expression:"inspect.agentnm"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"budgetcompre"===e.ruleType,expression:"ruleType === 'budgetcompre'"}],attrs:{label:"预算渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择预算渠道",clearable:""},model:{value:e.inspect.channel,callback:function(t){e.$set(e.inspect,"channel",t)},expression:"inspect.channel"}},e._l(e.channelList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"budgetcompre"===e.ruleType,expression:"ruleType === 'budgetcompre'"}],attrs:{label:"预算周期",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择预算周期",clearable:""},model:{value:e.inspect.type,callback:function(t){e.$set(e.inspect,"type",t)},expression:"inspect.type"}},e._l(e.typeList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"budgetcompre"===e.ruleType,expression:"ruleType === 'budgetcompre'"}],attrs:{label:"预算时间段",prop:"timeSlot"}},[a("el-select",{attrs:{placeholder:"请选择时间段",clearable:""},model:{value:e.inspect.timeSlot,callback:function(t){e.$set(e.inspect,"timeSlot",t)},expression:"inspect.timeSlot"}},e._l(e.timeSlotList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"起始日期",prop:"startdate"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择时间"},model:{value:e.inspect.startdate,callback:function(t){e.$set(e.inspect,"startdate",t)},expression:"inspect.startdate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"截止日期",prop:"enddate"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"请选择时间"},model:{value:e.inspect.enddate,callback:function(t){e.$set(e.inspect,"enddate",t)},expression:"inspect.enddate"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.curData,pagination:!0,total:e.data.length},on:{dataChange:e.dataChange,downloadRule:e.downloadRule,importRule:e.importRule,exportRule:e.exportRule,detail:e.detail}})],1)])])},staticRenderFns:[]};var s=a("VU/8")(l,r,!1,function(e){a("H52h")},"data-v-61e34c1a",null);t.default=s.exports}});