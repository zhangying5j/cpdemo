webpackJsonp([148],{"5aui":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Dd8w"),i=r.n(n),u=r("NYxO"),a={name:"BudgetAdd",components:{QueryForm:function(){return r.e(158).then(r.bind(null,"Hb8j"))}},data:function(){return{budget:{formulateInstitution:"00000",type:"year",channel:"all",timeSlot:"2018",version:"",bore:"policy",productType:"all"},rules:{formulateInstitution:[{required:!0,trigger:"change",message:"预算制定机构不能为空"}],channel:[{required:!0,trigger:"change",message:"预算渠道不能为空"}],productType:[{required:!0,trigger:"change",message:"业务分类不能为空"}]}}},computed:i()({},Object(u.d)({formData:function(t){return t.budget.formData}}),{timeSlots:function(){var t=this.budget.type+"";return"month"===t?this.resetTime("201801"):"year"===t&&this.resetTime("2018"),[]}}),methods:{resetForm:function(){this.$refs.addFrom.reset()},createBudget:function(){this.$refs.addFrom.valid()},toAddBudget:function(){var t=this,e=this.formData.types.find(function(e){return e.code===t.budget.type}),r=e.timeSlots.find(function(e){return e.code===t.budget.timeSlot});this.$store.dispatch("setAddData",{formulateInstitution:this.budget.formulateInstitution,type:e.name,timeSlot:r.name}),this.$router.push({path:"/admin/budget/add/create"})},resetTime:function(t){this.budget.timeSlot=t},history:function(){this.$store.dispatch("historyData"),this.$router.push({path:"/admin/budget/add/history"})}},created:function(){this.$router.push({path:"/admin/budget/add/create"})}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("router-view")],1)},staticRenderFns:[]},s=r("VU/8")(a,o,!1,null,null,null);e.default=s.exports}});