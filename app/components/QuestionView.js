import { View, Text, Button } from "react-native"

export function QuestionView({ question, setShowingAnser }) {
    return (
        <>
            <View style={{ flex: 7 }}>
                <Text style={{
                    fontSize: 30,
                    backgroundColor: "black",
                    color: "white",
                    paddingBottom: 20
                }}>Question:</Text>
                <Text style={{ fontSize: 30 }}>{question} </Text>
            </View>
            <View style={{ flex: 3 }}>
                <Button title="Show Answer" color={"green"} onPress={() => setShowingAnser(true)} />
            </View>
        </>
    )
}
