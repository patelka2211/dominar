import { DominarTagAttributes, setAttributes } from "./attributes";
import { DominarTagEventListeners, addEventListeners } from "./eventListeners";
import { parsedSVG } from "./svgParser";

type childrenInsertType = "prepend" | "append";

type DominarTagChildren =
    | string
    | number
    | DominarTag
    | DominarTagList
    | parsedSVG
    | HTMLElement;

/**
 * Inserts children into an HTML element.
 * @param {HTMLElement} root The root HTML element where the children will be inserted.
 * @param {DominarTagChildren} children The children to be inserted.
 * @param {childrenInsertType} [insertType="append"] The type of insertion. Default is "append".
 * @returns {HTMLElement} The modified root HTML element.
 */
function insertChildren(
    root: HTMLElement,
    children: DominarTagChildren,
    insertType: childrenInsertType = "append"
): HTMLElement {
    if (typeof children === "string" || typeof children === "number")
        root[insertType](String(children));
    else if (children instanceof DominarTag)
        root[insertType](children.renderedTag);
    else if (children instanceof DominarTagList) {
        let renderedTagList = children.renderedTagList,
            tagListLength = renderedTagList.length;
        for (let index = 0; index < tagListLength; index++) {
            root[insertType](
                renderedTagList[
                    insertType === "append" ? index : tagListLength - 1 - index
                ]
            );
        }
    } else if (children instanceof parsedSVG && children.svg !== null)
        root[insertType](children.svg);
    else if (children instanceof HTMLElement) root[insertType](children);
    return root;
}

type DominarTagData = {
    attributes?: DominarTagAttributes;
    children?: DominarTagChildren;
    eventListeners?: DominarTagEventListeners;
};

/**
 * Represents a DOM element wrapped in a DominarTag.
 */
class DominarTag {
    /**
     * The rendered DOM element of the tag.
     * @type {HTMLElement}
     */
    public renderedTag: HTMLElement;

    /**
     * Creates an instance of the DominarTag class.
     * @param {string} tagName The name of the tag to create.
     * @param {DominarTagData} [tagData] Optional data for initializing the tag.
     */
    constructor(tagName: string, tagData?: DominarTagData) {
        this.renderedTag = document.createElement(tagName);

        if (tagData !== undefined) {
            let { attributes, children, eventListeners } = tagData;

            // Set attributes
            if (attributes !== undefined)
                setAttributes(this.renderedTag, attributes);

            // Append children
            if (children !== undefined)
                insertChildren(this.renderedTag, children);

            // Add event listeners
            if (eventListeners !== undefined)
                addEventListeners(this.renderedTag, eventListeners);
        }
    }

    /**
     * Executes an additional action on the rendered HTML element.
     *
     * @param {function} performAction A callback function that performs the action on the HTML element. The function takes an `HTMLElement` as its argument and does not return any value.
     * @returns {DominarTag} The current instance of the DominarTag, allowing for method chaining.
     */
    additionally(performAction: (tag: HTMLElement) => void): DominarTag {
        performAction(this.renderedTag);
        return this;
    }
}

/** Creates a new DominarTag instance with the specified tag name and optional tag data.
 *
 * @param {string} tagName The name of the tag.
 * @param {DominarTagData} [tagData] Optional tag data.
 * @returns {DominarTag} A new DominarTag instance.
 */
function tag<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    tagData?: DominarTagData
): DominarTag;
function tag(tagName: string, tagData?: DominarTagData): DominarTag;
/** Creates a new DominarTag instance with the specified tag name and optional tag data.
 *
 * @param {string} tagName The name of the tag.
 * @param {DominarTagData} [tagData] Optional tag data.
 * @returns {DominarTag} A new DominarTag instance.
 */
function tag(tagName: string, tagData?: DominarTagData): DominarTag {
    return new DominarTag(tagName, tagData);
}

type DominarTagListData = (
    | string
    | number
    | DominarTag
    | parsedSVG
    | HTMLElement
)[];

/**
 * Represents a list of rendered HTML tags.
 */
class DominarTagList {
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
            else if (tag instanceof DominarTag)
                this.renderedTagList.push(tag.renderedTag);
            else if (tag instanceof parsedSVG && tag.svg !== null)
                this.renderedTagList.push(tag.svg);
            else if (tag instanceof HTMLElement) this.renderedTagList.push(tag);
        });
    }
}

/**
 * Returns a new instance of DominarTagList that contains the given tags.
 * @param tags An array of tags to include in the DominarTagList.
 * @returns A new instance of DominarTagList.
 */
function tagList(...tags: DominarTagListData): DominarTagList {
    return new DominarTagList(tags);
}

export {
    tag,
    tagList,
    DominarTag,
    DominarTagList,
    DominarTagChildren,
    insertChildren,
    childrenInsertType,
};
