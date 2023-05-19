type DominarTagAttributes = {
    [attributeName: string]: string | number | true;
};
/**
 * Sets the attributes of an HTML element based on the provided object.
 *
 * @param {HTMLElement} element The HTML element to set the attributes on.
 * @param {Object} attributes An object containing the attribute names and values to set.
 * @returns {HTMLElement} The same HTML element with the updated attributes.
 */
declare function setAttributes(element: HTMLElement, attributes: DominarTagAttributes): HTMLElement;

type DominarTagEventListeners = {
    [K in keyof HTMLElementEventMap]?: (ev: HTMLElementEventMap[K]) => void;
};
/**
 * Adds the specified event listeners to an HTML element.
 *
 * @param {HTMLElement} element The HTML element to add event listeners to.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
declare function addEventListeners(element: HTMLElement, eventListeners: DominarTagEventListeners): HTMLElement;
/**
 * Removes the specified event listeners from an HTML element.
 *
 * @param {HTMLElement} element The HTML element to remove event listeners from.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
declare function removeEventListeners(element: HTMLElement, eventListeners: DominarTagEventListeners): HTMLElement;

/**
 * Represents a parsed SVG.
 */
declare class parsedSVG {
    /**
     * The root SVG element of the parsed SVG.
     * @type {SVGSVGElement | null}
     */
    svg: SVGSVGElement | null;
    /**
     * Creates a new parsedSVG instance.
     * @constructor
     * @param {string} svgString The SVG string to be parsed.
     */
    constructor(svgString: string);
}
/**
 * Parses an SVG string and returns a parsedSVG instance.
 * @function
 * @param {string} svgString The SVG string to be parsed.
 * @returns {parsedSVG} The parsed SVG.
 */
declare function SVGParser(svgString: string): parsedSVG;

type childrenInsertType = "prepend" | "append";
type DominarTagChildren = string | number | DominarTag | DominarTagList | parsedSVG | HTMLElement;
/**
 * Inserts children into an HTML element.
 * @param {HTMLElement} root The root HTML element where the children will be inserted.
 * @param {DominarTagChildren} children The children to be inserted.
 * @param {childrenInsertType} [insertType="append"] The type of insertion. Default is "append".
 * @returns {HTMLElement} The modified root HTML element.
 */
declare function insertChildren(root: HTMLElement, children: DominarTagChildren, insertType?: childrenInsertType): HTMLElement;
type DominarTagData = {
    attributes?: DominarTagAttributes;
    children?: DominarTagChildren;
    eventListeners?: DominarTagEventListeners;
};
/**
 * Represents a DOM element wrapped in a DominarTag.
 */
declare class DominarTag {
    /**
     * The rendered DOM element of the tag.
     * @type {HTMLElement}
     */
    renderedTag: HTMLElement;
    /**
     * Creates an instance of the DominarTag class.
     * @param {string} tagName The name of the tag to create.
     * @param {DominarTagData} [tagData] Optional data for initializing the tag.
     */
    constructor(tagName: string, tagData?: DominarTagData);
}
/** Creates a new DominarTag instance with the specified tag name and optional tag data.
 *
 * @param {string} tagName The name of the tag.
 * @param {DominarTagData} [tagData] Optional tag data.
 * @returns {DominarTag} A new DominarTag instance.
 */
declare function tag<K extends keyof HTMLElementTagNameMap>(tagName: K, tagData?: DominarTagData): DominarTag;
declare function tag(tagName: string, tagData?: DominarTagData): DominarTag;
type DominarTagListData = (string | number | DominarTag | parsedSVG | HTMLElement)[];
/**
 * Represents a list of rendered HTML tags.
 */
declare class DominarTagList {
    /**
     * The array of rendered tags, which can be either strings or HTML elements.
     */
    renderedTagList: (string | HTMLElement | SVGSVGElement)[];
    /**
     * Constructs a new instance of the DominarTagList class.
     * @param {DominarTagListData} tags The initial list of tags.
     */
    constructor(tags: DominarTagListData);
}
/**
 * Returns a new instance of DominarTagList that contains the given tags.
 * @param tags An array of tags to include in the DominarTagList.
 * @returns A new instance of DominarTagList.
 */
declare function tagList(...tags: DominarTagListData): DominarTagList;

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
declare function render(root: HTMLElement, children: DominarTagChildren, options?: RenderOptions): Promise<void>;

export { SVGParser, addEventListeners, insertChildren, removeEventListeners, render, setAttributes, tag, tagList };
