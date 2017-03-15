var kraut = require('./kraut');

var article = () => kraut.articles.random();
var noun = () => kraut.nouns.random();
var adjective = () => kraut.adjectives.random();
var verb = () => kraut.verbs.random();

var random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var makeSentence = function() {
    switch (random(3, 6)) {
        case 3:
            return `${article()} ${adjective()} ${noun()}.`;

        case 4:
            return `${article()} ${adjective()} ${noun()} ${verb()}.`;

        case 5:
            return `${noun()} und ${noun()} ${verb()} ${adjective()} ${noun()}.`;
            
        case 6:
            return `${article()} ${noun()} ${verb()} ${article().toLowerCase()} ${adjective()} ${noun()}.`;
    }
}

/**
 * Makes beautiful kraut sentence
 */
module.exports.makeSentence = makeSentence;