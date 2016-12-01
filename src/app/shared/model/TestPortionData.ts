'use strict';
import * as model from "./model"

/**
 * contains the tes and portion details along with extended time (if any) for the reschedule endpoint request
 */
export interface TestPortionData {


    testPortions?: Array<model.PortionData>;


    testId?: string;
}

