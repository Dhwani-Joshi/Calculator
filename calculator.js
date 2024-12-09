function add(numbers) {
    if (numbers === "") return 0;
  
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiter = numbers[2];
      numbers = numbers.slice(4); // Remove the "//[delimiter]\n" part
      return sumNumbers(numbers, delimiter);
    }
  
    // Handle commas and newlines as delimiters
    return sumNumbers(numbers, /[\n,]/);
  }
  
  function sumNumbers(numbers, delimiter) {
    const nums = numbers.split(delimiter);
    const negatives = nums.filter(num => Number(num) < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
    }
    return nums.reduce((sum, num) => sum + Number(num), 0);
  }
  
  
  module.exports = { add };
  