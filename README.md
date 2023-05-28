[![](https://cdn.jsdelivr.net/gh/patelka2211/dominar@master/website-stuff/media/poster.png)](https://patelka2211.github.io/dominar)

# Dominar

Dominar is a powerful library designed to make it easy for developers to manipulate the Document Object Model (DOM) and create dynamic HTML content. Dominar empowers you to take control of your web development projects like a pro. Unleash the power to dominate the DOM with Dominar.

## Demo

[![](https://cdn.jsdelivr.net/gh/patelka2211/dominar@master/website-stuff/media/preview.gif)](https://patelka2211.github.io/dominar)

Visit [https://patelka2211.github.io/dominar/](https://patelka2211.github.io/dominar/) and click on "✨ See live preview" button to see a to-do app built using Dominar.

## Installation

[![npm (scoped)](https://img.shields.io/npm/v/@patelka2211/dominar)](https://www.npmjs.com/package/@patelka2211/dominar)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@patelka2211/dominar)](https://bundlephobia.com/package/@patelka2211/dominar@1.1.9)
[![npm](https://img.shields.io/npm/dy/@patelka2211/dominar)](https://www.npmjs.com/package/@patelka2211/dominar)
[![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/npm/hy/@patelka2211/dominar)](https://cdn.jsdelivr.net/npm/@patelka2211/dominar@1.1.9/)

To install Dominar using npm, run the following command:

```sh
npm i @patelka2211/dominar
```

Alternatively, you can include [Dominar's IIFE file](https://cdn.jsdelivr.net/npm/@patelka2211/dominar@1.1.9/Dominar.iife.js) in your website using a `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/@patelka2211/dominar@1.1.9/Dominar.iife.js"></script>
```

## Examples

Here are some examples of how you can use Dominar:

### When using as a npm package.

```js
import {
    addEventListeners,
    render,
    setAttributes,
    tag,
    tagList,
} from "@patelka2211/dominar";

// DominarTagList Object
let tagListObject = tagList(
    "Text before button",
    tag("button", {
        children: "Click this button",
        eventListeners: {
            click: () => {
                alert("Button clicked");
            },
        },
    }),
    "Text after button"
);

// DominarTag Object
let tagObject = tag("div", {
    attributes: {
        id: "div-1",
    },
    children: tagListObject,
});

// Example of Dominar's render function
render(document.body, tagObject, {
    clearBeforeRender: false,
    insertType: "prepend",
});

// Example of Dominar's setAttributes function
setAttributes(document.body, {
    class: "class1 class2 class3",
    style: "background-color: azure;",
});

// Example of Dominar's addEventListeners function
addEventListeners(document.body, {
    keydown: (ev) => {
        console.log(`Key "${ev.key}" pressed`);
    },
});
```

### When included as a `<script>` tag in a website.

If the script tag is not already included in the `<head>` tag, please add the following script tag to include [Dominar's IIFE JavaScript](https://cdn.jsdelivr.net/npm/@patelka2211/dominar@1.1.9/Dominar.iife.js) file.

```html
<script src="https://cdn.jsdelivr.net/npm/@patelka2211/dominar@1.1.9/Dominar.iife.js"></script>
```

```html
<script>
    // DominarTagList Object
    let tagListObject = Dominar.tagList(
        "Text before button",
        Dominar.tag("button", {
            children: "Click this button",
            eventListeners: {
                click: () => {
                    alert("Button clicked");
                },
            },
        }),
        "Text after button"
    );

    // DominarTag Object
    let tagObject = Dominar.tag("div", {
        attributes: {
            id: "div-1",
        },
        children: tagListObject,
    });

    // Example of Dominar's render function
    Dominar.render(document.body, tagObject, {
        clearBeforeRender: false,
        insertType: "prepend",
    });

    // Example of Dominar's setAttributes function
    Dominar.setAttributes(document.body, {
        class: "class1 class2 class3",
        style: "background-color: azure;",
    });

    // Example of Dominar's addEventListeners function
    Dominar.addEventListeners(document.body, {
        keydown: (ev) => {
            console.log(`Key "${ev.key}" pressed`);
        },
    });
</script>
```

## License

[![NPM](https://img.shields.io/npm/l/@patelka2211/dominar)](./LICENSE)

This project is licensed under the [MIT License](./LICENSE), which permits you to use, copy, modify, merge, publish, distribute, and sublicense the software, subject to the conditions stated in the [LICENSE file](./LICENSE).
