import React, { useMemo } from "react"
import config from "@/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import dayjs from "dayjs"
import { useRouter } from "next/router" // <-- import styles to be used

const Footer: React.FC = () => {
    const year = useMemo(() => {
        if (!config.footer?.startYear) {
            return dayjs().year()
        }

        if (config.footer.startYear === dayjs().year()) {
            return dayjs().year()
        }

        return `${config.footer.startYear} - ${dayjs().year()}`
    }, [])

    const router = useRouter()
    const handleRedirect = (link: string) => (e: React.MouseEvent) => {
        if (link.startsWith("/") || link.startsWith("#")) {
            e.preventDefault()
            router.push(link).then((r) => console.log(r))
        } else {
            window.open(link, "_blank")
        }
    }

    return (
        <>
            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 relative">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {year}{" "}
                    <a
                        href={config.footer?.copyrightLink || "#"}
                        className="hover:underline"
                        onClick={handleRedirect(
                            config.footer?.copyrightLink || "#"
                        )}
                    >
                        {config.footer?.copyright || "AHdark"}
                    </a>{" "}
                    All Rights Reserved.
                </span>
                <div className="flex flex-wrap items-center justify-between mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <ul className={"flex flex-row items-center"}>
                        {config.footer?.menus?.map((menu, index) => (
                            <li key={index}>
                                <a
                                    href={menu.link}
                                    className="mr-4 hover:underline md:mr-6"
                                >
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center">
                        {config.footer?.icons?.map((icon, index) => (
                            <span
                                key={index}
                                className={"mr-4 md:mr-6 last:mr-0"}
                            >
                                <a
                                    href={icon.href}
                                    className="hover:underline"
                                    onClick={handleRedirect(icon.href)}
                                >
                                    <FontAwesomeIcon
                                        icon={icon.icon}
                                        className="text-xl md:text-2xl"
                                    />
                                </a>
                            </span>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
