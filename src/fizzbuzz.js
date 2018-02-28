/* FizzBuzz. 

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
  result = "";
  if (number % 3 === 0) {
    result = "fizz";
  }
  if (number % 5 === 0) {
    result += "buzz";
  }
  if (!result){
      result = number;
  }
  return result;
}

module.exports = fizzbuzz;
