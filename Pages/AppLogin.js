const user = document.getElementById("userName");
const password = document.getElementById("password");

const botton = document.getElementById("botton");




botton.addEventListener("click",validation);


const listUsers = ['felipe','juan','andres','nicoll'];
const listPasswords = [111,222,333,444];

let vali =1;
function validation(){
    for (let i = 0; i < listUsers.length; i++) {
        if (user.value == listUsers[i]) {
            vali=2;
            if (password.value == listPasswords[i]) {
                alert("se ha logeado con exito!");
                break;
            }
            else{
                alert("contraseña incorrecta!");
                break;
            }
  
        }
        else{
             vali=0;
        }
        
    }
    if (vali==0) {
        alert("usuario no encontrado!");
    }
    else if (vali==2) {
        console.log("validado");
    }
    
}