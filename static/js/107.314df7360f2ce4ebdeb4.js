webpackJsonp([107],{"2YyT":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t={name:"Agent",components:{VersionQueryFormTeam:function(){return a.e(167).then(a.bind(null,"PhgI"))},BaseTable:function(){return a.e(153).then(a.bind(null,"ss0d"))},Price:function(){return a.e(1).then(a.bind(null,"czlG"))}},data:function(){return{warnTableVisible:!1,personForm:{org:"27000",channel:"ct",feeModel:"fleet",startmonth:"2018-01",endmonth:"2018-12",rangeendmonth:"2018-08",timeRange:"",actuaryVersion:"GLM20180930001",version:"50000201801010900"},columns:[{prop:"protocolNo",width:160,label:"协议号",align:"center"},{prop:"protocolName",width:240,label:"协议名称",align:"center"},{prop:"ncdpay",width:120,label:"含NCD标费预期赔付率",align:"center",children:[{prop:"expncdpay",width:120,label:"预测值(%)",align:"center"},{prop:"upncdpay",width:120,label:"更新值(%)",align:"center"},{prop:"realncdpay",width:120,label:"实际值(%)",align:"center"}]},{prop:"premium",width:120,label:"保费收入",align:"center",children:[{prop:"exppremium",width:120,label:"预测值(万元)",align:"center"},{prop:"realpremium",width:120,label:"实际值(万元)",align:"center"},{prop:"dispremium",width:120,label:"二者差(万元)",align:"center"}]},{prop:"lossbizrate",width:120,label:"亏损业务占比",align:"center",children:[{prop:"explossbizrate",width:120,label:"预测值(%)",align:"center"},{prop:"reallossbizrate",width:120,label:"实际值(%)",align:"center"},{prop:"dislossbizrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"biglossbizpremium",width:120,label:"严重亏损业务保费规模",align:"center",children:[{prop:"expbiglossbizpremium",width:120,label:"预测值(万元)",align:"center"},{prop:"realbiglossbizpremium",width:120,label:"实际值(万元)",align:"center"},{prop:"disbiglossbizpremium",width:120,label:"二者差(万元)",align:"center"}]},{prop:"payrate",width:120,label:"保单赔付率",align:"center",children:[{prop:"exppayrate",width:120,label:"预测值(%)",align:"center"},{prop:"realpayrate",width:120,label:"实际值(%)",align:"center"},{prop:"dispayrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"fixedrate",width:120,label:"固定费用率",align:"center",children:[{prop:"expfixedrate",width:120,label:"预测值(%)",align:"center"},{prop:"realfixedrate",width:120,label:"实际值(%)",align:"center"},{prop:"disfixedrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"otherrate",width:120,label:"其他费用率",align:"center",children:[{prop:"expotherrate",width:120,label:"预测值(%)",align:"center"},{prop:"realotherrate",width:120,label:"实际值(%)",align:"center"},{prop:"disotherrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"directpayrate",width:120,label:"直接理赔费用率",align:"center",children:[{prop:"expdirectpayrate",width:120,label:"预测值(%)",align:"center"},{prop:"realdirectpayrate",width:120,label:"实际值(%)",align:"center"},{prop:"disdirectpayrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"indirectpayrate",width:120,label:"间接理赔费用率",align:"center",children:[{prop:"expindirectpayrate",width:120,label:"预测值(%)",align:"center"},{prop:"realindirectpayrate",width:120,label:"实际值(%)",align:"center"},{prop:"disindirectpayrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"serverrate",width:120,label:"手续费率",align:"center",children:[{prop:"expserverrate",width:120,label:"预测值(%)",align:"center"},{prop:"realserverrate",width:120,label:"实际值(%)",align:"center"},{prop:"disserverrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"salepayrate",width:120,label:"销售人力薪酬率",align:"center",children:[{prop:"expsalepayrate",width:120,label:"预测值(%)",align:"center"},{prop:"realsalepayrate",width:120,label:"实际值(%)",align:"center"},{prop:"dissalepayrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"saledriverrate",width:120,label:"营销推动费用率",align:"center",children:[{prop:"expsaledriverrate",width:120,label:"预测值(%)",align:"center"},{prop:"realsaledriverrate",width:120,label:"实际值(%)",align:"center"},{prop:"dissaledriverrate",width:120,label:"二者差(%)",align:"center"}]}],fleetData:[{id:"1",protocolNo:"20180101010001",protocolName:"2018机动车辆投保协议",expncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"2",protocolNo:"20180101020001",protocolName:"2018非机动车辆投保协议",expncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"3",protocolNo:"20180101030001",protocolName:"2018营业出租客车投保协议",expncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"4",protocolNo:"20180101040001",protocolName:"2018营业租赁客车投保协议",expncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"5",protocolNo:"20180101050001",protocolName:"2018非营业企业客车投保协议",expncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"6",protocolNo:"20180101060001",protocolName:"2018非营业企业货车投保协议",expncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"7",protocolNo:"合计",protocolName:"",expncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1}]}},methods:{tick:function(){var e=document.getElementsByClassName("el-table__body")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[6],r=e.getElementsByTagName("td");e.removeChild(r[1]),r[0].setAttribute("colspan","2")},inspectTable:function(){},exportTable:function(){},sum:function(e){var r=e.columns,a=e.data,t=[];return r.forEach(function(e,r){0===r?t[r]="合计":1===r?t[r]="":(t[r]=0,a.forEach(function(a){t[r]+=Number(a[e.property])}),r>=5&&(t[r]/=a.length),t[r]=t[r].toFixed(2))}),t},tableCellClassName:function(e){var r=e.row,a=e.column,t=!1;return"disIncomePercentBiz"===a.property?t=Math.abs(r.disIncomePercentBiz)>3:"disIncomePercentForce"===a.property?t=Math.abs(r.disIncomePercentForce)>.5:"disComAuto"===a.property?t=Math.abs(r.disComAuto)>2:"disOperation"===a.property?t=Math.abs(r.disOperation)>.3:"disMarket"===a.property?t=Math.abs(r.disMarket)>1:"disFinal"===a.property&&(t=Math.abs(r.disFinal)>.3),t?"alert-cell":null}}},i={render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("version-query-form-team",{ref:"versionQueryFormTeam",attrs:{personForm:e.personForm,endMonthShow:!0,timeRangeShow:!1,versionShow:!1}})],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("精算模型更新")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("导出模板")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.exportTable}},[e._v("导出报表")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(r){e.warnTableVisible=!0}}},[e._v("查看预警报告")])],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.fleetData,"row-key":"id",mountedCallBack:e.tick}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"预警报告",visible:e.warnTableVisible,fullscreen:""},on:{"update:visible":function(r){e.warnTableVisible=r}}},[a("price",{attrs:{typeProp:"protocol"}})],1)],1)},staticRenderFns:[]};var l=a("VU/8")(t,i,!1,function(e){a("Keqs")},"data-v-30466f47",null);r.default=l.exports},Keqs:function(e,r){}});