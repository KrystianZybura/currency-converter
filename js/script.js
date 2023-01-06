{
    const selectFirstCurrency = document.querySelector(".js-selectFirstCurrency");
    const selectSecondCurrency = document.querySelector(".js-selectSecondCurrency");

    const calculateOutputCurrency = () => {
        const inputCurrency = document.querySelector(".js-inputCurrency");
        const outputCurrency = document.querySelector(".js-outputCurrency");

        const usdToPlnRate = 4.40;
        const eurToPlnRate = 4.67;
        const usdToEurRate = 0.94;

        switch (selectFirstCurrency.value) {
            case "PLN":
                outputCurrency.value = selectSecondCurrency.value === "USD"
                    ? (+inputCurrency.value / usdToPlnRate).toFixed(2)
                    : (+inputCurrency.value / eurToPlnRate).toFixed(2);
                break;

            case "EUR":
                outputCurrency.value = selectSecondCurrency.value === "USD"
                    ? (+inputCurrency.value / usdToEurRate).toFixed(2)
                    : (+inputCurrency.value * eurToPlnRate).toFixed(2);
                break;

            case "USD":
                outputCurrency.value = selectSecondCurrency.value === "EUR"
                    ? (+inputCurrency.value * usdToEurRate).toFixed(2)
                    : (+inputCurrency.value * usdToPlnRate).toFixed(2);
                break;
        }
    }

    const switchIdenticalCurrencyMark = (firstCurrencyMark, secondCurrencyMark) => {
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

    const switchCurrencyMark = (firstCurrencyMark, secondCurrencyMark) => {
        switch (selectFirstCurrency.value) {
            case "PLN":
                firstCurrencyMark.innerText = "zł."
                secondCurrencyMark.innerText = selectSecondCurrency.value === "USD"
                    ? "$."
                    : "€.";
                break;

            case "EUR":
                firstCurrencyMark.innerText = "€.";
                secondCurrencyMark.innerText = selectSecondCurrency.value === "USD"
                    ? "$."
                    : "zł.";
                break;

            case "USD":
                firstCurrencyMark.innerText = "$.";
                secondCurrencyMark.innerText = selectSecondCurrency.value === "EUR"
                    ? "€."
                    : "zł.";
                break;
        }
    }

    const countCurrencySubmit = (event) => {
        const warningMessage = document.querySelector(".js-warningMessage");

        event.preventDefault();
        if (selectFirstCurrency.value === selectSecondCurrency.value) {
            warningMessage.classList.remove("hidden");
        }
        else {
            warningMessage.classList.add("hidden");
            calculateOutputCurrency();
        }
    }
    const changeCurrencyMark = () => {
        const firstCurrencyMark = document.querySelector(".js-firstCurrencyMark");
        const secondCurrencyMark = document.querySelector(".js-secondCurrencyMark");

        selectFirstCurrency.value === selectSecondCurrency.value
            ? switchIdenticalCurrencyMark(firstCurrencyMark, secondCurrencyMark)
            : switchCurrencyMark(firstCurrencyMark, secondCurrencyMark);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", countCurrencySubmit);
        formElement.addEventListener("input", changeCurrencyMark);
    }

    init();
}