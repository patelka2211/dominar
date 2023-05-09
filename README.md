# Dominar

![](./website-stuff/media/poster.png)

Dominar is a powerful library designed to make it easy for developers to manipulate the Document Object Model (DOM) and create dynamic HTML content. Dominar empowers you to take control of your web development projects like a pro. Unleash the power to dominate the DOM with Dominar.

## Usage

Dominar is available in both IIFE and ESM format.

-   If you want to use it in your project then you need to add this [Domimar’s ESM folder](https://github.com/patelka2211/dominar/tree/main/build/Dominar) in your development environment.
-   Or if you want to directly import Dominar in the your website then you should copy and paste the script tag given below in your website’s `<head>` tag.

```html
<script src="https://patelka2211.github.io/dominar/build/Dominar.iife.js"><script>
```

## Example

Both ESM and IIFE format comes with three functions and one extensions object which contains another two functions.

```tsx
// Functions directly provided by the library

// Creates an DominarTag with the given tag name and attributes.
function newTag(
    tagName: keyof HTMLElementTagNameMap,
    attributes?: DominarTagData
): DominarTag;

// A function that returns a list of DominarTag based on the provided arguments.
function newTagList(...tags: DominarTagList): DominarTagList;

// Renders a DominarObject into a given root HTMLElement using the specified options.
function renderTag(
    root: HTMLElement,
    DominarObject: DominarObject | string,
    options?: RenderOptions
): Promise<void>;

// Accessing funcitons in IIFE file
Dominar.newTag(param1, param2);
Dominar.newTagList(...paramList);
Dominar.renderTag(param1, param2);
```

```tsx
// Another two functions which are provided through extensions objects.

// Sets the attributes of an HTML element.
function setAttributes(
    element: HTMLElement,
    attributes: HTMLElementAttributes
): void;

// Assigns event listeners to an HTML element based on an object of event listener functions.
function assignEventListeners(
    element: HTMLElement,
    eventListeners: DominarEventListenersObject
): void;

// To access these functions
Dominar.extensions.setAttributes(param1, param2);
Dominar.extensions.assignEventListeners(param1, param2);
```

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
