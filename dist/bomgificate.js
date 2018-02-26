'use strict';

module.exports = bomgificate;

var vowels = 'ауоыиэяюёе';
var regex = new RegExp('[' + vowels + ']', 'g');

function bomgificate(text) {
    return text.replace(/\s+/g, ' ').split(' ').map(processWord).join(' ');
}

function processWord(word) {
    var matches = getPositions(word.toLowerCase());
    if (matches.length === 0) {
        return word;
    }
    try {
        var position = matches[0].index === 0 && vowels.indexOf(matches[0].match.toLowerCase()) !== -1 ? matches[1].index : matches[0].index;
        return '\u0411\u041E\u041C\u0416' + word.substr(position).toUpperCase();
    } catch (e) {
        return word;
    }
}

function getPositions(word) {
    var matches = [];
    while (true) {
        var match = regex.exec(word, regex.lastIndex);
        if (!match) {
            break;
        }
        matches.push({
            index: regex.lastIndex - 1,
            match: match[0]
        });
    }
    return matches;
}