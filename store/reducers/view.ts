import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

export interface ViewState {
    title: string | null
    description: string | null
}

const initialState: ViewState = {
    title: null,
    description: null,
}

const view = createSlice({
    name: "view",
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string | null>) => {
            state.title = action.payload
        },
        setDescription: (state, action: PayloadAction<string | null>) => {
            if (action.payload == null || action.payload.length === 0) {
                state.description = null
                return
            }

            if (action.payload.length > 160) {
                state.description = action.payload.substring(0, 160) + "..."
                return
            }

            state.description = action.payload
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.auth,
            }
        },
    },
})

export const { setTitle, setDescription } = view.actions
export default view.reducer
