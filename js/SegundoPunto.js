const nombre = document.getElementById("nombres")
const correo = document.getElementById("email")
const form = document.getElementById("formRegistro")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    if(nombre.value === null || nombre.value === "" ){
    warnings +="El nombre NO es valido  <br>"
    entrar = true
  }

    if (!regexEmail.test(email.value)) {
        warnings +="El correo NO es valido revise caracteres @ y .<br>"
        alert("Error: La dirección de correo " + email + " es incorrecta.");
        entrar = true
    }

    if (entrar){
        parrafo.innerHTML = warnings
    } else{
        parrafo.innerHTML = "VALIDADO"
    }
})
