import data from '../../data/data.json'
import EmojiExtract from '../EmojiExtract'
import SearchBar from '../../Header/SearchBar'
export default function Display(){
   return<>
        <div>
            <EmojiExtract characterData = {data}  />
        </div>
    </>
}