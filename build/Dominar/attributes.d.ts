import { HTMLElementAttributes } from "./types";
/**
 * Sets the attributes on an HTML element.
 * @function
 * @param {HTMLElement} element The HTML element to set attributes on.
 * @param {HTMLElementAttributes} attributes An object containing the attributes to set and their corresponding values.
 * @returns {void}
 */
export declare function setAttributes(element: HTMLElement, attributes: HTMLElementAttributes): void;
/**
 * Sets an attribute on an HTML element based on its name and value.
 * @param {HTMLElement} element The HTML element to set the attribute on.
 * @param {string} attributeName The name of the attribute to set.
 * @param {string | number | true} attributeValue The value to set for the attribute. If attribute value is a string, it is set directly. If it is a number, it is converted to a string before being set. If it is a boolean and true, the attribute is set with an empty value.
 */
export declare function setAttribute(element: HTMLElement, attributeName: string, attributeValue: string | number | true): void;
