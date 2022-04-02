import ActionButton from "../../ActionButton";
export default function NavBarIcons(){
    const crossMark = require('../image/crossMark.png')
    const smilingCat = require('../image/smilingCat.png')
    const taxiImg = require('../image/taxiImg.png')
    const burgerImg = require('../image/burgerImg.png')
    const fruitsImg = require('../image/fruitsImg.jpg')
    const heartsImg = require('../image/heartsImg.png')
    return<>
    
        <ActionButton btn = {crossMark}/>
        <ActionButton btn = {smilingCat}/>
        <ActionButton btn = {taxiImg}/>
        <ActionButton btn = {burgerImg}/>
        <ActionButton btn = {fruitsImg}/>
        <ActionButton btn = {heartsImg}/>
    </>
}