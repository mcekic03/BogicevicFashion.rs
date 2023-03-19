'use strict';
export let nizartikli = [];


export class Artikal{
    constructor(cena,ime,boja,velicina,opis,podvrsta){

        this.ime =ime;
        this.boja =boja;
        this.velicina =velicina;
        this.opis =opis;
        this.cena = cena;
        this.podvrsta =podvrsta;
        
        

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




const artikal1 = new Artikal([650],'Riviera 7',['playa','nero','visone'],['S','M','L'],'Unihop 7 dena providan sa blagim sjajem bez ojacanja na prstima . SASTAV: 84% poliamid 16% elastan.','Unihop & push up')
nizartikli.push(artikal1);

const artikal2 = new Artikal([410,450],'Super 15',['bianco','safari','visone','beige','daino','glace','antilope','bronzo','gray','darkblue','anthracite','nero'],['S','M','L','XL'],'Klasican unihop 15 dena sa blagim sjajem I ojacanjem na prstima. Sastav: 89% POLIAMID 10% ELASTIN 1% PAMUK','Unihop & push up')
nizartikli.push(artikal2);

const artikal3 = new Artikal([510,650],'Super 20',['glace','gray','anthracite','daino','visone'],['S','M','L','XL','2XL'],'Klasican unihop 20 dena mat bez sjaja I bez ojacanja na prstima. Sastav: 89% poliamid,10% elastan, 1% pamuk','Unihop & push up')
nizartikli.push(artikal3);

const artikal4 = new Artikal([590,650],'Style 40',['nero','daino','visone'],['S','M','L','XL','2XL'],'Klasican unihop 40 dena providan sa blagim sjajnim ojacanjem na prstima, SASTAV 80% poliamid, 20% elastan','Unihop & push up')
nizartikli.push(artikal4);

const artikal5 = new Artikal([710,850],'Tonic 40',['beige','forest','granat','red','nero'],['S','M','L','XL'],'Poluprovidan grilon unihop od 40 dena. Sastav: 80% POLIAMID 20% ELASTAN','Unihop & push up')
nizartikli.push(artikal5);

const artikal6 = new Artikal([850],'Micro 60',['red','nero'],['S','M','L'],'Neprovidan grilon unihop od 60 dena. Sastav: 80% POLIAMID 20% ELASTAN','Unihop & push up')
nizartikli.push(artikal6);

const artikal7 = new Artikal([1290,1390],'Cover 100',['nero'],['1/2','3/4','XL'],'Neprovidan mat grilon unihop od 100 dena. Sastav: 80% POLIAMID 20% ELASTAN','Unihop & push up')
nizartikli.push(artikal7);

const artikal8 = new Artikal([1290,1390],'Microshine 100',['bronzo','granat','black'],['1/2','3/4','XL'],'Neprovidan grilon unihop sa blagim sjajem od 100 dena. Sastav: 80% POLIAMID 20% ELASTAN','Unihop & push up')
nizartikli.push(artikal8);

const artikal9 = new Artikal([850,950],'Relax 20',['vision','daino','nero'],['S','M','L','XL'],'Medicinski unihop od 20 dena koji podjednako steze celom povrsinom I masira nogu dok ste u pokretu. Sastav: 80% poliamid 20% elastin','Unihop & push up')
nizartikli.push(artikal9);

const artikal10 = new Artikal([950,1050],'Relax 50',['vision','daino','nero'],['S','M','L','XL'],'Medicinski unihop od 50 dena koji podjednako steze celom povrsinom I masira nogu dok ste u pokretu. Sastav: 80% poliamid 20% elastin','Unihop & push up')
nizartikli.push(artikal10);

const artikal11 = new Artikal([1190],'Relax 80',['nero'],['S','M','L'],'Medicinski unihop od 80 dena koji podjednako steze celom povrsinom I masira nogu dok ste u pokretu. Sastav: 80% poliamid 20% elastin','Unihop & push up')
nizartikli.push(artikal11);

const artikal12 = new Artikal([1190,1250],'Plus Up 20',['vision','beige','black'],['S','M','L','XL'],'Unihop od 20 dena sa jakim steznikom i posedovanjem fiksatora za gornji i donji stomak, zadnjicu i butine sa blagim sjajem I bez ojacanja na prstima. Sastav: 80% poliamid 20% elastan','Unihop & push up')
nizartikli.push(artikal12);

const artikal13 = new Artikal([1190,1250],'Plus Up 40',['vision','daino','nero'],['S','M','L','XL'],'Unihop od 40 dena sa jakim steznikom i posedovanjem fiksatora za gornji i donji stomak, zadnjicu i butine sa blagim sjajem I bez ojacanja na prstima. Sastav: 80% poliamid 20% elastan','Unihop & push up')
nizartikli.push(artikal13);

const artikal14 = new Artikal([1200,1200],'Slim Body',['black','ecru'],['S','M','L','XL'],'Steznik sa nogavicama i fiksatorima za gornji i donji stomak, zadnjicu i butinu. Uspesno oblikuje telo bez ocrtavanja ispod odece. Sastav: 90% najlon 10% spandex','Unihop & push up')
nizartikli.push(artikal14);

const artikal15 = new Artikal([1190],'Mama 20',['visone','black'],['2','3','4'],'Unihop od 20 dena za trudnice. Sastav: 90% poliamid, 10% elastane','Unihop & push up')
nizartikli.push(artikal15);

const artikal16 = new Artikal([1190],'Mama 40',['visone','black'],['2','3','4'],'Unihop od 40 dena za trudnice. Sastav: 90% poliamid, 10% elastane','Unihop & push up')
nizartikli.push(artikal16);

//MREZASTI UNIHOP

const artikal17 = new Artikal([850],'Casting 047',['visone','nero'],['1/2','3/4'],'SvevremenskI mrežastI UNIHOP s gustom mrežicom. Bešavni sa nevidljivim ojačanjem prstiju.Sastav 80% poliamid I 20%elastin.','Mrezasti unihop')
nizartikli.push(artikal17);

const artikal18 = new Artikal([1190],'Casting 32',['visone','black'],['1/2','3/4'],'Klasične mrežaste hulahopke. Srednja veličina mrežice (32 otvora). One su bešavne i imaju nevidljivo ojačanje nožnog prsta. Sastav: 80% poliamid, 20% elastin','Mrezasti unihop')
nizartikli.push(artikal18);

const artikal19 = new Artikal([2190],'Casting Jets',['black'],['1/2','3/4'],'Elegantne, dekorativne helanke. Ukrašene suptilnim kristalima u celini.Sastav: 80% poliamid, 18% elastane, 2% akril','Mrezasti unihop')
nizartikli.push(artikal19);

const artikal20 = new Artikal([2000],'Charly pearls',['nero'],['1'],'Seksi mrežasti unihop  krupna mreža. Vrlo lep i mekan na dodir. S prednje strane ukrašen crnim biserima. Besprekorni  i imaju ugodan elastični struk. Sastav: 80% poliamid, 18% elastan, 2% akril.','Mrezasti unihop')
nizartikli.push(artikal20);

const artikal21 = new Artikal([1190],'Charly N02',['nero'],['1/2','3/4'],'Mrežasti unihop sa aplikacijom za nakit besavne su imaju mali umetak udoban elastican pojas I nevidljivo pojacanje za prste. Sastav: 89% poliamid, 10% elastan, 1% pamuk.','Mrezasti unihop')
nizartikli.push(artikal21);

const artikal22 = new Artikal([1290],'Charly Z10',['black'],['1/2','3/4'],'Mrezasti unihop sa dezenom. Sastav: 81% poliamid, 19% elastin','Mrezasti unihop')
nizartikli.push(artikal22);

const artikal23 = new Artikal([1290],'Charly P32',['gray'],['1/2','3/4'],'Mrezasti unihop sa masnicom na zadnjem delu.Sastav: 89% poliamid, 10% elastin, 1% pamuk','Mrezasti unihop')
nizartikli.push(artikal23);






