import { DominarTagAttributes } from "./types";
/**
 * Sets the attributes of an HTML element based on the provided object.
 *
 * @param {HTMLElement} element The HTML element to set the attributes on.
 * @param {Object} attributes An object containing the attribute names and values to set.
 * @returns {HTMLElement} The same HTML element with the updated attributes.
 */
export function setAttributes(
    element: HTMLElement,
    attributes: DominarTagAttributes
): HTMLElement {
    for (const attributeName in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
            let attributeValue = attributes[attributeName];
            if (typeof attributeValue === "string") {
                if (attributeValue === "") attributeValue = " ";
                element.setAttribute(attributeName, attributeValue);
            } else if (typeof attributeValue === "number")
                element.setAttribute(attributeName, attributeValue.toString());
            else if (attributeValue === true)
                element.setAttribute(attributeName, "");
        }
    }
    return element;
}
