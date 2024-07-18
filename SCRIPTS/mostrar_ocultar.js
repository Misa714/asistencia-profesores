document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('hide');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.getElementById('cerrar-sesion');
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Realiza cualquier limpieza adicional aquí
            window.location.href = 'login.html';
        });
    });