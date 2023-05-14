import dts from "rollup-plugin-dts";

const time = new Date(),
    banner = `/**
 * [**Dominar by KP**](https://www.npmjs.com/package/@patelka2211/dominar/)
 *  
 * Dominar is a powerful library designed to make it easy for developers to manipulate the Document Object Model (DOM) and create dynamic HTML content. Dominar empowers you to take control of your web development projects like a pro. Unleash the power to dominate the DOM with Dominar.
 * 
 * @author Kartavya Patel <patelka2211@gmail.com>
 *
 * @license {@link https://github.com/patelka2211/dominar/blob/main/LICENSE MIT}
 *
 * @copyright Kartavya Patel ${time.getFullYear()}
 *
 * Last updated at : ${time.toISOString()}
 */`;

export default [
    {
        input: "./lib/index.js",
        output: {
            file: "./Dominar.iife.js",
            format: "iife",
            name: "Dominar",
            banner: banner,
        },
    },
    {
        input: "./lib/index.js",
        output: {
            file: "index.js",
            format: "es",
        },
    },
    {
        input: "./src/index.ts",
        output: {
            file: "index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
];
