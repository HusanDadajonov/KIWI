//--ALL IMPORTS--
import React from "react";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Categories from "./Categories/Categories";
import Cards from "./Cards/Cards";
import Products from "./Products/Products";
import FooterTop from "./FooterTop/FooterTop";

function Home({setHeaderFormCheck}){
    setHeaderFormCheck(true)
    return(
        <>
            <main>
                <Categories />
                <Cards/>
                <Products />
                <FooterTop />
            </main>
        </>
    );

}

export default Home;