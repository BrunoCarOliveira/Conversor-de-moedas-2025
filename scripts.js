const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectTop = document.querySelector(".currency-select-top")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")  //valor em real 
const currencyValueConverted = document.querySelector(".currency-value-converted") //outras moedas

console.log(currencySelect.value)

const dolarToday = 5.2
const euroToday = 6.2
const realToday = 1.5
const bitcoinToday = 471.0

//select de cima//

if(currencySelectTop.value == "dolar"){
    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
}

if(currencySelectTop.value == "euro"){
    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)
}

if(currencySelectTop.value == "real"){
    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

if(currencySelectTop.value == "bitcoin"){
    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue)
}

//select de baixo ja convertido//
if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect.value == "euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
}

if(currencySelect.value == "real"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / realToday)
}

if(currencySelect.value == "bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)
    
}


}

function changeCurrency(){
const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-Img")
const currency = document.querySelector(".currency")
const currencyImageTop = document.querySelector(".currency-img-top")

//select de cima//

if (currencySelectTop.value == "dolar") {
    currency.innerHTML = "Dólar Americano"
    currencyImageTop.src = "./assets/dolar.png"
}

if (currencySelectTop.value == "euro") {
    currency.innerHTML = "Euro"
    currencyImageTop.src = "./assets/euro.png"
}

if (currencySelectTop.value == "real") {
    currency.innerHTML = "Real"
    currencyImageTop.src = "./assets/real.png"
}

if (currencySelectTop.value == "bitcoin") {
    currency.innerHTML = "Bitcoin"
    currencyImageTop.src = "./assets/bitcoin1.png"
}

//select de baixo ja convertido//
if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./assets/dolar.png"
}

if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
}

if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin1.png"
}

if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real"
    currencyImage.src = "./assets/real.png"
}


convertValues()
}
currencySelectTop.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)