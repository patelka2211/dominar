import { DominarTag } from "./DominarTag";
import { DominarTagData } from "./types";

/** Creates a new DominarTag instance with the specified tag name and optional tag data.
 *
 * @param {string} tagName The name of the tag.
 * @param {DominarTagData} [tagData] Optional tag data.
 * @returns {DominarTag} A new DominarTag instance.
 */
export function tag<K extends keyof HTMLElementTagNameMap>(
    tagName: K,
    tagData?: DominarTagData
): DominarTag;
export function tag(tagName: string, tagData?: DominarTagData): DominarTag;
/** Creates a new DominarTag instance with the specified tag name and optional tag data.
 *
 * @param {string} tagName The name of the tag.
 * @param {DominarTagData} [tagData] Optional tag data.
 * @returns {DominarTag} A new DominarTag instance.
 */
export function tag(tagName: string, tagData?: DominarTagData): DominarTag {
    return new DominarTag(tagName, tagData);
}
