"use strict";!function(){var o=0,n=document.querySelectorAll("#web-projects .project");function e(t,e){var s=n[o+1]||n[0],c=n[o-1]||n[n.length-1],r=n[o];"next"===t.dataset.direction?(r.classList.remove("project--shown"),r.classList.add("project--left"),s.classList.add("project--right"),setTimeout(function(){r.classList.remove("project--left"),s.classList.remove("project--right"),s.classList.add("project--shown")},500),o=o==n.length-1?0:o+1):(r.classList.remove("project--shown"),r.classList.add("project--right"),c.classList.add("project--left"),setTimeout(function(){r.classList.remove("project--right"),c.classList.remove("project--left"),c.classList.add("project--shown")},500),o=0==o?n.length-1:o-1)}document.getElementById("web-next").addEventListener("click",function(t){return e(t.target)}),document.getElementById("web-prev").addEventListener("click",function(t){return e(t.target)})}();
//# sourceMappingURL=theme.js.map
