function Hello() {
    alert("Hello World!!");
}

function isAnInteger(text) {
    var intTestRegex = /^\s*(\+|-)?\d+\s*$/;
    return String(text).search(intTestRegex) != -1;
}

function isSignificant(text) {
    var notWhitespaceTestRegex = /[^\s]{1,}/;
    return String(text).search(notWhitespaceTestRegex) != -1;
}