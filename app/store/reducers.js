import { combineReducers } from "@reduxjs/toolkit";

// import todos from './todos'
// import counter from './counter'
import decksReducer from './decksSlice'
import cardsReducer from './cardsSlice'

export default combineReducers({
    decks: decksReducer,
    cards: cardsReducer
})