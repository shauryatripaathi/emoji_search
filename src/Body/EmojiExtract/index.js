import './style.css'
export default function EmojiExtract(props){
    const handleOnClick = (e)=>{
        alert(e.target)
    }
    return<>
        <div className="dataExtract">{props.characterData.map((a,index)=>{
            return(
                <div key={index}>
                <div onClick={handleOnClick} className='emojiList'>{a.symbol}</div>
                </div>
            )
        })}</div>
    </>
}