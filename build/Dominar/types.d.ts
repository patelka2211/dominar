export type DominarObject = DominarTag | DominarTagList;
export type DominarTag = {
    [K in keyof HTMLElementTagNameMap]?: DominarTagData;
} & {
    [tagName: string]: DominarTagData;
};
export type DominarTagList = (DominarTag | string)[];
export type DominarEventListenersObject = {
    [K in keyof HTMLElementEventMap]?: (ev: HTMLElementEventMap[K]) => void;
} & {
    [type: string]: EventListenerOrEventListenerObject;
};
export type HTMLElementAttributes = {
    [AttributeName: string]: string | number | true;
};
export type DominarTagData = {
    [AttributeName: string]: string | number | true | DominarObject | DominarEventListenersObject | undefined;
    children?: DominarObject | string;
    eventListeners?: DominarEventListenersObject;
};
