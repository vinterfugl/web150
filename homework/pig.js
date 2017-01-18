var sentence = prompt("enter phrase here"); 

var words = sentence.split(" ");

if (sentence.length < 1) {
    alert("You didn't enter any text!");
} else {

for (var i = 0; i < words.length; i = i + 1) {
        
    if (words[i].charAt(0).toLowerCase() == "a" || words[i].charAt(0).toLowerCase() == "e" || words[i].charAt(0).toLowerCase() == "i" || words[i].charAt(0).toLowerCase() == "o" || words[i].charAt(0).toLowerCase() == "u") {
            words[i] = words[i] + "w";
    } else {
        for (var j = 0; j < 3; j = j + 1) { 
            if (words[i].charAt(0).toLowerCase() == "a" || words[i].charAt(0).toLowerCase() == "e" || words[i].charAt(0).toLowerCase() == "i" || words[i].charAt(0).toLowerCase() == "o" || words[i].charAt(0).toLowerCase() == "u") {
                words[i] = words[i];
            } else {
            var letter = words[i].charAt(0).toLowerCase();
            words[i] = words[i].substr(1, words[i].length) + letter;
            }
        }
    }
            
    document.write(words[i] + "ay" + " ");

}
}