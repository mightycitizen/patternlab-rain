(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[7681],{"./src/stories/components/links/link.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Link:function(){return Link},__namedExportsOrder:function(){return __namedExportsOrder}});var _link_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/links/link.twig"),_link_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_link_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Links/Link",argTypes:{text:{control:"text"},url:{control:"text"},size:{control:{type:"select"},options:["","h3"]}}};const Link=(_ref=>{let{label:label,...args}=_ref;return _link_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Link.args={text:"Link Text",url:"#"},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Link.parameters?.docs?.source}}};const __namedExportsOrder=["Link"]},"./src/stories/components/links/link.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.test",filter:"defined",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"url",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"text",expression:[{type:"Twig.expression.type.variable",value:"customText",match:["customText"]}]}}]}},{type:"raw",value:'<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n"}],id:"src/stories/components/links/link.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/link.twig",module.exports.default=module.exports}}]);