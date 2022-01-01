# Learn In Public Series

## Dom Manipulation - Interpolating CSS strings into JavaScript functions

### Resources

#### Interpolation

- stack overflow <https://stackoverflow.com/questions/40106822/how-do-i-interpolate-js-variables-into-css-classes>

### Explorations

`function addWidth() {
picture.style.width = screenSizeX;
}`

Didn't work, I feel like a string interpolation would be a good way to save the width number. As of now screenSizeX is typeof number.

Secret is to concatenate the NUMBER with a string of px