// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAejrlksi8NcD6UVA8BNSnl_595DusO7Jc",
  authDomain: "fusiontec-5a2ec.firebaseapp.com",
  projectId: "fusiontec-5a2ec",
  storageBucket: "fusiontec-5a2ec.appspot.com",
  messagingSenderId: "697751976138",
  appId: "1:697751976138:web:c525470ac2e96a5d431c33",
  measurementId: "G-1DWWBRM8K9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)
async function obtenerImagenUrl(nombreArchivo) {
  const imagenRef = ref(storage, `ruta/a/tu/imagen/${nombreArchivo}`);
  try {
    const url = await getDownloadURL(imagenRef);
    console.log("URL de la imagen:", url);
    return url;
  } catch (error) {
    console.error("Error al obtener la URL de la imagen:", error);
    throw error; 
  }
}

obtenerImagenUrl('nombre.jpg').then(url => {
  document.getElementById('elementoimg').src = url;
}).catch(error => {
  console.error("No se pudo cargar la imagen", error);
});
