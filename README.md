# Dominar

[![](https://cdn.jsdelivr.net/gh/patelka2211/dominar@master/website-stuff/media/poster.png)](https://www.npmjs.com/package/@patelka2211/dominar)

Dominar is a powerful library designed to make it easy for developers to manipulate the Document Object Model (DOM) and create dynamic HTML content. Dominar empowers you to take control of your web development projects like a pro. Unleash the power to dominate the DOM with Dominar.

## Installation

[
![npm (scoped)](https://img.shields.io/npm/v/@patelka2211/dominar)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@patelka2211/dominar)
![npm](https://img.shields.io/npm/dw/@patelka2211/dominar)
![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hw/@patelka2211/dominar)
](https://www.npmjs.com/package/@patelka2211/dominar)

To install Dominar using npm, run the following command:

```sh
npm i @patelka2211/dominar
```

Alternatively, you can include Dominar in your website using a `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/@patelka2211/dominar@1.0.2/Dominar.iife.js"></script>
```

## Examples

Here are some examples of how you can use Dominar:

### When using as a npm package.

```js
import { Tag, TagList, render } from "@patelka2211/dominar";

let tagList = TagList(
    "Text before button",
    Tag("button")
        .addChildren("Click this button")
        .addEventListeners({
            click: () => {
                alert("Button clicked");
            },
        }),
    "Text after button"
);

let tag = Tag("div")
    .setAttributes({
        id: "div-1",
    })
    .addChildren(tagList);

render(document.body, tag, {
    clearBeforeRender: false,
    insertType: "prepend",
});

setAttributes(document.body, {
    class: "class1 class2 class3",
    style: "background-color: azure;",
});

assignEventListeners(document.body, {
    keydown: (ev: KeyboardEvent) => {
        console.log(ev);
    },
});
```

### When included as a `<script>` tag in a website.

```html
<script>
    let tagList = Dominar.TagList(
        "Text before button",
        Tag("button")
            .addChildren("Click this button")
            .addEventListeners({
                click: () => {
                    alert("Button clicked");
                },
            }),
        "Text after button"
    );

    let tag = Dominar.Tag("div")
        .setAttributes({
            id: "div-1",
        })
        .addChildren(tagList);

    Dominar.render(document.body, tag, {
        clearBeforeRender: false,
        insertType: "prepend",
    });

    Dominar.setAttributes(document.body, {
        class: "class1 class2 class3",
        style: "background-color: azure;",
    });

    Dominar.assignEventListeners(document.body, {
        keydown: (ev: KeyboardEvent) => {
            console.log(ev);
        },
    });
</script>
```

## License

![NPM](https://img.shields.io/npm/l/@patelka2211/dominar)

This project is licensed under the [MIT License](./LICENSE), which permits you to use, copy, modify, merge, publish, distribute, and sublicense the software, subject to the conditions stated in the [LICENSE file](./LICENSE).
