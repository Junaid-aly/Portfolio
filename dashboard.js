// Initialize Firebase app and Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
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



// Function to fetch data from Firestore collection and display in dashboard
const getContactsData = async () => {
  var admin = prompt("Admin Account Required");
  if (admin == zunair) {;
    const table = document.getElementById("tableBody"); 
    tableBody.innerHTML

    try {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      querySnapshot.forEach((doc) => {
        // Create an HTML element for each document
        const data = doc.data();

        const row = document.createElement("tr");

        row.innerHTML += `
          <td ">
            <div class="d-flex  align-items-center ">
              <img
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt=""
                style="width: 45px; height: 45px"
                class="rounded-circle"
              />
              <div class="ms-3">
                <p class="fw-bold mb-1">${data.fullName}</p>
                <p class="text-muted mb-0"></p>
              </div>
            </div>
          </td>
          <td>
            <p class="fw-normal mb-1">${data.emailAddress}</p>
          </td>
          <td>
            <span class="badge badge-success rounded-pill d-inline">${data.emailSubject}</span>
          </td>
          <td>${data.message}</td>
          <td>
            <button type="button" class="btn btn-link btn-sm btn-rounded">
              ${data.mobileNumber}
            </button>
          </td>
        `;

        table.appendChild(row); // Append the row to the table
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  } else {
    alert("Wrong admin account");
    location.href = "index.html"; // Redirect to index.html if admin account is wrong
  }
};

// Call function to fetch and display data
getContactsData();
