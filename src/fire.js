import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCFPKmRLPOJ3vjg4cZhy9WLRWjMF8EggPE",
  authDomain: "bientondu-b86da.firebaseapp.com",
  databaseURL: "https://bientondu-b86da.firebaseio.com",
  projectId: "bientondu-b86da",
  storageBucket: "bientondu-b86da.appspot.com",
  messagingSenderId: "992938547852"
}
var fire = firebase.initializeApp(config);
export default fire;
