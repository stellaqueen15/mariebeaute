import{c as e,R as t,_ as a,a as n,e as l,f as r,D as o,r as s,b as c,d as m,g as i,G as d}from"./prefetch.helper-4a4e89e7.js";import{u}from"./index-ad7a2af3.js";function p({className:l,...r}){const[o,s]=e.useSearchParams(),c=o.get("code");return t.createElement("div",{className:"bw-relative"},t.createElement(a.InputPrefix,null,t.createElement(n.Search,null)),t.createElement(a.Input,{className:a.clsx("bw-ps-10",l),withStatus:!1,value:c??"",onChange:e=>{const t=e.target.value??"";var a;a=t,s((e=>(e.set("code",a),e)))},placeholder:"Code, e.g, #123",...r}))}function b(a){const[n,s]=e.useSearchParams(),c=n.get("date-from"),m=n.get("date-to"),i=c&&m?[l.dayjs(c,l.DAY_KEY_FORMAT),l.dayjs(m,l.DAY_KEY_FORMAT)]:[null,null];return t.createElement(r.DatePicker.RangePicker,{value:i,onChange:e=>{const t=e??[null,null];s((e=>(t[0]&&t[1]?(e.set("date-from",t[0].format(l.DAY_KEY_FORMAT)),e.set("date-to",t[1].format(l.DAY_KEY_FORMAT))):(e.delete("date-from"),e.delete("date-to")),e)))},allowClear:!0,format:o,presets:g,...a})}const E=l.dayjs(),g=[{label:t.createElement("a",null,"Today"),value:[E,E]},{label:t.createElement("a",null,"This week"),value:[E.startOf("week"),E.endOf("week")]},{label:t.createElement("a",null,"This month"),value:[E.startOf("month"),E.endOf("month")]},{label:t.createElement("a",null,"Next 7 days"),value:[E,E.add(7,"day")]},{label:t.createElement("a",null,"Next 30 days"),value:[E,E.add(30,"day")]}];function f({className:l,...r}){const[o,m]=s.useState(!1),[i,d]=e.useSearchParams(),u=i.get("payment"),p=u?u.split(","):[],b=e=>{if(p.includes(e)){const t=p.filter((t=>t!==e));d((e=>(e.set("payment",t.join(",")),e)))}else d((t=>(t.set("payment",[...p,e].join(",")),t)))};return t.createElement(a.Popover,{open:o,onOpenChange:m},t.createElement(a.ComboboxTrigger,{withStatus:!1,className:a.clsx("bw-w-auto bw-gap-1 bw-rounded-full bw-border-dashed bw-bg-base-bg1 bw-pe-2 bw-ps-2 bw-text-sm",l),...r},t.createElement(n.PlusCircle,{className:"h-2 w-2 bw-text-base-foreground/60"}),t.createElement("span",{className:"bw-text-base-foreground/60"},"Payment"),p.length>0&&t.createElement(a.Separator,{orientation:"vertical"}),"incomplete"===p[0]&&t.createElement(a.Badge,{variant:"fill",color:"info"},c.__("Incomplete","bookster")),"complete"===p[0]&&t.createElement(a.Badge,{variant:"fill",color:"success"},c.__("Complete","bookster")),"refunded"===p[0]&&t.createElement(a.Badge,{variant:"fill",color:"error"},c.__("Refunded","bookster")),"voided"===p[0]&&t.createElement(a.Badge,{variant:"fill",color:"muted"},c.__("Voided","bookster")),p.length>1&&t.createElement("span",null,"+",p.length-1)),t.createElement(a.PopoverPortal,null,t.createElement(a.PopoverContent,{className:"bw-w-[10rem] bw-p-0 bw-shadow-md",side:"bottom",align:"start"},t.createElement(a.Command,{loop:!0},t.createElement(a.CommandInput,{placeholder:"Payment"}),t.createElement(a.CommandList,null,t.createElement(a.CommandEmpty,null,"No results found."),t.createElement(a.CommandGroup,null,t.createElement(a.CommandItem,{value:"incomplete",onSelect:()=>b("incomplete")},t.createElement(a.ComboboxItemIcon,{isActive:p.includes("incomplete")}),c.__("Incomplete","bookster")),t.createElement(a.CommandItem,{value:"complete",onSelect:()=>b("complete")},t.createElement(a.ComboboxItemIcon,{isActive:p.includes("complete")}),c.__("Complete","bookster")),t.createElement(a.CommandItem,{value:"refunded",onSelect:()=>b("refunded")},t.createElement(a.ComboboxItemIcon,{isActive:p.includes("refunded")}),c.__("Refunded","bookster")),t.createElement(a.CommandItem,{value:"voided",onSelect:()=>b("voided")},t.createElement(a.ComboboxItemIcon,{isActive:p.includes("voided")}),c.__("Voided","bookster"))),p.length>0&&t.createElement(t.Fragment,null,t.createElement(a.CommandSeparator,{alwaysRender:!0}),t.createElement(a.CommandGroup,{forceMount:!0},t.createElement(a.CommandItem,{forceMount:!0,onSelect:()=>{d((e=>(e.delete("payment"),e)))},className:"bw-justify-center bw-py-2 bw-font-medium bw-text-base-foreground/60"},c.__("Clear Filter","bookster")))))))))}function w({className:l,...r}){const[o,m]=s.useState(!1),[i,d]=e.useSearchParams(),u=i.get("status"),p=u?u.split(","):[],b=e=>{if(p.includes(e)){const t=p.filter((t=>t!==e));d((e=>(e.set("status",t.join(",")),e)))}else d((t=>(t.set("status",[...p,e].join(",")),t)))};return t.createElement(a.Popover,{open:o,onOpenChange:m},t.createElement(a.ComboboxTrigger,{withStatus:!1,className:a.clsx("bw-w-auto bw-gap-1 bw-rounded-full bw-border-dashed bw-bg-base-bg1 bw-pe-2 bw-ps-2 bw-text-sm",l),...r},t.createElement(n.PlusCircle,{className:"h-2 w-2 bw-text-base-foreground/60"}),t.createElement("span",{className:"bw-text-base-foreground/60"},"Status"),p.length>0&&t.createElement(a.Separator,{orientation:"vertical"}),"approved"===p[0]&&t.createElement(a.Badge,{variant:"fill",color:"success"},c.__("Approved","bookster")),"pending"===p[0]&&t.createElement(a.Badge,{variant:"fill",color:"warning"},c.__("Pending","bookster")),"canceled"===p[0]&&t.createElement(a.Badge,{variant:"fill",color:"error"},c.__("Canceled","bookster")),p.length>1&&t.createElement("span",null,"+",p.length-1)),t.createElement(a.PopoverPortal,null,t.createElement(a.PopoverContent,{className:"bw-w-[10rem] bw-p-0 bw-shadow-md",side:"bottom",align:"start"},t.createElement(a.Command,{loop:!0},t.createElement(a.CommandInput,{placeholder:"Status"}),t.createElement(a.CommandList,null,t.createElement(a.CommandEmpty,null,"No results found."),t.createElement(a.CommandGroup,null,t.createElement(a.CommandItem,{value:"approved",onSelect:()=>b("approved")},t.createElement(a.ComboboxItemIcon,{isActive:p.includes("approved")}),c.__("Approved","bookster")),t.createElement(a.CommandItem,{value:"pending",onSelect:()=>b("pending")},t.createElement(a.ComboboxItemIcon,{isActive:p.includes("pending")}),c.__("Pending","bookster")),t.createElement(a.CommandItem,{value:"canceled",onSelect:()=>b("canceled")},t.createElement(a.ComboboxItemIcon,{isActive:p.includes("canceled")}),c.__("Canceled","bookster"))),p.length>0&&t.createElement(t.Fragment,null,t.createElement(a.CommandSeparator,{alwaysRender:!0}),t.createElement(a.CommandGroup,{forceMount:!0},t.createElement(a.CommandItem,{forceMount:!0,onSelect:()=>{d((e=>(e.delete("status"),e)))},className:"bw-justify-center bw-py-2 bw-font-medium bw-text-base-foreground/60"},c.__("Clear Filter","bookster")))))))))}function v(){const[t]=e.useSearchParams(),a={in_args:{}},n=t.get("code"),r=u(n,{wait:500}),o=parseInt((null==r?void 0:r.replace("#",""))??"",10);if(!isNaN(o))return a["appt.appointment_id"]=o,a;const s=t.get("date-from"),c=t.get("date-to");s&&c&&(a.datetime_start={operator:"BETWEEN",min:l.dayjs(s,l.DAY_KEY_FORMAT).startOf("day").format(l.DB_TIMESTAMP_FORMAT),max:l.dayjs(c,l.DAY_KEY_FORMAT).endOf("day").format(l.DB_TIMESTAMP_FORMAT)});const i=t.get("status"),d=i?i.split(","):null;d&&d.length>0&&(a.in_args.book_status={values:d,placeholder:"%s"});const p=t.get("payment"),b=p?p.split(","):null;b&&b.length>0&&(a.in_args.payment_status={values:b,placeholder:"%s",alias:"booking"});const E=t.get("agent"),g=E?E.split(","):null;g&&g.length>0&&(a.in_args.agent_id={values:g.map((e=>parseInt(e,10))),placeholder:"%d",alias:"assignment"});const f=t.get("service"),w=f?f.split(","):null;w&&w.length>0&&(a.in_args.service_id={values:w.map((e=>parseInt(e,10))),placeholder:"%d"});const v=t.get("customer"),_=v?v.split(","):null;return _&&_.length>0&&(a.in_args.customer_id={values:_.map((e=>parseInt(e,10))),placeholder:"%d",alias:"booking"}),m.booksterHooks.applyFilters(m.HOOK_NAMES.adminApptList.apptsFilterPayload,a,t)}const _=s.createContext(void 0);function C(){const e=s.useContext(_);if(!e)throw new Error("ApptsListContextProvider missing!");return e}function h({appt:e}){return t.createElement(a.TableCell,null,t.createElement(i.Default,null,`#${e.appointment_id}`))}function y({appt:e}){return t.createElement(a.TableCell,null,l.dayjs(e.datetime_start).format(d))}function N({appt:e}){return t.createElement(a.TableCell,null,e.service.name)}function k({appt:e}){return t.createElement(a.TableCell,null,e.bookings.slice(0,1).map((e=>{const l=e.customer;return t.createElement("div",{key:l.customer_id,className:"bw-flex bw-items-center bw-gap-1.5"},t.createElement(a.Avatar,{className:"bw-h-5 bw-w-5"},t.createElement(a.AvatarImage,{src:l.transient_avatar_url}),t.createElement(a.AvatarFallback,{className:"bw-text-xs"},t.createElement(n.UserRound,{className:"bw-h-3 bw-w-3"}))),l.first_name," ",l.last_name)})),e.bookings.length>1&&t.createElement("span",null,"+",e.bookings.length-1))}function x({appt:e}){return t.createElement(a.TableCell,null,e.agents.slice(0,2).map((e=>t.createElement("div",{key:e.agent_id,className:"bw-flex bw-items-center bw-gap-1.5"},t.createElement(a.Avatar,{className:"bw-h-5 bw-w-5"},t.createElement(a.AvatarImage,{src:e.transient_avatar_url}),t.createElement(a.AvatarFallback,{className:"bw-text-xs"},t.createElement(n.UserRound,{className:"bw-h-3 bw-w-3"}))),e.first_name," ",e.last_name))),e.agents.length>2&&t.createElement("span",null,"+",e.agents.length-2))}function I({appt:n}){return t.createElement(a.TableCell,null,e.formatPrice(n.bookings[0].total_amount))}function A({bookStatus:e,className:n}){return"canceled"===e?t.createElement(a.Badge,{variant:"fill",color:"error",className:n},"Canceled"):"pending"===e?t.createElement(a.Badge,{variant:"fill",color:"warning",className:n},"Pending"):"approved"===e?t.createElement(a.Badge,{variant:"fill",color:"success",className:n},"Approved"):null}function S({appt:n}){const l=n.bookings[0];return t.createElement(a.TableCell,null,"voided"===l.payment_status&&t.createElement(a.Badge,{key:"voided",variant:"fill",color:"muted"},"Voided"),"refunded"===l.payment_status&&t.createElement(a.Badge,{key:"refunded",variant:"fill",color:"error"},"Refunded"),"complete"===l.payment_status&&t.createElement(a.Badge,{key:"complete",variant:"fill",color:"success"},"Complete"),"incomplete"===l.payment_status&&t.createElement(a.ReactTooltip.Root,{key:"incomlete"},t.createElement(a.ReactTooltip.Trigger,{asChild:!0},t.createElement(a.Badge,{variant:"fill",color:"info"},"Incomplete")),t.createElement(a.TooltipContent,{className:"bw-p-3"},t.createElement(a.ReactTooltip.Arrow,null),t.createElement("div",{className:"bw-min-w-32"},t.createElement("div",{className:"bw-space-y-1"},t.createElement("p",{className:"bw-flex bw-justify-between"},t.createElement("span",null,"Total:"),t.createElement("span",null,e.formatPrice(l.total_amount))),t.createElement("p",{className:"bw-flex bw-justify-between"},t.createElement("span",null,"Paid:"),t.createElement("span",null,e.formatPrice(l.paid_amount)))),t.createElement(a.Separator,{className:"bw-my-2"}),t.createElement("p",{className:"bw-flex bw-justify-between bw-text-sm bw-font-semibold"},t.createElement("span",null,"Due:"),t.createElement("span",null,e.formatPrice(parseFloat(l.total_amount)-parseFloat(l.paid_amount))))))))}function P(l){const r=e.useQueryClient(),{listState:o}=C();return t.createElement(a.Button,{variant:"trivial",size:"icon",onClick:()=>{r.invalidateQueries({queryKey:["appointments"]}),r.invalidateQueries({queryKey:["appointment"]})},...l},t.createElement(n.RefreshCw,{className:o&&(o.isFetching||o.isRefetching)?"bw-animate-spin":""}))}function T({children:e}){const[a,n]=s.useState(void 0);return t.createElement(_.Provider,{value:{listState:a,setListState:n}},e)}export{p as A,A as B,k as C,y as D,h as I,S as P,P as R,N as S,b as a,w as b,f as c,C as d,x as e,I as f,T as g,v as u};