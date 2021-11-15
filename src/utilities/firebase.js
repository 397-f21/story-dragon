import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useState, useEffect } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyCebeCPaYjoHvFWsKavukSVwO_Uc7dSFNw",
    authDomain: "story-dragon.firebaseapp.com",
    projectId: "story-dragon",
    databaseURL: "https://story-dragon-default-rtdb.firebaseio.com",
    storageBucket: "story-dragon.appspot.com",
    messagingSenderId: "687217103439",
    appId: "1:687217103439:web:da5333563a2332632b103a",
    measurementId: "G-8L9LJBR7FD"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const dbRef = ref(database, path);
        const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
        if (devMode) { console.log(`loading ${path}`); }
        return onValue(dbRef, (snapshot) => {
            const val = snapshot.val();
            if (devMode) { console.log(val); }
            setData(transform ? transform(val) : val);
            setLoading(false);
            setError(null);
        }, (error) => {
            setData(null);
            setLoading(false);
            setError(error);
        });
    }, [path, transform]);

    return [data, loading, error];
};

export const setData = (path, value) => (
    set(ref(database, path), value)
);