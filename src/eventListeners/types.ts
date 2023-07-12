/**
 * Represents the event listeners of a Dominar tag.
 */
export type DominarTagEventListenersType = {
    [K in keyof HTMLElementEventMap]?: (ev: HTMLElementEventMap[K]) => void;
};

/**
 * Represents the types of event listeners supported by HTMLElementEventMap.
 */
export type DominarEventListenersTypes = keyof HTMLElementEventMap;
