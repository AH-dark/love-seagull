import { createWrapper } from "next-redux-wrapper"
import store from "./index"

const wrapper = createWrapper(store, {
    debug: process.env.NODE_ENV !== "production",
    serializeState: (state) => state,
})

export default wrapper
