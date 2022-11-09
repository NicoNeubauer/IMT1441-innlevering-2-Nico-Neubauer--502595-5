//jeg hadde lyst til å generere listen med hjelp av søke funcsjonen 
//,men til slutt fikk jeg ikke til det og satt meg fast i et dypt hull.
//dette kommer jeg til å forbedre til neste innlevering av oppgave 2.
// jeg har prøvet å basere dette elemente på ting vi ble vist i eksemper 
//og ting som ble gjennomgått men kom som sakt ikke fremmover. 

let kontakter = []; 
let sortOrder = 0; 

fetch('http://folk.ntnu.no/oeivindk/imt1441/storage/getAll.php?store=nico') //finner min storage
  .then(res=>res.json())
  .then(data=>{
    kontakter = data;
 kontaktList(kontakter); 
});

document.getElementById('search').addEventListener('input', e=>{
  kontaktList(kontakter.filter(filter)); //lisner til innput på skkefeltet. 
});

//denne delen er jeg ikke hel sikker på hellder 
function filter(kontakt) {
 const name = kontakt.lastName.toLowerCase().indexOf(document.getElementById('search').value.toLowerCase())>-1;
 return name&&studyProgramme;
}


function kontaktList(kontakter) {
 const konDiv = document.querySelector('div.kontakter');
 konDiv.innerHTML =`<div><span class="sort${sortOrder}">Kontakter</span></div>`; //overskrift

 
 kontaktList.concat().sort(sorter).forEach(kontakt=>{
   
   const div = document.createElement('DIV'); //prøver å generere html utifa datane i sammlingen
   div.innerHTML = `<span>${fornavn}, ${etternavn}</span><span>${epost}, ${tlf}</span>`;
   konDiv.appendChild(div);
 });
}

//noe soterings ting jeg ikke er helt sikker på 

function sorter(a, b) {
 if (sortOrder==0) {     
   return 1;             
 if (a.fornavn>b.fornavn) {
   return sortOrder;
 } else if (a.fornavn<b.fornavn) {
   return -sortOrder;
 } else {
   return 0;
 }
}}

