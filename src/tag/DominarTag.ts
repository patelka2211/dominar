import { setAttributes } from "../attributes/setAttributes";
import { insertChildren } from "../children/insertChildren";
import { addEventListeners } from "../eventListeners/addEventListeners";
import { attachEventListeners } from "../eventListeners/attachEventListeners";
import { DominarTagDataType } from "./types";

/**
 * Represents a Dominar tag.
 */
export class DominarTag {
    /**
     * The rendered HTML tag element.
     */
    public renderedTag: HTMLElement;

    /**
     * Creates a Dominar tag instance.
     * @param {string} tagName - The name of the HTML tag.
     * @param {DominarTagDataType} tagData - The data for the tag.
     */
    constructor(tagName: string, tagData?: DominarTagDataType) {
        this.renderedTag = document.createElement(tagName);

        if (tagData) {
            let {
                attributes,
                children,
                addEventListeners: eventsToBeAdded,
                attachEventListeners: eventsToBeAttached,
            } = tagData;

            // Set attributes
            if (attributes) setAttributes(this.renderedTag, attributes);

            // Append children
            if (children) insertChildren(this.renderedTag, children);

            // Add event listeners
            if (eventsToBeAdded)
                addEventListeners(this.renderedTag, eventsToBeAdded);

            // Attach event listeners
            if (eventsToBeAttached)
                attachEventListeners(this.renderedTag, eventsToBeAttached);
        }
    }

    /**
     * Performs an additional action on the rendered tag.
     * @param {Function} performAction - The action to be performed on the rendered tag.
     * @returns {DominarTag} The Dominar tag instance.
     */
    additionally(performAction: (tag: HTMLElement) => void): DominarTag {
        performAction(this.renderedTag);
        return this;
    }
}
