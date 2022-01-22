import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { scheduleNotification } from "../store/notificationSlice";


const Notifications = () => {
    const dispatch = useDispatch()

    const handleNotificationButton = () => {
        dispatch(scheduleNotification())
    }
    const notifications = useSelector(state => state.notifications.scheduled)
    console.log("notification selector", notifications)
    return (
        <View>
            {
                notifications.length
                    ? <Text>Notifications are truthy</Text>
                    : <View>
                        <Text>Currently the notifications engine is off</Text>
                        <Button title="Switch on" onPress={handleNotificationButton} />
                    </View>
            }
        </View>
    )
}

const Settings = () => {
    return (
        <View>
            <Text>Settings!!!</Text>
            <Text>Notifications</Text>
            <Notifications />
        </View>
    );
}

export default Settings;