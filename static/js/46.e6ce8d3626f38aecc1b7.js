webpackJsonp([46],{ufV9:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("Dd8w"),n=t.n(l),o=t("NYxO"),c={name:"SpecialBusiness",created:function(){this.$store.dispatch("initPriceSteps")},data:function(){return{param:{orgcd:"01000"},columns:[{prop:"org",width:120,label:"所属机构",align:"center"},{prop:"bizTypeNo",width:180,label:"特殊业务单元编号"},{prop:"bizDetail",width:200,label:"特殊业务单元明细"},{prop:"discount",width:180,label:"商业险自主折扣率(%)"},{prop:"carprice",width:180,label:"车险手续费"},{prop:"effectrange",width:200,label:"预期生效期间"},{prop:"createdate",width:180,label:"配置日期"}],setShow1:!1,copyparam:{text:"",number:"",orgcd:"00000",startmonth:"",endmonth:"",carname:"",carkind:"",discount:"",carprice:"",startdate:"2018-01-01",enddate:"2018-06-30"},rules:{orgcd:[{required:!0,trigger:"change",message:"机构不能为空"}]},companyList:[{code:"00000",name:"总公司",flag:0},{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}]}},computed:n()({orgnm:function(){var e=this;return this.companyList.find(function(a){return a.code===e.param.orgcd}).name},data:function(){return[{id:"1",org:this.orgnm,bizTypeNo:"00001",bizDetail:"1次，1000-2000，20-30",discount:"4",carprice:"56",effectrange:"2018-01-01至2018-06-30",createdate:"2018-01-01"},{id:"2",org:this.orgnm,bizTypeNo:"00002",bizDetail:"1次，1000-2000，30-40",discount:"4",carprice:"56",effectrange:"2018-01-01至2018-06-30",createdate:"2018-01-01"},{id:"3",org:this.orgnm,bizTypeNo:"00003",bizDetail:"1次，1000-2000，45-60",discount:"4",carprice:"56",effectrange:"2018-01-01至2018-06-30",createdate:"2018-01-01"},{id:"4",org:this.orgnm,bizTypeNo:"00004",bizDetail:"1次，1000-2000，45-60",discount:"4",carprice:"56",effectrange:"2018-01-01至2018-06-30",createdate:"2018-01-01"}]}},Object(o.d)({tableHeader:function(e){return e.app.tableHeader}})),methods:{createPlan:function(){this.setShow1=!0},edit:function(e){this.setShow1=!0},commitBack:function(){this.setShow1=!1},commitSave:function(){this.setShow1=!1},del:function(e){var a=this.data.findIndex(function(a){return a.id===e});this.data.splice(a,1)},commit:function(e){}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"special-content"},[t("p",[e._v("查询条件")]),e._v(" "),t("el-form",{ref:"selectform",staticStyle:{"margin-left":"5%"},attrs:{inline:!0,size:"small",model:e.param,rules:e.rules}},[t("el-form-item",{attrs:{label:"所属机构",prop:"orgcd"}},[t("el-select",{attrs:{placeholder:"请选择机构",size:"medium"},model:{value:e.param.orgcd,callback:function(a){e.$set(e.param,"orgcd",a)},expression:"param.orgcd"}},e._l(e.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1)],1),e._v(" "),t("div",{staticClass:"option"},[t("el-button",{attrs:{type:"primary",plain:""},on:{click:e.createPlan}},[e._v("新增")])],1),e._v(" "),t("div",{staticClass:"data"},[t("div",{staticClass:"table"},[t("p",[e._v("特殊业务列表")]),e._v(" "),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.data,stripe:"","header-cell-style":e.tableHeader}},[e._l(e.columns,function(e){return t("el-table-column",{key:e.prop,attrs:{"header-align":"center",prop:e.prop,"min-width":e.width,label:e.label,align:e.align?e.align:"center"}})}),e._v(" "),t("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"240"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){e.edit(a.row.id)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{type:"text"},on:{click:function(t){e.del(a.row.id)}}},[e._v("删除")]),e._v(" "),t("el-button",{attrs:{type:"text"},on:{click:function(t){e.commit(a.row.id)}}},[e._v("提交")])]}}])})],2)],1)]),e._v(" "),t("el-dialog",{attrs:{title:"特殊业务单元信息",visible:e.setShow1,width:"50%"},on:{"update:visible":function(a){e.setShow1=a}}},[t("el-form",{staticStyle:{"margin-left":"5%"},attrs:{inline:!0,size:"small",model:e.copyparam}},[t("el-form-item",{attrs:{label:"归属机构",prop:"orgcd"}},[t("el-select",{attrs:{placeholder:"请选择归属机构",size:"medium"},model:{value:e.param.orgcd,callback:function(a){e.$set(e.param,"orgcd",a)},expression:"param.orgcd"}},e._l(e.companyList,function(a){return t("el-option",{key:a.code,attrs:{value:a.code,label:a.name}},[1===a.flag?t("span",[e._v(" ")]):2===a.flag?t("span",[e._v("   ")]):e._e(),e._v(" "),t("span",[e._v(e._s(a.name))])])}))],1),e._v(" "),t("el-form-item",{attrs:{label:"特殊业务单元编号"}},[t("el-input",{model:{value:e.copyparam.number,callback:function(a){e.$set(e.copyparam,"number",a)},expression:"copyparam.number"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"特殊业务单元明细",prop:"plannm"}},[t("el-input",{staticStyle:{width:"550px"},attrs:{type:"textarea",rows:5},model:{value:e.copyparam.text,callback:function(a){e.$set(e.copyparam,"text",a)},expression:"copyparam.text"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"商业险自主折扣率"}},[t("el-input",{model:{value:e.copyparam.discount,callback:function(a){e.$set(e.copyparam,"discount",a)},expression:"copyparam.discount"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"车险手续费",prop:"plannm"}},[t("el-input",{model:{value:e.copyparam.carprice,callback:function(a){e.$set(e.copyparam,"carprice",a)},expression:"copyparam.carprice"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"预期生效期间：",prop:"monthrange"}},[t("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.copyparam.startdate,callback:function(a){e.$set(e.copyparam,"startdate",a)},expression:"copyparam.startdate"}}),e._v(" "),t("span",[e._v("至")]),e._v(" "),t("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.copyparam.enddate,callback:function(a){e.$set(e.copyparam,"enddate",a)},expression:"copyparam.enddate"}})],1)],1),e._v(" "),t("el-form",{staticStyle:{"text-align":"center"},attrs:{inline:!0,size:"small",model:e.copyparam}},[t("el-form-item",[t("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.commitBack}},[e._v("返回")])],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.commitSave}},[e._v("保存")])],1)],1)],1)],1)},staticRenderFns:[]};var i=t("VU/8")(c,r,!1,function(e){t("vjln")},"data-v-7b40fe39",null);a.default=i.exports},vjln:function(e,a){}});