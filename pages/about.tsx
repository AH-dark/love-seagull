import React from "react"
import { NextPage } from "next"
import Layouts from "@/layouts"

const About: NextPage = () => {
    return (
        <Layouts className={"h-full"}>
            <div
                className={
                    "block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                }
            >
                <div>
                    <h1 className={"text-2xl font-bold text-center"}>关于</h1>
                </div>
                <hr className={"my-2"} />
                <div className={"py-2"}>
                    <p>
                        本站由 <b>海鸥哥哥的应援团</b> 开发，使用{" "}
                        <a
                            href={"https://nextjs.org/"}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={"hover:underline hover:text-blue-500"}
                        >
                            Next.js
                        </a>{" "}
                        作为前端框架，使用{" "}
                        <a
                            href={"https://tailwindcss.com/"}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={"hover:underline hover:text-blue-500"}
                        >
                            Tailwind CSS
                        </a>{" "}
                        作为 CSS 框架，使用{" "}
                        <a
                            href={"https://www.typescriptlang.org/"}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={"hover:underline hover:text-blue-500"}
                        >
                            TypeScript
                        </a>{" "}
                        作为编程语言。
                    </p>
                    <p className={"py-2"}>
                        本站的源代码托管在{" "}
                        <a
                            href={"https://github.com/AH-dark/love-seagull"}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={"hover:underline hover:text-blue-500"}
                        >
                            GitHub
                        </a>{" "}
                        上，欢迎大家前往查看。
                    </p>
                    <p className={"py-2"}>
                        本站的生产环境由{" "}
                        <a
                            href={"https://vercel.com/"}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={"hover:underline hover:text-blue-500"}
                        >
                            Vercel
                        </a>{" "}
                        提供，感谢 Vercel 的无私奉献。
                    </p>
                </div>
                <div className={"py-2"}>
                    <p className={"py-1"}>
                        以下为本站的开发者，感谢他们为本站的开发做出的贡献。
                    </p>
                    <ul className={"list-disc list-inside py-1"}>
                        <li>
                            <a
                                href={"https://www.ahdark.com"}
                                target={"_blank"}
                                rel={"noreferrer"}
                                className={
                                    "hover:underline hover:text-blue-500"
                                }
                            >
                                AHdark
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className={"my-2"} />
                <div>
                    <p className={"my-2"}>
                        本站随时接受任何形式的捐赠，您可联系AHdark进行捐赠。
                        <br />
                        捐赠后可在本站的捐赠者列表中找到您的名字，并获得本站的永久感谢。
                        <br />
                        同时，捐赠者也可以申请在本站悬挂自己的广告，详情请联系AHdark。
                        <br />
                    </p>
                    <p className={"py-2"}>
                        如有任何问题，请联系{" "}
                        <a
                            href={"mailto:ahdark@outlook.com"}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className={"hover:underline hover:text-blue-500"}
                        >
                            AHdark
                        </a>{" "}
                        。
                    </p>
                </div>
            </div>
        </Layouts>
    )
}

export default About
