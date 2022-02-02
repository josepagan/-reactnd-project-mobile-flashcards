import { createSlice } from "@reduxjs/toolkit";
import * as Notifications from 'expo-notifications';

import { createAsyncThunk } from "@reduxjs/toolkit";

export const scheduleNotification = createAsyncThunk("notifications/schedule", async (_, { getState, dispatch }) => {
    await Notifications.cancelAllScheduledNotificationsAsync()
    const { hour, minute } = getState().notifications.time
    const { lastQuizDate } = getState().notifications

    // const trigger = new Date().setHours(hour, minute, 0, 0)
    const trigger = new Date()
    trigger.setHours(hour, minute, 0, 0)

    const now = new Date()

    //IF the prefered quiz time was earlier today
    //OR we have already done a test today => update trigger to tomorrow

    if (now > trigger || now.toDateString() === lastQuizDate) {
        trigger.setDate(trigger.getDate() + 1)
    }


    for (let counter = 0; counter < 7; counter++) {

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Time to answer some questions",
                body: 'Quiz Time!'
            },
            trigger
        })
        trigger.setDate(trigger.getDate() + 1)

    }


    dispatch(getAllNotifications())
})


export const getAllNotifications = createAsyncThunk("notifications/getAll", async () => {
    return await Notifications.getAllScheduledNotificationsAsync()
})

export const shutDownNotifications = createAsyncThunk("notifications/shutDown", async () => {
    await Notifications.cancelAllScheduledNotificationsAsync()
})




const notificationSlice = createSlice({
    name: 'notifications',
    initialState: {
        time: { hour: 20, minute: 0 },
        lastQuizDate: null,
        active: false,
        scheduled: []
    },
    reducers: {
        quizGameOver(state) {
            const date = new Date()
            state.lastQuizDate = date.toDateString()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(scheduleNotification.fulfilled, (state, action) => {
            state.active = true
        })
        builder.addCase(getAllNotifications.fulfilled, (state, action) => {
            state.scheduled = action.payload
        })
        builder.addCase(shutDownNotifications.fulfilled, (state) => {
            state.scheduled = [];
            state.active = false;
        })
    }
})


const { actions, reducer } = notificationSlice
export const { quizGameOver } = actions
export default reducer