/**
 * Utilities to apply styles on elements
 */
export default class StyleUtils {
    /**
     * Hide the element
     *
     * @param elm Element to hide
     */
    static hideElement(elm: HTMLElement): void;
    /**
     * Show the element if it was hidden previously
     *
     * @param elm Element to show
     * @param displayType CSS display property: e.g. block, inline-block, flex
     */
    static showElement(elm: HTMLElement, displayType?: string): void;
    /**
     * Apply the style as inline style and put !important at the end of each
     * css property to make sure that the style can not be overwritten. Always
     * use this function after all other styles had applied to the element
     *
     * @param elm Element to apply the style
     * @param styles Styles to apply to the element
     */
    static applyUserCustomizedStyle(elm: HTMLElement, styles: any): void;
}
