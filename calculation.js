const diposite = document.getElementById('diposite');
let dipositeValue = parseFloat(diposite.innerText);

const withdrow = document.getElementById('withdrow');
let withdrowValue = parseFloat(withdrow.innerText);


const balance = document.getElementById('balance');
let balanceValue = parseFloat(balance.innerText);

document.getElementById('diposite-button').addEventListener('click', function () {
    const dipositeField = document.getElementById('diposite-amount');
    let dipositeAmount = parseFloat(dipositeField.value);


    if (dipositeAmount > 0) {
        let total = balanceValue + dipositeAmount;
        balance.innerText = total.toFixed(2);
        balanceValue = total;

        let totalDiposite = dipositeValue + dipositeAmount;
        diposite.innerText = totalDiposite.toFixed(2);
        dipositeValue = totalDiposite;
        dipositeField.value = '';

    }
    else {
        dipositeField.value = '';
    }

})

document.getElementById('Withdrow-button').addEventListener('click', function () {

    const withdrowField = document.getElementById('withdrow-amount');
    let withdrowAmount = parseFloat(withdrowField.value);

    if (withdrowAmount > 0 && withdrowAmount <= balanceValue) {
        let totalWithdrow = withdrowAmount + withdrowValue;
        withdrow.innerText = totalWithdrow.toFixed(2);
        withdrowValue = totalWithdrow;

        let total = balanceValue - withdrowAmount;
        balance.innerText = total.toFixed(2);
        balanceValue = total;
        withdrowField.value = '';

    }
    else if (withdrowAmount > balanceValue) {

        alert("You do not have enough Money")
        withdrowField.value = '';
    }
    else {
        withdrowField.value = '';
    }


})