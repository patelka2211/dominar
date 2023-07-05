import { DominarTagEventListeners } from "./types";

/**
 * Adds the specified event listeners to an HTML element.
 *
 * @param {HTMLElement} element The HTML element to add event listeners to.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
export function addEventListeners(
    element: HTMLElement,
    eventListeners: DominarTagEventListeners
): HTMLElement {
    Object.entries(eventListeners).forEach(([type, listener]) => {
        element.addEventListener(type, listener as (ev: Event) => void);
    });
    return element;
}
