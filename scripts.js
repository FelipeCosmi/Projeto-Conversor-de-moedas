const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const inputCurrency = document.querySelector(".input-currency");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //real
    const currencyValueConverted = document.querySelector(".currency-value") //dolar-outras moedas

    const dolarToday = 5
    const euroToday = 6

    if (currencySelect.value == "dolar-usa") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if (currencySelect.value == "dolar-usa") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar-usa.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()
}

function addCasaDecimal() {
    const inputValue = inputCurrency.value;

    if (!inputValue.includes(".")) {
        inputCurrency.value = parseFloat(inputValue).toFixed(2);
    }
}

inputCurrency.addEventListener("blur", addCasaDecimal);
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)