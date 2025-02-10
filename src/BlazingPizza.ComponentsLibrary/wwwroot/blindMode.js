window.applyColorBlindMode = function (mode) {
    document.body.classList.remove("protanopia", "deuteranopia", "tritanopia");
    if (mode !== "normal") {
        document.body.classList.add(mode);
    }
    // Guardar la selección en localStorage
    localStorage.setItem("colorBlindMode", mode);
};

// Aplicar modo de daltonismo guardado al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    let storedColorMode = localStorage.getItem("colorBlindMode") || "normal";
    window.applyColorBlindMode(storedColorMode);

    // Seleccionar automáticamente la opción en el <select>
    let select = document.getElementById("colorBlindMode");
    if (select) {
        select.value = storedColorMode;
    }
});