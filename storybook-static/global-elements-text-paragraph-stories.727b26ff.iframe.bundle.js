(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[352],{"./src/stories/global/elements/text/paragraph.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Paragraph:function(){return Paragraph},__namedExportsOrder:function(){return __namedExportsOrder}});var _paragraph_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/global/elements/text/paragraph.twig"),_paragraph_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_paragraph_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Global/Elements/Paragraph"};const Paragraph=(_ref=>{let{label:label,...args}=_ref;return _paragraph_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Paragraph.parameters={...Paragraph.parameters,docs:{...Paragraph.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Paragraph.parameters?.docs?.source}}};const __namedExportsOrder=["Paragraph"]},"./src/stories/global/elements/text/paragraph.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<p>A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>'}],id:"src/stories/global/elements/text/paragraph.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/global/elements/text/paragraph.twig",module.exports.default=module.exports}}]);