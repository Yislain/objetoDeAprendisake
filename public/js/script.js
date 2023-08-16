// Aquí puedes agregar tu código JavaScript si es necesario
// Este archivo se enlazará en el archivo index.ejs

// Ejemplo de un código simple para resaltar el enlace activo
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("ul li a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
