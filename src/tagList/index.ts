import { DominarTagList } from "./DominarTagList";
import { DominarTagListData } from "./types";

/**
 * Returns a new instance of DominarTagList that contains the given tags.
 * @param tags An array of tags to include in the DominarTagList.
 * @returns A new instance of DominarTagList.
 */
export function tagList(...tags: DominarTagListData): DominarTagList {
    return new DominarTagList(tags);
}
