import { View, Text, Button } from "react-native";
export function AnswerView({ answer, handleAnswer }) {
  return (
    <>
      <View style={{ flex: 7 }}>
        <Text style={{
          fontSize: 30,
          backgroundColor: "black",
          color: "white",
          paddingBottom: 20
        }}>Answer:</Text>
        <Text style={{ fontSize: 30 }}>{answer}</Text>
      </View>
      <View style={{ flex: 3 }}>
        <Button title="CORRECT" onPress={() => handleAnswer("CORRECT")} />
        <View style={{ height: 50 }} />
        <Button
          title="INCORRECT"
          color={"red"}
          onPress={() => handleAnswer("INCORRECT")}
        />
      </View>
      <View style={{ minHeight: 50 }} />
    </>
  );
}

