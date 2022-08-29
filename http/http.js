import axios from "axios";


// Function to store a new user in the users node in Firebase
function storeUser(userData) {
    axios.post("https://telemats-18158-default-rtdb.firebaseio.com/users.json", expenseData);
    
}; 
