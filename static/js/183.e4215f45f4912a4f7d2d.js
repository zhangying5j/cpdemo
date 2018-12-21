webpackJsonp([183],{T1AU:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i={name:"DisConfigFee",components:{BaseTable:function(){return t.e(153).then(t.bind(null,"ss0d"))}},data:function(){return{totalPay:"",configColumns:[{prop:"bizSector",width:120,label:"车种"},{prop:"bizTypeNo",width:120,label:"业务单元号"},{prop:"bizDetail",width:230,label:"业务单元明细"},{prop:"premiumPercent",width:120,label:"业务占比(%)",isEdit:!1,type:"input"},{prop:"expbpayrate",width:120,label:"预期标费赔付率"},{prop:"hisbfullpayrate",width:120,label:"历史标费满期赔付率"},{prop:"personexppayrate",width:120,label:"核保人预估标费赔付率",isEdit:!1,type:"input"},{prop:"hisManageCost",width:120,label:"历史自主折扣率（%）"},{prop:"manageCost",width:120,label:"自主折扣率(%)",isEdit:!1,type:"input"},{prop:"exppayrate",width:120,label:"预估赔付率"},{prop:"finalPayRate",width:140,label:"理赔费用率(%)"},{prop:"hisServiceCost",width:140,label:"历史手续费率（%）"},{prop:"serviceCost",width:120,label:"手续费率(%)",isEdit:!1,type:"input"},{prop:"hiscalCompulsoryTraffic",width:120,label:"历史交强险保费占比（%）",isEdit:!1,type:"input"},{prop:"tarcalCompulsoryTraffic",width:120,label:"目标交强险保费占比（%）",isEdit:!1,type:"input"},{prop:"hisCost",width:120,label:"历史交强险边际成本率（%）",isEdit:!1,type:"input"},{prop:"tarCost",width:120,label:"目标交强险边际成本率（%）",isEdit:!1,type:"input"},{prop:"marketdriverate",width:120,label:"营销推动费用率",isEdit:!1,type:"input"},{prop:"salecostrate",width:120,label:"销售人力成本率",isEdit:!1,type:"input"},{prop:"award",width:120,label:"其他费用率(%)",isEdit:!1,type:"input"},{prop:"fixdefeerate",width:120,label:"固定费用率"},{prop:"changecosttate",width:120,label:"变动成本率",isEdit:!1,type:"input"},{prop:"operationCostRate",width:140,label:"保单成本率(%)",isEdit:!1,type:"input"}],configData:[{bizSector:"非营业客车",bizTypeNo:"00001",bizDetail:"1次，1000-2000，20-30",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",hisManageCost:"4",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"营业客车",bizTypeNo:"00002",bizDetail:"1次，1000-2000，30-45",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"5",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"营业货运",bizTypeNo:"00003",bizDetail:"1次，1000-2000，45-60",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"6",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"非营业货运",bizTypeNo:"00004",bizDetail:"1次，1000-2000，45-60",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"3",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"非营业客车",bizTypeNo:"00005",bizDetail:"1次，2000-5000，20-30",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"4",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"特种车",bizTypeNo:"00006",bizDetail:"1次，2000-5000，30-45",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"6",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"其他",bizTypeNo:"00007",bizDetail:"1次，2000-5000，45-60",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"4",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"},{bizSector:"家用车",bizTypeNo:"00008",bizDetail:"1次，2000-5000，45-60",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5",hisManageCost:"6",hisServiceCost:"3",hiscalCompulsoryTraffic:"20",hisCost:"10"}],futureColumns:[{prop:"premium",width:120,label:"保费规模预测(万元)"},{prop:"expbpayrate",width:120,label:"预期标费赔付率"},{prop:"hisbfullpayrate",width:120,label:"历史标费满期赔付率"},{prop:"personexppayrate",width:120,label:"核保人预估标费赔付率"},{prop:"manageCost",width:120,label:"自主折扣率(%)"},{prop:"exppayrate",width:120,label:"预估赔付率"},{prop:"finalPayRate",width:140,label:"理赔费用率(%)"},{prop:"serviceCost",width:120,label:"手续费率(%)"},{prop:"marketdriverate",width:120,label:"营销推动费用率"},{prop:"salecostrate",width:120,label:"销售人力成本率"},{prop:"award",width:120,label:"其他费用率(%)"},{prop:"fixdefeerate",width:120,label:"固定费用率"},{prop:"changecosttate",width:120,label:"变动成本率"},{prop:"operationCostRate",width:140,label:"保单成本率(%)"}],futureData:[{hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premium:"160",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"}]}},methods:{handlePrev:function(){this.$router.push({path:"/admin/fleet/declare/configfee/fleetbiz"})},analysis:function(){this.$router.push("/admin/fleet/declare/configfee/futresult")},total:function(){this.$router.push("/admin/fleet/futresult")}}},r={render:function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"biz-content"},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:this.configColumns,data:this.configData,rowKey:"version"}})],1)])])},staticRenderFns:[]};var p=t("VU/8")(i,r,!1,function(e){t("ZiTf")},"data-v-6a158dae",null);a.default=p.exports},ZiTf:function(e,a){}});