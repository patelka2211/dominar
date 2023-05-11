const time = new Date(),
    banner = `/**
 * **Dominar by KP**
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

export default {
    input: `./lib/index.js`,
    output: {
        file: "./Dominar.js",
        format: "iife",
        name: "Dominar",
        banner: banner,
    },
};