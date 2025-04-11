// CONSOLE //
function console_akr(message) {
    console.log(message);
}
// VARIABLE //
function akr(num) {
    return num * num;
}
function akr(message) {
    console.log(message); // Output message to console
    return typeof message === "number" ? message * message : "Invalid input";
}
// DOCUMENT GET ELEMENT BY ID //
function doc_getId(id) {
    return document.getElementById(id);
}
