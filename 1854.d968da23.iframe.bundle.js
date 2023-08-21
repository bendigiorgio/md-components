"use strict";(self.webpackChunkkiso_storybook=self.webpackChunkkiso_storybook||[]).push([[1854],{"../../node_modules/.pnpm/@radix-ui+react-context-menu@2.1.4_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-context-menu/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ee:()=>$1b0217ee4a91d156$export$a98f0dcb43a68a25,Rk:()=>$1b0217ee4a91d156$export$371ab307eab489c0,Tr:()=>$1b0217ee4a91d156$export$d7a01e11500dfb6f,Uv:()=>$1b0217ee4a91d156$export$602eac185826482c,VY:()=>$1b0217ee4a91d156$export$7c6e2c02157bb7d2,Z0:()=>$1b0217ee4a91d156$export$1ff3c3f08ae963c0,ZA:()=>$1b0217ee4a91d156$export$eb2fcfdbd7ba97d4,__:()=>$1b0217ee4a91d156$export$b04be29aa201d4f5,ck:()=>$1b0217ee4a91d156$export$6d08773d2e66f8f2,fC:()=>$1b0217ee4a91d156$export$be92b6f5f03c0fe9,fF:()=>$1b0217ee4a91d156$export$2ea8a7a591ac5eac,oC:()=>$1b0217ee4a91d156$export$16ce288f89fa631c,tu:()=>$1b0217ee4a91d156$export$6d4de93b380beddf,wU:()=>$1b0217ee4a91d156$export$c3468e2714d175fa,xz:()=>$1b0217ee4a91d156$export$41fb9f06171c75f4});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.5/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-menu@2.0.5_@types+react-dom@18.2.5_@types+react@18.2.12_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-menu/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.12_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");const[$1b0217ee4a91d156$var$createContextMenuContext,$1b0217ee4a91d156$export$1059331f43ddcc82]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.b)("ContextMenu",[_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Wf]),$1b0217ee4a91d156$var$useMenuScope=(0,_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Wf)(),[$1b0217ee4a91d156$var$ContextMenuProvider,$1b0217ee4a91d156$var$useContextMenuContext]=$1b0217ee4a91d156$var$createContextMenuContext("ContextMenu"),$1b0217ee4a91d156$export$8dc6765e8be191c7=props=>{const{__scopeContextMenu,children,onOpenChange,dir,modal=!0}=props,[open1,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu),handleOpenChangeProp=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_3__.W)(onOpenChange),handleOpenChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((open=>{setOpen(open),handleOpenChangeProp(open)}),[handleOpenChangeProp]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($1b0217ee4a91d156$var$ContextMenuProvider,{scope:__scopeContextMenu,open:open1,onOpenChange:handleOpenChange,modal},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.fC,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,{dir,open:open1,onOpenChange:handleOpenChange,modal}),children))},$1b0217ee4a91d156$export$be6fc7b1d5b0beb9=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,disabled=!1,...triggerProps}=props,context=$1b0217ee4a91d156$var$useContextMenuContext("ContextMenuTrigger",__scopeContextMenu),menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu),pointRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({x:0,y:0}),virtualRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({getBoundingClientRect:()=>DOMRect.fromRect({width:0,height:0,...pointRef.current})}),longPressTimerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),clearLongPress=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>window.clearTimeout(longPressTimerRef.current)),[]),handleOpen=event=>{pointRef.current={x:event.clientX,y:event.clientY},context.onOpenChange(!0)};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>clearLongPress),[clearLongPress]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{disabled&&clearLongPress()}),[disabled,clearLongPress]),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.ee,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,{virtualRef})),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_5__.WV.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({"data-state":context.open?"open":"closed","data-disabled":disabled?"":void 0},triggerProps,{ref:forwardedRef,style:{WebkitTouchCallout:"none",...props.style},onContextMenu:disabled?props.onContextMenu:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onContextMenu,(event=>{clearLongPress(),handleOpen(event),event.preventDefault()})),onPointerDown:disabled?props.onPointerDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onPointerDown,$1b0217ee4a91d156$var$whenTouchOrPen((event=>{clearLongPress(),longPressTimerRef.current=window.setTimeout((()=>handleOpen(event)),700)}))),onPointerMove:disabled?props.onPointerMove:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onPointerMove,$1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)),onPointerCancel:disabled?props.onPointerCancel:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onPointerCancel,$1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress)),onPointerUp:disabled?props.onPointerUp:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__.M)(props.onPointerUp,$1b0217ee4a91d156$var$whenTouchOrPen(clearLongPress))})))})),$1b0217ee4a91d156$export$14afd0be83e45060=props=>{const{__scopeContextMenu,...portalProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.h_,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,portalProps))},$1b0217ee4a91d156$export$572205900c9369e=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...contentProps}=props,context=$1b0217ee4a91d156$var$useContextMenuContext("ContextMenuContent",__scopeContextMenu),menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu),hasInteractedOutsideRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.VY,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,contentProps,{ref:forwardedRef,side:"right",sideOffset:2,align:"start",onCloseAutoFocus:event=>{var _props$onCloseAutoFoc;null===(_props$onCloseAutoFoc=props.onCloseAutoFocus)||void 0===_props$onCloseAutoFoc||_props$onCloseAutoFoc.call(props,event),!event.defaultPrevented&&hasInteractedOutsideRef.current&&event.preventDefault(),hasInteractedOutsideRef.current=!1},onInteractOutside:event=>{var _props$onInteractOuts;null===(_props$onInteractOuts=props.onInteractOutside)||void 0===_props$onInteractOuts||_props$onInteractOuts.call(props,event),event.defaultPrevented||context.modal||(hasInteractedOutsideRef.current=!0)},style:{...props.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))})),$1b0217ee4a91d156$export$9860523b0fcdd664=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...groupProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.ZA,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,groupProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$d4b9d3b609a10742=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...labelProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.__,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,labelProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$16a26dc176a49100=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...itemProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.ck,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,itemProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$b6adbe51d5d8b7ec=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...checkboxItemProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.oC,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,checkboxItemProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$db5c89af5ed9aa07=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...radioGroupProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Ee,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,radioGroupProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$8a727d09a7d9bfc2=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...radioItemProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Rk,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,radioItemProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$9ed8194dee42d94b=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...itemIndicatorProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.wU,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,itemIndicatorProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$8d6b009fadfe1207=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...separatorProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Z0,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,separatorProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$5bc21d1c00c4b201=props=>{const{__scopeContextMenu,children,onOpenChange,open:openProp,defaultOpen}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu),[open,setOpen]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_7__.T)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.Tr,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,{open,onOpenChange:setOpen}),children)},$1b0217ee4a91d156$export$30b2b5c64556d316=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...triggerItemProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.fF,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,triggerItemProps,{ref:forwardedRef}))})),$1b0217ee4a91d156$export$2c967063bd2dc512=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{__scopeContextMenu,...subContentProps}=props,menuScope=$1b0217ee4a91d156$var$useMenuScope(__scopeContextMenu);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_menu__WEBPACK_IMPORTED_MODULE_2__.tu,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({},menuScope,subContentProps,{ref:forwardedRef,style:{...props.style,"--radix-context-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-context-menu-content-available-width":"var(--radix-popper-available-width)","--radix-context-menu-content-available-height":"var(--radix-popper-available-height)","--radix-context-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-context-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}));function $1b0217ee4a91d156$var$whenTouchOrPen(handler){return event=>"mouse"!==event.pointerType?handler(event):void 0}const $1b0217ee4a91d156$export$be92b6f5f03c0fe9=$1b0217ee4a91d156$export$8dc6765e8be191c7,$1b0217ee4a91d156$export$41fb9f06171c75f4=$1b0217ee4a91d156$export$be6fc7b1d5b0beb9,$1b0217ee4a91d156$export$602eac185826482c=$1b0217ee4a91d156$export$14afd0be83e45060,$1b0217ee4a91d156$export$7c6e2c02157bb7d2=$1b0217ee4a91d156$export$572205900c9369e,$1b0217ee4a91d156$export$eb2fcfdbd7ba97d4=$1b0217ee4a91d156$export$9860523b0fcdd664,$1b0217ee4a91d156$export$b04be29aa201d4f5=$1b0217ee4a91d156$export$d4b9d3b609a10742,$1b0217ee4a91d156$export$6d08773d2e66f8f2=$1b0217ee4a91d156$export$16a26dc176a49100,$1b0217ee4a91d156$export$16ce288f89fa631c=$1b0217ee4a91d156$export$b6adbe51d5d8b7ec,$1b0217ee4a91d156$export$a98f0dcb43a68a25=$1b0217ee4a91d156$export$db5c89af5ed9aa07,$1b0217ee4a91d156$export$371ab307eab489c0=$1b0217ee4a91d156$export$8a727d09a7d9bfc2,$1b0217ee4a91d156$export$c3468e2714d175fa=$1b0217ee4a91d156$export$9ed8194dee42d94b,$1b0217ee4a91d156$export$1ff3c3f08ae963c0=$1b0217ee4a91d156$export$8d6b009fadfe1207,$1b0217ee4a91d156$export$d7a01e11500dfb6f=$1b0217ee4a91d156$export$5bc21d1c00c4b201,$1b0217ee4a91d156$export$2ea8a7a591ac5eac=$1b0217ee4a91d156$export$30b2b5c64556d316,$1b0217ee4a91d156$export$6d4de93b380beddf=$1b0217ee4a91d156$export$2c967063bd2dc512}}]);