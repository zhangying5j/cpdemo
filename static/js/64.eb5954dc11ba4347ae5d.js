webpackJsonp([64],{"FT+z":function(t,i){},Tx9t:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a("Dd8w"),n=a.n(e),d=a("NYxO"),s=a("P0XF"),o={name:"FleetBiz1",components:{BackButton:function(){return a.e(155).then(a.bind(null,"uOVF"))}},data:function(){return{newName:"",mergeInputNameDialogVisible:!1,itemList:[{dimnm:"商业险上年出险次数",dimcd:"comLastCount",detail:[{tagid:"11",tagnm:"未投保商业险"},{tagid:"12",tagnm:"0次"},{tagid:"13",tagnm:"1次"},{tagid:"14",tagnm:"2次"},{tagid:"15",tagnm:"3次及以上"}]},{dimnm:"商业险上年出险金额",dimcd:"rci",detail:[{tagid:"21",tagnm:"0-1000"},{tagid:"22",tagnm:"1000-2000"},{tagid:"23",tagnm:"2000-5000"},{tagid:"24",tagnm:"5000-10000"},{tagid:"25",tagnm:"10000+"}]},{dimnm:"年龄",dimcd:"age",detail:[{tagid:"31",tagnm:"20以下"},{tagid:"32",tagnm:"20-30"},{tagid:"33",tagnm:"30-45"},{tagid:"34",tagnm:"45-60"},{tagid:"35",tagnm:"60以上"}]},{dimnm:"投保组合",dimcd:"insCom",detail:[{tagid:"41",tagnm:"单交"},{tagid:"42",tagnm:"单商_单三_无附加"},{tagid:"43",tagnm:"单商_单三_有附加"},{tagid:"44",tagnm:"单商_损三_无附加"},{tagid:"45",tagnm:"单商_损三_有附加"},{tagid:"46",tagnm:"交商_交三_无附加"},{tagid:"47",tagnm:"交商_交三_有附加"},{tagid:"48",tagnm:"交商_交三损_无附加"},{tagid:"49",tagnm:"交商_交三损_有附加"},{tagid:"410",tagnm:"交商_其他"}]},{dimnm:"性别",dimcd:"gender",detail:[{tagid:"51",tagnm:"男"},{tagid:"52",tagnm:"女"},{tagid:"53",tagnm:"未知"}]},{dimnm:"使用性质",dimcd:"usage",detail:[{tagid:"61",tagnm:"家庭自用"},{tagid:"62",tagnm:"营业出租租赁"},{tagid:"63",tagnm:"营业旅游"},{tagid:"64",tagnm:"营业货车"},{tagid:"65",tagnm:"非营业机关"},{tagid:"66",tagnm:"非营业企业"}]},{dimnm:"新车购置价",dimcd:"car-price",detail:[{tagid:"71",tagnm:"0-10万"},{tagid:"72",tagnm:"10-25万"},{tagid:"73",tagnm:"25-40万"},{tagid:"74",tagnm:"40万以上"}]},{dimnm:"车龄",dimcd:"car-age",detail:[{tagid:"81",tagnm:"1年以下"},{tagid:"82",tagnm:"1-3年"},{tagid:"83",tagnm:"3-6"},{tagid:"84",tagnm:"6-10"},{tagid:"85",tagnm:"10年以上"}]},{dimnm:"交强险上年出险次数",dimcd:"forceLastCount",detail:[]},{dimnm:"合计上年出险次数",dimcd:"totalLastCount",detail:[]},{dimnm:"合计上年出险金额",dimcd:"totalLastPay",detail:[]},{dimnm:" 品牌车系分组",dimcd:"jyBrandGroup",detail:[]},{dimnm:"座位数",dimcd:"seatCount",detail:[]},{dimnm:"吨位数",dimcd:"tonCount",detail:[]},{dimnm:"车龄",dimcd:"useYear",detail:[]},{dimnm:"三者限额",dimcd:"amount",detail:[]},{dimnm:"是否异地牌照",dimcd:"outLandFlag",detail:[]},{dimnm:"是否投保盗抢险",dimcd:"theftFlag",detail:[]},{dimnm:"是否投保车上人员责任险",dimcd:"personDuty",detail:[]},{dimnm:"是否投保划痕险",dimcd:"scratchFlag",detail:[]},{dimnm:"是否投保玻璃险",dimcd:"glassFlag",detail:[]},{dimnm:"车辆种类",dimcd:"carKind",detail:[]},{dimnm:"新续转保",dimcd:"newFlag",detail:[]}],bizData:[{id:"1",bizName:"家庭自用20以下男性",isEdit:!1,dims:[{dimnm:"商业险上年出险次数",dimcd:"comLastCount",tags:[{tagid:"11",tagnm:"未投保商业险"},{tagid:"12",tagnm:"0次"}]},{dimnm:"商业险上年出险金额",dimcd:"rci",tags:[{tagid:"21",tagnm:"0-1000"}]},{dimnm:"年龄",dimcd:"age",tags:[{tagid:"32",tagnm:"20-30"},{tagid:"33",tagnm:"30-45"}]}]}],businessSmallTypeColumns:[{prop:"lastbicount",title:"商业险上年出险次数",width:120,align:"center"},{prop:"lastbiamount",title:"商业险上年出险金额",width:120,align:"center"},{prop:"age",title:"年龄",width:100,align:"center"}],businessSmallTypeData:[{lastbicount:"1次",lastbiamount:"1000-2000",age:"20-30",isCustom:"否"},{lastbicount:"1次",lastbiamount:"1000-2000",age:"30-45",isCustom:"否"},{lastbicount:"1次",lastbiamount:"1000-2000",age:"45-60",isCustom:"否"},{lastbicount:"1次",lastbiamount:"1000-2000",age:"60以上",isCustom:"否"},{lastbicount:"1次",lastbiamount:"2000-5000",age:"20-30",isCustom:"否"},{lastbicount:"1次",lastbiamount:"2000-5000",age:"30-45",isCustom:"否"},{lastbicount:"1次",lastbiamount:"2000-5000",age:"45-60",isCustom:"否"},{lastbicount:"1次",lastbiamount:"2000-5000",age:"60以上",isCustom:"否"},{lastbicount:"2次",lastbiamount:"1000-2000",age:"20-30",isCustom:"否"},{lastbicount:"2次",lastbiamount:"1000-2000",age:"30-45",isCustom:"否"},{lastbicount:"2次",lastbiamount:"1000-2000",age:"45-60",isCustom:"否"},{lastbicount:"2次",lastbiamount:"1000-2000",age:"60以上",isCustom:"否"},{lastbicount:"2次",lastbiamount:"2000-5000",age:"20-30",isCustom:"否"},{lastbicount:"2次",lastbiamount:"2000-5000",age:"30-45",isCustom:"否"},{lastbicount:"2次",lastbiamount:"2000-5000",age:"45-60",isCustom:"否"},{lastbicount:"2次",lastbiamount:"2000-5000",age:"60以上",isCustom:"否"}],items:[{itemLabel:"商业险上年出险次数:",selectInfo:"请选择商业险上年出险次数",modelName:"01",options:[{optLabel:"上年未出险",optValue:"01"},{optLabel:"上年出险1次",optValue:"02"},{optLabel:"上年出险2次",optValue:"03"},{optLabel:"上年出险3次",optValue:"04"},{optLabel:"上年出险4次",optValue:"05"},{optLabel:"上年出险5次及以上",optValue:"06"}]},{itemLabel:"商业险上年出险金额:",selectInfo:"请选择商业险上年出险金额",modelName:"01",options:[{optLabel:"上年出险金额0",optValue:"01"},{optLabel:"上年出险金额0-1000",optValue:"02"},{optLabel:"上年出险金额1000-2000",optValue:"03"},{optLabel:"上年出险金额2000-5000",optValue:"04"},{optLabel:"上年出险金额5000-10000",optValue:"05"},{optLabel:"上年出险金额10000+",optValue:"06"}]},{itemLabel:"年龄:",selectInfo:"请选择年龄",modelName:"32",options:[{optValue:"31",optLabel:"20以下"},{optValue:"32",optLabel:"20-30"},{optValue:"33",optLabel:"30-45"},{optValue:"34",optLabel:"45-60"},{optValue:"35",optLabel:"60以上"}]}],specialTableBtn:{width:"100%",marginTop:"5px",border:"1px dashed #15afff",background:"#fff",color:"#15afff",display:"block"},currentEdit:"",activeName:""}},computed:n()({currentEditIndex:function(){var t=this;return this.bizData.findIndex(function(i){return i.id===t.currentEdit})}},Object(d.d)({tableHeader:function(t){return t.app.tableHeader}})),methods:{edit:function(t){this.currentEditIndex>-1&&(this.bizData[this.currentEditIndex].isEdit=!1),this.currentEdit=t,this.bizData[this.currentEditIndex].isEdit=!0},save:function(){this.bizData[this.currentEditIndex].isEdit=!1,this.currentEdit=""},remove:function(t){var i=this.bizData.findIndex(function(i){return i.id===t});i===this.currentEditIndex&&(this.currentEdit=""),this.bizData.splice(i,1)},addRecord:function(){var t=Object(s.a)(),i={id:t,bizName:"",isEdit:!0,tags:[]};this.bizData.push(i),this.edit(t)},removeTag:function(t,i){var a=this.bizData[this.currentEditIndex].dims,e=a.findIndex(function(i){return i.dimcd===t}),n=a[e].tags,d=n.findIndex(function(t){return t.tagid===i});n.splice(d,1),0===n.length&&a.splice(e,1)},addTag:function(t,i){var a=t.dimcd,e=t.dimnm,n=i.tagid,d=i.tagnm;if(this.currentEditIndex>-1){var s=this.bizData[this.currentEditIndex].dims,o=s.findIndex(function(t){return t.dimcd===a});if(-1===o){var l=[];l.push({tagid:n,tagnm:d}),this.bizData[this.currentEditIndex].dims.push({dimcd:a,dimnm:e,tags:l})}else{-1===s[o].tags.findIndex(function(t){return t.tagid===n})&&this.bizData[this.currentEditIndex].dims[o].tags.push({tagid:n,tagnm:d})}}},defalutMerge:function(){this.newName="机构缺省业务单元",this.mergeInputNameDialogVisible=!0},merge:function(){this.newName="",this.mergeInputNameDialogVisible=!0},saveMerge:function(){this.mergeBusinessSmallTypeDialogVisible=!1},config:function(){this.$router.push({path:"/admin/agency/change/configfee/changedisconfigfee"})},handlePrev:function(){this.$router.push({path:"/admin/agency/change/configfee/changedim"})},handleSelectionChange:function(t){this.multipleSelection=t,this.multipleSelection.forEach(function(t){console.log(t.carAge)})}}},l={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"biz-content"},[a("div",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"自定义业务单元"}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-collapse",{staticStyle:{height:"400px",overflow:"auto","overflow-x":"hidden"},attrs:{accordion:""},model:{value:t.activeName,callback:function(i){t.activeName=i},expression:"activeName"}},t._l(t.itemList,function(i){return a("el-collapse-item",{key:i.dimcd,attrs:{title:i.dimnm,name:i.dimnm}},[a("div",{staticClass:"grid-content bg-purple dimension-dialog"},[a("div",{staticClass:"dimension"},t._l(i.detail,function(e){return a("div",{key:e.tagid,staticClass:"item",on:{click:function(a){t.addTag(i,e)}}},[a("span",[t._v(t._s(e.tagnm))])])}))])])}))],1),t._v(" "),a("el-col",{attrs:{span:18}},[a("div",{staticClass:"grid-content bg-purple-dark"},[a("el-table",{staticClass:"tb-edit",attrs:{border:"",size:"mini",data:t.bizData,"highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"title",label:"业务单元名称",width:"150"},scopedSlots:t._u([{key:"default",fn:function(i){return[i.row.isEdit?a("el-input",{staticStyle:{width:"100%"},attrs:{size:"small",placeholder:"业务单元名称"},model:{value:i.row.bizName,callback:function(a){t.$set(i.row,"bizName",a)},expression:"scope.row.bizName"}}):a("span",[t._v(t._s(i.row.bizName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"tags",label:"业务单元范围"},scopedSlots:t._u([{key:"default",fn:function(i){return t._l(i.row.dims,function(e){return a("span",{key:e.dimcd,attrs:{"disable-transitions":"",size:"small"}},[t._v("\n                      "+t._s(e.dimnm)+":\n                      "),t._l(e.tags,function(n){return a("el-tag",{key:n.tagid,attrs:{"disable-transitions":"",size:"small",closable:i.row.isEdit},on:{close:function(i){t.removeTag(e.dimid,n.tagid)}}},[t._v("\n                        "+t._s(n.tagnm)+"\n                      ")])}),t._v(" "),a("br")],2)})}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(i){return[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit!==i.row.id,expression:" currentEdit!== scope.row.id"}],attrs:{size:"small",type:"text",icon:"iconfont icon-bianji"},on:{click:function(a){t.edit(i.row.id)}}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"保存",placement:"top"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentEdit===i.row.id,expression:"currentEdit === scope.row.id"}],staticStyle:{"margin-left":"0"},attrs:{size:"small",type:"text",icon:"iconfont icon-fuzhi"},on:{click:t.save}})],1),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[a("el-button",{staticStyle:{color:"#FE2B6F"},attrs:{type:"text",size:"small",icon:"iconfont icon-iconfont-shanchu"},nativeOn:{click:function(a){a.preventDefault(),t.remove(i.row.id)}}})],1)]}}])})],1),t._v(" "),a("el-button",{style:t.specialTableBtn,attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addRecord}},[t._v("\n              新增行\n            ")])],1)])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"option"},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveMerge}},[t._v("保存")])],1),t._v(" "),a("div",{staticClass:"option"},[a("back-button",{attrs:{plain:""},on:{prev:t.handlePrev}},[t._v("上一步")]),t._v(" "),a("back-button",{attrs:{plain:"",type:"next"},on:{next:t.config}},[t._v("下一步")])],1)])},staticRenderFns:[]};var m=a("VU/8")(o,l,!1,function(t){a("FT+z")},"data-v-67122ac0",null);i.default=m.exports}});