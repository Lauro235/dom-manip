# Learn In Public Series

## Dom Manipulation Goal - Edit div height and width on screen resize

### Resources

The MDN resource down below was the catalyst for this project, very inspiring and informative. Perhaps a little too conscise? Or I just need way more prerequisite knowledge. Either way it helped me accomplish my goal.

- MDN onresize <https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event>
 
- stack overflow interpolation <https://stackoverflow.com/questions/40106822/how-do-i-interpolate-js-variables-into-css-classes>

### Explorations

This was something that very recently was just out of reach and so I'm glad that my reading and research and continued use of JavaScript has paid off. I can think of tons of good use cases for being able to update the width and height of an element according to browser size.

Now It feels like I've done the hard work. Next is to explore where it can take me..

An important clue for me was logging the typeof for the browser variable. It was a number. If I was going to transfer this number into a CSS value, I would have to concatenate the variable with a small string of 'px'.

Another thing that tripped me up was the syntax of window.onresize... It should have been 

window.onresize = functionName;

not

window.onresize(functionName());
