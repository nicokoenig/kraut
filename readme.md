Kraut
=====

A snappy collection of famous german words.

## Installation

  `npm install kraut`

## Usage

First require kraut

    var kraut = require('kraut');

Kraut contains five collections of words (nouns, exclamations, greetings, verbs and adjectives)

    var nouns = kraut.nouns;
    var greetings = kraut.greetings;
    var exclamations = kraut.exclamations;
    var verbs = kraut.verbs;
    var adjectives = kraut.adjectives;

Use method random() to get random word of the collection
    
    // get random noun
    kraut.nouns.random();


Use method all() to get all words of the collection

    // get all nouns
    kraut.nouns.all();
  

## Tests

Not yet :-/

## Contributing

Feel free to add beautiful german words. 

Please mind that I will reject pull request for inappropriate content.