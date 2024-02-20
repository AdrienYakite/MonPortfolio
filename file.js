// gestion du form de contact

const formulaire = document.querySelector("#formulaireContact")
const zoneEmail = document.getElementById("mailUser");
const zoneNom = document.getElementById("nomUser");
const zoneMsg = document.getElementById("msgUser");
let zoneForm = document.querySelector(".formContact");

formulaire.addEventListener("submit", (event)=>{
    event.preventDefault();

    //récupération infos user
    const emailUser = zoneEmail.value;
    console.log(emailUser);
    
    const nomUser = zoneNom.value;
    console.log(nomUser);

    const msgUser = zoneMsg.value;
    console.log(msgUser);
    
    //regles de validation cas simples et complexes
        let regex = new RegExp("^[a-z0-9._]+@[a-z0-9._]+\\.[a-z0-9._]+(\\.[a-z0-9._]+)?$", "i");
        let testEmail = regex.test(emailUser);
        console.log(testEmail)
            if(testEmail===true){
                console.log("Champs correct")
                zoneForm.innerHTML="";
                zoneForm.innerHTML="Merci pour votre message "+ nomUser +", je vous recontacterai au plus vite !"
            }else{
                zoneEmail.classList.add("erreurSaisie")
                zoneEmail.setAttribute("placeholder", "Erreur de saisie !")
                console.log("Champs incorrect")
            }


  

    









    //envoie du mail selon les infos récoltées
     
    
    
    
    

    
})
