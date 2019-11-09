
var specialcharacters = ["!","\"","#","$","%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/" ,":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_" , "`", "{", "|", "}", "~"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var mixedChars = [];

function buttonClick() {
    mixedChars = [];
    var numberPassword = prompt("Please enter a number between 8 and 128");
    var confirmSpecial = confirm ("Do you want special characters?");
    if(confirmSpecial){
        mixedChars.push(specialcharacters);
    }
    var confirmNumeric = confirm ("Do you want numeric characters?");
    if(confirmNumeric){
        mixedChars.push(numeric);
    }
}
