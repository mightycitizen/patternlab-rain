(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[3004],{"./src/stories/components/containers/hero.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Hero:function(){return Hero},__namedExportsOrder:function(){return __namedExportsOrder}});var _hero_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/containers/hero.twig"),_hero_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_hero_twig__WEBPACK_IMPORTED_MODULE_0__),_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/global/placeholders/components.json");__webpack_exports__.default={title:"Components/Containers/Hero"};const defaultArgs={..._global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_1__.rP,breadcrumbs:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_1__.Kb},Hero=(_ref=>{let{label:label,...args}=_ref;return _hero_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Hero.args=defaultArgs,Hero.parameters={...Hero.parameters,docs:{...Hero.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Hero.parameters?.docs?.source}}};const __namedExportsOrder=["Hero"]},"./src/stories/components/links/button.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'\n\n  <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" class="button'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"hollow",match:["hollow"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"hollow"}]}},{type:"raw",value:'">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:"\n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <i class="icon icon--small icon-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]}]},{type:"raw",value:'"></i>\n    '}]}},{type:"raw",value:"  </a>\n\n"}],id:"src/stories/components/links/button.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/button.twig",module.exports.default=module.exports}}]);