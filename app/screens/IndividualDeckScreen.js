import { View, Button, Text } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";

const IndividualDeckScreen = ({ route, navigation }) => {
    const { deckId } = route.params
    const deck = useSelector(state => state.decks.byId[deckId])
    const { name, cards } = deck

    return (
        <>

            <View style={{ flex: 4, backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 150 }}>{cards.length}</Text>
                <Text style={{ color: "white", fontSize: 20 }}>Cards</Text>
            </View>

            <View style={{ flex: 2, backgroundColor: "white" }}>
                <Button title="Start Quiz" onPress={() => navigation.navigate("Quiz", { deckId })} />
                <Button title="Add New Question" onPress={() => navigation.navigate("New Question", { deckId })}></Button>

            </View>

        </>
    );
}

export default IndividualDeckScreen;