
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCBM4KHudeNdRCWpor5MiJlk4kRxVwH6uc",
    authDomain: "collegerankings-e2de4.firebaseapp.com",
    projectId: "collegerankings-e2de4",
    storageBucket: "collegerankings-e2de4.appspot.com",
    messagingSenderId: "992043975044",
    appId: "1:992043975044:web:29728840ed8f6470e3ddd1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


async function formFilled(e){
	e.preventDefault()

    var email  = document.getElementById('email')
    var password  = document.getElementById('password')
	
	var promise = firebase.auth().createUserWithEmailAndPassword(email.value,password.value);
	promise.catch(e => alert(e.message));
	
  	alert("Signed Up");
}