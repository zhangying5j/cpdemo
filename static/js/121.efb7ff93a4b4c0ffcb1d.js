webpackJsonp([121],{ThXs:function(e,t){},"i/9Z":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("Dd8w"),i=l.n(a),r=l("NYxO"),p={name:"DisConfigFee",components:{BaseTable:function(){return l.e(154).then(l.bind(null,"ss0d"))},BackButton:function(){return l.e(155).then(l.bind(null,"uOVF"))}},data:function(){return{autorateValue:0,marketrateValue:0,totalPay:"",configColumns:[{prop:"bizSector",width:120,label:"车种",align:"center"},{prop:"bizTypeNo",width:120,label:"业务单元号",align:"center"},{prop:"bizDetail",width:230,label:"业务单元明细",align:"center"},{prop:"psmode",label:"定价方案模式",width:170,align:"center"},{prop:"条件测算",width:120,label:"条件测算",children:[{prop:"a",width:120,label:"商业险预期标费赔付率（含NCD）(%)",align:"center"},{prop:"b",width:120,label:"历史商业险满期标费赔付率(%)",align:"center"},{prop:"c",width:120,label:"核保人预估标费赔付率(%)",isEdit:!0,type:"input",align:"center"},{prop:"d",width:120,label:"历史商业险自主折扣率(%)",align:"center"},{prop:"e",width:240,label:"商业险自主折扣率(%)"},{prop:"f",width:120,label:"历史商业险手续费率(%)",align:"center"},{prop:"g",width:240,label:"商业险手续费率(%)"},{prop:"aff",label:"商业险件均标准保费(元)",width:200,align:"center"},{prop:"agg",label:"商业险综合案均赔款(元)",width:200,align:"center"},{prop:"ahh",label:"商业险满期出险率(%)",width:200,align:"center"}]},{prop:"结构预测",width:120,label:"结构预测",children:[{prop:"h",width:120,label:"目标车险保费占比(%)",isEdit:!0,type:"input"},{prop:"i",width:120,label:"历史交强险保费占比(%)"},{prop:"j",width:120,label:"目标交强险保费占比(%)",isEdit:!0,type:"input"}]},{prop:"交强设定",width:120,label:"交强设定",children:[{prop:"k",width:120,label:"历史交强险预期赔付率(%)"},{prop:"l",width:120,label:"目标交强险预估赔付率(%)",isEdit:!0,type:"input"},{prop:"m",width:120,label:"历史交强险手续费率(%)"},{prop:"n",width:120,label:"目标交强险手续费率(%)",isEdit:!0,type:"input"},{prop:"bff",label:"商业险件均标准保费(元)",width:200,align:"center"},{prop:"bgg",label:"商业险综合案均赔款(元)",width:200,align:"center"},{prop:"bhh",label:"商业险满期出险率(%)",width:200,align:"center"}]},{prop:"费用设定",width:120,label:"费用设定",children:[{prop:"o",width:120,label:"营销推动费用率(%)",isEdit:!0,type:"input"},{prop:"p",width:120,label:"销售人力薪酬率(%)",isEdit:!0,type:"input"},{prop:"q",width:120,label:"车险理赔费用率(%)"},{prop:"r",width:120,label:"固定费用率(%)"},{prop:"s",width:120,label:"其他费用率(%)"}]},{prop:"成本评估",width:120,label:"成本评估",children:[{prop:"t",width:120,label:"车险预估赔付率(%)"},{prop:"u",width:120,label:"车险保单费用率(%)"},{prop:"v",width:120,label:"车险边际成本率(%)"},{prop:"w",width:120,label:"车险变动成本率(%)"},{prop:"x",width:120,label:"车险保单成本率(%)"}]}],configData:[{bizSector:"非营业客车",bizTypeNo:"00001",bizDetail:"1次，1000-2000，20-30",psmode:"",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"营业客车",bizTypeNo:"00002",bizDetail:"1次，1000-2000，30-45",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"营业货运",bizTypeNo:"00003",bizDetail:"1次，1000-2000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"非营业货运",bizTypeNo:"00004",bizDetail:"1次，1000-2000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"非营业客车",bizTypeNo:"00005",bizDetail:"1次，2000-5000，20-30",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"特种车",bizTypeNo:"00006",bizDetail:"1次，2000-5000，30-45",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"其他",bizTypeNo:"00007",bizDetail:"1次，2000-5000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"},{bizSector:"家用车",bizTypeNo:"00008",bizDetail:"1次，2000-5000，45-60",a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5",o:"160",p:"12",q:"6",r:"11",s:"12",t:"5",u:"12",v:"6",w:"11",x:"12"}],futureColumns1:[{prop:"a",width:120,label:"保单成本率"},{prop:"b",width:120,label:"变动成本率"},{prop:"c",width:120,label:"边际成本率"},{prop:"d",width:120,label:"保单赔付率"},{prop:"e",width:120,label:"自主折扣率"},{prop:"f",width:120,label:"预估赔付率"},{prop:"g",width:120,label:"预期赔付率"},{prop:"h",width:120,label:"理赔费用率"},{prop:"i",width:120,label:"保单费用率"},{prop:"j",width:120,label:"手续费率"},{prop:"k",width:120,label:"营销推动费用率"},{prop:"l",width:120,label:"销售人力薪酬率"},{prop:"m",width:120,label:"固定费用率"},{prop:"n",width:120,label:"其他费用率"}],futureData1:[{a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5"}],futureColumns2:[{prop:"a",width:120,label:"预测保费收入（元）",isEdit:!0,type:"input"},{prop:"b",width:120,label:"保单成本率"},{prop:"c",width:120,label:"变动成本率"},{prop:"d",width:120,label:"边际成本率"},{prop:"e",width:120,label:"保单赔付率"},{prop:"f",width:120,label:" 预估赔付率"},{prop:"g",width:120,label:"预期赔付率"},{prop:"h",width:120,label:"理赔费用率"},{prop:"i",width:120,label:"保单费用率"},{prop:"j",width:120,label:"手续费率"},{prop:"k",width:120,label:"营销推动费用率"},{prop:"l",width:120,label:"销售人力薪酬率"},{prop:"m",width:120,label:"固定费用率"},{prop:"n",width:120,label:"其他费用率"}],futureData2:[{a:"56.6",b:"55",c:"62",d:"12",e:"60",f:"60",g:"6",h:"5",i:"160",j:"12",k:"6",l:"11",m:"12",n:"5"}]}},computed:i()({},Object(r.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{handleAutorateChange:function(e){this.marketrateValue=e+10},handleMarketrateChange:function(e){this.autorateValue=e-2},handlePrev:function(){this.$router.push({path:"/admin/fleet/declare/configfee/fleetbiz"})},analysis:function(){this.$router.push("/admin/fleet/declare/configfee/futresult")},total:function(){this.$router.push("/admin/fleet/futresult")}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"biz-content"},[l("div",{staticClass:"data"},[l("div",{staticClass:"table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.configData,stripe:"",border:"","header-cell-style":e.tableHeader}},e._l(e.configColumns,function(t){return l("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align},scopedSlots:e._u([{key:"default",fn:function(a){return["psmode"===t.prop?l("el-select",{attrs:{size:"small"},model:{value:a.row[t.prop],callback:function(l){e.$set(a.row,t.prop,l)},expression:"scope.row[column.prop]"}},[l("el-option",{attrs:{label:"价格优先",value:"价格优先"}}),e._v(" "),l("el-option",{attrs:{label:"费用优先",value:"费用优先"}}),e._v(" "),l("el-option",{attrs:{label:"自定义",value:"自定义"}})],1):l("span",[e._v(e._s(a.row[t.prop]))])]}}])},[t.children?e._l(t.children,function(t){return l("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,"min-width":t.width,label:t.label,align:t.align},scopedSlots:e._u([{key:"default",fn:function(a){return["车险保单成本率(%)"!==t.label||"价格优先"!==a.row.psmode&&"费用优先"!==a.row.psmode?"商业险自主折扣率(%)"!==t.label||"价格优先"!==a.row.psmode&&"自定义"!==a.row.psmode?"商业险手续费率(%)"!==t.label||"费用优先"!==a.row.psmode&&"自定义"!==a.row.psmode?t.isEdit&&"车险保单成本率(%)"!==t.label?l("el-input",{attrs:{size:"small"},model:{value:a.row[t.prop],callback:function(l){e.$set(a.row,t.prop,l)},expression:"scope.row[item.prop]"}}):l("span",[e._v(e._s(a.row[t.prop]))]):l("div",{staticClass:"block"},[l("el-slider",{attrs:{"show-input":""},on:{change:e.handleMarketrateChange},model:{value:e.marketrateValue,callback:function(t){e.marketrateValue=t},expression:"marketrateValue"}})],1):l("div",{staticClass:"block"},[l("el-slider",{attrs:{"show-input":""},on:{change:e.handleAutorateChange},model:{value:e.autorateValue,callback:function(t){e.autorateValue=t},expression:"autorateValue"}})],1):l("el-input",{attrs:{size:"small"},model:{value:a.row[t.prop],callback:function(l){e.$set(a.row,t.prop,l)},expression:"scope.row[item.prop]"}})]}}])})}):e._e()],2)}))],1),e._v(" "),e._m(0),e._v(" "),l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:e.futureColumns1,data:e.futureData1,rowKey:"version"}})],1),e._v(" "),e._m(1),e._v(" "),l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:e.futureColumns2,data:e.futureData2,rowKey:"version"}})],1)]),e._v(" "),l("div",{staticClass:"option"},[l("back-button",{attrs:{plain:""},on:{prev:e.handlePrev}},[e._v("上一步")]),e._v(" "),l("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("配费导出")]),e._v(" "),l("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("配费导入")]),e._v(" "),l("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("保存")]),e._v(" "),l("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[e._v("确认")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"desc",staticStyle:{width:"200px"}},[this._v("商业险预测值")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"desc",staticStyle:{width:"200px"}},[this._v("车队整体预测值")])])}]};var n=l("VU/8")(p,o,!1,function(e){l("ThXs")},"data-v-22810120",null);t.default=n.exports}});