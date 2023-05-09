import { DominarTagData, DominarTag } from "./types";
/**
 * Creates an DominarTag with the given tag name and attributes.
 * @param {HTMLElementTagNameMap | string} tagName The name of the DominarTag to create.
 * @param {Object.<string, string | number | true>} attributes The attributes to set on the tag.
 * @returns {DominarTag} An object representing the DominarTag and its attributes.
 */
export function newTag(
    tagName: keyof HTMLElementTagNameMap,
    attributes?: DominarTagData
): DominarTag {
    if (attributes === undefined) return { [tagName]: {} } as DominarTag;

    const newAttributes: DominarTagData = {};

    for (const attributeName in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
            const attributeValue = attributes[attributeName];
            if (
                (["string", "number"].includes(typeof attributeValue) ||
                    attributeValue === true) &&
                attributeValue !== undefined
            )
                newAttributes[attributeName] = attributeValue;
            else if (typeof attributeValue === "object") {
                if (["children", "eventListeners"].includes(attributeName))
                    newAttributes[attributeName] = attributeValue;
                else
                    console.warn(
                        `The ${attributeName} attribute has been removed from the tag because its value was an object, only string, number, or true values are allowed for this attribute.`
                    );
            }
        }
    }

    return {
        [tagName]: newAttributes,
    } as DominarTag;
}
