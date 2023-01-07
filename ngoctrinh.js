// create_app(".a")

//--------------------------------------------
// TODO: Replace with your app's Firebase project configuration
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
    
    firebase.database().ref("/LIVINGROOM").set({
      "humii": "0",
      "light1": "0",
      "humi": "0",
      "tempi" :"0",
      "temp":"0"
    })

    //Den 01
    var btnOn = document.getElementById("btnOnId_01");
    var btnOff = document.getElementById("btnOffId_01");
    
    btnOn.onclick = function(){
      // document.getElementById("denId_01").src = "./img/light_bulb.png"
      //database.ref("/TT_IoT/Hum").remove();
    
      database.ref("/LIVINGROOM").update({
        "light1" : "1"
        // "Hum" : null
      });
    }
    
    btnOff.onclick = function(){
        // document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    
      database.ref("/LIVINGROOM").update({
        "light1" : "0"
      });
    }
    //auto update ImgDen
    database.ref("/LIVINGROOM/light1").on("value", function(snapshot) {
      if(snapshot.exists()){
        var ss = snapshot.val();
        if(ss==1)
          document.getElementById("denId_01").src = "./img/bulb_on.png";
        else
          document.getElementById("denId_01").src = "./img/bulb_off.png"
      }else
        console.log("No data available!")
    });
    
    //NHiệt độ 
    var btnOn = document.getElementById("btnOnId_02");
    var btnOff = document.getElementById("btnOffId_02");
    
    btnOn.onclick = function(){
      // document.getElementById("denId_01").src = "./img/light_bulb.png"
      //database.ref("/TT_IoT/Hum").remove();
    
      database.ref("/LIVINGROOM").update({
        "tempi" : "1"
        // "Hum" : null
      });
    }
    
    btnOff.onclick = function(){
        // document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    
      database.ref("/LIVINGROOM").update({
        "tempi" : "0"
      });
    }
    //auto update ImgDen
    database.ref("/LIVINGROOM/tempi").on("value", function(snapshot) {
      if(snapshot.exists()){
        var ss = snapshot.val();
        if(ss==1)
          document.getElementById("tempi").src = "./img/fan-on.png";
        else
          document.getElementById("tempi").src = "./img/fan-off.png"
      }else
        console.log("No data available!")
    });
  
    //Độ ẩm
    var btnOn = document.getElementById("btnOnId_03");
    var btnOff = document.getElementById("btnOffId_03");
    
    btnOn.onclick = function(){
      // document.getElementById("denId_01").src = "./image/light_bulb.png"
      //database.ref("/TT_IoT/Hum").remove();
    
      database.ref("/LIVINGROOM").update({
        "humii" : "1"
        // "Hum" : null
      });
    }
    
    btnOff.onclick = function(){
        // document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    
      database.ref("/LIVINGROOM").update({
        "humii" : "0"
      });
    }
    //auto update ImgDen
    database.ref("/LIVINGROOM/humii").on("value", function(snapshot) {
      if(snapshot.exists()){
        var ss = snapshot.val();
        if(ss==1)
          document.getElementById("humii").src = "./img/doam_on.png";
        else
          document.getElementById("humii").src = "./img/doam_off.png"
      }else
        console.log("No data available!")
    });
  
  
    //get Temp from Firebase (auto update when data changes)-------------
    database.ref("/LIVINGROOM/temp").on("value", function(snapshot) {
      if(snapshot.exists()){
        var temp = snapshot.val();
        document.getElementById("nhietdo").innerHTML = temp;
      }
      else
        console.log("No data available!")
    });
    //get Humi from Firebase (auto update when data changes)-------------
    database.ref("/LIVINGROOM/humi").on("value", function(snapshot) {
      if(snapshot.exists()){
        var humi = snapshot.val();
        document.getElementById("doam").innerHTML = humi;
      }
      else
        console.log("No data available!")
    });
  
  
    // test: get once.
    database.ref("/LIVINGROOM").get().then((snapshot) => {
      if(snapshot.exists())
        console.log(snapshot.val())
      else
        console.log("no data available!")
    })
  

  
  
  
  
