document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('Login');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const rut = document.getElementById('professor-rut').value;
        const contraseña = document.getElementById('professor-contraseña').value;

        // Aquí puedes añadir validaciones adicionales si es necesario
        // Por ejemplo, verificar que el RUT y la contraseña no estén vacíos

        // Si todo está bien, redirigir a la página principal
        window.location.href = 'pag_principal.html';
    });
});
