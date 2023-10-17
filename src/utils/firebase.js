// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'next-blog-48810.firebaseapp.com',
  projectId: 'next-blog-48810',
  storageBucket: 'next-blog-48810.appspot.com',
  messagingSenderId: '107032849285',
  appId: '1:107032849285:web:fe8d2832e1df61d98232ec',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
