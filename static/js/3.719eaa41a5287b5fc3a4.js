webpackJsonp([3],{dNYx:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=a("Dd8w"),o=a.n(t),r=a("NYxO"),c={name:"FutResult",components:{BaseTable:function(){return a.e(153).then(a.bind(null,"ss0d"))}},data:function(){return{detailShow:!1,companyList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],fleetDeclare:{startdate:"2018-01-01",enddate:"2018-06-30",ownOrg:"",policyHolder:"",insurant:"",protocolNo:"",carholer:"",createTime:"",insuranceType:""},columns:[{prop:"carty",width:120,label:"车种"},{prop:"a",width:120,label:"保费收入"},{prop:"b",width:120,label:"保单成本率"},{prop:"c",width:120,label:"变动成本率"},{prop:"d",width:120,label:"边际成本率"},{prop:"e",width:120,label:"保单赔付率"},{prop:"f",width:120,label:"预期赔付率"},{prop:"g",width:120,label:"满期赔付率"},{prop:"h",width:120,label:"自主折扣率"},{prop:"i",width:120,label:"折扣率"},{prop:"j",width:120,label:"理赔费用率"},{prop:"k",width:120,label:"保单费用率"},{prop:"l",width:120,label:"手续费率"},{prop:"m",width:120,label:"销售人力薪酬率"},{prop:"n",width:120,label:"营销推动费用率"},{prop:"o",width:120,label:"固定费用率"},{prop:"p",width:120,label:"其他费用率"}],columns1:[{prop:"a",width:120,label:"车险保单成本率"},{prop:"b",width:120,label:"车险变动成本率"},{prop:"c",width:120,label:"车险边际成本率"},{prop:"d",width:120,label:"车险保单赔付率"},{prop:"e",width:120,label:"车险预期赔付率"},{prop:"f",width:120,label:"理赔费用率"},{prop:"g",width:120,label:"车险保单费用率"},{prop:"h",width:120,label:"车险手续费率"},{prop:"i",width:120,label:"销售人力薪酬率"},{prop:"j",width:120,label:"营销推动费用率"},{prop:"k",width:120,label:"固定费用率"},{prop:"l",width:120,label:"其他费用率"}],data:[{carty:"家用车",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{carty:"非营业客车",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{carty:"营业客车",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65}],data1:[{a:.1,b:1,c:-1,d:1,e:-1,f:.1,g:1,h:-1,i:1,j:-1,k:.1,l:1}],detailcolumns:[{prop:"protocolNo",label:"车队协议号",width:240,align:"center"},{prop:"a",width:120,label:"保费收入"},{prop:"b",width:120,label:"保单成本率"},{prop:"c",width:120,label:"变动成本率"},{prop:"d",width:120,label:"边际成本率"},{prop:"e",width:120,label:"保单赔付率"},{prop:"f",width:120,label:"预期赔付率"},{prop:"g",width:120,label:"满期赔付率"},{prop:"h",width:120,label:"自主折扣率"},{prop:"i",width:120,label:"折扣率"},{prop:"j",width:120,label:"理赔费用率"},{prop:"k",width:120,label:"保单费用率"},{prop:"l",width:120,label:"手续费率"},{prop:"m",width:120,label:"销售人力薪酬率"},{prop:"n",width:120,label:"营销推动费用率"},{prop:"o",width:120,label:"固定费用率"},{prop:"p",width:120,label:"其他费用率"}],detaildata:[{protocolNo:"20180101001002",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{protocolNo:"20180101001002",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{protocolNo:"20180101001002",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{protocolNo:"20180101001002",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65}]}},computed:o()({},Object(r.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{query:function(){},spanDetailRow:function(e){e.row,e.column;var l=e.rowIndex;if(0===e.columnIndex)return 0===l||3===l?[3,1]:[0,0]},detail:function(){this.detailShow=!this.detailShow},handleExport:function(){this.detailShow=!1,this.$message({message:"导出成功",center:!0,type:"success"})}}},i={render:function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"iv-container"},[a("div",{staticClass:"biz-content"},[a("div",{staticClass:"form"},[a("el-form",{attrs:{"label-width":"120px",inline:!0},model:{value:e.fleetDeclare,callback:function(l){e.fleetDeclare=l},expression:"fleetDeclare"}},[a("el-form-item",{attrs:{label:"统计起期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.fleetDeclare.startdate,callback:function(l){e.$set(e.fleetDeclare,"startdate",l)},expression:"fleetDeclare.startdate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"统计止期"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.fleetDeclare.enddate,callback:function(l){e.$set(e.fleetDeclare,"enddate",l)},expression:"fleetDeclare.enddate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"归属机构:",prop:"ownOrg"}},[a("el-select",{attrs:{placeholder:"请选择归属机构",size:"medium"},model:{value:e.fleetDeclare.ownOrg,callback:function(l){e.$set(e.fleetDeclare,"ownOrg",l)},expression:"fleetDeclare.ownOrg"}},e._l(e.companyList,function(l){return a("el-option",{key:l.code,attrs:{value:l.code,label:l.name}},[1===l.flag?a("span",[e._v(" ")]):2===l.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(l.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"投保人姓名:",prop:"policyHolder"}},[a("el-input",{model:{value:e.fleetDeclare.policyHolder,callback:function(l){e.$set(e.fleetDeclare,"policyHolder",l)},expression:"fleetDeclare.policyHolder"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"被保人姓名:",prop:"policyHolder"}},[a("el-input",{model:{value:e.fleetDeclare.insurant,callback:function(l){e.$set(e.fleetDeclare,"insurant",l)},expression:"fleetDeclare.insurant"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"车主姓名:",prop:"carholer"}},[a("el-input",{model:{value:e.fleetDeclare.carholer,callback:function(l){e.$set(e.fleetDeclare,"carholer",l)},expression:"fleetDeclare.carholer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"续保状态:",prop:"insuranceType"}},[a("el-select",{attrs:{placeholder:"请选择续保状态",size:"medium"},model:{value:e.fleetDeclare.insuranceType,callback:function(l){e.$set(e.fleetDeclare,"insuranceType",l)},expression:"fleetDeclare.insuranceType"}},[a("el-option",{attrs:{value:"新保",label:"新保"}}),e._v(" "),a("el-option",{attrs:{value:"续保",label:"续保"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"协议号:",prop:"ownOrg"}},[a("el-input",{model:{value:e.fleetDeclare.protocolNo,callback:function(l){e.$set(e.fleetDeclare,"protocolNo",l)},expression:"fleetDeclare.protocolNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"协议创建日期:",prop:"createTime"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择时间段"},model:{value:e.fleetDeclare.createTime,callback:function(l){e.$set(e.fleetDeclare,"createTime",l)},expression:"fleetDeclare.createTime"}})],1),e._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"请选择时间段"},model:{value:e.fleetDeclare.createTime,callback:function(l){e.$set(e.fleetDeclare,"createTime",l)},expression:"fleetDeclare.createTime"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.query}},[e._v("统 计")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.detail}},[e._v("详 情")])],1),e._v(" "),a("div",{staticClass:"data"},[e._m(0),e._v(" "),a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.data}})],1),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns1,data:e.data1}})],1)]),e._v(" "),a("el-dialog",{attrs:{title:"",visible:e.detailShow,width:"80%",center:""},on:{"update:visible":function(l){e.detailShow=l}}},[a("base-table",{attrs:{columns:e.detailcolumns,data:e.detaildata},on:{detail:e.detail}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleExport}},[e._v("导 出")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(l){e.detailShow=!1}}},[e._v("关 闭")])],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,l=this._self._c||e;return l("div",{staticClass:"title"},[l("div",{staticClass:"desc"},[this._v("历史经营情况")])])},function(){var e=this.$createElement,l=this._self._c||e;return l("div",{staticClass:"title"},[l("div",{staticClass:"desc"},[this._v("年度预算偏离")])])}]};var n=a("VU/8")(c,i,!1,function(e){a("lvz3")},"data-v-1da4ddfd",null);l.default=n.exports},lvz3:function(e,l){}});