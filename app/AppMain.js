// import { NavigationContainer } from "@react-navigation/native";
import DeckListScreen from "./screens/DeckListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import NewDeckForm from "./screens/NewDeckScreen";
import IndividualDeckScreen from "./screens/IndividualDeckScreen";
import NewQuestionScreen from "./screens/NewQuestionScreen";
import QuizScreen from "./screens/QuizScreen";
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
            <Stack.Screen
                name={"Deck"}
                component={IndividualDeckScreen}
                options={({ route }) => ({ title: `Deck: ${route.params.name}` })}
            />
            <Stack.Screen
                name={"New Question"}
                component={NewQuestionScreen}
            // options={({ route }) => ({ title: `Deck: ${route.params.name}` })}
            />
            <Stack.Screen
                name={"Quiz"}
                component={QuizScreen}
            // options={({ route }) => ({ title: `Deck: ${route.params.name}` })}
            />

        </Stack.Navigator>
    );
}

export default AppMain;