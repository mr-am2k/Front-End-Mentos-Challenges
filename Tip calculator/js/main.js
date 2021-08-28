// Functions that are used to automaticlly update date from input filed in a variable
function changingPrice (newValue){
    bill = parseFloat(newValue);
    calculate();
}
function changingPeople (newValue){
    numberOfPeople = parseInt(newValue);
    calculate();
    zeroCaseDisplay();
}
function changingPercentage(newValue){
    customPercentage = parseInt(newValue);
    calculate();
    limitingPercentage();
}
// -------------------------------------------------------------------------------------
//Styling
//Limiting percentage input field, so if user inputs more than a 100, changes it to a 100
function limitingPercentage(){
    if(customPercentage > 100){
        document.querySelector(".percentage-input").value = "100";
        customPercentage = 100;
    }
}
// Variables in which is stored values from input fields
let bill = document.querySelector(".input-bill").value;
let numberOfPeople = document.querySelector(".input-for-people").value;
let customPercentage = document.querySelector(".percentage-input").value;
//Chosing right percentage
let buttons = document.querySelectorAll(".percentage-btn");
for (let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        customPercentage = parseInt(buttons[i].getAttribute("value"));
        document.querySelector(".percentage-input").value = ""
        //Styling  part for pressd button
        for(let j = 0; j<buttons.length; j++){
            if(j===i){
                document.querySelectorAll(".percentage-btn")[j].classList.add("percentage-button");
            }
            else{
                document.querySelectorAll(".percentage-btn")[j].classList.remove("percentage-button");
            }
        }
        calculate();
    })
}
//In case percentage input is pressed class for styled button is removed
document.querySelector(".percentage-input").addEventListener("click", function(){
    for (let i = 0; i<buttons.length; i++){
        document.querySelectorAll(".percentage-btn")[i].classList.remove("percentage-button");
    }
});
// Stlying input field for people in case input iz 0
function zeroCaseDisplay(){
    if (numberOfPeople === 0){
        document.querySelector(".zero-case").style.display = "inline";
        document.querySelector(".input-for-people").style.outlineStyle = "auto";
        document.querySelector(".input-for-people").style.outlineColor = "#ff0000";
    }
    else{
        document.querySelector(".zero-case").style.display = "none";
        document.querySelector(".input-for-people").style.outline = "none";
    }
}
//Preventing invalid inputs in input field 
let inputBox = document.querySelector("input");

let invalidChars = [
  "-",
  "+",
  "e",
];
inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
// -------------------------------------------------------------------------------------
//Function that does calculations
function calculate() {
    let totalTip = Math.round((bill * (customPercentage/100))*100)/100;
    let tipPerPerson = Math.round((totalTip / numberOfPeople)*100)/100;
    if(typeof(bill)==="number" && typeof(numberOfPeople)==="number" && typeof(customPercentage)==="number" && numberOfPeople !== 0 && !(isNaN(customPercentage))){
        document.querySelector(".total-tip-output").innerHTML = "$ " + totalTip;
        document.querySelector(".tip-person-output").innerHTML = "$ " + tipPerPerson;
    }
    else{
        document.querySelector(".total-tip-output").innerHTML = "";
        document.querySelector(".tip-person-output").innerHTML = "";
    }
}
// -------------------------------------------------------------------------------------
// Setting reset button
    resetBill =  document.querySelector(".input-bill");
    resetPercentage = document.querySelector(".percentage-input");
    resetPeople =  document.querySelector(".percentage-input");

document.querySelector(".reset").addEventListener("click", function(){
    document.querySelector(".input-bill").value = "";
    bill = "";
    document.querySelector(".input-for-people").value = "";
    numberOfPeople = "";
    document.querySelector(".percentage-input").value = "";
    customPercentage = ""
    for (let i = 0; i<buttons.length; i++){
        document.querySelectorAll(".percentage-btn")[i].classList.remove("percentage-button");
    }
    calculate();
    document.querySelector(".total-tip-output").innerHTML = "$ 0.0";
    document.querySelector(".tip-person-output").innerHTML = "$ 0.0";
})