//--ALL IMPORTS--
import React from "react";
import "./Products.scss";
import { BsChevronDoubleLeft,BsChevronDoubleRight } from "react-icons/bs";
import ProductsItem from "./ProductsItem/ProductsItem";
import FakeApi from "../../../FakeApi/FakeApi";
import { useState } from "react";


function Products(){

    //--HOOK--
    const [sliderCount,setSliderCount] = useState(0)

    if(sliderCount == 4)setSliderCount(0);

    return (
        <section className="products">
            <div className="products__container container position-relative">
                <button className="categories__btn categories__btn--prev p-0 products__prev--btn" onClick={()=> sliderCount != 0 ? setSliderCount(sliderCount - 1) : setSliderCount(0)}>{<BsChevronDoubleLeft />}</button>
                <div className="products__wrap">
                    <ul className="products__list" style={sliderCount != 5 ? {transform:`translateX(-${sliderCount * 926}px)`} : {transform:`translateX(0px)`}}>
                       {
                           FakeApi.products.map(item => (
                            <ProductsItem 
                                key={item.id}
                                img={item.img}
                                title={item.text}
                                listings={item.listings}
                            />
                           ))
                           
                       }
                    </ul>
                </div>
                <button className="categories__btn categories__btn--next p-0 products__next--btn" onClick={()=> setSliderCount(sliderCount + 1)}>{<BsChevronDoubleRight />}</button>
            </div>
        </section>
    );
    
}

export default Products;