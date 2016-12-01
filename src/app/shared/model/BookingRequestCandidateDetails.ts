'use strict';
import * as model from "./model"

export interface BookingRequestCandidateDetails {


    candidateId?: string;


    customFields?: model.CandidateCustomFields;


    candidateName?: model.BookingRequestCandidateDetailsCandidateName;


    contactInfo?: model.BookingRequestCandidateDetailsContactInfo;
}

