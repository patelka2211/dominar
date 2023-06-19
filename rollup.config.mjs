import dts from "rollup-plugin-dts";

const currentDate = new Date(),
    options = { year: "numeric", month: "long", day: "numeric" },
    formattedDate = currentDate.toLocaleDateString("en-US", options),
    banner = `/**
 * **Dominar** from KPVERSE
 *
 * Updated on ${formattedDate}.
 *
 * Copyright © 2023-present, Kartavya Patel. All rights reserved.
 *
 * @author Kartavya Patel <patelka2211@gmail.com>
 *
 * @license {@link https://github.com/patelka2211/dominar/blob/main/LICENSE MIT}
 */`;

export default [
    process.env.format === "esm" && {
        input: "./lib/index.js",
        output: {
            file: "index.js",
            format: "es",
            banner: `${banner}'use strict';`,
        },
    },
    process.env.format === "esm" && {
        input: "./src/index.ts",
        output: {
            file: "index.d.ts",
            format: "es",
        },
        plugins: [dts()],
    },
    process.env.format === "iife" && {
        input: "./build.iife.js",
        output: {
            file: "./Dominar.js",
            format: "iife",
            banner: banner,
        },
    },
].filter(Boolean);
