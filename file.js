// gestion du form de contact

const btnEnvoyer = document.querySelector("button");
const zoneEmail = document.getElementById("mailUser");
const zoneNom = document.getElementById("nomUser");
const zoneMsg = document.getElementById("msgUser");
let zoneForm = document.querySelector(".formContact");

btnEnvoyer.addEventListener("click", ()=>{
    const emailUser = zoneEmail.value;
    console.log(emailUser);
    
    const nomUser = zoneNom.value;
    console.log(nomUser);

    const msgUser = zoneMsg.value;
    console.log(msgUser);
    
    //envoie du mail selon les infos récoltées
     
    
    
    
    //affichage message sur la page
    zoneForm.innerHTML=``;
    zoneForm.classList.add("msgFinal");
    zoneForm.innerText=`Merci pour votre message `  + nomUser + `, je vous recontacterai au plus vite !`  ;

    event.preventDefault();
})
