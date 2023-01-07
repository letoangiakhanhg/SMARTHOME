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
//----------------------------------------------------
// Draggable button
$(document).ready(function () {
  $(".swiper_button").draggable({
    axis: "x",
    containment: "parent",
  });
});

// Click option button
const optionButton = document.querySelectorAll(".option_button");
function handleClickOption(e) {
  optionButton.forEach((item) => {
    item.classList.remove("active");
    if (item === e.target || item === e.target.parentNode)
      item.classList.add("active");
  });
}
optionButton.forEach((item) =>
  item.addEventListener("click", handleClickOption)
);

//===========DOTS AROUND SLIDER==================
var dotsSingsBox = $(".visual-clocks--dots");
var dotSignItemClassName = "visual-clocks--dot-item";

function getDegForSing(number, step) {
  if (!step) step = 30;
  var indexDeg = -50;
  var stepDeg = step;
  return indexDeg + stepDeg * number;
}
function addDotSigns() {
  var htmlSigns = "";
  for (var i = 1; i <= 60; i++) {
    var deg = getDegForSing(i,9 );
    htmlSigns +=
      '<div class="' +
      dotSignItemClassName +
      '" style=" transform : rotate(' +
      deg +
      'deg);"></div>';
  }
  dotsSingsBox.html(htmlSigns);
}
addDotSigns();


// Draggable around circle
// function rotateAnnotationCropper(
//   offsetSelector,
//   xCoordinate,
//   yCoordinate,
//   cropper
// ) {
//   var x =
//     xCoordinate - offsetSelector.offset().left - offsetSelector.width() / 2;
//   var y =
//     -1 *
//     (yCoordinate - offsetSelector.offset().top - offsetSelector.height() / 2);
//   var theta = Math.atan2(y, x) * (180 / Math.PI);

//   var cssDegs = convertThetaToCssDegs(theta);
//   var rotate = "rotate(" + cssDegs + "deg)";
//   cropper.css({
//     "-moz-transform": rotate,
//     transform: rotate,
//     "-webkit-transform": rotate,
//     "-ms-transform": rotate,
//   });
//   $("body").on("mouseup", function (event) {
//     $("body").unbind("mousemove");
//   });
// }

// function convertThetaToCssDegs(theta) {
//   var cssDegs = 90 - theta;
//   return cssDegs;
// }

// $(document).ready(function () {
//   $(".control_button").on("mousedown", function () {
//     $("body").on("mousemove", function (event) {
//       rotateAnnotationCropper(
//         $(".room_control"),
//         event.pageX,
//         event.pageY,
//         $(".control_button")
//       );
//     });
//   });
// });
//----------ROUND SLIDER--------------------
var slider = $("#slider").roundSlider({
  startAngle: -35,
  endAngle: "+245",
  value: 0,
  min: 0,
  max: 36,
  step: 1,
  tooltipFormat: function(e) 
  {
    let val = e.value;
    return  
  }                
})


slider.on('change', () => {
  sliderValue = slider.roundSlider("getValue");
  console.log(sliderValue);
  database.ref("/KITCHEN").update({
    "TEMP" : sliderValue
  
  });
})
//------------------HUMIDITY---------------------
//get Humi from Firebase (auto update when data changes)-------------
database.ref("/KITCHEN/humi").on("value", function(snapshot) {
  if(snapshot.exists()){
    var humi01 = snapshot.val();
    document.getElementById("doam").innerHTML = humi01;
  }
  else
    console.log("No data available!")
});


