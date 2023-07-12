import { attachListenerHelper } from "../helper/attachListener";
import { DominarTagEventListenersType } from "./types";

/**
 * Attaches event listeners to an HTML element.
 * @param {HTMLElement} element - The HTML element.
 * @param {DominarTagEventListenersType} eventListeners - The event listeners to be attached.
 * @returns {void}
 */
export function attachEventListeners(
    element: HTMLElement,
    eventListeners: DominarTagEventListenersType
): void {
    Object.entries(eventListeners).forEach(([type, listener]) => {
        attachListenerHelper(element, type, listener);
    });
}
