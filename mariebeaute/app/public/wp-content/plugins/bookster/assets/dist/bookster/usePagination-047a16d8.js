import{r as e}from"./prefetch.helper-4a4e89e7.js";function t(t=window.booksterPublicData.generalSettings.items_per_page){const[r,a]=e.useState({current:1,pageSize:t,total:0,showSizeChanger:!1}),o=e.useMemo((()=>({limit:r.pageSize,offset:(r.current-1)*r.pageSize})),[r]);return{pagination:r,pagingPayload:o,setTotal:e=>{void 0!==e&&e!==r.total&&a({...r,total:e})},setCurrent:e=>{void 0!==e&&e!==r.current&&a({...r,current:e})}}}export{t as u};