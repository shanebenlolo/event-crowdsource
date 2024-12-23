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

import { mapValues } from '../runtime';
import type { EventImage } from './EventImage';
import {
    EventImageFromJSON,
    EventImageFromJSONTyped,
    EventImageToJSON,
} from './EventImage';

/**
 * 
 * @export
 * @interface EventSummary
 */
export interface EventSummary {
    /**
     * 
     * @type {string}
     * @memberof EventSummary
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof EventSummary
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EventSummary
     */
    description?: string;
    /**
     * 
     * @type {EventImage}
     * @memberof EventSummary
     */
    image?: EventImage;
}

/**
 * Check if a given object implements the EventSummary interface.
 */
export function instanceOfEventSummary(value: object): boolean {
    return true;
}

export function EventSummaryFromJSON(json: any): EventSummary {
    return EventSummaryFromJSONTyped(json, false);
}

export function EventSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'image': json['image'] == null ? undefined : EventImageFromJSON(json['image']),
    };
}

export function EventSummaryToJSON(value?: EventSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
        'image': EventImageToJSON(value['image']),
    };
}

