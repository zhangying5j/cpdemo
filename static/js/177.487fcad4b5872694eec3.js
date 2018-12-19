webpackJsonp([177],{"6D10":function(e,r,a){"use strict";a.d(r,"a",function(){return i});var i=function(e,r){var a={},i=e;return r.forEach(function(e){a[e]=void 0}),i.forEach(function(e){e.rowSpan={}}),i.forEach(function(e,i){r.forEach(function(r){e.rowSpan[r]=1}),0===i?r.forEach(function(r){a[r]=e}):r.forEach(function(r){e[r]===a[r][r]?(a[r].rowSpan[r]+=1,console.log(e),e.rowSpan[r]=0):a[r]=e})}),i}},Dbeh:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=a("6D10"),t={name:"SingleVersion",components:{VersionQueryForm:function(){return a.e(163).then(a.bind(null,"8qXw"))},BaseTable:function(){return a.e(153).then(a.bind(null,"ss0d"))},Price:function(){return a.e(1).then(a.bind(null,"czlG"))}},props:{orgCode:{type:String,required:!0}},data:function(){return{warnTableVisible:!1,personForm:{org:this.orgCode,channel:"ct",feeModel:"person",startmonth:"2018-01",endmonth:"2018-12",rangestartmonth:"2018-01",rangeendmonth:"2018-12",timeRange:"",actuaryVersion:"GLM20180930001",version:"50000201801010900"},columns:[{prop:"bizSector",width:120,label:"车种",align:"center"},{prop:"version",width:180,label:"方案版本号",align:"center"},{prop:"bizSmallNumber",width:120,label:"业务单元号",align:"center"},{prop:"bizSmallDetail",width:200,label:"业务单元明细",align:"center"},{prop:"ncdpay",width:120,label:"含NCD标费预期赔付率",align:"center",children:[{prop:"expncdpay",width:120,label:"预测值(%)",align:"center"},{prop:"originncdpay",width:120,label:"原始值(%)",align:"center"},{prop:"upncdpay",width:120,label:"更新值(%)",align:"center"},{prop:"realncdpay",width:120,label:"实际值(%)",align:"center"}]},{prop:"premium",width:120,label:"保费收入",align:"center",children:[{prop:"exppremium",width:120,label:"预测值(万元)",align:"center"},{prop:"realpremium",width:120,label:"实际值(万元)",align:"center"},{prop:"dispremium",width:120,label:"二者差(万元)",align:"center"}]},{prop:"lossbizrate",width:120,label:"亏损业务占比",align:"center",children:[{prop:"explossbizrate",width:120,label:"预测值(%)",align:"center"},{prop:"reallossbizrate",width:120,label:"实际值(%)",align:"center"},{prop:"dislossbizrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"biglossbizpremium",width:120,label:"严重亏损业务保费规模",align:"center",children:[{prop:"expbiglossbizpremium",width:120,label:"预测值(万元)",align:"center"},{prop:"realbiglossbizpremium",width:120,label:"实际值(万元)",align:"center"},{prop:"disbiglossbizpremium",width:120,label:"二者差(万元)",align:"center"}]},{prop:"payrate",width:120,label:"保单赔付率",align:"center",children:[{prop:"exppayrate",width:120,label:"预测值(%)",align:"center"},{prop:"realpayrate",width:120,label:"实际值(%)",align:"center"},{prop:"dispayrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"fixedrate",width:120,label:"固定费用率",align:"center",children:[{prop:"expfixedrate",width:120,label:"预测值(%)",align:"center"},{prop:"realfixedrate",width:120,label:"实际值(%)",align:"center"},{prop:"disfixedrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"otherrate",width:120,label:"其他费用率",align:"center",children:[{prop:"expotherrate",width:120,label:"预测值(%)",align:"center"},{prop:"realotherrate",width:120,label:"实际值(%)",align:"center"},{prop:"disotherrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"directpayrate",width:120,label:"直接理赔费用率",align:"center",children:[{prop:"expdirectpayrate",width:120,label:"预测值(%)",align:"center"},{prop:"realdirectpayrate",width:120,label:"实际值(%)",align:"center"},{prop:"disdirectpayrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"indirectpayrate",width:120,label:"间接理赔费用率",align:"center",children:[{prop:"expindirectpayrate",width:120,label:"预测值(%)",align:"center"},{prop:"realindirectpayrate",width:120,label:"实际值(%)",align:"center"},{prop:"disindirectpayrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"serverrate",width:120,label:"手续费率",align:"center",children:[{prop:"expserverrate",width:120,label:"预测值(%)",align:"center"},{prop:"realserverrate",width:120,label:"实际值(%)",align:"center"},{prop:"disserverrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"salepayrate",width:120,label:"销售人力薪酬率",align:"center",children:[{prop:"expsalepayrate",width:120,label:"预测值(%)",align:"center"},{prop:"realsalepayrate",width:120,label:"实际值(%)",align:"center"},{prop:"dissalepayrate",width:120,label:"二者差(%)",align:"center"}]},{prop:"saledriverrate",width:120,label:"营销推动费用率",align:"center",children:[{prop:"expsaledriverrate",width:120,label:"预测值(%)",align:"center"},{prop:"realsaledriverrate",width:120,label:"实际值(%)",align:"center"},{prop:"dissaledriverrate",width:120,label:"二者差(%)",align:"center"}]}],singleVersionData:[{id:"1",version:"50000201801010900",bizSector:"家用车",bizSmallNumber:"01010101",bizSmallDetail:"单交,单商_单三_无附加",expncdpay:65,originncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"2",version:"50000201801010900",bizSector:"家用车",bizSmallNumber:"01010102",bizSmallDetail:"单交,单商_单三_有附加",expncdpay:65,originncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"3",version:"50000201801010900",bizSector:"家用车",bizSmallNumber:"01010201",bizSmallDetail:"单交,单商_损三_无附加",expncdpay:65,originncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"4",version:"50000201801010900",bizSector:"非营业客车",bizSmallNumber:"01010202",bizSmallDetail:"单交,单商_损三_有附加",expncdpay:65,originncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"5",version:"50000201801010900",bizSector:"非营业客车",bizSmallNumber:"01020301",bizSmallDetail:"单交,交商_交三_无附加",expncdpay:65,originncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"6",version:"50000201801010900",bizSector:"非营业客车",bizSmallNumber:"01020302",bizSmallDetail:"单交,交商_交三_有附加",expncdpay:65,originncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1},{id:"7",version:"50000201801010900",bizSector:"合计",bizSmallNumber:"",bizSmallDetail:"",expncdpay:65,originncdpay:65,upncdpay:67,realncdpay:66,exppremium:123,realpremium:125,dispremium:2,explossbizrate:6,reallossbizrate:5,dislossbizrate:-1,expbiglossbizpremium:10,realbiglossbizpremium:9,disbiglossbizpremium:-1,exppayrate:65,realpayrate:64,dispayrate:-1,expfixedrate:6,realfixedrate:5.6,disfixedrate:-.4,expotherrate:3,realotherrate:2,disotherrate:-1,expdirectpayrate:6,realdirectpayrate:5,disdirectpayrate:-1,expindirectpayrate:10,realindirectpayrate:9,disindirectpayrate:-1,expserverrate:5,realserverrate:6,disserverrate:1,expsalepayrate:20,realsalepayrate:21,dissalepayrate:1,expsaledriverrate:6,realsaledriverrate:5,dissaledriverrate:-1}]}},computed:{mergeData:function(){return Object(i.a)(this.singleVersionData,["bizSector"])}},methods:{merge:function(e){var r=e.row,a=e.column;e.rowIndex,e.columnIndex;if(["bizSector"].includes(a.property)){if(r.rowSpan[a.property]>1)return[r.rowSpan[a.property],1];if(0===r.rowSpan[a.property])return[0,0]}},tick:function(){var e=document.getElementsByClassName("el-table__body")[0].getElementsByTagName("tbody")[0].getElementsByTagName("tr")[6],r=e.getElementsByTagName("td");e.removeChild(r[1]),e.removeChild(r[1]),r[0].setAttribute("colspan","3")},inspectTable:function(){},exportTable:function(){},sum:function(e){var r=e.columns,a=e.data,i=[];return r.forEach(function(e,r){0===r?i[r]="合计":1===r||2===r?i[r]="":(i[r]=0,a.forEach(function(a){i[r]+=Number(a[e.property])}),r>=4&&(i[r]/=a.length),i[r]=i[r].toFixed(2))}),i},tableCellClassName:function(e){var r=e.row,a=e.column,i=!1;return"disIncomePercentBiz"===a.property?i=Math.abs(r.disIncomePercentBiz)>3:"disIncomePercentForce"===a.property?i=Math.abs(r.disIncomePercentForce)>.5:"disComAuto"===a.property?i=Math.abs(r.disComAuto)>2:"disOperation"===a.property?i=Math.abs(r.disOperation)>.3:"disMarket"===a.property?i=Math.abs(r.disMarket)>1:"disFinal"===a.property&&(i=Math.abs(r.disFinal)>.3),i?"alert-cell":null}}},l={render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("version-query-form",{ref:"versionQueryForm",attrs:{personForm:e.personForm,endMonthShow:!0,timeRangeShow:!1,versionShow:!0}})],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("导出模板")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.inspectTable}},[e._v("导入财务数据")])],1),e._v(" "),a("el-dialog",{attrs:{title:"预警报告",visible:e.warnTableVisible,fullscreen:""},on:{"update:visible":function(r){e.warnTableVisible=r}}},[a("price",{attrs:{typeProp:"person"}})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(t,l,!1,function(e){a("eadn")},"data-v-b872cb70",null);r.default=p.exports},eadn:function(e,r){}});