import { setAttributes } from "./attributes";
import { assignEventListeners } from "./eventListeners";
/**
 * An object containing various utility functions.
 * @property {Function} setAttributes A function that sets the attributes of an HTML element.
 * @property {Function} assignEventListeners A function that assigns event listeners to an HTML element.
 */
export declare const extensions: {
    setAttributes: typeof setAttributes;
    assignEventListeners: typeof assignEventListeners;
};
