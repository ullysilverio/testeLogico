const string = "aaAAAA";

const letraA = string.toLocaleLowerCase().split('a').length - 1;

if (letraA > 0) {
    console.log(`Existem ${letraA} letras 'A' na string.`);
} else{
    console.log("Letra 'A' não encontrada");
}