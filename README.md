
## 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in **React** to describe what the UI should look like.  
It allows you to write HTML-like code inside JavaScript.

Example:
```
const element = <h1>Hello, World!</h1>;
````

JSX is converted into:

```js
const element = React.createElement('h1', null, 'Hello, World!');
```

**Why it’s used:**

* Makes code easier to read and write
* Allows embedding JavaScript expressions
* Provides better error checking and optimization

---

## 2. What is the difference between State and Props?

| Feature    | State                                                   | Props                                                      |
| ---------- | ------------------------------------------------------- | ---------------------------------------------------------- |
| Definition | Data owned and managed by the component itself          | Inputs passed from a parent component to a child component |
| Mutability | Mutable (can be changed using `setState` or `useState`) | Immutable (cannot be changed by the child)                 |
| Usage      | Used to store dynamic data that can change over time    | Used to pass data or functions between components          |
| Example    | `const [count, setCount] = useState(0)`                 | `<Child message="Hello" />`                                |

---

## 3. What is the useState hook, and how does it work?

The `useState` hook allows React functional components to have state variables.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

How it works:

* `useState` returns a state variable and a function to update it.
* When the state changes, React re-renders the component.

---

## 4. How can you share state between components in React?

1. **Lift State Up** – Move the shared state to the nearest common parent and pass it down as props.

   ```jsx
   function Parent() {
     const [value, setValue] = useState("");
     return (
       <>
         <Child1 value={value} setValue={setValue} />
         <Child2 value={value} />
       </>
     );
   }
   ```

2. **Context API** – For sharing state globally across multiple components.

3. **State Management Libraries** – Use Redux, Zustand, or Recoil for larger applications.

---

## 5. How is event handling done in React?

React handles events similar to the DOM but with a few differences:

* Use **camelCase** for event names.
* Pass a **function reference**, not a string.

Example:

```jsx
function ClickMe() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

```
