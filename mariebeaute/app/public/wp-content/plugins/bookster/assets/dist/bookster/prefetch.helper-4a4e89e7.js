var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var a=booksterModules.utils,o=React;const s=e(o);var r=ReactDOM,n=booksterModules.hooks,i=booksterModules.components,d=booksterModules.icons;const c=i.stylex.div("bw-px-8 bw-py-12"),u=i.stylex.div("bw-mb-6 bw-text-center bw-text-6xl bw-text-primary"),l=i.stylex.h3("bw-mb-2 bw-text-center bw-text-2xl"),y=i.stylex.p("bw-mb-4 bw-text-center bw-text-base bw-text-base-foreground/60"),f=i.stylex.div("bw-flex bw-justify-center bw-gap-2");var b=wp.i18n;async function w(t){if(0!==await a.api.patch("auth/wp-user/email-exists",{json:{email:t}}).json())throw new Error("Email already exist!")}const m=a.createStore()(a.immer(a.devtools(((t,e)=>({isLoading:!1,wpUserInfo:window.booksterMeta.auth.wpUserInfo,customerRecord:window.booksterMeta.auth.customerRecord,agentRecord:window.booksterMeta.auth.agentRecord,login:async o=>{if(!e().isLoading){t((t=>{t.isLoading=!0}));try{const e=await async function(t){const e=await a.api.patch("auth/login",{json:t}).json();return await a.updateRestNonce(),e}(o);t((t=>{t.wpUserInfo=e.wpUserInfo,t.customerRecord=e.customerRecord,t.agentRecord=e.agentRecord}))}finally{t((t=>{t.isLoading=!1}))}}},logout:async()=>{if(!e().isLoading){t((t=>{t.isLoading=!0}));try{await async function(){await a.api.patch("auth/logout").json(),await a.updateRestNonce()}(),t((t=>{t.wpUserInfo={isLoggedIn:!1,avatarUrl:void 0,firstName:void 0,lastName:void 0,displayName:void 0,email:void 0,role:void 0,caps:void 0},t.customerRecord=null,t.agentRecord=null}))}finally{t((t=>{t.isLoading=!1}))}}},updateCustomerRecord:e=>{t((t=>{t.customerRecord=e}))},updateAgentRecord:e=>{t((t=>{t.agentRecord=e}))}})))));n.booksterHooks.addAction(n.HOOK_NAMES.auth.doUpdateAgentRecord,"bookster/authStore",(t=>{m.getState().updateAgentRecord(t)})),n.booksterHooks.addAction(n.HOOK_NAMES.auth.doUpdateCustomerRecord,"bookster/authStore",(t=>{m.getState().updateCustomerRecord(t)}));var p=booksterModules.antd;const g=window.booksterMeta.recordLabels;var x=booksterModules.day,h=(t=>(t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday",t[t.Sunday=0]="Sunday",t))(h||{});const M=[1,2,3,4,5,6,0];function v(t){const e=structuredClone(t);for(const a of M)e[a].periods=e[a].periods.sort(((t,e)=>t.start.absMinute-e.start.absMinute));return e}function k(t){const e=structuredClone(t);for(const a in t)0===Object.keys(t[a]).length&&delete e[a];return 0===Object.keys(e).length?null:e}const R=window.booksterPublicData.generalSettings.time_slot_step;function S(){const t=R%60;return 0===t?60:t>0&&t<=30?t:t>30&&t<60?t%30:5}function O(t){const e=x.dayjs(),a=e.add(1,"day");if("resourceTimelineDay"===t){const t=e.utc(!0).startOf("day").toDate(),o=a.utc(!0).startOf("day").toDate();return{type:"resourceTimelineDay",title:e.format("MMMM D, YYYY"),activeStart:t,activeEnd:o}}if("timeGridWeek"===t){const t=e.startOf("week"),a=e.endOf("week"),o=t.utc(!0).startOf("day").toDate(),s=a.add(1,"day").utc(!0).startOf("day").toDate();return{type:"timeGridWeek",title:t.format(`MMMM D - [${a.date()}], YYYY`),activeStart:o,activeEnd:s}}{const t=e.startOf("month"),a=e.endOf("month"),o=t.utc(!0).startOf("day").toDate(),s=a.add(1,"day").utc(!0).startOf("day").toDate();return{type:"dayGridMonth",title:t.format("MMMM YYYY"),activeStart:o,activeEnd:s}}}const D={Default:i.stylex.span("bw-text-base-foreground"),Secondary:i.stylex.span("bw-text-base-foreground/60"),Primary:i.stylex.span("bw-text-primary"),Info:i.stylex.span("bw-text-info"),Success:i.stylex.span("bw-text-success"),Warning:i.stylex.span("bw-text-warning"),Error:i.stylex.span("bw-text-error")},_={Default:i.stylex.a("bw-text-info hover:bw-text-info/60"),Primary:i.stylex.a("bw-text-primary hover:bw-text-primary/60"),Info:i.stylex.a("bw-text-info hover:bw-text-info/60"),Success:i.stylex.a("bw-text-success hover:bw-text-success/60"),Warning:i.stylex.a("bw-text-warning hover:bw-text-warning/60"),Error:i.stylex.a("bw-text-error hover:bw-text-error/60")};var T=booksterModules.booking,A=booksterModules.decimal;const E="12h"==window.booksterPublicData.generalSettings.time_system?"hh:mm A":"HH:mm",Y=window.booksterPublicData.generalSettings.date_format,j=`${Y} ${E}`,C=document.createElement("div");C.classList.add("bookster-root"),document.body.appendChild(C);const{defaultAlgorithm:P,defaultSeed:I}=p.theme,L={...P({...I,colorTextBase:"#1f2937",colorPrimary:"#2563eb",colorInfo:"#2563eb",colorSuccess:"#22c55e",colorWarning:"#eab308",colorError:"#f43f5e",fontSize:15,borderRadius:4})},q={prefixCls:"bant",direction:window.booksterMeta.meta.isRtl?"rtl":"ltr",form:{validateMessages:{required:"Please enter ${label}!",max:"Maximum ${max} characters!",types:{email:"Please enter a valid Email!"}}},theme:{token:L},getPopupContainer:()=>C};async function B(t,e){let o;const s=e.startOf("month");return o=s.isBefore(x.dayjs())?x.dayjs().startOf("day").format(x.DB_TIMESTAMP_FORMAT):s.format(x.DB_TIMESTAMP_FORMAT),await a.getBookedAppointments({datetime_min:o,datetime_max:e.endOf("month").format(x.DB_TIMESTAMP_FORMAT),agent_ids:[t.agent_id]})}function F(t,e){return a.queryClient.prefetchQuery({queryKey:["booked_appointments",t.agent_id,e.format("YYYY-MM")],queryFn:()=>B(t,e),staleTime:6e4})}function U(){a.prefetchAgents(),a.prefetchServices()}async function W(t){try{a.queryClient.getQueryData(["services","group_by_category"])||a.prefetchServices();let e=a.queryClient.getQueryData(["agents"]);e||(e=await a.fetchAgents(),a.queryClient.setQueryData(["agents"],e)),await async function(t,e){for(const a of t)a.activated&&"public"===a.visibility&&await F(a,e)}(e,t)}catch(e){console.error("Error prefetch BookingForm",e)}}export{k as A,R as B,B as C,Y as D,F as E,w as F,j as G,M as H,g as L,s as R,E as T,h as W,i as _,d as a,b,a as c,n as d,x as e,p as f,_ as g,r as h,O as i,e as j,c as k,u as l,l as m,y as n,f as o,U as p,T as q,o as r,A as s,S as t,m as u,D as v,v as w,q as x,W as y,t as z};
