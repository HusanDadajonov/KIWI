//--ALL IMPORTS--
import React from "react";
import FakeApi from "../../../FakeApi/FakeApi";
import CategoriesItem from "./CategoriesItem/CategoriesItem";
import { BsChevronDoubleLeft,BsChevronDoubleRight } from "react-icons/bs";
import { useState } from "react";
import "./Categories.scss";

function Categories(){

    //--HOOK--
    const [sliderCount,setSliderCount] = useState(0);

    //SLIDER COUNT END
    if(sliderCount == 4)setSliderCount(0);

    return(
        <section className="categories">
           <div className="categories__container container">
            <button className="categories__btn categories__btn--prev p-0" onClick={()=> sliderCount !=0 ? setSliderCount(sliderCount - 1) : setSliderCount(0)}>{<BsChevronDoubleLeft />}</button>
            <div className="categories__slider--wrap">
                <ul className="categories__list list-unstyled m-0" style={sliderCount != 4 ? {transform:`translateX(-${sliderCount * 390}px)`} : {transform:`translateX(0px)`}}>
                    {
                        FakeApi.categories.map(item => (
                            <CategoriesItem 
                                sliderCount={sliderCount} 
                                key={item.id} 
                                img={item.img} 
                                categorieName={item.text}
                            />
                        ))
                    }
                    
                </ul>
            </div>          
            <button className="categories__btn categories__btn--next p-0" onClick={()=> setSliderCount(sliderCount + 1)}>{<BsChevronDoubleRight />}</button>
           </div>
        </section>
    );

}

export default Categories;