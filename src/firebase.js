// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Якщо ви плануєте використовувати авторизацію
import { getFirestore } from 'firebase/firestore'; // Якщо ви плануєте використовувати Firestore

const firebaseConfig = {
    apiKey: "AIzaSyA-bkXuc8K7eAxPIjvjH54tKL63rJbEvpw",
    authDomain: "chernobylexpeditions.firebaseapp.com",
    projectId: "chernobylexpeditions",
    storageBucket: "chernobylexpeditions.firebasestorage.app",
    messagingSenderId: "707251635965",
    appId: "1:707251635965:web:cd6a17bf9cbbca17a5a094"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Експортуємо авторизацію
export const db = getFirestore(app); // Експортуємо Firestore
