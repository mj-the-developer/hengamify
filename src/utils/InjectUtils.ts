/**
 * Utilities to inject different html elements to shops html structure
 */
export default class InjectUtils {
    /**
     * Create the link element of the custom stylesheet and 
     * inject it to the head section of the document
     * 
     * @param url The url of the stylesheet
     */
    static injectCustomStylesheet(url: string): void {
        const stylesheet = document.createElement('link')
        stylesheet.rel = 'stylesheet'
        stylesheet.href = url
        document.head.appendChild(stylesheet)
    }

    /**
     * Create the style block code with raw css and 
     * inject it to the head section of the document
     * 
     * @param rawCss Raw css code to put into style block
     */
    static injectCustomStyle(rawCss: string): void {
        const stylesheet = document.createElement('style')
        stylesheet.textContent = rawCss
        document.head.appendChild(stylesheet)
    }

    /**
     * Try to inject the provided elements to one of 
     * the wrappers provided in the wrappers list
     * 
     * @param elements List of HTML elements to inject to one of the wrappers
     * @param wrappers List of desired wrappers to inject the elements into them
     * @returns boolean which indicate if the injection were successful
     */
    static injectElements(elements: HTMLElement[], wrappers: string[]): boolean {
        let areElementsInjected = false;

        for (let x = 0; x < wrappers?.length; x++) {
            const wrapper = document.querySelectorAll(wrappers[x])

            if (wrapper[0]) {
                elements.forEach(elm => {
                    wrapper[0].appendChild(elm)
                })
                areElementsInjected = true
                break
            }
        }

        return areElementsInjected
    }
}
