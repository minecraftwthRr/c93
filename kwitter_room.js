var firebaseConfig = {
      apiKey: "AIzaSyDkacYq-krYg3ltAqxMxKPmAz-kmV_8z2A",
      authDomain: "chat-app-cc45d.firebaseapp.com",
      databaseURL: "https://chat-app-cc45d-default-rtdb.firebaseio.com",
      projectId: "chat-app-cc45d",
      storageBucket: "chat-app-cc45d.appspot.com",
      messagingSenderId: "525094138280",
      appId: "1:525094138280:web:420f2ed536fe399b3ead9d",
      measurementId: "G-6YE1H89RQ6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row
       });
   });

}
getData();
