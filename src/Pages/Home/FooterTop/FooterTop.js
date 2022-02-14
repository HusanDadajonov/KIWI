//--ALL IMPORTS--
import { useEffect, useState } from "react";
import Card from "../../../Components/Card/Card"
import { BsChevronDown } from "react-icons/bs";
import "./FooterTop.scss";

function  FooterTop() {

     //---HOOKS---
     const [footerCards,setFooterCards] = useState([]);
     const [activeTitle,setActiveTitle] = useState(1);
     const [apiLimit,setApiLimit] = useState(4);
 
     //---FOOTER PRODUCTS API--
     useEffect(()=>{
         fetch(`https://fakestoreapi.com/products?limit=${apiLimit}`)
         .then(res=>res.json())
         .then(json=>setFooterCards(json.sort(() => (Math.random() > .5) ? 1 : -1)))
         
     },[activeTitle,apiLimit]);

    return(
        <section className="footer-top">
            <div className="footer-top__container container">
                <div className="footer-top__wrap">
                    <div className="footer-top__titles cards__titles d-flex align-items-center">
                        <h3 className={activeTitle == 1 ? `cards__top--title cards__top--title-active` : `cards__top--title`} onClick={()=> setActiveTitle(1)}>Просмотренные</h3>
                        <h3 className={activeTitle == 2 ? `cards__top--title cards__top--title-active` : `cards__top--title`} onClick={()=> setActiveTitle(2)}>Выбор редакции</h3>
                        <h3 className={activeTitle == 3 ? `cards__top--title cards__top--title-active` : `cards__top--title`} onClick={()=> setActiveTitle(3)}>Сниженные цены</h3>
                    </div>
                    <ul className="footer-top__list m-0 p-0 llist-unstyled">
                        {
                            footerCards.length != 0 ? 
                            footerCards.map(item=> (
                                <Card 
                                    title={item.title}
                                    time={"Вчера 22:55"}
                                    img={item.image}
                                    price={item.price}
                                    key={item.id}
                                    id={item.id}
                                />
                            )) : null
                        }
                    </ul>
                    <button className="categories__vieaw--all-btn mx-auto mb-3 d-flex align-items-center" onClick={()=> setApiLimit(8)}>Покозать еще{<BsChevronDown className="ms-1" style={apiLimit == 8 ? {transform: `rotate(180deg)`} : {transform: `rotate(0)`}} />}</button>
                </div>
            </div>
        </section>
    );
};

export default FooterTop