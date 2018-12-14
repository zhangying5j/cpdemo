webpackJsonp([99],{IOFJ:function(e,a){},upnd:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={name:"PlanComb",components:{BaseTable:function(){return t.e(141).then(t.bind(null,"ss0d"))}},data:function(){return{activeName:"1",param:{org:"",planversion:"",plannm:"",agentNo:"",startDate:"",endDate:"",plantype:"",status:"",activestatus:""},selectedItems:[],dimDialogVisible:!1,companyList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],columns1:[{prop:"index",width:50,label:"",type:"index"},{prop:"org",width:120,label:"机构"},{prop:"planVersionNo",width:120,label:"定价方案版本号"},{prop:"effect",width:120,label:"有效状态"},{prop:"effectDate",width:120,label:"生效日期"},{prop:"active",width:120,label:"活跃状态"},{prop:"activeDate",width:120,label:"活跃期间"},{prop:"operation",width:"120",label:"操作",operation:!0,operations:[{text:"查看",event:"detail1"}]}],columns2:[{prop:"index",width:50,label:"",type:"selection"},{prop:"org",width:120,label:"机构"},{prop:"planVersionNo",width:120,label:"定价方案版本号"},{prop:"effect",width:120,label:"有效状态"},{prop:"effectDate",width:120,label:"生效日期"},{prop:"active",width:120,label:"活跃状态"},{prop:"activeDate",width:120,label:"活跃期间"},{prop:"operation",width:"120",label:"操作",operation:!0,operations:[{text:"查看",event:"detail2"}]}],columns3:[{prop:"index",width:50,label:"",type:"selection"},{prop:"org",width:120,label:"机构"},{prop:"planVersionNo",width:120,label:"定价方案版本号"},{prop:"effect",width:120,label:"有效状态"},{prop:"effectDate",width:120,label:"生效日期"},{prop:"active",width:120,label:"活跃状态"},{prop:"activeDate",width:120,label:"活跃期间"},{prop:"operation",width:"120",label:"操作",operation:!0,operations:[{text:"查看",event:"detail3"}]}],data:[{org:"北京分公司",id:"1",planType:"单车",planVersionNo:"201801010011524",effect:"有效",effectDate:"2018-01-01",active:"活跃",activeDate:"2018-01-01--现在"},{org:"北京分公司",id:"2",planType:"车队",planVersionNo:"201801010022356",effect:"有效",effectDate:"2018-01-01",active:"一般",activeDate:"2018-01-01--2018-03-01"},{org:"北京分公司",id:"3",planType:"代理协议",planVersionNo:"201801010037526",effect:"有效",effectDate:"2018-01-01",active:"一般",activeDate:"2018-01-01--2018-03-01"},{org:"北京分公司",id:"4",planType:"单车",planVersionNo:"201801010011524",effect:"有效",effectDate:"2018-01-01",active:"一般",activeDate:"2018-01-01--2018-03-01"},{org:"北京分公司",id:"5",planType:"车队",planVersionNo:"201801010022356",effect:"有效",effectDate:"2018-01-01",active:"一般",activeDate:"2018-01-01--2018-03-01"},{org:"北京分公司",id:"6",planType:"代理协议",planVersionNo:"201801010037526",effect:"有效",effectDate:"2018-01-01",active:"一般",activeDate:"2018-01-01--2018-03-01"}],combcolumns:[{prop:"planType",width:120,label:"方案类型"},{prop:"planVersionNo",width:120,label:"方案版本号"},{prop:"targetPremium",label:"目标保费收入",width:140},{prop:"targetCostRate",label:"目标保单成本率",width:140},{prop:"targetChangeCostRate",label:"目标变动成本率",width:140},{prop:"targetPayRate",label:"目标保单赔付率",width:140},{prop:"targetFeeRate",label:"目标保单费用率",width:140},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140},{prop:"lossBizRatio",label:"亏损业务占比",width:140},{prop:"lossBizPremium",label:"严重亏损业务保费规模",width:140},{prop:"ratio",width:120,label:"历史占比",isEdit:!0,type:"input"}],combdata:[{planType:"单车",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"50%"},{planType:"车队",planVersionNo:"201801010022356",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"25%"},{planType:"代理协议",planVersionNo:"201801010037526",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"25%"},{planType:"合计",planVersionNo:"--",targetPremium:"10000",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",ratio:"100%"}]}},methods:{selectionChange:function(e){this.selectedItems=e},comb:function(){this.dimDialogVisible=!0},merge:function(){this.dimDialogVisible=!1,this.$message({type:"success",message:"合并成功!"})},detail1:function(e){this.$router.push("/admin/individual/query/detail")},detail2:function(e){this.$router.push("/admin/fleet/declare/configfee/disconfigfee")},detail3:function(e){this.$router.push("/admin/agency/config/customDisFee/three")}}},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"biz-content"},[t("div",{staticClass:"form"},[t("el-form",{attrs:{"label-width":"120px",inline:!0,model:e.param}},[t("el-form-item",{attrs:{label:"机构名称:",prop:"org"}},[t("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.param.org,callback:function(a){e.$set(e.param,"org",a)},expression:"param.org"}},e._l(e.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"1"===e.activeName,expression:"activeName==='1'"}],attrs:{label:"方案版本号",prop:"planversion"}},[t("el-input",{model:{value:e.param.planversion,callback:function(a){e.$set(e.param,"planversion",a)},expression:"param.planversion"}})],1),e._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"1"===e.activeName,expression:"activeName==='1'"}],attrs:{label:"定价方案名称",prop:"plannm"}},[t("el-input",{model:{value:e.param.plannm,callback:function(a){e.$set(e.param,"plannm",a)},expression:"param.plannm"}})],1),e._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"2"===e.activeName||"3"===e.activeName,expression:"activeName==='2' || activeName==='3'"}],attrs:{label:"协议号",prop:"agentNo"}},[t("el-input",{model:{value:e.param.agentNo,callback:function(a){e.$set(e.param,"agentNo",a)},expression:"param.agentNo"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"时间范围：",prop:"monthrange"}},[t("el-date-picker",{attrs:{type:"date"},model:{value:e.param.startDate,callback:function(a){e.$set(e.param,"startDate",a)},expression:"param.startDate"}}),e._v(" "),t("span",[e._v("至")]),e._v(" "),t("el-date-picker",{attrs:{type:"date"},model:{value:e.param.endDate,callback:function(a){e.$set(e.param,"endDate",a)},expression:"param.endDate"}})],1)],1)],1),e._v(" "),t("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"单车",name:"1"}},[t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns1,data:e.data,rowKey:"id"},on:{selectionChange:e.selectionChange,detail1:e.detail1}})],1)])]),e._v(" "),t("el-tab-pane",{attrs:{label:"车队协议",name:"2"}},[t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns2,data:e.data,rowKey:"id"},on:{selectionChange:e.selectionChange,detail2:e.detail2}})],1)])]),e._v(" "),t("el-tab-pane",{attrs:{label:"代理协议",name:"3"}},[t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns3,data:e.data,rowKey:"id"},on:{selectionChange:e.selectionChange,detail3:e.detail3}})],1)])])],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.comb}},[e._v("合并")])],1),e._v(" "),t("el-dialog",{attrs:{title:"合并方案",visible:e.dimDialogVisible,width:"80%"},on:{"update:visible":function(a){e.dimDialogVisible=a}}},[t("base-table",{attrs:{columns:e.combcolumns,data:e.combdata}}),e._v(" "),t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.merge}},[e._v("确认合并")])],1)],1)},staticRenderFns:[]};var i=t("VU/8")(l,o,!1,function(e){t("IOFJ")},"data-v-30037d0f",null);a.default=i.exports}});