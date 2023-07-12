import { DominarTagAttributesType } from "../attributes/types";
import { DominarTagEventListenersType } from "../eventListeners/types";
import { parsedSVG } from "../svg-parser/parsedSVG";
import { DominarTagList } from "../tagList/DominarTagList";
import { DominarTag } from "./DominarTag";

/**
 * Represents the type of insertion for tag children.
 */
export type childrenInsertType = "prepend" | "append";

/**
 * Represents the children of a Dominar tag.
 */
export type DominarTagChildrenType =
    | string
    | number
    | DominarTag
    | DominarTagList
    | parsedSVG
    | HTMLElement;

/**
 * Represents the data for a Dominar tag.
 */
export type DominarTagDataType = {
    attributes?: DominarTagAttributesType;
    children?: DominarTagChildrenType;
    addEventListeners?: DominarTagEventListenersType;
    attachEventListeners?: DominarTagEventListenersType;
};
