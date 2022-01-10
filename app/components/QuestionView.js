import { View, Text, Button } from "react-native"

export function QuestionView({ question, setShowingAnser }) {
    return (
        <>
            <View style={{ flex: 5 }}><Text style={{ fontSize: 30 }}>Question:</Text></View>
            <View style={{ flex: 5 }}><Text style={{ fontSize: 30 }}>{question} </Text></View>
            <View style={{ flex: 3 }}>
                <Button title="Show Answer" onPress={() => setShowingAnser(true)} />
            </View>
        </>
    )
}
