import { db } from './firebase-config.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';

const movimientoForm = document.getElementById('movimiento-form');
const spinner = document.getElementById('spinner');
const popup = document.getElementById('popup');

movimientoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const tipo = document.getElementById('tipo').value;
    const monto = parseFloat(document.getElementById('monto').value);
    const descripcion = document.getElementById('descripcion').value;
    const fecha = new Date();

    if (!tipo || isNaN(monto) || !descripcion) {
        alert('Completa todos los campos');
        return;
    }

    spinner.classList.remove('hidden');

    try {
        await addDoc(collection(db, 'movimientos'), {
            tipo,
            monto,
            descripcion,
            fecha
        });

        spinner.classList.add('hidden');
        popup.classList.remove('hidden');

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);

    } catch (error) {
        spinner.classList.add('hidden');
        alert('Error al guardar el movimiento: ' + error.message);
    }
});
