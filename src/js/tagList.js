/**
 * A function that returns a list of DominarTag based on the provided arguments.
 * @function newTagList
 * @param {...DominarTagList} tags A variable number of "DominarTagList" arguments, representing DominarTag.
 * @returns {DominarTagList} A list of DominarTag.
 */
export function newTagList(...tags) {
    return tags;
}
newTagList({}, {}, "", "9");
