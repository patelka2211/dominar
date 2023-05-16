/**
 * Sets the attributes of an HTML element based on the provided object.
 *
 * @param {HTMLElement} element The HTML element to set the attributes on.
 * @param {Object} attributes An object containing the attribute names and values to set.
 * @returns {HTMLElement} The same HTML element with the updated attributes.
 */
function setAttributes(element, attributes) {
    for (var attributeName in attributes) {
        if (Object.prototype.hasOwnProperty.call(attributes, attributeName)) {
            var attributeValue = attributes[attributeName];
            if (typeof attributeValue === "string") {
                if (attributeValue === "")
                    attributeValue = " ";
                element.setAttribute(attributeName, attributeValue);
            }
            else if (typeof attributeValue === "number")
                element.setAttribute(attributeName, attributeValue.toString());
            else if (attributeValue === true)
                element.setAttribute(attributeName, "");
        }
    }
    return element;
}

/**
 * Assigns the specified event listeners to an HTML element.
 *
 * @param {HTMLElement} element The HTML element to assign event listeners to.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
function assignEventListeners(element, eventListeners) {
    Object.entries(eventListeners).forEach(function (_a) {
        var type = _a[0], listener = _a[1];
        element.addEventListener(type, listener);
    });
    return element;
}
/**
 * Removes the specified event listeners from an HTML element.
 *
 * @param {HTMLElement} element The HTML element to remove event listeners from.
 * @param {Object.<string, function>} eventListeners An object containing event listener functions keyed by event type.
 * @returns {HTMLElement} The same HTML element with the added event listeners.
 */
function removeEventListeners(element, eventListeners) {
    Object.entries(eventListeners).forEach(function (_a) {
        var type = _a[0], listener = _a[1];
        element.removeEventListener(type, listener);
    });
    return element;
}

/**
 * A class representing a DOM element with methods for setting attributes, adding children,
 * and adding event listeners.
 */
var DominarTag = /** @class */ (function () {
    /**
     * Constructs a new instance of the DominarTag class with the specified tag name.
     *
     * @param {string} tagName The name of the HTML tag to create.
     */
    function DominarTag(tagName) {
        this.attributesSet = false;
        this.childrenSet = false;
        this.eventListenersSet = false;
        this.renderedTag = document.createElement(tagName);
    }
    /**
     * Sets the attributes of the DOM element.
     *
     * @param {DominarTagAttributes} attributes An object containing the attributes to set.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    DominarTag.prototype.setAttributes = function (attributes) {
        if (this.attributesSet)
            return this;
        setAttributes(this.renderedTag, attributes);
        this.attributesSet = true;
        return this;
    };
    /**
     * Adds children to the DOM element.
     *
     * @param {...(string | number | DominarTag | DominarTagList)} children The children to add.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    DominarTag.prototype.addChildren = function () {
        var _this = this;
        var children = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            children[_i] = arguments[_i];
        }
        if (this.childrenSet)
            return this;
        children.forEach(function (child) {
            if (typeof child === "string")
                _this.renderedTag.append(child);
            else if (typeof child === "number")
                _this.renderedTag.append(child.toString());
            else if (child instanceof DominarTag)
                _this.renderedTag.append(child.renderedTag);
            else if (child instanceof DominarTagList)
                child.renderedTagList.forEach(function (renderedTag) {
                    _this.renderedTag.append(renderedTag);
                });
        });
        this.childrenSet = true;
        return this;
    };
    /**
     * Adds event listeners to the DOM element.
     *
     * @param {DominarEventListeners} eventListeners An object containing the event listeners to add.
     * @returns {DominarTag} The current DominarTag instance, for chaining.
     */
    DominarTag.prototype.addEventListeners = function (eventListeners) {
        if (this.eventListenersSet)
            return this;
        assignEventListeners(this.renderedTag, eventListeners);
        this.eventListenersSet = true;
        return this;
    };
    return DominarTag;
}());
/**
 * Creates a new instance of DominarTag.
 * @param {string} tagName The tag name for the new DominarTag instance.
 * @returns {DominarTag} A new instance of DominarTag.
 */
function tag(tagName) {
    return new DominarTag(tagName);
}
/**
 * Represents a list of rendered HTML tags.
 */
var DominarTagList = /** @class */ (function () {
    /**
     * Creates a new instance of DominarTagList.
     * @param {(string | number | DominarTag)[]} tags The list of tags to render.
     */
    function DominarTagList(tags) {
        var _this = this;
        this.renderedTagList = [];
        tags.forEach(function (tag) {
            if (tag !== null)
                if (typeof tag === "string")
                    _this.renderedTagList.push(tag);
                else if (typeof tag === "number")
                    _this.renderedTagList.push(tag.toString());
                else if (tag instanceof DominarTag)
                    _this.renderedTagList.push(tag.renderedTag);
        });
    }
    return DominarTagList;
}());
/**
 * Returns a new instance of DominarTagList that contains the given tags.
 * @param tags An array of tags to include in the DominarTagList.
 * @returns A new instance of DominarTagList.
 */
function tagList() {
    var tags = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tags[_i] = arguments[_i];
    }
    return new DominarTagList(tags);
}

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator$1 = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Renders a DOM element or a list of elements to a specified HTML element.
 *
 * @param {HTMLElement} root The HTML element to render the DOM element(s) to.
 * @param {string | number | DominarTag | DominarTagList} DominarObject The DOM element(s) to render.
 * @param {Object} options An object containing rendering options.
 * @param {boolean} [options.clearBeforeRender=true] Whether to clear the root element before rendering.
 * @param {string} [options.insertType="append"] Whether to append or prepend the DOM element(s) to the root element.
 * @returns {Promise<void>} A Promise that resolves when the rendering is complete.
 * @throws {Error} If the root parameter is null or undefined.
 */
function render(root, DominarObject, options) {
    return __awaiter$1(this, void 0, void 0, function () {
        var currentInnerHTML;
        var _a;
        return __generator$1(this, function (_b) {
            if (DominarObject === null)
                return [2 /*return*/];
            if (root === undefined)
                throw Error("Parameter \"root\" can't be null, it must be HTML element.");
            if (options.clearBeforeRender === undefined)
                options.clearBeforeRender = true;
            if (options.clearBeforeRender === true)
                root.innerHTML = "";
            if (options.insertType === undefined || options.clearBeforeRender === true)
                options.insertType = "append";
            if (typeof DominarObject === "string")
                root[options.insertType](DominarObject);
            else if (typeof DominarObject === "number")
                root[options.insertType](DominarObject.toString());
            else if (DominarObject instanceof DominarTag)
                root[options.insertType](DominarObject.renderedTag);
            else if (DominarObject instanceof DominarTagList) {
                currentInnerHTML = void 0;
                if (options.insertType === "prepend")
                    _a = [root.innerHTML, ""], currentInnerHTML = _a[0], root.innerHTML = _a[1];
                DominarObject.renderedTagList.forEach(function (tag) {
                    root.append(tag);
                });
                if (options.insertType === "prepend" && currentInnerHTML !== undefined)
                    root.innerHTML += currentInnerHTML;
            }
            return [2 /*return*/];
        });
    });
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var VERSION = "1.1.6";
function getLatestVersion(packageName) {
    return __awaiter(this, void 0, void 0, function () {
        var response, latest_version;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://cdn.jsdelivr.net/npm/".concat(packageName, "/package.json"))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    latest_version = (_a.sent()).version;
                    return [2 /*return*/, latest_version];
                case 3:
                    _a.sent();
                    return [2 /*return*/, undefined];
                case 4: return [2 /*return*/];
            }
        });
    });
}
getLatestVersion("@patelka2211/dominar").then(function (latest_version) {
    if (latest_version !== undefined && VERSION < latest_version)
        console.warn("You are using Dominar \"v".concat(VERSION, "\".\n\nDominar \"v").concat(latest_version, "\" is available. Visit https://patelka2211.github.io/dominar/ and follow provided instructions to upgrade to the latest version."));
});

export { assignEventListeners, removeEventListeners, render, setAttributes, tag, tagList };
