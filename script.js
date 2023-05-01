//your JS code here. If required.
function firstNonRepeatedChar() {
  let str = prompt("Enter a string:");
  let charCount = {};

  // Count the number of occurrences of each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first character with a count of 1
  for (let j = 0; j < str.length; j++) {
    let char = str.charAt(j);
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
