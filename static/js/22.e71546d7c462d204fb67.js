webpackJsonp([22],{"+Zqt":function(e,t){},Xk55:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),s=a.n(l),r=a("NYxO"),o=a("uXZL"),i=a.n(o),n=a("Z4dx"),p={name:"MyPlan",components:{CommunalPagination:function(){return a.e(160).then(a.bind(null,"jH2g"))}},created:function(){var e=this;Object(n.c)().then(function(t){e.initData=t.data})},data:function(){return{activeName:"1",initData:{},dialogForm:{dialogLabel:"",rowDate:""},tabName:{singlecar:"单车",carteams:"车队协议",agreement:"代理协议"},tabNames:"单车",lifeTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",checkstatuscd:[],date:"",status:[]},carTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",checkstatuscd:[],date:"",status:[]},agreeTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",checkstatuscd:[],date:"",status:[]},otherTableSearch:{configCostModel:"",orgCode:"",channel:"",version:"",approval:"",checkstatuscd:[],date:"",status:[]},dialogVisible:!1,dialogVisible1:!1,Page1:{pageNo:1,pageSize:10,total:0},activeStatusOpt:[{checkstatuscd:0,label:"未申报"},{checkstatuscd:1,label:"待审批"},{checkstatuscd:2,label:"审批中"},{checkstatuscd:3,label:"审批通过"},{checkstatuscd:4,label:"审批驳回"},{checkstatuscd:5,label:"生效"},{checkstatuscd:6,label:"失效"}],configCostModelList:[{configCostModelCode:"001",configCostModelName:"个车模式"},{configCostModelCode:"002",configCostModelName:"车队模式"}],statusList:[{statusCode:"1",statusName:"待申报"},{statusCode:"2",statusName:"待审批"},{statusCode:"3",statusName:"已审批"},{statusCode:"4",statusName:"待修改"},{statusCode:"5",statusName:"需要重新申报"}],appcolumns:[{prop:"approval",width:120,label:"当前审核人",align:"center"},{prop:"appOrg",width:120,label:"审核人机构",align:"center"},{prop:"nextApproval",width:120,label:"下级审核人",align:"center"},{prop:"approveTime",width:120,label:"审核时间",align:"center"},{prop:"approveAdvise",width:120,label:"审核意见",align:"center"}],appdata:[{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-01",approveAdvise:"建议修改"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-02",approveAdvise:"审核通过"},{approval:"张翰",appOrg:"北京分公司",nextApproval:"李冰",approveTime:"2018-01-03",approveAdvise:"退回"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-04",approveAdvise:"退回"},{approval:"孙强",appOrg:"朝阳支公司",nextApproval:"张翰",approveTime:"2018-01-02",approveAdvise:"审核通过"},{approval:"张翰",appOrg:"北京分公司",nextApproval:"李冰",approveTime:"2018-01-05",approveAdvise:"审核通过"},{approval:"李冰",appOrg:"总公司",nextApproval:"--",approveTime:"2018-01-06",approveAdvise:"审核通过"}],columns:[{prop:"planCombNo",width:120,label:"方案版本编号"},{prop:"applyer",label:"编制人",width:100},{prop:"applyDate",label:"编制完成时间",width:140},{prop:"applystatus",label:"申报状态",width:100}],columns2:[{prop:"planType",width:120,label:"方案类型"},{prop:"planVersionNo",width:240,label:"方案版本号"},{prop:"targetPremium",label:"目标保费收入(元)",width:140},{prop:"targetCostRate",label:"目标保单成本率(%)",width:140},{prop:"targetChangeCostRate",label:"目标变动成本率(%)",width:140},{prop:"targetPayRate",label:"目标保单赔付率(%)",width:140},{prop:"targetFeeRate",label:"目标保单费用率(%)",width:140},{prop:"targetExpPayRate",label:"目标理赔费用率(%)",width:140},{prop:"lossBizRatio",label:"亏损业务占比(%)",width:140},{prop:"lossBizPremium",label:"严重亏损业务保费规模(元)",width:140},{prop:"ratio",width:120,label:"历史占比(%)"}],data:[{id:"1",planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-01-01",applystatus:"未申报"},{id:"2",planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-01-01",applystatus:"待审批"},{id:"3",planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-01-01",applystatus:"审批驳回"},{id:"4",planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-01-01",applystatus:"审批通过"},{id:"5",planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-01-01",applystatus:"生效"},{id:"6",planCombNo:"20180101002587",applyer:"张翰",applyDate:"2018-01-01",applystatus:"失效"}],currentPage:1,pageSize:5,multipleSelection:[],multipleSelection1:[],multipleSelection2:[]}},computed:s()({currentData:function(){var e=[],t=(this.currentPage-1)*this.pageSize,a=this.currentPage*this.pageSize;a=a<=this.data.length?this.currentPage*this.pageSize:this.data.length;for(var l=t;l<a;++l)e.push(this.data[l]);return e}},Object(r.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{handleTabClick:function(e){this.tabNames=e.label},handleDialog:function(e){"审批通过"===e.applystatus?this.dialogForm.dialogLabel="方案生效日期：":"生效"===e.applystatus&&(this.dialogForm.dialogLabel="方式失效日期："),this.dialogVisible=!0},handleClose:function(e){e()},approvalDetail:function(){this.dialogVisible1=!0},search:function(e,t){this.currentPage=e,this.pageSize=t,console.log(e)},modify:function(e){this.$router.push({path:"/admin/individual/declare/config"})},singleModify:function(e){this.$router.push({path:"/admin/individual/declare/planConfig"})},carteamModify:function(e){this.$router.push({path:"/admin/fleet/declare/configfee/disconfigfee"})},agreementModify:function(e){this.$router.push({path:"/admin/agency/config/customDisFee/three"})},active:function(e){this.$router.push({path:"/admin/individual/myplandetail"})},detail:function(e){this.$router.push({path:"/admin/individual/query/detail",query:{tabName:this.tabNames}})},commit:function(){this.$message({type:"success",message:"提交成功!"})},resetForm:function(){this.$refs.lifeTableSearchForm.resetFields()},exportSingleData:function(e){var t=this;this.$confirm("确定导出该行数据吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){t.$message({type:"success",message:"该行数据导出成功!"});var e=["家用车","非营业客车","营业客车","营业货运","非营业货运","特种车","其他"],a={};e.forEach(function(e){a[e]=i.a.utils.table_to_sheet(document.querySelector("#single-table"))});var l=i.a.utils.book_new();if(l.SheetNames=e,l.Sheets=a,t.multipleSelection.length>0)var s=i.a.writeFile(l,"单车.xlsx");return s}).catch(function(){})},exportCarteamData:function(e,t){var a=this;console.log(e,t),this.$confirm("确定导出该"+e+"吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"info"}).then(function(){a.$message({type:"success",message:e+"导出成功!"});var l=["家用车","非营业客车","营业客车","营业货运","非营业货运","特种车","其他"],s={};l.forEach(function(e){s[e]=i.a.utils.table_to_sheet(document.querySelector("#"+t))});var r=i.a.utils.book_new();if(r.SheetNames=l,r.Sheets=s,a.multipleSelection.length>0)var o=i.a.writeFile(r,e+".xlsx");return o}).catch(function(){})},handleSelectionChange:function(e){this.multipleSelection=e},handleSelectionChange1:function(e){this.multipleSelection1=e},handleSelectionChange2:function(e){this.multipleSelection2=e}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"biz-content"},[a("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":e.handleTabClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:e.tabName.singlecar,name:"1"}},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:e.lifeTableSearch}},[a("el-form-item",{attrs:{label:"机构名称:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.lifeTableSearch.orgCode,callback:function(t){e.$set(e.lifeTableSearch,"orgCode",t)},expression:"lifeTableSearch.orgCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本编号:",prop:"version"}},[a("el-input",{model:{value:e.lifeTableSearch.version,callback:function(t){e.$set(e.lifeTableSearch,"version",t)},expression:"lifeTableSearch.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择申报状态"},model:{value:e.lifeTableSearch.checkstatuscd,callback:function(t){e.$set(e.lifeTableSearch,"checkstatuscd",t)},expression:"lifeTableSearch.checkstatuscd"}},e._l(e.activeStatusOpt,function(e){return a("el-option",{key:e.checkstatuscd,attrs:{label:e.label,value:e.checkstatuscd}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"编制完成时间范围:",prop:"date","label-width":"145px"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.lifeTableSearch.date,callback:function(t){e.$set(e.lifeTableSearch,"date",t)},expression:"lifeTableSearch.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"btns"}},[a("div",{},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("查询")])],1)])],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{id:"single-table",data:e.currentData,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"未申报"===t.row.applystatus||"审批驳回"===t.row.applystatus,expression:"scope.row.applystatus === '未申报' ||\n                scope.row.applystatus === '审批驳回'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.singleModify(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"未申报"===t.row.applystatus,expression:"scope.row.applystatus === '未申报'"}],attrs:{type:"text",size:"small"},on:{click:e.commit}},[e._v("提交")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"待审批"===t.row.applystatus,expression:"scope.row.applystatus === '待审批'"}],attrs:{type:"text",size:"small"}},[e._v("撤销")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"待审批"===t.row.applystatus||"审批驳回"===t.row.applystatus,expression:"scope.row.applystatus === '待审批' || scope.row.applystatus === '审批驳回'"}],attrs:{type:"text",size:"small"},on:{click:e.approvalDetail}},[e._v("查看审批流")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"审批通过"===t.row.applystatus,expression:"scope.row.applystatus === '审批通过'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDialog(t.row)}}},[e._v("激活")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"生效"===t.row.applystatus,expression:"scope.row.applystatus === '生效'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.exportSingleData(t.row)}}},[e._v("输出")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"生效"===t.row.applystatus,expression:"scope.row.applystatus === '生效'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDialog(t.row)}}},[e._v("失效")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:e.tabName.carteams,name:"2"}},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:e.carTableSearch}},[a("el-form-item",{attrs:{label:"机构名称:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.carTableSearch.orgCode,callback:function(t){e.$set(e.carTableSearch,"orgCode",t)},expression:"carTableSearch.orgCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本编号:",prop:"version"}},[a("el-input",{model:{value:e.carTableSearch.version,callback:function(t){e.$set(e.carTableSearch,"version",t)},expression:"carTableSearch.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择申报状态"},model:{value:e.carTableSearch.checkstatuscd,callback:function(t){e.$set(e.carTableSearch,"checkstatuscd",t)},expression:"carTableSearch.checkstatuscd"}},e._l(e.activeStatusOpt,function(e){return a("el-option",{key:e.checkstatuscd,attrs:{label:e.label,value:e.checkstatuscd}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"编制完成时间范围:",prop:"date","label-width":"130px"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.carTableSearch.date,callback:function(t){e.$set(e.carTableSearch,"date",t)},expression:"carTableSearch.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"btns"}},[a("div",{},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("查询")])],1)])],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("p",{staticStyle:{width:"100%","text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.exportCarteamData("车队协议","carteam-table")}}},[e._v("输出")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{id:"carteam-table",data:e.currentData,stripe:"","header-cell-style":e.tableHeader},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"未申报"===t.row.applystatus||"审批驳回"===t.row.applystatus,expression:"scope.row.applystatus === '未申报' ||\n                scope.row.applystatus === '审批驳回'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.carteamModify(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"未申报"===t.row.applystatus,expression:"scope.row.applystatus === '未申报'"}],attrs:{type:"text",size:"small"},on:{click:e.commit}},[e._v("提交")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"待审批"===t.row.applystatus,expression:"scope.row.applystatus === '待审批'"}],attrs:{type:"text",size:"small"}},[e._v("撤销")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"待审批"===t.row.applystatus||"审批驳回"===t.row.applystatus,expression:"scope.row.applystatus === '待审批' || scope.row.applystatus === '审批驳回'"}],attrs:{type:"text",size:"small"}},[e._v("查看审批流")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"审批通过"===t.row.applystatus,expression:"scope.row.applystatus === '审批通过'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDialog(t.row)}}},[e._v("激活")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"生效"===t.row.applystatus,expression:"scope.row.applystatus === '生效'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDialog(t.row)}}},[e._v("失效")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:e.tabName.agreement,name:"3"}},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:e.agreeTableSearch}},[a("el-form-item",{attrs:{label:"机构名称:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.agreeTableSearch.orgCode,callback:function(t){e.$set(e.agreeTableSearch,"orgCode",t)},expression:"agreeTableSearch.orgCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本编号:",prop:"version"}},[a("el-input",{model:{value:e.agreeTableSearch.version,callback:function(t){e.$set(e.agreeTableSearch,"version",t)},expression:"agreeTableSearch.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择申报状态"},model:{value:e.agreeTableSearch.checkstatuscd,callback:function(t){e.$set(e.agreeTableSearch,"checkstatuscd",t)},expression:"agreeTableSearch.checkstatuscd"}},e._l(e.activeStatusOpt,function(e){return a("el-option",{key:e.checkstatuscd,attrs:{label:e.label,value:e.checkstatuscd}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"编制完成时间范围:",prop:"date","label-width":"130px"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.agreeTableSearch.date,callback:function(t){e.$set(e.agreeTableSearch,"date",t)},expression:"agreeTableSearch.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"btns"}},[a("div",{},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("查询")])],1)])],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("p",{staticStyle:{width:"100%","text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.exportCarteamData("代理协议","agreement-table")}}},[e._v("输出")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{id:"agreement-table",data:e.currentData,stripe:"","header-cell-style":e.tableHeader},on:{"selection-change":e.handleSelectionChange1}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"未申报"===t.row.applystatus||"审批驳回"===t.row.applystatus,expression:"scope.row.applystatus === '未申报' ||\n                scope.row.applystatus === '审批驳回'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.agreementModify(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"未申报"===t.row.applystatus,expression:"scope.row.applystatus === '未申报'"}],attrs:{type:"text",size:"small"},on:{click:e.commit}},[e._v("提交")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"待审批"===t.row.applystatus,expression:"scope.row.applystatus === '待审批'"}],attrs:{type:"text",size:"small"}},[e._v("撤销")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"待审批"===t.row.applystatus||"审批驳回"===t.row.applystatus,expression:"scope.row.applystatus === '待审批' || scope.row.applystatus === '审批驳回'"}],attrs:{type:"text",size:"small"}},[e._v("查看审批流")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"审批通过"===t.row.applystatus,expression:"scope.row.applystatus === '审批通过'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDialog(t.row)}}},[e._v("激活")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"生效"===t.row.applystatus,expression:"scope.row.applystatus === '生效'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDialog(t.row)}}},[e._v("失效")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"其他",name:"4"}},[a("div",{staticClass:"form"},[a("el-form",{ref:"lifeTableSearchForm",attrs:{"label-width":"120px",inline:!0,model:e.otherTableSearch}},[a("el-form-item",{attrs:{label:"机构名称:",prop:"orgCode"}},[a("el-select",{attrs:{placeholder:"请选择机构"},model:{value:e.otherTableSearch.orgCode,callback:function(t){e.$set(e.otherTableSearch,"orgCode",t)},expression:"otherTableSearch.orgCode"}},e._l(e.initData.companyList,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.name}},[1===t.flag?a("span",[e._v(" ")]):2===t.flag?a("span",[e._v("   ")]):e._e(),e._v(" "),a("span",[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"版本编号:",prop:"version"}},[a("el-input",{model:{value:e.otherTableSearch.version,callback:function(t){e.$set(e.otherTableSearch,"version",t)},expression:"otherTableSearch.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申报状态:",prop:"status"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择申报状态"},model:{value:e.otherTableSearch.checkstatuscd,callback:function(t){e.$set(e.otherTableSearch,"checkstatuscd",t)},expression:"otherTableSearch.checkstatuscd"}},e._l(e.activeStatusOpt,function(e){return a("el-option",{key:e.checkstatuscd,attrs:{label:e.label,value:e.checkstatuscd}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"编制完成时间范围:",prop:"date","label-width":"130px"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.otherTableSearch.date,callback:function(t){e.$set(e.otherTableSearch,"date",t)},expression:"otherTableSearch.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"",prop:"btns"}},[a("div",{},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.resetForm}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small",plain:""}},[e._v("查询")])],1)])],1)],1),e._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("p",{staticStyle:{width:"100%","text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.exportCarteamData("其他","other-table")}}},[e._v("输出")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{id:"other-table",data:e.currentData,stripe:"","header-cell-style":e.tableHeader},on:{"selection-change":e.handleSelectionChange2}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.columns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),a("el-table-column",{attrs:{"header-align":"center",align:"center",label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.detail(t.row)}}},[e._v("查看")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"未申报"===t.row.applystatus||"审批驳回"===t.row.applystatus,expression:"scope.row.applystatus === '未申报' ||\n                scope.row.applystatus === '审批驳回'"}],attrs:{type:"text",size:"small"}},[e._v("修改")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"未申报"===t.row.applystatus,expression:"scope.row.applystatus === '未申报'"}],attrs:{type:"text",size:"small"},on:{click:e.commit}},[e._v("提交")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"待审批"===t.row.applystatus,expression:"scope.row.applystatus === '待审批'"}],attrs:{type:"text",size:"small"}},[e._v("撤销")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"待审批"===t.row.applystatus||"审批驳回"===t.row.applystatus,expression:"scope.row.applystatus === '待审批' || scope.row.applystatus === '审批驳回'"}],attrs:{type:"text",size:"small"}},[e._v("查看审批流")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"审批通过"===t.row.applystatus,expression:"scope.row.applystatus === '审批通过'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDialog(t.row)}}},[e._v("激活")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"生效"===t.row.applystatus,expression:"scope.row.applystatus === '生效'"}],attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDialog(t.row)}}},[e._v("失效")])]}}])})],2)],1),e._v(" "),a("communal-pagination",{attrs:{currentPage:e.currentPage,pageSize:e.pageSize,total:e.data.length},on:{search:e.search}})],1)])],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"36%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"dialogForm",attrs:{"label-width":"130px",inline:!0,model:e.dialogForm}},[a("el-form-item",{attrs:{label:e.dialogForm.dialogLabel,prop:"date","label-width":"130px"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.dialogForm.rowDate,callback:function(t){e.$set(e.dialogForm,"rowDate",t)},expression:"dialogForm.rowDate"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"审批意见",visible:e.dialogVisible1,width:"60%"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.appdata,stripe:"","header-cell-style":e.tableHeader}},e._l(e.appcolumns,function(e){return a("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}))],1)],1)},staticRenderFns:[]};var u=a("VU/8")(p,c,!1,function(e){a("+Zqt")},"data-v-d20cd28a",null);t.default=u.exports}});