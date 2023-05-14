export type DominarTagAttributes = {
    [attributeName: string]: string | number | true;
};

export type DominarEventListeners = {
    [K in keyof HTMLElementEventMap]?: (ev: HTMLElementEventMap[K]) => void;
};

export type RenderOptions = {
    clearBeforeRender?: boolean;
    insertType?: "prepend" | "append";
};
