export function attachListenerHelper(element, type, listener) {
    element[`on${type}`] = listener;
}
