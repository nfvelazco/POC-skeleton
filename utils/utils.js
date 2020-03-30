Array.prototype.distinct = function() {
    var self = this;
    return self.filter((value, index) => {
        return self.indexOf(value) === index;
    }); 
};


Array.prototype.toLower = function() {
    var self = this;
    return self.map(value => {
        return value.toString().toLocaleLowerCase();
    }); 
};