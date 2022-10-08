import { configureStore } from "@reduxjs/toolkit"
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from "react-redux"
import view from "./reducers/view"

const store = () =>
    configureStore({
        reducer: {
            view,
        },
        devTools: process.env.NODE_ENV !== "production",
    })

export type AppDispatch = ReturnType<typeof store>["dispatch"]
export type RootState = ReturnType<ReturnType<typeof store>["getState"]>

export const useDispatch = () => useReduxDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default store
