import { parsedSVG } from "./parsedSVG";

/**
 * Creates a parsedSVG instance from an SVG string.
 * @param {string} svgString - The SVG string to be parsed.
 * @returns {parsedSVG} The parsedSVG instance.
 */
export function SVGParser(svgString: string): parsedSVG {
    return new parsedSVG(svgString);
}
