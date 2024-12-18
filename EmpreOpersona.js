function mostrarFormulario() {
    const tipo = document.getElementById("tipo").value;
    const formPersona = document.getElementById("formPersona");
    const formEmpresa = document.getElementById("formEmpresa");

    formPersona.classList.add("oculto");
    formEmpresa.classList.add("oculto");

    if (tipo === "persona") {
        formPersona.classList.remove("oculto");
    } else if (tipo === "empresa") {
        formEmpresa.classList.remove("oculto");
    }
}
