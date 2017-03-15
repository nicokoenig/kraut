'use strict';

var KrautCollection = require('./krautCollection');
var exclamations = require('./exclamations');
var greetings = require('./greetings');
var adjectives = require('./adjectives');
var verbs = require('./verbs');
var nouns = require('./nouns');
var articles = require('./articles');

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

/**
 * Represents a collection of popular german articles
 * @return { all: [], random: string }
 */
module.exports.articles = new KrautCollection(articles);