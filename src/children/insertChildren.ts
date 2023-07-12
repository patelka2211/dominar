import { isInstanceOfParsedSVG } from "../svg-parser/isInstanceOfparsedSVG";
import { parsedSVG } from "../svg-parser/parsedSVG";
import { DominarTag } from "../tag/DominarTag";
import { isInstanceOfDominarTag } from "../tag/isInstanceOfDominarTag";
import { DominarTagChildrenType, childrenInsertType } from "../tag/types";
import { DominarTagList } from "../tagList/DominarTagList";
import { isInstanceOfDominarTagList } from "../tagList/isInstanceOfDominarTagList";

/**
 * Inserts children into an HTML element.
 * @param {HTMLElement} root - The root HTML element.
 * @param {DominarTagChildrenType} children - The children to be inserted.
 * @param {childrenInsertType} [insertType] - The type of insertion ("prepend" or "append").
 * @returns {HTMLElement} The modified root HTML element.
 */
export function insertChildren(
    root: HTMLElement,
    children: DominarTagChildrenType,
    insertType: childrenInsertType = "append"
): HTMLElement {
    if (typeof children === "string" || typeof children === "number")
        root[insertType](String(children));
    else if (isInstanceOfDominarTag(children))
        root[insertType]((children as DominarTag).renderedTag);
    else if (isInstanceOfDominarTagList(children))
        for (
            let renderedTagList = (children as DominarTagList).renderedTagList,
                tagListLength = renderedTagList.length,
                index = 0;
            index < tagListLength;
            index++
        )
            root[insertType](
                renderedTagList[
                    insertType === "append" ? index : tagListLength - 1 - index
                ]
            );
    else if (
        isInstanceOfParsedSVG(children) &&
        (children as parsedSVG).svg !== null
    )
        root[insertType]((children as parsedSVG).svg as SVGSVGElement);
    else if (children instanceof HTMLElement) root[insertType](children);
    return root;
}
