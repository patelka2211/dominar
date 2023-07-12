import { isInstanceOfParsedSVG } from "../svg-parser/isInstanceOfparsedSVG";
import { parsedSVG } from "../svg-parser/parsedSVG";
import { DominarTag } from "../tag/DominarTag";
import { isInstanceOfDominarTag } from "../tag/isInstanceOfDominarTag";
import { DominarTagListDataType } from "./types";

/**
 * Represents a list of Dominar tags.
 */
export class DominarTagList {
    /**
     * The rendered list of tags.
     */
    public renderedTagList: (string | HTMLElement | SVGSVGElement)[] = [];

    /**
     * Creates a Dominar tag list instance.
     * @param {DominarTagListDataType} tags - The tags to be included in the list.
     */
    constructor(tags: DominarTagListDataType) {
        tags.forEach((tag) => {
            if (typeof tag === "string" || typeof tag === "number")
                this.renderedTagList.push(String(tag));
            else if (isInstanceOfDominarTag(tag))
                this.renderedTagList.push((tag as DominarTag).renderedTag);
            else if (
                isInstanceOfParsedSVG(tag) &&
                (tag as parsedSVG).svg !== null
            )
                this.renderedTagList.push(
                    (tag as parsedSVG).svg as SVGSVGElement
                );
            else if (tag instanceof HTMLElement) this.renderedTagList.push(tag);
        });
    }
}
