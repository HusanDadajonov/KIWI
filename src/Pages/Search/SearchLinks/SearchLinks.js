//--ALL IMPORTS--
import "./SearchLinks.scss";

function  SearchLinks({text,itemClass}) {
    
   return(
    <li className="search__links--item">
        <a className={itemClass} href="#">{text}</a>
    </li>
   );
   
}

export default SearchLinks;