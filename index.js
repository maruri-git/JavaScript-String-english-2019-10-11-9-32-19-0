// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase())


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var wordsArray = sentence.split(" ");

for (let i = 0; i < wordsArray.length; i++) {
    wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].substring(1);
}

var newSentence = wordsArray.join(" ");
console.log(newSentence)


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
var extractedAmt = money.substring(1)
console.log(extractedAmt)