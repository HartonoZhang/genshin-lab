import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6xA3U9it5cD0XkATX-RwLmiKLcN48Dtg",
  authDomain: "genshin-lab.firebaseapp.com",
  projectId: "genshin-lab",
  storageBucket: "genshin-lab.appspot.com",
  messagingSenderId: "80195310762",
  appId: "1:80195310762:web:d1a8466d9c0e0424502cd3",
  measurementId: "G-V5TPGWR437",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertListCharactersSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, visionImgSrc, characters } = doc.data();
    return {
      id: doc.id,
      title,
      visionImgSrc,
      characters,
    };
  });
  console.log(transformedCollection);
};

export default firebase;
