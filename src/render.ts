import { DominarTag, DominarTagList } from "./tags";
import { RenderOptions } from "./types";
/**
 * Renders a DOM element or a list of elements to a specified HTML element.
 *
 * @param {HTMLElement} root The HTML element to render the DOM element(s) to.
 * @param {string | number | DominarTag | DominarTagList} DominarObject The DOM element(s) to render.
 * @param {Object} options An object containing rendering options.
 * @param {boolean} [options.clearBeforeRender=true] Whether to clear the root element before rendering.
 * @param {string} [options.insertType="append"] Whether to append or prepend the DOM element(s) to the root element.
 * @returns {Promise<void>} A Promise that resolves when the rendering is complete.
 * @throws {Error} If the root parameter is null or undefined.
 */
export async function render(
    root: HTMLElement,
    DominarObject: string | number | DominarTag | DominarTagList | null,
    options: RenderOptions = {
        clearBeforeRender: true,
        insertType: "append",
    }
): Promise<void> {
    if (DominarObject === null) return;
    if (root === undefined)
        throw Error(`Parameter "root" can't be null, it must be HTML element.`);
    if (options.clearBeforeRender === undefined)
        options.clearBeforeRender = true;
    if (options.insertType === undefined) options.insertType = "append";
    if (options.clearBeforeRender)
        [root.innerHTML, options.insertType] = ["", "append"];

    if (typeof DominarObject === "string")
        root[options.insertType](DominarObject);
    else if (typeof DominarObject === "number")
        root[options.insertType](DominarObject.toString());
    else if (DominarObject instanceof DominarTag)
        root[options.insertType](DominarObject.renderedTag);
    else if (DominarObject instanceof DominarTagList) {
        let currentInnerHTML;
        if (options.insertType === "prepend")
            [currentInnerHTML, root.innerHTML] = [root.innerHTML, ""];
        DominarObject.renderedTagList.forEach((tag) => {
            root.append(tag);
        });
        if (options.insertType === "prepend" && currentInnerHTML !== undefined)
            root.innerHTML += currentInnerHTML;
    }
}
