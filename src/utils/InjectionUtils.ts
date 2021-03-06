import ElementsUtils from "./ElementsUtils";
import StyleUtils from "./StyleUtils";

/**
 * Utilities to inject different html elements to shops html structure
 */
export default class InjectionUtils {
  /**
   * Create the link element of the custom stylesheet and 
   * inject it to the head section of the document
   * 
   * @param url The url of the stylesheet
   */
  static injectLinkedStylesheet(url: string): void {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = url;
    document.head.appendChild(stylesheet);
  }

  /**
   * Create the style block code with raw css and 
   * inject it to the head section of the document
   * 
   * @param rawCss Raw css code to put into style block
   */
  static injectRawStyle(rawCss: string): void {
    const stylesheet = document.createElement('style');
    stylesheet.textContent = rawCss;
    document.head.appendChild(stylesheet);
  }

  /**
   * Try to append or prepend the provided elements to one of 
   * the wrappers provided in the wrappers list or their parents.
   * The method reverse the order of elements if the elements are going to
   * prepend to the wrapper
   * 
   * @param elements List of HTML elements to inject to one of the wrappers
   * @param wrappers List of desired wrappers to inject the elements into them
   * @param prepend Boolean to prepend the elements instead of appending
   * @param injectToParent Either inject the elements to wrapper itself or its parent
   * @returns boolean which indicate if the injection were successful
   */
  static injectElements(elements: HTMLElement[], wrappers: string[], prepend: boolean = false, injectToParent: boolean = false): boolean {
    for (let x = 0; x < wrappers?.length; x++) {
      const wrapper = document.querySelectorAll(wrappers[x]);

      if (wrapper[0]) {
        const finalWrapper = injectToParent ? wrapper[0].parentElement : wrapper[0];
        const finalElements = prepend ? elements?.reverse() : elements;

        finalElements.forEach(elm => {
          if (prepend) {
            finalWrapper?.prepend(elm);
          } else {
            finalWrapper?.appendChild(elm);
          }
        })

        return true;
      }
    }

    return false;
  }

  /**
   * Inject the toast to show a message
   * 
   * @param message The message to show in the toast
   * @param bgColor The background color of the toast box
   * @param textColor The text color of the toast box
   * @param toastStyle The css style of the toast
   */
  static injectAlert(message: string, bgColor: string = '#0cd4a6', textColor: string = '#fff', toastTimeOut: number = 4000): void {
    const toastStyle = {
      'background-color': `${bgColor}!important`,
      'color': `${textColor}!important`,
      'font-size': '14px',
      'line-height': '21px',
      'padding': '15px 30px',
      'position': 'fixed',
      'right': '15px',
      'bottom': '15px',
      'width': '340px',
      'z-index': '2147483647',
    }

    const alertBox = ElementsUtils.createHtmlElement('div', message, ['restockify-toast'], toastStyle);

    document.body.appendChild(alertBox);
    setTimeout(() => {
      StyleUtils.hideElement(alertBox);
    }, toastTimeOut);
  }
}
