webpackJsonp([136],{kRFo:function(a,e){},uVrD:function(a,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{staticClass:"iv-container"},[l("div",{staticStyle:{height:"30px","line-height":"30px","margin-bottom":"10px"}},[a._v("方案基本信息")]),a._v(" "),l("div",{staticClass:"form"},[l("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:a.param,rules:a.rules}},[l("el-form-item",{attrs:{label:"机构名称",prop:"orgcd"}},[l("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium"},model:{value:a.param.orgcd,callback:function(e){a.$set(a.param,"orgcd",e)},expression:"param.orgcd"}},a._l(a.companyList,function(e){return l("el-option",{key:e.code,attrs:{value:e.code,label:e.name}},[1===e.flag?l("span",[a._v(" ")]):2===e.flag?l("span",[a._v("   ")]):a._e(),a._v(" "),l("span",[a._v(a._s(e.name))])])}))],1),a._v(" "),l("el-form-item",{attrs:{label:"方案生效区间：",prop:"monthrange"}},[l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:a.param.startdate,callback:function(e){a.$set(a.param,"startdate",e)},expression:"param.startdate"}}),a._v(" "),l("span",[a._v("至")]),a._v(" "),l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:a.param.enddate,callback:function(e){a.$set(a.param,"enddate",e)},expression:"param.enddate"}})],1),a._v(" "),l("el-form-item",{attrs:{label:"方案名称",prop:"plannm"}},[l("el-input",{model:{value:a.param.plannm,callback:function(e){a.$set(a.param,"plannm",e)},expression:"param.plannm"}})],1)],1)],1),a._v(" "),l("div",{staticStyle:{height:"30px","line-height":"30px","margin-bottom":"10px"}},[a._v("复用方案信息")]),a._v(" "),l("div",[l("el-form",{attrs:{inline:!0,size:"small",model:a.param,rules:a.rules}},[l("el-form-item",{attrs:{label:"方案版本号",prop:"planno"}},[l("el-input",{model:{value:a.param.planno,callback:function(e){a.$set(a.param,"planno",e)},expression:"param.planno"}})],1),a._v(" "),l("el-form-item",{attrs:{label:"方案复用模式",prop:"model"}},[l("el-radio-group",{model:{value:a.param.model,callback:function(e){a.$set(a.param,"model",e)},expression:"param.model"}},[l("el-radio",{attrs:{label:"完全方案复用"}},[a._v("完全方案复用")]),a._v("\n          // 根据复用方案编号得到方案是否全智能，全智能则不能‘风险因子复用’\n          "),l("el-radio",{attrs:{label:"风险因子复用",disabled:!1}},[a._v("风险因子复用")])],1)],1)],1)],1),a._v(" "),l("div",{staticClass:"option"},[l("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:a.commitCopy}},[a._v("方案复用确认")])],1)])},staticRenderFns:[]};var o=l("VU/8")({name:"CopyPlan",data:function(){return{rules:{orgcd:[{required:!0,trigger:"change",message:"机构不能为空"}],monthrange:[{required:!0,trigger:"change",message:"方案作用区间不能为空"}],plannm:[{required:!0,trigger:"change",message:"方案名称不能为空"}]},param:{orgcd:"01000",startdate:"2018-01-01",enddate:"2018-12-31",plannm:"2018北京分公司个车定价方案",planno:"",model:"完全方案复用"},companyList:[{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}]}},methods:{commitCopy:function(){"风险因子复用"===this.param.model?this.$router.push({path:"/admin/individual/diyplan/two"}):"完全方案复用"===this.param.model&&this.$router.push({path:"/admin/individual/diyplan/four"})}}},n,!1,function(a){l("kRFo")},"data-v-09885e20",null);e.default=o.exports}});