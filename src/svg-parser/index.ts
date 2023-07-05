import { parsedSVG } from "./parsedSVG";

/**
 * Parses an SVG string and returns a parsedSVG instance.
 * @function
 * @param {string} svgString The SVG string to be parsed.
 * @returns {parsedSVG} The parsed SVG.
 */
export function SVGParser(svgString: string): parsedSVG {
    return new parsedSVG(svgString);
}

// export { parsedSVG, SVGParser };
