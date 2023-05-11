# Dominar

![](https://patelka2211.github.io/dominar/website-stuff/media/poster.png)

Dominar is a powerful library designed to make it easy for developers to manipulate the Document Object Model (DOM) and create dynamic HTML content. Dominar empowers you to take control of your web development projects like a pro. Unleash the power to dominate the DOM with Dominar.

## Installation

npm package coming soon

<!-- ## Installation

Install Dominar from npm

```sh
npm i @patelka2211/dominar
```

or add Dominar to a website as a `<script>` tag

```html
<script src="https://cdn.jsdelivr.net/npm/@patelka2211/dominar/Dominar.js"></script>
```

## Examples

-   When using as a npm package.

```js
import {
    extensions,
    newTag,
    newTagList,
    renderTag,
} from "@patelka2211/dominar";

let tagList = newTagList(
    "Text before button",
    newTag("button", {
        children: "Click this button",
        eventListeners: {
            click: (ev) => {
                console.log(ev);
            },
        },
    }),
    "Text after button"
);

let tag = newTag("div", {
    id: "div-1",
    children: tagList,
});

renderTag(document.body, tag, {
    clearBeforeRender: false,
    insertType: "prepend",
});

extensions.setAttributes(document.body, {
    class: "class1 class2 class3",
    style: "background: blue;",
});

extensions.assignEventListeners(document.body, {
    keydown: (ev) => {
        console.log(ev);
    },
});
```

OR

-   When added as a `<script>` tag in a website.

```js
let tagList = Dominar.newTagList(
    "Text before button",
    Dominar.newTag("button", {
        children: "Click this button",
        eventListeners: {
            click: (ev) => {
                console.log(ev);
            },
        },
    }),
    "Text after button"
);

let tag = Dominar.newTag("div", {
    id: "div-1",
    children: tagList,
});

Dominar.renderTag(document.body, tag, {
    clearBeforeRender: false,
    insertType: "prepend",
});

Dominar.extensions.setAttributes(document.body, {
    class: "class1 class2 class3",
    style: "background: blue;",
});

Dominar.extensions.assignEventListeners(document.body, {
    keydown: (ev) => {
        console.log(ev);
    },
});
``` -->

## License

-   This project is licensed under the [MIT License](./LICENSE)
-   The MIT License permits the following actions:
    -   Use the software
    -   Copy the software
    -   Modify the software
    -   Merge the software with other software
    -   Publish the software
    -   Distribute the software
    -   Sublicense the software
-   The permitted actions are subject to the conditions stated in the [LICENSE file](./LICENSE).
