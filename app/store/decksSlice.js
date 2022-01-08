import { createSlice } from "@reduxjs/toolkit";

const decksSlice = createSlice({
    name: 'decks',
    initialState: {
        byId: {},
        allIds: []
    },
    reducers: {
        createDeck(state, action) {
            return state
        }
    }
})

const { actions, reducer } = decksSlice
export const { createDeck } = actions
export default reducer