function check(){
    var name = document.getElementById('name')
    var message = document.getElementById('message')
    var email = document.getElementById('email')
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // l'utilisateur doit entrer un mail qui contient ces caracteres de cette format pour que ca soit valide 
    if(name.value == "" || name.value == null)
    {
        alert("Name is required");    // si l'utilisateur n'ecrit rien alors ce n'est pas valide
    }

    if(message.value == "" || message.value == null)    // la meme chode pour la case de message 
    {
        alert("Message is required");   
    }
    if(email.value.match(mailformat))
    {
        return true;
    }
    else
    {   
        alert("You have entered an invalid email ");
    }
}
 function change1(){
    // recuperer l'element css
    let css=localStorage.getItem("css");

    if(css==null||css==="grid.css"){
        // changer vers le nouveau thème
        localStorage.setItem("css", "grid2.css");
        document.querySelector("link[href='grid.css']").href = "grid2.css";
    }
    else{
        // changer vers le premier thème
        localStorage.setItem("css", "grid.css");
        document.querySelector("link[href='grid2.css']").href = "grid.css";
    }
} 
function init(){
    let css=localStorage.getItem("css");
    // recuperer l'element de css
    if(css!=null){
        // definir le thème par defaut
        document.querySelector("link[href='grid.css']").href = css;
    }
}
 
 