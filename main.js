let checkEquationSign = false;


function operators (x){
	if (checkEquationSign == true) {
		calculator.display.value += x;
		checkEquationSign = false;
	} else {
		calculator.display.value += x;
	}
}


function figures (x){
 	if (checkEquationSign == true) {
 		calculator.display.value = x;
 		checkEquationSign = false;
 	}
 	else {
 		calculator.display.value += x;
 	}
 }

function toggle () {
	calculator.display.value = eval(calculator.display.value);
	checkEquationSign = true;
}