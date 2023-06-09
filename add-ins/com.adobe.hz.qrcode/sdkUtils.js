import AddOnStore from "https://stage.projectx.corp.adobe.com/static/add-on-sdk/sdk.js";

$("#addbutton").click(function () {
    AddOnStore.ready.then(() => {
        async function callWhenReady() {
            const url = $("#qrcodediv").children("img").attr("src");
            const blob = await fetch(url).then((r) => r.blob());
            AddOnStore.app.document.addImage(blob);
        }
        callWhenReady();
    });
});

export function enableDragOnElement() {
    const element = $("#qrcodediv").children("img")[0];
    const elementBlob = dataURLtoBlob(element.src);
    AddOnStore.ready.then(() => {
        AddOnStore.app.enableDragToDocument(element, () =>
            Promise.resolve(elementBlob)
        );
        AddOnStore.app.on("dragend", (eventData) => {
            if (!eventData.dropCancelled) {
                AddOnStore.app.document.addImage(elementBlob, {
                    position: eventData.position,
                });
            }
        });
    });
}

function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
