(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[8429],{"./src/stories/components/modules/wysiwyg.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Wysiwyg:function(){return Wysiwyg},__namedExportsOrder:function(){return __namedExportsOrder}});var _wysiwyg_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/modules/wysiwyg.twig"),_wysiwyg_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_wysiwyg_twig__WEBPACK_IMPORTED_MODULE_0__),_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/global/placeholders/components.json");__webpack_exports__.default={title:"Components/Modules/WYSIWYG",argTypes:{}};const defaultArgs={wysiwyg:_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_1__.W6},Wysiwyg=(_ref=>{let{label:label,...args}=_ref;return _wysiwyg_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})}).bind({});Wysiwyg.args=defaultArgs,Wysiwyg.parameters={...Wysiwyg.parameters,docs:{...Wysiwyg.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...Wysiwyg.parameters?.docs?.source}}};const __namedExportsOrder=["Wysiwyg"]},"./src/stories/components/links/button.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'\n\n  <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" class="button'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.variable",value:"color",match:["color"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"hollow",match:["hollow"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"hollow"}]}},{type:"raw",value:'">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:"\n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <i class="icon icon--small icon-'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"]}]},{type:"raw",value:'"></i>\n    '}]}},{type:"raw",value:"  </a>\n\n"}],id:"src/stories/components/links/button.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/button.twig",module.exports.default=module.exports},"./src/stories/components/modules/wysiwyg.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/sections/section.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.string",value:"section--tight section--wysiwyg "},{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"wysiwyg",match:["wysiwyg"]}]},{type:"raw",value:"\n  "}]}}]}}],id:"src/stories/components/modules/wysiwyg.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/modules/wysiwyg.twig",module.exports.default=module.exports},"./src/stories/components/sections/section.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/button.twig"),__webpack_require__("./src/stories/layout/structure/content-narrow.twig"),__webpack_require__("./src/stories/layout/structure/content-narrower.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"intro_class",expression:[{type:"Twig.expression.type.string",value:"text-center"}]}}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"intro",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <div class="section_intro '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"]}]},{type:"raw",value:'">\n        <div class="grid-x grid-margin-x align-middle align-center">\n          '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'            <div class="cell medium-5 large-6"  data-scroll-show data-scroll-from="left">\n              <div class="image-size--landscapeCroppedMedium">\n                <img data-src="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'" alt="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.key.period",key:"alt"}]},{type:"raw",value:'" class="js-lazy">\n              </div>\n            </div>\n          '}]}},{type:"raw",value:'          <div class="cell '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"medium-7 large-6"}]}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"raw",value:"medium-8"}]}},{type:"raw",value:'">\n            <h2 class="section_heading">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]}]},{type:"raw",value:"</h2>\n            "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'              <h3 class="section_subheading">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"]}]},{type:"raw",value:"</h3>\n            "}]}},{type:"raw",value:"            "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'              <p class="lead">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]}]},{type:"raw",value:"</p>\n            "}]}},{type:"raw",value:"            "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"              "},{type:"logic",token:{type:"Twig.logic.type.include",only:4,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/button.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"color"},{type:"Twig.expression.type.string",value:"secondary"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]}},{type:"raw",value:"            "}]}},{type:"raw",value:"          </div>\n        </div>\n      </div>\n    "}]}}]}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"content",output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type._function",fn:"block",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"section_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["| trim","trim"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],output:[{type:"raw",value:'    <div class="section_content" data-scroll-show>\n      '},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",output:[{type:"raw",value:"      "}]}},{type:"raw",value:"    </div>\n  "}]}}]}},{type:"raw",value:"<section "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="section '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"style",match:["style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"section--"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"style",match:["style"]}]},{type:"raw",value:" "}]}},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"collapse",match:["collapse"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"section--collapse"}]}},{type:"raw",value:'" >\n  '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'<div class="js-lazy section_background" data-bg="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'"></div>'}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background_slick",match:["section_background_slick"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'<img class="section_background" data-slick-background="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_background_slick",match:["section_background_slick"]}]},{type:"raw",value:'"/>'}]}},{type:"raw",value:'  <div class="'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"exclude_container",match:["exclude_container"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"raw",value:"grid-container"}]}},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"grid_class",match:["grid_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n    '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"side"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:'      <div class="grid-x align-middle align-center">\n        <div class="cell medium-8">\n          '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"]}]},{type:"raw",value:'\n        </div>\n        <div class="cell large-4">\n          '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n        </div>\n      </div>\n    "}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"      "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"]}]},{type:"raw",value:"\n      "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.operator.binary",value:"or",precidence:14,associativity:"leftToRight",operator:"or"}]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}]},{type:"Twig.expression.type.variable",value:"exclude_container",match:["exclude_container"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"content",output:[{type:"raw",value:"          "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n        "}]}},{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"            "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/layout/structure/content-narrower.twig"}]}},{type:"raw",value:"        "}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"            "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/layout/structure/content-narrow.twig"}]}},{type:"raw",value:"        "}]}},{type:"raw",value:"\n      "}]}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],output:[{type:"raw",value:"        "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n      "}]}},{type:"raw",value:"\n\n    "}]}},{type:"raw",value:"\n  </div>\n</section>\n"}],id:"src/stories/components/sections/section.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/sections/section.twig",module.exports.default=module.exports},"./src/stories/layout/structure/content-narrow.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'\n<div class="grid-x grid-margin-x align-center">\n    <div class="cell large-10">\n      '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n    </div>\n</div>\n"}],id:"src/stories/layout/structure/content-narrow.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/layout/structure/content-narrow.twig",module.exports.default=module.exports},"./src/stories/layout/structure/content-narrower.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="grid-x grid-margin-x align-center">\n    <div class="cell large-8">\n      '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n    </div>\n</div>\n"}],id:"src/stories/layout/structure/content-narrower.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/layout/structure/content-narrower.twig",module.exports.default=module.exports},"./src/stories/global/placeholders/components.json":function(module){"use strict";module.exports=JSON.parse('{"Kb":[{"url":"#","text":"Home"},{"url":"#","text":"Parent Page"},{"text":"Current Page"}],"uP":{"value":9,"text":"Lorem ipsum"},"Ok":[{"text":"Link","url":"#"},{"text":"Link","url":"#"},{"text":"Link","url":"#"},{"text":"Link","url":"#"},{"text":"Link","url":"#"},{"text":"Link","url":"#"}],"eA":[{"id":"tab-1","text":"Tab 1","content":"<p>Tab 1 content</p>"},{"id":"tab-2","text":"Tab 2","content":"<p>Tab 2 content</p>"}],"S6":[{"heading":"Heading","description":"Description","link":{"text":"Link","url":"#","target":"_blank"}},{"heading":"Heading","description":"Description","link":{"text":"Link","url":"#","target":"_blank"}},{"heading":"Heading","description":"Description","link":{"text":"Link","url":"#","target":"_blank"}}],"TU":{"accordion_id":"accordion","items":[{"heading":"Curabitur aliquet quam id dui posuere blandit.","content":"<p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>"},{"heading":"Curabitur aliquet quam","content":"<p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>"},{"heading":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam tempor orci. Auctor eu augue ut lectus arcu bibendum at varius. Risus ultricies tristique nulla aliquet enim tortor at auctor.</p>"}]},"PX":{"heading":"Heading","subheading":"Subheading","description":"Description","link":{"text":"Link","url":"#"},"items":[{"label":"Phone","value":"(###) ### - ####"},{"label":"Email","url":"mailto:example@domain.com","value":"example@domain.com"},{"label":"Location","value":"Address here\\r\\nRoom\\r\\n"}]},"oA":{"previous":null,"pages":[{"url":"","index":1,"current":true},{"url":"","index":2},{"url":"","index":3},{"ellipses":true},{"url":"","index":10}],"next":"#"},"bG":{"quote":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.","image":{"src":"https://source.unsplash.com/9wg5jCEPBsw/400x400","alt":"Alt Text"},"attribution":{"label":"Firstname Lastname","info":"Title"}},"rP":{"heading":"Hero","subheading":"Subheading"},"In":{"heading":{"text":"Heading","url":"#","level":3},"image":{"src":"https://source.unsplash.com/9wg5jCEPBsw/430x230","alt":"Alt Text"},"link":{"text":"Link","url":"#"}},"Rk":{"trigger":"click","video_type":"youtube","video_id":"gJ6APKIjFQY","image":{"src":"//via.placeholder.com/900x500","alt":""}},"W6":"<h1>h1. Heading</h1><h2>h2. Heading</h2><h3>h3. Heading</h3><h4>h4. Heading</h4><h5>h5. Heading</h5><h6>h6. Heading</h6><h2><a href=\'\'>h2. Heading Link</a></h2><h3><a href=\'\'>h3. Heading Link</a></h3><h4><a href=\'\'>h4. Heading Link</a></h4><h5><a href=\'\'>h5. Heading Link</a></h5><h6><a href=\'\'>h6. Heading Link</a></h6>  <h2>Heading 2</h2>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo ac leo vestibulum cursus sit amet sit amet eros. Curabitur ante ex, consectetur quis felis at, aliquam sodales urna. Vivamus at hendrerit lacus, aliquet imperdiet quam. Nulla finibus hendrerit volutpat. Curabitur tempus leo ac ligula luctus, nec consequat velit pellentesque. Sed ornare leo finibus gravida vulputate. Cras varius sem sit amet tortor volutpat feugiat. Vivamus maximus hendrerit turpis non volutpat. Donec venenatis, enim eu accumsan venenatis, mauris lectus suscipit quam, sit amet feugiat mi lorem et augue.</p>  <p>Vivamus maximus, sem nec mattis pretium, dolor dui egestas lectus, id viverra lorem diam ac sapien. Quisque id maximus eros. Vestibulum ut lorem ac ipsum luctus tincidunt. In facilisis venenatis lacus ac ultrices. Sed id enim sit amet lacus tempus porttitor quis ut ante. Mauris ac enim convallis, ornare nulla ut, mattis lectus. Quisque vitae maximus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In est sem, imperdiet nec lacus quis, eleifend posuere purus. Mauris vestibulum, magna ac tempor lacinia, lacus turpis ultricies libero, bibendum congue quam est et metus. Curabitur vel sem vitae orci ornare tristique. Vestibulum in pulvinar risus. Sed tristique tempor lectus, vitae semper mauris accumsan sit amet. Phasellus varius eros ac nibh vulputate, ut mollis velit eleifend.</p>  <h2>Heading 2</h2>  <h3>Heading 3</h3>  <p>Cras ipsum justo, sollicitudin sit amet egestas sit amet, hendrerit ac leo.</p>  <a href=\'\' class=\'button\'>Button</a>  <hr>  <h3>Heading 3</h3>  <p>Morbi tellus velit, rutrum non turpis rutrum, condimentum pharetra felis. Praesent consequat convallis luctus</p>  <a href=\'\' class=\'button\'>Button</a>  <hr>  <h3>Heading 3</h3>  <p>Praesent consequat convallis luctus. In volutpat tortor et purus commodo euismod. In vitae elit vel nibh imperdiet bibendum. Donec eget dui metus.</p>  <a href=\'\' class=\'button\'>Button</a>  <hr>  <h2>Heading 2</h2>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo ac leo vestibulum cursus sit amet sit amet eros. Curabitur ante ex, consectetur quis felis at, aliquam sodales urna. Vivamus at hendrerit lacus, aliquet imperdiet quam. Nulla finibus hendrerit volutpat. Curabitur tempus leo ac ligula luctus, nec consequat velit pellentesque. Sed ornare leo finibus gravida vulputate. Cras varius sem sit amet tortor volutpat feugiat. Vivamus maximus hendrerit turpis non volutpat. Donec venenatis, enim eu accumsan venenatis, mauris lectus suscipit quam, sit amet feugiat mi lorem et augue.</p>  <h3>Heading 3</h3>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo ac leo vestibulum cursus sit amet sit amet eros. Curabitur ante ex, consectetur quis felis at, aliquam sodales urna. Vivamus at hendrerit lacus, aliquet imperdiet quam. Nulla finibus hendrerit volutpat. Curabitur tempus leo ac ligula luctus, nec consequat velit pellentesque. Sed ornare leo finibus gravida vulputate. Cras varius sem sit amet tortor volutpat feugiat. Vivamus maximus hendrerit turpis non volutpat. Donec venenatis, enim eu accumsan venenatis, mauris lectus suscipit quam, sit amet feugiat mi lorem et augue.</p>  <h4>Heading 4</h4>  <p>Cras ipsum justo, sollicitudin sit amet egestas sit amet, hendrerit ac leo. Ut eu tincidunt justo.</p>  <h4>Heading 4</h4>  <p>Ut eu tincidunt justo. Morbi tellus velit, rutrum non turpis rutrum, condimentum pharetra felis. Praesent consequat convallis luctus. In volutpat tortor et purus commodo euismod. In vitae elit vel nibh imperdiet bibendum. Donec eget dui metus. Praesent nunc ipsum, fringilla eget mollis ut, auctor ac mi. Quisque sollicitudin leo id odio feugiat molestie. Ut at ultricies ante. Aliquam erat volutpat. Suspendisse eu eleifend libero. Morbi at diam auctor, congue augue at, rhoncus risus. Aliquam pulvinar ac sapien eu cursus. Sed lorem libero, congue eget ligula eget, ultricies sollicitudin elit. Sed non leo vitae eros laoreet ornare.</p>  <h5>Heading 5</h5>  <p>Cras ipsum justo, sollicitudin sit amet egestas sit amet, hendrerit ac leo. Ut eu tincidunt justo. Morbi tellus velit, rutrum non turpis rutrum, condimentum pharetra felis. Praesent consequat convallis luctus. In volutpat tortor et purus commodo euismod. In vitae elit vel nibh imperdiet bibendum. Donec eget dui metus. Praesent nunc ipsum, fringilla eget mollis ut, auctor ac mi. Quisque sollicitudin leo id odio feugiat molestie. Ut at ultricies ante. Aliquam erat volutpat. Suspendisse eu eleifend libero. Morbi at diam auctor, congue augue at, rhoncus risus. Aliquam pulvinar ac sapien eu cursus. Sed lorem libero, congue eget ligula eget, ultricies sollicitudin elit. Sed non leo vitae eros laoreet ornare.</p>  <h3>Heading 3</h3>  <p>Cras ipsum justo, sollicitudin sit amet egestas sit amet, hendrerit ac leo. Ut eu tincidunt justo. Morbi tellus velit, rutrum non turpis rutrum, condimentum pharetra felis. Praesent consequat convallis luctus. In volutpat tortor et purus commodo euismod. In vitae elit vel nibh imperdiet bibendum. Donec eget dui metus. Praesent nunc ipsum, fringilla eget mollis ut, auctor ac mi. Quisque sollicitudin leo id odio feugiat molestie. Ut at ultricies ante. Aliquam erat volutpat. Suspendisse eu eleifend libero. Morbi at diam auctor, congue augue at, rhoncus risus. Aliquam pulvinar ac sapien eu cursus. Sed lorem libero, congue eget ligula eget, ultricies sollicitudin elit. Sed non leo vitae eros laoreet ornare.</p>  <h2>Heading 2</h2>  <p>Maecenas ac condimentum eros, id consequat eros. Fusce felis nunc, ultricies porttitor mauris eu, eleifend faucibus enim. In finibus eu enim quis iaculis. Fusce non consectetur libero, eu fermentum eros. Maecenas consectetur orci in tincidunt rutrum. Integer ullamcorper sapien id nisi venenatis, mattis eleifend diam scelerisque. Pellentesque pretium pulvinar tortor ac sollicitudin. Maecenas faucibus, erat eget finibus scelerisque, diam arcu eleifend augue, ac blandit erat nisi at magna. Maecenas malesuada et tellus et tincidunt. Morbi volutpat rhoncus sapien, id porttitor ligula convallis nec. Donec nec quam eget enim laoreet euismod. Suspendisse accumsan iaculis bibendum. Phasellus porta, sapien eget lacinia aliquam, lacus lacus convallis augue, eu tincidunt erat ante eu quam. Donec sagittis diam sed pellentesque dictum.</p>  <figure><img src=\'//source.unsplash.com/9wg5jCEPBsw/853x500\' alt=\'\'><figcaption>Caption here</figcaption></figure>  <div class=\'table-scroll-wrapper\'><div class=\'table-scroll\'><table><thead>  <tr>    <th scope=\'col\'>Table Heading 1</th>    <th scope=\'col\'>Table Heading 2</th>    <th scope=\'col\'>Table Heading 3</th>    <th scope=\'col\'>Table Heading 4</td>    <td>Table Heading 5</td>  </tr></thead><tbody><tr>  <td>Table Cell 1</td>  <td>Table Cell 2</td>  <td>Table Cell 3</td>  <td>Table Cell 4</td>  <td>Table Cell 5</td></tr><tr>  <td>Table Cell 1</td>  <td>Table Cell 2</td>  <td>Table Cell 3</td>  <td>Table Cell 4</td>  <td>Table Cell 5</td></tr><tr>  <td>Table Cell 1</td>  <td>Table Cell 2</td>  <td>Table Cell 3</td>  <td>Table Cell 4</td>  <td>Table Cell 5</td></tr><tr>  <td>Table Cell 1</td>  <td>Table Cell 2</td>  <td>Table Cell 3</td>  <td>Table Cell 4</td>  <td>Table Cell 5</td></tr></tbody></table></div></div>  <p>A paragraph (from the Greek paragraphos, \'to write beside\' or \'written beside\') is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>    <ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li><li><a href=\'#\'>Aenean euismod</a> bibendum laoreet. </li><li>Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. </li></ul>  <ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li><li>Aenean euismod bibendum laoreet. </li><li>Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. </li></ol>  <blockquote><p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.</p><cite>Name, Title</cite></blockquote>  <p>    <span class=\'\'><a href=\'#\' class=\'read-more\'>Read More</a></span>  </p>  <p>Etiam condimentum varius arcu vel aliquet. Nulla sed dolor non dui pulvinar euismod. Aliquam sit amet est ac augue ornare hendrerit in eget massa. Vivamus eget accumsan nisi. Morbi non aliquet massa. Fusce laoreet tincidunt enim. Curabitur quam enim, tempus feugiat fringilla non, fermentum vel nulla. Vestibulum placerat felis augue. Mauris eget nisi id lorem iaculis dapibus.</p>"}')}}]);