webpackJsonp([96],{"5bT5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),o=a("NYxO"),l=a("Z4dx"),s=a("P0XF"),r={name:"customBusiness",components:{BackButton:function(){return a.e(151).then(a.bind(null,"uOVF"))},BizSectorList:function(){return a.e(152).then(a.bind(null,"jpoa"))}},data:function(){return{newName:"",search:{comLastPay:"01",carAge:"01",comLatCount:"01"},columns:[{prop:"no",title:"业务单元序号",width:120,headerAlign:"center",align:"center"},{prop:"newFlag",title:"新续转保",width:120,headerAlign:"center",align:"center"},{prop:"carprice",title:"新车购置价",width:120,headerAlign:"center",align:"center"},{prop:"usage",title:"使用性质",width:120,headerAlign:"center",align:"center"},{prop:"age",title:"年龄",width:120,headerAlign:"center",align:"center"}],resultData:[{no:"1",newFlag:"新保",carprice:"10-25万",usage:"家庭自用",age:"20-30",recommendAutoCoe:.57,recommendMarketRate:"38",totalPreCount:4,totalPremium:40,premiumAccount:10,uLossRatio:39,uLossRatioROB:"低I",estimateCostRate:85.32,historyAutoCoe:.62,historyMarketRate:36,historyFullRate:40.1,historyLossRate:39.1},{no:"2",newFlag:"新保",carprice:"10-25万",usage:"家庭自用",age:"31-45",recommendAutoCoe:.48,recommendMarketRate:"39",totalPreCount:3,totalPremium:35,premiumAccount:20,uLossRatio:43,uLossRatioROB:"低II",estimateCostRate:89.65,historyAutoCoe:.51,historyMarketRate:37,historyFullRate:44.2,historyLossRate:43.31},{no:"3",newFlag:"新保",carprice:"10-25万",usage:"家庭自用",age:"46-60",recommendAutoCoe:.52,recommendMarketRate:"36",totalPreCount:1,totalPremium:50,premiumAccount:10,uLossRatio:48,uLossRatioROB:"低III",estimateCostRate:85.21,historyAutoCoe:.48,historyMarketRate:35,historyFullRate:48.9,historyLossRate:48.25},{no:"4",newFlag:"新保",carprice:"10-25万",usage:"营业货车",age:"20-30",recommendAutoCoe:.57,recommendMarketRate:"38",totalPreCount:4,totalPremium:40,premiumAccount:20,uLossRatio:53,uLossRatioROB:"中I",estimateCostRate:85.32,historyAutoCoe:.62,historyMarketRate:36,historyFullRate:54.3,historyLossRate:53.6},{no:"5",newFlag:"新保",carprice:"10-25万",usage:"营业货车",age:"31-45",recommendAutoCoe:.48,recommendMarketRate:"39",totalPreCount:3,totalPremium:35,premiumAccount:10,uLossRatio:65,uLossRatioROB:"中II",estimateCostRate:89.65,historyAutoCoe:.51,historyMarketRate:37,historyFullRate:66,historyLossRate:65.31},{no:"6",newFlag:"新保",carprice:"10-25万",usage:"营业货车",age:"46-60",recommendAutoCoe:.52,recommendMarketRate:"36",totalPreCount:5,totalPremium:50,premiumAccount:30,uLossRatio:73,uLossRatioROB:"中III",estimateCostRate:85.21,historyAutoCoe:.48,historyMarketRate:35,historyFullRate:74.2,historyLossRate:73.25}],items:[{itemLabel:"新续转保:",selectInfo:"请选择新续转保",modelName:"11",options:[{optValue:"11",optLabel:"新保"},{optValue:"12",optLabel:"续保"},{optValue:"13",optLabel:"转保"}]},{itemLabel:"新车购置价:",selectInfo:"请选择新车购置价",modelName:"22",options:[{optValue:"21",optLabel:"0-10万"},{optValue:"22",optLabel:"10-25万"},{optValue:"23",optLabel:"25-40万"},{optValue:"24",optLabel:"40万以上"}]},{itemLabel:"使用性质:",selectInfo:"请选择使用性质",modelName:"31",options:[{optValue:"31",optLabel:"家庭自用"},{optValue:"32",optLabel:"营业出租租赁"},{optValue:"33",optLabel:"营业旅游"},{optValue:"34",optLabel:"营业货车"},{optValue:"35",optLabel:"非营业机关"},{optValue:"36",optLabel:"非营业企业"}]},{itemLabel:"年龄:",selectInfo:"请选择年龄",modelName:"42",options:[{optValue:"41",optLabel:"20以下"},{optValue:"42",optLabel:"20-30"},{optValue:"43",optLabel:"30-45"},{optValue:"44",optLabel:"45-60"},{optValue:"45",optLabel:"60以上"}]},{itemLabel:"是否自定义业务单元:",selectInfo:"请选择是否自定义业务单元",modelName:"0",options:[{optLabel:"是",optValue:"1"},{optLabel:"否",optValue:"0"}]}],businessSmallTypeColumns:[{prop:"newFlag",title:"新续转保",width:100,headerAlign:"center",align:"center"},{prop:"carprice",title:"新车购置价",width:100,headerAlign:"center",align:"center"},{prop:"usage",title:"使用性质",width:100,headerAlign:"center",align:"center"},{prop:"age",title:"年龄",width:100,headerAlign:"center",align:"center"},{prop:"isCustom",title:"是否自定义业务单元",width:100,align:"center"}],businessSmallTypeData:[{newFlag:"新保",carprice:"10-25万",usage:"家庭自用",age:"20-30",isCustom:"否"},{newFlag:"新保",carprice:"10-25万",usage:"家庭自用",age:"31-45",isCustom:"否"},{newFlag:"新保",carprice:"10-25万",usage:"家庭自用",age:"46-60",isCustom:"否"},{newFlag:"新保",carprice:"10-25万",usage:"营业货车",age:"20-30",isCustom:"否"},{newFlag:"新保",carprice:"10-25万",usage:"营业货车",age:"31-45",isCustom:"否"},{newFlag:"新保",carprice:"10-25万",usage:"营业货车",age:"46-60",isCustom:"否"}],mergeBusinessSmallTypeDialogVisible:!1,mergeInputNameDialogVisible:!1,multipleSelection:[],itemList:[{dimnm:"新续转保",dimcd:"newFlag",detail:[{tagid:"91",tagnm:"新保"},{tagid:"92",tagnm:"续保"},{tagid:"93",tagnm:"转保"}]},{dimnm:"新车购置价",dimcd:"car-price",detail:[{tagid:"71",tagnm:"0-10万"},{tagid:"72",tagnm:"10-25万"},{tagid:"73",tagnm:"25-40万"},{tagid:"74",tagnm:"40万以上"}]},{dimnm:"使用性质",dimcd:"usage",detail:[{tagid:"61",tagnm:"家庭自用"},{tagid:"62",tagnm:"营业出租租赁"},{tagid:"63",tagnm:"营业旅游"},{tagid:"64",tagnm:"营业货车"},{tagid:"65",tagnm:"非营业机关"},{tagid:"66",tagnm:"非营业企业"}]},{dimnm:"年龄",dimcd:"age",detail:[{tagid:"31",tagnm:"20以下"},{tagid:"32",tagnm:"20-30"},{tagid:"33",tagnm:"30-45"},{tagid:"34",tagnm:"45-60"},{tagid:"35",tagnm:"60以上"}]}],bizData:[{id:"1",bizName:"新保10-40万家用",isEdit:!1,dims:[{dimnm:"新续转保",dimcd:"newFlag",tags:[{tagid:"91",tagnm:"新保"}]},{dimnm:"新车购置价",dimcd:"car-price",tags:[{tagid:"72",tagnm:"10-25万"},{tagid:"73",tagnm:"25-40万"}]},{dimnm:"使用性质",dimcd:"usage",tags:[{tagid:"61",tagnm:"家庭自用"}]},{dimnm:"年龄",dimcd:"age",tags:[{tagid:"32",tagnm:"20-30"},{tagid:"33",tagnm:"30-45"},{tagid:"34",tagnm:"45-60"}]}]}],specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"},currentEdit:"",activeName:"",loading:!0,waitting:!1}},computed:n()({currentEditIndex:function(){var t=this;return this.bizData.findIndex(function(e){return e.id===t.currentEdit})}},Object(o.d)({acceptRecommendFlag:function(t){return t.individual.acceptRecommendFlag},sectors:function(t){return t.individual.sectors},tableHeader:function(t){return t.app.tableHeader}})),created:function(){var t=this;Object(l.e)().then(function(e){t.$store.commit("SET_SECTORS",e.data)})},methods:{sectorClick:function(t){},handlePrev:function(){this.$router.push({path:"/admin/individual/declare/resultRecommend"})},config:function(){this.$router.push({path:"/admin/individual/declare/planConfig"})},handleSelectionChange:function(t){this.multipleSelection=t,this.multipleSelection.forEach(function(t){console.log(t.carAge)})},edit:function(t){this.currentEditIndex>-1&&(this.bizData[this.currentEditIndex].isEdit=!1),this.currentEdit=t,this.bizData[this.currentEditIndex].isEdit=!0},save:function(){this.bizData[this.currentEditIndex].isEdit=!1,this.currentEdit=""},remove:function(t){var e=this;this.$confirm("确定删除此条数据记录吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=e.bizData.findIndex(function(e){return e.id===t});a===e.currentEditIndex&&(e.currentEdit=""),e.bizData.splice(a,1),e.$message({type:"success",message:"删除成功!"})}).catch(function(){})},addRecord:function(){var t=Object(s.a)(),e={id:t,bizName:"",isEdit:!0,tags:[]};this.bizData.push(e),this.edit(t)},removeTag:function(t,e){var a=this.bizData[this.currentEditIndex].dims,i=a.findIndex(function(e){return e.dimcd===t}),n=a[i].tags,o=n.findIndex(function(t){return t.tagid===e});n.splice(o,1),0===n.length&&a.splice(i,1)},addTag:function(t,e){var a=t.dimcd,i=t.dimnm,n=e.tagid,o=e.tagnm;if(this.currentEditIndex>-1){var l=this.bizData[this.currentEditIndex].dims,s=l.findIndex(function(t){return t.dimcd===a});if(-1===s){var r=[];r.push({tagid:n,tagnm:o}),this.bizData[this.currentEditIndex].dims.push({dimcd:a,dimnm:i,tags:r})}else{-1===l[s].tags.findIndex(function(t){return t.tagid===n})&&this.bizData[this.currentEditIndex].dims[s].tags.push({tagid:n,tagnm:o})}}},defalutMerge:function(){this.newName="机构缺省业务单元",this.mergeInputNameDialogVisible=!0},merge:function(){this.newName="",this.mergeInputNameDialogVisible=!0},saveMerge:function(){this.mergeBusinessSmallTypeDialogVisible=!1},handleUnloading:function(){this.loading=!1,this.waitting=!0,this.resultData=this.data}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"biz-content"},[a("biz-sector-list",{attrs:{title:"车种选择",sectors:t.sectors},on:{sectorClick:t.sectorClick}}),t._v(" "),a("div",{staticStyle:{height:"30px","line-height":"30px","margin-bottom":"10px"}},[t._v("业务单元分组")]),t._v(" "),a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"步骤1：自由组合"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-collapse",{staticStyle:{height:"400px",overflow:"auto","overflow-x":"hidden"},attrs:{accordion:""},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.itemList,function(e){return a("el-collapse-item",{key:e.dimcd,attrs:{title:e.dimnm,name:e.dimnm}},[a("div",{staticClass:"grid-content bg-purple dimension-dialog"},[a("div",{staticClass:"dimension"},t._l(e.detail,function(i){return a("div",{key:i.tagid,staticClass:"item",on:{click:function(a){t.addTag(e,i)}}},[a("span",[t._v(t._s(i.tagnm))])])}))])])}))],1),t._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple-dark"},[a("el-table",{staticClass:"tb-edit",attrs:{border:"",size:"mini",data:t.bizData,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"title",label:"业务单元名称",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isEdit?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"业务单元名称"},model:{value:e.row.bizName,callback:function(a){t.$set(e.row,"bizName",a)},expression:"scope.row.bizName"}}):a("span",[t._v(t._s(e.row.bizName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"tags",label:"业务单元范围"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.dims,function(i){return a("span",{key:i.dimcd,attrs:{"disable-transitions":"",size:"small"}},[t._v("\n                      "+t._s(i.dimnm)+":\n                      "),t._l(i.tags,function(n){return a("el-tag",{key:n.tagid,attrs:{"disable-transitions":"",size:"small",closable:e.row.isEdit},on:{close:function(e){t.removeTag(i.dimid,n.tagid)}}},[t._v("\n                        "+t._s(n.tagnm)+"\n                      ")])}),t._v(" "),a("br")],2)})}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit!==e.row.id,expression:" currentEdit!== scope.row.id"}],attrs:{size:"small",type:"text",icon:"iconfont icon-bianji"},on:{click:function(a){t.edit(e.row.id)}}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"top"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit===e.row.id,expression:"currentEdit === scope.row.id"}],staticStyle:{"margin-left":"0"},attrs:{size:"small",type:"text",icon:"iconfont icon-fuzhi"},on:{click:t.save}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(a){a.preventDefault(),t.remove(e.row.id)}}})],1)]}}])})],1),t._v(" "),a("el-button",{style:t.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addRecord}},[t._v("\n                新增行\n              ")])],1)])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"步骤2：逐层合并"}},[a("div",{staticClass:"form"},[a("el-form",{attrs:{"label-width":"170px",inline:!0,size:"small",model:t.search}},[t._l(t.items,function(e){return a("el-form-item",{key:e.itemLabel,attrs:{label:e.itemLabel}},[a("el-select",{attrs:{editable:!1,placeholder:e.selectInfo},model:{value:e.modelName,callback:function(a){t.$set(e,"modelName",a)},expression:"item.modelName"}},t._l(e.options,function(t){return a("el-option",{key:t.optValue,attrs:{label:t.optLabel,value:t.optValue}})}))],1)}),t._v(" "),a("el-form-item",[a("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[t._v("查询")])],1)],2)],1),t._v(" "),a("div",{attrs:{calss:"data"}},[a("el-table",{attrs:{data:t.businessSmallTypeData,border:"",stripe:"","header-cell-style":t.tableHeader},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),t._l(t.businessSmallTypeColumns,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,label:t.title,"min-width":t.width,align:t.align}})})],2)],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary"},on:{click:t.defalutMerge}},[t._v("设置缺省业务单元")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.merge}},[t._v("合并")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveMerge}},[t._v("保存")])],1)])],1),t._v(" "),a("div",{staticStyle:{height:"30px","line-height":"30px","margin-bottom":"10px"}},[t._v("业务单元展示")]),t._v(" "),a("div",{staticClass:"data"},[a("div",{staticClass:"table"},[a("el-table",{attrs:{data:t.resultData,"row-key":"no",stripe:"","header-cell-style":t.tableHeader}},t._l(t.columns,function(t){return a("el-table-column",{key:t.prop,attrs:{"header-align":"center",prop:t.prop,label:t.title,"min-width":t.width,align:t.align}})}))],1)]),t._v(" "),a("div",{staticClass:"option"},[a("back-button",{on:{prev:t.handlePrev}},[t._v("上一步")]),t._v(" "),a("back-button",{attrs:{type:"next"},on:{next:t.config}},[t._v("下一步")])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(r,c,!1,function(t){a("pdU0")},"data-v-4483cc24",null);e.default=d.exports},pdU0:function(t,e){}});