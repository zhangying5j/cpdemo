webpackJsonp([78],{qljX:function(t,e){},ydWB:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"BudgetNewbudger",components:{BaseTable:function(){return i.e(154).then(i.bind(null,"ss0d"))}},data:function(){return{param:{orgcd:"01000",version:"20180101002003"},companyList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],data:[{org:"传统直销"},{org:"新渠道直销"},{org:"电话、网络直销"},{org:"个人代理"},{org:"兼业代理"},{org:"专业代理"},{org:"经纪业务"},{org:"合计"}],columns:[{prop:"org",label:"渠道",width:"120"},{prop:"a",label:"标准保费",width:"150",isEdit:!1,type:"input"},{prop:"b",label:"含NCD的保费",width:"150",isEdit:!1,type:"input"},{prop:"c",label:"含NCD、自主核保系数、自主渠道系数的保费(元)",width:"150",isEdit:!1,type:"input"},{prop:"d",label:"NCD平均值",width:"150",isEdit:!1,type:"input"},{prop:"e",label:"自主核保系数平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"f",label:"自主核保系数最低值（%）",width:"180",isEdit:!1,type:"input"},{prop:"g",label:"自主核保系数最高值（%）",width:"180",isEdit:!1,type:"input"},{prop:"h",label:"自主渠道系数平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"i",label:"自主渠道系数最低值（%）",width:"150",isEdit:!1,type:"input"},{prop:"j",label:"自主渠道系数最高值（%）",width:"150",isEdit:!1,type:"input"},{prop:"k",label:"自主折扣率平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"l",label:"自主折扣率最低值（%）",width:"150",isEdit:!1,type:"input"},{prop:"m",label:"自主折扣率最高值（%）",width:"150",isEdit:!1,type:"input"},{prop:"n",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!1,type:"input"},{prop:"o",label:"假设仍沿用行业旧基准费率的平均自主渠道系数",width:"150",isEdit:!1,type:"input"},{prop:"p",label:"假设仍沿用行业旧基准费率的平均自主折扣率",width:"150",isEdit:!1,type:"input"},{prop:"q",label:"标准保费的保单年赔付率（%）",width:"150",isEdit:!1,type:"input"},{prop:"r",label:"含NCD的保单年赔付率（%）",width:"150",isEdit:!1,type:"input"},{prop:"s",label:"含NCD、自主核保系数的保单年赔付率（%）",width:"150",isEdit:!1,type:"input"},{prop:"t",label:"含NCD、自主核保系数、自主渠道系数的保单年赔付率（%）",width:"150",isEdit:!1,type:"input"},{prop:"u",label:"保单年费用率（%）",width:"150",isEdit:!1,type:"input"},{prop:"v",label:"保单年单笔业务中介机构手续费率或个人代理人费用率最高值（%）",width:"150",isEdit:!1,type:"input"},{prop:"w",label:"保单年中介机构手续费率或个人代理人费用率平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"x",label:"保单年成本率（%）",width:"150",isEdit:!1,type:"input"}],data21:[{carType:"家庭自用车"},{carType:"营业客车"},{carType:"非营业客车"},{carType:"营业货车"},{carType:"非营业货车"},{carType:"其他"},{carType:"合计"},{carType:"其中：新车"}],columns21:[{prop:"carType",label:"车种",width:"150"},{prop:"a",label:"标准保费",width:"150",isEdit:!1,type:"input"},{prop:"b",label:"含NCD的保费",width:"150",isEdit:!1,type:"input"},{prop:"c",label:"含NCD、自主核保系数、自主渠道系数的保费(元)",width:"150",isEdit:!1,type:"input"},{prop:"d",label:"NCD平均值",width:"150",isEdit:!1,type:"input"},{prop:"e",label:"自主核保系数平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"f",label:"自主核保系数最低值（%）",width:"180",isEdit:!1,type:"input"},{prop:"g",label:"自主核保系数最高值（%）",width:"180",isEdit:!1,type:"input"},{prop:"h",label:"自主渠道系数平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"i",label:"自主渠道系数最低值（%）",width:"150",isEdit:!1,type:"input"},{prop:"j",label:"自主渠道系数最高值（%）",width:"150",isEdit:!1,type:"input"},{prop:"k",label:"自主折扣率平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"l",label:"自主折扣率最低值（%）",width:"150",isEdit:!1,type:"input"},{prop:"m",label:"自主折扣率最高值（%）",width:"150",isEdit:!1,type:"input"},{prop:"n",label:"假设仍沿用行业旧基准费率的平均自主核保系数",width:"150",isEdit:!1,type:"input"},{prop:"o",label:"假设仍沿用行业旧基准费率的平均自主渠道系数",width:"150",isEdit:!1,type:"input"},{prop:"p",label:"假设仍沿用行业旧基准费率的平均自主折扣率",width:"150",isEdit:!1,type:"input"},{prop:"q",label:"标准保费的保单年赔付率（%）",width:"150",isEdit:!1,type:"input"},{prop:"r",label:"含NCD的保单年赔付率（%）",width:"150",isEdit:!1,type:"input"},{prop:"s",label:"含NCD、自主核保系数的保单年赔付率（%）",width:"150",isEdit:!1,type:"input"},{prop:"t",label:"含NCD、自主核保系数、自主渠道系数的保单年赔付率（%）",width:"150",isEdit:!1,type:"input"},{prop:"u",label:"保单年费用率（%）",width:"150",isEdit:!1,type:"input"},{prop:"v",label:"保单年单笔业务中介机构手续费率最高值（%）",width:"150",isEdit:!1,type:"input"},{prop:"w",label:"保单年中介机构手续费率平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"x",label:"保单年单笔业务个人代理人费用率最高值（%）",width:"150",isEdit:!1,type:"input"},{prop:"y",label:"保单年个人代理人费用率平均值（%）",width:"150",isEdit:!1,type:"input"},{prop:"z",label:"保单年成本率（%）",width:"150",isEdit:!1,type:"input"}]}},methods:{edit:function(){this.columns.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!0)}),this.columns21.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!0)})},save:function(){this.columns.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!1)}),this.columns21.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!1)})},back:function(){this.$router.push("/admin/budget/newbudget")}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"form"},[i("el-form",{attrs:{inline:!0,size:"small",model:t.param}},[i("el-form-item",{attrs:{label:"机构名称",prop:"orgcd"}},[i("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium",disabled:!0},model:{value:t.param.orgcd,callback:function(e){t.$set(t.param,"orgcd",e)},expression:"param.orgcd"}},t._l(t.companyList,function(e){return i("el-option",{key:e.code,attrs:{value:e.code,label:e.name}},[1===e.flag?i("span",[t._v(" ")]):2===e.flag?i("span",[t._v("   ")]):t._e(),t._v(" "),i("span",[t._v(t._s(e.name))])])}))],1),t._v(" "),i("el-form-item",{attrs:{label:"版本号",prop:"version"}},[i("el-input",{attrs:{disabled:""},model:{value:t.param.version,callback:function(e){t.$set(t.param,"version",e)},expression:"param.version"}})],1)],1)],1),t._v(" "),i("el-tabs",{attrs:{type:"border-card"}},[i("el-tab-pane",{attrs:{label:"分渠道"}},[i("base-table",{attrs:{columns:t.columns,data:t.data,rowKey:"id"}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"分车种"}},[i("base-table",{attrs:{columns:t.columns21,data:t.data21,rowKey:"id"}})],1)],1),t._v(" "),i("div",{staticClass:"option"},[i("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.edit}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.back}},[t._v("返回")]),t._v(" "),i("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[t._v("确认")])],1)],1)},staticRenderFns:[]};var l=i("VU/8")(a,p,!1,function(t){i("qljX")},"data-v-54b5f8fa",null);e.default=l.exports}});