//HTML
//<div id="elem" data-id="4hJ3s"></div>

let elem = document.getElementById("elem");
elem.getAttribute("data-id"); // "4hJ3s"

// element.setAttribute(<name>, <value>);
// ex
let aElement = document.querySelector("a");
aElement.setAttribute("href", "https://isitchristmas.com/");
// same as <a href="https://isitchristmas.com/"></a>
