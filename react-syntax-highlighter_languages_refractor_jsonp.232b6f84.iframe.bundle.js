"use strict";(self.webpackChunkkiso_storybook=self.webpackChunkkiso_storybook||[]).push([[7561,3657],{"../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json.js":module=>{function json(Prism){Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json}module.exports=json,json.displayName="json",json.aliases=["webmanifest"]},"../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsonp.js":(module,__unused_webpack_exports,__webpack_require__)=>{var refractorJson=__webpack_require__("../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json.js");function jsonp(Prism){Prism.register(refractorJson),Prism.languages.jsonp=Prism.languages.extend("json",{punctuation:/[{}[\]();,.]/}),Prism.languages.insertBefore("jsonp","punctuation",{function:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/})}module.exports=jsonp,jsonp.displayName="jsonp",jsonp.aliases=[]}}]);