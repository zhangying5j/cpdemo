webpackJsonp([21],{"7PPa":function(e,r){},"7U9v":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("6D10"),a={name:"MultipleVersion",components:{VersionQueryForm:function(){return t.e(164).then(t.bind(null,"8qXw"))},BaseTable:function(){return t.e(154).then(t.bind(null,"ss0d"))}},data:function(){return{personForm:{org:"27000",channel:"ct",feeModel:"person",endMonth:"",timeRange:"2018Q1",version:"50000201801010900"},columns:[{prop:"bizSector",width:120,label:"业务板块",align:"center"},{prop:"bizSmallNumber",width:120,label:"业务小类号",align:"center"},{prop:"bizSmallDetail",width:200,label:"业务小类明细",align:"center"},{prop:"premiumScale",width:120,label:"保费规模(元)",align:"center"},{prop:"incomePercentBiz",width:120,label:"保费收入占比(业务小类)（%）",align:"center",children:[{prop:"expIncomePercentBiz",width:120,label:"预测值(%)",align:"center"},{prop:"realIncomePercentBiz",width:120,label:"实际值(%)",align:"center"},{prop:"disIncomePercentBiz",width:120,label:"二者差(%)",align:"center"}]},{prop:"incomePercentForce",width:120,label:"保费收入占比(交强险)（%）",align:"center",children:[{prop:"expIncomePercentForce",width:120,label:"预测值(%)",align:"center"},{prop:"realIncomePercentForce",width:120,label:"实际值(%)",align:"center"},{prop:"disIncomePercentForce",width:120,label:"二者差(%)",align:"center"}]},{prop:"comAuto",width:120,label:"商业险自主系数(%)",align:"center",children:[{prop:"expComAuto",width:120,label:"预测值(%)",align:"center"},{prop:"realComAuto",width:120,label:"实际值(%)",align:"center"},{prop:"disComAuto",width:120,label:"二者差(%)",align:"center"}]},{prop:"operationCostRate",width:120,label:"经营成本率",align:"center",children:[{prop:"expOperation",width:120,label:"预测值(%)",align:"center"},{prop:"realOperation",width:120,label:"实际值(%)",align:"center"},{prop:"disOperation",width:120,label:"二者差(%)",align:"center"}]},{prop:"marketCostRate",width:120,label:"市场费用率",align:"center",children:[{prop:"expMarket",width:120,label:"预测值(%)",align:"center"},{prop:"realMarket",width:120,label:"实际值(%)",align:"center"},{prop:"disMarket",width:120,label:"二者差(%)",align:"center"}]},{prop:"finalPayRate",width:120,label:"终极赔付率",align:"center",children:[{prop:"expFinal",width:120,label:"预测值(%)",align:"center"},{prop:"realFinal",width:120,label:"实际值(%)",align:"center"},{prop:"disFinal",width:120,label:"二者差(%)",align:"center"}]},{prop:"fullPayRate",width:120,label:"满期赔付率",align:"center",children:[{prop:"realFull",width:120,label:"实际值(%)",align:"center"}]}],multipleVersionData:[{id:"1",bizSector:"家用-新车",bizSmallNumber:"01010101",bizSmallDetail:"单交,单商_单三_无附加",premiumScale:"2583.10",expIncomePercentBiz:"14.78",realIncomePercentBiz:"16.88",disIncomePercentBiz:"2.1",expIncomePercentForce:"30.00",realIncomePercentForce:"29.50",disIncomePercentForce:"-0.50",expComAuto:"45.00",realComAuto:"42.60",disComAuto:"-2.40",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03",realFull:"57.90"},{id:"2",bizSector:"家用-新车",bizSmallNumber:"01010102",bizSmallDetail:"单交,单商_单三_有附加",premiumScale:"2523.25",expIncomePercentBiz:"20.09",realIncomePercentBiz:"16.49",disIncomePercentBiz:"-3.6",expIncomePercentForce:"28.00",realIncomePercentForce:"24.60",disIncomePercentForce:"-3.40",expComAuto:"45.00",realComAuto:"45.70",disComAuto:"0.70",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4",realFull:"60.00"},{id:"3",bizSector:"家用-新车",bizSmallNumber:"01010201",bizSmallDetail:"单交,单商_损三_无附加",premiumScale:"2510.65",expIncomePercentBiz:"12.21",realIncomePercentBiz:"16.41",disIncomePercentBiz:"4.2",expIncomePercentForce:"25.00",realIncomePercentForce:"26.80",disIncomePercentForce:"1.80",expComAuto:"50.00",realComAuto:"56.30",disComAuto:"6.30",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4",realFull:"58.70"},{id:"4",bizSector:"家用-新车",bizSmallNumber:"01010202",bizSmallDetail:"单交,单商_损三_有附加",premiumScale:"2603.90",expIncomePercentBiz:"21.22",realIncomePercentBiz:"17.02",disIncomePercentBiz:"-4.2",expIncomePercentForce:"30.00",realIncomePercentForce:"31.20",disIncomePercentForce:"1.20",expComAuto:"60.00",realComAuto:"58.60",disComAuto:"-1.40",expOperation:"97.6",realOperation:"98.2",disOperation:"0.6",expMarket:"16.8",realMarket:"17.5",disMarket:"0.7",expFinal:"56.89",realFinal:"56.86",disFinal:"-0.03",realFull:"58.00"},{id:"5",bizSector:"家用-新车",bizSmallNumber:"01020301",bizSmallDetail:"单交,交商_交三_无附加",premiumScale:"2564.55",expIncomePercentBiz:"14.97",realIncomePercentBiz:"16.77",disIncomePercentBiz:"1.8",expIncomePercentForce:"28.00",realIncomePercentForce:"29.90",disIncomePercentForce:"1.90",expComAuto:"90.00",realComAuto:"96.30",disComAuto:"6.30",expOperation:"97.9",realOperation:"97.7",disOperation:"-0.2",expMarket:"20.1",realMarket:"21.3",disMarket:"1.2",expFinal:"59",realFinal:"58.6",disFinal:"-0.4",realFull:"59.60"},{id:"6",bizSector:"家用-新车",bizSmallNumber:"01020302",bizSmallDetail:"单交,交商_交三_有附加",premiumScale:"2514.45",expIncomePercentBiz:"18.73",realIncomePercentBiz:"16.43",disIncomePercentBiz:"-2.3",expIncomePercentForce:"30.00",realIncomePercentForce:"30.20",disIncomePercentForce:"0.20",expComAuto:"85.00",realComAuto:"85.20",disComAuto:"0.20",expOperation:"97.4",realOperation:"97.3",disOperation:"-0.1",expMarket:"17.2",realMarket:"18.5",disMarket:"1.3",expFinal:"57.2",realFinal:"57.6",disFinal:"0.4",realFull:"58.60"},{id:"7",bizSector:"合计",bizSmallNumber:"",bizSmallDetail:"",premiumScale:"15299.9",expIncomePercentBiz:"17.01",realIncomePercentBiz:"16.67",disIncomePercentBiz:"-0.34",expIncomePercentForce:"28.51",realIncomePercentForce:"28.72",disIncomePercentForce:"0.21",expComAuto:"62.49",realComAuto:"64.08",disComAuto:"1.59",expOperation:"97.63",realOperation:"97.74",disOperation:"0.104",expMarket:"18.03",realMarket:"19.09",disMarket:"1.06",expFinal:"57.69",realFinal:"57.68",disFinal:"-0.012",realFull:"58.79"}]}},computed:{mergeData:function(){return Object(n.a)(this.multipleVersionData,["bizSector"])}},methods:{merge:function(e){var r=e.row,t=e.column;e.rowIndex,e.columnIndex;if(["bizSector"].includes(t.property)){if(r.rowSpan[t.property]>1)return[r.rowSpan[t.property],1];if(0===r.rowSpan[t.property])return[0,0]}},tick:function(){var e=document.getElementsByClassName("el-table__body")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[6],r=e.getElementsByTagName("td");e.removeChild(r[1]),e.removeChild(r[1]),r[0].setAttribute("colspan","3")},inspectTable:function(){},exportTable:function(){},sum:function(e){var r=e.columns,t=e.data,n=[];return r.forEach(function(e,r){0===r?n[r]="合计":1===r||2===r?n[r]="":(n[r]=0,t.forEach(function(t){n[r]+=Number(t[e.property])}),r>=4&&(n[r]/=t.length),n[r]=n[r].toFixed(2))}),n}}},i={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("version-query-form",{ref:"versionQueryForm",attrs:{personForm:e.personForm,endMonthShow:!1,timeRangeShow:!0,versionShow:!0}})],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportTable}},[e._v("导出报表")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.mergeData,"row-key":"id",spanMethod:e.merge,mountedCallBack:e.tick}})],1)])])},staticRenderFns:[]};var l=t("VU/8")(a,i,!1,function(e){t("7PPa")},"data-v-d2868d86",null);r.default=l.exports}});