function add(numbers) {
    if (numbers === "") return 0;
     // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiter = numbers[2];
    numbers = numbers.slice(4); // Remove the "//[delimiter]\n" part
    return numbers.split(delimiter).reduce((sum, num) => sum + Number(num), 0);
  }
  // Handle commas and newlines as delimiters
    return numbers.split(/[\n,]/).reduce((sum, num) => sum + Number(num), 0);
    // return numbers.split(',').reduce((sum, num) => sum + Number(num), 0);

  }
  
  module.exports = { add };
  