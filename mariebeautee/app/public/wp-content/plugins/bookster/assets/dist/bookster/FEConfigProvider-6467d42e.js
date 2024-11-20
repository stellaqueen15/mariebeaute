import{r as e,c as r,R as t,k as n,l as o,a,m as s,n as l,o as i,_ as c,d as u,x as p,f as m}from"./prefetch.helper-4a4e89e7.js";import{_ as f}from"./createBookTimeInput.helper-a66a36a8.js";var d={error:null},h=function(r){function t(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))||this).state=d,e.resetErrorBoundary=function(){for(var r,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];null==e.props.onReset||(r=e.props).onReset.apply(r,n),e.reset()},e}f(t,r),t.getDerivedStateFromError=function(e){return{error:e}};var n=t.prototype;return n.reset=function(){this.setState(d)},n.componentDidCatch=function(e,r){var t,n;null==(t=(n=this.props).onError)||t.call(n,e,r)},n.componentDidUpdate=function(e,r){var t,n,o,a,s=this.state.error,l=this.props.resetKeys;null!==s&&null!==r.error&&(void 0===(o=e.resetKeys)&&(o=[]),void 0===(a=l)&&(a=[]),o.length!==a.length||o.some((function(e,r){return!Object.is(e,a[r])})))&&(null==(t=(n=this.props).onResetKeysChange)||t.call(n,e.resetKeys,l),this.reset())},n.render=function(){var r=this.state.error,t=this.props,n=t.fallbackRender,o=t.FallbackComponent,a=t.fallback;if(null!==r){var s={error:r,resetErrorBoundary:this.resetErrorBoundary};if(e.isValidElement(a))return a;if("function"==typeof n)return n(s);if(o)return e.createElement(o,s);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(e.Component);function E({children:e}){const{reset:u}=r.useQueryErrorResetBoundary();return t.createElement(h,{onReset:u,fallbackRender:({error:e,resetErrorBoundary:r})=>{let u="An Error has Occurred!";return e instanceof Error?u=e.message:"string"==typeof e&&(u=e),t.createElement(n,{className:"bw-w-full"},t.createElement(o,{className:"bw-text-error"},t.createElement(a.XCircle,{className:"bw-h-16 bw-w-16"})),t.createElement(s,null,u),t.createElement(l,null,"Please Contact Us for Further Support."),t.createElement(i,null,t.createElement(c.Button,{onClick:()=>r()},"Try again"),t.createElement(c.Button,{variant:"outline",onClick:()=>window.location.reload()},"Refresh Page")))}},e)}const y=document.createElement("div");function v({children:e}){const n=u.booksterHooks.applyFilters(u.HOOK_NAMES.frontEnd.extendingAntdConfig,p);return t.createElement(m.ConfigProvider,{...n},t.createElement(m.StyleProvider,{transformers:[m.px2remTransformer()],hashPriority:"high",container:y},t.createElement(c.ReactTooltip.Provider,{delayDuration:150},t.createElement(r.QueryClientProvider,{client:r.queryClient},e))))}document.body.appendChild(y),r.queryClient.setDefaultOptions({queries:{retry:0,staleTime:9e5,onError:async e=>{c.toast.error(await r.getErrorMsg(e))}},mutations:{}});export{v as F,E as a};
