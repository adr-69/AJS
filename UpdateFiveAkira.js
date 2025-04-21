// ============================== //
/*
|    Akira.JS
|    Latest Version: v1.5.0
|    License: MIT
|    Relase Date: APRIL 10, 2025
|    Created By: Adrian Martin
*/
// ============================== //

function inconsole(message) {
    console.log(message);
}
function incl(message) {
    console.log(message);
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
function ForLoop_h1(message, times) {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h1');
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h2(message, times) {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h2');
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h3(message, times) {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h3');
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h4(message, times) {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h4');
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h5(message, times) {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h5');
        el.innerText = message;
        document.body.appendChild(el);
    }
}
function ForLoop_h6(message, times) {
    for (let i = 0; i < times; i++) {
        const el = document.createElement('h6');
        el.innerText = message;
        document.body.appendChild(el);
    }
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
function WhileLoop_h1(message, times) {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h1');
        el.innerText = message;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h2(message, times) {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h2');
        el.innerText = message;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h3(message, times) {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h3');
        el.innerText = message;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h4(message, times) {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h4');
        el.innerText = message;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h5(message, times) {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h5');
        el.innerText = message;
        document.body.appendChild(el);
        i++;
    }
}
function WhileLoop_h6(message, times) {
    let i = 0;
    while (i < times) {
        const el = document.createElement('h6');
        el.innerText = message;
        document.body.appendChild(el);
        i++;
    }
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
// TYPEWRITTER TEXT EFFECT H1 - H6 //
function TypewritterText_h1(text, speed = 50) {
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
function TypewritterText_h2(text, speed = 50) {
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
function TypewritterText_h3(text, speed = 50) {
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
function TypewritterText_h4(text, speed = 50) {
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
function TypewritterText_h5(text, speed = 50) {
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
function TypewritterText_h6(text, speed = 50) {
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
// HTML SYNTAX //
function HTML(code) {
    const container = document.createElement('div');
    container.innerHTML = code;
    document.body.appendChild(container);
}
