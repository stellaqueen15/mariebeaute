import{r as e,R as t,_ as a,a as r,c as n,u as l,e as s,L as o,D as m,T as i,d as b,b as c,f as w,p as d,h as u}from"./prefetch.helper-4a4e89e7.js";import{u as p,B as f}from"./index-ad7a2af3.js";import{p as g,R as E}from"./appointment.helper-80ab8c9c.js";import{g as v,a as x,B as h}from"./BookingFormRoot-ec114615.js";import{B as N}from"./BookingButtonBlock-ed69b09f.js";import{v as y,_}from"./phoneInput.helper-24509875.js";import{F as k,a as S}from"./FEConfigProvider-6467d42e.js";import"./index-f9ec547e.js";import"./createBookTimeInput.helper-a66a36a8.js";import"./agentSchedule.helper-648c495b.js";import"./ErrorAlert-70706561.js";import"./ServiceCard-c25895f8.js";import"./useBreakpoint-2ef0bad1.js";import"./index-f3d162c1.js";const I=e.forwardRef((({className:e,...r},n)=>t.createElement(a.Button,{color:"base",ref:n,className:a.cx("bw-rounded-lg bw-px-3 bw-text-xs bw-font-medium",e,{"hover:bw-border-primary hover:bw-text-primary":"outline"===r.variant,"hover:bw-bg-primary":"fill"===r.variant}),...r})));function P({loading:e,children:n,...l}){return t.createElement(a.Button,{...l,className:a.cx("bw-rounded-lg bw-px-3 bw-text-xs bw-font-medium",{"bw-border-gray-100 !bw-text-gray-500":l.disabled})},t.createElement(r.Loader2,{className:a.cx("bw-animate-spin bw-transition-all",!e&&"bw-opacity-0")}),t.createElement("span",{className:a.cx("bw-transition-transform",!e&&"-bw-translate-x-3")},n))}async function F(e,t){return await n.api.get(`as-customer/${e}/appointments/${t}/details`).json()}const j=()=>{const e=n.useQueryClient();return{useApptNoteMutation:n.useMutation({mutationFn:({customerId:e,apptId:t,note:a})=>async function(e,t,a){return await n.api.patch(`as-customer/${e}/appointments/${t}/note`,{json:{customer_note:a}}).json()}(e,t,a),onSuccess:(t,{apptId:a})=>{e.setQueryData(["appointment",{id:a},"details"],{appointment:t}),e.removeQueries(["appointment",a],{exact:!0}),e.invalidateQueries({queryKey:["appointments"]})}}),useApptCancelMutation:n.useMutation({mutationFn:({customerId:e,apptId:t})=>async function(e,t){return await n.api.patch(`as-customer/${e}/appointments/${t}/cancel`).json()}(e,t),onSuccess:(t,{apptId:a})=>{e.setQueryData(["appointment",{id:a},"details"],{appointment:t}),e.removeQueries(["appointment",a],{exact:!0}),e.invalidateQueries({queryKey:["appointments"]})}})}};function A({apptId:c}){const{isLoading:w,isNotFound:d,apptModel:u,note:p,setNote:f,initNote:E,isNoteChanged:v}=function(){const[t]=n.useSearchParams(),a=t.get("apptId"),r=null!==a?parseInt(a):null,s=l((e=>{var t;return null==(t=e.customerRecord)?void 0:t.customer_id})),o=n.useQueryClient().getQueryData(["appointment",r]),[m,i]=e.useState(""),[b,c]=e.useState("");function w(e){i(e),c(e)}e.useEffect((()=>{r&&o?w(o.booking.customer_note):r||w("")}),[r]);const{data:d,isLoading:u}=n.useQuery({queryKey:["appointment",{id:r},"details"],queryFn:async()=>{if(s&&r)return await F(s,r)},enabled:!!r,onSuccess:e=>{e&&!o&&w(e.appointment.booking.customer_note)}});return{isLoading:u&&!o,isNotFound:!u&&!d,apptModel:(null==d?void 0:d.appointment)||o,note:b,setNote:c,initNote:w,isNoteChanged:m!==b}}(),x=l((e=>{var t;return null==(t=e.customerRecord)?void 0:t.customer_id})),{useApptNoteMutation:h,useApptCancelMutation:N}=j();if(w)return t.createElement("div",{className:"bw-flex bw-flex-col bw-items-center bw-gap-2"},t.createElement(a.Skeleton,{className:"bw-h-28 bw-w-full bw-rounded-none"}),t.createElement(a.Skeleton,{className:"-bw-mt-8 bw-h-14 bw-w-14 bw-rounded-full bw-object-cover bw-shadow-md bw-ring-4 bw-ring-white"}),t.createElement("div",{className:"bw-w-full bw-p-3"},t.createElement(a.Skeleton,{className:"bw-mb-5 bw-h-40 bw-w-full"}),t.createElement(a.Skeleton,{className:"bw-h-40 bw-w-full"})));if(d||!u)return t.createElement("div",{className:"bw-mt-12 bw-text-center bw-text-base bw-font-semibold"},"The appointment is not found!");const y=g(u,u.booking,u.service),_=u.agents[0],k=window.booksterPublicData.permissionsSettings.customers_allow_cancel_appointment&&"canceled"!==u.book_status&&1===u.booking_count&&s.dayjs(u.datetime_start).isAfter(s.dayjs());return t.createElement(t.Fragment,null,t.createElement("div",{className:"-bw-mt-4 bw-mb-6 bw-flex bw-items-end bw-gap-5 bw-px-6"},t.createElement(a.Avatar,{className:"bw-h-[4.75rem] bw-w-[4.75rem] bw-rounded-[25px] bw-bg-white bw-ring-2 bw-ring-white"},t.createElement(a.AvatarImage,{src:_.transient_avatar_url,className:"bw-rounded-[25px]"}),t.createElement(a.AvatarFallback,{className:"bw-rounded-[25px]"},t.createElement(r.UserRound,{className:"bw-h-8 bw-w-8"}))),t.createElement("div",null,t.createElement("h5",{className:"bw-text-lg bw-font-semibold"},_.first_name+" "+_.last_name),t.createElement("h6",{className:"bw-text-sm bw-text-gray-500"},u.service.name)),t.createElement("div",{className:"bw-mb-1 bw-ml-auto bw-flex bw-gap-4"},t.createElement(I,{variant:"fill",className:"bw-no-underline",asChild:!0},t.createElement("a",{href:`tel:${_.phone}`},t.createElement(r.Phone,null),"Call me")),t.createElement(I,{className:"bw-border-gray-500 bw-no-underline",variant:"outline",asChild:!0},t.createElement("a",{className:"bw-text-gray-500",href:`mailto:${_.email}`},t.createElement(r.Mail,null),t.createElement("span",null,"Say hello"))),k&&t.createElement(P,{className:"bw-border-error/80 bw-text-error/80 bw-no-underline",variant:"outline",loading:N.isLoading,onClick:async function(){x&&c&&!N.isLoading&&await N.mutateAsync({customerId:x,apptId:c})}},"Cancel"))),t.createElement("div",{className:"bw-flex-1 bw-overflow-hidden bw-pb-6 bw-pl-6"},t.createElement(a.ScrollArea,{className:"bw-mr-1 bw-h-full bw-pr-5"},t.createElement("div",{className:"bw-mb-4 bw-flex bw-flex-col bw-rounded-lg bw-bg-white bw-px-5 bw-py-5"},t.createElement("div",{className:"bw-mb-3 bw-text-sm bw-font-semibold bw-uppercase"},"Appointment Detail #",u.appointment_id),t.createElement("div",{className:"bw-grid bw-grid-cols-2 bw-gap-6 bw-text-sm"},t.createElement("div",{className:"bw-grid bw-grid-cols-2 bw-gap-y-3"},t.createElement("div",{className:"bw-flex bw-flex-col bw-gap-1"},t.createElement("div",{className:"bw-text-gray-500"},o.service),t.createElement("div",null,u.service.name)),t.createElement("div",{className:"bw-flex bw-flex-col bw-gap-1"},t.createElement("div",{className:"bw-text-gray-500"},"Book Status"),t.createElement("div",{className:"bw-capitalize"},u.book_status)),t.createElement("div",{className:"bw-flex bw-flex-col bw-gap-1"},t.createElement("div",{className:"bw-text-gray-500"},"Day"),t.createElement("div",null,s.dayjs(u.datetime_start).format(m))),t.createElement("div",{className:"bw-flex bw-flex-col bw-gap-1"},t.createElement("div",{className:"bw-text-gray-500"},"Period"),t.createElement("div",null,s.dayjs(u.datetime_start).format(i)," -"," ",s.dayjs(u.datetime_end).format(i))),t.createElement("div",{className:"bw-flex bw-flex-col bw-gap-1"},t.createElement("div",{className:"bw-text-gray-500"},"Payment Status"),t.createElement("div",{className:"bw-capitalize"},u.booking.payment_status)),b.booksterHooks.applyFilters(b.HOOK_NAMES.customerDashboard.ApptDrawerAfterPaymentStatus,[],u)),t.createElement("div",{className:"bw-mb-1 bw-flex bw-flex-col bw-gap-2 bw-leading-relaxed"},t.createElement("div",{className:"bw-text-gray-500"},"Comment Note"),t.createElement("div",{className:"bw-flex-1"},t.createElement(a.Textarea,{rows:3,className:"bw-mb-2 bw-flex-1 bw-resize-none",withStatus:!1,value:p,onChange:e=>f(e.target.value)}),t.createElement(P,{disabled:!v,loading:h.isLoading,onClick:async function(){x&&c&&!h.isLoading&&(await h.mutateAsync({customerId:x,apptId:c,note:p}),E(p))}},"Update"))))),t.createElement("div",{className:"bw-rounded-lg bw-bg-white bw-px-5 bw-pb-2.5 bw-pt-4"},t.createElement("div",{className:"bw-mb-4 bw-text-sm bw-font-semibold bw-uppercase"},"Billing Summary"),y.details&&t.createElement(t.Fragment,null,y.details.booking.items.map((e=>t.createElement("div",{key:e.id,className:"bw-mb-3 bw-flex bw-justify-between bw-text-sm"},t.createElement("div",null,e.title,t.createElement("span",{className:"bw-ml-2.5 bw-text-gray-500"},n.formatPrice(e.unitPrice)," x",e.quantity)),t.createElement("div",null,n.formatPrice(e.amount))))),y.details.adjustment.items.map((e=>t.createElement("div",{key:e.id,className:"bw-mb-3 bw-flex bw-justify-between "},t.createElement("div",null,e.title),t.createElement("div",null,n.formatPrice(e.amount))))),y.details.tax.items.length>0&&t.createElement("div",{className:"-bw-mx-2.5 bw-mb-3 bw-flex bw-justify-between bw-rounded-[5px] bw-bg-gray-100/70 bw-px-2.5 bw-py-2 bw-text-sm bw-font-medium",key:"adjustment-subtotal"},t.createElement("div",null,"Subtotal"),t.createElement("div",null,n.formatPrice(y.details.adjustment.subtotal))),y.details.tax.items.map((e=>t.createElement("div",{key:e.id,className:"bw-mb-3 bw-flex bw-justify-between bw-text-sm"},t.createElement("div",null,e.title),t.createElement("div",null,n.formatPrice(e.amount)))))),t.createElement("div",{className:"-bw-mx-2.5 bw-flex bw-justify-between bw-rounded-[5px] bw-bg-gray-100/70 bw-px-2.5 bw-py-2 bw-text-sm bw-font-medium"},t.createElement("div",null,"Total"),t.createElement("div",null,y.details&&n.formatPrice(y.details.tax.total)))))))}function C(){const e=l((e=>{var t;return null==(t=e.customerRecord)?void 0:t.customer_id})),[r,s]=n.useSearchParams(),o=parseInt(r.get("apptId")||""),m=Boolean(o);return e?t.createElement(a.DrawerRoot,{open:m},t.createElement(a.DrawerContent,{className:"bw-absolute bw-bottom-0 bw-w-full bw-max-w-full bw-bg-base-bg2 bw-duration-1000"},t.createElement(a.DrawerBody,{className:"bw-z-10 bw-flex bw-flex-col bw-overflow-hidden bw-p-0"},t.createElement("div",{className:"-bw-z-10 bw-flex bw-h-16 bw-items-center bw-justify-end bw-bg-gradient-to-r bw-from-[#F6DAB8] bw-to-[#BE94E8] bw-px-5 bw-shadow-none"},t.createElement(a.DrawerCloseIcon,{className:"bw-h-6 bw-w-6 bw-rounded-lg bw-bg-base-bg2/50 bw-px-0.5 bw-py-0.5",onClick:()=>{r.delete("apptId"),s(r)}})),t.createElement(A,{apptId:o})))):null}const M=[{title:"Appointments",icon:r.Calendar,to:"/appointments"},{title:"My Profile",icon:r.User,to:"/profile"}];function T(){const e=l((e=>e.logout)),s=n.useNavigate();return t.createElement("aside",{className:"bw-flex bw-w-[60px] bw-flex-col bw-bg-primary bw-text-white"},t.createElement("div",{className:"bw-flex bw-items-center bw-justify-center bw-border-b bw-border-white/15 bw-py-5"},t.createElement(r.Bookster,{className:"bw-text-white"})),t.createElement("ul",{className:"bw-flex bw-flex-1 bw-flex-col bw-p-2.5"},M.map((e=>t.createElement(a.Tooltip,{key:e.to,contentProps:{side:"right"},content:e.title},t.createElement("li",{className:"bw-mb-2.5",key:e.to},t.createElement(n.NavLink,{to:e.to,className:({isActive:e})=>a.clsx("bw-flex bw-cursor-pointer bw-items-center bw-justify-center bw-overflow-hidden bw-rounded-md bw-p-3 bw-text-white bw-no-underline bw-transition-colors hover:bw-bg-white/20",e&&"bw-bg-white/20")},t.createElement(e.icon,{size:20,className:"bw-flex-shrink-0 bw-flex-grow-0 "})))))),t.createElement("li",{className:"bw-mt-auto bw-border-t bw-border-white/15"},t.createElement(a.Tooltip,{contentProps:{side:"right"},content:"Logout"},t.createElement("a",{onClick:()=>async function(){await e(),s("/login")}(),className:"bw-mt-2.5 bw-flex bw-cursor-pointer bw-items-center bw-justify-center bw-overflow-hidden bw-rounded-md bw-p-3 bw-text-white bw-no-underline bw-transition-colors hover:bw-bg-white/20"},t.createElement(r.Power,{className:"bw-flex-shrink-0 bw-flex-grow-0"}))))))}function B(){return t.createElement("div",{className:"bw-relative bw-m-auto bw-flex bw-max-h-[640px] bw-min-h-[640px] bw-min-w-[800px] bw-max-w-4xl bw-overflow-hidden bw-rounded-2xl bw-shadow-md"},t.createElement(T,null),t.createElement("div",{className:a.clsx("bw-relative bw-flex-1 bw-border-l-0 bw-bg-base-bg2 bw-text-left")},t.createElement(n.Outlet,null),t.createElement(C,null)),t.createElement(a.Toaster,{className:"bw-fixed"}))}const R=e.forwardRef((({appt:e,...a},r)=>{var n;return null==(n=null==e?void 0:e.agents)?void 0:n.map((e=>t.createElement("div",{key:e.agent_id,ref:r,...a},e.first_name+" "+e.last_name)))}));function L({search:n,setSearch:l,isLoading:s}){const o=e.useRef(null);return e.useEffect((()=>{o.current&&o.current.focus()}),[o.current]),t.createElement("div",{className:"bw-relative bw-mb-0 bw-flex-none"},t.createElement(a.InputPrefix,null,!s&&t.createElement(r.Search,{className:"bw-h-4 bw-w-4"}),s&&t.createElement(r.Loader2,{className:"bw-h-4 bw-w-4 bw-animate-spin"})),t.createElement(a.Input,{placeholder:"Search code, e.g. #1234",className:"w-rounded-lg bw-ps-9 bw-text-lg",withStatus:!1,ref:o,onChange:e=>l(e.target.value),value:n}))}function D(){var s;const m=l((e=>{var t;return null==(t=e.customerRecord)?void 0:t.customer_id})),[i,b]=e.useState(""),c=function(e){if(!e)return null;const t=e.trim(),a=parseInt(t);return Number.isNaN(a)?null:a}(p(i,{wait:500})),w=n.useQueryClient(),[,d]=n.useSearchParams(),{data:u,isLoading:f}=n.useQuery({queryKey:["appointment",c,"details"],queryFn:async()=>{if(!c||!m)return null;try{return await F(m,c)}catch(e){if(e instanceof n.HTTPError&&404===e.response.status)return null;throw e}}});return t.createElement(a.Popover,null,t.createElement(a.PopoverTrigger,{asChild:!0},t.createElement(I,{variant:"outline",className:"bw-h-10 bw-w-10 bw-rounded-lg bw-bg-base-bg1",size:"icon"},t.createElement(r.Search,null))),t.createElement(a.PopoverPortal,null,t.createElement(a.PopoverContent,{side:"bottom",align:"end"},t.createElement(L,{isLoading:f,search:i,setSearch:b}),t.createElement("div",{className:"btr-scrollbar-sm bw-relative bw-overflow-y-auto"},t.createElement(a.LoadingOverlay,{loading:!1}),(null==u?void 0:u.appointment)&&t.createElement(t.Fragment,null,t.createElement(a.SectionSeparator.Title,null,"Appointments Results"),u?t.createElement("div",{onClick:()=>{return e=u.appointment,d((t=>(t.set("apptId",e.appointment_id.toString()),t))),void w.setQueryData(["appointment",e.appointment_id.toString()],e);var e},className:"bw-flex bw-cursor-pointer bw-items-center bw-gap-4 bw-rounded bw-px-3 bw-py-3 hover:bw-bg-base-bg2"},t.createElement("h3",{className:"bw-mb-0 bw-mr-4 bw-text-3xl bw-text-base-foreground"},"#",u.appointment.appointment_id),t.createElement("div",null,t.createElement("h4",{className:"bw-mb-1"},null==(s=u.appointment.service)?void 0:s.name),t.createElement("span",{className:"bw-text-base-foreground/60"},u.appointment.agents&&u.appointment.booking&&`${o.agent}: ${u.appointment.agents[0].first_name} ${u.appointment.agents[0].last_name}, ${o.customer}: ${u.appointment.booking.customer.first_name} ${u.appointment.booking.customer.last_name}`))):t.createElement(E,null,"No Matched Appointment found!"))))))}const O=({filters:e,setFilters:r})=>{const l=v(x()),s=n.useActiveServices();return t.createElement("div",{className:"bw-flex bw-items-center bw-justify-between"},t.createElement("div",{className:"bw-flex bw-items-center bw-gap-3"},t.createElement(a.Select,{value:e.timeSegment,onValueChange:function(t){r({...e,timeSegment:t})}},t.createElement(a.SelectTrigger,{className:"bw-h-10 bw-w-36 bw-flex-shrink-0 bw-rounded-lg bw-text-sm ",withStatus:!1},t.createElement(a.SelectValue,null)),t.createElement(a.SelectContent,null,t.createElement(a.SelectGroup,null,t.createElement(a.SelectItem,{value:"today"},c.__("Today","bookster")),t.createElement(a.SelectItem,{value:"upcoming"},c.__("Upcoming","bookster")),t.createElement(a.SelectItem,{value:"history"},c.__("History","bookster"))))),t.createElement(a.Select,{value:e.serviceId,onValueChange:function(t){r({...e,serviceId:t})}},t.createElement(a.SelectTrigger,{className:"bw-h-10 bw-w-48 bw-flex-shrink-0 bw-rounded-lg bw-text-sm",withStatus:!1},t.createElement(a.SelectValue,{placeholder:c.sprintf(c.__("All %(services)s","bookster"),o)})),t.createElement(a.SelectContent,null,t.createElement(a.SelectGroup,null,t.createElement(a.SelectItem,{key:"all-services",value:"all-services"},c.sprintf(c.__("All %(services)s","bookster"),o))),null==s?void 0:s.map((e=>t.createElement(a.SelectGroup,{key:e.service_category_id},t.createElement(a.SelectLabel,{className:"bw-pb-0 bw-text-xs bw-font-medium bw-uppercase bw-text-gray-300"},e.name),e.services.map((e=>t.createElement(a.SelectItem,{key:e.service_id,value:e.service_id.toString()},e.name))))))))),t.createElement("div",{className:"bw-flex bw-items-center bw-gap-2"},t.createElement(D,null),t.createElement(h,{config:l},t.createElement(N,null,t.createElement(I,{className:"bw-h-10 bw-text-sm",variant:"fill"},"Book Appointment")))))},$=()=>t.createElement("div",{className:"bw-px-6"},t.createElement("div",{className:'bw-mb-2 bw-flex bw-items-center bw-text-xs bw-font-medium after:bw-ms-6 after:bw-flex-1 after:bw-border-0 after:bw-border-t after:bw-border-solid after:bw-border-base-bg3 after:bw-content-[""]'},t.createElement(a.Skeleton,{className:"bw-h-4 bw-w-16"})),t.createElement(a.Skeleton,{className:"bw-mb-3 bw-h-14 bw-rounded-md bw-p-2 bw-shadow-sm"}),t.createElement(a.Skeleton,{className:"bw-mb-3 bw-h-14 bw-rounded-md bw-p-2 bw-shadow-sm"}),t.createElement(a.Skeleton,{className:"bw-mb-3 bw-h-14 bw-rounded-md bw-p-2 bw-shadow-sm"}),t.createElement("div",{className:'bw-mb-2 bw-flex bw-items-center bw-text-xs bw-font-medium after:bw-ms-6 after:bw-flex-1 after:bw-border-0 after:bw-border-t after:bw-border-solid after:bw-border-base-bg3 after:bw-content-[""]'},t.createElement(a.Skeleton,{className:"bw-h-4 bw-w-16"})),t.createElement(a.Skeleton,{className:"bw-mb-3 bw-h-14 bw-rounded-md bw-p-2 bw-shadow-sm"}),t.createElement(a.Skeleton,{className:"bw-mb-3 bw-h-14 bw-rounded-md bw-p-2 bw-shadow-sm"})),q=e.forwardRef((({status:e,className:r,...n},l)=>t.createElement("div",{className:r,...n,ref:l},t.createElement("div",{className:a.clsx("bw-inline-flex bw-items-center bw-rounded-md bw-px-3.5 bw-py-2",{"bw-bg-success/10":"approved"===e,"bw-bg-warning/10":"pending"===e,"bw-bg-error/10":"canceled"===e})},t.createElement("span",{className:a.clsx("bw-text-[10px] bw-font-semibold bw-uppercase bw-leading-none",{"bw-text-success":"approved"===e,"bw-text-warning":"pending"===e,"bw-text-error":"canceled"===e})},e)))));const Q={today:{operator:"BETWEEN",min:s.dayjs().startOf("day").format(s.DB_TIMESTAMP_FORMAT),max:s.dayjs().endOf("day").format(s.DB_TIMESTAMP_FORMAT)},upcoming:{operator:">",value:s.dayjs().startOf("day").format(s.DB_TIMESTAMP_FORMAT)},history:{operator:"<",value:s.dayjs().startOf("day").format(s.DB_TIMESTAMP_FORMAT)}};function U(){const o=l((e=>{var t;return null==(t=e.customerRecord)?void 0:t.customer_id})),[,c]=n.useSearchParams(),w=n.useQueryClient(),[d,u]=e.useState({timeSegment:"upcoming",serviceId:"all-services"}),p=e.useMemo((()=>({limit:12,datetime_start:Q[d.timeSegment],order_by:"datetime_start",order:"history"===d.timeSegment?"DESC":"ASC",...d.serviceId&&"all-services"!==d.serviceId&&{"appt.service_id":d.serviceId}})),[d]),{apptGroupByDate:f,hasNextPage:g,fetchNextPage:E,isFetchingNextPage:v,isLoading:x}=function(e,t){const{isLoading:a,data:r,fetchNextPage:l,isFetchingNextPage:o,hasNextPage:i}=n.useInfiniteQuery({queryKey:["appointments",t],queryFn:async({pageParam:a=0})=>void 0===e?{data:[],total:0}:await async function(e,t){return await n.api.patch(`as-customer/${e}/appointments`,{json:t}).json()}(e,{...t,offset:a*(t.limit||0)}),getNextPageParam:(e,t)=>t.reduce(((e,t)=>e+t.data.length),0)<e.total?t.length:void 0,keepPreviousData:!0}),b={};return r&&r.pages.forEach((e=>{e.data.forEach((e=>{const t=e.datetime_start.substring(0,10);b[t]||(b[t]={dbDate:t,label:s.dayjs(e.datetime_start).format(m),appts:[]}),b[t].appts.push(e)}))})),{isFetchingNextPage:o,hasNextPage:i,fetchNextPage:l,isLoading:a,apptGroupByDate:b}}(o,p);function h(e){c((t=>(t.set("apptId",e.appointment_id.toString()),t))),w.setQueryData(["appointment",e.appointment_id],e)}const N=f&&Object.keys(f).length>0;return t.createElement("div",{className:"bw-flex bw-h-full bw-flex-col"},t.createElement("div",{className:"bw-px-6 bw-pt-5"},t.createElement("h2",{className:"bw-mb-7 bw-text-[1.375rem] bw-font-semibold"},"Appointments"),t.createElement(O,{filters:d,setFilters:u}),t.createElement("div",{className:"bw-rounded-md bw-py-6"},t.createElement("div",{className:"bw-grid bw-grid-cols-[5rem_auto_10.625rem_6.75rem_6.25rem_7.5rem_2.125rem] bw-rounded-md bw-bg-gray-100 bw-text-xs bw-uppercase bw-leading-none bw-text-gray-500"},t.createElement("div",{className:"bw-px-4 bw-py-3 bw-text-inherit"},"id"),t.createElement("div",{className:"bw-px-4 bw-py-3 bw-text-inherit"},"assigned"),t.createElement("div",{className:"bw-px-4 bw-py-3 bw-text-inherit"},"service"),t.createElement("div",{className:"bw-px-4 bw-py-3 bw-text-inherit"},"time"),t.createElement("div",{className:"bw-px-4 bw-py-3 bw-text-inherit"},"price"),t.createElement("div",{className:"bw-px-4 bw-py-3 bw-text-inherit"},"status"),t.createElement("div",{className:"bw-px-4 bw-py-3 bw-text-inherit"})))),t.createElement("div",{className:"bw-mr-1 bw-h-full bw-overflow-hidden"},x&&t.createElement($,null),!x&&!N&&t.createElement(a.Empty,{className:"bw-mt-40"}),!x&&N&&t.createElement(a.ScrollArea,{className:"bw-h-full bw-w-full bw-pl-6 bw-pr-5"},Object.entries(f).sort((([e],[t])=>"history"===d.timeSegment?e<t?1:-1:e>t?1:-1)).map((([a,{label:l,appts:o}])=>t.createElement(e.Fragment,{key:a},t.createElement("div",{className:'bw-mb-3 bw-flex bw-items-center bw-text-xs bw-font-medium bw-text-gray-500 after:bw-ms-3 after:bw-flex-1 after:bw-border-0 after:bw-border-t after:bw-border-solid after:bw-border-gray-100 after:bw-content-[""]'},l),o.map((e=>t.createElement("div",{key:e.appointment_id,className:"bw-group bw-mb-3 bw-grid bw-min-h-[3.125rem] bw-grid-cols-[5rem_auto_10.625rem_6.75rem_6.25rem_7.5rem_2.125rem] bw-items-center bw-rounded-md bw-bg-white bw-text-sm bw-leading-normal bw-transition-all bw-duration-300 hover:bw-shadow-[inset_2px_0px_0px_0px] hover:bw-shadow-primary"},t.createElement("div",{className:"bw-cursor-pointer bw-text-ellipsis bw-text-nowrap bw-px-4 bw-text-primary/80",onClick:()=>h(e)},"#",e.appointment_id),t.createElement("div",{className:"bw-px-4"},t.createElement(R,{className:"bw-text-left",appt:e})),t.createElement("div",{className:"bw-px-4"},e.service.name),t.createElement("div",{className:"bw-px-4"},s.dayjs(e.datetime_start).format(i)),t.createElement("div",{className:"bw-px-4"},n.formatPrice(e.booking.total_amount)),t.createElement("div",{className:"bw-px-4"},t.createElement(q,{className:"group-hover:bw-hidden",status:e.book_status}),t.createElement("div",{className:"bw-hidden bw-items-center bw-gap-2 group-hover:bw-flex"},t.createElement("a",{href:`tel:${e.agents[0].phone}`,className:"bw-flex bw-cursor-pointer bw-items-center bw-rounded-md bw-p-1 bw-text-gray-500 bw-transition-colors bw-duration-300 hover:bw-bg-base-bg3"},t.createElement(r.Phone,null)),t.createElement("a",{href:`mailto:${e.agents[0].email}`,className:"bw-flex bw-cursor-pointer bw-items-center bw-rounded-md bw-p-1 bw-text-gray-500 bw-transition-colors bw-duration-300 hover:bw-bg-base-bg3"},t.createElement(r.Mail,null)),b.booksterHooks.applyFilters(b.HOOK_NAMES.customerDashboard.ApptRowAfterMailIcon,[],e))),t.createElement("div",{className:"bw-flex bw-items-center"},t.createElement("span",{onClick:()=>h(e),className:"bw-inline-flex bw-cursor-pointer bw-items-center bw-justify-center bw-rounded-md bw-p-1 bw-text-gray-500 bw-transition-colors bw-duration-300 hover:bw-bg-base-bg3"},t.createElement(r.BChevronRight,null))))))))),g&&t.createElement("div",{className:"bw-mb-3 bw-text-center"},t.createElement(P,{loading:v,variant:"outline",onClick:()=>E()},"Load more...")))))}function H(){const{isLoading:s,login:o}=l(),m=n.useNavigate(),[i,b]=e.useState();return t.createElement(w.Form,{name:"customerLogin",className:"bw-relative bw-mx-auto bw-max-w-lg bw-rounded-2xl bw-bg-base-bg1 bw-px-6 bw-pb-1 bw-pt-6",initialValues:{remember:!0},onFinish:async e=>{try{await o(e),m("/")}catch(a){const e=await n.getErrorJson(a),r=await n.getErrorMsg(a);b("incorrect_password"===e.code?t.createElement("p",{dangerouslySetInnerHTML:{__html:r}}):r)}}},t.createElement(a.LoadingOverlay,{loading:s}),t.createElement("div",{className:"bw-text-center sm:bw-mx-auto sm:bw-w-full sm:bw-max-w-sm"},t.createElement(r.Bookster,{className:"bw-h-8 bw-w-8 bw-text-primary"}),t.createElement("h4",{className:"bw-mx-10 bw-my-5 bw-text-center bw-text-2xl bw-font-medium bw-leading-9 bw-tracking-tight"},c.__("Sign in to your account","bookster"))),i&&t.createElement("div",{className:"bw-mb-5 bw-border-0 bw-border-l-4 bw-border-solid bw-border-error bw-bg-base-bg2 bw-py-2 bw-pl-6"},i),t.createElement(w.Form.Item,{name:"username",rules:[{required:!0,message:c.__("Please input your Username or Email Address!","bookster")}]},t.createElement(a.Input,{placeholder:c.__("Username or Email Address","bookster")})),t.createElement(w.Form.Item,{name:"password",rules:[{required:!0,message:c.__("Please input your password!","bookster")}]},t.createElement(a.PasswordInput,{placeholder:c.__("Password","bookster")})),t.createElement(w.Form.Item,null,t.createElement("div",{className:"bw-flex bw-justify-between"},t.createElement("div",{className:"bw-flex bw-items-center bw-gap-2"},t.createElement(w.Form.Item,{name:"remember",valuePropName:"checked",trigger:"onCheckedChange",noStyle:!0},t.createElement(a.Checkbox,{id:"remember"})),t.createElement(a.Label,{htmlFor:"remember",className:"bw-cursor-pointer"},c.__("Remember me","bookster"))),t.createElement("a",{href:window.booksterMeta.wpPath.lossPasswordUrl},c.__("Forgot password?","bookster")))),t.createElement(w.Form.Item,null,t.createElement(I,{variant:"fill",color:"primary",type:"submit",className:"bw-w-full"},c.__("Log in","bookster"))),window.booksterMeta.wpPath.registerUrl&&t.createElement("a",{href:window.booksterMeta.wpPath.registerUrl},c.__("Or Register Now","bookster")))}function K(){const{gravatar:e,transient_avatar_url:n}=l((e=>{var t;return{gravatar:e.wpUserInfo.avatarUrl,transient_avatar_url:null==(t=e.customerRecord)?void 0:t.transient_avatar_url}}));return t.createElement("div",{className:"bw-mb-5 bw-flex bw-items-center bw-gap-4"},t.createElement(a.Avatar,{className:a.clsx("bw-h-[4.375rem] bw-w-[4.375rem] bw-rounded-[25px]",{"bw-cursor-pointer":!n}),onClick:()=>{n||window.open(window.booksterMeta.wpPath.adminUrl+"profile.php","_blank")}},t.createElement(a.AvatarImage,{src:n||e}),t.createElement(a.AvatarFallback,{className:"bw-rounded-[25px] bw-text-4xl"},t.createElement(r.UserRound,{className:"bw-h-10 bw-w-10"}))))}function V(){const[r,s]=e.useState(!1),{customerRecord:m,wpUserInfo:i,updateCustomerRecord:d}=l(),[u]=w.Form.useForm(),{toast:p}=a.useToast(),f=b.booksterHooks.applyFilters(b.HOOK_NAMES.customerDashboard.profileFormInitialValues,{customer_id:null==m?void 0:m.customer_id,first_name:(null==m?void 0:m.first_name)||(null==i?void 0:i.firstName),last_name:(null==m?void 0:m.last_name)||(null==i?void 0:i.lastName),email:(null==m?void 0:m.email)||(null==i?void 0:i.email),phone:null==m?void 0:m.phone,customer_note:null==m?void 0:m.customer_note},m);return t.createElement("div",{className:"bw-relative bw-flex bw-h-full bw-flex-col"},t.createElement("h2",{className:"bw-mx-6 bw-my-5 bw-text-[1.375rem] bw-font-semibold"},"Profile Settings"),t.createElement(a.LoadingOverlay,{loading:r}),t.createElement("div",{className:"bw-overflow-hidden bw-pb-6 bw-pl-6"},t.createElement(a.ScrollArea,{className:"bw-mr-1 bw-h-full bw-pr-5"},t.createElement("div",{className:"bw-rounded-lg bw-bg-white bw-p-5"},t.createElement(w.Form,{form:u,layout:"vertical",initialValues:f,onFinish:async function(e){try{s(!0);const t=await async function(e){return await n.api.patch("as-customer/profile",{json:e}).json()}(e);d(t),p.success(c.sprintf(c.__("%(customer)s has been saved successfully!","bookster"),o))}catch(t){p.error(await n.getErrorMsg(t))}finally{s(!1)}}},t.createElement(w.Form.Item,{name:"customer_id",hidden:!0},t.createElement(a.Input,null)),t.createElement(K,null),t.createElement("div",{className:"bw-grid bw-grid-cols-1 bw-gap-x-6 sm:bw-grid-cols-2"},t.createElement(w.Form.Item,{label:c.__("First Name","bookster"),name:"first_name",rules:[{required:!0}]},t.createElement(a.Input,{placeholder:c.__("Please enter first name","bookster")})),t.createElement(w.Form.Item,{label:c.__("Last Name","bookster"),name:"last_name",rules:[{required:!0}]},t.createElement(a.Input,{placeholder:c.__("Please enter last name","bookster")})),t.createElement(w.Form.Item,{label:c.__("Email Address","bookster"),name:"email",rules:[{required:!0},{type:"email",validateTrigger:"onBlur"}],validateTrigger:["onBlur","onChange"]},t.createElement(a.Input,{placeholder:c.__("Please enter email","bookster"),disabled:!0})),t.createElement(w.Form.Item,{label:c.__("Phone Number","bookster"),name:"phone",rules:[{required:!0},{validator:y,validateTrigger:"onBlur"}],validateTrigger:["onBlur","onChange"]},t.createElement(_,null)),b.booksterHooks.applyFilters(b.HOOK_NAMES.customerDashboard.ProfileAfterPhone,[]),t.createElement(w.Form.Item,{className:"bw-col-span-full",label:c.__("Comment Note","bookster"),name:"customer_note"},t.createElement(a.Textarea,{rows:4,placeholder:c.__("Please enter note","bookster")})),b.booksterHooks.applyFilters(b.HOOK_NAMES.customerDashboard.ProfileEndForm,[])),t.createElement(I,{variant:"fill",type:"submit"},c.__("Save Changes","bookster")))))))}const z=n.createHashRouter([{path:"/login",element:t.createElement(H,null)},{path:"*",element:t.createElement(B,null),loader:async()=>l.getState().wpUserInfo.isLoggedIn?null:n.redirect("/login"),children:[{index:!0,element:t.createElement(U,null)},{path:"appointments",element:t.createElement(U,null)},{path:"profile",element:t.createElement(V,null)},{path:"*",element:t.createElement(V,null)}],errorElement:t.createElement(f,null)}]);d();const G=document.querySelectorAll(".bookster-mainfe-customer-dashboard");if(G.length>0){const e=G[0];u.createRoot(e).render(t.createElement(t.StrictMode,null,t.createElement(k,null,t.createElement(S,null,t.createElement(n.RouterProvider,{router:z})))))}