(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[9248],{"./src/stories/components/teasers/card/card-horizontal.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},FlushImage:function(){return FlushImage},NoImage:function(){return NoImage},__namedExportsOrder:function(){return __namedExportsOrder}});var _card_horizontal_twig__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/components/teasers/card/card-horizontal.twig"),_card_horizontal_twig__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_card_horizontal_twig__WEBPACK_IMPORTED_MODULE_0__),_global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/global/placeholders/components.json"),_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/global/placeholders/images.json");__webpack_exports__.default={title:"Components/Teasers/Horizontal Card"};const Template=_ref=>{let{label:label,...args}=_ref;return _card_horizontal_twig__WEBPACK_IMPORTED_MODULE_0___default()({label:label,...args})},imageDimensions=_global_placeholders_images_json__WEBPACK_IMPORTED_MODULE_2__.J.landscapeCroppedMedium,defaultArgs={..._global_placeholders_components_json__WEBPACK_IMPORTED_MODULE_1__.In,image:{src:"https://source.unsplash.com/9wg5jCEPBsw/".concat(imageDimensions.width,"x").concat(imageDimensions.height),alt:"Alt Text"}},Default=Template.bind({});Default.args=defaultArgs;const NoImage=Template.bind({});NoImage.args={...defaultArgs,image:null};const FlushImage=Template.bind({});FlushImage.args={...defaultArgs,image_position:"flush"};const __namedExportsOrder=["Default","NoImage","FlushImage"]},"./src/stories/components/links/link.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"value",match:["value"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.test",filter:"defined",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"url",expression:[{type:"Twig.expression.type.variable",value:"value",match:["value"]}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"text",expression:[{type:"Twig.expression.type.variable",value:"customText",match:["customText"]}]}}]}},{type:"raw",value:'<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'target="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"targetString",match:["targetString"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</a>\n"}],id:"src/stories/components/links/link.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/link.twig",module.exports.default=module.exports},"./src/stories/components/links/read-more.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/link.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<span class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n  '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/link.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"text",match:["text"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"target"},{type:"Twig.expression.type.variable",value:"target",match:["target"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.string",value:"read-more"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"</span>\n"}],id:"src/stories/components/links/read-more.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/read-more.twig",module.exports.default=module.exports},"./src/stories/components/teasers/card/_card-content.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/read-more.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"heading_level",expression:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.key.period",key:"level"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.key.period",key:"level"},{type:"Twig.expression.type.number",value:3,match:["3",null]},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]}},{type:"raw",value:"<h"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"heading_level",match:["heading_level"]}]},{type:"raw",value:' class="card-title '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.key.period",key:"modifier"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:"</h"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"heading_level",match:["heading_level"]}]},{type:"raw",value:">\n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"summary",match:["summary"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <p class="card-summary">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"summary",match:["summary"]}]},{type:"raw",value:"</p>\n    "}]}},{type:"raw",value:"     "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"\n        "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/read-more.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.string",value:"h4"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"target"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"target"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"clickCard",match:["clickCard"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'          <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'" class="card_click">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:"</a>\n        "}]}},{type:"raw",value:"    "}]}}],id:"src/stories/components/teasers/card/_card-content.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/teasers/card/_card-content.twig",module.exports.default=module.exports},"./src/stories/components/teasers/card/card-horizontal.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/teasers/card/_card-content.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="card card--horizontal '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"clickCard",match:["clickCard"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"card--click"}]}},{type:"raw",value:'" data-scroll-show>\n  <div '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image_position",match:["image_position"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"flush"},{type:"Twig.expression.type.operator.binary",value:"!=",precidence:9,associativity:"leftToRight",operator:"!="}],output:[{type:"raw",value:'class="card-section"'}]}},{type:"raw",value:'>\n    <div class="grid-x '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image_position",match:["image_position"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"flush"},{type:"Twig.expression.type.operator.binary",value:"!=",precidence:9,associativity:"leftToRight",operator:"!="}],output:[{type:"raw",value:"grid-margin-x align-middle"}]}},{type:"raw",value:' ">\n      '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'        <div class="cell medium-5 large-5 '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"alignment"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"alignment"},{type:"Twig.expression.type.string",value:"right"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"medium-order-2"}]}},{type:"raw",value:'">\n          <div class="card-image image-size--landscapeCroppedMedium">\n            <img class="js-lazy" data-src="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'" alt="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"alt"}]},{type:"raw",value:'">\n          </div>\n        </div>\n      '}]}},{type:"raw",value:'      <div class="cell '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"medium-7 large-7 "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"alignment"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"alignment"},{type:"Twig.expression.type.string",value:"right"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"medium-order-1"}]}}]}},{type:"raw",value:'">\n        '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image_position",match:["image_position"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"flush"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:'          \n          <div class="card-section display-flex justify-content-center flex-column h-100 d-flex">\n        '}]}},{type:"raw",value:"              "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/teasers/card/_card-content.twig"}]}},{type:"raw",value:" \n        "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image_position",match:["image_position"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"flush"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"          </div>\n        \n        "}]}},{type:"raw",value:"          \n      </div>\n    </div>\n  </div>\n</div>\n"}],id:"src/stories/components/teasers/card/card-horizontal.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/teasers/card/card-horizontal.twig",module.exports.default=module.exports},"./src/stories/global/placeholders/components.json":function(module){"use strict";module.exports=JSON.parse('{"Kb":[{"url":"#","text":"Home"},{"url":"#","text":"Parent Page"},{"text":"Current Page"}],"uP":{"value":9,"text":"Lorem ipsum"},"Ok":[{"text":"Link","url":"#"},{"text":"Link","url":"#"},{"text":"Link","url":"#"},{"text":"Link","url":"#"},{"text":"Link","url":"#"},{"text":"Link","url":"#"}],"eA":[{"id":"tab-1","text":"Tab 1","content":"<p>Tab 1 content</p>"},{"id":"tab-2","text":"Tab 2","content":"<p>Tab 2 content</p>"}],"S6":[{"heading":"Heading","description":"Description","link":{"text":"Link","url":"#","target":"_blank"}},{"heading":"Heading","description":"Description","link":{"text":"Link","url":"#","target":"_blank"}},{"heading":"Heading","description":"Description","link":{"text":"Link","url":"#","target":"_blank"}}],"TU":{"accordion_id":"accordion","items":[{"heading":"Curabitur aliquet quam id dui posuere blandit.","content":"<p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>"},{"heading":"Curabitur aliquet quam","content":"<p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>"},{"heading":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est sit amet facilisis magna etiam tempor orci. Auctor eu augue ut lectus arcu bibendum at varius. Risus ultricies tristique nulla aliquet enim tortor at auctor.</p>"}]},"PX":{"heading":"Heading","subheading":"Subheading","description":"Description","link":{"text":"Link","url":"#"},"items":[{"label":"Phone","value":"(###) ### - ####"},{"label":"Email","url":"mailto:example@domain.com","value":"example@domain.com"},{"label":"Location","value":"Address here\\r\\nRoom\\r\\n"}]},"oA":{"previous":null,"pages":[{"url":"","index":1,"current":true},{"url":"","index":2},{"url":"","index":3},{"ellipses":true},{"url":"","index":10}],"next":"#"},"bG":{"quote":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.","image":{"src":"https://source.unsplash.com/9wg5jCEPBsw/400x400","alt":"Alt Text"},"attribution":{"label":"Firstname Lastname","info":"Title"}},"rP":{"heading":"Hero","subheading":"Subheading"},"In":{"heading":{"text":"Heading","url":"#","level":3},"image":{"src":"https://source.unsplash.com/9wg5jCEPBsw/430x230","alt":"Alt Text"},"link":{"text":"Link","url":"#"}},"Rk":{"trigger":"click","video_type":"youtube","video_id":"gJ6APKIjFQY","image":{"src":"//via.placeholder.com/900x500","alt":""}},"W6":"<h1>h1. Heading</h1><h2>h2. Heading</h2><h3>h3. Heading</h3><h4>h4. Heading</h4><h5>h5. Heading</h5><h6>h6. Heading</h6><h2><a href=\'\'>h2. Heading Link</a></h2><h3><a href=\'\'>h3. Heading Link</a></h3><h4><a href=\'\'>h4. Heading Link</a></h4><h5><a href=\'\'>h5. Heading Link</a></h5><h6><a href=\'\'>h6. Heading Link</a></h6>  <h2>Heading 2</h2>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo ac leo vestibulum cursus sit amet sit amet eros. Curabitur ante ex, consectetur quis felis at, aliquam sodales urna. Vivamus at hendrerit lacus, aliquet imperdiet quam. Nulla finibus hendrerit volutpat. Curabitur tempus leo ac ligula luctus, nec consequat velit pellentesque. Sed ornare leo finibus gravida vulputate. Cras varius sem sit amet tortor volutpat feugiat. Vivamus maximus hendrerit turpis non volutpat. Donec venenatis, enim eu accumsan venenatis, mauris lectus suscipit quam, sit amet feugiat mi lorem et augue.</p>  <p>Vivamus maximus, sem nec mattis pretium, dolor dui egestas lectus, id viverra lorem diam ac sapien. Quisque id maximus eros. Vestibulum ut lorem ac ipsum luctus tincidunt. In facilisis venenatis lacus ac ultrices. Sed id enim sit amet lacus tempus porttitor quis ut ante. Mauris ac enim convallis, ornare nulla ut, mattis lectus. Quisque vitae maximus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In est sem, imperdiet nec lacus quis, eleifend posuere purus. Mauris vestibulum, magna ac tempor lacinia, lacus turpis ultricies libero, bibendum congue quam est et metus. Curabitur vel sem vitae orci ornare tristique. Vestibulum in pulvinar risus. Sed tristique tempor lectus, vitae semper mauris accumsan sit amet. Phasellus varius eros ac nibh vulputate, ut mollis velit eleifend.</p>  <h2>Heading 2</h2>  <h3>Heading 3</h3>  <p>Cras ipsum justo, sollicitudin sit amet egestas sit amet, hendrerit ac leo.</p>  <a href=\'\' class=\'button\'>Button</a>  <hr>  <h3>Heading 3</h3>  <p>Morbi tellus velit, rutrum non turpis rutrum, condimentum pharetra felis. Praesent consequat convallis luctus</p>  <a href=\'\' class=\'button\'>Button</a>  <hr>  <h3>Heading 3</h3>  <p>Praesent consequat convallis luctus. In volutpat tortor et purus commodo euismod. In vitae elit vel nibh imperdiet bibendum. Donec eget dui metus.</p>  <a href=\'\' class=\'button\'>Button</a>  <hr>  <h2>Heading 2</h2>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo ac leo vestibulum cursus sit amet sit amet eros. Curabitur ante ex, consectetur quis felis at, aliquam sodales urna. Vivamus at hendrerit lacus, aliquet imperdiet quam. Nulla finibus hendrerit volutpat. Curabitur tempus leo ac ligula luctus, nec consequat velit pellentesque. Sed ornare leo finibus gravida vulputate. Cras varius sem sit amet tortor volutpat feugiat. Vivamus maximus hendrerit turpis non volutpat. Donec venenatis, enim eu accumsan venenatis, mauris lectus suscipit quam, sit amet feugiat mi lorem et augue.</p>  <h3>Heading 3</h3>  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo ac leo vestibulum cursus sit amet sit amet eros. Curabitur ante ex, consectetur quis felis at, aliquam sodales urna. Vivamus at hendrerit lacus, aliquet imperdiet quam. Nulla finibus hendrerit volutpat. Curabitur tempus leo ac ligula luctus, nec consequat velit pellentesque. Sed ornare leo finibus gravida vulputate. Cras varius sem sit amet tortor volutpat feugiat. Vivamus maximus hendrerit turpis non volutpat. Donec venenatis, enim eu accumsan venenatis, mauris lectus suscipit quam, sit amet feugiat mi lorem et augue.</p>  <h4>Heading 4</h4>  <p>Cras ipsum justo, sollicitudin sit amet egestas sit amet, hendrerit ac leo. Ut eu tincidunt justo.</p>  <h4>Heading 4</h4>  <p>Ut eu tincidunt justo. Morbi tellus velit, rutrum non turpis rutrum, condimentum pharetra felis. Praesent consequat convallis luctus. In volutpat tortor et purus commodo euismod. In vitae elit vel nibh imperdiet bibendum. Donec eget dui metus. Praesent nunc ipsum, fringilla eget mollis ut, auctor ac mi. Quisque sollicitudin leo id odio feugiat molestie. Ut at ultricies ante. Aliquam erat volutpat. Suspendisse eu eleifend libero. Morbi at diam auctor, congue augue at, rhoncus risus. Aliquam pulvinar ac sapien eu cursus. Sed lorem libero, congue eget ligula eget, ultricies sollicitudin elit. Sed non leo vitae eros laoreet ornare.</p>  <h5>Heading 5</h5>  <p>Cras ipsum justo, sollicitudin sit amet egestas sit amet, hendrerit ac leo. Ut eu tincidunt justo. Morbi tellus velit, rutrum non turpis rutrum, condimentum pharetra felis. Praesent consequat convallis luctus. In volutpat tortor et purus commodo euismod. In vitae elit vel nibh imperdiet bibendum. Donec eget dui metus. Praesent nunc ipsum, fringilla eget mollis ut, auctor ac mi. Quisque sollicitudin leo id odio feugiat molestie. Ut at ultricies ante. Aliquam erat volutpat. Suspendisse eu eleifend libero. Morbi at diam auctor, congue augue at, rhoncus risus. Aliquam pulvinar ac sapien eu cursus. Sed lorem libero, congue eget ligula eget, ultricies sollicitudin elit. Sed non leo vitae eros laoreet ornare.</p>  <h3>Heading 3</h3>  <p>Cras ipsum justo, sollicitudin sit amet egestas sit amet, hendrerit ac leo. Ut eu tincidunt justo. Morbi tellus velit, rutrum non turpis rutrum, condimentum pharetra felis. Praesent consequat convallis luctus. In volutpat tortor et purus commodo euismod. In vitae elit vel nibh imperdiet bibendum. Donec eget dui metus. Praesent nunc ipsum, fringilla eget mollis ut, auctor ac mi. Quisque sollicitudin leo id odio feugiat molestie. Ut at ultricies ante. Aliquam erat volutpat. Suspendisse eu eleifend libero. Morbi at diam auctor, congue augue at, rhoncus risus. Aliquam pulvinar ac sapien eu cursus. Sed lorem libero, congue eget ligula eget, ultricies sollicitudin elit. Sed non leo vitae eros laoreet ornare.</p>  <h2>Heading 2</h2>  <p>Maecenas ac condimentum eros, id consequat eros. Fusce felis nunc, ultricies porttitor mauris eu, eleifend faucibus enim. In finibus eu enim quis iaculis. Fusce non consectetur libero, eu fermentum eros. Maecenas consectetur orci in tincidunt rutrum. Integer ullamcorper sapien id nisi venenatis, mattis eleifend diam scelerisque. Pellentesque pretium pulvinar tortor ac sollicitudin. Maecenas faucibus, erat eget finibus scelerisque, diam arcu eleifend augue, ac blandit erat nisi at magna. Maecenas malesuada et tellus et tincidunt. Morbi volutpat rhoncus sapien, id porttitor ligula convallis nec. Donec nec quam eget enim laoreet euismod. Suspendisse accumsan iaculis bibendum. Phasellus porta, sapien eget lacinia aliquam, lacus lacus convallis augue, eu tincidunt erat ante eu quam. Donec sagittis diam sed pellentesque dictum.</p>  <figure><img src=\'//source.unsplash.com/9wg5jCEPBsw/853x500\' alt=\'\'><figcaption>Caption here</figcaption></figure>  <div class=\'table-scroll-wrapper\'><div class=\'table-scroll\'><table><thead>  <tr>    <th scope=\'col\'>Table Heading 1</th>    <th scope=\'col\'>Table Heading 2</th>    <th scope=\'col\'>Table Heading 3</th>    <th scope=\'col\'>Table Heading 4</td>    <td>Table Heading 5</td>  </tr></thead><tbody><tr>  <td>Table Cell 1</td>  <td>Table Cell 2</td>  <td>Table Cell 3</td>  <td>Table Cell 4</td>  <td>Table Cell 5</td></tr><tr>  <td>Table Cell 1</td>  <td>Table Cell 2</td>  <td>Table Cell 3</td>  <td>Table Cell 4</td>  <td>Table Cell 5</td></tr><tr>  <td>Table Cell 1</td>  <td>Table Cell 2</td>  <td>Table Cell 3</td>  <td>Table Cell 4</td>  <td>Table Cell 5</td></tr><tr>  <td>Table Cell 1</td>  <td>Table Cell 2</td>  <td>Table Cell 3</td>  <td>Table Cell 4</td>  <td>Table Cell 5</td></tr></tbody></table></div></div>  <p>A paragraph (from the Greek paragraphos, \'to write beside\' or \'written beside\') is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>    <ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li><li><a href=\'#\'>Aenean euismod</a> bibendum laoreet. </li><li>Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. </li></ul>  <ol><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li><li>Aenean euismod bibendum laoreet. </li><li>Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. </li></ol>  <blockquote><p>A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text, and typically distinguished visually using indentation and a different typeface or smaller size quotation.</p><cite>Name, Title</cite></blockquote>  <p>    <span class=\'\'><a href=\'#\' class=\'read-more\'>Read More</a></span>  </p>  <p>Etiam condimentum varius arcu vel aliquet. Nulla sed dolor non dui pulvinar euismod. Aliquam sit amet est ac augue ornare hendrerit in eget massa. Vivamus eget accumsan nisi. Morbi non aliquet massa. Fusce laoreet tincidunt enim. Curabitur quam enim, tempus feugiat fringilla non, fermentum vel nulla. Vestibulum placerat felis augue. Mauris eget nisi id lorem iaculis dapibus.</p>"}')},"./src/stories/global/placeholders/images.json":function(module){"use strict";module.exports=JSON.parse('{"W":"//source.unsplash.com/9wg5jCEPBsw/","J":{"landscapeCropped":{"name":"Landscape Cropped","width":900,"height":500,"type":"crop"},"landscapeCroppedMedium":{"name":"Landscape Cropped (Medium)","width":630,"height":400,"type":"crop"},"landscapeCroppedSmall":{"name":"Landscape Cropped (Small)","width":430,"height":230,"type":"crop"},"square":{"name":"Square","width":400,"height":400,"type":"crop"},"wideCroppedXlarge":{"name":"Wide Cropped XL","width":1440,"height":460,"type":"crop"}}}')}}]);