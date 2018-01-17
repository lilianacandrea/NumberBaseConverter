function initialArray() {
    this.length = initialArray.arguments.length;
    for (var i = 0; i < this.length; i++) {
        this[i] = initialArray.arguments[i];
    }
}

function baseConverter(value, initialBase, changeBase) {
	var insertedNumber;
	var templateNumber;
	var convertedArray = new initialArray(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F');
	var returnedValue = '';
	var i = 0;

	value = myForm.converted_value.value;
	insertedNumber = parseInt(value, initialBase);

	if (isNaN(insertedNumber)) {
		returnedValue = "NaN";
	} else if (insertedNumber < 1){
		returnedValue = "0";
	} else {
		returnedValue = "";
	}
	while (insertedNumber != 0){
		i++;
		templateNumber = insertedNumber;
		returnedValue = convertedArray[templateNumber % changeBase] + returnedValue;
		insertedNumber = Math.floor(templateNumber / changeBase);
		if (i > 100) {
			returnedValue = "NaN";
			break;
		}
	}
	return returnedValue;
}

function handleSelectFromBase(initial_base) {
	var selectedFromBase = myForm.optionsList.value;
	if (selectedFromBase) {
		myForm.result.value = baseConverter(parseInt(myForm.converted_value.value), parseInt(selectedFromBase), parseInt(myForm.toBase.value)); 
	}
}

function handleSelectToBase(change_base) {
	var selectedToBase = myForm.toBase.value;
	if (selectedToBase) {
		myForm.result.value = baseConverter(parseInt(myForm.converted_value.value), parseInt(myForm.optionsList.value), parseInt(selectedToBase)); 
	}
}

function onKeyUp(myForm) {
	var keyPressedValue = myForm.converted_value.value;
	if (keyPressedValue) {

		myForm.result.value = baseConverter(parseInt(keyPressedValue), parseInt(myForm.optionsList.value), parseInt(myForm.toBase.value));

	}
}
	// I need to continue the validation part. :) 
// function validate() {

// 	var selectedFromBase = document.myForm.optionsList;
// 	var selectedToBase = document.myForm.toBase;
// 	var insertedValue = document.myForm.converted_value;

// 	if (isNaN(parseInt(insertedValue, 2))){    	  
//     	return false;
//     }else {
//      	return true;
//      }
//      if (isNaN(parseInt(insertedValue, 2))) {
//     	return false;
//     } else {
//     	return true;
//     }
// }



