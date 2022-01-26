import { Button, Text, View, Switch, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { scheduleNotification, shutDownNotifications } from "../store/notificationSlice";
import { deleteAll } from "../store/decksSlice";


const Notifications = () => {
    const dispatch = useDispatch()
    const notifications = useSelector(state => state.notifications.scheduled)
    // const sorted = notifications.sort((a, b) => a.trigger.value - b.trigger.value)
    const mapped = notifications
        .map(el => el.trigger.value)
        .sort()
        .map(el => `${new Date(el).toDateString()} at ${new Date(el).getHours()} hours`)
    console.log("mapped", mapped)

    // const mapped = sorted.map(el => new Date(el.trigger.value).toDateString())
    // console.log("mapped", mapped)

    const [isEnabled, setIsEnabled] = useState(notifications.length ? true : false)


    const toggleSwitch = (switchValue) => {
        if (switchValue) {
            dispatch(scheduleNotification())
        }
        else {
            dispatch(shutDownNotifications())
        }
        setIsEnabled(previousState => !previousState)
    }

    return (
        <>
            <View>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>Notifications</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            {
                notifications.length
                    ? <Text>Next notification: {mapped[0]}</Text>
                    : <View>
                        <Text>Currently the notifications engine is off</Text>
                    </View>
            }
        </>
    )
}



export function CustomButton(props) {
    const { onPress, title } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});


const DeleteAll = () => {
    console.log("deleteAll", deleteAll())
    const dispatch = useDispatch();
    const handleButton = () => {
        console.log("button pressed")
        dispatch(deleteAll())

    }
    return (
        <>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Delete All</Text>
            <Text>Reset the app to default settings, all cards and decks will be deleted</Text>
            <CustomButton title="Delete All Data" onPress={handleButton} />


        </>
    )
}

const Settings = () => {
    return (
        <View style={{ backgroundColor: "#ededed", padding: 20 }}>

            <SettingsChild>
                <Notifications />
            </SettingsChild>
            <SettingsChild>
                <DeleteAll />
            </SettingsChild>

        </View>
    );
}

const SettingsChild = ({ children }) =>
    <View style={{
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    }}>{children}
    </View>


export default Settings;