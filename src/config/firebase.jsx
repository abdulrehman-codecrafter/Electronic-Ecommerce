import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBgy9Rab0FPCnSChjqdV6R8rafBCySPmaw",
  authDomain: "ecommerce-website-faa0e.firebaseapp.com",
  projectId: "ecommerce-website-faa0e",
  storageBucket: "ecommerce-website-faa0e.appspot.com",
  messagingSenderId: "512123843568",
  appId: "1:512123843568:web:a8fdf00710578cb2aee335",
  measurementId: "G-8ZQTBSHEVN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore=getFirestore(app)

export  {analytics,auth,firestore}