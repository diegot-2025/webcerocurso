document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tipo = document.getElementById('tipo').value;

    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<strong>Datos ingresados:</strong><br>
        Nombre: ${nombre}<br>
        Correo: ${email}<br>
        Tipo: ${tipo}`;

    // Limpiar el formulario
    this.reset();

    // Volver a solicitar información
    setTimeout(() => {
        resultadoDiv.innerHTML = '';
    }, 5000); // Limpiar el resultado después de 5 segundos
});
