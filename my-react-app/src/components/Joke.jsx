export default function Joke({ id, text, onDelete}) {
    return (
      <div>
        <p>{text}</p>
        <button onClick={() => onDelete(id)}>delete</button>
      </div>
    )
  }
  