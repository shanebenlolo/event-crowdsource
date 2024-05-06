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
exports.EventImageToJSON = exports.EventImageFromJSONTyped = exports.EventImageFromJSON = exports.instanceOfEventImage = void 0;
/**
 * Check if a given object implements the EventImage interface.
 */
function instanceOfEventImage(value) {
    return true;
}
exports.instanceOfEventImage = instanceOfEventImage;
function EventImageFromJSON(json) {
    return EventImageFromJSONTyped(json, false);
}
exports.EventImageFromJSON = EventImageFromJSON;
function EventImageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'src': json['src'] == null ? undefined : json['src'],
        'alt': json['alt'] == null ? undefined : json['alt'],
    };
}
exports.EventImageFromJSONTyped = EventImageFromJSONTyped;
function EventImageToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'src': value['src'],
        'alt': value['alt'],
    };
}
exports.EventImageToJSON = EventImageToJSON;