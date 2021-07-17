const expensive = (args) => {
  console.log("expensive")
}

const throttle = (expensive, limit) => {
  let flag = true
  return function () {
    let context = this
    args = arguments
    if (flag) {
      expensive.apply(context, args)
      flag = false
      setTimeout(() => {
        flag = true
      }, limit)
    }
  }
}

const betterExpensive = throttle(expensive, 500)
window.addEventListener("keyup", betterExpensive)


//Throttling is used for performance optimization by rate limiting of function call
//difference between debouncing and throttling is that , in debouncing, a function call is made when the difference between the
//between two key stroke is less then certain limit which is set by the developers then it is called as
//debouncing. but in throttling, a function call is made at certain limit everytime. it doesnt wait for key stroke .
// example of a machine gun and pistol in mini militia.
//resize
//search bar of ecommerce website.
