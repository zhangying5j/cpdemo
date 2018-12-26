webpackJsonp([78],{bS1I:function(t,i){},cvZ6:function(t,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"CustomThree",components:{BaseTable:function(){return l.e(153).then(l.bind(null,"ss0d"))}},data:function(){return{totalPay:"",configColumns:[{prop:"bizSector",width:120,label:"车种"},{prop:"bizTypeNo",width:120,label:"业务单元号"},{prop:"bizDetail",width:230,label:"业务单元明细"},{prop:"条件测算",width:120,label:"条件测算",children:[{prop:"a",width:120,label:"商业险预期标费赔付率（含NCD）"},{prop:"b",width:120,label:"历史商业险满期标费赔付率"},{prop:"c",width:120,label:"核保人预估标费赔付率",isEdit:!0,type:"input"},{prop:"d",width:120,label:"历史商业险自主折扣率"},{prop:"e",width:120,label:"商业险自主折扣率",isEdit:!0,type:"input"},{prop:"f",width:120,label:"历史商业险手续费率"},{prop:"g",width:120,label:"商业险手续费率",isEdit:!0,type:"input"}]},{prop:"结构预测",width:120,label:"结构预测",children:[{prop:"h",width:120,label:"目标车险保费占比",isEdit:!0,type:"input"},{prop:"i",width:120,label:"历史交强险保费占比"},{prop:"j",width:120,label:"目标交强险保费占比",isEdit:!0,type:"input"}]},{prop:"交强设定",width:120,label:"交强设定",children:[{prop:"k",width:120,label:"历史交强险预期赔付率"},{prop:"l",width:120,label:"目标交强险预估赔付率",isEdit:!0,type:"input"},{prop:"m",width:120,label:"历史交强险手续费率"},{prop:"n",width:120,label:"目标交强险手续费率",isEdit:!0,type:"input"}]},{prop:"费用设定",width:120,label:"费用设定",children:[{prop:"o",width:120,label:"营销推动费用率",isEdit:!0,type:"input"},{prop:"p",width:120,label:"销售人力薪酬率",isEdit:!0,type:"input"},{prop:"q",width:120,label:"车险理赔费用率"},{prop:"r",width:120,label:"固定费用率"},{prop:"s",width:120,label:"其他费用率"}]},{prop:"成本评估",width:120,label:"成本评估",children:[{prop:"t",width:120,label:"车险预估赔付率"},{prop:"u",width:120,label:"车险保单费用率"},{prop:"v",width:120,label:"车险边际成本率"},{prop:"w",width:120,label:"车险变动成本率"},{prop:"x",width:120,label:"车险保单成本率"}]}],configData:[{bizSector:"非营业客车",bizTypeNo:"00001",bizDetail:"1次，1000-2000，20-30",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"营业客车",bizTypeNo:"00002",bizDetail:"1次，1000-2000，30-45",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"营业货运",bizTypeNo:"00003",bizDetail:"1次，1000-2000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"非营业货运",bizTypeNo:"00004",bizDetail:"1次，1000-2000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"非营业客车",bizTypeNo:"00005",bizDetail:"1次，2000-5000，20-30",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"特种车",bizTypeNo:"00006",bizDetail:"1次，2000-5000，30-45",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"其他",bizTypeNo:"00007",bizDetail:"1次，2000-5000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"家用车",bizTypeNo:"00008",bizDetail:"1次，2000-5000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"}],futureColumns1:[{prop:"a",width:120,label:"保单成本率"},{prop:"b",width:120,label:"变动成本率"},{prop:"c",width:120,label:"边际成本率"},{prop:"d",width:120,label:"保单赔付率"},{prop:"e",width:120,label:"自主折扣率"},{prop:"f",width:120,label:"预估赔付率"},{prop:"g",width:120,label:"预期赔付率"},{prop:"h",width:120,label:"理赔费用率"},{prop:"i",width:120,label:"保单费用率"},{prop:"j",width:120,label:"手续费率"},{prop:"k",width:120,label:"营销推动费用率"},{prop:"l",width:120,label:"销售人力薪酬率"},{prop:"m",width:120,label:"固定费用率"},{prop:"n",width:120,label:"其他费用率"}],futureData1:[{a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5"}],futureColumns2:[{prop:"a",width:120,label:"预测保费收入",isEdit:!0,type:"input"},{prop:"b",width:120,label:"保单成本率"},{prop:"c",width:120,label:"变动成本率"},{prop:"d",width:120,label:"边际成本率"},{prop:"e",width:120,label:"保单赔付率"},{prop:"f",width:120,label:" 预估赔付率"},{prop:"g",width:120,label:"预期赔付率"},{prop:"h",width:120,label:"理赔费用率"},{prop:"i",width:120,label:"保单费用率"},{prop:"j",width:120,label:"手续费率"},{prop:"k",width:120,label:"营销推动费用率"},{prop:"l",width:120,label:"销售人力薪酬率"},{prop:"m",width:120,label:"固定费用率"},{prop:"n",width:120,label:"其他费用率"}],futureData2:[{a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5"}]}},methods:{analysis:function(){this.$router.push("/admin/agency/config/analysis")}}},a={render:function(){var t=this,i=t.$createElement,l=t._self._c||i;return l("div",{staticClass:"biz-content"},[l("div",{staticClass:"data"},[l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:t.configColumns,data:t.configData,rowKey:"version"}})],1)]),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:t.futureColumns1,data:t.futureData1,rowKey:"version"}})],1),t._v(" "),t._m(1),t._v(" "),l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:t.futureColumns2,data:t.futureData2,rowKey:"version"}})],1),t._v(" "),l("div",{staticClass:"option"},[l("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("配费导出")]),t._v(" "),l("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("配费导入")]),t._v(" "),l("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("保存")]),t._v(" "),l("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("确认")])],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title"},[i("div",{staticClass:"desc",staticStyle:{width:"200px"}},[this._v("商业险预测值")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title"},[i("div",{staticClass:"desc",staticStyle:{width:"200px"}},[this._v("车队整体预测值")])])}]};var p=l("VU/8")(e,a,!1,function(t){l("bS1I")},"data-v-5f984be3",null);i.default=p.exports}});