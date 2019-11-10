
var specialcharacters = ["!","\"","#","$","%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/" ,":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_" , "`", "{", "|", "}", "~"];
var numeric = ["1","2","3","4","5","6","7","8","9","0"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var mixedChars = [];
var password = "";

function buttonClick() {
    mixedChars = [];
    var numberPassword = prompt("Please enter a number between 8 and 128");
    if ((numberPassword < 8 || numberPassword > 128)){
        alert("Invalid input!");
        return true;
    }
    var confirmSpecial = confirm ("Do you want special characters?");
    if(confirmSpecial){
        mixedChars = mixedChars.concat(specialcharacters);
    }
    var confirmNumeric = confirm ("Do you want numeric characters?");
    if(confirmNumeric){
        mixedChars = mixedChars.concat(numeric);
    }
    var confirmLowercase = confirm ("Do you want lowercase characters?");
    if(confirmLowercase){
        mixedChars = mixedChars.concat(lowercase);
    }
    var confirmUppercase = confirm ("Do want uppercase characters?");
    if(confirmUppercase){
        mixedChars = mixedChars.concat(uppercase);
    }
    
    // todo: make a for loop that runs x many times that gets a random character
    // and adds it to password

    //tried to do this but couldn't get the for loop
        
    // for (x many times) {
        // create var "randomChar" that is a random character based on selections
        var randomChar = mixedChars[Math.floor(Math.random()*mixedChars.length)];
        // add randomChar to the password
        password += randomChar;
    // }


    // alert password
    alert(password)

    document.getElementById("display").value = password;

}


