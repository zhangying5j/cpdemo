webpackJsonp([34],{Xlzn:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t("6D10"),r={name:"Modify",components:{BaseTable:function(){return t.e(154).then(t.bind(null,"ss0d"))}},data:function(){return{fleetTypeCode:[],fleetTypeList:[{code:"1",name:"企业未营业车"},{code:"2",name:"营业公路客运"},{code:"3",name:"营业城市公交"},{code:"4",name:"营业旅游车"},{code:"5",name:"非营业货车(含特四)"},{code:"6",name:"营业货车(含特四)"},{code:"7",name:"特一"},{code:"8",name:"特二"},{code:"9",name:"特三"},{code:"10",name:"营业出租租赁客车"}],approve1:"",approve2:"",columns1:[{prop:"feeModel",width:120,label:"配费模式",align:"center"},{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(元)",align:"center"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center"},{prop:"fullPayRate",width:120,label:"满期赔付率(%)",align:"center"},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center"},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center"}],data1:[{no:1,feeModel:"代理协议",bizSector:"家用车-新车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{no:2,feeModel:"代理协议",bizSector:"家用车-新车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{no:3,feeModel:"代理协议",bizSector:"家用车-新车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{no:4,feeModel:"代理协议",bizSector:"家用车-旧车",insuranceType:"交强险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{no:5,feeModel:"代理协议",bizSector:"家用车-旧车",insuranceType:"商业险合计",premiumScale:"225",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"},{no:6,feeModel:"代理协议",bizSector:"家用车-旧车",insuranceType:"交商合计",premiumScale:"450",finalPayRate:"65.1",fullPayRate:"63.9",marketCostRate:"16.8",operationCostRate:"98"}],columns2:[{prop:"agencyNo",width:120,label:"协议号"},{prop:"insuranceType",width:160,label:"险种"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)"},{prop:"finalPayRateType",width:120,label:"终极赔付率分类"},{prop:"premiumPercent",width:120,label:"保费占比(%)"},{prop:"serviceCost",width:120,label:"手续费(%)"},{prop:"exhibitionCost",width:120,label:"展业费(%)"},{prop:"award",width:120,label:"价值提奖(%)"},{prop:"marketCost",width:120,label:"当前市场费用"},{prop:"checkedFeeUp",width:120,label:"已核费用上限"},{prop:"operationCostRate",width:120,label:"经营成本率(%)"}],data2:[{no:1,agencyNo:"50000100001",insuranceType:"机动车辆保险",finalPayRate:"66.93",finalPayRateType:"中II",premiumPercent:"55.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.3"},{no:2,agencyNo:"50000100001",insuranceType:"机动车综合商业保险",finalPayRate:"33.93",finalPayRateType:"低I",premiumPercent:"45.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"97.5"},{no:3,agencyNo:"全国合计：",insuranceType:"",finalPayRate:"27.29",finalPayRateType:"中I",premiumPercent:"60.00",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.84"}],columns3:[{prop:"agencyNo",width:130,label:"协议号"},{prop:"bizSector",width:160,label:"业务模块"},{prop:"insuranceType",width:170,label:"险种"},{prop:"specialFactor",width:160,label:"特殊因子"},{prop:"auto",width:160,label:"自主系数(%)"},{prop:"historyAuto",width:160,label:"历史自主系数(%)"},{prop:"finalPayRate",width:120,label:"终极赔付率(%)"},{prop:"finalPayRateType",width:120,label:"终极赔付率分类"},{prop:"historyFullRate",width:120,label:"历史满期配费率(%)"},{prop:"historyPremium",width:120,label:"历史保费规模"},{prop:"premiumPercent",width:120,label:"保费占比(%)"},{prop:"serviceCost",width:120,label:"手续费(%)"},{prop:"exhibitionCost",width:120,label:"展业费(%)"},{prop:"award",width:120,label:"价值提奖(%)"},{prop:"marketCost",width:120,label:"当前市场费用"},{prop:"checkedFeeUp",width:120,label:"已核费用上限"},{prop:"operationCostRate",width:120,label:"经营成本率(%)"}],data3:[{no:1,agencyNo:"50000100001",bizSector:"家用-新车",insuranceType:"机动车辆保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"66.93",finalPayRateType:"中II",historyFullRate:"67.93",historyPremium:"2603.40",premiumPercent:"8.10",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.3"},{no:2,agencyNo:"50000100001",bizSector:"家用-新车",insuranceType:"机动车综合商业保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"33.93",finalPayRateType:"低I",historyFullRate:"34.93",historyPremium:"8648.65",premiumPercent:"26.92",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"97.5"},{no:3,agencyNo:"50000100001",bizSector:"家用-旧车",insuranceType:"机动车辆保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"66.93",finalPayRateType:"中II",historyFullRate:"67.93",historyPremium:"2603.40",premiumPercent:"8.10",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"96.3"},{no:4,agencyNo:"50000100001",bizSector:"家用-旧车",insuranceType:"机动车综合商业保险",specialFactor:"1.00",auto:"1.00",historyAuto:"1.00",finalPayRate:"33.93",finalPayRateType:"低I",historyFullRate:"34.93",historyPremium:"8648.65",premiumPercent:"26.92",serviceCost:"",exhibitionCost:"0.00",award:"0.00",marketCost:"0.00",checkedFeeUp:"0.00",operationCostRate:"97.5"}],columns4:[{prop:"feeModel",width:120,label:"配费模式",align:"center"},{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"insuranceType",width:120,label:"险种",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(元)",align:"center",children:[{prop:"proPremiumScale",width:120,label:"协议合计",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center",children:[{prop:"proFinalPayRate",width:80,label:"协议合计",align:"center"},{prop:"expFinalPayRate",width:40,label:"预算",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率(%)",align:"center",children:[{prop:"proMarketCostRate",width:80,label:"协议合计",align:"center"},{prop:"expMarketCostRate",width:40,label:"预算",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率(%)",align:"center",children:[{prop:"proOperationCostRate",width:80,label:"协议合计",align:"center"},{prop:"expOperationCostRate",width:40,label:"预算",align:"center"}]}],data4:[{no:1,feeModel:"代理协议",bizSector:"家用车",insuranceType:"交商合计",proPremiumScale:"450",proFinalPayRate:"65.1",expFinalPayRate:"63.9",proMarketCostRate:"16.8",expMarketCostRate:"69.9",proOperationCostRate:"99.9",expOperationCostRate:"100.0"}]}},computed:{mergeData1:function(){return Object(o.a)(this.data1,["feeModel","bizSector"])},mergeData3:function(){return Object(o.a)(this.data3,["agencyNo","bizSector"])}},methods:{merge1:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["feeModel","bizSector"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}},merge3:function(e){var a=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["agencyNo","bizSector"].includes(t.property)){if(a.rowSpan[t.property]>1)return[a.rowSpan[t.property],1];if(0===a.rowSpan[t.property])return[0,0]}}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns1,rowKey:"no",data:e.mergeData1,spanMethod:e.merge1}})],1)]),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns2,data:e.data2,rowKey:"no"}})],1)]),e._v(" "),t("div",{staticClass:"sector-list"},[t("div",{staticClass:"biz-sector"},[t("el-form",{attrs:{"label-width":"120px",inline:!0}},[t("el-form-item",[t("el-checkbox-group",{model:{value:e.fleetTypeCode,callback:function(a){e.fleetTypeCode=a},expression:"fleetTypeCode"}},[e._l(e.fleetTypeList,function(a){return t("el-checkbox",{key:a.code,attrs:{label:a.code,name:"fleetType"}},[e._v("\n              "+e._s(a.name)+"\n            ")])}),e._v(" "),t("el-checkbox",{staticStyle:{color:"red"},attrs:{label:"0"}},[e._v(" 未勾选板块出单取0费用")])],2)],1)],1)],1)]),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns3,rowKey:"no",data:e.mergeData3,spanMethod:e.merge3}})],1)]),e._v(" "),t("div",{staticClass:"data"},[t("el-row",[t("el-col",{attrs:{span:12}},[t("div",{staticClass:"approval"},[t("div",{staticClass:"result"},[t("div",{staticClass:"title"},[e._v("申报情况说明")]),e._v(" "),t("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.approve1,callback:function(a){e.approve1=a},expression:"approve1"}})],1)])]),e._v(" "),t("el-col",{attrs:{span:12}},[t("div",{staticClass:"approval"},[t("div",{staticClass:"result"},[t("div",{staticClass:"title"},[e._v("检视说明")]),e._v(" "),t("el-input",{attrs:{type:"textarea",rows:5},model:{value:e.approve2,callback:function(a){e.approve2=a},expression:"approve2"}})],1)])])],1)],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns4,data:e.data4,rowKey:"no"}})],1)])])},staticRenderFns:[]};var l=t("VU/8")(r,i,!1,function(e){t("rMET")},"data-v-88d2ba20",null);a.default=l.exports},rMET:function(e,a){}});