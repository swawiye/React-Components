import Age from "./components/TernaryOperator";
import Joke from "./components/Joke";
import JokeForm from "./components/JokeForm";
import { useState } from "react";

function App() {
  const isLoggedIn = "true";

  const [showForm, setShowForm] = useState(false);
  const [jokes, setJokes] = useState([{
    id: 1,
    text: "I'm afraid for the calendar. Its days are numbered."
  },
  {
    id: 2,
    text: "I used to be addicted to soap, but I'm clean now."
  }
  ])

  const handleAddJoke = (text) => {
    const joke = {
      text,
      id: self.crypto.randomUUID(),
      likes: 0
    }
    setJokes([joke, ...jokes])
    setShowForm(false)
  }

  const handleDeleteJoke = (id) => {
    setJokes(jokes.filter(joke => joke.id !== id))
  }

  const handleAddNewJoke = () => {
    setShowForm(true)
  }

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

    <div className="">
      <h2>Jokes</h2>

      {showForm ?
        <JokeForm onAddJoke={handleAddJoke}/>
        :
        <>
          <button onClick={handleAddNewJoke}>Add a new joke</button>
          {jokes.map(joke => <Joke key={joke.id} {...joke} onDelete={handleDeleteJoke}/>)}
        </>
      }

    </div>
    </>
  )
}

export default App

//Ternary Operator- simplified way of writing condition statements
// condition ? expressionIfTrue : expressionIfFalse;