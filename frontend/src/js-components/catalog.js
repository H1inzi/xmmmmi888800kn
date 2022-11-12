import StandardProductCard from "./standard-product-card";
import React from 'react';

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

class Catalog extends React.Component {
    constructor() {
        super();
        this.state = {
          csfValue: '' // search form value
        }
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      handleInputChange(e) {
        console.log([e.target.name])
        this.setState({
            [e.target.name]: e.target.value
        });
      }
    SPCGen(arr) {
        let SPCArray = [];
        for (let i = 0; i < arr.length; i += 5) {
            SPCArray.push(
            <div className="spc-items__row">
                {arr.slice(i, i + 5)}
            </div>
            )
        }
        console.log(SPCArray[0])
        return SPCArray
    }
    render() {
        return (
            <div className="spc-item-global-box">
                <div className="spc-gb__title">Каталог товаров</div>
                <div className="catalog-search">
                    <div className="search-form js-sc catalog-sf" style={{marginBottom: '20px', width: '300px'}}>
                        <form action="/search" method="post" class="hsearch-form">
                            <div class="inp-gr hsf-box">
                                <div name="q" id="header-search" value="" input-classname="header-search-form-control" endpoint="/local/ajax/search.php" action="action_here" placeholder="Поиск" floated-labels="false" vce-ready="">
                                    <div class="autocomplete">
                                        <div class="input-group">
                                            <input id="header-search" value={this.state.csfValue} onChange={this.handleInputChange} name="csfValue" placeholder="Поиск" autocomplete="off" class="form-control header-search-form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="header-search-form__submit-btn" aria-label="Искать">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.382 20.399l-4.86-4.86a.703.703 0 00-.995 0l-.497.496-.951-.95A9.1 9.1 0 0018.28 9.14C18.28 4.1 14.18 0 9.14 0 4.1 0 0 4.1 0 9.14c0 5.04 4.1 9.14 9.14 9.14a9.1 9.1 0 005.944-2.202l.951.952-.497.497a.703.703 0 000 .994l4.86 4.86a2.108 2.108 0 002.984 0 2.108 2.108 0 000-2.982zM9.14 16.875c-4.264 0-7.734-3.47-7.734-7.735 0-4.264 3.47-7.734 7.734-7.734 4.265 0 7.735 3.47 7.735 7.734 0 4.265-3.47 7.735-7.735 7.735zm13.247 5.512a.702.702 0 01-.994 0l-4.363-4.363.994-.994 4.363 4.363a.704.704 0 010 .994z" fill="#7A7A7A">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="search-fields">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="wood" name="hobby1" />
                            <label class="form-check-label" for="wood">Дерево</label>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="plastic" name="hobby2" />
                            <label class="form-check-label" for="plastic">Пластмасса</label>
                        </div>
                    </div>
                    <div className="search-fields">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="ceramics" name="hobby1" />
                            <label class="form-check-label" for="ceramics">Керамика</label>
                        </div>
                    </div>
                            
                </div>
                <div className="spc-items-box">
                    <div className="spc-items__wrapper">
                        {this.SPCGen([
                            <StandardProductCard 
                                title="Ваза деревянная 15х30"
                                price="400"
                                imgSrc={vaza15x30}
                            />,
                            <StandardProductCard 
                                title="Кувшин керамический 15х20"
                                price="800"
                                imgSrc={ceramics_jug_15x20}
                            />,
                            <StandardProductCard 
                                title="Ваза керамическая 20х30"
                                price="2000"
                                imgSrc={ceramics_vase_20x30}
                            />,
                            <StandardProductCard 
                                title="Заварочный чайник керамический 1000 мл"
                                price="3000"
                                imgSrc={teaport_1000ml}
                            />,
                            <StandardProductCard 
                                title="Тарелка деревянная 20см"
                                price="400"
                                imgSrc={wood_bowl_20}
                            />,
                            <StandardProductCard 
                                title="Тарелка деревянная 30см"
                                price="600"
                                imgSrc={wood_bowl_30}
                            />,
                            <StandardProductCard 
                                title="Тарелка 30см"
                                price="700"
                                imgSrc={black_wood_bowl_30cm}
                            />,
                            <StandardProductCard 
                                title="Скалка деревянная 30см"
                                price="300"
                                imgSrc={wood_rolling_pin_30cm}
                            />,
                            <StandardProductCard 
                                title="Молоток для отбивания мяса (Тендерайзер) 30см"
                                price="400"
                                imgSrc={wood_tenderizer_30cm}
                            />
                        ])}
                    </div>
                </div>
            </div>
        )
    }
}

export default Catalog;