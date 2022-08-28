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
        if (name.length > 0 && description.length > 0) {
            const task = {
                id: nanoid(),
                name: name,
                description: description,
                priority: priority,
                done: false
            }
            onSubmit(task)
        }
        else {
            window.alert("Veuillez remplir tous les champs")
        }
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Ajouter une tâche</h1>
            <div className="form-field">
                <label className={name.length < 1 && "red"}>Nom</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div className="form-field" >
                <label className={description.length < 1 && "red"}>Description</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className="form-field">
                <label>Priorité</label>
                <select value={priority} onChange={e => setPriority(e.target.value)}>
                    <option value="basse">Basse</option>
                    <option value="moyenne">Moyenne</option>
                    <option value="urgente">Urgente</option>
                </select>
            </div>

            <input class="submit-button" type="submit" />
        </form>
    )
}

export default Form