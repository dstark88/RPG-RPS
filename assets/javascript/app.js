$(document).ready(function () {
    // Firebase API information
    var config = {
        apiKey: "AIzaSyBV-NGmIx8O0M2AYrhk5L7rdkIP-v0aUs4",
        authDomain: "rock-paper-scissors-x2.firebaseapp.com",
        databaseURL: "https://rock-paper-scissors-x2.firebaseio.com",
        projectId: "rock-paper-scissors-x2",
        storageBucket: "rock-paper-scissors-x2.appspot.com",
        messagingSenderId: "341221885393"
    };

    //   Firebase initialization (starts Firebase)
    firebase.initializeApp(config);

    // Simplifying database name for future js use

    var database = firebase.database();

    

});