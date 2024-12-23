/**
 * Event API
 * API to manage event data for the Event Crowdsource application.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { EventItem, EventSummary, PaymentRequest, PaymentResponse } from '../models/index';
export interface CreateEventRequest {
    eventItem: EventItem;
}
export interface GetEventByIdRequest {
    id: string;
}
export interface MakePaymentRequest {
    paymentRequest: PaymentRequest;
}
/**
 *
 */
export declare class DefaultApi extends runtime.BaseAPI {
    /**
     * Create a new event
     */
    createEventRaw(requestParameters: CreateEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventItem>>;
    /**
     * Create a new event
     */
    createEvent(requestParameters: CreateEventRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventItem>;
    /**
     * Get a single event by ID
     */
    getEventByIdRaw(requestParameters: GetEventByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EventItem>>;
    /**
     * Get a single event by ID
     */
    getEventById(requestParameters: GetEventByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EventItem>;
    /**
     * List all event summaries
     */
    listEventSummariesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<EventSummary>>>;
    /**
     * List all event summaries
     */
    listEventSummaries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<EventSummary>>;
    /**
     * Make a payment
     */
    makePaymentRaw(requestParameters: MakePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentResponse>>;
    /**
     * Make a payment
     */
    makePayment(requestParameters: MakePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentResponse>;
}
