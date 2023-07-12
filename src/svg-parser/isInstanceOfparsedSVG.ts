import { parsedSVG } from "./parsedSVG";

/**
 * Checks if an object is an instance of parsedSVG.
 * @param {unknown} object - The object to be checked.
 * @returns {boolean} `true` if the object is an instance of parsedSVG, otherwise `false`.
 */
export function isInstanceOfParsedSVG(object: unknown): boolean {
    return object instanceof parsedSVG;
}
