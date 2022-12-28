let inputCurrency = document.querySelector(".js-inputCurrency");
let outputCurrency = document.querySelector(".js-outputCurrency")
let formElement = document.querySelector(".js-form");

let selectFirstCurrency = document.querySelector(".js-selectFirstCurrency");
let selectSecondCurrency = document.querySelector(".js-selectSecondCurrency");

let firstCurrencyMark = document.querySelector(".js-firstCurrencyMark");
let secondCurrencyMark = document.querySelector(".js-secondCurrencyMark");
let warningMessage = document.querySelector(".js-warningMessage");

const usdToPlnRate = 4.40;
const eurToPlnRate = 4.67;
const usdToEurRate = 0.94;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    if (selectFirstCurrency.value === selectSecondCurrency.value) {
        warningMessage.classList.remove("hidden");
    }
    else {
        warningMessage.classList.add("hidden");
        switch (selectFirstCurrency.value) {
            case "PLN":
                selectSecondCurrency.value === "USD"
                    ? outputCurrency.value = (Number(inputCurrency.value) / usdToPlnRate).toFixed(2)
                    : outputCurrency.value = (Number(inputCurrency.value) / eurToPlnRate).toFixed(2);
                break;

            case "EUR":
                selectSecondCurrency.value === "USD"
                    ? outputCurrency.value = (Number(inputCurrency.value) / usdToEurRate).toFixed(2)
                    : outputCurrency.value = (Number(inputCurrency.value) * eurToPlnRate).toFixed(2);
                break;

            case "USD":
                selectSecondCurrency.value === "EUR"
                    ? outputCurrency.value = (Number(inputCurrency.value) * usdToEurRate).toFixed(2)
                    : outputCurrency.value = (Number(inputCurrency.value) * usdToPlnRate).toFixed(2);
                break;
        }
    }
});

formElement.addEventListener("input", () => {
    if (selectFirstCurrency.value === selectSecondCurrency.value) {
        switch (selectFirstCurrency.value) {
            case "PLN":
                firstCurrencyMark.innerText = "zł."
                secondCurrencyMark.innerText = "zł."
                break;

            case "EUR":
                firstCurrencyMark.innerText = "€."
                secondCurrencyMark.innerText = "€."
                break;

            case "USD":
                firstCurrencyMark.innerText = "$."
                secondCurrencyMark.innerText = "$."
                break;
        }
    }
    else {
        switch (selectFirstCurrency.value) {
            case "PLN":
                firstCurrencyMark.innerText = "zł."
                selectSecondCurrency.value === "USD"
                    ? secondCurrencyMark.innerText = "$."
                    : secondCurrencyMark.innerText = "€.";
                break;

            case "EUR":
                firstCurrencyMark.innerText = "€.";
                selectSecondCurrency.value === "USD"
                    ? secondCurrencyMark.innerText = "$."
                    : secondCurrencyMark.innerText = "zł.";
                break;

            case "USD":
                firstCurrencyMark.innerText = "$.";
                selectSecondCurrency.value === "EUR"
                    ? secondCurrencyMark.innerText = "€."
                    : secondCurrencyMark.innerText = "zł.";
                break;
        }
    }
});
