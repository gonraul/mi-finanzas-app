import { db } from './firebase-config.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';

const ctx = document.getElementById('graficoDonut').getContext('2d');

async function cargarDatos() {
    const querySnapshot = await getDocs(collection(db, 'movimientos'));

    let totalIngresos = 0;
    let totalGastos = 0;
    const mesActual = new Date().getMonth();
    const añoActual = new Date().getFullYear();

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const fecha = data.fecha.toDate ? data.fecha.toDate() : new Date(data.fecha.seconds * 1000);

        if (fecha.getMonth() === mesActual && fecha.getFullYear() === añoActual) {
            if (data.tipo === 'ingreso') {
                totalIngresos += data.monto;
            } else if (data.tipo === 'gasto') {
                totalGastos += data.monto;
            }
        }
    });

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Ingresos', 'Gastos'],
            datasets: [{
                data: [totalIngresos, totalGastos],
                backgroundColor: ['#4CAF50', '#FF5722'],
                borderColor: ['#ffffff', '#ffffff'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Resumen del Mes',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });
}

cargarDatos();
