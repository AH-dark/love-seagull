import { StaticImageData } from "next/image"

export default interface Config {
    // The name of the app
    appName: string
    // The description of the app
    appDescription: string
    // The URL of the app
    appUrl: string
    // The Open Graph information of the app
    openGraph?: {
        // The image of the app
        image?: StaticImageData[]
        // The author of the app
        author?: string
        // The type of the app
        type?: string
        // The language of the app
        locale?: string
    }
}
