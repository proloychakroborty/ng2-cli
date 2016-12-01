import { Http, Headers, RequestOptionsArgs, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as model from "../model/model.d";

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class BookingService {
    protected basePath = 'https://apidevaapi.psiexams.com/atlasApi/1.0.9';
    public defaultHeaders: Headers = new Headers();

    constructor(protected http: Http) {

    }

    /**
     * Web service endpoint to cancel existing booking specified by booking_id
     * This web service endpoint cancels the existing booking specified by booking_id.
     * @param bookingId Defines the booking_id, a unique identifier for the candidate booking made for a test onto a specific timeslot.
     * @param performedByUser Name of the user performing this operation. Used for auditing purpose.
     * @param cancelAtlasRegn Optional boolean parameter to specify if the ATLAS registration record associated with the given booking_id can be cancelled along with booking record cancellation.
     */
    public cancelBooking(bookingId: string, performedByUser: string, cancelAtlasRegn?: boolean, extraHttpRequestParams?: any): Observable<model.BookingResponse> {
        const path = this.basePath + '/bookings/{booking_id}'
            .replace('{' + 'booking_id' + '}', String(bookingId));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'bookingId' is set
        if (!bookingId) {
            throw new Error('Missing required parameter bookingId when calling cancelBooking');
        }
        // verify required parameter 'performedByUser' is set
        if (!performedByUser) {
            throw new Error('Missing required parameter performedByUser when calling cancelBooking');
        }
        if (performedByUser !== undefined) {
            queryParameters['performed_by_user'] = performedByUser;
        }

        if (cancelAtlasRegn !== undefined) {
            queryParameters['cancel_atlas_regn'] = cancelAtlasRegn;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to confirm the booking which is onhold due to payment
     * This web service endpoint will confirm the booking specified by the input parameter \&quot;booking_id\&quot; which is onhold due to payment.
     * @param bookingId Defines the booking_id, a unique identifier for the candidate booking made for a test.
     * @param performedByUser Name of the user performing this operation. Used for auditing purpose.
     * @param payload Request Body
     */
    public confirmBooking(bookingId: string, performedByUser: string, payload?: model.CandidateCustomFields, extraHttpRequestParams?: any): Observable<model.BookingResponse> {
        const path = this.basePath + '/bookings/confirm/{booking_id}'
            .replace('{' + 'booking_id' + '}', String(bookingId));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'bookingId' is set
        if (!bookingId) {
            throw new Error('Missing required parameter bookingId when calling confirmBooking');
        }
        // verify required parameter 'performedByUser' is set
        if (!performedByUser) {
            throw new Error('Missing required parameter performedByUser when calling confirmBooking');
        }
        if (performedByUser !== undefined) {
            queryParameters['performed_by_user'] = performedByUser;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(payload);

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to create a booking onto the timeslot_id with a new registration for the candidate specified in the body.
     * This web service endpoint create a booking with a new registration for the candidate specified in the body.\n\nThe query param \&quot;performed_by_user\&quot; will be used for logging an entry into the audit logs.\n\nInput JSON Format:\n{\n\t\&quot;client_id\&quot;: \&quot;610\&quot;,\n\t\&quot;application_id\&quot;: \&quot;AMP1234\&quot;,\n\t\&quot;test_id\&quot;: \&quot;21561\&quot;,\n\t\&quot;test_portions\&quot;: [{\n\t\t\&quot;portion_code\&quot;: \&quot;1406\&quot;,\n\t\t\&quot;ext_time\&quot;: 0\n\t}],\t\n\t\&quot;eligibility_start_date\&quot;: \&quot;2016-04-01T00:00:00Z\&quot;,\n\t\&quot;eligibility_end_date\&quot;: \&quot;2017-03-31T23:59:59Z\&quot;,\n\t\&quot;candidate_details\&quot;: {\n\t\t\&quot;candidate_id\&quot;: \&quot;201661610\&quot;,\n\t\t\&quot;candidate_name\&quot;: {\n\t\t\t\&quot;last_name\&quot;: \&quot;N\&quot;,\n\t\t\t\&quot;first_name\&quot;: \&quot;Seshu\&quot;,\n\t\t\t\&quot;middle_name\&quot;: \&quot;\&quot;\n\t\t},\n\t\t\&quot;contact-info\&quot;: {\n\t\t\t\&quot;address1\&quot;: \&quot;123\&quot;,\n\t\t\t\&quot;address2\&quot;: \&quot;1234\&quot;,\n\t\t\t\&quot;city\&quot;: \&quot;SACRAMENTO\&quot;,\n\t\t\t\&quot;state\&quot;: \&quot;CA\&quot;,\n\t\t\t\&quot;state_other\&quot;: \&quot;\&quot;,\n\t\t\t\&quot;zip\&quot;: \&quot;12345\&quot;,\n\t\t\t\&quot;country\&quot;: \&quot;USA\&quot;,\n\t\t\t\&quot;phone\&quot;: \&quot;1231231234\&quot;,\n\t\t\t\&quot;email\&quot;: \&quot;candidate1@psionline.com\&quot;\n\t\t}\n\t}\n}\n\nOutput JSON Format:\n{\n  \&quot;is_reschedule\&quot;: false,\n  \&quot;atlas_regn_id\&quot;: \&quot;ZC8F9AQR\&quot;,\n  \&quot;timeslot_start_time\&quot;: \&quot;2016-06-24T13:30:00.000Z\&quot;,\n  \&quot;exam_length\&quot;: 120,\n  \&quot;booking_id\&quot;: \&quot;YAQSAAC7\&quot;,\n  \&quot;booking_date\&quot;: \&quot;2016-06-24T00:00:00.000Z\&quot;,\n  \&quot;timeslot_id\&quot;: \&quot;TPVRH5D2\&quot;,\n  \&quot;application_id\&quot;: \&quot;AMP1234\&quot;,\n  \&quot;csr_user_name\&quot;: \&quot;seshu\&quot;,\n  \&quot;transaction_id\&quot;: \&quot;1743a278-fe52-44be-a354-5e6d54ebc98a\&quot;,\n  \&quot;location_id\&quot;: \&quot;HYSARMXS\&quot;\n}
     * @param timeslotId Defines the timeslot_id, a unique identifier for the timeslot defined by PSI. 
     * @param payload Request Body
     * @param performedByUser Name of the user performing this operation. Used for auditing purpose.
     * @param bookingOnHold To create a booking as a confirmed booking or reserved (on hold). Default value is \&quot;false\&quot;. When \&quot;true\&quot;, this endpoint will create a booking with onHold status/flag.
     */
    public createBooking(timeslotId: string, payload: model.BookingRequest, performedByUser: string, bookingOnHold?: boolean, extraHttpRequestParams?: any): Observable<model.BookingResponse> {
        const path = this.basePath + '/bookings';

        let queryParameters: any = { clone: function () { } }; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'timeslotId' is set
        if (!timeslotId) {
            throw new Error('Missing required parameter timeslotId when calling createBooking');
        }
        // verify required parameter 'payload' is set
        if (!payload) {
            throw new Error('Missing required parameter payload when calling createBooking');
        }
        // verify required parameter 'performedByUser' is set
        if (!performedByUser) {
            throw new Error('Missing required parameter performedByUser when calling createBooking');
        }
        if (timeslotId !== undefined) {
            queryParameters['timeslot_id'] = timeslotId;
        }

        if (performedByUser !== undefined) {
            queryParameters['performed_by_user'] = performedByUser;
        }

        if (bookingOnHold !== undefined) {
            queryParameters['booking_on_hold'] = bookingOnHold;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(payload);

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to create a booking onto the timeslot specified by timeslot_id for a candidate with an existing registration specified by atlas regn_id.
     * This web service endpoint, creates a new booking onto the timeslot specified by timeslot_id for a candidate with an existing registration with REG APPROVED or SCHEDULE_CANCELLED status  specified by regn_id. The regn_id is a unique identifier defined by the PSI client or PSI delivery partner and passed to the endpoint to identify an existing candidate record.\n\nOutput JSON Format:\n{\n\t\&quot;error_code\&quot;: \&quot;\&quot;,\n\t\&quot;error_message\&quot;: \&quot;\&quot;,\n\t\&quot;data\&quot;: {\n\t\t\&quot;booking_id\&quot;: \&quot;APPCONF4567\&quot;,\n\t\t\&quot;application_id\&quot;: \&quot;AMP1234\&quot;,\n\t\t\&quot;location_id\&quot;: \&quot;5045\&quot;,\n\t\t\&quot;timeslot_id\&quot;: \&quot;121290\&quot;,\n\t\t\&quot;booking_date\&quot;: \&quot;2016-04-02&#39;T&#39;14:30:59Z\&quot;,\n\t\t\&quot;timeslot_start_time\&quot;: \&quot;1430\&quot;,\n\t\t\&quot;exam_length\&quot;: \&quot;240\&quot;,\n\t\t\&quot;is_reschedule\&quot;: \&quot;false\&quot;,\n\t\t\&quot;csr-user-name\&quot;: \&quot;Seshu\&quot;,\n\t\t\&quot;transaction_id\&quot;: \&quot;201603111451000\&quot;,\n\t}\n}
     * @param timeslotId Defines the timeslot_id, a unique identifier for the timeslot defined by PSI.
     * @param regnId Specifies the regn_id, a unique identifier for the candidate registration record in ATLAS/LC System.
     * @param performedByUser Name of the user performing this operation. Used for auditing purpose.
     * @param payload Request Body
     * @param bookingOnHold To create a booking as a confirmed booking or reserved (on hold). Default value is \&quot;false\&quot;. When \&quot;true\&quot;, this endpoint will create a booking with onHold status/flag.
     */
    public createBookingForExistingRegn(timeslotId: string, regnId: string, performedByUser: string, payload?: model.TestPortionData, bookingOnHold?: boolean, extraHttpRequestParams?: any): Observable<model.BookingResponse> {
        const path = this.basePath + '/bookings/{timeslot_id}/registrations/{regn_id}'
            .replace('{' + 'timeslot_id' + '}', String(timeslotId))
            .replace('{' + 'regn_id' + '}', String(regnId));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'timeslotId' is set
        if (!timeslotId) {
            throw new Error('Missing required parameter timeslotId when calling createBookingForExistingRegn');
        }
        // verify required parameter 'regnId' is set
        if (!regnId) {
            throw new Error('Missing required parameter regnId when calling createBookingForExistingRegn');
        }
        // verify required parameter 'performedByUser' is set
        if (!performedByUser) {
            throw new Error('Missing required parameter performedByUser when calling createBookingForExistingRegn');
        }
        if (performedByUser !== undefined) {
            queryParameters['performed_by_user'] = performedByUser;
        }

        if (bookingOnHold !== undefined) {
            queryParameters['booking_on_hold'] = bookingOnHold;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(payload);

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to create a booking based on the invitation code provided.
     * This web service endpoint will create a booking for the candidate details specified in the request body into the Location and Location Timeslot associated with the given invitation code.
     * @param invitationCode Invitation_code, a unique identifier which is  associated to a Testing Event.
     * @param payload Request Body
     * @param performedByUser Name of the user performing this operation. Used for auditing purpose.
     */
    public createBookingForTestingEvent(invitationCode: string, payload: model.BookingRequestCandidateDetails, performedByUser: string, extraHttpRequestParams?: any): Observable<model.BookingResponse> {
        const path = this.basePath + '/invitations/{invitation_code}'
            .replace('{' + 'invitation_code' + '}', String(invitationCode));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'invitationCode' is set
        if (!invitationCode) {
            throw new Error('Missing required parameter invitationCode when calling createBookingForTestingEvent');
        }
        // verify required parameter 'payload' is set
        if (!payload) {
            throw new Error('Missing required parameter payload when calling createBookingForTestingEvent');
        }
        // verify required parameter 'performedByUser' is set
        if (!performedByUser) {
            throw new Error('Missing required parameter performedByUser when calling createBookingForTestingEvent');
        }
        if (performedByUser !== undefined) {
            queryParameters['performed_by_user'] = performedByUser;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(payload);

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to create booking in ATLAS into the web delivery location for the given date and time.
     * This web service endpoint will create a booking for the candidate details provided in the request body into the global web delivery test center at on the date and time specified by the request parameter \&quot;booking_datetime\&quot;
     * @param locationId Unique location id of the Global Web delivery test center in ATLAS
     * @param payload Request Body
     * @param bookingDatetime ISO 8601 formatted date and time, at which the booking to be created.
     */
    public createBookingForWebDelivery(locationId: string, payload: model.BookingRequest, bookingDatetime: string, extraHttpRequestParams?: any): Observable<model.BookingResponse> {
        const path = this.basePath + '/webdeliveries/{location_id}'
            .replace('{' + 'location_id' + '}', String(locationId));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'locationId' is set
        if (!locationId) {
            throw new Error('Missing required parameter locationId when calling createBookingForWebDelivery');
        }
        // verify required parameter 'payload' is set
        if (!payload) {
            throw new Error('Missing required parameter payload when calling createBookingForWebDelivery');
        }
        // verify required parameter 'bookingDatetime' is set
        if (!bookingDatetime) {
            throw new Error('Missing required parameter bookingDatetime when calling createBookingForWebDelivery');
        }
        if (bookingDatetime !== undefined) {
            queryParameters['booking_datetime'] = bookingDatetime;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(payload);

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to retrive the associated locations for the given test based on the input criteria.
     * This web service endpoint returns the locations where the given test can be delivered. \n\nProvide the values for required parameters \&quot;start_date\&quot; and \&quot;end_date\&quot; query parameters to  filter the locations based on availability with in the given date range. \n\nProvide the values for \&quot;zip\&quot; or (\&quot;city\&quot; and \&quot;state\&quot;) to calculate the distance in miles for each location from the specified \&quot;zip\&quot; or \&quot;city\&quot;.\n\nUsage of \&quot;sort\&quot; parameter: TBD\n\nUsage of \&quot;ext_time\&quot; parameter: TBD.\n \nOutput JSON format:\n\nWhen show_dates flag is false:\n{\n  \&quot;dates\&quot;: [],\n  \&quot;locations\&quot;: [\n    {\n      \&quot;location_id\&quot;: \&quot;Z4BVL35A\&quot;,\n      \&quot;location_name\&quot;: \&quot;ACN Bench\&quot;,\n      \&quot;address1\&quot;: \&quot;18000 W 105th St\&quot;,\n      \&quot;address2\&quot;: \&quot;ACN Bench\&quot;,\n      \&quot;address3\&quot;: \&quot;\&quot;,\n      \&quot;address4\&quot;: \&quot;\&quot;,\n      \&quot;city\&quot;: \&quot;Olathe\&quot;,\n      \&quot;state\&quot;: \&quot;Kansas\&quot;,\n      \&quot;zip\&quot;: \&quot;66061\&quot;,\n      \&quot;country\&quot;: \&quot;USA\&quot;,\n      \&quot;latitude\&quot;: 38.8932,\n      \&quot;longitude\&quot;: -94.8713,\n      \&quot;time_zone\&quot;: \&quot;GMT-6 Central Time\&quot;,\n      \&quot;is_ada\&quot;: \&quot;false\&quot;,\n      \&quot;property_type\&quot;: \&quot;AMP Owned\&quot;,\n      \&quot;directions\&quot;: \&quot;\&quot;,\n      \&quot;distance\&quot;: 1340.8,\n      \&quot;distance_unit\&quot;: \&quot;MI\&quot;,\n      \&quot;first_available_date\&quot;: \&quot;2016-06-20T00:00:00.000Z\&quot;\n    },\n    {\n      \&quot;location_id\&quot;: \&quot;HYSARMXS\&quot;,\n      \&quot;location_name\&quot;: \&quot;Atlanta (Marietta), Georgia\&quot;,\n      \&quot;address1\&quot;: \&quot;2100 Roswell Road NE\&quot;,\n      \&quot;address2\&quot;: \&quot;Pavillions at East Lake, Suite 2128\&quot;,\n      \&quot;address3\&quot;: \&quot;\&quot;,\n      \&quot;address4\&quot;: \&quot;\&quot;,\n      \&quot;city\&quot;: \&quot;Marietta\&quot;,\n      \&quot;state\&quot;: \&quot;Georgia\&quot;,\n      \&quot;zip\&quot;: \&quot;30062\&quot;,\n      \&quot;country\&quot;: \&quot;USA\&quot;,\n      \&quot;latitude\&quot;: 33.9659,\n      \&quot;longitude\&quot;: -84.4917,\n      \&quot;time_zone\&quot;: \&quot;GMT-5 Eastern Time\&quot;,\n      \&quot;is_ada\&quot;: \&quot;false\&quot;,\n      \&quot;property_type\&quot;: \&quot;AMP Owned\&quot;,\n      \&quot;directions\&quot;: \&quot;EXIT 1-75 AT NORTH MARIETTA PARKWAY (LOOP 120/ EXIT #263).  DRIVE APPROX. 1 1/2 MILES TO THE ROSWELL RD. EXIT AND TURN EAST FOR ONE ADDITIONAL MILE.\&quot;,\n      \&quot;distance\&quot;: 1930.7,\n      \&quot;distance_unit\&quot;: \&quot;MI\&quot;,\n      \&quot;first_available_date\&quot;: \&quot;2016-06-20T00:00:00.000Z\&quot;\n    }\n  ]\n}\n\nWhen show_dates flag is true:\n{\n  \&quot;dates\&quot;: [\n    {\n      \&quot;date\&quot;: \&quot;2016-06-20T00:00:00.000Z\&quot;,\n      \&quot;locations\&quot;: [\n        \&quot;Z4BVL35A\&quot;,\n        \&quot;HYSARMXS\&quot;\n      ]\n    },\n    {\n      \&quot;date\&quot;: \&quot;2016-06-21T00:00:00.000Z\&quot;,\n      \&quot;locations\&quot;: [\n        \&quot;Z4BVL35A\&quot;,\n        \&quot;HYSARMXS\&quot;\n      ]\n    },\n    {\n      \&quot;date\&quot;: \&quot;2016-06-22T00:00:00.000Z\&quot;,\n      \&quot;locations\&quot;: [\n        \&quot;Z4BVL35A\&quot;,\n        \&quot;HYSARMXS\&quot;\n      ]\n    },\n    {\n      \&quot;date\&quot;: \&quot;2016-06-23T00:00:00.000Z\&quot;,\n      \&quot;locations\&quot;: [\n        \&quot;Z4BVL35A\&quot;,\n        \&quot;HYSARMXS\&quot;\n      ]\n    },\n    {\n      \&quot;date\&quot;: \&quot;2016-06-24T00:00:00.000Z\&quot;,\n      \&quot;locations\&quot;: [\n        \&quot;Z4BVL35A\&quot;,\n        \&quot;HYSARMXS\&quot;\n      ]\n    }\n  ],\n  \&quot;locations\&quot;: [\n    {\n      \&quot;location_id\&quot;: \&quot;Z4BVL35A\&quot;,\n      \&quot;location_name\&quot;: \&quot;ACN Bench\&quot;,\n      \&quot;address1\&quot;: \&quot;18000 W 105th St\&quot;,\n      \&quot;address2\&quot;: \&quot;ACN Bench\&quot;,\n      \&quot;address3\&quot;: \&quot;\&quot;,\n      \&quot;address4\&quot;: \&quot;\&quot;,\n      \&quot;city\&quot;: \&quot;Olathe\&quot;,\n      \&quot;state\&quot;: \&quot;Kansas\&quot;,\n      \&quot;zip\&quot;: \&quot;66061\&quot;,\n      \&quot;country\&quot;: \&quot;USA\&quot;,\n      \&quot;latitude\&quot;: 38.8932,\n      \&quot;longitude\&quot;: -94.8713,\n      \&quot;time_zone\&quot;: \&quot;GMT-6 Central Time\&quot;,\n      \&quot;is_ada\&quot;: \&quot;false\&quot;,\n      \&quot;property_type\&quot;: \&quot;AMP Owned\&quot;,\n      \&quot;directions\&quot;: \&quot;\&quot;,\n      \&quot;distance\&quot;: 1340.8,\n      \&quot;distance_unit\&quot;: \&quot;MI\&quot;,\n      \&quot;first_available_date\&quot;: \&quot;2016-06-20T00:00:00.000Z\&quot;\n    },\n    {\n      \&quot;location_id\&quot;: \&quot;HYSARMXS\&quot;,\n      \&quot;location_name\&quot;: \&quot;Atlanta (Marietta), Georgia\&quot;,\n      \&quot;address1\&quot;: \&quot;2100 Roswell Road NE\&quot;,\n      \&quot;address2\&quot;: \&quot;Pavillions at East Lake, Suite 2128\&quot;,\n      \&quot;address3\&quot;: \&quot;\&quot;,\n      \&quot;address4\&quot;: \&quot;\&quot;,\n      \&quot;city\&quot;: \&quot;Marietta\&quot;,\n      \&quot;state\&quot;: \&quot;Georgia\&quot;,\n      \&quot;zip\&quot;: \&quot;30062\&quot;,\n      \&quot;country\&quot;: \&quot;USA\&quot;,\n      \&quot;latitude\&quot;: 33.9659,\n      \&quot;longitude\&quot;: -84.4917,\n      \&quot;time_zone\&quot;: \&quot;GMT-5 Eastern Time\&quot;,\n      \&quot;is_ada\&quot;: \&quot;false\&quot;,\n      \&quot;property_type\&quot;: \&quot;AMP Owned\&quot;,\n      \&quot;directions\&quot;: \&quot;EXIT 1-75 AT NORTH MARIETTA PARKWAY (LOOP 120/ EXIT #263).  DRIVE APPROX. 1 1/2 MILES TO THE ROSWELL RD. EXIT AND TURN EAST FOR ONE ADDITIONAL MILE.\&quot;,\n      \&quot;distance\&quot;: 1930.7,\n      \&quot;distance_unit\&quot;: \&quot;MI\&quot;,\n      \&quot;first_available_date\&quot;: \&quot;2016-06-20T00:00:00.000Z\&quot;\n    }\n  ]\n}
     * @param testId Specifies the unique identifier for the test as defined by the PSI Client or PSI delivery partner.
     * @param startDate Defines the start_date in ISO 8601 format to filter the locations. 
     * @param endDate Defines the end_date in ISO 8601 format to filter the locations. 
     * @param examLength Defines the length of the exam for which system needs to identify the locations and timeslots. This is the total combined duration of one or more portions for whcih the user is trying to perform the booking. It does not incldue the additional ADA minutes.
     * @param country Defines the country in which the locations to be returned.
     * @param zip Defines the zip code of the target location. If provided, a relative distance in miles will be calculated from this zip code to each returned location.
     * @param city Defines the city of the target location. If provided, a relative distance in miles will be calculated from this city to each returned location.
     * @param sort Defines the sort parameter on which the returned locations to be sorted.
     * @param extTime Defines the ext_time in minutes to be considered while retrieving the location availability.
     * @param isAda A flag that specifies if the user is trying to find out the locations that are designated for ADA test delivery. Default value is false. If true, the locations that are designated with only ADA delivery will be returned.
     * @param state Defines the state code. This parameter in combination with \&quot;city\&quot; parameter value, will return distance of each locations from the specified \&quot;zip\&quot; location or from the location identified in combination of both City and State.
     * @param maxNoOfLocations Defines the maximum number of locations to be returned. Default value is 15.
     * @param showDates Defines an optional boolean parameter, when true, the available locations for each date in the date range will be returned. 
     * @param searchRadius Defines the search radius to search and locate the test center locations. If none provided use the default value \&quot;100\&quot;
     * @param searchRadiusUnit Defines the measurement unit for the search_radius parameter. Possible values are for Kilometers, \&quot;KM\&quot; and for Miles \&quot;MI\&quot;. Default value \&quot;MI\&quot;
     * @param calculateDistance A boolean optional parameter to specify whether the distance need to be calculated for each location from the given zip or city and state. Default value is \&quot;True\&quot; if none provided.
     */
    public getLocationsAndDatesForATest(testId: string, startDate: string, endDate: string, examLength: number, country: string, zip?: string, city?: string, sort?: string, extTime?: number, isAda?: boolean, state?: string, maxNoOfLocations?: number, showDates?: boolean, searchRadius?: number, searchRadiusUnit?: string, calculateDistance?: boolean, extraHttpRequestParams?: any): Observable<model.LocationSearchResponse> {
        const path = this.basePath + '/tests/{test_id}/locations'
            .replace('{' + 'test_id' + '}', String(testId));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'testId' is set
        if (!testId) {
            throw new Error('Missing required parameter testId when calling getLocationsAndDatesForATest');
        }
        // verify required parameter 'startDate' is set
        if (!startDate) {
            throw new Error('Missing required parameter startDate when calling getLocationsAndDatesForATest');
        }
        // verify required parameter 'endDate' is set
        if (!endDate) {
            throw new Error('Missing required parameter endDate when calling getLocationsAndDatesForATest');
        }
        // verify required parameter 'examLength' is set
        if (!examLength) {
            throw new Error('Missing required parameter examLength when calling getLocationsAndDatesForATest');
        }
        // verify required parameter 'country' is set
        if (!country) {
            throw new Error('Missing required parameter country when calling getLocationsAndDatesForATest');
        }
        if (startDate !== undefined) {
            queryParameters['start_date'] = startDate;
        }

        if (endDate !== undefined) {
            queryParameters['end_date'] = endDate;
        }

        if (zip !== undefined) {
            queryParameters['zip'] = zip;
        }

        if (city !== undefined) {
            queryParameters['city'] = city;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        if (extTime !== undefined) {
            queryParameters['ext_time'] = extTime;
        }

        if (examLength !== undefined) {
            queryParameters['exam_length'] = examLength;
        }

        if (isAda !== undefined) {
            queryParameters['is_ada'] = isAda;
        }

        if (state !== undefined) {
            queryParameters['state'] = state;
        }

        if (maxNoOfLocations !== undefined) {
            queryParameters['max_no_of_locations'] = maxNoOfLocations;
        }

        if (country !== undefined) {
            queryParameters['country'] = country;
        }

        if (showDates !== undefined) {
            queryParameters['show_dates'] = showDates;
        }

        if (searchRadius !== undefined) {
            queryParameters['search_radius'] = searchRadius;
        }

        if (searchRadiusUnit !== undefined) {
            queryParameters['search_radius_unit'] = searchRadiusUnit;
        }

        if (calculateDistance !== undefined) {
            queryParameters['calculate_distance'] = calculateDistance;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to return the suggestions for the geo locations within USA/CANADA based on input criteria.
     * This web service end point returns the identified geo locations with in USA/CANADA based on the zip or city provided in the input criteria in JSON format.\n\nOutput JSON Format when a zip code is provided for the query parameter \&quot;query\&quot;:\n{\n  \&quot;geo_locations\&quot;: [\n    \&quot;66002,Atchison,KS,USA\&quot;,\n    \&quot;66002,Potter,KS,USA\&quot;,\n    \&quot;66006,Baldwin,KS,USA\&quot;,\n    \&quot;66006,Baldwin City,KS,USA\&quot;,\n    \&quot;66007,Basehor,KS,USA\&quot;,\n    \&quot;66008,Bendena,KS,USA\&quot;,\n    \&quot;66010,Blue Mound,KS,USA\&quot;,\n    \&quot;66012,Basehor,KS,USA\&quot;,\n    \&quot;66012,Bonner Springs,KS,USA\&quot;,\n    \&quot;66012,Lake of the Forest,KS,USA\&quot;\n  ]\n}\n\nOutput JSON format when a city name is provided as a value for the query parameter \&quot;query\&quot;:\n\n{\n  \&quot;geo_locations\&quot;: [\n    \&quot;83657,Ola,ID,USA\&quot;,\n    \&quot;57325,Ola,SD,USA\&quot;,\n    \&quot;72853,Ola,AR,USA\&quot;,\n    \&quot;29843,Olar,SC,USA\&quot;,\n    \&quot;81425,Olathe,CO,USA\&quot;,\n    \&quot;98359,Olalla,WA,USA\&quot;,\n    \&quot;04418,Olamon,ME,USA\&quot;,\n    \&quot;16863,Olanta,PA,USA\&quot;,\n    \&quot;29114,Olanta,SC,USA\&quot;,\n    \&quot;42361,Olaton,KY,USA\&quot;\n  ]\n}
     * @param country Country Name for which the geo locations to be identified based on the given zip or city. Currently this service will support identifying the geo locations with in USA or CANADA.
     * @param query Defines the query parameter to be specified by the user while calling this endpoint. Value for this query parameter can be a zip or a first few characters of a city. This parameter value should have a minimum length of 2 chars.
     * @param noOfSuggestions Defines the number of suggestions to be retrieved for the given input criteria. Default value is 10 (if none provided).
     * @param sort Defines the field on which sorting has to be done for the identified geo locations. Possible values \&quot;zip\&quot; or \&quot;city\&quot;. Prefix with +/- to specify the ascending or descending order of sort. For ex. specify +zip to get the suggestions sorted in ascending order of zip.
     */
    public getSuggestionsForGeoLocation(country: string, query: string, noOfSuggestions?: number, sort?: string, extraHttpRequestParams?: any): Observable<model.GeoData> {
        const path = this.basePath + '/autocomplete/geo_locations/{country}'
            .replace('{' + 'country' + '}', String(country));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'country' is set
        if (!country) {
            throw new Error('Missing required parameter country when calling getSuggestionsForGeoLocation');
        }
        // verify required parameter 'query' is set
        if (!query) {
            throw new Error('Missing required parameter query when calling getSuggestionsForGeoLocation');
        }
        if (noOfSuggestions !== undefined) {
            queryParameters['no_of_suggestions'] = noOfSuggestions;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        if (query !== undefined) {
            queryParameters['query'] = query;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Get Test Center Locations that are associated to the given test
     * This web service endpoint is implemented to return the test center location that are associated to the given test with in the given country.\n\nNotes:\n1.\tIf the values for none of the query params are provided, then system will return the first 15 test centers for the given country ordered by subdivision code and then by name.\n\n2.\tIf all the query params are provided, then system will consider only the zip code and return the test centers near to the given zip code ordered by the distance.\n\n3. If subdivision code is provided and zip is not provided, then sustem will return the test center locations that are associated for the given test with in the given country and subdivision code ordered by Subdivision and then by name.\n
     * @param testId Specifies the unique identifier for the test as defined by the PSI Client or PSI delivery partner.
     * @param countryCode Defines the ISO 3166 standard 2 letter country code in which the locations to be returned.
     * @param subdivisionCode Defines the ISO 3166 standard 2 letter state or subdivison code that exists in the country specified by country_code
     * @param zip Defines the zip code of the target location. If provided, a relative distance in miles will be calculated from this zip code to each returned location.
     * @param noOfLocations Defines the maximum number of locations to be returned. Default value is 15.
     */
    public getTestCentersForTest(testId: string, countryCode: string, subdivisionCode?: string, zip?: string, noOfLocations?: number, extraHttpRequestParams?: any): Observable<model.LocationSearchResponse> {
        const path = this.basePath + '/testconfig/{test_id}/locations/{country_code}'
            .replace('{' + 'test_id' + '}', String(testId))
            .replace('{' + 'country_code' + '}', String(countryCode));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'testId' is set
        if (!testId) {
            throw new Error('Missing required parameter testId when calling getTestCentersForTest');
        }
        // verify required parameter 'countryCode' is set
        if (!countryCode) {
            throw new Error('Missing required parameter countryCode when calling getTestCentersForTest');
        }
        if (subdivisionCode !== undefined) {
            queryParameters['subdivision_code'] = subdivisionCode;
        }

        if (zip !== undefined) {
            queryParameters['zip'] = zip;
        }

        if (noOfLocations !== undefined) {
            queryParameters['no_of_locations'] = noOfLocations;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Retrieves an testing event based on it&#39;s invitation code.
     * Call the endoint using an existing invitation code to the get it&#39;s relevant details.
     * @param invitationCode The invitation code
     */
    public getTestingEventDetails(invitationCode: string, extraHttpRequestParams?: any): Observable<model.TestingEventModel> {
        const path = this.basePath + '/invitations/{invitation_code}'
            .replace('{' + 'invitation_code' + '}', String(invitationCode));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'invitationCode' is set
        if (!invitationCode) {
            throw new Error('Missing required parameter invitationCode when calling getTestingEventDetails');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to retrieve the available timeslots for the given test_id and location_id.
     * This web service endpoint returns all the available timeslots matching the duration of the test within the given location for the date range defined by start_date and end_date.\n\nUsage of the \&quot;sort\&quot; query parameter: TBD.\n\nUsage of the \&quot;ext_time\&quot; query parameter: TBD.\nOutput JSON Format:\n{\n  \&quot;data\&quot;: {\n    \&quot;time_zone\&quot;: \&quot;GMT-6 Central Time\&quot;,\n    \&quot;location_name\&quot;: \&quot;ACN Bench\&quot;,\n    \&quot;dates\&quot;: [\n      {\n        \&quot;date\&quot;: \&quot;2016-06-20T00:00:00.000Z\&quot;,\n        \&quot;timeslots\&quot;: [\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-20T09:00:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-20T13:00:00.000Z\&quot;\n          },\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-20T13:30:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-20T17:00:00.000Z\&quot;\n          }\n        ]\n      },\n      {\n        \&quot;date\&quot;: \&quot;2016-06-21T00:00:00.000Z\&quot;,\n        \&quot;timeslots\&quot;: [\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-21T09:00:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-21T13:00:00.000Z\&quot;\n          },\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-21T13:30:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-21T17:00:00.000Z\&quot;\n          },\n          {\n            \&quot;timeslot_id\&quot;: \&quot;WLND74YZ\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-21T19:00:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-21T21:00:00.000Z\&quot;\n          }\n        ]\n      },\n      {\n        \&quot;date\&quot;: \&quot;2016-06-22T00:00:00.000Z\&quot;,\n        \&quot;timeslots\&quot;: [\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-22T09:00:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-22T13:00:00.000Z\&quot;\n          },\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-22T13:30:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-22T17:00:00.000Z\&quot;\n          }\n        ]\n      },\n      {\n        \&quot;date\&quot;: \&quot;2016-06-23T00:00:00.000Z\&quot;,\n        \&quot;timeslots\&quot;: [\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-23T09:00:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-23T13:00:00.000Z\&quot;\n          },\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-23T13:30:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-23T17:00:00.000Z\&quot;\n          }\n        ]\n      },\n      {\n        \&quot;date\&quot;: \&quot;2016-06-24T00:00:00.000Z\&quot;,\n        \&quot;timeslots\&quot;: [\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-24T09:00:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-24T13:00:00.000Z\&quot;\n          },\n          {\n            \&quot;timeslot_id\&quot;: \&quot;\&quot;,\n            \&quot;start_time\&quot;: \&quot;2016-06-24T13:30:00.000Z\&quot;,\n            \&quot;end_time\&quot;: \&quot;2016-06-24T17:00:00.000Z\&quot;\n          }\n        ]\n      }\n    ],\n    \&quot;location_id\&quot;: \&quot;DLXMFG8N\&quot;\n  }\n}
     * @param testId Unique identifier for the test as defined by the PSI Client or PSI delivery partner.
     * @param locationId Unique identifier for the test delivery \&quot;Location\&quot; as defined by PSI
     * @param startDate Defines the start date in ISO 8601 format to filter the locations.
     * @param endDate Defines the end date in ISO 8601 format to filter the locations.
     * @param examLength Defines the length of the exam for which system needs to retrieve the timeslots with matching exam length. This is the total combined duration of one or more portions for whcih the user is trying to perform the booking. It does not incldue the additional ADA minutes.
     * @param extTime Defines the additional time in minutes to be considered while retrieving the timeslots.
     * @param sort Defines the sort parameter on which the returned locations to be sorted.
     */
    public getTimeslotsForLocation(testId: string, locationId: string, startDate: string, endDate: string, examLength: number, extTime?: number, sort?: string, extraHttpRequestParams?: any): Observable<model.LocationTimeslotsResponse> {
        const path = this.basePath + '/tests/{test_id}/locations/{location_id}/timeslots'
            .replace('{' + 'test_id' + '}', String(testId))
            .replace('{' + 'location_id' + '}', String(locationId));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'testId' is set
        if (!testId) {
            throw new Error('Missing required parameter testId when calling getTimeslotsForLocation');
        }
        // verify required parameter 'locationId' is set
        if (!locationId) {
            throw new Error('Missing required parameter locationId when calling getTimeslotsForLocation');
        }
        // verify required parameter 'startDate' is set
        if (!startDate) {
            throw new Error('Missing required parameter startDate when calling getTimeslotsForLocation');
        }
        // verify required parameter 'endDate' is set
        if (!endDate) {
            throw new Error('Missing required parameter endDate when calling getTimeslotsForLocation');
        }
        // verify required parameter 'examLength' is set
        if (!examLength) {
            throw new Error('Missing required parameter examLength when calling getTimeslotsForLocation');
        }
        if (startDate !== undefined) {
            queryParameters['start_date'] = startDate;
        }

        if (endDate !== undefined) {
            queryParameters['end_date'] = endDate;
        }

        if (extTime !== undefined) {
            queryParameters['ext_time'] = extTime;
        }

        if (sort !== undefined) {
            queryParameters['sort'] = sort;
        }

        if (examLength !== undefined) {
            queryParameters['exam_length'] = examLength;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

    /**
     * Web service endpoint to cancel the existing booking specified by the booking_id and to reschedule the candidate into the new timeslot specified by the timeslot_id
     * Web service endpoint to cancel the existing booking specified by booking_id and to rebook the candidate onto the new timeslot specified by the timeslot_id.\n\nThis endpoint generates the output in JSON format with new booking id and other required details.\n\nOutput JSON Format:\n{\n\t\&quot;error_code\&quot;: \&quot;\&quot;,\n\t\&quot;error_message\&quot;: \&quot;\&quot;,\n\t\&quot;data\&quot;: {\n\t\t\&quot;booking_id\&quot;: \&quot;APPCONF4567\&quot;,\n\t\t\&quot;application_id\&quot;: \&quot;AMP1234\&quot;,\n\t\t\&quot;location_id\&quot;: \&quot;5045\&quot;,\n\t\t\&quot;timeslot_id\&quot;: \&quot;121290\&quot;,\n\t\t\&quot;booking_date\&quot;: \&quot;2016-04-02&#39;T&#39;14:30:59Z\&quot;,\n\t\t\&quot;timeslot_start_time\&quot;: \&quot;1430\&quot;,\n\t\t\&quot;exam_length\&quot;: \&quot;240\&quot;,\n\t\t\&quot;is_reschedule\&quot;: \&quot;true\&quot;,\n\t\t\&quot;csr-user-name\&quot;: \&quot;Seshu\&quot;,\n\t\t\&quot;transaction_id\&quot;: \&quot;201603111451000\&quot;,\n\t}\n}
     * @param bookingId Defines the booking_id, a unique identifier for the candidate booking made for a test onto a specific timeslot.
     * @param timeslotId Defines the timeslot_id, a unique identifier for the timeslot defined by PSI. 
     * @param performedByUser Name of the user performing this operation. Used for auditing purpose.
     * @param payload Request Body
     * @param bookingOnHold To create a booking as a confirmed booking or reserved (on hold). Default value is \&quot;false\&quot;. When \&quot;true\&quot;, this endpoint will create a booking with onHold status/flag.
     */
    public rescheduleBooking(bookingId: string, timeslotId: string, performedByUser: string, payload?: model.TestPortionData, bookingOnHold?: boolean, extraHttpRequestParams?: any): Observable<model.BookingResponse> {
        const path = this.basePath + '/bookings/{booking_id}/{timeslot_id}'
            .replace('{' + 'booking_id' + '}', String(bookingId))
            .replace('{' + 'timeslot_id' + '}', String(timeslotId));

        let queryParameters: any = ""; // This should probably be an object in the future
        let headerParams = this.defaultHeaders;
        // verify required parameter 'bookingId' is set
        if (!bookingId) {
            throw new Error('Missing required parameter bookingId when calling rescheduleBooking');
        }
        // verify required parameter 'timeslotId' is set
        if (!timeslotId) {
            throw new Error('Missing required parameter timeslotId when calling rescheduleBooking');
        }
        // verify required parameter 'performedByUser' is set
        if (!performedByUser) {
            throw new Error('Missing required parameter performedByUser when calling rescheduleBooking');
        }
        if (performedByUser !== undefined) {
            queryParameters['performed_by_user'] = performedByUser;
        }

        if (bookingOnHold !== undefined) {
            queryParameters['booking_on_hold'] = bookingOnHold;
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(payload);

        return this.http.request(path, requestOptions)
            .map(response => response.json());
    }

}

