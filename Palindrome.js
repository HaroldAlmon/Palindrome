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
		// Used as left and right indices in the string.
		var i, j; 
		var result = true;

		// Treat upper and lowercase as equal...
		text = text.toUpperCase();
		
		// Strip out non-alpha characters...
		text = text.replace(/[^A-Za-z0-9]/g, '');
		
		i = 0;
		j = text.length - 1;

		// Move towards the center of the string from the start and end of
		// the string...
		for (; i < j; i++, j--) {
			if (text.charAt(i) !== text.charAt(j)) {
				// Okay, chars do not match, it's not a palindrome...
				result = false;
				break;
			}
		}
		return result;
	}
}

// Sample text: Ah, Satan sees Natasha.
// Go hang a salami, I'a lasgna hog.