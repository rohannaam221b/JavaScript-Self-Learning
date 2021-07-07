let name = {
  firstName: "Rohan",
  lastName: "Rao",
}
let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " From " + hometown + "," + state
  )
}
printFullName.call(name, "India", "Maharashtra")

let name2 = {
  firstName: "Critiano",
  lastName: "Ronaldo",
}

printFullName.call(name2, "Portugal", "Madeira")

printFullName.apply(name2, ["Portugal", "Madeira"])

let printMyname = printFullName.bind(name2, "Portugal", "Madeira")
console.log(printMyname)
printMyname()
