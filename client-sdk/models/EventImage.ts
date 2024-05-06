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
/**
 * 
 * @export
 * @interface EventImage
 */
export interface EventImage {
    /**
     * 
     * @type {string}
     * @memberof EventImage
     */
    src?: string;
    /**
     * 
     * @type {string}
     * @memberof EventImage
     */
    alt?: string;
}

/**
 * Check if a given object implements the EventImage interface.
 */
export function instanceOfEventImage(value: object): boolean {
    return true;
}

export function EventImageFromJSON(json: any): EventImage {
    return EventImageFromJSONTyped(json, false);
}

export function EventImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventImage {
    if (json == null) {
        return json;
    }
    return {
        
        'src': json['src'] == null ? undefined : json['src'],
        'alt': json['alt'] == null ? undefined : json['alt'],
    };
}

export function EventImageToJSON(value?: EventImage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'src': value['src'],
        'alt': value['alt'],
    };
}

