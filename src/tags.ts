import { setAttributes } from "./attributes";
import { assignEventListeners } from "./eventListeners";
import { DominarEventListenersObject, DominarTagAttributes } from "./types";

/**
 * A class representing a DOM element with methods for setting attributes, adding children,
 * and adding event listeners.
 */
class DominarTag {
    public renderedTag: HTMLElement;
    private attributesSet = false;
    private childrenSet = false;
    private eventListenersSet = false;

    /**
     * Constructs a new instance of the DominarTag class with the specified tag name.
     *
     * @param {string} tagName The name of the HTML tag to create.
     */
    constructor(tagName: string) {
        this.renderedTag = document.createElement(tagName);
    }

    /**
     * Sets the attributes of the DOM element.
     *
     * @param {DominarTagAttributes} attributes An object containing the attributes to set.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    public setAttributes(attributes: DominarTagAttributes): DominarTag {
        if (this.attributesSet) return this;
        setAttributes(this.renderedTag, attributes);
        this.attributesSet = true;
        return this;
    }

    /**
     * Adds children to the DOM element.
     *
     * @param {...(string | number | DominarTag | DominarTagList)} children The children to add.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    public addChildren(
        ...children: (string | number | DominarTag | DominarTagList)[]
    ): DominarTag {
        if (this.childrenSet) return this;
        children.forEach((child) => {
            if (typeof child === "string") this.renderedTag.append(child);
            else if (typeof child === "number")
                this.renderedTag.append(child.toString());
            else if (child instanceof DominarTag)
                this.renderedTag.append(child.renderedTag);
            else if (child instanceof DominarTagList)
                child.renderedTagList.forEach((renderedTag) => {
                    this.renderedTag.append(renderedTag);
                });
        });
        this.childrenSet = true;
        return this;
    }

    /**
     * Adds event listeners to the DOM element.
     *
     * @param {DominarEventListenersObject} eventListeners An object containing the event listeners to add.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    public addEventListeners(
        eventListeners: DominarEventListenersObject
    ): DominarTag {
        if (this.eventListenersSet) return this;
        assignEventListeners(this.renderedTag, eventListeners);
        this.eventListenersSet = true;
        return this;
    }
}

/**
 * Creates a new instance of DominarTag.
 * @param {string} tagName The tag name for the new DominarTag instance.
 * @returns {DominarTag} A new instance of DominarTag.
 */
function Tag<K extends keyof HTMLElementTagNameMap>(tagName: K): DominarTag;
function Tag(tagName: string): DominarTag;
function Tag(tagName: string): DominarTag {
    return new DominarTag(tagName);
}

/**
 * Represents a list of rendered HTML tags.
 */
class DominarTagList {
    public renderedTagList: (string | HTMLElement)[] = [];
    /**
     * Creates a new instance of DominarTagList.
     * @param {(string | number | DominarTag)[]} tags The list of tags to render.
     */
    constructor(tags: (string | number | DominarTag)[]) {
        tags.forEach((tag) => {
            if (typeof tag === "string") this.renderedTagList.push(tag);
            else if (typeof tag === "number")
                this.renderedTagList.push(tag.toString());
            else if (tag instanceof DominarTag)
                this.renderedTagList.push(tag.renderedTag);
        });
    }
}

/**
 * Returns a new instance of DominarTagList that contains the given tags.
 * @param tags An array of tags to include in the DominarTagList.
 * @returns A new instance of DominarTagList.
 */
function TagList(...tags: (string | number | DominarTag)[]): DominarTagList {
    return new DominarTagList(tags);
}

export { DominarTag, Tag, DominarTagList, TagList };
