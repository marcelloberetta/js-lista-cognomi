
/* CREIAMO UN ARRAY DI COGNOMI NEL QUALE INSERIRE QUELLO INDICATO DALL'UTENTE*/

var surname = ["Cattaneo" , "Basilico" , "Bassani" , "Pizzi", "Castelnovo"];

/* CHIEDIAMO IL COGNOME ALL'UTENTE */

var userSurname = prompt("Qual è il cognome da inserire nella lista ?");


//INSERIAMO IN COGNOME DIGITATO NELL'ARRAY

surname.push(userSurname);

//CONVERTIAMO L'ARRAY LISTA IN ORDINE ALFABETICO
surname = surname.sort();


for (var i=0; i<surname.length; i++){
   if(userSurname === surname[i]){
      var surnameFound = i+1
   
// DA FINIRE 
