webpackJsonp([43],{"/MqJ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("NYxO"),i={name:"FactorConfig",components:{BaseTable:function(){return a.e(150).then(a.bind(null,"ss0d"))},BackButton:function(){return a.e(151).then(a.bind(null,"uOVF"))}},mounted:function(){this.$store.commit("SHOW_MODEL")},beforeRouteLeave:function(e,t,a){this.$store.commit("HIDE_MODEL"),a()},created:function(){this.$store.dispatch("initPriceSteps")},computed:Object(n.d)({model:function(){return this.param.model},param:function(e){return e.individual.param}}),data:function(){return{editFlag:!1,dimDialogVisible:!1,cartypeid:"",columns:[{prop:"carType",label:"车种",width:60,align:"center"},{prop:"factorCount",label:"因子个数选择",width:40,align:"center",isEdit:!1,type:"select",options:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"}]},{prop:"factors",label:"已选择风险因子",width:100,align:"center"},{prop:"operation",width:160,label:"操作",operation:!0,operations:[{text:"选择风险因子",event:"setDefaultDim"}]}],data:[{id:"1",carType:"家庭自用",factorCount:"5",factors:"新续转保(14%)、新车购置价(13%)、使用性质(12%)、年龄(11%)",dimcds:["newFlag","car-price","usage","age"]},{id:"2",carType:"非营业客车",factorCount:"5",factors:"新续转保(14%)、新车购置价(13%)、使用性质(12%)、年龄(11%)",dimcds:["newFlag","car-price","usage","age"]},{id:"3",carType:"营业客车",factorCount:"5",factors:"新续转保14%)、新车购置价(13%)、使用性质(12%)、年龄(11%)",dimcds:["newFlag","car-price","usage","age"]},{id:"4",carType:"营业货运",factorCount:"5",factors:"新续转保14%)、新车购置价(13%)、使用性质(12%)、年龄(11%)",dimcds:["newFlag","car-price","usage","age"]},{id:"5",carType:"非营业货运",factorCount:"5",factors:"新续转保(14%)、新车购置价(13%)、使用性质(12%)、年龄(11%)",dimcds:["newFlag","car-price","usage","age"]},{id:"6",carType:"特种车",factorCount:"5",factors:"新续转保(14%)、新车购置价(13%)、使用性质(12%)、年龄(11%)",dimcds:["newFlag","car-price","usage","age"]},{id:"7",carType:"其他",factorCount:"5",factors:"新续转保(14%)、新车购置价(13%)、使用性质(12%)、年龄(11%)",dimcds:["newFlag","car-price","usage","age"]}],dimensionList:[{name:"新续转保(14%)",code:"newFlag"},{code:"car-price",name:"新车购置价(13%)"},{code:"usage",name:"使用性质(12%)"},{code:"age",name:"年龄(11%)"},{code:"insCom",name:"投保组合(11%)"},{code:"comLastCount",name:"商业险上年出险次数(10%)"},{code:"rci",name:"商业险上年出险金额(9%)"},{code:"gender",name:"性别(8%)"},{code:"car-age",name:"车龄(1%)"},{name:"交强险上年出险次数(1%)",code:"forceLastCount"},{name:"合计上年出险次数(1%)",code:"totalLastCount"},{name:"合计上年出险金额(1%)",code:"totalLastPay"},{name:"品牌车系分组(1%)",code:"jyBrandGroup"},{name:"座位数(1%)",code:"seatCount"},{name:"吨位数(1%)",code:"tonCount"},{name:"车龄(1%)",code:"useYear"},{name:"三者限额(1%)",code:"amount"},{name:"是否异地牌照(1%)",code:"outLandFlag"},{name:"是否投保盗抢险(1%)",code:"theftFlag"},{name:"是否投保车上人员责任险(1%)",code:"personDuty"},{name:"是否投保划痕险(1%)",code:"scratchFlag"},{name:"是否投保玻璃险(1%)",code:"glassFlag"},{name:"车辆种类(1%)",code:"carKind"}],currentCustomDimension:[]}},methods:{setDefaultDim:function(e){this.cartypeid=e;var t=this.data.findIndex(function(t){return t.id===e});this.currentCustomDimension=this.data[t].dimcds,this.dimDialogVisible=!0},handlePrev:function(){this.$router.push({path:"/admin/individual/declare/paramConfig"})},nextstep:function(){this.$router.push({path:"/admin/individual/declare/factorDivide"})},addDimension:function(e,t){if(!this.currentCustomDimension.includes(t)){this.currentCustomDimension.push(t);var a=this.data.findIndex(function(t){return t.id===e});this.data[a].dimcds=this.currentCustomDimension}},removeDimension:function(e,t){this.currentCustomDimension.splice(this.currentCustomDimension.indexOf(t),1);var a=this.data.findIndex(function(t){return t.id===e});this.data[a].dimcds=this.currentCustomDimension}},watch:{model:function(e){"自主选择"===e?(this.editFlag=!1,this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!1)})):"辅助推荐"===e&&(this.editFlag=!0,this.columns.forEach(function(e){void 0!==e.isEdit&&(e.isEdit=!0)}))}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"biz-content"},[a("div",{staticClass:"data"},[a("div",{staticStyle:{height:"30px","line-height":"30px",margin:"10px 0 10px 15px"}},[e._v("因子选择列表")]),e._v(" "),a("div",{staticClass:"table"},[a("base-table",{attrs:{columns:e.columns,data:e.data,rowKey:"id"},on:{setDefaultDim:e.setDefaultDim}})],1)]),e._v(" "),a("div",{staticClass:"option"},[a("back-button",{attrs:{plain:""},on:{prev:e.handlePrev}},[e._v("上一步")]),e._v(" "),a("back-button",{attrs:{type:"next"},on:{next:e.nextstep}},[e._v("下一步")])],1),e._v(" "),a("el-dialog",{attrs:{title:"选择风险因子",visible:e.dimDialogVisible,width:"30%"},on:{"update:visible":function(t){e.dimDialogVisible=t}}},e._l(e.dimensionList,function(t){return a("el-tag",{key:t.code,attrs:{type:e.currentCustomDimension.includes(t.code)?"primary":"info",closable:!(!e.currentCustomDimension.includes(t.code)||"newFlag"===t.code)},on:{close:function(a){e.removeDimension(e.cartypeid,t.code)}},nativeOn:{click:function(a){e.addDimension(e.cartypeid,t.code)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])}))],1)},staticRenderFns:[]};var c=a("VU/8")(i,o,!1,function(e){a("XhgQ")},"data-v-8e514f20",null);t.default=c.exports},XhgQ:function(e,t){}});