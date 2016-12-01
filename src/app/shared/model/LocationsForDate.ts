'use strict';
import * as model from "./model"

/**
 * contains the date and the list of available test center locations for that date
 */
export interface LocationsForDate {


    date?: Date;


    locations?: Array<string>;
}

