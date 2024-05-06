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
export declare function instanceOfEventImage(value: object): boolean;
export declare function EventImageFromJSON(json: any): EventImage;
export declare function EventImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventImage;
export declare function EventImageToJSON(value?: EventImage | null): any;