document.getElementById('real').addEventListener('keyup', ConvertToDollar);
// document.getElementById('dollar').addEventListener('keyup', ConvertToReal);

function ConvertToDollar(){
    let realPrice = document.getElementById('real').value;
    let dollarPrice = realPrice * 5;

    document.getElementById('dollar').value = "  $ " + dollarPrice;
}

// function ConvertToReal(){
//     let dollarPrice = document.getElementById('dollar').value;
//     let realPrice = dollarPrice / 5;

//     document.getElementById('real').type = 'text';
//     document.getElementById('real').value = "  R$ " + realPrice;
//     document.getElementById('real').type = 'number';


// }
