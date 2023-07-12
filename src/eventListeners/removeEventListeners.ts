import { DominarTagEventListenersType } from "./types";

/**
 * Removes event listeners from an HTML element.
 * @param {HTMLElement} element - The HTML element.
 * @param {DominarTagEventListenersType} eventListeners - The event listeners to be removed.
 * @returns {HTMLElement} The modified HTML element.
 */
export function removeEventListeners(
    element: HTMLElement,
    eventListeners: DominarTagEventListenersType
): HTMLElement {
    Object.entries(eventListeners).forEach(([type, listener]) => {
        element.removeEventListener(type, listener as (ev: Event) => void);
    });
    return element;
}
