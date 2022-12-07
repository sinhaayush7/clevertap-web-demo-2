// import logo from './logo.svg';
import './App.css';
import clevertap from './clevertap'
import { Component } from 'react';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { localStorage: '', cacheData: ''};
    // this.clickEvent = this.clickEvent.bind(this);x
  }

  componentDidMount() {
    clevertap.spa = true
  }

  // clickEvent() {
  //   clevertap.onUserLogin.push({ 
  //     "Site": {
  //       "Name": "Sonam",                         // String
  //       "Identity": 610260622,                      // String or number
  //       "Email": "amee10Aug@test.com",               // Email address of the user
  //       "Phone": "+14159551234",                    // Phone (with the country code)
  //       "Gender": "F",                              // Can be either M or F
  //       // "DOB": new Date(),                          // Date of Birth. Javascript Date object
  //       // "Photo": 'www.foobar.com/image.jpeg',       // URL to the Image
  //       "Price": 69.99,
  //     }
  //   })

  //   clevertap.notifications.push({
  //     "titleText":"Would you like to receive Push Notifications?",
  //     "bodyText":"We promise to only send you relevant content and give you updates on your transactions",
  //     "okButtonText":"Ok",
  //     "rejectButtonText":"Cancel",
  //     "okButtonColor":"#F28046",
  //     "askAgainTimeInSeconds":5,
  //     "serviceWorkerPath": "./firebase-messaging-sw.js"
  //   });
  //   clevertap.event.push("Product rated");

  //   document.addEventListener('CT_web_native_display', function(e) {
  //     console.log('Event is ', clevertap.renderNotificationViewed(e.detail))
  //   })
  // }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route exact path='/events' element={<Events/>} />
          <Route exact path='/annual' element={<AnnualReport/>} />
          <Route exact path='/team' element={<Teams/>} />
          <Route exact path='/blogs' element={<Blogs/>} />
          <Route exact path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //   <button class="notification">
      //     <span>Inbox</span>
      //   </button>
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <div>Clevertap Id is {clevertap.getCleverTapID()}</div>
      //     <div>
      //       Learn React later but for now:
      //       {this.state.localStorage.split("\n").map((i, key) => {
      //         return <div key={key}>{i}</div>;
      //       })}
      //       <button onClick={this.clickEvent}>Click Me</button>
      //       <div style={{padding: '10px'}}>{this.state.cacheData}</div>
      //     </div>
      //   </header>
      //   {/* <div id="hero-banner" style={{backgroundColor: 'red', width: '100%'}}></div> */}
      //   {/* <div id="hero-carousel" style={{backgroundColor: 'green', width: '100%', marginTop: '40px'}}></div> */}
      // </div>
    );
  }
}

export default App;
