"use strict";(self.webpackChunkkiso_storybook=self.webpackChunkkiso_storybook||[]).push([[8921],{"../../node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/graphql.js":module=>{function graphql(Prism){Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Prism.hooks.add("after-tokenize",(function afterTokenizeGraphql(env){if("graphql"===env.language)for(var validTokens=env.tokens.filter((function(token){return"string"!=typeof token&&"comment"!==token.type&&"scalar"!==token.type})),currentIndex=0;currentIndex<validTokens.length;){var startToken=validTokens[currentIndex++];if("keyword"===startToken.type&&"mutation"===startToken.content){var inputVariables=[];if(isTokenType(["definition-mutation","punctuation"])&&"("===getToken(1).content){currentIndex+=2;var definitionEnd=findClosingBracket(/^\($/,/^\)$/);if(-1===definitionEnd)continue;for(;currentIndex<definitionEnd;currentIndex++){var t=getToken(0);"variable"===t.type&&(addAlias(t,"variable-input"),inputVariables.push(t.content))}currentIndex=definitionEnd+1}if(isTokenType(["punctuation","property-query"])&&"{"===getToken(0).content&&(currentIndex++,addAlias(getToken(0),"property-mutation"),inputVariables.length>0)){var mutationEnd=findClosingBracket(/^\{$/,/^\}$/);if(-1===mutationEnd)continue;for(var i=currentIndex;i<mutationEnd;i++){var varToken=validTokens[i];"variable"===varToken.type&&inputVariables.indexOf(varToken.content)>=0&&addAlias(varToken,"variable-input")}}}}function getToken(offset){return validTokens[currentIndex+offset]}function isTokenType(types,offset){offset=offset||0;for(var i=0;i<types.length;i++){var token=getToken(i+offset);if(!token||token.type!==types[i])return!1}return!0}function findClosingBracket(open,close){for(var stackHeight=1,i=currentIndex;i<validTokens.length;i++){var token=validTokens[i],content=token.content;if("punctuation"===token.type&&"string"==typeof content)if(open.test(content))stackHeight++;else if(close.test(content)&&0===--stackHeight)return i}return-1}function addAlias(token,alias){var aliases=token.alias;aliases?Array.isArray(aliases)||(token.alias=aliases=[aliases]):token.alias=aliases=[],aliases.push(alias)}}))}module.exports=graphql,graphql.displayName="graphql",graphql.aliases=[]}}]);