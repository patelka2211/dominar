import { DominarTagAttributes, setAttributes } from "./attributes";
import { DominarEventListeners, assignEventListeners } from "./eventListeners";

type DominarTagChildren =
    | string
    | number
    | DominarTag
    | DominarTagList
    | HTMLElement;
type DominarTagData = {
    attributes?: DominarTagAttributes;
    children?: DominarTagChildren;
    eventListeners?: DominarEventListeners;
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
     * @param {string} tagName - The name of the tag to create.
     * @param {DominarTagData} [tagData] - Optional data for initializing the tag.
     */
    constructor(tagName: string, tagData?: DominarTagData) {
        this.renderedTag = document.createElement(tagName);

        if (tagData !== undefined) {
            let { attributes, children, eventListeners } = tagData;

            // Set attributes
            if (attributes !== undefined)
                setAttributes(this.renderedTag, attributes);

            // Append children
            if (children !== undefined) {
                if (
                    typeof children === "string" ||
                    typeof children === "number"
                )
                    this.renderedTag.innerHTML += String(children);
                else if (children instanceof DominarTag)
                    this.renderedTag.append(children.renderedTag);
                else if (children instanceof DominarTagList)
                    children.renderedTagList.forEach((tag) => {
                        if (typeof tag === "string")
                            this.renderedTag.innerHTML += tag;
                        else this.renderedTag.append(tag);
                    });
                else if (children instanceof HTMLElement)
                    this.renderedTag.append(children);
            }

            // Assign event listeners
            if (eventListeners !== undefined)
                assignEventListeners(this.renderedTag, eventListeners);
        }
    }
}

/** Creates a new DominarTag instance with the specified tag name and optional tag data.
 *
 * @param {string} tagName - The name of the tag.
 * @param {DominarTagData} [tagData] - Optional tag data.
 * @returns {DominarTag} A new DominarTag instance.
 */
function tag<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    tagData?: DominarTagData
): DominarTag;
function tag(tagName: string, tagData?: DominarTagData): DominarTag;
/** Creates a new DominarTag instance with the specified tag name and optional tag data.
 *
 * @param {string} tagName - The name of the tag.
 * @param {DominarTagData} [tagData] - Optional tag data.
 * @returns {DominarTag} A new DominarTag instance.
 */
function tag(tagName: string, tagData?: DominarTagData): DominarTag {
    return new DominarTag(tagName, tagData);
}

/**
 * Represents a list of rendered HTML tags.
 */
class DominarTagList {
    /**
     * The array of rendered tags, which can be either strings or HTML elements.
     */
    public renderedTagList: (string | HTMLElement)[] = [];

    /**
     * Constructs a new instance of the DominarTagList class.
     * @param {Array<string | number | DominarTag | HTMLElement>} tags - The initial list of tags.
     */
    constructor(tags: (string | number | DominarTag | HTMLElement)[]) {
        tags.forEach((item) => {
            if (typeof item === "string" || typeof item === "number")
                this.renderedTagList.push(String(item));
            else if (item instanceof DominarTag)
                this.renderedTagList.push(item.renderedTag);
            else if (item instanceof HTMLElement)
                this.renderedTagList.push(item);
        });
    }
}

/**
 * Returns a new instance of DominarTagList that contains the given tags.
 * @param tags An array of tags to include in the DominarTagList.
 * @returns A new instance of DominarTagList.
 */
function tagList(
    ...tags: (string | number | DominarTag | HTMLElement)[]
): DominarTagList {
    return new DominarTagList(tags);
}

export { tag, tagList, DominarTag, DominarTagList, DominarTagChildren };
