"use strict";(self.webpackChunkmaison_components_storybook=self.webpackChunkmaison_components_storybook||[]).push([[7928],{"../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.4_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XB:()=>$5cb92bef7577960e$export$177fb62ff3ec1f22});var esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_47f64565616ce9f4b97e79f45ae38c30/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_47f64565616ce9f4b97e79f45ae38c30/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");let $5cb92bef7577960e$var$originalBodyPointerEvents;const $5cb92bef7577960e$var$DismissableLayerContext=(0,react.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$5cb92bef7577960e$export$177fb62ff3ec1f22=(0,react.forwardRef)(((props,forwardedRef)=>{var _node$ownerDocument;const{disableOutsidePointerEvents=!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,onDismiss,...layerProps}=props,context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),[node1,setNode]=(0,react.useState)(null),ownerDocument=null!==(_node$ownerDocument=null==node1?void 0:node1.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,force]=(0,react.useState)({}),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setNode(node))),layers=Array.from(context.layers),[highestLayerWithOutsidePointerEventsDisabled]=[...context.layersWithOutsidePointerEventsDisabled].slice(-1),highestLayerWithOutsidePointerEventsDisabledIndex=layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),index=node1?layers.indexOf(node1):-1,isBodyPointerEventsDisabled=context.layersWithOutsidePointerEventsDisabled.size>0,isPointerEventsEnabled=index>=highestLayerWithOutsidePointerEventsDisabledIndex,pointerDownOutside=function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handlePointerDownOutside=(0,react_use_callback_ref_dist.W)(onPointerDownOutside),isPointerInsideReactTreeRef=(0,react.useRef)(!1),handleClickRef=(0,react.useRef)((()=>{}));return(0,react.useEffect)((()=>{const handlePointerDown=event=>{if(event.target&&!isPointerInsideReactTreeRef.current){const eventDetail={originalEvent:event};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",handlePointerDownOutside,eventDetail,{discrete:!0})}"touch"===event.pointerType?(ownerDocument.removeEventListener("click",handleClickRef.current),handleClickRef.current=handleAndDispatchPointerDownOutsideEvent,ownerDocument.addEventListener("click",handleClickRef.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}isPointerInsideReactTreeRef.current=!1},timerId=window.setTimeout((()=>{ownerDocument.addEventListener("pointerdown",handlePointerDown)}),0);return()=>{window.clearTimeout(timerId),ownerDocument.removeEventListener("pointerdown",handlePointerDown),ownerDocument.removeEventListener("click",handleClickRef.current)}}),[ownerDocument,handlePointerDownOutside]),{onPointerDownCapture:()=>isPointerInsideReactTreeRef.current=!0}}((event=>{const target=event.target,isPointerDownOnBranch=[...context.branches].some((branch=>branch.contains(target)));isPointerEventsEnabled&&!isPointerDownOnBranch&&(null==onPointerDownOutside||onPointerDownOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument),focusOutside=function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handleFocusOutside=(0,react_use_callback_ref_dist.W)(onFocusOutside),isFocusInsideReactTreeRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleFocus=event=>{if(event.target&&!isFocusInsideReactTreeRef.current){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",handleFocusOutside,{originalEvent:event},{discrete:!1})}};return ownerDocument.addEventListener("focusin",handleFocus),()=>ownerDocument.removeEventListener("focusin",handleFocus)}),[ownerDocument,handleFocusOutside]),{onFocusCapture:()=>isFocusInsideReactTreeRef.current=!0,onBlurCapture:()=>isFocusInsideReactTreeRef.current=!1}}((event=>{const target=event.target;[...context.branches].some((branch=>branch.contains(target)))||(null==onFocusOutside||onFocusOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument);return function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const onEscapeKeyDown=(0,react_use_callback_ref_dist.W)(onEscapeKeyDownProp);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&onEscapeKeyDown(event)};return ownerDocument.addEventListener("keydown",handleKeyDown),()=>ownerDocument.removeEventListener("keydown",handleKeyDown)}),[onEscapeKeyDown,ownerDocument])}((event=>{index===context.layers.size-1&&(null==onEscapeKeyDown||onEscapeKeyDown(event),!event.defaultPrevented&&onDismiss&&(event.preventDefault(),onDismiss()))}),ownerDocument),(0,react.useEffect)((()=>{if(node1)return disableOutsidePointerEvents&&(0===context.layersWithOutsidePointerEventsDisabled.size&&($5cb92bef7577960e$var$originalBodyPointerEvents=ownerDocument.body.style.pointerEvents,ownerDocument.body.style.pointerEvents="none"),context.layersWithOutsidePointerEventsDisabled.add(node1)),context.layers.add(node1),$5cb92bef7577960e$var$dispatchUpdate(),()=>{disableOutsidePointerEvents&&1===context.layersWithOutsidePointerEventsDisabled.size&&(ownerDocument.body.style.pointerEvents=$5cb92bef7577960e$var$originalBodyPointerEvents)}}),[node1,ownerDocument,disableOutsidePointerEvents,context]),(0,react.useEffect)((()=>()=>{node1&&(context.layers.delete(node1),context.layersWithOutsidePointerEventsDisabled.delete(node1),$5cb92bef7577960e$var$dispatchUpdate())}),[node1,context]),(0,react.useEffect)((()=>{const handleUpdate=()=>force({});return document.addEventListener("dismissableLayer.update",handleUpdate),()=>document.removeEventListener("dismissableLayer.update",handleUpdate)}),[]),(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({},layerProps,{ref:composedRefs,style:{pointerEvents:isBodyPointerEventsDisabled?isPointerEventsEnabled?"auto":"none":void 0,...props.style},onFocusCapture:(0,dist.M)(props.onFocusCapture,focusOutside.onFocusCapture),onBlurCapture:(0,dist.M)(props.onBlurCapture,focusOutside.onBlurCapture),onPointerDownCapture:(0,dist.M)(props.onPointerDownCapture,pointerDownOutside.onPointerDownCapture)}))}));function $5cb92bef7577960e$var$dispatchUpdate(){const event=new CustomEvent("dismissableLayer.update");document.dispatchEvent(event)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const target=detail.originalEvent.target,event=new CustomEvent(name,{bubbles:!1,cancelable:!0,detail});handler&&target.addEventListener(name,handler,{once:!0}),discrete?(0,react_primitive_dist.jH)(target,event):target.dispatchEvent(event)}},"../../node_modules/.pnpm/@radix-ui+react-portal@1.0.3_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-portal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>$f1701beae083dbae$export$602eac185826482c});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-primitive/dist/index.mjs");const $f1701beae083dbae$export$602eac185826482c=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{var _globalThis$document;const{container=null===globalThis||void 0===globalThis||null===(_globalThis$document=globalThis.document)||void 0===_globalThis$document?void 0:_globalThis$document.body,...portalProps}=props;return container?react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({},portalProps,{ref:forwardedRef})),container):null}))},"../../node_modules/.pnpm/@radix-ui+react-presence@1.0.1_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>$921a889cee6df7e8$export$99c2b779aa4e8b8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_47f64565616ce9f4b97e79f45ae38c30/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_47f64565616ce9f4b97e79f45ae38c30/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $921a889cee6df7e8$export$99c2b779aa4e8b8b=props=>{const{present,children}=props,presence=function $921a889cee6df7e8$var$usePresence(present){const[node1,setNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),stylesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),prevPresentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present),prevAnimationNameRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("none"),initialState=present?"mounted":"unmounted",[state,send]=function $fe963b355347cc68$export$3e6543de14f8614f(initialState,machine){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentAnimationName=$921a889cee6df7e8$var$getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=$921a889cee6df7e8$var$getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===(null==styles?void 0:styles.display))send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.b)((()=>{if(node1){const handleAnimationEnd=event=>{const isCurrentAnimation=$921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);event.target===node1&&isCurrentAnimation&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node1&&(prevAnimationNameRef.current=$921a889cee6df7e8$var$getAnimationName(stylesRef.current))};return node1.addEventListener("animationstart",handleAnimationStart),node1.addEventListener("animationcancel",handleAnimationEnd),node1.addEventListener("animationend",handleAnimationEnd),()=>{node1.removeEventListener("animationstart",handleAnimationStart),node1.removeEventListener("animationcancel",handleAnimationEnd),node1.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node1,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&(stylesRef.current=getComputedStyle(node)),setNode(node)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.e)(presence.ref,child.ref);return"function"==typeof children||presence.isPresent?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{ref}):null};function $921a889cee6df7e8$var$getAnimationName(styles){return(null==styles?void 0:styles.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},"./src/components/hover-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>hover_card_stories});var defineProperty=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs"),react_context_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_47f64565616ce9f4b97e79f45ae38c30/node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_47f64565616ce9f4b97e79f45ae38c30/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_47f64565616ce9f4b97e79f45ae38c30/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_popper_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-popper@1.1.2_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-popper/dist/index.mjs"),react_presence_dist=(__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-portal@1.0.3_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-portal/dist/index.mjs"),__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-presence@1.0.1_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-presence/dist/index.mjs")),react_primitive_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_dismissable_layer_dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.0.4_9421098c6843cd3520a748534372ef9e/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs");let $cef8881cdc69808e$var$originalBodyUserSelect;const[$cef8881cdc69808e$var$createHoverCardContext,$cef8881cdc69808e$export$47b6998a836b7260]=(0,react_context_dist.b)("HoverCard",[react_popper_dist.D7]),$cef8881cdc69808e$var$usePopperScope=(0,react_popper_dist.D7)(),[$cef8881cdc69808e$var$HoverCardProvider,$cef8881cdc69808e$var$useHoverCardContext]=$cef8881cdc69808e$var$createHoverCardContext("HoverCard"),$cef8881cdc69808e$export$57a077cc9fbe653e=props=>{const{__scopeHoverCard,children,open:openProp,defaultOpen,onOpenChange,openDelay=700,closeDelay=300}=props,popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard),openTimerRef=(0,react.useRef)(0),closeTimerRef=(0,react.useRef)(0),hasSelectionRef=(0,react.useRef)(!1),isPointerDownOnContentRef=(0,react.useRef)(!1),[open=!1,setOpen]=(0,react_use_controllable_state_dist.T)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange}),handleOpen=(0,react.useCallback)((()=>{clearTimeout(closeTimerRef.current),openTimerRef.current=window.setTimeout((()=>setOpen(!0)),openDelay)}),[openDelay,setOpen]),handleClose=(0,react.useCallback)((()=>{clearTimeout(openTimerRef.current),hasSelectionRef.current||isPointerDownOnContentRef.current||(closeTimerRef.current=window.setTimeout((()=>setOpen(!1)),closeDelay))}),[closeDelay,setOpen]),handleDismiss=(0,react.useCallback)((()=>setOpen(!1)),[setOpen]);return(0,react.useEffect)((()=>()=>{clearTimeout(openTimerRef.current),clearTimeout(closeTimerRef.current)}),[]),(0,react.createElement)($cef8881cdc69808e$var$HoverCardProvider,{scope:__scopeHoverCard,open,onOpenChange:setOpen,onOpen:handleOpen,onClose:handleClose,onDismiss:handleDismiss,hasSelectionRef,isPointerDownOnContentRef},(0,react.createElement)(react_popper_dist.fC,popperScope,children))},$cef8881cdc69808e$export$ef9f7fd8e4ba882f=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeHoverCard,...triggerProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardTrigger",__scopeHoverCard),popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard);return(0,react.createElement)(react_popper_dist.ee,(0,esm_extends.Z)({asChild:!0},popperScope),(0,react.createElement)(react_primitive_dist.WV.a,(0,esm_extends.Z)({"data-state":context.open?"open":"closed"},triggerProps,{ref:forwardedRef,onPointerEnter:(0,dist.M)(props.onPointerEnter,$cef8881cdc69808e$var$excludeTouch(context.onOpen)),onPointerLeave:(0,dist.M)(props.onPointerLeave,$cef8881cdc69808e$var$excludeTouch(context.onClose)),onFocus:(0,dist.M)(props.onFocus,context.onOpen),onBlur:(0,dist.M)(props.onBlur,context.onClose),onTouchStart:(0,dist.M)(props.onTouchStart,(event=>event.preventDefault()))})))})),[$cef8881cdc69808e$var$PortalProvider,$cef8881cdc69808e$var$usePortalContext]=$cef8881cdc69808e$var$createHoverCardContext("HoverCardPortal",{forceMount:void 0}),$cef8881cdc69808e$export$aa4724a5938c586=(0,react.forwardRef)(((props,forwardedRef)=>{const portalContext=$cef8881cdc69808e$var$usePortalContext("HoverCardContent",props.__scopeHoverCard),{forceMount=portalContext.forceMount,...contentProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardContent",props.__scopeHoverCard);return(0,react.createElement)(react_presence_dist.z,{present:forceMount||context.open},(0,react.createElement)($cef8881cdc69808e$var$HoverCardContentImpl,(0,esm_extends.Z)({"data-state":context.open?"open":"closed"},contentProps,{onPointerEnter:(0,dist.M)(props.onPointerEnter,$cef8881cdc69808e$var$excludeTouch(context.onOpen)),onPointerLeave:(0,dist.M)(props.onPointerLeave,$cef8881cdc69808e$var$excludeTouch(context.onClose)),ref:forwardedRef})))})),$cef8881cdc69808e$var$HoverCardContentImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeHoverCard,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,...contentProps}=props,context=$cef8881cdc69808e$var$useHoverCardContext("HoverCardContent",__scopeHoverCard),popperScope=$cef8881cdc69808e$var$usePopperScope(__scopeHoverCard),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref),[containSelection,setContainSelection]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(containSelection){const body=document.body;return $cef8881cdc69808e$var$originalBodyUserSelect=body.style.userSelect||body.style.webkitUserSelect,body.style.userSelect="none",body.style.webkitUserSelect="none",()=>{body.style.userSelect=$cef8881cdc69808e$var$originalBodyUserSelect,body.style.webkitUserSelect=$cef8881cdc69808e$var$originalBodyUserSelect}}}),[containSelection]),(0,react.useEffect)((()=>{if(ref.current){const handlePointerUp=()=>{setContainSelection(!1),context.isPointerDownOnContentRef.current=!1,setTimeout((()=>{var _document$getSelectio;""!==(null===(_document$getSelectio=document.getSelection())||void 0===_document$getSelectio?void 0:_document$getSelectio.toString())&&(context.hasSelectionRef.current=!0)}))};return document.addEventListener("pointerup",handlePointerUp),()=>{document.removeEventListener("pointerup",handlePointerUp),context.hasSelectionRef.current=!1,context.isPointerDownOnContentRef.current=!1}}}),[context.isPointerDownOnContentRef,context.hasSelectionRef]),(0,react.useEffect)((()=>{if(ref.current){(function $cef8881cdc69808e$var$getTabbableNodes(container){const nodes=[],walker=document.createTreeWalker(container,NodeFilter.SHOW_ELEMENT,{acceptNode:node=>node.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;walker.nextNode();)nodes.push(walker.currentNode);return nodes})(ref.current).forEach((tabbable=>tabbable.setAttribute("tabindex","-1")))}})),(0,react.createElement)(react_dismissable_layer_dist.XB,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside,onEscapeKeyDown,onPointerDownOutside,onFocusOutside:(0,dist.M)(onFocusOutside,(event=>{event.preventDefault()})),onDismiss:context.onDismiss},(0,react.createElement)(react_popper_dist.VY,(0,esm_extends.Z)({},popperScope,contentProps,{onPointerDown:(0,dist.M)(contentProps.onPointerDown,(event=>{event.currentTarget.contains(event.target)&&setContainSelection(!0),context.hasSelectionRef.current=!1,context.isPointerDownOnContentRef.current=!0})),ref:composedRefs,style:{...contentProps.style,userSelect:containSelection?"text":void 0,WebkitUserSelect:containSelection?"text":void 0,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-hover-card-content-available-width":"var(--radix-popper-available-width)","--radix-hover-card-content-available-height":"var(--radix-popper-available-height)","--radix-hover-card-trigger-width":"var(--radix-popper-anchor-width)","--radix-hover-card-trigger-height":"var(--radix-popper-anchor-height)"}})))}));function $cef8881cdc69808e$var$excludeTouch(eventHandler){return event=>"touch"===event.pointerType?void 0:eventHandler()}const $cef8881cdc69808e$export$be92b6f5f03c0fe9=$cef8881cdc69808e$export$57a077cc9fbe653e,$cef8881cdc69808e$export$41fb9f06171c75f4=$cef8881cdc69808e$export$ef9f7fd8e4ba882f,$cef8881cdc69808e$export$7c6e2c02157bb7d2=$cef8881cdc69808e$export$aa4724a5938c586;var _Default$parameters,_Default$parameters2,utils=__webpack_require__("../lib/src/utils/utils.ts"),_excluded=["className","align","sideOffset"],__jsx=react.createElement,HoverCard=$cef8881cdc69808e$export$be92b6f5f03c0fe9,HoverCardTrigger=$cef8881cdc69808e$export$41fb9f06171c75f4,HoverCardContent=react.forwardRef((function(_ref,ref){var className=_ref.className,_ref$align=_ref.align,align=void 0===_ref$align?"center":_ref$align,_ref$sideOffset=_ref.sideOffset,sideOffset=void 0===_ref$sideOffset?4:_ref$sideOffset,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx($cef8881cdc69808e$export$7c6e2c02157bb7d2,(0,esm_extends.Z)({ref,align,sideOffset,className:(0,utils.cn)("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in zoom-in-90",className)},props))}));HoverCardContent.displayName=$cef8881cdc69808e$export$7c6e2c02157bb7d2.displayName,HoverCardContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};try{HoverCard.displayName="HoverCard",HoverCard.__docgenInfo={description:"",displayName:"HoverCard",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/hover-card/hover-card.tsx#HoverCard"]={docgenInfo:HoverCard.__docgenInfo,name:"HoverCard",path:"../components/src/hover-card/hover-card.tsx#HoverCard"})}catch(__react_docgen_typescript_loader_error){}try{HoverCardTrigger.displayName="HoverCardTrigger",HoverCardTrigger.__docgenInfo={description:"",displayName:"HoverCardTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/hover-card/hover-card.tsx#HoverCardTrigger"]={docgenInfo:HoverCardTrigger.__docgenInfo,name:"HoverCardTrigger",path:"../components/src/hover-card/hover-card.tsx#HoverCardTrigger"})}catch(__react_docgen_typescript_loader_error){}try{HoverCardContent.displayName="HoverCardContent",HoverCardContent.__docgenInfo={description:"",displayName:"HoverCardContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/hover-card/hover-card.tsx#HoverCardContent"]={docgenInfo:HoverCardContent.__docgenInfo,name:"HoverCardContent",path:"../components/src/hover-card/hover-card.tsx#HoverCardContent"})}catch(__react_docgen_typescript_loader_error){}var hover_card_stories_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const hover_card_stories={parameters:{storySource:{source:'import type { Meta, StoryObj } from "@storybook/react";\nimport { HoverCard, HoverCardContent, HoverCardTrigger } from "@components/hover-card/hover-card";\nimport React from "react";\nconst meta: Meta<typeof HoverCard> = {\n  title: "Component/HoverCard",\n  component: HoverCard\n};\nexport default meta;\ntype Story = StoryObj<typeof HoverCard>;\nexport const Default: Story = {\n  args: {},\n  render: args => <HoverCard {...args}>\n      <HoverCardTrigger>Hover</HoverCardTrigger>\n      <HoverCardContent>Someting cool.</HoverCardContent>\n    </HoverCard>\n};\nDefault.parameters = {\n  ...Default.parameters,\n  docs: {\n    ...Default.parameters?.docs,\n    source: {\n      originalSource: "{\\n  args: {},\\n  render: args => <HoverCard {...args}>\\n      <HoverCardTrigger>Hover</HoverCardTrigger>\\n      <HoverCardContent>Someting cool.</HoverCardContent>\\n    </HoverCard>\\n}",\n      ...Default.parameters?.docs?.source\n    }\n  }\n};',locationsMap:{default:{startLoc:{col:30,line:10},endLoc:{col:1,line:16},startBody:{col:30,line:10},endBody:{col:1,line:16}}}}},title:"Component/HoverCard",component:HoverCard};var Default={args:{},render:function render(args){return hover_card_stories_jsx(HoverCard,args,hover_card_stories_jsx(HoverCardTrigger,null,"Hover"),hover_card_stories_jsx(HoverCardContent,null,"Someting cool."))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {},\n  render: args => <HoverCard {...args}>\n      <HoverCardTrigger>Hover</HoverCardTrigger>\n      <HoverCardContent>Someting cool.</HoverCardContent>\n    </HoverCard>\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"../lib/src/utils/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@1.13.2/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs))}}}]);