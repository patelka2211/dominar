import { DominarEventListenersObject } from "./types";
/**
 * Assigns the specified event listeners to an HTML element.
 *
 * @param {HTMLElement} element The HTML element to assign event listeners to.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
export function assignEventListeners(
    element: HTMLElement,
    eventListeners: DominarEventListenersObject
): HTMLElement {
    Object.entries(eventListeners).forEach(([type, listener]) => {
        element.addEventListener(type, listener as (ev: Event) => void);
    });
    return element;
}
