import WeeklyProductCard from './weekly-product-card.js';
import StandardProductCard from './standard-product-card.js';

import vaza15x30 from '../media/images/vaza15x30.png';
import ceramics_jug_15x20 from '../media/images/ceramic-jug-15x20.png';
import ceramics_bowl from '../media/images/ceramics-bowl.png';
import ceramics_vase_20x30 from '../media/images/ceramics-vase-20x30.png';
import teaport_1000ml from '../media/images/teaport-1000ml.png';
import wood_bowl_20 from '../media/images/wood-bowl-20.png';
import wood_bowl_30 from '../media/images/wood-bowl-30.png';
import black_wood_bowl_30cm from '../media/images/black-wood-bowl-30cm.jpg';
import wood_rolling_pin_30cm from '../media/images/wood-rolling-pin-30cm.jpg';
import wood_tenderizer_30cm from '../media/images/wood-tenderizer-30cm.jpg'

function TitleProducts() {
    return (
        <div>
            <div className="top-section-h">
                Товары недели
            </div>
            <div className="weekly-products js-slider">
                <div className="glide">
                    <ul className="glide-slider__list">
                            <StandardProductCard 
                                title="Ваза керамическая 20х30"
                                price="2000"
                                imgSrc={ceramics_vase_20x30}
                            />
                            <StandardProductCard 
                                title="Тарелка деревянная 30см"
                                price="600"
                                imgSrc={wood_bowl_30}
                            />
                            <StandardProductCard 
                                title="Скалка деревянная 30см"
                                price="300"
                                imgSrc={wood_rolling_pin_30cm}
                            />
                            <StandardProductCard 
                                title="Молоток для отбивания мяса (Тендерайзер) 30см"
                                price="400"
                                imgSrc={wood_tenderizer_30cm}
                            />
                        {/*<li className="glide-slider__list__element">
                            <WeeklyProductCard 
                                title = "Ваза из лемезита точеная 100*100*165мм"
                                price = "3000"
                                imgSrc={teaport_1000ml}
                            />
                        </li>
                        <li className="glide-slider__list__element">
                            <WeeklyProductCard 
                                title = "Ваза из лемезита точеная 100*100*165мм"
                                price = "9999"
                                imgSrc={wood_bowl_20}
                            />
                        </li>
                        <li className="glide-slider__list__element">
                            <WeeklyProductCard 
                                title = "Ваза из лемезита точеная 100*100*165мм"
                                price = "9999"
                                imgSrc={wood_bowl_30}
                            />
                        </li>*/}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TitleProducts;