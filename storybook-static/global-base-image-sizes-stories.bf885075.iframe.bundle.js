(self.webpackChunkmc_standard_build=self.webpackChunkmc_standard_build||[]).push([[1889],{"./src/stories/global/base/image-sizes.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ImageSizes:function(){return ImageSizes},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return image_sizes_stories}});var image_sizes=__webpack_require__("./src/stories/global/base/image-sizes.twig"),image_sizes_default=__webpack_require__.n(image_sizes),base_image_sizes_namespaceObject=JSON.parse('{"l":{"landscapeCropped":{"name":"Landscape Cropped","width":900,"height":500,"type":"crop"},"landscapeCroppedMedium":{"name":"Landscape Cropped (Medium)","width":630,"height":400,"type":"crop"},"landscapeCroppedSmall":{"name":"Landscape Cropped (Small)","width":430,"height":230,"type":"crop"},"square":{"name":"Square","width":400,"height":400,"type":"crop"},"wideCroppedXlarge":{"name":"Wide Cropped XL","width":1440,"height":460,"type":"crop"}}}'),image_sizes_stories={title:"Global/Base/Image Sizes"};const ImageSizes=(_ref=>{let{label:label,...args}=_ref;return image_sizes_default()({label:label,...args})}).bind({});ImageSizes.args={image_sizes:base_image_sizes_namespaceObject.l},ImageSizes.parameters={...ImageSizes.parameters,docs:{...ImageSizes.parameters?.docs,source:{originalSource:"({\n  label,\n  ...args\n}) => {\n  // You can either use a function to create DOM elements or use a plain html string!\n  // return `<div>${label}</div>`;\n  return twig({\n    label,\n    ...args\n  });\n}",...ImageSizes.parameters?.docs?.source}}};const __namedExportsOrder=["ImageSizes"]},"./src/stories/global/base/image-sizes.twig":function(module,__unused_webpack_exports,__webpack_require__){var tpl=(0,__webpack_require__("./node_modules/.pnpm/twig@1.16.0/node_modules/twig/src/twig.js").twig)({allowInlineIncludes:!0,data:[{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"size",expression:[{type:"Twig.expression.type.variable",value:"image_sizes",match:["image_sizes"]}],output:[{type:"raw",value:'  <div class="pl-image" style="width: '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.key.period",key:"width"}]},{type:"raw",value:"px; height: "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.key.period",key:"height"}]},{type:"raw",value:'px;">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.key.period",key:"name"}]},{type:"raw",value:": "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.key.period",key:"width"}]},{type:"raw",value:" x "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.key.period",key:"height"}]},{type:"raw",value:"\n  </div>\n"}]}}],id:"src/stories/global/base/image-sizes.twig",rethrow:!0});module.exports=function(context){return tpl.render(context)},module.exports.id="src/stories/global/base/image-sizes.twig",module.exports.default=module.exports}}]);