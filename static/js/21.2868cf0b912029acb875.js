webpackJsonp([21],{GK2W:function(e,t){},t41Y:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),l=a.n(r),i=a("NYxO"),o=a("Z4dx"),s={name:"MyApply",components:{CommunalPagination:function(){return a.e(159).then(a.bind(null,"jH2g"))}},created:function(){var e=this;Object(o.c)().then(function(t){e.initData=t.data})},data:function(){return{activeName:"1",dialogVisible:!1,initData:{},lifeTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",activeStatus:"",status:[]},configCostModelList:[{configCostModelCode:"001",configCostModelName:"个车模式"},{configCostModelCode:"002",configCostModelName:"车队模式"}],statusList:[{statusCode:"1",statusName:"待申报"},{statusCode:"2",statusName:"待审批"},{statusCode:"3",statusName:"已审批"},{statusCode:"4",statusName:"待修改"},{statusCode:"5",statusName:"需要重新申报"}],columns:[{prop:"org",width:120,label:"机构",align:"center"},{prop:"planVersionNo",width:240,label:"方案版本号"},{prop:"targetPremium",label:"目标保费收入（万元）",width:140},{prop:"targetCostRate",label:"目标保单成本率",width:140},{prop:"targetChangeCostRate",label:"目标变动成本率",width:140},{prop:"targetPayRate",label:"目标保单赔付率",width:140},{prop:"targetFeeRate",label:"目标保单费用率",width:140},{prop:"targetExpPayRate",label:"目标理赔费用率",width:140},{prop:"lossBizRatio",label:"亏损业务占比",width:140},{prop:"lossBizPremium",label:"严重亏损业务保费规模",width:260},{prop:"status",label:"申报状态",width:120}],data:[{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"审批驳回"},{version:"0200220180501002",org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"待审批"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"已审批-审批通过"},{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"已审批-审批通过"},{org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"已审批-审批通过"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"已审批-审批通过"},{org:"北京分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"已审批-审批通过"},{org:"天津分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"已审批-审批通过"},{org:"上海分公司",planVersionNo:"201801010011524",targetPremium:"450",targetCostRate:"95",targetChangeCostRate:"5",targetPayRate:"65",targetFeeRate:"15",targetExpPayRate:"65",lossBizRatio:"5",lossBizPremium:"45",status:"已审批-审批通过"}],currentPage:1,pageSize:5,appcolumns:[{prop:"approval",width:120,label:"审核人",align:"center"},{prop:"appOrg",width:120,label:"审核人机构",align:"center"},{prop:"nextApproval",width:120,label:"下级审核人",align:"center"},{prop:"approveTime",width:120,label:"审核时间",align:"center"},{prop:"approveAdvise",width:120,label:"审核意见",align:"center"}],appdata:[{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-01",approveAdvise:"建议修改"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-02",approveAdvise:"审核通过"},{approval:"张翰",appOrg:"北京分公司",nextApproval:"李冰",approveTime:"2018-01-03",approveAdvise:"退回"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-04",approveAdvise:"退回"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-02",approveAdvise:"审核通过"},{approval:"张翰",appOrg:"北京分公司",nextApproval:"李冰",approveTime:"2018-01-05",approveAdvise:"审核通过"},{approval:"李冰",appOrg:"总公司",nextApproval:"--",approveTime:"2018-01-06",approveAdvise:"审核通过"}]}},computed:l()({currentData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var r=t;r<a;++r)e.push(this.data[r]);return e}},Object(i.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{search:function(e,t){this.currentPage=e,this.pageSize=t,console.log(e)},modify:function(e){this.$router.push({path:"/admin/individual/declare/config"})},active:function(e){this.$router.push({path:"/admin/individual/query/detail"})},approvalDetail:function(){this.dialogVisible=!0},resetForm:function(){this.$refs.lifeTableSearchForm.resetFields()}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:e.lifeTableSearch}},[a("el-form-item",{attrs:{label:"机构名称:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.lifeTableSearch.orgCode,callback:function(t){e.$set(e.lifeTableSearch,"orgCode",t)},expression:"lifeTableSearch.orgCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本号:",prop:"version"}},[a("el-input",{model:{value:e.lifeTableSearch.version,callback:function(t){e.$set(e.lifeTableSearch,"version",t)},expression:"lifeTableSearch.version"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("查询")])],1),e._v(" "),a("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"单车",name:"1"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:e.approvalDetail}},[e._v("查看审批流")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"车队协议",name:"2"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:e.approvalDetail}},[e._v("查看审批流")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"代理协议",name:"3"}},[a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:e.approvalDetail}},[e._v("查看审批流")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)])],1),e._v(" "),a("el-dialog",{attrs:{title:"审批意见",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.appdata,stripe:"","header-cell-style":e.tableHeader}},e._l(e.appcolumns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}))],1)],1)},staticRenderFns:[]};var p=a("VU/8")(s,n,!1,function(e){a("GK2W")},"data-v-e3c6c074",null);t.default=p.exports}});