import React, { useEffect } from "react"
import { NextPage } from "next"
import Layouts from "@/layouts"
import { useDispatch } from "@/store"
import { setTitle } from "@/store/reducers/view"

const NotFound: NextPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setTitle("404 Not Found"))
    }, [dispatch])

    return (
        <Layouts className={"h-full flex flex-col justify-center"}>
            <div
                className={
                    "h-full m-auto flex flex-col items-center justify-center"
                }
            >
                <h1 className={"text-2xl font-bold text-center"}>
                    404 Not Found
                </h1>
                <p className={"py-2"}>你访问的页面不存在。</p>
            </div>
        </Layouts>
    )
}

export default NotFound
