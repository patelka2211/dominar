import { DominarTag, DominarTagChildren, DominarTagList } from "./tags";
type RenderOptions = {
    clearBeforeRender?: boolean;
    insertType?: "prepend" | "append";
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

    if (clearBeforeRender === undefined) {
        clearBeforeRender = true;
        root.innerHTML = "";
    }
    if (clearBeforeRender === true || insertType === undefined)
        insertType = "append";

    let currentChildren;

    if (insertType === "prepend") {
        currentChildren = [];
        let children = root.children;
        for (let index = 0; index < children.length; index++) {
            const child = children.item(index);
            if (child !== null) currentChildren.push(child);
        }
        root.innerHTML = "";
    }

    if (typeof children === "string" || typeof children === "number")
        root.innerHTML += String(children);
    else if (children instanceof DominarTag) root.append(children.renderedTag);
    else if (children instanceof DominarTagList)
        children.renderedTagList.forEach((child) => {
            if (typeof child === "string") root.innerHTML += child;
            else root.append(child);
        });
    else if (children instanceof HTMLElement) root.append(children);

    if (insertType === "prepend" && currentChildren !== undefined)
        currentChildren.forEach((child) => {
            root.append(child);
        });
}

export { render };
