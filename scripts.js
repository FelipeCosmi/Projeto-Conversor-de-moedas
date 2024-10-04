const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const inputCurrency = document.querySelector(".input-currency");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //real
    const currencyValueConverted = document.querySelector(".currency-value") //dolar-outras moedas

    const dolarUsaToday = 5.46
    const euroToday = 5.99
    const libraToday = 7.17
    const bitcoinToday = 340937.18
    const venToday = 0.15
    const bolivianoToday = 0.79
    const dinarKuwaitToday = 17.83
    const dolarAusToday = 3.71
    const dolarCanToday = 4.02
    const francoToday = 6.36
    const ieneToday = 0.037
    const liraTurcaToday = 0.16
    const pesoArgToday = 0.0056
    const pesoChiToday = 0.0059
    const pesoColToday = 0.0013
    const pesoUruToday = 0.13
    const chinaToday = 0.78

    if (currencySelect.value == "dolar-usa") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarUsaToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra-esterlina") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = `₿ ${(inputCurrencyValue / bitcoinToday)}`;
    }
    if (currencySelect.value == "bolivar-ven") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("es-VE", {
            style: "currency",
            currency: "VEF"
        }).format(inputCurrencyValue / venToday)
    }
    if (currencySelect.value == "boliviano-bol") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("es-BO", {
            style: "currency",
            currency: "BOB"
        }).format(inputCurrencyValue / bolivianoToday)
    }
    if (currencySelect.value == "dinar-kuwait") {
        currencyValueConverted.innerHTML = `د.ك ${(inputCurrencyValue / dinarKuwaitToday)}`;
    }
    if (currencySelect.value == "dolar-aus") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(inputCurrencyValue / dolarAusToday)
    }
    if (currencySelect.value == "dolar-can") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(inputCurrencyValue / dolarCanToday)
    }
    if (currencySelect.value == "franco-suico") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("it-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / francoToday)
    }
    if (currencySelect.value == "iene-jap") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }
    if (currencySelect.value == "lira-turca") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY"
        }).format(inputCurrencyValue / liraTurcaToday)
    }
    if (currencySelect.value == "peso-arg") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoArgToday)
    }
    if (currencySelect.value == "peso-chi") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("es-CL", {
            style: "currency",
            currency: "CLP"
        }).format(inputCurrencyValue / pesoChiToday)
    }
    if (currencySelect.value == "peso-col") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP"
        }).format(inputCurrencyValue / pesoColToday)
    }
    if (currencySelect.value == "peso-uru") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("es-UY", {
            style: "currency",
            currency: "UYU"
        }).format(inputCurrencyValue / pesoUruToday)
    }
    if (currencySelect.value == "china") {
        currencyValueConverted.innerHTML = Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputCurrencyValue / chinaToday)
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
    if (currencySelect.value == "libra-esterlina") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "bolivar-ven") {
        currencyName.innerHTML = "Bolívar Venezuelano"
        currencyImage.src = "./assets/bolivar-venezuelano.png"
    }
    if (currencySelect.value == "boliviano-bol") {
        currencyName.innerHTML = "Boliviano"
        currencyImage.src = "./assets/boliviano.png"
    }
    if (currencySelect.value == "dinar-kuwait") {
        currencyName.innerHTML = "Dinar Kuwaitiano"
        currencyImage.src = "./assets/dinar-kuwait.png"
    }
    if (currencySelect.value == "dolar-aus") {
        currencyName.innerHTML = "Dólar Australiano"
        currencyImage.src = "./assets/dolar-australiano.png"
    }
    if (currencySelect.value == "dolar-can") {
        currencyName.innerHTML = "Dólar Canadense"
        currencyImage.src = "./assets/dolar-canadense.png"
    }
    if (currencySelect.value == "franco-suico") {
        currencyName.innerHTML = "Franco Suiço"
        currencyImage.src = "./assets/franco-suico.png"
    }
    if (currencySelect.value == "iene-jap") {
        currencyName.innerHTML = "Iene Japonês"
        currencyImage.src = "./assets/iene-japao.png"
    }
    if (currencySelect.value == "lira-turca") {
        currencyName.innerHTML = "Lira Turca"
        currencyImage.src = "./assets/lira-turca.png"
    }
    if (currencySelect.value == "peso-arg") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/peso-argentino.png"
    }
    if (currencySelect.value == "peso-chi") {
        currencyName.innerHTML = "Peso Chileno"
        currencyImage.src = "./assets/peso-chileno.png"
    }
    if (currencySelect.value == "peso-col") {
        currencyName.innerHTML = "Peso Colombiano"
        currencyImage.src = "./assets/peso-colombiano.png"
    }
    if (currencySelect.value == "peso-uru") {
        currencyName.innerHTML = "Peso Uruguaio"
        currencyImage.src = "./assets/peso-uruguaio.png"
    }
    if (currencySelect.value == "china") {
        currencyName.innerHTML = "Renminbi"
        currencyImage.src = "./assets/Renminbi-china.png"
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