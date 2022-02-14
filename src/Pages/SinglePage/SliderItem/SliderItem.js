function SliderItem({itemClass,index,img,setSliderCount}) {

    return(
        <li className={`${itemClass}`} onClick={()=> setSliderCount(index)}>
            <img src={img} alt="slider-item" />        
        </li>
    );

}   

export default SliderItem;