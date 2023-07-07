"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[1050],{"./src/components/navigation-menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>navigation_menu_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-navigation-menu@1.1.3_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-navigation-menu/dist/index.mjs"),class_variance_authority_dist=__webpack_require__("../../node_modules/.pnpm/class-variance-authority@0.6.1/node_modules/class-variance-authority/dist/index.mjs"),chevron_down=__webpack_require__("../../node_modules/.pnpm/lucide-react@0.248.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js"),utils=__webpack_require__("../lib/src/utils/utils.ts"),_excluded=["className","children"],_excluded2=["className"],_excluded3=["className","children"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],_excluded7=["className","title","children"],__jsx=react.createElement,NavigationMenu=react.forwardRef((function(_ref,ref){var className=_ref.className,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(dist.fC,(0,esm_extends.Z)({ref,className:(0,utils.cn)("relative z-10 flex flex-1 items-center justify-center",className)},props),children,__jsx(NavigationMenuViewport,null))}));NavigationMenu.displayName=dist.fC.displayName;var NavigationMenuList=react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.Z)(_ref2,_excluded2);return __jsx(dist.aV,(0,esm_extends.Z)({ref,className:(0,utils.cn)("group flex flex-1 list-none items-center justify-center space-x-1",className)},props))}));NavigationMenuList.displayName=dist.aV.displayName;var NavigationMenuItem=dist.ck,navigationMenuTriggerStyle=(0,class_variance_authority_dist.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:bg-accent focus:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none bg-background hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent/50 data-[active]:bg-accent/50 h-10 py-2 px-4 group w-max"),NavigationMenuTrigger=react.forwardRef((function(_ref3,ref){var className=_ref3.className,children=_ref3.children,props=(0,objectWithoutProperties.Z)(_ref3,_excluded3);return __jsx(dist.xz,(0,esm_extends.Z)({ref,className:(0,utils.cn)(navigationMenuTriggerStyle(),"group",className)},props),children," ",__jsx(chevron_down.Z,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"}))}));NavigationMenuTrigger.displayName=dist.xz.displayName;var NavigationMenuContent=react.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,objectWithoutProperties.Z)(_ref4,_excluded4);return __jsx(dist.VY,(0,esm_extends.Z)({ref,className:(0,utils.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",className)},props))}));NavigationMenuContent.displayName=dist.VY.displayName;var NavigationMenuLink=dist.rU,NavigationMenuViewport=react.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,objectWithoutProperties.Z)(_ref5,_excluded5);return __jsx("div",{className:(0,utils.cn)("absolute left-0 top-full flex justify-center")},__jsx(dist.l_,(0,esm_extends.Z)({className:(0,utils.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",className),ref},props)))}));NavigationMenuViewport.displayName=dist.l_.displayName;var NavigationMenuIndicator=react.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,objectWithoutProperties.Z)(_ref6,_excluded6);return __jsx(dist.z$,(0,esm_extends.Z)({ref,className:(0,utils.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",className)},props),__jsx("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"}))}));NavigationMenuIndicator.displayName=dist.z$.displayName;var _Default$parameters,_Default$parameters2,ListItem=react.forwardRef((function(_ref7,ref){var className=_ref7.className,title=_ref7.title,children=_ref7.children,props=(0,objectWithoutProperties.Z)(_ref7,_excluded7);return __jsx("li",null,__jsx(NavigationMenuLink,{asChild:!0},__jsx("a",(0,esm_extends.Z)({ref,className:(0,utils.cn)("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",className)},props),__jsx("div",{className:"text-sm font-medium leading-none"},title),__jsx("p",{className:"line-clamp-2 text-sm leading-snug text-muted-foreground"},children))))}));ListItem.displayName="ListItem",NavigationMenu.__docgenInfo={description:"",methods:[]},NavigationMenuList.__docgenInfo={description:"",methods:[]},NavigationMenuContent.__docgenInfo={description:"",methods:[]},NavigationMenuTrigger.__docgenInfo={description:"",methods:[]},NavigationMenuIndicator.__docgenInfo={description:"",methods:[]},NavigationMenuViewport.__docgenInfo={description:"",methods:[]},ListItem.__docgenInfo={description:"",methods:[],displayName:"ListItem"};try{ListItem.displayName="ListItem",ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/navigation-menu/navigation-menu.tsx#ListItem"]={docgenInfo:ListItem.__docgenInfo,name:"ListItem",path:"../components/src/navigation-menu/navigation-menu.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}var navigation_menu_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const navigation_menu_stories={parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { ListItem, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@components/navigation-menu/navigation-menu";\nimport React from "react";\nconst meta: Meta<typeof NavigationMenu> = {\n  title: "Component/NavigationMenu",\n  component: NavigationMenu\n};\nexport default meta;\ntype Story = StoryObj<typeof NavigationMenu>;\nconst components: {\n  title: string;\n  href: string;\n  description: string;\n}[] = [{\n  title: "Avatar",\n  href: "/maison-components/?path=/docs/component-avatar--docs",\n  description: "A graphical representation of a user or the user\'s character or persona."\n}, {\n  title: "Hover Card",\n  href: "/maison-components/?path=/docs/component-hovercard--docs",\n  description: "For sighted users to preview content available behind a link."\n}, {\n  title: "Input",\n  href: "/maison-components/?path=/docs/component-input--docs",\n  description: "A field that allows users to input text, numbers, and other data."\n}, {\n  title: "Scroll Area",\n  href: "/maison-components/?path=/docs/component-scrollarea--docs",\n  description: "Visually or semantically separates content."\n}, {\n  title: "Tabs",\n  href: "/maison-components/?path=/docs/component-tabs--docs",\n  description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."\n}, {\n  title: "Tooltip",\n  href: "/maison-components/?path=/docs/component-tooltip--docs",\n  description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."\n}];\nexport const Default: Story = {\n  args: {},\n  render: args => <NavigationMenu {...args}>\n      <NavigationMenuList>\n        <NavigationMenuItem>\n          <NavigationMenuTrigger>Components</NavigationMenuTrigger>\n          <NavigationMenuContent>\n            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">\n              {components.map(component => <ListItem key={component.title} title={component.title} href={component.href}>\n                  {component.description}\n                </ListItem>)}\n            </ul>\n          </NavigationMenuContent>\n        </NavigationMenuItem>\n      </NavigationMenuList>\n    </NavigationMenu>\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {},\\n  render: args => <NavigationMenu {...args}>\\n      <NavigationMenuList>\\n        <NavigationMenuItem>\\n          <NavigationMenuTrigger>Components</NavigationMenuTrigger>\\n          <NavigationMenuContent>\\n            <ul className=\\"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] \\">\\n              {components.map(component => <ListItem key={component.title} title={component.title} href={component.href}>\\n                  {component.description}\\n                </ListItem>)}\\n            </ul>\\n          </NavigationMenuContent>\\n        </NavigationMenuItem>\\n      </NavigationMenuList>\\n    </NavigationMenu>\\n}",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{default:{startLoc:{col:30,line:39},endLoc:{col:1,line:55},startBody:{col:30,line:39},endBody:{col:1,line:55}}}}},title:"Component/NavigationMenu",component:NavigationMenu};var components=[{title:"Avatar",href:"/maison-components/?path=/docs/component-avatar--docs",description:"A graphical representation of a user or the user's character or persona."},{title:"Hover Card",href:"/maison-components/?path=/docs/component-hovercard--docs",description:"For sighted users to preview content available behind a link."},{title:"Input",href:"/maison-components/?path=/docs/component-input--docs",description:"A field that allows users to input text, numbers, and other data."},{title:"Scroll Area",href:"/maison-components/?path=/docs/component-scrollarea--docs",description:"Visually or semantically separates content."},{title:"Tabs",href:"/maison-components/?path=/docs/component-tabs--docs",description:"A set of layered sections of content—known as tab panels—that are displayed one at a time."},{title:"Tooltip",href:"/maison-components/?path=/docs/component-tooltip--docs",description:"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."}],Default={args:{},render:function render(args){return navigation_menu_stories_jsx(NavigationMenu,args,navigation_menu_stories_jsx(NavigationMenuList,null,navigation_menu_stories_jsx(NavigationMenuItem,null,navigation_menu_stories_jsx(NavigationMenuTrigger,null,"Components"),navigation_menu_stories_jsx(NavigationMenuContent,null,navigation_menu_stories_jsx("ul",{className:"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] "},components.map((function(component){return navigation_menu_stories_jsx(ListItem,{key:component.title,title:component.title,href:component.href},component.description)})))))))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {},\n  render: args => <NavigationMenu {...args}>\n      <NavigationMenuList>\n        <NavigationMenuItem>\n          <NavigationMenuTrigger>Components</NavigationMenuTrigger>\n          <NavigationMenuContent>\n            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">\n              {components.map(component => <ListItem key={component.title} title={component.title} href={component.href}>\n                  {component.description}\n                </ListItem>)}\n            </ul>\n          </NavigationMenuContent>\n        </NavigationMenuItem>\n      </NavigationMenuList>\n    </NavigationMenu>\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"../lib/src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@1.13.2/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}}}]);