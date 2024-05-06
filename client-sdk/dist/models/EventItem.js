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
exports.EventItemToJSON = exports.EventItemFromJSONTyped = exports.EventItemFromJSON = exports.instanceOfEventItem = void 0;
const EventDetails_1 = require("./EventDetails");
const EventImage_1 = require("./EventImage");
/**
 * Check if a given object implements the EventItem interface.
 */
function instanceOfEventItem(value) {
    return true;
}
exports.instanceOfEventItem = instanceOfEventItem;
function EventItemFromJSON(json) {
    return EventItemFromJSONTyped(json, false);
}
exports.EventItemFromJSON = EventItemFromJSON;
function EventItemFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'summary': json['summary'] == null ? undefined : json['summary'],
        'details': json['details'] == null ? undefined : (0, EventDetails_1.EventDetailsFromJSON)(json['details']),
        'images': json['images'] == null ? undefined : (json['images'].map(EventImage_1.EventImageFromJSON)),
    };
}
exports.EventItemFromJSONTyped = EventItemFromJSONTyped;
function EventItemToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'summary': value['summary'],
        'details': (0, EventDetails_1.EventDetailsToJSON)(value['details']),
        'images': value['images'] == null ? undefined : (value['images'].map(EventImage_1.EventImageToJSON)),
    };
}
exports.EventItemToJSON = EventItemToJSON;