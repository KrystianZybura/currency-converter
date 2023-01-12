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

    const getCurrencyMark = () => `${selectFirstCurrency.value}/${selectSecondCurrency.value}`;

    const validateForm = () => {
        const warningMessage = document.querySelector(".js-warningMessage");

        selectFirstCurrency.value === selectSecondCurrency.value
            ? warningMessage.classList.remove("hidden")
            : warningMessage.classList.add("hidden");
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        validateForm();

        if (selectFirstCurrency.value !== selectSecondCurrency.value) {
            const amountElement = document.querySelector(".js-amount");
            const resultElement = document.querySelector(".js-result");

            const result = calculateResult(selectFirstCurrency.value, selectSecondCurrency.value, +amountElement.value);

            resultElement.value = result.toFixed(2);
        }
    }

    const changeCurrencyMark = () => {
        const firstCurrencyMark = document.querySelector(".js-firstCurrencyMark");
        const secondCurrencyMark = document.querySelector(".js-secondCurrencyMark");

        if (selectFirstCurrency.value === selectSecondCurrency.value)
            switchIdenticalCurrencyMark(firstCurrencyMark, secondCurrencyMark);
        else {
            const currencyMarks = getCurrencyMark();

            switch (currencyMarks) {
                case "PLN/USD":
                    firstCurrencyMark.innerText = "zł.";
                    secondCurrencyMark.innerText = "$.";
                    break;

                case "PLN/EUR":
                    firstCurrencyMark.innerText = "zł.";
                    secondCurrencyMark.innerText = "€.";
                    break;

                case "USD/PLN":
                    firstCurrencyMark.innerText = "$.";
                    secondCurrencyMark.innerText = "zł.";
                    break;

                case "USD/EUR":
                    firstCurrencyMark.innerText = "$.";
                    secondCurrencyMark.innerText = "€.";
                    break;

                case "EUR/PLN":
                    firstCurrencyMark.innerText = "€.";
                    secondCurrencyMark.innerText = "zł.";
                    break;

                case "EUR/USD":
                    firstCurrencyMark.innerText = "€.";
                    secondCurrencyMark.innerText = "$.";
                    break;
            }
        }
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("input", changeCurrencyMark);
    }

    init();
}
