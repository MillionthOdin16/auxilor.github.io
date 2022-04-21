"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[333],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=f(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,d=s["".concat(a,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=s;var f={};for(var a in t)hasOwnProperty.call(t,a)&&(f[a]=t[a]);f.originalType=e,f.mdxType="string"==typeof e?e:o,l[1]=f;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5417:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return f},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),l=["components"],f={},a="food_multiplier",c={unversionedId:"effects/all-effects/food_multiplier",id:"effects/all-effects/food_multiplier",title:"food_multiplier",description:"Permanent Effect",source:"@site/docs/effects/all-effects/food_multiplier.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/food_multiplier",permalink:"/effects/all-effects/food_multiplier",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/food_multiplier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"feather_step",permalink:"/effects/all-effects/feather_step"},next:{title:"give_permission",permalink:"/effects/all-effects/give_permission"}},u={},p=[{value:"Permanent Effect",id:"permanent-effect",level:4}],s={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"food_multiplier"},(0,i.kt)("inlineCode",{parentName:"h1"},"food_multiplier")),(0,i.kt)("h4",{id:"permanent-effect"},"Permanent Effect"),(0,i.kt)("p",null,"Multiplies food gain from eating"),(0,i.kt)("h1",{id:"example-config"},"Example Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: food_multiplier\n  args:\n    multiplier: 2 # The multiplier for food gained by eating\n")))}m.isMDXComponent=!0}}]);