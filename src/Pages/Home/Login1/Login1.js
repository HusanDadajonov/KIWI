//--ALL IMPORTS--
import { useRef, useState } from "react";
import LoginImg from "../../../assets/images/login.jpg";
import LoginBtn from "../../../Components/LoginBtn/LoginBtn";
import "./Login1.scss";

function Login1(){

    const inpRef = useRef();
    const [formValidate,setFormValidet] = useState(false)

    function FormSubmit(e){
        e.preventDefault();
        inpRef.current.value ? window.location.href = "/" : setFormValidet(true);
    };

    return (
        <section className="login">
            <div className="login__container container">
                <div className="login__row row m-0 align-items-center">
                    <div className="login__col col-sm-6 pe-5">
                        <div className="login__wrap">
                            <h3 className="login__title">Бесплатная регистрация</h3>
                            <span className="login__err">{formValidate ? `Please enter your name` : ""}</span>
                            <form className="login__form" onSubmit={FormSubmit}>
                                <label className="login__label" htmlFor="name" >
                                    <input onChange={(e)=> e.target.value ? setFormValidet(false) : setFormValidet(true)} style={formValidate ? {borderColor:"red"} : null} ref={inpRef} placeholder="Enter your name" className="login__inp" autoComplete="off" type="text" id="name" name="user-name" />
                                </label>
                                <LoginBtn text="Далее"/>
                            </form>
                            <span className="login__span">или</span>
                            <a className="login__link" href="#">Войдите в систему, если у вас уже есть аккаунт kivi.uz</a>
                        </div>
                    </div>
                    <div className="login__col col-sm-6">
                        <div className="login__img--wrap">
                            <img src={LoginImg} alt="login-page" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login1