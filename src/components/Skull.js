import { Context } from "../context/Context";
import Popup from "./Popup";
import React, { useContext, useState } from 'react';


export default function Skull() {  

    const [popupContent, setPopupContent] = useState(null);  // Estado para controlar o popup

    // Função para abrir o popup com o conteúdo respectivo
    const handleButtonClick = (content) => {
        setPopupContent(content);  // Exibe o conteúdo do popup
    };

    // Função para fechar o popup
    const closePopup = () => {
        setPopupContent(null);  // Remove o conteúdo do popup
    };

    return (
        <div class="atlas-container">
            a
            <div className="head">
                b
                <button></button>
                
            </div>
            <div className="torso">
                c
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div className="pelvis">
                d
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <div className="legs">
                e
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
            </div>
            <div className="tibia" >
                f
                <button>1</button>
                <button>2</button>
            </div>
            <div className="foot">
                g
                <button>1</button>
                <button>2</button>
            </div>
        </div>
    );
}