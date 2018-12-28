webpackJsonp([69],{JgBO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),l=a.n(i),n=a("lDdF"),r=a.n(n),o=a("uXZL"),c=a.n(o),s=a("NYxO"),p=a("Z4dx"),u=a("6D10"),d={name:"PricePlan",components:{BaseTable:function(){return a.e(153).then(a.bind(null,"ss0d"))},BizSectorList:function(){return a.e(155).then(a.bind(null,"jpoa"))}},created:function(){var e=this;Object(p.c)().then(function(t){e.initData=t.data}),Object(p.d)(this.param).then(function(t){var a=t.data.map(function(e){return{id:e.id,name:e.name}});e.$store.commit("SET_SECTORS",a),e.lifeData=t.data,e.businessSmallType[0].children=e.lifeData[1].cols,e.data=e.lifeData[1].detailData})},data:function(){return{selectKeys:[],newName:"",mergeInputNameDialogVisible:!1,flag:!0,pricePlan:{subCompanyCode:"01000",channel:"ct",version:"0200120180701001"},initData:{},businessSmallType:[{prop:"bizType",label:"业务小类",width:120,children:[]}],otherColumns:[{prop:"intelligent",label:"智能推荐结果",children:[{prop:"comAuto",label:"商业险自主折扣率",width:120},{prop:"market",label:"车险手续费率",width:130}]},{prop:"parameterConfig",label:"参数配置",children:[{prop:"exptocost",label:"目标车险保单成本率",width:200,align:"center"},{prop:"expbicost",label:"目标商业险保单成本率",width:210,align:"center"},{prop:"psmode",label:"定价策略模式",width:170,align:"center"},{prop:"fupayrate",label:"赔付率预测值",width:170,align:"center"},{prop:"autorate",label:"自主折扣率",width:170,align:"center"},{prop:"marketrate",label:"手续费率",width:170,align:"center"},{prop:"payrate",label:"目标赔付率",width:240,align:"center"},{prop:"hisfullpayrate",label:"历史满期赔付率",width:240,align:"center"},{prop:"exppayrate",label:"预期赔付率",width:240,align:"center"}]},{prop:"carInsurance",label:"经营结果目标",children:[{prop:"costRate",label:"目标保单成本率(%)",width:120,align:"center"},{prop:"changecostrate",label:"目标变动成本率",width:120,align:"center"},{prop:"payRate",label:"目标保单赔付率(%)",width:140,align:"center"},{prop:"feeRate",label:"目标保单费用率(%)",width:120,align:"center"},{prop:"claimRate",label:"目标理赔费用率(%)",width:120,align:"center"},{prop:"serverRate",label:"目标手续费率(%)",width:120,align:"center"},{prop:"otherRate",label:"目标其他费用率(%)",width:120,align:"center"},{prop:"discoutRate",label:"目标折扣率(%)",width:120,align:"center"},{prop:"fupremium",label:"年度保费规模预测值（万元）",width:120,align:"center"},{prop:"fucostRate",label:"预测保单成本率(%)",width:120,align:"center"},{prop:"fuchangecostrate",label:"预测变动成本率",width:240,align:"center"},{prop:"fupayRate",label:"预测保单赔付率(%)",width:140,align:"center"},{prop:"fufeeRate",label:"预测保单费用率(%)",width:120,align:"center"},{prop:"fuclaimRate",label:"预测理赔费用率(%)",width:120,align:"center"},{prop:"fuserverRate",label:"预测手续费率(%)",width:120,align:"center"},{prop:"fuotherRate",label:"预测其他费用率(%)",width:120,align:"center"},{prop:"fudiscoutRate",label:"预测折扣率(%)",width:120,align:"center"}]},{prop:"disCarInsurance",label:"目标偏离程度",children:[{prop:"discostRate",label:"偏离目标保单成本率",width:120,align:"center"},{prop:"dischangecostrate",label:"偏离目标变动成本率",width:240,align:"center"},{prop:"dispayRate",label:"偏离目标保单赔付率",width:140,align:"center"},{prop:"disfeeRate",label:"偏离目标保单费用率",width:120,align:"center"},{prop:"disclaimRate",label:"偏离目标理赔费用率",width:120,align:"center"},{prop:"disserverRate",label:"偏离目标手续费率",width:120,align:"center"},{prop:"disotherRate",label:"偏离目标其他费用率",width:120,align:"center"},{prop:"disdiscoutRate",label:"偏离目标折扣率",width:120,align:"center"}]}],lifeData:[],data:[],dialogShow:!1,expColumns:[{prop:"index",width:50,label:"",type:"selection"},{prop:"bizNo",label:"业务小类编号",width:120},{prop:"bizMark",label:"业务小类描述",width:130},{prop:"carType",label:"车型",width:130},{prop:"lastCount",label:"上年出险次数",width:130},{prop:"insuranceFlag",label:"转保续保标志",width:130},{prop:"com",label:"推荐商业险自主折扣率",width:130},{prop:"market",label:"推荐手续费用率",width:130}],expData:[{id:"1",bizNo:"010000",bizMark:"红色车型",carType:"红色车型",lastCount:"",insuranceFlag:"",market:"0.638",com:"0.30"},{id:"2",bizNo:"020100",bizMark:"管控车型,未出险",carType:"管控车型",lastCount:"出险0次",insuranceFlag:"",market:"0.638",com:"0.30"},{id:"3",bizNo:"020200",bizMark:"管控车型,出险",carType:"管控车型",lastCount:"出险1次",insuranceFlag:"",market:"0.638",com:"0.30"},{id:"4",bizNo:"020300",bizMark:"管控车型,出险",carType:"管控车型",lastCount:"出险2次",insuranceFlag:"",market:"0.638",com:"0.30"},{id:"5",bizNo:"020400",bizMark:"管控车型,出险",carType:"管控车型",lastCount:"出险3次及以上",insuranceFlag:"",market:"0.638",com:"0.30"},{id:"6",bizNo:"030100",bizMark:"非管控非红色,未出险",carType:"非管控非红色",lastCount:"新车及未出险",insuranceFlag:"",market:"0.638",com:"0.30"},{id:"7",bizNo:"030200",bizMark:"非管控非红色,未出险",carType:"非管控非红色",lastCount:"平台新保",insuranceFlag:"",market:"0.638",com:"0.30"},{id:"8",bizNo:"030301",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险1次",insuranceFlag:"转保",market:"0.638",com:"0.30"},{id:"9",bizNo:"030302",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险1次",insuranceFlag:"续保",market:"0.638",com:"0.30"},{id:"10",bizNo:"030401",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险2次",insuranceFlag:"转保",market:"0.638",com:"0.30"},{id:"11",bizNo:"030402",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险2次",insuranceFlag:"续保",market:"0.638",com:"0.30"},{id:"12",bizNo:"030501",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险3次及以上",insuranceFlag:"转保",market:"0.638",com:"0.30"},{id:"13",bizNo:"030502",bizMark:"非管控非红色,出险",carType:"非管控非红色",lastCount:"出险3次及以上",insuranceFlag:"续保",market:"0.638",com:"0.30"}]}},methods:{selectionChange:function(e){this.selectKeys=e},mergebiz:function(){this.newName="",this.mergeInputNameDialogVisible=!0},sectorClick:function(e){var t=this.sectors.findIndex(function(t){return t.id===e});this.businessSmallType[0].children=this.lifeData[t].cols,this.data=this.lifeData[t].detailData},exportData:function(){var e=this;this.$confirm("确定导出该销售指引吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"销售指引导出成功!"});var t=c.a.utils.table_to_book(document.querySelector("#outTab2")),a=c.a.write(t,{bookType:"xlsx",bookSST:!0,type:"array"});try{r.a.saveAs(new Blob([a],{type:"application/octet-stream"}),"销售指引.xlsx")}catch(e){"undefined"!=typeof console&&console.info(e,a)}return a}).catch(function(){})},merge:function(e){var t=e.row,a=e.column;e.rowIndex,e.columnIndex;if(["carType","lastCount"].includes(a.property)){if(t.rowSpan[a.property]>1)return[t.rowSpan[a.property],1];if(0===t.rowSpan[a.property])return[0,0]}},query:function(){},exportPriceData:function(){var e=this;this.$confirm("确定导出该定价策略吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){e.$message({type:"success",message:"定价策略导出成功!"});var t=["家用-旧车","家用-新车","企业非营业客车","企业非营业货车","机关非营业客车","机关非营业货车","机关非营业特种车","机动非营业客车","营业出租客车","营业出租货车","营业城市公交","营业旅游客车","营业公路货车","营业公路挂车"],a={};t.forEach(function(e){console.log(e),a[e]=c.a.utils.table_to_sheet(document.querySelector("#out-table"))});var i=c.a.utils.book_new();return i.SheetNames=t,i.Sheets=a,c.a.writeFile(i,"定价策略.xlsx")}).catch(function(){})},tableCellClassName:function(e){var t=!1;return""===e.row[e.column.property]&&(t=!0),t?"info-cell":null}},computed:l()({columns:function(){return this.businessSmallType.concat(this.otherColumns)},mergeData:function(){return Object(u.a)(this.expData,["carType","lastCount"])}},Object(s.d)({sectors:function(e){return e.individual.sectors}}))},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"pricePlanForm",attrs:{"label-width":"120px",inline:!0,model:e.pricePlan}},[a("el-form-item",{attrs:{label:"机构代码",prop:"subCompanyCode"}},[a("el-select",{attrs:{placeholder:"请选择机构代码",size:"medium"},model:{value:e.pricePlan.subCompanyCode,callback:function(t){e.$set(e.pricePlan,"subCompanyCode",t)},expression:"pricePlan.subCompanyCode"}},e._l(e.initData.companyList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"渠道",prop:"channel"}},[a("el-select",{attrs:{placeholder:"请选择渠道",size:"medium"},model:{value:e.pricePlan.channel,callback:function(t){e.$set(e.pricePlan,"channel",t)},expression:"pricePlan.channel"}},e._l(e.initData.channelList,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[a("el-input",{attrs:{readonly:""},model:{value:e.pricePlan.version,callback:function(t){e.$set(e.pricePlan,"version",t)},expression:"pricePlan.version"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1)],1)],1),e._v(" "),a("biz-sector-list",{attrs:{title:"选择业务板块",sectors:e.sectors,active:"2"},on:{sectorClick:e.sectorClick}}),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"title"},[a("div",{staticClass:"btn"},[a("div",{staticStyle:{float:"right"}},[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:e.exportPriceData}},[e._v("定价策略导出")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(t){e.dialogShow=!0}}},[e._v("销售报价策略导出")])],1)])]),e._v(" "),a("base-table",{attrs:{columns:e.columns,data:e.data,id:"out-table"}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.dialogShow,width:"60%"},on:{"update:visible":function(t){e.dialogShow=t}}},[a("div",{staticClass:"data"},[a("base-table",{attrs:{columns:e.expColumns,data:e.mergeData,spanMethod:e.merge,border:e.flag,rowKey:"id",cellClassName:e.tableCellClassName,id:"outTab2"},on:{selectionChange:e.selectionChange}})],1),e._v(" "),a("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",type:"primary"},on:{click:e.mergebiz}},[e._v("合并")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary"},on:{click:e.exportData}},[e._v("销售指引导出")]),e._v(" "),a("el-button",{attrs:{plain:"",type:"primary"},on:{click:function(t){e.dialogShow=!1}}},[e._v("关闭")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"",visible:e.mergeInputNameDialogVisible,width:"20%"},on:{"update:visible":function(t){e.mergeInputNameDialogVisible=t}}},[a("div",[a("el-form",{attrs:{size:"small","label-width":"60px"}},[a("el-form-item",{attrs:{label:"请命名"}},[a("el-input",{attrs:{size:"mini"},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-circle-check-outline"},on:{click:function(t){e.mergeInputNameDialogVisible=!1}},slot:"append"})],1)],1)],1)],1)])],1)},staticRenderFns:[]};var m=a("VU/8")(d,b,!1,function(e){a("ycmu")},"data-v-6782fa74",null);t.default=m.exports},ycmu:function(e,t){}});