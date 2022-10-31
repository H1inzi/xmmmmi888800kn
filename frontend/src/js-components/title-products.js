import WeeklyProductCard from './weekly-product-card.js'
import vaza from '../media/images/vaza.png'
function TitleProducts() {
    return (
        <div>
            <div className="top-section-h">
                Товары недели
            </div>
            <div className="weekly-products js-slider">
                <div className="glide">
                    <ul className="glide-slider__list">
                        <li className="glide-slider__list__element">
                            <WeeklyProductCard 
                                title = "Ваза из лемезита точеная 100*100*165мм"
                                price = "9999"
                                imgSrc={vaza}
                            />
                        </li>
                        <li className="glide-slider__list__element">
                            <WeeklyProductCard 
                                title = "Ваза из лемезита точеная 100*100*165мм"
                                price = "9999"
                                imgSrc={vaza}
                            />
                        </li>
                        <li className="glide-slider__list__element">
                            <WeeklyProductCard 
                                title = "Ваза из лемезита точеная 100*100*165мм"
                                price = "9999"
                                imgSrc={vaza}
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TitleProducts;