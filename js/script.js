/*- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes*/


const informazioniGlobali = [
    {
        idPost : 0 ,
        nomeAutore: "fabio Caressa" ,
        fotoAutore : "https://picsum.photos/200" ,
        dataAmericana: "04/03/2022" ,
        testo: "al mare con le mie migliori amiche" ,
        immagine : "https://picsum.photos/300/200",
        likes : 200
    },
    {
        idPost : 1 ,
        nomeAutore: "Luca Rossi" ,
        fotoAutore : false ,
        dataAmericana: "01/01/2022" ,
        testo: "al mare con le mie migliori amiche" ,
        immagine : "https://picsum.photos/300/200",
        likes : 160
    },
    {
        idPost : 2 ,
        nomeAutore: "Giulia Rossi" ,
        fotoAutore : false ,
        dataAmericana: "04/11/2022" ,
        testo: "al mare con le mie migliori amiche" ,
        immagine : false ,
        likes : 162
    },
    {
        idPost : 3 ,
        nomeAutore: "Marco De Antoni" ,
        fotoAutore : "https://picsum.photos/200" ,
        dataAmericana: "04/09/2022" ,
        testo: "al mare con le mie migliori amiche" ,
        immagine : false, 
        likes : 17
    },
    {
        idPost : 4 ,
        nomeAutore: "Lucia De Antoni" ,
        fotoAutore : "https://picsum.photos/200" ,
        dataAmericana: "05/01/2022" ,
        testo: "al mare con le mie migliori amiche" ,
        immagine : "https://picsum.photos/300/200", 
        likes : 90
    },
]
//creo una funzione per capire se è presente una foto
const hasPhoto = (x) => x.immagine ? x.immagine : "";
//creo array per immagazzinare i likes
let arrayLikes = [];
//creazione dei post
//targhettizzo il contenitore

const target = document.getElementById("container");

//creo un ciclo for che si ripete per ogni elemento del bigdata

for (let i=0 ; i < informazioniGlobali.length ; i++){

    //creo l'elemento post
    target.innerHTML += `<div class="post" id="id${informazioniGlobali[i].idPost}">
    <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="${ controlloPresenzaImmagine = informazioniGlobali[i].fotoAutore ? hasPhotoProfile(informazioniGlobali[i]) : ""} " />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${informazioniGlobali[i].nomeAutore}</div>
          <div class="post-meta__time">${informazioniGlobali[i].dataAmericana}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
      ${informazioniGlobali[i].testo}
    </div>
    <div class="post__image">
      <img src="${hasPhoto (informazioniGlobali[i])}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <button class="like-button js-like-button button"  >
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </button>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-${i}" class="js-likes-counter">${informazioniGlobali[i].likes} </b>persone</div>
      </div>
    </div>

  </div>`

  
    //se non ha la foto profilo bisogna inserire le iniziali sotto forma di span
    if (!informazioniGlobali[i].fotoAutore){
        //targhettizzo l'immagine profilo
        const profilo = document.querySelector(`#id${informazioniGlobali[i].idPost } .post-meta__icon`)
        console.log(profilo)
        profilo.innerHTML = `<span class="profile-pic-default"> ${hasPhotoProfile(informazioniGlobali[i])}</span>`
    }
            
};



//aggiungo l'azione del bottone per i like
//seleziono il bottone
let btn = document.querySelectorAll(".button.like-button.js-like-button");

for(let i = 0 ; i < btn.length ; i++){
    btn[i].addEventListener("click", function(){
        //faccio diventare il testo blu 
        btn[i].classList.toggle("like-button--liked");
        
        //aumento il numero di likes
        //seleziono il testo 
        //uso una variabile di appoggio 
        let variabile = informazioniGlobali[i].likes + 1;
        if (document.getElementById(`like-counter-${i}`).innerText == informazioniGlobali[i].likes){
            console.log(document.getElementById(`like-counter-${i}`).innerText)
            document.getElementById(`like-counter-${i}`).innerText = variabile
        }else{
    
            //nel caso che variabile sia diverso dal valore di likes iniziali rinizializza il valore
            document.getElementById(`like-counter-${i}`).innerText = informazioniGlobali[i].likes;
        }
    });
    
}

//creo delle funzioni per capire se il post ha la immagine e la foto autore
//dove x è l'oggetto


function hasPhotoProfile(x){
    //voglio che mi returni o la foto o le iniziali del nome
    let nomeCognome = x.nomeAutore;
    if (x.fotoAutore){
        return x.fotoAutore
    }else{
        //faccio in modo di ottenere le iniziali
        //metto in un array il nomecognome
        let appoggio = [...x.nomeAutore]
        //creo una variabile per le inziali
        let iniziali = "";
        //seleziono le iniziali
        for(let i=0; i < appoggio.length ; i++){
            if (i==0){
                //aggiungo la iniziale del nome
                iniziali = appoggio[i]
            }else if (appoggio[i-1] == " "){
                iniziali += appoggio[i]
            };

        }
        console.log(iniziali)
        return iniziali;
        
        
        
    }
}

hasPhotoProfile(informazioniGlobali[1]);

//creo una funzione per capire l'indice dei likes dalla array

function indicelike(x){

}