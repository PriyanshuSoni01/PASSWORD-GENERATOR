(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const m=document.querySelector("[data-lengthSlider]"),w=document.querySelector("[data-lengthNumber]"),h=document.querySelector("[data-passwordDisplay]"),q=document.querySelector("[data-copy]"),x=document.querySelector("[data-copyMsg]"),y=document.querySelector("#uppercase"),S=document.querySelector("#lowercase"),C=document.querySelector("#numbers"),b=document.querySelector("#symbols"),p=document.querySelector("[data-indicator]"),v=document.querySelector(".generateBtn"),k=document.querySelectorAll("input[type=checkbox]"),g="~`;/<>|?!@#$%^&*()_-+";let i="",c=10,l=0;u();a("#ccc");function u(){m.value=c,w.innerText=c}function a(e){p.style.backgroundColor=e,p.style.boxShadow=`0px 0px 12px 1px ${e}`}function d(e,t){return Math.floor(Math.random()*(t-e))+e}function L(){return d(0,9)}function E(){return String.fromCharCode(d(97,123))}function M(){return String.fromCharCode(d(65,91))}function N(){const e=d(0,g.length);return g.charAt(e)}function I(){let e=!1,t=!1,n=!1,s=!1;y.checked&&(e=!0),S.checked&&(t=!0),C.checked&&(n=!0),b.checked&&(s=!0),e&&t&&(n||s)&&c>=8?a("#0f0"):(n||s)&&(t||e)&&c>=6?a("#ff0"):a("#f00")}async function O(){try{await navigator.clipboard.writeText(h.value),alert("Your Password is Copied to Clipboard!!")}catch{x.innerText="failed"}}function P(e){for(let n=e.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1)),o=e[n];e[n]=e[s],e[s]=o}let t="";return e.forEach(n=>t+=n),t}function A(){l=0,k.forEach(e=>{e.checked&&l++}),c<l&&(c=l,u())}k.forEach(e=>{e.addEventListener("change",A)});m.addEventListener("input",e=>{c=e.target.value,u()});q.addEventListener("click",()=>{h.value&&O()});v.addEventListener("click",()=>{if(l==0)return;c<l&&(c=l,u()),console.log("Starting the Journey"),i="";let e=[];y.checked&&e.push(M),S.checked&&e.push(E),C.checked&&e.push(L),b.checked&&e.push(N);for(let t=0;t<e.length;t++)i+=e[t]();console.log("Compulsory adddition done");for(let t=0;t<c-e.length;t++){let n=d(0,e.length);console.log("randIndex"+n),i+=e[n]()}console.log("Remaining adddition done"),i=P(Array.from(i)),console.log("Shuffling done"),h.value=i,console.log("UI adddition done"),I()});
