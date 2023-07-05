import { setAttributes } from "../attributes/setAttributes";
import { insertChildren } from "../children/insertChildren";
import { addEventListeners } from "../eventListeners/addEventListeners";
import { DominarTagData } from "./types";

/**
 * Represents a DOM element wrapped in a DominarTag.
 */
export class DominarTag {
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

        if (tagData) {
            let { attributes, children, eventListeners } = tagData;

            // Set attributes
            if (attributes) setAttributes(this.renderedTag, attributes);

            // Append children
            if (children) insertChildren(this.renderedTag, children);

            // Add event listeners
            if (eventListeners)
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
