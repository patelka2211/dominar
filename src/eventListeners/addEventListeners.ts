import { DominarTagEventListenersType } from "./types";

/**
 * Adds event listeners to an HTML element.
 * @param {HTMLElement} element - The HTML element.
 * @param {DominarTagEventListenersType} eventListeners - The event listeners to be added.
 * @returns {HTMLElement} The modified HTML element.
 */
export function addEventListeners(
    element: HTMLElement,
    eventListeners: DominarTagEventListenersType
): HTMLElement {
    Object.entries(eventListeners).forEach(([type, listener]) => {
        element.addEventListener(type, listener as (ev: Event) => void);
    });
    return element;
}
