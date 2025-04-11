// CURRENT VERSION: 1.2.0

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
