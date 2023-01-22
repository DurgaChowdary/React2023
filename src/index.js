/* For a normal component, just the React import and a function are enough
But in index.js, which is the entry point to the application, the component needs to be rendered into the root element */

import React from 'react' // ES6 Modules - Get a piece of functionality into our files
import ReactDom from 'react-dom'
import './index.css'

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

/* Nesting Components */ 

function BookList(){ // Capitalize the first letter of the function name - so that React knows it's a component
  const booksList = [{"id":3, "title" : "A Life in the Shadows : A Memoir", "imageURL" : "https://images-eu.ssl-images-amazon.com/images/I/41iUdP0aG3L._AC_SX184_.jpg", "author" : "A.S. Dulat 1"},
  {"id":1, "title" : "A Life in the Shadows : A Memoir", "imageURL" : "https://images-eu.ssl-images-amazon.com/images/I/41iUdP0aG3L._AC_SX184_.jpg", "author" : "A.S. Dulat 2"},
  {"id":2, "title" : "A Life in the Shadows : A Memoir 2", "imageURL" : "https://images-eu.ssl-images-amazon.com/images/I/41iUdP0aG3L._AC_SX184_.jpg", "author" : "A.S. Dulat 3"}]
  // const names = ["Durga", "Chowdary", "Edara"]
  // const newNames = names.map((name) => {return <h2>{name}</h2>})
  return(
    <React.Fragment>
      <section className='booklist'>
      {booksList.map((book) => {
        return <Book key={book.id} {...book}> hi {book.id}</Book>
      })}
      </section>
    </React.Fragment>
  )
}

const Book = (book) => {
  // Attribute and event handler are required for handling events.
  // onClick={handleEvent} - Will not invoke the function on load, but {handleEvent()} will invoke the function on load
  // Passign an argument as an event handler - () => {handleEvent(author)}
  const handleEvent = (e) => {
    console.log(e)
  }
  const {id, title, imageURL, author, children} = book
  return(
    <article>
          <li key={id}>
            <h1>{title}</h1>
            {children}
            <img src={imageURL} alt="Alternative" />
            <h3 style={{color:'blue'} }>{author}</h3>
            <button onClick={() => handleEvent(author)}>Click Me</button>
          </li>

  </article>)
}

// const SecondGreeting = () => {
//   // React.createElement takes three parameters, namely the HTML element, props object and the element's children.
//   return React.createElement(
//     "div", {}, React.createElement("h1", {}, "Hey hey!", React.createElement("h3", {}, "Nothing"))
//   )
// }

// React closing tags for the component is required
ReactDom.render(<BookList />, document.getElementById("root"))
