!function(i,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?module.exports=e():i.viewportUnitsBuggyfillHacks=e()}(this,function(){"use strict";function i(i,e,r,o){"content"===r&&o.indexOf("viewport-units-buggyfill")>-1&&o.replace(n,"").split(";").forEach(function(n){var r=n.split(":");if(2===r.length){var o=r[0].trim();if("viewport-units-buggyfill"!==o){var s=r[1].trim();if(i.push([e,o,s]),t.test(s)){var a=s.replace(t,"-webkit-calc(");i.push([e,o,a])}}}})}var e,t=/calc\(/g,n=/[\"\']/g,r=window.navigator.userAgent,o=/MSIE [0-9]\./i.test(r),s=(/MSIE [0-8]\./i.test(r),!0),a=!0;return!0===o&&(a=!1,s=!1),{required:function(i){return i.isMobileSafari||o},initialize:function(i){e=i;var t=document.createElement("div");t.style.width="1vmax",s=""!==t.style.width,(e.isMobileSafari||e.isBadStockAndroid)&&(a=!1)},initializeEvents:function(i,e,t){i.force||o&&!i._listeningToResize&&(window.addEventListener("resize",t,!0),i._listeningToResize=!0)},findDeclarations:function(e,t,n,r){null!==n&&i(e,t,n,r)},overwriteDeclaration:function(i,e,t){return o&&"filter"===e&&(t=t.replace(/px/g,"")),t}}});