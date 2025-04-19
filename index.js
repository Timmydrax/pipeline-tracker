// Firebase CDN.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Your web app's Firebase configuration.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "pipeline-tracker-f4f4f.firebaseapp.com",
  projectId: "pipeline-tracker-f4f4f",
  storageBucket: "pipeline-tracker-f4f4f.firebasestorage.app",
  messagingSenderId: "388244161041",
  appId: "1:388244161041:web:8cfc05e4194ea28f89e7b0",
  dataBaseURL: import.meta.env.VITE_DATABASE_URL,
};

// App variable to Initialize Firebase.
const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);
const referenceInDB = ref(dataBase, "leads");
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

// Firebase onValue function from Database that supports Snapshot..
onValue(referenceInDB, function (snapshot) {
  const snapshotDoesExist = snapshot.exists();
  console.log(snapshotDoesExist);

  if (snapshotDoesExist) {
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);
  }
});

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
  // The Firebase push function (Where to push, The data to be pushed)
  push(referenceInDB, inputEl.value);
  inputEl.value = "";
});
