// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">

// </head>
// <body>
//     <div id="form">
//         <input type="text" id="name" data-uppercase>
//         <input type="text" id="pan" data-uppercase>
//         <input type="text" id="mobile" data-uppercase>
//     </div>
//  <script src="just.js"></script>
// </body>
// </html>

document.querySelector("#form").addEventListener("keyup", (e) => {
  // window.location.href = "/" + e.target.id

  console.log(e)
  if (e.target.dataset.uppercase != undefined) {
    e.target.value = e.target.value.toUpperCase()
  }
})
