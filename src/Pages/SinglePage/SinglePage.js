//--ALL IMPORTS--
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SliderItem from "./SliderItem/SliderItem";
import FakeApi from "../../FakeApi/FakeApi";
import Card from "../../Components/Card/Card"
import "./SinglePage.scss";

function SinglePage({setPathName}){

    //--GET POSTiD--
    const postID = useParams();

    //--HOOKS--
    const [currentPost,setCurrentPost] = useState([]);
    const [currentCategory,setCurrentCategory] = useState([]);
    const [sliderCount,setSliderCount] = useState(0);
    const [authorBtnActive,setAuthorBtnActive] = useState(1);
    const [activeTitle,setActiveTitle] = useState(1);
    const [checkLoading,setChekcLoading] = useState(false)

    //--CURRENT POST FETCH--
    useEffect(async ()=> {
        const response = await fetch(`https://fakestoreapi.com/products/${postID.id}`);
        const json = await response.json();

        setCurrentPost([json]);
        if(response.status == 200)setChekcLoading(true);

        const responseCategory = await fetch(`https://fakestoreapi.com/products/category/${json.category}`);
        const jsonCategory = await responseCategory.json();

        //--RANDOMED API ARR--
        setCurrentCategory(jsonCategory.sort(() => (Math.random() > .5) ? 1 : -1))
       
    },[postID,activeTitle]); 

    //--GET 4 POST--
    currentCategory.splice(4);

    return(
        <section className="single-post">
            <div className="single-post__container container">
                <div className="single-post__row row mb-5">
                    <div className="single-post__col col-sm-6 d-flex">
                        <ul className="single-post__btn--list list-unstyled m-0 p-0">
                            {
                                currentCategory.length != 0 ?
                                currentCategory.map((item,index) => (
                                    <SliderItem 
                                        itemClass="single-post__slider--btn" 
                                        index={index} 
                                        img={item.image}
                                        key={item.id}
                                        setSliderCount={setSliderCount}
                                    />
                                )) : null
                            }
                        </ul>
                        <div className="single-post__wrap">
                            <ul className="single-post__slider list-unstyled m-0 p-0" style={{transform: `translateY(-${sliderCount * 400}px)`}}>
                                
                                {
                                    !checkLoading ? <p>loading...</p> : null
                                }
                                {
                                    currentCategory.length != 0 ?
                                    currentCategory.map((item,index) => (
                                        <SliderItem 
                                            itemClass="single-post__slider--item" 
                                            value={index} 
                                            img={item.image}
                                            key={item.id}
                                            currentCategory={currentCategory}
                                        />
                                    )) : null
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="single-post__col col-sm-6">
                        <div className="single-post__texts--wrap d-flex align-items-center justify-content-between">
                            <p className="single-post__small--desc">??????????????: 4418970</p>
                            <p className="single-post__small--desc">??????????????????: 28.04.17 ??????????????????: 28.04.17 </p>
                        </div>
                        <span className="single-post__price">{currentPost.length != 0 ? currentPost[0].price : ""} y.e</span>
                        <a href="#" className="single-post__location">??????????????, ?????????????????????? ??????????????, ???????????????????????? ?????????? </a>
                        <div className="single-post__tell--wrap">
                            <a className="single-post__tell" href="tel:99891 166 23 47">99891 166 ****</a>
                            <a className="single-post__tell" href="tel:99891 166 23 47">???????????????? ??????????????????</a>
                        </div>
                        <div className="single-post__tell--wrap">
                            <a className="single-post__tell" href="tel:99891 166 23 47">99891 166 ****</a>
                            <a className="single-post__tell" href="tel:99891 166 23 47">???????????????? ??????????????????</a>
                        </div>
                        <p className="single-post__author--desc">
                            ?????????? ????????????????????: <a className="single-post__author" href="#">?????????????????? ??????????????</a>
                        </p>
                        <div className="single-post__btns--wrap">
                            <button className={authorBtnActive == 1 ? `single-post__btn single-post__btn--active` : `single-post__btn`} onClick={()=> setAuthorBtnActive(1)}>???????????????? ????????????</button>
                            <button className={authorBtnActive == 2 ? `single-post__btn single-post__btn--active` : `single-post__btn`} onClick={()=> setAuthorBtnActive(2)}>???????????????????? ???????? ????????</button>
                        </div>
                    </div>
                </div>
                <ul className="single-post__table m-0 p-0 list-unstyled mb-5">
                    {
                        FakeApi.table.map(item => (
                            <li key={item.id} className="single-post__table--item">
                                <h3 className="single-post__table--title">{item.title}</h3>
                                <span className="single-post__table--result">{item.result}</span>
                            </li>
                        ))
                    }
                </ul>
                <p className="single-post__big--desc">???????????? ?????????????????? 3?? ?????? ???? 1 ?????????? 7 ?????????????? ?????????????????? ????????. ?????????????????????? ???????????? ???????? ?????????? ???????????????? ???????? ?????????? ?????????? ???????????????????????? ?? ?????????????? ????????????. ?????????????? ???????????????? ?????????????????? ????????????. 2 ?????? ????????. ?????? ???????????? ?????????? ???????? ????????????????.???????????? ???????????????? ?????????????????? ??????????. </p>
                <p className="single-post__big--desc">???????????? ?????????????? ???? ?????????? ???????????????? ??????????????????. ?????????????? ?????????????????????? ???????????????? ????????????. ????????????????,???????????? ???????? ?? ???????????? ??????????????. ?????????????? ???????????? ???????????? ???????????????? ?????????????? ???? ??????????. ?????????????????? ????????????????????. ?????? ???????????????????????????? ?????? ?????????? ???????????? ???????????????? ???????????? ??????. ???????? ??????????????. ???????????????????? ???????????? ?????????? ??????????. ???????????? ?????????????? ???????? ?? ?????????????????? ?? ???????? ????????????????. ????????????????????.</p>
                <div className="d-flex mb-5">
                    <span className="single-post__views">??????????????????:1090</span>
                    <button className="single-post__block">??????????????????????</button>
                </div>

                <div className="single-post__slider--wrap">
                    <div className="footer-top__titles mb-5 cards__titles d-flex align-items-center">
                        <h3 className={activeTitle == 1 ? `cards__top--title cards__top--title-active` : `cards__top--title`} onClick={()=> setActiveTitle(1)}>?????????????? ????????????????????</h3>
                        <h3 className={activeTitle == 2 ? `cards__top--title cards__top--title-active` : `cards__top--title`} onClick={()=> setActiveTitle(2)}>???????????????????? ????????????</h3>  
                    </div>
                    <ul className="single-post__slider--list d-flex p-0 m-0 align-items-center justify-content-between">
                        {
                            currentCategory.length != 0 ?
                            currentCategory.map((item,index) => (
                                <Card 
                                    title={item.title}
                                    time={"?????????? 22:55"}
                                    img={item.image}
                                    price={item.price}
                                    key={index}
                                    id={item.id}
                                />
                            )): null
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
    
}

export default SinglePage