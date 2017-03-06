'use strict';

var KrautCollection = require('./src/krautCollection');
var exclamations = require('./src/exclamations');
var greetings = require('./src/greetings');
var adjectives = require('./src/adjectives');
var verbs = require('./src/verbs');
var nouns = require('./src/nouns');

/**
 * Represents a collection of popular german exclamations
 * @return { all: [], random: string }
 */
module.exports.exclamations = new KrautCollection(exclamations);

/**
 * Represents a collection of popular german greetings
 * @return { all: [], random: string }
 */
module.exports.greetings = new KrautCollection(greetings);

/**
 * Represents a collection of popular german adjectives
 * @return { all: [], random: string }
 */
module.exports.adjectives = new KrautCollection(adjectives);

/**
 * Represents a collection of popular german verbs
 * @return { all: [], random: string }
 */
module.exports.verbs = new KrautCollection(verbs);

/**
 * Represents a collection of popular german nouns
 * @return { all: [], random: string }
 */
module.exports.nouns = new KrautCollection(nouns);