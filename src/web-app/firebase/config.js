import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set, onValue, push } from "firebase/database";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAejrlksi8NcD6UVA8BNSnl_595DusO7Jc",
  authDomain: "fusiontec-5a2ec.firebaseapp.com",
  projectId: "fusiontec-5a2ec",
  storageBucket: "fusiontec-5a2ec.appspot.com",
  messagingSenderId: "697751976138",
  appId: "1:697751976138:web:c525470ac2e96a5d431c33",
  measurementId: "G-1DWWBRM8K9",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);

/**
 * Guarda un número en Firebase Realtime Database.
 * @param {string} path La ruta en la base de datos donde se guardará el número.
 * @param {number} numero El número a guardar.
 */
function guardarNumero(path, numero) {
  const reference = dbRef(database, path);
  push(reference, {
    numero: numero,
  })
    .then(() => {
      console.log("Número guardado con éxito!");
    })
    .catch((error) => {
      console.error("Error guardando el número:", error);
    });
}

/**
 * Obtiene datos de imágenes de Firebase Realtime Database.
 * @param {string} id El identificador del objeto.
 * @returns {Promise<any>} Los datos de la imagen.
 */
const obtenerURLDescarga = async (path) => {
  const storageRef = ref(storage, path);
  return await getDownloadURL(storageRef);
};

const obtenerImgs = async (id) => {
  let starCountRef;

  if (id === "camara") {
    starCountRef = dbRef(database, "objetos/pentax");
  } else if (id === "proyector") {
    starCountRef = dbRef(database, "objetos/proyector");
  } else {
    starCountRef = dbRef(database, "objetos/linterna");
  }

  const snapshot = await new Promise((resolve, reject) => {
    onValue(
      starCountRef,
      (snapshot) => {
        resolve(snapshot);
      },
      reject
    );
  });

  const data = snapshot.val();
  const formattedData = data ? Object.values(data) : [];

  // Obtener las URLs de descarga para cada imagen
  const results = await Promise.all(
    formattedData.map(async (item) => {
      const url = await obtenerURLDescarga(item.img);
      return {
        ...item,
        img: url,
      };
    })
  );

  return results;
};

export { guardarNumero, obtenerImgs };
export default obtenerURLDescarga;
