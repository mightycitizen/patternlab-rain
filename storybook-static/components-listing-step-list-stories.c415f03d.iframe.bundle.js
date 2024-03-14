(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[8423],{"./src/stories/components/listing/step-list.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StepList:function(){return StepList},__namedExportsOrder:function(){return __namedExportsOrder}});var _step_list_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/listing/step-list.twig"),_step_list_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_step_list_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Listing/Steps",argTypes:{}};const StepList=(_ref=>{let{label:label,...args}=_ref;return _step_list_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});StepList.args={steps:[{heading:"Test",description:"Test",link:{text:"Test",url:"#"}}]},StepList.parameters={...StepList.parameters,docs:{...StepList.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...StepList.parameters?.docs?.source}}};const __namedExportsOrder=["StepList"]},"./src/stories/components/links/link.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.test",filter:"defined",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"url",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"text",expression:[{type:"Twig.expression.type.variable",value:"customText",match:["customText"]}]}}]}},{type:"raw",value:'<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n"}],id:"src/stories/components/links/link.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/link.twig",module.exports.default=module.exports},"./src/stories/components/links/read-more.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/link.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<span class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n  '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/link.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"text",match:["text"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"target"},{type:"Twig.expression.type.variable",value:"target",match:["target"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.string",value:"read-more"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"</span>\n"}],id:"src/stories/components/links/read-more.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/read-more.twig",module.exports.default=module.exports},"./src/stories/components/listing/step-list.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/read-more.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<ol class="step-list">\n  '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"step",expression:[{type:"Twig.expression.type.variable",value:"steps",match:["steps"]}],output:[{type:"raw",value:'    <li>\n      <h3 class="mb-2">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"heading"}]},{type:"raw",value:'</h3>\n      <p class="mb-3">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"description"}]},{type:"raw",value:"</p>\n      "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"link"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/read-more.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"link"},{type:"Twig.expression.type.key.period",key:"text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"link"},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"target"},{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"link"},{type:"Twig.expression.type.key.period",key:"target"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"      "}]}},{type:"raw",value:"    </li>\n  "}]}},{type:"raw",value:"\n</ol>\n"}],id:"src/stories/components/listing/step-list.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/listing/step-list.twig",module.exports.default=module.exports}}]);