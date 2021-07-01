import Logger from './utils/Logger'

/**
 * Base class of Hengamify which hold common properties and methods
 */
 export default class Hengamify {
    /**
     * The name of the main application which extends the Hengamify class
     */
    public appName: string

    /**
     * The logger class which child apps can use it
     */
    public logger: any

    /**
     * The constructor of the Hengamify class
     * 
     * @param appName The name of the main application which extends the Hengamify class
     */
    constructor(appName: string) {
        this.appName = appName
        this.logger = new Logger(this.appName)
    }
}
