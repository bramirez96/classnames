// ! Copyright (c) 2024, Brandon Ramirez
/**
 * Generate an HTML `class` attribute string based on the given input args.
 * Different types of values have the following handling:
 * - `string` or `number`: strings are added directly as class names
 * - `object`: the key is the class name, and the value is a truthy value
 *              indicating whether we should add the key to the class string
 * - `array`: call the function recursively with the array as arguments
 */
export default function classnames(...args) {
    let response = '';
    args.forEach((arg) => {
        if (typeof arg === 'string' || typeof arg === 'number') {
            response += `${arg} `;
        }
        else if (Array.isArray(arg)) {
            // Recursively call the function on the array
            response += classnames(...arg) + ' ';
        }
        else if (typeof arg === 'object' && arg !== null) {
            // Get an array of the object's keys that have truthy values
            const filteredClassStrings = Object.entries(arg)
                .filter((argTuple) => !!argTuple[1]) // Filter out keys with falsy values
                .map((argTuple) => argTuple[0]); // Map into array of just the keys (class strings)
            // Recursively call the function on the filtered arguments
            response += classnames(...filteredClassStrings) + ' ';
        }
    });
    // Filter out excess spaces
    response = response.replace(/\s+/g, ' ').trim();
    return response;
}
