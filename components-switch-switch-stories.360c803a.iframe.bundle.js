"use strict";(self.webpackChunkmaison_components=self.webpackChunkmaison_components||[]).push([[4872],{"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}},"./src/components/switch/switch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>switch_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_use_previous_dist=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),react_use_size_dist=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,react_context_dist.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...switchProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked,disabled},(0,react.createElement)(react_primitive_dist.WV.button,(0,esm_extends.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},switchProps,{ref:composedRefs,onClick:(0,dist.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist.D)(checked),controlSize=(0,react_use_size_dist.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106;var _Default$parameters,_Default$parameters2,_Default$parameters2$,utils=__webpack_require__("./src/lib/utils.ts"),_excluded=["className"],__jsx=react.createElement,Switch=react.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx($6be4966fd9bbc698$export$be92b6f5f03c0fe9,(0,esm_extends.Z)({className:(0,utils.cn)("peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",className)},props,{ref}),__jsx($6be4966fd9bbc698$export$6521433ed15a34db,{className:(0,utils.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")}))}));Switch.displayName=$6be4966fd9bbc698$export$be92b6f5f03c0fe9.displayName,Switch.__docgenInfo={description:"",methods:[]};try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/switch/switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const switch_stories={parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { Switch } from "./switch";\nconst meta: Meta<typeof Switch> = {\n  title: "Component/Switch",\n  component: Switch\n};\nexport default meta;\ntype Story = StoryObj<typeof Switch>;\nexport const Default: Story = {\n  args: {}\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {}\\n}",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{default:{startLoc:{col:30,line:9},endLoc:{col:1,line:11},startBody:{col:30,line:9},endBody:{col:1,line:11}}}}},title:"Component/Switch",component:Switch};var Default={args:{}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}}}]);