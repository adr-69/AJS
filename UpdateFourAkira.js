/*  
  AkiraJS - A simplified JavaScript version  
  Created by: Adrian Martin  
  Version: 1.4.0 April 16, 2025 
  License: MIT  
  Release Date: April 10, 2025
*/



// VERSION: 1.0.0 //
// CONSOLE //
function console(message) {
    console.log(message);
}
// VARIABLE //
function wrt(num) {
    return num * num;
}
function wrt(message) {
    console.log(message);
    document.body.innerHTML += message + "<br>";
    return typeof message === "number" ? message * message : "Invalid input";
}
// DOCUMENT GET ELEMENT BY ID //
function docGetId(id) {
    return document.getElementById(id);
}
// FOR LOOP //
function ForLoop_console(message, times) {
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
}
function ForLoop_wrt(message, times) {
    for (let i = 0; i < times; i++) {
        doc_wrt(message);
    }
}
// WHILE LOOP //
function WhileLoop_console(message, times) {
    let i = 0;
    while (i < times) {
        console.log(message);
        i++;
    }
}
function WhileLoop_wrt(message, times) {
    let i = 0;
    while (i < times) {
        doc_wrt(message);
        i++;
    }
}
// DOCUMENT WRITE //
function docwrt(message) {
    document.body.innerHTML += message + "<br>";
}
// ===== VERSION: 1.3.0 ===== //
// SINGLE CLASS //
function SClasswrt(className, message = '') {
    const newElement = document.createElement('div');
    newElement.className = className;
    if (message) {
        newElement.innerText = message;
    }
    document.body.appendChild(newElement);
    return newElement;
}
// HTML SYNTAX //
function HTML(code) {
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
// VERSION: 1.4.0 //
// TEXT EFFECT H1 - H6 //
function Set_TextEff_h1(text, speed = 50) {
    let i = 0;
    const el = document.createElement('h1');
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.innerText += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Set_TextEff_h2(text, speed = 50) {
    let i = 0;
    const el = document.createElement('h2');
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.innerText += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Set_TextEff_h3(text, speed = 50) {
    let i = 0;
    const el = document.createElement('h3');
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.innerText += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Set_TextEff_h4(text, speed = 50) {
    let i = 0;
    const el = document.createElement('h4');
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.innerText += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Set_TextEff_h5(text, speed = 50) {
    let i = 0;
    const el = document.createElement('h5');
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.innerText += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Set_TextEff_h6(text, speed = 50) {
    let i = 0;
    const el = document.createElement('h6');
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.innerText += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
// STYLE NOT WORKING AS OF NOW //
function STYLE(className, styles) {
    const css = Object.entries(styles)
        .map(([k, v]) => `${k}: ${v};`).join(' ');
    
    const sheet = document.createElement('style');
    sheet.innerHTML = `.${className} { ${css} }`;
    document.head.appendChild(sheet);
}
// CLASS NOT WORKING AS OF NOW//
function Class(className, callback) {
    const container = document.createElement("div");
    container.className = className;
    window._AkiraTarget = container;
    callback();
    delete window._AkiraTarget;
    document.body.appendChild(container);
}
