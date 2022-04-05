import './style.css'
export default function EmojiExtract(props){
    const handleOnClick = (e)=>{
        alert(e.target)
    }
    return<>
        <div className="dataExtract">{props.characterData.map((item,index)=>{
            return(
                <div key={index}>
                <div onClick={handleOnClick} className='emojiList'>{item.symbol}</div>
                </div> 
            )})}
        </div>
    </>
}