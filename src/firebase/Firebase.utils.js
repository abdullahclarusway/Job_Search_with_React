import firebase from "firebase/app";
import "firebase/auth";
import { customErrorHandler } from "../helper/customErrorHandler";
//firestore
const firebaseConfig = {
  apiKey: "AIzaSyAZSqisBoxkSJimMUWFx9ZCr4Hp7GvbNlY",
  authDomain: "find-jobs-app.firebaseapp.com",
  projectId: "find-jobs-app",
  storageBucket: "find-jobs-app.appspot.com",
  messagingSenderId: "153911193602",
  appId: "1:153911193602:web:ea1eb9066d2a09fb1e771b",
};


class Firebase {
  constructor() {
    //TODO: add initialize check :: if (firebase.apps.length === 0)
    firebase.initializeApp(firebaseConfig);
    console.log("firebase", firebase);
    this.firebaseAuth = firebase.auth();
  }

  // register registerWithEmailAndPassword
  async register(displayName, email, password) {
    try {
      await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.firebaseAuth.currentUser.updateProfile({
        displayName,
      });
    } catch (err) {
      console.log("F. Error:", err);
    }
  }

  // sign in/up with google GoogleAuthProvider
  useGoogleProvider() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    this.firebaseAuth.signInWithPopup(googleProvider);
  }

  // login  signInWithEmailAndPassword
  async signIn(email, password) {
    try {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      return customErrorHandler(error);
    }
  }

  //   // logout signOut
  //   signOut() {
  //     this.firebaseAuth.signOut();
  //   }

  //   // forgot password sendPasswordResetEmail
  //   async forgotPassword(email) {
  //     try {
  //       await this.firebaseAuth.sendPasswordResetEmail(email);
  //       window.location.href = "/";
  //     } catch (error) {
  //       return customErrorHandler(error);
  //     }
  //   }
}

export default new Firebase();
