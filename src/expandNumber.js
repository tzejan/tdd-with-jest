/* Write Number in Expanded Form
Write a function to take in a number and return it as a string in expanded form. 

For example:
expandNumber(12); // Should return '10 + 2'
expandNumber(42); // Should return '40 + 2'
expandNumber(70304); // Should return '70000 + 300 + 4'
NOTE: All input will be whole numbers greater than 0.

*/

function expandNumber(num) {
    numArray = [];
    power = 1;
    while (num){
        numArray.push((num % 10) * power);
        power *= 10;
        num = Math.floor(num/10);
    }

    return numArray.reverse().join(" + ");
}

module.exports = expandNumber