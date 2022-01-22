import { createSlice } from "@reduxjs/toolkit";
import { scheduleNotificationAsync } from "expo-notifications";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const scheduleNotification = createAsyncThunk("notifications/schedule", async (_, { getState }) => {
    //todo chnge notification timestamp to proper date, check only date, no time
    //if date is same as toda, schedule notification for tomorrow
    //if date is previous , schedule for today.
    const { hour, minute } = getState().notifications.time
    const trigger = new Date().setHours(hour, minute)
    const id = await scheduleNotificationAsync({
        content: {
            title: "Time to answer some questions",
            body: 'Quiz Time!'
        },
        trigger
    })
    return id
})





const notificationSlice = createSlice({
    name: 'notifications',
    initialState: {
        time: { hour: 20, minute: 0 },
        lastQuizTimestamp: null,
        scheduled: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(scheduleNotification.fulfilled, (state, action) => {
            state.scheduled.push(action.payload)
        })
    }
})


const { actions, reducer } = notificationSlice
// export const { } = actions
export default reducer