webpackJsonp([91],{EXxk:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l("Dd8w"),a=l.n(n),i=l("NYxO"),r={name:"RuleLook",components:{BaseTable:function(){return l.e(154).then(l.bind(null,"ss0d"))}},data:function(){return{editFlag:!1,data:[{rulenm:"目标保费规模_预算达成率(%)",indexmaxval:"100.00"},{rulenm:"目标保单成本率_实际值(元)",indexmaxval:"120.00"},{rulenm:"目标保单成本率实际值-预算值二者差(%)",indexmaxval:"0.50"},{rulenm:"目标边际成本率_实际值(%)",indexmaxval:"85.00"},{rulenm:"目标边际实际值-预算值二者差(%)",indexmaxval:"0.50"}]}},methods:{edit:function(){this.editFlag=!0},save:function(){this.editFlag=!1},back:function(){this.$router.push({path:"/admin/inspect/rulelist"})}},computed:a()({columns:function(){return[{prop:"rulenm",width:120,label:"规则名称",isEdit:this.editFlag,type:"input"},{prop:"indexmaxval",width:120,label:"指标限额",isEdit:this.editFlag,type:"input"}]}},Object(i.d)({ruleInfo:function(e){return e.inspect.ruleInfo}}))},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"iv-container"},[l("div",{staticClass:"form"},[l("el-form",{ref:"individualVehicleForm",attrs:{inline:!0,size:"small",model:e.ruleInfo}},[l("el-form-item",{attrs:{label:"所属机构",prop:"org"}},[l("el-input",{attrs:{disabled:""},model:{value:e.ruleInfo.org,callback:function(t){e.$set(e.ruleInfo,"org",t)},expression:"ruleInfo.org"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"规则类型",prop:"ruleType"}},[l("el-input",{attrs:{disabled:""},model:{value:e.ruleInfo.ruleType,callback:function(t){e.$set(e.ruleInfo,"ruleType",t)},expression:"ruleInfo.ruleType"}})],1)],1)],1),e._v(" "),l("div",{staticClass:"option"},[l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.edit}},[e._v("编辑")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.save}},[e._v("保存")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.back}},[e._v("返回")])],1),e._v(" "),l("div",{staticClass:"data"},[l("p",[e._v("规则列表")]),e._v(" "),l("div",{staticClass:"table"},[l("base-table",{attrs:{columns:e.columns,data:e.data}})],1)])])},staticRenderFns:[]};var o=l("VU/8")(r,s,!1,function(e){l("UsrF")},"data-v-47c0fe96",null);t.default=o.exports},UsrF:function(e,t){}});