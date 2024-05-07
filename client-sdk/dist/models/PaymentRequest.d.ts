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
/**
 *
 * @export
 * @interface PaymentRequest
 */
export interface PaymentRequest {
    /**
     * Payment amount in cents
     * @type {number}
     * @memberof PaymentRequest
     */
    amount?: number;
}
/**
 * Check if a given object implements the PaymentRequest interface.
 */
export declare function instanceOfPaymentRequest(value: object): boolean;
export declare function PaymentRequestFromJSON(json: any): PaymentRequest;
export declare function PaymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequest;
export declare function PaymentRequestToJSON(value?: PaymentRequest | null): any;
