//--ALL IMPORTS--
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";
import SearchLinks from "./SearchLinks/SearchLinks";
import "./Search.scss";

function  Search({setHeaderFormCheck}) {
    //--FORM CHECK---

    setHeaderFormCheck(false);
    const results = useParams();
  
    //--HOOKS--
    const [resultApi,setResultApi] = useState([]);
    const [resultAllApi,setResultAllApi]  = useState([]);
    const [checkLoading,setChekcLoading] = useState(false);
    
    useEffect(async ()=> {

        const response = await fetch(`https://fakestoreapi.com/products/category/${results.getSelectValue}`);
        const apiJson = await response.json();

        if(response.status == 200)setChekcLoading(true);

        if(apiJson){
            setResultAllApi(apiJson);
            let filred = apiJson.filter(item => item.title.toLowerCase().includes(results.getInpValue));
            setResultApi(filred);
        };
        
    },[results]);
    resultAllApi.splice(4);

    return (
       <section className="search">
           <div className="search__container container">
                <form className="search__form">
                    <label className="search__label">
                        <input className="search__input" type="search"  placeholder="Введите название обявления"/>
                    </label>
                </form>
                <ul className="search__links p-0 m-0 mb-5 list-unstyled d-flex">
                    <SearchLinks text={"Интерсное"} itemClass={"search__link search__link--nth1"}/>
                    <SearchLinks text={"Топ"} itemClass={"search__link search__link--nth2"}/>
                    <SearchLinks text={"Отличные предложение"} itemClass={"search__link search__link--nth3"}/>
                    <SearchLinks text={"Супер цена"} itemClass={"search__link search__link--nth4"}/>
                    <SearchLinks text={"г.Ташкент"} itemClass={"search__link--location"}/>
                    <SearchLinks text={"г.Термез"} itemClass={"search__link--location"}/>
                    <SearchLinks text={"г.Самарканд"} itemClass={"search__link--location"}/>
                </ul>
                <div className="search__rubrik d-flex align-items-center">
                    <p className="search__rubrik--desc">Вы сейчас в рубрике</p>
                    <div className="search__rubric--wrap">
                        <button className="search__rubrik--btn">Электроника</button>
                        <button className="search__rubrik--btn">Мониторы</button>
                    </div>
                </div>
                <ul className="search__list">
                    {
                        checkLoading ? <button className="search__no-results" onClick={()=> window.location.href="/"} style={resultApi.length != 0 ? {display : "none"} : {display : "flex"} }>No results try again</button> : <p>loading...</p>
                    }
                    
                    {
                        resultApi.length != 0 ?
                        resultApi.map(item => (
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
                <div className="search__buy--box">
                    <h2 className="search__buy--title">СЕЙЧАС ИЩУТ</h2>
                    <ul className="search__buy--list  m-0 list-unstyled d-flex">
                        <li className="search__buy--item">
                            <h3 className="search__buy--small-title">купить Мясная продукция</h3>
                            <p className="search__buy--desc">2 часа назад</p>
                        </li>
                        <li className="search__buy--item">
                            <h3 className="search__buy--small-title">купить Мясная продукция</h3>
                            <p className="search__buy--desc">2 часа назад</p>
                        </li>
                        <li className="search__buy--item">
                            <h3 className="search__buy--small-title">купить Мясная продукция</h3>
                            <p className="search__buy--desc">2 часа назад</p>
                        </li>
                        <li className="search__buy--item">
                            <h3 className="search__buy--small-title">купить Мясная продукция</h3>
                            <p className="search__buy--desc">2 часа назад</p>
                        </li>
                        <li className="search__buy--item">
                            <h3 className="search__buy--small-title">купить Мясная продукция</h3>
                            <p className="search__buy--desc">2 часа назад</p>
                        </li>
                    </ul>
                </div>
                <span className="search__bootom--title">САМОЕ ИНТЕРЕСНОЕ</span>
                <ul className="search__bootom--list list-unstyled">
                    {
                        resultAllApi.length != 0 ?
                        resultAllApi.map(item => (
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
                
           </div>
       </section> 
    );
    
}

export default Search