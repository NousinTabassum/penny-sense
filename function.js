//---------------funtion to get value from input field-----------//

function getInputById(inputId) {
    let inputField = document.getElementById(inputId);
    let inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;

}

//---------------function to get current value-------------------//
function getCurrentValueById(inputId) {
    let currentField = document.getElementById(inputId);
    let currentValue = parseFloat(currentField.innerText);
    return currentValue;
}

//-----------function to add or sub input value and current value---------//
function addTotalValue(input1, input2) {
    let newSum = input1 + input2;
    return newSum;
}
function subTotalValue(input1, input2) {
    let newSub = Math.abs(input1 - input2);
    return newSub;
}

//-----------function to Show value on webpage------------------//
function showValue(newValue, textArea) {
    let textField = document.getElementById(textArea);
    textField.innerText = newValue.toFixed(2);
    return textField.innerText;
}

document.getElementById('diposite-button').addEventListener('click', function () {
    let input = getInputById('diposite-amount');

    if (input >= 0) {
        let previousValue = getCurrentValueById('diposite');
        let newValue = addTotalValue(input, previousValue);
        showValue(newValue, 'diposite');

        let previousBalance = getCurrentValueById('balance');
        let newBanalce = addTotalValue(input, previousBalance);
        previousBalance = newBanalce;
        showValue(newBanalce, 'balance');
    }
    else {
        alert('Please Enter a Valid Value');
    }

})

document.getElementById('withdrow-button').addEventListener('click', function () {
    let input = getInputById('withdrow-amount');
    let previousValue = getCurrentValueById('withdrow');
    let previousBalance = getCurrentValueById('balance');


    if (input <= previousBalance && input >= 0) {
        let newValue = addTotalValue(input, previousValue);
        showValue(newValue, 'withdrow');

        let newBanalce = subTotalValue(input, previousBalance);
        previousBalance = newBanalce;
        showValue(newBanalce, 'balance');
    }
    else if (input > previousBalance) {
        alert("You do not have enough money");
    }
    else {
        alert('Please Enter a Valid Value');
    }

})