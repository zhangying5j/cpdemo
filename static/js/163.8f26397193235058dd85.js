webpackJsonp([163],{SMMQ:function(e,a){},dQTo:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("NYxO"),l=t("Z4dx"),i={name:"QueryForm",data:function(){return{initData:{},rules:{orgcd:[{required:!0,trigger:"change",message:"机构不能为空"}],monthrange:[{required:!0,trigger:"change",message:"方案作用区间不能为空"}],plannm:[{required:!0,trigger:"change",message:"方案名称不能为空"}],model:[{required:!0,trigger:"change",message:"模式不能为空"}],channelcd:[{required:!0,trigger:"change",message:"渠道不能为空"}]},fullscreenLoading:!1}},computed:Object(r.d)({viewParameters:function(e){return e.individual.viewParameters},lifeFormOptionShow:function(e){return e.individual.lifeFormOptionShow},rangemodeFlag:function(e){return e.individual.rangemodeFlag},modelFlag:function(e){return e.individual.modelFlag},rollbackFlag:function(e){return e.individual.rollbackFlag},versionFlag:function(e){return e.individual.versionFlag},param:function(e){return e.individual.param}}),created:function(){var e=this;Object(l.b)().then(function(a){e.initData=a.data})},methods:{querySector:function(){this.valid("querySector")},valid:function(e){var a=this;this.$refs.individualVehicleForm.validate(function(t){t&&a.$emit(e)})}}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticStyle:{height:"30px","line-height":"30px","margin-bottom":"10px"}},[e._v("方案基本信息")]),e._v(" "),t("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[t("el-form-item",{attrs:{label:"机构名称",prop:"orgcd"}},[t("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium",disabled:!e.lifeFormOptionShow},model:{value:e.param.orgcd,callback:function(a){e.$set(e.param,"orgcd",a)},expression:"param.orgcd"}},e._l(e.initData.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"方案生效区间：",prop:"monthrange"}},[t("el-date-picker",{staticStyle:{width:"150px"},attrs:{disabled:!e.lifeFormOptionShow,type:"date",placeholder:"选择日期"},model:{value:e.param.startdate,callback:function(a){e.$set(e.param,"startdate",a)},expression:"param.startdate"}}),e._v(" "),t("span",[e._v("至")]),e._v(" "),t("el-date-picker",{staticStyle:{width:"150px"},attrs:{disabled:!e.lifeFormOptionShow,type:"date",placeholder:"选择日期"},model:{value:e.param.enddate,callback:function(a){e.$set(e.param,"enddate",a)},expression:"param.enddate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"方案名称",prop:"plannm"}},[t("el-input",{attrs:{disabled:!e.lifeFormOptionShow},model:{value:e.param.plannm,callback:function(a){e.$set(e.param,"plannm",a)},expression:"param.plannm"}})],1),e._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.modelFlag,expression:"modelFlag"}],attrs:{label:"模式选择",prop:"model"}},[t("el-radio-group",{model:{value:e.param.model,callback:function(a){e.$set(e.param,"model",a)},expression:"param.model"}},[t("el-radio",{attrs:{label:"辅助推荐"}},[e._v("辅助推荐")]),e._v(" "),t("el-radio",{attrs:{label:"自主选择"}},[e._v("自主选择")])],1)],1),e._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.rollbackFlag,expression:"rollbackFlag"}],attrs:{label:"历史保单时间范围",prop:"cbmode"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"month",placeholder:"请选择时间段"},model:{value:e.param.startTime,callback:function(a){e.$set(e.param,"startTime",a)},expression:"param.startTime"}})],1),e._v(" "),t("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"month",placeholder:"请选择时间段"},model:{value:e.param.endTime,callback:function(a){e.$set(e.param,"endTime",a)},expression:"param.endTime"}})],1)],1),e._v(" "),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.versionFlag,expression:"versionFlag"}],attrs:{label:"版本号"}},[t("el-input",{attrs:{readonly:""},model:{value:e.param.version,callback:function(a){e.$set(e.param,"version",a)},expression:"param.version"}})],1)],1)],1)},staticRenderFns:[]};var o=t("VU/8")(i,n,!1,function(e){t("SMMQ")},"data-v-02354fc0",null);a.default=o.exports}});