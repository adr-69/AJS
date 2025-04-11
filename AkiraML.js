// CONSOLE //
function $console_akr(message) {
    console.log(message);
}

// HTML HEADINGS H1 - H6 //
function $akrh(level = 0, message) {
    const outputDiv = document.getElementById('output');
    
    let element;
    if (level >= 1 && level <= 6) {
        element = document.createElement(`h${level}`);
    } else {
        element = document.createElement(" ");
    }
    element.textContent = message;
    outputDiv.appendChild(element);
}
// PARAGRAPH //
function $akrp(message) {
    const outputDiv = document.getElementById('output');
    
    let paragraph;
    if (paragraph = 0) {
        paragraph = document.createElement(`p`);
    } else {
        paragraph = document.createElement("p");
    }
    paragraph.textContent = message;
    outputDiv.appendChild(paragraph);
}
// VARIABLE //
function $akr(num) {
    return num * num;
}
function $akr(message) {
    const outputDiv = document.getElementById('output');
    
    let variable;
    if (variable = 0) {
        variable = document.createElement(`p`);
    } else {
        variable = document.createElement("p");
    }
    variable.textContent = message;
    outputDiv.appendChild(variable);
    return message * message;
}
// DOCUMENT GET ELEMENT BY ID //
function $doc_getEleById(str) {
    const outputDiv = document.getElementById('output');
    if (!outputDiv) return null;
    
    const element = document.getElementById(str);
    if (element) {
        outputDiv.appendChild(element.cloneNode(true));
        return element;
    } else {
        const docu = document.createElement('div');
        docu.textContent = `'${str}'`;
        outputDiv.appendChild(docu);
        return null;
    }
}
// CLASS //
function $akr(message, className = "") {
    createElement(message, className);
}

function $akrClass(className) {
    return function(message) {
        createElement(message, className);
    };
}

function createElement(message, className) {
    const outputDiv = document.getElementById('output');
    if (!outputDiv) {
        console.error("Output div not found.");
        return;
    }
    
    const newElement = document.createElement("div");
    
    if (className) {
        newElement.className = className;
    }
    
    newElement.textContent = message;
    
    outputDiv.appendChild(newElement);
}
// LINK // 
function $akra(href, message) {
    const outputDiv = document.getElementById('output');
    if (!outputDiv) {
        console.error("Output div not found.");
        return;
    }
    
    const newLink = document.createElement("a");
    
    if (href) {
        newLink.href = href;
    }
    
    newLink.textContent = message;
    
    newLink.target = "_blank";
    
    outputDiv.appendChild(newLink);
}

