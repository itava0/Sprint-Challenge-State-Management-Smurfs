1. What problem does the context API help solve?

Context API solved the problem when some data needs to be accessible by many components at different nesting levels.  Context API you no longer have to pass props down from component to component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action is an object that describes what happened. Reducers are pure functions that predictably manage state changes. A store is an object that holds the application's state tree. The store is known as a single source of truth because everything that changes within your application will be represented by it.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is global that means any component, anywhere in the app can access it. The component state lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows us to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of action or to dispatch only if a certain condition is met.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite is the Context API t because there is less boilerplate that I need to write compare to Redux.