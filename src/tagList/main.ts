import { DominarTagList } from "./DominarTagList";
import { DominarTagListDataType } from "./types";

/**
 * Creates a DominarTagList instance with the specified tags.
 * @param {...DominarTagListDataType} tags - The tags to be included in the list.
 * @returns {DominarTagList} The DominarTagList instance.
 */
export function tagList(...tags: DominarTagListDataType): DominarTagList {
    return new DominarTagList(tags);
}
