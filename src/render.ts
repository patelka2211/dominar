import { assignEventListeners } from "./eventListeners";
import { setAttribute } from "./attributes";
import {
    DominarEventListenersObject,
    DominarTag,
    DominarTagList,
    DominarObject,
    typeOfObject,
} from "./types";
/**
 * Renders a list of DominarTag and appends them to an HTML element.
 * @param {HTMLElement} element The HTML element to which the tag list will be appended.
 * @param {Array<string|Tag>} tagList The list of DominarTag to be rendered. Each tag can either be a string or an object of type DominarTag.
 * @returns {void}
 * @example
 * const myTagList = [
 *          "String before div tag",
 *          {
 *              div: {
 *                  id: "div1",
 *                  children: "This is div",
 *                  eventListeners: {
 *                      click: ()=>console.log("div clicked!")
 *                  }
 *              }
 *           },
 *          "String after div tag"
 *      ];
 *
 * const myElement = document.querySelector("#my-element");
 *
 * renderTagList(myElement, myTagList);
 */
function renderTagList(element: HTMLElement, tagList: DominarTagList): void {
    tagList.forEach((item) => {
        if (typeof item === "string") element.append(item);
        else element.append(renderSingleTag(item));
    });
}

/**
 * Renders a HTML element based on the given tag object.
 * @param {Tag} tag The tag object containing the tag name, attributes, children and event listeners.
 * @returns {HTMLElement|string} The rendered HTML element or an empty string in case of an error.
 */
function renderSingleTag(tag: DominarTag): HTMLElement | string {
    try {
        let [tagName, attributes] = Object.entries(tag)[0],
            renderedTag = document.createElement(tagName);

        for (const attributeName in attributes) {
            if (
                Object.prototype.hasOwnProperty.call(attributes, attributeName)
            ) {
                const attributeValue = attributes[attributeName];

                if (
                    attributeName === "children" &&
                    (typeof attributeValue === "object" ||
                        typeof attributeValue === "string")
                ) {
                    if (typeof attributeValue === "string")
                        renderedTag.append(attributeValue);
                    else if (typeOfObject(attributeValue) === "record")
                        renderedTag.append(
                            renderSingleTag(attributeValue as DominarTag)
                        );
                    else
                        renderTagList(
                            renderedTag,
                            attributeValue as DominarTagList
                        );
                } else if (
                    attributeName === "eventListeners" &&
                    typeof attributeValue === "object" &&
                    typeOfObject(attributeValue) === "record"
                ) {
                    assignEventListeners(
                        renderedTag,
                        attributeValue as DominarEventListenersObject
                    );
                } else if (typeof attributeValue === "object") {
                    console.warn(
                        `The ${attributeName} attribute is being ignored because it only accepts values of type string, number, or true.`
                    );
                } else if (
                    attributeValue !== undefined &&
                    typeof attributeValue !== "object"
                )
                    setAttribute(renderedTag, attributeName, attributeValue);
            }
        }

        return renderedTag;
    } catch (error) {
        console.error(error);
        return "";
    }
}
type RenderOptions = {
    clearBeforeRender?: boolean;
    insertType?: "prepend" | "append";
};
/**
 * Renders a DominarObject into a given root HTMLElement using the specified options.
 * @async
 * @function renderTag
 * @param {HTMLElement} root The root HTMLElement to render the DominarObject into.
 * @param {DominarObject | string} DominarObject The DominarObject to be rendered.
 * @param {RenderOptions} [options] The optional rendering options.
 * @param {boolean} [options.clearBeforeRender=true] Determines whether the root HTMLElement should be cleared before rendering.
 * @throws {TypeError} If the root parameter is not an HTMLElement or the DominarObject parameter is not a valid DominarObject.
 * @returns {Promise<void>} A Promise that resolves when the rendering is complete.
 */
export async function renderTag(
    root: HTMLElement,
    DominarObject: DominarObject | string,
    options: RenderOptions = {
        clearBeforeRender: true,
        insertType: "append",
    }
): Promise<void> {
    if (root === undefined)
        throw Error(`Parameter "root" can't be null, it must be HTML element.`);

    if (options.clearBeforeRender === undefined)
        options.clearBeforeRender = true;
    if (options.insertType === undefined) options.insertType = "append";

    if (options.clearBeforeRender)
        [root.innerHTML, options.insertType] = ["", "append"];

    if (typeof DominarObject === "string")
        root[options.insertType](DominarObject);
    else if (typeOfObject(DominarObject) === "record")
        root[options.insertType](renderSingleTag(DominarObject as DominarTag));
    else {
        let currentInnerHTML;
        if (options.insertType === "prepend")
            [currentInnerHTML, root.innerHTML] = [root.innerHTML, ""];
        renderTagList(root, DominarObject as DominarTagList);
        if (options.insertType === "prepend" && currentInnerHTML !== undefined)
            root.innerHTML += currentInnerHTML;
    }
}
