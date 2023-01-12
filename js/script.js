{
    const selectFirstCurrency = document.querySelector(".js-selectFirstCurrency");
    const selectSecondCurrency = document.querySelector(".js-selectSecondCurrency");

    const calculateResult = (inputCurrency, outputCurrency, amount) => {

        const usdToPlnRate = 4.36;
        const eurToPlnRate = 4.68;
        const usdToEurRate = 0.93;

        const currencyPair = `${inputCurrency}/${outputCurrency}`;

        switch (currencyPair) {
            case "PLN/USD":
                return amount / usdToPlnRate;

            case "PLN/EUR":
                return amount / eurToPlnRate;

            case "EUR/USD":
                return amount / usdToEurRate;

            case "EUR/PLN":
                return amount * eurToPlnRate;

            case "USD/PLN":
                return amount * usdToPlnRate;

            case "USD/EUR":
                return amount * usdToEurRate;
        }
    }

    const switchIdenticalCurrencyMark = (firstMark, secondMark) => {
        switch (selectFirstCurrency.value) {
            case "PLN":
                firstMark.innerText = "zł."
                secondMark.innerText = "zł."
                break;

            case "EUR":
                firstMark.innerText = "€."
                secondMark.innerText = "€."
                break;

            case "USD":
                firstMark.innerText = "$."
                secondMark.innerText = "$."
                break;
        }
    }

    const getCurrencyMark = (currency) => {
        switch (currency) {
            case "PLN":
                return "zł.";

            case "EUR":
                return "€.";

            case "USD":
                return "$.";
        }
    }

    const validateForm = () => {
        const warningMessage = document.querySelector(".js-warningMessage");

        selectFirstCurrency.value === selectSecondCurrency.value
            ? warningMessage.classList.remove("hidden")
            : warningMessage.classList.add("hidden");
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        validateForm();

        if (selectFirstCurrency.value === selectSecondCurrency.value) {
            return;
        }

        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");

        const result = calculateResult(selectFirstCurrency.value, selectSecondCurrency.value, +amountElement.value);

        resultElement.value = result.toFixed(2);
    }

    const changeCurrencyMark = () => {
        const firstCurrencyMark = document.querySelector(".js-firstCurrencyMark");
        const secondCurrencyMark = document.querySelector(".js-secondCurrencyMark");

        if (selectFirstCurrency.value === selectSecondCurrency.value) {
            switchIdenticalCurrencyMark(firstCurrencyMark, secondCurrencyMark);
        }
        else {
            firstCurrencyMark.innerText = getCurrencyMark(selectFirstCurrency.value);
            secondCurrencyMark.innerText = getCurrencyMark(selectSecondCurrency.value);
        }
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("input", changeCurrencyMark);
    }

    init();
}
