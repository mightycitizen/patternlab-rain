(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[2392],{"./src/stories/components/inline-text/date.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Date:function(){return Date},__namedExportsOrder:function(){return __namedExportsOrder}});var _date_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/inline-text/date.twig"),_date_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_date_twig__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__.default={title:"Components/Inline Text/Date"};const Date=(_ref=>{let{label:label,...args}=_ref;return _date_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Date.args={day:"1",month_short:"Jan",unformatted:"2020-01-01"},Date.parameters={...Date.parameters,docs:{...Date.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Date.parameters?.docs?.source}}};const __namedExportsOrder=["Date"]},"./src/stories/components/inline-text/date.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<time class="date" datetime="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"unformatted",match:["unformatted"]}]},{type:"raw",value:'">\n  <div class="date_month">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"month_short",match:["month_short"]}]},{type:"raw",value:'</div>\n  <div class="date_day">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"day",match:["day"]}]},{type:"raw",value:"</div>\n</time>\n"}],id:"src/stories/components/inline-text/date.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/inline-text/date.twig",module.exports.default=module.exports}}]);