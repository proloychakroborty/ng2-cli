'use strict';
import * as model from "./model"

/**
 * cotains the available list of timeslots for the given date
 */
export interface TimeslotsForDate {


    date?: Date;


    timeslots?: Array<model.Timeslot>;
}

