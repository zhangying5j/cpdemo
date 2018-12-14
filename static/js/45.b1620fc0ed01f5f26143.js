webpackJsonp([45],{"F/vg":function(e,t){},YKZQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"List",components:{BaseTable:function(){return a.e(141).then(a.bind(null,"ss0d"))}},data:function(){return{param:{orgcd:"01000"},companyList:[{code:"01000",name:"北京分公司",flag:1},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],columns:[{prop:"org",width:120,label:"机构名称"},{prop:"importnm",width:120,label:"操作人"},{prop:"importtime",width:120,label:"操作时间"},{prop:"status",width:120,label:"状态"},{prop:"operation",width:"360",label:"操作",operation:!0,operations:[{text:"导入",event:"importdata"},{text:"导出",event:"exportdata"},{text:"查看",event:"detail"}]}],data:[{id:"1",org:"北京分公司",importnm:"张翰",importtime:"2018-01-01 10:00",status:"已导入"},{id:"2",org:"上海分公司",importnm:"李磊",importtime:"2018-01-01 10:00",status:"已导入"},{id:"3",org:"江苏省分公司",importnm:"王梅",importtime:"2018-01-01 10:00",status:"已导入"},{id:"4",org:"天津分公司",importnm:"--",importtime:"--",status:"未导入"},{id:"5",org:"河南分公司",importnm:"--",importtime:"--",status:"未导入"}]}},methods:{query:function(){},mutilImportData:function(){this.$message({type:"success",message:"数据批量导入成功!"})},mutilExportData:function(){this.$message({type:"success",message:"数据批量导出成功!"})},importdata:function(e){var t=this,a=this.data.find(function(t){return t.id===e});"已导入"===a.status?this.$confirm("已有导入的数据，确定覆盖已有数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"数据导入成功!"})}).catch(function(){}):"未导入"===a.status&&this.$message({type:"success",message:"数据导入成功!"})},exportdata:function(e){var t=this,a=this.data.find(function(t){return t.id===e});"已导入"===a.status?this.$confirm("确定导出数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"数据导出成功!"})}).catch(function(){}):"未导入"===a.status&&this.$message({type:"error",message:"机构未导入数据，不能导出!"})},detail:function(e){var t=this.data.find(function(t){return t.id===e});"已导入"===t.status?this.$router.push("/admin/budget/newbudget/detail"):"未导入"===t.status&&this.$message({type:"error",message:"机构未导入数据，不能查看!"})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iv-container"},[a("div",{staticClass:"form"},[a("el-form",{attrs:{inline:!0,size:"small",model:e.param}},[a("el-form-item",{attrs:{label:"机构名称",prop:"orgcd"}},[a("el-select",{attrs:{placeholder:"请选择机构名称",size:"medium"},model:{value:e.param.orgcd,callback:function(t){e.$set(e.param,"orgcd",t)},expression:"param.orgcd"}},e._l(e.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{plain:"",size:"middle",type:"primary"}},[e._v("下载模板")]),e._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.mutilImportData}},[e._v("批量导入")]),e._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.mutilExportData}},[e._v("批量导出")])],1)],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{attrs:{calss:"table"}},[a("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"id"},on:{importdata:e.importdata,exportdata:e.exportdata,detail:e.detail}})],1)])])},staticRenderFns:[]};var s=a("VU/8")(n,o,!1,function(e){a("F/vg")},"data-v-7ff3cc4a",null);t.default=s.exports}});