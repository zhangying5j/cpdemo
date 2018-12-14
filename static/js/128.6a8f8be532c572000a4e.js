webpackJsonp([128],{TG9w:function(e,t,a){"use strict";t.d=function(e){return Object(i.a)({url:"/api/admin/user/page",method:"get",params:e})},t.a=function(e){return Object(i.a)({url:"/api/admin/user",method:"post",data:e})},t.c=function(e){return Object(i.a)({url:"/api/admin/user/"+e,method:"get"})},t.b=function(e){return Object(i.a)({url:"/api/admin/user/"+e,method:"delete"})},t.e=function(e,t){return Object(i.a)({url:"/api/admin/user/"+e,method:"put",data:t})};var i=a("vLgD")},p3rn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),r=a("TG9w"),s=a("NYxO"),l={name:"user",components:{DataAuthority:function(){return a.e(164).then(a.bind(null,"HX6m"))}},data:function(){return{form:{username:void 0,name:void 0,sex:"男",password:void 0,description:void 0},rules:{name:[{required:!0,message:"请输入用户",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],username:[{required:!0,message:"请输入账户",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,max:20,message:"长度在 5 到 20 个字符",trigger:"blur"}]},list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,name:void 0},sexOptions:["男","女"],dialogFormVisible:!1,dialogStatus:"",userManager_btn_edit:!1,userManager_btn_del:!1,userManager_btn_add:!1,textMap:{update:"编辑",create:"创建"},tableKey:0,currentUserId:"",dataAuthorityVisible:!1}},created:function(){this.getList(),this.userManager_btn_edit=this.elements["userManager:btn_edit"],this.userManager_btn_del=this.elements["userManager:btn_del"],this.userManager_btn_add=this.elements["userManager:btn_add"]},computed:n()({},Object(s.c)(["elements"])),methods:{getList:function(){var e=this;this.listLoading=!0,Object(r.d)(this.listQuery).then(function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleCreate:function(){this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0},handleUpdate:function(e){var t=this;Object(r.c)(e.id).then(function(e){t.form=e.data,t.dialogFormVisible=!0,t.dialogStatus="update"})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.b)(e.id).then(function(){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var a=t.list.indexOf(e);t.list.splice(a,1)})})},configDataAuthority:function(e){this.dataAuthorityVisible=!0,this.currentUserId=e.id},closeDataAuthority:function(){this.dataAuthorityVisible=!1},create:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;Object(r.a)(t.form).then(function(){t.dialogFormVisible=!1,t.list.push(t.form),t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},cancel:function(e){this.dialogFormVisible=!1,this.$refs[e].resetFields()},update:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.dialogFormVisible=!1,t.form.password=void 0,Object(r.e)(t.form.id,t.form).then(function(){t.dialogFormVisible=!1;var e=t.list.findIndex(function(e){return e.id===t.form.id});t.$set(t.list,e,t.form),t.$notify({title:"成功",message:"修改成功",type:"success",duration:2e3})})})},resetTemp:function(){this.form={username:void 0,name:void 0,sex:"男",password:void 0,description:void 0}}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"姓名或账户"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleFilter(t):null}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),e.userManager_btn_add?a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("添加\n    ")]):e._e()],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"65"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200",align:"center",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"120",align:"center",label:"账户"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.username))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"110",align:"center",label:"性别"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.sex))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200",align:"center",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.description))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"180",align:"center",label:"最后时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.updTime))])]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"200",align:"center",label:"最后更新人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.updName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.userManager_btn_edit?a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("编辑\n        ")]):e._e(),e._v(" "),e.userManager_btn_del?a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v("删除\n        ")]):e._e(),e._v(" "),e.userManager_btn_del?a("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(a){e.configDataAuthority(t.row)}}},[e._v("配置数据权限\n        ")]):e._e()]}}])})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"姓名",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"账户",prop:"username"}},["create"==e.dialogStatus?a("el-input",{attrs:{placeholder:"请输入账户"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}):a("el-input",{attrs:{placeholder:"请输入账户",readonly:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),"create"==e.dialogStatus?a("el-form-item",{attrs:{label:"密码",placeholder:"请输入密码",prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),e._v(" "),a("el-form-item",{staticStyle:{"text-align":"left"},attrs:{label:"性别"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.sexOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请输入内容"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.cancel("form")}}},[e._v("取 消")]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.create("form")}}},[e._v("确 定")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.update("form")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"配置数据权限",size:"large",visible:e.dataAuthorityVisible},on:{"update:visible":function(t){e.dataAuthorityVisible=t}}},[a("data-authority",{ref:"dataAuthority",attrs:{userId:e.currentUserId},on:{closeDataAuthority:e.closeDataAuthority}})],1)],1)},staticRenderFns:[]},u=a("VU/8")(l,o,!1,null,null,null);t.default=u.exports}});