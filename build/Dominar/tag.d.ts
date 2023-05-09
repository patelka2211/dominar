import { DominarTagData, DominarTag } from "./types";
/**
 * Creates an DominarTag with the given tag name and attributes.
 * @param {HTMLElementTagNameMap | string} tagName The name of the DominarTag to create.
 * @param {Object.<string, string | number | true>} attributes The attributes to set on the tag.
 * @returns {DominarTag} An object representing the DominarTag and its attributes.
 */
export declare function newTag(tagName: keyof HTMLElementTagNameMap, attributes?: DominarTagData): DominarTag;
