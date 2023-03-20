'use strict';

import {Artikal} from './artikalklasa.js'
import { nizartikli } from './artikalklasa.js';
import { ArtikalKorpa } from './artikalklasa.js';
import {Email} from './smtp.js'
import {generacijaartikla} from './artikalmodule.js'
import {KorpaView} from './artikalmodule.js';
import {Tablemeil} from './artikalmodule.js';




let nizKorpaArtikli = [];
let html = ' ';
const prozorartikli = document.querySelector(".prikazartikla");
const brojpronadjenih = document.querySelector('.broj-pronadjenih');
const porukastart = document.querySelector('.porukastart');

let Storage = function(artiklikorpica, getset){



  if(getset){
    localStorage.setItem('korpica', JSON.stringify(artiklikorpica));
  }
  else{
    return JSON.parse(localStorage.getItem('korpica'));
  }
  
}

//search element

const searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

searchBox.forEach(elm => {
  elm.addEventListener('click', () => {
    elm.previousElementSibling.value = '';
  });
});

document.addEventListener('keydown', function (e) {
  let search = document.querySelector('.search-box').children[0].value;
  search = search.charAt(0).toUpperCase() + search.slice(1);

  let newSearchNiz = [];
  if(e.key === 'Enter'){
    if(search.length >0){
      
      nizartikli.forEach(el => {
        if(el.ime.trim() == search.trim()){
          newSearchNiz.push(el);
        }
        else if(el.ime.trim().substring(0,search.length) == search.trim()){
          newSearchNiz.push(el);
        }
        
      })
      
      const gotovhtml = generacijaartikla(newSearchNiz,true);
      prozorartikli.innerHTML = ' ';
      prozorartikli.insertAdjacentHTML("beforeend", gotovhtml);
    }
    else{
      let hhtml = generacijaartikla(JSON.parse(sessionStorage.getItem('setovaniartikli')), false);
    prozorartikli.innerHTML = ' ';
    prozorartikli.insertAdjacentHTML("beforeend", hhtml)
    }

    
    if(newSearchNiz.length > 0){
      porukastart.textContent = `Uspesna pretraga, pronadjeno ${newSearchNiz.length}`;
    }
    else{
      porukastart.textContent = 'Molimo vas probajte ponovo nismo mogli da nadjemo podudaranje';
      let hhtml = generacijaartikla(JSON.parse(sessionStorage.getItem('setovaniartikli')), false);
    prozorartikli.innerHTML = ' ';
    prozorartikli.insertAdjacentHTML("beforeend", hhtml)
    }
    
    


  }

    

}, false);
// Get the modal
const modal = document.querySelector(".modalkorpa");
const modaluvecana = document.querySelector('.slikauvecanamodal');

// Get the button that opens the modal
const btn = document.querySelector(".korpica");


// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event){
    if (event.target == modal || event.target == modaluvecana) {
        modal.style.display = "none";
        modaluvecana.style.display = 'none';
      }
})


window.addEventListener('load', function(event){
  let hhtml = generacijaartikla(JSON.parse(sessionStorage.getItem('setovaniartikli')), false);
    prozorartikli.innerHTML = ' ';
    prozorartikli.insertAdjacentHTML("beforeend", hhtml)
    brojpronadjenih.parentElement.textContent = `Prikazani su artikli iz kategoriije ${JSON.parse(sessionStorage.getItem('setovaniartikli'))}`;
});

if(JSON.parse(localStorage.getItem('homepodvrsta')))
{
  let stringic = JSON.parse(localStorage.getItem('homepodvrsta'))
  switch(stringic){
    case 'Unihop & push up':
      console.log(1)
       html = generacijaartikla(stringic, false);
      prozorartikli.innerHTML = ' ';
      prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Mrezasti unihop':
        console.log(2)
         html = generacijaartikla(stringic, false);
         prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Dekorativni unihop':
        console.log(3)
        html = generacijaartikla(stringic, false);
        prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Samodrzece carape':
        console.log(4)
        html = generacijaartikla(stringic, false);
        prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Carape za halter':
        console.log(5)
        html = generacijaartikla(stringic, false);
        prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Zenski ves':
        console.log(6)
        html = generacijaartikla(stringic, false);
        prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      default:
        localStorage.removeItem('homepodvrsta')
         
        break;
      
  }
  sessionStorage.setItem('setovaniartikli', JSON.stringify(stringic));
}

window.addEventListener('click', function(e){
 
  if(e.target.classList.contains('linkstrana')){
    console.log(e.target.textContent);

    switch(e.target.textContent){
      case 'Unihop & push up':
        console.log(1)
        html = generacijaartikla(e.target.textContent, false);
        prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Mrezasti unihop':
          console.log(2)
          
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        
        break;
        case 'Dekorativni unihop':
          console.log(3)
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Samodrzece carape':
          console.log(4)
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Carape za halter':
          console.log(5)
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Zenski ves':
          console.log(6)
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        
    }

    sessionStorage.setItem('setovaniartikli', JSON.stringify(e.target.textContent));
    porukastart.textContent = `Izabrali ste kategoriju ${e.target.textContent}`

  }

})





let izabranaboja = ' ';
let izabranavelicina = ' ';

prozorartikli.addEventListener('click', function(e){
  
  
  //velicina
  if(e.target.parentElement.classList.contains('vel')){
    
    if(!e.target.parentElement.parentElement.classList.contains('ima')){
     
      e.target.classList.toggle('velDodato');
      e.target.parentElement.parentElement.classList.add('ima');
      izabranavelicina = e.target.textContent;

      if(izabranavelicina === 'XL' ||izabranavelicina === '2XL' || izabranavelicina === '3XL'){
        nizartikli.forEach(el =>{
          if(el.ime === e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].textContent.slice(6).trim()){
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[1].children[1].textContent = el.cena[1];
          }
        })
        
        //console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[1].children[1]);
      }
      else{
        nizartikli.forEach(el =>{
          if(el.ime === e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].textContent.slice(6).trim()){
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[1].children[1].textContent = el.cena[0];
          }
        })
      }
     
      
    }
    else if(e.target.classList.contains('velDodato')){
      e.target.classList.toggle('velDodato');
      e.target.parentElement.parentElement.classList.remove('ima');
      izabranavelicina = " ";
      nizartikli.forEach(el =>{
        if(el.ime === e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].children[0].textContent.slice(6).trim()){
          e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[4].children[1].children[1].textContent = el.cena[0];
        }
      })
    }  

  }

  //boja
  
  if(e.target.classList.contains('boja')){
   
   
    
    if(!e.target.parentElement.classList.contains('ima')){
      e.target.classList.toggle('bojaDodato');
      e.target.parentElement.classList.add('ima');
      izabranaboja = e.target.textContent;
      
      
     
    }else if(e.target.classList.contains('bojaDodato')){
      e.target.classList.toggle('bojaDodato');
      e.target.parentElement.classList.remove('ima');
      izabranaboja = " ";
      
    }

    

  }

  //addtocart


  if(e.target.classList.contains('addtocart') && izabranaboja != ' ' && izabranavelicina != ' '){
    
    const Artikalcartniz = Array.from(e.target.parentElement.parentElement.children);
    const ime = Artikalcartniz[0].textContent.trim().slice(6);
    const velicina = izabranavelicina;
    const boja = izabranaboja;
    const kolicina = Artikalcartniz[4].children[0].children[1].children[0].children[0].value;
    const cena = Number(Artikalcartniz[4].children[1].children[1].textContent);

    const newcartArtikal = new ArtikalKorpa(cena,ime,boja,velicina,kolicina);
    nizKorpaArtikli = [];
    nizKorpaArtikli.push(newcartArtikal);

    const object = Storage('',false);
    if(object){
    object.forEach(el =>{
      let a1 = new ArtikalKorpa(el.cena,el.ime,el.boja,el.velicina,el.kolicina);
      nizKorpaArtikli.push(a1);
    })
      }
    Storage(nizKorpaArtikli,true);
    window.location.reload();
  }
  
  

  //slikauvelicanje
  
  if(e.target.classList.contains('slikaartikal')){
    modaluvecana.style.display = 'block';
    modaluvecana.children[0].children[0].src = e.target.src;
    console.log(modaluvecana.children[0].children[0]);
  }

  


})



btn.addEventListener('click', function(){
  modal.style.display = "block";
  let gotovhtml = KorpaView(Storage(' ',false));
  
  

  const resultKorpa = document.querySelector('.resultKorpa')
  resultKorpa.innerHTML = ' ';
  
  resultKorpa.insertAdjacentHTML("beforeend" , gotovhtml);

  
  let nizartikla1 = Array.from(Storage(' ',false));
  
  let konacnacena = 0;

  nizartikla1.forEach(el => {
    konacnacena += el.cena*el.kolicina;
  })


  const cenaprikaz = document.querySelector('.konacnacena')
  cenaprikaz.innerText = konacnacena;


  const paginationNumbers = document.getElementById("pagination-numbers");
  paginationNumbers.innerHTML = ' ';
  const paginatedList = document.getElementById("paginated-list");
  const listItems = Array.from(resultKorpa.children);

  const paginationLimit = 4;
  const pageCount = Math.ceil(listItems.length / paginationLimit);
  let currentPage = 1;

  const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  handleActivePageNumber();

  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};


  getPaginationNumbers();
  setCurrentPage(1);

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });



}) 

const potvrdaislanje = document.querySelector('.submit_btn')

potvrdaislanje.addEventListener("click", function(e){
   let niz = Storage('',false);
  
  if(niz.length != 0){
    
  
  

  const ime = e.target.parentElement.parentElement.children[0].children[0].value;
  const prezime = e.target.parentElement.parentElement.children[3].children[0].value;
  const mejl = e.target.parentElement.parentElement.children[0].children[1].value;
  const telefon = e.target.parentElement.parentElement.children[3].children[1].value;
  const postanskibroj = e.target.parentElement.parentElement.children[6].children[0].value;
  const nacinslanja = e.target.parentElement.parentElement.children[6].children[1].options[e.target.parentElement.parentElement.children[6].children[1].selectedIndex].textContent;
  const grad = e.target.parentElement.parentElement.children[9].children[0].value;
  const ulicaibroj = e.target.parentElement.parentElement.children[9].children[1].value;
  const ukupnozaplacanje = Number(e.target.parentElement.parentElement.children[13].children[0].children[0].textContent);
 
  const emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let checke = false;
  if(mejl.match(emailcheck)){
    checke = true;
  }
  else{
    checke = false;
  }
  

  if(ime.length,prezime.length,mejl.length,telefon.length,postanskibroj.length,grad.length,ulicaibroj.length != 0  && checke){
    
   
    let artiklitable = Tablemeil(Storage('',false));
   
    
    
    Email.send({
      SecureToken : "1e2df8a2-6368-439a-9114-1c82146579c2",
      To : `${mejl.trim()}`,
      From : "porudzbenice.bogicevic@gmail.com",
      Subject : "Porudzbina sa sajta Bogicevic Fashion",
      Body : `
      
      <h1>Porudzbenica</h1>
      <h2>Zdravo ${ime} ${prezime}, Hvala vam sto koristite nas sajt i nadamo se da cete nam se vratiti</h2>
      <br></br>
      <br></br>
      <h3>Detalji porudzbine</h3>
      <h2>Suma koju trebate spremiti kada dodje kurir je: ${ukupnozaplacanje}</h2>
      <br></br>
      <table style="width:70%;margin:auto;text-align:center;border:1px solid black">
  <tr style="border:1px solid black">
    <th style="border:1px solid black">Naziv Artikla</th>
    <th style="border:1px solid black">Cena</th>
    <th style="border:1px solid black">Velicina</th>
    <th style="border:1px solid black">Boja</th>
    <th style="border:1px solid black">Kolicina</th>
  </tr>
  
  ${artiklitable}
 
</table>

      <h3>Srdacan pozdrav od kompanije Bogicevic Fashion</h3>
      
      `
    }).then(function(){
      e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerHTML = " "
      localStorage.clear();
    })

    
    Email.send({
      SecureToken : "1e2df8a2-6368-439a-9114-1c82146579c2",
      To : `porudzbenice.bogicevic@gmail.com`,
      From : "porudzbenice.bogicevic@gmail.com",
      Subject : "Porudzbina sa sajta Bogicevic Fashion",
      Body : `
      
      <h1 style="margin:auto">Porudzbenica</h1>
      <h2  style="margin:auto">Klijent ${ime} ${prezime}, je narucio novu porudzbinu</h2>
      <br></br>
      <br></br>
      <h3  style="margin:auto">Detalji porudzbine</h3>
      <h4  style="margin:auto">Mejl adresa klijenta: ${mejl}</h4>
      <h4  style="margin:auto"> Broj telefona: ${telefon}</h4>
      <h3  style="margin:auto">Adresa za isporuku</h3>
      <p  style="margin:auto">----------------------------------------------------------------</p>
      <h4  style="margin:auto">Grad: ${grad}</h4>
      <h4  style="margin:auto">Postanski Broj: ${postanskibroj}</h4>
      <h4  style="margin:auto">Ulica i broj: ${ulicaibroj}</h4>
      <h4  style="margin:auto">Brza posta: ${nacinslanja}</h4>
      <p  style="margin:auto">----------------------------------------------------------------</p>
      <h2>Suma koju trebate  naplatiti je: ${ukupnozaplacanje}</h2>
      <p  style="margin:auto">----------------------------------------------------------------</p>
      <br></br>
      <h4  style="margin:auto">Artikli za pakovanje</h4>
      <table style="width:70%;margin:auto;text-align:center;border:1px solid black">
  <tr style="border:1px solid black">
    <th style="border:1px solid black">Naziv Artikla</th>
    <th style="border:1px solid black">Cena</th>
    <th style="border:1px solid black">Velicina</th>
    <th style="border:1px solid black">Boja</th>
    <th style="border:1px solid black">Kolicina</th>
  </tr>
  
  ${artiklitable}
 
</table>

      `
    }).then(function(){
      e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerHTML = " "
      localStorage.clear();
      window.location.reload();
    })

  }
  else{
    if(checke){
      console.log('Molimo vas popunite sva polja koja su preostala');
    }
    else{
      console.log('Proverite vasu mejl adresu');
    }
    
  }

}
else{
  console.log('Ne mozete naruciti praznu korpu, dodajte elemente');
}





});

const r = document.querySelector('.resultKorpa');

r.addEventListener('click', function(e){
  let domArtikal = e.target.parentElement;
  let ime = e.target.parentElement.children[0].textContent.slice(7).trim();
  let nizartikla1 = Array.from(Storage('',false));
  let index = 0
  nizartikla1.forEach(el => {
    if(el.ime.trim() == ime){
      nizartikla1.splice(index,1);
    }
    index++;
  })

  Storage(nizartikla1,true);
  btn.click();

})




