//--ALL IMPORTS--
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import HeaderItem from "./HeaderItem/HeaderItem";
import HeaderForm from "./HeaderForm/HeaderForm";
import "./Header.scss";

function Header({headerFormCheck}){

    //--HOOK--
    const [activeTranslate,setActiveTranslate] = useState(1);

    return(
        <header className="header">
            <div className="header__container container">
                <div className="header__wrap d-flex align-items-center justify-content-between">
                    <div className="header__logos--wrap d-flex align-items-center">
                        <Link className="header__logo--link" to="/">
                            <img className="header__logo" src={Logo} alt="logo" />
                        </Link>
                        <p className="header__logo--text">Продай, найди, купи все что пожелаешь…</p>
                    </div>  
                    <ul className="header__list list-unstyled m-0 p-0 d-flex align-items-center">
                        <HeaderItem text="Объявления" path="/"/>
                        <HeaderItem text="Магазины" path="/"/>
                        <HeaderItem text="Для бизнеса" path="/"/>
                        <HeaderItem text="Помощь" path="/"/>
                    </ul>
                    <div className="d-flex align-items-center">
                        <div className="header__translate d-flex align-items-center me-5">
                            <button className={activeTranslate == 1 ? `header__translate--btn header__translate--btn--active border-0 bg-transparent p-0` : `header__translate--btn  border-0 bg-transparent p-0`} onClick={()=> setActiveTranslate(1)}>Рус</button>
                            <span className="header__translate--line mx-2">|</span>
                            <button className={activeTranslate == 2 ? `header__translate--btn header__translate--btn--active border-0 bg-transparent p-0` : `header__translate--btn  border-0 bg-transparent p-0`} onClick={()=> {setActiveTranslate(2)}}>O’z</button>
                        </div>
                        <div className="header__login--btns d-flex align-items-center">
                            <Link className="header__login--btn text-decoration-none" to="/">{ `Вход`}</Link>
                            <span className="header__login--line mx-2">|</span>
                            <Link className="header__login--btn" to="/login1">Регистрация</Link>
                        </div>
                    </div>  
                </div>
                {headerFormCheck ? <HeaderForm/> : null}
            </div>
        </header>
    );
    
}

export default Header;