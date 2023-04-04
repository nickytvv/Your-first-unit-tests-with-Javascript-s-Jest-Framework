// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


// Define the conversion rates
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
  };
  
  function fromDollarToYen(dollarAmount) {
    let yenAmount = dollarAmount * (oneEuroIs.JPY / oneEuroIs.USD);
    return yenAmount;
  }
  
  test("One dollar should be 106.58333333333333 yen", function() {
    const yenAmount = fromDollarToYen(1);
  
    const expected = 1 * (oneEuroIs.JPY / oneEuroIs.USD);
  
    expect(yenAmount).toBe(expected);
  });
  
  function fromYenToPound(yenAmount) {
    let poundAmount = yenAmount * (oneEuroIs.GBP / oneEuroIs.JPY);
    return poundAmount;
  }
  
  test("One yen should be 0.00625 pounds", function() {
    // Call the fromYenToPound function with 1 yen
    const poundAmount = fromYenToPound(1);
  
    const expected = 1 * (oneEuroIs.GBP / oneEuroIs.JPY);
  
    expect(poundAmount).toBe(expected);
  });
  