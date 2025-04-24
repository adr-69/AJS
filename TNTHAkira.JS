// ============================== //
/*
|    Akira.JS
|    Latest Version: v2.9.3 (TNTH) APRIL 24, 2025
|    License: MIT
|    Relase Date: APRIL 10, 2025
|    Created By: Adrian Martin
*/
// ============================== //
// IMCONSOLE & INCL
function inconsole(message) {
    console.log(message);
}
function incl(message) {
    console.log(message);
}
// DOCUMENT GET ELEMENT BY ID //
function docGetId(id) {
    return document.getElementById(id);
}
// FOR LOOP CONSOLE & H1 - H6 //
function ForLoop_inconsole(message, times) {
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
}
function ForLoop_incl(message, times) {
    for (let i = 0; i < times; i++) {
        console.log(message);
    }
}
function ForLoop_h1(message, times, className = "ForLoop_h1") {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h1');
        el.className = className;
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h2(message, times, className = "ForLoop_h2") {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h2');
        el.className = className;
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h3(message, times, className = "ForLoop_h3") {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h3');
        el.className = className;
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h4(message, times, className = "ForLoop_h4") {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h4');
        el.className = className;
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h5(message, times, className = "ForLoop_h5") {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h5');
        el.className = className;
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h6(message, times, className = "ForLoop_h6") {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h6');
        el.className = className;
        el.innerText = message;
        document.body.appendChild(el);
    }
}
// HR & BR //
function hr(className = "hr") {
    const line = document.createElement('hr');
    line.className = className;
    document.body.appendChild(line);
}
function br(className = "br") {
    const linebreak = document.createElement('br');
    linebreak.className = className;
    document.body.appendChild(linebreak);
}
// HTML SYNTAX //
function HTML(code) {
    const container = document.createElement('div');
    container.innerHTML = code;
    document.body.appendChild(container);
}
// TITLE //
function AKIRA_TITLE(title) {
    const titleElement = document.createElement('title');
    titleElement.innerText = title;
    document.head.appendChild(titleElement);
}
// TYPE WRITTER EFFECT H1 - H6 //
function Typewritter_h1(text, speed = 50, className = "Typewritter_h1") {
    let i = 0;
    const el = document.createElement('h1');
    el.className = className;
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Typewritter_h2(text, speed = 50, className = "Typewritter_h2") {
    let i = 0;
    const el = document.createElement('h2');
    el.className = className;
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Typewritter_h3(text, speed = 50, className = "Typewritter_h3") {
    let i = 0;
    const el = document.createElement('h3');
    el.className = className;
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Typewritter_h4(text, speed = 50, className = "Typewritter_h4") {
    let i = 0;
    const el = document.createElement('h4');
    el.className = className;
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Typewritter_h5(text, speed = 50, className = "Typewritter_h5") {
    let i = 0;
    const el = document.createElement('h5');
    el.className = className;
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
}
function Typewritter_h6(text, speed = 50, className = "Typewritter_h6") {
    let i = 0;
    const el = document.createElement('h6');
    el.className = className;
    
    document.body.appendChild(el);
    
    const interval = setInterval(() => {
        if (i < text.length) {
            el.textContent += text[i++];
        } else {
            clearInterval(interval);
        }
    }, speed);
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
// WHILE LOOP CONSOLE & H1 - H6//
function WhileLoop_inconsole(message, times) {
    let i = 0;
    while (i < times) {
        console.log(message);
        i++;
    }
}
function WhileLoop_incl(message, times) {
    let i = 0;
    while (i < times) {
        console.log(message);
        i++;
    }
}
function WhileLoop_h1(message, times, className = "WhileLoop_h1") {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h1');
        el.innerText = message;
        el.className = className;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h2(message, times, className = "WhileLoop_h2") {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h2');
        el.innerText = message;
        el.className = className;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h3(message, times, className = "WhileLoop_h3") {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h3');
        el.innerText = message;
        el.className = className;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h4(message, times, className = "WhileLoop_h4") {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h4');
        el.innerText = message;
        el.className = className;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h5(message, times, className = "WhileLoop_h5") {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h5');
        el.innerText = message;
        el.className = className;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h6(message, times, className = "WhileLoop_h6") {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h6');
        el.innerText = message;
        el.className = className;
        document.body.appendChild(el);
        i++;
    }
}
// HEADINGS 1 - 6 //
function h1(message) {
    const el = document.createElement('h1');
    el.innerText = message;
    document.body.appendChild(el);
}
function h2(message) {
    const el = document.createElement('h3');
    el.innerText = message;
    document.body.appendChild(el);
}
function h3(message) {
    const el = document.createElement('h3');
    el.innerText = message;
    document.body.appendChild(el);
}
function h4(message) {
    const el = document.createElement('h4');
    el.innerText = message;
    document.body.appendChild(el);
}
function h5(message) {
    const el = document.createElement('h5');
    el.innerText = message;
    document.body.appendChild(el);
}
function h6(message) {
    const el = document.createElement('h6');
    el.innerText = message;
    document.body.appendChild(el);
}
// NAVBAR //
function a(href, text, className = "a") {
    return { href, text, className };
}
function nav(navClass, linksArray) {
    const navEl = document.createElement("nav");
    navEl.className = navClass;
    linksArray.forEach(link => {
        const linkEl = document.createElement("a");
        linkEl.href = link.href;
        linkEl.innerText = link.text;
        linkEl.className = link.className || "a";
        navEl.appendChild(linkEl);
    });
    const target = window._AkiraTarget || document.body;
    target.appendChild(navEl);
}
// PARAGRAPH "P" //
function p(message) {
    const el = document.createElement('p');
    el.innerText = message;
    document.body.appendChild(el);
}
// SINGLE CLASS //
function SClass(className, message = '') {
    const newElement = document.createElement('div');
    newElement.className = className;
    if (message) {
        newElement.innerText = message;
    }
    document.body.appendChild(newElement);
    return newElement;
}
