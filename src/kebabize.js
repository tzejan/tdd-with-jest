/* Write a function kebabize(input) to convert a camel case input string into a kebab case.

The function only needs to take care of lower- and upper-case alphabets. Non-alphabetical characters (e.g. numbers, punctuation (_ - + ? )) can be ignored

Examples:
kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
*/

function kebabize(input) {
    var result = [];
    for (var c of input){
        if (c >= "A" && c <= "Z"){
            result.push('-', c.toLowerCase());
        }
        else if (c >= "a" && c <= "z"){
            result.push(c);
        }
    }
    return result.join("");
}

module.exports = kebabize