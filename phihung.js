// create_app(".a")

//--------------------------------------------
// TODO: Replace with your app's Firebase project configuration // để liên kết firebase 
const firebaseConfig = {
  apiKey: "AIzaSyAbAGWOx39Ts9pZnCzvBtikoH2KhowihbQ",
  authDomain: "final-project-mysmarthome.firebaseapp.com",
  databaseURL: "https://final-project-mysmarthome-default-rtdb.firebaseio.com",
  projectId: "final-project-mysmarthome",
  storageBucket: "final-project-mysmarthome.appspot.com",
  messagingSenderId: "585200188214",
  appId: "1:585200188214:web:250e171c7b4867fbb3d197",
  };
  
    firebase.initializeApp(firebaseConfig); 
    
    // Get a reference to the database service
    var database = firebase.database();
    
    firebase.database().ref("/BEDROOM").set({
      "light": "0",
      "lamp": "0",
      "air": "0",
      "temp" :"0",
      "humi":"0"
    })
    
    //Den 01   gán biến tới btnOnId_01 html
    var btnOn = document.getElementById("btnOnId_01");
    var btnOff = document.getElementById("btnOffId_01");
    
    btnOn.onclick = function(){   
      // document.getElementById("denId_01").src = "./img/light_bulb.png"
      //database.ref("/TT_IoT/Hum").remove();
    
      database.ref("/BEDROOM").update({
        "light" : "1"
        // "Hum" : null
      });
    }
    
    btnOff.onclick = function(){
        // document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    
      database.ref("/BEDROOM").update({
        "light" : "0"
      });
    }
    //auto update ImgDen
    database.ref("/BEDROOM/light").on("value", function(snapshot) {
      if(snapshot.exists()){
        var ss = snapshot.val();
        if(ss==1)
          document.getElementById("denId_01").src = "./image/light_bulb.png";
        else
          document.getElementById("denId_01").src = "image/light_bulb_off.png"
      }else
        console.log("No data available!")
    });
    
    //Den 02
    var btnOn = document.getElementById("btnOnId_02");
    var btnOff = document.getElementById("btnOffId_02");
    
    btnOn.onclick = function(){
      // document.getElementById("denId_01").src = "./img/light_bulb.png"
      //database.ref("/TT_IoT/Hum").remove();
    
      database.ref("/BEDROOM").update({
        "lamp" : "1"
        // "Hum" : null
      });
    }
    
    btnOff.onclick = function(){
        // document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    
      database.ref("/BEDROOM").update({
        "lamp" : "0"
      });
    }
    //auto update ImgDen
    database.ref("/BEDROOM/lamp").on("value", function(snapshot) {
      if(snapshot.exists()){
        var ss = snapshot.val();
        if(ss==1)
          document.getElementById("denId_02").src = "./image/lamp_on.png";
        else
          document.getElementById("denId_02").src = "./image/lamp_off.png"
      }else
        console.log("No data available!")
    });
  
    //Den 03
    var btnOn = document.getElementById("btnOnId_03");
    var btnOff = document.getElementById("btnOffId_03");
    
    btnOn.onclick = function(){
      // document.getElementById("denId_01").src = "./image/light_bulb.png"
      //database.ref("/TT_IoT/Hum").remove();
    
      database.ref("/BEDROOM").update({
        "air" : "1"
        // "Hum" : null
      });
    }
    
    btnOff.onclick = function(){
        // document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    
      database.ref("/BEDROOM").update({
        "air" : "0"
      });
    }
    //auto update ImgDen
    database.ref("/BEDROOM/air").on("value", function(snapshot) {
      if(snapshot.exists()){
        var ss = snapshot.val();
        if(ss==1)
          document.getElementById("air").src = "./image/air_on.png";
        else
          document.getElementById("air").src = "./image/air_off.png"
      }else
        console.log("No data available!")
    });
  
  
    //get Temp from Firebase (auto update when data changes)-------------
    database.ref("/BEDROOM/temp").on("value", function(snapshot) {
      if(snapshot.exists()){
        var temp = snapshot.val();
        document.getElementById("nhietdo").innerHTML = temp;
      }
      else
        console.log("No data available!")
    });
    //get Humi from Firebase (auto update when data changes)-------------
    database.ref("/BEDROOM/humi").on("value", function(snapshot) {
      if(snapshot.exists()){
        var humi = snapshot.val();
        document.getElementById("doam").innerHTML = humi;
      }
      else
        console.log("No data available!")
    });
  
  
    // test: get once.
    database.ref("/BEDROOM").get().then((snapshot) => {
      if(snapshot.exists())
        console.log(snapshot.val())
      else
        console.log("no data available!")
    })
  

  
  
  
  
