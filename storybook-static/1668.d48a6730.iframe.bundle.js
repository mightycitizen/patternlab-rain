(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[1668],{"./src/stories/components/containers/carousel-cards-center.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/slick.twig"),__webpack_require__("./src/stories/components/teasers/card/card.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/slick.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"peekaboo"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.string",value:"center"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"slide_content",output:[{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"card",expression:[{type:"Twig.expression.type.variable",value:"cards",match:["cards"]}],output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.set",key:"card",expression:[{type:"Twig.expression.type.variable",value:"card",match:["card"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"lazyload_class"},{type:"Twig.expression.type.string",value:"data-lazy"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.string",value:"special"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]}},{type:"raw",value:'        <div class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"first"},{type:"Twig.expression.type.string",value:"slick-primary "},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'">\n          '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/teasers/card/card.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"card",match:["card"]}]}},{type:"raw",value:"        </div>\n      "}]}},{type:"raw",value:"  "}]}}]}}],id:"src/stories/components/containers/carousel-cards-center.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/containers/carousel-cards-center.twig",module.exports.default=module.exports},"./src/stories/components/containers/carousel-nav.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="slick-nav '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"slick_nav_class",match:["slick_nav_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"inline",match:["inline"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"slick-nav--inline"}]}},{type:"raw",value:'">\n  '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"pause",match:["pause"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'    <button class="js-slick-toggle slick-toggle">\n      <span class="show-for-sr">Toggle Pause/Play</span>\n      <span class="icon-pause active"></span>\n      <span class="icon-play inactive"></span>\n    </button>\n  '}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/components/containers/carousel-nav.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/containers/carousel-nav.twig",module.exports.default=module.exports},"./src/stories/components/containers/slick.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/containers/carousel-nav.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<div class="slick-wrap">\n  '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"slick_nav_position",match:["slick_nav_position"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"top"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/carousel-nav.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"inline"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"  <div "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:' class="js-slick'},{type:"output",stack:[{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"Twig.expression.type.string",value:"--"},{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"slick_class",match:["slick_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"grid",match:["grid"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"grid-x grid-margin-x"}]}},{type:"raw",value:'" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"equalize",match:["equalize"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'data-equalizer data-equalize-on="medium"'}]}},{type:"raw",value:">\n    "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"slide_content",output:[{type:"raw",value:"    "}]}},{type:"raw",value:"  </div>\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"slick_nav_position",match:["slick_nav_position"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"top"},{type:"Twig.expression.type.operator.binary",value:"!=",precidence:9,associativity:"leftToRight",operator:"!="}],output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/containers/carousel-nav.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"inline"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"slick_tabs",match:["slick_tabs"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'    <div class="slick_controls  is-start">\n      '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"pause",match:["pause"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'          <button class="js-slick-toggle slick-toggle" data-slick-pause="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n            <span class="show-for-sr">Toggle Pause/Play</span>\n            <span class="icon-pause active"></span>\n            <span class="icon-play inactive"></span>\n          </button>\n        '}]}},{type:"raw",value:'\n      <button data-slick="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" class="slick-prev arrow arrow--prev">Previous</button>\n      <ul class="slick_tabs" data-slick="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" data-slick-tabs>\n      '},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"slide",expression:[{type:"Twig.expression.type.variable",value:"slides",match:["slides"]}],output:[{type:"raw",value:'        <li>\n          <button data-slick-go="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" data-slick-go-index="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"]},{type:"Twig.expression.type.key.period",key:"index0"}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"slide",match:["slide"]},{type:"Twig.expression.type.key.period",key:"tab"}]},{type:"raw",value:"</button>\n        </li>\n      "}]}},{type:"raw",value:'      </ul>\n      <button data-slick="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'" class="slick-next arrow arrow--next">Next</button>\n    </div>\n  '}]}},{type:"raw",value:"</div>\n"}],id:"src/stories/components/containers/slick.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/containers/slick.twig",module.exports.default=module.exports},"./src/stories/components/inline-text/date.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<time class="date" datetime="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"unformatted",match:["unformatted"]}]},{type:"raw",value:'">\n  <div class="date_month">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"month_short",match:["month_short"]}]},{type:"raw",value:'</div>\n  <div class="date_day">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"day",match:["day"]}]},{type:"raw",value:"</div>\n</time>\n"}],id:"src/stories/components/inline-text/date.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/inline-text/date.twig",module.exports.default=module.exports},"./src/stories/components/inline-text/flag.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<span class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:' flag">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</span>\n"}],id:"src/stories/components/inline-text/flag.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/inline-text/flag.twig",module.exports.default=module.exports},"./src/stories/components/links/read-more.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/link.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'<span class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">\n  '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/link.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"text",match:["text"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"target"},{type:"Twig.expression.type.variable",value:"target",match:["target"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier"},{type:"Twig.expression.type.string",value:"read-more"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"</span>\n"}],id:"src/stories/components/links/read-more.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/links/read-more.twig",module.exports.default=module.exports},"./src/stories/components/teasers/card/_card-content.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/links/read-more.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"heading_level",expression:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.key.period",key:"level"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.key.period",key:"level"},{type:"Twig.expression.type.number",value:3,match:["3",null]},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]}},{type:"raw",value:"<h"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"heading_level",match:["heading_level"]}]},{type:"raw",value:' class="card-title '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.key.period",key:"modifier"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:"</h"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"heading_level",match:["heading_level"]}]},{type:"raw",value:">\n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"summary",match:["summary"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <p class="card-summary">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"summary",match:["summary"]}]},{type:"raw",value:"</p>\n    "}]}},{type:"raw",value:"     "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"\n        "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/links/read-more.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.string",value:"h4"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"target"},{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"target"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"clickCard",match:["clickCard"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'          <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"url"}]},{type:"raw",value:'" class="card_click">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"link",match:["link"]},{type:"Twig.expression.type.key.period",key:"text"}]},{type:"raw",value:"</a>\n        "}]}},{type:"raw",value:"    "}]}}],id:"src/stories/components/teasers/card/_card-content.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/teasers/card/_card-content.twig",module.exports.default=module.exports},"./src/stories/components/teasers/card/card.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./src/stories/components/inline-text/date.twig"),__webpack_require__("./src/stories/components/inline-text/flag.twig"),__webpack_require__("./src/stories/components/teasers/card/_card-content.twig");var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"raw",value:'\n<div class="card '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"class",match:["class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}]},{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"card--"},{type:"Twig.expression.type.variable",value:"modifier",match:["modifier"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:" "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"clickCard",match:["clickCard"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"card--click"}]}},{type:"raw",value:'" >\n  '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"header",match:["header"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'  <div class="card-divider">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"header",match:["header"]}]},{type:"raw",value:"\n  </div>\n  "}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'    <div class="card-image">\n      <img src="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"src"}]},{type:"raw",value:'" alt="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.key.period",key:"alt"}]},{type:"raw",value:'">\n\n      '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"type",match:["type"]},{type:"Twig.expression.type.key.period",key:"handle"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"events"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="},{type:"Twig.expression.type.variable",value:"date",match:["date"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/inline-text/date.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"date",match:["date"]}]}},{type:"raw",value:"      "}]}},{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"flag",match:["flag"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/inline-text/flag.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"flag_text"},{type:"Twig.expression.type.variable",value:"flag",match:["flag"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"      "}]}},{type:"raw",value:"    </div>\n  "}]}},{type:"raw",value:'  <div class="card-section" '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"equalize",match:["equalize"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"data-equalizer-watch"}]}},{type:"raw",value:">\n    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"flag",match:["flag"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:"          "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/inline-text/flag.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"flag_class"},{type:"Twig.expression.type.string",value:"card_flag"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"      "}]}},{type:"raw",value:"    "}]}},{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"src/stories/components/teasers/card/_card-content.twig"}]}},{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"footer",match:["footer"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],output:[{type:"raw",value:'      <div class="card-footer">\n        '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"footer",match:["footer"]}]},{type:"raw",value:"\n      </div>\n    "}]}},{type:"raw",value:"  </div>\n</div>\n"}],id:"src/stories/components/teasers/card/card.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/components/teasers/card/card.twig",module.exports.default=module.exports}}]);