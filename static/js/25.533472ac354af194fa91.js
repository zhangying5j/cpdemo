webpackJsonp([25],{"2oZ1":function(e,a){},eFsa:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("NYxO"),r=t("Z4dx"),i={name:"AddAllRecommend",components:{RecommendStep:function(){return t.e(157).then(t.bind(null,"fWNb"))},QueryForm:function(){return t.e(163).then(t.bind(null,"dQTo"))}},created:function(){var e=this;Object(r.c)().then(function(a){e.initData=a.data})},data:function(){return{initData:{},rules:{orgcd:[{required:!0,trigger:"change",message:"机构不能为空"}],monthrange:[{required:!0,trigger:"change",message:"方案作用区间不能为空"}],plannm:[{required:!0,trigger:"change",message:"方案名称不能为空"}]},disabled:!0}},computed:Object(n.d)({param:function(e){return e.individual.param}}),methods:{createPlan:function(){this.$router.push({path:"/admin/individual/allrecommend"})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"iv-container"},[t("div",{staticClass:"c-main"},[t("div",{staticStyle:{height:"30px","line-height":"30px","margin-bottom":"10px"}},[e._v("方案基本信息")]),e._v(" "),t("div",{staticClass:"form"},[t("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[t("el-form-item",{attrs:{label:"方案归属机构",prop:"orgcd"}},[t("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium"},model:{value:e.param.orgcd,callback:function(a){e.$set(e.param,"orgcd",a)},expression:"param.orgcd"}},e._l(e.initData.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"预期生效期间：",prop:"monthrange"}},[t("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.param.startdate,callback:function(a){e.$set(e.param,"startdate",a)},expression:"param.startdate"}}),e._v(" "),t("span",[e._v("至")]),e._v(" "),t("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.param.enddate,callback:function(a){e.$set(e.param,"enddate",a)},expression:"param.enddate"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"方案名称",prop:"plannm"}},[t("el-input",{model:{value:e.param.plannm,callback:function(a){e.$set(e.param,"plannm",a)},expression:"param.plannm"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.createPlan}},[e._v("新建")])],1),e._v(" "),t("router-view")],1)])},staticRenderFns:[]};var s=t("VU/8")(i,l,!1,function(e){t("2oZ1")},"data-v-bb1684d0",null);a.default=s.exports}});