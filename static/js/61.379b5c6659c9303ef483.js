webpackJsonp([61],{"94rO":function(e,t){},kQjN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("NYxO"),r={name:"DiyPlan",components:{RecommendStep:function(){return n.e(157).then(n.bind(null,"fWNb"))},QueryForm:function(){return n.e(163).then(n.bind(null,"dQTo"))}},created:function(){this.$store.dispatch("diySteps"),this.querySector()},data:function(){return{disabled:!0}},computed:Object(i.d)({individualSteps:function(e){return e.individual.individualSteps},stepProcess:function(e){return e.individual.stepProcess},lifeFormOptionShow:function(e){return e.individual.lifeFormOptionShow},lifeFormReadOnly:function(e){return e.individual.lifeFormReadOnly},versionFlag:function(e){return e.individual.versionFlag},maxStep:function(e){return e.individual.maxStep}}),methods:{handleStepId:function(e){console.log(e+1);var t=e+1;t>this.maxStep&&this.$store.commit("SET_MAX_STEP",String(t))},querySector:function(){this.$store.dispatch("queryParam")},recommend:function(){this.$router.push({path:"/admin/individual/declare/recommend"})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"iv-container"},[n("div",{staticClass:"step"},[n("recommend-step",{attrs:{disabled:e.disabled,step:e.stepProcess,maxStep:e.maxStep,steps:e.individualSteps},on:{stepId:e.handleStepId}})],1),e._v(" "),n("div",{staticClass:"c-main"},[n("div",{staticClass:"form"},[n("query-form",{on:{recommend:e.recommend,querySector:e.querySector}})],1),e._v(" "),n("router-view")],1)])},staticRenderFns:[]};var d=n("VU/8")(r,o,!1,function(e){n("94rO")},"data-v-6e73c60f",null);t.default=d.exports}});