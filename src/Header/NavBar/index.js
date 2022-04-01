import NavBarIcons from '../NavBarIcons'
import SearchBar from '../SearchBar'
import './style.css'
export default function NavBar(){
    return<>
        <nav className="navBar">
            <SearchBar/>
            <NavBarIcons/>
        </nav>
    </>
}