//	Todescato Tommaso 26/1/2023
//	Gli input e gli output sono array per questioni di semplicità di calcolo.
//	Tuttavia il parsing della stringa di input è gestito dal codice in html quindi l'utente non deve pensarci.

function codifica(data) {
    let p1 = (data[0] + data[1] + data[3]) % 2;
    let p2 = (data[0] + data[2] + data[3]) % 2;
    let p3 = (data[1] + data[2] + data[3]) % 2;
    
	return [p1, p2, data[0], p3, data[1], data[2], data[3]];
}

function decodifica(code) {
	let p1 = (code[0] + code[2] + code[4] + code[6]) % 2;
    let p2 = (code[1] + code[2] + code[5] + code[6]) % 2;
    let p3 = (code[3] + code[4] + code[5] + code[6]) % 2;
    let errori = p1 + p2 * 2 + p3 * 4;
    
	if (errori > 0)
	{
        console.log("Errore nella posizione: " + errori);
        code[errori - 1] = (code[errori - 1] + 1) % 2;
        console.log("Errore corretto");
    }
    
	return [code[2], code[4], code[5], code[6]];
}