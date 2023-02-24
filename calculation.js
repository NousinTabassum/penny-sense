const diposite = document.getElementById('diposite');
let dipositeValue = parseInt(diposite.innerText);

const withdrow = document.getElementById('withdrow');
let withdrowValue = parseInt(withdrow.innerText);


const balance = document.getElementById('balance');
let balanceValue = parseInt(balance.innerText);

document.getElementById('diposite-button').addEventListener('click', function () {
    const dipositeField = document.getElementById('diposite-amount');
    let dipositeAmount = parseInt(dipositeField.value);


    if (dipositeAmount > 0) {
        let total = balanceValue + dipositeAmount;
        balance.innerText = total;
        balanceValue = total;
        dipositeField.value = '';

        let totalDiposite = dipositeValue + dipositeAmount;
        diposite.innerText = totalDiposite;
        dipositeValue = totalDiposite;
        dipositeField.value = '';

    }

})

document.getElementById('Withdrow-button').addEventListener('click', function () {

    const withdrowField = document.getElementById('withdrow-amount');
    let withdrowAmount = parseInt(withdrowField.value);

    if (withdrowAmount > 0) {
        let totalWithdrow = withdrowAmount + withdrowValue;
        withdrow.innerText = totalWithdrow;
        withdrowValue = totalWithdrow;
        withdrowField.value = '';

        let total = balanceValue - withdrowAmount;
        balance.innerText = total;
        balanceValue = total;
        withdrowField.value = '';

    }


})