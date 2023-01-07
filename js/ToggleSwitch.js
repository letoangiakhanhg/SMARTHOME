//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAbAGWOx39Ts9pZnCzvBtikoH2KhowihbQ",
    authDomain: "final-project-mysmarthome.firebaseapp.com",
    databaseURL: "https://final-project-mysmarthome-default-rtdb.firebaseio.com",
    projectId: "final-project-mysmarthome",
    storageBucket: "final-project-mysmarthome.appspot.com",
    messagingSenderId: "585200188214",
    appId: "1:585200188214:web:250e171c7b4867fbb3d197",

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
var database = firebase.database();

const switchButton = document.querySelector(".switch-input");

//  Toggle switch
function toggleSwitch(e) {
  console.log(switchButton.checked);
  if(switchButton.checked == true) {
    database.ref("/KITCHEN").update({
      "LIGHT" : 1
      // "Hum" : null
    });
    }
  else {
        database.ref("/KITCHEN").update({
            "LIGHT" : 0
    })
         }
}
switchButton.addEventListener("click",toggleSwitch);


    

