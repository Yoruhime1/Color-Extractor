/**
 * 
 * @param {String} tagName 
 * @param {String} text 
 * @param {HTMLElement} parent 
 *@returns {HTMLElement}
 */
export function textInElement(tagName, text, parent) {
    if ("string" !== typeof tagName) {
        throw new Error("Required a tag name ! ");
    }
    var element = document.createElement(tagName);
    if ("undefined" !== typeof text) {
        element.appendChild(document.createTextNode(text));
    }
    if (parent instanceof HTMLElement) {
        parent.appendChild(element)
    }
    return element;
}