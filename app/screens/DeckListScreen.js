import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import decks from '../_DATA';

const decksArray = Object.values(decks.byId)
function DeckListScreen(props) {
    const decks = useSelector(state => state.decks)
    console.log("decks:", decks)
    return (
        <View style={styles.background}>
            <View style={{ flex: 0.7, backgroundColor: "white" }}>
                <Text>Probando que es gerundio</Text>
                <FlatList
                    data={decksArray}
                    keyExtractor={deck => deck.deckId}
                    renderItem={({ item }) => <Text style={{ fontSize: 25 }}>{item.deckName}</Text>} />
                <Text>fin de flatlist</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "dodgerblue",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

    }
})




// const styles = StyleSheet.create({
//     app: {
//       paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//     }
//   })
export default DeckListScreen;