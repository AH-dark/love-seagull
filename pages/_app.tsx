import React, { useMemo } from "react"
import type { AppProps } from "next/app"
import "styles/tailwind.css"
import Head from "next/head"
import wrapper from "@/store/wrapper"
import { useSelector } from "@/store"
import config from "@/config"
import { useRouter } from "next/router"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const viewState = useSelector((state) => state.view)
    const title = useMemo(
        () =>
            viewState.title
                ? `${viewState.title} - ${config.appName}`
                : config.appName,
        [viewState.title]
    )
    const description = useMemo(
        () => viewState.description || config.appDescription,
        [viewState.description]
    )

    const router = useRouter()
    const currentUrl = useMemo<string>(
        () => new URL(router.asPath, config.appUrl).href,
        [router]
    )

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>{title}</title>
                <meta name={"description"} content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={currentUrl} />
                {config.openGraph?.type && (
                    <meta property="og:type" content={config.openGraph.type} />
                )}
                {config.openGraph?.image &&
                    config.openGraph.image.map((img) => (
                        <>
                            <meta property="og:image" content={img.src} />
                            <meta
                                property="og:image:width"
                                content={String(img.width)}
                            />
                            <meta
                                property="og:image:height"
                                content={String(img.height)}
                            />
                        </>
                    ))}
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(App)
