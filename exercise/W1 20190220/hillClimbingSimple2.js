/*
    請寫一個副程式尋找函數的最低點，首先尋找 函數 x^4 - 10x^3 + 20x^2 + 5x + 7  的最低點
*/

function f(x) { return -(Math.pow(x, 4) - 10 * Math.pow(x, 3) + 20 * Math.pow(x, 2) + 5 * x + 7) }

var dx = 0.01

function hillClimbing(f, x) {
    while (true) {
        console.log('f(%s)=%s', x.toFixed(4), f(x).toFixed(4))
        if (f(x + dx) >= f(x)) {
            x = x + dx
        } else if (f(x - dx) >= f(x)) {
            x = x - dx
        } else {
            break
        }
    }
}

hillClimbing(f, 0.0)