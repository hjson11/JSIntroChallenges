const input = prompt("Choose +, -, /, or *: ");

var x = 6;
var y = 4;


if (input == '+'){
    document.write(x+y);
}

else if (input == '-'){
    document.write(x-y);
}

else if (input == '/'){
    document.write(x/y);
}

else {
    document.write(x*y);
}