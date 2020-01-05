import React from 'react';
import * as firebaseui from 'firebaseui'
import firebase from "../lib/firestore";
import ModalWindow from './Modal';

class FirebaseAuth extends React.Component {
    constructor() {
        super();
        this.uiConfig = {
            signInSuccessUrl: '/', //<url-to-redirect-to-on-success>
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
             
            ],
            // tosUrl and privacyPolicyUrl accept either url string or a callback
            // function.
            // Terms of service url/callback.
            tosUrl: '<your-tos-url>',
            // Privacy policy url/callback.
            privacyPolicyUrl: function () {
                window.location.assign('<your-privacy-policy-url>');
            }
        };

        // Initialize the FirebaseUI Widget using Firebase.
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        this.ui.start('#firebaseui-auth-container', this.uiConfig);
    }

    render() {
        return <div id="firebaseui-auth-container"></div>
        
            // <ModalWindow>
            // </ModalWindow>            
        // )
    }

}
export default FirebaseAuth;