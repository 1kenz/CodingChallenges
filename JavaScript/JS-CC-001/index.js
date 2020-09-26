document.getElementById("inp")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("btn").click();
        }
    });

document.getElementById("btn").addEventListener("click", fibonacci);

function fibonacci(number) {
    var number = parseInt(document.getElementById("inp").value);
    var a = 0;
    var b = 1;
    var c;
    var x = 0;
    if (number <= 0) {
        document.getElementById("res").innerHTML = `Please enter positive number`;
        document.getElementById('inp').value = '';
        document.getElementById('inp').focus();
//     } else if (number == 0) {
//         document.getElementById("res").innerHTML = `${number}. fibonacci number is 0`;
//         document.getElementById('inp').value = '';
//         document.getElementById('inp').focus();
    } else if (number == 1) {
        document.getElementById("res").innerHTML = `${number}. fibonacci number is 1`;
        document.getElementById('inp').value = '';
        document.getElementById('inp').focus();
    } else {
        while (x < number) {
            var c = a + b;
            a = b;
            b = c;
            x++;
        }
        document.getElementById("res").innerHTML = `${number}. fibonacci number is ${c}`;
        document.getElementById('inp').value = '';
        document.getElementById('inp').focus();
    }
}
