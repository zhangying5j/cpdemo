webpackJsonp([96],{C37x:function(e,t){},UzPI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),l=a.n(i),n=a("NYxO"),o={name:"TotalParamConfig",components:{BaseTable:function(){return a.e(153).then(a.bind(null,"ss0d"))},BackButton:function(){return a.e(154).then(a.bind(null,"uOVF"))}},created:function(){this.$store.dispatch("queryParam")},data:function(){return{companyList:[{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],param:{orgcd:"01000"},rules:{orgcd:[{required:!0,trigger:"change",message:"机构不能为空"}]},impDialogVisible:!1,columns:[{prop:"bizpcatgcd",label:"车种",width:150,align:"center"},{prop:"levelscope",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"monthstartscope",label:"保单范围（起始月）",width:180,align:"center",isEdit:!1,type:"date",datetype:"month",valueformat:"yyyy-MM"},{prop:"monthendscope",label:"保单范围（终止月）",width:180,align:"center",isEdit:!1,type:"date",datetype:"month",valueformat:"yyyy-MM"},{prop:"newmarketcostmax",label:"新车手续费率上限（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"newmarketcostmin",label:"新车手续费率下限（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"oldmarketcostmax",label:"旧车手续费率上限（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"oldmarketcostmin",label:"旧车手续费率下限（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"autoProtectDown",label:"自主折扣率下限",width:150,align:"center",isEdit:!1,type:"input"},{prop:"autoProtectUp",label:"自主折扣率上限",width:150,align:"center",isEdit:!1,type:"input"},{prop:"expectcostratemin",label:"边际成本率下限（%）",width:170,align:"center",isEdit:!1,type:"input"},{prop:"expectcostratemax",label:"边际成本率上限（%）",width:170,align:"center",isEdit:!1,type:"input"}],editFlag:!1,dimDialogVisible:!1,dimensionList:[{code:"car-price",name:"新车购置价"},{code:"usage",name:"使用性质"},{code:"age",name:"年龄"},{code:"insCom",name:"投保组合"},{code:"comLastCount",name:"商业险上年出险次数"},{code:"rci",name:"商业险上年出险金额"},{code:"gender",name:"性别"},{code:"car-age",name:"车龄"},{name:"交强险上年出险次数",code:"forceLastCount"},{name:"合计上年出险次数",code:"totalLastCount"},{name:"合计上年出险金额",code:"totalLastPay"},{name:"品牌车系分组",code:"jyBrandGroup"},{name:"座位数",code:"seatCount"},{name:"吨位数",code:"tonCount"},{name:"车龄",code:"useYear"},{name:"三者限额",code:"amount"},{name:"是否异地牌照",code:"outLandFlag"},{name:"是否投保盗抢险",code:"theftFlag"},{name:"是否投保车上人员责任险",code:"personDuty"},{name:"是否投保划痕险",code:"scratchFlag"},{name:"是否投保玻璃险",code:"glassFlag"},{name:"车辆种类",code:"carKind"},{name:"新续转保",code:"newFlag"}],currentCustomDimension:["car-price","usage","age","insCom"]}},computed:l()({rangemode:function(){return this.param.rangemode}},Object(n.d)({param:function(e){return e.individual.param},tableHeader:function(e){return e.app.tableHeader},sectorParam:function(e){return e.individual.sectorParam},paramTableShow:function(e){return e.individual.paramTableShow}})),methods:{querySector:function(){},setDefaultDim:function(){this.dimDialogVisible=!0},edit:function(){this.columns=[{prop:"bizpcatgcd",label:"车种",width:150,align:"center"},{prop:"levelscope",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:!0,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"monthrollback",label:"保单回滚月份",width:180,align:"center",isEdit:!0,type:"select",options:[{value:"12",label:"12"},{value:"18",label:"18"},{value:"24",label:"24"},{value:"30",label:"30"},{value:"36",label:"36"}]},{prop:"newmarketcostmax",label:"新车手续费率上限（%）",width:150,align:"center",isEdit:!0,type:"input"},{prop:"newmarketcostmin",label:"新车手续费率下限（%）",width:150,align:"center",isEdit:!0,type:"input"},{prop:"oldmarketcostmax",label:"旧车手续费率上限（%）",width:150,align:"center",isEdit:!0,type:"input"},{prop:"oldmarketcostmin",label:"旧车手续费率下限（%）",width:150,align:"center",isEdit:!0,type:"input"},{prop:"autoProtectDown",label:"自主折扣率下限",width:150,align:"center",isEdit:!0,type:"input"},{prop:"autoProtectUp",label:"自主折扣率上限",width:150,align:"center",isEdit:!0,type:"input"},{prop:"expectcostratemin",label:"边际成本率下限（%）",width:170,align:"center",isEdit:!0,type:"input"},{prop:"expectcostratemax",label:"边际成本率上限（%）",width:170,align:"center",isEdit:!0,type:"input"}],this.editFlag=!0},save:function(){this.columns=[{prop:"bizpcatgcd",label:"车种",width:150,align:"center"},{prop:"levelscope",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:!1,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"monthstartscope",label:"保单范围（起始月）",width:180,align:"center",isEdit:!1,type:"date",datetype:"month",valueformat:"yyyy-MM"},{prop:"monthendscope",label:"保单范围（终止月）",width:180,align:"center",isEdit:!1,type:"date",datetype:"month",valueformat:"yyyy-MM"},{prop:"newmarketcostmax",label:"新车手续费率上限（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"newmarketcostmin",label:"新车手续费率下限（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"oldmarketcostmax",label:"旧车手续费率上限（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"oldmarketcostmin",label:"旧车手续费率下限（%）",width:150,align:"center",isEdit:!1,type:"input"},{prop:"autoProtectDown",label:"自主折扣率下限",width:150,align:"center",isEdit:!1,type:"input"},{prop:"autoProtectUp",label:"自主折扣率上限",width:150,align:"center",isEdit:!1,type:"input"},{prop:"expectcostratemin",label:"边际成本率下限（%）",width:170,align:"center",isEdit:!1,type:"input"},{prop:"expectcostratemax",label:"边际成本率上限（%）",width:170,align:"center",isEdit:!1,type:"input"}],this.editFlag=!1},recommend:function(){this.$store.dispatch("recommendSteps"),this.$router.push({path:"/admin/individual/declare/resultRecommend"})},factorConfig:function(){this.$router.push({path:"/admin/individual/declare/factorConfig"})},download:function(){var e=this;this.$confirm("确定下载模板?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"模板下载成功!"})}).catch(function(){})},upload:function(){this.impDialogVisible=!1,this.$message({type:"success",message:"数据导入成功!"})},exportData:function(){var e=this;this.$confirm("确定导出数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"数据导出成功!"})}).catch(function(){})}},watch:{rangemode:function(e){"1"===e?this.columns=[{prop:"bizpcatgcd",label:"车种",width:150,align:"center"},{prop:"levelscope",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:this.editFlag,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"monthstartscope",label:"保单范围（起始月）",width:180,align:"center",isEdit:this.editFlag,type:"date",datetype:"month",valueformat:"yyyy-MM"},{prop:"monthendscope",label:"保单范围（终止月）",width:180,align:"center",isEdit:this.editFlag,type:"date",datetype:"month",valueformat:"yyyy-MM"},{prop:"marketcostmin",label:"手续费率下限（%）",width:150,align:"center",isEdit:this.editFlag,type:"input"},{prop:"marketcostmax",label:"手续费率上限（%）",width:150,align:"center",isEdit:this.editFlag,type:"input"},{prop:"autoProtectDown",label:"自主折扣率下限",width:150,align:"center",isEdit:this.editFlag,type:"input"},{prop:"autoProtectUp",label:"自主折扣率上限",width:150,align:"center",isEdit:this.editFlag,type:"input"},{prop:"expectcostratemin",label:"保单成本率下限（%）",width:170,align:"center",isEdit:this.editFlag,type:"input"},{prop:"expectcostratemax",label:"保单成本率上限（%）",width:170,align:"center",isEdit:this.editFlag,type:"input"}]:"2"===e&&(this.columns=[{prop:"bizpcatgcd",label:"车种",width:150,align:"center"},{prop:"levelscope",label:"数据范围(本级或上级)",width:180,align:"center",isEdit:this.editFlag,type:"select",options:[{value:"01",label:"本级"},{value:"02",label:"上级"}]},{prop:"monthrollback",label:"保单回滚月份",width:180,align:"center",isEdit:this.editFlag,type:"select",options:[{value:"12",label:"12"},{value:"18",label:"18"},{value:"24",label:"24"},{value:"30",label:"30"},{value:"36",label:"36"}]},{prop:"marketcostmin",label:"手续费率下限（%）",width:150,align:"center",isEdit:this.editFlag,type:"input"},{prop:"marketcostmax",label:"手续费率上限（%）",width:150,align:"center",isEdit:this.editFlag,type:"input"},{prop:"autoProtectDown",label:"自主折扣率下限",width:150,align:"center",isEdit:this.editFlag,type:"input"},{prop:"autoProtectUp",label:"自主折扣率上限",width:150,align:"center",isEdit:this.editFlag,type:"input"},{prop:"expectcostratemin",label:"保单成本率下限（%）",width:170,align:"center",isEdit:this.editFlag,type:"input"},{prop:"expectcostratemax",label:"保单成本率上限（%）",width:170,align:"center",isEdit:this.editFlag,type:"input"}])}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.paramTableShow,expression:"paramTableShow"}],staticClass:"biz-content"},[a("div",{staticClass:"form"},[a("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[a("el-form-item",{attrs:{label:"机构名称",prop:"orgcd"}},[a("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium"},model:{value:e.param.orgcd,callback:function(t){e.$set(e.param,"orgcd",t)},expression:"param.orgcd"}},e._l(e.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.querySector}},[e._v("查询")])],1)],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[e._v("推荐参数配置")]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.sectorParam,rowKey:"id"},on:{setDefaultDim:e.setDefaultDim}})],1)]),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.download}},[e._v("模板下载")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!0}}},[e._v("数据导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.exportData}},[e._v("数据导出")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.edit}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.save}},[e._v("保存")])],1),e._v(" "),a("el-dialog",{attrs:{title:"数据导入",visible:e.impDialogVisible,width:"40%"},on:{"update:visible":function(t){e.impDialogVisible=t}}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/",multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传excel文件，且不超过500kb")])],1),e._v(" "),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.upload}},[e._v("导入")]),e._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(t){e.impDialogVisible=!1}}},[e._v("关闭")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"预置智能推荐维度",visible:e.dimDialogVisible,width:"30%"},on:{"update:visible":function(t){e.dimDialogVisible=t}}},e._l(e.dimensionList,function(t){return a("el-tag",{key:t.code,attrs:{type:e.currentCustomDimension.includes(t.code)?"primary":"info"},nativeOn:{click:function(a){e.addDimension(t.code)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip tip-default"},[t("span",{staticClass:"pull-left"},[this._v("基础业务清单范围来自平台：2015年10月1日至2017年10月1日")]),this._v(" "),t("div",{staticClass:"pull-right danger"},[this._v("如果数据量过小会，将影响推荐结果有效性，请合理选择数据范围！")])])}]};var p=a("VU/8")(o,c,!1,function(e){a("C37x")},"data-v-43a4ff66",null);t.default=p.exports}});