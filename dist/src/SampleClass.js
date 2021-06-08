"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sample class
 */
var SampleClass = /** @class */ (function () {
    function SampleClass() {
    }
    /**
     * Sample method to greet someone in browser console
     *
     * @param name The name to greet
     */
    SampleClass.sampleMethod = function (name) {
        console.log("Hello " + name);
    };
    return SampleClass;
}());
exports.default = SampleClass;
