'use strict';
import * as model from "./model"

/**
 * An Atlas candidate testing event's details
 */
export interface TestingEventModel {


    dateTime?: Date;


    testCode?: string;


    endDate?: Date;


    accountName?: string;


    maxSeat?: number;


    eventTypeDesc?: string;


    acqRegnId?: string;


    enableSelfCheckin?: boolean;


    minusOffsetMinutes?: number;


    trainer?: number;


    eventName?: string;


    atoId?: number;


    invitationCode?: string;


    testName?: string;


    portionId?: Array<number>;


    sessionStartTime?: string;


    timeZone?: string;


    eventType?: string;


    plusOffsetMinutes?: number;


    userId?: number;


    dailyScheduleId?: number;


    accountId?: number;


    trainerName?: string;


    timeslotId?: string;


    testId?: number;


    location?: string;
}

