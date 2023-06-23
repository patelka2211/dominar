import { DominarTagChildren, insertChildren, childrenInsertType } from "./tags";
type RenderOptions = {
    clearBeforeRender?: boolean;
    insertType?: childrenInsertType;
};
/**
 * Renders a DOM element or a list of elements to a specified HTML element.
 *
 * @param {HTMLElement} root The HTML element to render the DOM element(s) to.
 * @param {DominarTagChildren} children The DOM element(s) to render.
 * @param {Object} options An object containing rendering options.
 * @param {boolean} [options.clearBeforeRender=true] Whether to clear the root element before rendering.
 * @param {string} [options.insertType="append"] Whether to append or prepend the DOM element(s) to the root element.
 * @returns {Promise<void>} A Promise that resolves when the rendering is complete.
 * @throws {Error} If the root parameter is null or undefined.
 */
async function render(
    root: HTMLElement,
    children: DominarTagChildren,
    options: RenderOptions = {
        clearBeforeRender: true,
    }
): Promise<void> {
    let { clearBeforeRender, insertType } = options;

    if (typeof clearBeforeRender !== "boolean") clearBeforeRender = true;

    if (clearBeforeRender === true) {
        root.innerHTML = "";
        insertType = "append";
    }

    if (insertType === undefined) insertType = "append";

    if (insertType !== "append" && insertType !== "prepend")
        throw Error(
            `'insertType' in options can be 'append' or 'prepend' but not '${insertType}'.`
        );
    insertChildren(root, children, insertType);
}

export { render };
