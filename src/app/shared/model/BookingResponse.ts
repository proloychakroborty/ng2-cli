'use strict';
import * as model from "./model"

/**
 * contains the booking confirmation information
 */
export interface BookingResponse {


    transactionId?: string;


    isConfirmed?: boolean;


    bookingDate?: string;


    csrUserName?: string;


    timeslotStartTime?: string;


    timeslotId?: string;


    applicationId?: string;


    locationId?: string;


    bookingId?: string;


    atlasRegnId?: string;


    examLength?: number;


    isReschedule?: boolean;


    isCancelled?: boolean;
}

