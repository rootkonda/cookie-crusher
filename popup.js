document.getElementById("toggle").addEventListener("click", function () {
    chrome.storage.local.get("enabled", (data) => {
        const newState = !data.enabled;
        chrome.storage.local.set({ enabled: newState }, () => {
            document.getElementById("toggle").innerText = newState ? "Disable" : "Enable";
        });
    });
});

chrome.storage.local.get("enabled", (data) => {
    document.getElementById("toggle").innerText = data.enabled ? "Disable" : "Enable";
});