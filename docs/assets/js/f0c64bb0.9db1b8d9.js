"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3621],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,c(c({ref:t},i),{},{components:r})):n.createElement(d,c({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],l={id:"autoclose",title:"Closing resources automatically",slug:"autoclose.html"},s=void 0,u={unversionedId:"framework/autoclose",id:"framework/autoclose",title:"Closing resources automatically",description:"You can let Kotest close resources automatically after all tests have been run:",source:"@site/docs/framework/autoclose.md",sourceDirName:"framework",slug:"/framework/autoclose.html",permalink:"/docs/next/framework/autoclose.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/autoclose.md",tags:[],version:"current",frontMatter:{id:"autoclose",title:"Closing resources automatically",slug:"autoclose.html"},sidebar:"framework",previous:{title:"Grouping Tests",permalink:"/docs/next/framework/tags.html"},next:{title:"Temporary Files",permalink:"/docs/next/framework/temporary-files"}},i={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can let Kotest close resources automatically after all tests have been run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class StringSpecExample : StringSpec() {\n\n  val reader = autoClose(StringReader("xyz"))\n\n  init {\n    "your test case" {\n      // use resource reader here\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Resources that should be closed this way must implement ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/api/java/lang/AutoCloseable.html"},(0,a.kt)("inlineCode",{parentName:"a"},"java.lang.AutoCloseable")),". Closing is performed in\nreversed order of declaration after the return of the last spec interceptor."))}m.isMDXComponent=!0}}]);