


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
} 
)

test("One dollar should be 0.93461 yenes", function() {
   //1 dolar = 1/1.07 = 0.9346 EUR
   //1 yen = 0.9346 * 156.5 = 0.93461
    const { fromDollarToYen } = require('./app.js');
        expect(fromDollarToYen(1)).toBe(146.26168224299064);
    
    } 
)

test("One yen should be 0.0055 pounds", function() {
  //1 Yen = 1/156.5 = 0.00639 EUR
  //1 pound = 0.00639 * 0.87 = 0.0055
        const { fromYenToPound } = require('./app.js');
        expect(fromYenToPound(1)).toBe(0.0055591054313099035);
    }

 )