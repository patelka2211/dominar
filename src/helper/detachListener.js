import { attachListenerHelper } from "./attachListener";

export function detachListenerHelper(element, type) {
    attachListenerHelper(element, type, null);
}
