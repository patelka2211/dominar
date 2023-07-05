import { parsedSVG } from "./parsedSVG";

/**
 * Checks if the given object is an instance of `parsedSVG` object.
 * @param object An object which is going to be checked.
 * @returns `true` if the object is an instance of `parsedSVG`, `false` otherwise.
 */
export function isInstanceOfParsedSVG(object: unknown) {
    return object instanceof parsedSVG;
}
