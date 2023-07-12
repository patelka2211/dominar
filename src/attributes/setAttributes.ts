import { DominarTagAttributesType } from "./types";

/**
 * Sets the attributes of an HTML element.
 * @param {HTMLElement} element - The HTML element.
 * @param {DominarTagAttributesType} attributes - The attributes to be set.
 * @returns {HTMLElement} The modified HTML element.
 */
export function setAttributes(
    element: HTMLElement,
    attributes: DominarTagAttributesType
): HTMLElement {
    for (const attributeName in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
            let attributeValue = attributes[attributeName];
            if (
                typeof attributeValue === "string" ||
                typeof attributeValue === "number"
            )
                element.setAttribute(
                    attributeName,
                    attributeValue === "" ? " " : String(attributeValue)
                );
            else element.setAttribute(attributeName, "");
        }
    }
    return element;
}
