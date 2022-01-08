import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { createDeck } from "../store/decksSlice";
// import { TextInput } from "react-native-web";

const NewDeckForm = ({ navigation }) => {
    const [text, setText] = useState("");
    const handleTextChange = value => setText(value)
    const handleButton = () => {
        dispatch(createDeck(text));
        navigation.navigate("Decks")

    }
    const dispatch = useDispatch();

    return (
        <>
            <Text style={{ fontSize: 30 }}>Name of the new deck:</Text>
            <TextInput
                style={styles.input}
                onChangeText={handleTextChange}
                value={text}
                placeholder="..."
            />
            <Button title="ok" onPress={handleButton} />
        </>

    );
};
// const styles = StyleSheet.create({
//     container: { backgroundColor: "lightblue", flex: 1 }
// })
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 25
    },
});
export default NewDeckForm;