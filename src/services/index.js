import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDvQcoBFSpp5rWe0e9WOOqpFEuuecAgWJU",
  authDomain: "proyecto-meatstore.firebaseapp.com",
  projectId: "proyecto-meatstore",
  storageBucket: "proyecto-meatstore.appspot.com",
  messagingSenderId: "26324956126",
  appId: "1:26324956126:web:7daaf79503e33c61ece34f",
  measurementId: "G-MFQZDS0THS"
  };

  const app = initializeApp(config);
  const db = getFirestore(app)
  export default db
  