module.exports = bomgificate;

const vowels = 'ауоыиэяюёе';
const regex = new RegExp(`[${vowels}]`, 'g');

function bomgificate(text) {
    return text.replace(/\s+/g, ' ').split(' ').map(processWord).join(' ');
}

function processWord(word) {
    const matches = getPositions(word.toLowerCase());
    if (matches.length === 0) {
        return word;
    }
    try {
    const position = matches[0].index === 0 && vowels.indexOf(matches[0].match.toLowerCase()) !== -1
        ? matches[1].index
        : matches[0].index;
    return `БОМЖ${word.substr(position).toUpperCase()}`;
    } catch(e) {
        return word;
    }
}

function getPositions(word) {
    const matches = [];
    while (true) {
        const match = regex.exec(word, regex.lastIndex);
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
