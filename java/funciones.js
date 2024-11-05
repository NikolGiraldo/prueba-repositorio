
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

    // Validación de campos (opcional, ya que el atributo 'required' ya lo hace)
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !telefono || !asunto || !mensaje) {
        alert("Por favor, completa todos los campos.");
    return;
    }

    // Si deseas enviar los datos mediante AJAX, puedes hacerlo aquí
    // Por simplicidad, solo mostraremos un mensaje de éxito
    alert("Formulario enviado con éxito.");

    // Aquí puedes enviar el formulario
    // this.submit(); // Descomentar si deseas enviar el formulario de forma normal
});