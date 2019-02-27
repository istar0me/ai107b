/*
    請寫一個副程式尋找函數的最低點，首先尋找 函數 x^2 + 4x - 8 的最低點
*/

function f (x) { return -(x * x + 4 * x - 8) }

var dx = 0.01

function hillClimbing (f, x) {
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