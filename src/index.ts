export { tag, tagList } from "./tags";
export { render } from "./render";
export { setAttributes } from "./attributes";
export { assignEventListeners, removeEventListeners } from "./eventListeners";
const VERSION = "1.1.6";

async function getLatestVersion(packageName: string) {
    try {
        let response = await fetch(
            `https://cdn.jsdelivr.net/npm/${packageName}/package.json`
        );
        let latest_version = (await response.json()).version;

        return latest_version as string;
    } catch (error) {
        return undefined;
    }
}

getLatestVersion("@patelka2211/dominar").then((latest_version) => {
    if (latest_version !== undefined && VERSION < latest_version)
        console.warn(
            `You are using Dominar "v${VERSION}".\n\nDominar "v${latest_version}" is available. Visit https://patelka2211.github.io/dominar/ and follow provided instructions to upgrade to the latest version.`
        );
});
