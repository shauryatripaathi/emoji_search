import data from '../../data/data.json'
import EmojiExtract from '../EmojiExtract'
import EmojiGrid from '../EmojiGrid'
export default function Display(props){
   return<>
       <div><EmojiGrid /></div>
        <div>
            <EmojiExtract characterData = {data}  />
        </div>
    </>
}