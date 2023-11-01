import "./ExcursionsList.css"
import ExcursionCard from "../ExcursionCard/ExcursionCard";
import db from "../../json/db.json"

function ExcursionsList() {
    return (
        <div className="excursions-list">
            <header className="excursions-list__header">
                <h2 className="excursions-list__header-title">
                    Экскурсии
                </h2>
            </header>
            <div className="excursions-list__cards-wrapper">
                { db.cards.map((card, index) => (
                    <ExcursionCard
                        key = { index }
                        imagePath = { card.imagePath }
                        title = { card.title }
                        description = { card.description }
                        price = { card.price }
                    />
                ))}
            </div>
            <button className="excursions-list__button">
                Все экскурсии
            </button>
        </div>
    );
}

export default ExcursionsList;
