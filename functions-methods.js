// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken.
// Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben,
// dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft.
// Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain (email) {
    return email.substring(email.indexOf('@')+1)
}

console.log (getEmailDomain('wpeckelsen@gmail.com'))
console.log(getEmailDomain('n.eeken@novi-education.nl'))


console.log("////");

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht.
// De functie checkt of het emailadres een novi domein heeft (medewerker),
// een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail (email) {
    const studentMail = email.includes("@novi-education.nl") //student//
    const employeeMail = email.includes("@novi.nl") //medewerker//
    const externalMail = email.includes("@outlook") //extern

    if (studentMail === true) {console.log("student");}
    if (employeeMail === true) {console.log("medewerker");}
    //else {console.log("extern")};
    if (externalMail === true) {console.log("extern")}

}
typeOfEmail('wessel@novi.nl');
typeOfEmail('gans@novi-education.nl')
typeOfEmail('paard@outlook.com')


console.log("--------")
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is.
// De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (email) {

    const apenstaartjeIncluded = email.includes('@');
    const commaIncluded = email.includes(',');
    const noDotAtEnd = (email.charAt(email.length - 1) !== '.');

    {if (apenstaartjeIncluded && !commaIncluded && noDotAtEnd )
        return console.log("valid")
    else
    return console.log("invalid")}
}




checkEmailValidity('gans@hotmail.com.')
checkEmailValidity('wpeckelsen@gmail.com')
checkEmailValidity('wpeckelsen@gmailcom')

console.log("--------")

