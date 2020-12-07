var Validation = /** @class */ (function () {
    function Validation() {
    }
    Validation.prototype.checkType = function () { };
    return Validation;
}());
(function (Validation) {
    Validation.numberReg = /^[0-9]+$/;
    Validation.stringReg = /^[A-Za-z]+$/;
    Validation.checkString = function () { };
})(Validation || (Validation = {}));
(function (Validation) {
    Validation.checkNumber = function (value) {
        return Validation.numberReg.test(value);
    };
})(Validation || (Validation = {}));
var a = new Validation();
console.log(a);
console.log(Validation.prototype);
// checkType: ƒ checkType()
// constructor: class Validation
console.log(Validation.prototype.constructor);
/* class Validation {
  checkType() { }
} */ 
