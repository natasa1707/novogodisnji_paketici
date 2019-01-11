// novi pop-up prozor popunjavanje kolicine izabranih artikala:
window.onload = function() {
document.getElementById("loptaKom").innerHTML = localStorage.getItem("kolLopta");
document.getElementById("ukrasKom").innerHTML = localStorage.getItem("kolUkrasi");
document.getElementById("slatkisKom").innerHTML = localStorage.getItem("kolSlatkisi");
document.getElementById("lutkaKom").innerHTML = localStorage.getItem("kolLutka");
document.getElementById("autoKom").innerHTML = localStorage.getItem("kolAuto");
document.getElementById("ukupanIznos").innerHTML = localStorage.getItem("ukupno");
}

// potvrda kupovine na dugme DA:

function potvrdaKupovine() {
    window.alert("Vaša kupovina je potvrđena")
    window.close();
}

document.getElementById("potvrdi").addEventListener("click", potvrdaKupovine)

// odustajanje od kupovine na dugme NE:

function otkazivanjeKupovine() {
    window.alert("Doviđenja");
    window.close();
}

document.getElementById("odustani").addEventListener("click", otkazivanjeKupovine)
