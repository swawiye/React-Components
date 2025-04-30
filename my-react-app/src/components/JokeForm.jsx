import { useState } from "react"

export default function JokeForm({ onAddJoke }) {
  const [text, setText] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.length < 5) {
      setError("Jokes must be at least 5 characters long")
      return
    }
    setError("")
    onAddJoke(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">New Joke</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Add Joke</button>
    </form>
  )
}
