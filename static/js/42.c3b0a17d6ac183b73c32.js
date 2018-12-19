webpackJsonp([42],{GtMi:function(e,a){},gylX:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={name:"DisConfigFee2",components:{BaseTable:function(){return t.e(153).then(t.bind(null,"ss0d"))}},data:function(){return{totalPay:"",configColumns:[{prop:"bizTypeNo",width:120,label:"业务单元号"},{prop:"bizDetail",width:230,label:"业务单元明细"},{prop:"manageCost",width:120,label:"自主折扣率浮动(%)",isEdit:!0,type:"input"},{prop:"serviceCost",width:120,label:"手续费率浮动(%)",isEdit:!0,type:"input"},{prop:"operationCostRate",width:140,label:"保费幅度比例",isEdit:!0,type:"input"}],configData:[{bizSector:"非营业客车",bizTypeNo:"00001",bizDetail:"1次，1000-2000，20-30",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"},{bizSector:"营业客车",bizTypeNo:"00002",bizDetail:"1次，1000-2000，30-45",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"},{bizSector:"营业货运",bizTypeNo:"00003",bizDetail:"1次，1000-2000，45-60",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"},{bizSector:"非营业货运",bizTypeNo:"00004",bizDetail:"1次，1000-2000，45-60",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"},{bizSector:"非营业客车",bizTypeNo:"00005",bizDetail:"1次，2000-5000，20-30",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"},{bizSector:"特种车",bizTypeNo:"00006",bizDetail:"1次，2000-5000，30-45",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"},{bizSector:"其他",bizTypeNo:"00007",bizDetail:"1次，2000-5000，45-60",insuranceType:"0507",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"},{bizSector:"家用车",bizTypeNo:"00008",bizDetail:"1次，2000-5000，45-60",insuranceType:"0528",hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premiumPercent:"16",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"}],futureColumns:[{prop:"premium",width:120,label:"保费规模预测(万元)"},{prop:"expbpayrate",width:120,label:"预期标费赔付率"},{prop:"hisbfullpayrate",width:120,label:"历史标费满期赔付率"},{prop:"personexppayrate",width:120,label:"核保人预估标费赔付率"},{prop:"manageCost",width:120,label:"自主折扣率(%)"},{prop:"exppayrate",width:120,label:"预估赔付率"},{prop:"finalPayRate",width:140,label:"理赔费用率(%)"},{prop:"serviceCost",width:120,label:"手续费率(%)"},{prop:"marketdriverate",width:120,label:"营销推动费用率"},{prop:"salecostrate",width:120,label:"销售人力成本率"},{prop:"award",width:120,label:"其他费用率(%)"},{prop:"fixdefeerate",width:120,label:"固定费用率"},{prop:"changecosttate",width:120,label:"变动成本率"},{prop:"operationCostRate",width:140,label:"保单成本率(%)"}],futureData:[{hisbfullpayrate:"56.6",expbpayrate:"55",finalPayRate:"62",fixdefeerate:"12",exppayrate:"60",personexppayrate:"60",manageCost:"6",serviceCost:"5",premium:"160",award:"12",operationCostRate:"6",marketdriverate:"11",salecostrate:"12",changecosttate:"5"}]}},methods:{handlePrev:function(){this.$router.push({path:"/admin/agency/range/configfee/rangebiz"})},analysis:function(){this.$router.push("/admin/fleet/declare/configfee/futresult")},total:function(){this.$router.push("/admin/fleet/futresult")}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"biz-content"},[t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.configColumns,data:e.configData,rowKey:"version"}})],1),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.futureColumns,data:e.futureData,rowKey:"version"}})],1)]),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:""},on:{prev:e.handlePrev}},[e._v("上一步")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("配费导出")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("配费导入")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("保存")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("确认")])],1)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"desc",staticStyle:{width:"200px"}},[this._v("车队协议经营结果预测")])])}]};var p=t("VU/8")(r,i,!1,function(e){t("GtMi")},"data-v-b4b2d294",null);a.default=p.exports}});