import { useState } from "react";
import ActionButton from "../../ActionButton";
import EmojiGrid from "../../EmojiGrid";
import data from '../../data/data.json'

export default function SearchBar() {
    const [name, setName] = useState("");
    const handleOnSubmit = (event) => {
        event.preventDefault()
        alert(`text entered text ${name}`)
    }
    const handleChange = (e) => {
        setName(e.target.value)
    }

    return <>
        <form onSubmit={handleOnSubmit}>
            <input type='search'
                value={name}
                onChange={handleChange} />
        </form>
        <ActionButton emoji="❌" onClick={() => { setName("") }} />
        <ActionButton emoji="😻" onClick={() => { setName("Smiley") }} />
        <ActionButton emoji="🚕" onClick={() => { setName("Travel") }} />
        <ActionButton emoji="🍎" onClick={() => { setName("Fruit") }} />
        <ActionButton emoji="🍔" onClick={() => { setName("American food") }} />
        <ActionButton emoji="💖" onClick={() => { setName("Hearts") }} />
    </>
}
