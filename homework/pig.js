/* Homework #2 - Pig Latin, Chris Sanders, 1/17/2017*/

/*here is prompts the user for a sentence*/
var sentence = prompt("enter phrase here"); 

/*here it splits the entered text into an array of words that can all be modified separately*/
var words = sentence.split(" ");

/* here it checks whether the user actually entered text, and gives a warning message of they didn't*/
if (sentence.length < 1) {
    document.write("You didn't enter any text!");
} 

/*if there is text, here it checks the first letter of each word one by one, and if it's a vowel it adds a w at the end and then skips to the end*/
else {

for (var i = 0; i < words.length; i = i + 1) {
        
    if (words[i].charAt(0).toLowerCase() == "a" || words[i].charAt(0).toLowerCase() == "e" || words[i].charAt(0).toLowerCase() == "i" || words[i].charAt(0).toLowerCase() == "o" || words[i].charAt(0).toLowerCase() == "u") {
            words[i] = words[i] + "w";
    } 
    
    /*if the first letter was a consonant then here it checks again for the sake of the loop, moves the consonant to the end of the sentence, and then repeats this check and more 2 more times so that up to 3 consonants can be moved to the end (since that's as many as English ever clusters together at the beginning of a word)*/
    else {
        for (var j = 0; j < 3; j = j + 1) { 
            if (words[i].charAt(0).toLowerCase() == "a" || words[i].charAt(0).toLowerCase() == "e" || words[i].charAt(0).toLowerCase() == "i" || words[i].charAt(0).toLowerCase() == "o" || words[i].charAt(0).toLowerCase() == "u") {
                words[i] = words[i];
            } else {
            var letter = words[i].charAt(0).toLowerCase();
            words[i] = words[i].substr(1, words[i].length) + letter;
            }
        }
    }
    
    /*and here it writes the modified sentence in the document*/
    document.write(words[i] + "ay" + " ");

}
}