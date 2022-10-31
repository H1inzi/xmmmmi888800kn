function StandardProductCard({title, price, imgSrc}) {
    return (
        <div className="standard-product-card">
            <div className="spc-item">
                <div className="spc-item__container">
                    <a className="spc-item__img">
                        <img 
                            src={imgSrc}>
                        </img>
                    </a>
                </div>
                <div className="spc-item__title-box">
                    <a className="spc-item__container spc-item__title">
                        {title}
                    </a>
                </div>
                <div className="spc-item__bottom">
                    <div className="spc-item__price-box">
                        <div className="spc-item__price-cont">
                            <span className="spc-item__price-text">
                                {price} ₽
                            </span>
                        </div>
                    </div>
                    <div class="flex-right">
                        <div class="wpc__add-to-cart">
                            <button class="btn__add-to-cart radius"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StandardProductCard;