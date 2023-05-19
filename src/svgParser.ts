// Create a new DOM parser
const parser = new DOMParser();

/**
 * Represents a parsed SVG.
 */
class parsedSVG {
    /**
     * The root SVG element of the parsed SVG.
     * @type {SVGSVGElement | null}
     */
    public svg: SVGSVGElement | null;

    /**
     * Creates a new parsedSVG instance.
     * @constructor
     * @param {string} svgString The SVG string to be parsed.
     */
    constructor(svgString: string) {
        // Parse the SVG string
        const doc = parser.parseFromString(svgString, "image/svg+xml");

        // Get the root SVG element
        this.svg = doc.querySelector("svg");

        // Check if there is any error in parsed SVG
        if (this.svg?.querySelector("parsererror") !== null) this.svg = null;
    }
}

/**
 * Parses an SVG string and returns a parsedSVG instance.
 * @function
 * @param {string} svgString The SVG string to be parsed.
 * @returns {parsedSVG} The parsed SVG.
 */
function SVGParser(svgString: string): parsedSVG {
    return new parsedSVG(svgString);
}

export { parsedSVG, SVGParser };
