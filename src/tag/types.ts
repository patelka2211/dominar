import { DominarTagAttributes } from "../attributes/types";
import { DominarTagEventListeners } from "../eventListeners/types";
import { parsedSVG } from "../svg-parser/parsedSVG";
import { DominarTagList } from "../tagList/DominarTagList";
import { DominarTag } from "./DominarTag";

export type childrenInsertType = "prepend" | "append";

export type DominarTagChildren =
    | string
    | number
    | DominarTag
    | DominarTagList
    | parsedSVG
    | HTMLElement;

export type DominarTagData = {
    attributes?: DominarTagAttributes;
    children?: DominarTagChildren;
    eventListeners?: DominarTagEventListeners;
};
