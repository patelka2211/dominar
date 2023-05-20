let openLivePreviewBtn = document.getElementById("open-live-preview"),
    livePreviewTag = document.getElementById("dominar-live-preview"),
    closeLivePreview = document.getElementById("close-dominar-preview"),
    dominarPreviewTag = document.getElementById("dominar-preview"),
    previewIsOn = false,
    beingPreviewed = false;

window.addEventListener("resize", () => {
    if (!previewIsOn) return;
    checkWindowSize();
});

function checkWindowSize() {
    let ow = outerWidth,
        oh = outerHeight;

    if (ow < 1100 || oh < 600) {
        dominarPreviewTag.innerHTML = `<span class="window-size-warning">
        Your browser window size is <span class="warning-highlight">${ow}px X ${oh}px</span>. 
        Please adjust your browser window size to ensure optimal functionality. The recommended size is 
        <span class="warning-highlight">1100px X 600px</span>. 
        Thank you!
        </span>`;
        beingPreviewed = false;
    } else {
        if (!beingPreviewed)
            dominarPreviewTag.innerHTML = `<iframe class="preview-iframe" src="https://stackblitz.com/edit/to-do-list-made-using-dominar-js?embed=1&file=index.ts&hideDevTools=1&theme=light" frameborder="0" ></iframe>`;
        beingPreviewed = true;
    }
}

openLivePreviewBtn.onclick = () => {
    previewIsOn = true;
    livePreviewTag.classList.add("show");
    checkWindowSize();
};

closeLivePreview.onclick = () => {
    previewIsOn = false;
    beingPreviewed = false;
    livePreviewTag.classList.remove("show");

    setTimeout(() => {
        dominarPreviewTag.innerHTML = "";
    }, 400);
};

let npmInstallTag = document.getElementById("npm-install"),
    npmCmd = "npm i @patelka2211/dominar";

npmInstallTag.onclick = () => {
    navigator.clipboard
        .writeText(npmCmd)
        .then(() => {
            npmInstallTag.innerHTML = `<span class="svg-emoji-icon">✅</span>
                                   <p class="npm-cmd">${npmCmd}</p>`;

            setTimeout(() => {
                npmInstallTag.innerHTML = `<span class="svg-emoji-icon">
                                           <svg
                                               class="copy-icon"
                                               xmlns="http://www.w3.org/2000/svg"
                                               viewBox="0 96 960 960"
                                           >
                                               <path
                                                   d="M300 855q-24.75 0-42.375-17.625T240 795V235q0-24.75 17.625-42.375T300 175h440q24.75 0 42.375 17.625T800 235v560q0 24.75-17.625 42.375T740 855H300Zm0-60h440V235H300v560ZM180 975q-24.75 0-42.375-17.625T120 915V342q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T180 342v573h444q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T624 975H180Zm120-740v560-560Z"
                                                   fill="black"
                                               ></path>
                                           </svg>
                                       </span>
                                       <p class="npm-cmd">${npmCmd}</p>`;
            }, 1600);
        })
        .catch((reason) => {
            alert(reason);
        });
};
