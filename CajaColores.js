function manejamos()
{
  var el = document.getElementById("Cuadro");
  el.style.backgroundColor = el.value;
}
// Function to add event listener to table
var el = document.getElementById("Cuadro");
el.addEventListener("input",manejamos);
