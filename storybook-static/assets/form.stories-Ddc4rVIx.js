import{T as n,t as i}from"./twig-DGqAAA8S.js";import{a as l,D as c}from"./twig-xRDxs_F9.js";import"./section-C9l_XXOG.js";import"./validation-ZSBn6udm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./button-DsjDYOWJ.js";import"./text-Njdrgni9.js";import"./input-B6HYPlZz.js";import"./textarea-DwoLt7xr.js";import"./select-DQTxE9qQ.js";import"./radio-group-CNdEFmP3.js";import"./checkbox-group-55GeY0N2.js";import"./checkbox-BUKlRsUO.js";l(n);n.cache(!1);i.twig({id:"@components/forms/validation/validation.twig",data:[{type:"raw",value:`<form action="/" data-abide novalidate>
  `,position:{start:0,end:42}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/text/text.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"name"},{type:"Twig.expression.type.string",value:"text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"id"},{type:"Twig.expression.type.string",value:"id_3"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"placeholder"},{type:"Twig.expression.type.string",value:"Prompt Text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"required"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:42,end:218}},position:{start:42,end:218}},{type:"raw",value:"  ",position:{start:219,end:221}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/textarea/textarea.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Textarea"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"name"},{type:"Twig.expression.type.string",value:"textarea"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"id"},{type:"Twig.expression.type.string",value:"id_2"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"placeholder"},{type:"Twig.expression.type.string",value:"Prompt Text"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"required"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:221,end:413}},position:{start:221,end:413}},{type:"raw",value:`
  `,position:{start:414,end:417}},{type:"logic",token:{type:"Twig.logic.type.set",key:"select_options",expression:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"required"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Select"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"id"},{type:"Twig.expression.type.string",value:"select_validation"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"field_name"},{type:"Twig.expression.type.string",value:"select"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"options"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Select A"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:0,match:["0",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Select B"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Select C"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:2,match:["2",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:417,end:748}},position:{start:417,end:748}},{type:"raw",value:"  ",position:{start:749,end:751}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/select/select.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"select_options",match:["select_options"]}],position:{start:751,end:826}},position:{start:751,end:826}},{type:"raw",value:`
  `,position:{start:827,end:830}},{type:"logic",token:{type:"Twig.logic.type.set",key:"select_options",expression:[{type:"Twig.expression.type.variable",value:"select_options",match:["select_options"]},{type:"Twig.expression.type.filter",value:"merge",match:["| merge","merge"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"selectize"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"id"},{type:"Twig.expression.type.string",value:"selectize"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Select (Filterable)"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:830,end:946}},position:{start:830,end:946}},{type:"raw",value:`
  `,position:{start:947,end:950}},{type:"logic",token:{type:"Twig.logic.type.include",only:4,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/select/select.twig"}],withStack:[{type:"Twig.expression.type.variable",value:"select_options",match:["select_options"]}],position:{start:950,end:1032}},position:{start:950,end:1032}},{type:"raw",value:"  ",position:{start:1033,end:1035}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/radio-group/radio-group.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"required"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Radio"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"id"},{type:"Twig.expression.type.string",value:"radio_validation"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"name"},{type:"Twig.expression.type.string",value:"radio"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"placeholder"},{type:"Twig.expression.type.string",value:"Select an option"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"options"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Radio A"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:0,match:["0",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Radio B"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Radio C"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:2,match:["2",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1035,end:1435}},position:{start:1035,end:1435}},{type:"raw",value:`

  `,position:{start:1436,end:1440}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/checkbox-group/checkbox-group.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Checkbox"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"id"},{type:"Twig.expression.type.string",value:"checkbox_validation"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"required"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"name"},{type:"Twig.expression.type.string",value:"checkbox"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"options"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Checkbox A"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:0,match:["0",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Checkbox B"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.string",value:"Checkbox C"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"value"},{type:"Twig.expression.type.number",value:2,match:["2",null]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:1440,end:1868}},position:{start:1440,end:1868}},{type:"raw",value:`  <ul class="list-none flex gap-4--stacked">
    <li><button type="submit" class="button">Submit</button></li>
    <li><button type="submit" class="button ml-4" disabled>Disabled button</button></li>
  </ul>



</form>
`,position:{start:1869,end:1869}}],precompiled:!0});i.twig({id:"@components/sections/section.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:0,end:26}},position:{start:0,end:26}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:27,end:72},output:[{type:"raw",value:"  ",position:{start:73,end:75}},{type:"logic",token:{type:"Twig.logic.type.set",key:"width_class",expression:[{type:"Twig.expression.type.string",value:"lg:max-w-screen-lg"}],position:{start:75,end:119}},position:{start:75,end:119}}]},position:{open:{start:27,end:72},close:{start:120,end:168}}},{type:"logic",token:{type:"Twig.logic.type.elseif",stack:[{type:"Twig.expression.type.variable",value:"section_style",match:["section_style"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.string",value:"narrow"},{type:"Twig.expression.type.operator.binary",value:"==",precidence:9,associativity:"leftToRight",operator:"=="}],position:{start:120,end:168},output:[{type:"raw",value:`  
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
`,position:{start:3514,end:3514}}],precompiled:!0});const s=e=>e,g=(e={})=>{const o=i.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/modules/form/form.twig",data:[{type:"logic",token:{type:"Twig.logic.type.embed",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/sections/section.twig"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"padding"},{type:"Twig.expression.type.string",value:"tight"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_class"},{type:"Twig.expression.type.string",value:"section--form "},{type:"Twig.expression.type.variable",value:"section_class",match:["section_class"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"section_style"},{type:"Twig.expression.type.string",value:"narrower"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}],position:{start:0,end:165},output:[{type:"raw",value:"  ",position:{start:166,end:168}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"section_content",position:{start:168,end:195},output:[{type:"raw",value:`    <h2>Heading Level 2</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    `,position:{start:196,end:432}},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"@components/forms/validation/validation.twig"}],position:{start:432,end:492}},position:{start:432,end:492}},{type:"raw",value:"  ",position:{start:493,end:495}}]},position:{open:{start:168,end:195},close:{start:495,end:509}}}]},position:{open:{start:0,end:165},close:{start:510,end:524}}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{return s(o.render({attributes:new c,...e}))}catch(y){return s("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/modules/form/form.twig: "+y.toString())}},M={title:"Components/Modules/Form"},u=e=>g(e),d={},t=u.bind({});t.args=d;var p,a,r;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return \`<div>\${label}</div>\`;
  return twig(args);
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const z=["Form"];export{t as Form,z as __namedExportsOrder,M as default};
