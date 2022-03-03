import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsS8Nz6dotb05w8WnM8poJCPDea_-dBVE",
  authDomain: "mytubessss.firebaseapp.com",
  projectId: "mytubessss",
  storageBucket: "mytubessss.appspot.com",
  messagingSenderId: "824205283164",
  appId: "1:824205283164:web:07e7cc1d6d6b3201b97b99",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
