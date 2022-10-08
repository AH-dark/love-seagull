import React, { useState } from "react"
import { useRouter } from "next/router"
import config from "@/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

const Navbar: React.FC = () => {
    const router = useRouter()
    const handleRedirect = (link: string) => (e: React.MouseEvent) => {
        if (link.startsWith("/") || link.startsWith("#")) {
            e.preventDefault()
            router.push(link).then((r) => console.log(r))
        } else {
            window.open(link, "_blank")
        }
    }

    const [open, setOpen] = useState(false)

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a
                    href={"/"}
                    className="flex items-center"
                    onClick={handleRedirect("/")}
                >
                    {config.navbar?.logo && (
                        <div className="mr-3 h-6 sm:h-9 rounded-full flex flex-row items-center justify-center">
                            <Image
                                src={config.navbar?.logo?.src}
                                alt="Logo"
                                width={36}
                                height={36}
                                style={{
                                    borderRadius: "50%",
                                }}
                                priority
                            />
                        </div>
                    )}
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        {config.navbar?.title || "海鸥哥哥我爱你"}
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-menu"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">Open main menu</span>
                    <i
                        className={
                            "w-6 h-6 flex flex-col items-center justify-center"
                        }
                    >
                        <FontAwesomeIcon icon={faBars} className="text-lg" />
                    </i>
                </button>
                <div
                    className={`${open || "hidden"} w-full md:block md:w-auto`}
                    id="navbar-menu"
                >
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {config.navbar?.menus?.map((menu, index) => (
                            <li key={index}>
                                <a
                                    href={menu.link}
                                    className={`block py-2 pr-4 pl-3 ${
                                        router.asPath === menu.link &&
                                        "text-white bg-blue-700 md:text-blue-700"
                                    } rounded md:bg-transparent md:p-0 dark:text-white`}
                                    aria-current="page"
                                    onClick={handleRedirect(menu.link)}
                                >
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
