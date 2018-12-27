webpackJsonp([46],{"+8nd":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("Dd8w"),l=t.n(n),o=t("NYxO"),r={name:"SelectMode",created:function(){this.$store.dispatch("initPriceSteps")},data:function(){return{setShow:!1,business:"复制业务单元",whole:"复制全部方案",copyparam:{plannm:"",orgcd:"00000",startmonth:"",endmonth:""},rules:{orgcd:[{required:!0,trigger:"change",message:"机构不能为空"}]},companyList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],columns:[{prop:"org",width:120,label:"机构",align:"center"},{prop:"plannm",width:240,label:"方案名称"},{prop:"planVersionNo",width:240,label:"方案版本号"},{prop:"createdate",width:240,label:"创建时间"},{prop:"creater",width:240,label:"编制人"},{prop:"status",label:"状态",width:120}],data:[]}},computed:l()({},Object(o.d)({tableHeader:function(e){return e.app.tableHeader},param:function(e){return e.individual.param}})),methods:{query:function(){var e=this;this.$refs.selectform.validate(function(a){if(a){var t=e.companyList.find(function(a){return a.code===e.param.orgcd});e.data=[{id:"1",org:t.name,plannm:"2018"+t.name+"个车定价方案",planVersionNo:"201801010011524",createdate:"2018-01-01",creater:"张翰",status:"未确认"},{id:"2",org:t.name,plannm:"2018"+t.name+"个车定价方案",planVersionNo:"201801010011527",createdate:"2018-01-01",creater:"张翰",status:"未确认"},{id:"3",org:t.name,plannm:"2018"+t.name+"个车定价方案",planVersionNo:"201801010011525",createdate:"2018-01-01",creater:"张翰",status:"未确认"}]}})},createPlan:function(){this.$router.push({path:"/admin/individual/declare"})},copy:function(){this.$router.push({path:"/admin/individual/declare/planCopy"})},edit:function(e){this.$router.push({path:"/admin/individual/declare/factorDivide"})},multiplex:function(e){this.$router.push({path:"/admin/individual/declare/planConfig"})},multiplex1:function(e){this.$router.push({path:"/admin/individual/declare/custombusiness"})},commitCopy:function(){this.$store.dispatch("initPriceSteps"),this.$router.push("/admin/individual/declare/factorDivide")},del:function(e){var a=this.data.findIndex(function(a){return a.id===e});this.data.splice(a,1)}}},c={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"biz-content"},[t("div",{staticStyle:{height:"30px","line-height":"30px","margin-bottom":"10px"}},[e._v("方案基本信息")]),e._v(" "),t("el-form",{ref:"selectform",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[t("el-form-item",{attrs:{label:"方案归属机构",prop:"orgcd"}},[t("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium"},model:{value:e.param.orgcd,callback:function(a){e.$set(e.param,"orgcd",a)},expression:"param.orgcd"}},e._l(e.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"预期生效期间："}},[t("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.param.startdate,callback:function(a){e.$set(e.param,"startdate",a)},expression:"param.startdate"}}),e._v(" "),t("span",[e._v("至")]),e._v(" "),t("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.param.enddate,callback:function(a){e.$set(e.param,"enddate",a)},expression:"param.enddate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"方案名称",prop:"plannm"}},[t("el-input",{model:{value:e.param.plannm,callback:function(a){e.$set(e.param,"plannm",a)},expression:"param.plannm"}})],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.createPlan}},[e._v("新建")])],1),e._v(" "),t("el-dialog",{attrs:{title:"方案制定信息",visible:e.setShow,width:"40%"},on:{"update:visible":function(a){e.setShow=a}}},[t("el-form",{attrs:{inline:!0,size:"small",model:e.copyparam}},[t("el-form-item",{attrs:{label:"机构名称",prop:"orgcd"}},[t("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium"},model:{value:e.copyparam.orgcd,callback:function(a){e.$set(e.copyparam,"orgcd",a)},expression:"copyparam.orgcd"}},e._l(e.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"预期生效期间："}},[t("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM"},model:{value:e.copyparam.startmonth,callback:function(a){e.$set(e.copyparam,"startmonth",a)},expression:"copyparam.startmonth"}}),e._v(" "),t("span",[e._v("至")]),e._v(" "),t("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM"},model:{value:e.copyparam.endmonth,callback:function(a){e.$set(e.copyparam,"endmonth",a)},expression:"copyparam.endmonth"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"方案名称",prop:"plannm"}},[t("el-input",{model:{value:e.copyparam.plannm,callback:function(a){e.$set(e.copyparam,"plannm",a)},expression:"copyparam.plannm"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.commitCopy}},[e._v("确认复制")])],1)],1)],1)],1)},staticRenderFns:[]};var d=t("VU/8")(r,c,!1,function(e){t("T7IK")},"data-v-7eb89fda",null);a.default=d.exports},T7IK:function(e,a){}});