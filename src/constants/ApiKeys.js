global.addEventListener = x => x;
import {decode, encode} from 'base-64';
if (!global.btoa) { global.btoa = encode}
if (!global.atob) { global.atob = decode}

import * as firebase from 'firebase';
import 'firebase/firestore';
let FirebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
let app = firebase.initializeApp(FirebaseConfig);
export const db = firebase.firestore(app);