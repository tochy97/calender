var e={d:(a,r)=>{for(var t in r)e.o(r,t)&&!e.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:r[t]})},o:(e,a)=>Object.prototype.hasOwnProperty.call(e,a)},a={};e.d(a,{tj:()=>o,b4:()=>f,Nr:()=>c,Cp:()=>i});const r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=["January","Febuary","March","April","May","June","July","August","September","October","November","December"],s=(e,a)=>{switch(e<=-7&&(e+=7),a){case"Monday":e-=1;break;case"Tuesday":e-=2;break;case"Wednesday":e-=3;break;case"Thursday":e-=4;break;case"Friday":e-=5;break;case"Saturday":e-=6}return[e,"Sunday"]},n=(e,a)=>{switch(e){case 1:return a?29:28;case 3:case 5:case 8:case 10:return 30;default:return 31}},d=e=>e%4==0,u=(e,a)=>{let r=e[e.length-1].days.find((e=>e.index===a))?.day;return r="string"==typeof r?(e=>{switch(e){case"Monday":return"Tuesday";case"Tuesday":return"Wednesday";case"Wednesday":return"Thursday";case"Thursday":return"Friday";case"Friday":return"Saturday";case"Saturday":return"Sunday";case"Sunday":return"Monday";default:return""}})(r):"",r},y=e=>{let a=e[0].days.find((e=>1===e.index))?.day;return a="string"==typeof a?(e=>{switch(e){case"Monday":return"Sunday";case"Tuesday":return"Monday";case"Wednesday":return"Tuesday";case"Thursday":return"Wednesday";case"Friday":return"Thursday";case"Saturday":return"Friday";case"Sunday":return"Saturday";default:return""}})(a):"",a};function c(e,a,t){const s={days:[]};if(e<=-7)return s;const n=e+7;let d,u=0;for(;e<1;)e++,u++,s.days.push({});for(;e<n&&e<=t;)if(d={index:e,day:r[u]},s.days.push(d),e++,u++,7===u){u=0;break}for(;s.days.length<7;)e++,s.days.push({});return s}function o(e,a,r,n,d,u){const y={weeks:[],month:t[r],index:r,year:d,isLeap:n};for(;a>1;)a-=7;let o;for([a,u]=s(a,u);a<e;)o=c(a,0,e),o.days.length>0&&(void 0!==o.days[0]?.day||void 0!==o.days[6]?.day)&&y.weeks.push(o),a+=7;return y}function i(e){const a=[],t=e.getFullYear();let s=e.getMonth(),c=e.getDate();const i=s;let f;const h=d(t);let l=n(s,h),p=r[e.getDay()];for(;s<=11;)f=o(l,c,s,h,t,p),a.push(f),s++,p=u(f.weeks,l),l=n(s,h),c=1;for(s=i-1,l=n(s,h),c=n(s,h),p=y(a[0].weeks);s>=0;)f=o(l,c,s,h,t,p),a.unshift(f),s--,l=n(s,h),c=n(s,h),p=y(f.weeks);return a}function f(e){return new Promise(((a,r)=>{let t=[],s=new Date,n=s.getFullYear();for(;n>=e;)t=[...i(s),...t],n--,s=new Date(n,1,1);a(t)}))}var h=a.tj,l=a.b4,p=a.Nr,b=a.Cp;export{h as getMonth,l as getPast,p as getWeek,b as getYear};