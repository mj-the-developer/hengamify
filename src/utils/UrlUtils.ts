/**
 * Utilities to check URL and catch any useful information from it
 */
 export default class UrlUtils {
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
     * Get the domain part of the URL
     * 
     * @param url The URL to get the base
     * @returns The base URL
     */
    static getBaseURL(url: string): (string | null) {
        if (!url) return null
        const matched = url.match(/^((?:https?:\/\/)?[\w\.\-]+)\/?.*$/)
        if (matched) return matched[1]
        return null
    }

    /**
     * Determine if the app is on the Shopify product page
     * 
     * @returns Boolean that indicates if the app is on the Shopify product page
     */
    static isProductPage(): boolean {
        const url = window?.location?.href ?? ""
        return Boolean(url && /.+\/products\/.+/.test(url))
    }

    /**
     * Determine if the app is on the Shopify collection pages
     * 
     * @returns Boolean that indicates if the app is on the Shopify collection pages
     */
    static isCollectionPage(): boolean {
        const url = window?.location?.href ?? ""
        return Boolean(url && /.+\/collections\/.*/.test(url))
    }

    /**
     * Determine if the app is on the home page
     * 
     * @returns Boolean that indicates if the app is on the home page
     */
    static isHomePage(): boolean {
        const url = window?.location?.href ?? ""
        return UrlUtils.getBaseURL(url) === url.replace(/\/+$/, "")
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
     * @param url The URL which collection slug resides in
     * @returns The first collection slug to use in calling Shopify API
     */
    static getCollectionSlug(url: string): string {
        const urlArr = UrlUtils.sanitizeUrl(url).split('/collections/')
        return (urlArr[1].split('/'))[0]
    }
}
