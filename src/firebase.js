import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyD-Y0SgrZAn4DkvuKOkvZt65KyUaeNplgA",
    authDomain: "loginsignup-a89c6.firebaseapp.com",
    databaseURL: "https://loginsignup-a89c6.firebaseio.com",
    projectId: "loginsignup-a89c6",
    storageBucket: "",
    messagingSenderId: "85982197972"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  export const fireBaseApp = firebase.auth()