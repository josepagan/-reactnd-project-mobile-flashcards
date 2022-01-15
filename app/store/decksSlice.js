import { createSlice } from "@reduxjs/toolkit";
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { createCard } from "./cardsSlice";

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
            // console.log(newDeck)
            state.byId[newDeck.id] = newDeck;
            state.allIds.push(newDeck.id);

            return state
        },
        dirtyDecksReset() {
            return { byId: {}, allIds: [] }
        }

    },
    extraReducers: (builder) => {
        builder.addCase(createCard, (state, action) => {
            const newCardDeck = action.payload.deckId
            const newCardId = action.payload.id
            state.byId[newCardDeck].cards.push(newCardId)
            return state

        })

    }
})

const { actions, reducer } = decksSlice
export const { createDeck, dirtyDecksReset } = actions
export default reducer