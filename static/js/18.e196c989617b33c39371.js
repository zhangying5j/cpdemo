webpackJsonp([18],{pPXg:function(t,o){},wOAv:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r={name:"BudgetDiscount",components:{BaseTable:function(){return i.e(150).then(i.bind(null,"ss0d"))}},data:function(){return{columns:[{prop:"org",label:"机构",width:"120"},{prop:"autoDown",label:"自主折扣系数下限",width:150,isEdit:!1,type:"input"},{prop:"autoUp",label:"自主折扣系数上限",width:150,isEdit:!1,type:"input"},{prop:"channelDown",label:"自主核保系数下限",width:"150",isEdit:!1,type:"input"},{prop:"channelUp",label:"自主核保系数上限",width:"150",isEdit:!1,type:"input"},{prop:"protectDown",label:"自主渠道系数下限",width:"150",isEdit:!1,type:"input"},{prop:"protectUp",label:"自主渠道系数上限",width:"150",isEdit:!1,type:"input"}],data:[]}},methods:{query:function(){this.data=[{org:"北京分公司"},{org:"山西省分公司"},{org:"山东省分公司"},{org:"江苏省分公司"},{org:"黑龙江省分公司"},{org:"重庆市分公司"},{org:"河南省分公司"},{org:"上海市分公司"},{org:"广东省分公司"},{org:"深圳市分公司"},{org:"天津市分公司"},{org:"青岛分公司"},{org:"辽宁省分公司"},{org:"河北省分公司"},{org:"海南省分公司"},{org:"广西分公司"},{org:"湖南省分公司"},{org:"浙江省分公司"},{org:"贵州省分公司"},{org:"四川省分公司"},{org:"青海省分公司"},{org:"云南省分公司"},{org:"陕西省分公司"},{org:"湖北省分公司"},{org:"吉林省分公司"},{org:"新疆分公司"},{org:"宁波市分公司"},{org:"大连市分公司"},{org:"甘肃省分公司"},{org:"安徽省分公司"},{org:"江西省分公司"},{org:"福建省分公司"},{org:"内蒙古分公司"},{org:"厦门市分公司"},{org:"宁夏自治区分公司"},{org:"西藏自治区分公司"}]},edit:function(){this.columns.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!0)})},save:function(){this.columns.forEach(function(t){void 0!==t.isEdit&&(t.isEdit=!1)})}}},e={render:function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"container"},[i("div",{staticClass:"option"},[i("el-button",{attrs:{plain:"",size:"middle",type:"primary"}},[t._v("下载模板")]),t._v(" "),i("el-button",{attrs:{plain:"",size:"middle",type:"primary"},on:{click:t.query}},[t._v("导入")]),t._v(" "),i("el-button",{attrs:{plain:"",size:"middle",type:"primary"},on:{click:t.edit}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{plain:"",size:"middle",type:"primary"},on:{click:t.save}},[t._v("保存")])],1),t._v(" "),i("div",{staticClass:"data"},[i("div",{staticClass:"table"},[i("base-table",{attrs:{columns:t.columns,data:t.data,rowKey:"id"}})],1)])])},staticRenderFns:[]};var n=i("VU/8")(r,e,!1,function(t){i("pPXg")},"data-v-eef23a02",null);o.default=n.exports}});