import{T as o,t as e}from"./twig-DGqAAA8S.js";import{a,D as n}from"./twig-xRDxs_F9.js";import"./section-C9l_XXOG.js";import"./step-list-M1RyyVqc.js";a(o);o.cache(!1);e.twig({id:"@components/listing/step-list/step-list.twig",data:[{type:"raw",value:`<ol class="list-none flex flex-col space-y-5 lg:space-y-10">
  `,position:{start:0,end:63}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"step",expression:[{type:"Twig.expression.type.variable",value:"steps",match:["steps"]}],position:{start:63,end:86},output:[{type:"raw",value:`    <li class="pl-4 lg:pl-8">
      <div class="flex">
        <div class="w-16 flex justify-end pr-6">
          <div class="step__number font-bold text-4xl text-primary">`,position:{start:87,end:259}},{type:"output",position:{start:259,end:275},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:259,end:275}},{type:"Twig.expression.type.key.period",position:{start:259,end:275},key:"index"}]},{type:"raw",value:`</div>
        </div>
        <div >
          <h3 class="mb-2">`,position:{start:275,end:339}},{type:"output",position:{start:339,end:357},stack:[{type:"Twig.expression.type.variable",value:"step",match:["step"],position:{start:339,end:357}},{type:"Twig.expression.type.key.period",position:{start:339,end:357},key:"heading"}]},{type:"raw",value:`</h3>
          <p class="mb-3">`,position:{start:357,end:389}},{type:"output",position:{start:389,end:411},stack:[{type:"Twig.expression.type.variable",value:"step",match:["step"],position:{start:389,end:411}},{type:"Twig.expression.type.key.period",position:{start:389,end:411},key:"description"}]},{type:"raw",value:`</p>
          `,position:{start:411,end:426}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"link"},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:426,end:467},output:[{type:"raw",value:"            ",position:{start:468,end:480}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/links/read-more/read-more.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"link"},{type:"Twig.expression.type.key.period",key:"text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"link"},{type:"Twig.expression.type.key.period",key:"url"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"target"},{type:"Twig.expression.type.variable",value:"step",match:["step"]},{type:"Twig.expression.type.key.period",key:"link"},{type:"Twig.expression.type.key.period",key:"target"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:480,end:675}},position:{start:480,end:675}},{type:"raw",value:"          ",position:{start:676,end:686}}]},position:{open:{start:426,end:467},close:{start:686,end:697}}},{type:"raw",value:`        </div>
      </div>
    </li>
  `,position:{start:698,end:738}}]},position:{open:{start:63,end:86},close:{start:738,end:750}}},{type:"raw",value:`
</ol>
`,position:{start:751,end:751}}],precompiled:!0});e.twig({id:"@components/sections/section.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:0,end:26}},position:{start:0,end:26}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:27,end:72},output:[{type:"raw",value:"  ",position:{start:73,end:75}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-lg"}],position:{start:75,end:119}},position:{start:75,end:119}}]},position:{open:{start:27,end:72},close:{start:120,end:168}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:120,end:168},output:[{type:"raw",value:`  
  `,position:{start:168,end:173}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-xl"}],position:{start:173,end:217}},position:{start:173,end:217}}]},position:{open:{start:120,end:168},close:{start:218,end:229}}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:230,end:269},output:[{type:"logic",token:{type:"Twig.logic.type.set",key:"intro_class",expression:[{type:"Twig.expression.type.string",value:"text-center"}],position:{start:269,end:306}},position:{start:269,end:306}}]},position:{open:{start:230,end:269},close:{start:306,end:317}}},{type:"raw",value:`
`,position:{start:318,end:319}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"intro",position:{start:319,end:334},output:[{type:"raw",value:"  ",position:{start:335,end:337}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:337,end:371},output:[{type:"raw",value:'      <div class="section_intro ',position:{start:372,end:404}},{type:"output",position:{start:404,end:421},stack:[{type:"Twig.expression.type.variable",value:"intro_class",match:["intro_class"],position:{start:404,end:421}}]},{type:"raw",value:` ">
        <div class="grid `,position:{start:421,end:450}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:450,end:482},output:[{type:"raw",value:"grid-cols-12",position:{start:482,end:494}}]},position:{open:{start:450,end:482},close:{start:494,end:505}}},{type:"raw",value:` gap-y-6 gap-x-10 items-center justify-center">
          `,position:{start:505,end:563}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:563,end:595},output:[{type:"raw",value:`            <div class="col-span-12 md:col-span-5 lg:col-span-6" >
              <div class="image-size--landscapeCroppedMedium">
                <img loading="lazy" src="`,position:{start:596,end:767}},{type:"output",position:{start:767,end:790},stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"],position:{start:767,end:790}},{type:"Twig.expression.type.key.period",position:{start:767,end:790},key:"src"}]},{type:"raw",value:'" alt="',position:{start:790,end:797}},{type:"output",position:{start:797,end:820},stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"],position:{start:797,end:820}},{type:"Twig.expression.type.key.period",position:{start:797,end:820},key:"alt"}]},{type:"raw",value:`" class="w-full">
              </div>
            </div>
          `,position:{start:820,end:888}}]},position:{open:{start:563,end:595},close:{start:888,end:899}}},{type:"raw",value:'          <div class="col-span-12 ',position:{start:900,end:934}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_image",match:["section_image"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:934,end:966},output:[{type:"raw",value:"md:col-span-7 lg:col-span-6",position:{start:966,end:993}}]},position:{open:{start:934,end:966},close:{start:993,end:1038}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:993,end:1038},output:[{type:"raw",value:"md:col-span-8",position:{start:1038,end:1051}}]},position:{open:{start:993,end:1038},close:{start:1051,end:1062}}},{type:"raw",value:`">
            <h2 class="section_heading">`,position:{start:1062,end:1105}},{type:"output",position:{start:1105,end:1126},stack:[{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"],position:{start:1105,end:1126}}]},{type:"raw",value:`</h2>
            `,position:{start:1126,end:1144}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1144,end:1181},output:[{type:"raw",value:'              <h3 class="section_subheading">',position:{start:1182,end:1227}},{type:"output",position:{start:1227,end:1251},stack:[{type:"Twig.expression.type.variable",value:"section_subheading",match:["section_subheading"],position:{start:1227,end:1251}}]},{type:"raw",value:`</h3>
            `,position:{start:1251,end:1269}}]},position:{open:{start:1144,end:1181},close:{start:1269,end:1280}}},{type:"raw",value:"            ",position:{start:1281,end:1293}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1293,end:1331},output:[{type:"raw",value:'              <p class="lead ',position:{start:1332,end:1361}},{type:"output",position:{start:1361,end:1412},stack:[{type:"Twig.expression.type.variable",value:"section_description_size",match:["section_description_size"],position:{start:1361,end:1412}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:1361,end:1412},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:1361,end:1412}},{type:"Twig.expression.type.string",value:"text-xl",position:{start:1361,end:1412}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:1361,end:1412},expression:!1}]}]},{type:"raw",value:'">',position:{start:1412,end:1414}},{type:"output",position:{start:1414,end:1439},stack:[{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"],position:{start:1414,end:1439}}]},{type:"raw",value:`</p>
            `,position:{start:1439,end:1456}}]},position:{open:{start:1293,end:1331},close:{start:1456,end:1467}}},{type:"raw",value:"            ",position:{start:1468,end:1480}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1480,end:1513},output:[{type:"raw",value:"              ",position:{start:1514,end:1528}},{type:"logic",token:{type:"Twig.logic.type.include",only:4,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/links/button/button.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"section_button",match:["section_button"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"color"},{type:"Twig.expression.type.string",value:"secondary"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:1528,end:1667}},position:{start:1528,end:1667}},{type:"raw",value:"            ",position:{start:1668,end:1680}}]},position:{open:{start:1480,end:1513},close:{start:1680,end:1691}}},{type:"raw",value:`          </div>
        </div>
      </div>
    `,position:{start:1692,end:1741}}]},position:{open:{start:337,end:371},close:{start:1741,end:1752}}}]},position:{open:{start:319,end:334},close:{start:1753,end:1765}}},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"content",position:{start:1766,end:1783},output:[{type:"raw",value:"  ",position:{start:1784,end:1786}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type._function",fn:"block",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"section_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["| trim","trim"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:1786,end:1838},output:[{type:"raw",value:`    <div class="section_content" >
      `,position:{start:1839,end:1880}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:1880,end:1907},output:[{type:"raw",value:"      ",position:{start:1908,end:1914}}]},position:{open:{start:1880,end:1907},close:{start:1914,end:1928}}},{type:"raw",value:`    </div>
  `,position:{start:1929,end:1942}}]},position:{open:{start:1786,end:1838},close:{start:1942,end:1953}}}]},position:{open:{start:1766,end:1783},close:{start:1954,end:1966}}},{type:"raw",value:"<section ",position:{start:1967,end:1976}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:1976,end:2005},output:[{type:"raw",value:'id="',position:{start:2005,end:2009}},{type:"output",position:{start:2009,end:2025},stack:[{type:"Twig.expression.type.variable",value:"section_id",match:["section_id"],position:{start:2009,end:2025}}]},{type:"raw",value:'"',position:{start:2025,end:2026}}]},position:{open:{start:1976,end:2005},close:{start:2026,end:2037}}},{type:"raw",value:` 
  class="relative section 
  `,position:{start:2037,end:2068}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"padding",match:["padding"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:2068,end:2105},output:[{type:"raw",value:`    py-5 lg:py-10
  `,position:{start:2106,end:2126}}]},position:{open:{start:2068,end:2105},close:{start:2126,end:2136}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:2126,end:2136},output:[{type:"raw",value:`    py-10 lg:py-16
  `,position:{start:2137,end:2158}}]},position:{open:{start:2126,end:2136},close:{start:2158,end:2169}}},{type:"raw",value:`  

  `,position:{start:2169,end:2175}},{type:"output",position:{start:2175,end:2204},stack:[{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"],position:{start:2175,end:2204}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:2175,end:2204}}]},{type:"raw",value:` 
  transition-opacity duration-1000 ease-in-out  
  `,position:{start:2204,end:2257}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"collapse",match:["collapse"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2257,end:2284},output:[{type:"raw",value:"section--collapse",position:{start:2284,end:2301}}]},position:{open:{start:2257,end:2284},close:{start:2301,end:2312}}},{type:"raw",value:`" 
    :class="show ? 'opacity-100' : 'opacity-0'"    
    x-data="`,position:{start:2312,end:2379}},{type:"output",position:{start:2379,end:2386},stack:[{type:"Twig.expression.type.string",value:"{",position:{start:2379,end:2386}}]},{type:"raw",value:" show: false ",position:{start:2386,end:2399}},{type:"output",position:{start:2399,end:2406},stack:[{type:"Twig.expression.type.string",value:"}",position:{start:2399,end:2406}}]},{type:"raw",value:`"  x-intersect="show = true" >
  `,position:{start:2406,end:2439}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2439,end:2476},output:[{type:"raw",value:`    <div class="position-unset">
      `,position:{start:2477,end:2516}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2516,end:2553},output:[{type:"raw",value:'<img class=" section_background absolute object-cover left-0 h-full w-full top-0 opacity-30" src="',position:{start:2553,end:2651}},{type:"output",position:{start:2651,end:2679},stack:[{type:"Twig.expression.type.variable",value:"section_background",match:["section_background"],position:{start:2651,end:2679}},{type:"Twig.expression.type.key.period",position:{start:2651,end:2679},key:"src"}]},{type:"raw",value:'" alt="" loading="lazy"/>',position:{start:2679,end:2704}}]},position:{open:{start:2516,end:2553},close:{start:2704,end:2715}}},{type:"raw",value:"      ",position:{start:2716,end:2722}},{type:"raw",value:`
    </div>
  `,position:{start:2870,end:2884}}]},position:{open:{start:2439,end:2476},close:{start:2884,end:2895}}},{type:"raw",value:'  <div class="',position:{start:2896,end:2910}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"exclude_container",match:["exclude_container"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:2910,end:2946},output:[{type:"raw",value:"max-w-full lg:px-0",position:{start:2946,end:2964}}]},position:{open:{start:2910,end:2946},close:{start:2964,end:2975}}},{type:"raw",value:" ",position:{start:2975,end:2976}},{type:"output",position:{start:2976,end:3003},stack:[{type:"Twig.expression.type.variable",value:"width_class",match:["width_class"],position:{start:2976,end:3003}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:2976,end:3003}}]},{type:"raw",value:" container ",position:{start:3003,end:3014}},{type:"output",position:{start:3014,end:3040},stack:[{type:"Twig.expression.type.variable",value:"grid_class",match:["grid_class"],position:{start:3014,end:3040}},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"],position:{start:3014,end:3040}}]},{type:"raw",value:` relative z-10" >
    `,position:{start:3040,end:3062}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.string",value:"side"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:3062,end:3124},output:[{type:"raw",value:`      <div class="grid grid-cols-12 items-center justify-center gap-y-8">
        <div class="col-span-12 lg:col-span-8">
          `,position:{start:3125,end:3257}},{type:"output",position:{start:3257,end:3268},stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"],position:{start:3257,end:3268}}]},{type:"raw",value:`
        </div>
        <div class="col-span-12 lg:col-span-4">
          `,position:{start:3268,end:3342}},{type:"output",position:{start:3342,end:3355},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:3342,end:3355}}]},{type:"raw",value:`
        </div>
      </div>
    `,position:{start:3355,end:3388}}]},position:{open:{start:3062,end:3124},close:{start:3388,end:3398}}},{type:"logic",token:{type:"Twig.logic.type.else",match:["else"],position:{start:3388,end:3398},output:[{type:"raw",value:`      <div class="flex flex-col gap-y-8">
        `,position:{start:3399,end:3449}},{type:"output",position:{start:3449,end:3460},stack:[{type:"Twig.expression.type.variable",value:"intro",match:["intro"],position:{start:3449,end:3460}}]},{type:"raw",value:`
        `,position:{start:3460,end:3469}},{type:"output",position:{start:3469,end:3482},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:3469,end:3482}}]},{type:"raw",value:`
      </div>


    `,position:{start:3482,end:3502}}]},position:{open:{start:3388,end:3398},close:{start:3502,end:3513}}},{type:"raw",value:`
  </div>
</section>
`,position:{start:3514,end:3514}}],precompiled:!0});const s=t=>t,d=(t={})=>{const i=e.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/modules/step-list/step-list.twig",data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_heading"},{type:"Twig.expression.type.variable",value:"section_heading",match:["section_heading"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_description"},{type:"Twig.expression.type.variable",value:"section_description",match:["section_description"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"intro_class"},{type:"Twig.expression.type.string",value:"text-center"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:0,end:268},output:[{type:"raw",value:"  ",position:{start:269,end:271}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:271,end:298},output:[{type:"raw",value:"    ",position:{start:299,end:303}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/listing/step-list/step-list.twig"}],position:{start:303,end:363}},position:{start:303,end:363}},{type:"raw",value:`
  `,position:{start:364,end:367}}]},position:{open:{start:271,end:298},close:{start:367,end:381}}}]},position:{open:{start:0,end:268},close:{start:382,end:396}}}],precompiled:!0});i.options.allowInlineIncludes=!0;try{return s(i.render({attributes:new n,...t}))}catch(p){return s("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/modules/step-list/step-list.twig: "+p.toString())}};export{d as t};
