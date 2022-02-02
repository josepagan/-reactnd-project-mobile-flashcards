import { View, Text, Button } from "react-native";

export function GameOver({ score, handleRestart }) {
    return (
        <>
            <View>
                <Text style={{ fontSize: 50 }}>Game Over</Text>
                <Text style={{ fontSize: 50, color: "navy" }}>Final Score: {score} </Text>
                <Button title="Restart Quiz" onPress={handleRestart} />
                <View style={{ height: 15 }} />
            </View>
        </>
    )
}