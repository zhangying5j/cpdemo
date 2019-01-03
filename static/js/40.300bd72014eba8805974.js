webpackJsonp([40],{BGi5:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=l("6D10"),n={name:"Fcst",components:{BaseTable:function(){return l.e(154).then(l.bind(null,"ss0d"))}},created:function(){this.simulate()},data:function(){return{rules:{orgcd:[{required:!0,trigger:"change",message:"机构不能为空"}]},companyList:[{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],param:{orgcd:"01000",pricemode:"单车",startTime:"2018-01",endTime:"2018-12",resty:"模拟指标",splitstyle:"业务来源"},loading:!1,columns1:[{prop:"channel1",label:"对外报送渠道",width:120},{prop:"channel2",label:"公司内部渠道",width:120},{prop:"a",label:"保单年中介机构手续费率或个人代理人费用率平均值(%)",width:360},{prop:"b",label:"保单年费用率(%)",width:120},{prop:"c",label:"保单年赔付率(%)",width:120},{prop:"d",label:"保单年成本率(%)",width:120},{prop:"e",label:"保单年赔付率不含理赔费用(%)",width:240},{prop:"f",label:"理赔费用率(%)",width:120},{prop:"g",label:"保费(元)",width:120},{prop:"h",label:"总折扣率(%)",width:120},{prop:"i",label:"自主折扣率(%)",width:120},{prop:"j",label:"降价保单占比(%)",width:120},{prop:"k",label:"涨价保单占比(%)",width:120}],data1:[{channel1:"传统直销",channel2:"直接业务"},{channel1:"传统直销",channel2:"三进直销"},{channel1:"传统直销",channel2:"小计"},{channel1:"新渠道直销",channel2:"新渠道直销"},{channel1:"电话销售",channel2:"新渠道直销"},{channel1:"网络销售",channel2:"新渠道直销"},{channel1:"网络销售",channel2:"小计"},{channel1:"个人代理",channel2:"个人代理"},{channel1:"个人代理",channel2:"咨询服务个代"},{channel1:"个人代理",channel2:"三进个代"},{channel1:"个人代理",channel2:"小计"},{channel1:"兼业代理",channel2:"寿代产"},{channel1:"兼业代理",channel2:"车行业务"},{channel1:"兼业代理",channel2:"普通兼业代理"},{channel1:"兼业代理",channel2:"银行邮政代理"},{channel1:"兼业代理",channel2:"养老代产"},{channel1:"兼业代理",channel2:"小计"},{channel1:"专业代理",channel2:"专业代理"},{channel1:"专业代理",channel2:"EA门店"},{channel1:"专业代理",channel2:"小计"},{channel1:"经纪业务",channel2:"经纪业务"},{channel1:"经纪业务",channel2:"小计"}],columns2:[{prop:"cartype1",label:"车种",width:120},{prop:"cartype2",label:"细分车种",width:120},{prop:"a",label:"保单年中介机构手续费率平均值(%)",width:240},{prop:"b",label:"保单年个人代理人费用率平均值(%)",width:240},{prop:"c",label:"保单年费用率(%)",width:120},{prop:"d",label:"保单年赔付率含理赔费用(%)",width:120},{prop:"e",label:"保单年成本率(%)",width:120},{prop:"f",label:"保单年赔付率不含理赔费用(%)",width:120},{prop:"g",label:"理赔费用率(%)",width:120},{prop:"h",label:"保费(元)",width:120},{prop:"i",label:"总折扣率(%)",width:120},{prop:"j",label:"自主折扣率(%)",width:120},{prop:"k",label:"降价保单占比(%)",width:120},{prop:"l",label:"涨价保单占比(%)",width:120}],data2:[{cartype1:"客车",cartype2:"家庭自用车"},{cartype1:"客车",cartype2:"营业客车"},{cartype1:"客车",cartype2:"非营业客车"},{cartype1:"货车",cartype2:"营业货车"},{cartype1:"货车",cartype2:"非营业货车"},{cartype1:"其他",cartype2:"其他"}],columns3:[{prop:"val",label:"",width:120},{prop:"cartype1",label:"自主折扣模拟值",width:240,children:[{prop:"a",label:"保单数占比(%)",width:120},{prop:"b",label:"保单赔付率(%)",width:120}]}],data3:[{val:"01|(low,0.1]"},{val:"02|(0.1,0.2]"},{val:"03|(0.2,0.3]"},{val:"04|(0.3,0.4]"},{val:"05|(0.4,0.5]"},{val:"06|(0.5,0.6]"},{val:"07|(0.6,0.7]"},{val:"08|(0.7,0.8]"},{val:"09|(0.8,0.9]"},{val:"10|(0.9,1.0]"},{val:"11|(1.0,1.1]"},{val:"12|(1.1,1.2]"},{val:"13|(1.2,1.3]"},{val:"14|(1.3,1.4]"},{val:"15|(1.4,1.5]"},{val:"16|(1.5,1.6]"},{val:"17|(1.6,1.7]"},{val:"18|(1.7,1.8]"},{val:"19|(1.8,1.9]"},{val:"20|(1.9,2.0]"},{val:"21|(2.0,high]"}]}},computed:{resty:function(){return this.param.resty},splitstyle:function(){return this.param.splitstyle},mergeData1:function(){return Object(t.a)(this.data1,["channel1"])},mergeData2:function(){return Object(t.a)(this.data2,["cartype1"])}},methods:{simulate:function(){this.loading=!0;var e=this;setTimeout(function(){e.loading=!1},2e3)},merge1:function(e){var a=e.row,l=e.column;e.rowIndex,e.columnIndex;if(["channel1"].includes(l.property)){if(a.rowSpan[l.property]>1)return[a.rowSpan[l.property],1];if(0===a.rowSpan[l.property])return[0,0]}},merge2:function(e){var a=e.row,l=e.column;e.rowIndex,e.columnIndex;if(["cartype1"].includes(l.property)){if(a.rowSpan[l.property]>1)return[a.rowSpan[l.property],1];if(0===a.rowSpan[l.property])return[0,0]}}},watch:{resty:function(){this.simulate()},splitstyle:function(){this.simulate()}}},r={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"iv-container"},[l("div",{staticClass:"form"},[l("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[l("el-form-item",{attrs:{label:"机构名称",prop:"orgcd"}},[l("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium"},model:{value:e.param.orgcd,callback:function(a){e.$set(e.param,"orgcd",a)},expression:"param.orgcd"}},e._l(e.companyList,function(a){return l("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?l("span",[e._v(" ")]):2===a.flag?l("span",[e._v("   ")]):e._e(),e._v(" "),l("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),l("el-form-item",{attrs:{label:"定价模式",prop:"pricemode"}},[l("el-select",{attrs:{placeholder:"请选择定价模式",size:"medium"},model:{value:e.param.pricemode,callback:function(a){e.$set(e.param,"pricemode",a)},expression:"param.pricemode"}},[l("el-option",{attrs:{value:"单车",label:"单车"}}),e._v(" "),l("el-option",{attrs:{value:"调整",label:"调整"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"历史数据模拟区间",prop:"datarangge"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"month",placeholder:"请选择时间段"},model:{value:e.param.startTime,callback:function(a){e.$set(e.param,"startTime",a)},expression:"param.startTime"}})],1),e._v(" "),l("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"month",placeholder:"请选择时间段"},model:{value:e.param.endTime,callback:function(a){e.$set(e.param,"endTime",a)},expression:"param.endTime"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"经营结果类型",prop:"resty"}},[l("el-select",{attrs:{placeholder:"请选择经营结果类型",size:"medium"},model:{value:e.param.resty,callback:function(a){e.$set(e.param,"resty",a)},expression:"param.resty"}},[l("el-option",{attrs:{value:"模拟指标",label:"模拟指标"}}),e._v(" "),l("el-option",{attrs:{value:"折扣系数分布",label:"折扣系数分布"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"分类方式",prop:"splitstyle"}},[l("el-select",{attrs:{placeholder:"请选择分类方式",size:"medium"},model:{value:e.param.splitstyle,callback:function(a){e.$set(e.param,"splitstyle",a)},expression:"param.splitstyle"}},[l("el-option",{attrs:{value:"业务来源",label:"业务来源"}}),e._v(" "),l("el-option",{attrs:{value:"车种",label:"车种"}})],1)],1)],1)],1),e._v(" "),l("div",{staticClass:"data"},[e.loading?l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"1308.98px",height:"519.24px",position:"absolute","z-index":"99999","background-color":"rgba(0,0,0,.1)"},attrs:{"element-loading-text":"系统正在进行经营结果模拟测算，预计 n分钟测算完成以后可查看结果"}}):e._e(),e._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&"模拟指标"===e.resty&&"业务来源"===e.splitstyle,expression:"!loading && resty==='模拟指标' && splitstyle=== '业务来源'"}],staticClass:"table"},[l("base-table",{attrs:{columns:e.columns1,data:e.mergeData1,spanMethod:e.merge1,rowKey:"id",showSummary:!0}})],1),e._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&"模拟指标"===e.resty&&"车种"===e.splitstyle,expression:"!loading && resty==='模拟指标' && splitstyle=== '车种'"}],staticClass:"table"},[l("base-table",{attrs:{columns:e.columns2,data:e.mergeData2,spanMethod:e.merge2,rowKey:"id",showSummary:!0}})],1),e._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&"折扣系数分布"===e.resty&&("业务来源"===e.splitstyle||"车种"===e.splitstyle),expression:"!loading && resty==='折扣系数分布' && (splitstyle=== '业务来源' || splitstyle=== '车种')"}],staticClass:"table"},[l("base-table",{attrs:{columns:e.columns3,data:e.data3,rowKey:"id",showSummary:!0}})],1),e._v(" "),l("div",[l("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"option"},[l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.exportData}},[e._v("导出模拟经营结果")])],1)])])])},staticRenderFns:[]};var o=l("VU/8")(n,r,!1,function(e){l("STuy")},"data-v-86aba910",null);a.default=o.exports},STuy:function(e,a){}});