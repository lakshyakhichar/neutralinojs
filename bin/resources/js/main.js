function showInfo() {
    document.getElementById('info').innerHTML = `${NL_APPID} is running on port ${NL_PORT}
        inside ${NL_OS}<br/><br/><span>v${NL_VERSION}</span>`;
}

function openDocs() {
    Neutralino.os.open("https://neutralino.js.org/docs");
}

function openInBrowser() {
    Neutralino.os.open(window.location.href);
}

Neutralino.init();
if(NL_MODE == "window") {
    Neutralino.window.setTitle("Test app"); // This request will be queued and processed when WS connects.
}

Neutralino.events.on("extensionReady", (evt) => {
    console.log(`INFO: ${evt.detail} ready.`);
    // Immediate calls to extension
});

Neutralino.events.on("windowClose", () => {
    Neutralino.app.exit();
});

Neutralino.events.on("eventFromExtension", (evt) => {
    console.log(`INFO: Test extension said: ${evt.detail}`);
    Neutralino.extensions.dispatch("js.neutralino.sampleextension", "eventToExtension", "Hello extension!");
});

showInfo();
