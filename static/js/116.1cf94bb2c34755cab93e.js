webpackJsonp([116],{P1T7:function(e,t){},g9Hn:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Dd8w"),i=r.n(a),l=r("NYxO"),n={name:"Organization",components:{QueryForm:function(){return r.e(166).then(r.bind(null,"xen3"))},BaseTable:function(){return r.e(153).then(r.bind(null,"ss0d"))},Budget:function(){return r.e(2).then(r.bind(null,"otlB"))}},data:function(){return{warnTableVisible:!1,inspect:{isShow:!0,org:"27000",channel:"each",type:"month",timeRange:"2018Q1",startmonth:"2017-01",endmonth:"2018-08",version:"50000201801010900"},columnShowList:["实际值(%)","预测值(%)","二者差(%)"],columns:[{prop:"thirdOrg",width:120,label:"山西省分公司",align:"center"},{prop:"premium",width:120,label:"目标保费规模(万元)",align:"center",children:[{prop:"exppremium",width:120,label:"预算值(万元)",align:"center",isShow:!0},{prop:"realpremium",width:120,label:"实际值(万元)",align:"center",isShow:!0},{prop:"ratepremium",width:120,label:"预算达成率(%)",align:"center",isShow:!0},{prop:"schedulepremium",width:120,label:"超序时进度(%)",align:"center",isShow:!0}]},{prop:"costrate",width:120,label:"目标保单成本率(%)",align:"center",children:[{prop:"expcostrate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realcostrate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"discostrate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"changeCostRate",width:120,label:"目标变动成本率(%)",align:"center",children:[{prop:"expChangeCostRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realChangeCostRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disChangeCostRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"bjCostRate",width:120,label:"目标边际成本率(%)",align:"center",children:[{prop:"expBjCostRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realBjCostRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disBjCostRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"payRate",width:120,label:"目标保单赔付率(%)",align:"center",children:[{prop:"expPayRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realPayRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disPayRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"expPayRate",width:120,label:"目标理赔费用率(%)",align:"center",children:[{prop:"expExpPayRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realExpPayRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disExpPayRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"FeeRate",width:120,label:"目标保单费用率(%)",align:"center",children:[{prop:"expFeeRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realFeeRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disFeeRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"directExpPayRate",width:120,label:"目标直接理赔费用率(%)",align:"center",children:[{prop:"expDirectExpPayRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realDirectExpPayRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disDirectExpPayRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"indirectExpPayRate",width:120,label:"目标间接理赔费用率(%)",align:"center",children:[{prop:"expIndirectExpPayRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realIndirectExpPayRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disIndirectExpPayRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"saleRate",width:120,label:"销售费用率(%)",align:"center",children:[{prop:"expSaleRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realSaleRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disSaleRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"fixedFeeRate",width:120,label:"固定费用率(%)",align:"center",children:[{prop:"expFixedFeeRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realFixedFeeRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disFixedFeeRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"otherFeeRate",width:120,label:"其他费用率(%)",align:"center",children:[{prop:"expOtherFeeRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realOtherFeeRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disOtherFeeRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"serverFeeRate",width:120,label:"手续费率(%)",align:"center",children:[{prop:"expServerFeeRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realServerFeeRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disServerFeeRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"salePersonRate",width:120,label:"销售人力薪酬率(%)",align:"center",children:[{prop:"expSalePersonRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realSalePersonRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disSalePersonRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"saleDriverFeeRate",width:120,label:"营销推动费用率(%)",align:"center",children:[{prop:"expSaleDriverFeeRate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realSaleDriverFeeRate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"disSaleDriverFeeRate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"lossrate",width:120,label:"亏损业务占比(%)",align:"center",children:[{prop:"expcostrate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realcostrate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"discostrate",width:120,label:"二者差(%)",align:"center",isShow:!0}]},{prop:"lossbadrate",width:120,label:"严重亏损业务保费规模(万元)",align:"center",children:[{prop:"expcostrate",width:120,label:"预算值(%)",align:"center",isShow:!0},{prop:"realcostrate",width:120,label:"实际值(%)",align:"center",isShow:!0},{prop:"discostrate",width:120,label:"二者差(%)",align:"center",isShow:!0}]}],orgData:[{id:"1",thirdOrg:"太原支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"2",thirdOrg:"大同支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"3",thirdOrg:"阳泉支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"4",thirdOrg:"长治支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"5",thirdOrg:"晋城支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"6",thirdOrg:"朔州支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"7",thirdOrg:"晋中支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"8",thirdOrg:"运城支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"9",thirdOrg:"忻州支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"10",thirdOrg:"临汾支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"11",thirdOrg:"吕梁支公司",exppremium:"4930.55",realpremium:"4942.15",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"},{id:"12",thirdOrg:"合计",exppremium:"54236.05",realpremium:"54363.65",ratepremium:"1.00",schedulepremium:"0.66",expcostrate:"97.6",realcostrate:"98.2",discostrate:"0.6"}]}},computed:i()({},Object(l.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{toggleColumn:function(e,t){this.columns.forEach(function(r){void 0!==r.children&&r.children.length>0&&r.children.forEach(function(r){e.includes(r.label)&&(r.isShow=t)})})},toggleColumnShow:function(e){var t=["实际值(%)","预测值(%)","二者差(%)"],r=[],a=[];3===e.length?r=t:0===e.length?a=t:t.forEach(function(t){e.includes(t)?r.push(t):a.push(t)}),this.toggleColumn(r,!0),this.toggleColumn(a,!1)},inspectTable:function(){},exportTable:function(){},sum:function(e){var t=e.columns,r=e.data,a=[];return t.forEach(function(e,t){0===t?a[t]="合计":(a[t]=0,r.forEach(function(r){a[t]+=Number(r[e.property])}),t>=3&&(a[t]/=r.length),a[t]=a[t].toFixed(2))}),a},tableCellClassName:function(e){var t=e.row,r=e.column,a=!1;return"ratepremium"===r.property?a=Math.abs(t.ratepremium)<1:"schedulepremium"===r.property?a=Math.abs(t.schedulepremium)>.5:"discostrate"===r.property&&(a=Math.abs(t.discostrate)>.5),a?"alert-cell":null}}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"form"},[r("query-form",{ref:"queryForm",attrs:{inspect:e.inspect}})],1),e._v(" "),r("div",{staticClass:"option"},[r("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("导出模板")]),e._v(" "),r("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("检视")]),e._v(" "),r("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.exportTable}},[e._v("导出报表")]),e._v(" "),r("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:function(t){e.warnTableVisible=!0}}},[e._v("查看预警报告")])],1),e._v(" "),r("div",{staticClass:"data"},[r("div",{staticClass:"title"},[r("el-alert",{attrs:{title:"统计截止月份：2018年3月 涉及保单范围：2018年1月1日 - 2018年3月31日",type:"info",closable:!1}})],1),e._v(" "),r("div",{staticClass:"title"},[r("div",{staticClass:"btn"},[r("el-checkbox-group",{on:{change:e.toggleColumnShow},model:{value:e.columnShowList,callback:function(t){e.columnShowList=t},expression:"columnShowList"}},[r("el-checkbox",{attrs:{label:"预测值(%)"}}),e._v(" "),r("el-checkbox",{attrs:{label:"实际值(%)"}}),e._v(" "),r("el-checkbox",{attrs:{label:"二者差(%)"}})],1),e._v(" "),r("div",{staticStyle:{float:"right"}})],1)]),e._v(" "),r("div",{staticClass:"table"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orgData,stripe:"","max-height":"450","header-cell-style":e.tableHeader}},e._l(e.columns,function(t){return r("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,label:t.label,"min-width":t.width}},[t.children?e._l(t.children,function(t){return t.isShow?r("el-table-column",{key:t.prop,attrs:{"header-align":"center",label:t.label,prop:t.prop,align:"center","min-width":t.width}}):e._e()}):e._e()],2)}))],1)]),e._v(" "),r("el-dialog",{attrs:{title:"预警报告",visible:e.warnTableVisible,fullscreen:""},on:{"update:visible":function(t){e.warnTableVisible=t}}},[r("budget",{attrs:{typeProp:"org"}})],1)],1)},staticRenderFns:[]};var o=r("VU/8")(n,p,!1,function(e){r("P1T7")},"data-v-1c6566a3",null);t.default=o.exports}});