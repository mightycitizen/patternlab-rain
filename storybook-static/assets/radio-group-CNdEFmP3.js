import{T as o,t as s}from"./twig-DGqAAA8S.js";import{a,D as n}from"./twig-xRDxs_F9.js";a(o);o.cache(!1);const i=t=>t,d=(t={})=>{const e=s.twig({id:"/Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/radio-group/radio-group.twig",data:[{type:"raw",value:`  <fieldset class="options my-4">
    <legend>`,position:{start:0,end:46}},{type:"output",position:{start:46,end:57},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:46,end:57}}]},{type:"raw",value:" ",position:{start:57,end:58}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"required",match:["required"]},{type:"Twig.expression.type.filter",value:"default",match:["| default","default"]}],position:{start:58,end:85},output:[{type:"raw",value:'<span class="form-required">*</span>',position:{start:85,end:121}}]},position:{open:{start:58,end:85},close:{start:121,end:132}}},{type:"raw",value:`</legend>
    <ul class="radio-group list-none">
      `,position:{start:132,end:187}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"option",expression:[{type:"Twig.expression.type.variable",value:"options",match:["options"]}],position:{start:187,end:214},output:[{type:"raw",value:`        <li>
          <input class="custom" id="`,position:{start:215,end:264}},{type:"output",position:{start:264,end:272},stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"],position:{start:264,end:272}}]},{type:"raw",value:"_",position:{start:272,end:273}},{type:"output",position:{start:273,end:328},stack:[{type:"Twig.expression.type.variable",value:"option",match:["option"],position:{start:273,end:328}},{type:"Twig.expression.type.key.period",position:{start:273,end:328},key:"id"},{type:"Twig.expression.type.test",position:{start:273,end:328},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"option",match:["option"],position:{start:273,end:328}},{type:"Twig.expression.type.key.period",position:{start:273,end:328},key:"id"},{type:"Twig.expression.type.variable",value:"option",match:["option"],position:{start:273,end:328}},{type:"Twig.expression.type.key.period",position:{start:273,end:328},key:"value"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:273,end:328},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'" name="',position:{start:328,end:336}},{type:"output",position:{start:336,end:346},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:336,end:346}}]},{type:"raw",value:'" value="',position:{start:346,end:355}},{type:"output",position:{start:355,end:373},stack:[{type:"Twig.expression.type.variable",value:"option",match:["option"],position:{start:355,end:373}},{type:"Twig.expression.type.key.period",position:{start:355,end:373},key:"value"}]},{type:"raw",value:'" type="radio" ',position:{start:373,end:388}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"required",match:["required"]}],position:{start:388,end:405},output:[{type:"raw",value:"required ",position:{start:405,end:414}}]},position:{open:{start:388,end:405},close:{start:414,end:425}}},{type:"raw",value:`>
          <label for="`,position:{start:425,end:449}},{type:"output",position:{start:449,end:457},stack:[{type:"Twig.expression.type.variable",value:"id",match:["id"],position:{start:449,end:457}}]},{type:"raw",value:"_",position:{start:457,end:458}},{type:"output",position:{start:458,end:513},stack:[{type:"Twig.expression.type.variable",value:"option",match:["option"],position:{start:458,end:513}},{type:"Twig.expression.type.key.period",position:{start:458,end:513},key:"id"},{type:"Twig.expression.type.test",position:{start:458,end:513},filter:"empty",modifier:"not"},{type:"Twig.expression.type.variable",value:"option",match:["option"],position:{start:458,end:513}},{type:"Twig.expression.type.key.period",position:{start:458,end:513},key:"id"},{type:"Twig.expression.type.variable",value:"option",match:["option"],position:{start:458,end:513}},{type:"Twig.expression.type.key.period",position:{start:458,end:513},key:"value"},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:458,end:513},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'">',position:{start:513,end:515}},{type:"output",position:{start:515,end:533},stack:[{type:"Twig.expression.type.variable",value:"option",match:["option"],position:{start:515,end:533}},{type:"Twig.expression.type.key.period",position:{start:515,end:533},key:"label"}]},{type:"raw",value:`</label>
        </li>
      `,position:{start:533,end:562}}]},position:{open:{start:187,end:214},close:{start:562,end:574}}},{type:"raw",value:`    </ul>
    `,position:{start:575,end:589}},{type:"raw",value:`
  </fieldset>
`,position:{start:696,end:696}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{return i(e.render({attributes:new n,...t}))}catch(p){return i("An error occurred whilst rendering /Users/kfernandez/Sites/foundational-build-craft/storybook/src/stories/components/forms/radio-group/radio-group.twig: "+p.toString())}};export{d as t};
