/**
 * Utilities to check URL and catch any useful information from it
 */
export default class UrlUtils {
    /**
     * Get current URL
     * 
     * @returns The current URL
     */
    static getCurrentUrl(): string {
        return window.location.href
    }

    /**
     * Get the query parameter value from the URL
     * 
     * @param name Name or key of the query parameter
     * @param url The URL which the query parameter resides in
     * @returns The value of the query parameter or null if the query parameter
     * does not exist
     */
    static getQueryParameter(name: string, url: string): (string | null) {
        try {
            if (!url) return ''

            name = name.replace(/[[\]]/g, '\\$&')
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url)

            if (!results) return null
            if (!results[2]) return ''

            return decodeURIComponent(results[2].replace(/\+/g, ' '))
        } catch (e) {
            return null
        }
    }

    /**
     * Sanitize URL and remove unnecessary query parameters from it
     * 
     * @returns The sanitized URL
     */
    static sanitizeUrl(url: string): string {
        return url.replace(/^([^#?]+)(?:.*)$/, "$1")
    }

    /**
     * Get the base URL for shopify API
     * 
     * @returns The base URL
     */
    static getBaseURL(): (string | null) {
        const url = UrlUtils.getCurrentUrl()
        const matched = url.match(/^((?:https?:\/\/)?[\w\.\-]+)\/?.*$/)
        if (matched) return matched[1]
        return null
    }

    /**
     * Determine if the current page is Shopify product page
     * 
     * @returns Boolean that indicates if the current page is Shopify product page
     */
    static isProductPage(): boolean {
        const url = UrlUtils.getCurrentUrl()
        return Boolean(url && /.+\/products\/.+/.test(url))
    }

    /**
     * Determine if the current page is Shopify collection page
     * 
     * @returns Boolean that indicates if the current page is Shopify collection page
     */
    static isCollectionPage(): boolean {
        const url = UrlUtils.getCurrentUrl()
        return Boolean(url && /.+\/collections\/.*/.test(url))
    }

    /**
     * Determine if the current page is home page
     * 
     * @returns Boolean that indicates if the current page is home page
     */
    static isHomePage(): boolean {
        const url = UrlUtils.getCurrentUrl()
        return UrlUtils.getBaseURL() === url.replace(/\/+$/, "")
    }

    /**
     * Check if the URL has variant query parameter
     * 
     * @returns Boolean which indicates if the variant query parameter exists on
     * the URL
     */
    static hasInitialVariantParam(): boolean {
        const url = window?.location?.href ?? ''
        return Boolean(url && (new RegExp('.*variant=.*')).test(url))
    }

    /**
     * Get first collection slug to use in calling Shopify APIs
     * 
     * @returns The first collection slug to use in calling Shopify API
     */
    static getCollectionSlug(): string {
        const url = window?.location?.href ?? ''
        const urlArr = UrlUtils.sanitizeUrl(url).split('/collections/')
        return (urlArr[1].split('/'))[0]
    }
}
