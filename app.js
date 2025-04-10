// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // Retornamos el valor en dólares
    return valueInYen;
}
//1 Yen = 1/156.5 = 0.00639 EUR
  //1 pound = 0.00639 * 0.87 = 0.0055
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    // Retornamos el valor en dólares
    return valueInPound;
}
module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound}