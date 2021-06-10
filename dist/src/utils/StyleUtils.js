"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utilities to apply styles on elements
 */
var StyleUtils = /** @class */ (function () {
    function StyleUtils() {
    }
    /**
     * Hide the element
     *
     * @param elm Element to hide
     */
    StyleUtils.hideElement = function (elm) {
        if (elm)
            elm.style.display = 'none';
    };
    /**
     * Show the element if it was hidden previously
     *
     * @param elm Element to show
     * @param displayType CSS display property: e.g. block, inline-block, flex
     */
    StyleUtils.showElement = function (elm, displayType) {
        if (displayType === void 0) { displayType = 'block'; }
        if (elm)
            elm.style.display = displayType;
    };
    /**
     * Apply the style as inline style and put !important at the end of each
     * css property to make sure that the style can not be overwritten. Always
     * use this function after all other styles had applied to the element
     *
     * @param elm Element to apply the style
     * @param styles Styles to apply to the element
     */
    StyleUtils.applyUserCustomizedStyle = function (elm, styles) {
        var cssText = elm.style.cssText;
        for (var _i = 0, _a = Object.entries(styles); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            cssText += key + ":" + value + " !important;";
        }
        elm.style.cssText = cssText;
    };
    return StyleUtils;
}());
exports.default = StyleUtils;
