import{e}from"./prefetch.helper-4a4e89e7.js";function r(r,t){const a=[];for(let i=e.dayjs(r);!i.isAfter(t,"day");i=i.add(1,"day"))a.push(i.format(e.DATE_KEY_FORMAT));return a}const t=(e,t)=>{const a=structuredClone(t),i=r(e.dateFrom,e.dateTo);if("every_year"===e.isEveryYear){null===a.every_year&&(a.every_year={});for(const r of i)"true"===e.isHoliday?a.every_year[r]=!0:"false"===e.isHoliday&&delete a.every_year[r];0===Object.keys(a.every_year).length&&(a.every_year=null)}else if("selected_year"===e.isEveryYear){const r=e.year.toString();null===a.specific_year&&(a.specific_year={}),void 0===a.specific_year[r]&&(a.specific_year[r]={});for(const t of i)"default"===e.isHoliday?delete a.specific_year[r][t]:"true"===e.isHoliday?a.specific_year[r][t]=!0:"false"===e.isHoliday&&(a.specific_year[r][t]=!1);0===Object.keys(a.specific_year[r]).length&&delete a.specific_year[r],0===Object.keys(a.specific_year).length&&(a.specific_year=null)}return a},a=(e,t)=>{const a=structuredClone(t),i=r(e.dateFrom,e.dateTo);if("selected_year"===e.isEveryYear){const r=e.year.toString();void 0===a[r]&&(a[r]={});for(const t of i)"default"===e.isHoliday?delete a[r][t]:"true"===e.isHoliday?a[r][t]=!0:"false"===e.isHoliday&&(a[r][t]=!1);0===Object.keys(a[r]).length&&delete a[r]}return 0===Object.keys(a).length?null:a};export{t as a,a as b};
