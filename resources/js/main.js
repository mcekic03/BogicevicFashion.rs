'use strict';

import {Artikal} from './artikalklasa.js'
import { nizartikli } from './artikalklasa.js';
import { ArtikalKorpa } from './artikalklasa.js';
/* SmtpJS.com - v3.0.0 */
let Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
import {generacijaartikla} from './artikalmodule.js'
import {KorpaView} from './artikalmodule.js';
import {Tablemeil} from './artikalmodule.js';

let podvr = ' ';

const godina = document.querySelector('.yeardinamic');
const getsetYear = function(){
  const d = new Date();
  godina.textContent = d.getFullYear();
}
getsetYear();

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
let search1 = document.querySelector('.search-box').children[0].value;
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
const top = document.querySelector('#button');
const header = document.querySelector('#header');
const nav = document.querySelector('.main-nav');
top.addEventListener('click',function(e){

  header.scrollIntoView({behavior: 'smooth'});

});
window.addEventListener('scroll',function(){
  if(window.pageYOffset >750){
    top.style.opacity = '1';
    nav.classList.add('main-navfixed')
  }
  else{
    top.style.opacity = '0';
    nav.classList.remove('main-navfixed')
  }
});
const modal = document.querySelector(".modalkorpa");
const modaluvecana = document.querySelector('.slikauvecanamodal');
const modalporuka = document.querySelector('.modalporuka');
const modalporuka1 = document.querySelector('.modalporuka1');
let proverap = true;
let slanje = false;
let proverap1 = false;
const btn = document.querySelector(".korpica");
window.addEventListener('click', function(event){
    if (event.target == modal || event.target == modaluvecana || event.target == modalporuka || event.target == modalporuka1) {
        modal.style.display = "none";
        modaluvecana.style.display = 'none';
        modalporuka.style.display = 'none';
        modalporuka1.style.display = 'none';
        if(event.target == modalporuka){
          localStorage.clear();
          window.location.reload();
        }
        if(event.target == modalporuka1 && proverap){
          window.location.reload();
      

        }
        if(!proverap){
          proverap = true;
        }
        if(slanje){
          modal.style.display = 'block';
          slanje = false;
        }
        if(proverap1){
          localStorage.clear();
          proverap = false;
        }
      }


})
window.addEventListener('load', function(event){
  
  let hhtml = generacijaartikla(JSON.parse(sessionStorage.getItem('setovaniartikli')), false);
    prozorartikli.innerHTML = ' ';
    prozorartikli.insertAdjacentHTML("beforeend", hhtml)
    brojpronadjenih.parentElement.textContent = `Prikazani su artikli iz kategoriije ${JSON.parse(sessionStorage.getItem('setovaniartikli'))}`;

  
  if(JSON.parse(sessionStorage.getItem('brzapretraga')).length > 0){
    let data = JSON.parse(sessionStorage.getItem('brzapretraga'));
    let newSearchNiz =[];
    console.log(data);
   
    nizartikli.forEach(el => {
      if(el.ime.trim() == data.trim()){
        newSearchNiz.push(el);
      }
      
    })
    
    const gotovhtml = generacijaartikla(newSearchNiz,true);
    prozorartikli.innerHTML = ' ';
    prozorartikli.insertAdjacentHTML("beforeend", gotovhtml);
    sessionStorage.removeItem('brzapretraga');

  }


});
if(JSON.parse(localStorage.getItem('homepodvrsta')))
{
  let stringic = JSON.parse(localStorage.getItem('homepodvrsta'))
  switch(stringic){
    case 'Unihop & push up':
      console.log(1)
      podvr = ' ';
       html = generacijaartikla(stringic, false);
      prozorartikli.innerHTML = ' ';
      prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Mrezasti unihop':
        console.log(2)
        podvr = ' ';
         html = generacijaartikla(stringic, false);
         prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Dekorativni unihop':
        console.log(3)
        podvr = ' ';
        html = generacijaartikla(stringic, false);
        prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Samodrzece carape':
        console.log(4)
        podvr = ' ';
        html = generacijaartikla(stringic, false);
        prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Carape za halter':
        console.log(5)
        podvr = ' ';
        html = generacijaartikla(stringic, false);
        prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Zenski ves':
        console.log(6)
        podvr = ' ';
        html = generacijaartikla(stringic, false);
        prozorartikli.innerHTML = ' ';
         prozorartikli.insertAdjacentHTML("beforeend", html)
      break;
      case 'Kozmetika':
        console.log(7)
        podvr = 'Kozmetika';
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
        podvr = ' ';
        html = generacijaartikla(e.target.textContent, false);
        prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Mrezasti unihop':
          console.log(2)
          podvr = ' ';
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        
        break;
        case 'Dekorativni unihop':
          console.log(3)
          podvr = ' ';
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Samodrzece carape':
          console.log(4)
          podvr = ' ';
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Carape za halter':
          console.log(5)
          podvr = ' ';
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Zenski ves':
          console.log(6)
          podvr = ' ';
          html = generacijaartikla(e.target.textContent, false);
          prozorartikli.innerHTML = ' ';
        prozorartikli.insertAdjacentHTML("beforeend", html)
        break;
        case 'Kozmetika':
          console.log(7)
          podvr = 'Kozmetika';
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
  if(podvr === 'Kozmetika'){
    izabranaboja = 'no';
    izabranavelicina = 'no'
  }

  if(e.target.classList.contains('addtocart')){
    if(izabranaboja == ' ' || izabranavelicina == ' '){
    modalporuka1.style.display = 'block';
    proverap = false;
    modalporuka1.children[0].children[0].textContent = `Morate izabrati i boju i velicinu ne samo jedno, hvala.`;
    }
  }
    
  if(e.target.classList.contains('addtocart') && izabranaboja != ' ' && izabranavelicina != ' '){
    
    const Artikalcartniz = Array.from(e.target.parentElement.parentElement.children);
    const ime = Artikalcartniz[0].textContent.trim().slice(6);
    const velicina = izabranavelicina;
    const boja = izabranaboja;
    const kolicina = Artikalcartniz[(podvr != ' '? 2:4)].children[0].children[1].children[0].children[0].value;
    const cena = Number(Artikalcartniz[(podvr != ' '? 2:4)].children[1].children[1].textContent);
    
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
    
    //modalporuka1.style.display = 'block';
    proverap = true;
    //modalporuka1.children[0].children[0].textContent=`Uspesno ste narucili Artikal ${ime} u boji ${boja} i velicini ${velicina}`;
    btn.click();
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
const brzaposta = document.querySelector("#brzaposta");
brzaposta.addEventListener("click", (e) => {
  let cena = 0;
  if(e.target.selectedIndex != 0){
    cena = e.target.options[e.target.selectedIndex].value
  }
  const c = document.querySelector('.cenapostarina');
  c.textContent = cena.toString();
});
const potvrdaislanje = document.querySelector('.submit_btn')
potvrdaislanje.addEventListener("click", function(e){
  slanje = true;
  
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
  let ukupnozaplacanje = Number(e.target.parentElement.parentElement.children[13].children[0].children[0].textContent);
  const postarina = Number(e.target.parentElement.parentElement.children[6].children[1].options[e.target.parentElement.parentElement.children[6].children[1].selectedIndex].value);
  const emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  ukupnozaplacanje += postarina
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
      Host : "smtp.elasticemail.com",
      Username : "bogicevicfashion@yahoo.com",
      Password : "B4833BD71B39C83B97C8D7B6DCFF4C1F73D0",
      To : "bogicevic2024@outlook.com",
      From : "bogicevic2024@outlook.com",
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
      <h2>Suma koju trebate  naplatiti je: ${ukupnozaplacanje-postarina}</h2>
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

      `,
      Attachments : [
        {
          name : "smtpjs.png",
          path : "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
        }]
    }).then(function(m){
      alert(m)
      modalporuka1.style.display = 'block';
      proverap1 = true;
      modalporuka1.children[0].children[0].textContent = `Uspesno naruceno, molimo vas da proverite svoj meil(obavezno spam(Nepozeljno) i promotion(Promocije) folder) Ukupna cena sa postarinom iznosi ${ukupnozaplacanje}`;
    })


  }
  else{
    if(checke){
      modalporuka1.style.display = 'block';
      proverap = false;
      modalporuka1.children[0].children[0].textContent = 'Molimo vas proverite sva polja jos jednom';
   
    }
    else{
      modalporuka1.style.display = 'block';
      proverap = false;
      modalporuka1.children[0].children[0].textContent = 'Molimo vas proverite vasu E-mail adresu';
   
    }
    
  }

  

}
else{
      modalporuka1.style.display = 'block';
      proverap = false;
      modalporuka1.children[0].children[0].textContent = 'Ne mozete naruciti praznu korpu, narucite neki artikal i prbajte ponovo';
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
    modalporuka1.style.display = 'block';
    proverap = false;
    modalporuka1.children[0].children[0].textContent = `Obrisali ste Artikal ${ime}`;
    btn.click();
  
    
})




