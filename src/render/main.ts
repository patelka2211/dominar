import { insertChildren } from "../children/insertChildren";
import { DominarTagChildrenType } from "../tag/types";
import { RenderOptionsType } from "./types";

/**
 * Renders the children into an HTML element asynchronously.
 * @param {HTMLElement} root - The root HTML element.
 * @param {DominarTagChildrenType} children - The children to be rendered.
 * @param {RenderOptionsType} [options] - The rendering options.
 * @returns {Promise<void>} A promise that resolves when rendering is complete.
 */
export async function render(
    root: HTMLElement,
    children: DominarTagChildrenType,
    options: RenderOptionsType = {
        clearBeforeRender: true,
    }
): Promise<void> {
    if (!(root instanceof HTMLElement)) throw Error("Root is null!");

    let { clearBeforeRender, insertType } = options;

    if (typeof clearBeforeRender !== "boolean") clearBeforeRender = true;

    if (clearBeforeRender === true) {
        root.innerHTML = "";
        insertType = "append";
    }

    if (!insertType) insertType = "append";

    if (insertType !== "append" && insertType !== "prepend")
        throw Error(
            `'insertType' in options can be 'append' or 'prepend' but not '${insertType}'.`
        );
    insertChildren(root, children, insertType);
}
