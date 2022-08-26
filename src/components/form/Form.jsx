import { nanoid } from "nanoid"
import { useState } from "react"

const Form = (props) => {

    // Props
    const { onSubmit } = props

    // State
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("moyenne")

    // Function
    const handleSubmit = (e) => {
        e.preventDefault()
        const task = {
            id: nanoid(),
            name: name,
            description: description,
            priority: priority,
            done: false
        }
        onSubmit(task)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div>
                <label>Priorité</label>
                <select value={priority} onChange={e => setPriority(e.target.value)}>
                    <option value="basse">Basse</option>
                    <option value="moyenne">Moyenne</option>
                    <option value="urgente">Urgente</option>
                </select>
            </div>

            <input type="submit" />
        </form>
    )
}

export default Form