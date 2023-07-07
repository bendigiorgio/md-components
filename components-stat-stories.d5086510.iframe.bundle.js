"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[7513],{"../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/stat.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Decrease:()=>Decrease,Default:()=>Default,Increase:()=>Increase,default:()=>stat_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),utils=__webpack_require__("../lib/src/utils/utils.ts"),dist=__webpack_require__("../../node_modules/.pnpm/class-variance-authority@0.6.1/node_modules/class-variance-authority/dist/index.mjs"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_excluded=["children","className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className","change"],__jsx=react.createElement,Stat=react.forwardRef((function(_ref,ref){var children=_ref.children,className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx("dl",(0,esm_extends.Z)({ref,className:(0,utils.cn)("space-y-1",className)},props),children)}));Stat.displayName="Stat";var StatLabel=react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx("dt",(0,esm_extends.Z)({ref,className:(0,utils.cn)("text-sm font-medium text-muted-foreground",className)},props))}));StatLabel.displayName="StatLabel";var StatNumber=react.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return __jsx("dd",(0,esm_extends.Z)({ref,className:(0,utils.cn)("align-baseline text-2xl font-semibold",className)},props))}));StatNumber.displayName="StatNumber";var StatDescription=react.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,objectWithoutProperties.Z)(_ref4,_excluded4);return __jsx("dd",(0,esm_extends.Z)({ref,className:(0,utils.cn)("flex flex-row text-sm text-muted-foreground opacity-80",className)},props))}));StatDescription.displayName="StatDescription";var _Default$parameters,_Default$parameters2,_Decrease$parameters,_Decrease$parameters2,_Increase$parameters,_Increase$parameters2,statArrowVariants=(0,dist.j)("h-4 w-4 transition-transform transform mr-1",{variants:{change:{positive:"text-green-500",negative:"text-red-500 rotate-180"}},defaultVariants:{change:"positive"}}),StatArrow=react.forwardRef((function(_ref5,ref){var className=_ref5.className,change=_ref5.change,props=(0,objectWithoutProperties.Z)(_ref5,_excluded5);return __jsx("svg",(0,esm_extends.Z)({ref,viewBox:"0 0 24 24",focusable:"false","aria-hidden":"true",className:(0,utils.cn)(statArrowVariants({change,className}))},props),__jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"}))}));StatArrow.displayName="StatArrow",Stat.__docgenInfo={description:"",methods:[],displayName:"Stat"},StatLabel.__docgenInfo={description:"",methods:[],displayName:"StatLabel"},StatNumber.__docgenInfo={description:"",methods:[],displayName:"StatNumber"},StatDescription.__docgenInfo={description:"",methods:[],displayName:"StatDescription"},StatArrow.__docgenInfo={description:"",methods:[],displayName:"StatArrow"};try{Stat.displayName="Stat",Stat.__docgenInfo={description:"",displayName:"Stat",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/stat/stat.tsx#Stat"]={docgenInfo:Stat.__docgenInfo,name:"Stat",path:"../components/src/stat/stat.tsx#Stat"})}catch(__react_docgen_typescript_loader_error){}var stat_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const stat_stories={parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { Stat, StatArrow, StatDescription, StatLabel, StatNumber } from "@components/stat/stat";\nimport React from "react";\nconst meta: Meta<typeof Stat> = {\n  title: "Component/Stat",\n  component: Stat\n};\nexport default meta;\ntype Story = StoryObj<typeof Stat>;\nexport const Default: Story = {\n  args: {},\n  render: args => <Stat {...args}>\n      <StatLabel>Collected Fees</StatLabel>\n      <StatNumber>$0.00</StatNumber>\n      <StatDescription>0.00%</StatDescription>\n    </Stat>\n};\nexport const Decrease: Story = {\n  args: {},\n  render: args => <Stat {...args}>\n      <StatLabel>Collected Fees</StatLabel>\n      <StatNumber>$27.00</StatNumber>\n      <StatDescription>\n        <StatArrow change="negative" /> 20.00%\n      </StatDescription>\n    </Stat>\n};\nexport const Increase: Story = {\n  args: {},\n  render: args => <Stat {...args}>\n      <StatLabel>Monthly Users</StatLabel>\n      <StatNumber>234,780</StatNumber>\n      <StatDescription>\n        <StatArrow change="positive" /> 20.00%\n      </StatDescription>\n    </Stat>\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {},\\n  render: args => <Stat {...args}>\\n      <StatLabel>Collected Fees</StatLabel>\\n      <StatNumber>$0.00</StatNumber>\\n      <StatDescription>0.00%</StatDescription>\\n    </Stat>\\n}",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};\nDecrease.parameters = {\n  ...Decrease.parameters,\n  docs: {\n    ...Decrease.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {},\\n  render: args => <Stat {...args}>\\n      <StatLabel>Collected Fees</StatLabel>\\n      <StatNumber>$27.00</StatNumber>\\n      <StatDescription>\\n        <StatArrow change=\\"negative\\" /> 20.00%\\n      </StatDescription>\\n    </Stat>\\n}",\n      ...Decrease.parameters?.docs?.source\n    }\n  }\n};\nIncrease.parameters = {\n  ...Increase.parameters,\n  docs: {\n    ...Increase.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {},\\n  render: args => <Stat {...args}>\\n      <StatLabel>Monthly Users</StatLabel>\\n      <StatNumber>234,780</StatNumber>\\n      <StatDescription>\\n        <StatArrow change=\\"positive\\" /> 20.00%\\n      </StatDescription>\\n    </Stat>\\n}",\n      ...Increase.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{default:{startLoc:{col:30,line:10},endLoc:{col:1,line:17},startBody:{col:30,line:10},endBody:{col:1,line:17}},decrease:{startLoc:{col:31,line:18},endLoc:{col:1,line:27},startBody:{col:31,line:18},endBody:{col:1,line:27}},increase:{startLoc:{col:31,line:28},endLoc:{col:1,line:37},startBody:{col:31,line:28},endBody:{col:1,line:37}}}}},title:"Component/Stat",component:Stat};var Default={args:{},render:function render(args){return stat_stories_jsx(Stat,args,stat_stories_jsx(StatLabel,null,"Collected Fees"),stat_stories_jsx(StatNumber,null,"$0.00"),stat_stories_jsx(StatDescription,null,"0.00%"))}},Decrease={args:{},render:function render(args){return stat_stories_jsx(Stat,args,stat_stories_jsx(StatLabel,null,"Collected Fees"),stat_stories_jsx(StatNumber,null,"$27.00"),stat_stories_jsx(StatDescription,null,stat_stories_jsx(StatArrow,{change:"negative"})," 20.00%"))}},Increase={args:{},render:function render(args){return stat_stories_jsx(Stat,args,stat_stories_jsx(StatLabel,null,"Monthly Users"),stat_stories_jsx(StatNumber,null,"234,780"),stat_stories_jsx(StatDescription,null,stat_stories_jsx(StatArrow,{change:"positive"})," 20.00%"))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {},\n  render: args => <Stat {...args}>\n      <StatLabel>Collected Fees</StatLabel>\n      <StatNumber>$0.00</StatNumber>\n      <StatDescription>0.00%</StatDescription>\n    </Stat>\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Decrease.parameters=_objectSpread(_objectSpread({},Decrease.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Decrease$parameters=Decrease.parameters)||void 0===_Decrease$parameters?void 0:_Decrease$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {},\n  render: args => <Stat {...args}>\n      <StatLabel>Collected Fees</StatLabel>\n      <StatNumber>$27.00</StatNumber>\n      <StatDescription>\n        <StatArrow change="negative" /> 20.00%\n      </StatDescription>\n    </Stat>\n}'},null===(_Decrease$parameters2=Decrease.parameters)||void 0===_Decrease$parameters2||null===(_Decrease$parameters2=_Decrease$parameters2.docs)||void 0===_Decrease$parameters2?void 0:_Decrease$parameters2.source)})}),Increase.parameters=_objectSpread(_objectSpread({},Increase.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Increase$parameters=Increase.parameters)||void 0===_Increase$parameters?void 0:_Increase$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {},\n  render: args => <Stat {...args}>\n      <StatLabel>Monthly Users</StatLabel>\n      <StatNumber>234,780</StatNumber>\n      <StatDescription>\n        <StatArrow change="positive" /> 20.00%\n      </StatDescription>\n    </Stat>\n}'},null===(_Increase$parameters2=Increase.parameters)||void 0===_Increase$parameters2||null===(_Increase$parameters2=_Increase$parameters2.docs)||void 0===_Increase$parameters2?void 0:_Increase$parameters2.source)})})},"../lib/src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@1.13.2/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"../../node_modules/.pnpm/class-variance-authority@0.6.1/node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js");const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);