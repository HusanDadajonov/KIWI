//--ALL IMPORTS--
import { Link, useLocation } from "react-router-dom";
import { FiCornerUpRight } from "react-icons/fi";

function Card({title,time,price,img,id}){

    return(
        <li className="cards__card">
            <div className="cards__img-wrap">
                <Link className="cards__single--link" to={`single/${id}`}>{<FiCornerUpRight />}</Link>
                <img className="cards__img" src={img} alt="products" />
            </div>
            <div className="cards__texts">
                <h3 className="cards__title">{title}</h3>
                <time className="cards__time">{time}</time>
                <span className="cards__price">{price} сум</span>
            </div>
        </li>
    );
    
}

export default Card;