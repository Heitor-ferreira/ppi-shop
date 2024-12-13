import { Context } from "../context/Context";
import { useContext, useState } from "react";
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import MoreIcon from '@mui/icons-material/More';
import "./pop.css";
import Popup from './Popup'; 

export default function Cart({ id, thumbnail, title, description, }) {

    const {subItemToCart } = useContext(Context);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen); 
    };

    

    return (
        <div className="cart-body">
            <div className="cart-img">
            <img src={thumbnail} alt={thumbnail}/>
            </div>
            <div className="title-cart">
            <h2>{title}</h2>
            <button className="more" onClick={togglePopup}><MoreIcon sx={{ fontSize: 40 }}/>
            </button>
            {isPopupOpen && (
                <Popup 
                    onClose={togglePopup} // Fecha o popup
                    title={title} 
                    description={description} 
                    thumbnail={thumbnail} 
                />
            )}
            </div>
            <div className="button-group">
                <button onClick={() => subItemToCart(id)}>
                    <BookmarkRemoveIcon  sx={{ fontSize: 40 }}/>
                </button>

            </div>
        </div>
        
    );
}