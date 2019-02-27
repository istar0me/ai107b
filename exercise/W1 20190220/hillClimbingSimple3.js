/*
    請寫一個副程式尋找雙變數函數的最低點，尋找 函數 x^2 -2x + y^2 +2y - 8 的最低點
*/

function f(x, y) { return -(x * x - 2 * x + y * y + 2 * y - 8) }

var dx = 0.01
var dy = 0.01

function hillClimbing(f, x, y) {
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

hillClimbing(f, 0.0, 0.0)