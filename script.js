function openLink(link){
  window.open(link,"_blank");
}


// Calculator display
const calcDisplay = document.getElementById("calculator-display");

// Append number/operator
function calcAppend(val){
  if(calcDisplay.innerText==="0" || calcDisplay.innerText==="Error")
    calcDisplay.innerText="";
  calcDisplay.innerText += val;
}

// Clear display
function calcClear(){
  calcDisplay.innerText = "0";
}

// Backspace last char
function calcBack(){
  calcDisplay.innerText = calcDisplay.innerText.slice(0,-1);
  if(calcDisplay.innerText==="") calcDisplay.innerText="0";
}

// Calculate expression
function calcCalculate(){
  try{
    const exp = calcDisplay.innerText.replace('%','/100');
    calcDisplay.innerText = eval(exp);
  }catch{
    calcDisplay.innerText = "Error";
  }
}
