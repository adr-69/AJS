// CONSOLE //
function $console_akr(message) {
    console.log(message);
}

// HTML HEADINGS H1 - H6 //
function $akr_h(level = 0, message) {
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
function $akr_p(message) {
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
function $akr_(num) {
    return num * num;
}
function $akr_(message) {
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
function $doc_getEleById_(str) {
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
function $akr_(message, className = "") {
    createElement(message, className);
}

function $akrClass_(className) {
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
function $akr_a(href, message) {
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

// RESPONSE FILE //
function LoadAndRunCode() {
    fetch('Holy.js')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(code => {
            try {
                eval(code);
            } catch (error) {
                console.error('Error in evaluating the code: ', error);
            }
        })
        .catch(error => {
            console.warn('Error in fetching the file or executing code: ', error);
        });
}

window.onload = LoadAndRunCode;
