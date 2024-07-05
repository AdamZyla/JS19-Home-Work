



function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
  
  // Testowanie funkcji
  console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
  console.log(makeTransaction(3, 4000)); // "You ordered 3 droids worth 12000 credits!"
  console.log(makeTransaction(7, 1500)); // "You ordered 7 droids worth 10500 credits!"

// Testowanie  dowolnych wartości
  console.log(makeTransaction(10, 5000)); // "You ordered 7 droids worth 10500 credits!"
  