document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('miFormulario');
    const downloadBtn = document.getElementById('download-btn');
    let asignaturas = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const codigo = document.getElementById('codigo').value;
        const nombre = document.getElementById('nombre').value;
        const aula = document.getElementById('aula').value;
        const horario = document.getElementById('horario').value;
        const rut = document.getElementById('rut').value;

        const asignatura = `Codigo: ${codigo}, Nombre: ${nombre}, Aula: ${aula}, Horario: ${horario}, Rut de Profesor: ${rut}\n`;
        asignaturas.unshift(asignatura);

        alert('Asignatura guardada');
        form.reset();
    });

    downloadBtn.addEventListener('click', () => {
        const blob = new Blob(asignaturas, { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'asignaturas.txt';
        link.click();
    });
});
