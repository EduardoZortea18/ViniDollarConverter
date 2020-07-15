document.getElementById('real').addEventListener('keyup', ConvertToDollar);
document.getElementById('real').addEventListener('keyup', ConvertToEuro);
document.getElementById('real').addEventListener('keyup', ConvertToLibra);

function ConvertToDollar(){
    let realPrice = document.getElementById('real').value;
    let dollarPrice = realPrice * 5;

    document.getElementById('dollar').value = "  $ " + dollarPrice;
}

function ConvertToEuro(){
    let realPrice = document.getElementById('real').value;
    let euroPrice = realPrice * 6.5;

    document.getElementById('euro').value = "  € " + euroPrice;
}

function ConvertToLibra(){
    let realPrice = document.getElementById('real').value;
    let libraPrice = realPrice * 7.5;

    document.getElementById('libra').value = "  £ " + libraPrice;
}
