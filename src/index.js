import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clevertap from 'clevertap-web-sdk';

clevertap.setOffline(true)
clevertap.init('ZWW-WWW-WWRZ')
clevertap.privacy.push({ optOut: false, useIP: true });
clevertap.dismissSpamControl = true

// clevertap.onUserLogin.push({
//   "Site": {
//     "Name": "Sonam",                         // String
//     "Identity": 610260622,                      // String or number
//     "Email": "amee10Aug@test.com",               // Email address of the user
//     "Phone": "+14159551234",                    // Phone (with the country code)
//     "Gender": "F",                              // Can be either M or F
//     // "DOB": new Date(),                          // Date of Birth. Javascript Date object
//     // "Photo": 'www.foobar.com/image.jpeg',       // URL to the Image
//     "Price": 69.99,
//   }
// })
// function enablePush() {
//   clevertap.notifications.push({
//     "titleText": "Would you like to receive Push Notifications?",
//     "bodyText": "We promise to only send you relevant content and give you updates on your transactions",
//     "okButtonText": "Ok",
//     "rejectButtonText": "Cancel",
//     "okButtonColor": "#F28046",
//     "askAgainTimeInSeconds": 5,
//     "serviceWorkerPath": "./firebase-messaging-sw.js"
//   });
// }
// enablePush()
// clevertap.init('WRK-485-456Z', 'sk1-staging-4', 'wzrkt.com')
// clevertap.init('4R4-5K9-475Z', 'sk1-staging-4', 'wzrkt.com')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
