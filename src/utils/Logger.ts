import * as log from "loglevel"

const colors = {
    [log.levels.DEBUG]: "#0cd4a7",
    [log.levels.INFO]: "#6464f4",
    [log.levels.WARN]: "#ffc107",
    [log.levels.ERROR]: "#dc3545",
}

/**
 * The Logger class which logs the messages to the browser console
 */
export default class Logger {
    /**
     * The name of the main application which extends the Hengamify class
     */
    private appName: string

    /**
     * Boolean which indicate if the logger is enabled
     */
    private isEnabled: boolean = false

    /**
     * The constructor of the Logger class
     * 
     * @param appName The name of the main application which extends the Hengamify class
     */
    constructor(appName: string) {
        this.appName = appName
        log.setLevel(log.levels.INFO)
    }

    /**
     * Enable the logger
     */
    public enableLogs(): void {
        this.isEnabled = true
    }

    /**
     * Log the message to the browser console
     * 
     * @param message The message to log to the browser console
     * @param level The level of the log e.g. 1 for debug, 4 for error, etc
     * @returns Null if the class is not enabled
     */
    private log(message: string, level: log.LogLevelNumbers) {
        if (!this.isEnabled) return

        const msg = `%c${this.appName}: ${message}`
        // @ts-ignore
        const style = `color:${colors[level]};font-weight:500;font-size:12px`

        switch (Number(level)) {
            case 0:
            case 1:
                log.debug(msg, style)
                break
            case 2:
                log.info(msg, style)
                break
            case 3:
                log.warn(msg, style)
                break
            case 4:
                log.error(msg, style)
        }
    }

    /**
     * Log the debug messages
     * 
     * @param message The message to log to the browser console
     */
    public debug(message: string): void {
        this.log(message, log.levels.DEBUG)
    }

    /**
     * Log the info messages
     * 
     * @param message The message to log to the browser console
     */
    public info(message: string): void {
        this.log(message, log.levels.INFO)
    }

    /**
     * Log the warning messages
     * 
     * @param message The message to log to the browser console
     */
    public warn(message: string): void {
        this.log(message, log.levels.WARN)
    }

    /**
     * Log the error messages
     * 
     * @param message The message to log to the browser console
     */
    public error(message: string): void {
        this.log(message, log.levels.ERROR)
    }
}
