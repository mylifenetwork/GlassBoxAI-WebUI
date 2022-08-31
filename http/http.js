import axios from "axios";

// url to the backend firebase created project
const BACKEND_FIREBASE_URL = "https://telemats-18158-default-rtdb.firebaseio.com"


// Function to store a new user in the users node in Firebase
export function storeUser(userData) {
    axios.post(BACKEND_FIREBASE_URL +"users.json", userData);
    
}; 


export function getUser() {

};



