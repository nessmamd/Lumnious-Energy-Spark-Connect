let inputfirst = "";
let inputsecond = ""; 
let inputthird = ""; 
let inputfourth = ""; 
let inputfifth = ""; 
let retro = [];

function togglePopup() {
    var popup = document.getElementById("questionPopup");
    popup.style.display = popup.style.display === "none" ? "flex" : "none";
}

function hidePopup() {
    var popup = document.getElementById("questionPopup");
    popup.style.display = "none";
}

window.onclick = function(event) {
    var popup = document.getElementById("questionPopup");
    if (event.target == popup) {
        hidePopup();
    }
}


function togglePopupTwo() {
    var popup = document.getElementById("instrPopUp");
    popup.style.display = popup.style.display === "none" ? "flex" : "none";
}


function hidePopupTwo() {
    var popup = document.getElementById("instrPopUp");
    popup.style.display = "none";
}

window.onclick = function(event) {
    var popup = document.getElementById("instrPopUp");
    if (event.target == popup) {
        hidePopupTwo();
    }
}

// function returnText(){
//     inputfirst = document.getElementById("question").value; 
//     console.log(inputfirst); 
//     changeState("questionOne", "questionTwo"); 

// }

// function returnTextTwo(){
//     inputsecond = document.getElementById("questiontwo").value;
//     console.log(inputsecond);
//     changeState("questionTwo", "questionThree"); 
// }

// function returnTextThree(){
//     inputthird = document.getElementById("questionthree").value;
//     console.log(inputthird);
//     changeState("questionThree", "questionFour"); 
// }

// function returnTextFour(){
//     inputfourth = document.getElementById("questionfour").value;
//     console.log(inputfourth);
//     changeState("questionFour", "questionFive"); 
// }

// function returnTextFive(){
//     inputfifth = document.getElementById("questionfive").value;
//     console.log(inputfifth);
//     changeState("questionFive", "questionSix"); 
// }

// function returnTextSix(){
//     changeState("questionSix", "questionSeven"); 
// }


// // function changeState(statefirst,statesecond){
// //     let x = document.getElementsByClassName(statefirst)[0]; 
// //     let y = document.getElementsByClassName(statesecond)[0]; 
// //     console.log(x.style); 
// //     x.style.display = "none"; 
// //     y.style.display = "inline"; 
// // }

function updateRetro(checkbox) {
    if (checkbox.checked) {
      retro.push(checkbox.value);
    } else {
      const index = retro.indexOf(checkbox.value);
      if (index > -1) {
        retro.splice(index, 1);
      }
    } console.log(retro); 
}

