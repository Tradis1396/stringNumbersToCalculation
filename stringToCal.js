function strings(str) {
    var arr = []

    var operator = str.substring(0, 1)
    str = str.substring(1, str.length);
    var newstr = str.split(" ");
    newstr.forEach(element => {
        arr.push(parseInt(element));
    });

    var value = arr.reduce((x, y) => {
        switch (operator) {
            case "+":
                return x + y
            case "-":
                return x - y
            case "/":
                return x / y
            case "*":
                return x * y
            default:
                break;
        }
    }, 0)


    console.log(value);
}
strings("*1 3 2 4")

