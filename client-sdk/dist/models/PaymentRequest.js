"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequestToJSON = exports.PaymentRequestFromJSONTyped = exports.PaymentRequestFromJSON = exports.instanceOfPaymentRequest = void 0;
/**
 * Check if a given object implements the PaymentRequest interface.
 */
function instanceOfPaymentRequest(value) {
    return true;
}
exports.instanceOfPaymentRequest = instanceOfPaymentRequest;
function PaymentRequestFromJSON(json) {
    return PaymentRequestFromJSONTyped(json, false);
}
exports.PaymentRequestFromJSON = PaymentRequestFromJSON;
function PaymentRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}
exports.PaymentRequestFromJSONTyped = PaymentRequestFromJSONTyped;
function PaymentRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'amount': value['amount'],
    };
}
exports.PaymentRequestToJSON = PaymentRequestToJSON;
