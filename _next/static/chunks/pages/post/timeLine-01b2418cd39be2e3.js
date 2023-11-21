(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{59057:function(e,t,i){"use strict";var l=i(64836).default,n=i(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(67294)),r=l(i(94184));i(13594);var o=i(31929),d=l(i(98167)),c=l(i(68658)),s=l(i(26878)),m=l(i(45541)),__rest=function(e,t){var i={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(i[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(i[l[n]]=e[l[n]]);return i};let Timeline=e=>{let{getPrefixCls:t,direction:i,timeline:l}=a.useContext(o.ConfigContext),{prefixCls:n,children:c,items:u,className:p,style:h}=e,f=__rest(e,["prefixCls","children","items","className","style"]),g=t("timeline",n),[b,v]=(0,d.default)(g),y=(0,m.default)(u,c);return b(a.createElement(s.default,Object.assign({},f,{className:(0,r.default)(null==l?void 0:l.className,p),style:Object.assign(Object.assign({},null==l?void 0:l.style),h),prefixCls:g,direction:i,items:y,hashId:v})))};Timeline.Item=c.default,t.default=Timeline},68658:function(e,t,i){"use strict";var l=i(75263).default,n=i(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(94184)),r=l(i(67294)),o=i(31929),__rest=function(e,t){var i={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(i[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(i[l[n]]=e[l[n]]);return i};t.default=e=>{var{prefixCls:t,className:i,color:l="blue",dot:n,pending:d=!1,position:c,label:s,children:m}=e,u=__rest(e,["prefixCls","className","color","dot","pending","position","label","children"]);let{getPrefixCls:p}=r.useContext(o.ConfigContext),h=p("timeline",t),f=(0,a.default)(`${h}-item`,{[`${h}-item-pending`]:d},i),g=/blue|red|green|gray/.test(l||"")?void 0:l,b=(0,a.default)(`${h}-item-head`,{[`${h}-item-head-custom`]:!!n,[`${h}-item-head-${l}`]:!g});return r.createElement("li",Object.assign({},u,{className:f}),s&&r.createElement("div",{className:`${h}-item-label`},s),r.createElement("div",{className:`${h}-item-tail`}),r.createElement("div",{className:b,style:{borderColor:g,color:g}},n),r.createElement("div",{className:`${h}-item-content`},m))}},26878:function(e,t,i){"use strict";var l=i(75263).default,n=i(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(861)),r=n(i(94184)),o=l(i(67294)),d=n(i(628)),c=n(i(68658)),__rest=function(e,t){var i={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(i[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>t.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(i[l[n]]=e[l[n]]);return i};t.default=e=>{var{prefixCls:t,className:i,pending:l=!1,children:n,items:s,rootClassName:m,reverse:u=!1,direction:p,hashId:h,pendingDot:f,mode:g=""}=e,b=__rest(e,["prefixCls","className","pending","children","items","rootClassName","reverse","direction","hashId","pendingDot","mode"]);let getPositionCls=(e,i)=>"alternate"===g?"right"===e?`${t}-item-right`:"left"===e?`${t}-item-left`:i%2==0?`${t}-item-left`:`${t}-item-right`:"left"===g?`${t}-item-left`:"right"===g||"right"===e?`${t}-item-right`:"",v=(0,a.default)(s||[]),y="boolean"==typeof l?null:l;l&&v.push({pending:!!l,dot:f||o.createElement(d.default,null),children:y}),u&&v.reverse();let _=v.length,$=`${t}-item-last`,x=v.filter(e=>!!e).map((e,t)=>{var i;let n=t===_-2?$:"",a=t===_-1?$:"",{className:d}=e,s=__rest(e,["className"]);return o.createElement(c.default,Object.assign({},s,{className:(0,r.default)([d,!u&&l?n:a,getPositionCls(null!==(i=null==e?void 0:e.position)&&void 0!==i?i:"",t)]),key:(null==e?void 0:e.key)||t}))}),S=v.some(e=>!!(null==e?void 0:e.label)),j=(0,r.default)(t,{[`${t}-pending`]:!!l,[`${t}-reverse`]:!!u,[`${t}-${g}`]:!!g&&!S,[`${t}-label`]:S,[`${t}-rtl`]:"rtl"===p},i,m,h);return o.createElement("ul",Object.assign({},b,{className:j}),x)}},37656:function(e,t,i){"use strict";var l=i(64836).default;t.Z=void 0;var n=l(i(59057));t.Z=n.default},98167:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(98078),n=i(3184);let genTimelineStyle=e=>{let{componentCls:t}=e;return{[t]:Object.assign(Object.assign({},(0,l.resetComponent)(e)),{margin:0,padding:0,listStyle:"none",[`${t}-item`]:{position:"relative",margin:0,paddingBottom:e.itemPaddingBottom,fontSize:e.fontSize,listStyle:"none","&-tail":{position:"absolute",insetBlockStart:e.itemHeadSize,insetInlineStart:(e.itemHeadSize-e.tailWidth)/2,height:`calc(100% - ${e.itemHeadSize}px)`,borderInlineStart:`${e.tailWidth}px ${e.lineType} ${e.tailColor}`},"&-pending":{[`${t}-item-head`]:{fontSize:e.fontSizeSM,backgroundColor:"transparent"},[`${t}-item-tail`]:{display:"none"}},"&-head":{position:"absolute",width:e.itemHeadSize,height:e.itemHeadSize,backgroundColor:e.dotBg,border:`${e.dotBorderWidth}px ${e.lineType} transparent`,borderRadius:"50%","&-blue":{color:e.colorPrimary,borderColor:e.colorPrimary},"&-red":{color:e.colorError,borderColor:e.colorError},"&-green":{color:e.colorSuccess,borderColor:e.colorSuccess},"&-gray":{color:e.colorTextDisabled,borderColor:e.colorTextDisabled}},"&-head-custom":{position:"absolute",insetBlockStart:e.itemHeadSize/2,insetInlineStart:e.itemHeadSize/2,width:"auto",height:"auto",marginBlockStart:0,paddingBlock:e.customHeadPaddingVertical,lineHeight:1,textAlign:"center",border:0,borderRadius:0,transform:"translate(-50%, -50%)"},"&-content":{position:"relative",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.lineWidth,marginInlineStart:e.margin+e.itemHeadSize,marginInlineEnd:0,marginBlockStart:0,marginBlockEnd:0,wordBreak:"break-word"},"&-last":{[`> ${t}-item-tail`]:{display:"none"},[`> ${t}-item-content`]:{minHeight:1.2*e.controlHeightLG}}},[`&${t}-alternate,
        &${t}-right,
        &${t}-label`]:{[`${t}-item`]:{"&-tail, &-head, &-head-custom":{insetInlineStart:"50%"},"&-head":{marginInlineStart:`-${e.marginXXS}px`,"&-custom":{marginInlineStart:e.tailWidth/2}},"&-left":{[`${t}-item-content`]:{insetInlineStart:`calc(50% - ${e.marginXXS}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}},"&-right":{[`${t}-item-content`]:{width:`calc(50% - ${e.marginSM}px)`,margin:0,textAlign:"end"}}}},[`&${t}-right`]:{[`${t}-item-right`]:{[`${t}-item-tail,
            ${t}-item-head,
            ${t}-item-head-custom`]:{insetInlineStart:`calc(100% - ${(e.itemHeadSize+e.tailWidth)/2}px)`},[`${t}-item-content`]:{width:`calc(100% - ${e.itemHeadSize+e.marginXS}px)`}}},[`&${t}-pending
        ${t}-item-last
        ${t}-item-tail`]:{display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.tailWidth}px dotted ${e.tailColor}`},[`&${t}-reverse
        ${t}-item-last
        ${t}-item-tail`]:{display:"none"},[`&${t}-reverse ${t}-item-pending`]:{[`${t}-item-tail`]:{insetBlockStart:e.margin,display:"block",height:`calc(100% - ${e.margin}px)`,borderInlineStart:`${e.tailWidth}px dotted ${e.tailColor}`},[`${t}-item-content`]:{minHeight:1.2*e.controlHeightLG}},[`&${t}-label`]:{[`${t}-item-label`]:{position:"absolute",insetBlockStart:-(e.fontSize*e.lineHeight-e.fontSize)+e.tailWidth,width:`calc(50% - ${e.marginSM}px)`,textAlign:"end"},[`${t}-item-right`]:{[`${t}-item-label`]:{insetInlineStart:`calc(50% + ${e.marginSM}px)`,width:`calc(50% - ${e.marginSM}px)`,textAlign:"start"}}},"&-rtl":{direction:"rtl",[`${t}-item-head-custom`]:{transform:"translate(50%, -50%)"}}})}};t.default=(0,n.genComponentStyleHook)("Timeline",e=>{let t=(0,n.mergeToken)(e,{itemHeadSize:10,customHeadPaddingVertical:e.paddingXXS,paddingInlineEnd:2});return[genTimelineStyle(t)]},e=>({tailColor:e.colorSplit,tailWidth:e.lineWidthBold,dotBorderWidth:e.wireframe?e.lineWidthBold:3*e.lineWidth,dotBg:e.colorBgContainer,itemPaddingBottom:1.25*e.padding}))},45541:function(e,t,i){"use strict";var l=i(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(i(45598));t.default=function(e,t){return e&&Array.isArray(e)?e:(0,n.default)(t).map(e=>{var t,i;return Object.assign({children:null!==(i=null===(t=null==e?void 0:e.props)||void 0===t?void 0:t.children)&&void 0!==i?i:""},e.props)})}},20947:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/timeLine",function(){return i(16400)}])},16400:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return u},default:function(){return Comment}});var l=i(85893),n=i(66571),a=i.n(n),r=i(37656),o=i(94055),d=i(9008),c=i.n(d),s=i(41664),m=i.n(s);i(67294);var u=!0;function Comment(e){let{allData:t=[]}=e,i={},n=["#092818","#0e4429","#068c44","#26a641","#30ff53"];t.forEach(e=>{e.children.forEach(t=>{t.children.forEach(l=>{var n,a,r,o;let d=null===(o=l.data)||void 0===o?void 0:null===(r=o.date)||void 0===r?void 0:null===(a=r.match(/\d+[\/-]\d+/))||void 0===a?void 0:null===(n=a[0])||void 0===n?void 0:n.replace(/\//,"-");i[d]||(i[d]=[]),i[d].unshift({...l.data,month:d,path:"/post/".concat(e.label,"/").concat(t.label,"/").concat(l.label),label:l.label,parentLabel:t.label,key:l.key})})})});let d={},s=0,u=0;for(let e in Object.keys(i).map(e=>{let t=i[e].length,[l,n]=e.split("-").map(e=>Number(e));d[l]||(d[l]=[]);let a=d[l].findIndex(e=>e.month===n);a>-1?(d[l][a].count+=t,t=d[l][a].count):d[l].push({count:t,year:l,month:n}),t>s&&(s=t),(t<u&&0!==t||0===u)&&(u=t)}),d)d[e]=d[e].sort((e,t)=>e.month>t.month?1:-1);let p=new Date().getFullYear(),h=new Date().getMonth()+1;for(let e=2014;e<=p;e++)for(let t=1;t<=12;t++)if(e<p||e===p&&t<=h){d[e]||(d[e]=[]);let i=d[e].findIndex(e=>e.month===t);if(-1===i)d[e].splice(t-1,0,{count:0,year:e,month:t,color:"#161b22",title:"".concat(e,"年 ").concat(t,"月 偷懒了")});else{let l=d[e][i],a=Math.ceil(s/n.length),r=Math.floor(l.count/a);d[e][i].color=n[r],d[e][i].title="".concat(e,"年 ").concat(t,"月 ")+(r>=a-1?"\uD83E\uDD29这月写了".concat(l.count,"篇笔记"):"写了".concat(l.count,"篇笔记"))}}let f=Object.values(d).sort((e,t)=>new Date(e[0].year)>new Date(t[0].year)?1:-1),g=Object.values(i).sort((e,t)=>new Date(e[0].date)>new Date(t[0].date)?-1:1);return(0,l.jsxs)("main",{className:"container",children:[(0,l.jsxs)(c(),{children:[(0,l.jsx)("title",{children:"时光机-多年的前端技术文章-千寻前端"}),(0,l.jsx)("meta",{name:"keywords",content:"时光机,千寻前端,技术文章"}),(0,l.jsx)("meta",{name:"description",content:"我的时光机：展示了多年以来记录的所有前端技术文章。"})]}),(0,l.jsxs)("div",{className:a().timeLine,children:[(0,l.jsxs)("div",{className:a().rectWrap,children:[(0,l.jsx)("div",{className:a().yearGroup,children:f.map(e=>(0,l.jsxs)("div",{className:a().column,children:[(0,l.jsx)("div",{className:a().year,children:e[0].year}),e.map(e=>(0,l.jsx)(o.default,{placement:"top",title:e.title,overlayClassName:a().overrideTooltip,mouseEnterDelay:0,children:(0,l.jsx)("div",{className:a().rect,children:(0,l.jsx)("div",{className:a().bg,style:{backgroundColor:e.color}})})},e.month))]},e[0].year))}),(0,l.jsxs)("div",{className:a().demo,children:[(0,l.jsx)("div",{className:a().Less,children:"less"}),n.map(e=>(0,l.jsx)("div",{className:a().item,style:{backgroundColor:e}},e)),(0,l.jsx)("div",{className:a().more,children:"More"})]})]}),(0,l.jsx)(r.Z,{mode:"left",children:g.map(e=>e.map((e,t)=>{var i;return(0,l.jsx)(r.Z.Item,{label:(0,l.jsx)("div",{children:0===t?(0,l.jsxs)("div",{children:[(0,l.jsx)("b",{children:e.month})," ",(0,l.jsx)("small",{style:{color:"#aaa",marginLeft:20},children:e.parentLabel.replace(/_/g," ")})]}):(0,l.jsx)("div",{children:(0,l.jsx)("small",{style:{color:"#aaa"},children:e.parentLabel.replace(/_/g," ")})})}),children:(0,l.jsx)(m(),{href:e.path,children:null===(i=e.label)||void 0===i?void 0:i.replace(/_/g," ")})},e.key)}))})]})]})}},66571:function(e){e.exports={timeLine:"TimeLine_timeLine__yo_7E",Breadcrumb:"TimeLine_Breadcrumb__IkXGE",rectWrap:"TimeLine_rectWrap__7QBu_",yearGroup:"TimeLine_yearGroup__plPY7",column:"TimeLine_column__dpttl",year:"TimeLine_year__Klgm7",rect:"TimeLine_rect__aOlqQ",bg:"TimeLine_bg__9DHQQ",demo:"TimeLine_demo__v9qsf",item:"TimeLine_item__A7UJD",overrideTooltip:"TimeLine_overrideTooltip__Be275",container:"TimeLine_container__SX7bG"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=20947)}),_N_E=e.O()}]);