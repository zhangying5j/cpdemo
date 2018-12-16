webpackJsonp([62],{D84u:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("Dd8w"),r=t.n(l),o=t("NYxO"),p={name:"Price",components:{BaseTable:function(){return t.e(150).then(t.bind(null,"ss0d"))}},created:function(){},data:function(){return{currentPage:1,pageSize:5,agency:{companyCode:"",policyHolder:"",protocolCode:"",salesMan:"",isIncludeSub:"y",sort:[],submitTimeStart:"",submitTimeEnd:"",status:[]},options:[{value:"level",label:"级别",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]},{value:"firstSubmit",label:"第一次提交时间",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]},{value:"company",label:"机构",children:[{value:"asc",label:"升序"},{value:"desc",label:"降序"}]}],columns:[{prop:"agencyNo",width:200,label:"编号"},{prop:"agentNm",width:180,label:"名称"},{prop:"ownOrg",width:260,label:"归属机构"},{prop:"policyHolder",width:120,label:"业务单元"},{prop:"createTime",width:200,label:"自主折扣率"},{prop:"level",width:120,label:"手续费率"},{prop:"expbpayrate",width:120,label:"预期标费赔付率"},{prop:"hisbfullpayrate",width:120,label:"标费满期赔付率"},{prop:"personexppayrate",width:120,label:"核保人预估标费赔付率"},{prop:"realmanageCost",width:120,label:"自主折扣率"},{prop:"realserviceCost",width:120,label:"手续费率"},{prop:"realbjCostRate",width:120,label:"边际成本率"},{prop:"exppayrate",width:120,label:"预估赔付率"},{prop:"shouldpayRate",width:140,label:"理赔费用率(%)"},{prop:"marketdriverate",width:120,label:"营销推动费用率"},{prop:"salecostrate",width:120,label:"销售人力成本率"},{prop:"award",width:120,label:"其他费用率(%)"},{prop:"fixdefeerate",width:120,label:"固定费用率"},{prop:"changecosttate",width:120,label:"变动成本率"},{prop:"realcostRate",width:140,label:"保单成本率"},{prop:"realfeeRate",width:140,label:"保单费用率"},{prop:"realpayRate",width:140,label:"保单赔付率"},{prop:"operation",width:120,label:"操作",align:"center",operation:!0,operations:[{text:"编辑",event:"edit"}]}],data:[{agencyNo:"50000100001",agent:"晋投保险经纪有限公司",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",cartype:"家用车",premium:953,expbpayrate:60,hisbfullpayrate:65,personexppayrate:66,realmanageCost:1.2,exppayrate:65,shouldpayRate:67,realserviceCost:16,marketdriverate:6,salecostrate:17,award:3,fixdefeerate:4,changecosttate:3,realcostRate:95,realfeeRate:16,realpayRate:65},{agencyNo:"50000100003",agent:"晋投保险经纪有限公司2",ownOrg:"山西省分公司太原支公司",policyHolder:"张翰",createTime:"2018/01/01",level:"初审",cartype:"家用车",premium:953,expbpayrate:60,hisbfullpayrate:65,personexppayrate:66,realmanageCost:1.2,exppayrate:65,shouldpayRate:67,realserviceCost:16,marketdriverate:6,salecostrate:17,award:3,fixdefeerate:4,changecosttate:3,realcostRate:95,realfeeRate:16,realpayRate:65}]}},computed:r()({curApprovalData:function(){var e=[],a=(this.currentPage-1)*this.pageSize,t=this.currentPage*this.pageSize;t=t>this.approvalData.length?this.approvalData.length:t;for(var l=a;l<t;++l)e.push(this.approvalData[l]);return e}},Object(o.d)({configFormData:function(e){return e.agency.configFormData}})),methods:{resetForm:function(){this.approval.status=[]},query:function(){this.currentPage=1},createNew:function(){this.$router.push({path:"/admin/agency/change/configfee"})},dataChange:function(e,a){this.pageSize=e,this.currentPage=a},approval:function(){this.$router.push({path:"/admin/agency/approval/approval"})}}},i={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("div",{staticClass:"form"},[t("el-form",{attrs:{"label-width":"120px",inline:!0,model:e.agency}},[t("el-form-item",{attrs:{label:"归属代码:",prop:"companyCode"}},[t("el-select",{attrs:{placeholder:"请选择机构代码",size:"medium"},model:{value:e.agency.companyCode,callback:function(a){e.$set(e.agency,"companyCode",a)},expression:"agency.companyCode"}},e._l(e.configFormData.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"日期范围:",prop:"submitTime"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"起始时间段"},model:{value:e.agency.submitTimeStart,callback:function(a){e.$set(e.agency,"submitTimeStart",a)},expression:"agency.submitTimeStart"}})],1),e._v(" "),t("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),t("el-col",{attrs:{span:11}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"结束时间段"},model:{value:e.agency.submitTimeEnd,callback:function(a){e.$set(e.agency,"submitTimeEnd",a)},expression:"agency.submitTimeEnd"}})],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"编号:",prop:"protocolCode"}},[t("el-input",{model:{value:e.agency.protocolCode,callback:function(a){e.$set(e.agency,"protocolCode",a)},expression:"agency.protocolCode"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"名称:",prop:"protocolCode"}},[t("el-input",{model:{value:e.agency.protocolCode,callback:function(a){e.$set(e.agency,"protocolCode",a)},expression:"agency.protocolCode"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.query}},[e._v("查询")]),e._v(" "),t("el-button",{attrs:{plain:"",type:"primary",size:"small"},on:{click:e.createNew}},[e._v("新建")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"agencyNo"}})],1)])])},staticRenderFns:[]};var n=t("VU/8")(p,i,!1,function(e){t("jy2E")},"data-v-71f0f4da",null);a.default=n.exports},jy2E:function(e,a){}});