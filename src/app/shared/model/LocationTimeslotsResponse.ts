'use strict';
import * as model from "./model"

/**
 * contains the available timeslots for the given location and for the given date range
 */
export interface LocationTimeslotsResponse {


    locationName?: string;


    dates?: Array<model.TimeslotsForDate>;


    timeZone?: string;


    locationId?: string;
}

