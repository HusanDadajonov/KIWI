//--ALL IMPORTS--
import Auto from "../assets/images/auto.svg";
import Biznes from "../assets/images/biznes.svg";
import Computers from "../assets/images/computers.svg";
import Construction from "../assets/images/construction.svg";
import Favorite from "../assets/images/favorite.svg";
import Home from "../assets/images/home.svg";
import PersonalItem from "../assets/images/personal-item.svg";
import Work from "../assets/images/work.svg";
import Computer from "../assets/images/computer.jpg";
import Beg from "../assets/images/beg.jpg";
import OficceTable from "../assets/images/office-table.jpg";

const FakeApi = {

    //--CATEGORIES FAKE API--
    categories : [
        {
            text : "Автомобили",
            img : Auto,
            id : 1,
        },
        {
            text : " Бизнес и услуги",
            img : Biznes,
            id : 2,
        },
        {
            text : " Электроника",
            img : Computers,
            id : 3,
        },
        {
            text : " Стройка и ремонт",
            img : Construction,
            id : 4,
        },
        {
            text : " Хобби и Спорт",
            img : Favorite,
            id : 5,
        },
        {
            text : " Дом и Сад",
            img : Home,
            id : 6,
        },
        {
            text : "Личные вещи",
            img : PersonalItem,
            id : 7,
        },
        {
            text : "Работа",
            img : Work,
            id : 8,
        },
        {
            text : " Бизнес и услуги",
            img : Biznes,
            id : 9,
        },
        {
            text : " Электроника",
            img : Computers,
            id : 10,
        },
        {
            text : " Стройка и ремонт",
            img : Construction,
            id : 11,
        },
        {
            text : " Хобби и Спорт",
            img : Favorite,
            id : 12,
        },
        {
            text : " Стройка и ремонт",
            img : Construction,
            id : 13,
        },
        {
            text : " Хобби и Спорт",
            img : Favorite,
            id : 14,
        },
        {
            text : " Дом и Сад",
            img : Home,
            id : 15,
        },
        {
            text : "Личные вещи",
            img : PersonalItem,
            id : 16,
        },
        {
            text : "Работа",
            img : Work,
            id : 17,
        },
        {
            text : " Хобби и Спорт",
            img : Favorite,
            id : 18,
        },
        {
            text : " Стройка и ремонт",
            img : Construction,
            id : 19
        }
    ],

    //--PRODUCTS FAKE API--
    products : [
        {
            id : 1,
            text : `Техника Apple по доступным ценам`,
            listings : 843,
            img : Computer,
        },
        {
            id : 2,
            text : `Брендовые товары за копейки`,
            listings : 243,
            img : Beg,
        },
        {
            id : 3,
            text : `Все товары дляофиса в одном месте`,
            listings : 987,
            img : OficceTable,
        },
        {
            id : 4,
            text : `Обуродквния из китая для малого бизнеса`,
            listings : 987,
            img : Computer,
        },
        {
            id : 5,
            text : `Техника Apple по доступным ценам`,
            listings : 843,
            img : Computer,
        },
        {
            id : 6,
            text : `Брендовые товары за копейки`,
            listings : 243,
            img : Beg,
        },
        {
            id : 7,
            text : `Брендовые товары за копейки`,
            listings : 243,
            img : Beg,
        },
        {
            id : 8,
            text : `Все товары дляофиса в одном месте`,
            listings : 987,
            img : OficceTable,
        },
        {
            id : 9,
            text : `Обуродквния из китая для малого бизнеса`,
            listings : 987,
            img : Computer,
        },

        {
            id : 10,
            text : `Техника Apple по доступным ценам`,
            listings : 843,
            img : Computer,
        },
        {
            id : 11,
            text : `Брендовые товары за копейки`,
            listings : 243,
            img : Beg,
        },
           
    ],

    //--SINGLE PAGE TABLE FAKE API--

    table : [
        {
            id : 1,
            title : "Количество комнат:",
            result : "6"
        },
        {
            id : 2,
            title : "Общая площадь:",
            result : "40 м2"
        },
        {
            id : 3,
            title : "Этаж:",
            result : "32"
        },
        {
            id : 4,
            title : "Этажность дома:",
            result : "6"
        },
        {
            id : 5,
            title : "Состояние квартиры:",
            result : "Первая сдача "
        },
        {
            id : 6,
            title : "Этаж:",
            result : "32"
        },
        {
            id : 7,
            title : "Планировка",
            result : "Раздельная"
        },
        {
            id : 8,
            title : "Год постройки/сдачи",
            result : "Сдача в 2017"
        },
        {
            id : 9,
            title : "Ремонт",
            result : "Авторский проект"
        },
        {
            id : 10,
            title : "Санузел",
            result : "2 санузла и более"
        },
        {
            id : 11,
            title : "Меблирована",
            result : "Да"
        },
        {
            id : 12,
            title : "Высота потолков",
            result : "32"
        },
    ],
    
}

export default FakeApi;