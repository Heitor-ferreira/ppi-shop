export default function Bones(id, title, thumbnail, description){
    return(
        <div className="bones">
            <button onClick={togglePopup}>
                <img src={thumbnail} alt={title} />
            </button>
        </div>
    );
}