import { View, Text } from "react-native";

export function GameOver({ score }) {
    return <>
        <View>
            <Text style={{ fontSize: 50 }}>Game Over</Text>
            <Text style={{ fontSize: 50 }}>Final Score: {score} </Text>

        </View>
    </>;
}