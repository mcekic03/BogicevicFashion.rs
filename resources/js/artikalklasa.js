'use strict';
export let nizartikli = [];


export class Artikal{
    constructor(cena,ime,boja,velicina,opis,podvrsta,putanje){

        this.ime =ime;
        this.boja =boja;
        this.velicina =velicina;
        this.opis =opis;
        this.cena = cena;
        this.podvrsta =podvrsta;
        this.putanje = putanje;
        

    }

}

export class ArtikalKorpa{
    constructor(cena,ime,boja,velicina,kolicina){

        this.ime =ime;
        this.cena = cena;
        this.boja =boja;
        this.velicina =velicina;
        this.kolicina =kolicina;
    }

}




const artikal1 = new Artikal([650],'Riviera 7',['playa','nero','visone'],['S','M','L'],'Unihop 7 dena providan sa blagim sjajem bez ojacanja na prstima . SASTAV: 84% poliamid 16% elastan.','Unihop & push up',['Riviera7-1','Riviera7-2'])
nizartikli.push(artikal1);

const artikal2 = new Artikal([410,450],'Super 15',['bianco','safari','visone','beige','daino','glace','antilope','bronzo','gray','darkblue','anthracite','nero'],['S','M','L','XL'],'Klasican unihop 15 dena sa blagim sjajem I ojacanjem na prstima. Sastav: 89% POLIAMID 10% ELASTIN 1% PAMUK','Unihop & push up',['Super15-1','Super15-2',])
nizartikli.push(artikal2);

const artikal3 = new Artikal([510,650],'Super 20',['glace','gray','anthracite','daino','visone'],['S','M','L','XL','2XL'],'Klasican unihop 20 dena mat bez sjaja I bez ojacanja na prstima. Sastav: 89% poliamid,10% elastan, 1% pamuk','Unihop & push up',['Super20-1','Super20-2'])
nizartikli.push(artikal3);

const artikal4 = new Artikal([590,650],'Style 40',['nero','daino','visone'],['S','M','L','XL','2XL'],'Klasican unihop 40 dena providan sa blagim sjajnim ojacanjem na prstima, SASTAV 80% poliamid, 20% elastan','Unihop & push up',['Style40-1','Style40-2'])
nizartikli.push(artikal4);




