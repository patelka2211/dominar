type DominarTagEventListeners = {
    [K in keyof HTMLElementEventMap]?: (ev: HTMLElementEventMap[K]) => void;
};
/**
 * Adds the specified event listeners to an HTML element.
 *
 * @param {HTMLElement} element The HTML element to add event listeners to.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
function addEventListeners(
    element: HTMLElement,
    eventListeners: DominarTagEventListeners
): HTMLElement {
    Object.entries(eventListeners).forEach(([type, listener]) => {
        element.addEventListener(type, listener as (ev: Event) => void);
    });
    return element;
}
/**
 * Removes the specified event listeners from an HTML element.
 *
 * @param {HTMLElement} element The HTML element to remove event listeners from.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
function removeEventListeners(
    element: HTMLElement,
    eventListeners: DominarTagEventListeners
): HTMLElement {
    Object.entries(eventListeners).forEach(([type, listener]) => {
        element.removeEventListener(type, listener as (ev: Event) => void);
    });
    return element;
}

export { DominarTagEventListeners, addEventListeners, removeEventListeners };
