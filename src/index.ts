export { newTag } from "./tag";
export { newTagList } from "./tagList";
export { renderTag } from "./render";
export { extensions } from "./extensions";

const VERSION = "1.0.1";

async function getLatestVersion() {
    try {
        let response = await fetch(
            "https://cdn.jsdelivr.net/npm/@patelka2211/dominar/package.json"
        );
        let latest_version = (await response.json()).version;

        return latest_version as string;
    } catch (error) {
        return undefined;
    }
}

getLatestVersion().then((latest_version) => {
    if (latest_version !== undefined && VERSION < latest_version)
        console.warn(
            `You are using Dominar v${VERSION}.\n\nDominar v${latest_version} is released. Visit https://patelka2211.github.io/dominar/ and follow provided instructions to upgrade to the new version.`
        );
});
