import { DominarTag } from "./DominarTag";

/**
 * Checks if an object is an instance of DominarTag.
 * @param {unknown} object - The object to be checked.
 * @returns {boolean} `true` if the object is an instance of DominarTag, otherwise `false`.
 */
export function isInstanceOfDominarTag(object: unknown): boolean {
    return object instanceof DominarTag;
}
