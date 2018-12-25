webpackJsonp([22],{eDja:function(e,a){},tco6:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n("Dd8w"),r=n.n(t),l=n("uXZL"),o=n.n(l),i={name:"RuleList",components:{BaseTable:function(){return n.e(153).then(n.bind(null,"ss0d"))}},data:function(){return{rules:{org:[{required:!0,trigger:"change",message:"制定机构"}]},inspect:{org:"00000",ruleClass:"budget",ruleType:"budgetcompre"},orgList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",children:[{code:"02001",name:"朝阳支公司"},{code:"02002",name:"丰台支公司"},{code:"02003",name:"大兴支公司"},{code:"02004",name:"东城支公司"},{code:"02005",name:"通州支公司"},{code:"02006",name:"房山支公司"},{code:"02007",name:"平谷支公司"},{code:"02008",name:"顺义支公司"},{code:"02009",name:"延庆支公司"},{code:"02010",name:"昌平支公司"},{code:"02011",name:"怀柔支公司"},{code:"02012",name:"海淀支公司"}]},{code:"02000",name:"山东省分公司"},{code:"03000",name:"江苏省分公司"},{code:"04000",name:"黑龙江省分公司"},{code:"05000",name:"重庆市分公司"},{code:"06000",name:"河南省分公司"},{code:"07000",name:"上海市分公司"},{code:"08000",name:"广东省分公司"},{code:"09000",name:"深圳市分公司"},{code:"10000",name:"天津市分公司"},{code:"11000",name:"青岛分公司"},{code:"12000",name:"辽宁省分公司"},{code:"13000",name:"河北省分公司"},{code:"14000",name:"海南省分公司"},{code:"15000",name:"广西分公司"},{code:"16000",name:"湖南省分公司"},{code:"17000",name:"浙江省分公司"},{code:"18000",name:"贵州省分公司"},{code:"19000",name:"四川省分公司"},{code:"20000",name:"青海省分公司"},{code:"21000",name:"云南省分公司"},{code:"22000",name:"陕西省分公司"},{code:"23000",name:"湖北省分公司"},{code:"24000",name:"吉林省分公司"},{code:"25000",name:"新疆分公司"},{code:"26000",name:"宁波市分公司"},{code:"27000",name:"山西省分公司"},{code:"28000",name:"大连市分公司"},{code:"29000",name:"甘肃省分公司"},{code:"30000",name:"安徽省分公司"},{code:"31000",name:"江西省分公司"},{code:"32000",name:"福建省分公司"},{code:"33000",name:"内蒙古分公司"},{code:"34000",name:"厦门市分公司"},{code:"35000",name:"宁夏自治区分公司"},{code:"36000",name:"西藏自治区分公司"}],ruleTypeList:[{code:"budgetcompre",name:"预算对比",flag:0},{code:"supervisecompre",name:"监管对比",flag:0},{code:"measurecompre",name:"预测对比",flag:0},{code:"measureCompreSingle",name:"与预测对比_单车",flag:1},{code:"measureCompreFleet",name:"与预测对比_车队",flag:1},{code:"measureCompreAgent",name:"与预测对比_代理",flag:1}],columns:[{prop:"org",width:120,label:"机构",align:"center"},{prop:"ruleType",width:120,label:"规则类型",align:"center"},{prop:"operation",label:"操作",width:480,operation:!0,operations:[{text:"规则模板下载",event:"downloadRule"},{text:"规则导入",event:"importRule"},{text:"规则导出",event:"exportRule"},{text:"查看预警规则",event:"detail"}]}],data:[],currentPage:1,pageSize:10,columns1:[{prop:"yusuan",label:"与预算对比预警规则",children:[{prop:"org",label:"回溯机构",width:120},{prop:"indexnm",label:"预警指标名称",width:120},{prop:"warnval",label:"指标限额",width:120}]}],data1:[{org:"北京分公司",indexnm:"目标保费规模_预算达成率（%）",warnval:"100.00"},{org:"北京分公司",indexnm:"目标保单成本率_实际值（%)",warnval:"85.00"},{org:"北京分公司",indexnm:"目标保单成本率实际值-预算值二者差（%)",warnval:"-0.50"},{org:"北京分公司",indexnm:"目标边际成本率_实际值(%)",warnval:"80.00"},{org:"北京分公司",indexnm:"目标边际成本率实际值-预算值二者差(%)",warnval:"-0.50"},{org:"山东省分公司",indexnm:"目标保费规模_预算达成率（%）",warnval:"100.00"},{org:"山东省分公司",indexnm:"目标保单成本率_实际值（%)",warnval:"85.00"},{org:"山东省分公司",indexnm:"目标保单成本率实际值-预算值二者差（%)",warnval:"-0.50"},{org:"山东省分公司",indexnm:"目标边际成本率_实际值(%)",warnval:"80.00"},{org:"山东省分公司",indexnm:"目标边际成本率实际值-预算值二者差(%)",warnval:"-0.50"}],columns2:[{prop:"jianguan",label:"与监管合规对比预警规则",children:[{prop:"org",label:"回溯机构",width:120},{prop:"indexnm",label:"预警指标名称",width:120},{prop:"warnval",label:"指标限额",width:120}]}],data2:[{org:"北京分公司",indexnm:"自主核保系数平均值",warnval:"70.00"},{org:"北京分公司",indexnm:"自主核保系数最高值",warnval:"75.00"},{org:"北京分公司",indexnm:"自主渠道系数平均值",warnval:"80.00"},{org:"北京分公司",indexnm:"自主渠道系数最高值",warnval:"85.00"},{org:"北京分公司",indexnm:"自主折扣系数平均值",warnval:"56.00"},{org:"北京分公司",indexnm:"自主折扣系数最高值",warnval:"63.00"},{org:"山东省分公司",indexnm:"自主核保系数平均值",warnval:"70.00"},{org:"山东省分公司",indexnm:"自主核保系数最高值",warnval:"75.00"},{org:"山东省分公司",indexnm:"自主渠道系数平均值",warnval:"80.00"},{org:"山东省分公司",indexnm:"自主渠道系数最高值",warnval:"85.00"},{org:"山东省分公司",indexnm:"自主折扣系数平均值",warnval:"56.00"},{org:"山东省分公司",indexnm:"自主折扣系数最高值",warnval:"63.00"}],columns3:[{prop:"danche",label:"与预测对比（单车）预警规则",children:[{prop:"org",label:"回溯机构",width:120},{prop:"indexnm",label:"预警指标名称",width:120},{prop:"warnval",label:"指标限额",width:120}]}],data3:[{org:"北京分公司",indexnm:"亏损业务占比_实际值（%）",warnval:"10.00"},{org:"北京分公司",indexnm:"亏损业务占比实际值-预测值二者差（%）",warnval:"-0.50"},{org:"北京分公司",indexnm:"严重亏损业务保费规模-实际值（万元）",warnval:"5000.00"},{org:"北京分公司",indexnm:"严重亏损业务保费规模实际值-预测值二者差（万元）",warnval:"1000.00"},{org:"北京分公司",indexnm:"保单赔付率_实际值（%)",warnval:"40.00"},{org:"北京分公司",indexnm:"保单赔付率实际值-预测值二者差（%)",warnval:"-1.00"},{org:"山东省分公司",indexnm:"亏损业务占比_实际值（%）",warnval:"10.00"},{org:"山东省分公司",indexnm:"亏损业务占比实际值-预测值二者差（%）",warnval:"-0.50"},{org:"山东省分公司",indexnm:"严重亏损业务保费规模-实际值（万元）",warnval:"5000.00"},{org:"山东省分公司",indexnm:"严重亏损业务保费规模实际值-预测值二者差（万元）",warnval:"1000.00"},{org:"山东省分公司",indexnm:"保单赔付率_实际值（%)",warnval:"40.00"},{org:"山东省分公司",indexnm:"保单赔付率实际值-预测值二者差（%)",warnval:"-1.00"}],columns4:[{prop:"chedui",label:"与预测对比（车队）预警规则",children:[{prop:"org",label:"回溯机构",width:120},{prop:"indexnm",label:"预警指标名称",width:120},{prop:"warnval",label:"指标限额",width:120}]}],data4:[{org:"北京分公司",indexnm:"亏损业务占比_实际值（%）",warnval:"10.00"},{org:"北京分公司",indexnm:"亏损业务占比实际值-预测值二者差（%）",warnval:"-0.50"},{org:"北京分公司",indexnm:"严重亏损业务保费规模-实际值（万元）",warnval:"5000.00"},{org:"北京分公司",indexnm:"严重亏损业务保费规模实际值-预测值二者差（万元）",warnval:"1000.00"},{org:"北京分公司",indexnm:"保单赔付率_实际值（%)",warnval:"40.00"},{org:"北京分公司",indexnm:"保单赔付率实际值-预测值二者差（%)",warnval:"-1.00"},{org:"山东省分公司",indexnm:"亏损业务占比_实际值（%）",warnval:"10.00"},{org:"山东省分公司",indexnm:"亏损业务占比实际值-预测值二者差（%）",warnval:"-0.50"},{org:"山东省分公司",indexnm:"严重亏损业务保费规模-实际值（万元）",warnval:"5000.00"},{org:"山东省分公司",indexnm:"严重亏损业务保费规模实际值-预测值二者差（万元）",warnval:"1000.00"},{org:"山东省分公司",indexnm:"保单赔付率_实际值（%)",warnval:"40.00"},{org:"山东省分公司",indexnm:"保单赔付率实际值-预测值二者差（%)",warnval:"-1.00"}],columns5:[{prop:"daili",label:"与预测对比（代理）预警规则",children:[{prop:"org",label:"回溯机构",width:120},{prop:"indexnm",label:"预警指标名称",width:120},{prop:"warnval",label:"指标限额",width:120}]}],data5:[{org:"北京分公司",indexnm:"亏损业务占比_实际值（%）",warnval:"10.00"},{org:"北京分公司",indexnm:"亏损业务占比实际值-预测值二者差（%）",warnval:"-0.50"},{org:"北京分公司",indexnm:"严重亏损业务保费规模-实际值（万元）",warnval:"5000.00"},{org:"北京分公司",indexnm:"严重亏损业务保费规模实际值-预测值二者差（万元）",warnval:"1000.00"},{org:"北京分公司",indexnm:"保单赔付率_实际值（%)",warnval:"40.00"},{org:"北京分公司",indexnm:"保单赔付率实际值-预测值二者差（%)",warnval:"-1.00"},{org:"山东省分公司",indexnm:"亏损业务占比_实际值（%）",warnval:"10.00"},{org:"山东省分公司",indexnm:"亏损业务占比实际值-预测值二者差（%）",warnval:"-0.50"},{org:"山东省分公司",indexnm:"严重亏损业务保费规模-实际值（万元）",warnval:"5000.00"},{org:"山东省分公司",indexnm:"严重亏损业务保费规模实际值-预测值二者差（万元）",warnval:"1000.00"},{org:"山东省分公司",indexnm:"保单赔付率_实际值（%)",warnval:"40.00"},{org:"山东省分公司",indexnm:"保单赔付率实际值-预测值二者差（%)",warnval:"-1.00"}]}},computed:{curData:function(){var e=[],a=(this.currentPage-1)*this.pageSize,n=this.currentPage*this.pageSize;n=n>this.data.length?this.data.length:n;for(var t=a;t<n;++t)e.push(this.data[t]);return e},ruleClass:function(){return this.inspect.ruleClass},ruleType:function(){return this.inspect.ruleType}},watch:{ruleType:function(e){var a=this;console.log(e),this.$refs.inspectForm.validate(function(e){if(e){a.data=[];var n={org:"",ruleType:a.ruleTypeList.find(function(e){return e.code===a.inspect.ruleType}).name};["北京分公司","山东省分公司","江苏省分公司","黑龙江省分公司","重庆市分公司","河南省分公司","上海市分公司","广东省分公司","深圳市分公司","天津市分公司","青岛分公司","辽宁省分公司","河北省分公司","海南省分公司","广西分公司","湖南省分公司","浙江省分公司","贵州省分公司","四川省分公司","青海省分公司","云南省分公司","陕西省分公司","湖北省分公司","吉林省分公司","新疆分公司","宁波市分公司","山西省分公司","大连市分公司","甘肃省分公司","安徽省分公司","江西省分公司","福建省分公司","内蒙古分公司","厦门市分公司","宁夏自治区分公司","西藏自治区分公司"].forEach(function(e,t){var l=r()({},n);l.id=t,l.org=e,a.data.push(l)})}})}},methods:{query:function(){var e=this;this.$refs.inspectForm.validate(function(a){if(a){e.data=[];var n={org:"",ruleType:e.ruleTypeList.find(function(a){return a.code===e.inspect.ruleType}).name};["北京分公司","山东省分公司","江苏省分公司","黑龙江省分公司","重庆市分公司","河南省分公司","上海市分公司","广东省分公司","深圳市分公司","天津市分公司","青岛分公司","辽宁省分公司","河北省分公司","海南省分公司","广西分公司","湖南省分公司","浙江省分公司","贵州省分公司","四川省分公司","青海省分公司","云南省分公司","陕西省分公司","湖北省分公司","吉林省分公司","新疆分公司","宁波市分公司","山西省分公司","大连市分公司","甘肃省分公司","安徽省分公司","江西省分公司","福建省分公司","内蒙古分公司","厦门市分公司","宁夏自治区分公司","西藏自治区分公司"].forEach(function(a,t){var l=r()({},n);l.id=t,l.org=a,e.data.push(l)})}})},dataChange:function(e,a){this.pageSize=e,this.currentPage=a},downloadRule:function(e){var a=this;this.$confirm("确定下载规则模板吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){a.$message({type:"success",message:"模板下载成功!"});var n=a.data.find(function(a){return a.id===e});if("预算对比"===n.ruleType){var t={};t["预警规则"]=o.a.utils.table_to_sheet(document.querySelector("#out-table1"));var r=o.a.utils.book_new();return r.SheetNames=["预警规则"],r.Sheets=t,o.a.writeFile(r,"预算对比.xlsx")}if("监管对比"===n.ruleType){var l={};l["预警规则"]=o.a.utils.table_to_sheet(document.querySelector("#out-table2"));var i=o.a.utils.book_new();return i.SheetNames=["预警规则"],i.Sheets=l,o.a.writeFile(i,"监管对比.xlsx")}if("与预测对比_单车"===n.ruleType){var d={};d["预警规则"]=o.a.utils.table_to_sheet(document.querySelector("#out-table3"));var c=o.a.utils.book_new();return c.SheetNames=["预警规则"],c.Sheets=d,o.a.writeFile(c,"与预测对比分析_单车.xlsx")}if("与预测对比_车队"===n.ruleType){var s={};s["预警规则"]=o.a.utils.table_to_sheet(document.querySelector("#out-table4"));var m=o.a.utils.book_new();return m.SheetNames=["预警规则"],m.Sheets=s,o.a.writeFile(m,"与预测对比分析_车队.xlsx")}if("与预测对比_代理"===n.ruleType){var u={};u["预警规则"]=o.a.utils.table_to_sheet(document.querySelector("#out-table5"));var p=o.a.utils.book_new();return p.SheetNames=["预警规则"],p.Sheets=u,o.a.writeFile(p,"与预测对比分析_代理.xlsx")}}).catch(function(){})},importRule:function(){},exportRule:function(){},detail:function(e){this.$store.commit("SET_RULE_INFO_PARAM",this.data[e]),this.$router.push({path:"/admin/inspect/rulelist/rulelook"})},handlBatchInput:function(){},handleBatchExport:function(){}}},d={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"container"},[n("div",{staticClass:"form"},[n("el-form",{ref:"inspectForm",attrs:{"label-width":"120px",model:e.inspect,rules:e.rules,inline:!0}},[n("el-form-item",{attrs:{label:"制定机构",prop:"org"}},[n("el-select",{attrs:{placeholder:"请选择制定机构",clearable:""},model:{value:e.inspect.org,callback:function(a){e.$set(e.inspect,"org",a)},expression:"inspect.org"}},e._l(e.orgList,function(e){return n("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"规则类型",prop:"ruleType"}},[n("el-select",{attrs:{placeholder:"请选择规则类型",clearable:""},model:{value:e.inspect.ruleType,callback:function(a){e.$set(e.inspect,"ruleType",a)},expression:"inspect.ruleType"}},e._l(e.ruleTypeList,function(a){return n("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?n("span",[e._v(" ")]):e._e(),e._v(" "),n("span",[e._v(e._s(a.name))])])}))],1)],1)],1),e._v(" "),n("div",{staticClass:"option"},[n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.query}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.handlBatchInput}},[e._v("批量导入")]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.handleBatchExport}},[e._v("批量导出")])],1),e._v(" "),n("div",{staticClass:"data"},[n("div",{staticClass:"table"},[n("base-table",{attrs:{columns:e.columns,data:e.curData,pagination:!0,total:e.data.length,rowKey:"id"},on:{dataChange:e.dataChange,downloadRule:e.downloadRule,importRule:e.importRule,exportRule:e.exportRule,detail:e.detail}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"table"},[n("base-table",{attrs:{columns:e.columns1,data:e.data1,id:"out-table1"}}),e._v(" "),n("base-table",{attrs:{columns:e.columns2,data:e.data2,id:"out-table2"}}),e._v(" "),n("base-table",{attrs:{columns:e.columns3,data:e.data3,id:"out-table3"}}),e._v(" "),n("base-table",{attrs:{columns:e.columns4,data:e.data4,id:"out-table4"}}),e._v(" "),n("base-table",{attrs:{columns:e.columns5,data:e.data5,id:"out-table5"}})],1)])])},staticRenderFns:[]};var c=n("VU/8")(i,d,!1,function(e){n("eDja")},"data-v-e9d5bd20",null);a.default=c.exports}});