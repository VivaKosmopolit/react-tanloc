import "./ExcursionCard.css"

function ExcursionCard(props) {
    return (
        <div className="excursions-card">
            <header className="excursions-card__header">
                <img src={ props.imagePath } alt={ props.title } className="excursions-card__image"/>
                <button className="excursions-card__like-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
                        <path fill="#fff" d="M11.483 19.69a2.556 2.556 0 0 1-1.833-.743l-6.37-6.416a6.078 6.078 0 0 1-1.65-5.812 6.013 6.013 0 0 1 9.853-2.86 6.014 6.014 0 0 1 9.855 2.86 6.078 6.078 0 0 1-1.678 5.858l-6.417 6.416a2.557 2.557 0 0 1-1.76.697ZM7.423 3.667c-.992 0-1.957.321-2.75.916a4.583 4.583 0 0 0-1.714 2.503 4.693 4.693 0 0 0 1.32 4.519l6.416 6.417a1.182 1.182 0 0 0 1.668 0l6.417-6.371a4.703 4.703 0 0 0 1.229-4.574c-.27-1-.872-1.88-1.706-2.494a4.684 4.684 0 0 0-6.297.706.733.733 0 0 1-1.045 0 4.666 4.666 0 0 0-3.538-1.622Z"/>
                    </svg>
                </button>
            </header>
            <div className="excursions-card__main-content">
                <h3 className="excursions-card__title">
                    { props.title }
                </h3>
                <p className="excursions-card__text">
                    { props.description }
                </p>
                <footer className="excursions-card__footer">
                    <span className="excursions-card__price">
                        { props.price }
                    </span>
                </footer>
            </div>
        </div>
    );
}

export default ExcursionCard;
