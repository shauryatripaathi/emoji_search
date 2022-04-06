 
export default function SearchBar(props) {

    const handleOnSubmit = (event) => {
        event.preventDefault()
    }

    return <>
        <form onSubmit={handleOnSubmit}>
            <input type='search'
                value={props.value}
                onChange={props.handleChange} />
        </form>
       
    </>
}
