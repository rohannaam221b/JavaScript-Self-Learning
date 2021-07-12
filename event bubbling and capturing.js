//e.stopPropagation()  is used to stop the propagation
// third argumnet of add event listener is useCapture , it get true or false.
// according to w3c , first capture happens then bubble.
//default is bubble.

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Clicked!")
    e.stopPropagation()
  },
  true
)
document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked!")
  },
  true
)
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("Child Clicked!")
  },
  true
)
