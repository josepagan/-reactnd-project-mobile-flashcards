import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-get-random-values'
import { store, persistor } from './app/store/store';
import { NavigationContainer } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import NotificationModal from './app/components/NotificationModal';
import { useDispatch } from 'react-redux';
import AppMain from './app/AppMain';
import { getAllNotifications } from './app/store/notificationSlice';
// import { dirtyCardsReset } from './app/store/cardsSlice';
// import { dirtyDecksReset } from './app/store/decksSlice';



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});




export default function App() {
  // store.dispatch(dirtyCardsReset())
  // store.dispatch(dirtyDecksReset())

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppMain />
          {/* <NotificationModal notification={notification} /> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}


