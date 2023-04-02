import React, { useState, useEffect } from 'react';
import categories from './Categories';
import data from './data';
import Item from './Item';

function Menu() {
  const [categorie, setCategorie] = useState('all');
  const [items, setItems] = useState([]);

  const handleClick = (categorieName) => {
    setCategorie(categorieName);
  };

  useEffect(() => {
    if (categorie === 'all') {
      setItems(data);
    } else {
      const filteredItems = data.filter((item) => item.category === categorie);
      setItems(filteredItems);
    }
  }, [categorie]);

  return (
    <section className="menu-section">
      <h2 className="menu-section_title">Our Menu</h2>
      <hr />
      <ul className="buttons-list">
        {
          categories.map((categorieName) => (
            <li key={ categorieName } className="buttons-list_item">
              <button
                name={ categorieName }
                onClick={ () => handleClick(categorieName) }
                className={ `category-btn ${
                  categorieName === categorie ? 'active' : ''
                }` }
              >
                {categorieName}
              </button>
            </li>
          ))
        }
      </ul>
      <ul className="items-list">
        {
          items.map((item) => (
            <li key={ item.id } className="items-list_item">
              <Item
                img={ item.img }
                title={ item.title }
                price={ item.price }
                desc={ item.desc }
              />
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default Menu;
