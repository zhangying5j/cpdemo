webpackJsonp([57],{J7wx:function(e,t){},tlcW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("NYxO"),i={name:"ConfigFee1",components:{RecommendStep:function(){return a.e(157).then(a.bind(null,"fWNb"))}},computed:Object(n.d)({stepProcess:function(e){return e.fleet.fleetFeeStepProcess}}),data:function(){return{param:{no:"201801011215002",nm:"",startTime:"2018-01",endTime:"2018-12"},steps:[{id:"1",title:"定价因子划分",icon:"iconfont icon-ziyuan1",path:"/admin/agency/change/configfee/changedim"},{id:"2",title:"定价因子组合",icon:"iconfont icon-ziyuan2",path:"/admin/agency/change/configfee/changebiz"},{id:"3",title:"定价方案配置",icon:"iconfont icon-ziyuan3",path:"/admin/agency/change/configfee/changedisconfigfee"}]}},methods:{}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iv-container"},[a("div",{staticClass:"step"},[a("recommend-step",{attrs:{step:e.stepProcess,steps:e.steps}})],1),e._v(" "),a("div",{staticClass:"form"},[a("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[a("el-form-item",{attrs:{label:"编号",prop:"no"}},[a("el-input",{attrs:{disabled:""},model:{value:e.param.no,callback:function(t){e.$set(e.param,"no",t)},expression:"param.no"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"nm"}},[a("el-input",{model:{value:e.param.nm,callback:function(t){e.$set(e.param,"nm",t)},expression:"param.nm"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"历史数据区间",prop:"datarangge"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"month",placeholder:"请选择时间段"},model:{value:e.param.startTime,callback:function(t){e.$set(e.param,"startTime",t)},expression:"param.startTime"}})],1),e._v(" "),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"month",placeholder:"请选择时间段"},model:{value:e.param.endTime,callback:function(t){e.$set(e.param,"endTime",t)},expression:"param.endTime"}})],1)],1)],1)],1),e._v(" "),a("router-view")],1)},staticRenderFns:[]};var s=a("VU/8")(i,r,!1,function(e){a("J7wx")},"data-v-6ee49a6e",null);t.default=s.exports}});