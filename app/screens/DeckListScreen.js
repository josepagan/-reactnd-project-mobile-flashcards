import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  FlatList,
  Button,
} from "react-native";
import { useSelector } from "react-redux";

import ListItem from "../components/ListItem";

function DeckListScreen({ navigation }) {
  const decks = useSelector((state) => state.decks);
  return (
    <View style={styles.background}>
      <View style={{ flex: 4, backgroundColor: "white" }}>
        <FlatList
          data={decks.allIds}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <ListItem deckId={item} navigation={navigation} />
          )}
          numColumns={3}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "lightgray" }}>
        <Button
          title="create new Deck"
          onPress={() => {
            navigation.navigate("New Deck");
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "dodgerblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default DeckListScreen;
