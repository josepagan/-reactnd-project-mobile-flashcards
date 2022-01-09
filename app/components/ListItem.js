import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const ListItem = ({ id }) => {
    const item = useSelector(state => state.decks.byId[id])
    // console.log("item from ListItem", item)
    // console.log("id from Listitem", id)
    const { name } = item
    const cardsCount = item.cards.length


    return (
        <>
            <View style={styles.top}>
                <Text style={{ color: "white", paddingTop: 5, paddingLeft: 10 }}>{name}</Text>
                <View style={styles.inner}>
                    <Text style={{ color: "white", fontSize: 50 }}>{cardsCount}</Text>
                </View>
            </View>
            {/* <View style={styles.bottom}> */}

            {/* </View> */}
        </>
    );
}
const styles = StyleSheet.create({
    top: {
        // width: 100,
        // height: 100,
        flex: 1 / 3,
        flexDirection: "column",
        margin: 5,
        backgroundColor: "green",
        color: "white",
        borderRadius: 10

    },
    inner: {
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        fontSize: 30
    }
    // bottom: { flex: 1 }
})
export default ListItem;