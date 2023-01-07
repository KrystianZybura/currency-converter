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

    const switchCurrencyMark = (firstMark, secondMark) => {
        switch (selectFirstCurrency.value) {
            case "PLN":
                firstMark.innerText = "zł."
                secondMark.innerText = selectSecondCurrency.value === "USD"
                    ? "$."
                    : "€.";
                break;

            case "EUR":
                firstMark.innerText = "€.";
                secondMark.innerText = selectSecondCurrency.value === "USD"
                    ? "$."
                    : "zł.";
                break;

            case "USD":
                firstMark.innerText = "$.";
                secondMark.innerText = selectSecondCurrency.value === "EUR"
                    ? "€."
                    : "zł.";
                break;
        }
    }

    const displayWarningMessage = () => {
        const warningMessage = document.querySelector(".js-warningMessage");

        selectFirstCurrency.value === selectSecondCurrency.value
            ? warningMessage.classList.remove("hidden")
            : warningMessage.classList.add("hidden");
    }


    const onFormSubmit = (event) => {
        event.preventDefault();
        displayWarningMessage();

        if (selectFirstCurrency.value !== selectSecondCurrency.value)
            calculateOutputCurrency();
    }

    const changeCurrencyMark = () => {
        const firstCurrencyMark = document.querySelector(".js-firstCurrencyMark");
        const secondCurrencyMark = document.querySelector(".js-secondCurrencyMark");

        selectFirstCurrency.value === selectSecondCurrency.value
            ? switchIdenticalCurrencyMark(firstCurrencyMark, secondCurrencyMark)
            : switchCurrencyMark(firstCurrencyMark, secondCurrencyMark);
    }

    const onFormInteraction = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("input", changeCurrencyMark);
    }

    const init = () => {
        onFormInteraction();
    }

    init();
}