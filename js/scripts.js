var sentenceScrambler = function(sentence) {
  var characterSplit = sentence.split("");
  for (x=0; x < characterSplit.length; x++) {
    if (characterSplit[x] == "a" || characterSplit[x] == "e" || characterSplit[x] == "i" || characterSplit[x] == "o" || characterSplit[x] == "u") {
      characterSplit[x] = "-";
      }
    }
    return characterSplit.join("");
}

$(document).ready(function() {
  $("button").click(function(){
    var inputSentence = $("#inputSentence").val();
    var scrambledSentence = sentenceScrambler(inputSentence);
    $("#output").text("Your coded sentence is: " + scrambledSentence);


    });

});
