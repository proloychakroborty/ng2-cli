'use strict';
import * as model from "./model"

/**
 * Contains the test center locations identified for the given test based on the given input criteria.
 */
export interface LocationSearchResponse {


    locations?: Array<model.Location>;


    dates?: Array<model.LocationsForDate>;
}

