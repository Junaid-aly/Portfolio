
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWN21Rc49TkCc4DHVLB3CgAtXIrUQ_H0E",
  authDomain: "emailsend-8d70d.firebaseapp.com",
  projectId: "emailsend-8d70d",
  storageBucket: "emailsend-8d70d.appspot.com",
  messagingSenderId: "656919875163",
  appId: "1:656919875163:web:b4e57f836061feb7cd797e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const emailAddress = document.getElementById("emailAddress").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const emailSubject = document.getElementById("emailSubject").value;
  const message = document.getElementById("message").value;

  try {
    // Add data to Firestore
    const docRef = await addDoc(collection(db, "contacts"), {
      fullName: fullName,
      emailAddress: emailAddress,
      mobileNumber: mobileNumber,
      emailSubject: emailSubject,
      message: message,
    });
    console.log("Document written with ID: ", docRef.id);
    alert("Message sent successfully!");
    // Reset form
    contactForm.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error! Please try again.");
  }



});


// const contactsCollectionRef = collection(db, "contacts");

// // Function to fetch data from the collection
// const getContactsData = async () => {
//   try {
//     const querySnapshot = await getDocs(contactsCollectionRef);
//     querySnapshot.forEach((doc) => {
//       // Access individual document data
//       console.log(doc.id, " => ", doc.data());
//       // Here, `doc.id` gives the ID of the document and `doc.data()` gives the data of the document
//     });
//   } catch (error) {
//     console.error("Error getting documents: ", error);
//   }
// };

// getContactsData()
