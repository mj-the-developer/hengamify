/**
 * Utilities to create, clone, etc. different HTML elements
 */
export default class ElementsUtils {
  /**
   * Create the HTML element
   * 
   * @param tag The HTML tag to create
   * @param content The text content of the HTML element
   * @param classes The list of classes to assing to the HTML element
   * @param styles The inline styles to apply to the HTML element
   * @returns The created HTML element
   */
  static createHtmlElement(tag: string, content: string | null = null, classes: string[] = [], styles: any | null = null): HTMLElement {
    const elm = document.createElement(tag);

    if (content) elm.textContent = content;

    classes.forEach(cls => elm.classList.add(cls));

    if (styles) {
      let inlineStyles = '';

      for (const [key, value] of Object.entries(styles)) {
        inlineStyles += `${key}:${value};`;
      }

      elm.style.cssText = inlineStyles;
    }

    return elm;
  }

  /**
   * Create the Image HTML element
   * 
   * @param src The src attribute of the image element
   * @param classes The list of classes to assing to the image element
   * @param styles The inline styles to apply to the image element
   * @returns The created Image HTML element
   */
  static createImageElement(src: string, classes: string[] = [], styles: any | null = null): HTMLImageElement {
    const img = ElementsUtils.createHtmlElement('img', null, classes, styles);
    img.setAttribute('src', src);
    return <HTMLImageElement>img;
  }

  /**
   * Create the Input HTML element
   * 
   * @param type The type of the input element
   * @param placeholder The placeholder of the input element
   * @param classes The list of classes to assing to the input element
   * @param styles The inline styles to apply to the input element
   * @returns 
   */
  static createInputElement(type: string, placeholder: string = '', classes: string[] = [], styles: any | null = null): HTMLInputElement {
    const input = ElementsUtils.createHtmlElement('input', null, classes, styles);
    input.setAttribute('type', type);
    if (placeholder) input.setAttribute('placeholder', placeholder);
    return <HTMLInputElement>input;
  }

  /**
   * Copy the HTML element
   * 
   * @param element The HTML element to copy
   * @returns The copied HTML element
   */
  static copyHTMLElement(element: HTMLElement): HTMLElement {
    return <HTMLElement>element.cloneNode(true);
  }
}
