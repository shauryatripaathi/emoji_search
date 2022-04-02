import data from '../../data/data.json'
import EmojiExtract from '../EmojiExtract'
export default function Display(){
   const characters = data;
   return<>
        <div>
            <EmojiExtract characterData = {characters}/>
        </div>
    </>
}