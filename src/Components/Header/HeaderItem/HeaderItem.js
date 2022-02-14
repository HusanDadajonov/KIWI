//--ALL IMPORTS--
import { Link } from "react-router-dom";

function HeaderItem({text,path}){

    return (
        <li className="header__item">
            <Link className="header__item--link text-decoration-none" to={path}>{text}</Link>
        </li>
        
    );
    
}

export default HeaderItem;