webpackJsonp([23],{QIEc:function(l,e,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"Supervise",components:{BaseTable:function(){return p.e(153).then(p.bind(null,"ss0d"))}},data:function(){return{supervise:{org:"01000",startmonth:"2017-01",endmonth:"2017-03",version:"20180101002003"},orgList:[{code:"01000",name:"北京分公司",flag:1},{code:"02001",name:"朝阳支公司",flag:2},{code:"02002",name:"丰台支公司",flag:2},{code:"02003",name:"大兴支公司",flag:2},{code:"02004",name:"东城支公司",flag:2},{code:"02005",name:"通州支公司",flag:2},{code:"02006",name:"房山支公司",flag:2},{code:"02007",name:"平谷支公司",flag:2},{code:"02008",name:"顺义支公司",flag:2},{code:"02009",name:"延庆支公司",flag:2},{code:"02010",name:"昌平支公司",flag:2},{code:"02011",name:"怀柔支公司",flag:2},{code:"02012",name:"海淀支公司",flag:2},{code:"27000",name:"山西省分公司",flag:1},{code:"02000",name:"山东省分公司",flag:1},{code:"03000",name:"江苏省分公司",flag:1},{code:"04000",name:"黑龙江省分公司",flag:1},{code:"05000",name:"重庆市分公司",flag:1},{code:"06000",name:"河南省分公司",flag:1},{code:"07000",name:"上海市分公司",flag:1},{code:"08000",name:"广东省分公司",flag:1},{code:"09000",name:"深圳市分公司",flag:1},{code:"10000",name:"天津市分公司",flag:1},{code:"11000",name:"青岛分公司",flag:1},{code:"12000",name:"辽宁省分公司",flag:1},{code:"13000",name:"河北省分公司",flag:1},{code:"14000",name:"海南省分公司",flag:1},{code:"15000",name:"广西分公司",flag:1},{code:"16000",name:"湖南省分公司",flag:1},{code:"17000",name:"浙江省分公司",flag:1},{code:"18000",name:"贵州省分公司",flag:1},{code:"19000",name:"四川省分公司",flag:1},{code:"20000",name:"青海省分公司",flag:1},{code:"21000",name:"云南省分公司",flag:1},{code:"22000",name:"陕西省分公司",flag:1},{code:"23000",name:"湖北省分公司",flag:1},{code:"24000",name:"吉林省分公司",flag:1},{code:"25000",name:"新疆分公司",flag:1},{code:"26000",name:"宁波市分公司",flag:1},{code:"28000",name:"大连市分公司",flag:1},{code:"29000",name:"甘肃省分公司",flag:1},{code:"30000",name:"安徽省分公司",flag:1},{code:"31000",name:"江西省分公司",flag:1},{code:"32000",name:"福建省分公司",flag:1},{code:"33000",name:"内蒙古分公司",flag:1},{code:"34000",name:"厦门市分公司",flag:1},{code:"35000",name:"宁夏自治区分公司",flag:1},{code:"36000",name:"西藏自治区分公司",flag:1}],data1:[{org:"传统直销"},{org:"新渠道直销"},{org:"电话、网络直销"},{org:"个人代理"},{org:"兼业代理"},{org:"专业代理"},{org:"经纪业务"}],data2:[{carType:"家庭自用车"},{carType:"营业客车"},{carType:"非营业客车"},{carType:"营业货车"},{carType:"非营业货车"},{carType:"其他"}],columns1:[{prop:"org",label:"渠道",width:"150"},{prop:"a",label:"标准保费",children:[{prop:"a1",label:"监管合规值(万元)",width:"150"},{prop:"a2",label:"实际值(万元)",width:"150"},{prop:"a3",label:"二者差(万元)",width:"150"}]},{prop:"b",label:"含NCD、自主核保系数、自主渠道系数的保费",children:[{prop:"b1",label:"监管合规值(万元)",width:"150"},{prop:"b2",label:"实际值(万元)",width:"150"},{prop:"b3",label:"二者差(万元)",width:"150"}]},{prop:"c",label:"含NCD的保费",children:[{prop:"c1",label:"监管合规值(万元)",width:"150"},{prop:"c2",label:"实际值(万元)",width:"150"},{prop:"c3",label:"二者差(万元)",width:"150"}]},{prop:"d",label:"自主核保系数平均值",children:[{prop:"d1",label:"监管合规值(%)",width:"150"},{prop:"d2",label:"实际值(%)",width:"150"},{prop:"d3",label:"二者差(%)",width:"150"}]},{prop:"e",label:"自主核保系数最低值",children:[{prop:"e1",label:"监管合规值(%)",width:"150"},{prop:"e2",label:"实际值(%)",width:"150"},{prop:"e3",label:"二者差(%)",width:"150"}]},{prop:"f",label:"自主核保系数最高值",children:[{prop:"f1",label:"监管合规值(%)",width:"150"},{prop:"f2",label:"实际值(%)",width:"150"},{prop:"f3",label:"二者差(%)",width:"150"}]},{prop:"g",label:"自主渠道系数平均值",children:[{prop:"g1",label:"监管合规值(%)",width:"150"},{prop:"g2",label:"实际值(%)",width:"150"},{prop:"g3",label:"二者差(%)",width:"150"}]},{prop:"h",label:"自主渠道系数最低值",children:[{prop:"h1",label:"监管合规值(%)",width:"150"},{prop:"h2",label:"实际值(%)",width:"150"},{prop:"h3",label:"二者差(%)",width:"150"}]},{prop:"i",label:"自主渠道系数最高值",children:[{prop:"i1",label:"监管合规值(%)",width:"150"},{prop:"i2",label:"实际值(%)",width:"150"},{prop:"i3",label:"二者差(%)",width:"150"}]},{prop:"j",label:"自主渠道系数平均值",children:[{prop:"j1",label:"监管合规值(%)",width:"150"},{prop:"j2",label:"实际值(%)",width:"150"},{prop:"j3",label:"二者差(%)",width:"150"}]},{prop:"k",label:"自主折扣系数最低值",children:[{prop:"k1",label:"监管合规值(%)",width:"150"},{prop:"k2",label:"实际值(%)",width:"150"},{prop:"k3",label:"二者差(%)",width:"150"}]},{prop:"l",label:"自主折扣系数最高值",children:[{prop:"l1",label:"监管合规值(%)",width:"150"},{prop:"l2",label:"实际值(%)",width:"150"},{prop:"l3",label:"二者差(%)",width:"150"}]},{prop:"m",label:"自主折扣系数平均值",children:[{prop:"m1",label:"监管合规值(%)",width:"150"},{prop:"m2",label:"实际值(%)",width:"150"},{prop:"m3",label:"二者差(%)",width:"150"}]},{prop:"n",label:"假设仍沿用行业旧基准费率的平均自主核保系数",children:[{prop:"n1",label:"监管合规值(%)",width:"150"},{prop:"n2",label:"实际值(%)",width:"150"},{prop:"n3",label:"二者差(%)",width:"150"}]},{prop:"o",label:"假设仍沿用行业旧基准费率的平均自主渠道系数",children:[{prop:"o1",label:"监管合规值(%)",width:"150"},{prop:"o2",label:"实际值(%)",width:"150"},{prop:"o3",label:"二者差(%)",width:"150"}]},{prop:"p",label:"假设仍沿用行业旧基准费率的平均自主折扣系数",children:[{prop:"p1",label:"监管合规值(%)",width:"150"},{prop:"p2",label:"实际值(%)",width:"150"},{prop:"p3",label:"二者差(%)",width:"150"}]},{prop:"q",label:"标准保费的保单年赔付率",children:[{prop:"q1",label:"监管合规值(%)",width:"150"},{prop:"q2",label:"实际值(%)",width:"150"},{prop:"q3",label:"二者差(%)",width:"150"}]},{prop:"r",label:"含NCD的保单年赔付率",children:[{prop:"r1",label:"监管合规值(%)",width:"150"},{prop:"r2",label:"实际值(%)",width:"150"},{prop:"r3",label:"二者差(%)",width:"150"}]},{prop:"s",label:"含NCD、自主核保系数的保单年赔付率",children:[{prop:"s1",label:"监管合规值(%)",width:"150"},{prop:"s2",label:"实际值(%)",width:"150"},{prop:"s3",label:"二者差(%)",width:"150"}]},{prop:"t",label:"含NCD、自主核保系数、自主渠道系数的保单年赔付率",children:[{prop:"t1",label:"监管合规值(%)",width:"150"},{prop:"t2",label:"实际值(%)",width:"150"},{prop:"t3",label:"二者差(%)",width:"150"}]},{prop:"u",label:"保单年费用率",children:[{prop:"u1",label:"监管合规值(%)",width:"150"},{prop:"u2",label:"实际值(%)",width:"150"},{prop:"u3",label:"二者差(%)",width:"150"}]},{prop:"v",label:"保单年单笔业务中介机构手续费率最高值",children:[{prop:"v1",label:"监管合规值(%)",width:"150"},{prop:"dv2",label:"实际值(%)",width:"150"},{prop:"v3",label:"二者差(%)",width:"150"}]},{prop:"w",label:"保单年中介机构手续费率平均值",children:[{prop:"w1",label:"监管合规值(%)",width:"150"},{prop:"w2",label:"实际值(%)",width:"150"},{prop:"w3",label:"二者差(%)",width:"150"}]},{prop:"x",label:"保单年单笔业务个人代理人费用率最高值",children:[{prop:"x1",label:"监管合规值(%)",width:"150"},{prop:"x2",label:"实际值(%)",width:"150"},{prop:"x3",label:"二者差(%)",width:"150"}]},{prop:"y",label:"保单年个人代理人费用率平均值",children:[{prop:"y1",label:"监管合规值(%)",width:"150"},{prop:"y2",label:"实际值(%)",width:"150"},{prop:"y3",label:"二者差(%)",width:"150"}]},{prop:"z",label:"保单年成本率",children:[{prop:"z1",label:"监管合规值(%)",width:"150"},{prop:"z2",label:"实际值(%)",width:"150"},{prop:"z3",label:"二者差(%)",width:"150"}]}],columns2:[{prop:"carType",label:"车种",width:"120"},{prop:"a",label:"标准保费",children:[{prop:"a1",label:"监管合规值(万元)",width:"150"},{prop:"a2",label:"实际值(万元)",width:"150"},{prop:"a3",label:"二者差(万元)",width:"150"}]},{prop:"b",label:"含NCD、自主核保系数、自主渠道系数的保费",children:[{prop:"b1",label:"监管合规值(万元)",width:"150"},{prop:"b2",label:"实际值(万元)",width:"150"},{prop:"b3",label:"二者差(万元)",width:"150"}]},{prop:"c",label:"含NCD的保费",children:[{prop:"c1",label:"监管合规值(万元)",width:"150"},{prop:"c2",label:"实际值(万元)",width:"150"},{prop:"c3",label:"二者差(万元)",width:"150"}]},{prop:"d",label:"自主核保系数平均值",children:[{prop:"d1",label:"监管合规值(%)",width:"150"},{prop:"d2",label:"实际值(%)",width:"150"},{prop:"d3",label:"二者差(%)",width:"150"}]},{prop:"e",label:"自主核保系数最低值",children:[{prop:"e1",label:"监管合规值(%)",width:"150"},{prop:"e2",label:"实际值(%)",width:"150"},{prop:"e3",label:"二者差(%)",width:"150"}]},{prop:"f",label:"自主核保系数最高值",children:[{prop:"f1",label:"监管合规值(%)",width:"150"},{prop:"f2",label:"实际值(%)",width:"150"},{prop:"f3",label:"二者差(%)",width:"150"}]},{prop:"g",label:"自主渠道系数平均值",children:[{prop:"g1",label:"监管合规值(%)",width:"150"},{prop:"g2",label:"实际值(%)",width:"150"},{prop:"g3",label:"二者差(%)",width:"150"}]},{prop:"h",label:"自主渠道系数最低值",children:[{prop:"h1",label:"监管合规值(%)",width:"150"},{prop:"h2",label:"实际值(%)",width:"150"},{prop:"h3",label:"二者差(%)",width:"150"}]},{prop:"i",label:"自主渠道系数最高值",children:[{prop:"i1",label:"监管合规值(%)",width:"150"},{prop:"i2",label:"实际值(%)",width:"150"},{prop:"i3",label:"二者差(%)",width:"150"}]},{prop:"j",label:"自主渠道系数平均值",children:[{prop:"j1",label:"监管合规值(%)",width:"150"},{prop:"j2",label:"实际值(%)",width:"150"},{prop:"j3",label:"二者差(%)",width:"150"}]},{prop:"k",label:"自主折扣系数最低值",children:[{prop:"k1",label:"监管合规值(%)",width:"150"},{prop:"k2",label:"实际值(%)",width:"150"},{prop:"k3",label:"二者差(%)",width:"150"}]},{prop:"l",label:"自主折扣系数最高值",children:[{prop:"l1",label:"监管合规值(%)",width:"150"},{prop:"l2",label:"实际值(%)",width:"150"},{prop:"l3",label:"二者差(%)",width:"150"}]},{prop:"m",label:"自主折扣系数平均值",children:[{prop:"m1",label:"监管合规值(%)",width:"150"},{prop:"m2",label:"实际值(%)",width:"150"},{prop:"m3",label:"二者差(%)",width:"150"}]},{prop:"n",label:"假设仍沿用行业旧基准费率的平均自主核保系数",children:[{prop:"n1",label:"监管合规值(%)",width:"150"},{prop:"n2",label:"实际值(%)",width:"150"},{prop:"n3",label:"二者差(%)",width:"150"}]},{prop:"o",label:"假设仍沿用行业旧基准费率的平均自主渠道系数",children:[{prop:"o1",label:"监管合规值(%)",width:"150"},{prop:"o2",label:"实际值(%)",width:"150"},{prop:"o3",label:"二者差(%)",width:"150"}]},{prop:"p",label:"假设仍沿用行业旧基准费率的平均自主折扣系数",children:[{prop:"p1",label:"监管合规值(%)",width:"150"},{prop:"p2",label:"实际值(%)",width:"150"},{prop:"p3",label:"二者差(%)",width:"150"}]},{prop:"q",label:"标准保费的保单年赔付率",children:[{prop:"q1",label:"监管合规值(%)",width:"150"},{prop:"q2",label:"实际值(%)",width:"150"},{prop:"q3",label:"二者差(%)",width:"150"}]},{prop:"r",label:"含NCD的保单年赔付率",children:[{prop:"r1",label:"监管合规值(%)",width:"150"},{prop:"r2",label:"实际值(%)",width:"150"},{prop:"r3",label:"二者差(%)",width:"150"}]},{prop:"s",label:"含NCD、自主核保系数的保单年赔付率",children:[{prop:"s1",label:"监管合规值(%)",width:"150"},{prop:"s2",label:"实际值(%)",width:"150"},{prop:"s3",label:"二者差(%)",width:"150"}]},{prop:"t",label:"含NCD、自主核保系数、自主渠道系数的保单年赔付率",children:[{prop:"t1",label:"监管合规值(%)",width:"150"},{prop:"t2",label:"实际值(%)",width:"150"},{prop:"t3",label:"二者差(%)",width:"150"}]},{prop:"u",label:"保单年费用率",children:[{prop:"u1",label:"监管合规值(%)",width:"150"},{prop:"u2",label:"实际值(%)",width:"150"},{prop:"u3",label:"二者差(%)",width:"150"}]},{prop:"v",label:"保单年单笔业务中介机构手续费率最高值",children:[{prop:"v1",label:"监管合规值(%)",width:"150"},{prop:"dv2",label:"实际值(%)",width:"150"},{prop:"v3",label:"二者差(%)",width:"150"}]},{prop:"w",label:"保单年中介机构手续费率平均值",children:[{prop:"w1",label:"监管合规值(%)",width:"150"},{prop:"w2",label:"实际值(%)",width:"150"},{prop:"w3",label:"二者差(%)",width:"150"}]},{prop:"x",label:"保单年单笔业务个人代理人费用率最高值",children:[{prop:"x1",label:"监管合规值(%)",width:"150"},{prop:"x2",label:"实际值(%)",width:"150"},{prop:"x3",label:"二者差(%)",width:"150"}]},{prop:"y",label:"保单年个人代理人费用率平均值",children:[{prop:"y1",label:"监管合规值(%)",width:"150"},{prop:"y2",label:"实际值(%)",width:"150"},{prop:"y3",label:"二者差(%)",width:"150"}]},{prop:"z",label:"保单年成本率",children:[{prop:"z1",label:"监管合规值(%)",width:"150"},{prop:"z2",label:"实际值(%)",width:"150"},{prop:"z3",label:"二者差(%)",width:"150"}]}]}}},r={render:function(){var l=this,e=l.$createElement,p=l._self._c||e;return p("div",{staticClass:"container"},[p("div",{staticClass:"form"},[p("el-form",{ref:"inspectForm",attrs:{"label-width":"120px",model:l.supervise,inline:!0}},[p("el-form-item",{attrs:{label:"机构",prop:"org"}},[p("el-select",{attrs:{placeholder:"请选择机构",clearable:""},model:{value:l.supervise.org,callback:function(e){l.$set(l.supervise,"org",e)},expression:"supervise.org"}},l._l(l.orgList,function(l){return p("el-option",{key:l.code,attrs:{value:l.code,label:l.name}})}))],1),l._v(" "),p("el-form-item",{attrs:{label:"回溯区间",prop:"monthrange"}},[p("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM"},model:{value:l.supervise.startmonth,callback:function(e){l.$set(l.supervise,"startmonth",e)},expression:"supervise.startmonth"}}),l._v(" "),p("span",[l._v("至")]),l._v(" "),p("el-date-picker",{attrs:{type:"month",placeholder:"选择月","value-format":"yyyy-MM"},model:{value:l.supervise.endmonth,callback:function(e){l.$set(l.supervise,"endmonth",e)},expression:"supervise.endmonth"}})],1),l._v(" "),p("el-form-item",{attrs:{label:"费率方案版本",prop:"version"}},[p("el-select",{attrs:{placeholder:"请选择费率方案版本",clearable:""},model:{value:l.supervise.version,callback:function(e){l.$set(l.supervise,"version",e)},expression:"supervise.version"}},[p("el-option",{attrs:{value:"20180101002003",label:"20180101002003"}}),l._v(" "),p("el-option",{attrs:{value:"20180301002005",label:"20180301002005"}}),l._v(" "),p("el-option",{attrs:{value:"20180501002007",label:"20180501002007"}})],1)],1)],1)],1),l._v(" "),p("div",{staticClass:"option"},[p("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[l._v("检视")]),l._v(" "),p("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[l._v("导出报表")]),l._v(" "),p("el-button",{attrs:{plain:"",type:"primary",size:"small"}},[l._v("查看预警报告")])],1),l._v(" "),p("el-tabs",{attrs:{type:"border-card"}},[p("el-tab-pane",{attrs:{label:"分渠道"}},[p("base-table",{attrs:{showSummary:!0,columns:l.columns1,data:l.data1}})],1),l._v(" "),p("el-tab-pane",{attrs:{label:"分车种"}},[p("base-table",{attrs:{showSummary:!0,columns:l.columns2,data:l.data2}}),l._v(" "),p("div",{staticStyle:{"background-color":"#f5f7fa","margin-top":"1px","padding-top":"20px","padding-left":"40px","padding-bottom":"20px","box-sizing":"border-box"}},[l._v("其中:新车")])],1)],1)],1)},staticRenderFns:[]};var o=p("VU/8")(a,r,!1,function(l){p("TfC6")},"data-v-dbf14006",null);e.default=o.exports},TfC6:function(l,e){}});