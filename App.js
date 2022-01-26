import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "react-native-get-random-values";
import { store, persistor } from "./app/store/store";
import { NavigationContainer } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import NotificationModal from "./app/components/NotificationModal";
import AppMain from "./app/AppMain";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppMain />
          {/* <NotificationModal notification={notification} /> */}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
