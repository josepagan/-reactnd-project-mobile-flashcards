import { Button, Text, View, Switch, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { scheduleNotification, shutDownNotifications } from "../store/notificationSlice";
import { deleteAll } from "../store/decksSlice";
import { createSelector } from "@reduxjs/toolkit";

const notificationsSelector = createSelector(
    state => state.notifications.scheduled,
    notifications => notifications
        .map((el) => el.trigger.value)
        .sort()
        .map(
            (el) =>
                `${new Date(el).toDateString()} at ${new Date(el).getHours()} hours`
        )
)



const Notifications = () => {

    const dispatch = useDispatch();
    const notifications = useSelector(notificationsSelector)
    const [isEnabled, setIsEnabled] = useState(notifications.length ? true : false);

    const toggleSwitch = (switchValue) => {
        if (switchValue) {
            dispatch(scheduleNotification());
        } else {
            dispatch(shutDownNotifications());
        }
        setIsEnabled((previousState) => !previousState);
    };

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
            {notifications.length ? (
                <Text>Next notification: {notifications[0]}</Text>
            ) : (
                <View>
                    <Text>Currently the notifications engine is off</Text>
                </View>
            )}
        </>
    );



}

export default Notifications