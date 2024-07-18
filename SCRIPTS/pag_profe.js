document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('miFormulario');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        enviarDatos();
    });
});

function enviarDatos() {
    const rut = document.getElementById('rut').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const profesion = document.getElementById('profesion').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!rut || !nombre || !profesion || !email || !telefono) {
        alert('Complete los campos');
        return;
    }

    const profesor = {
        rut: rut,
        nombre: nombre,
        profesion: profesion,
        email: email,
        telefono: telefono
    };

    let profesores = JSON.parse(localStorage.getItem('profesores')) || [];
    profesores.push(profesor);
    localStorage.setItem('profesores', JSON.stringify(profesores));
    alert('Datos guardados correctamente');
}

function descargarArchivo() {
    let profesores = JSON.parse(localStorage.getItem('profesores')) || [];
    let contenido = profesores.map(profesor => 
        `Rut: ${profesor.rut}\nNombre: ${profesor.nombre}\nProfesión: ${profesor.profesion}\nEmail: ${profesor.email}\nTeléfono: ${profesor.telefono}\n`
    ).join('\n');

    const blob = new Blob([contenido], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'profesores.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}
