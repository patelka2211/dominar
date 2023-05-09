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
    [AttributeName: string]:
        | string
        | number
        | true

        // "children" key types
        | DominarObject // Type "object"

        // "eventListeners" key types
        | DominarEventListenersObject // Type "object"

        // For optional keys
        | undefined;

    children?:
        | DominarObject // Type "object"
        | string;

    eventListeners?: DominarEventListenersObject; // Type "object"
};
