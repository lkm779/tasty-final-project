// Crear elemento y bot'on
// - Agregar un fichero .js
// -
// - let elem = window.getDocumentById("idDelElemento")
// - elem.addEventListener("click", cambiarImagenes());
// - Implementar el metodo cambiarMagenes
// -Six random numbers crear un metodo

// let myArray = ["logo.png...", .... ]

// cambiarImaaenes(){
//   nuevoArray = []
//   numero = random()...

//   for() agregar  {
//     push nuevoArray }

//     appendChild
// //

// const recomFS = [];
// recomFS[0] = "True Detective";
// recomFS[1] = "Shrek";
// recomFS[2] = "Iam Legend";
// recomFS[3] = "Goodfellas";
// recomFS[4] = "The Walking Dead";
// recomFS[5] = "Dr Strange";

// function rFS() {
//   const randomFS = [Math.floor(Math.random() * recomFS.length)];
//   document.getElementById("precom").innerHTML = recomFS[randomFS];
// }

function setUpEvents() {
  let image_array = [
    "dr_strange.jpg",
    "goodfellas.jpg",
    "iamlegend.jpg",
    "shrek.jpg",
    "truedetective.jpg",
    "twd.jpg"
  ];

  return image_array;
}

function getRandomImage() {
  let imageList = setUpEvents();

  let random_index = Math.floor(Math.random() * imageList.length);

  let selected_image = imageList[random_index];

  document.getElementById("image_shower").src = `./images/${selected_image}`;
}

// Create a random index
// Get an image from the previously defined random_index
// Display the recommended image(Film or Tv show)
