'use strict';

var expect = require('chai').expect;
var kraut = require('../index');

describe('kraut', function() {
    
    it('should have nouns', function() {
        var nouns = kraut.nouns;
        expect(nouns).to.exist;
    });

    it('should have exclamations', function() {
        var exclamations = kraut.exclamations;
        expect(exclamations).to.exist;
    });

    it('should have greetings', function() {
        var greetings = kraut.greetings;
        expect(greetings).to.exist;
    });

    it('should have verbs', function() {
        var verbs = kraut.verbs;
        expect(verbs).to.exist;
    });

    it('should have adjectives', function() {
        var adjectives = kraut.adjectives;
        expect(adjectives).to.exist;
    });

});