### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is a javascript framework used to create reusable components combining html and JS logic.

- What is Babel?
  - Babel translates modern javascript into a version that can be ran in all environments.
  
- What is JSX?
  - JSX is a javascript extension used to write React structures. It is similar to writing html in javascript.

- How is a Component created in React?
  - Components are rendered in React by functions that may or may not contain state.

- What are some difference between state and props?
  - Props are passed down from parent to child to be later used somewhere in the child. State is a condition that once changed can change rendered components.

- What does "downward data flow" refer to in React?
  - "Downward data flow" refers to the passing down of data from parent to children components and structuring code to follow that rule.

- What is a controlled component?
  - A controlled component is a component that is controlled by React state.
- What is an uncontrolled component?
  - An uncontrolled component is not controlled by React state but is controlled by the DOM itself.

- What is the purpose of the `key` prop when rendering a list of components?
  - A `key` prop allows React to efficiently identify/update a rendered component- all `keys` must be unique so React can keep track of them.
 
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - There can be performance problems or bugs with component state if order changes or items are deleted in an array index.

- Describe useEffect.  What use cases is it used for in React components?
  - `useEffect` links a "side effect" to rendered componenets and can be reapplied based on the change of a certain condition. One use case for it is fetching data from an external source or API.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - `useRef` returns a mutable object with a key equal to the initial value passed into the hook. This object will persist across renders and mutations. It is independent of state.

- When would you use a ref? When wouldn't you use one?
  - You could use a ref to access an underlying DOM element like a timer, but you do not want to use them for anything you want React to have control over.

- What is a custom hook in React? When would you want to write one?
  - A custom hook is similar to a helper function for React. You should use them when you have logic that can be applied to multiple components in your app.
