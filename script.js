
// 1

var studente = {
  "nome": "marco",
  "cognome": "Calvieri",
  "eta": 38,
}


for (var chiave in studente) {
  console.log(chiave + ": " + studente[chiave]);
}

// 2


var studenti = [
  {
    nome: "Marco",
    cognome: "Busellato",
    eta: 24
  },
  {
    nome: "Marco",
    cognome: "Busellato",
    eta: 24
  },
  {
    nome: "Marco",
    cognome: "Busellato",
    eta: 24
  },
];


for (var i = 0; i < studenti.length; i++) {
  var studenteCorrente = studenti[i];
  console.log(studenteCorrente.nome, studenteCorrente.cognome);
}


// 3

var nuovoNome = prompt("Inserisci il nome del nuovo studente");
var nuovoCognome = prompt("Inserisci il cognome del nuovo studente");
var nuovaEta = parseInt(prompt("Inserisci l'eta del nuovo studente"));

var nuovoStudente = {
  "nome": nuovoNome,
  "cognome": nuovoCognome,
  "eta": nuovaEta,
};
studenti.push(nuovoStudente);
console.log(studenti);
