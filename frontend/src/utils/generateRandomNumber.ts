function generateRandomNumber(digits: number = 8) {
  const currentDate = new Date();
  const seed = currentDate.getTime(); // Get the current timestamp as seed

  // Generate random number using seed
  const randomNum = Math.floor((seed * Math.random()) % 100000000);

  // Ensure it's 8 digits by padding with zeros if necessary
  const eightDigitRandomNum = String(randomNum).padStart(digits, '0');

  return eightDigitRandomNum;
}

export default generateRandomNumber;
