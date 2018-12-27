webpackJsonp([93],{Qun9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"DisFee",components:{BaseTable:function(){return i.e(153).then(i.bind(null,"ss0d"))}},data:function(){return{configHidden:!0,totalPay:"",fleetTypeCode:[],fleetTypeList:[{code:"1",name:"家用车"},{code:"2",name:"非营业客车"},{code:"3",name:"营业客车"},{code:"4",name:"营业货运"},{code:"5",name:"非营业货运"},{code:"6",name:"特种车"},{code:"7",name:"其他"}],columns:[{prop:"version",width:130,label:"版本号"},{prop:"org",width:130,label:"机构"},{prop:"channel",width:130,label:"渠道"},{prop:"operation",width:100,label:"操作",operation:!0,operations:[{text:"差异配费",event:"configFee"}]}],disFeeData:[{version:"500020180101001",org:"山西省分公司",channel:"传统渠道"}],configColumns:[{prop:"bizSector",width:120,label:"车种"},{prop:"bizTypeNo",width:120,label:"业务单元号"},{prop:"bizDetail",width:230,label:"业务单元明细"},{prop:"条件测算",width:120,label:"条件测算",children:[{prop:"a",width:120,label:"商业险预期标费赔付率（含NCD）"},{prop:"b",width:120,label:"历史商业险满期标费赔付率"},{prop:"c",width:120,label:"核保人预估标费赔付率",isEdit:!0,type:"input"},{prop:"d",width:120,label:"历史商业险自主折扣率"},{prop:"e",width:120,label:"商业险自主折扣率",isEdit:!0,type:"input"},{prop:"f",width:120,label:"历史商业险手续费率"},{prop:"g",width:120,label:"商业险手续费率",isEdit:!0,type:"input"}]},{prop:"结构预测",width:120,label:"结构预测",children:[{prop:"h",width:120,label:"目标车险保费占比",isEdit:!0,type:"input"},{prop:"i",width:120,label:"历史交强险保费占比"},{prop:"j",width:120,label:"目标交强险保费占比",isEdit:!0,type:"input"}]},{prop:"交强设定",width:120,label:"交强设定",children:[{prop:"k",width:120,label:"历史交强险预期赔付率"},{prop:"l",width:120,label:"目标交强险预估赔付率",isEdit:!0,type:"input"},{prop:"m",width:120,label:"历史交强险手续费率"},{prop:"n",width:120,label:"目标交强险手续费率",isEdit:!0,type:"input"}]},{prop:"费用设定",width:120,label:"费用设定",children:[{prop:"o",width:120,label:"营销推动费用率",isEdit:!0,type:"input"},{prop:"p",width:120,label:"销售人力薪酬率",isEdit:!0,type:"input"},{prop:"q",width:120,label:"车险理赔费用率"},{prop:"r",width:120,label:"固定费用率"},{prop:"s",width:120,label:"其他费用率"}]},{prop:"成本评估",width:120,label:"成本评估",children:[{prop:"t",width:120,label:"车险预估赔付率（%）"},{prop:"u",width:120,label:"车险保单费用率（%）"},{prop:"v",width:120,label:"车险边际成本率（%）"},{prop:"w",width:120,label:"车险变动成本率（%）"},{prop:"x",width:120,label:"车险保单成本率（%）"}]}],configData:[{bizSector:"非营业客车",bizTypeNo:"00001",bizDetail:"1次，1000-2000，20-30",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"营业客车",bizTypeNo:"00002",bizDetail:"1次，1000-2000，30-45",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"营业货运",bizTypeNo:"00003",bizDetail:"1次，1000-2000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"非营业货运",bizTypeNo:"00004",bizDetail:"1次，1000-2000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"非营业客车",bizTypeNo:"00005",bizDetail:"1次，2000-5000，20-30",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"特种车",bizTypeNo:"00006",bizDetail:"1次，2000-5000，30-45",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"其他",bizTypeNo:"00007",bizDetail:"1次，2000-5000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"家用车",bizTypeNo:"00008",bizDetail:"1次，2000-5000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"}],futureColumns1:[{prop:"a",width:120,label:"保单成本率（%）"},{prop:"b",width:120,label:"变动成本率（%）"},{prop:"c",width:120,label:"边际成本率（%）"},{prop:"d",width:120,label:"保单赔付率（%）"},{prop:"e",width:120,label:"自主折扣率（%）"},{prop:"f",width:120,label:"预估赔付率（%）"},{prop:"g",width:120,label:"预期赔付率（%）"},{prop:"h",width:120,label:"理赔费用率（%）"},{prop:"i",width:120,label:"保单费用率（%）"},{prop:"j",width:120,label:"手续费率（%）"},{prop:"k",width:120,label:"营销推动费用率（%）"},{prop:"l",width:120,label:"销售人力薪酬率（%）"},{prop:"m",width:120,label:"固定费用率（%）"},{prop:"n",width:120,label:"其他费用率（%）"}],futureData1:[{a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5"}],futureColumns2:[{prop:"a",width:120,label:"预测保费收入（万元）",isEdit:!0,type:"input"},{prop:"b",width:120,label:"保单成本率（%）"},{prop:"c",width:120,label:"变动成本率（%）"},{prop:"d",width:120,label:"边际成本率（%）"},{prop:"e",width:120,label:"保单赔付率（%）"},{prop:"f",width:120,label:" 预估赔付率（%）"},{prop:"g",width:120,label:"预期赔付率（%）"},{prop:"h",width:120,label:"理赔费用率（%）"},{prop:"i",width:120,label:"保单费用率（%）"},{prop:"j",width:120,label:"手续费率（%）"},{prop:"k",width:120,label:"营销推动费用率（%）"},{prop:"l",width:120,label:"销售人力薪酬率（%）"},{prop:"m",width:120,label:"固定费用率（%）"},{prop:"n",width:120,label:"其他费用率（%）"}],futureData2:[{a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5"}]}},methods:{query:function(){},configFee:function(){this.configHidden=!this.configHidden},analysis:function(){this.$router.push("/admin/agency/config/analysis")}}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"sector-list"},[i("div",{staticClass:"biz-sector"},[i("el-form",{attrs:{"label-width":"120px",inline:!0}},[i("el-form-item",[i("el-checkbox-group",{model:{value:e.fleetTypeCode,callback:function(t){e.fleetTypeCode=t},expression:"fleetTypeCode"}},e._l(e.fleetTypeList,function(t){return i("el-checkbox",{key:t.code,attrs:{label:t.code,name:"fleetType"}},[e._v("\n              "+e._s(t.name)+"\n            ")])}))],1)],1)],1)]),e._v(" "),i("div",{staticClass:"data"},[i("div",{staticClass:"table"},[i("base-table",{attrs:{columns:e.configColumns,data:e.configData,rowKey:"version"}})],1),e._v(" "),e._m(0),e._v(" "),i("div",{staticClass:"table"},[i("base-table",{attrs:{columns:e.futureColumns1,data:e.futureData1,rowKey:"version"}})],1),e._v(" "),e._m(1),e._v(" "),i("div",{staticClass:"table"},[i("base-table",{attrs:{columns:e.futureColumns2,data:e.futureData2,rowKey:"version"}})],1)]),e._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("配费导出")]),e._v(" "),i("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("配费导入")]),e._v(" "),i("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("保存")]),e._v(" "),i("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("确认")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"desc",staticStyle:{width:"200px"}},[this._v("商业险预测值")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"desc",staticStyle:{width:"200px"}},[this._v("车队整体预测值")])])}]};var p=i("VU/8")(l,a,!1,function(e){i("ZsYs")},"data-v-49a8c5b8",null);t.default=p.exports},ZsYs:function(e,t){}});