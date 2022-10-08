import type { NextPage } from "next"
import Layouts from "@/layouts"
import avatarImage from "@/assets/img/avatar.png"
import Image from "next/image"
import React, { useEffect } from "react"
import { useDispatch } from "@/store"
import { setTitle } from "@/store/reducers/view"

const Home: NextPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTitle("主页"))
    }, [dispatch])

    return (
        <Layouts className={"h-full"}>
            <div
                className={
                    "block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                }
            >
                <div className={"w-full flex flex-col items-center my-4 "}>
                    <div
                        className={
                            "p-2 rounded-full ring-1 ring-gray-300 dark:ring-gray-500 flex flex-col items-center justify-center"
                        }
                    >
                        <Image
                            className="rounded-full"
                            src={avatarImage.src}
                            alt={"海鸥大头贴"}
                            height={128}
                            width={128}
                        />
                    </div>
                </div>
                <div className={"py-2"}>
                    <h1 className={"text-2xl font-bold text-center"}>
                        海鸥哥哥我爱你！
                    </h1>
                </div>
                <hr className={"my-2"} />
                <div className={"py-2"}>
                    <p className={"py-1"}>
                        以海开头，以鸥结尾，她用3cm的阴茎，撑起了iou的青春，短短的十九画，却是iou一辈子的信仰，海鸥这几个字看起来太独特表白最好的idol！海鸥哥哥！
                    </p>
                    <p className={"py-1"}>
                        我不是一个完美的人，但不妨碍我想努力成为一个更好的人。
                        做好自己，行胜于言。
                        海鸥哥哥赤诚善良，海鸥哥哥热心公益，海鸥哥哥清醒自律，海鸥哥哥未来可期，海鸥哥哥帅呆了。
                        海鸥哥哥正能量艺人，海鸥哥哥我喜欢你，我喜欢海鸥哥哥，非常喜欢海鸥哥哥。
                    </p>
                    <p className={"py-1"}>
                        看帅哥不看海鸥，就像四大名著不看红楼梦、追星不追肖战、b站不看丁真、游戏不玩原神，说明这个人文学造诣和自我修养不足，他理解不了这种内在的阳春白雪的高雅艺术。
                        他只能看到外表的辞藻堆砌，参不透其中深奥的精神内核，他整个人的层次就卡在这里了，只能度过一个相对失败的人生。
                    </p>
                </div>
            </div>
        </Layouts>
    )
}

export default Home
