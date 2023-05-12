import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { setItem, getItem } from './Services/LocalStorage';

function List() {
  const [itemInput, setItemInput] = useState('');
  const savedGroceries = getItem('groceries');
  const [groceryItems, setGroceryItems] = useState(
    savedGroceries.length === 0 ? [{ currentID: 0 }] : savedGroceries,
  );

  const addItem = (e) => {
    e.preventDefault();
    const newItem = { name: itemInput, completed: false, id: groceryItems[0].currentID };
    const currentID = groceryItems[0].currentID + 1;
    setGroceryItems([
      { currentID },
      ...groceryItems.slice(1),
      newItem,
    ]);
    setItemInput('');
    toast.success('Item adicionado!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const checkItem = (index) => {
    setGroceryItems(groceryItems.map((item, i) => {
      if (i !== index + 1) return item;
      return { ...item, completed: !item.completed };
    }));
  };

  const deleteItem = (id) => {
    setGroceryItems((prevItems) => {
      const newItems = prevItems.slice(1).filter((item) => item.id !== id);
      const { currentID } = prevItems[0];
      return [{ currentID }, ...newItems];
    });
    toast.success('Item removido!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  useEffect(() => {
    setItem('groceries', groceryItems);
  }, [groceryItems]);

  return (
    <section>
      <div className="list-container">
        <h1>Lista de Tarefas</h1>
        <form onSubmit={ (e) => addItem(e) }>
          <input
            className="item-input"
            required
            type="text"
            value={ itemInput }
            onChange={ ({ target }) => setItemInput(target.value) }
          />
          <button
            className="submit-btn"
            type="submit"
          >
            Add Item

          </button>
        </form>
        <ul className="items-list">
          {
            groceryItems.slice(1).map((item, index) => {
              const { name, completed, id } = item;
              return (
                <li key={ name }>
                  <label htmlFor={ `item${name}` } className={ completed ? 'done' : '' }>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={ completed }
                      name={ `item${name}` }
                      onClick={ () => checkItem(index) }
                    />
                    {name}
                  </label>
                  <button
                    className="delete-button"
                    onClick={ () => deleteItem(id) }
                  >
                    Delete
                  </button>
                </li>
              );
            })
          }
        </ul>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={ 3000 }
        hideProgressBar
        newestOnTop
        closeOnClick={ false }
        rtl={ false }
        pauseOnFocusLoss
        draggable
        pauseOnHover={ false }
        theme="light"
      />
    </section>
  );
}

export default List;
