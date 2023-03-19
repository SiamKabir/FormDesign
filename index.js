function check(){
    let password = document.getElementById("password").value;
    let c_password = document.getElementById("c_password").value;
    let message = document.getElementById("message");

    if(password != 0 && c_password !=0){
        if(password==c_password){
            message.textContent="correct";
            message.style.color = "#1dcd59";

        }
        else{
            message.textContent="invalid";
            message.style.color = "#ff4d4d";
        }
    }
    else{
        alert('please provide information');
        message.textContent="";
    }


}