var firebaseConfig = {
    apiKey: "AIzaSyCt49KaKJ4ozY2JtldpQ-odPJjivzki0lo",
    authDomain: "test-dfd40.firebaseapp.com",
    databaseURL: "https://test-dfd40-default-rtdb.firebaseio.com",
    projectId: "test-dfd40",
    storageBucket: "test-dfd40.appspot.com",
    messagingSenderId: "813928204903",
    appId: "1:813928204903:web:4f43e85204cb114b87e2c2"
  };

firebase.intializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementId("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}