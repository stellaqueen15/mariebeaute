import{e as t}from"./prefetch.helper-4a4e89e7.js";function e(t,r){return(e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,r)}function r(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,e(t,r)}function o(e,r,o,n,u){const _=Math.max(r.absMinute-n,0),a=Math.min(o.absMinute+u,1440);return{datetime_start:e.hour(r.hour).minute(r.minute).second(0).format(t.DB_TIMESTAMP_FORMAT),abs_min_start:r.absMinute,utc_datetime_start:e.hour(r.hour).minute(r.minute).second(0).utc().format(t.DB_TIMESTAMP_FORMAT),datetime_end:e.hour(o.hour).minute(o.minute).second(0).format(t.DB_TIMESTAMP_FORMAT),abs_min_end:o.absMinute,busy_abs_min_start:_,busy_datetime_start:e.hour(0).minute(_).second(0).format(t.DB_TIMESTAMP_FORMAT),busy_abs_min_end:a,busy_datetime_end:e.hour(0).minute(a).second(0).format(t.DB_TIMESTAMP_FORMAT),buffer_before:n,buffer_after:u}}export{r as _,o as c};