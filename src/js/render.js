var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { assignEventListeners } from "./eventListeners";
import { setAttribute } from "./attributes";
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
function renderTagList(element, tagList) {
    tagList.forEach((item) => {
        if (typeof item === "string")
            element.append(item);
        else
            element.append(renderSingleTag(item));
    });
}
/**
 * Renders a HTML element based on the given tag object.
 * @param {Tag} tag The tag object containing the tag name, attributes, children and event listeners.
 * @returns {HTMLElement|string} The rendered HTML element or an empty string in case of an error.
 */
function renderSingleTag(tag) {
    try {
        let [tagName, attributes] = Object.entries(tag)[0], renderedTag = document.createElement(tagName);
        for (const attributeName in attributes) {
            if (Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
                const attributeValue = attributes[attributeName];
                if (attributeName === "children" &&
                    (typeof attributeValue === "object" ||
                        typeof attributeValue === "string")) {
                    if (typeof attributeValue === "string")
                        renderedTag.append(attributeValue);
                    else if (attributeValue.length === undefined)
                        renderedTag.append(renderSingleTag(attributeValue));
                    else
                        renderTagList(renderedTag, attributeValue);
                }
                else if (attributeName === "eventListeners" &&
                    typeof attributeValue === "object" &&
                    attributeValue.length === undefined) {
                    assignEventListeners(renderedTag, attributeValue);
                }
                else if (typeof attributeValue === "object") {
                    console.warn(`The ${attributeName} attribute is being ignored because it only accepts values of type string, number, or true.`);
                }
                else if (attributeValue !== undefined &&
                    typeof attributeValue !== "object")
                    setAttribute(renderedTag, attributeName, attributeValue);
            }
        }
        return renderedTag;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
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
export function renderTag(root, DominarObject, options = {
    clearBeforeRender: true,
    insertType: "append",
}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (root === undefined)
            throw Error(`Parameter "root" can't be null, it must be HTML element.`);
        if (options.clearBeforeRender === undefined)
            options.clearBeforeRender = true;
        if (options.insertType === undefined)
            options.insertType = "append";
        if (options.clearBeforeRender)
            [root.innerHTML, options.insertType] = ["", "append"];
        if (typeof DominarObject === "string")
            root[options.insertType](DominarObject);
        else if (DominarObject.length === undefined)
            root[options.insertType](renderSingleTag(DominarObject));
        else {
            let currentInnerHTML;
            if (options.insertType === "prepend")
                [currentInnerHTML, root.innerHTML] = [root.innerHTML, ""];
            renderTagList(root, DominarObject);
            if (options.insertType === "prepend" && currentInnerHTML !== undefined)
                root.innerHTML += currentInnerHTML;
        }
    });
}
