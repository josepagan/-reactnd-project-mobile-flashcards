import { combineReducers } from "@reduxjs/toolkit";

// import todos from './todos'
// import counter from './counter'
import decksReducer from './decksSlice'
import cardsReducer from './cardsSlice'
import notificationsReducer from './notificationSlice'

export default combineReducers({
    decks: decksReducer,
    cards: cardsReducer,
    notifications: notificationsReducer
})