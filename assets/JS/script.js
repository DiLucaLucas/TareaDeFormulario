// Captura el evento Submit
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Capturamos los valores de los campos del fomrulario
  const firstInput = document.getElementById("firstInput").value;
  const secondInput = document.getElementById("secondInput").value;
  const options = document.getElementById("options").value;
  const message = document.getElementById("message").value;

  // Creación de un objeto con los datos del formulario.
  const formData = {
    name: firstInput,
    lastname: secondInput,
    options: options,
    message: message,
  };
  //   Imprimimos los datos por consola
  console.log(JSON.stringify(formData, null, 2));
});
