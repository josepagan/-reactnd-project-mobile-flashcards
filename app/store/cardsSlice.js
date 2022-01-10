import { createSlice } from "@reduxjs/toolkit";
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        byId: {},
        allIds: []
    },
    reducers: {
        createCard(state, action) {
            const newCard = {
                id: action.payload.id,
                timeStamp: Date.now(),
                question: action.payload.question,
                answer: action.payload.answer,
                deck: action.payload.deckId
            }
            // console.log(" Hello from cardsSlice!!! New Card: ", newCard)
            state.byId[newCard.id] = newCard;
            state.allIds.push(newCard.id);

            return state
        },
        dirtyCardsReset() {
            return { byId: {}, allIds: [] }
        }

    }
})

const { actions, reducer } = cardsSlice
export const { createCard, dirtyCardsReset } = actions
export default reducer