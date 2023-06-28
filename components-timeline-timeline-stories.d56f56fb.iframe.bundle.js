"use strict";(self.webpackChunkmaison_components=self.webpackChunkmaison_components||[]).push([[2553],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./src/components/timeline/timeline.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DynamicContent:()=>DynamicContent,StylingDots:()=>StylingDots,default:()=>timeline_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),utils=__webpack_require__("./src/lib/utils.ts"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["className","children","active"],_excluded2=["className","icon","children","active","last"],_excluded3=["className","children"],_excluded4=["className","children"],_excluded5=["className","children"],__jsx=react.createElement,Timeline=react.forwardRef((function(_ref,ref){var className=_ref.className,children=_ref.children,active=_ref.active,props=(0,objectWithoutProperties.Z)(_ref,_excluded),_children=react.Children.toArray(children),mappedChildren=_children.map((function(child,index){if(react.isValidElement(child)){if(child.type===TimelineItem)return react.cloneElement(child,{active:index<=active,last:index===_children.length-1});console.error("Timeline component only accepts TimelineItem as children.")}else console.error("Child is not a valid React element.")}));return __jsx("div",(0,esm_extends.Z)({ref,className:(0,utils.cn)("pl-10 space-y-6",className)},props),mappedChildren)}));Timeline.displayName="Timeline";var timelineIconVariants=(0,dist.j)("rounded-full h-6 w-6 absolute top-0 -left-10 flex items-center justify-center",{variants:{active:{true:"bg-primary text-accent",false:"bg-muted-foreground/50 text-primary"}},defaultVariants:{active:!1}}),timelineBeforeVariants=(0,dist.j)("before:border-l before:-left-7 before:box-border before:-translate-x-1/2 before:absolute before:top-6 before:h-full",{variants:{active:{true:"before:border-primary",false:"before:border-muted-foreground/50"},last:{true:"before:hidden",false:"before:block"}}}),TimelineItem=react.forwardRef((function(_ref2,ref){var className=_ref2.className,icon=_ref2.icon,children=_ref2.children,active=_ref2.active,last=_ref2.last,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx("div",(0,esm_extends.Z)({"data-state":active?"active":"inactive",ref,className:(0,utils.cn)(timelineBeforeVariants({active,last}),"relative",className)},props),__jsx("div",{className:(0,utils.cn)(timelineIconVariants({active}))},icon),children)}));TimelineItem.displayName="TimelineItem";var TimelineItemTitle=function TimelineItemTitle(_ref3){var className=_ref3.className,children=_ref3.children,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return __jsx("div",(0,esm_extends.Z)({className:(0,utils.cn)("",className)},props),children)};TimelineItemTitle.displayName="TimelineItemTitle";var TimelineItemDescription=function TimelineItemDescription(_ref4){var className=_ref4.className,children=_ref4.children,props=(0,objectWithoutProperties.Z)(_ref4,_excluded4);return __jsx("p",(0,esm_extends.Z)({className:(0,utils.cn)("leading-7 [&:not(:first-child)]:mt-1 text-muted-foreground/90",className)},props),children)};TimelineItemDescription.displayName="TimelineItemDescription";var TimelineItemDetail=function TimelineItemDetail(_ref5){var className=_ref5.className,children=_ref5.children,props=(0,objectWithoutProperties.Z)(_ref5,_excluded5);return __jsx("div",(0,esm_extends.Z)({className:(0,utils.cn)("text-sm [&:not(:first-child)]:mt-1",className)},props),children)};TimelineItemDetail.displayName="TimelineItemDetail",Timeline.__docgenInfo={description:"",methods:[],displayName:"Timeline"},TimelineItem.__docgenInfo={description:"",methods:[],displayName:"TimelineItem"},TimelineItemTitle.__docgenInfo={description:"",methods:[],displayName:"TimelineItemTitle"},TimelineItemDescription.__docgenInfo={description:"",methods:[],displayName:"TimelineItemDescription"},TimelineItemDetail.__docgenInfo={description:"",methods:[],displayName:"TimelineItemDetail"};try{Timeline.displayName="Timeline",Timeline.__docgenInfo={description:"",displayName:"Timeline",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/timeline/timeline.tsx#Timeline"]={docgenInfo:Timeline.__docgenInfo,name:"Timeline",path:"src/components/timeline/timeline.tsx#Timeline"})}catch(__react_docgen_typescript_loader_error){}const GitBranchPlus=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("GitBranchPlus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);var _Default$parameters,_Default$parameters2,_Default$parameters2$,_DynamicContent$param,_DynamicContent$param2,_DynamicContent$param3,_StylingDots$paramete,_StylingDots$paramete2,_StylingDots$paramete3,timeline_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const timeline_stories={title:"Component/Timeline",component:Timeline,parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { Timeline, TimelineItem, TimelineItemDescription, TimelineItemDetail, TimelineItemTitle } from "./timeline";\nimport { GitBranchPlus } from "lucide-react";\nimport React from "react";\n\n/**\n * Timeline must be used in conjunction with TimelineItem.\n *\n * TimelineItem can have any valid React children.\n *\n * However you can use the following prestyled components to speed up development:\n * - TimelineItemTitle\n * - TimelineItemDescription\n * - TimelineItemDetail\n *\n * ## Useful attributes:\n * The active state of the TimelineItem is saved in the data-state attribute. This means you can conditionally style your TimelineItem based on the active state.\n * See the **DynamicContent** example for more information.\n *\n * # TimelineItem\n * In TimelineItem you can pass any ReactNode to icon prop which will be rendered on the left side of the TimelineItem.\n *\n *\n * # Examples:\n */\nconst meta: Meta<typeof Timeline> = {\n  title: "Component/Timeline",\n  component: Timeline,\n  parameters: {\n    docs: {\n      description: {\n        component: "Timeline must be used in conjunction with TimelineItem.\\n\\nTimelineItem can have any valid React children.\\n\\nHowever you can use the following prestyled components to speed up development:\\n- TimelineItemTitle\\n- TimelineItemDescription\\n- TimelineItemDetail\\n\\n## Useful attributes:\\nThe active state of the TimelineItem is saved in the data-state attribute. This means you can conditionally style your TimelineItem based on the active state.\\nSee the **DynamicContent** example for more information.\\n\\n# TimelineItem\\nIn TimelineItem you can pass any ReactNode to icon prop which will be rendered on the left side of the TimelineItem.\\n\\n\\n# Examples:"\n      }\n    }\n  }\n};\nexport default meta;\ntype Story = StoryObj<typeof Timeline>;\nexport const Default: Story = {\n  args: {\n    active: 0,\n    className: "max-w-sm"\n  },\n  render: args => <Timeline {...args}>\n      <TimelineItem icon={<GitBranchPlus className="w-4 h-4" />}>\n        <TimelineItemTitle>New branch</TimelineItemTitle>\n        <TimelineItemDescription>\n          You&apos;ve created new branch fix-notifications from master\n        </TimelineItemDescription>\n        <TimelineItemDetail>2 hours ago</TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem>Test2</TimelineItem>\n      <TimelineItem>Test3</TimelineItem>\n    </Timeline>\n};\nexport const DynamicContent: Story = {\n  args: {\n    active: 0,\n    className: "max-w-sm"\n  },\n  render: args => <Timeline {...args}>\n      <TimelineItem className="group" icon={<GitBranchPlus className="w-4 h-4" />}>\n        <TimelineItemTitle>New branch</TimelineItemTitle>\n        <TimelineItemDescription className="group-data-[state=inactive]:hidden">\n          You&apos;ve created new branch fix-notifications from master\n        </TimelineItemDescription>\n        <TimelineItemDetail className="group-data-[state=inactive]:hidden">\n          2 hours ago\n        </TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem className="group">\n        <TimelineItemTitle>Pull request</TimelineItemTitle>\n        <TimelineItemDescription className="group-data-[state=inactive]:hidden">\n          You&apos;ve submitted a pull request Fix incorrect notification\n          message (#187)\n        </TimelineItemDescription>\n        <TimelineItemDetail className="group-data-[state=inactive]:hidden">\n          30 minutes ago\n        </TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem>Code review</TimelineItem>\n    </Timeline>\n};\nexport const StylingDots: Story = {\n  args: {\n    active: 0,\n    className: "max-w-sm"\n  },\n  render: args => <Timeline {...args}>\n      <TimelineItem className="group" icon={<div className="bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full" />}>\n        <TimelineItemTitle>New branch</TimelineItemTitle>\n        <TimelineItemDescription className="">\n          You&apos;ve created new branch fix-notifications from master\n        </TimelineItemDescription>\n        <TimelineItemDetail className="">2 hours ago</TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem className="group" icon={<div className="bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full" />}>\n        <TimelineItemTitle>Pull request</TimelineItemTitle>\n        <TimelineItemDescription className="">\n          You&apos;ve submitted a pull request Fix incorrect notification\n          message (#187)\n        </TimelineItemDescription>\n        <TimelineItemDetail className="">30 minutes ago</TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem className="group" icon={<div className="bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full" />}>\n        Code review\n      </TimelineItem>\n    </Timeline>\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    active: 0,\\n    className: \\"max-w-sm\\"\\n  },\\n  render: args => <Timeline {...args}>\\n      <TimelineItem icon={<GitBranchPlus className=\\"w-4 h-4\\" />}>\\n        <TimelineItemTitle>New branch</TimelineItemTitle>\\n        <TimelineItemDescription>\\n          You&apos;ve created new branch fix-notifications from master\\n        </TimelineItemDescription>\\n        <TimelineItemDetail>2 hours ago</TimelineItemDetail>\\n      </TimelineItem>\\n      <TimelineItem>Test2</TimelineItem>\\n      <TimelineItem>Test3</TimelineItem>\\n    </Timeline>\\n}",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};\nDynamicContent.parameters = {\n  ...DynamicContent.parameters,\n  docs: {\n    ...DynamicContent.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    active: 0,\\n    className: \\"max-w-sm\\"\\n  },\\n  render: args => <Timeline {...args}>\\n      <TimelineItem className=\\"group\\" icon={<GitBranchPlus className=\\"w-4 h-4\\" />}>\\n        <TimelineItemTitle>New branch</TimelineItemTitle>\\n        <TimelineItemDescription className=\\"group-data-[state=inactive]:hidden\\">\\n          You&apos;ve created new branch fix-notifications from master\\n        </TimelineItemDescription>\\n        <TimelineItemDetail className=\\"group-data-[state=inactive]:hidden\\">\\n          2 hours ago\\n        </TimelineItemDetail>\\n      </TimelineItem>\\n      <TimelineItem className=\\"group\\">\\n        <TimelineItemTitle>Pull request</TimelineItemTitle>\\n        <TimelineItemDescription className=\\"group-data-[state=inactive]:hidden\\">\\n          You&apos;ve submitted a pull request Fix incorrect notification\\n          message (#187)\\n        </TimelineItemDescription>\\n        <TimelineItemDetail className=\\"group-data-[state=inactive]:hidden\\">\\n          30 minutes ago\\n        </TimelineItemDetail>\\n      </TimelineItem>\\n      <TimelineItem>Code review</TimelineItem>\\n    </Timeline>\\n}",\n      ...DynamicContent.parameters?.docs?.source\n    }\n  }\n};\nStylingDots.parameters = {\n  ...StylingDots.parameters,\n  docs: {\n    ...StylingDots.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {\\n    active: 0,\\n    className: \\"max-w-sm\\"\\n  },\\n  render: args => <Timeline {...args}>\\n      <TimelineItem className=\\"group\\" icon={<div className=\\"bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full\\" />}>\\n        <TimelineItemTitle>New branch</TimelineItemTitle>\\n        <TimelineItemDescription className=\\"\\">\\n          You&apos;ve created new branch fix-notifications from master\\n        </TimelineItemDescription>\\n        <TimelineItemDetail className=\\"\\">2 hours ago</TimelineItemDetail>\\n      </TimelineItem>\\n      <TimelineItem className=\\"group\\" icon={<div className=\\"bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full\\" />}>\\n        <TimelineItemTitle>Pull request</TimelineItemTitle>\\n        <TimelineItemDescription className=\\"\\">\\n          You&apos;ve submitted a pull request Fix incorrect notification\\n          message (#187)\\n        </TimelineItemDescription>\\n        <TimelineItemDetail className=\\"\\">30 minutes ago</TimelineItemDetail>\\n      </TimelineItem>\\n      <TimelineItem className=\\"group\\" icon={<div className=\\"bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full\\" />}>\\n        Code review\\n      </TimelineItem>\\n    </Timeline>\\n}",\n      ...StylingDots.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{default:{startLoc:{col:30,line:39},endLoc:{col:1,line:55},startBody:{col:30,line:39},endBody:{col:1,line:55}},"dynamic-content":{startLoc:{col:37,line:56},endLoc:{col:1,line:83},startBody:{col:37,line:56},endBody:{col:1,line:83}},"styling-dots":{startLoc:{col:34,line:84},endLoc:{col:1,line:109},startBody:{col:34,line:84},endBody:{col:1,line:109}}}},docs:{description:{component:"Timeline must be used in conjunction with TimelineItem.\n\nTimelineItem can have any valid React children.\n\nHowever you can use the following prestyled components to speed up development:\n- TimelineItemTitle\n- TimelineItemDescription\n- TimelineItemDetail\n\n## Useful attributes:\nThe active state of the TimelineItem is saved in the data-state attribute. This means you can conditionally style your TimelineItem based on the active state.\nSee the **DynamicContent** example for more information.\n\n# TimelineItem\nIn TimelineItem you can pass any ReactNode to icon prop which will be rendered on the left side of the TimelineItem.\n\n\n# Examples:"}}}};var Default={args:{active:0,className:"max-w-sm"},render:function render(args){return timeline_stories_jsx(Timeline,args,timeline_stories_jsx(TimelineItem,{icon:timeline_stories_jsx(GitBranchPlus,{className:"w-4 h-4"})},timeline_stories_jsx(TimelineItemTitle,null,"New branch"),timeline_stories_jsx(TimelineItemDescription,null,"You've created new branch fix-notifications from master"),timeline_stories_jsx(TimelineItemDetail,null,"2 hours ago")),timeline_stories_jsx(TimelineItem,null,"Test2"),timeline_stories_jsx(TimelineItem,null,"Test3"))}},DynamicContent={args:{active:0,className:"max-w-sm"},render:function render(args){return timeline_stories_jsx(Timeline,args,timeline_stories_jsx(TimelineItem,{className:"group",icon:timeline_stories_jsx(GitBranchPlus,{className:"w-4 h-4"})},timeline_stories_jsx(TimelineItemTitle,null,"New branch"),timeline_stories_jsx(TimelineItemDescription,{className:"group-data-[state=inactive]:hidden"},"You've created new branch fix-notifications from master"),timeline_stories_jsx(TimelineItemDetail,{className:"group-data-[state=inactive]:hidden"},"2 hours ago")),timeline_stories_jsx(TimelineItem,{className:"group"},timeline_stories_jsx(TimelineItemTitle,null,"Pull request"),timeline_stories_jsx(TimelineItemDescription,{className:"group-data-[state=inactive]:hidden"},"You've submitted a pull request Fix incorrect notification message (#187)"),timeline_stories_jsx(TimelineItemDetail,{className:"group-data-[state=inactive]:hidden"},"30 minutes ago")),timeline_stories_jsx(TimelineItem,null,"Code review"))}},StylingDots={args:{active:0,className:"max-w-sm"},render:function render(args){return timeline_stories_jsx(Timeline,args,timeline_stories_jsx(TimelineItem,{className:"group",icon:timeline_stories_jsx("div",{className:"bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full"})},timeline_stories_jsx(TimelineItemTitle,null,"New branch"),timeline_stories_jsx(TimelineItemDescription,{className:""},"You've created new branch fix-notifications from master"),timeline_stories_jsx(TimelineItemDetail,{className:""},"2 hours ago")),timeline_stories_jsx(TimelineItem,{className:"group",icon:timeline_stories_jsx("div",{className:"bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full"})},timeline_stories_jsx(TimelineItemTitle,null,"Pull request"),timeline_stories_jsx(TimelineItemDescription,{className:""},"You've submitted a pull request Fix incorrect notification message (#187)"),timeline_stories_jsx(TimelineItemDetail,{className:""},"30 minutes ago")),timeline_stories_jsx(TimelineItem,{className:"group",icon:timeline_stories_jsx("div",{className:"bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full"})},"Code review"))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    active: 0,\n    className: "max-w-sm"\n  },\n  render: args => <Timeline {...args}>\n      <TimelineItem icon={<GitBranchPlus className="w-4 h-4" />}>\n        <TimelineItemTitle>New branch</TimelineItemTitle>\n        <TimelineItemDescription>\n          You&apos;ve created new branch fix-notifications from master\n        </TimelineItemDescription>\n        <TimelineItemDetail>2 hours ago</TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem>Test2</TimelineItem>\n      <TimelineItem>Test3</TimelineItem>\n    </Timeline>\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),DynamicContent.parameters=_objectSpread(_objectSpread({},DynamicContent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DynamicContent$param=DynamicContent.parameters)||void 0===_DynamicContent$param?void 0:_DynamicContent$param.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    active: 0,\n    className: "max-w-sm"\n  },\n  render: args => <Timeline {...args}>\n      <TimelineItem className="group" icon={<GitBranchPlus className="w-4 h-4" />}>\n        <TimelineItemTitle>New branch</TimelineItemTitle>\n        <TimelineItemDescription className="group-data-[state=inactive]:hidden">\n          You&apos;ve created new branch fix-notifications from master\n        </TimelineItemDescription>\n        <TimelineItemDetail className="group-data-[state=inactive]:hidden">\n          2 hours ago\n        </TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem className="group">\n        <TimelineItemTitle>Pull request</TimelineItemTitle>\n        <TimelineItemDescription className="group-data-[state=inactive]:hidden">\n          You&apos;ve submitted a pull request Fix incorrect notification\n          message (#187)\n        </TimelineItemDescription>\n        <TimelineItemDetail className="group-data-[state=inactive]:hidden">\n          30 minutes ago\n        </TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem>Code review</TimelineItem>\n    </Timeline>\n}'},null===(_DynamicContent$param2=DynamicContent.parameters)||void 0===_DynamicContent$param2||null===(_DynamicContent$param3=_DynamicContent$param2.docs)||void 0===_DynamicContent$param3?void 0:_DynamicContent$param3.source)})}),StylingDots.parameters=_objectSpread(_objectSpread({},StylingDots.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StylingDots$paramete=StylingDots.parameters)||void 0===_StylingDots$paramete?void 0:_StylingDots$paramete.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    active: 0,\n    className: "max-w-sm"\n  },\n  render: args => <Timeline {...args}>\n      <TimelineItem className="group" icon={<div className="bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full" />}>\n        <TimelineItemTitle>New branch</TimelineItemTitle>\n        <TimelineItemDescription className="">\n          You&apos;ve created new branch fix-notifications from master\n        </TimelineItemDescription>\n        <TimelineItemDetail className="">2 hours ago</TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem className="group" icon={<div className="bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full" />}>\n        <TimelineItemTitle>Pull request</TimelineItemTitle>\n        <TimelineItemDescription className="">\n          You&apos;ve submitted a pull request Fix incorrect notification\n          message (#187)\n        </TimelineItemDescription>\n        <TimelineItemDetail className="">30 minutes ago</TimelineItemDetail>\n      </TimelineItem>\n      <TimelineItem className="group" icon={<div className="bg-background group-data-[state=active]:bg-indigo-600 w-3 h-3 rounded-full" />}>\n        Code review\n      </TimelineItem>\n    </Timeline>\n}'},null===(_StylingDots$paramete2=StylingDots.parameters)||void 0===_StylingDots$paramete2||null===(_StylingDots$paramete3=_StylingDots$paramete2.docs)||void 0===_StylingDots$paramete3?void 0:_StylingDots$paramete3.source)})})},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js");const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>createLucideIcon});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,children,...rest},ref)=>{return(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:`lucide lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...(Array.isArray(children)?children:[children])||[]]);var string}));return Component.displayName=`${iconName}`,Component}}}]);