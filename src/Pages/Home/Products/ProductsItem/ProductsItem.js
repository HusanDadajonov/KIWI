//--ALL IMPORTS--
import { BsChevronDoubleRight } from "react-icons/bs";

function ProductsItem({title,listings,img}) {
    
    return(
        <li className="products__item">
            <h3 className="products__title">{title}</h3>
            <img className="products__img" src={img} alt="product" />
            <span className="products__listings">{listings} обьявлениий {<BsChevronDoubleRight />}</span>
        </li>
    );
    
}

export default ProductsItem