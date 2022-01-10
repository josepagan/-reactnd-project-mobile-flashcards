import { View, Text, Button } from "react-native"
export function AnswerView({ answer, handleAnswer }) {

    return (<>
        <View style={{ flex: 5 }}><Text style={{ fontSize: 30 }}>Answer:</Text></View>
        <View style={{ flex: 5 }}><Text style={{ fontSize: 30 }}>{answer}</Text></View>
        <View style={{ flex: 3 }}>
            <Button title="Correct" onPress={() => handleAnswer("CORRECT")} />
        </View>
        <View style={{ flex: 3 }}>
            <Button title="Wrong" color={"red"} onPress={() => handleAnswer("WRONG")} />
        </View>
    </>)
}