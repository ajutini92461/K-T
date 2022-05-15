var preview = document.querySelector(".popup-productos");
var previewBox = preview.querySelectorAll(".preview");
var productCon = document.querySelector("productos-container");

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

