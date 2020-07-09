import React from "react";
import * as timeFunctions from "../Time";

export function hasTheScheduledStarted(actualProgress, desiredProgress) {
    if (actualProgress > desiredProgress)
    {
        return true;
    } else {
        return false;
    }
}

export function isTheScheduleTimeActiveNow(actualProgress, startTime, endTime) {
    if (hasTheScheduledStarted(actualProgress, startTime) && !(hasTheScheduledStarted(actualProgress, endTime))) {
        return true;
    } else {
        return false;
    }
}

export function hasTheScheduleOfTheDayPassed(actualProgress, endTime, todayDay) {
    if (hasTheScheduledStarted(actualProgress, endTime) && (todayDay == timeFunctions.getNowDateInYYYYMMDD()))
    {
        return true;
    }
        return false;
}

export function isTheScheduleActiveNow(actualProgress, startTime, endTime, todayDay) {
    if (isTheScheduleTimeActiveNow(actualProgress, startTime, endTime) && (todayDay == timeFunctions.getNowDateInYYYYMMDD())) {
        return true;
    }
    else {
        return false;
    }
}

export function isTheLastScheduleOfTheDay(schedules, actualSchedulePosition) {
    if ((schedules - 1) == actualSchedulePosition)
    {
        return true;
    } else {
        return false;
    }
}

export function doTheScheduleNeedToBeActive (actualProgress, startTime, endTime, todayDay, schedules, actualSchedulePosition) {
    if (isTheScheduleActiveNow(actualProgress, startTime, endTime, todayDay)) {
        return true;
    }
    else if (isTheLastScheduleOfTheDay(schedules, actualSchedulePosition)) {
        if (hasTheScheduledStarted(actualProgress, startTime) && (todayDay == timeFunctions.getNowDateInYYYYMMDD())) {
            return true;
        }
        else {
            return false;
        }
    }
}

export function doTheScheduleNeedToBeOnTheList(actualProgress, startTime, todayDay) {
    if (hasTheScheduleOfTheDayPassed(actualProgress, startTime, todayDay)) {
        return false;
    } else {
        return true;
    }
}