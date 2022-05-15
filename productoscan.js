var preview = document.querySelector(".popup-productos");
var previewBox = preview.querySelectorAll(".preview");

document.querySelectorAll(".productos-container .btn-editar").forEach(boton => {
    boton.onclick = () => {
        preview.style.display = "flex";
        var nombre = boton.getAttribute("data-name");
        previewBox.forEach(preview => {
            var target = preview.getAttribute("data-target");
            if (nombre == target) {
                preview.classList.add("activo");
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector(".btn-rojo").onclick = () => {
        close.classList.remove("activo");
        preview.style.display = "none";
    };
});
