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
    // const newDocRef = collectionRef.doc();
    const newDocRef = collectionRef.doc(obj.routeName);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertListCharactersSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, visionImgSrc, routeName, characters } = doc.data();
    return {
      id: doc.id,
      routeName,
      title,
      visionImgSrc,
      characters,
    };
  });

  return transformedCollection.reduce((accumulator, character) => {
    accumulator[character.title.toLowerCase()] = character;
    return accumulator;
  }, {});
};

export const convertListWeaponsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { type_weapon, weapons } = doc.data();
    return {
      id: doc.id,
      type_weapon,
      weapons,
    };
  });

  return transformedCollection.reduce((accumulator, weapon) => {
    accumulator[weapon.type_weapon.toLowerCase()] = weapon;
    return accumulator;
  }, {});
};

export const convertLisArtifactSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { imgSrc, name, pieceBonus, rarity } = doc.data();
    return {
      id: doc.id,
      imgSrc,
      name,
      rarity,
      pieceBonus,
    };
  });
  return transformedCollection;
};

export const convertCharacterDetailSnapshotToData = (collections) => {
  const transformedCollection = collections.data();
  return transformedCollection;
};

export default firebase;
