import { getAcceptableExt } from "./check";
import { textInElement } from "./textInElement";

var bottom = document.querySelector(".bottom");

/**
 * @param {HTMLElement}
 */
export function displayExtensions() {

    var acceptableExtensions = getAcceptableExt();
    
    if (acceptableExtensions.length) {
        var divExt = document.createElement("div");
        divExt.setAttribute("class", "col-sm-3 d-flex justify-content-center");
        var headExt = textInElement("h6", "Acceptable extensions", divExt);
        headExt.setAttribute("id", "acceptableExt");
        var ul = textInElement("ul", " ", divExt);
        //  ul.setAttribute("class", "m-1 ");
        for (var key in acceptableExtensions) {
            var li = textInElement("li", " ", ul);
            var a = textInElement("a", acceptableExtensions[key], li);
        }
        bottom.appendChild(divExt);
    }
    
}
