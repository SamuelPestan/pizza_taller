window.applyColorBlindMode = function (mode) {
    document.body.classList.remove("protanopia", "deuteranopia", "tritanopia");
    if (mode !== "normal") {
        document.body.classList.add(mode);
    }
};
