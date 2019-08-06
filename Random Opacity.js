if (app.documents.length > 0)
    mainScript();

function mainScript() {
    var doc = app.activeDocument;
    var selected = app.selection;
    var i;

    var minOpacity = prompt("Minimale Deckkraft in %", 15);
    var maxOpacity = prompt("Maximale Deckkraft in %", 75);

    if (!minOpacity || !maxOpacity) {
        return false;
    }

    minOpacity = parseInt(minOpacity);
    maxOpacity = parseInt(maxOpacity);

    for (i = 0 ; i < selected.length ; i++) {
        if (typeof selected[i] !== "object" || !("transparencySettings" in selected[i])) {
            continue;
        }

        selected[i].transparencySettings.blendingSettings.properties = {
            blendMode: BlendMode.NORMAL,
            opacity: Math.floor(Math.random() * (maxOpacity - minOpacity)) + minOpacity
        }
    }
}
