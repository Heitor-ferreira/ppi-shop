import { useContext, useState } from "react";
import { Context } from "../context/Context";
import "./pop.css";
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MoreIcon from '@mui/icons-material/More';

export default function Product({
    id,
    thumbnail,
    title,
    description,
}) {
    const { addItemToCart } = useContext(Context);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <article className={`card-body ${isPopupOpen ? "no-hover" : ""}`}>
            <img src={thumbnail} alt={title} />
            <div className="card-content">
                <div>
                    <h2>{title}</h2>
                </div>
                <p className="card-actions">
                    <button 
                        className="favoritar" 
                        onClick={() => addItemToCart(id)}
                    >
                        <BookmarkAddIcon sx={{ fontSize: 30 }} />
                    </button>

                    <button
                        className="saiba-mais-icon"
                        onClick={togglePopup}
                    >
                        <MoreIcon sx={{ fontSize: 30 }} />
                    </button>
                </p>
            </div>

            {/* Condicionalmente renderizando o popup */}
            {isPopupOpen && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={togglePopup}>
                            X
                        </button>
                        <h2 className="popup-title">{title}</h2>
                        <img className="popup-image" src={thumbnail} alt={title}  />
                        <p className="popup-description">{description}</p>
                    </div>
                </div>
            )}
        </article>
    );
}
