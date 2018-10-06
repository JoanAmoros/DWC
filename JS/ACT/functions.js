function w(string) {
    document.write(string);
}

function hr() {
    w("<hr>");
}

function br() {
    w("<br>");
}

function wb(string) {
    w(string);
    br();
}

function p(string) {
    return prompt(string);
}

function pp(string) {
    return parseInt(p(string));
}