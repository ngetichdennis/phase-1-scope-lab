// Write your solution in this file!

// Declare customerName to be bob in global scope
var customerName = "bob";


// Define a function that uppercases the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Define a function that sets the bestCustomer variable
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Define a function that overwrites the bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Define a function that declares the leastFavoriteCustomer variable as a constant
function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "some initial value";
  leastFavoriteCustomer = "some other value"; // This will throw an error
}
