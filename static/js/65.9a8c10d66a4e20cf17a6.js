webpackJsonp([65],{"2DyM":function(e,a){},N5hc:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("Dd8w"),l=t.n(i),r=t("NYxO"),s={name:"CommonInfo",components:{BaseTable:function(){return t.e(153).then(t.bind(null,"ss0d"))}},data:function(){return{queryData:{usePro:[],carType:"",carColor:""},editFlag:!1,labelList:[{code:"carInfoBatch",name:"投保车辆(批量)"},{code:"carInfoSingle",name:"投保车辆(单条)"},{code:"insProto",name:"投保组合"},{code:"carInsType",name:"车险种类"}],rules:{usePro:[{required:!0,trigger:"change",message:"查询条件不能为空"}],carType:[{required:!0,trigger:"change",message:"查询条件不能为空"}],carColor:[{required:!0,trigger:"blur",message:"查询条件不能为空"}]},useProList:[{code:"001",name:"家庭自用"},{code:"002",name:"营业出租租赁"},{code:"003",name:"营业公路客运"},{code:"004",name:"营业城市公交"},{code:"005",name:"营业旅游"},{code:"006",name:"营业货车"},{code:"007",name:"非营业机关"},{code:"008",name:"非营业企业"}],carTypeList:[{code:"001",name:"客车"},{code:"002",name:"货车"},{code:"003",name:"挂车"}],batchColumns:[{prop:"usePro",label:"使用性质",width:100,isEdit:!1,type:"select",options:[{value:"001",label:"家庭自用"},{value:"002",label:"营业出租租赁"},{value:"003",label:"营业公路客运"},{value:"004",label:"营业城市公交"},{value:"005",label:"营业旅游"},{value:"006",label:"营业货车"},{value:"007",label:"非营业机关"},{value:"008",label:"非营业企业"}]},{prop:"carType",label:"车辆种类",width:100,isEdit:!1,type:"select",options:[{value:"001",label:"客车"},{value:"002",label:"货车"},{value:"003",label:"挂车"}]},{prop:"carColor",label:"车辆颜色",width:100,isEdit:!1,type:"input"},{prop:"userName",label:"车主姓名",width:100},{prop:"buyTime",label:"购车时间",width:100,isEdit:!1,type:"input"},{prop:"isForce",label:"是否购买交强险",width:100,isEdit:!1,type:"select",options:[{value:"1",label:"是"},{value:"0",label:"否"}]}],batchData:[{id:1,usePro:"家庭自用",carType:"客车",carColor:"黑色",userName:"张翰",buyTime:"2018/01/01",isForce:"是"},{id:2,usePro:"营业出租租赁",carType:"货车",carColor:"军绿色",userName:"王梅",buyTime:"2016/02/01",isForce:"否"},{id:3,usePro:"营业公路客运",carType:"挂车",carColor:"橙色",userName:"李莉",buyTime:"2017/01/31",isForce:"是"},{id:4,usePro:"营业城市公交",carType:"客车",carColor:"红色",userName:"孙强",buyTime:"2016/02/02",isForce:"否"},{id:5,usePro:"营业旅游",carType:"货车",carColor:"渐变紫",userName:"赵楠",buyTime:"2018/01/16",isForce:"是"},{id:6,usePro:"营业货车",carType:"挂车",carColor:"迷彩色",userName:"钱峰",buyTime:"2017/09/09",isForce:"否"},{id:7,usePro:"非营业机关",carType:"客车",carColor:"银色",userName:"周福",buyTime:"2018/04/02",isForce:"是"},{id:8,usePro:"非营业企业",carType:"货车",carColor:"白色",userName:"郑军",buyTime:"2018/05/01",isForce:"否"}],singleColumns:[{prop:"usePro",label:"使用性质",width:100},{prop:"carType",label:"车辆种类",width:100},{prop:"carColor",label:"车辆颜色",width:100},{prop:"userName",label:"车主姓名",width:100},{prop:"buyTime",label:"购车时间",width:100},{prop:"isForce",label:"是否购买交强险",width:100},{prop:"operation",label:"操作",width:100,operation:!0,operations:[{text:"编辑",event:"singleEdit"}]}],singleData:[{id:1,usePro:"家庭自用",carType:"客车",carColor:"黑色",userName:"张翰",buyTime:"2018/01/01",isForce:"是",isEdit:!1},{id:2,usePro:"营业出租租赁",carType:"货车",carColor:"军绿色",userName:"王梅",buyTime:"2016/02/01",isForce:"否",isEdit:!1},{id:3,usePro:"营业公路客运",carType:"挂车",carColor:"橙色",userName:"李莉",buyTime:"2017/01/31",isForce:"是",isEdit:!1},{id:4,usePro:"营业城市公交",carType:"客车",carColor:"红色",userName:"孙强",buyTime:"2016/02/02",isForce:"否",isEdit:!1},{id:5,usePro:"营业旅游",carType:"货车",carColor:"渐变紫",userName:"赵楠",buyTime:"2018/01/16",isForce:"是",isEdit:!1},{id:6,usePro:"营业货车",carType:"挂车",carColor:"迷彩色",userName:"钱峰",buyTime:"2017/09/09",isForce:"否",isEdit:!1},{id:7,usePro:"非营业机关",carType:"客车",carColor:"银色",userName:"周福",buyTime:"2018/04/02",isForce:"是",isEdit:!1},{id:8,usePro:"非营业企业",carType:"货车",carColor:"白色",userName:"郑军",buyTime:"2018/05/01",isForce:"否",isEdit:!1}],formHidden:!1,batchDataHidden:!1,singleDataHidden:!0,editDialogVisible:!1,single:{usePro:["001"],carType:"001",carColor:"黑色",userName:"张翰",buyTime:"2018/01/01",isForce:"yes"}}},methods:{switchTab:function(e){"carInfoBatch"===e?(this.formHidden=!1,this.batchDataHidden=!1,this.singleDataHidden=!0):"carInfoSingle"===e?(this.formHidden=!1,this.batchDataHidden=!0,this.singleDataHidden=!1):(this.formHidden=!0,this.batchDataHidden=!0,this.singleDataHidden=!0)},query:function(){},edit:function(){this.batchColumns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!0)}),this.editFlag=!0},save:function(){this.batchColumns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!1)}),this.editFlag=!1},singleEdit:function(){this.editDialogVisible=!0}},computed:l()({},Object(r.d)({tableHeader:function(e){return e.app.tableHeader}}))},o={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:4}},[t("div",{staticClass:"grid-content bg-purple dimension-dialog"},[t("div",{staticClass:"dimension"},e._l(e.labelList,function(a){return t("div",{key:a.code,staticClass:"item",on:{click:function(t){e.switchTab(a.code)}}},[t("span",[e._v(e._s(a.name))])])}))])]),e._v(" "),t("el-col",{attrs:{span:20}},[t("div",{staticClass:"container"},[t("div",{staticClass:"form",attrs:{hidden:e.formHidden},on:{"update:hidden":function(a){e.formHidden=a}}},[t("el-form",{ref:"queryForm",attrs:{"label-width":"180px",model:e.queryData,rules:e.rules,inline:!0}},[t("el-form-item",{attrs:{label:"使用性质",prop:"carType"}},[t("el-select",{attrs:{placeholder:"请选择使用性质",multiple:!0},model:{value:e.queryData.usePro,callback:function(a){e.$set(e.queryData,"usePro",a)},expression:"queryData.usePro"}},e._l(e.useProList,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"车辆种类",prop:"carType"}},[t("el-select",{attrs:{placeholder:"请选择车辆种类"},model:{value:e.queryData.carType,callback:function(a){e.$set(e.queryData,"carType",a)},expression:"queryData.carType"}},e._l(e.carTypeList,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"车辆颜色",prop:"carColor"}},[t("el-input",{attrs:{placeholder:"请填写车辆颜色"},model:{value:e.queryData.carColor,callback:function(a){e.$set(e.queryData,"carColor",a)},expression:"queryData.carColor"}})],1)],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.query}},[e._v("查询")])],1),e._v(" "),t("div",{staticClass:"data",attrs:{hidden:e.batchDataHidden},on:{"update:hidden":function(a){e.batchDataHidden=a}}},[t("div",{staticClass:"title"},[t("div",{staticClass:"btn"},[t("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.editFlag,expression:"!editFlag"}],attrs:{type:"primary",plain:"",size:"small"},on:{click:e.edit}},[e._v("编辑")]),e._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.editFlag,expression:"editFlag"}],attrs:{type:"primary",plain:"",size:"small"},on:{click:e.save}},[e._v("保存")])],1)]),e._v(" "),t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.batchColumns,data:e.batchData,rowKey:"id"}})],1)]),e._v(" "),t("div",{staticClass:"data",attrs:{hidden:e.singleDataHidden},on:{"update:hidden":function(a){e.singleDataHidden=a}}},[t("div",{staticClass:"table"},[t("base-table",{attrs:{columns:e.singleColumns,data:e.singleData,rowKey:"id"},on:{singleEdit:e.singleEdit}})],1)])])])],1),e._v(" "),t("el-dialog",{attrs:{title:"编辑",visible:e.editDialogVisible,width:"35%"},on:{"update:visible":function(a){e.editDialogVisible=a}}},[t("div",{staticClass:"dialogForm"},[t("el-form",{attrs:{"label-width":"200px",inline:!0,size:"small",model:e.single}},[t("el-form-item",{attrs:{label:"使用性质:",prop:"usePro"}},[t("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择使用性质",multiple:!0},model:{value:e.single.usePro,callback:function(a){e.$set(e.single,"usePro",a)},expression:"single.usePro"}},e._l(e.useProList,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"车辆种类:",prop:"carType"}},[t("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择车辆种类"},model:{value:e.single.carType,callback:function(a){e.$set(e.single,"carType",a)},expression:"single.carType"}},e._l(e.carTypeList,function(e){return t("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"车辆颜色:",prop:"carColor"}},[t("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写车辆颜色"},model:{value:e.single.carColor,callback:function(a){e.$set(e.single,"carColor",a)},expression:"single.carColor"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"车主姓名:",prop:"userName"}},[t("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写车主姓名",disabled:!0},model:{value:e.single.userName,callback:function(a){e.$set(e.single,"userName",a)},expression:"single.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"购买时间:",prop:"buyTime"}},[t("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请填写购车时间"},model:{value:e.single.buyTime,callback:function(a){e.$set(e.single,"buyTime",a)},expression:"single.buyTime"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"是否购买交强险:",prop:"isForce"}},[t("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"请选择是否购买交强险"},model:{value:e.single.isForce,callback:function(a){e.$set(e.single,"isForce",a)},expression:"single.isForce"}},[t("el-option",{attrs:{value:"yes",label:"是"}}),e._v(" "),t("el-option",{attrs:{value:"no",label:"否"}})],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"option",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(a){e.editDialogVisible=!1}}},[e._v("保存")]),e._v(" "),t("el-button",{attrs:{type:"primary",plain:"",size:"small"},on:{click:function(a){e.editDialogVisible=!1}}},[e._v("取消")])],1)])],1)},staticRenderFns:[]};var n=t("VU/8")(s,o,!1,function(e){t("2DyM")},"data-v-69b4c178",null);a.default=n.exports}});