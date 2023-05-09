import { DominarObject } from "./types";
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
export declare function renderTag(root: HTMLElement, DominarObject: DominarObject | string, options?: RenderOptions): Promise<void>;
export {};
