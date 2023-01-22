/* For a normal component, just the React import and a function are enough
But in index.js, which is the entry point to the application, the component needs to be rendered into the root element */

import React from 'react' // ES6 Modules - Get a piece of functionality into our files
import ReactDom from 'react-dom'

/* Stateless Functional Component - Also called Dump components because they don't have a state
Always need to return something 
JSX - Javascript XML. There are a few JSX rules:
1. Always return a single element. There should be an enclosing element that wraps everything.
2. div/section/article instead of returning within a div (HTML semantics). We can use <React.Fragement> or <> as enclosing tags. This won't create a div in the DOM.
3. Use camelCase for HTML attributes - onClick, onChange, mouseOver
4. className  instead of class - CSS classes
5. Close every element - It needs a closing tag
6. Formatting - 
*/

function Greeting(){ // Capitalize the first letter of the function name - so that React knows it's a component
  return(
    <React.Fragment>
      <h4>Hello World! This is JSX.</h4>
      <img alt="Alternative"></img>
    </React.Fragment>
  )
}

// const SecondGreeting = () => {
//   // React.createElement takes three parameters, namely the HTML element, props object and the element's children.
//   return React.createElement(
//     "div", {}, React.createElement("h1", {}, "Hey hey!", React.createElement("h3", {}, "Nothing"))
//   )
// }

// React closing tags for the component is required
ReactDom.render(<Greeting />, document.getElementById("root"))
