webpackJsonp([160],{KyVN:function(e,t){},jH2g:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"CommunalPagination",props:{currentPage:{type:Number},pageSize:{type:Number},total:{type:Number}},methods:{handleSizeChange:function(e){this.$emit("search",1,e)},handleCurrentChange:function(e){this.$emit("search",e,this.pageSize)}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{"prev-text":"上一页","next-text":"下一页","current-page":this.currentPage,"page-sizes":[2,4,6,8],"page-size":this.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:this.total},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)},staticRenderFns:[]};var r=a("VU/8")(n,i,!1,function(e){a("KyVN")},"data-v-513a3733",null);t.default=r.exports}});