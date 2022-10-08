import Config from "@/types/config"

// project config
import avatarImage from "@/assets/img/avatar.png"
import sleepImage from "@/assets/img/sleeping.jpg"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default <Config>{
    appName: "海鸥哥哥我爱你",
    appDescription: "海鸥哥哥我爱你，我要做你的狗",
    appUrl: "https://海鸥哥哥.我爱你",
    openGraph: {
        author: "AHdark",
        image: [avatarImage, sleepImage],
        type: "website",
        locale: "zh_CN",
    },
    navbar: {
        logo: avatarImage,
        title: "海鸥哥哥我爱你",
        menus: [
            {
                title: "首页",
                link: "/",
            },
            {
                title: "关于",
                link: "/about",
            },
        ],
    },
    footer: {
        copyright: "海鸥哥哥应援会北京分会",
        copyrightLink: "https://海鸥哥哥.我爱你",
        startYear: 2020,
        icons: [
            {
                icon: faGithub,
                href: "https://github.com/AH-dark/love-seagull",
            },
        ],
        menus: [
            {
                title: "关于",
                link: "/about",
            },
        ],
    },
}
