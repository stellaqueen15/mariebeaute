import{c as e,R as a,_ as t,r as l,a as n,g as r,b as i,L as s}from"./prefetch.helper-4a4e89e7.js";import{u as o}from"./BEConfigProvider-697f66d7.js";import{q as c}from"./store-87403b6b.js";import{u as m}from"./usePagination-047a16d8.js";import{u}from"./index-ad7a2af3.js";import{b}from"./agent.helper-8c1fafa8.js";function d({children:l}){const n=e.useMatch("/agents"),r=o(),i=null===n,s=e.useIsMutating({mutationKey:["agents"]});return a.createElement(t.DrawerRoot,{open:i,onOpenChange:e=>{e||s||r(".")}},a.createElement(t.Drawer,null,l))}function w({agent:e}){return e.activated?"private"===e.visibility?a.createElement(t.Badge,{variant:"fill",color:"warning"},"Private"):"public"===e.visibility?a.createElement(t.Badge,{variant:"fill",color:"success"},"Public"):null:a.createElement(t.Badge,{variant:"fill",color:"error"},"Archived")}function g(){const[d]=e.useSearchParams(),g=d.get("keywords"),E=u(g,{wait:500}),p=d.get("visibility"),{pagination:v,pagingPayload:f,setTotal:y,setCurrent:h}=m(),T={...f,...E?{keywords:E}:{},...b(p)},_=e.useQueryClient(),N=o(),{data:k,isLoading:C}=e.useQuery({queryKey:["agents",T],queryFn:()=>c(T),keepPreviousData:!0});return l.useEffect((()=>{y((null==k?void 0:k.total)||0),(null==k?void 0:k.total)&&0===(null==k?void 0:k.data.length)&&h(1)}),[k]),a.createElement(a.Fragment,null,a.createElement(t.TableBorder,null,a.createElement(t.Table,{className:"btr-fullpage-table bw-bg-white"},a.createElement(t.TableHeader,null,a.createElement(t.TableHeadRow,null,a.createElement(t.TableHead,null,"Name"),a.createElement(t.TableHead,null,"Email"),a.createElement(t.TableHead,null,"Visibility"),a.createElement(t.TableHead,{className:"bw-w-24"},"Priority"),a.createElement(t.TableHead,{className:"bw-w-2/12"},"WP User"),a.createElement(t.TableHead,{className:"bw-w-16"}))),a.createElement(t.TableBody,null,(C||0===(null==k?void 0:k.data.length))&&a.createElement(t.TableRow,null,a.createElement(t.TableCell,{colSpan:100,className:"bw-h-60 bw-justify-center bw-text-center"},a.createElement("span",{className:"bw-text-2xl bw-font-medium bw-text-base-foreground/60"},C?"Loading...":"No Data Found"))),null==k?void 0:k.data.map((e=>a.createElement(t.TableRow,{className:"btr-has-action-link",onClick:()=>{var a;const t=null==(a=null==window?void 0:window.getSelection())?void 0:a.toString();var l;(null==t?void 0:t.length)||(N(`${(l=e).agent_id}`),_.setQueryData(["agent",l.agent_id],l))},key:e.agent_id},a.createElement(t.TableCell,null,a.createElement("div",{className:"bw-flex bw-items-center bw-gap-1.5"},a.createElement(t.Avatar,{className:"bw-h-5 bw-w-5"},a.createElement(t.AvatarImage,{src:e.transient_avatar_url}),a.createElement(t.AvatarFallback,{className:"bw-text-xs"},a.createElement(n.UserRound,{className:"bw-h-3 bw-w-3"}))),e.first_name," ",e.last_name)),a.createElement(t.TableCell,null,e.email),a.createElement(t.TableCell,null,a.createElement(w,{agent:e})),a.createElement(t.TableCell,null,e.priority),a.createElement(t.TableCell,{className:"bw-flex bw-items-center bw-gap-1.5"},e.wp_user_id&&e.wp_user_display_name?a.createElement(a.Fragment,null,a.createElement(n.Link2,null),a.createElement(r.Default,{href:`${window.booksterMeta.wpPath.userProfileUrl}?user_id=${e.wp_user_id}`,target:"_blank",onClick:e=>e.stopPropagation()},e.wp_user_display_name)):a.createElement(a.Fragment,null,a.createElement(n.Unlink2,null),a.createElement("span",null,"Not Linked"))),a.createElement(t.TableCell,null,a.createElement(t.Tooltip,{content:i.sprintf(i.__("Edit %(agent)s","bookster"),s)},a.createElement(n.SquarePen,{className:"btr-row-action-link bw-h-3.5 bw-w-3.5 bw-text-primary hover:bw-text-primary/60"}))))))))),a.createElement(t.Pagination,{pagination:v,onNavChange:h}))}export{g as A,d as a};