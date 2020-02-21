// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// case 1
/* 
function isPangram(sentence) {
    let lowerCase = sentence.toLowerCase();
    for(let char of `abcdefghijklmnopqrstuvwxyz`){
        if(lowerCase.indexOf(char)===-1){
            return false;
        }    
    }
    return true;
}
 */

 // case 2

 function isPangram(sentence) {
    let lowerCase = sentence.toLowerCase();
    for(let char of `abcdefghijklmnopqrstuvwxyz`){
        if(!lowerCase.includes(char)){
            return false;
        }    
    }
    return true;
}