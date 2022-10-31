function WeeklyProductCard({title, price, imgSrc}) {
    return (
        <a className="weekly-product-card">
            <div className="product-card">
                <div className="wpc__bold-title">
                    Текст Текст
                </div>
                <div className="weekly-product-card__content">
                    <div className="wpc__img-container">
                        <div className="product-card__img wpc__img">
                            <img className="img-fluid" 
                                src={imgSrc}>
                            </img>
                        </div>
                    </div>
                    <div className="wpc__info">
                        <div className="wpc__title">
                            <div className="wpc__title-text">
                                {title}
                            </div>
                        </div>
                        <div className="wpc-bottom">
                            <div className="wpc-flex-left">
                                <div className="wpc-price">
                                    {price} ₽
                                </div>
                            </div>
                            <div class="flex-right">
                                <div className="wpc__add-to-cart">
                                    <button className="btn__add-to-cart radius">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default WeeklyProductCard;