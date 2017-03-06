module.exports = (function(arr) {
    var KrautCollection = function(arr) {
        this._arr = arr;
    }

    KrautCollection.prototype.random = function() {
        return this._arr[Math.floor(Math.random() * this._arr.length)];
    } 

    KrautCollection.prototype.all = function() {
        return this._arr;
    }

    return KrautCollection;
})();