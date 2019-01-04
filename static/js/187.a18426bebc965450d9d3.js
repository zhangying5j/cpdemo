webpackJsonp([187],{"4LFH":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),l=a.n(r),i=a("NYxO"),s={name:"Organization",components:{QueryForm:function(){return a.e(168).then(a.bind(null,"xen3"))}},props:{isOrg:{type:Boolean,default:!0}},data:function(){return{tableVisible:!1,inspect:{isShow:this.isOrg,org:"27000",channel:"each",type:"month",timeRange:"2018Q1",startmonth:"2017-01",endmonth:"2018-08",version:"50000201801010900"},tableColumns:[{prop:"orgName",label:"机构"},{prop:"applyDate",label:"导入时间"}],columns:[{prop:"thirdOrg",width:120,label:"山西省分公司",align:"center"},{prop:"costrate",width:120,label:"目标保单成本率(%)",align:"center"},{prop:"changeCostRate",width:120,label:"目标变动成本率(%)",align:"center"},{prop:"bjCostRate",width:120,label:"目标边际成本率(%)",align:"center"},{prop:"payRate",width:120,label:"目标保单赔付率(%)",align:"center"},{prop:"expPayRate",width:120,label:"目标理赔费用率(%)",align:"center"},{prop:"FeeRate",width:120,label:"目标保单费用率(%)",align:"center"},{prop:"directExpPayRate",width:120,label:"目标直接理赔费用率(%)",align:"center"},{prop:"indirectExpPayRate",width:120,label:"目标间接理赔费用率(%)",align:"center"},{prop:"saleRate",width:120,label:"销售费用率(%)",align:"center"},{prop:"fixedFeeRate",width:120,label:"固定费用率(%)",align:"center"},{prop:"otherFeeRate",width:120,label:"其他费用率(%)",align:"center"},{prop:"salePersonRate",width:120,label:"销售人力薪酬率(%)",align:"center"},{prop:"saleDriverFeeRate",width:120,label:"营销推动费用率(%)",align:"center"},{prop:"lossrate",width:140,label:"亏损业务占比(%)",align:"center"},{prop:"lossbadrate",width:140,label:"严重亏损业务保费规模(元)",align:"center"}],orgDialogData:[{id:"1",thirdOrg:"太原支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"2",thirdOrg:"大同支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"3",thirdOrg:"阳泉支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"4",thirdOrg:"长治支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"5",thirdOrg:"晋城支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"6",thirdOrg:"朔州支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"7",thirdOrg:"晋中支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"8",thirdOrg:"运城支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"9",thirdOrg:"忻州支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"10",thirdOrg:"临汾支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"11",thirdOrg:"吕梁支公司",costrate:"96.15",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"},{id:"12",thirdOrg:"合计",exppremium:"54236.05",costrate:"96.155",changeCostRate:"91.00",bjCostRate:"90.66",payRate:"97.6",expPayRate:"89.1",FeeRate:"90.00",directExpPayRate:"92.3",indirectExpPayRate:"78.88",saleRate:"87.6",fixedFeeRate:"80.00",otherFeeRate:"89.99",salePersonRate:"90.00",saleDriverFeeRate:"91.22",lossrate:"94.8",lossbadrate:"98.2"}],orgData:[{id:"1",orgName:"山西省分公司",applyDate:"2018-12-21"},{id:"2",orgName:"北京分公司",applyDate:"2018-12-21"},{id:"3",orgName:"山东省分公司",applyDate:"2018-12-21"}]}},computed:l()({},Object(i.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{inspectTable:function(){},exportTable:function(){},detail:function(e){this.tableVisible=!0}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("query-form",{ref:"queryForm",attrs:{inspect:e.inspect}})],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("批量导出模板")]),e._v(" "),a("el-button",{staticStyle:{width:"200px"},attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("批量导入财务数据")])],1),e._v(" "),a("div",{staticClass:"data"},[a("el-table",{staticStyle:{width:"100%"},attrs:{id:"organization-table",data:e.orgData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.tableColumns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"}},[e._v("导出模板")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("导入财务数据")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row)}}},[e._v("查看")])]}}])})],2)],1),e._v(" "),a("el-dialog",{attrs:{title:"详情",visible:e.tableVisible,fullscreen:""},on:{"update:visible":function(t){e.tableVisible=t}}},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orgDialogData,stripe:"","max-height":"500","header-cell-style":e.tableHeader}},e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,label:e.label}})}))],1)])],1)},staticRenderFns:[]};var n=a("VU/8")(s,o,!1,function(e){a("UzYV")},"data-v-573e2ae4",null);t.default=n.exports},UzYV:function(e,t){}});