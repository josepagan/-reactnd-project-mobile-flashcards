import { Button, Text, View, Switch } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { scheduleNotification, shutDownNotifications } from "../store/notificationSlice";


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

const Settings = () => {
    return (
        <View style={{ backgroundColor: "#ededed", padding: 20 }}>
            <SettingsChild>
                <Notifications />
            </SettingsChild>

        </View>
    );
}

const SettingsChild = ({ children }) =>
    <View style={{
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20
    }}>{children}
    </View>


export default Settings;