(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{451:function(t,n,s){"use strict";s.r(n);var a=s(70),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"路由跳转实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转实现"}},[t._v("#")]),t._v(" 路由跳转实现")]),t._v(" "),n("p",[t._v("这是路由的核心部分，这里用一个例子来说明，如有以下一个"),n("code",[t._v("router")]),t._v("对象")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hash'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("routers")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/main'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MainComponent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a-component'")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" AComponent\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b-component'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" BComponent\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对应的路由匹配对象大致如下")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pathList: ['/main/a','/main/b','/main]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// pathMap:  {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     '/main/a':{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         path: '/main/a',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         regex: /^\\/main\\/a(?:\\/(?=$))?$/i,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         name:'a-component',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         components:[AComponent],")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     },")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     '/main/b':{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         path: '/main/b',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         regex: /^\\/main\\/b(?:\\/(?=$))?$/i,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         name:'b-component',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         components:[BComponent],")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     },  ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     '/main':{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         path: '/main',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         regex: /^\\/main(?:\\/(?=$))?$/i,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         components:[MainComponent],")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     },")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// nameMap: {")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//           'a-component':{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//               path: '/main/a',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//               regex: /^\\/main\\/a(?:\\/(?=$))?$/i,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//               name:'a-component',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//               components:[AComponent],")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//           },")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//           'b-component':{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//               path: '/main/b',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//               regex: /^\\/main\\/b(?:\\/(?=$))?$/i,")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//               name:'b-component',")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//               components:[BComponent],")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//          },")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);