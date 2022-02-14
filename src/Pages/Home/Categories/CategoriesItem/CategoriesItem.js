function CategoriesItem({img,categorieName}){
    
    return(
        <li className="categories__item">
            <img className="categories__img" src={img} alt="categories" />
            <p className="categories__name">{categorieName}</p>
        </li>
    );

}

export default CategoriesItem;