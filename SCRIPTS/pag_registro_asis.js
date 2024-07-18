document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('attendance-form');
    const downloadBtn = document.getElementById('download-btn');
    const dateInput = document.getElementById('attendance-date');
    const timeInput = document.getElementById('attendance-time');
    let attendanceRecords = [];

    // Rellenar automáticamente la fecha y hora con la fecha y hSora actual
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedToday = `${yyyy}-${mm}-${dd}`;
    dateInput.value = formattedToday;

    const hh = String(today.getHours()).padStart(2, '0');
    const min = String(today.getMinutes()).padStart(2, '0');
    const formattedTime = `${hh}:${min}`;
    timeInput.value = formattedTime;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const rut = document.getElementById('professor-rut').value;
        const date = dateInput.value;
        const time = timeInput.value;
        const status = document.getElementById('attendance-status').value;

        attendanceRecords.unshift(`Rut: ${rut}, Fecha: ${date}, Hora: ${time}, Estado: ${status}\n`);
        alert('Asistencia guardada');
        form.reset();
        dateInput.value = formattedToday; // Restablecer la fecha al valor de hoy
        timeInput.value = formattedTime;  // Restablecer la hora al valor actual
    });

    downloadBtn.addEventListener('click', () => {
        const blob = new Blob(attendanceRecords, { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'asistencia_profesores.txt';
        link.click();
    });
});
