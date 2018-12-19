webpackJsonp([141],{HzeS:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={components:{BaseTable:function(){return o.e(153).then(o.bind(null,"ss0d"))}},data:function(){return{onlineDialog:!1,offline:!1,form:{resource:""},versionOffline:{org:"",channel:"",pademode:""},rules:{org:[{required:!0,message:"请选择所属机构",trigger:"change"}],channel:[{required:!0,message:"请选择所属机构",trigger:"change"}],pademode:[{required:!0,message:"请选择所属机构",trigger:"change"}]},inspect:{type:[{id:"1",name:"使用其他定价表版本替换",flag:0},{id:"2",name:"使用上级机构定价表",flag:1}],orgList:[{code:"01000",name:"北京分公司"},{code:"02000",name:"山东省分公司"},{code:"03000",name:"江苏省分公司"},{code:"04000",name:"黑龙江省分公司"},{code:"05000",name:"重庆市分公司"},{code:"06000",name:"河南省分公司"},{code:"07000",name:"上海市分公司"},{code:"08000",name:"广东省分公司"},{code:"09000",name:"深圳市分公司"},{code:"10000",name:"天津市分公司"},{code:"11000",name:"青岛分公司"},{code:"12000",name:"辽宁省分公司"},{code:"13000",name:"河北省分公司"},{code:"14000",name:"海南省分公司"},{code:"15000",name:"广西分公司"},{code:"16000",name:"湖南省分公司"},{code:"17000",name:"浙江省分公司"},{code:"18000",name:"贵州省分公司"},{code:"19000",name:"四川省分公司"},{code:"20000",name:"青海省分公司"},{code:"21000",name:"云南省分公司"},{code:"22000",name:"陕西省分公司"},{code:"23000",name:"湖北省分公司"},{code:"24000",name:"吉林省分公司"},{code:"25000",name:"新疆分公司"},{code:"26000",name:"宁波市分公司"},{code:"27000",name:"山西省分公司"},{code:"28000",name:"大连市分公司"},{code:"29000",name:"甘肃省分公司"},{code:"30000",name:"安徽省分公司"},{code:"31000",name:"江西省分公司"},{code:"32000",name:"福建省分公司"},{code:"33000",name:"内蒙古分公司"},{code:"34000",name:"厦门市分公司"},{code:"35000",name:"宁夏自治区分公司"},{code:"36000",name:"西藏自治区分公司"}],channel:[{code:"ct",name:"传统渠道",flag:0},{code:"org",name:"机构直管渠道",flag:1},{code:"vip",name:"重客渠道",flag:1},{code:"bank",name:"银保渠道",flag:1},{code:"agent",name:"经代渠道",flag:1},{code:"carIns",name:"车商渠道",flag:1},{code:"cross",name:"交叉销售渠道",flag:1},{code:"cn",name:"网电渠道",flag:0},{code:"tel",name:"电销渠道",flag:1},{code:"net",name:"网销渠道",flag:1},{code:"oat",name:"OAT",flag:1},{code:"mix",name:"融合渠道",flag:1}],pademode:[{code:"1",name:"个车分类"},{code:"2",name:"个车打分"}]},formInline:{user:"",region:""},columns:[{prop:"affilInstitutions",width:120,label:"所属机构",align:"center"},{prop:"channel",width:120,label:"所属渠道",align:"center"},{prop:"version",width:120,label:"版本号",align:"center"},{prop:"compactor",width:120,label:"编制人",align:"center"},{prop:"effectiveDate",width:220,label:"生效日期",align:"center"},{prop:"operation",label:"操作",width:200,operation:!0,operations:[{text:"失效",event:"offline"}]}],onlinecolumns:[{prop:"affilInstitutions",width:120,label:"所属机构",align:"center"},{prop:"channel",width:120,label:"所属渠道",align:"center"},{prop:"version",width:120,label:"版本号",align:"center"},{prop:"compactor",width:120,label:"编制人",align:"center"},{prop:"effectiveDate",width:220,label:"生效日期",align:"center"},{prop:"operation",label:"操作",width:200,operation:!0,operations:[{text:"上线",event:"online"},{text:"撤销",event:"cancle"}]}],data:[{id:"1",affilInstitutions:"0000001",channel:"网电",version:"100000010020",compactor:"章三",effectiveDate:"2014.04.23"},{id:"2",affilInstitutions:"0000001",channel:"网电",version:"100000010020",compactor:"章三",effectiveDate:"2014.04.23"},{id:"3",affilInstitutions:"0000001",channel:"网电",version:"100000010020",compactor:"章三",effectiveDate:"2014.04.23"}],onlinedata:[{id:"1",affilInstitutions:"0000001",channel:"网电",version:"100000010020",compactor:"章三",effectiveDate:"2014.04.23"},{id:"2",affilInstitutions:"0000001",channel:"网电",version:"100000010020",compactor:"章三",effectiveDate:"2014.04.23"},{id:"3",affilInstitutions:"0000001",channel:"网电",version:"100000010020",compactor:"章三",effectiveDate:"2014.04.23"}]}},methods:{channelSub:function(){console.log("")},online:function(e){var n=new Date,o=this.onlinedata.find(function(n){return n.id===e});console.log(o);var t=o.effectiveDate;Date.parse(t)>=n.getTime()?this.$message({message:"恭喜你，上线成功",type:"success"}):this.$message({message:"上线失败，生效日期当天才可上线操作",type:"error"})},cancle:function(e){var n=this.onlinedata.find(function(n){return n.id===e});this.$message({message:"撤销成功",type:"success"}),this.data.splice(n.id,1)},chooseE:function(e){console.log(e),0===e?this.onlineDialog=!0:1===e&&this.$message("执行撤销操作")},taskSubmit:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},a={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"container"},[o("div",{staticClass:"form"},[o("el-form",{ref:"inspectForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.versionOffline,rules:e.rules}},[o("el-form-item",{attrs:{"label-width":"120px",label:"所属机构",prop:"org"}},[o("el-select",{attrs:{placeholder:"所属机构"},model:{value:e.versionOffline.org,callback:function(n){e.$set(e.versionOffline,"org",n)},expression:"versionOffline.org"}},e._l(e.inspect.orgList,function(e){return o("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),o("el-form-item",{attrs:{"label-width":"120px",label:"所属渠道",prop:"channel"}},[o("el-select",{attrs:{placeholder:"所属渠道"},model:{value:e.versionOffline.channel,callback:function(n){e.$set(e.versionOffline,"channel",n)},expression:"versionOffline.channel"}},e._l(e.inspect.channel,function(e){return o("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1),e._v(" "),o("el-form-item",{attrs:{"label-width":"120px",label:"配费模式",prop:"pademode"}},[o("el-select",{attrs:{placeholder:"配费模式"},model:{value:e.versionOffline.pademode,callback:function(n){e.$set(e.versionOffline,"pademode",n)},expression:"versionOffline.pademode"}},e._l(e.inspect.pademode,function(e){return o("el-option",{key:e.code,attrs:{value:e.code,label:e.name}})}))],1)],1)],1),e._v(" "),o("div",{staticClass:"option"},[o("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(n){e.resetForm("inspectForm")}}},[e._v("重置")]),e._v(" "),o("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(n){e.taskSubmit("inspectForm")}}},[e._v("查询")])],1),e._v(" "),o("div",{staticClass:"data"},[o("base-table",{attrs:{columns:e.columns,data:e.data,pagination:!0,total:e.data.length},on:{offline:function(n){e.offline=!0}}})],1),e._v(" "),o("el-dialog",{attrs:{title:"请选择",visible:e.offline,width:"50%"},on:{"update:visible":function(n){e.offline=n}}},[o("span",[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:""}},[o("el-radio-group",{on:{change:e.chooseE},model:{value:e.form.resource,callback:function(n){e.$set(e.form,"resource",n)},expression:"form.resource"}},e._l(e.inspect.type,function(n){return o("el-radio",{key:n.id,attrs:{label:n.flag}},[e._v(" "+e._s(n.name)+" ")])}))],1)],1)],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(n){e.offline=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.channelSub}},[e._v("确 定")])],1)]),e._v(" "),o("el-dialog",{attrs:{title:"提示",visible:e.onlineDialog,width:"80%"},on:{"update:visible":function(n){e.onlineDialog=n}}},[o("div",[o("base-table",{attrs:{columns:e.onlinecolumns,data:e.onlinedata,pagination:!0,rowKey:"id",total:e.data.length},on:{online:e.online,cancle:e.cancle}})],1),e._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(n){e.onlineDialog=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(n){e.onlineDialog=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]},i=o("VU/8")(t,a,!1,null,null,null);n.default=i.exports}});