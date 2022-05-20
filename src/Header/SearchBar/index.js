import './style.css'

export default function SearchBar(props) {
    return <>
            <input type='search'
                className="searchbar"
                value={props.value}
                onChange={props.handleChange} />       
    </>
}
