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

const artikal24 = new Artikal([1190],'Zazu Classic',['nero'],['1/2','3/4'],'Moderan unihop koji imitira carape gornji deo 20 dena donji deo 60 dena ima ravan sav I mali pamucni umetak, bez prstiju. Sastav: 91% poliamid 8% elastin 1% pamuk ','Dekorativni unihop')
nizartikli.push(artikal24);

const artikal25 = new Artikal([1190],'Zazu Line',['black'],['1/2','3/4'],'Ekskluzivni unihop koji linijom oponašaju čarape sa halterima. Gornjih 20 den, donjih 60 den. Imaju malu higijensku  pamučnu traku i nevidljivo pojačanje nožnog prsta. Izuzetno moderan i seksi. Sastav: 79% poliamid, 20% elastan, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal25);

const artikal26 = new Artikal([1990],'Zazu T13',['black'],['1/2','3/4'],'Dream Line, 60 den sa mustrom na  butinama, . Izrađena od mikrovlakana. Imaju ravni šav, pamučni umetak i nevidljivo ojačanje nožnog prsta.  Struk s silikonskom čipkom. Zvezde od cirkona. Sastav: 79% poliamid, 10% polyester, 10% elastin, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal26);

const artikal27 = new Artikal([1390],'Zazu U07',['black'],['1/2','3/4'],': Imitacija samostojećih sa okom koje namiguje, debljina 20/60den','Dekorativni unihop')
nizartikli.push(artikal27);

const artikal28 = new Artikal([1390],'Zazu U07',['black'],['1/2','3/4'],': Imitacija samostojećih sa okom koje namiguje, debljina 20/60den','Dekorativni unihop')
nizartikli.push(artikal28);

const artikal29 = new Artikal([1690],'Zazu T01',['black'],['1/2','3/4'],'Hulahopke s mustrom na prednjoj strani butina. Gornjih 20 den, donjih 60 den. Izrađena od mikrovlakana. Imaju ravni šav, mali pamučni umetak, udoban elastični pojas i nevidljivo pojačanje nožnih prstiju. Zalepljene usne ukrašene blistavim kamenčićima.','Dekorativni unihop')
nizartikli.push(artikal29);

const artikal30 = new Artikal([1690],'Zazu X16',['black'],['1/2','3/4'],'Helanke koje imitiraju carape sa sjajnom sarom oko butine. Sastav: 89% poliamid, 8% elastane, 2% metalizovana predja, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal30);

const artikal31 = new Artikal([1690],'Zazu X06',['black'],['1/2','3/4'],'dekorativni unihop donji deo 60 dena neprovidan gornji deo 20 dena sa trakama od 60 dena. Sastav: 91% poliamid, 8% elastane, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal31);

const artikal32 = new Artikal([1690],'Zazu Z01',['black'],['1/2','3/4'],'Elegantni unihop koji imitira carape sa sarom na prednjoj strani butine.Gornji deo helanki je debljine 20 dena a donji deo je debljine 60 dena. Sastav: 91% poliamid, 8% elastane, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal32);

const artikal34 = new Artikal([1690],'Zazu X14',['black'],['1/2','3/4'],'Dekorativni unihop imitacija samodrzecih carapa od 20 do 60 dena sa dekorativnim pahuljama na butinama. Sastav: 89% poliamid, 10% elastane, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal34);

const artikal35 = new Artikal([1190],'Flores 516',['black','visone'],['1/2','3/4'],'Izuzetno elegantan unihop s mikro mrežicom od 20 DEN. Vrlo izdržljiv,fleksibilan. Niskog struka završen širokim udobnim pojasom. Mali pamučni klin.Imaju seksi, zadnji šav.Sastav: 89% POLIAMID 10% ELASTAN 1% PAMUK','Dekorativni unihop')
nizartikli.push(artikal35);

const artikal36 = new Artikal([1190],'Flores 716',['black'],['1'],'Hit nekoliko  sezona 20 DEN tačkasti unihop, izuzetno izdržljive i fleksibilne.Imaju ravan šav i mali pamučni higijenski uložak. Udobna elastična traka pruža neverovatnu udobnost .Sastav: 89% POLIAMID 10% ELASTAN 1% PAMUK ','Dekorativni unihop')
nizartikli.push(artikal36);

const artikal37 = new Artikal([1590],'Flores Dots',['black'],['1/2','3/4'],'Unihop na tackice imaju mali umetak, udoban elastican pojas, ravan sav I nevidljivo ojacanje prstiju. Sastav 89% poliamid 10% elastin 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal37);

const artikal38 = new Artikal([1190],'Flores D12',['visone'],['1/2','3/4'],'Dekorativni unihop sa savom pozadi od 20 dena. Sastav: 89% poliamid, 10% elastane, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal38);

const artikal39 = new Artikal([1590],'Peace',['black'],['1/2','3/4'],'Dekorativni unihop od 20 do 40 dena sa natpisom mir na sto razlicitih jezika. Sastav: 89% poliamid, 10% elastane, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal39);

const artikal40 = new Artikal([1590],'Allure R09',['black'],['1/2','3/4'],'Unihop od 20 dena sa tigrastim uzorkom na jednoj nozi. Ukrasene kristalima, imaju ravan sav, mali umetak, udoban elestican pojas, nevidljivo ojacanje prstiju, glava tigra je napravljena metodom jata. Sastav: 89% poliamid 10% elastin 1% pamuk.','Dekorativni unihop')
nizartikli.push(artikal40);

const artikal41 = new Artikal([1190],'Allure K03',['black'],['1/2','3/4'],'Dekorativni unihop 20 dena sa ukrasom u obliku srca na jednoj nozi. Sastav: 80% poliamid 20% elastin','Dekorativni unihop')
nizartikli.push(artikal41);

const artikal42 = new Artikal([1190],'Allure D20',['beige','black'],['1/2','3/4'],'Dekorativni unihop od 20 dena sa ukrosom na nozi u zlatbnoj boji.','Dekorativni unihop')
nizartikli.push(artikal42);

const artikal43 = new Artikal([1790],'Allure X08',['black'],['1/2','3/4'],'Dekorativne unihop debljine 60 dena sa ukrasom u vidu horoskopskih znakova. Sastav: 87% poliamid, 12% elastane, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal43);

const artikal44 = new Artikal([1190],'Allure F01',['visone'],['1/2','3/4'],'Dekorativni unihop od 20 dena sa sarom na butini. Sastav: 90% poliamid, 10% elastane','Dekorativni unihop')
nizartikli.push(artikal44);

const artikal45 = new Artikal([1190],'Grace H08',['tabaco'],['1/2','3/4'],'Unihop od 60 dena imitacija mreze.','Dekorativni unihop')
nizartikli.push(artikal45);

const artikal46 = new Artikal([1690],'Grace X05',['back'],['1/2','3/4'],'Dekorativni unihop sa sarom dijamanata debljine 40 dena. Sastav: 80% poliamid, 14% elastin, 5% poliester, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal46);

const artikal47 = new Artikal([1190],'Desire K08',['visone'],['3/4'],'Dekorativni unihop sa trakama iznad kolena 20 dena.','Dekorativni unihop')
nizartikli.push(artikal47);

const artikal48 = new Artikal([1790],'Emmy X21',['black'],['1/2','3/4'],'Fensi helanke debljine 60 dena sa zimskim simbolima. Sastav: 91% poliamid, 8% elastane, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal48);

const artikal49 = new Artikal([1590],'Emmy T09',['black'],['1/2','3/4'],'Otmeni unihop, 60 den sa tačkastom štampanom mustrom. Izrađen od mikrovlakana. Imaju ravni šav, mali pamučni umetak, udoban elastični pojas i nevidljivo pojačanje nožnih prstiju.Sastav: 89% poliamid, 10% elastin, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal49);

const artikal50 = new Artikal([1190],'Emmy K09',['natural'],['1/2','3/4'],'Dekorativni unihop od 20 dena sa sarom na butini. Sastav: 90% poliamid, 10% elastane','Dekorativni unihop')
nizartikli.push(artikal50);

const artikal51 = new Artikal([1690],'Emmy X02',['black'],['1/2','3/4'],'Šarane helanke debljine 20 den sa natpisima. Imaju ravan šav, mali klin, udobnu elastičnu traku na struku i nevidljivo ojačavanje prstiju.Sastav: 89% poliamid, 10% elastin, 1% pamuk.','Dekorativni unihop')
nizartikli.push(artikal51);

const artikal52 = new Artikal([1590],'Shine E57',['nero','darkblue'],['1/2','3/4'],'Hulahopke od 100 den sa suptilnim česticama lurexa koje omotaju nogesvilenim sjajem. Imaju udobnu elastiku u struku, ravni šav, malu pamučnu higijenskutraku i nevidljivo pojačanje nožnog prsta.Sastav: 89% poliamid, 11% elastan','Dekorativni unihop')
nizartikli.push(artikal52);

const artikal53 = new Artikal([1190],'Erotic K07',['black'],['1/2','3/4'],'Prekrasne, seksi hulapke od 20 den sa privlačnom čipkom.Završeno elegantnom čipkom sa silikonom postavljenom iznad kukova.Pamučni higijenski umetak, mogu da se nose I bez veša. Bez vidljivog ojačanja na prstima.','Dekorativni unihop')
nizartikli.push(artikal53);

const artikal54 = new Artikal([2470],'Dream Line X12',['black'],['1/2','3/4'],'Dekorativni unihop debljine 60 dena sa ukrasom u vidu sjajne sare na zadnjem delu. Sastav: 87% poliamid, 12% elastane, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal54);

const artikal55 = new Artikal([2470],'Dream Line X11',['black'],['1/2','3/4'],'Helanke iz serije "Linija snova" sa debljinom od 60 dena sa printom crnih tačkica. Sastav: 87% poliamid, 12% elastin, 1% pamuk','Dekorativni unihop')
nizartikli.push(artikal55);

const artikal56 = new Artikal([2990],'HOT H01',['black'],['3/4'],'Model H01 su unihop od 100 dena. Imaju pleteni kaiš od 6 cm, isečke u međunožju napred i pozadi, nevidljivo ojačavanje prstiju i vezivanje trakom napred i pozadi.Sastav: 82% poliamid, 15% elastin, 3% poliester','Dekorativni unihop')
nizartikli.push(artikal56);

const artikal57 = new Artikal([1190],'Erotic',['bianco','visone','safari','daino','glace','red','nero','grigio'],['1/2','3/4'],'Samodrzeca carapa 15 dena cipka dupli silikon','Samodrzece carape')
nizartikli.push(artikal57);

const artikal58 = new Artikal([1190],'Amore Kabaretki',['visone','nero'],['1/2','3/4'],'Samodrzeca carapa klasicna mreza sa cipkom dupli silicon. Sastav: 80% poliamid 20% elastin.','Samodrzece carape')
nizartikli.push(artikal58);

const artikal59 = new Artikal([1250],'Coco H14',['black'],['1/2','3/4'],'Samodrzeca carapa od 20 dena sa savom pozadi dupli silicon. Sastav: 84% poliamid, 16% elastan','Samodrzece carape')
nizartikli.push(artikal59);

const artikal60 = new Artikal([1550],'Paris 03',['black'],['1/2','3/4'],'Samodrzeca carapa od 20 dena bogatom cipkom I dupli silicon. Sastav: 80% poliamid 20%','Samodrzece carape')
nizartikli.push(artikal60);













