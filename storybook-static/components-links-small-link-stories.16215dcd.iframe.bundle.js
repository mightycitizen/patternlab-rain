(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[2694],{"./src/stories/components/links/small-link.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SmallLink:function(){return SmallLink},__namedExportsOrder:function(){return __namedExportsOrder}});var _small_link_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/links/small-link.twig"),_small_link_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_small_link_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Links/Small Link",argTypes:{}};const SmallLink=(_ref=>{let{label:label,...args}=_ref;return _small_link_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});SmallLink.args={text:"Small Link",url:"#"},SmallLink.parameters={...SmallLink.parameters,docs:{...SmallLink.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...SmallLink.parameters?.docs?.source}}};const __namedExportsOrder=["SmallLink"]},"./src/stories/components/links/small-link.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<a class="text-smaller fw-bold font-secondary"  href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n"}],id:"src/stories/components/links/small-link.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/small-link.twig",module.exports.default=module.exports}}]);