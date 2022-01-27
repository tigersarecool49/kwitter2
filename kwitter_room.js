
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCgFAPjdrVwF0qxCVHfLj0by0b368suCTA",
      authDomain: "kwitter-460d0.firebaseapp.com",
      projectId: "kwitter-460d0",
      storageBucket: "kwitter-460d0.appspot.com",
      messagingSenderId: "599702901611",
      appId: "1:599702901611:web:dd213adfb5022f50e0322e"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
