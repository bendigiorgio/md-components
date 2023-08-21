"use strict";(self.webpackChunkkiso_storybook=self.webpackChunkkiso_storybook||[]).push([[8137],{"./src/prebuilt/testimonal/testimonial.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoImage:()=>NoImage,WithLinks:()=>WithLinks,default:()=>testimonial_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),avatar=__webpack_require__("../components/src/avatar/avatar.tsx"),card=__webpack_require__("../components/src/card/index.ts"),utils=__webpack_require__("../lib/src/utils/utils.ts"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_excluded=["quote","person","className"],__jsx=react.createElement,Testimonial=function Testimonial(_ref){var quote=_ref.quote,person=_ref.person,className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(card.Zb,(0,esm_extends.Z)({className:(0,utils.cn)("max-w-xs",className)},props),__jsx(card.Ol,{className:"flex w-full flex-col items-start"},__jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 33 25","aria-label":"Quote",role:"img",className:"h-10 text-foreground"},__jsx("path",{fill:"currentColor",d:"M0.500189 24.8163H12.1005V17.1574C12.0676 11.7727 13.5835 7.72584 15.9563 3.81275L9.10158 0C4.75145 3.64552 0.467233 10.8362 0.500189 17.1908V24.8163ZM17.0439 24.8163H28.6442V17.1574C28.6112 11.7727 30.1272 7.72584 32.5 3.81275L25.6453 0C21.2951 3.64552 17.0109 10.8362 17.0439 17.1908V24.8163Z"}))),__jsx(card.aY,{className:"leading-relaxed text-muted-foreground"},quote),__jsx(card.eW,{className:"flex flex-row space-x-4"},person.image&&__jsx(avatar.qE,null,__jsx(avatar.F$,{alt:"string"==typeof person.name?person.name:"profile picture",src:person.image})),__jsx("div",{className:"text-accent-foreground"},person.name)))};Testimonial.displayName="Testimonial",Testimonial.__docgenInfo={description:"",methods:[],displayName:"Testimonial",props:{quote:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},person:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  name: string | React.ReactNode;\n  image?: string;\n}",signature:{properties:[{key:"name",value:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}],required:!0}},{key:"image",value:{name:"string",required:!1}}]}},description:""}}};try{Testimonial.displayName="Testimonial",Testimonial.__docgenInfo={description:"",displayName:"Testimonial",props:{quote:{defaultValue:null,description:"",name:"quote",required:!0,type:{name:"ReactNode"}},person:{defaultValue:null,description:"",name:"person",required:!0,type:{name:"{ name: ReactNode; image?: string | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/prebuilt/testimonal/testimonial.tsx#Testimonial"]={docgenInfo:Testimonial.__docgenInfo,name:"Testimonial",path:"src/prebuilt/testimonal/testimonial.tsx#Testimonial"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_NoImage$parameters,_NoImage$parameters2,_WithLinks$parameters,_WithLinks$parameters2,src_button=__webpack_require__("../components/src/button/index.ts"),testimonial_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const testimonial_stories={title:"Prebuilt/Testimonial",component:Testimonial};var Default={args:{person:{image:"https://cdn.midjourney.com/89787b27-a11e-44cf-b7f1-ef55b4d28006/0_3.png",name:"bendigiorgio"},quote:"To all my fellow developers who wish to increase their productivity while maintaining high-quality code, I wholeheartedly recommend Kiso. This library has not just been a tool in our development process; it has become an essential part of our development ecosystem."}},NoImage={args:{person:{name:"bendigiorgio"},quote:"Each component is designed meticulously with functionality and style that smoothly blend with any project aesthetic. They’re easy to customize, incredibly responsive, and take very little time to implement."}},WithLinks={args:{person:{name:testimonial_stories_jsx(src_button.z,{variant:"link",className:"mx-0 px-0 text-secondary-foreground"},"bendigiorgio"),image:"https://cdn.midjourney.com/ecf66e28-c3b6-4e0b-8b74-661731bbc609/0_1.png"},quote:testimonial_stories_jsx("p",null,"As a full-stack developer constantly on the lookout for efficient and robust solutions, I cannot express enough how time saving Kiso compnents have been for my"," ",testimonial_stories_jsx(src_button.z,{variant:"link",className:"mx-0 px-0 text-secondary-foreground"},"SaaS")," ","applicaton.")}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    person: {\n      image: "https://cdn.midjourney.com/89787b27-a11e-44cf-b7f1-ef55b4d28006/0_3.png",\n      name: "bendigiorgio"\n    },\n    quote: "To all my fellow developers who wish to increase their productivity while maintaining high-quality code, I wholeheartedly recommend Kiso. This library has not just been a tool in our development process; it has become an essential part of our development ecosystem."\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),NoImage.parameters=_objectSpread(_objectSpread({},NoImage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_NoImage$parameters=NoImage.parameters)||void 0===_NoImage$parameters?void 0:_NoImage$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    person: {\n      name: "bendigiorgio"\n    },\n    quote: "Each component is designed meticulously with functionality and style that smoothly blend with any project aesthetic. They’re easy to customize, incredibly responsive, and take very little time to implement."\n  }\n}'},null===(_NoImage$parameters2=NoImage.parameters)||void 0===_NoImage$parameters2||null===(_NoImage$parameters2=_NoImage$parameters2.docs)||void 0===_NoImage$parameters2?void 0:_NoImage$parameters2.source)})}),WithLinks.parameters=_objectSpread(_objectSpread({},WithLinks.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithLinks$parameters=WithLinks.parameters)||void 0===_WithLinks$parameters?void 0:_WithLinks$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    person: {\n      name: <Button variant="link" className="mx-0 px-0 text-secondary-foreground">\n          bendigiorgio\n        </Button>,\n      image: "https://cdn.midjourney.com/ecf66e28-c3b6-4e0b-8b74-661731bbc609/0_1.png"\n    },\n    quote: <p>\n        As a full-stack developer constantly on the lookout for efficient and\n        robust solutions, I cannot express enough how time saving Kiso compnents\n        have been for my{" "}\n        <Button variant="link" className="mx-0 px-0 text-secondary-foreground">\n          SaaS\n        </Button>{" "}\n        applicaton.\n      </p>\n  }\n}'},null===(_WithLinks$parameters2=WithLinks.parameters)||void 0===_WithLinks$parameters2||null===(_WithLinks$parameters2=_WithLinks$parameters2.docs)||void 0===_WithLinks$parameters2?void 0:_WithLinks$parameters2.source)})})},"../components/src/avatar/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F$:()=>AvatarImage,Q5:()=>AvatarFallback,qE:()=>Avatar,rR:()=>StackedAvatarGroup});var _Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-avatar@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-avatar/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../lib/src/utils/utils.ts"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Avatar=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",className)},props))}));Avatar.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.fC.displayName;var AvatarImage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.Ee,(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("aspect-square h-full w-full",className)},props))}));AvatarImage.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.Ee.displayName;var AvatarFallback=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref3,_excluded3);return __jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.NY,(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",className)},props))}));AvatarFallback.displayName=_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__.NY.displayName;var StackedAvatarGroup=function StackedAvatarGroup(_ref4){var className=_ref4.className,children=_ref4.children;return __jsx("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex h-fit -space-x-1 [&>*]:shrink-0 [&>*]:ring-2 [&>*]:ring-background",className)},children)};StackedAvatarGroup.displayName="StackedAvatarGroup",Avatar.__docgenInfo={description:"",methods:[]},AvatarImage.__docgenInfo={description:"",methods:[]},AvatarFallback.__docgenInfo={description:"",methods:[]},StackedAvatarGroup.__docgenInfo={description:"",methods:[],displayName:"StackedAvatarGroup"};try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"",displayName:"Avatar",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/avatar/avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"../components/src/avatar/avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}try{AvatarImage.displayName="AvatarImage",AvatarImage.__docgenInfo={description:"",displayName:"AvatarImage",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/avatar/avatar.tsx#AvatarImage"]={docgenInfo:AvatarImage.__docgenInfo,name:"AvatarImage",path:"../components/src/avatar/avatar.tsx#AvatarImage"})}catch(__react_docgen_typescript_loader_error){}try{AvatarFallback.displayName="AvatarFallback",AvatarFallback.__docgenInfo={description:"",displayName:"AvatarFallback",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/avatar/avatar.tsx#AvatarFallback"]={docgenInfo:AvatarFallback.__docgenInfo,name:"AvatarFallback",path:"../components/src/avatar/avatar.tsx#AvatarFallback"})}catch(__react_docgen_typescript_loader_error){}try{StackedAvatarGroup.displayName="StackedAvatarGroup",StackedAvatarGroup.__docgenInfo={description:"",displayName:"StackedAvatarGroup",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/avatar/avatar.tsx#StackedAvatarGroup"]={docgenInfo:StackedAvatarGroup.__docgenInfo,name:"StackedAvatarGroup",path:"../components/src/avatar/avatar.tsx#StackedAvatarGroup"})}catch(__react_docgen_typescript_loader_error){}},"../components/src/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>buttonVariants,z:()=>Button});var _Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/class-variance-authority@0.6.0_typescript@5.1.3/node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../lib/src/utils/utils.ts"),_excluded=["className","variant","size","asChild"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,size=_ref.size,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7:"button";return __jsx(Comp,(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,size,className})),ref},props))}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{asChild:{defaultValue:{value:"false"},description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"link" | "default" | "outline" | "secondary" | "destructive" | "ghost" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../components/src/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../components/src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>_button__WEBPACK_IMPORTED_MODULE_0__.d,z:()=>_button__WEBPACK_IMPORTED_MODULE_0__.z});var _button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../components/src/button/button.tsx")},"../components/src/card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ol:()=>CardHeader,SZ:()=>CardDescription,Zb:()=>Card,aY:()=>CardContent,eW:()=>CardFooter,ll:()=>CardTitle});var _Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../lib/src/utils/utils.ts"),_excluded=["className"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Card=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("div",(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",className)},props))}));Card.displayName="Card";var CardHeader=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref2,_excluded2);return __jsx("div",(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col space-y-1.5 p-6",className)},props))}));CardHeader.displayName="CardHeader";var CardTitle=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref3,ref){var className=_ref3.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref3,_excluded3);return __jsx("h3",(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-lg font-semibold leading-none tracking-tight",className)},props))}));CardTitle.displayName="CardTitle";var CardDescription=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref4,_excluded4);return __jsx("p",(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm text-muted-foreground",className)},props))}));CardDescription.displayName="CardDescription";var CardContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref5,_excluded5);return __jsx("div",(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("p-6 pt-0",className)},props))}));CardContent.displayName="CardContent";var CardFooter=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref6,_excluded6);return __jsx("div",(0,_Users_bendigiorgio_Documents_Programming_NPM_md_components_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({ref,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(" flex items-center p-6 pt-0",className)},props))}));CardFooter.displayName="CardFooter",Card.__docgenInfo={description:"",methods:[],displayName:"Card"},CardHeader.__docgenInfo={description:"",methods:[],displayName:"CardHeader"},CardFooter.__docgenInfo={description:"",methods:[],displayName:"CardFooter"},CardTitle.__docgenInfo={description:"",methods:[],displayName:"CardTitle"},CardDescription.__docgenInfo={description:"",methods:[],displayName:"CardDescription"},CardContent.__docgenInfo={description:"",methods:[],displayName:"CardContent"};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/card/card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"../components/src/card/card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"../components/src/card/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ol:()=>_card__WEBPACK_IMPORTED_MODULE_0__.Ol,Zb:()=>_card__WEBPACK_IMPORTED_MODULE_0__.Zb,aY:()=>_card__WEBPACK_IMPORTED_MODULE_0__.aY,eW:()=>_card__WEBPACK_IMPORTED_MODULE_0__.eW,ll:()=>_card__WEBPACK_IMPORTED_MODULE_0__.ll});var _card__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../components/src/card/card.tsx")},"../lib/src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@1.13.2/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}},"../../node_modules/.pnpm/class-variance-authority@0.6.0_typescript@5.1.3/node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js");const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.Z,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);