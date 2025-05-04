// Importar librerías Firebase (Lite)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore-lite.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDt92a3vL-YJbYpng6NWNphpSb6HFboHdM",
    authDomain: "finanza-personal-raul.firebaseapp.com",
    projectId: "finanza-personal-raul",
    storageBucket: "finanza-personal-raul.appspot.com",
    messagingSenderId: "478686396457",
    appId: "1:478686396457:web:6c5857b154e1a22e685c38"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore Lite
const db = getFirestore(app);

// Exportar db
export { db };
