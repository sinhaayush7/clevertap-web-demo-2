// import logo from './logo.svg';
// import './App.css';
// import clevertap from 'clevertap-web-sdk'
// import { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { localStorage: '', cacheData: ''};
//     this.clickEvent = this.clickEvent.bind(this);
//   }

//   componentDidMount() {
//     // clevertap.onUserLogin.push({
//     //   "Site": {
//     //     "Name": "Sonam Kamble",                  
//     //     "Identity": 777999,                    
//     //     "Email": "sonam@gmail.com",
//     //   }
//     // })
//     clevertap.event.push("React Web Campaign");

//     // clevertap.onUserLogin.push({
//     //   "Site": {"Name": "Sonam Kamble",                  // String
//     //   "Identity": 777999,                    // String or number
//     //   "Email": "sonam@gmail.com",
//     // }
//     // })
//     // this.getLS();
//     // // clevertap.notifications.push({
//     // //   "titleText": 'Notifications test',
//     // //   "bodyText": 'Notifications test message',
//     // //   "okButtonText": 'OK',
//     // //   "rejectButtonText": 'CANCEL',
//     // //   "okButtonColor":'#00ff00'});
//   }

//   logout() {
//     clevertap.logout();
//   }

//   getLS() {
//     var LRU_CACHE = decodeURIComponent(localStorage["WZRK_X"]);
//     var WZRK_K = decodeURIComponent(localStorage["WZRK_K"]);
//     var WZRK_G = decodeURIComponent(localStorage["WZRK_G"]);
//     var WZRK_EV = decodeURIComponent(localStorage["WZRK_EV"]);
//     var WZRK_ARP = decodeURIComponent(localStorage["WZRK_ARP"]);
//     var WZRK_L = decodeURIComponent(localStorage["WZRK_L"]);

//     var data = `WZRK_K: ${WZRK_K}\nWZRK_G: ${WZRK_G}\nLRU_CAHCE: ${LRU_CACHE}\nWZRK_EV: ${WZRK_EV}\nWZRK_ARP: ${WZRK_ARP}\nWZRK_L: ${WZRK_L}`;
//     console.log(clevertap.profile)
//     console.log(data);
//     this.setState({cacheData: data});
//   }

//   clickEvent() {
//     clevertap.event.push("React Web Test");
//     // clevertap.event.push("React Web Campaign");
//     // clevertap.onUserLogin.push({
//     //     "Site": {"Name": "Harry Potter",            // String
//     //     "Identity": 66654446,              // String or number
//     //     "Email": "harry@hp.com",         // Email address of the user
//     //     // "Phone": "+16665444",           // Phone (with the country code)
//     //     // "Gender": "M",                     // Can be either M or F
//     //     // "DOB": new Date(),                 // Date of Birth. Date object
     
//     //  // optional fields. controls whether the user will be sent email, push etc.
//     //     // "MSG-email": false,                // Disable email notifications
//     //     // "MSG-push": true,                  // Enable push notifications
//     //     // "MSG-sms": true,                   // Enable sms notifications
//     //     // "MSG-whatsapp": true,              // Enable WhatsApp notifications
//     // }
//     //  });
//     //  this.getLS();
//   }
//   // React Web Test
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>

//           <div>
//             Learn React later but for now:

//             {this.state.localStorage.split("\n").map((i, key) => {
//               return <div key={key}>{i}</div>;
//             })}
//             <button onClick={this.clickEvent}>Click Me</button>
//             <button onClick={this.logout}>Logout</button>
//             <div style={{padding: '10px'}}>{this.state.cacheData}</div>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

