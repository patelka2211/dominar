import { DominarTag } from "./DominarTag";
import { DominarTagDataType } from "./types";

/**
 * Creates a DominarTag instance with the specified tag name and data.
 * @param {string} tagName - The name of the HTML tag.
 * @param {DominarTagDataType} tagData - The data for the tag.
 * @returns {DominarTag} The DominarTag instance.
 */
export function tag<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    tagData?: DominarTagDataType
): DominarTag;
export function tag(tagName: string, tagData?: DominarTagDataType): DominarTag;
/**
 * Creates a DominarTag instance with the specified tag name and data.
 * @param {string} tagName - The name of the HTML tag.
 * @param {DominarTagDataType} tagData - The data for the tag.
 * @returns {DominarTag} The DominarTag instance.
 */
export function tag(tagName: string, tagData?: DominarTagDataType): DominarTag {
    return new DominarTag(tagName, tagData);
}
