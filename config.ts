import Config from "@/types/config"

// project config
import avatarImage from "@/assets/img/avatar.png"
import sleepImage from "@/assets/img/sleeping.jpg"

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
}
