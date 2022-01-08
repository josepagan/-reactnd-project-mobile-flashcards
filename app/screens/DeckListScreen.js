import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

import ListItem from '../components/ListItem';



function DeckListScreen({ navigation }) {
    const decks = useSelector(state => state.decks)
    console.log("decks:", decks)
    return (
        <View style={styles.background}>
            <View style={{ flex: 4, backgroundColor: "white" }}>
                <Text>Probando que es gerundio</Text>
                <FlatList
                    data={decks.allIds}
                    keyExtractor={(item, index) => index.toString()}
                    // renderItem={({ item }) => <Text style={{ fontSize: 25 }}>{item}</Text>}
                    renderItem={({ item }) => <ListItem id={item} />}
                    numColumns={3}
                />
                <Text>fin de flatlist</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "pink" }}>
                <Button title='test' onPress={() => { navigation.navigate("New Deck") }} />
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