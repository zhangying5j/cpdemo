webpackJsonp([113],{csRf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"BudgetYearinsurce",components:{BaseTable:function(){return a.e(153).then(a.bind(null,"ss0d"))}},data:function(){return{data:[],columns:[{prop:"org",label:"渠道",width:"120"},{prop:"a",label:"保单年单笔业务中介机构手续费率或个人代理人费用率最高值",width:"150",isEdit:!0,type:"input"},{prop:"b",label:"保单年中介机构手续费率或个人代理人费用率平均值",width:"150",isEdit:!0,type:"input"},{prop:"c",label:"保单年费用率",width:"150",isEdit:!0,type:"input"},{prop:"d",label:"保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"e",label:"保单年成本率",width:"180",isEdit:!0,type:"input"}],data31:[],columns31:[{prop:"carType",label:"车种",width:"120"},{prop:"a",label:"保单年单笔业务中介机构手续费率最高值",width:"150",isEdit:!0,type:"input"},{prop:"b",label:"保单年中介机构手续费率平均值",width:"150",isEdit:!0,type:"input"},{prop:"c",label:"保单年单笔业务个人代理人费用率最高值",width:"150",isEdit:!0,type:"input"},{prop:"d",label:"保单年个人代理人费用率平均值",width:"150",isEdit:!0,type:"input"},{prop:"e",label:"保单年费用率",width:"150",isEdit:!0,type:"input"},{prop:"f",label:"保单年赔付率",width:"150",isEdit:!0,type:"input"},{prop:"g",label:"保单年成本率",width:"180",isEdit:!0,type:"input"}]}},methods:{query:function(){this.data=[{org:"传统直销"},{org:"新渠道直销"},{org:"电话、网络直销"},{org:"个人代理"},{org:"兼业代理"},{org:"专业代理"},{org:"经纪业务"}],this.data31=[{carType:"家庭自用车"},{carType:"营业客车"},{carType:"非营业客车"},{carType:"营业货车"},{carType:"非营业货车"},{carType:"其他"}]}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:t.query}},[t._v("导入")]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary"}},[t._v("保存")])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"data table"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"分渠道"}},[a("base-table",{attrs:{columns:t.columns,data:t.data,rowKey:"id",showSummary:!0}})],1),t._v(" "),a("el-tab-pane",{attrs:{label:"分车种"}},[a("base-table",{attrs:{columns:t.columns31,data:t.data31,rowKey:"id",showSummary:!0}})],1)],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br")])}]};var p=a("VU/8")(i,r,!1,function(t){a("j1Wh")},"data-v-28e1eb7c",null);e.default=p.exports},j1Wh:function(t,e){}});