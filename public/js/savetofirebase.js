function initializeFirebase(){
    var config = {
    apiKey: "AIzaSyAUbigpi_NUPd-Q-GjqYyO1vXRliqnem80",
    authDomain: "proxibox-8ba90.firebaseapp.com",
    databaseURL: "https://proxibox-8ba90.firebaseio.com/",
    storageBucket: "gs://proxibox-8ba90.appspot.com"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
}