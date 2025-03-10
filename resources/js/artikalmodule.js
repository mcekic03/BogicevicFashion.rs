'use strick'

import {ArtikalKorpa, nizartikli} from './artikalklasa.js'
let podvrsta =[];
const divslike = document.querySelector('.divslikesrc')
const divovi = Array.from(divslike.children);
function raspodela(p){
    podvrsta = [];
   
    nizartikli.forEach(el => {
       
        if(el.podvrsta === p){
            podvrsta.push(el);
        }
       
    })
    return podvrsta;
     
    
}
export function generacijaartikla(pod,pretraga=false){
    let gotovhtml = ' ';
    let artikli = [];
    if(!pretraga){
        artikli = raspodela(pod);
    }
    else if(pretraga){
        artikli = pod;
    }

    artikli.forEach(e =>{
        let bojehtml = ' ';
        
        let velicinehtml = ' ';
     
        let slikehtml = ' ';

        if(e.podvrsta !='Kozmetika'){
            e.boja.forEach(el => {
                let  html = `<div class="col span-1-of-4 col boja ${el}">${el}</div>`
                 bojehtml = bojehtml + html;
             })
             e.velicina.forEach(el => {
                let html = `<div class="col span-1-of-4 vel">
                         <p>${el}</p>
                  </div>`
                 velicinehtml = velicinehtml + html;
             })
        }


        divovi.forEach(el =>{
            if(el.dataset.ime === e.ime.trim()){
                let d = Array.from(el.children);
        
                d.forEach(ee =>{
                    
                    let html = `<img  class="slikaartikal" src="${ee.src}" alt="">`
                    slikehtml = slikehtml + html;
                })
            }
        })

        
        let markup = `
        
        <div class="artikal">
        
        
        <div class=" divslika col span-1-of-2">
        <div>
           ${slikehtml}
           </div>
        </div>
        <div class="col span-1-of-2">
            <div class="plan-box">
                <div>
                    <h3>Naziv: ${e.ime}</h3>
                   
                </div>
                <div>
                    <h3>Opis</h3>
                    <p class="opisartikal">${e.opis}</p>
                </div>

                ${e.podvrsta !='Kozmetika'? `<div>
                    <h3>Velicina</h3>
            
                    <div class="velicinedostupne">
               
                        <div class="odabirvelicine">
                   
                        ${velicinehtml}
                    
                        </div>
                    </div>
                </div>

                <div class="odabirboje">
           
                ${bojehtml}
           
                </div>`:' '}
                
           
                <div class="kolicinaiporuka">
                    <div class="col span-1-of-2">
                        <h3>Kolicina</h3>
                    <div class="odabirkolicine">
                        
                        <form action="input">
                            <input type="number" id="kol" name="kol" min="1" value="1">
                        </form>

                    </div>
                    </div>
                    <div class="col span-1-of-2 porukakorpa"> 
                        <p>Cena Artikla:</p>
                        <p>${e.cena[0]}</p>
                        <p>RSD</p>
                        
                    </div>

                   
                   
                </div>
                <div>
                    <p class="btn btn-outline addtocart">DODAJ U KORPU</p>">
                </div>
            
       

       

       

            </div>
           
        </div>
        
        </div>
        
        
        `;


        gotovhtml = gotovhtml + markup;
        
    })
    return gotovhtml;

}
export function KorpaView(NizKorpaArtikli){
    let gotovhtml = ' ';

    
    

    
    NizKorpaArtikli.forEach(el => {
        let markup = `
    
    <li class ="li korpaArtikal">
    <p>Naziv: ${el.ime} </p>
    <p>Boja: ${el.boja} </p>
    <p>Velicina: ${el.velicina} </p>
    <p>Kolicina: ${el.kolicina}</p>
    <p>Cena: ${el.cena}</p>
 </li>     
    
 `;

        gotovhtml += markup;

    })

    

    return gotovhtml;
    
    

   




}
export function Tablemeil(NizKorpaArtikli){
    let gotovhtml = ' ';

    NizKorpaArtikli.forEach(el => {
        let markup = `
        <tr style="border:1px solid black">
        <td style="border:1px solid black">${el.ime}</td>
        <td style="border:1px solid black">${el.cena}</td>
        <td style="border:1px solid black">${el.velicina}</td>
        <td style="border:1px solid black">${el.boja}</td>
        <td style="border:1px solid black">${el.kolicina}</td>
        <tr>
    
 `;

        gotovhtml += markup;

    })

    return gotovhtml;
    
    

   




}



