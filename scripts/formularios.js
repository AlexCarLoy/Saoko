console.log("Sesion JS06 Formularios")

//const form = document.getElementById("registro");
const objForm = document.forms["registro"];

                        //  (e v e n t o ,   funcionCallBack);
objForm.addEventListener(/* clic o */"submit", event =>{
    event.preventDefault();
    console.log("El evento submit de ha generado")
    let email= objForm.elements["inputEmail4"].value
    console.log(email);
    console.log(objForm.elements["inputPassword4"].value);

});
