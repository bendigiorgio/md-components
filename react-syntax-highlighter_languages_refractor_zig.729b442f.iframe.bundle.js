"use strict";(self.webpackChunkkiso_storybook=self.webpackChunkkiso_storybook||[]).push([[4659],{"../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/zig.js":module=>{function zig(Prism){!function(Prism){function literal(str){return function(){return str}}var keyword=/\b(?:align|allowzero|and|anyframe|anytype|asm|async|await|break|cancel|catch|comptime|const|continue|defer|else|enum|errdefer|error|export|extern|fn|for|if|inline|linksection|nakedcc|noalias|nosuspend|null|or|orelse|packed|promise|pub|resume|return|stdcallcc|struct|suspend|switch|test|threadlocal|try|undefined|union|unreachable|usingnamespace|var|volatile|while)\b/,IDENTIFIER="\\b(?!"+keyword.source+")(?!\\d)\\w+\\b",ALIGN=/align\s*\((?:[^()]|\([^()]*\))*\)/.source,TYPE="(?!\\s)(?:!?\\s*(?:"+/(?:\?|\bpromise->|(?:\[[^[\]]*\]|\*(?!\*)|\*\*)(?:\s*<ALIGN>|\s*const\b|\s*volatile\b|\s*allowzero\b)*)/.source.replace(/<ALIGN>/g,literal(ALIGN))+"\\s*)*"+/(?:\bpromise\b|(?:\berror\.)?<ID>(?:\.<ID>)*(?!\s+<ID>))/.source.replace(/<ID>/g,literal(IDENTIFIER))+")+";Prism.languages.zig={comment:[{pattern:/\/\/[/!].*/,alias:"doc-comment"},/\/{2}.*/],string:[{pattern:/(^|[^\\@])c?"(?:[^"\\\r\n]|\\.)*"/,lookbehind:!0,greedy:!0},{pattern:/([\r\n])([ \t]+c?\\{2}).*(?:(?:\r\n?|\n)\2.*)*/,lookbehind:!0,greedy:!0}],char:{pattern:/(^|[^\\])'(?:[^'\\\r\n]|[\uD800-\uDFFF]{2}|\\(?:.|x[a-fA-F\d]{2}|u\{[a-fA-F\d]{1,6}\}))'/,lookbehind:!0,greedy:!0},builtin:/\B@(?!\d)\w+(?=\s*\()/,label:{pattern:/(\b(?:break|continue)\s*:\s*)\w+\b|\b(?!\d)\w+\b(?=\s*:\s*(?:\{|while\b))/,lookbehind:!0},"class-name":[/\b(?!\d)\w+(?=\s*=\s*(?:(?:extern|packed)\s+)?(?:enum|struct|union)\s*[({])/,{pattern:RegExp(/(:\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?[=;,)])|<TYPE>(?=\s*(?:<ALIGN>\s*)?\{)/.source.replace(/<TYPE>/g,literal(TYPE)).replace(/<ALIGN>/g,literal(ALIGN))),lookbehind:!0,inside:null},{pattern:RegExp(/(\)\s*)<TYPE>(?=\s*(?:<ALIGN>\s*)?;)/.source.replace(/<TYPE>/g,literal(TYPE)).replace(/<ALIGN>/g,literal(ALIGN))),lookbehind:!0,inside:null}],"builtin-type":{pattern:/\b(?:anyerror|bool|c_u?(?:int|long|longlong|short)|c_longdouble|c_void|comptime_(?:float|int)|f(?:16|32|64|128)|[iu](?:8|16|32|64|128|size)|noreturn|type|void)\b/,alias:"keyword"},keyword,function:/\b(?!\d)\w+(?=\s*\()/,number:/\b(?:0b[01]+|0o[0-7]+|0x[a-fA-F\d]+(?:\.[a-fA-F\d]*)?(?:[pP][+-]?[a-fA-F\d]+)?|\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\b/,boolean:/\b(?:false|true)\b/,operator:/\.[*?]|\.{2,3}|[-=]>|\*\*|\+\+|\|\||(?:<<|>>|[-+*]%|[-+*/%^&|<>!=])=?|[?~]/,punctuation:/[.:,;(){}[\]]/},Prism.languages.zig["class-name"].forEach((function(obj){null===obj.inside&&(obj.inside=Prism.languages.zig)}))}(Prism)}module.exports=zig,zig.displayName="zig",zig.aliases=[]}}]);