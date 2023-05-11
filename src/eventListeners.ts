import { DominarEventListenersObject } from "./types";
/**
 * Assigns event listeners to an HTML element based on an object of event listener functions.
 * @param {HTMLElement} element The HTML element to which the event listeners will be assigned.
 * @param {DominarEventListenersObject} eventListeners An object containing event listener functions keyed by their respective event types.
 * @return {void}
 * @example
 * // Assigning click and mouseover event listeners to a button element:
 * const button = document.querySelector('#myButton');
 * const eventListeners = {
 *     click: () => {
 *         console.log("Button clicked!");
 *     },
 *     mouseover: () => {
 *         console.log("Mouse over button!");
 *     },
 * };
 * assignEventListeners(button, eventListeners);
 */
export function assignEventListeners(
    element: HTMLElement,
    eventListeners: DominarEventListenersObject
): void {
    for (const type in eventListeners) {
        if (Object.prototype.hasOwnProperty.call(eventListeners, type)) {
            const listener =
                eventListeners[type as keyof typeof eventListeners];

            if (typeof listener === "function")
                element.addEventListener(type, listener);
            else
                console.warn(
                    `"${type}" type of event listener is not assigned because it is not function.`
                );
        }
    }
}

assignEventListeners(document.body, {
    click: (ev: MouseEvent) => {
        console.log();
    },
});
