/*  
  AkiraJS - A simplified JavaScript version  
  Created by: Adrian Martin  
  Version: 1.3.0 April 12, 2025 
  License: MIT  
  Release Date: April 10, 2025
*/



// VERSION: 1.0.0  & VERSION: 1.2.0 FIXED // 
// CONSOLE //
function console_akr(message) {
    console.log(message);
}
// VARIABLE //
function akr(num) {
    return num * num;
}
function akr(message) {
    console.log(message);
    document.body.innerHTML += message + "<br>";
    return typeof message === "number" ? message * message : "Invalid input";
}
// DOCUMENT GET ELEMENT BY ID //
function doc_getId(id) {
    return document.getElementById(id);
}
// FOR LOOP //
function for_loop_console(message, times) {
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
}
function for_loop_wrt(message, times) {
    for (let i = 0; i < times; i++) {
        doc_wrt(message);
    }
}
// WHILE LOOP //
function while_loop_console(message, times) {
    let i = 0;
    while (i < times) {
        console.log(message);
        i++;
    }
}
function while_loop_wrt(message, times) {
    let i = 0;
    while (i < times) {
        doc_wrt(message);
        i++;
    }
}
// DOCUMENT WRITE //
function doc_wrt(message) {
    document.body.innerHTML += message + "<br>";
}
// ===== VERSION: 1.3.0 ===== //
// SINGLE CLASS //
function SClass_wrt(className, message = '') {
    const newElement = document.createElement('div');
    newElement.className = className;
    if (message) {
        newElement.innerText = message;
    }
    document.body.appendChild(newElement);
    return newElement;
}
// HTML SYNTAX //
function MAKE_HTML_AREA(code) {
    const container = document.createElement('div');
    container.innerHTML = code;
    document.body.appendChild(container);
}
// HR - HORIZONTAL RULE //
function hr() {
    const line = document.createElement('hr');
    document.body.appendChild(line);
}
// BR - LINE BREAK
function br() {
    const linebreak = document.createElement('br');
    document.body.appendChild(linebreak);
}
