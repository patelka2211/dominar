type DominarTagAttributes = {
    [attributeName: string]: string | number | true;
};
type DominarEventListeners = {
    [K in keyof HTMLElementEventMap]?: (ev: HTMLElementEventMap[K]) => void;
};
type RenderOptions = {
    clearBeforeRender?: boolean;
    insertType?: "prepend" | "append";
};

/**
 * A class representing a DOM element with methods for setting attributes, adding children,
 * and adding event listeners.
 */
declare class DominarTag {
    renderedTag: HTMLElement;
    private attributesSet;
    private childrenSet;
    private eventListenersSet;
    /**
     * Constructs a new instance of the DominarTag class with the specified tag name.
     *
     * @param {string} tagName The name of the HTML tag to create.
     */
    constructor(tagName: string);
    /**
     * Sets the attributes of the DOM element.
     *
     * @param {DominarTagAttributes} attributes An object containing the attributes to set.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    setAttributes(attributes: DominarTagAttributes): DominarTag;
    /**
     * Adds children to the DOM element.
     *
     * @param {...(string | number | DominarTag | DominarTagList)} children The children to add.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    addChildren(...children: (string | number | DominarTag | DominarTagList)[]): DominarTag;
    /**
     * Adds event listeners to the DOM element.
     *
     * @param {DominarEventListeners} eventListeners An object containing the event listeners to add.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    addEventListeners(eventListeners: DominarEventListeners): DominarTag;
}
/**
 * Creates a new instance of DominarTag.
 * @param {string} tagName The tag name for the new DominarTag instance.
 * @returns {DominarTag} A new instance of DominarTag.
 */
declare function tag<K extends keyof HTMLElementTagNameMap>(tagName: K): DominarTag;
declare function tag(tagName: string): DominarTag;
/**
 * Represents a list of rendered HTML tags.
 */
declare class DominarTagList {
    renderedTagList: (string | HTMLElement)[];
    /**
     * Creates a new instance of DominarTagList.
     * @param {(string | number | DominarTag)[]} tags The list of tags to render.
     */
    constructor(tags: (string | number | DominarTag)[]);
}
/**
 * Returns a new instance of DominarTagList that contains the given tags.
 * @param tags An array of tags to include in the DominarTagList.
 * @returns A new instance of DominarTagList.
 */
declare function tagList(...tags: (string | number | DominarTag)[]): DominarTagList;

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
declare function render(root: HTMLElement, DominarObject: string | number | DominarTag | DominarTagList | null, options: RenderOptions): Promise<void>;

/**
 * Sets the attributes of an HTML element based on the provided object.
 *
 * @param {HTMLElement} element The HTML element to set the attributes on.
 * @param {Object} attributes An object containing the attribute names and values to set.
 * @returns {HTMLElement} The same HTML element with the updated attributes.
 */
declare function setAttributes(element: HTMLElement, attributes: DominarTagAttributes): HTMLElement;

/**
 * Assigns the specified event listeners to an HTML element.
 *
 * @param {HTMLElement} element The HTML element to assign event listeners to.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
declare function assignEventListeners(element: HTMLElement, eventListeners: DominarEventListeners): HTMLElement;

export { assignEventListeners, render, setAttributes, tag, tagList };
