import firebaseApp from '../firebase-config';
import { getFirestore, collection, doc, query, limit, where, setDoc, getDoc, updateDoc, deleteDoc, getDocs, addDoc, FieldValue, Firestore, arrayUnion, arrayRemove, onSnapshot, QuerySnapshot, orderBy, startAt, endAt } from 'firebase/firestore';

const db = getFirestore(firebaseApp);


async function getInit() {

    const docRef = collection(db, "Invoice");
        let lastKey = "";
        
        const q = query(docRef, orderBy('nombre'));
        const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => {
            lastKey = doc.data().id;
            return { ...doc.data(), id: doc.id, lastKey};
        });

}

async function getNoPage() {

    const docRef = collection(db, "Invoice");
        let lastKey = "";
        
        const q = query(docRef, orderBy('nombre'), limit(20));
        const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => {
            lastKey = doc.data().id;
            return { ...doc.data(), id: doc.id, lastKey};
        });

}

async function getPagination(after) {

    const docRef = collection(db, "Invoice");
        let lastKey = "";
        
        const q = query(docRef, orderBy('nombre'), limit(after + 20));
        const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(doc => {
            lastKey = doc.data().id;
            return { ...doc.data(), id: doc.id, lastKey};
        });

}

async function insertNew(values) {

    const data = {
        nombre: values.nombre,
        razonSocial: values.razonSocial,
        nit: values.nit,
        telefono: values.telefono,
        codigo: values.codigo,
    }
    try {
        const docRef = await addDoc(collection(db, "Invoice"), data);
        console.log("ffff", docRef);
        return docRef.id;
    } catch (error) {
        console.log(error);
        return error
    }

}

async function getFilter() {

    console.log("llega al services");

}

export { getInit, getNoPage, getPagination, insertNew, getFilter }