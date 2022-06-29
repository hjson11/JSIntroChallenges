const input = prompt("What's your name?");

if (input == input.toUpperCase()){
    document.write("<b>Shh! You're shouting!</b>");
}

else if (input == input.toLowerCase()){
    document.write("<b>What? You're whispering!</b>");
}

else {
    document.write("<b>You're talking normally!</b>");
}