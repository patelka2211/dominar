import { parsedSVG } from "../svg-parser/parsedSVG";
import { DominarTag } from "../tag/DominarTag";

/**
 * Represents the data for a Dominar tag list.
 */
export type DominarTagListDataType = (
    | string
    | number
    | DominarTag
    | parsedSVG
    | HTMLElement
)[];
