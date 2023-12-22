import {IoCafeOutline, IoRestaurant} from "react-icons/io5";
import {MdLocalGasStation} from "react-icons/md";
import {CiShop} from "react-icons/ci";
import {BiDrink} from "react-icons/bi";
import {AiTwotoneBank} from "react-icons/ai";


export const category =
[
    {
        id: 1,
        name: 'Restaurants in Newyork',
        icon: <IoRestaurant />
    },
    {
        id: 2,
        name: 'Gas Station in Kolkata',
        icon: <MdLocalGasStation />
    },
    {
        id: 3,
        name: 'Grocery in Kolkata',
        icon: <CiShop />
    },
    {
        id: 4,
        name: 'Cafe in Kolkata',
        icon: <IoCafeOutline />
    },
    {
        id: 5,
        name: 'Brewary in Kolkata',
        icon: <BiDrink />
    },
    {
        id: 6,
        name: 'Bank in Newyork',
        icon: <AiTwotoneBank />
    },
    
];