"use strict";(self.webpackChunkOnline_Service=self.webpackChunkOnline_Service||[]).push([[411],{8411:function(n,e,t){t.r(e);var a=t(4165),r=t(5861),i=t(9439),o=t(2791),s=t(2639),l=t(1057),d=t(9603),c=t(3352),m=t(5750),x=t(184),h=s.Z.TextArea;e.default=function(){var n=(0,o.useState)('<?xml version="1.0"?>\n<ROWSET>\n<ROW>\n<id>1</id>\n<name>Johnson, Smith, and Jones Co.</name>\n<amount>345.33</amount>\n<Remark>Pays on time</Remark>\n</ROW>\n<ROW>\n<id>2</id>\n<name>Sam &quot;Mad Dog&quot; Smith</name>\n<amount>993.44</amount>\n<Remark></Remark>\n</ROW>\n<ROW>\n<id>3</id>\n<name>Barney &amp; Company</name>\n<amount>0</amount>\n<Remark>Great to work with\nand always pays with cash.</Remark>\n</ROW>\n<ROW>\n<id>4</id>\n<name>Johnson&apos;s Automotive</name>\n<amount>2344</amount>\n<Remark></Remark>\n</ROW>\n</ROWSET>'),e=(0,i.Z)(n,2),t=e[0],s=e[1],p=(0,o.useState)(""),u=(0,i.Z)(p,2),f=u[0],g=u[1],v=function(){var n=(0,r.Z)((0,a.Z)().mark((function n(){var e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/graphql",{method:"POST",body:{query:"mutation X($xml: String!) {\n                convertXml2Json(xml: $xml)\n              }",variables:{xml:t},operationName:"X"}});case 2:e=n.sent,g(null===e||void 0===e?void 0:e.convertXml2Json);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,x.jsxs)(m.Q,{children:[(0,x.jsx)("div",{class:"converter-head-bg",children:(0,x.jsx)("div",{class:"container",children:(0,x.jsx)("div",{class:"h-100",children:(0,x.jsxs)("div",{class:"flex-top",children:[(0,x.jsx)("div",{class:"tool-heading",children:(0,x.jsx)("h1",{children:"XML to JSON"})}),(0,x.jsx)("div",{class:"tool-description",children:(0,x.jsx)("p",{children:"Convert XML data to JSON format for easier handling in modern web applications and APIs."})})]})})})}),(0,x.jsxs)(l.Z,{style:{margin:"10px"},class:"row",children:[(0,x.jsxs)(d.Z,{span:10,class:"column",children:[(0,x.jsx)("div",{className:"text",children:"XML:"}),(0,x.jsx)(h,{onChange:function(n){var e=n.target.value;s(e)},rows:20,value:t})]}),(0,x.jsx)(d.Z,{className:"t-center",span:4,class:"column",children:(0,x.jsx)(c.ZP,{onClick:v,children:"Convert to JSON"})}),(0,x.jsxs)(d.Z,{span:10,class:"column",children:[(0,x.jsx)("div",{className:"text",children:"JSON:"}),(0,x.jsx)(h,{readOnly:!0,value:f,rows:20})]})]})]})}},5750:function(n,e,t){t.d(e,{Q:function(){return i}});var a,r=t(168),i=t(3517).ZP.div(a||(a=(0,r.Z)(['\n/* .all-row{\n  margin-left: 70px;\n  margin-right: 70px;\n} */\n.ant-row.css-dev-only-do-not-override-18iikkb {\n    margin-right: 70px;\n    margin-left: 70px;\n}\n.converter-head-bg {\n    background: url(/converter-header-bg.svg);\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.tool-description {\n    flex: 2.1;\n    text-align: right;\n}\n.container {\n    width: 1200px;\n    max-width: 100%;\n    margin: 0 auto;\n    padding: 0 10px;\n}\n.h-100 {\n    min-height: 90px;\n    padding: 25px 0;\n}\n.flex-top {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n.tool-description p {\n    color: #fff;\n    font-size: var(--font-size-x-default);\n}\n.tool-heading {\n    flex: 2;\n}\n.tool-heading h1 {\n    color: #fff;\n    font-size: 28px;\n    font-weight: 700;\n}\n * {\n  box-sizing: border-box;\n}\n.t-center{\n  text-align: center;\n    display: grid;\n    align-items: center;\n    Button{\n      margin-right: 30px;\n      margin-left: 30px;\n    }\n}\n.text{\n  font-size: 2.5rem!important;\n}\n.row {\n  margin-left:-5px;\n  margin-right:-5px;\n \n  \n}\n  \n.column {\n  float: left;\n  width: 50%;\n  padding: 5px;\n}\n\n/* Clearfix (clear floats) */\n.row::after {\n  content: "";\n  clear: both;\n  display: table;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\n\nth, td {\n  text-align: left;\n  padding: 16px;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n'])))}}]);
//# sourceMappingURL=411.f0559ac7.chunk.js.map