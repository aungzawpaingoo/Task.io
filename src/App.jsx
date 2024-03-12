import { useState } from "react"

export default function App() {

  const [newitems, setNewItems] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) { 
    e.preventDefault()

    setTodos([...todos, newitems])
    
  }

  return (

    <>
    <form className="form" onSubmit={handleSubmit}>
      <div className="formRow">
        <label>New Item</label>
        <input value={newitems} type="text" id="item" onChange={e => setNewItems(e.target.value)} />
      </div>
      <button className="btn">Add</button>
    </form>

    <h1 className="header">Todo List</h1>

    <ul className="list">
      <li className="listItem">
        <label>
          <input type="checkbox" />
          Item 1
          <button className="btn-delete">Delete</button>
        </label>
      </li>
    </ul>

    
 </>
 
 )
}