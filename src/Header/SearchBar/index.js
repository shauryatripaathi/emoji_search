import { useState } from "react";
 
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
       
    </>
}
