// import { NavigationContainer } from "@react-navigation/native";
import DeckListScreen from "./screens/DeckListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Pressable } from "react-native"
import NewDeckForm from "./screens/NewDeckScreen";
import IndividualDeckScreen from "./screens/IndividualDeckScreen";
import NewQuestionScreen from "./screens/NewQuestionScreen";
import QuizScreen from "./screens/QuizScreen";
import { Entypo } from '@expo/vector-icons';
import Settings from "./screens/Settings";
const Stack = createNativeStackNavigator()
const AppMain = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Decks"
                component={DeckListScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <Pressable onPress={() => { navigation.navigate("Settings") }}>
                            <Entypo name="cog" size={24} color="black" />
                        </Pressable>
                    )
                })}
            />
            <Stack.Screen
                name={"New Deck"}
                component={NewDeckForm}
                options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
                name={"Deck"}
                component={IndividualDeckScreen}
                options={({ route }) => ({ title: `Deck: ${route.params.name}`, animation: "slide_from_right" })}
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
            <Stack.Screen
                name={"Settings"}
                component={Settings}
            />

        </Stack.Navigator>
    );
}

export default AppMain;