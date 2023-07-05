import { isInstanceOfDominarTag } from "../tag/isInstanceOfDominarTag";
import { isInstanceOfParsedSVG } from "../svg-parser/isInstanceOfparsedSVG";
import { parsedSVG } from "../svg-parser/parsedSVG";
import { DominarTag } from "../tag/DominarTag";
import { DominarTagListData } from "./types";

/**
 * Represents a list of rendered HTML tags.
 */
export class DominarTagList {
    /**
     * The array of rendered tags, which can be either strings or HTML elements.
     */
    public renderedTagList: (string | HTMLElement | SVGSVGElement)[] = [];

    /**
     * Constructs a new instance of the DominarTagList class.
     * @param {DominarTagListData} tags The initial list of tags.
     */
    constructor(tags: DominarTagListData) {
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
