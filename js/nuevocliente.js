
(function () {

  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", validarCliente);

  function validarCliente(e) {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    const cliente = {
      nombre,
      email,
      telefono,
      empresa
    }



    if (validar(cliente)) {
      // Mostrar mensaje
      console.log("Todos los campos deben de llenarse");
      return;
    }

    console.log("Si paso la validación");
  }

  function validar(objt) {
    return !Object.values(objt).every(input => input !== "");
  }
})();