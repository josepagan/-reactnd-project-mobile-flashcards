import { createSlice } from "@reduxjs/toolkit";
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

const decksSlice = createSlice({
    name: 'decks',
    initialState: {
        byId: {},
        allIds: []
    },
    reducers: {
        createDeck(state, action) {
            const newDeck = {
                id: uuid(),
                timeStamp: Date.now(),
                name: action.payload,
                cards: []
            }
            console.log(newDeck)
            state.byId[newDeck.id] = newDeck;
            state.allIds.push(newDeck.id);

            return state
        },
        dirtyReset() {
            return { byId: {}, allIds: [] }
        }

    }
})

const { actions, reducer } = decksSlice
export const { createDeck, dirtyReset } = actions
export default reducer