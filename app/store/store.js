// import { combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import Reactotron from '../../ReactotronConfig';
const reactotronEnhacer = Reactotron.createEnhancer()

import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

// import App from './App'
import rootReducer from './reducers'

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
    //in theory i can concat here Reactotron enhancer but i get an obscure error, redux logger seems fine
})

export let persistor = persistStore(store)
// export default { store, persistor }
//this is not part of store it goes in app

// import { PersistGate } from 'redux-persist/integration/react'


// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// )