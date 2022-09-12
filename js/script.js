


function generaSingolo() {

    let altezza = document.getElementsByName('altezza')[0].value;
    let base = document.getElementsByName('base')[0].value;

    let infoEtichetta = document.getElementById("info-etichetta")

    let unita = document.getElementById('unita-misura').value
    let coloreSfondo = document.getElementsByName('sfondo')[0].value

    let oggetto = document.createElement('div')
    oggetto.style.height = altezza + unita
    oggetto.style.width = base + unita

    oggetto.classList.add('classe')
    oggetto.classList.add('cancellabile')

    let sfocatura = document.getElementsByName('sfocatura')[0].checked

    // if(sfocatura){
    //     oggetto.classList.add('sfocatura')
    // }
    oggetto.style.backgroundColor = coloreSfondo


    
    infoEtichetta.textContent = " | " + altezza + unita + ' x ' + base + unita
    
    // oggetto.onclick = function () { remove(this) }
    

    // let riga1 = document.getElementById('riga1').value
    // if(riga1!=null && riga1!="" ){
    //     let temp = document.createElement("div")
    //     temp.innerText =riga1
    //     oggetto.appendChild(temp)
    // }

    let righeTesto = document.getElementsByClassName('valore-testo')
    let testoTemp = ''
    let tempArray = []
    for(const element of righeTesto){
        if(element!= null && element!== ''){
            // testoTemp += element.value + "<br/>"
            tempArray.push(element.value)
        }
    }
    let temp = document.createElement("div")
    temp.innerHTML = tempArray.join('<br/>')

    

        
        let file = document.getElementById('file')

    let tempSfondo = document.createElement("div")
    tempSfondo.classList.add('sfondo-img')
    if(file.value != ''){
        
        let path = "./"+ file.value.substring(12,file.value.length);
        tempSfondo.style.backgroundImage = "url('" + path + "')"

    }

    if(sfocatura){
        tempSfondo.classList.add('sfocatura')
    }
    
    oggetto.appendChild(temp)
    oggetto.appendChild(tempSfondo)



    return oggetto
}

function oggetto(){
    return document.getElementById('oggetto-principale')
}

function setSfondoColor(colore){
    oggetto().style.backgroundColor = colore
}

function generaOggettoPrincipale(){
    
    let oggetto = generaSingolo()
    oggetto.setAttribute('id', 'oggetto-principale')
    document.getElementById('dima').append(oggetto)


}


function generaContenitore() {

    let contenitore = document.createElement("div")
    contenitore.classList.add('contenitore')

    return contenitore
}




function remove(el) {
    el.remove()
}

function generaFull() {
    

    if(document.getElementById('oggetto-principale') != null) {
        reset()
    }else{

    
    

    generaOggettoPrincipale()

    let proprieta = getHowMany(document.getElementsByName('base')[0].value, document.getElementsByName('altezza')[0].value)

    for (let i = 0; i < proprieta.altezza; i++) {
        let tempContenitore = generaContenitore()

        for (let j = 0; j < proprieta.larghezza; j++) {
            let tempOggetto = generaSingolo()
            tempContenitore.append(tempOggetto)
        }
        document.getElementsByTagName('page')[0].append(tempContenitore)


    }
    }




}

function getHowMany() {

    let page = document.getElementsByTagName('page')[0].getBoundingClientRect()

    let altezzaPage = page.height
    let larghezzaPage = page.width

    let oggettoPrincipale = document.getElementById('oggetto-principale').getBoundingClientRect()
    let altezzaOggetto = oggettoPrincipale.height
    let larghezzaOggetto = oggettoPrincipale.width

    let tempAltezza = Math.floor(altezzaPage / altezzaOggetto)
    let tempLarghezza = Math.floor(larghezzaPage / larghezzaOggetto)
    let totaleEtichette = tempAltezza * tempLarghezza

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
//     let select = document.getElementById('lista-formati')
   



    
// }



// document.addEventListener('load',caricaFormati())

function getSelectedStandard() {
    let listaFormati = document.getElementById('lista-formati')

    if (listaFormati.value != '-'){
        let tempVar = listaFormati.value.split('x')

        document.getElementsByName('base')[0].value = tempVar[0]
        document.getElementsByName('altezza')[0].value = tempVar[1]
    }else{
        
        document.getElementsByName('base')[0].value = ''
        document.getElementsByName('altezza')[0].value = ''
    }
}


function setTextAlign() {
    let alignSelect = document.getElementById('testo-align')

    document.querySelectorAll('.classe > div').forEach(elem => {
        elem.style.textAlign = alignSelect.value
    })

}

function setLabelPosition(){
    let elencoCheckbox = document.getElementsByName('pos')
    let checkedValue = "t-l"
    
    for(const elem of elencoCheckbox){
        if(elem.checked){
            checkedValue = elem.value
        }
    }

    let tempArray = checkedValue.split('-')

    let classe = document.querySelectorAll('.classe > div')

    for(const elem of classe){
        elem.style.justifyContent = getPositionName(tempArray[1])
        elem.style.alignItems = getPositionName(tempArray[0])
    }
    
    
    
}

function getPositionName (lettera) {
    if(lettera === 't' || lettera ==='l'){
        return position.start
    }else if(lettera === 'b' || lettera ==='r'){
        return position.end
    } else {
        return position.center
    }
}
 

const position = {
    'start':'flex-start',
    'center':'center',
    'end':'flex-end'
}

// function addFunctionToRadioButtons() {
//     let elencoCheckbox = document.getElementsByName('pos')
   
    
//     for(const elem of elencoCheckbox){
//         if(elem.checked){
//             elem.onclick = setLabelPosition()
//         }
//     }
// }

// document.body.addEventListener('change', ()=> {
//     console.log('ciao')
// })


// document.getElementById('radio-position').addEventListener('click',setLabelPosition())

// radio-position

function changeFont(){

 let select = document.getElementById('font-family')
 if(select.value != '-'){
    document.getElementsByTagName('page')[0].style.fontFamily = select.value;
 }
}

function changeWeight(){

    let select = document.getElementById('spessore')
    
       document.getElementsByTagName('page')[0].style.fontWeight = select.value;
    
   }

   function changeFontSize(){

    let select = document.getElementById('grandezza-font')
    
       document.getElementsByTagName('page')[0].style.fontSize = select.value +"px";
    
   }

function changeBackgroundColor() {
    let coloreSfondo = document.getElementsByName('sfondo')[0].value

    for(const oggetto of document.getElementsByClassName('classe')){
        oggetto.style.backgroundColor = coloreSfondo
    }
}

function changeFontColor() {
    let coloreSfondo = document.getElementsByName('colore-testo')[0].value

    for(const oggetto of document.getElementsByClassName('classe')){
        oggetto.style.color = coloreSfondo
    }
}

function changeBackgroundImagePosition() {
    let posizione = document.getElementsByName('posizione-sfondo')[0].value
    if(posizione!= '-'){
    for(const oggetto of document.getElementsByClassName('sfondo-img')){
        oggetto.style.backgroundPosition = posizione
    }
}
}

function changeBackgroundImageSize() {
    let grandezza = document.getElementsByName('grandezza-sfondo')[0].value
    if(grandezza!= '-'){
    for(const oggetto of document.getElementsByClassName('sfondo-img')){
        oggetto.style.backgroundSize = grandezza
    }
}
}

function changeBackgroundImageOpacity() {
    let opacita = document.getElementsByName('sfondo-opacity')[0].value
    
    for(const oggetto of document.getElementsByClassName('sfondo-img')){
        oggetto.style.opacity = opacita
    }
}
