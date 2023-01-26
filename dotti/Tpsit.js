function XOR(n1, n2) {
    let risultato = 0;
    if (((n1 == "0") && (n2 == "1")) || ((n1 == "1") && (n2 == "0"))){
        risultato = 1;
    }
    else {
        risultato = 0;
    }
    console.log(risultato);
    return risultato;
}

function Calcola(NumeroPartenza, Divisore, PulsanteCalcola) {
    let resto = "";
    let risultato = 1;
    let fine = "";
    let i = 0; // i conteggio posizione nel numero da dividere
    let x = 0; // x conteggio xor
    let provv = "";
    let NumeroPartenza2 = "";
    
    if (PulsanteCalcola == true) {
       NumeroPartenza2 = NumeroPartenza = NumeroPartenza.padEnd(NumeroPartenza.length + Divisore.length - 1,0);
    }
    else {
        NumeroPartenza2 = NumeroPartenza;
    }

    console.log("Il numero di partenza con gli 0 e' " + NumeroPartenza);

    while (NumeroPartenza.charAt(0) === '0') {
        NumeroPartenza = NumeroPartenza.substring(1);
    }

    console.log("Se inizia con 0 e' " + NumeroPartenza);

    resto = NumeroPartenza.slice(0, Divisore.length);

    resto = String(resto);
    Divisore = String(Divisore);
    provv = String(provv);
    risultato = String(risultato);
    fine = String(fine);

    for (x=0; x<resto.length; x++) {
        provv += XOR(resto[x],Divisore[x]);
    }

    resto = provv;
    provv = "";
    console.log("il primo risultato dello XOR e' = " + resto);

    if (NumeroPartenza == NumeroPartenza2) {
        i=Divisore.length;
    }
    else {
        i=Divisore.length + 1;
    }

    while (NumeroPartenza2.length > i) {
        console.log("Numero successivo = " + NumeroPartenza2[i]);
        console.log(i)
        resto = resto + NumeroPartenza2[i];
        console.log("resto 1 = " + resto);
            
        while (resto.charAt(0) === '0') {
            resto = resto.substring(1);
        }

        console.log("resto 2 = " + resto);

        if (resto.length == Divisore.length) {
            risultato += 1;
            for (x=0; x<resto.length; x++) {
                provv += XOR(resto[x],Divisore[x]);
            }
            resto = provv;
            provv = "";
            console.log("andata");
        }
        else {
            console.log("NON andata");
            risultato += 0;
        }

        while (resto.charAt(0) === '0') {
            resto = resto.substring(1);
        }

        console.log("resto 3 = " + resto);
        console.log("risultato = " + risultato);
        console.log(" ");
        i++;
    }

    if ((resto === "") && (PulsanteCalcola == false)) {
        resto = "0 e per questo il CRC e' corretto";
    }
    OutputResto(resto);
    resto = resto.padStart(NumeroPartenza2.length,0);

    console.log(resto);

    for (x=0; x<NumeroPartenza2.length; x++) {
        fine += XOR(NumeroPartenza2[x],resto[x]);
    }

    console.log(fine);
    console.log(typeof fine);
    OutputRisultato(fine);
}

function CalcolaInput() {
    let NumeroPartenza = document.getElementById("NumeroPartenza").value;
    let Divisore = document.getElementById("Divisore").value;
    let PulsanteCalcola = document.getElementById("PulsanteCalcola").checked;
    NumeroPartenza = String(NumeroPartenza);
    Divisore = String(Divisore);

    if (PulsanteCalcola == true) {
        document.getElementById("TxtResto").style.display = "";
        document.getElementById("resto").style.display = "";
        document.getElementById("TxtStringa").style.display = "";
        document.getElementById("risultato").style.display = "";
    }
    else if (PulsanteCalcola == false) {
        document.getElementById("TxtResto").style.display = "";
        document.getElementById("resto").style.display = "";
        document.getElementById("TxtStringa").style.display = "none";
        document.getElementById("risultato").style.display = "none";
    }

    Calcola(NumeroPartenza, Divisore, PulsanteCalcola);
}// Amongus super sus

function OutputResto(Resto) {
    document.getElementById("resto").innerHTML = Resto;
}

function OutputRisultato(Risultato) {
    document.getElementById("risultato").innerHTML = Risultato;
}