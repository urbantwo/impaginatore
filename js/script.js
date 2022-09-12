// import { Formati } from "./formati.js";


function generaSingolo() {

    var altezza = document.getElementsByName('altezza')[0].value;
    var base = document.getElementsByName('base')[0].value;

    var infoEtichetta = document.getElementById("info-etichetta")

    var unita = document.getElementById('unita-misura').value
    var coloreSfondo = document.getElementsByName('sfondo')[0].value

    var oggetto = document.createElement('div')
    oggetto.style.height = altezza + unita
    oggetto.style.width = base + unita

    oggetto.classList.add('classe')
    oggetto.classList.add('cancellabile')

    var sfocatura = document.getElementsByName('sfocatura')[0].checked

    if(sfocatura){
        oggetto.classList.add('sfocatura')
    }
    oggetto.style.backgroundColor = coloreSfondo


    
    infoEtichetta.textContent = " | " + altezza + unita + ' x ' + base + unita
    
    oggetto.onclick = function () { remove(this) }
    

    // var riga1 = document.getElementById('riga1').value
    // if(riga1!=null && riga1!="" ){
    //     var temp = document.createElement("div")
    //     temp.innerText =riga1
    //     oggetto.appendChild(temp)
    // }

    var righeTesto = document.getElementsByClassName('valore-testo')
    var testoTemp = ''
    for(var i=0;i<righeTesto.length;i ++){
        if(righeTesto[i]!== null && righeTesto[i]!== ''){
            testoTemp += righeTesto[i].value + "<br/>"
        }
    }
    var temp = document.createElement("div")
    temp.innerHTML = testoTemp

    oggetto.appendChild(temp)


    return oggetto
}

function oggetto(){
    return document.getElementById('oggetto-principale')
}

function setSfondoColor(colore){
    oggetto().style.backgroundColor = colore
}

function generaOggettoPrincipale(){
    
    var oggetto = generaSingolo()
    oggetto.setAttribute('id', 'oggetto-principale')
    document.getElementById('dima').append(oggetto)


}


function generaContenitore() {

    var contenitore = document.createElement("div")
    contenitore.classList.add('contenitore')

    return contenitore
}




function remove(el) {
    el.remove()
}

function generaFull() {

    

    generaOggettoPrincipale()

    var proprieta = getHowMany(document.getElementsByName('base')[0].value, document.getElementsByName('altezza')[0].value)

    for (let i = 0; i < proprieta.altezza; i++) {
        var tempContenitore = generaContenitore()

        for (let j = 0; j < proprieta.larghezza; j++) {
            var tempOggetto = generaSingolo()
            tempContenitore.append(tempOggetto)
        }
        document.getElementsByTagName('page')[0].append(tempContenitore)

    }




}

function getHowMany() {

    var page = document.getElementsByTagName('page')[0].getBoundingClientRect()

    var altezzaPage = page.height
    var larghezzaPage = page.width

    var oggettoPrincipale = document.getElementById('oggetto-principale').getBoundingClientRect()
    var altezzaOggetto = oggettoPrincipale.height
    var larghezzaOggetto = oggettoPrincipale.width

    var tempAltezza = Math.floor(altezzaPage / altezzaOggetto)
    var tempLarghezza = Math.floor(larghezzaPage / larghezzaOggetto)
    var totaleEtichette = tempAltezza * tempLarghezza

    return {
        'altezza': tempAltezza,
        'larghezza': tempLarghezza,
        'totaleEtichette': totaleEtichette

    }


}

function reset() {
    document.getElementsByTagName('page')[0].innerHTML= ""
    document.getElementById('oggetto-principale').remove()
}



// function caricaFormati(){
//     var select = document.getElementById('lista-formati')
   

//     for (var i=0;i<listaFormati.length;i++){
//         var option = document.createElement("option")
//         option.setAttribute('value',listaFormati[i].nome)
//         option.text=listaFormati[i].nome
//         select.appendChild(option)
//     }

    
// }



// document.addEventListener('load',caricaFormati())

