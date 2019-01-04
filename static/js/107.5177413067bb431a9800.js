webpackJsonp([107],{ZmJ6:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a("Dd8w"),l=a.n(t),r=a("NYxO"),o={name:"RuleInfo",components:{BaseTable:function(){return a.e(154).then(a.bind(null,"ss0d"))}},data:function(){return{ruleClassList:[{code:"budget",name:"预算对比",ruleType:[{code:"budgetcomprule",name:"与预算对比"}]},{code:"surpvise",name:"监管对比",ruleType:[{code:"surpvisecomprule",name:"与监管合规对比"}]},{code:"future",name:"预测对比",ruleType:[{code:"singlecomprule",name:"与预测对比_单车"},{code:"fleetcomprule",name:"与预测对比_车队"},{code:"agentcomprule",name:"与预测对比_代理"}]}],orgList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",children:[{code:"02001",name:"朝阳支公司"},{code:"02002",name:"丰台支公司"},{code:"02003",name:"大兴支公司"},{code:"02004",name:"东城支公司"},{code:"02005",name:"通州支公司"},{code:"02006",name:"房山支公司"},{code:"02007",name:"平谷支公司"},{code:"02008",name:"顺义支公司"},{code:"02009",name:"延庆支公司"},{code:"02010",name:"昌平支公司"},{code:"02011",name:"怀柔支公司"},{code:"02012",name:"海淀支公司"}]},{code:"02000",name:"山东省分公司"},{code:"03000",name:"江苏省分公司"},{code:"04000",name:"黑龙江省分公司"},{code:"05000",name:"重庆市分公司"},{code:"06000",name:"河南省分公司"},{code:"07000",name:"上海市分公司"},{code:"08000",name:"广东省分公司"},{code:"09000",name:"深圳市分公司"},{code:"10000",name:"天津市分公司"},{code:"11000",name:"青岛分公司"},{code:"12000",name:"辽宁省分公司"},{code:"13000",name:"河北省分公司"},{code:"14000",name:"海南省分公司"},{code:"15000",name:"广西分公司"},{code:"16000",name:"湖南省分公司"},{code:"17000",name:"浙江省分公司"},{code:"18000",name:"贵州省分公司"},{code:"19000",name:"四川省分公司"},{code:"20000",name:"青海省分公司"},{code:"21000",name:"云南省分公司"},{code:"22000",name:"陕西省分公司"},{code:"23000",name:"湖北省分公司"},{code:"24000",name:"吉林省分公司"},{code:"25000",name:"新疆分公司"},{code:"26000",name:"宁波市分公司"},{code:"27000",name:"山西省分公司"},{code:"28000",name:"大连市分公司"},{code:"29000",name:"甘肃省分公司"},{code:"30000",name:"安徽省分公司"},{code:"31000",name:"江西省分公司"},{code:"32000",name:"福建省分公司"},{code:"33000",name:"内蒙古分公司"},{code:"34000",name:"厦门市分公司"},{code:"35000",name:"宁夏自治区分公司"},{code:"36000",name:"西藏自治区分公司"}],channelList:[{code:"each",name:"互动",flag:0},{code:"innovate",name:"创新电子",flag:0},{code:"hguest",name:"重客",flag:0},{code:"cart",name:"车行",flag:0},{code:"bankinsur",name:"银保",flag:0},{code:"perloan",name:"个代",flag:0},{code:"normalmid",name:"普通中介",flag:0}],typeList:[{code:"month",name:"季度",timeSlots:[{code:"2018-1",name:"2018年第一季度"},{code:"2018-2",name:"2018年第二季度"},{code:"2018-3",name:"2018年第三季度"},{code:"2018-4",name:"2018年第四季度"}]},{code:"year",name:"年度",timeSlots:[{code:"2018",name:"2018年"},{code:"2019",name:"2019年"}]}],columns1:[{prop:"ownorg",width:120,label:"预算所属机构",align:"center"},{prop:"index",width:120,label:"指标名称",align:"center"},{prop:"indexval",width:120,label:"指标值",align:"center"},{prop:"warnval",width:120,label:"预警限额",align:"center"},{prop:"warnresult",width:240,label:"预警结果",align:"center"}],columns2:[{prop:"ownorg",width:120,label:"监管合规机构",align:"center"},{prop:"index",width:120,label:"指标名称",align:"center"},{prop:"indexval",width:120,label:"指标值",align:"center"},{prop:"warnval",width:120,label:"预警限额",align:"center"},{prop:"warnresult",width:240,label:"预警结果",align:"center"}],columns3:[{prop:"cartype",width:120,label:"车种",align:"center"},{prop:"bizno",width:120,label:"业务单元号",align:"center"},{prop:"bizdetail",width:120,label:"业务单元明细",align:"center"},{prop:"index",width:120,label:"指标名称",align:"center"},{prop:"indexval",width:120,label:"指标值",align:"center"},{prop:"warnval",width:120,label:"预警限额",align:"center"},{prop:"warnresult",width:240,label:"预警结果",align:"center"}],columns4:[{prop:"fleetno",width:120,label:"车队协议号",align:"center"},{prop:"fleetnm",width:120,label:"投保人名称",align:"center"},{prop:"index",width:120,label:"指标名称",align:"center"},{prop:"indexval",width:120,label:"指标值",align:"center"},{prop:"warnval",width:120,label:"预警限额",align:"center"},{prop:"warnresult",width:240,label:"预警结果",align:"center"}],columns5:[{prop:"agentno",width:120,label:"代理协议号",align:"center"},{prop:"agentnm",width:120,label:"代理人名称",align:"center"},{prop:"index",width:120,label:"指标名称",align:"center"},{prop:"indexval",width:120,label:"指标值",align:"center"},{prop:"warnval",width:120,label:"预警限额",align:"center"},{prop:"warnresult",width:240,label:"预警结果",align:"center"}],currentPage:1,pageSize:10}},computed:l()({columns:function(){return"budgetcompre"===this.ruleType?this.columns1:"supervisecompre"===this.ruleType?this.columns2:"measureCompreSingle"===this.ruleType?this.columns3:"measureCompreFleet"===this.ruleType?this.columns4:"measureCompreAgent"===this.ruleType?this.columns5:void 0},data:function(){var e=[],n=["北京分公司","山东省分公司","江苏省分公司","黑龙江省分公司","重庆市分公司","河南省分公司","上海市分公司","广东省分公司","深圳市分公司","天津市分公司","青岛分公司","辽宁省分公司","河北省分公司","海南省分公司","广西分公司","湖南省分公司","浙江省分公司","贵州省分公司","四川省分公司","青海省分公司","云南省分公司","陕西省分公司","湖北省分公司","吉林省分公司","新疆分公司","宁波市分公司","山西省分公司","大连市分公司","甘肃省分公司","安徽省分公司","江西省分公司","福建省分公司","内蒙古分公司","厦门市分公司","宁夏自治区分公司","西藏自治区分公司"];if("budgetcompre"===this.ruleType){var a={ownorg:"北京分公司",index:"保费成本率-实际值(%)",indexval:"111.28",warnval:"110.00",warnresult:"保费成本率-实际值高于预算目标"};n.forEach(function(n,t){e.push(a)})}else if("supervisecompre"===this.ruleType){var t={ownorg:"北京分公司",index:"保费成本率-实际值(%)",indexval:"111.28",warnval:"110.00",warnresult:"保费成本率-实际值高于预算目标"};n.forEach(function(n,a){e.push(t)})}else if("measureCompreSingle"===this.ruleType){var l={cartype:"营业货车",bizno:"45678912001",bizdetail:"交商-不含车损，0次",index:"保费成本率-实际值(%)",indexval:"111.28",warnval:"110.00",warnresult:"保费成本率-实际值高于预算目标"};n.forEach(function(n,a){e.push(l)})}else if("measureCompreFleet"===this.ruleType){var r={fleetno:"20180101456789",fleetnm:"同顺运输有限公司",index:"保费成本率-实际值(%)",indexval:"111.28",warnval:"110.00",warnresult:"保费成本率-实际值高于预算目标"};n.forEach(function(n,a){e.push(r)})}else if("measureCompreAgent"===this.ruleType){var o={agentno:"2018010145789001",agentnm:"晋投保险经纪有限公司",index:"保费成本率-实际值(%)",indexval:"111.28",warnval:"110.00",warnresult:"保费成本率-实际值高于预算目标"};n.forEach(function(n,a){e.push(o)})}return e},curData:function(){var e=[],n=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a>this.data.length?this.data.length:a;for(var t=n;t<a;++t)e.push(this.data[t]);return e},ruleClass:function(){return this.inspect.ruleClass},ruleType:function(){return this.inspect.ruleType},type:function(){return this.inspect.type}},Object(r.d)({ownorgnm:function(e){return e.inspect.ruleInfoData.ownorgnm},inspect:function(e){return e.inspect.ruleInfoData.inspect},ruleTypeList:function(e){return e.inspect.ruleInfoData.ruleTypeList},timeSlotList:function(e){return e.inspect.ruleInfoData.timeSlotList}})),methods:{query:function(){},dataChange:function(e,n){this.pageSize=e,this.currentPage=n},back:function(){this.$router.push({path:"/admin/inspect/ruleresult"})}}},i={render:function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"inspectForm",attrs:{"label-width":"150px",model:e.inspect,inline:!0}},[a("el-form-item",{attrs:{label:"规则类型",prop:"ruleType"}},[a("el-select",{attrs:{placeholder:"请选择规则类型",disabled:""},model:{value:e.inspect.ruleType,callback:function(n){e.$set(e.inspect,"ruleType",n)},expression:"inspect.ruleType"}},e._l(e.ruleTypeList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"规则制定机构",prop:"org"}},[a("el-select",{attrs:{placeholder:"请选择规则制定机构",disabled:""},model:{value:e.inspect.org,callback:function(n){e.$set(e.inspect,"org",n)},expression:"inspect.org"}},e._l(e.orgList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.ownorgnm,prop:"ownorg"}},[a("el-select",{attrs:{placeholder:"请选择规则制定机构",disabled:""},model:{value:e.inspect.ownorg,callback:function(n){e.$set(e.inspect,"ownorg",n)},expression:"inspect.ownorg"}},e._l(e.orgList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreSingle"===e.ruleType,expression:"ruleType === 'measureCompreSingle'"}],attrs:{label:"定价方案版本号",prop:"planversion"}},[a("el-input",{attrs:{placeholder:"请输入定价方案版本号",disabled:""},model:{value:e.inspect.planversion,callback:function(n){e.$set(e.inspect,"planversion",n)},expression:"inspect.planversion"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreFleet"===e.ruleType,expression:"ruleType === 'measureCompreFleet'"}],attrs:{label:"车队协议号",prop:"fleetno"}},[a("el-input",{attrs:{placeholder:"请输入车队协议号",disabled:""},model:{value:e.inspect.fleetno,callback:function(n){e.$set(e.inspect,"fleetno",n)},expression:"inspect.fleetno"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreFleet"===e.ruleType,expression:"ruleType === 'measureCompreFleet'"}],attrs:{label:"投保人姓名",prop:"fleetnm"}},[a("el-input",{attrs:{placeholder:"请输入投保人姓名",disabled:""},model:{value:e.inspect.fleetnm,callback:function(n){e.$set(e.inspect,"fleetnm",n)},expression:"inspect.fleetnm"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreAgent"===e.ruleType,expression:"ruleType === 'measureCompreAgent'"}],attrs:{label:"代理协议号",prop:"agentno"}},[a("el-input",{attrs:{placeholder:"请输入代理协议号",disabled:""},model:{value:e.inspect.agentno,callback:function(n){e.$set(e.inspect,"agentno",n)},expression:"inspect.agentno"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"measureCompreAgent"===e.ruleType,expression:"ruleType === 'measureCompreAgent'"}],attrs:{label:"代理人姓名",prop:"agentnm"}},[a("el-input",{attrs:{placeholder:"请输入代理人姓名",disabled:""},model:{value:e.inspect.agentnm,callback:function(n){e.$set(e.inspect,"agentnm",n)},expression:"inspect.agentnm"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"budgetcompre"===e.ruleType,expression:"ruleType === 'budgetcompre'"}],attrs:{label:"预算渠道",prop:"channel",disabled:""}},[a("el-select",{attrs:{placeholder:"请选择预算渠道",disabled:""},model:{value:e.inspect.channel,callback:function(n){e.$set(e.inspect,"channel",n)},expression:"inspect.channel"}},e._l(e.channelList,function(n){return a("el-option",{key:n.code,attrs:{value:n.code,label:n.name}},[1===n.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(n.name))])])}))],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"budgetcompre"===e.ruleType,expression:"ruleType === 'budgetcompre'"}],attrs:{label:"预算周期",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择预算周期",disabled:""},model:{value:e.inspect.type,callback:function(n){e.$set(e.inspect,"type",n)},expression:"inspect.type"}},e._l(e.typeList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"budgetcompre"===e.ruleType,expression:"ruleType === 'budgetcompre'"}],attrs:{label:"预算时间段",prop:"timeSlot"}},[a("el-select",{attrs:{placeholder:"请选择时间段",disabled:""},model:{value:e.inspect.timeSlot,callback:function(n){e.$set(e.inspect,"timeSlot",n)},expression:"inspect.timeSlot"}},e._l(e.timeSlotList,function(e){return a("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"预警日期",prop:"warndate"}},[a("el-date-picker",{attrs:{disabled:"",type:"date",placeholder:"请选择时间"},model:{value:e.inspect.warndate,callback:function(n){e.$set(e.inspect,"warndate",n)},expression:"inspect.warndate"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.back}},[e._v("返回")])],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.curData,pagination:!0,total:e.data.length}})],1)])])},staticRenderFns:[]};var s=a("VU/8")(o,i,!1,function(e){a("eFOV")},"data-v-32d67a88",null);n.default=s.exports},eFOV:function(e,n){}});