import { DominarTag } from "./DominarTag";

/**
 * Checks if the given object is an instance of `DominarTag` object.
 * @param object An object which is going to be checked.
 * @returns `true` if the object is an instance of `DominarTag`, `false` otherwise.
 */
export function isInstanceOfDominarTag(object: unknown) {
    return object instanceof DominarTag;
}
