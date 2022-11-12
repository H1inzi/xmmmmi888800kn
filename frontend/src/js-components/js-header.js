import HeaderLogo from '../media/header-logo.svg';
import headerLogo from '../media/logo.png'
import React from 'react'
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      sfValue: '' // search form value
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    console.log([e.target.name])
    this.setState({
        [e.target.name]: e.target.value
    });
  }
  render () {
    window.addEventListener('scroll', () => {
      console.log(window.pageYOffset)
      if (window.pageYOffset > 0) {
        document.querySelector(".top-header").style.boxShadow = "0 0 1px";
      }
      else {
        document.querySelector(".top-header").style.boxShadow = "0"
      }
    })
    return (
      <header className="js-header">
        <div className="wrapper top-header">
          <div className="left-header">
            <a href="/" className="header_logo" aria-label="Главная" title="Главная">
              <img className="img-hl"
                src={headerLogo}
              />
            </a>
            <div className="catalog-container">
                <button className="catalog-open-btn" data-lit-popup-open="catalog-menu">
                    <span className="catalog-open-btn__text">Подробнее о нас</span>
                </button>
            </div>
          </div>
          <div className="right-header">
            <div className="search-form js-sc">
              <form action="/search" method="post" className="hsearch-form">
                <div className="inp-gr hsf-box">
                  <div name="q" id="header-search" value="" input-className="header-search-form-control" endpoint="/local/ajax/search.php" action="action_here" placeholder="Поиск" floated-labels="false" vce-ready="">
                    <div className="autocomplete">
                      <div className="input-group">
                        <input id="header-search" name="sfValue" value={this.state.sfValue} onChange={this.handleInputChange} placeholder="Поиск" autocomplete="off" className="form-control header-search-form-control" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="header-search-form__submit-btn" aria-label="Искать">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.382 20.399l-4.86-4.86a.703.703 0 00-.995 0l-.497.496-.951-.95A9.1 9.1 0 0018.28 9.14C18.28 4.1 14.18 0 9.14 0 4.1 0 0 4.1 0 9.14c0 5.04 4.1 9.14 9.14 9.14a9.1 9.1 0 005.944-2.202l.951.952-.497.497a.703.703 0 000 .994l4.86 4.86a2.108 2.108 0 002.984 0 2.108 2.108 0 000-2.982zM9.14 16.875c-4.264 0-7.734-3.47-7.734-7.735 0-4.264 3.47-7.734 7.734-7.734 4.265 0 7.735 3.47 7.735 7.734 0 4.265-3.47 7.735-7.735 7.735zm13.247 5.512a.702.702 0 01-.994 0l-4.363-4.363.994-.994 4.363 4.363a.704.704 0 010 .994z" fill="#7A7A7A"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <ul className="list-unstyled iconic-list header-iconic-list js-header-iconic-list">
              <li className="iconic-list__item header-iconic-list__item header-iconic-list__item--orders">
                <a href="/personal/" className="icon-link iconic-item__link" data-lit-popup-open="login">
                  <div className="icon-link__icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                    </svg>
                  </div>
                  <div className="icon-link__text header-icon-link__text">Заказы
                  </div>
                </a>
              </li>
              <li className="iconic-list__item header-iconic-list__item">
                <a href="/personal/favorites/" className="icon-link iconic-item__link" data-lit-popup-open="login">
                  <div className="icon-link__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <div className="icon-link__text header-icon-link__text">Избранное</div>
                </a>
              </li>
              <li className="iconic-list__item header-iconic-list__item">
                <a href="/personal/profile/" className="icon-link iconic-item__link" data-lit-popup-open="login">
                  <div className="icon-link__icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#53A17E" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                  </div>
                  <div className="icon-link__text header-icon-link__text">Войти</div>
                </a>
              </li>
              <li className="iconic-list__item header-iconic-list__item header-iconic-list__item--cart">
                <a href="/personal/cart/" className="icon-link iconic-item__link">
                  <div className="icon-link__icon cart-icon" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    </svg>
                    <div className="cart-icon__amount js-cart-amount is-visible"></div>
                  </div>
                  <div className="icon-link__text header-icon-link__text">Корзина</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sub-header wrapper">
          <div className="dropdown__top header-city-picker js-header-city-picker">
            <location-identifier guess-city-id="0000073738"></location-identifier>
            <div className="dropdown__label">Город:</div>
            <button className="dropdown__toggler" aria-haspopup="true" data-lit-popup-open="geolocation">Москва</button>
          </div>
          <a href="tel:+74951277181" className="aside-callback__phone js-callback-phone">
            <span className="aside-callback__phone-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.748 40c-1.29 0-2.571-.228-3.823-.683A40.77 40.77 0 0110.12 29.88 40.768 40.768 0 01.684 15.076a11.064 11.064 0 01-.565-5.439c.252-1.72.919-3.39 1.927-4.828A11.371 11.371 0 015.95 1.332 11.138 11.138 0 0111.283 0c.59 0 1.099.412 1.222.988l1.962 9.156a1.25 1.25 0 01-.338 1.146l-3.353 3.352a32.902 32.902 0 0014.582 14.582l3.353-3.353c.3-.3.731-.427 1.146-.338l9.155 1.962c.577.124.988.633.988 1.222 0 1.895-.448 3.69-1.332 5.333a11.37 11.37 0 01-3.476 3.905 11.323 11.323 0 01-4.829 1.926c-.539.08-1.078.119-1.615.119zM10.284 2.555c-2.5.276-4.718 1.586-6.19 3.688-1.658 2.365-2.044 5.273-1.06 7.979a37.913 37.913 0 0022.745 22.745c2.706.983 5.614.597 7.978-1.06 2.103-1.473 3.413-3.691 3.689-6.19l-7.448-1.597-3.501 3.501a1.25 1.25 0 01-1.416.248 35.394 35.394 0 01-16.95-16.95 1.25 1.25 0 01.248-1.415l3.501-3.501-1.596-7.448z" fill="#fff"></path>
              </svg>		
            </span>
            <span className="aside-callback__phone-text">+7 (999) 999-99-99</span>
          </a>
          <button className="aside-callback__button" data-lit-popup-open="callback">
            <span className="aside-callback__button-text">Обратный звонок</span>
          </button>
        </div>
      </header>
      )
    }
  }