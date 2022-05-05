let phrase = 'Bonjour tout le monde           ';
//longueur de phrase

console.log(phrase);
console.log(phrase.length);

//enlever les white space attention à la réassignation !
phrase = phrase.trimEnd();
console.log(phrase.length);

//dernière lettre
// phrase = phrase.substring(phrase.length -1, phrase.length);
// console.log(phrase);

//enlever bonjour

phrase = phrase.replace('Bonjour ', '');
console.log(phrase);

//remettre bonjour

phrase = "Bonjour " + phrase;
console.log(phrase);

//
phrase = phrase.replace(' tout le monde', '')
console.log(phrase);

console.log(typeof(phrase));

randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber)
