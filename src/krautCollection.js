module.exports = (function(arr) {
    var KrautCollection = function(arr) {
        this._arr = arr;
        this.max = this._arr.length - 1;
        this.min = 0;
    }

    KrautCollection.prototype.random = function() {
        var randomIndex = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        return this._arr[randomIndex];
    } 

    KrautCollection.prototype.all = function() {
        return this._arr;
    }

    return KrautCollection;
})();