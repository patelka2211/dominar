import { isInstanceOfDominarTag } from "../tag/isInstanceOfDominarTag";
import { isInstanceOfDominarTagList } from "../tagList/isInstanceOfDominarTagList";
import { isInstanceOfParsedSVG } from "../svg-parser/isInstanceOfparsedSVG";
import { parsedSVG } from "../svg-parser/parsedSVG";
import { DominarTag } from "../tag/DominarTag";
import { DominarTagChildren, childrenInsertType } from "../tag/types";
import { DominarTagList } from "../tagList/DominarTagList";

/**
 * Inserts children into an HTML element.
 * @param {HTMLElement} root The root HTML element where the children will be inserted.
 * @param {DominarTagChildren} children The children to be inserted.
 * @param {childrenInsertType} [insertType="append"] The type of insertion. Default is "append".
 * @returns {HTMLElement} The modified root HTML element.
 */
export function insertChildren(
    root: HTMLElement,
    children: DominarTagChildren,
    insertType: childrenInsertType = "append"
): HTMLElement {
    if (typeof children === "string" || typeof children === "number")
        root[insertType](String(children));
    else if (isInstanceOfDominarTag(children))
        root[insertType]((children as DominarTag).renderedTag);
    else if (isInstanceOfDominarTagList(children)) {
        let renderedTagList = (children as DominarTagList).renderedTagList,
            tagListLength = renderedTagList.length;
        for (let index = 0; index < tagListLength; index++) {
            root[insertType](
                renderedTagList[
                    insertType === "append" ? index : tagListLength - 1 - index
                ]
            );
        }
    } else if (
        isInstanceOfParsedSVG(children) &&
        (children as parsedSVG).svg !== null
    )
        root[insertType]((children as parsedSVG).svg as SVGSVGElement);
    else if (children instanceof HTMLElement) root[insertType](children);
    return root;
}
