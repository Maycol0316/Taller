function guardar(){
   
    function Datos (nombre, email, direccion, edad, ocupacion, telefono){
        this.nombre=nombre;
        this.email=email;
        this.direccion=direccion;
        this.edad=edad;
        this.ocupacion=ocupacion;
        this.telefono=telefono;
    }
    var capNombre = document.getElementById("name").value;  
    var capCorreo = document.getElementById("email").value;
    var capCDir = document.getElementById("dir").value;
    var capEdad = document.getElementById("age").value; 
    var capOcupa = document.getElementById("ocupacion").value;
    var capTel = document.getElementById("tel").value;

   var User = new  Datos (capNombre,capCorreo,capCDir,capEdad,capOcupa,capTel);
   console.log(User)
}