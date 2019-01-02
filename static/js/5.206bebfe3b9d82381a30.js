webpackJsonp([5],{FO1B:function(e,a){},vR4Z:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={name:"FutureAgent",components:{BaseTable:function(){return l.e(154).then(l.bind(null,"ss0d"))}},data:function(){return{detailShow:!1,companyList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],channelList:[{code:"ct",name:"传统渠道",flag:0},{code:"org",name:"机构直管渠道",flag:1},{code:"vip",name:"重客渠道",flag:1},{code:"bank",name:"银保渠道",flag:1},{code:"agent",name:"经代渠道",flag:1},{code:"carIns",name:"车商渠道",flag:1},{code:"cross",name:"交叉销售渠道",flag:1},{code:"cn",name:"网电渠道",flag:0},{code:"tel",name:"电销渠道",flag:1},{code:"net",name:"网销渠道",flag:1},{code:"oat",name:"OAT",flag:1},{code:"mix",name:"融合渠道",flag:1}],sourceList:[{code:"00",name:"所有"},{code:"01",name:"个人代理"},{code:"02",name:"专业代理"},{code:"03",name:"兼业代理"}],config:{startdate:"2018-01-01",enddate:"2018-06-30",ownOrg:"",agent:"",protocolNo:"",ownSalesMan:"",isCharge:"",isIncludeSub:"",channel:"",source:""},columns:[{prop:"carty",width:120,label:"车种"},{prop:"a",width:120,label:"保费收入(元)"},{prop:"b",width:120,label:"保单成本率(%)"},{prop:"c",width:120,label:"变动成本率(%)"},{prop:"d",width:120,label:"边际成本率(%)"},{prop:"e",width:120,label:"保单赔付率(%)"},{prop:"f",width:120,label:"预期赔付率(%)"},{prop:"g",width:120,label:"满期赔付率(%)"},{prop:"h",width:120,label:"自主折扣率(%)"},{prop:"i",width:120,label:"折扣率(%)"},{prop:"j",width:120,label:"理赔费用率(%)"},{prop:"k",width:120,label:"保单费用率(%)"},{prop:"l",width:120,label:"手续费率(%)"},{prop:"m",width:120,label:"销售人力薪酬率(%)"},{prop:"n",width:120,label:"营销推动费用率(%)"},{prop:"o",width:120,label:"固定费用率(%)"},{prop:"p",width:120,label:"其他费用率(%)"}],columns1:[{prop:"a",width:120,label:"车险保单成本率(%)"},{prop:"b",width:120,label:"车险变动成本率(%)"},{prop:"c",width:120,label:"车险边际成本率(%)"},{prop:"d",width:120,label:"车险保单赔付率(%)"},{prop:"e",width:120,label:"车险预期赔付率(%)"},{prop:"f",width:120,label:"理赔费用率(%)"},{prop:"g",width:120,label:"车险保单费用率(%)"},{prop:"h",width:120,label:"车险手续费率(%)"},{prop:"i",width:120,label:"销售人力薪酬率(%)"},{prop:"j",width:120,label:"营销推动费用率(%)"},{prop:"k",width:120,label:"固定费用率(%)"},{prop:"l",width:120,label:"其他费用率(%)"}],data:[{carty:"家用车",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{carty:"非营业客车",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{carty:"营业客车",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65}],data1:[{a:.1,b:1,c:-1,d:1,e:-1,f:.1,g:1,h:-1,i:1,j:-1,k:.1,l:1}],detailcolumns:[{prop:"agencyNo",width:200,label:"代理协议号"},{prop:"a",width:120,label:"保费收入(元)"},{prop:"b",width:120,label:"保单成本率(%)"},{prop:"c",width:120,label:"变动成本率(%)"},{prop:"d",width:120,label:"边际成本率(%)"},{prop:"e",width:120,label:"保单赔付率(%)"},{prop:"f",width:120,label:"预期赔付率(%)"},{prop:"g",width:120,label:"满期赔付率(%)"},{prop:"h",width:120,label:"自主折扣率(%)"},{prop:"i",width:120,label:"折扣率(%)"},{prop:"j",width:120,label:"理赔费用率(%)"},{prop:"k",width:120,label:"保单费用率(%)"},{prop:"l",width:120,label:"手续费率(%)"},{prop:"m",width:120,label:"销售人力薪酬率(%)"},{prop:"n",width:120,label:"营销推动费用率(%)"},{prop:"o",width:120,label:"固定费用率(%)"},{prop:"p",width:120,label:"其他费用率(%)"}],detaildata:[{agencyNo:"50000100001",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{agencyNo:"50000100001",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{agencyNo:"50000100001",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65},{agencyNo:"50000100001",a:953,b:60,c:65,d:66,e:1.2,f:65,g:67,h:16,i:6,j:17,k:3,l:4,m:3,n:95,o:16,p:65}]}},methods:{query:function(){},spanDetailRow:function(e){e.row,e.column;var a=e.rowIndex;if(0===e.columnIndex)return 0===a||3===a?[3,1]:[0,0]},detail:function(){this.detailShow=!this.detailShow},handleExport:function(){this.detailShow=!1,this.$message({message:"导出成功",center:!0,type:"success"})}}},t={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"iv-container"},[l("div",{staticClass:"biz-content"},[l("el-form",{ref:"configForm",attrs:{"label-width":"120px",model:e.config,inline:!0}},[l("el-form-item",{attrs:{label:"统计起期"}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.config.startdate,callback:function(a){e.$set(e.config,"startdate",a)},expression:"config.startdate"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"统计止期"}},[l("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.config.enddate,callback:function(a){e.$set(e.config,"enddate",a)},expression:"config.enddate"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"归属机构:",prop:"ownOrg"}},[l("el-select",{attrs:{placeholder:"请选择归属机构",size:"medium"},model:{value:e.config.ownOrg,callback:function(a){e.$set(e.config,"ownOrg",a)},expression:"config.ownOrg"}},e._l(e.companyList,function(a){return l("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?l("span",[e._v(" ")]):2===a.flag?l("span",[e._v("   ")]):e._e(),e._v(" "),l("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),l("el-form-item",{attrs:{label:"代理人名称:",prop:"agent"}},[l("el-input",{model:{value:e.config.agent,callback:function(a){e.$set(e.config,"agent",a)},expression:"config.agent"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"协议号:",prop:"protocolNo"}},[l("el-input",{model:{value:e.config.protocolNo,callback:function(a){e.$set(e.config,"protocolNo",a)},expression:"config.protocolNo"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"归属业务员:",prop:"ownSalesMan"}},[l("el-input",{model:{value:e.config.ownSalesMan,callback:function(a){e.$set(e.config,"ownSalesMan",a)},expression:"config.ownSalesMan"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"业务渠道:",prop:"channel"}},[l("el-select",{attrs:{placeholder:"请选择业务渠道",clearable:""},model:{value:e.config.channel,callback:function(a){e.$set(e.config,"channel",a)},expression:"config.channel"}},e._l(e.channelList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"业务来源:",prop:"source"}},[l("el-select",{attrs:{placeholder:"请选择业务来源",clearable:""},model:{value:e.config.source,callback:function(a){e.$set(e.config,"source",a)},expression:"config.source"}},e._l(e.sourceList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1)],1),e._v(" "),l("div",{staticClass:"option"},[l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.query}},[e._v("统 计")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.detail}},[e._v("详 情")])],1),e._v(" "),l("div",{staticClass:"form"}),e._v(" "),l("div",{staticClass:"data"},[e._m(0),e._v(" "),l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:e.columns,data:e.data}})],1),e._v(" "),e._m(1),e._v(" "),l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:e.columns1,data:e.data1}})],1)]),e._v(" "),l("el-dialog",{attrs:{title:"",visible:e.detailShow,width:"80%",center:""},on:{"update:visible":function(a){e.detailShow=a}}},[l("base-table",{attrs:{columns:e.detailcolumns,data:e.detaildata},on:{detail:e.detail}}),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.handleExport}},[e._v("导 出")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(a){e.detailShow=!1}}},[e._v("关 闭")])],1)],1)],1)])},staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[this._v("历史经营情况")])])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"desc"},[this._v("年度预算偏离")])])}]};var n=l("VU/8")(o,t,!1,function(e){l("FO1B")},"data-v-dfa337aa",null);a.default=n.exports}});