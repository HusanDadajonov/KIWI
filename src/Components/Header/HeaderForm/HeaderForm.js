//--ALL IMPORTS--
import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react";

function HeaderForm(){

    //--HOOKS--
    const [apiCategory,setApiCategory] = useState([]);
    const [getSelectValue,setGetSelectValue] = useState("");
    const [getInpValue,setGetInpValu] = useState("");

    //--CATEGORIES API--
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>setApiCategory(json))
    },[]);

    //--HEADER SEARCH--
    function FormHandler(e){

        e.preventDefault();

        if(getSelectValue != "" && getInpValue != ""){
            window.location.href = `http://localhost:3000/search/${getInpValue}/${getSelectValue}`;
        };   

    };
    

    return (
        <div className="header__form--wrap d-flex align-items-center justify-content-between">
            <form onSubmit={FormHandler} className="header__form d-flex align-items-center">
                <input placeholder="Любая категория" list="data" type="text" className="header__select" onChange={(e)=> setGetSelectValue(e.target.value)} />
                <datalist id="data">
                    {
                        apiCategory.length != 0 ?
                        apiCategory.map(item => (
                            <option value={item} key={Math.random() * 2332}>{item}</option>
                        )) : null
                    }
                </datalist>
                    
                <label className="header__form--label">
                    <input onKeyUp={(e)=> setGetInpValu(e.target.value)} className="header__form--inp" type="search" placeholder="Что будем искать ?"/>
                </label>
                <select className="header__select">
                    <option value="1" key="1" hidden defaultValue >По всей Узбекистану</option>
                    <option value="2" key="2">afto</option>
                    <option value="3" key="3">afto</option>
                    <option value="4" key="4">afto</option>
                    <option value="5" key="5">afto</option>
                </select>
                <button className="header__form--btn" type="submit">Найти</button>
            </form>
            <button className="header__form--load-btn">Добавить обьявления</button>
        </div>
    );
    
}

export default HeaderForm;