import React, { useState, useEffect } from 'react';
import clevertap from '../clevertap';

const Home = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        document.addEventListener('CT_web_native_display', function (e) {
            console.log('Event is ', clevertap.renderNotificationViewed(e.detail))
        })
    }, []);

    function clickEvent() {
        clevertap.event.push(text);
    };

    function enablePush() {
        clevertap.notifications.push({
            "titleText": "Would you like to receive Push Notifications?",
            "bodyText": "We promise to only send you relevant content and give you updates on your transactions",
            "okButtonText": "Ok",
            "rejectButtonText": "Cancel",
            "okButtonColor": "#F28046",
            "askAgainTimeInSeconds": 5,
            "serviceWorkerPath": "./firebase-messaging-sw.js",
            "hidePoweredByCT": false

        });
    }

    function clickOULEvent1() {
        clevertap.onUserLogin.push({
            "Site": {
                "Name": "Sonam",                         // String
                "Identity": 610260622,                      // String or number
                "Email": "amee10Aug@test.com",               // Email address of the user
                "Phone": "+14159551234",                    // Phone (with the country code)
                "Gender": "F",                              // Can be either M or F
                // "DOB": new Date(),                          // Date of Birth. Javascript Date object
                // "Photo": 'www.foobar.com/image.jpeg',       // URL to the Image
                "Price": 69.99,
            }
        })
    }

    function logout() {
        clevertap.logout()
    }

    function clickOULEvent2() {
        clevertap.onUserLogin.push({
            "Site": {
                "Name": "Ayush",                         // String
                "Identity": 610260623,                      // String or number
                "Email": "ayush@ct.in",               // Email address of the user
                "Phone": "+1413551234",                    // Phone (with the country code)
                "Gender": "M",                              // Can be either M or F
                // "DOB": new Date(),                          // Date of Birth. Javascript Date object
                // "Photo": 'www.foobar.com/image.jpeg',       // URL to the Image
                "Price": 90,
            }
        })
    }

    function disableOffline() {
        clevertap.setOffline(false)
        console.log("set to false")
    }
    
    function enableOffline() {
        clevertap.setOffline(true)
        console.log("set to true")
        
    }

    return (
        <div>
            <h1>Welcome !!!</h1>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={clickEvent} style={{ marginLeft: '8px' }}>Event Push</button>
            <div style={{ marginTop: '10px' }}>
                <button onClick={disableOffline}>Disable Offline</button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={enableOffline}>Enable Offline</button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={enablePush}>Enable Push Notifications</button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={clickOULEvent1}>Enable OUL 1</button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={logout}>Logout</button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <button onClick={clickOULEvent2}>Enable OUL 2</button>
            </div>
            <div id="hero-banner" style={{ marginTop: '10px' }}></div>
            <div>{navigator.userAgent}</div>
            <div>{clevertap.getCleverTapID()}</div>
            {/* <div style={{ position: 'fixed', bottom: 0, marginBottom: '20px' }}><button  id='bell-selector' style={{ marginLeft: '8px'}}>Inbox</button></div> */}
        </div>
    );
};

export default Home;