// Firebase CDN.
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

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


// let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// const tabBtn = document.getElementById("tab-btn");

// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage;
//   render(myLeads);
// }

// tabBtn.addEventListener("click", function () {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     myLeads.push(tabs[0].url);
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));
//     render(myLeads);
//   });
// });

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

deleteBtn.addEventListener("dblclick", function () {
  // localStorage.clear();
  // myLeads = [];
  // render(myLeads);
});

inputBtn.addEventListener("click", function () {
  // myLeads.push(inputEl.value);
  inputEl.value = "";
  // localStorage.setItem("myLeads", JSON.stringify(myLeads));
  // render(myLeads);
});
