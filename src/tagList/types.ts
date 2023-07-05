import { parsedSVG } from "../svg-parser/parsedSVG";
import { DominarTag } from "../tag/DominarTag";

export type DominarTagListData = (
    | string
    | number
    | DominarTag
    | parsedSVG
    | HTMLElement
)[];
