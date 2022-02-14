//--ALL IMPORTS--
import React from "react";
import "./Cards.scss";
import Card from "../../../Components/Card/Card";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function Cards(){

    //---HOOKS---
    const [allCards,setAllCards] = useState([]);
    const [activeTitle,setActiveTitle] = useState(1);
    const [apiLimit,setApiLimit] = useState(12);
    const [resultCheck,setResultCheck] = useState(false);
    const [checkLoading,setChekcLoading] = useState(false);

    //---ALL PRODUCTS API--
    useEffect(async ()=>{

        const response = await fetch(`https://fakestoreapi.com/products?limit=${apiLimit}`);
        const json = await response.json();
        setAllCards(json.sort(() => (Math.random() > .5) ? 1 : -1));

        if(response.status == 200)setChekcLoading(true);
        
    },[apiLimit,activeTitle]);


    return(
        <section className="cards">
            <div className="cards__container container">
                <div className="cards__titles d-flex align-items-center">
                    <h3 className={activeTitle == 1 ? `cards__top--title cards__top--title-active` : `cards__top--title`} onClick={()=> setActiveTitle(1)}>Новые объявления</h3>
                    <h3 className={activeTitle == 2 ? `cards__top--title cards__top--title-active` : `cards__top--title`} onClick={()=> setActiveTitle(2)}>Лучщие предложение</h3>
                </div>
                <ul className="cards__list list-unstyled m-0 ">
                    {
                        !checkLoading ? <p>loading...</p> : ""
                    }
                    {
                        allCards.length != 0 ?
                        allCards.map(item => (
                            <Card 
                                title={item.title}
                                time={"Вчера 22:55"}
                                img={item.image}
                                price={item.price}
                                key={item.id}
                                id={item.id}
                        />
                        )): null
                    }
                   
                </ul>
                <button className="categories__vieaw--all-btn mx-auto mb-3 d-flex align-items-center" onClick={()=> setApiLimit(20)}>Покозать еще{<BsChevronDown className="ms-1" style={apiLimit == 20 ? {transform: `rotate(180deg)`} : {transform: `rotate(0)`}} />}</button>
            </div>
        </section>
    );
    
}

export default Cards;