import{r as e,R as t,_ as a,a as l,b as n,L as r,f as s,c as o,d as i,w as c,A as m}from"./prefetch.helper-4a4e89e7.js";import{m as u,n as d,o as g,v as b}from"./store-87403b6b.js";import{f as E,h as f,u as p}from"./BEConfigProvider-697f66d7.js";import{u as y}from"./index-db6d4b60.js";import{a as h,p as v}from"./agent.helper-8c1fafa8.js";import{u as _,b as w,A as k,a as T}from"./AgentGeneralTab-62f9bb56.js";import{A as F,a as A}from"./AgentScheduleTab-f2a58cc2.js";import"./holiday.helper-ca9c72dc.js";import"./phoneInput.helper-24509875.js";import"./index-f3d162c1.js";import"./AvatarPicker-e9de6b9b.js";import"./HiddenInput-2f0ce489.js";import"./WeeklyScheduleEditor-df3fc586.js";import"./lodash-f550b173.js";import"./index-f9ec547e.js";function C({agentForm:s,agent_id:o,onDelete:i,disabled:c}){const[m,d]=e.useState(null);return t.createElement(t.Fragment,null,t.createElement(a.ReactPopover.Root,{onOpenChange:e=>{e&&(async()=>{if(d(null),!o)return;const e=await u({in_args:{agent_id:{values:[o],placeholder:"%d",alias:"assignment"}}});d(e)})()}},t.createElement(a.ReactPopover.Trigger,{asChild:!0},t.createElement(a.Button,{className:"bw-mr-auto msm:bw-hidden",disabled:c,size:"icon",color:"error",variant:"outline",tabIndex:-1},t.createElement(l.Trash,null))),t.createElement(E,null,t.createElement("div",{className:"bw-flex bw-items-start bw-gap-2"},t.createElement(l.Info,{className:"bw-h-5 bw-w-5 bw-fill-warning bw-text-base-bg1"}),t.createElement("div",null,"We Strongly ",t.createElement("strong",null,"Recommend Archiving")," instead of Delete!",t.createElement("br",null),n.sprintf(n.__("Deleting this %(agent)s will cause","bookster"),r)," ",t.createElement("strong",null,null===m?"...":m," Appointments")," ","to be deleted?")),t.createElement(f,null,t.createElement(a.ReactPopover.Close,{asChild:!0},t.createElement(a.Button,{size:"small",color:"error",variant:"outline",onClick:()=>{i()}},"Delete")),t.createElement(a.ReactPopover.Close,{asChild:!0},t.createElement(a.Button,{size:"small",onClick:()=>{s.setFieldValue("activated",!1),s.submit()}},"Archive"))))))}function j(){const{toast:l}=a.useToast(),u=_(),{data:E,isLoading:f}=w(u),j=p();function S(){j("..")}const[D]=s.Form.useForm(),L=o.useQueryClient(),x=o.useMutation({mutationKey:["agents",u,"edit"],mutationFn:({id:e,values:t})=>d(e,t),onSuccess:e=>{L.setQueryData(["agent",u],e),L.invalidateQueries({queryKey:["agents"]})}}),H=o.useMutation({mutationKey:["agents",u,"delete"],mutationFn:g,onSuccess:()=>{L.invalidateQueries({queryKey:["agent",u]}),L.invalidateQueries({queryKey:["agents"]})}}),K=o.useActiveServices(),N=e.useMemo((()=>{if(E){const e=h(E,K);return i.booksterHooks.applyFilters(i.HOOK_NAMES.managerAgentForm.initFormValues,e,E)}}),[E,K]);y((()=>{N&&(D.resetFields(),D.setFieldsValue(N))}),[N]);const O=f||!E&&!f||x.isLoading||H.isLoading;return t.createElement(t.Fragment,null,t.createElement(a.DrawerHeader,null,t.createElement(a.DrawerTitle,null,n.sprintf(n.__("Edit %(agent)s","bookster"),r)),t.createElement(a.DrawerCloseIcon,null)),t.createElement(a.DrawerBody,null,t.createElement(a.LoadingOverlay,{loading:O}),t.createElement(s.Form,{form:D,initialValues:N,disabled:O,layout:"vertical",scrollToFirstError:!0,onFinish:e=>{e.weekly_schedule=e.weekly_schedule?c(e.weekly_schedule):e.weekly_schedule,e.dayoff_schedule=e.dayoff_schedule?m(e.dayoff_schedule):e.dayoff_schedule,async function(e){if(u&&E)try{const t=v(e);e.email&&e.email!==E.email&&await b(e.email),await x.mutateAsync({id:E.agent_id,values:t}),l.success("Agent has been Saved Successfully!"),S()}catch(t){l.error(await o.getErrorMsg(t))}}(e)}},t.createElement(a.TabsRoot,{defaultValue:"general"},t.createElement(a.TabsList,{"aria-label":"tabs settings"},t.createElement(a.LineTabsTrigger,{value:"general"},n.__("General","bookster")),t.createElement(a.LineTabsTrigger,{value:"available"},n.__("Available","bookster")),t.createElement(a.LineTabsTrigger,{value:"schedule"},n.__("Schedule","bookster")),t.createElement(a.LineTabsTrigger,{value:"daysoff"},n.__("Days Off","bookster")),i.booksterHooks.applyFilters(i.HOOK_NAMES.managerAgentForm.TabsTrigger,[])),t.createElement(a.TabsContent,{value:"general"},t.createElement(k,null)),t.createElement(a.TabsContent,{value:"available"},t.createElement(T,null)),t.createElement(a.TabsContent,{value:"schedule"},t.createElement(F,null)),t.createElement(a.TabsContent,{value:"daysoff"},t.createElement(A,null)),i.booksterHooks.applyFilters(i.HOOK_NAMES.managerAgentForm.TabsContent,[])),t.createElement("button",{type:"submit",className:"bw-hidden"}))),t.createElement(a.DrawerFooter,null,E?t.createElement(C,{agentForm:D,disabled:O,agent_id:E.agent_id,onDelete:async function(){if(u&&E)try{await H.mutateAsync(E.agent_id),l.success("Agent has been Deleted Successfully!"),S()}catch(e){l.error(await o.getErrorMsg(e))}}}):null,t.createElement(a.DrawerClose,{asChild:!0},t.createElement(a.Button,{key:"back",tabIndex:-1,variant:"trivial",className:"bw-min-w-[8rem]"},n.__("Cancel","bookster"))),t.createElement(a.Button,{key:"submit",disabled:O,className:"bw-min-w-[8rem]",onClick:()=>D.submit()},n.__("Save","bookster"))))}export{j as default};