import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { title, img, price, desc } = props;
  return (
    <article className="item">
      <img src={ img } alt={ `${title} img` } className="item-img" />
      <div className="item-info-container">
        <div className="title-price-container">
          <h3 className="item-title">{ title }</h3>
          <span className="item-price">{ `$${price}` }</span>
        </div>
        <p className="item-desc">{ desc }</p>
      </div>
    </article>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Item;
