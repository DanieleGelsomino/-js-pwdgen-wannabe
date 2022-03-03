// accedo alla console del browser e scrivo una stringa
console.log('JS OK!');

//prima richiesta nome
const Nome = prompt('qual\'è il tuo nome?');
console.log('il tuo nome è ' + Nome);

// accedo all'elemento con id Nome
document.getElementById('Nome').innerText = 'il tuo nome è: ' + Nome;

//seconda richiesta cognome
const Cognome = prompt('qual\'è il tuo cognome?')
console.log('il tuo cognome è ' + Cognome);

// accedo all'elemento con id Cognome
document.getElementById('Cognome').innerText = 'il tuo cognome è: ' + Cognome;

//terza richiesta colore preferito
const ColorePreferito = prompt('qual\'è il tuo colore preferito?')
console.log('il tuo colore preferito è ' + ColorePreferito);

// accedo all'elemento con id ColorePreferito
document.getElementById('ColorePreferito').innerText = 'il tuo cognome è: ' + ColorePreferito;



