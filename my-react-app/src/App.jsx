import Age from "./components/TernaryOperator";

function App() {
  const isLoggedIn = "true";

  return (
    <>
    <h1>React Lesson One</h1>
    <p>
      React is a JavaScript library created by Facebook. 
      It is a User Interface (UI) library and is used as 
      a tool for building UI components.
    </p>
    <div>

    <h2>Welcome to our website!</h2>
    {isLoggedIn ? <p>You are logged in</p> : <p>Please log in to continue</p>}
    </div>

    <Age/>
    </>
  )
}

export default App

//Ternary Operator- simplified way of writing condition statements
// condition ? expressionIfTrue : expressionIfFalse;