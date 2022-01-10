import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { useSelector } from "react-redux";

const ListItem = ({ deckId, navigation }) => {
    const deck = useSelector(state => state.decks.byId[deckId])
    // console.log("deck from ListItem", deck)
    // console.log("deckId from Listitem", deckId)
    const { name } = deck
    const cardsCount = deck.cards.length


    return (
        <>
            <TouchableHighlight onPress={() => navigation.navigate("Deck", { name, deckId })}
                style={{ flex: 1 / 3 }}
            >
                <View style={styles.top}>
                    <Text style={{ color: "white", paddingTop: 5, paddingLeft: 10 }}>{name}</Text>
                    <View style={styles.inner}>
                        <Text style={{ color: "white", fontSize: 50 }}>{cardsCount}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </>
    );
}
const styles = StyleSheet.create({
    top: {
        // width: 100,
        // height: 100,
        // flex: 1 / 3,
        flexDirection: "column",
        margin: 5,
        backgroundColor: "green",
        color: "white",
        borderRadius: 10

    },
    inner: {
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        fontSize: 30
    }
    // bottom: { flex: 1 }
})
export default ListItem;