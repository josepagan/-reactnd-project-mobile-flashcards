// import { NavigationContainer } from "@react-navigation/native";
import DeckListScreen from "./screens/DeckListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewDeckForm from "./screens/NewDeckScreen";
const Stack = createNativeStackNavigator()
const AppMain = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Decks"
                component={DeckListScreen}
                options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
                name={"New Deck"}
                component={NewDeckForm}
                options={{ animation: "slide_from_right" }}
            />

        </Stack.Navigator>
    );
}

export default AppMain;