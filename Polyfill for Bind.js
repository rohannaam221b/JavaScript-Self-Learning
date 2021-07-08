let name = {
  firstName: "Rohan",
  lastName: "Rao",
}
let name2 = {
  firstName: "Kendall",
  lastName: "Jenner",
}

let printName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " " +
      hometown +
      " " +
      state +
      " " +
      country
  )
}

let printMyName = printName.bind(name, "Mira-Road")
printMyName("Maharashtra", "India")

Function.prototype.mybind = function (...args) {
  let obj = this
  params = args.slice(1)
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2])
  }
}

let printMyName2 = printName.mybind(name2, "Los angeles")
printMyName2("california", "US")
