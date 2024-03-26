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

const artikal61 = new Artikal([1190],'Sumer 8',['black'],['1/2','3/4'],'Samodrzeca carapa fina ekstra tanka od 8 dena ','Samodrzece carape')
nizartikli.push(artikal61);

const artikal62 = new Artikal([1490],'Coco N55',['black'],['1/2','3/4'],'Samostojeće čarape u obliku mrežice s lurexom . Imaju lastiž bez čipke od 7 cm sa silikonom i nevidljivo ojačanje na nožnim prstima. Lepo svjetlucaju na nozi i dodaju stila.Sastav: 90% poliamid, 10% elastan','Samodrzece carape')
nizartikli.push(artikal62);

const artikal63 = new Artikal([1790],'Coco W15',['black'],['1/2','3/4'],'Samodrzeca carapa microfiber od 40 dena.Sastav 92%poliamid i 8% elastin','Samodrzece carape')
nizartikli.push(artikal63);

const artikal64 = new Artikal([1790],'Coco X19',['black'],['1/2','3/4'],'Samodrzeca mrezasta carapa sa tackicama i sa cipkom.Sastav 81%poliamid i 19% elastin','Samodrzece carape')
nizartikli.push(artikal64);

const artikal65 = new Artikal([1790],'Coco X20',['black'],['1/2','3/4'],'Klasicne samodrzece carape sa cipkom debljina 20 dena.Sastav 90% poliamid i 10%elastin','Samodrzece carape')
nizartikli.push(artikal65);

const artikal66 = new Artikal([1190],'Coco Vena',['black'],['1/2','3/4'],'Samostojeće čarape 15 den. Bez vidljivog ojačanja prstiju s elegantnim silikonskim završnim slojem od 8 cm.Sastav: 84% poliamid, 16% elastan','Samodrzece carape')
nizartikli.push(artikal66);

const artikal67 = new Artikal([1190],'Coco B21',['black'],['1/2','3/4'],'Samodrzeca carapa bez cipke sa imitacijom tetovaye na jednoj nozi.','Samodrzece carape')
nizartikli.push(artikal67);

const artikal69 = new Artikal([1490],'Coco 718',['black'],['1/2','3/4'],'Samodrzeca carapa sa imitacijom haltera.','Samodrzece carape')
nizartikli.push(artikal69);

const artikal70 = new Artikal([1490],'Coco 718',['black'],['1/2','3/4'],'Samodrzeca carapa sa imitacijom haltera.','Samodrzece carape')
nizartikli.push(artikal70);

const artikal71 = new Artikal([2470],'Coco 516',['black'],['1/2','3/4'],'Samodrzeca carapa sa pertlanjem pri vrhu zadnje strane.','Samodrzece carape')
nizartikli.push(artikal71);

const artikal72 = new Artikal([1390],'Chanse 100',['nero'],['1/2','3/4'],'Samodrzece carape sa cipkom od 100 dena neprovidne.','Samodrzece carape')
nizartikli.push(artikal72);

const artikal73 = new Artikal([1790],'Desire L08',['black'],['1/2','3/4'],'Samodrzeca carapa sa imitacijom haltera na butini.','Samodrzece carape')
nizartikli.push(artikal73);

const artikal74 = new Artikal([1190],'Coco I01',['visone'],['1/2','3/4'],'Samodrzeca carapa boja koze sa crnim tackicama.','Samodrzece carape')
nizartikli.push(artikal74);

const artikal75 = new Artikal([1690],'Coco T25',['black'],['1/2','3/4'],'Samodrzeca carapa sa prelepom cipkom I duplim silikonom od 20 dena. Sastav: 89% poliamid, 10% elastane, 1% pamuk','Samodrzece carape')
nizartikli.push(artikal75);

const artikal76 = new Artikal([650],'Akte',['black','glace','visone','bianco'],['1/2','3/4'],'Carapa za halter od 15 dena. Sastav: 80% poliamid, 20% elastan','Carape za halter')
nizartikli.push(artikal76);

const artikal77 = new Artikal([1550],'Paris 04',['black'],['1/2','3/4'],'Carapa za halter sa cipkom od 20 dena. Sastav: 84% poliamid, 16% elastan','Carape za halter')
nizartikli.push(artikal77);

const artikal78 = new Artikal([1390],'Cherry Jet',['black'],['1/2','3/4'],'Komplet carape i halter sa cirkonima.','Carape za halter')
nizartikli.push(artikal78);

const artikal79 = new Artikal([2290,2290],'C-407',['black'],['S','M','L/XL'],'Ekskluzivni zenski ves komplet korset-gacice','Zenski ves')
nizartikli.push(artikal79);

const artikal80 = new Artikal([1490,1490],'B-204',['black'],['S','M','L/XL'],'Ekskluzivni ves cipkasti bodi','Zenski ves')
nizartikli.push(artikal80);

const artikal80c = new Artikal([1490,1490],'B-206',['black'],['S','M','L/XL'],'Ekskluzivan zenski bodi sa trakama ','Zenski ves')
nizartikli.push(artikal80c);

const artikal81 = new Artikal([1490,1490],'B-209',['black'],['S/M','L','XL'],'Zenska ves spavacica kratka prozirna','Zenski ves')
nizartikli.push(artikal81);

const artikal82 = new Artikal([1490,1490],'B-216',['pink'],['S','M','L/XL'],'Ekskluzivan roze bodi sa crnim trakama','Zenski ves')
nizartikli.push(artikal82);

const artikal83 = new Artikal([1490,1490],'B-218',['gray'],['S','M','L/XL','2XL'],'Ekskluzivni ves cipkasti bodi ','Zenski ves')
nizartikli.push(artikal83);

const artikal84 = new Artikal([1490,1490],'V-506',['white'],['S/M','L/XL'],'Bela zenska spavacica sa halterima i krznom oko vrata','Zenski ves')
nizartikli.push(artikal84);

const artikal85 = new Artikal([1490,1490],'D-302',['black'],['S/M','L','XL'],'Zenska spavacica sa jednom bratelom','Zenski ves')
nizartikli.push(artikal85);

const artikal86 = new Artikal([3720,3720],'U-815',['black'],['S/M','L/XL'],'Zenska ves dugacka spavacica prozirna sa plavim vezom na brushalteru','Zenski ves')
nizartikli.push(artikal86);

const artikal87 = new Artikal([3990,3990],'U-816',['black'],['S/M','L','XL'],'Zenska ves kraca spavacica prozirna sa plavim vezom na brushalteru','Zenski ves')
nizartikli.push(artikal87);

const artikal88 = new Artikal([1490,1490],'U-818',['black'],['S/M','L','XL'],'Kraca crna spavacica sa ukrstenim trakama i cipkom pri dnu','Zenski ves')
nizartikli.push(artikal88);

const artikal89 = new Artikal([1190],'Brus na lepljenje',['black','natural'],['A','B','C','D'],'Zenski brus bez bratele i bez zadnjeg kopcanja sa unutrasnje strane je oblozen silikonom.','Zenski ves')
nizartikli.push(artikal89);

const artikal90 = new Artikal([1190],'Brus B',['black','natural','red','white'],['75B','80B','85B'],'Push up brushalter koji moze da se nosi sa i bez bratela. Dobijaju se bratele i traka  u  boji brusa i providna.Zadnja traka na brushalteru se podesava kao I bratela tako da kod ovog modela obim nije problem.','Zenski ves')
nizartikli.push(artikal90);

const artikal91 = new Artikal([1190],'Brus C',['black','natural','red','white'],['75B','80B','85B'],'Push up brushalter koji moze da se nosi sa i bez bratela. Dobijaju se bratele sa cirkonima i traka  u  boji brusa i providna.Zadnja traka na brushalteru se podesava kao i bratela tako da kod ovog modela obim nije problem.','Zenski ves')
nizartikli.push(artikal91);

const artikal92 = new Artikal([1190],'Brus B2',['black','natural','red','white'],['75B','80B','85B'],'Elegantni push up brushalter koji moze da se nosi sa i bez bratela.','Zenski ves')
nizartikli.push(artikal92);

const artikal93 = new Artikal([1790],'Brus ABCD',['black','natural'],['A','B','C','D'],'Brushalter bez savova i bez bratela.','Zenski ves')
nizartikli.push(artikal93);

const artikal94 = new Artikal([1190],'Brus B3',['black','natural','red','white'],['75B','80B','85B'],'Brushalter push up sa cipkom ispod korpe','Zenski ves')
nizartikli.push(artikal94);

const artikal95 = new Artikal([1690],'M2',['black','natural'],['A','B','C'],'Besavni dublji mider izuzetnog hvaliteta','Zenski ves')
nizartikli.push(artikal95);

const artikal96 = new Artikal([1200,1200],'M1',['black','natural'],['M','L','XL'],'Besavni mider','Zenski ves')
nizartikli.push(artikal96);

const artikal97 = new Artikal([1200],'M3',['black','natural'],['U'],'Mider sa nogavicama sa fiksatorima za stomak zadnjicu i butine','Zenski ves')
nizartikli.push(artikal97);

const artikal98 = new Artikal([420,420],'G1',['black','natural','red','white'],['L','XL','2XL'],'Zenske besavne tange izuzetnog hvaliteta','Zenski ves')
nizartikli.push(artikal98);

const artikal99 = new Artikal([420,420],'G2',['black','natural','red','white'],['L','XL','2XL'],'Zenske besavne brazilke izuzetnog hvaliteta','Zenski ves')
nizartikli.push(artikal99);

const artikal100 = new Artikal([420,420],'G3',['black','natural','red','white'],['L','XL','2XL','3XL'],'Zenske besavne gace','Zenski ves')
nizartikli.push(artikal100);

const artikal101 = new Artikal([560],'Gel vostane trake',['neutral'],['no'],`Gel voštane trake za telos a ektraktom grejpfruta I bambusa,Linija kreirana za svaki tip kože, posebno za one osetljive. Uz inovativnu gel
formulu za lako i brzo uklanjanje neželjene dlake. Formula je obogaćena ekstraktima grejpfruta i
bambusa, poznatih po svojim jakim antioksidativnim svojstvima. Nežna nega, ostavljajući vašu
kožu svilenkastom glatkom i hidriranom.
U pogodnoj udobnoj veličini za brzu depilaciju većih površina tela. Nakon redovne upotrebe,
dlaka postaje mekša i finija.`,'Kozmetika')
nizartikli.push(artikal101);

const artikal102 = new Artikal([500],'Gel vostane trake',['neutral'],['no'],`Gel voštane trake za bikini zonu sa ekstraktom grejpfruta I bambusa,Linija kreirana za svaki tip kože, posebno za one osetljive. Uz inovativnu gel formulu za lako i brzo uklanjanje neželjene dlake. Formula je obogaćena ekstraktima grejpfruta i bambusa, poznatih po svojim jakim antioksidativnim svojstvima. Nežna nega, ostavljajući vašu kožu svilenkastom glatkom i hidriranom.
U pogodnoj udobnoj veličini za delikatnu oblast bikinija. Nakon redovne upotrebe, dlaka postaje mekša i finija.
`,'Kozmetika')
nizartikli.push(artikal102);

const artikal103 = new Artikal([450],'Gel vostane trake',['neutral'],['no'],`Gel voštane trake za lice sa ekstraktom grejpfruta I bambusa,Linija kreirana za svaki tip kože, posebno za one osetljive. Uz inovativnu gel formulu za lako i brzo uklanjanje neželjene dlake. Formula je obogaćena ekstraktima grejpfruta i bambusa, poznatih po svojim jakim antioksidativnim svojstvima. Nežna nega, ostavljajući vašu kožu svilenkastom glatkom i hidriranom.
U pogodnoj udobnoj veličini za depilaciju malih površina lica kao što su gornja usna i brada. Nakon redovne upotrebe, dlaka postaje mekša i finija.
 `,'Kozmetika')
nizartikli.push(artikal103);

const artikal104 = new Artikal([280],'Glicerinski sapun Nar',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa narom 80g,Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal104);

const artikal105 = new Artikal([280],'Glicerinski sapun Lubenica',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa lubenicom 80g, Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal105);

const artikal106 = new Artikal([280],'Glicerinski sapun Mango',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa mangom 80g, Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal106);

const artikal107 = new Artikal([280],'Glicerinski sapun Ruza Cokolada',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa ružom i čokoladom 80g, Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal107);

const artikal108 = new Artikal([280],'Glicerinski sapun Magnolija',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa magnolijom 80g, Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal108);

const artikal109 = new Artikal([280],'Glicerinski sapun Narandza',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa naranǆom i kurakaom 80g,Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal109);

const artikal110 = new Artikal([280],'Glicerinski sapun Lavanda',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa lavandom 80g,Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal110);

const artikal111 = new Artikal([280],'Glicerinski sapun Crvena Ruza',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa crvenom ružom 80g,Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal111);

const artikal112 = new Artikal([280],'Glicerinski sapun Damask Ruza',['neutral'],['no'],`Glicerinski sapun ručno pravljen sa damask ružom 80g,Nežna i bogata kremasta pena glicerinskog sapuna nežno čisti kožu dok održava prirodni nivo hidratacije. Kao rezultat toga, vaša koža je meka I glatka na dodir.`,'Kozmetika')
nizartikli.push(artikal112);

const artikal113 = new Artikal([250],'Sapun sa ekstraktom Ruze',['neutral'],['no'],`ručno radjeni sapuni 50g`,'Kozmetika')
nizartikli.push(artikal113);

const artikal114 = new Artikal([450],'Prirodni tuš gel voćna salata ružina voda i kakao ',['neutral'],['no'],`Hidratantni gel za tuširanje sa delikatnom formulom za pranje, 91% sastojaka prirodnog porekla. Sadrži 100% prirodnu ružinu vodu, kakao puter i mlečne proteine, koji neguju kožu vitaminima i neutrališu stres. Bogata nega i hrana za čula sa opuštajućim mirisom ruže i kakaa.`,'Kozmetika')
nizartikli.push(artikal114);

const artikal115 = new Artikal([450],'Prirodni tuš gel voćna salata kokos',['neutral'],['no'],`Hidratantni gel za tuširanje sa delikatnom formulom za pranje, 91% sastojaka prirodnog porekla. Sadrži 100% kokosovo ulje i ekstrakt kokosa, koji neguju kožu vitaminima i neutrališu stres. Bogata nega i hrana za čula sa opuštajućim mirisom kokosa.`,'Kozmetika')
nizartikli.push(artikal115);

const artikal116 = new Artikal([450],'Prirodni tuš gel voćna salata mango, kivi i avocado',['neutral'],['no'],`Hidratantni gel za tuširanje sa delikatnom formulom za pranje, 91% sastojaka prirodnog porekla. Sadrži ekstrakte manga i kivija, ulje avokada, koje neguje kožu vitaminima i neutrališe stres. Bogata vlažna nega i hrana za čula sa svežim tropskim mirisom.`,'Kozmetika')
nizartikli.push(artikal116);

const artikal117 = new Artikal([450],'Prirodni tuš gel voćna salata lubenica, dinja i med',['neutral'],['no'],`Hidratantni gel za tuširanje sa delikatnom formulom za pranje i 91% sastojaka prirodnog porekla. Sadrži ekstrakte lubenice, dinje i meda, koji neguju kožu vitaminima i neutrališu stres. Bogata vlažna nega i hrana za čula sa svežom voćnom aromom.`,'Kozmetika')
nizartikli.push(artikal117);

const artikal118 = new Artikal([450],'Prirodni tuš gel voćna salata ružina voda',['neutral'],['no'],`Hidratantni gel za tuširanje sa delikatnom formulom za pranje i 91% sastojaka prirodnog porekla. Sadrži 100% prirodnu ružinu vodu, koja neguje kožu vitaminima i neutrališe stres. Bogata vlažna nega i hrana za čula sa delikatnom aromom bugarske ruže.`,'Kozmetika')
nizartikli.push(artikal118);

const artikal119 = new Artikal([900],'Voćna salata protiv starenja žele losion za telo',['neutral'],['no'],`Prirodna formula sa 96% prirodnih sastojaka koji brinu o udobnosti vaše kože. Žele losion za telo sa izuzetno laganim i brzo upijajući postojanost. Obogaćen retinolom, koji se hvata u koštac sa pigmentacijom, zaglađiva bore i povećava nivo hidratacije kože. Dodata hijaluronska kiselina intenzivno vlaži kožu, istovremeno pomažući da se zadrži vlaga u njemu duže vreme, čineći je mnogo mekšom i elastičnijom. Ugrađena prirodna ružina voda ima antiinflamatorno, omekšavajuće i revitalizujuće dejstvo i istovremeno koži daje neodoljivu aromu.
Posebno stvorena za potrebe osetljive kože.
`,'Kozmetika')
nizartikli.push(artikal119);

const artikal120 = new Artikal([900],'Voćna salata vitamin C+E žele losion za telo',['neutral'],['no'],`Prirodna formula sa 96% prirodnih sastojaka koji brinu o udobnosti vaše kože. Žele  losion za telo sa izuzetno laganim i brzo upijajući postojanost. Obogaćeni kompleksom vitamina C+E, moćnim antioksidansima koji pomažu u regeneraciji oštećenih ćelija, za proizvodnju kolagena i elastina.Dodata prirodna ružina voda ima antiinflamatorno, omekšavajuće, hidrirajuće i revitalizujuće dejstvo, dok dodati ekstrakti manga, kivija i avokada neguju i glatku kožu i daju joj neodoljivu svežu aromu. 
Specijalno stvorena za potrebe suve kože.
`,'Kozmetika')
nizartikli.push(artikal120);

const artikal121 = new Artikal([900],'Voćna salata žele losionza telo koja održava vlažnost 48h sa hijaluronskim kompleksom i aromom lubenice',['neutral'],['no'],`Dugotrajna hidratacija tela u periodu od 48 sati. Prirodna formula sa 96% prirodnih sastojaka koji brinu o udobnosti vaše kože. Žele losion za telo sa izuzetno laganim i brzo upijajućim svojstvom. Obogaćena hijaluronskom kiselinom, koja hidrira dubinu, održava našu kožu zategnutom i elastičnom, istovremeno garantujući nastanak novog kolagena i elastičnih vlakana. Dodata prirodna ružina voda ima antiinflamatorno, omekšavajuće, hidrirajuće i revitalizujuće dejstvo, dok dodati ekstrakti lubenice, dinje i meda neguju kožu i daju joj neodoljivu svežu aromu.
Specijalno stvorena za potrebe dehidrirane kože.
`,'Kozmetika')
nizartikli.push(artikal121);

const artikal122 = new Artikal([900],'Voćna salata žele losion za telo za intenzivnu negu sa ružinom vodom i kakaom',['neutral'],['no'],`Prirodna formula sa 96% prirodnih sastojaka koji brinu o udobnosti vaše kože. Žele losion za telo sa izuzetno laganim i brzo upijajući svojstvom. Obogaćeni ceramidima koji pomažu u obnavljanju barijere kože i zadržavanju hidratacije u koži. Dodati kakao puter, pored toga što daje predivnu aromu, deluje kao prirodna hidratantna krema, a zahvaljujući antioksidansima u njemu, koža je zaštićena od slobodnih radikala. Ugrađena ružina voda jača barijeru kože, ima regenerišuća, tonirajuća i antibakterijska svojstva.
Specijalno stvorena za potrebe suve do veoma suve kože.
`,'Kozmetika')
nizartikli.push(artikal122);

const artikal123 = new Artikal([900],'Voćna salata za duboku hidrataciju žele losion za telo sa kokosovim uljem i ureom',['neutral'],['no'],`Duboko hidrirana nega tela. Prirodna formula sa 96% prirodnih sastojaka koji brinu o udobnosti vaše kože. Žele losion za telo sa izuzetno laganim i brzo upijajućim svojstvom. Obogaćeni ureom, molekuli od kojih se brzo apsorbuju ćelije i tkiva u organizmu, a zajedno sa ovim odvija se njihova ishrana i duboka hidratacija. Dodato kokosovo ulje pomaže u jačanju barijere na koži i smanjuje gubitak vlage, pa tako utišava suvu i dehidriranu kožu, dajući joj svež i blistav izgled.
Specijalno stvorena za potrebe veoma suve kože.
`,'Kozmetika')
nizartikli.push(artikal123);


const artikal124 = new Artikal([500],'Šampon za suvu i oštećenu kosu sa prirodnom ružinim vodom i arganovim uljem 250ml',['neutral'],['no'],`Otkrićete da ovaj šampon sadrži prirodne sastojke i nežnu aromu ruža, uspešno kombinovanu u efikasnu formulu, obogaćenu prirodnom ružinom vodom i arganovim uljem. Štiti od prekida kose, ovaj šampon popravlja kosu čineći je sjajnom i dajući joj svilenkast dodir. 
`,'Kozmetika')
nizartikli.push(artikal124);

const artikal125 = new Artikal([500],'Šampon sa eliksirom ruže 250ml',['neutral'],['no'],`Šampon sa efikasnom formulom obogaćen neodoljivom aromom ruže i prirodnim sastojcima. Revitalizuje snagu i lepotu kose. Neguje kosu od korena do krajeva, zgušnjava i hrani kosu i daje joj veličanstven volumen. Daje kosi potrebnu elastičnost i štiti od loma.`,'Kozmetika')
nizartikli.push(artikal125);

const artikal126 = new Artikal([850],'Šećerni skrob sa ekstraktom kokosa 2u1',['neutral'],['no'],`Nežno uklanja mrtve ćelije. Hrana za vaša čula i kožu sa očaravajućom aromom kokosa, pravim šećerom i 100% prirodnim česticama. Sadrži prirodna ulja za svilenkastu glatku, meku i negovanu kožu. Jedan proizvod sa dve upotrebe: 1. Za svakodnevno pranje - nanesite na vlažnu kožu, nežno masirajte i isperite; 2. Eksfoliant sa hranljivim uljima - za uklanjanje mrtvih ćelija, nanošenje na vlažnu kožu, intenzivno masaža kružnim pokretima, ispiranje. Pogodan za lice i telo.`,'Kozmetika')
nizartikli.push(artikal126);

const artikal127 = new Artikal([850],'Šećerni skrob sa ekstraktom kafe 2u1',['neutral'],['no'],`Nežno eksfolira i uklanja mrtve ćelije.Bogata formula okrepljujuće arome prave kafe. Dodata prirodna ulja učiniće vašu kožu svilenkastom glatkom, negovanom i mekom na dodir. Jedan proizvod sa dve upotrebe: 1. za svakodnevno pranje - nanesite na vlažnu kožu, lagano masirajte i isperite; 2. Eksfoliant sa hranljivim uljima - za uklanjanje mrtvih ćelija nanosi se na vlažnu kožu, masirajte energično, kružnim pokretima isperite. Pogodan za lice i telo.
`,'Kozmetika')
nizartikli.push(artikal127);

const artikal128 = new Artikal([850],'Šećerni skrob sa ekstraktom ruže 2u1',['neutral'],['no'],`Nežno eksfolira i uklanja mrtve ćelije. Bogata  formula sa opuštajućim mirisom ruže. Dodata prirodna ulja učiniće vašu kožu svilenkastom glatkom, negovanom i mekom na dodir. Jedan proizvod sa dve upotrebe: 1. za svakodnevno pranje - nanesite na vlažnu kožu, lagano masirajte i isperite; 2. Eksfoliant sa hranljivim uljima - za uklanjanje mrtvih ćelija nanosi se na vlažnu kožu, masira energično, kružnim pokretima isperite. Pogodan za lice i telo.
`,'Kozmetika')
nizartikli.push(artikal128);

const artikal129 = new Artikal([850],'Šećerni skrob sa ekstraktom lubenice, dinje i meda 2u1',['neutral'],['no'],`Nežno eksfolira i uklanja mrtve ćelije kože.Sadrži prirodna ulja za svilenkastu glatku, meku i negovanu kožu. Proizvod dvostruke upotrebe: 1. Za svakodnevno pranje – nanesite na vlažnu kožu, nežno masirajte i isperite. 2. Eksfolijant sa hranljivim uljima – u cilju uklanjanja mrtve kože, nanesite na vlažnu kožu, intenzivno masirajte kružnim pokretima, isperite. Pogodan za lice i telo.
`,'Kozmetika')
nizartikli.push(artikal129);

const artikal130 = new Artikal([850],'Šećerni skrob sa ekstraktom manga, kivia i avokada 2u1',['neutral'],['no'],`Nežno eksfolira i uklanja mrtve ćelije kože.Sadrži prirodna ulja za svilenkastu glatku, meku i negovanu kožu.Proizvod dvostruke upotrebe: 1. Za svakodnevno pranje – nanesite na vlažnu kožu, nežno masirajte i isperite. 2. Eksfolijant sa hranljivim uljima – u cilju uklanjanja mrtve kože, nanesite na vlažnu kožu, intenzivno masirajte kružnim pokretima, isperite. Pogodan za lice i telo.
`,'Kozmetika')
nizartikli.push(artikal130);

const artikal131 = new Artikal([850],'Šećerni skrob sa ekstraktom ruže  i čokolade 2u1',['neutral'],['no'],`Nežno eksfolira i uklanja mrtve ćelije kože.Sadrži prirodna ulja za svilenkastu glatku, meku i negovanu kožu. Proizvod dvostruke upotrebe: 1. Za svakodnevno pranje – nanesite na vlažnu kožu, nežno masirajte i isperite. 2. Eksfolijant sa hranljivim uljima – u cilju uklanjanja mrtve kože, nanesite na vlažnu kožu, intenzivno masirajte kružnim pokretima, isperite. Pogodan za lice i telo.
`,'Kozmetika')
nizartikli.push(artikal131);

const artikal132 = new Artikal([850],'Šećerni skrob sa ekstraktom nara i pomoranǆe 2u1',['neutral'],['no'],`Nežno eksfolira i uklanja mrtve ćelije kože. Sadrži prirodna ulja za svilenkastu glatku, meku i negovanu kožu. Proizvod dvostruke upotrebe: 1. Za svakodnevno pranje – nanesite na vlažnu kožu, nežno masirajte i isperite. 2. Eksfolijant sa hranljivim uljima – u cilju uklanjanja mrtve kože, nanesite na vlažnu kožu, intenzivno masirajte kružnim pokretima, isperite. Pogodan za lice i telo
`,'Kozmetika')
nizartikli.push(artikal132);

const artikal133 = new Artikal([650],'Svetleći crni piling maska za lice sa ekstraktom ruže, ekstraktom semenki groždja i aktivnim ugljem',['neutral'],['no'],`Dubinsko čišćenje piling maske za lice sjajnim česticama, obogaćeno ekstraktom ruže, ekstraktom semenki grožđa, crnim ugljem i finim sjajnim česticama. Čisti pore u dubini, uklanja prljavštinu. Daje koži lica svež i blistav izgled. Zbog visokog kapaciteta apsorpcije, aktivirani ugljenik nežno uklanja mrtve ćelije i toksine, reguliše višak ulja i smanjuje pore. Ekstrakt ruže daje dodatni toniranje i osvežavajući efekat na kožu. Redovnom upotrebom smanjuje i sprečava pojavu bubuljica a koža je glatka, čista i mat. Koristite 2-3 puta nedeljno, u zavisnosti od individualnih potreba. Kako se koristi: Nanesite tanak sloj maske na dobro očišćeno i suvo lice, izbegavajući predeo oko obrva, kose, očiju i usana. Sačekajte da se osuši 20-25 minuta i nežno sklonite povlačenjem iz brade naviše. Isperi lice.
`,'Kozmetika')
nizartikli.push(artikal133);

const artikal134 = new Artikal([970],'Dnevni hijaluron žele',['neutral'],['no'],`Hijaluronski dnevni žele za lice sa 99% prirodnih sastojaka. Bez dodatih silikona, sintetičkih boja i parabena. Obezbeđuje 24 sata hidriranu i glatku kožu na bazi čistog aloe vera gela, obogaćenog hijaluronskom kiselinom i ružinom vodom. Prirodno za telo, hijaluronska kiselina se brzo apsorbuje u dublje slojeve dermisa obezbeđujući intenzivnu vlagu i instant podizanje. U kombinaciji sa ružinom vodom vraća se svežina i mladalačka blistavost kože. Pogodan za svakodnevnu upotrebu.`,'Kozmetika')
nizartikli.push(artikal134);

const artikal135 = new Artikal([970],'Dnevna krema za lice',['neutral'],['no'],`Dnevna krema za lice sa 95% prirodnih sastojaka, bez dodatih silikona ili parabena. Specijalno stvorena za problematičnu kožu, sklona nesavršenosti. Obezbeđuje hidrataciju kože tokom celog dana, na bazi čistog Aloe Vera gela, obogaćenog ružinom vodom i uljem čajnog drveta. Tekstura laganog gela brzo se upija u kožu ne ostavljajući masne tragove. Pogodan za svakodnevnu upotrebu. `,'Kozmetika')
nizartikli.push(artikal135);

const artikal136 = new Artikal([850],'Micelarna voda 1',['neutral'],['no'],`micelarna voda ima nežnu dvomeč formulu sa 94% prirodnog sastava, koja uklanja čak i vodootpornu šminku. Proizvod, pogodan za sve tipove kože, uključujući i osetljive. Obogaćena hijaluronskom kiselinom i ružinom vodom regenerišućim, antibakterijskim i hidratantnim svojstvima. Neguje, omekšava i vlaži kožu sa izraženim anti-aging efektom.`,'Kozmetika')
nizartikli.push(artikal136);

const artikal137 = new Artikal([650],'Micelarna voda 2',['neutral'],['no'],`VOĆNA SALATA 3 u 1 micelarna voda sa prirodnom ružinom vodom i ekstraktom nara za čistu i hidriranu kožu. 1 Nežno čisti kožu. 2 Efikasno uklanja čak i vodootpornu šminku sa lica, očiju i usana. 3. Prirodna ružina voda u kombinaciji sa ekstraktom nara obezbeđuje hidrataciju i poboljšava elastičnost u prvom koraku vašeg dnevnog rituala za lepu i bistu kožu. Pogodan je za sve tipove kože.`,'Kozmetika')
nizartikli.push(artikal137);

const artikal138 = new Artikal([650],'Micelarna voda 3',['neutral'],['no'],`VOĆNA SALATA 3 u 1 micelarna voda sa prirodnom ružinom vodom i ekstraktom nara za čistu i hidriranu kožu. 1 Nežno čisti kožu. 2 Efikasno uklanja čak i vodootpornu šminku sa lica, očiju i usana. 3. Prirodna ružina voda u kombinaciji sa ekstraktom nara obezbeđuje hidrataciju i poboljšava elastičnost u prvom koraku vašeg dnevnog rituala za lepu i bistu kožu. Pogodan je za sve tipove kože.`,'Kozmetika')
nizartikli.push(artikal138);

const artikal139 = new Artikal([1300],'Intenzivni anti-age drop serum 4% SymMatrix i vegan glicerin',['neutral'],['no'],`Intenzivni  anti-age serum sa koncentracijom od 4% SymMatrix + vegan glicerin. Kombinacija aktivnih sastojaka vidno smanjuje dubinu linija i popunjava bore iznutra. SymMatrix aktivno stimuliše metabolizam, poboljšavajući njegovu gustinu i elastičnost. Kao rezultat toga, koža je zategnuta, kontura je poboljšana, a lice ima mlađi i blistaviji izgled`,'Kozmetika')
nizartikli.push(artikal139);

const artikal140 = new Artikal([1300],'Voćna salata vitamin c brightening booster serum sa ekstraktom nara',['neutral'],['no'],`Formula sa 3,5% koncentracije vitamina C i ekstraktom nara koji se bori sa umornim izgledom i značajno poboljšava blistavost kože. Deluje kao pojačivač strukture epidermisa, revitalizujući ga i osvežavajući. Kao rezultat toga, koža je meka i blistava. Nanesite kao bazu u svojoj dnevnoj rutini pre dnevne ili noćne kreme. Pogodan za svaki tip kože.`,'Kozmetika')
nizartikli.push(artikal140);

const artikal141 = new Artikal([950],'Voćna salata vitamin c anti-aging jelly krema sa ekstraktom nara i ružinom vodom',['neutral'],['no'],`Voćna salata Intenzivna krema protiv bora sa vitaminom C i 98% prirodnih sastojaka. Aktivna formula sa prirodnim peptidom i nežnom postojanošću gela. Ima višeslojni sastav sa vidljivom efektivnošću na znake starenja. Obnavlja volumen i elastičnost kože, dok smanjuje ozbiljnost bora. Hijaluronska kiselina i aktivni agens AQUAXYL duboko hidriraju i revitalizuje vezivno tkivo. Zateže i poboljšava konture lica.`,'Kozmetika')
nizartikli.push(artikal141);

const artikal142 = new Artikal([1050],'Hijaluron protiv bora gel krema sa hijaluronskom kiselinom i ružinom vodom',['neutral'],['no'],`Hijaluroza Dnevna hijaluronska krema protiv bora sa 98% prirodnih sastojaka. Inovativna postojanost nežnom gel krem teksturom i aktivnom formulom sa hijaluronskom kiselinom i ružinom vodom, radi vidljive delotvornosti na znacima starenja. Obnavlja volumen i elastičnost kože dok efikasno smanjuje ozbiljnost bora. Hijaluronska kiselina duboko hidrira i revitalizuje vezivno tkivo, zateže i poboljšava konture lica.`,'Kozmetika')
nizartikli.push(artikal142);

const artikal143 = new Artikal([1300],'Hijaluron anti-age ampula sa 2 vrste hijaluronske kiseline, ružine vode i prirodnog peptida',['neutral'],['no'],`Dvostruke hijaluronske ampule protiv bora sa duboko hidratantnim dejstvom. Nisko molekularni hijaluron zadržava vlagu u gornjem sloju epidermisa, pomažući mu da je omekša i izgladi. Molekuli visoke težine prodiru u duboke slojeve dermisa radi prave hidratacije, više elastičnosti i volumena. U kombinaciji sa prirodnim peptidom i ružinom vodom, one rade na vidnom smanjenju bora. Veganska formula pogodna za sve tipove kože.`,'Kozmetika')
nizartikli.push(artikal143);

const artikal144 = new Artikal([1300],'Hijaluron hero ampula',['neutral'],['no'],`Hijaluroza HERO 4D hijaluronske ampule za intenzivnu hidrataciju – višeslojna intenzivna formula za terapiju sa 5% koncentracije 4 vrste hijaluronske kiseline i aktivnim delovanjem protiv bora. Sa preko 99% prirodnog sastava. Niska molekularna težina hijalurona zadržava vlagu u gornjem sloju epidermisa za blistav, pa čak i ten. Molekuli visoke težine prodiru u duboke slojeve dermisa radi prave hidratacije i glatkoće, formirajući barijeru filma kako bi zadržali vlagu. Dodati veganski kolagen vidno poboljšava elastičnost. Pogodan je za sve tipove kože.`,'Kozmetika')
nizartikli.push(artikal144);

const artikal145 = new Artikal([350],'Krema za ruke sa ekstraktima ulja avokada',['neutral'],['no'],`Regenerišuća prirodna formula, posebno pogodna za suvu  kožu na rukama. Eliminiše osećaj suvoće i iritacije odmah, zahvaljujući visokim koncentracijama GLICERINA, u kombinaciji sa uljem AVOKADO. Pogodan za često pranje ruku, brzo vraća hidro-lipidnu ravnotežu kože. Redovnom upotrebom koža postaje svilenkasta glatka  i meka.`,'Kozmetika')
nizartikli.push(artikal145);

const artikal146 = new Artikal([350],'Krema za ruke sa ekstraktima aloe i krastavca',['neutral'],['no'],`Prirodna formula za duboku hidrataciju, zahvaljujući visokim koncentracijama GLICERINA, kompleksa PRIRODNIH ULJA, ALOE soka i ekstrakta krastavca. Pogodan je za kožu oštećenu od čestog pranja ruku. Brzo obnavlja hidro-lipidnu ravnotežu kože i neguje nokte. Uz redovnu upotrebu, koža postaje svilenkasta glatka i meka.`,'Kozmetika')
nizartikli.push(artikal146);

const artikal147 = new Artikal([350],'Krema za ruke sa ekstraktima maslinovog ulja',['neutral'],['no'],`Prirodna formula sa snagom pravih sastojaka, koji hidriraju i oživljavaju umorne ruke, smuti fine linije i bore, zahvaljujući visokim koncentracijama GLICERINA u kombinaciji sa MASLINOVIM uljem. Jača i štiti nokte od lomljenja i cepanja. Uz redovnu upotrebu, koža postaje svilenkasta glatka i meka.`,'Kozmetika')
nizartikli.push(artikal147);

const artikal148 = new Artikal([350],'Krema za ruke sa ekstraktima paradajza i šargarepe',['neutral'],['no'],`Prirodna formula koja pruža momentalnu udobnost i duboku hidrataciju koži ruku. Sadrži visoke koncentracije GLICERINA, kompleksa PRIRODNIH ULJA i ekstrakata ŠARGAREPE i PARADAJZA, sa dodatnim antioksidantnim svojstvima. Efikasno vlaži i uklanja prve znake starenja kože na rukama. Hrani nokte. Uz redovnu upotrebu, koža postaje svilenkasta glatka i meka.`,'Kozmetika')
nizartikli.push(artikal148);

const artikal149 = new Artikal([200],'Krema za ruke sa ekstraktom krastavca i vitamina c',['neutral'],['no'],`Nežna formula obogaćena vitaminom C i ekstraktom krastavca pruža duboku hidrataciju i umiruje vašu kožu. Nežna kombinacija sa Vitaminom A+E, prirodnom ružinom vodom i glicerinom za potpunu hidrataciju i savršenu glatkoću. Pruža dodatnu zaštitu od atmosferske sredine i hemijskih sastojaka deterdženta. Sa svetlom i svežom aromom.`,'Kozmetika')
nizartikli.push(artikal149);

const artikal150 = new Artikal([200],'Krema za ruke sa ekstraktom nara i vitamina c',['neutral'],['no'],`Nežna formula obogaćena vitaminom C i ekstraktom nara izjednačava tonus kože, dajući savršenu glatkoću. Nežna kombinacija sa Vitaminom A+E, prirodnom ružinom vodom i glicerinom za potpunu hidrataciju i savršenu glatkoću. Pruža dodatnu zaštitu od atmosferske sredine i hemijskih sastojaka deterdženta. Sa svetlom aromom nara.`,'Kozmetika')
nizartikli.push(artikal150);

const artikal151 = new Artikal([200],'Krema za ruke sa ekstraktom prirodne ružine vode',['neutral'],['no'],`Ova krema za ruke je jedinstvena kombinacija prirodne ružine vode, vitamina Е i А. Umiruje, smuti i regeneriše kožu, vraćajući joj elastičnost. Obogaćen glicerinom za potpunu hidrataciju i savršenu glatkoću`,'Kozmetika')
nizartikli.push(artikal151);

const artikal152 = new Artikal([390],'ANTI-AGING krema za ruke',['neutral'],['no'],`Krema za dubinsku vlagu, specijalno stvorena za potrebe zrele kože. Na osnovu anti-aging kompleksa LIFTISS, odmah zaglađiva fine linije i bore na rukama i daje duboku hidrataciju koži. Obogaćena hijaluronskom kiselinom, prirodnom ružinom vodom, vitaminom E+A i glicerinom sprečava suvoću i čini ruke mekšim i glatkijim na dodir. Pruža dodatnu zaštitu od atmosferske sredine i hemijskih sastojaka deterdženta. Sa svetlom cvetnom aromom.`,'Kozmetika')
nizartikli.push(artikal152);

const artikal153 = new Artikal([320],'Hidratantna krema za ruke sa ekstraktom prirodne ruže',['neutral'],['no'],`Inovativna formula ove hidratantne kreme za ruke koristi moć prirodnih komponenti za regeneraciju i glatkoću kože. Sa visokom koncentracijom glicerina, koji izvlači vlagu iz vazduha i transportuje je u ćelije kako bi se osigurala konačna hidratacija.`,'Kozmetika')
nizartikli.push(artikal153);

const artikal154 = new Artikal([830],'Hidratantna dnevna  krema za suvu i osetljivu kožu sa prirodnom ružinom vodom i A+E vitaminski kompleks',['neutral'],['no'],`Svakodnevna upotreba donosi svežinu i mladolikost ćelija i ubrzava procese njihove regeneracije.`,'Kozmetika')
nizartikli.push(artikal154);


























