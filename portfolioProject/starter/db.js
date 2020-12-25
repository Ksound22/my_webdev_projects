// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwdO0_7HCp-JV3m1e0BufeyJBpchtqqUE",
  authDomain: "portfoliodb-3fe08.firebaseapp.com",
  databaseURL: "https://portfoliodb-3fe08-default-rtdb.firebaseio.com",
  projectId: "portfoliodb-3fe08",
  storageBucket: "portfoliodb-3fe08.appspot.com",
  messagingSenderId: "171017081381",
  appId: "1:171017081381:web:4d07fba56cbc657667e5cc",
  measurementId: "G-5JYMDFE9BW",
};

// Reference messages collection
const messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  console.log("firebase");

  //   Get values
  const name = getInputVal("name");
  const email = getInputVal("email");
  const message = getInputVal("message");

  //   Save message
  saveMessage(name, email, message);
}

// Function to get form values

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}
