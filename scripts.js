function mostrar(){
    var Nombre = document.getElementById('nombre').value;
    var strSexo = document.getElementById('sexo').value;
    strSexo == "hombre" ? document.write(`Hola ${Nombre}, bienvenido!`) : document.write(`Hola ${Nombre}, bienvenida!`);
}

