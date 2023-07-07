"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[2727],{"./src/components/scroll-area.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>scroll_area_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-scroll-area@1.0.4_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-scroll-area/dist/index.mjs"),utils=__webpack_require__("../lib/src/utils/utils.ts"),_excluded=["className","children"],_excluded2=["className","orientation"],__jsx=react.createElement,ScrollArea=react.forwardRef((function(_ref,ref){var className=_ref.className,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(dist.fC,(0,esm_extends.Z)({ref,className:(0,utils.cn)("relative overflow-hidden",className)},props),__jsx(dist.l_,{className:"h-full w-full rounded-[inherit]"},children),__jsx(ScrollBar,null),__jsx(dist.Ns,null))}));ScrollArea.displayName=dist.fC.displayName;var _Default$parameters,_Default$parameters2,ScrollBar=react.forwardRef((function(_ref2,ref){var className=_ref2.className,_ref2$orientation=_ref2.orientation,orientation=void 0===_ref2$orientation?"vertical":_ref2$orientation,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx(dist.gb,(0,esm_extends.Z)({ref,orientation,className:(0,utils.cn)("flex touch-none select-none transition-colors","vertical"===orientation&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===orientation&&"h-2.5 border-t border-t-transparent p-[1px]",className)},props),__jsx(dist.q4,{className:"relative flex-1 rounded-full bg-border"}))}));ScrollBar.displayName=dist.gb.displayName,ScrollArea.__docgenInfo={description:"",methods:[]},ScrollBar.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:'"vertical"',computed:!1},required:!1}}};try{ScrollArea.displayName="ScrollArea",ScrollArea.__docgenInfo={description:"",displayName:"ScrollArea",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/scroll-area/scroll-area.tsx#ScrollArea"]={docgenInfo:ScrollArea.__docgenInfo,name:"ScrollArea",path:"../components/src/scroll-area/scroll-area.tsx#ScrollArea"})}catch(__react_docgen_typescript_loader_error){}try{ScrollBar.displayName="ScrollBar",ScrollBar.__docgenInfo={description:"",displayName:"ScrollBar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/scroll-area/scroll-area.tsx#ScrollBar"]={docgenInfo:ScrollBar.__docgenInfo,name:"ScrollBar",path:"../components/src/scroll-area/scroll-area.tsx#ScrollBar"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const scroll_area_stories={parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { ScrollArea } from "@components/scroll-area/scroll-area";\nconst meta: Meta<typeof ScrollArea> = {\n  title: "Component/ScrollArea",\n  component: ScrollArea\n};\nexport default meta;\ntype Story = StoryObj<typeof ScrollArea>;\nexport const Default: Story = {\n  args: {\n    className: "h-[200px] w-[350px] rounded-md border p-4",\n    children: `Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled \\`ORANGE MARMALADE\', but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.`\n  }\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    className: \\"h-[200px] w-[350px] rounded-md border p-4\\",\\n    children: `Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled \\\\`ORANGE MARMALADE\', but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.`\\n  }\\n}",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{default:{startLoc:{col:30,line:9},endLoc:{col:1,line:14},startBody:{col:30,line:9},endBody:{col:1,line:14}}}}},title:"Component/ScrollArea",component:ScrollArea};var Default={args:{className:"h-[200px] w-[350px] rounded-md border p-4",children:"Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled `ORANGE MARMALADE', but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it."}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    className: "h-[200px] w-[350px] rounded-md border p-4",\n    children: `Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled \\`ORANGE MARMALADE\', but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.`\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"../lib/src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@1.13.2/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}}}]);