'use strict';
import * as model from "./model"

/**
 * contains the candidate information required to create a registration in ATLAS as well as to create a booking.
 */
export interface BookingRequest {


    eligibilityEndDate?: string;


    eligibilityStartDate?: string;


    testPortions?: Array<model.PortionData>;


    applicationId?: string;


    clientId?: string;


    candidateDetails?: model.BookingRequestCandidateDetails;


    testId?: string;
}

