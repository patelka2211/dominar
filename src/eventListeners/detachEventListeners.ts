import { detachListenerHelper } from "../helper/detachListener";
import { DominarEventListenersTypes } from "./types";

/**
 * Detaches event listeners from an HTML element.
 * @param {HTMLElement} element - The HTML element.
 * @param {DominarEventListenersTypes | DominarEventListenersTypes[]} eventListenerTypes - The type(s) of event listeners to be detached.
 * @returns {void}
 */
export function detachEventListeners(
    element: HTMLElement,
    eventListenerTypes:
        | DominarEventListenersTypes
        | DominarEventListenersTypes[]
): void {
    if (typeof eventListenerTypes === "string")
        detachListenerHelper(document.body, eventListenerTypes);
    else if (typeof eventListenerTypes === "object")
        eventListenerTypes.forEach((type) => {
            detachListenerHelper(element, type);
        });
}
