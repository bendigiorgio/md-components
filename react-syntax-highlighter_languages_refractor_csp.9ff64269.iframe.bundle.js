"use strict";(self.webpackChunkkiso_storybook=self.webpackChunkkiso_storybook||[]).push([[5299],{"../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/csp.js":module=>{function csp(Prism){!function(Prism){function value(source){return RegExp(/([ \t])/.source+"(?:"+source+")"+/(?=[\s;]|$)/.source,"i")}Prism.languages.csp={directive:{pattern:/(^|[\s;])(?:base-uri|block-all-mixed-content|(?:child|connect|default|font|frame|img|manifest|media|object|prefetch|script|style|worker)-src|disown-opener|form-action|frame-(?:ancestors|options)|input-protection(?:-(?:clip|selectors))?|navigate-to|plugin-types|policy-uri|referrer|reflected-xss|report-(?:to|uri)|require-sri-for|sandbox|(?:script|style)-src-(?:attr|elem)|upgrade-insecure-requests)(?=[\s;]|$)/i,lookbehind:!0,alias:"property"},scheme:{pattern:value(/[a-z][a-z0-9.+-]*:/.source),lookbehind:!0},none:{pattern:value(/'none'/.source),lookbehind:!0,alias:"keyword"},nonce:{pattern:value(/'nonce-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},hash:{pattern:value(/'sha(?:256|384|512)-[-+/\w=]+'/.source),lookbehind:!0,alias:"number"},host:{pattern:value(/[a-z][a-z0-9.+-]*:\/\/[^\s;,']*/.source+"|"+/\*[^\s;,']*/.source+"|"+/[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::[\d*]+)?(?:\/[^\s;,']*)?/.source),lookbehind:!0,alias:"url",inside:{important:/\*/}},keyword:[{pattern:value(/'unsafe-[a-z-]+'/.source),lookbehind:!0,alias:"unsafe"},{pattern:value(/'[a-z-]+'/.source),lookbehind:!0,alias:"safe"}],punctuation:/;/}}(Prism)}module.exports=csp,csp.displayName="csp",csp.aliases=[]}}]);