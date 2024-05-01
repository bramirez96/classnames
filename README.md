# classnames

Generate an HTML class attribute string... however you want.

## Usage

Takes in a series of inputs to build a single class string. Different types of inputs are handled differently.

| Input Type | Handling                                                                               |
|------------|----------------------------------------------------------------------------------------|
| `string`   | adds the input string directly to the class string                                     |
| `number`   | adds the input number directly to the class string                                     |
| `array`    | recursively calls `classnames` with the array values, adds results to the class string |
| `object`   | object entries truthy values add their property names as a string to the class string  |

Here are some examples of what that looks like in practice:

```javascript
// Simple use case
classnames('ui-button', 'ui-active');
// => 'ui-button ui-active'

// Using a boolean flag to toggle a class
classnames('ui-button', isLoading && 'ui-loading');
// => isLoading ? 'ui-button ui-loading' : 'ui-button'

// Nested array example
classnames('ui-button', ['ui-active', ['ui-loading']])
// => 'ui-button ui-active ui-loading'

// Object input, mapping state to class names example
classnames('ui-button', {
    'ui-loading': isLoading,
    'ui-hover': isHovered,
})
// => 'ui-button ui-loading ui-hovered' (if both are true)
```