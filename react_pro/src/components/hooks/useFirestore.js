import { useEffect, useState } from 'react';
import { firestoreApp } from '../firebase';

export const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const subscribe = firestoreApp.collection(collection).onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      setDocs(documents);
    });

    return () => subscribe();
  }, [collection]);

  return { docs };
};
