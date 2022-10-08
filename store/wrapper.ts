import { createWrapper } from "next-redux-wrapper"
import store, { MakeStore } from "./index"

const wrapper = createWrapper<MakeStore>(store, {
    debug: process.env.NODE_ENV !== "production",
    serializeState: (state) => state,
})

export default wrapper
