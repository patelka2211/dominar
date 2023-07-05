export type DominarTagEventListeners = {
    [K in keyof HTMLElementEventMap]?: (ev: HTMLElementEventMap[K]) => void;
};
