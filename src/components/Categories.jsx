import React from 'react';

export const Categories = React.memo(
  function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
      setActiveItem(index);
      onClickItem(index);
    };

    return (
      < div className="categories" >
        <ul>
          <li
            onClick={() => onSelectItem(null)}
            className={activeItem === null ? 'active' : ''}>
            Все
          </li>
          {items &&
            items.map((item, index) => (
              <li
                key={`${item}_${index}`}
                onClick={() => onSelectItem(index)}
                className={activeItem === index ? 'active' : ''}
              >{item}</li>
            ))}
        </ul>
      </div >

    );
  })