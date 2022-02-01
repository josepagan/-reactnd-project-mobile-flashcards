import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import { createCard } from "../store/cardsSlice";

const NewQuestionScreen = ({ route }) => {
  const dispatch = useDispatch();
  const { deckId } = route.params;

  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const handleQuestionTextChange = (value) => setQuestionText(value);
  const handleAnswerTextChange = (value) => setAnswerText(value);

  const handleButton = () => {
    if (!answerText || !questionText) return;
    const cardPayload = {
      id: uuid(),
      question: questionText,
      answer: answerText,
      deckId,
    };
    dispatch(createCard(cardPayload));
    setQuestionText("");
    setAnswerText("");
  };

  return (
    <View style={{ backgroundColor: "lightgray" }}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={handleQuestionTextChange}
          value={questionText}
          placeholder="Question..."
          textAlignVertical="top"
          multiline={true}
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={handleAnswerTextChange}
          value={answerText}
          placeholder="Answer..."
          textAlignVertical="top"
          multiline={true}
        />
      </View>

      <View>
        <Button title="SAVE" onPress={handleButton} />
      </View>
      <View style={{ backgroundColor: "lightgray" }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 25,
    borderRadius: 10,
    backgroundColor: "white"
  },
});
export default NewQuestionScreen;

