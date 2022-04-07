export default function SearchBar(props) {
    return <>
            <input type='search'
                value={props.value}
                onChange={props.handleChange} />       
    </>
}
