webpackJsonp([77],{"d/BI":function(e,a){},reik:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n("Dd8w"),o=n.n(t),c=n("NYxO"),d={name:"FactorRecommend",components:{BackButton:function(){return n.e(142).then(n.bind(null,"uOVF"))},BizSectorList:function(){return n.e(143).then(n.bind(null,"jpoa"))}},created:function(){var e=this;this.$nextTick(function(){e.draw()})},data:function(){return{rangeShow:!0,dimensionDialogVisible:!1,currentid:"1",currentcds:["comLastCount","rci","age","insCom","gender"],currentcd:"comLastCount",data:[{id:"1",name:"家用车",dims:[{code:"comLastCount",name:"商业险上年出险次数(14%)"},{code:"rci",name:"商业险上年出险金额(13%)"},{code:"age",name:"年龄(12%)"},{code:"insCom",name:"投保组合(11%)"},{code:"gender",name:"性别(11%)"},{code:"usage",name:"使用性质(10%)"},{code:"car-price",name:"新车购置价(9%)"},{code:"car-age",name:"车龄(8%)"},{name:"交强险上年出险次数(1%)",code:"forceLastCount"},{name:"合计上年出险次数(1%)",code:"totalLastCount"},{name:"合计上年出险金额(1%)",code:"totalLastPay"},{name:"品牌车系分组(1%)",code:"jyBrandGroup"},{name:"座位数(1%)",code:"seatCount"},{name:"吨位数(1%)",code:"tonCount"},{name:"车龄(1%)",code:"useYear"},{name:"三者限额(1%)",code:"amount"},{name:"是否异地牌照(1%)",code:"outLandFlag"},{name:"是否投保盗抢险(1%)",code:"theftFlag"},{name:"是否投保车上人员责任险(1%)",code:"personDuty"},{name:"是否投保划痕险(1%)",code:"scratchFlag"},{name:"是否投保玻璃险(1%)",code:"glassFlag"},{name:"车辆种类(1%)",code:"carKind"},{name:"新续转保(1%)",code:"newFlag"}]},{id:"2",name:"非营业客车",dims:[{code:"usage",name:"使用性质(14%)"},{code:"comLastCount",name:"商业险上年出险次数(13%)"},{code:"rci",name:"商业险上年出险金额(12%)"},{code:"age",name:"年龄(11%)"},{code:"insCom",name:"投保组合(11%)"},{code:"gender",name:"性别(10%)"},{code:"car-price",name:"新车购置价(9%)"},{code:"car-age",name:"车龄(8%)"},{name:"交强险上年出险次数(1%)",code:"forceLastCount"},{name:"合计上年出险次数(1%)",code:"totalLastCount"},{name:"合计上年出险金额(1%)",code:"totalLastPay"},{name:"品牌车系分组(1%)",code:"jyBrandGroup"},{name:"座位数(1%)",code:"seatCount"},{name:"吨位数(1%)",code:"tonCount"},{name:"车龄(1%)",code:"useYear"},{name:"三者限额(1%)",code:"amount"},{name:"是否异地牌照(1%)",code:"outLandFlag"},{name:"是否投保盗抢险(1%)",code:"theftFlag"},{name:"是否投保车上人员责任险(1%)",code:"personDuty"},{name:"是否投保划痕险(1%)",code:"scratchFlag"},{name:"是否投保玻璃险(1%)",code:"glassFlag"},{name:"车辆种类(1%)",code:"carKind"},{name:"新续转保(1%)",code:"newFlag"}]},{id:"3",name:"营业客车",dims:[{code:"comLastCount",name:"商业险上年出险次数(14%)"},{code:"rci",name:"商业险上年出险金额(13%)"},{code:"age",name:"年龄(12%)"},{code:"insCom",name:"投保组合(11%)"},{code:"gender",name:"性别(11%)"},{code:"usage",name:"使用性质(10%)"},{code:"car-price",name:"新车购置价(9%)"},{code:"car-age",name:"车龄(8%)"},{name:"交强险上年出险次数(1%)",code:"forceLastCount"},{name:"合计上年出险次数(1%)",code:"totalLastCount"},{name:"合计上年出险金额(1%)",code:"totalLastPay"},{name:"品牌车系分组(1%)",code:"jyBrandGroup"},{name:"座位数(1%)",code:"seatCount"},{name:"吨位数(1%)",code:"tonCount"},{name:"车龄(1%)",code:"useYear"},{name:"三者限额(1%)",code:"amount"},{name:"是否异地牌照(1%)",code:"outLandFlag"},{name:"是否投保盗抢险(1%)",code:"theftFlag"},{name:"是否投保车上人员责任险(1%)",code:"personDuty"},{name:"是否投保划痕险(1%)",code:"scratchFlag"},{name:"是否投保玻璃险(1%)",code:"glassFlag"},{name:"车辆种类(1%)",code:"carKind"},{name:"新续转保(1%)",code:"newFlag"}]},{id:"4",name:"营业货运",dims:[{code:"usage",name:"使用性质(14%)"},{code:"comLastCount",name:"商业险上年出险次数(13%)"},{code:"rci",name:"商业险上年出险金额(12%)"},{code:"age",name:"年龄(11%)"},{code:"insCom",name:"投保组合(11%)"},{code:"gender",name:"性别(10%)"},{code:"car-price",name:"新车购置价(9%)"},{code:"car-age",name:"车龄(8%)"},{name:"交强险上年出险次数(1%)",code:"forceLastCount"},{name:"合计上年出险次数(1%)",code:"totalLastCount"},{name:"合计上年出险金额(1%)",code:"totalLastPay"},{name:"品牌车系分组(1%)",code:"jyBrandGroup"},{name:"座位数(1%)",code:"seatCount"},{name:"吨位数(1%)",code:"tonCount"},{name:"车龄(1%)",code:"useYear"},{name:"三者限额(1%)",code:"amount"},{name:"是否异地牌照(1%)",code:"outLandFlag"},{name:"是否投保盗抢险(1%)",code:"theftFlag"},{name:"是否投保车上人员责任险(1%)",code:"personDuty"},{name:"是否投保划痕险(1%)",code:"scratchFlag"},{name:"是否投保玻璃险(1%)",code:"glassFlag"},{name:"车辆种类(1%)",code:"carKind"},{name:"新续转保(1%)",code:"newFlag"}]},{id:"5",name:"非营业货运",dims:[{code:"comLastCount",name:"商业险上年出险次数(14%)"},{code:"rci",name:"商业险上年出险金额(13%)"},{code:"age",name:"年龄(12%)"},{code:"insCom",name:"投保组合(11%)"},{code:"gender",name:"性别(11%)"},{code:"usage",name:"使用性质(10%)"},{code:"car-price",name:"新车购置价(9%)"},{code:"car-age",name:"车龄(8%)"},{name:"交强险上年出险次数(1%)",code:"forceLastCount"},{name:"合计上年出险次数(1%)",code:"totalLastCount"},{name:"合计上年出险金额(1%)",code:"totalLastPay"},{name:"品牌车系分组(1%)",code:"jyBrandGroup"},{name:"座位数(1%)",code:"seatCount"},{name:"吨位数(1%)",code:"tonCount"},{name:"车龄(1%)",code:"useYear"},{name:"三者限额(1%)",code:"amount"},{name:"是否异地牌照(1%)",code:"outLandFlag"},{name:"是否投保盗抢险(1%)",code:"theftFlag"},{name:"是否投保车上人员责任险(1%)",code:"personDuty"},{name:"是否投保划痕险(1%)",code:"scratchFlag"},{name:"是否投保玻璃险(1%)",code:"glassFlag"},{name:"车辆种类(1%)",code:"carKind"},{name:"新续转保(1%)",code:"newFlag"}]},{id:"6",name:"特种车",dims:[{code:"usage",name:"使用性质(14%)"},{code:"comLastCount",name:"商业险上年出险次数(13%)"},{code:"rci",name:"商业险上年出险金额(12%)"},{code:"age",name:"年龄(11%)"},{code:"insCom",name:"投保组合(11%)"},{code:"gender",name:"性别(10%)"},{code:"car-price",name:"新车购置价(9%)"},{code:"car-age",name:"车龄(8%)"},{name:"交强险上年出险次数(1%)",code:"forceLastCount"},{name:"合计上年出险次数(1%)",code:"totalLastCount"},{name:"合计上年出险金额(1%)",code:"totalLastPay"},{name:"品牌车系分组(1%)",code:"jyBrandGroup"},{name:"座位数(1%)",code:"seatCount"},{name:"吨位数(1%)",code:"tonCount"},{name:"车龄(1%)",code:"useYear"},{name:"三者限额(1%)",code:"amount"},{name:"是否异地牌照(1%)",code:"outLandFlag"},{name:"是否投保盗抢险(1%)",code:"theftFlag"},{name:"是否投保车上人员责任险(1%)",code:"personDuty"},{name:"是否投保划痕险(1%)",code:"scratchFlag"},{name:"是否投保玻璃险(1%)",code:"glassFlag"},{name:"车辆种类(1%)",code:"carKind"},{name:"新续转保1%)",code:"newFlag"}]},{id:"7",name:"其他",dims:[{code:"comLastCount",name:"商业险上年出险次数(14%)"},{code:"rci",name:"商业险上年出险金额(13%)"},{code:"age",name:"年龄(12%)"},{code:"insCom",name:"投保组合(11%)"},{code:"gender",name:"性别(11%)"},{code:"usage",name:"使用性质(10%)"},{code:"car-price",name:"新车购置价(9%)"},{code:"car-age",name:"车龄(8%)"},{name:"交强险上年出险次数(1%)",code:"forceLastCount"},{name:"合计上年出险次数(1%)",code:"totalLastCount"},{name:"合计上年出险金额(1%)",code:"totalLastPay"},{name:"品牌车系分组(1%)",code:"jyBrandGroup"},{name:"座位数(1%)",code:"seatCount"},{name:"吨位数(1%)",code:"tonCount"},{name:"车龄(1%)",code:"useYear"},{name:"三者限额(1%)",code:"amount"},{name:"是否异地牌照(1%)",code:"outLandFlag"},{name:"是否投保盗抢险(1%)",code:"theftFlag"},{name:"是否投保车上人员责任险(1%)",code:"personDuty"},{name:"是否投保划痕险(1%)",code:"scratchFlag"},{name:"是否投保玻璃险(1%)",code:"glassFlag"},{name:"车辆种类(1%)",code:"carKind"},{name:"新续转保(1%)",code:"newFlag"}]}],dimDetaiData:[{no:"1",tag:"未投保商业险",range:"未投保商业险",a:"0",b:"0",c:"10"},{no:"2",tag:"0次",range:"新车，新保，连续3年+未出险，连续2年未出险，上年未出险",a:"0",b:"0",c:"30"},{no:"3",tag:"1次",range:"1次",a:"53.69",b:"52.25",c:"10"},{no:"4",tag:"2次",range:"2次",a:"60.33",b:"59.33",c:"10"},{no:"5",tag:"3次及以上",range:"3次，4次，5次+",a:"74.21",b:"73.33",c:"40"}],dimDetail:[{code:"car-price",name:"新车购置价",rangeShow:!1,detail:[{no:"1",tag:"0-10万",down:"0",up:"10万",a:"65.82",b:"64.65",c:"10"},{no:"2",tag:"10-25万",down:"10万",up:"25万",a:"69.32",b:"68.58",c:"20"},{no:"3",tag:"25-40万",down:"25万",up:"40万",a:"71.22",b:"70.22",c:"30"},{no:"4",tag:"40万以上",down:"40万",up:"N",a:"75.68",b:"74.33",c:"40"}]},{code:"usage",name:"使用性质",rangeShow:!0,detail:[{no:"1",tag:"家庭自用",range:"家庭自用",a:"87.11",b:"86.12",c:"10"},{no:"2",tag:"营业出租租赁",range:"营业出租租赁",a:"78.36",b:"77.66",c:"20"},{no:"3",tag:"营业旅游",range:"营业旅游",a:"72.36",b:"71.25",c:"20"},{no:"4",tag:"营业货车",range:"营业货车",a:"78.23",b:"77.35",c:"10"},{no:"5",tag:"非营业机关",range:"非营业机关",a:"69.32",b:"68.21",c:"10"},{no:"6",tag:"非营业企业",range:"非营业企业",a:"70.32",b:"69.36",c:"30"}]},{code:"age",name:"年龄",rangeShow:!1,detail:[{no:"1",tag:"20以下",down:"0",up:"20",a:"69.56",b:"68.01",c:"10"},{no:"2",tag:"20-30",down:"20",up:"30",a:"61.12",b:"60.12",c:"30"},{no:"3",tag:"30-45",down:"30",up:"45",a:"54.15",b:"53.23",c:"10"},{no:"4",tag:"45-60",down:"45",up:"60",a:"60.14",b:"59.34",c:"10"},{no:"5",tag:"60以上",down:"60",up:"N",a:"70.96",b:"69.56",c:"40"}]},{code:"insCom",name:"投保组合",rangeShow:!0,detail:[{no:"1",tag:"单交",range:"交强险",a:"70.36",b:"68.12",c:"10"},{no:"2",tag:"单商_单三_无附加",range:"三者险",a:"72.78",b:"69.31",c:"10"},{no:"3",tag:"单商_单三_有附加",range:"三者险,车上人员责任、划痕、玻璃、盗抢险",a:"75.69",b:"73.25",c:"10"},{no:"4",tag:"单商_损三_无附加",range:"三者险,车损险",a:"78.33",b:"77.33",c:"10"},{no:"5",tag:"单商_损三_有附加",range:"三者险,车损险,车上人员责任、划痕、玻璃、盗抢险",a:"74.21",b:"73.33",c:"10"},{no:"6",tag:"交商_交三_无附加",range:"交强险,三者险,",a:"74.21",b:"73.33",c:"10"},{no:"7",tag:"交商_交三_有附加",range:"交强险,三者险,车上人员责任、划痕、玻璃、盗抢险",a:"74.21",b:"73.33",c:"10"},{no:"8",tag:"交商_交三损_无附加",range:"交强险、车损险、三者险",a:"74.21",b:"73.33",c:"10"},{no:"9",tag:"交商_交三损_有附加",range:"交强险，车损险，三者险,车上人员责任、划痕、玻璃、盗抢险",a:"74.21",b:"73.33",c:"10"},{no:"10",tag:"交商_其他",range:"交强险，车上人员责任、盗抢险",a:"74.21",b:"73.33",c:"10"}]},{code:"comLastCount",name:"商业险上年出险次数",rangeShow:!0,detail:[{no:"1",tag:"未投保商业险",range:"未投保商业险",a:"0",b:"0",c:"10"},{no:"2",tag:"0次",range:"新车，新保，连续3年+未出险，连续2年未出险，上年未出险",a:"0",b:"0",c:"30"},{no:"3",tag:"1次",range:"1次",a:"53.69",b:"52.25",c:"10"},{no:"4",tag:"2次",range:"2次",a:"60.33",b:"59.33",c:"10"},{no:"5",tag:"3次及以上",range:"3次，4次，5次+",a:"74.21",b:"73.33",c:"40"}]},{code:"rci",name:"商业险上年出险金额",rangeShow:!1,detail:[{no:"1",tag:"0-1000",down:"0",up:"1000",a:"40.3",b:"39.31",c:"10"},{no:"2",tag:"1000-2000",down:"1000",up:"2000",a:"55.69",b:"54.25",c:"30"},{no:"3",tag:"2000-5000",down:"2000",up:"5000",a:"68.33",b:"67.33",c:"10"},{no:"4",tag:"5000-10000",down:"5000",up:"10000",a:"74.21",b:"73.33",c:"10"},{no:"5",tag:"10000+",down:"10000",up:"N",a:"73.66",b:"72.88",c:"40"}]},{code:"gender",name:"性别",rangeShow:!0,detail:[{no:"1",tag:"男",range:"男",a:"70.13",b:"69.75",c:"45"},{no:"2",tag:"女",range:"女",a:"88.12",b:"87.33",c:"35"},{no:"3",tag:"未知",range:"未知",a:"88.12",b:"87.33",c:"20"}]},{code:"car-age",name:"车龄",rangeShow:!1,detail:[{no:"1",tag:"1年以下",down:"0",up:"1年",a:"82.33",b:"81.25",c:"10"},{no:"2",tag:"1-3年",down:"1年",up:"3年",a:"85.66",b:"84.22",c:"20"},{no:"3",tag:"3-6",down:"3年",up:"6年",a:"78.11",b:"77.66",c:"30"},{no:"4",tag:"6-10",down:"6年",up:"10年",a:"75.96",b:"74.62",c:"20"},{no:"5",tag:"10年以上",down:"10年",up:"N",a:"72.12",b:"71.67",c:"20"}]},{name:"交强险上年出险次数",code:"forceLastCount",rangeShow:!0,detail:[]},{name:"合计上年出险次数",code:"totalLastCount",rangeShow:!0,detail:[]},{name:"合计上年出险金额",code:"totalLastPay",rangeShow:!0,detail:[]},{name:"品牌车系分组",code:"jyBrandGroup",rangeShow:!0,detail:[]},{name:"座位数",code:"seatCount",rangeShow:!0,detail:[]},{name:"吨位数",code:"tonCount",rangeShow:!0,detail:[]},{name:"车龄",code:"useYear",rangeShow:!0,detail:[]},{name:"三者限额",code:"amount",rangeShow:!0,detail:[]},{name:"是否异地牌照",code:"outLandFlag",rangeShow:!0,detail:[]},{name:"是否投保盗抢险",code:"theftFlag",rangeShow:!0,detail:[]},{name:"是否投保车上人员责任险",code:"personDuty",rangeShow:!0,detail:[]},{name:"是否投保划痕险",code:"scratchFlag",rangeShow:!0,detail:[]},{name:"是否投保玻璃险",code:"glassFlag",rangeShow:!0,detail:[]},{name:"车辆种类",code:"carKind",rangeShow:!0,detail:[]},{name:"新续转保",code:"newFlag",rangeShow:!0,detail:[]}],dimnm:"商业险上年出险次数",dimdetainms:["未投保商业险","0次","1次","2次","3次及以上"],avals:["0","0","53.69","60.33","74.21"],bvals:["0","0","52.25","59.33","73.33"],cvals:["10","30","10","10","40"]}},computed:o()({},Object(c.d)({tableHeader:function(e){return e.app.tableHeader}}),{currentbizdim:function(){var e=this;return this.data.find(function(a){return a.id===e.currentid}).dims}}),methods:{draw:function(){var e={title:{text:"图表分析",left:"center",top:10},grid:{top:"25%",bottom:"10%",left:"5%",right:"0%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["保费占比","满期赔付率","预期赔付率"],itemWidth:15,itemHeight:8,itemGap:8,top:50},xAxis:[{name:this.dimnm,type:"category",data:this.dimdetainms,axisPointer:{type:"shadow"}}],yAxis:[{type:"value",position:"left",min:0,max:100,interval:10,axisLabel:{formatter:"{value}"}},{type:"value",position:"right",min:20,max:80,interval:10,axisLabel:{formatter:"{value} %"}},{type:"value",position:"right",offset:10,min:20,max:80,interval:10,axisLabel:{formatter:"{value} %"}}],series:[{name:"保费占比",type:"bar",barWidth:25,data:this.cvals,itemStyle:{normal:{color:"#0079BA"}}},{name:"满期赔付率",type:"line",yAxisIndex:1,barWidth:25,smooth:0,data:this.avals,itemStyle:{normal:{color:"#F78AE0"}}},{name:"预期赔付率",type:"line",yAxisIndex:2,barWidth:25,smooth:0,data:this.bvals,itemStyle:{normal:{color:"#FF5282"}}}]};this.drawLine("myChart6",e)},drawLine:function(e,a){var n=this.$echarts.init(document.getElementById(e),"light");n.clear(),n.setOption(a)},getClassBySector:function(e){this.currentid=e},handlePrev:function(){this.$router.push({path:"/admin/individual/declare/factorConfig"})},factorDivide:function(){this.$router.push({path:"/admin/individual/declare/factorDivide"})},queryDimension:function(e){var a=this;this.currentcd=e;var n=this.dimDetail.findIndex(function(a){return a.code===e});this.dimDetaiData=this.dimDetail[n].detail,this.rangeShow=this.dimDetail[n].rangeShow,this.dimdetainms=[],this.avals=[],this.bvals=[],this.cvals=[],this.dimDetaiData.forEach(function(e){a.dimdetainms.push(e.tag),a.avals.push(e.a),a.bvals.push(e.b),a.cvals.push(e.c)}),this.dimnm=this.dimDetail[n].name,this.draw()},removeDimension:function(e){var a=this.currentcds.findIndex(function(a){return a===e});this.currentcds.splice(a,1)},addDimension:function(e){this.currentcds.includes(e)||this.currentcds.push(e)}}},i={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"biz-content"},[n("biz-sector-list",{attrs:{title:"车种选择",sectors:e.data},on:{sectorClick:e.getClassBySector}}),e._v(" "),n("el-button",{attrs:{size:"small",plain:"",icon:"el-icon-plus"},on:{click:function(a){e.dimensionDialogVisible=!0}}},[e._v("新增因子")]),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple dimension-dialog"},[n("div",{staticClass:"dimension"},e._l(e.currentbizdim,function(a){return n("div",{key:a.code,class:e.currentcds.includes(a.code)?"item el-icon-circle-check active":"item",on:{click:function(n){e.queryDimension(a.code)}}},[n("span",[e._v(e._s(a.name))])])}))])]),e._v(" "),n("el-col",{attrs:{span:9}},[n("el-table",{attrs:{data:e.dimDetaiData,stripe:"","header-cell-style":e.tableHeader,height:"400px"}},[n("el-table-column",{attrs:{"header-align":"center",prop:"no",label:"序号","min-width":"50",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{"header-align":"center",prop:"tag",label:"标签","min-width":"200",align:"center"}}),e._v(" "),e.rangeShow?n("el-table-column",{attrs:{"header-align":"center",prop:"range",label:"标签范围","min-width":"250",align:"center"}}):e._e(),e._v(" "),e.rangeShow?e._e():n("el-table-column",{attrs:{"header-align":"center",prop:"down",label:"从()","min-width":"125",align:"center"}}),e._v(" "),e.rangeShow?e._e():n("el-table-column",{attrs:{"header-align":"center",prop:"up",label:"至(不含)","min-width":"125",align:"center"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:9}},[n("div",{style:{width:"100%",height:"400px"},attrs:{id:"myChart6"}})])],1),e._v(" "),n("div",{staticClass:"option"},[n("back-button",{attrs:{plain:""},on:{prev:e.handlePrev}},[e._v("上一步")]),e._v(" "),n("back-button",{attrs:{type:"next"},on:{next:e.factorDivide}},[e._v("推荐因子分组")])],1),e._v(" "),n("el-dialog",{attrs:{title:"添加维度",visible:e.dimensionDialogVisible,width:"30%"},on:{"update:visible":function(a){e.dimensionDialogVisible=a}}},e._l(e.currentbizdim,function(a){return n("el-tag",{key:a.code,attrs:{type:e.currentcds.includes(a.code)?"primary":"info"},nativeOn:{click:function(n){e.addDimension(a.code)}}},[e._v("\n      "+e._s(a.name)+"\n    ")])}))],1)},staticRenderFns:[]};var r=n("VU/8")(d,i,!1,function(e){n("d/BI")},"data-v-568eed64",null);a.default=r.exports}});