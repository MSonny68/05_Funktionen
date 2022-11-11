"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung

// Funktionnsrumpf (body) | callee
let text;
function schreibe( text )
{
    console.log(text);
}

// Funktionsaufruf (call)
schreibe ( 4 + 5 );
schreibe("Du Zipfelklatscher");


/*******Funktionen 02a**********/
// 2a Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() {
    console.log("Test Test");
}


// /********Funktion 02b ******/
// // 2b Parameter mitDatenübergabe von AUSSEN

// function ausgabeNameParam(firstName) {
//     console.log("Hallo " +  firstName + "!")
// }
// ausgabeNameParam("Tst");


/********Funktion 02c ******/
// 2c mehrere Parameter mitDatenübergabe von AUSSEN

function ausgabeNameParam(firstName, familyName) {
    console.log("Hallo " +  firstName + " " + familyName + "!")
}
ausgabeNameParam("Tst", "hhdh");

/********Funktion 03a ******/
// 3a Vorbereitung
// Postulat: one function = one job (uncle BOB)
// SRP single responsibility principle

function ausgabeNameParam(firstName, familyName) {

    //1. funktionalität: string composing
    const gap = " ";
    const outputStr = "Hallo " +  firstName + gap + familyName + "!"
    console.log(outputStr)
}
ausgabeNameParam("Tst", "hhdh");