"use strict";!function(){var t=0,o=document.querySelectorAll("#web-projects .project");document.getElementById("web-next").addEventListener("click",function(e){t<o.length-1?(o[t].classList.remove("project--shown"),t++):(console.log(t),t=0,o[o.length-1].classList.remove("project--shown")),setTimeout(function(){o[t].classList.add("project--shown")},800)})}();
//# sourceMappingURL=theme.js.map
