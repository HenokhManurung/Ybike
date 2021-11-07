var reserve = document.getElementById('reserveBtn')

function isNumeric(num) {
    for(let i = 0; i < num.length; i++){
        if(num.charCodeAt(i) < 48 || num.charCodeAt(i) > 57){
            return false
        }
    }
    return true
}


reserve.addEventListener('click', function(e) {
    e.preventDefault();

    var body = document.getElementById('reserve')
    var errorClear = document.getElementById('error')
    errorClear.remove()

    var div = document.createElement('div')
    div.style.color = 'red'
    div.style.textAlign = 'center'
    div.id = 'error'

    var name = document.getElementById('nameTxt').value
    var phone = document.getElementById('phoneTxt').value
    var address = document.getElementById('addressTxt').value
    var product = document.getElementById('productTxt').value
    var quantity = document.getElementById('quantityTxt').value
    var blackColor = document.getElementById('blackColor').checked
    var whiteColor = document.getElementById('whiteColor').checked

    if(name.length < 3 || name.length > 20) {
        div.innerText = 'Username must be between 3 to 20 characters'
    }

    else if(phone == ""){
        div.innerText = 'Phone number must be filled'
    }
    else if(!isNumeric(phone)) {
        div.innerText = 'Phone number must be numeric'
    }

    else if(!address.includes('Jalan')){
        div.innerText = 'Address must contains "Jalan"'
    }

    else if(product == ""){
        div.innerText = 'Please choose a product'
    }

    else if(quantity <= 0) {
        div.innerText = 'Quantity must be more than 0'
    }

    else if(!blackColor && !whiteColor){
        div.innerText = 'Please choose a color'
    }

    body.append(div)
})