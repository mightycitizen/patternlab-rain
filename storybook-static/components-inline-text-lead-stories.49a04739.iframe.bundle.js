(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[1189],{"./src/stories/components/inline-text/lead.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Lead:function(){return Lead},__namedExportsOrder:function(){return __namedExportsOrder}});var _lead_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/inline-text/lead.twig"),_lead_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_lead_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Inline Text/Lead"};const Lead=(_ref=>{let{label:label,...args}=_ref;return _lead_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Lead.args={text:"Lead"},Lead.parameters={...Lead.parameters,docs:{...Lead.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Lead.parameters?.docs?.source}}};const __namedExportsOrder=["Lead"]},"./src/stories/components/inline-text/lead.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<p class="lead">\n  '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"\n</p>\n"}],id:"src/stories/components/inline-text/lead.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/inline-text/lead.twig",module.exports.default=module.exports}}]);