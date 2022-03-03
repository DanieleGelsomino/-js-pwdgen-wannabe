// accedo alla console del browser e scrivo una stringa
console.log('JS OK!');

//prima richiesta nome
const FirstName = prompt('qual\'è il tuo nome?');
console.log('il tuo nome è ' + FirstName);

// // accedo all'elemento con id FirstName
// document.getElementById('FirstName').innerText = 'il tuo nome è: ' + FirstName;

//seconda richiesta cognome
const Surname = prompt('qual\'è il tuo cognome?')
console.log('il tuo cognome è ' + Surname);

// // accedo all'elemento con id Surname
// document.getElementById('Surname').innerText = 'il tuo cognome è: ' + Surname;

//terza richiesta colore preferito
const FavoriteColor = prompt('qual\'è il tuo colore preferito?')
console.log('il tuo colore preferito è ' + FavoriteColor);

// // accedo all'elemento con id FavoriteColor
// document.getElementById('FavoriteColor').innerText = 'il tuo cognome è: ' + FavoriteColor;

//PdwGenerate
const UsefulInfo = FirstName + Surname + FavoriteColor + '21';
console.log(UsefulInfo);

// accedo all'elemento con id PdwGenerate
document.getElementById('PdwGenerate').innerText = UsefulInfo;

