import{c as e,R as t,a,r as n,_ as r,L as s,e as l,q as o,b as i,f as c}from"./prefetch.helper-4a4e89e7.js";import{P as m}from"./UIComponents-1eb3bdbf.js";import{A as u,N as p}from"./NestedCustomerDrawer-16c9e791.js";import{k as d}from"./DeleteAppointmentButton-e4b7a1de.js";import{u as E,S as w,a as v,b as f,C as h,m as b,r as y,c as C,d as j,R as g}from"./CalendarNav.styled-1832bdf1.js";import{m as N}from"./main-a21b2a58.js";import{d as T}from"./appointment.helper-80ab8c9c.js";import{u as k,a as x}from"./useAgentResources-9dd36330.js";import{u as P,h as R}from"./store-87403b6b.js";import{S,P as D}from"./queue.helper-9ff85512.js";import{u as A}from"./BEConfigProvider-697f66d7.js";import{O as F,a as _,S as L}from"./OverviewSkeleton-5cc1c90f.js";import"./CustomerFormContent-cbddc6fa.js";import"./phoneInput.helper-24509875.js";import"./index-f3d162c1.js";import"./AvatarPicker-e9de6b9b.js";import"./HiddenInput-2f0ce489.js";import"./customer.helper-d5537c29.js";import"./createBookTimeInput.helper-a66a36a8.js";import"./useBreakpoint-2ef0bad1.js";import"./index-f9ec547e.js";import"./useEffectWithTarget-688d6bb0.js";import"./index-ad7a2af3.js";import"./index-db6d4b60.js";import"./index-8ef1ff47.js";import"./holiday.helper-ca9c72dc.js";function Q({isFetching:n,isSaving:r,...s}){const{getCalendarApi:l}=E(),{title:o}=P((e=>e.dashboard.dayPreview)),i=P((e=>e.dashboardDayPreviewToday)),c=P((e=>e.dashboardDayPreviewPrev)),m=P((e=>e.dashboardDayPreviewNext)),u=e.useQueryClient();return t.createElement(q,{...s},t.createElement(M,{onClick:()=>i(l())},"Today"),t.createElement("div",{className:"bw-mr-1 bw-inline-flex -bw-space-x-px"},t.createElement(B,{onClick:()=>c(l())},t.createElement(a.ChevronLeft,{className:"bw-h-5 bw-w-5"})),t.createElement(B,{onClick:()=>m(l())},t.createElement(a.ChevronRight,{className:"bw-h-5 bw-w-5"}))),t.createElement(I,null,o,t.createElement(S,{isSaving:r})),t.createElement(O,{onClick:()=>u.invalidateQueries({queryKey:["appointments","events"]})},t.createElement(a.RefreshCw,{className:n?"bw-animate-spin":""})))}const{Wrapper:q,NavButton:B,Title:I,TodayButton:M,ReloadButton:O}=w,H=new D;function K(){const[a,i]=n.useState(null),{activeStart:c,activeEnd:m}=P((e=>e.dashboard.dayPreview)),u=P((e=>e.dashboardDayPreviewRefresh)),p=P((e=>e.initAppointmentForm)),{toast:d}=r.useToast(),{resources:w,slotMinAbs:j,slotMaxAbs:g}=k(),{invalidateLazy:S,invalidateNow:D,updateModel:F}=v(),_=f(c,m),{data:L,isFetching:q,isRefetching:B}=x(_),{getCalendarApi:I,calendarRef:M}=E();n.useEffect((()=>{if(void 0!==L&&M.current){const e=I();e.batchRendering((()=>{e.removeAllEvents(),L.forEach((t=>e.addEvent(t)))}))}}),[L,M.current]),n.useEffect((()=>{if(void 0!==w&&M.current){const e=I();e.batchRendering((()=>{w.forEach((t=>e.addResource(t)))}))}}),[w,M.current]),n.useEffect((()=>{u(I())}),[]);const O=e.useQueryClient(),K=A();return t.createElement(t.Fragment,null,t.createElement(Q,{isSaving:a,className:"bw-my-4",isFetching:q||B}),t.createElement(h,{key:"day-preview-calendar",plugins:[N,b],initialView:"resourceTimelineDay",slotMinTime:60*j*1e3,slotMaxTime:60*g*1e3,resourceAreaHeaderContent:s.agent,resourceAreaWidth:200,resourceLabelContent:y,eventContent:C,dateClick:function(e){if("fc-non-business"===e.jsEvent.target.className)return;const t=l._dayjs.utc(e.date).utcOffset(l.USER_UTC_OFFSET,!0);var a;a={book_date:t,start_time:o.Helper.booktime.createFromDayjs(t),agent_ids:e.resource?[parseInt(e.resource.id)]:[]},p(a),K("new")},eventClick:async function(e){var t;e.jsEvent.preventDefault(),t=e.event.extendedProps.model,O.setQueryData(["appointment",t.appointment_id],t),K(`${t.appointment_id}`)},eventDrop:async function(t){const a=t.event;if(!a.start||!a.end)return;const n=T(a.extendedProps.model,a.start,a.end),r=t.newResource;r&&(n.agent_ids=[parseInt(r.id)]),H.add((async()=>{i(!0);try{const e=await R(parseInt(t.event.id),n);t.event.setExtendedProp("model",e),F(e),S()}catch(a){throw i(null),d.error(await e.getErrorMsg(a)),D(),t.revert(),a}}),(()=>{i(!1)}))},editable:!0}))}function U(e){return t.createElement("div",{...e},t.createElement(j,null,t.createElement(K,null)))}function W(n){const l=e.useQueryClient(),{data:o,isFetching:c}=e.useQuery({queryKey:["appointments","analytics","overview",{}],queryFn:async()=>{const t=l.getQueryState(["appointments","analytics","overview",{}]);return await async function(t,a=!1){return await e.api.patch("analytics/overview/query",{json:{apptFilter:t,forceRecalculate:a}}).json()}({},"loading"!==(null==t?void 0:t.status))}});return t.createElement(t.Fragment,null,!o&&t.createElement(F,{...n}),o&&t.createElement($,{...n},t.createElement(z,null,t.createElement(J,null,t.createElement("span",null,"Performance - Last 30 days"),t.createElement("div",{className:"bw-block"},t.createElement(g,{onClick:()=>{l.invalidateQueries({queryKey:["appointments","analytics","overview",{}]})}},t.createElement(a.RefreshCw,{className:c?"bw-animate-spin":""})))),t.createElement(G,null,t.createElement(_,{data:o.data}))),t.createElement(r.Tooltip,{content:"Total Revenue in the Last 30 Days"},t.createElement(V,null,t.createElement(Y,null,t.createElement("span",{className:"bw-mr-1"},"Revenue"),t.createElement(a.CreditCard,{className:"bw-h-3 bw-w-3"})),t.createElement(Z,null,e.formatPrice(o.total.revenue)))),t.createElement(r.Tooltip,{content:"Total Appointments in the Last 30 Days"},t.createElement(V,null,t.createElement(Y,null,t.createElement("span",{className:"bw-mr-1"},"Appointments"),t.createElement(a.NotebookPen,{className:"bw-h-3 bw-w-3"})),t.createElement(Z,null,o.total.apptCount))),t.createElement(r.Tooltip,{content:"Total Cancelation Case in the Last 30 Days"},t.createElement(V,null,t.createElement(Y,null,t.createElement("span",{className:"bw-mr-1"},"Canceled Case"),t.createElement(a.AlertCircle,{className:"bw-h-3 bw-w-3"})),t.createElement(Z,null,o.total.cancelCase))),t.createElement(r.Tooltip,{content:i.sprintf(i.__("Total New %(customers)s in the Last 30 Days","bookster"),s)},t.createElement(V,null,t.createElement(Y,null,t.createElement("span",{className:"bw-mr-1"},i.sprintf(i.__("New %(customer)s","bookster"),s)),t.createElement(a.Contact,{className:"bw-h-3 bw-w-3"})),t.createElement(Z,null,o.total.newCustomer)))))}const{Grid:$,Chart:z,ChartBody:G,ChartTitle:J,Stats:V,StatsTitle:Y,StatsNumber:Z}=L;function X(){const[a]=c.Form.useForm();return t.createElement(m,null,t.createElement("div",{className:"bw-mx-auto bw-mt-0 bw-max-w-7xl xl:bw-mt-2 2xl:bw-mt-4"},t.createElement(W,null),t.createElement(r.SectionSeparator.Title,null,"Day Schedule"),t.createElement(U,null)),t.createElement(d.Provider,{value:{form:a}},t.createElement(u,{parentPath:"/dashboard"},t.createElement(e.Outlet,null)),t.createElement(p,null)))}export{X as default};