let display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0' && value !== '.') {
    display.innerText = value; 
  } else {
    display.innerText += value; 
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace('×', '*').replace('÷', '/'));
  } catch (error) {
    display.innerText = 'Error';
  }
}

function sqrt(){
let c_value=parseFloat(display.innerText);
if(!isNaN(c_value)){
  display.innerText=Math.sqrt(c_value);
}else{
  display.innerText="error";
}



}

function modulus(){

}