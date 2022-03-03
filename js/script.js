// accedo alla console del browser e scrivo una stringa
console.log('JS OK!');

//prima richiesta nome
const firstName = prompt('qual\'è il tuo nome?');
console.log('il tuo nome è ' + firstName);

// // accedo all'elemento con id firstName
// document.getElementById('firstName').innerText = 'il tuo nome è: ' + firstName;

//seconda richiesta cognome
const surName = prompt('qual\'è il tuo cognome?')
console.log('il tuo cognome è ' + surName);

// // accedo all'elemento con id surName
// document.getElementById('surName').innerText = 'il tuo cognome è: ' + surName;

//terza richiesta colore preferito
const favoriteColor = prompt('qual\'è il tuo colore preferito?')
console.log('il tuo colore preferito è ' + favoriteColor);

// // accedo all'elemento con id favoriteColor
// document.getElementById('favoriteColor').innerText = 'il tuo cognome è: ' + favoriteColor;

//PdwGenerate
const usefulInfo = firstName + surName + favoriteColor + '21';
console.log(usefulInfo);

// accedo all'elemento con id PdwGenerate
document.getElementById('pdwGenerate').innerText = usefulInfo;

