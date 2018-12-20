webpackJsonp([81],{KGsL:function(e,t){},Qun9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"DisFee",components:{BaseTable:function(){return a.e(153).then(a.bind(null,"ss0d"))}},data:function(){return{configHidden:!0,totalPay:"",fleetTypeCode:[],fleetTypeList:[{code:"1",name:"家用车"},{code:"2",name:"非营业客车"},{code:"3",name:"营业客车"},{code:"4",name:"营业货运"},{code:"5",name:"非营业货运"},{code:"6",name:"特种车"},{code:"7",name:"其他"}],columns:[{prop:"version",width:130,label:"版本号"},{prop:"org",width:130,label:"机构"},{prop:"channel",width:130,label:"渠道"},{prop:"operation",width:100,label:"操作",operation:!0,operations:[{text:"差异配费",event:"configFee"}]}],disFeeData:[{version:"500020180101001",org:"山西省分公司",channel:"传统渠道"}],configColumns:[{prop:"bizSector",width:120,label:"车种"},{prop:"bizTypeNo",width:120,label:"业务单元号"},{prop:"bizDetail",width:230,label:"业务单元明细"},{prop:"insuranceType",width:120,label:"险种代码"},{prop:"hisbfullpayrate",width:120,label:"历史标费满期赔付率"},{prop:"expbpayrate",width:120,label:"预期标费赔付率"},{prop:"finalPayRate",width:140,label:"理赔费用率(%)"},{prop:"fixdefeerate",width:120,label:"固定费用率"},{prop:"exppayrate",width:120,label:"核保人预估标费赔付率",isEdit:!0,type:"input"},{prop:"hisManageCost",width:120,label:"历史自主折扣率（%）"},{prop:"manageCost",width:120,label:"折扣率(%)",isEdit:!0,type:"input"},{prop:"hisServiceCost",width:140,label:"历史手续费率（%）"},{prop:"serviceCost",width:120,label:"手续费率(%)",isEdit:!0,type:"input"},{prop:"hiscalCompulsoryTraffic",width:120,label:"历史交强险保费占比（%）",isEdit:!0,type:"input"},{prop:"tarcalCompulsoryTraffic",width:120,label:"目标交强险保费占比（%）",isEdit:!0,type:"input"},{prop:"hisCost",width:120,label:"历史交强险边际成本率（%）",isEdit:!0,type:"input"},{prop:"tarCost",width:120,label:"目标交强险边际成本率（%）",isEdit:!0,type:"input"},{prop:"premiumPercent",width:120,label:"业务占比(%)",isEdit:!0,type:"input"},{prop:"award",width:120,label:"其他费用率(%)",isEdit:!0,type:"input"},{prop:"operationCostRate",width:140,label:"保单成本率(%)",isEdit:!0,type:"input"},{prop:"marketdriverate",width:120,label:"营销推动费用率",isEdit:!0,type:"input"},{prop:"salecostrate",width:120,label:"销售人力成本率",isEdit:!0,type:"input"},{prop:"changecosttate",width:120,label:"变动成本率",isEdit:!0,type:"input"}],configData:[{bizSector:"非营业客车",bizTypeNo:"00001",bizDetail:"1次，1000-2000，20-30",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",hisManageCost:"4",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"营业客车",bizTypeNo:"00002",bizDetail:"1次，1000-2000，30-45",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"5",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"营业货运",bizTypeNo:"00003",bizDetail:"1次，1000-2000，45-60",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"6",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"非营业货运",bizTypeNo:"00004",bizDetail:"1次，1000-2000，45-60",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"3",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"非营业客车",bizTypeNo:"00005",bizDetail:"1次，2000-5000，20-30",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"4",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"特种车",bizTypeNo:"00006",bizDetail:"1次，2000-5000，30-45",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"6",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"其他",bizTypeNo:"00007",bizDetail:"1次，2000-5000，45-60",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"4",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"家用车",bizTypeNo:"00008",bizDetail:"1次，2000-5000，45-60",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"6",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"}]}},methods:{query:function(){},configFee:function(){this.configHidden=!this.configHidden},analysis:function(){this.$router.push("/admin/agency/config/analysis")}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"sector-list"},[a("div",{staticClass:"biz-sector"},[a("el-form",{attrs:{"label-width":"120px",inline:!0}},[a("el-form-item",[a("el-checkbox-group",{model:{value:e.fleetTypeCode,callback:function(t){e.fleetTypeCode=t},expression:"fleetTypeCode"}},e._l(e.fleetTypeList,function(t){return a("el-checkbox",{key:t.code,attrs:{label:t.code,name:"fleetType"}},[e._v("\n              "+e._s(t.name)+"\n            ")])}))],1)],1)],1)]),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.configColumns,data:e.configData,rowKey:"version"}})],1)]),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("配费导出")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("配费导入")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("确认")])],1)])},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(e){a("KGsL")},"data-v-60eb72ac",null);t.default=s.exports}});