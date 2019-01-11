



function artikli() {
    let ime = document.getElementById("ime"); 
    let polM = document.getElementById("muski").checked; 
    let polZ = document.getElementById("zenski").checked; 

   
   // Provera da li su polja ime i pol deteta uneti

    if (ime.value == "" || polM == false && polZ == false) {
        window.alert("Za odabir artikla neophodno je popuniti ime i pol deteta"); 
    }else {
        document.getElementById("tabela2").style.display = "block"; 
    }

    
    // if (polM == true) {
    //     document.getElementById("kol4").readOnly = true; 
    //     document.getElementById("ukupno4").readOnly = true; 
    //     document.getElementById("kol4").style.backgroundColor = "red"; 
    //     document.getElementById("ukupno4").style.backgroundColor = "red"; 
    //     document.getElementById("cena4").style.backgroundColor = "red"; 
    // }else {
    //     document.getElementById("kol4").readOnly = false; 
    //     document.getElementById("ukupno4").readOnly = false; 
    //     document.getElementById("kol4").style.backgroundColor = "white"; 
    //     document.getElementById("ukupno4").style.backgroundColor = "white"; 
    //     document.getElementById("cena4").style.backgroundColor = "white"; 
    // }

    let lutka = document.getElementsByClassName("lutka");

    if (polM == true) {
        for(i=0; i<lutka.length; i++){
           lutka[i].readOnly = true;
           lutka[i].style.backgroundColor = "red";}
       } else {
        for(i=0; i<lutka.length; i++){
               lutka[i].style.backgroundColor = "#A7DFEC";
               lutka[1].readOnly = false;
           }
       }
    
    // if (polZ == true) {
        
    //     document.getElementById("kol5").readOnly = true; 
    //     document.getElementById("ukupno5").readOnly = true; 
    //     document.getElementById("kol5").style.backgroundColor = "red"; 
    //     document.getElementById("ukupno5").style.backgroundColor = "red"; 
    //     document.getElementById("cena5").style.backgroundColor = "red"; 
    // }else {
    //     document.getElementById("kol5").readOnly = false; 
    //     document.getElementById("ukupno5").readOnly = false; 
    //     document.getElementById("kol5").style.backgroundColor = "white"; 
    //     document.getElementById("ukupno5").style.backgroundColor = "white"; 
    //     document.getElementById("cena5").style.backgroundColor = "white"; 
    // }

    let auto = document.getElementsByClassName("auto");

    if (polZ == true) {
        for(i=0; i<auto.length; i++){
           auto[i].readOnly = true;
           auto[i].style.backgroundColor = "red";}
       } else {
        for(i=0; i<auto.length; i++){
               auto[i].style.backgroundColor = "#A7DFEC";
               auto[1].readOnly = false;
           }
       }
}

document.getElementById("dugmeArtikli").addEventListener("click", artikli);


function kupi() {

    function Artikal(ime, vrsta, kolicina, cena) {
        this.ime = ime; 
        this.vrsta = vrsta; 
        this.kolicina = kolicina; 
        this.cena = cena; 
    }

    niz = [
        new Artikal("Lopta", "LO", document.getElementById("kol1").value, document.getElementById("cena1").value), 
        new Artikal("Ukrasi", "U", document.getElementById("kol2").value, document.getElementById("cena2").value), 
        new Artikal("Slatkisi", "S", document.getElementById("kol3").value, document.getElementById("cena3").value), 
        new Artikal("Lutka", "LU", document.getElementById("kol4").value, document.getElementById("cena4").value), 
        new Artikal("Auotmobil", "A", document.getElementById("kol5").value, document.getElementById("cena5").value)
    ]
    
    Artikal.prototype.ukupno = function() {
        return this.cena * this.kolicina
    }



    let ukupno1 = document.getElementById("ukupno1"); 
    ukupno1.value = niz[0].ukupno(); 
    let ukupno2 = document.getElementById("ukupno2"); 
    ukupno2.value = niz[1].ukupno(); 
    let ukupno3 = document.getElementById("ukupno3"); 
    ukupno3.value = niz[2].ukupno(); 
    let ukupno4 = document.getElementById("ukupno4"); 
    ukupno4.value = niz[3].ukupno(); 
    let ukupno5 = document.getElementById("ukupno5"); 
    ukupno5.value = niz[4].ukupno(); 


    let ukupnaCena = Number(ukupno1.value) + Number(ukupno2.value) + Number(ukupno3.value) + Number(ukupno4.value) + Number(ukupno5.value); 
    
    let vrednost = document.getElementById("vrednost").value; 

    if (vrednost < ukupnaCena) {
        window.alert("Vaš poklon premašuje planirani iznos!")
    }
       
    let kolicina1 = document.getElementById("kol1").value; 
    let kolicina2 = document.getElementById("kol2").value; 
    let kolicina3 = document.getElementById("kol3").value; 
    let kolicina4 = document.getElementById("kol4").value; 
    let kolicina5 = document.getElementById("kol5").value; 
      
    localStorage.setItem("kolLopta", kolicina1); 
    localStorage.setItem("kolUkrasi", kolicina2); 
    localStorage.setItem("kolSlatkisi", kolicina3); 
    localStorage.setItem("kolLutka", kolicina4); 
    localStorage.setItem("kolAuto", kolicina5); 
    localStorage.setItem("ukupno", ukupnaCena); 
   
    window.open ("spisak.html", "_blank", "width=600, Height=400, left=800, top=200"); 
        
}

document.getElementById("dugmeKupi").addEventListener("click", kupi)


// odustajanje od kupovine na prvoj stranici, klikom na dugme odustani:

function odustani() {
    location.reload(); 
}

document.getElementById("dugmeOdustati").addEventListener("click", odustani)




