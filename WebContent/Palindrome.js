function evalText() {
	var isNot = "";
	var text = text = document.getElementById("inputField").value;

	if(text === '') {
		document.getElementById("result").innerHTML = "Please enter some text in the field above.";
		document.getElementById("inputField").focus();
		return
	}
	
	if (isPal(text) !== true) {
		isNot = " not";
	}
	document.getElementById("result").innerHTML = "<span style='font-weight:bold'>" + text + "</span> is" + isNot + " a palindrome.";
	document.getElementById("inputField").focus();
	document.getElementById("inputField").value = '';
	return;
	
	function isPal(text) {
		var i; 
		var result = true;

		// Treat upper and lowercase as equal...
		text = text.toUpperCase();
		
		// Strip out non-alpha characters...
		text = text.replace(/[^A-Za-z0-9]/g, '');
		

		for (i = 0; i < text.length / 2; i++) {
			if (text.charAt(i) !== text.charAt(text.length - i - 1)) {
				result = false;
				break;
			}
		}
		return result;
	}
}

// Sample text: Ah, Satan sees Natasha.
// Go hang a salami, I'a lasgna hog.