webpackJsonp([26],{G7Yg:function(e,a){},YGxr:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n={name:"ConfigFee",components:{QueryForm:function(){return t.e(167).then(t.bind(null,"xen3"))},BaseTable:function(){return t.e(154).then(t.bind(null,"ss0d"))},Budget:function(){return t.e(2).then(t.bind(null,"otlB"))}},data:function(){return{warnTableVisible:!1,inspect:{org:"27000",channel:"ct",type:"month",timeRange:"2018Q1",version:"50000201801010900"},columns:[{prop:"configFeeModel",width:120,label:"配费模式",align:"center"},{prop:"premiumIncome",width:240,label:"保费收入（元）",align:"center",children:[{prop:"realIncome",width:120,label:"实际值(元)",align:"center"},{prop:"incomePercent",width:120,label:"占比(%)",align:"center"}]},{prop:"operationCostRate",width:120,label:"综合成本率(%)",align:"center",children:[{prop:"expOperation",width:120,label:"预算值(%)",align:"center"},{prop:"realOperation",width:120,label:"实际值(%)",align:"center"},{prop:"disOperation",width:120,label:"二者差(%)",align:"center"}]},{prop:"marketCostRate",width:120,label:"手续费率(%)",align:"center",children:[{prop:"expMarket",width:120,label:"预算值(%)",align:"center"},{prop:"realMarket",width:120,label:"实际值(%)",align:"center"},{prop:"disMarket",width:120,label:"二者差(%)",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率(%)",align:"center",children:[{prop:"expFinal",width:120,label:"预算值(%)",align:"center"},{prop:"realFinal",width:120,label:"实际值(%)",align:"center"},{prop:"disFinal",width:120,label:"二者差(%)",align:"center"}]}],feeData:[{id:"1",configFeeModel:"个车分类",realIncome:"6424.8",incomePercent:"20",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03"},{id:"2",configFeeModel:"车队协议",realIncome:"16062",incomePercent:"50",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4"},{id:"3",configFeeModel:"代理协议",realIncome:"9637.2",incomePercent:"30",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4"},{id:"4",configFeeModel:"合计",realIncome:"32124",incomePercent:"100",expOperation:"97.69",realOperation:"97.68",disOperation:"-0.01",expMarket:"18.57",realMarket:"19.7",disMarket:"1.13",expFinal:"58.04",realFinal:"57.95",disFinal:"-0.09"}]}},methods:{inspectTable:function(){},exportTable:function(){},sum:function(e){var a=e.columns,t=e.data,n=[];return a.forEach(function(e,a){0===a?n[a]="合计":(n[a]=0,t.forEach(function(t){n[a]+=Number(t[e.property])}),a>=3&&(n[a]/=t.length),n[a]=n[a].toFixed(2))}),n},tableCellClassName:function(e){var a=e.row,t=e.column,n=!1;return"disIncome"===t.property?n=Math.abs(a.disIncome)>15:"disOperation"===t.property?n=Math.abs(a.disOperation)>.5:"disMarket"===t.property?n=Math.abs(a.disMarket)>1:"disFinal"===t.property&&(n=Math.abs(a.disFinal)>.3),n?"alert-cell":null}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("query-form",{ref:"queryForm",attrs:{inspect:e.inspect}})],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.exportTable}},[e._v("导出报表")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(a){e.warnTableVisible=!0}}},[e._v("查看预警报告")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"title"},[t("el-alert",{attrs:{title:"统计截止月份：2018年3月 涉及保单范围：2018年1月1日 - 2018年3月31日",type:"info",closable:!1}})],1),e._v(" "),t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.feeData,"row-key":"id"}})],1)]),e._v(" "),t("el-dialog",{attrs:{title:"预警报告",visible:e.warnTableVisible,fullscreen:""},on:{"update:visible":function(a){e.warnTableVisible=a}}},[t("budget",{attrs:{typeProp:"fee"}})],1)],1)},staticRenderFns:[]};var r=t("VU/8")(n,i,!1,function(e){t("G7Yg")},"data-v-ab1f2440",null);a.default=r.exports}});