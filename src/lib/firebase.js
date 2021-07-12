import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCBgSmgoJQ3sUKP91jFqWNb45cXznjkAfY',
  authDomain: 'instagram-5879e.firebaseapp.com',
  projectId: 'instagram-5879e',
  storageBucket: 'instagram-5879e.appspot.com',
  messagingSenderId: '912429754751',
  appId: '1:912429754751:web:d98be56020090e86bc924a'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
